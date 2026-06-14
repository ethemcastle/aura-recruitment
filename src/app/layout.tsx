import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ShortlistProvider } from "@/components/shortlist/ShortlistProvider";
import { ShortlistDock } from "@/components/sections/ShortlistDock";
import { siteConfig } from "@/data/site";

const display = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const body = Inter_Tight({
  variable: "--font-inter-tight",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.fullName} — International Recruitment for Albania`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-bg text-ink">
        <ShortlistProvider>
          {children}
          <ShortlistDock />
        </ShortlistProvider>
      </body>
    </html>
  );
}
