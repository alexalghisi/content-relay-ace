import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SITE = "https://meditatiidirect.ro";

const SubscribeSchema = z.object({
  email: z.string().email().max(200),
  materie: z.string().max(60).optional(),
});

/** Salvează abonarea și trimite emailul de confirmare (dublă confirmare). */
export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => SubscribeSchema.parse(data))
  .handler(async ({ data }) => {
    const { adminClient, queueConfirmationEmail } = await import("@/lib/newsletter.server");
    const email = data.email.trim().toLowerCase();
    const supabase = adminClient();

    const { data: existing } = await supabase
      .from("newsletter_subscribers")
      .select("confirm_token, confirmed_at")
      .eq("email", email)
      .maybeSingle();

    let token = existing?.confirm_token as string | undefined;

    if (existing?.confirmed_at) {
      return { status: "already_confirmed" as const, emailSent: false };
    }

    if (!existing) {
      const { data: inserted, error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email, materii: data.materie ? [data.materie] : [] })
        .select("confirm_token")
        .single();
      if (error) {
        console.error("[newsletter] insert failed", error.message);
        return { status: "error" as const, emailSent: false };
      }
      token = inserted?.confirm_token as string;
    }

    if (!token) return { status: "error" as const, emailSent: false };

    const emailSent = await queueConfirmationEmail({
      email,
      confirmUrl: `${SITE}/newsletter/confirm?t=${token}`,
      materie: data.materie,
    });

    return { status: "pending" as const, emailSent };
  });

/** Activează abonarea pe baza codului din emailul de confirmare. */
export const confirmNewsletter = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => z.object({ token: z.string().min(10).max(64) }).parse(data))
  .handler(async ({ data }) => {
    const { adminClient } = await import("@/lib/newsletter.server");
    const supabase = adminClient();

    const { data: row } = await supabase
      .from("newsletter_subscribers")
      .select("id, confirmed_at")
      .eq("confirm_token", data.token)
      .maybeSingle();

    if (!row) return { ok: false as const, reason: "invalid" as const };
    if (row.confirmed_at) return { ok: true as const, reason: "already" as const };

    const { error } = await supabase
      .from("newsletter_subscribers")
      .update({ confirmed_at: new Date().toISOString() })
      .eq("id", row.id);

    if (error) {
      console.error("[newsletter] confirm failed", error.message);
      return { ok: false as const, reason: "error" as const };
    }
    return { ok: true as const, reason: "confirmed" as const };
  });
