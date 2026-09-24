import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Lightbulb,
  MapPin,
  Route,
  Users,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { event } from "@/data/event";
import { CtaLink } from "./CtaLink";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Reveal } from "./Reveal";
import { SiteIntro } from "./SiteIntro";
import { LeadForm } from "./LeadForm";

const essentials = [
  {
    icon: Lightbulb,
    title: "Ideias aplicáveis",
    copy: "Aprendizados reais sobre empreendedorismo, marketing e decisões.",
  },
  {
    icon: Users,
    title: "Conexões relevantes",
    copy: "Pessoas que também querem construir, crescer e criar oportunidades.",
  },
  {
    icon: Route,
    title: "Próximos passos",
    copy: "Mais clareza para transformar intenção em movimento.",
  },
];

const audience = [
  "Empreendedores e founders",
  "Profissionais e estudantes",
  "Criadores e líderes",
  "Quem está tirando uma ideia do papel",
];

const faqs = [
  ["Quando e onde?", "05 de outubro de 2026, das 14h às 16h, na Targo Educação Empresarial, em Manaus/AM."],
  ["Quanto custa?", "O primeiro lote custa R$ 200,00, mais R$ 20,00 de taxa da Sympla — total de R$ 220,00."],
  ["Para quem é?", "Para quem busca novas referências, conexões e mais clareza para construir projetos, negócios ou carreira."],
  ["Preciso ser empreendedor?", "Não. O encontro também é para estudantes, profissionais, criadores e pessoas começando um projeto."],
  ["As vagas são limitadas?", "Sim. A capacidade da sala será limitada."],
];

export function V2Landing() {
  return (
    <main className="overflow-x-clip bg-[#070707]">
      <SiteIntro autoCloseMs={1400} />
      <Header />
      <Hero />

      <section id="evento" className="section-shell bg-[#efefe9] text-black">
        <div className="grid gap-12 lg:grid-cols-[1.12fr_.88fr] lg:items-end lg:gap-20">
          <Reveal>
            <p className="eyebrow text-black/50">O encontro</p>
            <h2 className="mt-6 text-[clamp(3rem,7vw,7.2rem)] font-black uppercase leading-[0.88] tracking-[-0.075em]">
              Uma tarde. <span className="text-black/30">Ideias que tiram você do lugar.</span>
            </h2>
          </Reveal>
          <Reveal className="border-l-2 border-[#5d45ff] pl-6">
            <p className="text-lg font-bold leading-relaxed sm:text-xl">
              Thiago Oshiro compartilha decisões, desafios e aprendizados de quem escolheu construir no mundo real.
            </p>
            <p className="mt-4 text-base leading-relaxed text-black/58">
              Uma conversa direta sobre negócios, marketing, trajetória e execução — dentro de uma sala feita para novas conexões.
            </p>
          </Reveal>
        </div>

        <div id="experiencia" className="mt-16 grid border-l border-t border-black/15 md:grid-cols-3">
          {essentials.map(({ icon: Icon, title, copy }, index) => (
            <Reveal key={title} delay={index * 70} className="border-b border-r border-black/15 p-7 sm:p-9">
              <Icon className="size-7 text-[#5d45ff]" aria-hidden="true" />
              <h3 className="mt-10 text-xl font-black uppercase tracking-[-0.03em]">{title}</h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-black/58">{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="thiago" className="section-shell bg-[#0a0a0a]">
        <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-center lg:gap-20">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-white/10">
            <Image
              src="/thiago-oshiro.jpeg"
              alt="Thiago Oshiro"
              fill
              sizes="(max-width: 1024px) 100vw, 36vw"
              className="object-cover object-center grayscale contrast-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 text-xs font-black uppercase tracking-[0.16em] text-white/70">
              Palestrante convidado
            </p>
          </Reveal>

          <Reveal>
            <p className="eyebrow">Thiago Oshiro</p>
            <h2 className="mt-5 text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.84] tracking-[-0.08em] text-white">
              Experiência<br />sem filtro.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/58 sm:text-xl">
              Empreendedor e estrategista, Thiago transforma vivências de negócios em uma conversa prática sobre escolhas, crescimento e execução.
            </p>
            <blockquote className="mt-8 border-l-2 border-[#d9ff43] pl-5 text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
              Sem fórmula mágica. Com contexto, estratégia e ação.
            </blockquote>
            <a
              href={event.instagramSpeaker}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.1em] text-[#d9ff43] underline-offset-4 hover:underline"
            >
              Conhecer Thiago <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section-shell bg-[#5d45ff] text-white">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-white/60">A sala certa</p>
            <h2 className="mt-6 text-[clamp(3rem,6.5vw,7rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">
              Para quem está construindo o próximo passo.
            </h2>
          </Reveal>
          <div className="divide-y divide-white/20 border-y border-white/20">
            {audience.map((item, index) => (
              <Reveal key={item} delay={index * 50} className="flex items-center gap-4 py-5 text-lg font-bold">
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-white/35">
                  <Check className="size-4" />
                </span>
                {item}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="ingressos" className="section-shell bg-[#0a0a0a]">
        <Reveal className="relative overflow-hidden rounded-[1.8rem] border border-white/15 bg-[#101010]">
          <div className="grid lg:grid-cols-[1.35fr_.65fr]">
            <div className="p-7 sm:p-10 lg:p-14">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="eyebrow">Save the date</p>
                <span className="rounded-full border border-[#d9ff43]/40 px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#d9ff43]">
                  Vagas limitadas
                </span>
              </div>
              <p className="mt-10 text-[clamp(3.5rem,8vw,8rem)] font-black leading-none tracking-[-0.08em] text-white">05.10.2026</p>
              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7">
                <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.1em] text-white/70"><CalendarDays className="size-4 text-[#d9ff43]" />Segunda-feira</p>
                <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.1em] text-white/70"><Clock3 className="size-4 text-[#d9ff43]" />14h</p>
                <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.1em] text-white/70"><MapPin className="size-4 text-[#d9ff43]" />Manaus / AM</p>
              </div>
            </div>
            <div className="flex flex-col justify-between border-t border-dashed border-white/20 bg-[#d9ff43] p-7 text-black sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div>
                <p className="text-6xl font-black tracking-[-0.08em]">YE</p>
                <p className="mt-3 text-sm font-black uppercase tracking-[0.13em]">Thiago Oshiro × YE Community</p>
              </div>
              <div className="mt-12">
                <p className="text-2xl font-black">{event.ticketPrice}</p>
                <p className="mt-2 text-sm font-bold text-black/55">{event.ticketNote}</p>
                <p className="mb-5 mt-5 text-base font-bold text-black/55">{event.eventLocation}<br /><span className="font-normal">Rua Pará, 600 • Manaus/AM</span></p>
                <CtaLink className="w-full bg-black text-white hover:bg-[#5d45ff]">Garantir minha vaga</CtaLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <LeadForm />

      <section id="faq" className="section-shell bg-[#efefe9] text-black">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-black/50">Informações rápidas</p>
            <h2 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-[0.9] tracking-[-0.07em]">Antes de entrar na sala.</h2>
          </Reveal>
          <Reveal>
            <Accordion type="single" collapsible className="border-t border-black/20">
              {faqs.map(([question, answer], index) => (
                <AccordionItem key={question} value={`v2-${index}`} className="border-black/20">
                  <AccordionTrigger className="py-6 text-left text-base font-bold hover:no-underline sm:text-lg [&>svg]:text-[#5d45ff]">{question}</AccordionTrigger>
                  <AccordionContent className="max-w-2xl pb-6 text-base leading-relaxed text-black/58">{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#d9ff43] px-5 py-24 text-center text-black sm:px-8 sm:py-32">
        <div className="hero-grid absolute inset-0 opacity-15" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-5xl">
          <p className="eyebrow text-black/50">05 de outubro • 14h • Manaus</p>
          <h2 className="mt-7 text-[clamp(3.2rem,8vw,8rem)] font-black uppercase leading-[0.86] tracking-[-0.08em]">
            Seu próximo passo pode começar nessa sala.
          </h2>
          <CtaLink className="mt-9 bg-black text-white hover:bg-[#5d45ff]">Eu quero participar</CtaLink>
        </Reveal>
      </section>

      <footer className="border-t border-white/10 bg-[#070707] px-5 py-9 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-black uppercase tracking-[0.2em]">YE Community</p>
          <p className="text-xs text-white/38">Your Environment Matters.</p>
          <a href={event.instagramCommunity} target="_blank" rel="noreferrer" className="text-sm font-bold text-white/65 hover:text-white">@ye.community ↗</a>
        </div>
      </footer>
    </main>
  );
}
