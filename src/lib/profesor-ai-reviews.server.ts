/** Called only after a server-observed successful response; never trust client claims of usage. */
export async function markAiReviewEligible(userId: string) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { error } = await supabaseAdmin.from("profesor_ai_review_eligibility").upsert({ user_id: userId }, { onConflict: "user_id", ignoreDuplicates: true });
  if (error) console.warn("[review] eligibility persistence failed");
}