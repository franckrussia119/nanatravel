"use client";

import { useCurrency } from "./currency-context";
import { useTranslations } from "next-intl";

export function CurrencyToggle() {
  const { currency, setCurrency } = useCurrency();
  const t = useTranslations("currency");

  return (
    <div className="inline-flex items-center rounded-full border border-ink/15 bg-sand-light p-0.5 text-xs font-medium">
      {(["USD", "RUB"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setCurrency(code)}
          aria-pressed={currency === code}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            currency === code
              ? "bg-forest text-sand-light"
              : "text-ink/60 hover:text-ink"
          }`}
        >
          {t(code === "USD" ? "usd" : "rub")}
        </button>
      ))}
    </div>
  );
}
