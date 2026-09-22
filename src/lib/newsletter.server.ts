// Trimitere server-side a emailului de confirmare pentru newsletter.
// Folosește aceeași coadă de emailuri ca restul aplicației (service role).
import * as React from "react";
import { render } from "@react-email/render";
import { createClient } from "@supabase/supabase-js";
import { TEMPLATES } from "@/lib/email-templates/registry";

const SITE_NAME = "meditatiidirect.ro";
const SENDER_DOMAIN = "notify.meditatiidirect.ro";
const FROM_DOMAIN = "meditatiidirect.ro";

export function adminClient() {
  const url = process.env["SUPABASE_URL"] ?? process.env["VITE_SUPABASE_URL"];
  const key = process.env["SUPABASE_SERVICE_ROLE_KEY"];
  if (!url || !key) throw new Error("Missing Supabase server credentials");
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

/** Pune în coadă emailul de confirmare. Întoarce true dacă a fost acceptat. */
export async function queueConfirmationEmail(opts: {
  email: string;
  confirmUrl: string;
  materie?: string;
}): Promise<boolean> {
  const template = TEMPLATES["newsletter-confirm"];
  if (!template) return false;

  try {
    const supabase = adminClient();
    const recipient = opts.email.toLowerCase();

    const { data: suppressed } = await supabase
      .from("suppressed_emails")
      .select("id")
      .eq("email", recipient)
      .maybeSingle();
    if (suppressed) return false;

    const element = React.createElement(template.component, {
      confirmUrl: opts.confirmUrl,
      materie: opts.materie,
    });
    const html = await render(element);
    const text = await render(element, { plainText: true });
    const messageId = crypto.randomUUID();

    const { error } = await supabase.rpc("enqueue_email", {
      queue_name: "transactional_emails",
      payload: {
        message_id: messageId,
        to: recipient,
        from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
        sender_domain: SENDER_DOMAIN,
        subject:
          typeof template.subject === "function" ? template.subject({}) : template.subject,
        html,
        text,
        purpose: "transactional",
        label: "newsletter-confirm",
        idempotency_key: messageId,
        queued_at: new Date().toISOString(),
      },
    });

    if (error) {
      console.error("[newsletter] enqueue failed", error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[newsletter] confirmation email failed", err);
    return false;
  }
}
