"use client";

import { useIsMounted } from '@/hooks/useIsMounted';

interface ClientOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Wrapper component that only renders children on client-side
 * Prevents hydration errors for components that use browser-only APIs
 * 
 * @param children - Content to render only on client
 * @param fallback - Optional content to show during SSR (default: null)
 * 
 * @example
 * ```tsx
 * <ClientOnly fallback={<Skeleton />}>
 *   <div>{window.location.href}</div>
 * </ClientOnly>
 * ```
 */
export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const mounted = useIsMounted();

  if (!mounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}


