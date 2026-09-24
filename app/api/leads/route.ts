import { put } from "@vercel/blob";
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

    if (name.length < 2 || phoneDigits.length < 8 || phoneDigits.length > 15 || !/^\S+@\S+\.\S+$/.test(email) || body.consent !== true) {
      return Response.json({ message: "Confira os campos obrigatórios e tente novamente." }, { status: 400 });
    }

    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    const record: LeadRecord = {
      id,
      createdAt,
      name,
      whatsapp,
      whatsappDigits: phoneDigits,
      email,
      company: cleanText(body.company, 120),
      status: "Novo lead",
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
    await put(`leads/${safeTimestamp}-${id}.json`, JSON.stringify(record), {
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
