"use client";

import { FormEvent, useState } from "react";
import { Download, LoaderCircle, LockKeyhole, RefreshCw } from "lucide-react";

type Lead = {
  id: string;
  createdAt: string;
  name: string;
  whatsapp: string;
  email: string;
  company: string;
  status: string;
  source?: {
    page?: string;
    referrer?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    utmTerm?: string;
  };
};

function csvCell(value: unknown) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

export function LeadsDashboard() {
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [message, setMessage] = useState("");

  async function loadLeads(event?: FormEvent) {
    event?.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "x-admin-password": password },
      });
      const result = (await response.json()) as { leads?: Lead[]; message?: string };
      if (!response.ok) throw new Error(result.message || "Não foi possível carregar os cadastros.");
      setLeads(result.leads || []);
      setAuthenticated(true);
    } catch (error) {
      setAuthenticated(false);
      setMessage(error instanceof Error ? error.message : "Não foi possível carregar os cadastros.");
    } finally {
      setLoading(false);
    }
  }

  function exportCsv() {
    const headers = ["Data", "Nome", "WhatsApp", "E-mail", "Empresa ou projeto", "Status", "Página", "Origem", "Mídia", "Campanha", "Conteúdo", "Termo", "Referência"];
    const rows = leads.map((lead) => [
      new Date(lead.createdAt).toLocaleString("pt-BR"),
      lead.name,
      lead.whatsapp,
      lead.email,
      lead.company,
      lead.status,
      lead.source?.page,
      lead.source?.utmSource,
      lead.source?.utmMedium,
      lead.source?.utmCampaign,
      lead.source?.utmContent,
      lead.source?.utmTerm,
      lead.source?.referrer,
    ]);
    const csv = "\uFEFF" + [headers, ...rows].map((row) => row.map(csvCell).join(";")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `leads-yecommunity-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  if (!authenticated) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#070707] px-5 text-white">
        <form onSubmit={loadLeads} className="w-full max-w-md rounded-[1.6rem] border border-white/15 bg-[#101010] p-7 sm:p-9">
          <span className="grid size-12 place-items-center rounded-full bg-[#d9ff43] text-black"><LockKeyhole className="size-5" /></span>
          <h1 className="mt-7 text-3xl font-black uppercase tracking-[-0.05em]">Cadastros YE</h1>
          <p className="mt-3 text-sm leading-relaxed text-white/50">Área privada para consultar e exportar os contatos interessados no evento.</p>
          <label className="mt-7 grid gap-2 text-sm font-bold">
            Senha de acesso
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="current-password" className="min-h-13 rounded-xl border border-white/15 bg-white/[0.055] px-4 outline-none focus:border-[#d9ff43]" />
          </label>
          {message && <p role="alert" className="mt-4 text-sm text-red-300">{message}</p>}
          <button disabled={loading} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#d9ff43] px-5 text-sm font-black uppercase tracking-[0.08em] text-black disabled:opacity-60">
            {loading ? <LoaderCircle className="size-4 animate-spin" /> : null}{loading ? "Carregando..." : "Entrar"}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070707] px-5 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-6 border-b border-white/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="eyebrow text-[#d9ff43]">Área privada</p><h1 className="mt-3 text-4xl font-black uppercase tracking-[-0.06em] sm:text-6xl">Leads YE Community</h1><p className="mt-3 text-white/45">{leads.length} cadastro{leads.length === 1 ? "" : "s"} registrado{leads.length === 1 ? "" : "s"}</p></div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => loadLeads()} disabled={loading} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-5 text-sm font-bold hover:bg-white/5"><RefreshCw className={`size-4 ${loading ? "animate-spin" : ""}`} />Atualizar</button>
            <button onClick={exportCsv} disabled={!leads.length} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#d9ff43] px-5 text-sm font-black text-black disabled:opacity-40"><Download className="size-4" />Exportar CSV</button>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-white/12">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead className="bg-white/[0.06] text-xs uppercase tracking-[0.1em] text-white/45"><tr><th className="p-4">Data</th><th className="p-4">Nome</th><th className="p-4">WhatsApp</th><th className="p-4">E-mail</th><th className="p-4">Empresa / projeto</th><th className="p-4">Origem</th><th className="p-4">Status</th></tr></thead>
            <tbody className="divide-y divide-white/10">
              {leads.map((lead) => (
                <tr key={lead.id} className="bg-[#101010] align-top hover:bg-white/[0.055]">
                  <td className="whitespace-nowrap p-4 text-white/55">{new Date(lead.createdAt).toLocaleString("pt-BR")}</td>
                  <td className="p-4 font-bold">{lead.name}</td>
                  <td className="whitespace-nowrap p-4"><a className="text-[#d9ff43] hover:underline" href={`https://wa.me/55${lead.whatsapp.replace(/\D/g, "").replace(/^55/, "")}`} target="_blank" rel="noreferrer">{lead.whatsapp}</a></td>
                  <td className="p-4"><a className="text-white/75 hover:underline" href={`mailto:${lead.email}`}>{lead.email}</a></td>
                  <td className="p-4 text-white/60">{lead.company || "—"}</td>
                  <td className="p-4 text-white/60">{lead.source?.utmCampaign || lead.source?.utmSource || "Direto"}</td>
                  <td className="p-4"><span className="rounded-full border border-[#d9ff43]/30 px-3 py-1 text-xs font-bold text-[#d9ff43]">{lead.status}</span></td>
                </tr>
              ))}
              {!leads.length && <tr><td colSpan={7} className="p-12 text-center text-white/40">Nenhum cadastro recebido ainda.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
