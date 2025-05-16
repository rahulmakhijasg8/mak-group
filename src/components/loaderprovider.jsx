"use client";

import { Suspense } from 'react';
import Loading from './loader';

// A simple wrapper component that doesn't use any hooks that need Suspense
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

// The inner component that uses hooks that require Suspense
function ClientNavLoader({ children }) {
  // This will render only on the client side
  // No need for usePathname, useSearchParams, or state management here
  return <LoadingWrapper isVisible={false}>{children}</LoadingWrapper>;
}

// The main export is a Suspense boundary that renders the client component
export default function LoadingProvider({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <ClientNavLoader>{children}</ClientNavLoader>
    </Suspense>
  );
}