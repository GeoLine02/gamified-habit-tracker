"use client";

export function useLocalStorage<T>(key: string) {
  const getItem = (): T | undefined => {
    try {
      if (typeof window === "undefined") return undefined; // ✅ SSR safe
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return undefined;
    }
  };

  const setItem = (value: T) => {
    try {
      if (typeof window === "undefined") return; // ✅ guard
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  const removeItem = () => {
    try {
      if (typeof window === "undefined") return; // ✅ guard
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };

  return { getItem, setItem, removeItem } as const;
}
