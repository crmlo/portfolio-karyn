import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { type Locale, getDictionary } from "@/lib/i18n";

type ViveoConectPageProps = {
  locale: Locale;
  currentPath: string;
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#6B8FD4]">{children}</p>;
}

type PlaceholderImageProps = {
  name: string;
  aspectClassName?: string;
};

function PlaceholderImage({ name, aspectClassName = "aspect-[16/9]" }: PlaceholderImageProps) {
  return (
    <div className={`relative w-full overflow-hidden rounded-md bg-gray-100 ${aspectClassName}`}>
      <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-xs tracking-[0.04em] text-gray-500">
        {name}
      </p>
    </div>
  );
}

export function ViveoConectPage({ locale, currentPath }: ViveoConectPageProps) {
  const dict = getDictionary(locale);
  const page = dict.workPages.viveoConect;

  return (
    <main className="bg-white text-black">
      <SiteHeader locale={locale} currentPath={currentPath} />

      <div className="mx-auto w-full max-w-7xl py-16 md:py-24">
        <section className="px-6 md:px-10">
          <div className="w-full">
            <SectionLabel>{page.hero.label}</SectionLabel>
            <h1 className="font-playfair mt-4 text-4xl leading-tight md:text-6xl">{page.hero.headline}</h1>
          </div>
          <div className="mt-12">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-zinc-100">
              <Image src="/work/viveo-conect.jpg" alt="Viveo Conect hero" fill className="object-cover" sizes="100vw" />
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-2xl px-6">
            <SectionLabel>{page.challenge.label}</SectionLabel>
            <div className="mt-6 space-y-5 font-sans text-[15px] leading-[1.7]">
              <p>{page.challenge.p1}</p>
              <p>{page.challenge.p2}</p>
              <p>{page.challenge.p3}</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div>
                <SectionLabel>{dict.workPages.common.contributionLabel}</SectionLabel>
              </div>
              <div className="font-sans text-[15px] leading-[1.7]">
                <p>{page.challenge.contribution}</p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-4 gap-4">
              <div>
                <SectionLabel>{page.meta.roleLabel}</SectionLabel>
                <p className="mt-2 font-sans text-[14px] leading-[1.7]">{page.meta.roleValue}</p>
              </div>
              <div>
                <SectionLabel>{page.meta.durationLabel}</SectionLabel>
                <p className="mt-2 font-sans text-[14px] leading-[1.7]">{page.meta.durationValue}</p>
              </div>
              <div>
                <SectionLabel>{page.meta.yearLabel}</SectionLabel>
                <p className="mt-2 font-sans text-[14px] leading-[1.7]">{page.meta.yearValue}</p>
              </div>
              <div>
                <SectionLabel>{page.meta.toolsLabel}</SectionLabel>
                <p className="mt-2 font-sans text-[14px] leading-[1.7]">{page.meta.toolsValue}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 px-6 md:grid-cols-2 md:items-center md:gap-12 md:px-10">
          <div className="space-y-4">
            <h2 className="font-playfair text-4xl leading-tight md:text-5xl">{page.cocreation.title}</h2>
            <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#6B8FD4]">{page.cocreation.subtitle}</p>
            <SectionLabel>{page.cocreation.empathyLabel}</SectionLabel>
            <div className="space-y-5 font-sans text-[15px] leading-[1.7]">
              <p>{page.cocreation.p1}</p>
              <p>{page.cocreation.p2}</p>
            </div>
          </div>
          <PlaceholderImage name="viveo-cocreation" />
        </section>

        <section className="mt-16 px-6 md:px-10">
          <PlaceholderImage name="viveo-meetmel" />
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-2xl px-6">
            <SectionLabel>{page.userJourney.label}</SectionLabel>
          </div>
          <div className="mt-6 px-6 md:px-10">
            <PlaceholderImage name="viveo-userjourney" />
          </div>
        </section>

        <section className="mt-16 px-6 md:px-10">
          <PlaceholderImage name="viveo-needsstatement" />
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-2xl px-6">
            <SectionLabel>{page.mvpFeatures.label}</SectionLabel>
            <ul className="mt-6 space-y-2 font-sans text-[15px] leading-[1.7]">
              {page.mvpFeatures.items.map((item) => (
                <li key={item}>{`· ${item}`}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-2xl px-6">
            <SectionLabel>{page.imagination.label}</SectionLabel>
            <p className="mt-6 font-sans text-[15px] leading-[1.7]">{page.imagination.p1}</p>
          </div>
          <div className="mt-12 px-6 md:px-10">
            <PlaceholderImage name="viveo-imagination" />
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-2xl px-6">
            <SectionLabel>{page.result.label}</SectionLabel>
            <p className="mt-6 text-sm font-semibold tracking-[0.08em] uppercase text-[#6B8FD4]">{page.result.subtitle}</p>
            <ul className="mt-6 space-y-2 font-sans text-[15px] leading-[1.7]">
              {page.result.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-2xl px-6">
            <SectionLabel>{page.wireframes.label}</SectionLabel>
          </div>
          <div className="mt-6 px-6 md:px-10">
            <PlaceholderImage name="viveo-wireframes" />
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-2xl px-6">
            <SectionLabel>{page.styleGuide.label}</SectionLabel>
          </div>
          <div className="mt-6 px-6 md:px-10">
            <PlaceholderImage name="viveo-styleguide" />
          </div>
        </section>

        <section className="mt-16 space-y-12 px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <PlaceholderImage name="viveo-feature1" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block1LeftCaption}</p>
            </div>
            <div className="space-y-4">
              <PlaceholderImage name="viveo-feature2" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block1RightCaption}</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <PlaceholderImage name="viveo-feature3" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block2LeftCaption}</p>
            </div>
            <div className="space-y-4">
              <PlaceholderImage name="viveo-feature4" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block2RightCaption}</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <PlaceholderImage name="viveo-feature5" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block3LeftCaption}</p>
            </div>
            <div className="space-y-4">
              <PlaceholderImage name="viveo-feature6" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block3RightCaption}</p>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 px-6 md:grid-cols-2 md:items-center md:gap-12 md:px-10">
          <div className="space-y-5">
            <h2 className="font-playfair text-4xl leading-tight md:text-5xl">{page.managerView.title}</h2>
            <p className="font-sans text-[15px] leading-[1.7]">{page.managerView.p1}</p>
          </div>
          <PlaceholderImage name="viveo-managerview" />
        </section>
      </div>
    </main>
  );
}
