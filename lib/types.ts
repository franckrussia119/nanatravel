export type Locale = "en" | "fr" | "ru";

export type LocalizedText = {
  en: string;
  fr: string;
  ru: string;
};

export type Region = "coast" | "rainforest" | "savanna" | "highlands";

export type ItineraryDay = {
  day: number;
  title: LocalizedText;
  desc: LocalizedText;
};

export type Tour = {
  slug: string;
  region: Region;
  duration: number;
  groupSize: string;
  pace: LocalizedText;
  priceUsd: number;
  image: string;
  gallery?: string[];
  title: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedText[];
  itinerary: ItineraryDay[];
  included: LocalizedText[];
  notIncluded: LocalizedText[];
};

export type CultureEntry = {
  slug: string;
  region: Region;
  image: string;
  title: LocalizedText;
  body: LocalizedText;
};

export type FoodEntry = {
  slug: string;
  image: string;
  name: LocalizedText;
  origin: LocalizedText;
  body: LocalizedText;
};

export type Testimonial = {
  name: string;
  origin: LocalizedText;
  quote: LocalizedText;
  tourSlug: string;
};

export type CountryTrip = {
  slug: string;
  country: LocalizedText;
  flag: string;
  image: string;
  gallery?: string[];
  duration: number;
  priceUsd: number;
  title: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedText[];
};
