"use client";

import { Suspense, useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Loading from './loader';

// Loading wrapper component
function LoadingWrapper({ children, isVisible }) {
  return (
    <>
      {isVisible && <Loading />}
      <div className={isVisible ? 'hidden' : 'block'}>
        {children}
      </div>
    </>
  );
}

// Client component that handles navigation loading
function ClientNavLoader({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Show loader when route changes
    setIsLoading(true);
    
    // Hide loader after a short delay (simulating page load)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return <LoadingWrapper isVisible={isLoading}>{children}</LoadingWrapper>;
}

// Test component to manually trigger loading
function LoaderTester({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const testLoader = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <>
      <LoadingWrapper isVisible={isLoading}>{children}</LoadingWrapper>
      {/* Test button - remove in production */}
      <button 
        onClick={testLoader}
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded z-50"
        style={{ display: process.env.NODE_ENV === 'development' ? 'block' : 'none' }}
      >
        Test Loader
      </button>
    </>
  );
}

// Main export with Suspense boundary
export default function LoadingProvider({ children, enableTesting = false }) {
  return (
    <Suspense fallback={<Loading />}>
      {enableTesting ? (
        <LoaderTester>{children}</LoaderTester>
      ) : (
        <ClientNavLoader>{children}</ClientNavLoader>
      )}
    </Suspense>
  );
}