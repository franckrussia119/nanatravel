import { setRequestLocale, getTranslations } from "next-intl/server";
import { cultureEntries } from "@/data/culture";
import { Photo } from "@/components/photo";
import type { Locale } from "@/lib/types";
import { regionLabel } from "@/lib/regions";

export default async function CulturePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const t = await getTranslations("culturePage");

  return (
    <div className="theme-culture mx-auto max-w-6xl px-5 py-14">
      <p className="font-accent text-xl italic text-ochre">{t("eyebrow")}</p>
      <h1 className="mt-1 font-display text-4xl text-forest">{t("title")}</h1>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/65">{t("subtitle")}</p>

      <div className="mt-10 space-y-10">
        {cultureEntries.map((entry, i) => (
          <article
            key={entry.slug}
            className={`grid gap-6 rounded-2xl border border-ink/10 bg-sand-light p-2 sm:grid-cols-2 sm:items-center ${
              i % 2 === 1 ? "sm:[direction:rtl]" : ""
            }`}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl [direction:ltr]">
              <Photo src={entry.image} alt={entry.title[l]} label={entry.title[l]} className="h-full w-full" />
            </div>
            <div className="px-4 py-4 [direction:ltr] sm:px-6">
              <span className="text-xs font-medium uppercase tracking-wide text-teal">{regionLabel(entry.region, l)}</span>
              <h2 className="mt-1.5 font-display text-2xl text-forest">{entry.title[l]}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{entry.body[l]}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
