import { SiteHeader } from "@/components/site-header";
import { type Locale, getDictionary } from "@/lib/i18n";

type NiloCompassPageProps = {
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

export function NiloCompassPage({ locale, currentPath }: NiloCompassPageProps) {
  const dict = getDictionary(locale);
  const page = dict.workPages.niloCompass;

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
            <PlaceholderImage name="compass-hero" />
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-2xl px-6">
            <SectionLabel>{page.challenge.label}</SectionLabel>
            <div className="mt-6 space-y-5 font-sans text-[15px] leading-[1.7]">
              <p>{page.challenge.p1}</p>
              <p>{page.challenge.p2}</p>
              <p>{page.challenge.p3}</p>
              <p>{page.challenge.p4}</p>
              <p>{page.challenge.p5}</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div>
                <SectionLabel>{dict.workPages.common.contributionLabel}</SectionLabel>
              </div>
              <div className="space-y-5 font-sans text-[15px] leading-[1.7]">
                <p>{page.myRole.p1}</p>
                <p>{page.myRole.p2}</p>
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

        <section className="mt-16">
          <div className="w-full px-6 md:px-10">
            <SectionLabel>{page.process.label}</SectionLabel>
          </div>
          <div className="mt-6 px-6 md:px-10">
            <PlaceholderImage name="compass-process" />
          </div>
        </section>

        <section className="mt-16 grid gap-8 px-6 md:grid-cols-2 md:items-center md:gap-12 md:px-10">
          <PlaceholderImage name="compass-cocreation" />
          <div className="space-y-4">
            <h2 className="font-playfair text-4xl leading-tight md:text-5xl">{page.cocreation.title}</h2>
            <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#6B8FD4]">{page.cocreation.subtitle}</p>
            <div className="space-y-5 font-sans text-[15px] leading-[1.7]">
              <p>{page.cocreation.p1}</p>
              <p>{page.cocreation.p2}</p>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 px-6 md:grid-cols-2 md:items-center md:gap-12 md:px-10">
          <div className="space-y-4">
            <h2 className="font-playfair text-4xl leading-tight md:text-5xl">{page.validation.title}</h2>
            <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#6B8FD4]">{page.validation.subtitle}</p>
            <div className="space-y-5 font-sans text-[15px] leading-[1.7]">
              <p>{page.validation.p1}</p>
              <p>{page.validation.p2}</p>
            </div>
          </div>
          <PlaceholderImage name="compass-validation" />
        </section>

        <section className="mt-16">
          <div className="px-6 md:px-10">
            <PlaceholderImage name="compass-ui-overview" />
          </div>
          <div className="mt-12 grid gap-8 px-6 md:grid-cols-2 md:gap-12 md:px-10">
            <div>
              <SectionLabel>{page.uiDesign.label}</SectionLabel>
            </div>
            <div className="space-y-5 font-sans text-[15px] leading-[1.7]">
              <p>{page.uiDesign.p1}</p>
              <p>{page.uiDesign.p2}</p>
              <p>{page.uiDesign.p3}</p>
              <p>{page.uiDesign.p4}</p>
            </div>
          </div>
        </section>

        <section className="mt-16 space-y-12 px-6 md:px-10">
          <div className="space-y-5">
            <div className="grid gap-6 md:grid-cols-2">
              <PlaceholderImage name="compass-visual-signs-1" aspectClassName="aspect-[4/3]" />
              <PlaceholderImage name="compass-visual-signs-2" aspectClassName="aspect-[4/3]" />
            </div>
            <p className="text-center font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block1Caption}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <PlaceholderImage name="compass-export" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block2LeftCaption}</p>
            </div>
            <div className="space-y-4">
              <PlaceholderImage name="compass-filter" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block2RightCaption}</p>
            </div>
          </div>

          <div className="space-y-5">
            <PlaceholderImage name="compass-bignumbers" />
            <p className="text-center font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block3Caption}</p>
          </div>
        </section>

        <section className="mt-16 grid gap-8 px-6 md:grid-cols-2 md:items-center md:gap-12 md:px-10">
          <div className="space-y-5">
            <h2 className="font-playfair text-4xl leading-tight md:text-5xl">{page.closing.title}</h2>
            <p className="font-sans text-[15px] leading-[1.7]">{page.closing.text}</p>
          </div>
          <PlaceholderImage name="compass-final" />
        </section>
      </div>
    </main>
  );
}
