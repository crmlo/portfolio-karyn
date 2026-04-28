import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { type Locale, getDictionary } from "@/lib/i18n";

type NiloChatPageProps = {
  locale: Locale;
  currentPath: string;
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#6B8FD4]">{children}</p>;
}

function PhaseLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6B8FD4]">{children}</p>;
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

export function NiloChatPage({ locale, currentPath }: NiloChatPageProps) {
  const dict = getDictionary(locale);
  const page = dict.workPages.niloChat;

  return (
    <main className="bg-white text-black">
      <SiteHeader locale={locale} currentPath={currentPath} />

      <div className="mx-auto w-full max-w-7xl py-16 md:py-24">
        <section className="px-6 md:px-10">
          <div className="w-full">
            <SectionLabel>{page.hero.label}</SectionLabel>
            <h1 className="font-playfair mt-4 text-4xl leading-tight md:text-6xl">{page.hero.headline}</h1>
            <p className="mt-5 text-sm font-semibold tracking-[0.08em] uppercase text-[#6B8FD4]">{page.hero.company}</p>
          </div>
          <div className="mt-12">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-zinc-100">
              <Image src="/work/nilo-chat-ai.jpg" alt="Nilo Chat hero" fill className="object-cover" sizes="100vw" />
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-2xl px-6">
            <PhaseLabel>{page.phase1.label}</PhaseLabel>
            <div className="mt-6">
              <SectionLabel>{page.phase1.overviewLabel}</SectionLabel>
            </div>
            <div className="mt-6 space-y-5 font-sans text-[15px] leading-[1.7]">
              <p>{page.phase1.p1}</p>
              <p>{page.phase1.p2}</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div>
                <SectionLabel>{dict.workPages.common.contributionLabel}</SectionLabel>
              </div>
              <div className="space-y-5 font-sans text-[15px] leading-[1.7]">
                <p>{page.phase1.contributionP1}</p>
                <p>{page.phase1.contributionP2}</p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-4 gap-4">
              <div>
                <SectionLabel>{page.phase1.meta.roleLabel}</SectionLabel>
                <p className="mt-2 font-sans text-[14px] leading-[1.7]">{page.phase1.meta.roleValue}</p>
              </div>
              <div>
                <SectionLabel>{page.phase1.meta.durationLabel}</SectionLabel>
                <p className="mt-2 font-sans text-[14px] leading-[1.7]">{page.phase1.meta.durationValue}</p>
              </div>
              <div>
                <SectionLabel>{page.phase1.meta.yearLabel}</SectionLabel>
                <p className="mt-2 font-sans text-[14px] leading-[1.7]">{page.phase1.meta.yearValue}</p>
              </div>
              <div>
                <SectionLabel>{page.phase1.meta.toolsLabel}</SectionLabel>
                <p className="mt-2 font-sans text-[14px] leading-[1.7]">{page.phase1.meta.toolsValue}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 px-6 md:px-10">
          <PlaceholderImage name="nilo-chat-whattheysay" />
        </section>

        <section className="mt-16">
          <div className="w-full px-6 md:px-10">
            <SectionLabel>{page.oldVersion.label}</SectionLabel>
          </div>
          <div className="mt-6 px-6 md:px-10">
            <PlaceholderImage name="nilo-chat-oldversion" />
          </div>
        </section>

        <section className="mt-16 space-y-12 px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <PlaceholderImage name="nilo-chat-feature1" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block1LeftCaption}</p>
            </div>
            <div className="space-y-4">
              <PlaceholderImage name="nilo-chat-notes" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block1RightCaption}</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <PlaceholderImage name="nilo-chat-timer" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block2LeftCaption}</p>
            </div>
            <div className="space-y-4">
              <PlaceholderImage name="nilo-chat-priority" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block2RightCaption}</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <PlaceholderImage name="nilo-chat-audio" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block3LeftCaption}</p>
            </div>
            <div className="space-y-4">
              <PlaceholderImage name="nilo-chat-waiting" aspectClassName="aspect-[4/3]" />
              <p className="font-sans text-[14px] leading-[1.7] text-zinc-700">{page.features.block3RightCaption}</p>
            </div>
          </div>
        </section>

        <section className="mt-16 px-6 md:px-10">
          <div className="rounded-md bg-zinc-50 px-6 py-10 text-center md:px-10 md:py-14">
            <SectionLabel>{page.divider.label}</SectionLabel>
            <p className="font-playfair mx-auto mt-4 max-w-3xl text-2xl leading-relaxed md:text-3xl">{page.divider.text}</p>
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-2xl px-6">
            <PhaseLabel>{page.phase2.label}</PhaseLabel>
            <div className="mt-6">
              <SectionLabel>{page.phase2.overviewLabel}</SectionLabel>
            </div>
            <div className="mt-6 space-y-5 font-sans text-[15px] leading-[1.7]">
              <p>{page.phase2.p1}</p>
              <p>{page.phase2.p2}</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div>
                <SectionLabel>{dict.workPages.common.contributionLabel}</SectionLabel>
              </div>
              <div className="space-y-5 font-sans text-[15px] leading-[1.7]">
                <p>{page.phase2.contributionText}</p>
                <ul className="space-y-2">
                  {page.phase2.contributionItems.map((item) => (
                    <li key={item}>{`· ${item}`}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-4 gap-4">
              <div>
                <SectionLabel>{page.phase2.meta.roleLabel}</SectionLabel>
                <p className="mt-2 font-sans text-[14px] leading-[1.7]">{page.phase2.meta.roleValue}</p>
              </div>
              <div>
                <SectionLabel>{page.phase2.meta.durationLabel}</SectionLabel>
                <p className="mt-2 font-sans text-[14px] leading-[1.7]">{page.phase2.meta.durationValue}</p>
              </div>
              <div>
                <SectionLabel>{page.phase2.meta.yearLabel}</SectionLabel>
                <p className="mt-2 font-sans text-[14px] leading-[1.7]">{page.phase2.meta.yearValue}</p>
              </div>
              <div>
                <SectionLabel>{page.phase2.meta.toolsLabel}</SectionLabel>
                <p className="mt-2 font-sans text-[14px] leading-[1.7]">{page.phase2.meta.toolsValue}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-2xl px-6">
            <SectionLabel>{page.impact.label}</SectionLabel>
            <div className="mt-6 space-y-5 font-sans text-[15px] leading-[1.7]">
              <p>{page.impact.p1}</p>
              <p>{page.impact.p2}</p>
            </div>
            <div className="mt-8 rounded-md bg-[#D9E6FD] p-6 md:p-8">
              <p className="font-sans text-sm font-semibold">{page.impact.mediaLabel}</p>
              <p className="mt-2 font-sans text-[15px] leading-[1.7]">{page.impact.mediaText}</p>
            </div>
          </div>
          <div className="mt-12 px-6 md:px-10">
            <PlaceholderImage name="nilo-chat-media" />
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-2xl px-6">
            <SectionLabel>{page.interfaceOverview.label}</SectionLabel>
          </div>
          <div className="mt-6 px-6 md:px-10">
            <PlaceholderImage name="nilo-chat-interface" />
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto w-full max-w-2xl px-6">
            <SectionLabel>{page.exceptions.label}</SectionLabel>
            <p className="mt-6 font-sans text-[15px] leading-[1.7]">{page.exceptions.p1}</p>
          </div>
          <div className="mt-12 px-6 md:px-10">
            <PlaceholderImage name="nilo-chat-exceptions" />
          </div>
        </section>

        <section className="mt-16 grid gap-8 px-6 md:grid-cols-2 md:items-center md:gap-12 md:px-10">
          <div className="space-y-5">
            <h2 className="font-playfair text-4xl leading-tight md:text-5xl">{page.closing.title}</h2>
            <p className="font-sans text-[15px] leading-[1.7]">{page.closing.text}</p>
          </div>
          <PlaceholderImage name="nilo-chat-final" />
        </section>
      </div>
    </main>
  );
}
