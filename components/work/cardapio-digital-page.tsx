import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { type Locale, getDictionary } from "@/lib/i18n";

type CardapioDigitalPageProps = {
  locale: Locale;
  currentPath: string;
};

function DetailLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#6B8FD4]">{children}</p>;
}

export function CardapioDigitalPage({ locale, currentPath }: CardapioDigitalPageProps) {
  const dict = getDictionary(locale);
  const page = dict.workPages.cardapioDigital;

  return (
    <main className="bg-white text-black">
      <SiteHeader locale={locale} currentPath={currentPath} />

      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <section className="mt-12">
          <div className="w-full">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#6B8FD4]">{page.hero.label}</p>
            <h1 className="font-playfair mt-4 text-4xl leading-tight md:text-6xl">{page.hero.headline}</h1>
          </div>
        </section>

        <section className="mt-12">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-zinc-100">
            <Image
              src="/work/cardapio-digital.jpg"
              alt={`${page.hero.label} project cover`}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-2xl space-y-6">
            <DetailLabel>{page.challenge.title}</DetailLabel>
            <p className="font-sans text-[15px] leading-[1.7]">{page.challenge.leftParagraph1}</p>
            <p className="font-sans text-[15px] leading-[1.7]">{page.challenge.leftParagraph2}</p>
            <div className="space-y-3">
              <p className="font-sans text-[15px] leading-[1.7]">{page.challenge.leftIntro}</p>
              <ul className="space-y-2 font-sans text-[15px] leading-[1.7]">
                {page.challenge.leftItems.map((item) => (
                  <li key={item}>{`· ${item}`}</li>
                ))}
              </ul>
            </div>
            <p className="font-sans text-[15px] leading-[1.7]">{page.challenge.rightParagraph1}</p>
            <p className="font-sans text-[15px] leading-[1.7]">{page.challenge.rightParagraph2}</p>
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-2xl">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <DetailLabel>{page.meta.roleLabel}</DetailLabel>
                <p className="mt-2 font-sans text-[14px] leading-[1.7] font-semibold">{page.meta.roleValue}</p>
              </div>
              <div>
                <DetailLabel>{page.meta.durationLabel}</DetailLabel>
                <p className="mt-2 font-sans text-[14px] leading-[1.7]">{page.meta.durationValue}</p>
              </div>
              <div>
                <DetailLabel>{page.meta.yearLabel}</DetailLabel>
                <p className="mt-2 font-sans text-[14px] leading-[1.7]">{page.meta.yearValue}</p>
              </div>
              <div>
                <DetailLabel>{page.meta.toolsLabel}</DetailLabel>
                <p className="mt-2 font-sans text-[14px] leading-[1.7]">{page.meta.toolsValue}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="mx-auto w-full max-w-2xl">
            <div className="bg-[#D9E6FD] p-6 md:p-8">
              <DetailLabel>{page.presentation.tag}</DetailLabel>
              <p className="mt-3 font-sans text-[15px] leading-[1.7]">{page.presentation.text}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
