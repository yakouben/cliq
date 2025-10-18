import { useEffect, useState } from 'react';

/**
 * Hook to check if component is mounted on client-side
 * Prevents hydration errors by ensuring code only runs after mount
 * 
 * @returns boolean - true if component is mounted, false otherwise
 * 
 * @example
 * ```tsx
 * const mounted = useIsMounted();
 * if (!mounted) return <Skeleton />;
 * return <div>{window.location.href}</div>;
 * ```
 */
export function useIsMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}


