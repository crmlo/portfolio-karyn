"use client";

import { useEffect, useRef, useState } from "react";
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
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const workMenuRef = useRef<HTMLDivElement>(null);
  const dict = getDictionary(locale);
  const homeHref = locale === "en" ? "/" : "/pt-br";
  const languageToggleHref = getLanguageToggleHref(locale, currentPath);
  const languageToggleLabel = locale === "en" ? "🇺🇸 EN" : "🇧🇷 PT";
  const contactHref = locale === "en" ? "/#contact" : "/pt-br#contact";
  const workItems = dict.work.projects;
  const selectedWorkItem = workItems.find((item) => item.href === currentPath);
  const workButtonLabel = selectedWorkItem ? `${dict.nav.work}: ${selectedWorkItem.title}` : dict.nav.work;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (workMenuRef.current && !workMenuRef.current.contains(event.target as Node)) {
        setIsWorkOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-20 w-full bg-white">
      <nav className="mx-auto w-full max-w-7xl px-6 py-6 md:px-10">
        <div className="flex flex-nowrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link href={homeHref} className="font-playfair shrink-0 whitespace-nowrap text-lg font-bold transition-opacity hover:opacity-70">
              {dict.nav.name}
            </Link>
            <div
              ref={workMenuRef}
              className="relative"
            >
              <button
                type="button"
                className="text-sm whitespace-nowrap transition-opacity hover:opacity-70"
                onClick={() => setIsWorkOpen((prev) => !prev)}
                aria-expanded={isWorkOpen}
                aria-haspopup="menu"
              >
                {workButtonLabel} ▾
              </button>
              {isWorkOpen ? (
                <div className="absolute left-0 top-full mt-2 w-64 border border-zinc-200 bg-white p-2 shadow-sm" role="menu">
                  {workItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-3 py-2 text-sm transition-colors hover:bg-[#D9E6FD] ${
                        item.href === currentPath ? "bg-[#D9E6FD] font-semibold text-black" : "text-black"
                      }`}
                      role="menuitem"
                      onClick={() => setIsWorkOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              ) : null}
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
