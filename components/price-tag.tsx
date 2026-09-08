"use client";

import { useLocale } from "next-intl";
import { useCurrency } from "./currency-context";
import { formatPrice, formatPriceRange } from "@/lib/currency";

export function PriceTag({ usd, className }: { usd: number; className?: string }) {
  const { currency } = useCurrency();
  const locale = useLocale();
  return <span className={className}>{formatPrice(usd, currency, locale)}</span>;
}

export function PriceRangeTag({ usd, className }: { usd: number; className?: string }) {
  const { currency } = useCurrency();
  const locale = useLocale();
  return <span className={className}>{formatPriceRange(usd, currency, locale)}</span>;
}
