// Primește e-mailurile trimise la admin@meditatiidirect.ro, redirecționate de Mailgun (Inbound Routes → forward).
// Verifică semnătura Mailgun înainte de a salva ceva.
import { createFileRoute } from "@tanstack/react-router";

async function validSignature(key: string, timestamp: string, token: string, signature: string) {
  if (!timestamp || !token || !signature) return false;
  if (Math.abs(Date.now() / 1000 - Number(timestamp)) > 900) return false;
  const k = await crypto.subtle.importKey("raw", new TextEncoder().encode(key), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const mac = await crypto.subtle.sign("HMAC", k, new TextEncoder().encode(timestamp + token));
  const hex = Array.from(new Uint8Array(mac)).map((b) => b.toString(16).padStart(2, "0")).join("");
  if (hex.length !== signature.length) return false;
  let diff = 0;
  for (let i = 0; i < hex.length; i++) diff |= hex.charCodeAt(i) ^ signature.charCodeAt(i);
  return diff === 0;
}

export const Route = createFileRoute("/api/public/hooks/inbound-email")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const key = process.env["MAILGUN_WEBHOOK_SIGNING_KEY"];
        if (!key) return new Response("Not configured", { status: 503 });

        const form = await request.formData();
        const get = (n: string) => String(form.get(n) ?? "");
        if (!(await validSignature(key, get("timestamp"), get("token"), get("signature")))) {
          return new Response("Forbidden", { status: 403 });
        }

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { error } = await supabaseAdmin.from("inbound_emails").insert({
          from_address: (get("from") || get("sender")).slice(0, 500),
          to_address: (get("recipient") || "admin@meditatiidirect.ro").slice(0, 500),
          subject: get("subject").slice(0, 1000) || null,
          body_text: (get("body-plain") || get("stripped-text")).slice(0, 200000) || null,
          body_html: get("body-html").slice(0, 400000) || null,
        });
        if (error) {
          console.error("[inbound-email] insert failed", error.message);
          return new Response("Error", { status: 500 });
        }
        return new Response("OK");
      },
    },
  },
});
