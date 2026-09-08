import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { countryTrips } from "@/data/countries";
import { Photo } from "./photo";
import { PriceRangeTag } from "./price-tag";
import { Reveal } from "./reveal";
import type { Locale } from "@/lib/types";
import { ArrowRight, Clock } from "lucide-react";

export function BeyondCameroon() {
  const t = useTranslations("home");
  const common = useTranslations("common");
  const locale = useLocale() as Locale;

  return (
    <section className="bg-sand py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-accent text-xl italic text-clay">{t("beyondEyebrow")}</p>
          <h2 className="mt-1 max-w-xl font-display text-3xl text-forest">{t("beyondTitle")}</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/65">{t("beyondSubtitle")}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-9 grid gap-6 sm:grid-cols-3">
            {countryTrips.map((trip) => (
              <Link
                key={trip.slug}
                href={{ pathname: "/contact", query: { tour: trip.slug } }}
                className="hover-rise group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-sand-light hover:border-clay/40 hover:shadow-lg hover:shadow-ink/5"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Photo
                    src={trip.image}
                    alt={trip.title[locale]}
                    label={trip.title[locale]}
                    className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-medium uppercase tracking-wide text-clay">
                    {trip.flag} {trip.country[locale]}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg text-forest transition-colors group-hover:text-clay">{trip.title[locale]}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{trip.summary[locale]}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-ink/55">
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {trip.duration} {common("days")}
                    </span>
                  </div>
                  <div className="mt-4 border-t border-ink/10 pt-4">
                    <p className="text-[11px] uppercase tracking-wide text-ink/45">{common("priceRange")}</p>
                    <div className="mt-0.5 flex items-center justify-between gap-2">
                      <PriceRangeTag usd={trip.priceUsd} className="font-display text-base text-forest" />
                      <span className="link-underline flex shrink-0 items-center gap-1 text-xs font-medium text-forest">
                        {t("beyondCta")} <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
