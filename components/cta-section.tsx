import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function CtaSection() {
  const t = useTranslations("home");

  return (
    <section className="mx-auto max-w-6xl px-5 pb-20">
      <Reveal>
        <div className="relative flex flex-col items-start gap-6 overflow-hidden rounded-[2rem] bg-forest px-8 py-12 text-sand-light sm:flex-row sm:items-center sm:justify-between">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ochre/10" />
          <div className="relative">
            <h2 className="max-w-md font-display text-3xl">{t("ctaTitle")}</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-sand-light/80">{t("ctaSubtitle")}</p>
          </div>
          <Link
            href="/contact"
            className="hover-rise relative flex shrink-0 items-center gap-2 rounded-full bg-ochre px-6 py-3 text-sm font-medium text-sand-light shadow-sm shadow-ochre/30 transition-colors hover:bg-ochre-light"
          >
            {t("ctaButton")} <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
