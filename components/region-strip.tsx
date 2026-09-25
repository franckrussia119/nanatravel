import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "./reveal";

const REGIONS = [
  { key: "coast", value: "coast" as const, color: "border-teal", text: "text-teal" },
  { key: "rainforest", value: "rainforest" as const, color: "border-forest", text: "text-forest" },
  { key: "savanna", value: "savanna" as const, color: "border-ochre", text: "text-ochre" },
  { key: "highlands", value: "highlands" as const, color: "border-clay", text: "text-clay" },
];

export function RegionStrip() {
  const t = useTranslations("regionStrip");

  return (
    <section className="border-y border-gold-line/20 bg-sand">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <Reveal>
          <h2 className="font-display text-xl text-forest">{t("title")}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REGIONS.map((r) => (
              <Link
                key={r.key}
                href={`/tours?region=${r.value}`}
                className={`group border-l-2 ${r.color} pl-4 transition-all duration-300 hover:pl-5 hover:opacity-90`}
              >
                <h3 className={`font-display text-base ${r.text}`}>{t(`${r.key}Name` as "coastName")}</h3>
                <p className="mt-1 text-sm leading-snug text-ink/65">{t(`${r.key}Desc` as "coastDesc")}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
