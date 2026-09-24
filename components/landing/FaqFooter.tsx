import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { event } from "@/data/event";
import { CtaLink } from "./CtaLink";
import { Reveal } from "./Reveal";

const faqs = [
  ["Quando será o evento?", "05 de outubro de 2026, das 14h às 16h."],
  ["Onde acontecerá?", "Na Targo Educação Empresarial, Rua Pará, 600, Nossa Senhora das Graças, Manaus/AM."],
  ["Quanto custa?", "O primeiro lote custa R$ 200,00, mais R$ 20,00 de taxa da Sympla — total de R$ 220,00."],
  ["Quem pode participar?", "Pessoas interessadas em empreendedorismo, negócios, carreira, inovação, crescimento e novas conexões."],
  ["Preciso ser empreendedor?", "Não. O evento também é indicado para estudantes, profissionais, criadores e pessoas que estejam começando projetos ou buscando novas perspectivas."],
  ["As vagas são limitadas?", "Sim. A capacidade do evento será limitada."],
  ["Como recebo meu ingresso?", "Após concluir sua inscrição, você receberá as informações de confirmação e acesso ao evento."],
  ["Posso transferir meu ingresso?", "A política oficial de transferência será informada junto com a abertura das vendas."],
];

export function FaqFooter() {
  return (
    <>
      <section id="faq" className="section-shell bg-[#0a0a0a]">
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
          <Reveal><p className="eyebrow">FAQ</p><h2 className="mt-5 text-[clamp(3.2rem,6vw,6.8rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] text-white">Antes de entrar na sala.</h2></Reveal>
          <Reveal><Accordion type="single" collapsible className="border-t border-white/15">{faqs.map(([question, answer], index) => <AccordionItem key={question} value={`item-${index}`} className="border-white/15"><AccordionTrigger className="py-6 text-base font-bold text-white hover:no-underline sm:text-lg [&>svg]:text-[#d9ff43]">{question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 text-base leading-relaxed text-white/52">{answer}</AccordionContent></AccordionItem>)}</Accordion></Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#d9ff43] px-5 py-28 text-black sm:px-8 sm:py-36 lg:px-12 lg:py-44">
        <div className="hero-grid absolute inset-0 opacity-15" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-6xl text-center"><div className="flex justify-center gap-6 text-sm font-black uppercase tracking-[0.16em]"><span>05 Outubro</span><span>14h</span></div><h2 className="mt-8 text-[clamp(3.3rem,7.5vw,8rem)] font-black uppercase leading-[0.86] tracking-[-0.08em]">Talvez você ainda não saiba exatamente qual será o seu próximo passo.</h2><p className="mt-6 text-[clamp(2rem,4vw,4.6rem)] font-black uppercase tracking-[-0.055em] text-black/48">Mas ele pode começar aqui.</p><p className="mt-9 text-sm font-black uppercase tracking-[0.16em]">Thiago Oshiro × YE Community</p><CtaLink className="mt-8 bg-black text-white hover:bg-[#5d45ff]">Garantir minha vaga</CtaLink><p className="mt-14 text-xs font-black uppercase tracking-[0.28em]">Your Environment Matters.</p></Reveal>
      </section>

      <footer className="border-t border-white/10 bg-[#070707] px-5 py-10 text-white sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-black uppercase tracking-[0.2em]">YE Community</p><p className="mt-2 text-sm text-white/42">Your Environment Matters.</p></div><a href={event.instagramCommunity} target="_blank" rel="noreferrer" aria-label="Instagram da YE Community" className="text-sm font-bold text-white/65 transition hover:text-white">@ye.community ↗</a><p className="text-xs text-white/35">© 2026 YE Community. Todos os direitos reservados.</p></div></footer>
    </>
  );
}
