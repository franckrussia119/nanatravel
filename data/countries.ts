import { CountryTrip } from "@/lib/types";

export const countryTrips: CountryTrip[] = [
  {
    slug: "kenya-safari",
    country: { en: "Kenya", fr: "Kenya", ru: "Кения" },
    flag: "🇰🇪",
    image: "/images/countries/kenya-1.jpg",
    gallery: ["/images/countries/kenya-2.jpg"],
    duration: 6,
    priceUsd: 1690,
    title: {
      en: "Masai Mara Safari",
      fr: "Safari au Masai Mara",
      ru: "Сафари в Масаи-Мара",
    },
    summary: {
      en: "Dawn game drives across the open savanna, in search of elephant herds, big cats, and — in season — the Great Migration.",
      fr: "Safaris à l'aube dans la savane ouverte, à la recherche de troupeaux d'éléphants, de grands félins et, en saison, de la Grande Migration.",
      ru: "Сафари на рассвете по открытой саванне в поисках стад слонов, крупных кошек и, в сезон, Великой миграции.",
    },
    highlights: [
      { en: "Masai Mara National Reserve game drives", fr: "Safaris dans la réserve nationale du Masai Mara", ru: "Сафари в национальном заповеднике Масаи-Мара" },
      { en: "A visit to a Maasai village", fr: "Visite d'un village Maasaï", ru: "Посещение деревни масаи" },
      { en: "Sundowner drinks over the plains", fr: "Verre au coucher du soleil face aux plaines", ru: "Напитки на закате над равниной" },
    ],
  },
  {
    slug: "morocco-desert",
    country: { en: "Morocco", fr: "Maroc", ru: "Марокко" },
    flag: "🇲🇦",
    image: "/images/countries/morocco-1.jpg",
    gallery: ["/images/countries/morocco-2.jpg"],
    duration: 7,
    priceUsd: 1420,
    title: {
      en: "Sahara & the Atlas Mountains",
      fr: "Sahara et montagnes de l'Atlas",
      ru: "Сахара и горы Атлас",
    },
    summary: {
      en: "Camel treks into the dunes, a night under desert stars, and the souks and palaces of Marrakech and Fes.",
      fr: "Randonnées à dos de chameau dans les dunes, une nuit sous les étoiles du désert, et les souks et palais de Marrakech et Fès.",
      ru: "Верблюжьи переходы по дюнам, ночь под звёздами пустыни, а также сук и дворцы Марракеша и Феса.",
    },
    highlights: [
      { en: "Camel trek and overnight desert camp", fr: "Randonnée à dos de chameau et bivouac dans le désert", ru: "Поход на верблюдах и ночёвка в пустынном лагере" },
      { en: "Atlas Mountains and Berber villages", fr: "Montagnes de l'Atlas et villages berbères", ru: "Горы Атлас и берберские деревни" },
      { en: "Marrakech medina and souks", fr: "Médina et souks de Marrakech", ru: "Медина и суки Марракеша" },
    ],
  },
  {
    slug: "zanzibar-beach",
    country: { en: "Tanzania", fr: "Tanzanie", ru: "Танзания" },
    flag: "🇹🇿",
    image: "/images/countries/zanzibar-1.jpg",
    gallery: ["/images/countries/zanzibar-2.jpg"],
    duration: 5,
    priceUsd: 1180,
    title: {
      en: "Zanzibar Beach Escape",
      fr: "Escapade balnéaire à Zanzibar",
      ru: "Пляжный отдых на Занзибаре",
    },
    summary: {
      en: "White sand, turquoise water, and the spice-scented lanes of Stone Town — a slower kind of trip after the road.",
      fr: "Sable blanc, eaux turquoise et ruelles parfumées aux épices de Stone Town — un voyage plus lent, après la route.",
      ru: "Белый песок, бирюзовая вода и пропитанные ароматом специй улочки Стоун-Тауна — более неспешное путешествие после дороги.",
    },
    highlights: [
      { en: "Stone Town's spice markets and old town", fr: "Marchés aux épices et vieille ville de Stone Town", ru: "Пряные рынки и старый город Стоун-Тауна" },
      { en: "Snorkelling over coral reefs", fr: "Snorkeling au-dessus des récifs coralliens", ru: "Снорклинг над коралловыми рифами" },
      { en: "Beachfront lodges on the northern coast", fr: "Lodges en bord de mer sur la côte nord", ru: "Лоджи на побережье на севере острова" },
    ],
  },
];
