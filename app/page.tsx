import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { Reveal } from "@/components/landing/Reveal";
import { event } from "@/data/event";
import { ribeiro } from "@/data/ribeiro";

const pillars = [
  ["01", "Conhecimento", "Ideias que atravessam a teoria e mudam a forma de agir."],
  ["02", "Conexão", "Pessoas que talvez nunca se encontrassem, agora na mesma sala."],
  ["03", "Movimento", "Experiências que tiram planos do papel e colocam a vida em curso."],
];

export default function Home() {
  return (
    <main className="overflow-x-clip bg-[#06120e] text-[#f4f0e5]">
      <Header
        brandHref="#inicio"
        links={[["Agenda", "#agenda"], ["Manifesto", "#manifesto"], ["A YE", "#comunidade"]]}
        ctaLabel="Próxima experiência"
        ctaHref="/ribeiro"
      />

      <section id="inicio" className="relative min-h-[100svh] overflow-hidden border-b border-[#e8c98b]/20 pt-[72px]">
        <div className="ye-home-grid absolute inset-0 opacity-45" aria-hidden="true" />
        <div className="absolute -right-[12rem] top-20 size-[38rem] rounded-full bg-[#0e6449]/25 blur-[130px]" aria-hidden="true" />
        <div className="absolute -left-40 bottom-0 size-[30rem] rounded-full bg-[#bd8f43]/10 blur-[120px]" aria-hidden="true" />

        <div className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-[1440px] items-center gap-16 px-5 py-16 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:py-20">
          <div className="hero-enter relative z-10">
            <div className="flex items-center gap-4 text-[#e8c98b]">
              <span className="h-px w-10 bg-current" />
              <p className="text-[11px] font-bold uppercase tracking-[0.26em]">YE Community · Manaus</p>
            </div>
            <h1 className="mt-8 max-w-[900px] text-[clamp(4rem,8.2vw,8.8rem)] font-black uppercase leading-[0.82] tracking-[-0.08em] text-[#f7f2e8]">
              O ambiente <span className="ye-gold-text">muda</span> tudo.
            </h1>
            <p className="mt-9 max-w-xl text-lg leading-relaxed text-[#f4f0e5]/62 sm:text-xl">
              A YE cria experiências para aproximar quem quer aprender, construir e evoluir. Porque a sala certa pode mudar o próximo passo.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/ribeiro" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#e8c98b] px-7 text-sm font-black uppercase tracking-[0.09em] text-[#06120e] transition hover:-translate-y-0.5 hover:bg-[#f7f2e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c98b]">
                Ver próxima experiência
                <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a href="#manifesto" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#f4f0e5]/20 px-7 text-sm font-bold uppercase tracking-[0.09em] text-[#f4f0e5]/75 transition hover:border-[#e8c98b]/65 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8c98b]">
                Entender a YE
                <ArrowDownRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
            <div className="absolute -left-6 top-12 z-20 hidden rounded-full border border-[#e8c98b]/35 bg-[#06120e]/85 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8c98b] backdrop-blur-md sm:block">
              Próximo encontro · {ribeiro.eventDateShort}
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#e8c98b]/25 bg-[#0a1a14] p-2 shadow-[0_32px_90px_rgba(0,0,0,.42)] sm:rounded-[3rem]">
              <div className="relative h-full overflow-hidden rounded-[1.55rem] sm:rounded-[2.45rem]">
                <Image
                  src="/images/ribeiro-card.jpg"
                  alt="Atleta da Ribeiro Jiu-Jitsu com o braço erguido após vencer uma luta"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover object-[50%_28%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04100c] via-transparent to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#e8c98b]">YE × Ribeiro Jiu-Jitsu</p>
                  <p className="mt-3 max-w-md text-[clamp(2rem,4vw,3.8rem)] font-black uppercase leading-[.9] tracking-[-0.055em] text-white">Uma aula. Um novo ambiente.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 -right-4 z-20 grid size-28 place-items-center rounded-full border border-[#e8c98b]/35 bg-[#e8c98b] text-center text-[#06120e] shadow-2xl sm:-right-8 sm:size-36">
              <span className="text-[10px] font-black uppercase leading-relaxed tracking-[0.13em]">Inscrições<br />abertas</span>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-[#e8c98b]/20 bg-[#e8c98b] py-5 text-[#06120e]" aria-label="Pilares da comunidade">
        <div className="ye-ticker flex min-w-max items-center gap-8 whitespace-nowrap text-sm font-black uppercase tracking-[0.18em] sm:text-base">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-8" aria-hidden={copy === 1}>
              <span>Conhecimento</span><span>✦</span><span>Conexão</span><span>✦</span><span>Movimento</span><span>✦</span><span>Your Environment Matters</span><span>✦</span>
            </div>
          ))}
        </div>
      </section>

      <section id="agenda" className="section-shell bg-[#f2eee3] text-[#07130f]">
        <Reveal>
          <div className="flex flex-col gap-6 border-b border-[#07130f]/18 pb-9 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#0d6a4b]">Agenda YE</p>
              <h2 className="mt-4 max-w-4xl text-[clamp(3.2rem,7vw,7.8rem)] font-black uppercase leading-[0.84] tracking-[-0.075em]">Onde vamos nos encontrar.</h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-[#07130f]/60 sm:text-right">Encontros presenciais para colocar novas pessoas, ideias e possibilidades no mesmo ambiente.</p>
          </div>
        </Reveal>

        <Reveal className="mt-12" delay={80}>
          <Link href="/ribeiro" className="group grid overflow-hidden rounded-[2rem] border border-[#07130f]/15 bg-[#08271d] shadow-[0_24px_70px_rgba(1,18,12,.12)] transition hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(1,18,12,.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d6a4b] lg:grid-cols-[1.08fr_.92fr]">
            <div className="relative min-h-[420px] overflow-hidden lg:min-h-[620px]">
              <Image src="/images/ribeiro-card.jpg" alt="Atleta da Ribeiro Jiu-Jitsu celebrando uma vitória" fill sizes="(max-width: 1024px) 100vw, 54vw" className="object-cover object-[50%_28%] transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07130f]/55 via-transparent to-transparent lg:bg-gradient-to-r" />
              <span className="absolute left-6 top-6 rounded-full bg-[#e8c98b] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#07130f]">Inscrições abertas</span>
            </div>
            <div className="flex flex-col p-7 text-[#f4f0e5] sm:p-10 lg:p-14">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#e8c98b]">Próxima experiência</p>
              <h3 className="mt-6 text-[clamp(2.7rem,5.2vw,5.6rem)] font-black uppercase leading-[0.86] tracking-[-0.065em]">YE × Ribeiro<br />Jiu-Jitsu Experience</h3>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-[#f4f0e5]/58 sm:text-lg">Uma aula experimental gratuita com {ribeiro.instructor}. Aberta ao público, com inscrição obrigatória e {ribeiro.spots} vagas.</p>
              <div className="mt-9 grid gap-4 border-y border-white/14 py-6 text-xs font-bold uppercase tracking-[0.13em] text-[#f4f0e5]/72 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <span className="flex items-center gap-2.5"><CalendarDays className="size-4 text-[#e8c98b]" />{ribeiro.eventDateShort}</span>
                <span className="flex items-center gap-2.5"><Clock3 className="size-4 text-[#e8c98b]" />{ribeiro.eventTime}</span>
                <span className="flex items-center gap-2.5"><MapPin className="size-4 text-[#e8c98b]" />Manaus / AM</span>
              </div>
              <span className="mt-auto inline-flex items-center gap-3 pt-10 text-sm font-black uppercase tracking-[0.1em] text-[#e8c98b]">Garantir minha vaga <ArrowUpRight className="size-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
            </div>
          </Link>
        </Reveal>

        <Reveal className="mt-8" delay={120}>
          <Link href="/thiago-oshiro" className="group grid items-center gap-6 rounded-[1.6rem] border border-[#07130f]/15 bg-[#e8e2d5] p-4 transition hover:border-[#0d6a4b]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d6a4b] sm:grid-cols-[180px_1fr_auto] sm:p-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem] sm:aspect-square">
              <Image src="/thiago-oshiro.jpeg" alt="Thiago Oshiro em retrato profissional" fill sizes="180px" className="object-cover object-[50%_22%] grayscale transition duration-500 group-hover:grayscale-0" />
            </div>
            <div className="px-2 sm:px-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#07130f]/45">Do arquivo · {event.eventDateShort}</p>
              <h3 className="mt-3 text-[clamp(1.7rem,3vw,3rem)] font-black uppercase leading-[.95] tracking-[-0.05em]">YE apresenta Thiago Oshiro</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#07130f]/58 sm:text-base">Empreendedorismo, negócios, conexões e novas perspectivas em uma tarde de comunidade.</p>
            </div>
            <span className="m-2 grid size-14 place-items-center rounded-full border border-[#07130f]/20 transition group-hover:border-[#0d6a4b] group-hover:bg-[#0d6a4b] group-hover:text-white sm:size-16" aria-hidden="true"><ArrowRight className="size-5" /></span>
          </Link>
        </Reveal>
      </section>

      <section id="manifesto" className="section-shell relative overflow-hidden bg-[#0b251c]">
        <div className="absolute right-[-10rem] top-[-10rem] size-[34rem] rounded-full border border-[#e8c98b]/12" aria-hidden="true" />
        <div className="absolute right-[-4rem] top-[-4rem] size-[22rem] rounded-full border border-[#e8c98b]/12" aria-hidden="true" />
        <Reveal>
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#e8c98b]">Nosso manifesto</p>
          <p className="mt-7 max-w-[1220px] text-[clamp(3.2rem,7vw,7.7rem)] font-black uppercase leading-[0.86] tracking-[-0.075em] text-[#f4f0e5]">Não é sobre estar em qualquer sala. É sobre estar na <span className="ye-gold-text">sala certa.</span></p>
        </Reveal>
        <div className="mt-20 grid border-y border-[#e8c98b]/20 lg:grid-cols-3">
          {pillars.map(([number, title, copy], index) => (
            <Reveal key={number} delay={index * 80} className="border-b border-[#e8c98b]/20 py-10 lg:border-b-0 lg:border-r lg:px-9 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <div className="flex items-start justify-between gap-8">
                <h3 className="text-2xl font-black uppercase tracking-[-0.035em] text-[#f4f0e5]">{title}</h3>
                <span className="font-mono text-xs text-[#e8c98b]">{number}</span>
              </div>
              <p className="mt-8 max-w-sm text-base leading-relaxed text-[#f4f0e5]/54">{copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="comunidade" className="section-shell bg-[#e8c98b] text-[#06120e]">
        <div className="grid gap-14 lg:grid-cols-[.55fr_1.45fr]">
          <Reveal>
            <Image src="/images/ye-logo.png" alt="YE Community" width={512} height={512} className="size-32 object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,.18)] sm:size-40" />
          </Reveal>
          <Reveal delay={80}>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] opacity-55">YE Community</p>
            <h2 className="mt-5 max-w-5xl text-[clamp(3.3rem,7.6vw,8.3rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">Your Environment Matters.</h2>
            <div className="mt-10 grid gap-8 border-t border-[#06120e]/25 pt-8 md:grid-cols-2">
              <p className="max-w-xl text-lg font-semibold leading-relaxed">A YE nasceu para aproximar pessoas que querem evoluir e construir o futuro em conjunto.</p>
              <div>
                <p className="max-w-xl text-base leading-relaxed text-[#06120e]/65">Criamos encontros onde ideias, conhecimento, conexões e oportunidades deixam de ser abstratos — e passam a dividir a mesma sala.</p>
                <a href={event.instagramCommunity} target="_blank" rel="noreferrer" className="group mt-8 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.1em] underline-offset-4 hover:underline">Acompanhar a YE <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
