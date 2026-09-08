import { setRequestLocale, getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { ToursListClient } from "./tours-list-client";
import { ToursGridFallback } from "./tours-grid-fallback";

export default async function ToursPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "toursPage" });

  return (
    <Suspense
      fallback={
        <ToursGridFallback
          locale={locale}
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />
      }
    >
      <ToursListClient />
    </Suspense>
  );
}
