import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const getMyPrivateProfile = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await supabaseAdmin
      .from("profiles")
      .select("display_name,phone,city,bio")
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