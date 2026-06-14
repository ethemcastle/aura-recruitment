import { Container } from "@/components/ui/Container";
import { AuraBackground } from "@/components/ui/AuraBackground";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70">
      <AuraBackground variant="subtle" />
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white"
        aria-hidden
      />
      <Container className="relative">
        <div className="flex flex-col items-center gap-5 py-20 text-center sm:py-24">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 backdrop-blur">
              <span className="size-1.5 rounded-full bg-brand-500" />
              {eyebrow}
            </span>
          )}
          <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-slate-900 text-balance sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 text-pretty">
              {description}
            </p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}

