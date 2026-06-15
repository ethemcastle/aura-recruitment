import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Roster } from "@/components/sections/Roster";
import { Sectors } from "@/components/sections/Sectors";
import { Network } from "@/components/sections/Network";
import { PullQuote } from "@/components/sections/PullQuote";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { RevealMount } from "@/components/shortlist/RevealMount";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Stats />
        <Process />
        <Roster />
        <Sectors />
        <Network />
        <PullQuote />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <RevealMount />
    </>
  );
}
