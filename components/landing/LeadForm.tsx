"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LockKeyhole } from "lucide-react";
import { event } from "@/data/event";

type SubmitState = "idle" | "sending" | "error";

export function LeadForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(formEvent: FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    setSubmitState("sending");
    setErrorMessage("");

    const form = formEvent.currentTarget;
    const formData = new FormData(form);
    const query = new URLSearchParams(window.location.search);

    const payload = {
      name: String(formData.get("name") || ""),
      whatsapp: String(formData.get("whatsapp") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
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

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(result?.message || "Não foi possível salvar seus dados agora.");
      }

      const metaWindow = window as typeof window & {
        fbq?: (action: string, eventName: string) => void;
      };
      metaWindow.fbq?.("track", "Lead");
      window.location.assign(event.eventCheckoutUrl);
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(error instanceof Error ? error.message : "Não foi possível salvar seus dados agora.");
    }
  }

  const fieldClass =
    "min-h-14 w-full rounded-xl border border-white/15 bg-white/[0.055] px-4 text-base text-white outline-none transition placeholder:text-white/30 focus:border-[#d9ff43] focus:ring-2 focus:ring-[#d9ff43]/20";

  return (
    <section id="inscricao" className="section-shell bg-[#070707]">
      <div className="grid gap-12 rounded-[2rem] border border-white/12 bg-[#101010] p-6 sm:p-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-16 lg:p-14">
        <div>
          <p className="eyebrow text-[#d9ff43]">Primeiro passo</p>
          <h2 className="mt-5 text-[clamp(2.8rem,6vw,6rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] text-white">
            Reserve seu interesse.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/55">
            Preencha seus dados para a YE Community acompanhar sua inscrição. Em seguida, você será direcionado ao Sympla para garantir o ingresso.
          </p>
          <div className="mt-8 space-y-4 text-sm font-bold text-white/68">
            <p className="flex items-center gap-3"><CheckCircle2 className="size-5 text-[#d9ff43]" />Leva menos de 1 minuto</p>
            <p className="flex items-center gap-3"><CheckCircle2 className="size-5 text-[#d9ff43]" />Depois você segue direto para o Sympla</p>
            <p className="flex items-center gap-3"><LockKeyhole className="size-5 text-[#d9ff43]" />Seus dados ficam protegidos com a YE Community</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5" aria-label="Formulário de interesse no evento">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-white">
              Nome completo
              <input className={fieldClass} name="name" autoComplete="name" required minLength={2} maxLength={120} placeholder="Como podemos chamar você?" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-white">
              WhatsApp
              <input className={fieldClass} name="whatsapp" autoComplete="tel" inputMode="tel" required minLength={8} maxLength={24} placeholder="(92) 99999-9999" />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-bold text-white">
            E-mail
            <input className={fieldClass} name="email" type="email" autoComplete="email" required maxLength={160} placeholder="voce@email.com" />
          </label>

          <label className="grid gap-2 text-sm font-bold text-white">
            Empresa ou projeto <span className="font-normal text-white/38">(opcional)</span>
            <input className={fieldClass} name="company" autoComplete="organization" maxLength={120} placeholder="Onde você está construindo hoje?" />
          </label>

          <input className="sr-only" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <label className="flex items-start gap-3 text-sm leading-relaxed text-white/55">
            <input name="consent" type="checkbox" required className="mt-1 size-4 shrink-0 accent-[#d9ff43]" />
            <span>Autorizo a YE Community a entrar em contato comigo sobre este evento. Meus dados não serão compartilhados com terceiros.</span>
          </label>

          {submitState === "error" && (
            <div role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-100">
              {errorMessage} Tente novamente ou <a className="font-bold underline" href={event.eventCheckoutUrl}>acesse o Sympla diretamente</a>.
            </div>
          )}

          <button
            type="submit"
            disabled={submitState === "sending"}
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#d9ff43] px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:-translate-y-0.5 hover:bg-white disabled:cursor-wait disabled:opacity-65"
          >
            {submitState === "sending" ? "Salvando seus dados..." : "Continuar para o Sympla"}
            <ArrowRight className="size-5 transition group-hover:translate-x-1" />
          </button>
          <p className="text-center text-xs text-white/35">O ingresso é finalizado e pago com segurança no Sympla.</p>
        </form>
      </div>
    </section>
  );
}
