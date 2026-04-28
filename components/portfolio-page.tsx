import Image from "next/image";
import { ProjectCard } from "@/components/project-card";
import { SiteHeader } from "@/components/site-header";
import { getDictionary, type Locale } from "@/lib/i18n";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold tracking-[0.08em] uppercase text-[#AEB9DF]">{children}</p>;
}

type PortfolioPageProps = {
  locale: Locale;
};

const companyLogos = [
  { name: "Viveo", src: "/companies/Viveo.svg" },
  { name: "Coca-Cola", src: "/companies/Coca-Cola.svg" },
  { name: "Nilo", src: "/companies/Nilo.svg" },
  { name: "iFood", src: "/companies/iFood.svg" },
  { name: "Raízen", src: "/companies/Raizen.svg" },
  { name: "Comgás", src: "/companies/Comgas.svg" },
  { name: "Shell", src: "/companies/Shell.svg" }
];

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const dict = getDictionary(locale);
  const phoneHref = `tel:${dict.contact.phone.replace(/\D/g, "")}`;
  const currentPath = locale === "en" ? "/" : "/pt-br";

  return (
    <main className="bg-white text-black">
      <SiteHeader locale={locale} currentPath={currentPath} />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <section className="py-20 md:py-28">
          <p className="mb-6 text-sm font-semibold tracking-[0.35em] uppercase text-[#AEB9DF]">{dict.hero.label}</p>
          <h1 className="font-playfair max-w-5xl text-4xl leading-tight md:text-6xl md:leading-tight">
            {dict.hero.headline}
          </h1>
        </section>

        <section className="grid gap-8 py-16 md:grid-cols-12 md:gap-12 md:py-24">
          <div className="md:col-span-4">
            <SectionLabel>{dict.about.label}</SectionLabel>
          </div>
          <div className="space-y-6 text-base leading-relaxed md:col-span-8 md:text-lg">
            <p>{dict.about.paragraph1}</p>
            <p>{dict.about.paragraph2}</p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-12 md:items-center md:gap-12">
            <div className="md:col-span-4">
              <SectionLabel>{dict.companies.label}</SectionLabel>
            </div>
            <div className="md:col-span-8">
              <div className="flex items-center justify-between gap-10 overflow-x-auto whitespace-nowrap">
                {companyLogos.map((logo) => (
                  <div key={logo.name} className="flex h-12 shrink-0 items-center">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={210}
                      height={48}
                      className="h-12 w-auto grayscale"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 py-12 md:grid-cols-12 md:gap-12 md:py-16">
          <div className="md:col-span-4">
            <SectionLabel>{dict.knownFor.label}</SectionLabel>
          </div>
          <div className="md:col-span-8">
            <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed marker:text-zinc-500 md:text-lg">
              {dict.knownFor.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mb-8">
            <SectionLabel>Skills</SectionLabel>
          </div>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {dict.skills.items.map((skill) => (
              <article key={skill.title} className="space-y-4">
                <h2 className="font-playfair text-4xl leading-tight md:text-5xl">{skill.title}</h2>
                <p className="text-base leading-relaxed">{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mb-8">
            <SectionLabel>{dict.work.label}</SectionLabel>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {dict.work.projects.map((project) => (
              <ProjectCard
                key={project.image}
                title={project.title}
                company={project.company}
                imageSrc={project.image}
                tagline={project.tagline}
                href={project.href}
              />
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mb-8">
            <SectionLabel>{dict.testimonials.label}</SectionLabel>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {dict.testimonials.items.map((item) => (
              <article key={item.author} className="flex h-full flex-col justify-between gap-5 bg-zinc-50 p-6">
                <p className="text-sm leading-relaxed text-zinc-800">&ldquo;{item.quote}&rdquo;</p>
                <p className="text-sm font-semibold text-zinc-600">{item.author}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer id="contact" className="mx-auto w-full max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="space-y-8">
          <SectionLabel>{dict.contact.label}</SectionLabel>
          <div className="max-w-3xl">
            <div className="flex items-start gap-6">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                <Image src="/Avatar/Avatar.jpg" alt="Karyn Loreyne" fill className="object-cover" sizes="80px" />
              </div>
              <div className="space-y-5">
                <div className="space-y-1 font-playfair text-lg leading-relaxed md:text-xl">
                  <p>{dict.contact.line1}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <a href={`mailto:${dict.contact.email}`} className="hover:opacity-70">
                      {dict.contact.email}
                    </a>
                  </p>
                  <p>
                    <a href={phoneHref} className="hover:opacity-70">
                      {dict.contact.phone}
                    </a>
                  </p>
                  <p>
                    <a
                      href={dict.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-70"
                    >
                      {dict.contact.linkedin}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
