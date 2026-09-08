import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { foodEntries } from "@/data/food";
import { Photo } from "./photo";
import { Reveal } from "./reveal";
import type { Locale } from "@/lib/types";
import { ArrowRight } from "lucide-react";

export function FoodTeaser() {
  const t = useTranslations("home");
  const common = useTranslations("common");
  const locale = useLocale() as Locale;
  const entries = foodEntries.slice(0, 5);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-accent text-xl italic text-clay">{t("foodEyebrow")}</p>
            <h2 className="mt-1 max-w-lg font-display text-3xl text-forest">{t("foodTitle")}</h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink/65">{t("foodSubtitle")}</p>
          </div>
          <Link href="/food" className="link-underline flex shrink-0 items-center gap-1.5 text-sm font-medium text-forest hover:text-ochre">
            {common("viewAll")} <ArrowRight size={14} />
          </Link>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-9 flex gap-5 overflow-x-auto pb-3">
          {entries.map((entry) => (
            <Link
              key={entry.slug}
              href="/food"
              className="hover-rise group w-52 shrink-0 overflow-hidden rounded-2xl border border-ink/10 hover:border-ochre/40"
            >
              <div className="aspect-square overflow-hidden">
                <Photo
                  src={entry.image}
                  alt={entry.name[locale]}
                  label={entry.name[locale]}
                  className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-base text-forest transition-colors group-hover:text-ochre">{entry.name[locale]}</h3>
                <p className="mt-1 text-xs text-ink/55">{entry.origin[locale]}</p>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
