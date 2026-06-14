import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Roster } from "@/components/sections/Roster";
import { Sectors } from "@/components/sections/Sectors";
import { PullQuote } from "@/components/sections/PullQuote";
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
        <Stats />
        <Process />
        <Roster />
        <Sectors />
        <PullQuote />
        <Contact />
      </main>
      <Footer />
      <RevealMount />
    </>
  );
}
