import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { sendSms } from "@/lib/sms.server";
import {
  htmlEmail,
  linkCerere,
  subiectEmail,
  textEmail,
  textSms,
  type DatePropunere,
} from "@/lib/notify-student-mesaje";

/**
 * Deduplicare fără coloană nouă în DB: cache-ul edge al Cloudflare reține 1 h că o propunere a fost
 * anunțată. Dacă API-ul nu există (dev local), fereastra scurtă de timp + autentificarea limitează abuzul.
 */
async function claimOnce(key: string): Promise<boolean> {
  try {
    const c = (globalThis as unknown as { caches?: { default?: Cache } }).caches?.default;
    if (!c) return true;
    const req = new Request(`https://notify.meditatiidirect.ro/${key}`);
    if (await c.match(req)) return false;
    await c.put(req, new Response("1", { headers: { "Cache-Control": "max-age=3600" } }));
    return true;
  } catch {
    return true;
  }
}

/**
 * Apelat de profesor imediat după ce trimite o propunere. Anunță elevul pe email (link privat către
 * cererea lui) și, dacă a lăsat telefon, prin SMS. Doar autorul propunerii, doar în primele 3 minute.
 */
export const notifyStudentOfProposal = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ proposalId: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: prop } = await supabaseAdmin
      .from("teacher_proposals")
      .select("id,user_id,request_id,created_at,price_per_hour,proposed_date,proposed_time")
      .eq("id", data.proposalId)
      .maybeSingle();
    if (!prop || prop.user_id !== context.userId) return { email: 0, sms: 0 };
    if (Date.now() - new Date(prop.created_at).getTime() > 3 * 60_000) return { email: 0, sms: 0 };
    if (!(await claimOnce(`proposal-${prop.id}`))) return { email: 0, sms: 0 };

    const [{ data: req }, { data: teacher }] = await Promise.all([
      supabaseAdmin
        .from("student_requests")
        .select("id,subject,contact_name,contact_email,contact_phone,access_token")
        .eq("id", prop.request_id)
        .maybeSingle(),
      supabaseAdmin
        .from("teacher_profiles")
        .select("display_name")
        .eq("user_id", prop.user_id)
        .maybeSingle(),
    ]);
    if (!req) return { email: 0, sms: 0 };

    const mesaj: DatePropunere = {
      numeElev: req.contact_name,
      profesor: teacher?.display_name,
      materie: req.subject,
      pretPeOra: prop.price_per_hour,
      data: prop.proposed_date,
      ora: prop.proposed_time ? String(prop.proposed_time) : null,
      link: linkCerere(req.id, req.access_token),
    };

    let email = 0;
    const LOVABLE_API_KEY = process.env["LOVABLE_API_KEY"];
    const RESEND_API_KEY = process.env["RESEND_API_KEY"];
    if (LOVABLE_API_KEY && RESEND_API_KEY && req.contact_email) {
      const from = process.env["RESEND_FROM"] || "MeditatiiDirect <cereri@meditatiidirect.ro>";
      const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "X-Connection-Api-Key": RESEND_API_KEY,
        },
        body: JSON.stringify({
          from,
          to: [req.contact_email],
          subject: subiectEmail(mesaj),
          html: htmlEmail(mesaj),
          text: textEmail(mesaj),
        }),
      }).catch(() => null);
      if (res?.ok) email = 1;
      else if (res)
        console.error("student email failed", res.status, await res.text().catch(() => ""));
    }

    const sms = req.contact_phone ? await sendSms([req.contact_phone], textSms(mesaj)) : 0;
    return { email, sms };
  });
