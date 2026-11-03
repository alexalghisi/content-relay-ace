/**
 * Trimite emailuri de cont (confirmare înregistrare). Server-only.
 * 1) Resend prin connector-ul Lovable (RESEND_API_KEY, același canal ca notificările către elevi);
 * 2) altfel Lovable Emails, domeniul notify.meditatiidirect.ro (LOVABLE_API_KEY).
 * Întoarce true doar dacă un provider a acceptat mesajul. Nu loghează niciodată linkul/tokenul.
 */
export type EmailCont = { to: string; subject: string; html: string; text: string; label: string };

export async function trimiteEmailCont(m: EmailCont): Promise<boolean> {
  const LOVABLE_API_KEY = process.env["LOVABLE_API_KEY"];
  const RESEND_API_KEY = process.env["RESEND_API_KEY"];

  if (LOVABLE_API_KEY && RESEND_API_KEY) {
    const from = process.env["RESEND_FROM"] || "MeditatiiDirect <cont@meditatiidirect.ro>";
    const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({ from, to: [m.to], subject: m.subject, html: m.html, text: m.text }),
    }).catch(() => null);
    if (res?.ok) return true;
    console.error(`[email-cont] resend ${res ? res.status : "network"} (${m.label})`);
  }

  if (LOVABLE_API_KEY) {
    try {
      const { sendLovableEmail } = await import("@lovable.dev/email-js");
      const r = await sendLovableEmail(
        {
          to: m.to,
          from: "meditatiidirect.ro <noreply@meditatiidirect.ro>",
          sender_domain: "notify.meditatiidirect.ro",
          subject: m.subject,
          html: m.html,
          text: m.text,
          purpose: "auth",
          label: m.label,
          message_id: crypto.randomUUID(),
        },
        { apiKey: LOVABLE_API_KEY, sendUrl: process.env["LOVABLE_SEND_URL"] },
      );
      if (r.success) return true;
      console.error(`[email-cont] lovable rejected (${m.label})`);
    } catch (e) {
      console.error(`[email-cont] lovable ${(e as { status?: number })?.status ?? "error"} (${m.label})`);
    }
  }
  return false;
}
