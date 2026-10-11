import { list, put } from "@vercel/blob";
import { ribeiro } from "@/data/ribeiro";
import { appendLeadToGoogleSheet, type LeadRecord } from "@/lib/google-sheets";

export const runtime = "nodejs";

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12_000) {
    return Response.json({ message: "Dados enviados acima do limite." }, { status: 413 });
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;

    if (cleanText(body.website, 200)) {
      return Response.json({ ok: true });
    }

    const name = cleanText(body.name, 120);
    const whatsapp = cleanText(body.whatsapp, 24);
    const email = cleanText(body.email, 160).toLowerCase();
    const phoneDigits = whatsapp.replace(/\D/g, "");
    const isRibeiro = body.event === ribeiro.slug;
    const age = Number(body.age);

    const invalid = isRibeiro
      ? !Number.isInteger(age) || age < 5 || age > 99
      : !/^\S+@\S+\.\S+$/.test(email);
    if (name.length < 2 || phoneDigits.length < 8 || phoneDigits.length > 15 || invalid || body.consent !== true) {
      return Response.json({ message: "Confira os campos obrigatórios e tente novamente." }, { status: 400 });
    }

    // Aula YE × Ribeiro: uma vaga por WhatsApp e no máximo ribeiro.spots inscrições.
    // ponytail: duas inscrições simultâneas na última vaga podem passar juntas; aceitável para 60 vagas.
    const ribeiroPath = `leads/ribeiro/${phoneDigits}.json`;
    if (isRibeiro) {
      const { blobs } = await list({ prefix: "leads/ribeiro/", limit: 1000 });
      if (blobs.some((blob) => blob.pathname === ribeiroPath)) {
        return Response.json({ ok: true, duplicate: true });
      }
      if (blobs.length >= ribeiro.spots) {
        return Response.json({ message: "As vagas desta aula já foram preenchidas.", soldOut: true }, { status: 409 });
      }
    }

    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    const record: LeadRecord = {
      id,
      createdAt,
      name,
      whatsapp,
      whatsappDigits: phoneDigits,
      email: isRibeiro ? "" : email,
      company: isRibeiro ? "" : cleanText(body.company, 120),
      status: isRibeiro ? "Inscrito" : "Novo lead",
      ...(isRibeiro && { event: ribeiro.slug, instagram: cleanText(body.instagram, 60), age }),
      source: {
        page: cleanText(body.page, 200),
        referrer: cleanText(body.referrer, 500),
        utmSource: cleanText(body.utmSource, 200),
        utmMedium: cleanText(body.utmMedium, 200),
        utmCampaign: cleanText(body.utmCampaign, 200),
        utmContent: cleanText(body.utmContent, 200),
        utmTerm: cleanText(body.utmTerm, 200),
      },
      consent: true,
      userAgent: cleanText(request.headers.get("user-agent"), 500),
    };

    const safeTimestamp = createdAt.replace(/[:.]/g, "-");
    await put(isRibeiro ? ribeiroPath : `leads/${safeTimestamp}-${id}.json`, JSON.stringify(record), {
      access: "private",
      addRandomSuffix: false,
      contentType: "application/json",
    });

    let googleSheetSynced = false;
    try {
      const syncResult = await appendLeadToGoogleSheet(record);
      googleSheetSynced = syncResult.status === "synced";
    } catch (error) {
      console.error("Failed to sync lead to Google Sheets", error);
    }

    return Response.json({ ok: true, googleSheetSynced });
  } catch (error) {
    console.error("Failed to save lead", error);
    return Response.json({ message: "Não foi possível salvar seus dados agora." }, { status: 500 });
  }
}
