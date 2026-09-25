// Fixed reference rate used to display approximate RUB pricing.
// Update this periodically to keep displayed rouble prices realistic.
export const USD_TO_RUB_RATE = 95;

// The "max" end of a displayed price range is this multiplier above the
// base price, rounded to a clean number. This reflects that a real trip's
// final cost varies with season, group size, and add-ons.
const PRICE_RANGE_MULTIPLIER = 1.35;

export type CurrencyCode = "USD" | "RUB";

export function formatPrice(usdAmount: number, currency: CurrencyCode, locale: string): string {
  if (currency === "USD") {
    return new Intl.NumberFormat(localeToIntl(locale), {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(usdAmount);
  }

  const rub = toRub(usdAmount);
  return new Intl.NumberFormat(localeToIntl(locale), {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(rub);
}

export function formatPriceRange(usdMin: number, currency: CurrencyCode, locale: string): string {
  const usdMax = Math.round((usdMin * PRICE_RANGE_MULTIPLIER) / 10) * 10;
  const min = formatPrice(usdMin, currency, locale);
  const max = formatPrice(usdMax, currency, locale);
  return `${min} – ${max}`;
}

function toRub(usdAmount: number): number {
  return Math.round((usdAmount * USD_TO_RUB_RATE) / 10) * 10;
}

function localeToIntl(locale: string): string {
  switch (locale) {
    case "ru":
      return "ru-RU";
    case "fr":
      return "fr-FR";
    default:
      return "en-US";
  }
}
