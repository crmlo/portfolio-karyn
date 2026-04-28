import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  company: string;
  imageSrc: string;
  tagline: string;
  href: string;
};

export function ProjectCard({ title, company, imageSrc, tagline, href }: ProjectCardProps) {
  const alt = `${title} — ${company}`;

  return (
    <article className="space-y-3">
      <Link href={href} className="block space-y-3 transition-opacity hover:opacity-90">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex items-start justify-between gap-4 text-sm">
          <p className="font-semibold">{title}</p>
          <p>{company}</p>
        </div>
      </Link>
      <p className="text-[13px] leading-snug text-[#888] md:text-sm">{tagline}</p>
    </article>
  );
}
