"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { WeaveSpinner } from "@/components/ui/weave-spinner";

type IntroPhase = "visible" | "leaving" | "hidden";

type SiteIntroProps = {
  autoCloseMs?: number;
};

export function SiteIntro({ autoCloseMs = 2600 }: SiteIntroProps) {
  const [phase, setPhase] = useState<IntroPhase>("visible");

  const closeIntro = useCallback(() => {
    setPhase((current) => (current === "hidden" ? current : "leaving"));
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTimer = window.setTimeout(closeIntro, reduceMotion ? 500 : autoCloseMs);
    return () => window.clearTimeout(revealTimer);
  }, [autoCloseMs, closeIntro]);

  useEffect(() => {
    if (phase === "hidden") return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "leaving") return;
    const exitTimer = window.setTimeout(() => setPhase("hidden"), 650);
    return () => window.clearTimeout(exitTimer);
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#050505] px-6 text-white transition duration-700 ease-out ${
        phase === "leaving" ? "pointer-events-none scale-[1.03] opacity-0" : "opacity-100"
      }`}
      aria-label="Introdução da YE Community"
    >
      <div className="hero-grid absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 size-[min(72vw,620px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5d45ff]/12 blur-[120px]" aria-hidden="true" />

      <div className="relative flex w-full max-w-3xl flex-col items-center text-center">
        <div className="mb-4 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.34em] text-white/55">
          <span className="h-px w-8 bg-[#d9ff43]" />
          YE Community
          <span className="h-px w-8 bg-[#d9ff43]" />
        </div>

        <WeaveSpinner color="#d9ff43" size={150} className="my-2" />

        <p className="mt-3 text-[clamp(2rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
          O ambiente certo
          <span className="block text-outline">muda tudo.</span>
        </p>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-white/40">
          Preparando a experiência
        </p>

        <button
          type="button"
          onClick={closeIntro}
          className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-xs font-black uppercase tracking-[0.13em] text-white/70 transition hover:border-[#d9ff43]/60 hover:bg-[#d9ff43] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9ff43]"
        >
          Entrar agora
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
