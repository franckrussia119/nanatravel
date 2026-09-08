import { useTranslations } from "next-intl";
import { Compass, Users2, Wallet } from "lucide-react";
import { Reveal } from "./reveal";

export function WhySection() {
  const t = useTranslations("home");

  const items = [
    { icon: Compass, title: t("why1Title"), desc: t("why1Desc") },
    { icon: Users2, title: t("why2Title"), desc: t("why2Desc") },
    { icon: Wallet, title: t("why3Title"), desc: t("why3Desc") },
  ];

  return (
    <section className="bg-sand py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-accent text-xl italic text-ochre">{t("whyEyebrow")}</p>
          <h2 className="mt-1 max-w-lg font-display text-3xl text-forest">{t("whyTitle")}</h2>
        </Reveal>

        <div className="mt-9 grid gap-8 sm:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 110}>
              <div className="border-t-2 border-ochre/30 pt-5">
                <item.icon size={22} className="text-forest" strokeWidth={1.5} />
                <h3 className="mt-3 font-display text-lg text-forest">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
