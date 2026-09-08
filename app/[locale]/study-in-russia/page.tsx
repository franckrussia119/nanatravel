import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/reveal";
import { GraduationCap, Users, HeartHandshake, ArrowRight, Check } from "lucide-react";
import { PassportIllustration } from "@/components/illustrations/passport-illustration";

export default async function StudyInRussiaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("studyRussiaPage");

  const whyItems = [
    { icon: GraduationCap, title: t("why1Title"), desc: t("why1Desc") },
    { icon: Users, title: t("why2Title"), desc: t("why2Desc") },
    { icon: HeartHandshake, title: t("why3Title"), desc: t("why3Desc") },
  ];

  const included = [t("included1"), t("included2"), t("included3"), t("included4"), t("included5")];

  const steps = [
    { title: t("step1Title"), desc: t("step1Desc") },
    { title: t("step2Title"), desc: t("step2Desc") },
    { title: t("step3Title"), desc: t("step3Desc") },
    { title: t("step4Title"), desc: t("step4Desc") },
    { title: t("step5Title"), desc: t("step5Desc") },
  ];

  return (
    <div className="theme-russia">
      {/* Hero */}
      <div className="mx-auto max-w-6xl px-5 pb-4 pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="fade-up-in">
            <p className="font-accent text-xl italic text-ochre">{t("eyebrow")}</p>
            <h1 className="mt-2 max-w-lg font-display text-4xl leading-[1.1] text-forest sm:text-5xl">{t("title")}</h1>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink/70">{t("subtitle")}</p>
            <Link
              href="/contact?program=study-in-russia"
              className="hover-rise mt-7 inline-flex items-center gap-2 rounded-full bg-ochre px-6 py-3 text-sm font-medium text-sand-light shadow-sm shadow-ochre/30 transition-colors hover:bg-forest"
            >
              {t("ctaButton")} <ArrowRight size={15} />
            </Link>
          </div>
          <div className="fade-up-in-delay-2 aspect-[4/3] overflow-hidden rounded-2xl">
            <PassportIllustration className="h-full w-full" />
          </div>
        </div>
      </div>

      {/* Why */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <h2 className="font-display text-3xl text-forest">{t("whyTitle")}</h2>
        </Reveal>
        <div className="mt-9 grid gap-8 sm:grid-cols-3">
          {whyItems.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="border-t-2 border-ochre/30 pt-5">
                <item.icon size={22} className="text-forest" strokeWidth={1.5} />
                <h3 className="mt-3 font-display text-lg text-forest">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Included */}
      <section className="bg-forest py-16 text-sand-light">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="font-display text-3xl">{t("includedTitle")}</h2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {included.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex items-start gap-3 rounded-xl border border-sand-light/15 bg-sand-light/5 p-4">
                  <Check size={16} className="mt-0.5 shrink-0 text-ochre-light" />
                  <span className="text-sm leading-relaxed text-sand-light/90">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <h2 className="font-display text-3xl text-forest">{t("processTitle")}</h2>
        </Reveal>
        <ol className="mt-9 space-y-7 border-l border-ochre/30 pl-7">
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 90}>
              <li className="relative">
                <span className="absolute -left-[2.35rem] flex h-7 w-7 items-center justify-center rounded-full bg-ochre text-[12px] font-medium text-sand-light">
                  {i + 1}
                </span>
                <h3 className="font-display text-lg text-forest">{step.title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink/65">{step.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-[2rem] border border-ochre/40 bg-sand-light px-8 py-12 shadow-sm shadow-ink/5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="max-w-md font-display text-3xl text-forest">{t("ctaTitle")}</h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/65">{t("ctaSubtitle")}</p>
            </div>
            <Link
              href="/contact?program=study-in-russia"
              className="hover-rise flex shrink-0 items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-sand-light transition-colors hover:bg-ochre"
            >
              {t("ctaButton")} <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
