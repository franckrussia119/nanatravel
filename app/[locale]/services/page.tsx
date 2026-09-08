import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { services } from "@/data/services";
import { Reveal } from "@/components/reveal";
import { Photo } from "@/components/photo";
import { IllustrationTile } from "@/components/illustration-tile";
import { PassportIllustration } from "@/components/illustrations/passport-illustration";
import { ArrowRight, Check } from "lucide-react";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("servicesPage");

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <p className="font-accent text-xl italic text-ochre">{t("eyebrow")}</p>
        <h1 className="mt-1 max-w-xl font-display text-4xl text-forest sm:text-5xl">{t("title")}</h1>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink/65">{t("subtitle")}</p>
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 90}>
            <div className="hover-rise group overflow-hidden rounded-2xl border border-ink/10 bg-sand-light hover:border-ochre/40 hover:shadow-xl hover:shadow-ink/5">
              <div className="h-40 overflow-hidden">
                {service.slug === "visa" ? (
                  <PassportIllustration className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
                ) : service.image ? (
                  <Photo
                    src={service.image}
                    alt={t(service.titleKey)}
                    label={t(service.titleKey)}
                    className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                ) : (
                  <IllustrationTile icon={service.icon} label={t(service.titleKey)} tone={service.tone} className="h-full w-full" />
                )}
              </div>
              <div className="p-8">
                <service.icon size={24} strokeWidth={1.4} className="text-ochre" />
                <h2 className="mt-4 font-display text-2xl text-forest">{t(service.titleKey)}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{t(service.descKey)}</p>
                <ul className="mt-5 space-y-2">
                  {service.pointKeys.map((key) => (
                    <li key={key} className="flex items-start gap-2 text-sm text-ink/70">
                      <Check size={15} className="mt-0.5 shrink-0 text-forest" />
                      {t(key as "visaPoint1")}
                    </li>
                  ))}
                </ul>
                <Link
                  href={{ pathname: "/contact", query: { service: service.slug } }}
                  className="link-underline mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-forest"
                >
                  {t("enquireCta")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
