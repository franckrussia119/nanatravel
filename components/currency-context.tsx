"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CurrencyCode } from "@/lib/currency";

type CurrencyContextValue = {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

const STORAGE_KEY = "preferred-currency";

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "USD" || stored === "RUB") {
      setCurrencyState(stored);
    }
  }, []);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    window.localStorage.setItem(STORAGE_KEY, c);
  };

  const value = useMemo(() => ({ currency, setCurrency }), [currency]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
