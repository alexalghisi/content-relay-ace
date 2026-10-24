// Trimitere SMS prin GatewayAPI global (contul configurat nu este pe domeniul EU).
// Activ doar dacă secretul GATEWAYAPI_TOKEN este setat în Lovable Cloud; altfel nu face nimic.
// Opțional: SMS_SENDER (max. 11 caractere alfanumerice), implicit „MeditatiiD”.

/** Normalizează un număr românesc la formatul internațional fără „+” (ex. 40712345678). */
export function normalizeRoPhone(raw: string | null | undefined): string | null {
  if (!raw) return null;
  let d = raw.replace(/[^\d+]/g, "");
  if (d.startsWith("+")) d = d.slice(1);
  if (d.startsWith("00")) d = d.slice(2);
  if (d.startsWith("0") && d.length === 10) d = "40" + d.slice(1);
  // Doar mobile RO (07xx) — SMS-urile către fix nu ajung.
  return /^407\d{8}$/.test(d) ? d : null;
}

export type SmsSubmission = {
  accepted: number;
  messageIds: number[];
  httpStatus: number | null;
};

/** Acceptarea de către API nu confirmă livrarea pe telefon. ID-urile rămân server-side. */
export async function sendSmsTracked(recipients: string[], message: string): Promise<SmsSubmission> {
  const token = process.env["GATEWAYAPI_TOKEN"];
  const msisdns = Array.from(
    new Set(recipients.map(normalizeRoPhone).filter((x): x is string => !!x)),
  );
  if (!token || !msisdns.length) return { accepted: 0, messageIds: [], httpStatus: null };
  const sender = (process.env["SMS_SENDER"] || "MeditatiiD").slice(0, 11);
  try {
    const res = await fetch("https://gatewayapi.com/rest/mtsms", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Token ${token}` },
      body: JSON.stringify({
        sender,
        message: message.slice(0, 300),
        recipients: msisdns.map((m) => ({ msisdn: Number(m) })),
      }),
    });
    if (!res.ok) {
      // Nu logăm corpul furnizorului: poate include telefonul sau codul SMS.
      console.error("sms failed", res.status);
      return { accepted: 0, messageIds: [], httpStatus: res.status };
    }
    const body = await res.json().catch(() => null);
    const ids: unknown[] = Array.isArray(body?.ids) ? body.ids : [];
    return {
      accepted: msisdns.length,
      messageIds: ids.filter((id): id is number => typeof id === "number" && Number.isSafeInteger(id) && id > 0),
      httpStatus: res.status,
    };
  } catch {
    console.error("sms network error");
    return { accepted: 0, messageIds: [], httpStatus: null };
  }
}

/** Compatibilitate: numărul mesajelor ACCEPTATE, nu al mesajelor livrate. */
export async function sendSms(recipients: string[], message: string): Promise<number> {
  return (await sendSmsTracked(recipients, message)).accepted;
}

export type SmsDelivery = {
  state: "pending" | "delivered" | "failed" | "unknown";
  httpStatus: number | null;
  providerStatuses: string[];
};

/**
 * GET consultă arhiva GatewayAPI, populată doar după trimitere.
 * Un 404 pentru un ID recent acceptat înseamnă stare indisponibilă încă,
 * nu eșecul livrării. Arhiva păstrează mesajele numai 7 zile.
 * Nu retrimite SMS-ul când statusul lipsește; reverifică același ID.
 */
export async function getSmsDelivery(messageId: number): Promise<SmsDelivery> {
  const token = process.env["GATEWAYAPI_TOKEN"];
  if (!token || !Number.isSafeInteger(messageId) || messageId <= 0)
    return { state: "unknown", httpStatus: null, providerStatuses: [] };
  try {
    const res = await fetch(`https://gatewayapi.com/rest/mtsms/${messageId}`, {
      headers: { Authorization: `Token ${token}` },
    });
    if (res.status === 404) return { state: "unknown", httpStatus: 404, providerStatuses: [] };
    if (!res.ok) {
      console.error("sms status failed", res.status);
      return { state: "unknown", httpStatus: res.status, providerStatuses: [] };
    }
    const body = await res.json();
    const rows = Array.isArray(body) ? body : [body];
    const statuses: string[] = rows.flatMap((row) => Array.isArray(row?.recipients) ? row.recipients : [])
      .map((recipient) => recipient?.dsnstatus)
      .filter((status): status is string => typeof status === "string")
      .map((status) => status.toUpperCase());
    // Expose only known status enums, never arbitrary provider strings/PII.
    const known = statuses.filter((status) => ["DELIVERED", "UNDELIVERABLE", "REJECTED", "EXPIRED", "FAILED", "ACCEPTED", "QUEUED", "SENT", "ENROUTE", "UNKNOWN"].includes(status));
    const state = statuses.length > 0 && statuses.every((status) => status === "DELIVERED") ? "delivered"
      : statuses.some((status) => ["UNDELIVERABLE", "REJECTED", "EXPIRED", "FAILED"].includes(status)) ? "failed"
      : known.length === statuses.length && known.length > 0 ? "pending" : "unknown";
    return { state, httpStatus: res.status, providerStatuses: known };
  } catch {
    console.error("sms status network error");
    return { state: "unknown", httpStatus: null, providerStatuses: [] };
  }
}
