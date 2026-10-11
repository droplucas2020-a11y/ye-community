import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { event } from "@/data/event";
import { Reveal } from "./Reveal";

export function AboutYE({ id }: { id?: string }) {
  return (
    <section id={id} className="section-shell bg-[#efefe9] text-black">
      <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
        <Reveal><div className="flex items-center gap-4"><Image src="/images/ye-logo.png" alt="" width={512} height={512} className="size-16 shrink-0 object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,.16)]" /><p className="text-sm font-black uppercase tracking-[0.18em]">YE Community</p></div></Reveal>
        <Reveal><p className="text-[clamp(3.5rem,8vw,8.2rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">Your Environment Matters.</p><p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/60 sm:text-xl">A YE Community nasce para aproximar pessoas que querem evoluir. Um ambiente onde ideias, conhecimento, conexões e oportunidades se encontram. Nossa missão é colocar pessoas que estão construindo o futuro na mesma sala.</p><div className="mt-12 space-y-1 text-[clamp(2.2rem,5vw,5.5rem)] font-black uppercase leading-none tracking-[-0.06em]"><p>Conhecimento.</p><p className="text-[#5d45ff]">Conexão.</p><p>Movimento.</p></div><div className="mt-12 flex items-center justify-between border-t border-black/20 pt-6"><p className="text-2xl font-black">Isso é YE.</p><a href={event.instagramCommunity} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-sm font-black uppercase tracking-[0.1em] underline-offset-4 hover:underline">@ye.community <ArrowRight className="size-4 transition group-hover:translate-x-1" /></a></div></Reveal>
      </div>
    </section>
  );
}
