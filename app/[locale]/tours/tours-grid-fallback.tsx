import { tours } from "@/data/tours";
import { TourCard } from "@/components/tour-card";
import type { Locale } from "@/lib/types";

export function ToursGridFallback({
  locale,
  eyebrow,
  title,
  subtitle,
}: {
  locale: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  void locale;
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="font-accent text-xl italic text-ochre">{eyebrow}</p>
      <h1 className="mt-1 font-display text-4xl text-forest">{title}</h1>
      <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink/65">{subtitle}</p>

      <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </div>
    </div>
  );
}
