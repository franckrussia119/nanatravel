import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import { legalInfo, contactInfo } from "@/data/legal";
import { Logo } from "./logo";

export function SiteFooter() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const contactT = useTranslations("contactPage");

  return (
    <footer className="border-t border-gold-line/25 bg-forest text-sand-light">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo size={32} textClassName="text-xl" light />
            <div className="mt-3 h-px w-12 bg-gold-line/60" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-light/70">{t("tagline")}</p>
          </div>

          <div>
            <h3 className="font-display text-sm italic text-ochre-light/80">{t("explore")}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/tours" className="link-underline hover:text-ochre-light">{nav("tours")}</Link></li>
              <li><Link href="/services" className="link-underline hover:text-ochre-light">{nav("services")}</Link></li>
              <li><Link href="/study-in-russia" className="link-underline hover:text-ochre-light">{nav("studyRussia")}</Link></li>
              <li><Link href="/culture" className="link-underline hover:text-ochre-light">{nav("culture")}</Link></li>
              <li><Link href="/food" className="link-underline hover:text-ochre-light">{nav("food")}</Link></li>
              <li><Link href="/about" className="link-underline hover:text-ochre-light">{nav("about")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm italic text-ochre-light/80">{t("contact")}</h3>
            <ul className="mt-4 space-y-3 text-sm text-sand-light/85">
              <li className="flex items-center gap-2"><Mail size={14} className="text-ochre-light" /> {contactInfo.email}</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-ochre-light" /> {contactInfo.phone}</li>
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0 text-ochre-light" /> {contactT("officeAddress")}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm italic text-ochre-light/80">{t("legalTitle")}</h3>
            <dl className="mt-4 space-y-2 text-xs leading-relaxed text-sand-light/70">
              <div>
                <dt className="text-sand-light/45">{t("legalEntityLabel")}</dt>
                <dd>{legalInfo.entityName}</dd>
              </div>
              <div>
                <dt className="text-sand-light/45">{t("legalStatusLabel")}</dt>
                <dd className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-ochre-light" />
                  {t("legalStatusValue")}
                </dd>
              </div>
              <div>
                <dt className="text-sand-light/45">{t("legalOgrnipLabel")}</dt>
                <dd>{legalInfo.ogrnip} <span className="text-sand-light/40">({legalInfo.ogrnipDate})</span></dd>
              </div>
              <div>
                <dt className="text-sand-light/45">{t("legalInnLabel")}</dt>
                <dd>{legalInfo.inn}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-sand-light/10 pt-6 text-xs text-sand-light/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NanaTravelServices. {t("rights")}</p>
          <p>{t("madeFor")}</p>
        </div>
      </div>
    </footer>
  );
}
