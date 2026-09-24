import { Check } from "lucide-react";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";

const benefits = [
  ["01", "Experiência", "Conteúdo baseado em decisões, erros e aprendizados do mundo real."],
  ["02", "Mentalidade", "Uma nova perspectiva sobre crescimento, protagonismo e construção."],
  ["03", "Execução", "Insights para transformar conhecimento e ideias em movimento."],
  ["04", "Conexões", "Um ambiente para aproximar pessoas ambiciosas, criativas e dispostas a construir algo relevante."],
];

const audience = [
  "Tenho uma ideia e ainda não sei por onde começar.",
  "Já comecei um projeto e quero evoluir.",
  "Quero desenvolver uma mentalidade mais empreendedora.",
  "Quero conhecer pessoas que também estão construindo.",
  "Quero ampliar minha visão sobre negócios.",
  "Quero sair da minha zona de conforto.",
  "Quero estar em ambientes que me façam crescer.",
];

export function StorySections() {
  return (
    <>
      <section id="evento" className="section-shell bg-[#efefe9] text-[#0a0a0a]">
        <Reveal>
          <p className="eyebrow text-black/50">Não é apenas uma palestra.</p>
          <h2 className="mt-7 max-w-6xl text-[clamp(2.8rem,7vw,7.6rem)] font-black uppercase leading-[0.9] tracking-[-0.07em]">Você não precisa de mais conteúdo. <span className="text-black/30">Precisa de experiências que façam você se mover.</span></h2>
        </Reveal>
        <div className="mt-16 grid gap-10 border-t border-black/15 pt-8 lg:grid-cols-[.72fr_1.28fr]">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-black/48">Ideias estão por todos os lados.</p>
          <Reveal className="space-y-6 text-lg leading-relaxed text-black/66 sm:text-xl">
            <p>O que diferencia quem apenas sonha de quem realmente constrói é a capacidade de tomar decisões, executar, aprender rápido e continuar avançando.</p>
            <p>No dia 05 de outubro, a YE Community recebe Thiago Oshiro para uma conversa sobre empreendedorismo, trajetória, negócios, marketing, decisões e os aprendizados que surgem quando você decide sair da teoria e começar a construir.</p>
            <p className="border-l-2 border-[#5d45ff] pl-5 font-bold text-black">Uma tarde para provocar novas ideias, conhecer novas pessoas e enxergar novas possibilidades.</p>
          </Reveal>
        </div>
      </section>

      <section id="experiencia" className="section-shell border-y border-white/10 bg-[#0a0a0a]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal><p className="eyebrow">O que você vai encontrar</p><h2 className="section-title mt-5">O que acontece quando conhecimento encontra ambiente.</h2></Reveal>
          <p className="max-w-xs text-sm leading-relaxed text-white/45">Quatro pilares para uma tarde que continua reverberando depois que o evento termina.</p>
        </div>
        <div className="mt-14 grid border-l border-t border-white/12 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map(([number, title, copy], index) => (
            <Reveal key={number} delay={index * 80} className="group min-h-72 border-b border-r border-white/12 p-7 transition-colors hover:bg-white/[.035] sm:p-8">
              <p className="text-6xl font-black tracking-[-0.08em] text-white/12 transition group-hover:text-[#d9ff43]">{number}</p>
              <h3 className="mt-12 text-xl font-black uppercase tracking-[-0.02em] text-white">{title}</h3>
              <p className="mt-4 text-base leading-relaxed text-white/48">{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell bg-[#5d45ff] text-white">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-24">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-white/60">Para quem é</p>
            <h2 className="mt-6 text-[clamp(3rem,6vw,6.8rem)] font-black uppercase leading-[0.9] tracking-[-0.07em]">Esse encontro é para quem está construindo alguma coisa.</h2>
            <CtaLink className="mt-9">Garantir minha vaga</CtaLink>
          </Reveal>
          <div className="divide-y divide-white/20 border-y border-white/20">
            {audience.map((item, index) => (
              <Reveal key={item} delay={index * 45} className="flex items-start gap-4 py-5 text-base font-bold sm:py-6 sm:text-lg"><span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-white/35"><Check className="size-4" /></span><p>{item}</p></Reveal>
            ))}
            <p className="py-7 text-xl font-black sm:text-2xl">Se você se identificou com pelo menos uma dessas frases, essa sala foi feita para você.</p>
          </div>
        </div>
      </section>
    </>
  );
}
