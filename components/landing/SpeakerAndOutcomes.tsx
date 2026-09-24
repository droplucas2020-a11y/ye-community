import Image from "next/image";
import { event } from "@/data/event";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";

const outcomes = [
  ["01", "Clareza", "Uma visão mais clara sobre seus próximos passos."],
  ["02", "Referências", "Novas perspectivas sobre empreendedorismo e negócios."],
  ["03", "Insights", "Ideias sobre marketing, posicionamento, estratégia e crescimento."],
  ["04", "Conexões", "Contato com pessoas que também estão construindo projetos e negócios."],
  ["05", "Movimento", "A vontade de parar de adiar e começar a agir."],
];

export function SpeakerAndOutcomes() {
  return (
    <>
      <section id="thiago" className="section-shell bg-[#0a0a0a]">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] border border-white/10">
            <Image src="/thiago-oshiro.jpeg" alt="Thiago Oshiro, palestrante do encontro YE Community" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover object-center grayscale contrast-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 text-xs font-bold uppercase tracking-[0.15em] text-white/70 sm:bottom-8 sm:left-8">Manaus • 05.10.2026</p>
          </Reveal>
          <Reveal className="flex flex-col justify-center">
            <p className="eyebrow">Palestrante</p>
            <h2 className="mt-5 text-[clamp(3.7rem,7.5vw,8rem)] font-black uppercase leading-[0.84] tracking-[-0.08em] text-white">Thiago<br />Oshiro</h2>
            <p className="mt-6 text-xl font-bold text-[#d9ff43] sm:text-2xl">Empreendedor. Estrategista. Palestrante.</p>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-white/55 sm:text-lg"><p>Thiago Oshiro construiu sua trajetória transitando entre empreendedorismo, marketing, estratégia e negócios.</p><p>Neste encontro, a proposta não é falar apenas sobre teoria. É compartilhar experiências, escolhas, desafios e aprendizados que fazem parte da jornada de quem decide construir algo.</p></div>
            <blockquote className="mt-8 border-l-2 border-[#d9ff43] pl-5 text-2xl font-black tracking-[-0.03em] text-white">Uma conversa de empreendedor para empreendedor.</blockquote>
            <p className="mt-7 text-sm font-bold uppercase leading-7 tracking-[0.13em] text-white/45">Sem fórmulas mágicas.<br />Sem atalhos.<br />Com experiência, estratégia e execução.</p>
            <CtaLink href={event.instagramSpeaker} external className="mt-8 self-start bg-white">Conhecer Thiago</CtaLink>
          </Reveal>
        </div>
      </section>

      <section className="section-shell bg-[#efefe9] text-black">
        <Reveal><p className="eyebrow text-black/50">Resultados</p><h2 className="mt-5 max-w-4xl text-[clamp(3rem,6vw,6.4rem)] font-black uppercase leading-[0.9] tracking-[-0.07em]">O que você pode levar dessa tarde?</h2></Reveal>
        <div className="mt-14 grid gap-x-10 md:grid-cols-2 xl:grid-cols-5">
          {outcomes.map(([number, title, copy], index) => (
            <Reveal key={number} delay={index * 70} className="border-t border-black/20 py-7 xl:min-h-72"><span className="text-sm font-black text-[#5d45ff]">{number}</span><h3 className="mt-12 text-xl font-black uppercase">{title}</h3><p className="mt-4 text-base leading-relaxed text-black/58">{copy}</p></Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
