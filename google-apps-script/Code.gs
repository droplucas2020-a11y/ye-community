const LEADS_SHEET_NAME = "Leads";
const LEADS_HEADERS = [
  "Data e hora",
  "ID",
  "Nome",
  "WhatsApp",
  "E-mail",
  "Empresa ou projeto",
  "Status",
  "Página",
  "Referência",
  "UTM Source",
  "UTM Medium",
  "UTM Campaign",
  "UTM Content",
  "UTM Term",
  "Consentimento",
  "Recebido na planilha",
];

/**
 * Execute esta função uma vez no editor do Apps Script.
 * Antes de executar, troque o valor abaixo por um segredo longo e aleatório.
 */
function setupGoogleSheetsWebhook() {
  const webhookSecret = "SUBSTITUA-POR-UM-SEGREDO-LONGO-E-ALEATORIO";

  if (webhookSecret.startsWith("SUBSTITUA-")) {
    throw new Error("Defina WEBHOOK_SECRET antes de executar a configuração.");
  }

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) {
    throw new Error("Abra o Apps Script a partir da planilha que receberá os leads.");
  }

  PropertiesService.getScriptProperties().setProperties({
    SPREADSHEET_ID: spreadsheet.getId(),
    WEBHOOK_SECRET: webhookSecret,
  });

  getOrCreateLeadsSheet_(spreadsheet);
}

function doPost(event) {
  const lock = LockService.getScriptLock();

  try {
    const payload = JSON.parse(event?.postData?.contents || "{}");
    const properties = PropertiesService.getScriptProperties();
    const expectedSecret = properties.getProperty("WEBHOOK_SECRET") || "";
    const spreadsheetId = properties.getProperty("SPREADSHEET_ID") || "";

    if (!expectedSecret || payload.secret !== expectedSecret) {
      return jsonResponse_({ ok: false, message: "Não autorizado." });
    }

    if (!spreadsheetId || !payload.lead?.id) {
      return jsonResponse_({ ok: false, message: "Configuração ou lead inválido." });
    }

    lock.waitLock(20_000);

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = getOrCreateLeadsSheet_(spreadsheet);
    const lead = payload.lead;

    if (leadAlreadyExists_(sheet, String(lead.id))) {
      return jsonResponse_({ ok: true, duplicate: true });
    }

    sheet.appendRow([
      validDate_(lead.createdAt),
      safeCell_(lead.id),
      safeCell_(lead.name),
      safeCell_(lead.whatsapp),
      safeCell_(lead.email),
      safeCell_(lead.company),
      safeCell_(lead.status),
      safeCell_(lead.source?.page),
      safeCell_(lead.source?.referrer),
      safeCell_(lead.source?.utmSource),
      safeCell_(lead.source?.utmMedium),
      safeCell_(lead.source?.utmCampaign),
      safeCell_(lead.source?.utmContent),
      safeCell_(lead.source?.utmTerm),
      lead.consent === true ? "Sim" : "Não",
      new Date(),
    ]);

    const row = sheet.getLastRow();
    sheet.getRange(row, 1).setNumberFormat("dd/mm/yyyy hh:mm:ss");
    sheet.getRange(row, 16).setNumberFormat("dd/mm/yyyy hh:mm:ss");
    SpreadsheetApp.flush();

    return jsonResponse_({ ok: true, duplicate: false });
  } catch (error) {
    console.error("Falha ao registrar lead", error);
    return jsonResponse_({ ok: false, message: "Não foi possível registrar o lead." });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function getOrCreateLeadsSheet_(spreadsheet) {
  let sheet = spreadsheet.getSheetByName(LEADS_SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(LEADS_SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, LEADS_HEADERS.length).setValues([LEADS_HEADERS]);
    sheet.setFrozenRows(1);
    sheet
      .getRange(1, 1, 1, LEADS_HEADERS.length)
      .setBackground("#5d45ff")
      .setFontColor("#ffffff")
      .setFontWeight("bold");
    sheet.autoResizeColumns(1, LEADS_HEADERS.length);
  }

  return sheet;
}

function leadAlreadyExists_(sheet, leadId) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;
  const ids = sheet.getRange(2, 2, lastRow - 1, 1).getDisplayValues();
  return ids.some(([id]) => id === leadId);
}

function safeCell_(value) {
  const text = String(value ?? "");
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}

function validDate_(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
