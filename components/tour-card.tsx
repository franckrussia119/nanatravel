"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Photo } from "./photo";
import { PriceRangeTag } from "./price-tag";
import { Clock, Users } from "lucide-react";
import type { Tour, Locale } from "@/lib/types";
import { regionLabel } from "@/lib/regions";

const REGION_TEXT: Record<Tour["region"], string> = {
  coast: "text-teal",
  rainforest: "text-forest",
  savanna: "text-ochre",
  highlands: "text-clay",
};

export function TourCard({ tour }: { tour: Tour }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("common");
  const tc = useTranslations("tourCard");

  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="hover-rise group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-sand-light transition-shadow hover:border-ochre/40 hover:shadow-xl hover:shadow-ink/5"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <Photo
          src={tour.image}
          alt={tour.title[locale]}
          label={tour.title[locale]}
          className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className={`text-xs font-medium uppercase tracking-wide ${REGION_TEXT[tour.region]}`}>
          {regionLabel(tour.region, locale)}
        </span>
        <h3 className="mt-1.5 font-display text-lg text-forest transition-colors group-hover:text-ochre">{tour.title[locale]}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{tour.summary[locale]}</p>

        <div className="mt-4 flex items-center gap-4 text-xs text-ink/55">
          <span className="flex items-center gap-1">
            <Clock size={13} /> {tour.duration} {tc("duration")}
          </span>
          <span className="flex items-center gap-1">
            <Users size={13} /> {tour.groupSize}
          </span>
        </div>

        <div className="mt-4 border-t border-ink/10 pt-4">
          <p className="text-[11px] uppercase tracking-wide text-ink/45">{t("priceRange")}</p>
          <PriceRangeTag usd={tour.priceUsd} className="font-display text-base text-forest" />
        </div>
      </div>
    </Link>
  );
}
