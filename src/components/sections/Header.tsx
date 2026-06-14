"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 py-[22px] backdrop-blur-[14px] transition-[border-color] duration-400 border-b ${
        scrolled ? "border-line" : "border-transparent"
      }`}
      style={{ background: "rgba(19, 18, 16, 0.7)" }}
    >
      <div className="wrap flex items-center justify-between gap-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 font-display text-xl tracking-tight sm:text-2xl"
          aria-label={`${siteConfig.fullName} — home`}
        >
          <span className="mb-1 size-1.5 rounded-full bg-accent animate-pulse-dot" />
          {siteConfig.fullName}
        </Link>

        <nav className="flex items-center gap-9 max-[720px]:gap-[18px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative hidden text-[13px] tracking-[0.01em] text-ink-2 transition-colors duration-200 hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-ink after:transition-[width] after:duration-300 hover:after:w-full md:inline-block"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-full border border-line-2 px-[18px] py-2.5 text-[13px] text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-bg"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
