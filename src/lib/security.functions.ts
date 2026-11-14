import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const getMyPrivateProfile = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin
      .from("profiles")
      .select("display_name,phone,city,bio,avatar_url")
      .eq("user_id", context.userId)
      .maybeSingle();

    if (error) throw new Error("Nu am putut încărca profilul.");
    return data ?? null;
  });

export const markConversationRead = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input) =>
    z.object({ conversationId: z.string().uuid() }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: conversation, error: readError } = await supabaseAdmin
      .from("conversations")
      .select("id,student_id,teacher_id")
      .eq("id", data.conversationId)
      .maybeSingle();

    if (readError) throw new Error("Nu am putut verifica conversația.");
    if (!conversation) throw new Error("Conversația nu există.");

    const update =
      conversation.student_id === context.userId
        ? { student_unread: 0 }
        : conversation.teacher_id === context.userId
          ? { teacher_unread: 0 }
          : null;

    if (!update) throw new Error("Nu ai acces la această conversație.");

    const { error: updateError } = await supabaseAdmin
      .from("conversations")
      .update(update)
      .eq("id", data.conversationId);

    if (updateError) throw new Error("Nu am putut marca mesajele ca citite.");
    return { ok: true };
  });

/**
 * GDPR — ștergere definitivă cont + date personale, inițiată de utilizator.
 * Șterge anunțurile, conversațiile, mesajele, profilul și contul de autentificare.
 */
export const deleteMyAccount = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input) =>
    z.object({ confirm: z.literal("STERGE") }).parse(input),
  )
  .handler(async ({ context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { stergeContComplet } = await import("@/lib/stergere-cont.server");
    // Contul, profilul public de profesor, ofertele, fotografiile și mesajele.
    await stergeContComplet(supabaseAdmin, context.userId);
    return { ok: true };
  });
