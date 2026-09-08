import { setRequestLocale, getTranslations } from "next-intl/server";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactInfo } from "@/data/legal";
import { InquiryForm } from "./inquiry-form";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contactPage");

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="font-accent text-xl italic text-ochre">{t("eyebrow")}</p>
          <h1 className="mt-1 font-display text-4xl text-forest">{t("title")}</h1>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink/65">{t("subtitle")}</p>

          <div className="mt-8">
            <InquiryForm />
          </div>
        </div>

        <div className="h-fit rounded-2xl border border-ink/10 bg-sand p-6">
          <h2 className="font-display text-lg text-forest">{t("directTitle")}</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink/75">
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-forest" /> {contactInfo.email}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-forest" /> {contactInfo.phone}
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-forest" /> {t("officeAddress")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
