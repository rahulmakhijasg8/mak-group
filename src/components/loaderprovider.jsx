"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from './loader';

export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Show loading state when route changes
    setIsLoading(true);

    const handleComplete = () => {
      // Set minimum loading time to avoid flicker
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    // If document is already loaded
    if (document.readyState === 'complete') {
      handleComplete();
    } else {
      // Wait for load event
      window.addEventListener('load', handleComplete);
      return () => window.removeEventListener('load', handleComplete);
    }
  }, [pathname, searchParams]); // Re-run when route changes

  return (
    <>
      {isLoading && <Loading />}
      <div className={isLoading ? 'hidden' : 'block'}>
        {children}
      </div>
    </>
  );
}