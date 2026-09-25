"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";

const LABELS: Record<string, string> = {
  en: "EN",
  fr: "FR",
  ru: "RU",
};

const FULL_LABELS: Record<string, string> = {
  en: "English",
  fr: "Français",
  ru: "Русский",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full border border-ink/15 bg-sand-light px-3 py-1.5 text-xs font-medium text-ink/70 transition-colors hover:border-ochre/50 hover:text-forest"
      >
        <Globe size={13} />
        {LABELS[locale]}
        <ChevronDown size={12} strokeWidth={2.5} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-30 mt-2 min-w-[8.5rem] origin-top-right overflow-hidden rounded-xl border border-ink/10 bg-sand-light shadow-lg shadow-ink/10 animate-[fade-up-in_180ms_ease-out]">
          {routing.locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => {
                setOpen(false);
                router.replace(pathname, { locale: l });
              }}
              className={`block w-full px-3.5 py-2.5 text-left text-sm transition-colors ${
                l === locale ? "bg-forest/10 font-medium text-forest" : "text-ink/70 hover:bg-ochre/10 hover:text-forest"
              }`}
            >
              {FULL_LABELS[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
