import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { reviewSchema } from "./review-validation";

export const getMyAiReview = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(async ({ context }) => {
  const [eligible, review] = await Promise.all([
    context.supabase.from("profesor_ai_review_eligibility").select("user_id").eq("user_id", context.userId).maybeSingle(),
    context.supabase.from("profesor_ai_reviews").select("rating,comment").eq("user_id", context.userId).maybeSingle(),
  ]);
  if (eligible.error || review.error) throw new Error("Nu am putut încărca evaluarea.");
  return { eligible: Boolean(eligible.data), review: review.data };
});
export const saveMyAiReview = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((d) => reviewSchema.parse(d)).handler(async ({ data, context }) => {
  const { data: eligible, error: check } = await context.supabase.from("profesor_ai_review_eligibility").select("user_id").eq("user_id", context.userId).maybeSingle();
  if (check || !eligible) throw new Error("Evaluarea este disponibilă după o conversație confirmată cu Profesor AI.");
  const { error } = await context.supabase.from("profesor_ai_reviews").upsert({ user_id: context.userId, ...data }, { onConflict: "user_id" });
  if (error) throw new Error("Evaluarea nu s-a salvat. Reîncearcă.");
  return { ok: true };
});