import Image from "next/image";
import { event } from "@/data/event";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070707] px-5 py-10 text-white sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><div className="flex items-center gap-4"><Image src="/images/ye-logo.png" alt="" width={512} height={512} className="size-14 shrink-0 object-contain" /><div><p className="text-sm font-black uppercase tracking-[0.2em]">YE Community</p><p className="mt-2 text-sm text-white/42">Your Environment Matters.</p></div></div><a href={event.instagramCommunity} target="_blank" rel="noreferrer" aria-label="Instagram da YE Community" className="text-sm font-bold text-white/65 transition hover:text-white">@ye.community ↗</a><p className="text-xs text-white/35">© 2026 YE Community. Todos os direitos reservados.</p></div></footer>
  );
}
