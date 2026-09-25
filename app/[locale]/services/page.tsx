import { ServicesFull } from "@/components/services-full";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <ServicesFull locale={locale} />;
}
