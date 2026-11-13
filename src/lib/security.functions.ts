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
    const uid = context.userId;

    // Conversații + mesaje
    const { data: convs } = await supabaseAdmin
      .from("conversations")
      .select("id")
      .or(`student_id.eq.${uid},teacher_id.eq.${uid}`);
    const convIds = (convs ?? []).map((c) => c.id);
    if (convIds.length > 0) {
      await supabaseAdmin.from("messages").delete().in("conversation_id", convIds);
      await supabaseAdmin.from("conversations").delete().in("id", convIds);
    }

    // User-owned galleries and reviews use plain UUIDs, so clean them explicitly.
    for (;;) {
      const { data: objects, error: listError } = await supabaseAdmin.storage.from("avatars").list(uid, { limit: 100 });
      if (listError) throw new Error("Nu am putut verifica fotografiile contului.");
      if (!objects?.length) break;
      const { error: removeError } = await supabaseAdmin.storage.from("avatars").remove(objects.map((o) => `${uid}/${o.name}`));
      if (removeError) throw new Error("Nu am putut șterge fotografiile contului.");
    }
    // profesor_ai_utilizatori ține telefonul verificat: fără ștergere, numărul rămâne blocat după ștergerea contului.
    for (const table of ["profile_photos", "profesor_ai_reviews", "profesor_ai_review_eligibility", "profesor_ai_utilizatori"] as const) {
      const { error: cleanupError } = await supabaseAdmin.from(table).delete().eq("user_id", uid);
      if (cleanupError) throw new Error("Nu am putut șterge datele contului.");
    }
    // Profil
    await supabaseAdmin.from("profiles").delete().eq("user_id", uid);
    await supabaseAdmin.from("user_roles").delete().eq("user_id", uid);

    // Contul de autentificare
    const { error } = await supabaseAdmin.auth.admin.deleteUser(uid);
    if (error) throw new Error("Nu am putut șterge contul. Scrie-ne la alexalghisi@gmail.com.");

    return { ok: true };
  });
