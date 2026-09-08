import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { CurrencyProvider } from "@/components/currency-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/page-transition";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  const title = `NanaTravelServices — ${t("title")}`;
  const description = t("subtitle");
  return {
    title: {
      default: title,
      template: "%s — NanaTravelServices",
    },
    description,
    openGraph: {
      title,
      description,
      siteName: "NanaTravelServices",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider>
          <CurrencyProvider>
            <SiteHeader />
            <main className="min-h-screen">
              <PageTransition>{children}</PageTransition>
            </main>
            <SiteFooter />
          </CurrencyProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
