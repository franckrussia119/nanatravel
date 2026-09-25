import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { loadMessages, getServerTranslations } from "@/lib/server-i18n";
import { CurrencyProvider } from "@/components/currency-context";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/page-transition";

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getServerTranslations(locale, "hero");
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

  const messages = await loadMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <CurrencyProvider>
        <SiteHeader />
        <main className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
      </CurrencyProvider>
    </NextIntlClientProvider>
  );
}
