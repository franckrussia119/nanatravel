import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { tours } from "@/data/tours";
import { TourCard } from "./tour-card";
import { Reveal } from "./reveal";
import { ArrowRight } from "lucide-react";

export function FeaturedTours() {
  const t = useTranslations("home");
  const common = useTranslations("common");
  const featured = tours.filter((tr) =>
    ["kribi-atlantic-coast", "waza-safari-sahel", "dja-rainforest-expedition", "bamileke-highlands-crater-lakes"].includes(tr.slug)
  );

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-accent text-xl italic text-ochre">{t("toursEyebrow")}</p>
            <h2 className="mt-1 max-w-lg font-display text-3xl text-forest">{t("toursTitle")}</h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink/65">{t("toursSubtitle")}</p>
          </div>
          <Link href="/tours" className="link-underline flex shrink-0 items-center gap-1.5 text-sm font-medium text-forest hover:text-ochre">
            {common("viewAll")} <ArrowRight size={14} />
          </Link>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
