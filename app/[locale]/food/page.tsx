import { setRequestLocale, getTranslations } from "next-intl/server";
import { foodEntries } from "@/data/food";
import { Photo } from "@/components/photo";
import { IllustrationTile } from "@/components/illustration-tile";
import { CupSoda, Cookie, Soup } from "lucide-react";
import type { Locale } from "@/lib/types";

const NO_PHOTO_ICONS: Record<string, typeof CupSoda> = {
  eru: Soup,
  bissap: CupSoda,
  "puff-puff": Cookie,
};

export default async function FoodPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const t = await getTranslations("foodPage");

  return (
    <div className="theme-food mx-auto max-w-6xl px-5 py-14">
      <p className="font-accent text-xl italic text-clay">{t("eyebrow")}</p>
      <h1 className="mt-1 font-display text-4xl text-forest">{t("title")}</h1>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/65">{t("subtitle")}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {foodEntries.map((entry) => {
          const FallbackIcon = NO_PHOTO_ICONS[entry.slug];
          return (
            <article key={entry.slug} className="overflow-hidden rounded-2xl border border-ink/10 bg-sand-light">
              <div className="aspect-square overflow-hidden">
                {FallbackIcon ? (
                  <IllustrationTile icon={FallbackIcon} label={entry.name[l]} tone="burgundy" className="h-full w-full" />
                ) : (
                  <Photo src={entry.image} alt={entry.name[l]} label={entry.name[l]} className="h-full w-full" />
                )}
              </div>
              <div className="p-5">
                <h2 className="font-display text-lg text-forest">{entry.name[l]}</h2>
                <p className="mt-0.5 text-xs text-clay">{entry.origin[l]}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/65">{entry.body[l]}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
