import Image from "next/image";
import { ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { GeometricBackdrop } from "@/components/ui/shape-landing-hero";
import { Header } from "@/components/landing/Header";
import { SiteIntro } from "@/components/landing/SiteIntro";
import { AboutYE } from "@/components/landing/AboutYE";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { Reveal } from "@/components/landing/Reveal";
import { CtaLink } from "@/components/landing/CtaLink";
import { event } from "@/data/event";
import { ribeiro } from "@/data/ribeiro";

type CatalogItem = {
  href: string;
  image: string;
  imageAlt: string;
  imageClass: string;
  status: string;
  open: boolean;
  tag: string;
  title: string;
  description: string;
  date: string;
  time: string;
  place: string;
  cta: string;
};

const catalog: CatalogItem[] = [
  {
    href: "/ribeiro",
    image: "/images/ribeiro-card.jpg",
    imageAlt: "Atleta da Ribeiro Jiu-Jitsu com o braço erguido após vencer uma luta",
    imageClass: "object-cover object-[50%_30%]",
    status: "Inscrições abertas",
    open: true,
    tag: "Gratuito · inscrição obrigatória",
    title: "YE × Ribeiro — Jiu-Jitsu Experience",
    description: `Aula experimental de jiu-jitsu com ${ribeiro.instructor}, aberta ao público. ${ribeiro.spots} vagas.`,
    date: ribeiro.eventDateShort,
    time: ribeiro.eventTime,
    place: "Manaus / AM",
    cta: "Garantir minha vaga",
  },
  {
    href: "/thiago-oshiro",
    image: "/thiago-oshiro.jpeg",
    imageAlt: "Thiago Oshiro em retrato profissional",
    imageClass: "object-cover object-[50%_22%] grayscale",
    status: "Encerrado",
    open: false,
    tag: "Palestra",
    title: "YE Community apresenta Thiago Oshiro",
    description: "Uma tarde de empreendedorismo, negócios, conexões e novas perspectivas.",
    date: event.eventDateShort,
    time: event.eventTime,
    place: "Manaus / AM",
    cta: "Ver página do evento",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-clip bg-[#070707]">
      <SiteIntro />
      <Header
        brandHref="/"
        links={[["Experiências", "#catalogo"], ["Sobre a YE", "#sobre"]]}
        ctaLabel="Aula gratuita de jiu-jitsu"
        ctaHref="/ribeiro"
      />

      <section id="top" className="relative overflow-hidden border-b border-white/10 bg-[#070707] pt-[72px]">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <GeometricBackdrop className="opacity-75" rotate={10} width={560} height={128} y={12} />
        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="hero-enter">
            <div className="mb-8 flex items-center gap-4"><span className="h-px w-10 bg-[#d9ff43]" /><p className="eyebrow">Catálogo YE Community</p></div>
            <h1 className="max-w-[1000px] text-[clamp(3rem,7.7vw,8.3rem)] font-black uppercase leading-[0.87] tracking-[-0.075em] text-white">O ambiente certo <span className="text-outline">muda tudo.</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/58 sm:text-xl">Encontros, aulas e experiências da YE Community. Escolha a sua e garanta sua vaga.</p>
          </div>
        </div>
      </section>

      <section id="catalogo" className="section-shell bg-[#0a0a0a]">
        <Reveal>
          <p className="eyebrow">Experiências</p>
          <h2 className="section-title mt-5">Escolha sua próxima sala.</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {catalog.map((item, index) => (
            <Reveal key={item.href} delay={index * 80}>
              <a href={item.href} className={`group flex h-full flex-col overflow-hidden rounded-[1.8rem] border bg-[#101010] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9ff43] ${item.open ? "border-[#d9ff43]/35 hover:border-[#d9ff43]" : "border-white/12 hover:border-white/30"}`}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className={`${item.imageClass} transition duration-700 group-hover:scale-[1.03] ${item.open ? "" : "opacity-70"}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent" />
                  <span className={`absolute left-4 top-4 rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-[0.14em] ${item.open ? "bg-[#d9ff43] text-black" : "border border-white/30 bg-black/45 text-white/75 backdrop-blur-md"}`}>{item.status}</span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className={`eyebrow ${item.open ? "text-[#d9ff43] opacity-100" : ""}`}>{item.tag}</p>
                  <h3 className="mt-4 text-[clamp(1.9rem,3.2vw,2.9rem)] font-black uppercase leading-[0.92] tracking-[-0.055em] text-white">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-white/55">{item.description}</p>
                  <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/12 pt-5 text-xs font-bold uppercase tracking-[0.12em] text-white/65">
                    <span className="flex items-center gap-2"><CalendarDays className="size-4 text-[#d9ff43]" />{item.date}</span>
                    <span className="flex items-center gap-2"><Clock3 className="size-4 text-[#d9ff43]" />{item.time}</span>
                    <span className="flex items-center gap-2"><MapPin className="size-4 text-[#d9ff43]" />{item.place}</span>
                  </div>
                  <span className={`mt-auto inline-flex items-center gap-2 pt-8 text-sm font-black uppercase tracking-[0.08em] ${item.open ? "text-[#d9ff43]" : "text-white/60"}`}>{item.cta}<ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid place-items-center bg-[#5d45ff] px-5 py-24 text-center text-white sm:px-8 sm:py-32">
        <Reveal className="mx-auto max-w-5xl">
          <p className="eyebrow text-white/60">Próxima experiência · {ribeiro.eventDateShort}</p>
          <p className="mt-6 text-[clamp(2.8rem,7vw,7.5rem)] font-black uppercase leading-[0.86] tracking-[-0.08em]">Jiu-jitsu gratuito. <span className="text-[#d9ff43]">Vagas limitadas.</span></p>
          <CtaLink href="/ribeiro" className="mt-10">Quero minha vaga</CtaLink>
        </Reveal>
      </section>

      <AboutYE id="sobre" />
      <SiteFooter />
    </main>
  );
}
