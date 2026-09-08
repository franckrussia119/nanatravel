import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { tours } from "@/data/tours";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { Photo } from "@/components/photo";
import { TourCard } from "@/components/tour-card";
import { ArrowLeft, Check, Clock, Users, X as XIcon } from "lucide-react";
import type { Locale } from "@/lib/types";
import { regionLabel } from "@/lib/regions";
import type { Metadata } from "next";
import { TourPriceCta } from "./tour-price-cta";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => tours.map((tour) => ({ locale, slug: tour.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) return {};
  const l = locale as Locale;
  return {
    title: tour.title[l],
    description: tour.summary[l],
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const tour = tours.find((t) => t.slug === slug);
  if (!tour) notFound();

  const t = await getTranslations("tourDetail");
  const common = await getTranslations("common");
  const tc = await getTranslations("tourCard");

  const related = tours.filter((tr) => tr.region === tour.region && tr.slug !== tour.slug).slice(0, 3);

  return (
    <div>
      <div className="aspect-[16/7] w-full overflow-hidden">
        <Photo src={tour.image} alt={tour.title[l]} label={tour.title[l]} className="h-full w-full" />
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10">
        <Link href="/tours" className="flex items-center gap-1.5 text-sm text-ink/60 hover:text-ink">
          <ArrowLeft size={14} /> {common("backToJourneys")}
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <span className="text-xs font-medium uppercase tracking-wide text-ochre">{regionLabel(tour.region, l)}</span>
            <h1 className="mt-1.5 font-display text-4xl text-forest">{tour.title[l]}</h1>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{tour.summary[l]}</p>

            <div className="mt-5 flex items-center gap-5 text-sm text-ink/60">
              <span className="flex items-center gap-1.5"><Clock size={15} /> {tour.duration} {tc("duration")}</span>
              <span className="flex items-center gap-1.5"><Users size={15} /> {tour.groupSize} {tc("groupSize")}</span>
              <span>{tour.pace[l]}</span>
            </div>

            <h2 className="mt-10 font-display text-2xl text-forest">{t("overview")}</h2>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {tour.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm leading-snug text-ink/75">
                  <Check size={15} className="mt-0.5 shrink-0 text-forest" />
                  {h[l]}
                </li>
              ))}
            </ul>

            {tour.gallery && tour.gallery.length > 0 && (
              <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4">
                {tour.gallery.map((src, i) => (
                  <div key={i} className="hover-rise aspect-square overflow-hidden rounded-xl">
                    <Photo src={src} alt={`${tour.title[l]} ${i + 2}`} label={tour.title[l]} className="h-full w-full" />
                  </div>
                ))}
              </div>
            )}

            <h2 className="mt-10 font-display text-2xl text-forest">{t("itinerary")}</h2>
            <ol className="mt-4 space-y-5 border-l border-ink/15 pl-6">
              {tour.itinerary.map((day) => (
                <li key={day.day} className="relative">
                  <span className="absolute -left-[1.95rem] flex h-6 w-6 items-center justify-center rounded-full bg-forest text-[11px] font-medium text-sand-light">
                    {day.day}
                  </span>
                  <h3 className="font-display text-base text-forest">{day.title[l]}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">{day.desc[l]}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-lg text-forest">{t("included")}</h3>
                <ul className="mt-3 space-y-2">
                  {tour.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink/70">
                      <Check size={14} className="mt-0.5 shrink-0 text-forest" /> {item[l]}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg text-forest">{t("notIncluded")}</h3>
                <ul className="mt-3 space-y-2">
                  {tour.notIncluded.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink/60">
                      <XIcon size={14} className="mt-0.5 shrink-0 text-ink/40" /> {item[l]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <TourPriceCta priceUsd={tour.priceUsd} tourTitle={tour.title[l]} tourSlug={tour.slug} />
        </div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-ink/10 pt-10">
            <h2 className="font-display text-2xl text-forest">{t("otherJourneys")}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <TourCard key={r.slug} tour={r} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
