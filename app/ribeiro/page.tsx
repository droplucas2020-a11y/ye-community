import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, CalendarDays, Clock3, MapPin, Users } from "lucide-react";
import { GeometricBackdrop } from "@/components/ui/shape-landing-hero";
import { Header } from "@/components/landing/Header";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { Reveal } from "@/components/landing/Reveal";
import { CtaLink } from "@/components/landing/CtaLink";
import { RibeiroForm } from "@/components/ribeiro/RibeiroForm";
import { ribeiro } from "@/data/ribeiro";

export const metadata: Metadata = {
  title: `${ribeiro.eventName} | Aula gratuita`,
  description: `Aula gratuita de jiu-jitsu com ${ribeiro.instructor} na ${ribeiro.academy}. ${ribeiro.weekday}, ${ribeiro.eventDay}, às ${ribeiro.eventTime}, em Manaus. ${ribeiro.spots} vagas, aberto ao público — inscrição obrigatória.`,
  openGraph: {
    title: ribeiro.eventName,
    description: `Aula gratuita com ${ribeiro.instructor} • ${ribeiro.eventDateShort} • ${ribeiro.eventTime} • Manaus/AM`,
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/ribeiro-og.jpg", width: 1200, height: 630, alt: "Atleta da Ribeiro Jiu-Jitsu com o braço erguido após vencer uma luta" }],
  },
};

const facts = [
  [CalendarDays, "Data", `${ribeiro.weekday}, ${ribeiro.eventDay}`],
  [Clock3, "Horário", ribeiro.eventTime],
  [Users, "Vagas", `${ribeiro.spots} vagas`],
  [MapPin, "Cidade", "Manaus / AM"],
] as const;

export default function RibeiroPage() {
  return (
    <main className="overflow-x-clip bg-[#070707]">
      <Header
        brandHref="/"
        links={[["A aula", "#aula"], ["Local", "#local"], ["Catálogo YE", "/"]]}
        ctaLabel="Garantir minha vaga"
      />

      <section id="top" className="relative min-h-[100svh] overflow-hidden border-b border-white/10 bg-[#070707] pt-[72px]">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <GeometricBackdrop className="opacity-75" rotate={10} width={560} height={128} y={12} />
        <div className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-[1440px] items-stretch lg:grid-cols-[1.08fr_.92fr]">
          <div className="flex flex-col justify-between px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
            <div className="hero-enter">
              <div className="mb-8 flex items-center gap-4"><span className="h-px w-10 bg-[#d9ff43]" /><p className="eyebrow">YE Community × {ribeiro.academy}</p></div>
              <h1 className="max-w-[860px] text-[clamp(3rem,7.7vw,8.3rem)] font-black uppercase leading-[0.87] tracking-[-0.075em] text-white">Jiu-Jitsu <span className="text-outline">Experience.</span></h1>
              <div className="mt-8 grid gap-7 border-t border-white/15 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">Aula <span className="text-[#d9ff43]">gratuita</span> para a comunidade, com {ribeiro.instructor}</p>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-white/58 sm:text-lg">Uma aula experimental de jiu-jitsu aberta ao público. Gratuita — mas com inscrição obrigatória.</p>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-white/62"><MapPin className="size-4 text-[#d9ff43]" /> Manaus / AM</div>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-6 border-t border-white/15 pt-6 xl:flex-row xl:items-end xl:justify-between">
              <div className="flex gap-10"><div><p className="eyebrow">Data</p><p className="mt-1 text-2xl font-black text-white sm:text-3xl">24 OUT 2026</p></div><div><p className="eyebrow">Horário</p><p className="mt-1 text-2xl font-black text-white sm:text-3xl">14:00</p></div></div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center"><CtaLink className="w-full sm:w-auto">Garantir minha vaga</CtaLink><a href="#aula" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-white/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">Conhecer a aula</a></div>
            </div>
          </div>
          <div className="relative min-h-[68vh] overflow-hidden border-t border-white/10 lg:min-h-0 lg:border-l lg:border-t-0">
            <Image src="/images/ribeiro-retrato.jpg" alt="Atleta da Ribeiro Jiu-Jitsu com o braço erguido pelo árbitro após vencer uma luta" fill priority sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover object-[60%_30%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/25" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between border-t border-white/30 pt-4 text-white sm:inset-x-8 sm:bottom-8"><div><p className="eyebrow text-white/65">Com</p><p className="mt-1 text-3xl font-black uppercase tracking-[-0.04em] sm:text-5xl">Caio<br />Alves</p></div><div className="text-right text-xs font-bold uppercase tracking-[0.14em] text-white/65"><p>{ribeiro.eventDateShort}</p><p className="mt-1">{ribeiro.academy}</p></div></div>
            <span className="absolute right-4 top-4 rounded-full bg-[#d9ff43] px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-black">Gratuito · {ribeiro.spots} vagas</span>
          </div>
        </div>
        <a href="#aula" aria-label="Rolar para conhecer a aula" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/50 lg:block"><ArrowDown className="size-5" /></a>
      </section>

      <section id="aula" className="section-shell bg-[#efefe9] text-[#0a0a0a]">
        <Reveal>
          <p className="eyebrow text-black/50">Aula experimental</p>
          <h2 className="mt-7 max-w-6xl text-[clamp(2.8rem,7vw,7.6rem)] font-black uppercase leading-[0.9] tracking-[-0.07em]">Um tatame aberto. <span className="text-black/30">Para quem nunca treinou e para quem já treina.</span></h2>
        </Reveal>
        <div className="mt-16 grid gap-10 border-t border-black/15 pt-8 lg:grid-cols-[.72fr_1.28fr]">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-black/48">YE Community × {ribeiro.academy}</p>
          <Reveal className="space-y-6 text-lg leading-relaxed text-black/66 sm:text-xl">
            <p>No dia {ribeiro.eventDay}, a YE Community e a {ribeiro.academy} abrem o tatame para uma aula experimental conduzida por {ribeiro.instructor}.</p>
            <p>A aula é aberta ao público: não precisa fazer parte da YE nem ter experiência com jiu-jitsu.</p>
            <p className="border-l-2 border-[#5d45ff] pl-5 font-bold text-black">A aula é gratuita, mas a inscrição é obrigatória — são {ribeiro.spots} vagas, preenchidas por ordem de inscrição.</p>
          </Reveal>
        </div>
      </section>

      <section className="section-shell border-y border-white/10 bg-[#0a0a0a]">
        <div className="grid gap-3 sm:grid-cols-2">
          <Reveal className="relative aspect-[16/9] overflow-hidden rounded-[1.8rem] border border-white/10 sm:col-span-2">
            <Image src="/images/ribeiro-academia.jpg" alt="Tatame amarelo da academia, com sacos de pancada e o logo da Ribeiro Jiu-Jitsu na parede" fill sizes="100vw" className="object-cover" />
          </Reveal>
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] border border-white/10">
            <Image src="/images/ribeiro-costas.jpg" alt="Atleta de costas, sentado à beira do tatame, com o brasão da Ribeiro Jiu-Jitsu no kimono" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
          </Reveal>
          <Reveal delay={80} className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] border border-white/10">
            <Image src="/images/ribeiro-perfil.jpg" alt="Atleta de perfil, de olhos fechados, concentrado antes da luta" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <section id="local" className="section-shell bg-[#0a0a0a]">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/15 bg-[#101010] p-6 sm:p-10 lg:p-14">
            <div className="absolute inset-y-0 left-[68%] hidden w-0 border-l border-dashed border-white/20 lg:block" aria-hidden="true" />
            <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
              <div>
                <div className="flex items-center justify-between gap-5"><p className="eyebrow">Save the date</p><span className="rounded-full border border-[#d9ff43]/40 px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#d9ff43]">Aberto ao público</span></div>
                <p className="mt-10 text-[clamp(3.4rem,8vw,8.4rem)] font-black leading-none tracking-[-0.08em] text-white">{ribeiro.eventDateShort}</p>
                <div className="mt-10 grid gap-4 border-t border-white/15 pt-7 sm:grid-cols-2 lg:grid-cols-4">
                  {facts.map(([Icon, label, value]) => (
                    <p key={label} className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.1em] text-white/70"><Icon className="size-4 shrink-0 text-[#d9ff43]" aria-hidden="true" /><span className="sr-only">{label}: </span>{value}</p>
                  ))}
                </div>
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow">Local</p>
                    <p className="mt-2 text-lg font-bold text-white">{ribeiro.academy}</p>
                    <p className="mt-1 text-sm text-white/45">{ribeiro.eventAddress}</p>
                    <a href={ribeiro.mapsUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#d9ff43] hover:underline">Abrir no mapa <ArrowUpRight className="size-4" /></a>
                  </div>
                  <div><p className="eyebrow">Ingresso</p><p className="mt-2 text-lg font-bold text-white">Gratuito</p><p className="mt-1 text-sm text-white/45">Inscrição obrigatória • {ribeiro.spots} vagas</p></div>
                </div>
              </div>
              <div className="flex flex-col justify-between border-t border-dashed border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"><div><span className="text-7xl font-black tracking-[-0.08em] text-white/10">YE</span><p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-white/45">YE × Ribeiro Jiu-Jitsu</p></div><div className="mt-16"><CtaLink className="w-full px-5">Garantir minha vaga</CtaLink><p className="mt-4 text-center text-xs text-white/38">Com {ribeiro.instructor}.</p></div></div>
            </div>
          </div>
        </Reveal>
      </section>

      <RibeiroForm />
      <SiteFooter />
    </main>
  );
}
