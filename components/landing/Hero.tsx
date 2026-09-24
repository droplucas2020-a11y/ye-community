import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { GeometricBackdrop } from "@/components/ui/shape-landing-hero";
import { CtaLink } from "./CtaLink";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden border-b border-white/10 bg-[#070707] pt-[72px]">
      <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <GeometricBackdrop className="opacity-75" rotate={10} width={560} height={128} y={12} />
      <div className="absolute -right-28 top-24 h-80 w-80 rounded-full bg-[#5d45ff]/20 blur-[110px]" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-[1440px] items-stretch lg:grid-cols-[1.08fr_.92fr]">
        <div className="flex flex-col justify-between px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
          <div className="hero-enter">
            <div className="mb-8 flex items-center gap-4"><span className="h-px w-10 bg-[#d9ff43]" /><p className="eyebrow">YE Community presents</p></div>
            <h1 className="max-w-[860px] text-[clamp(3rem,7.7vw,8.3rem)] font-black uppercase leading-[0.87] tracking-[-0.075em] text-white">Uma tarde para quem quer <span className="text-outline">pensar maior.</span></h1>
            <div className="mt-8 grid gap-7 border-t border-white/15 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <div><p className="text-xl font-bold tracking-tight text-white sm:text-2xl">Thiago Oshiro × YE Community</p><p className="mt-3 max-w-xl text-base leading-relaxed text-white/58 sm:text-lg">Um encontro presencial para transformar ideias em movimento, conexões em oportunidades e conhecimento em ação.</p></div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-white/62"><MapPin className="size-4 text-[#d9ff43]" /> Manaus / AM</div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-6 border-t border-white/15 pt-6 xl:flex-row xl:items-end xl:justify-between">
            <div className="flex gap-10"><div><p className="eyebrow">Data</p><p className="mt-1 text-2xl font-black text-white sm:text-3xl">05 OUT 2026</p></div><div><p className="eyebrow">Horário</p><p className="mt-1 text-2xl font-black text-white sm:text-3xl">14:00</p></div></div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center"><CtaLink className="w-full sm:w-auto">Garantir minha vaga</CtaLink><a href="#evento" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Conhecer o evento</a></div>
          </div>
        </div>
        <div className="relative min-h-[68vh] overflow-hidden border-t border-white/10 lg:min-h-0 lg:border-l lg:border-t-0">
          <Image src="/thiago-oshiro.jpeg" alt="Thiago Oshiro em retrato profissional" fill priority sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover object-[50%_22%] grayscale contrast-[1.04]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/25" />
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between border-t border-white/30 pt-4 text-white sm:inset-x-8 sm:bottom-8"><div><p className="eyebrow text-white/65">Palestrante</p><p className="mt-1 text-3xl font-black uppercase tracking-[-0.04em] sm:text-5xl">Thiago<br />Oshiro</p></div><div className="text-right text-xs font-bold uppercase tracking-[0.14em] text-white/65"><p>05.10.26</p><p className="mt-1">YE Community</p></div></div>
          <span className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/35 px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-md">Vagas limitadas</span>
        </div>
      </div>
      <a href="#evento" aria-label="Rolar para conhecer o evento" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/50 lg:block"><ArrowDown className="size-5" /></a>
    </section>
  );
}
