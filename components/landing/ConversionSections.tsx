import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { event } from "@/data/event";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";

const communityWords = ["FOUNDERS", "EMPREENDEDORES", "CRIADORES", "ESTUDANTES", "PROFISSIONAIS", "LÍDERES", "INOVADORES", "BUILDERS"];

export function ConversionSections() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0a0a0a] px-5 py-28 sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="max-w-6xl"><p className="eyebrow">O ambiente</p><p className="mt-6 text-2xl font-bold text-white/45 sm:text-3xl">Não é só sobre assistir uma palestra.</p><h2 className="mt-3 text-[clamp(4rem,10vw,11rem)] font-black uppercase leading-[0.82] tracking-[-0.085em] text-white">É sobre estar no <span className="text-[#d9ff43]">ambiente certo.</span></h2></Reveal>
          <Reveal className="mt-16 grid gap-10 border-t border-white/15 pt-8 lg:grid-cols-2"><div className="space-y-2 text-xl font-bold text-white/75 sm:text-2xl"><p>As pessoas com quem você conversa.</p><p>As ideias às quais você é exposto.</p><p>Os ambientes dos quais você participa.</p></div><div className="space-y-6 text-lg leading-relaxed text-white/50"><p>Tudo isso influencia aquilo que você acredita ser possível.</p><p>A YE Community existe para aproximar pessoas que querem evoluir, construir, aprender e criar novas oportunidades.</p></div></Reveal>
          <p className="mt-20 text-right text-[clamp(2.5rem,6vw,6.5rem)] font-black uppercase leading-[0.9] tracking-[-0.07em] text-white/16">Grandes ideias dificilmente crescem isoladas.</p>
        </div>
      </section>

      <section className="section-shell bg-[#d9ff43] text-black">
        <Reveal><p className="eyebrow text-black/50">Comunidade</p><h2 className="mt-5 text-[clamp(3.3rem,7vw,7.6rem)] font-black uppercase leading-[0.88] tracking-[-0.075em]">Quem estará nessa sala?</h2></Reveal>
        <div className="mt-14 flex flex-wrap gap-2 sm:gap-3">{communityWords.map((word, index) => <Reveal key={word} delay={index * 45} className="rounded-full border border-black/25 px-4 py-3 text-sm font-black tracking-[-0.02em] transition hover:bg-black hover:text-white sm:px-6 sm:text-xl lg:text-2xl">{word}</Reveal>)}</div>
        <div className="mt-16 grid gap-10 border-t border-black/20 pt-8 lg:grid-cols-2"><p className="max-w-2xl text-xl leading-relaxed text-black/65 sm:text-2xl">Você pode entrar para assistir uma palestra e sair com uma nova ideia, um contato, um parceiro, um cliente ou uma nova direção.</p><p className="text-3xl font-black uppercase leading-tight tracking-[-0.04em] sm:text-5xl">Networking não é trocar cartões. <span className="text-black/40">É criar possibilidades.</span></p></div>
      </section>

      <section className="grid min-h-[90svh] place-items-center bg-[#5d45ff] px-5 py-24 text-center text-white sm:px-8">
        <Reveal className="mx-auto max-w-6xl"><p className="text-[clamp(3.2rem,8.5vw,9rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">Uma tarde pode não mudar tudo.</p><p className="mt-5 text-[clamp(3.2rem,8.5vw,9rem)] font-black uppercase leading-[0.84] tracking-[-0.08em] text-[#d9ff43]">Mas uma ideia pode.</p><div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-lg font-bold text-white/65 sm:text-2xl"><span>Uma conversa pode.</span><span>Uma conexão pode.</span><span>Uma decisão pode.</span></div><p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">No dia 05 de outubro queremos colocar todas elas no mesmo ambiente.</p><CtaLink className="mt-9">Eu quero estar nessa sala</CtaLink></Reveal>
      </section>

      <section id="ingressos" className="section-shell bg-[#0a0a0a]">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/15 bg-[#101010] p-6 sm:p-10 lg:p-14">
            <div className="absolute inset-y-0 left-[68%] hidden w-0 border-l border-dashed border-white/20 lg:block" aria-hidden="true" />
            <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
              <div>
                <div className="flex items-center justify-between gap-5"><p className="eyebrow">Save the date</p><span className="rounded-full border border-[#d9ff43]/40 px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#d9ff43]">Vagas limitadas</span></div>
                <p className="mt-10 text-[clamp(3.4rem,8vw,8.4rem)] font-black leading-none tracking-[-0.08em] text-white">05.10.2026</p>
                <div className="mt-10 grid gap-4 border-t border-white/15 pt-7 sm:grid-cols-3"><p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.1em] text-white/70"><CalendarDays className="size-4 text-[#d9ff43]" />Segunda-feira</p><p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.1em] text-white/70"><Clock3 className="size-4 text-[#d9ff43]" />14h</p><p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.1em] text-white/70"><MapPin className="size-4 text-[#d9ff43]" />Manaus / AM</p></div>
                <div className="mt-10 grid gap-6 sm:grid-cols-2"><div><p className="eyebrow">Local</p><p className="mt-2 text-lg font-bold text-white">{event.eventLocation}</p><p className="mt-1 text-sm text-white/45">{event.eventAddress}</p></div><div><p className="eyebrow">Ingresso</p><p className="mt-2 text-lg font-bold text-white">{event.ticketPrice}</p><p className="mt-1 text-sm text-white/45">{event.ticketNote}</p></div></div>
              </div>
              <div className="flex flex-col justify-between border-t border-dashed border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"><div><span className="text-7xl font-black tracking-[-0.08em] text-white/10">YE</span><p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-white/45">Thiago Oshiro × YE Community</p></div><div className="mt-16"><CtaLink className="w-full px-5">Garantir meu ingresso</CtaLink><p className="mt-4 text-center text-xs text-white/38">Seu ingresso para a sala certa.</p></div></div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell bg-[#efefe9] text-black">
        <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <Reveal><div className="flex items-center gap-4"><span className="grid size-14 place-items-center rounded-full bg-black text-sm font-black text-[#d9ff43]">YE</span><p className="text-sm font-black uppercase tracking-[0.18em]">YE Community</p></div></Reveal>
          <Reveal><p className="text-[clamp(3.5rem,8vw,8.2rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">Your Environment Matters.</p><p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/60 sm:text-xl">A YE Community nasce para aproximar pessoas que querem evoluir. Um ambiente onde ideias, conhecimento, conexões e oportunidades se encontram. Nossa missão é colocar pessoas que estão construindo o futuro na mesma sala.</p><div className="mt-12 space-y-1 text-[clamp(2.2rem,5vw,5.5rem)] font-black uppercase leading-none tracking-[-0.06em]"><p>Conhecimento.</p><p className="text-[#5d45ff]">Conexão.</p><p>Movimento.</p></div><div className="mt-12 flex items-center justify-between border-t border-black/20 pt-6"><p className="text-2xl font-black">Isso é YE.</p><a href={event.instagramCommunity} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-black uppercase tracking-[0.1em] underline-offset-4 hover:underline">@ye.community <ArrowRight className="size-4 transition group-hover:translate-x-1" /></a></div></Reveal>
        </div>
      </section>
    </>
  );
}
