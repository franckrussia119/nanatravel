import type { Region, LocalizedText } from "./types";

const REGION_LABELS: Record<Region, LocalizedText> = {
  coast: { en: "Coast", fr: "Côte", ru: "Побережье" },
  rainforest: { en: "Rainforest", fr: "Forêt", ru: "Тропический лес" },
  savanna: { en: "Sahel", fr: "Sahel", ru: "Сахель" },
  highlands: { en: "Highlands", fr: "Hauts plateaux", ru: "Нагорье" },
};

export function regionLabel(region: Region, locale: "en" | "fr" | "ru") {
  return REGION_LABELS[region][locale];
}
