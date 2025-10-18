import { useEffect, useState } from 'react';

/**
 * Hook to check if code is running on client-side
 * Alias for useIsMounted for semantic clarity
 * 
 * @returns boolean - true if running on client, false on server
 * 
 * @example
 * ```tsx
 * const isClient = useIsClient();
 * return isClient ? <ClientComponent /> : <ServerComponent />;
 * ```
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}


