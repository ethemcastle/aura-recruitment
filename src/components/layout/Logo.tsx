import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex size-9 items-center justify-center">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-500 via-fuchsia-500 to-cyan-400" />
        <span className="absolute inset-[3px] rounded-[9px] bg-white/15" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative size-5 text-white"
          aria-hidden
        >
          <path
            d="M12 3l2.6 5.9L21 11l-6.4 2.1L12 19l-2.6-5.9L3 11l6.4-2.1L12 3z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span
        className={cn(
          "font-display text-lg font-bold tracking-tight",
          tone === "dark" ? "text-slate-900" : "text-white",
        )}
      >
        {siteConfig.shortName}
        <span className="text-brand-500">.</span>
      </span>
    </span>
  );
}

