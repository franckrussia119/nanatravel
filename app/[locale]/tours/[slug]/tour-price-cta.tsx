"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PriceRangeTag } from "@/components/price-tag";
import { CurrencyToggle } from "@/components/currency-toggle";
import { ArrowRight } from "lucide-react";

export function TourPriceCta({
  priceUsd,
  tourTitle,
  tourSlug,
}: {
  priceUsd: number;
  tourTitle: string;
  tourSlug: string;
}) {
  const t = useTranslations("tourDetail");
  const common = useTranslations("common");

  return (
    <div className="h-fit rounded-2xl border border-ink/10 bg-sand p-6 lg:sticky lg:top-24">
      <p className="text-xs text-ink/50">{common("priceRange")}</p>
      <div className="mt-1 flex items-end justify-between gap-3">
        <PriceRangeTag usd={priceUsd} className="font-display text-2xl text-forest" />
        <CurrencyToggle />
      </div>
      <p className="mt-1 text-xs text-ink/50">{common("perPerson")}</p>

      <Link
        href={{ pathname: "/contact", query: { tour: tourSlug } }}
        className="mt-5 flex items-center justify-center gap-2 rounded-full bg-ochre px-5 py-3 text-sm font-medium text-sand-light transition-colors hover:bg-ochre-light"
      >
        {t("enquireAbout")} <ArrowRight size={15} />
      </Link>
      <p className="mt-3 text-xs leading-relaxed text-ink/50">
        {tourTitle} — {common("bookNow")}
      </p>
    </div>
  );
}
