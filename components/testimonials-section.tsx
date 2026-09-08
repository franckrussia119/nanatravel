import { useLocale, useTranslations } from "next-intl";
import { testimonials } from "@/data/testimonials";
import type { Locale } from "@/lib/types";
import { Quote } from "lucide-react";
import { Reveal } from "./reveal";

export function TestimonialsSection() {
  const t = useTranslations("home");
  const locale = useLocale() as Locale;

  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <p className="font-accent text-xl italic text-ochre">{t("testimonialsEyebrow")}</p>
        <h2 className="mt-1 font-display text-3xl text-forest">{t("testimonialsTitle")}</h2>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, i) => (
            <figure key={i} className="hover-rise rounded-2xl border border-ink/10 bg-sand-light p-5 hover:border-ochre/30">
              <Quote size={18} className="text-ochre" strokeWidth={1.5} />
              <blockquote className="mt-3 text-sm leading-relaxed text-ink/80">{item.quote[locale]}</blockquote>
              <figcaption className="mt-4 border-t border-ink/10 pt-3 text-xs text-ink/55">
                <span className="font-medium text-ink/75">{item.name}</span> — {item.origin[locale]}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
