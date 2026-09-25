/**
 * Server-side i18n utilities that load messages directly,
 * bypassing next-intl's plugin-based config mechanism.
 * Client-side translations still use next-intl via NextIntlClientProvider.
 */

const messageCache: Record<string, any> = {};

export async function loadMessages(locale: string): Promise<Record<string, any>> {
  if (messageCache[locale]) return messageCache[locale];
  let msgs: any;
  switch (locale) {
    case "ru":
      msgs = (await import("@/messages/ru.json")).default;
      break;
    case "fr":
      msgs = (await import("@/messages/fr.json")).default;
      break;
    default:
      msgs = (await import("@/messages/en.json")).default;
      break;
  }
  messageCache[locale] = msgs;
  return msgs;
}

type TranslatorFn = {
  (key: string, values?: Record<string, any>): string;
};

export function createTranslator(
  messages: Record<string, any>,
  namespace?: string
): TranslatorFn {
  const ns = namespace
    ? namespace.split(".").reduce((obj: any, k: string) => obj?.[k], messages) ?? {}
    : messages;

  return function t(key: string, values?: Record<string, any>): string {
    let text: any = key
      .split(".")
      .reduce((obj: any, k: string) => obj?.[k], ns);
    if (text === undefined || text === null) return key;
    if (typeof text !== "string") return key;
    if (values) {
      Object.entries(values).forEach(([k, v]: [string, any]) => {
        text = (text as string).replace(new RegExp(`\\{${k}\\}`, "g"), String(v ?? ""));
      });
    }
    return text;
  };
}

/**
 * Server-side getTranslations replacement.
 * Usage: const t = await getServerTranslations(locale, "servicesPage");
 */
export async function getServerTranslations(
  locale: string,
  namespace?: string
): Promise<TranslatorFn> {
  const messages = await loadMessages(locale);
  return createTranslator(messages, namespace);
}
