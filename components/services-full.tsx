import { getServerTranslations } from "@/lib/server-i18n";
import { Link } from "@/i18n/navigation";
import { services } from "@/data/services";
import { Reveal } from "@/components/reveal";
import { Photo } from "@/components/photo";
import { IllustrationTile } from "@/components/illustration-tile";
import { PassportIllustration } from "@/components/illustrations/passport-illustration";
import { ServicePriceGrid } from "@/components/service-price-grid";
import { ArrowRight, Check, CreditCard, Users } from "lucide-react";

// Full services content (page header, the 4 service cards, and the 5
// price-grid sections). Rendered on both /services and the home page so
// everything that lives on the services page also shows up on the home page.
export async function ServicesFull({ locale }: { locale: string }) {
  const t = await getServerTranslations(locale, "servicesPage");

  /* ---------- 5 service-price sections data ---------- */
  const accommodationItems = [
    { iconName: "Hotel", name: locale === "ru" ? "Бюджетный отель" : locale === "fr" ? "Hôtel économique" : "Budget hotel", price: "3 000 – 9 000 ₽", note: t("perNight") },
    { iconName: "Star", name: locale === "ru" ? "Отель среднего класса (3–4★)" : locale === "fr" ? "Hôtel moyen (3–4★)" : "Mid-range hotel (3–4★)", price: "9 000 – 23 000 ₽", note: t("perNight") },
    { iconName: "Crown", name: locale === "ru" ? "Отель люкс (5★)" : locale === "fr" ? "Hôtel de luxe (5★)" : "Luxury hotel (5★)", price: "23 000 – 75 000+ ₽", note: t("perNight") },
    { iconName: "Home", name: locale === "ru" ? "Airbnb — частная комната" : locale === "fr" ? "Airbnb — chambre privée" : "Airbnb — private room", price: "3 800 – 12 000 ₽", note: t("perNight") },
    { iconName: "Building2", name: locale === "ru" ? "Airbnb — вся квартира" : locale === "fr" ? "Airbnb — appartement entier" : "Airbnb — entire flat", price: "7 500 – 30 000 ₽", note: t("perNight") },
    { iconName: "TreePine", name: locale === "ru" ? "Airbnb — вилла/дом" : locale === "fr" ? "Airbnb — villa/maison" : "Airbnb — villa/house", price: "30 000 – 150 000 ₽", note: t("perNight") },
    { iconName: "Warehouse", name: locale === "ru" ? "Апартаменты с обслуживанием" : locale === "fr" ? "Appartements avec services" : "Serviced apartments", price: "45 000 – 225 000 ₽", note: t("perMonth") },
    { iconName: "Landmark", name: locale === "ru" ? "Жильё для экспатов" : locale === "fr" ? "Logement pour expatriés" : "Expat housing", price: "75 000 – 450 000 ₽", note: t("perMonth") },
    { iconName: "BedDouble", name: locale === "ru" ? "Хостел (место в общем номере)" : locale === "fr" ? "Auberge (lit en dortoir)" : "Hostel (dorm bed)", price: "750 – 3 000 ₽", note: t("perNight") },
    { iconName: "Tent", name: locale === "ru" ? "Эко-лодж / природный курорт" : locale === "fr" ? "Éco-lodge / station nature" : "Eco-lodge / nature resort", price: "12 000 – 45 000 ₽", note: t("perNight") },
  ];

  const carRentalItems = [
    { iconName: "Car", name: locale === "ru" ? "Эконом-автомобиль" : locale === "fr" ? "Voiture économique" : "Economy car", price: "3 800 – 9 000 ₽", note: t("perDay") },
    { iconName: "Truck", name: locale === "ru" ? "Внедорожник / 4x4" : locale === "fr" ? "SUV / 4x4" : "SUV / 4x4", price: "9 000 – 23 000 ₽", note: t("perDay") },
    { iconName: "Crown", name: locale === "ru" ? "Представительский класс" : locale === "fr" ? "Voiture de prestige" : "Executive car", price: "15 000 – 45 000 ₽", note: t("perDay") },
    { iconName: "User", name: locale === "ru" ? "Авто с водителем" : locale === "fr" ? "Voiture avec chauffeur" : "Car with driver", price: "7 500 – 30 000 ₽", note: t("perDay") },
    { iconName: "Clock", name: locale === "ru" ? "Долгосрочная аренда" : locale === "fr" ? "Location longue durée" : "Long-term rental", price: "45 000 – 150 000 ₽", note: t("perMonth") },
    { iconName: "Bike", name: locale === "ru" ? "Мотоцикл / скутер" : locale === "fr" ? "Moto / scooter" : "Motorcycle / scooter", price: "1 500 – 4 500 ₽", note: t("perDay") },
    { iconName: "Bike", name: locale === "ru" ? "Велосипед" : locale === "fr" ? "Vélo" : "Bicycle", price: "750 – 2 250 ₽", note: t("perDay") },
    { iconName: "Plane", name: locale === "ru" ? "Трансфер из аэропорта" : locale === "fr" ? "Transfert aéroport" : "Airport transfer", price: "3 000 – 15 000 ₽" },
    { iconName: "Clock", name: locale === "ru" ? "Частное такси" : locale === "fr" ? "Taxi privé" : "Private taxi", price: "2 250 – 7 500 ₽", note: t("perHour") },
    { iconName: "User", name: locale === "ru" ? "Персональный водитель" : locale === "fr" ? "Chauffeur personnel" : "Personal driver", price: "75 000 – 225 000 ₽", note: t("perMonth") },
    { iconName: "Fuel", name: locale === "ru" ? "Топливо" : locale === "fr" ? "Carburant" : "Fuel", price: "90 – 120 ₽", note: t("perLiter") },
  ];

  const securityItems = [
    { iconName: "Shield", name: locale === "ru" ? "Личная охрана" : locale === "fr" ? "Garde personnelle" : "Personal guard", price: "22 500 – 75 000 ₽", note: t("perMonth") },
    { iconName: "ShieldCheck", name: locale === "ru" ? "Вооружённая охрана" : locale === "fr" ? "Garde armée" : "Armed guard", price: "75 000 – 225 000 ₽", note: t("perMonth") },
    { iconName: "Lock", name: locale === "ru" ? "Установка системы безопасности" : locale === "fr" ? "Installation système de sécurité" : "Security system installation", price: "30 000 – 150 000 ₽" },
    { iconName: "Eye", name: locale === "ru" ? "Мониторинг 24/7" : locale === "fr" ? "Surveillance 24/7" : "24/7 monitoring", price: "7 500 – 30 000 ₽", note: t("perMonth") },
    { iconName: "Shield", name: locale === "ru" ? "Телохранитель" : locale === "fr" ? "Garde du corps" : "Bodyguard", price: "7 500 – 30 000 ₽", note: t("perDay") },
    { iconName: "ParkingCircle", name: locale === "ru" ? "Охраняемая парковка" : locale === "fr" ? "Parking sécurisé" : "Secure parking", price: "3 000 – 15 000 ₽", note: t("perMonth") },
    { iconName: "AlertTriangle", name: locale === "ru" ? "Консультация по безопасности" : locale === "fr" ? "Consultation sécurité voyage" : "Travel security consultation", price: "7 500 – 45 000 ₽" },
    { iconName: "HeartPulse", name: locale === "ru" ? "Страховка экстренной эвакуации" : locale === "fr" ? "Assurance évacuation d'urgence" : "Emergency evacuation insurance", price: "15 000 – 75 000 ₽", note: t("perYear") },
  ];

  const documentsItems = [
    { iconName: "IdCard", name: locale === "ru" ? "Срочное продление паспорта" : locale === "fr" ? "Renouvellement de passeport urgent" : "Urgent passport renewal", price: "15 000 – 45 000 ₽" },
    { iconName: "FileText", name: locale === "ru" ? "Срочное оформление визы (24–48 ч)" : locale === "fr" ? "Visa urgent (24–48h)" : "Urgent visa (24–48h)", price: "22 500 – 75 000 ₽" },
    { iconName: "Stamp", name: locale === "ru" ? "Легализация документов (апостиль)" : locale === "fr" ? "Légalisation (apostille)" : "Document legalisation (apostille)", price: "7 500 – 30 000 ₽" },
    { iconName: "Send", name: locale === "ru" ? "Курьерская доставка документов" : locale === "fr" ? "Livraison de documents par courrier" : "Document courier delivery", price: "7 500 – 45 000 ₽" },
    { iconName: "Languages", name: locale === "ru" ? "Перевод + нотариальное заверение" : locale === "fr" ? "Traduction + légalisation notariale" : "Translation + notarisation", price: "3 000 – 15 000 ₽", note: t("perDoc") },
    { iconName: "Landmark", name: locale === "ru" ? "Регистрация компании в Камеруне" : locale === "fr" ? "Enregistrement d'entreprise au Cameroun" : "Company registration in Cameroon", price: "30 000 – 150 000 ₽" },
    { iconName: "Briefcase", name: locale === "ru" ? "Оформление разрешения на работу" : locale === "fr" ? "Permis de travail" : "Work permit processing", price: "45 000 – 120 000 ₽" },
    { iconName: "IdCard", name: locale === "ru" ? "Оформление вида на жительство" : locale === "fr" ? "Titre de séjour" : "Residence permit", price: "30 000 – 90 000 ₽" },
    { iconName: "Car", name: locale === "ru" ? "Конвертация ВУ" : locale === "fr" ? "Conversion de permis de conduire" : "Driving licence conversion", price: "7 500 – 22 500 ₽" },
    { iconName: "GraduationCap", name: locale === "ru" ? "Получение академических справок" : locale === "fr" ? "Obtention de certificats académiques" : "Academic transcript retrieval", price: "4 500 – 15 000 ₽" },
  ];

  const tourismItems = [
    { iconName: "Compass", name: locale === "ru" ? "Экскурсия по городу (полдня)" : locale === "fr" ? "Visite de ville (demi-journée)" : "City tour (half day)", price: "4 500 – 15 000 ₽" },
    { iconName: "Map", name: locale === "ru" ? "Экскурсия по городу (полный день)" : locale === "fr" ? "Visite de ville (journée complète)" : "City tour (full day)", price: "7 500 – 30 000 ₽" },
    { iconName: "Binoculars", name: locale === "ru" ? "Сафари (нац. парк Ваза)" : locale === "fr" ? "Safari (Parc national de Waza)" : "Safari (Waza National Park)", price: "15 000 – 75 000 ₽" },
    { iconName: "Palmtree", name: locale === "ru" ? "Пляжный тур (Лимбе / Криби)" : locale === "fr" ? "Tour plage (Limbe / Kribi)" : "Beach tour (Limbe / Kribi)", price: "6 000 – 22 500 ₽" },
    { iconName: "Mountain", name: locale === "ru" ? "Поход на гору Камерун" : locale === "fr" ? "Randonnée Mont Cameroun" : "Mount Cameroon hike", price: "12 000 – 45 000 ₽" },
    { iconName: "Theater", name: locale === "ru" ? "Культурный тур (дворец Фумбан)" : locale === "fr" ? "Tour culturel (palais de Foumban)" : "Cultural tour (Foumban palace)", price: "3 000 – 15 000 ₽" },
    { iconName: "Waves", name: locale === "ru" ? "Приключенческий туризм (рафтинг)" : locale === "fr" ? "Tourisme d'aventure (rafting)" : "Adventure tourism (rafting)", price: "15 000 – 60 000 ₽" },
    { iconName: "Anchor", name: locale === "ru" ? "Речной круиз (Дуала / Криби)" : locale === "fr" ? "Croisière fluviale (Douala / Kribi)" : "River cruise (Douala / Kribi)", price: "7 500 – 30 000 ₽", note: t("perPerson") },
    { iconName: "TreeDeciduous", name: locale === "ru" ? "Треккинг к гориллам (заповедник Джа)" : locale === "fr" ? "Trek gorilles (Réserve du Dja)" : "Gorilla trekking (Dja Reserve)", price: "30 000 – 120 000 ₽" },
    { iconName: "PartyPopper", name: locale === "ru" ? "Тур на культурный фестиваль" : locale === "fr" ? "Tour festival culturel" : "Cultural festival tour", price: "4 500 – 22 500 ₽" },
    { iconName: "Camera", name: locale === "ru" ? "Фотографический тур" : locale === "fr" ? "Tour photographique" : "Photography tour", price: "7 500 – 45 000 ₽" },
    { iconName: "Package", name: locale === "ru" ? "Индивидуальный пакет (7 дней)" : locale === "fr" ? "Forfait individuel (7 jours)" : "Custom package (7 days)", price: "75 000 – 450 000 ₽" },
    { iconName: "Sparkles", name: "VIP-" + (locale === "ru" ? "консьерж" : locale === "fr" ? "concierge" : "concierge"), price: t("fromPrice") + " 150 000 ₽" },
  ];

  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-16">
      {/* --- Payment terms highlight box --- */}
      <Reveal>
        <div className="rounded-2xl border border-ochre/30 bg-ochre/10 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-3">
            <CreditCard size={22} strokeWidth={1.5} className="text-ochre" />
            <h2 className="font-display text-xl text-forest">{t("paymentInfoTitle")}</h2>
          </div>
          <p className="text-sm leading-relaxed text-ink/70">{t("paymentInfoText")}</p>
        </div>
      </Reveal>

      {/* --- Russia assistance description --- */}
      <Reveal>
        <div className="mt-10 rounded-2xl border border-forest/15 bg-forest/5 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-3">
            <Users size={22} strokeWidth={1.5} className="text-forest" />
            <h2 className="font-display text-xl text-forest">{t("russiaServicesTitle")}</h2>
          </div>
          <p className="whitespace-pre-line text-sm leading-relaxed text-ink/70">{t("russiaServicesText")}</p>
        </div>
      </Reveal>

      {/* --- Page header --- */}
      <Reveal>
        <div className="mt-14">
          <p className="font-accent text-xl italic text-ochre">{t("eyebrow")}</p>
          <h1 className="mt-1 max-w-xl font-display text-4xl text-forest sm:text-5xl">{t("title")}</h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink/65">{t("subtitle")}</p>
        </div>
      </Reveal>

      {/* --- Existing 4 service cards --- */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {(services ?? []).map((service: any, i: number) => (
          <Reveal key={service?.slug ?? i} delay={i * 90}>
            <div className="hover-rise group overflow-hidden rounded-2xl border border-ink/10 bg-sand-light hover:border-ochre/40 hover:shadow-xl hover:shadow-ink/5">
              <div className="h-40 overflow-hidden">
                {service?.slug === "visa" ? (
                  <PassportIllustration className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
                ) : service?.image ? (
                  <Photo
                    src={service.image}
                    alt={t(service.titleKey)}
                    label={t(service.titleKey)}
                    className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                ) : (
                  <IllustrationTile icon={service?.icon} label={t(service?.titleKey)} tone={service?.tone} className="h-full w-full" />
                )}
              </div>
              <div className="p-8">
                {service?.icon ? <service.icon size={24} strokeWidth={1.4} className="text-ochre" /> : null}
                <h2 className="mt-4 font-display text-2xl text-forest">{t(service?.titleKey)}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{t(service?.descKey)}</p>
                <ul className="mt-5 space-y-2">
                  {(service?.pointKeys ?? []).map((key: string) => (
                    <li key={key} className="flex items-start gap-2 text-sm text-ink/70">
                      <Check size={15} className="mt-0.5 shrink-0 text-forest" />
                      {t(key as any)}
                    </li>
                  ))}
                </ul>
                <Link
                  href={{ pathname: "/contact", query: { service: service?.slug } }}
                  className="link-underline mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-forest"
                >
                  {t("enquireCta")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ---------- 5 price-grid sections ---------- */}
      <ServicePriceGrid title={t("accommodationTitle")} iconName="BedDouble" items={accommodationItems} />
      <ServicePriceGrid title={t("carRentalTitle")} iconName="Car" items={carRentalItems} />
      <ServicePriceGrid title={t("securityTitle")} iconName="Shield" items={securityItems} />
      <ServicePriceGrid title={t("documentsTitle")} iconName="FileText" items={documentsItems} />
      <ServicePriceGrid title={t("tourismTitle")} iconName="Map" items={tourismItems} />
    </section>
  );
}
