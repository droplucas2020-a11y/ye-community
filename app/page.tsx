import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { StorySections } from "@/components/landing/StorySections";
import { SpeakerAndOutcomes } from "@/components/landing/SpeakerAndOutcomes";
import { ConversionSections } from "@/components/landing/ConversionSections";
import { FaqFooter } from "@/components/landing/FaqFooter";
import { SiteIntro } from "@/components/landing/SiteIntro";
import { LeadForm } from "@/components/landing/LeadForm";

export default function Home() {
  return (
    <main className="overflow-x-clip bg-[#070707]">
      <SiteIntro />
      <Header />
      <Hero />
      <StorySections />
      <SpeakerAndOutcomes />
      <ConversionSections />
      <LeadForm />
      <FaqFooter />
    </main>
  );
}
