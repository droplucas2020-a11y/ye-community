import { get, list } from "@vercel/blob";
import { timingSafeEqual } from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function validPassword(received: string) {
  const expected = process.env.LEADS_ADMIN_PASSWORD || "";
  if (!received || !expected) return false;
  const receivedBuffer = Buffer.from(received);
  const expectedBuffer = Buffer.from(expected);
  return receivedBuffer.length === expectedBuffer.length && timingSafeEqual(receivedBuffer, expectedBuffer);
}

async function listLeadBlobs() {
  const blobs = [];
  let cursor: string | undefined;

  do {
    const page = await list({ prefix: "leads/", cursor, limit: 1000 });
    blobs.push(...page.blobs);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);

  return blobs;
}

export async function POST(request: Request) {
  if (!validPassword(request.headers.get("x-admin-password") || "")) {
    return Response.json({ message: "Senha incorreta." }, { status: 401 });
  }

  try {
    const blobs = await listLeadBlobs();
    const leads = await Promise.all(
      blobs.map(async (blob) => {
        const result = await get(blob.url, { access: "private" });
        if (!result?.stream) return null;
        return JSON.parse(await new Response(result.stream).text());
      }),
    );

    return Response.json(
      { leads: leads.filter(Boolean).sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt))) },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("Failed to load leads", error);
    return Response.json({ message: "Não foi possível carregar os cadastros." }, { status: 500 });
  }
}
