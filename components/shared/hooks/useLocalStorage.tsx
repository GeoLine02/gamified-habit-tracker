import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        setValue(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Error reading localStorage key “" + key + "”:", error);
    }
  }, [key]);

  // custom setter that also updates localStorage
  const setAndStore = (newValue: T) => {
    try {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error("Error setting localStorage key “" + key + "”:", error);
    }
  };

  return [value, setAndStore] as const;
}
