/* eslint-disable no-restricted-globals */
/**
 * Safe browser API accessors that handle SSR gracefully
 * These prevent "window is not defined" errors during server-side rendering
 * 
 * Note: This file is allowed to access global browser APIs directly
 * as it's the utility that provides safe access to other components
 */

/**
 * Safe window object - undefined during SSR
 * @example
 * if (safeWindow) {
 *   const width = safeWindow.innerWidth;
 * }
 */
export const safeWindow = typeof window !== 'undefined' ? window : undefined;

/**
 * Safe document object - undefined during SSR
 * @example
 * if (safeDocument) {
 *   const element = safeDocument.getElementById('root');
 * }
 */
export const safeDocument = typeof document !== 'undefined' ? document : undefined;

/**
 * Safe localStorage - undefined during SSR
 * @example
 * if (safeLocalStorage) {
 *   const data = safeLocalStorage.getItem('key');
 * }
 */
export const safeLocalStorage = typeof window !== 'undefined' ? window.localStorage : undefined;

/**
 * Safe sessionStorage - undefined during SSR
 * @example
 * if (safeSessionStorage) {
 *   safeSessionStorage.setItem('key', 'value');
 * }
 */
export const safeSessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

/**
 * Safe navigator - undefined during SSR
 * @example
 * if (safeNavigator) {
 *   const userAgent = safeNavigator.userAgent;
 * }
 */
export const safeNavigator = typeof navigator !== 'undefined' ? navigator : undefined;

/**
 * Check if code is running on client-side
 * @returns true if running in browser, false during SSR
 */
export const isClient = () => typeof window !== 'undefined';

/**
 * Check if code is running on server-side
 * @returns true during SSR, false in browser
 */
export const isServer = () => typeof window === 'undefined';

/**
 * Safely get localStorage item with fallback
 * @param key - localStorage key
 * @param fallback - fallback value if key doesn't exist or during SSR
 * @returns stored value or fallback
 */
export const getLocalStorage = <T = string>(key: string, fallback: T): T => {
  if (!safeLocalStorage) return fallback;
  
  try {
    const item = safeLocalStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    return fallback;
  }
};

/**
 * Safely set localStorage item
 * @param key - localStorage key
 * @param value - value to store
 * @returns true if successful, false otherwise
 */
export const setLocalStorage = <T>(key: string, value: T): boolean => {
  if (!safeLocalStorage) return false;
  
  try {
    safeLocalStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
    return false;
  }
};

