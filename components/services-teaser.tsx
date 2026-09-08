import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { services } from "@/data/services";
import { Reveal } from "./reveal";
import { ArrowRight, GraduationCap } from "lucide-react";

export function ServicesTeaser() {
  const t = useTranslations("servicesPage");
  const nav = useTranslations("nav");
  const studyT = useTranslations("studyRussiaPage");
  const common = useTranslations("common");

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-accent text-xl italic text-ochre">{t("eyebrow")}</p>
            <h2 className="mt-1 max-w-lg font-display text-3xl text-forest">{t("title")}</h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink/65">{t("subtitle")}</p>
          </div>
          <Link href="/services" className="link-underline flex shrink-0 items-center gap-1.5 text-sm font-medium text-forest hover:text-ochre">
            {common("viewAll")} <ArrowRight size={14} />
          </Link>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <Link
              key={service.slug}
              href="/services"
              className="hover-rise group flex flex-col items-start rounded-2xl border border-ink/10 bg-sand-light p-6 hover:border-ochre/40 hover:shadow-lg hover:shadow-ink/5"
            >
              <service.icon size={22} strokeWidth={1.5} className="text-ochre" />
              <h3 className="mt-4 font-display text-base text-forest">{t(service.titleKey)}</h3>
            </Link>
          ))}

          <Link
            href="/study-in-russia"
            className="hover-rise group flex flex-col items-start rounded-2xl border border-ochre/30 bg-forest p-6 text-sand-light hover:border-ochre/60 hover:shadow-lg"
          >
            <GraduationCap size={22} strokeWidth={1.5} className="text-ochre-light" />
            <h3 className="mt-4 font-display text-base">{nav("studyRussia")}</h3>
            <span className="link-underline mt-auto pt-4 text-xs text-ochre-light">{studyT("ctaButton")}</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
