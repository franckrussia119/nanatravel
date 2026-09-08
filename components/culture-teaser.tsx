import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cultureEntries } from "@/data/culture";
import { Photo } from "./photo";
import { Reveal } from "./reveal";
import type { Locale } from "@/lib/types";
import { ArrowRight } from "lucide-react";

export function CultureTeaser() {
  const t = useTranslations("home");
  const common = useTranslations("common");
  const locale = useLocale() as Locale;
  const entries = cultureEntries.slice(0, 3);

  return (
    <section className="bg-forest py-16 text-sand-light">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-accent text-xl italic text-ochre-light">{t("cultureEyebrow")}</p>
              <h2 className="mt-1 max-w-lg font-display text-3xl">{t("cultureTitle")}</h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-sand-light/70">{t("cultureSubtitle")}</p>
            </div>
            <Link href="/culture" className="link-underline flex shrink-0 items-center gap-1.5 text-sm font-medium text-ochre-light hover:text-sand-light">
              {common("viewAll")} <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-9 grid gap-6 sm:grid-cols-3">
            {entries.map((entry) => (
              <Link
                key={entry.slug}
                href="/culture"
                className="hover-rise group overflow-hidden rounded-2xl border border-sand-light/15 hover:border-ochre-light/50"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Photo
                    src={entry.image}
                    alt={entry.title[locale]}
                    label={entry.title[locale]}
                    className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base transition-colors group-hover:text-ochre-light">{entry.title[locale]}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-sand-light/65">{entry.body[locale]}</p>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
