"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "./language-switcher";
import { CurrencyToggle } from "./currency-toggle";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

export function SiteHeader() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: t("home") },
    { href: "/tours", label: t("tours") },
    { href: "/services", label: t("services") },
    { href: "/study-in-russia", label: t("studyRussia") },
    { href: "/about", label: t("about") },
  ];

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-500 ${
        scrolled
          ? "border-gold-line/25 bg-sand-light/95 backdrop-blur-md shadow-sm shadow-ink/5"
          : "border-transparent bg-sand-light/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="shrink-0">
          <Logo size={32} textClassName="text-xl" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`link-underline text-[13.5px] tracking-wide ${
                  active ? "font-medium text-forest" : "text-ink/70 hover:text-forest"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CurrencyToggle />
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="hover-rise rounded-full bg-ochre px-5 py-2.5 text-sm font-medium text-sand-light shadow-sm shadow-ochre/30 transition-colors hover:bg-forest"
          >
            {t("contact")}
          </Link>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-full border border-ink/15 p-2 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gold-line/20 bg-sand-light px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-3.5">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[15px] text-ink/80">
                {l.label}
              </Link>
            ))}
            <Link href="/culture" onClick={() => setOpen(false)} className="text-[15px] text-ink/80">
              {t("culture")}
            </Link>
            <Link href="/food" onClick={() => setOpen(false)} className="text-[15px] text-ink/80">
              {t("food")}
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 w-fit rounded-full bg-ochre px-5 py-2.5 text-sm font-medium text-sand-light"
            >
              {t("contact")}
            </Link>
          </nav>
          <div className="mt-5 flex items-center gap-3">
            <CurrencyToggle />
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
