"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CtaLink } from "./CtaLink";

const oshiroLinks = [["O Evento", "#evento"], ["Thiago Oshiro", "#thiago"], ["Experiência", "#experiencia"], ["FAQ", "#faq"]];

type HeaderProps = {
  links?: string[][];
  ctaLabel?: string;
  ctaHref?: string;
  brandHref?: string;
};

export function Header({ links = oshiroLinks, ctaLabel = "Garantir minha vaga", ctaHref, brandHref = "#top" }: HeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070707]/82 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href={brandHref} className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9ff43]">
          <Image src="/images/ye-logo.png" alt="" width={512} height={512} priority className="size-10 shrink-0 object-contain drop-shadow-[0_5px_12px_rgba(0,0,0,.35)]" />
          <span className="text-xs font-black tracking-[0.2em] text-white">YE COMMUNITY</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => <a key={href} href={href} className="text-xs font-bold uppercase tracking-[0.12em] text-white/62 transition hover:text-white">{label}</a>)}
        </nav>
        <div className="hidden lg:block"><CtaLink href={ctaHref} className="min-h-10 px-5 py-2 text-[11px]">{ctaLabel}</CtaLink></div>
        <button type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9ff43] lg:hidden">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-[#070707] px-5 pb-6 pt-3 lg:hidden" aria-label="Navegação mobile">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white/75">{label}</a>)}
          <CtaLink href={ctaHref} className="mt-5 w-full">{ctaLabel}</CtaLink>
        </nav>
      )}
    </header>
  );
}

