import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { StorySections } from "@/components/landing/StorySections";
import { SpeakerAndOutcomes } from "@/components/landing/SpeakerAndOutcomes";
import { ConversionSections } from "@/components/landing/ConversionSections";
import { FaqFooter } from "@/components/landing/FaqFooter";
import { SiteIntro } from "@/components/landing/SiteIntro";
import { LeadForm } from "@/components/landing/LeadForm";

export const metadata: Metadata = {
  title: "YE Community apresenta Thiago Oshiro | 05 de Outubro",
  description:
    "Uma tarde de empreendedorismo, negócios, conexões e novas perspectivas. Participe do encontro da YE Community com Thiago Oshiro em Manaus.",
  openGraph: {
    title: "YE Community apresenta Thiago Oshiro",
    description: "05 de Outubro de 2026 • 14h • Manaus/AM",
    type: "website",
    locale: "pt_BR",
    images: ["/thiago-oshiro.jpeg"],
  },
};

export default function ThiagoOshiroPage() {
  return (
    <main className="overflow-x-clip bg-[#070707]">
      <SiteIntro />
      <Header brandHref="/" />
      <Hero />
      <StorySections />
      <SpeakerAndOutcomes />
      <ConversionSections />
      <LeadForm />
      <FaqFooter />
    </main>
  );
}
