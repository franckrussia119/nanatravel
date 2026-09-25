// Server i18n (no next-intl plugin needed)
import { Hero } from "@/components/hero";
import { RegionStrip } from "@/components/region-strip";
import { FeaturedTours } from "@/components/featured-tours";
import { BeyondCameroon } from "@/components/beyond-cameroon";
import { ServicesFull } from "@/components/services-full";
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

  return (
    <>
      <Hero />
      <RegionStrip />
      <FeaturedTours />
      <BeyondCameroon />
      <ServicesFull locale={locale} />
      <CultureTeaser />
      <FoodTeaser />
      <WhySection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
