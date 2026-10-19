// Trimitere SMS prin GatewayAPI (furnizor UE, plată per mesaj, fără abonament).
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

export async function sendSms(recipients: string[], message: string): Promise<number> {
  const token = process.env["GATEWAYAPI_TOKEN"];
  const msisdns = Array.from(
    new Set(recipients.map(normalizeRoPhone).filter((x): x is string => !!x)),
  );
  if (!token || !msisdns.length) return 0;
  const sender = (process.env["SMS_SENDER"] || "MeditatiiD").slice(0, 11);
  try {
    const res = await fetch("https://gatewayapi.eu/rest/mtsms", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Token ${token}` },
      body: JSON.stringify({
        sender,
        message: message.slice(0, 300),
        recipients: msisdns.map((m) => ({ msisdn: Number(m) })),
      }),
    });
    if (!res.ok) {
      console.error("sms failed", res.status, await res.text().catch(() => ""));
      return 0;
    }
    return msisdns.length;
  } catch (err) {
    console.error("sms error", err);
    return 0;
  }
}
