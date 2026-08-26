import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { CommunityStrip } from "@/components/sections/CommunityStrip";
import { StoriesGrid } from "@/components/sections/StoriesGrid";
import { PartnersRow } from "@/components/sections/PartnersRow";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <CommunityStrip />
        <StoriesGrid />
        <PartnersRow />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
