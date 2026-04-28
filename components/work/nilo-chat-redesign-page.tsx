import { SiteHeader } from "@/components/site-header";
import { type Locale, getDictionary } from "@/lib/i18n";

type NiloChatRedesignPageProps = {
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

export function NiloChatRedesignPage({ locale, currentPath }: NiloChatRedesignPageProps) {
  const dict = getDictionary(locale);
  const page = dict.workPages.niloChatRedesign;

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
            <PlaceholderImage name="chat-redesign-hero" />
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-2xl px-6">
            <SectionLabel>{page.overview.label}</SectionLabel>
            <div className="mt-6 space-y-5 font-sans text-[15px] leading-[1.7]">
              <p>{page.overview.p1}</p>
              <p>{page.overview.p2}</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div>
                <SectionLabel>{dict.workPages.common.contributionLabel}</SectionLabel>
              </div>
              <div className="space-y-5 font-sans text-[15px] leading-[1.7]">
                <p>{page.contribution.p1}</p>
                <p>{page.contribution.p2}</p>
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

        <section className="mt-16 px-6 md:px-10">
          <PlaceholderImage name="chat-redesign-whattheysay" />
        </section>

        <section className="mt-16">
          <div className="w-full px-6 md:px-10">
            <SectionLabel>{page.oldVersion.label}</SectionLabel>
          </div>
          <div className="mt-6 px-6 md:px-10">
            <PlaceholderImage name="chat-redesign-oldversion" />
          </div>
        </section>

        <section className="mt-16 space-y-12 px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <PlaceholderImage name="chat-redesign-feature1" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block1LeftCaption}</p>
            </div>
            <div className="space-y-4">
              <PlaceholderImage name="chat-redesign-notes" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block1RightCaption}</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <PlaceholderImage name="chat-redesign-timer" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block2LeftCaption}</p>
            </div>
            <div className="space-y-4">
              <PlaceholderImage name="chat-redesign-priority" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block2RightCaption}</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <PlaceholderImage name="chat-redesign-audio" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block3LeftCaption}</p>
            </div>
            <div className="space-y-4">
              <PlaceholderImage name="chat-redesign-waiting" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block3RightCaption}</p>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 px-6 md:grid-cols-2 md:items-center md:gap-12 md:px-10">
          <PlaceholderImage name="chat-redesign-final" />
          <div className="space-y-5">
            <h2 className="font-playfair text-4xl leading-tight md:text-5xl">{page.closing.title}</h2>
            <p className="font-sans text-[15px] leading-[1.7]">{page.closing.text}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
