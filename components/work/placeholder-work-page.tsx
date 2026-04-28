import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { type Locale, getDictionary } from "@/lib/i18n";

type PlaceholderWorkPageProps = {
  locale: Locale;
  currentPath: string;
  title: string;
};

export function PlaceholderWorkPage({ locale, currentPath, title }: PlaceholderWorkPageProps) {
  const dict = getDictionary(locale);
  const backHref = locale === "en" ? "/" : "/pt-br";

  return (
    <main className="bg-white text-black">
      <SiteHeader locale={locale} currentPath={currentPath} />
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <Link href={backHref} className="mb-10 inline-block text-sm text-[#6B8FD4] transition-opacity hover:opacity-80">
          {`← ${dict.workPages.common.back}`}
        </Link>
        <h1 className="font-playfair text-4xl leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 text-base md:text-lg">{dict.workPages.common.comingSoon}</p>
      </div>
    </main>
  );
}
