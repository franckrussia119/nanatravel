import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/hero";
import { RegionStrip } from "@/components/region-strip";
import { FeaturedTours } from "@/components/featured-tours";
import { BeyondCameroon } from "@/components/beyond-cameroon";
import { ServicesTeaser } from "@/components/services-teaser";
import { CultureTeaser } from "@/components/culture-teaser";
import { FoodTeaser } from "@/components/food-teaser";
import { WhySection } from "@/components/why-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaSection } from "@/components/cta-section";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <RegionStrip />
      <FeaturedTours />
      <BeyondCameroon />
      <ServicesTeaser />
      <CultureTeaser />
      <FoodTeaser />
      <WhySection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
