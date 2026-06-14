"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type ShortlistContextValue = {
  refs: string[];
  has: (ref: string) => boolean;
  toggle: (ref: string) => void;
  clear: () => void;
  count: number;
};

const ShortlistContext = createContext<ShortlistContextValue | null>(null);

export function ShortlistProvider({ children }: { children: React.ReactNode }) {
  const [refs, setRefs] = useState<string[]>([]);

  const has = useCallback((ref: string) => refs.includes(ref), [refs]);

  const toggle = useCallback((ref: string) => {
    setRefs((prev) =>
      prev.includes(ref) ? prev.filter((r) => r !== ref) : [...prev, ref],
    );
  }, []);

  const clear = useCallback(() => setRefs([]), []);

  const value = useMemo<ShortlistContextValue>(
    () => ({ refs, has, toggle, clear, count: refs.length }),
    [refs, has, toggle, clear],
  );

  return (
    <ShortlistContext.Provider value={value}>
      {children}
    </ShortlistContext.Provider>
  );
}

export function useShortlist() {
  const ctx = useContext(ShortlistContext);
  if (!ctx) {
    throw new Error("useShortlist must be used within a ShortlistProvider");
  }
  return ctx;
}
