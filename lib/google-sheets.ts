export type LeadRecord = {
  id: string;
  createdAt: string;
  name: string;
  whatsapp: string;
  whatsappDigits: string;
  email: string;
  company: string;
  status: string;
  source: {
    page: string;
    referrer: string;
    utmSource: string;
    utmMedium: string;
    utmCampaign: string;
    utmContent: string;
    utmTerm: string;
  };
  consent: true;
  userAgent: string;
};

type SyncResult =
  | { status: "disabled" }
  | { status: "synced"; duplicate: boolean };

export async function appendLeadToGoogleSheet(lead: LeadRecord): Promise<SyncResult> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL?.trim();
  const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET?.trim();

  if (!webhookUrl || !webhookSecret) {
    return { status: "disabled" };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret: webhookSecret, lead }),
    cache: "no-store",
    signal: AbortSignal.timeout(8_000),
  });

  if (!response.ok) {
    throw new Error(`Google Sheets webhook returned HTTP ${response.status}.`);
  }

  const result = (await response.json().catch(() => null)) as
    | { ok?: boolean; duplicate?: boolean; message?: string }
    | null;

  if (!result?.ok) {
    throw new Error(result?.message || "Google Sheets webhook rejected the lead.");
  }

  return { status: "synced", duplicate: result.duplicate === true };
}
