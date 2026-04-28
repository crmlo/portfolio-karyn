type ProjectImagePlaceholderProps = {
  title: string;
};

export function ProjectImagePlaceholder({ title }: ProjectImagePlaceholderProps) {
  return (
    <div className="aspect-[16/10] w-full bg-zinc-200 flex items-center justify-center">
      <span className="text-xs tracking-[0.2em] uppercase text-zinc-600">{title}</span>
    </div>
  );
}

type CompanyLogoPlaceholderProps = {
  name: string;
};

export function CompanyLogoPlaceholder({ name }: CompanyLogoPlaceholderProps) {
  return (
    <div className="h-12 min-w-[110px] px-4 bg-zinc-200 flex items-center justify-center">
      <span className="text-xs tracking-[0.12em] uppercase text-zinc-700 whitespace-nowrap">{name}</span>
    </div>
  );
}
