import type { LucideIcon } from "lucide-react";
import { FileCheck2, BedDouble, Car, Home } from "lucide-react";

export type ServiceEntry = {
  slug: string;
  icon: LucideIcon;
  titleKey: "visaTitle" | "hotelsTitle" | "carsTitle" | "rentalsTitle";
  descKey: "visaDesc" | "hotelsDesc" | "carsDesc" | "rentalsDesc";
  pointKeys: [string, string, string];
  image?: string;
  tone: "emerald" | "gold" | "burgundy" | "ivory";
};

export const services: ServiceEntry[] = [
  {
    slug: "visa",
    icon: FileCheck2,
    titleKey: "visaTitle",
    descKey: "visaDesc",
    pointKeys: ["visaPoint1", "visaPoint2", "visaPoint3"],
    tone: "burgundy",
  },
  {
    slug: "hotels",
    icon: BedDouble,
    titleKey: "hotelsTitle",
    descKey: "hotelsDesc",
    pointKeys: ["hotelsPoint1", "hotelsPoint2", "hotelsPoint3"],
    image: "/images/services/hotel-1.jpg",
    tone: "gold",
  },
  {
    slug: "cars",
    icon: Car,
    titleKey: "carsTitle",
    descKey: "carsDesc",
    pointKeys: ["carsPoint1", "carsPoint2", "carsPoint3"],
    tone: "emerald",
  },
  {
    slug: "rentals",
    icon: Home,
    titleKey: "rentalsTitle",
    descKey: "rentalsDesc",
    pointKeys: ["rentalsPoint1", "rentalsPoint2", "rentalsPoint3"],
    tone: "ivory",
  },
];
