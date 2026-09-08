import { setRequestLocale, getTranslations } from "next-intl/server";
import { Photo } from "@/components/photo";
import { MapPinned, Users2, ReceiptText } from "lucide-react";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("aboutPage");

  const values = [
    { icon: MapPinned, title: t("value1Title"), desc: t("value1Desc") },
    { icon: Users2, title: t("value2Title"), desc: t("value2Desc") },
    { icon: ReceiptText, title: t("value3Title"), desc: t("value3Desc") },
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="font-accent text-xl italic text-ochre">{t("eyebrow")}</p>
          <h1 className="mt-1 font-display text-4xl text-forest">{t("title")}</h1>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/70">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </div>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-2xl">
          <Photo src="/images/about/team.jpg" alt="NanaTravelServices team" label="Our team, Cameroon" className="h-full w-full" />
        </div>
      </div>

      <div className="mt-16 border-t border-ink/10 pt-10">
        <h2 className="font-display text-2xl text-forest">{t("valuesTitle")}</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-3">
          {values.map((v, i) => (
            <div key={i} className="border-t-2 border-forest/20 pt-5">
              <v.icon size={22} className="text-forest" strokeWidth={1.5} />
              <h3 className="mt-3 font-display text-lg text-forest">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
