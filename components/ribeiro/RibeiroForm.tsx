"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LockKeyhole } from "lucide-react";
import { ribeiro } from "@/data/ribeiro";

type SubmitState = "idle" | "sending" | "error" | "done" | "soldOut";

function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function normalizeInstagram(value: string) {
  const handle = value.replace(/\s/g, "").replace(/^https?:\/\/(www\.)?instagram\.com\//i, "").replace(/\/.*$/, "").replace(/@/g, "");
  return handle ? `@${handle}` : "";
}

export function RibeiroForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(formEvent: FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    setSubmitState("sending");
    setErrorMessage("");

    const formData = new FormData(formEvent.currentTarget);
    const query = new URLSearchParams(window.location.search);

    const payload = {
      event: ribeiro.slug,
      name: String(formData.get("name") || ""),
      whatsapp: String(formData.get("whatsapp") || ""),
      instagram: String(formData.get("instagram") || ""),
      age: Number(formData.get("age")),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") || ""),
      page: window.location.pathname,
      referrer: document.referrer,
      utmSource: query.get("utm_source") || "",
      utmMedium: query.get("utm_medium") || "",
      utmCampaign: query.get("utm_campaign") || "",
      utmContent: query.get("utm_content") || "",
      utmTerm: query.get("utm_term") || "",
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as { message?: string; soldOut?: boolean } | null;

      if (result?.soldOut) {
        setSubmitState("soldOut");
        return;
      }
      if (!response.ok) throw new Error(result?.message || "Não foi possível concluir sua inscrição agora.");

      const metaWindow = window as typeof window & { fbq?: (action: string, eventName: string) => void };
      metaWindow.fbq?.("track", "Lead");
      setSubmitState("done");
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(error instanceof Error ? error.message : "Não foi possível concluir sua inscrição agora.");
    }
  }

  const fieldClass =
    "min-h-14 w-full rounded-xl border border-white/15 bg-white/[0.055] px-4 text-base text-white outline-none transition placeholder:text-white/30 focus:border-[#d9ff43] focus:ring-2 focus:ring-[#d9ff43]/20";

  return (
    <section id="inscricao" className="section-shell bg-[#070707]">
      <div className="grid gap-12 rounded-[2rem] border border-white/12 bg-[#101010] p-6 sm:p-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-16 lg:p-14">
        <div>
          <p className="eyebrow text-[#d9ff43] opacity-100">Inscrição gratuita</p>
          <h2 className="mt-5 text-[clamp(2.8rem,6vw,6rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] text-white">
            Garanta sua vaga.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/55">
            A aula é gratuita, mas a inscrição é obrigatória. São {ribeiro.spots} vagas, preenchidas por ordem de inscrição.
          </p>
          <div className="mt-8 space-y-4 text-sm font-bold text-white/68">
            <p className="flex items-center gap-3"><CheckCircle2 className="size-5 text-[#d9ff43]" />Leva menos de 1 minuto</p>
            <p className="flex items-center gap-3"><CheckCircle2 className="size-5 text-[#d9ff43]" />Aberto ao público — não precisa ser da YE</p>
            <p className="flex items-center gap-3"><LockKeyhole className="size-5 text-[#d9ff43]" />Seus dados ficam protegidos com a YE Community</p>
          </div>
        </div>

        {submitState === "done" || submitState === "soldOut" ? (
          <div role="status" className="flex flex-col justify-center rounded-[1.5rem] border border-[#d9ff43]/30 bg-[#d9ff43]/[0.06] p-8 sm:p-10">
            <CheckCircle2 className={`size-12 ${submitState === "done" ? "text-[#d9ff43]" : "text-white/40"}`} />
            <p className="mt-6 text-[clamp(2.2rem,4vw,3.6rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white">
              {submitState === "done" ? "Vaga garantida!" : "Vagas esgotadas."}
            </p>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/60">
              {submitState === "done"
                ? `Te esperamos no ${ribeiro.weekday.toLowerCase()}, ${ribeiro.eventDay}, às ${ribeiro.eventTime} — ${ribeiro.eventAddress}.`
                : `As ${ribeiro.spots} vagas desta aula já foram preenchidas. Acompanhe a YE Community para saber das próximas experiências.`}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5" aria-label="Inscrição na aula YE × Ribeiro">
            <label className="grid gap-2 text-sm font-bold text-white">
              Nome completo
              <input className={fieldClass} name="name" autoComplete="name" required minLength={2} maxLength={120} placeholder="Como podemos chamar você?" />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-white">
                WhatsApp
                <input className={fieldClass} name="whatsapp" type="tel" autoComplete="tel" inputMode="tel" required pattern="\(\d{2}\) \d{4,5}-\d{4}" title="Informe o número com DDD" maxLength={16} placeholder="(92) 99999-9999"
                  onChange={(changeEvent) => { changeEvent.currentTarget.value = maskPhone(changeEvent.currentTarget.value); }} />
              </label>
              <label className="grid gap-2 text-sm font-bold text-white">
                Idade
                <input className={fieldClass} name="age" type="number" inputMode="numeric" required min={5} max={99} placeholder="Ex.: 24" />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold text-white">
              Instagram <span className="font-normal text-white/38">(opcional)</span>
              <input className={fieldClass} name="instagram" autoComplete="off" maxLength={60} placeholder="@seuusuario"
                onBlur={(blurEvent) => { blurEvent.currentTarget.value = normalizeInstagram(blurEvent.currentTarget.value); }} />
            </label>

            <input className="sr-only" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <label className="flex items-start gap-3 text-sm leading-relaxed text-white/55">
              <input name="consent" type="checkbox" required className="mt-1 size-4 shrink-0 accent-[#d9ff43]" />
              <span>Autorizo a YE Community a entrar em contato comigo sobre esta aula. Meus dados não serão compartilhados com terceiros.</span>
            </label>

            {submitState === "error" && (
              <div role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-100">
                {errorMessage} Tente novamente em instantes.
              </div>
            )}

            <button
              type="submit"
              disabled={submitState === "sending"}
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#d9ff43] px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:-translate-y-0.5 hover:bg-white disabled:cursor-wait disabled:opacity-65"
            >
              {submitState === "sending" ? "Enviando..." : "Garantir minha vaga"}
              <ArrowRight className="size-5 transition group-hover:translate-x-1" />
            </button>
            <p className="text-center text-xs text-white/35">Gratuito · {ribeiro.spots} vagas · {ribeiro.weekday}, {ribeiro.eventDateShort}, às {ribeiro.eventTime}</p>
          </form>
        )}
      </div>
    </section>
  );
}
