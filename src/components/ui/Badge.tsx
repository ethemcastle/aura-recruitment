import { cn } from "@/lib/utils";

type Tone = "brand" | "accent" | "neutral" | "success" | "outline";

const tones: Record<Tone, string> = {
  brand: "bg-brand-100 text-brand-700",
  accent: "bg-cyan-100 text-cyan-700",
  neutral: "bg-slate-100 text-slate-700",
  success: "bg-emerald-100 text-emerald-700",
  outline: "border border-slate-200 bg-white/60 text-slate-600",
};

export function Badge({
  tone = "brand",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

