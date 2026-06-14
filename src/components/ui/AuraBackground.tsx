import { cn } from "@/lib/utils";

/**
 * Decorative, layered "aura" glow used behind hero and feature sections.
 * Purely presentational and hidden from assistive tech.
 */
export function AuraBackground({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "subtle";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "aura-blob left-[8%] top-[-6%] size-[420px] bg-brand-400 animate-float-slow",
          variant === "subtle" && "opacity-30",
        )}
      />
      <div
        className={cn(
          "aura-blob right-[2%] top-[6%] size-[360px] bg-fuchsia-400 animate-float",
          variant === "subtle" && "opacity-30",
        )}
      />
      <div
        className={cn(
          "aura-blob bottom-[-12%] left-[38%] size-[380px] bg-cyan-300 animate-float-slow",
          variant === "subtle" && "opacity-25",
        )}
      />
    </div>
  );
}

