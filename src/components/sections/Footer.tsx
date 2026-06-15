import Image from "next/image";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white pt-20 pb-12 text-ink">
      <div className="wrap">
        <div className="mb-20 grid grid-cols-[1.4fr_1fr] gap-12 border-b border-line pb-12 max-[720px]:mb-12 max-[720px]:grid-cols-1 max-[720px]:gap-8">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-3">
              <Image
                src="/aura-logo.png"
                alt=""
                width={40}
                height={40}
                className="size-10 object-contain"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg tracking-tight">
                  Aura
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                  Consulting
                </span>
              </span>
            </div>
            <p className="max-w-md font-display text-[clamp(26px,3.4vw,42px)] font-normal leading-[1.15] tracking-[-0.015em]">
              Talent has <em className="italic text-accent">no borders.</em>
              <br />
              We make the rest of the paperwork disappear.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 self-end">
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
                Office
              </div>
              <div className="text-[15px] leading-[1.6] text-ink-2">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2.split(",")[0]}
                <br />
                Albania
              </div>
            </div>
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
                Connect
              </div>
              <div className="text-[15px] leading-[1.6] text-ink-2 [&_a:hover]:text-accent">
                <a href={`mailto:${siteConfig.email}`}>Email</a>
                <br />
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <br />
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3 max-[600px]:flex-col max-[600px]:gap-3">
          <span>
            {siteConfig.fullName} · {siteConfig.license}
          </span>
          <span>© 2026 · Tiranë</span>
        </div>
      </div>
    </footer>
  );
}
