import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const norm = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/^limba\s+/, "").trim();

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// Called right after a student posts a request. Idempotent: each request notifies teachers once,
// and only within 15 minutes of creation, so the public endpoint cannot be used to spam.
export const notifyTeachersOfRequest = createServerFn({ method: "POST" })
  .inputValidator((d) => z.object({ requestId: z.string().uuid() }).parse(d))
  .handler(async ({ data }) => {
    const LOVABLE_API_KEY = process.env["LOVABLE_API_KEY"];
    const RESEND_API_KEY = process.env["RESEND_API_KEY"];
    if (!LOVABLE_API_KEY || !RESEND_API_KEY) return { sent: 0 };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const since = new Date(Date.now() - 15 * 60_000).toISOString();
    const { data: req } = await supabaseAdmin
      .from("student_requests")
      .update({ teachers_notified_at: new Date().toISOString() })
      .eq("id", data.requestId)
      .is("teachers_notified_at", null)
      .gte("created_at", since)
      .select("id,subject,level,city,is_online")
      .maybeSingle();
    if (!req) return { sent: 0 };

    const subj = norm(req.subject);
    const { data: teachers } = await supabaseAdmin
      .from("teacher_profiles")
      .select("user_id,display_name,subjects,contact_email");
    const emails = new Set<string>();
    const list: { to: string; name: string }[] = [];
    for (const t of teachers ?? []) {
      const match = (t.subjects ?? []).some((s: string) => {
        const n = norm(s);
        return n && (n === subj || n.includes(subj) || subj.includes(n));
      });
      if (!match) continue;
      let to = t.contact_email?.trim();
      if (!to) {
        const { data: u } = await supabaseAdmin.auth.admin.getUserById(t.user_id);
        to = u.user?.email ?? undefined;
      }
      if (!to || emails.has(to.toLowerCase())) continue;
      emails.add(to.toLowerCase());
      list.push({ to, name: t.display_name });
    }
    if (!list.length) return { sent: 0 };

    const where = req.is_online ? "online" : req.city ? `în ${req.city}` : "";
    const subject = `Un elev caută meditații la ${req.subject}${where ? " " + where : ""}`;
    const url = "https://meditatiidirect.ro/cereri";
    const from = process.env["RESEND_FROM"] || "MeditatiiDirect <cereri@meditatiidirect.ro>";

    const payload = list.map(({ to, name }) => ({
      from,
      to: [to],
      subject,
      html: `<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;padding:24px;color:#1f2937">
<p>Bună, ${esc(name || "")}!</p>
<p>Un elev tocmai a postat o cerere pe <strong>MeditatiiDirect</strong>:</p>
<ul><li><strong>Materie:</strong> ${esc(req.subject)}</li>${req.level ? `<li><strong>Nivel:</strong> ${esc(req.level)}</li>` : ""}<li><strong>Unde:</strong> ${esc(where || "—")}</li></ul>
<p><a href="${url}" style="display:inline-block;background:#1d4ed8;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none">Vezi cererea și trimite propunerea</a></p>
<p style="font-size:12px;color:#6b7280">Primești acest e-mail pentru că ești înscris ca profesor de ${esc(req.subject)} pe meditatiidirect.ro.</p></div>`,
    }));

    let sent = 0;
    for (let i = 0; i < payload.length; i += 100) {
      const res = await fetch("https://connector-gateway.lovable.dev/resend/emails/batch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "X-Connection-Api-Key": RESEND_API_KEY,
        },
        body: JSON.stringify(payload.slice(i, i + 100)),
      });
      if (!res.ok) {
        console.error(`Resend batch failed [${res.status}]: ${await res.text()}`);
        continue;
      }
      sent += Math.min(100, payload.length - i);
    }
    return { sent };
  });
