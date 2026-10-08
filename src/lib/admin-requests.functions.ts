import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/** Doar administratorii pot șterge definitiv o cerere (și propunerile ei). */
export const adminDeleteRequest = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: { requestId: string }) => {
    if (!data?.requestId || typeof data.requestId !== "string") throw new Error("Cerere invalidă");
    return { requestId: data.requestId };
  })
  .handler(async ({ data, context }): Promise<{ ok: boolean; error?: string }> => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", { _user_id: context.userId, _role: "admin" });
    if (!isAdmin) return { ok: false, error: "Doar administratorul poate șterge cereri." };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await supabaseAdmin.from("teacher_proposals").delete().eq("request_id", data.requestId);
    const { error } = await supabaseAdmin.from("student_requests").delete().eq("id", data.requestId);
    return error ? { ok: false, error: error.message } : { ok: true };
  });
