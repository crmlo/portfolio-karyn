"use client";

import Link from "next/link";
import { type Locale, getDictionary } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
  currentPath: string;
};

function getLanguageToggleHref(locale: Locale, currentPath: string): string {
  if (locale === "en") {
    return currentPath === "/" ? "/pt-br" : `/pt-br${currentPath}`;
  }

  const normalized = currentPath.replace(/^\/pt-br/, "") || "/";
  return normalized;
}

export function SiteHeader({ locale, currentPath }: SiteHeaderProps) {
  const dict = getDictionary(locale);
  const homeHref = locale === "en" ? "/" : "/pt-br";
  const languageToggleHref = getLanguageToggleHref(locale, currentPath);
  const languageToggleLabel = locale === "en" ? "🇺🇸 EN" : "🇧🇷 PT";
  const contactHref = locale === "en" ? "/#contact" : "/pt-br#contact";
  const navItems = [
    { label: dict.nav.ifood, href: locale === "en" ? "/work/cardapio-digital" : "/pt-br/work/cardapio-digital" },
    { label: dict.nav.niloChat, href: locale === "en" ? "/work/nilo-chat" : "/pt-br/work/nilo-chat" },
    { label: dict.nav.niloCompass, href: locale === "en" ? "/work/nilo-compass" : "/pt-br/work/nilo-compass" },
    { label: dict.nav.viveoConect, href: locale === "en" ? "/work/viveo-conect" : "/pt-br/work/viveo-conect" }
  ];

  return (
    <header className="sticky top-0 z-20 w-full bg-white">
      <nav className="mx-auto w-full max-w-7xl px-6 py-6 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-6">
            <Link href={homeHref} className="font-playfair shrink-0 whitespace-nowrap text-lg font-bold transition-opacity hover:opacity-70">
              {dict.nav.name}
            </Link>
            <div className="flex min-w-0 flex-wrap items-center gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm whitespace-nowrap transition-opacity hover:opacity-70 ${
                    currentPath === item.href ? "font-semibold text-[#6B8FD4]" : "text-black"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <a
              href={contactHref}
              className="rounded-full bg-black px-5 py-2 text-sm font-medium whitespace-nowrap text-white transition-opacity hover:opacity-80"
            >
              {dict.nav.contact}
            </a>
            <Link href={languageToggleHref} className="text-sm whitespace-nowrap transition-opacity hover:opacity-70">
              {languageToggleLabel}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
