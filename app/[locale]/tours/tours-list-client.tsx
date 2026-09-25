"use client";

import { useLocale, useTranslations } from "next-intl";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/tour-card";
import type { Locale, Region } from "@/lib/types";
import { useMemo } from "react";

const REGION_KEYS: { value: Region | "all"; labelKey: string }[] = [
  { value: "all", labelKey: "filterAll" },
  { value: "coast", labelKey: "filterCoast" },
  { value: "rainforest", labelKey: "filterRainforest" },
  { value: "savanna", labelKey: "filterSavanna" },
  { value: "highlands", labelKey: "filterHighlands" },
];

export function ToursListClient() {
  const t = useTranslations("toursPage");
  const locale = useLocale() as Locale;
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeRegion = (searchParams.get("region") as Region | null) ?? "all";
  const query = (searchParams.get("q") ?? "").toLowerCase().trim();

  const filtered = useMemo(() => {
    return tours.filter((tour) => {
      const matchesRegion = activeRegion === "all" || tour.region === activeRegion;
      const matchesQuery =
        !query ||
        tour.title[locale].toLowerCase().includes(query) ||
        tour.summary[locale].toLowerCase().includes(query) ||
        tour.region.includes(query);
      return matchesRegion && matchesQuery;
    });
  }, [activeRegion, query, locale]);

  function setRegion(region: Region | "all") {
    const params = new URLSearchParams(searchParams.toString());
    if (region === "all") params.delete("region");
    else params.set("region", region);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="font-accent text-xl italic text-ochre">{t("eyebrow")}</p>
      <h1 className="mt-1 font-display text-4xl text-forest">{t("title")}</h1>
      <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink/65">{t("subtitle")}</p>

      <div className="mt-7 flex flex-wrap gap-2">
        {REGION_KEYS.map((r) => (
          <button
            key={r.value}
            type="button"
            onClick={() => setRegion(r.value)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              activeRegion === r.value
                ? "border-forest bg-forest text-sand-light"
                : "border-ink/15 text-ink/70 hover:border-ink/30"
            }`}
          >
            {t(r.labelKey as "filterAll")}
          </button>
        ))}
      </div>

      <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-sm text-ink/55">No journeys match that search yet — try another region or keyword.</p>
      )}
    </div>
  );
}
