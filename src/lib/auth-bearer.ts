// Fără importuri din @tanstack/react-start: testabil direct cu bun.
/**
 * Antetul Authorization pentru apelurile către server. Clientul Supabase se încarcă la primul apel
 * (import dinamic), nu în pachetul principal al fiecărei pagini.
 */
export async function bearerHeaders(
  load: () => Promise<{ auth: { getSession: () => Promise<{ data: { session: { access_token?: string } | null } }> } }> =
    () => import("@/integrations/supabase/client").then((m) => m.supabase),
): Promise<Record<string, string>> {
  const supabase = await load();
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  return token ? { Authorization: `Bearer ${token}` } : {};
}
