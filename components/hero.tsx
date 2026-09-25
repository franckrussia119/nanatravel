"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ImageSlider } from "./image-slider";
import { CountUp } from "./count-up";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "@/i18n/navigation";

const BG_IMAGES = [
  "/images/hero/hero-bg-1.jpg",
  "/images/hero/hero-bg-2.jpg",
  "/images/hero/hero-bg-3.jpg",
  "/images/hero/hero-bg-4.jpg",
  "/images/hero/hero-bg-5.jpg",
];
const BG_LABELS = ["Kribi coast", "Waza elephants", "Western highlands", "Yaoundé", "Rainforest falls"];

const WILD_IMAGES = ["/images/hero/wild/hero-wild-1.jpg", "/images/hero/wild/hero-wild-2.jpg", "/images/hero/wild/hero-wild-3.jpg"];
const WILD_LABELS = ["Mandrill", "Macaques", "Limbe wildlife"];

const CULTURE_IMAGES = [
  "/images/hero/culture-slider/hero-culture-1.jpg",
  "/images/hero/culture-slider/hero-culture-2.jpg",
  "/images/hero/culture-slider/hero-culture-3.jpg",
];
const CULTURE_LABELS = ["Yaoundé", "City life", "Sahel herder"];

export function Hero() {
  const t = useTranslations("hero");
  const router = useRouter();
  const [query, setQuery] = useState("");

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    router.push(query.trim() ? `/tours?q=${encodeURIComponent(query.trim())}` : "/tours");
  }

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <ImageSlider images={BG_IMAGES} labels={BG_LABELS} overlay interval={5000} className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/70" />

      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-6xl items-center px-5 py-16 sm:min-h-[680px] sm:py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="fade-up-in font-accent text-2xl italic text-ochre-light">{t("eyebrow")}</p>
            <h1 className="fade-up-in fade-up-in-delay-1 mt-3 max-w-xl font-display text-[2.75rem] font-medium leading-[1.05] tracking-tight text-sand-light sm:text-6xl">
              {t("title")}
            </h1>
            <p className="fade-up-in fade-up-in-delay-2 mt-5 max-w-md text-[15px] leading-relaxed text-sand-light/85">{t("subtitle")}</p>

            <form onSubmit={onSearch} className="fade-up-in fade-up-in-delay-3 mt-7 flex max-w-md items-stretch overflow-hidden rounded-full border border-sand-light/25 bg-sand-light/95 shadow-lg shadow-ink/20 focus-within:border-ochre/60">
              <label htmlFor="hero-search" className="sr-only">{t("searchLabel")}</label>
              <input
                id="hero-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="w-full bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/40"
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 whitespace-nowrap bg-forest px-4 py-3 text-sm font-medium text-sand-light transition-colors hover:bg-ochre"
              >
                <Search size={15} />
                <span className="hidden sm:inline">{t("searchButton")}</span>
              </button>
            </form>

            <div className="fade-up-in fade-up-in-delay-3 mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/tours"
                className="hover-rise inline-flex items-center gap-1.5 rounded-full bg-ochre px-5 py-2.5 text-sm font-medium text-sand-light shadow-sm shadow-ink/20 transition-colors hover:bg-ochre-light"
              >
                {t("ctaPrimary")}
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="hover-rise inline-flex items-center gap-1.5 rounded-full border border-sand-light/40 px-5 py-2.5 text-sm font-medium text-sand-light transition-colors hover:border-sand-light hover:bg-sand-light/10"
              >
                {t("ctaSecondary")}
              </Link>
            </div>

            <dl className="fade-up-in fade-up-in-delay-4 mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-sand-light/25 pt-6">
              <div>
                <dt className="font-display text-2xl text-sand-light">
                  <CountUp end={10} suffix="+" />
                </dt>
                <dd className="text-xs leading-snug text-sand-light/70">{t("statRegions")}</dd>
              </div>
              <div>
                <dt className="font-display text-2xl text-sand-light">
                  <CountUp end={250} suffix="+" />
                </dt>
                <dd className="text-xs leading-snug text-sand-light/70">{t("statLanguages")}</dd>
              </div>
              <div>
                <dt className="font-display text-2xl text-sand-light">
                  <CountUp end={30} suffix="+" />
                </dt>
                <dd className="text-xs leading-snug text-sand-light/70">{t("statGuides")}</dd>
              </div>
            </dl>
          </div>

          <div className="relative hidden sm:block">
            <div className="fade-up-in-delay-1 ambient-float aspect-[4/5] w-full overflow-hidden rounded-[2rem] border-2 border-sand-light/30 shadow-2xl shadow-ink/40">
              <ImageSlider images={WILD_IMAGES} labels={WILD_LABELS} className="h-full w-full" interval={4000} />
            </div>
            <div className="fade-up-in-delay-3 ambient-float-delay absolute -bottom-8 -left-10 aspect-[5/4] w-56 overflow-hidden rounded-2xl border-4 border-sand-light shadow-xl shadow-ink/30">
              <ImageSlider images={CULTURE_IMAGES} labels={CULTURE_LABELS} className="h-full w-full" interval={4600} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
