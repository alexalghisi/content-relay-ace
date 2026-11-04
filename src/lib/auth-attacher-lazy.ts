import { createMiddleware } from "@tanstack/react-start";

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

/**
 * Echivalentul lui integrations/supabase/auth-attacher.ts (fișier generat), dar fără import static al
 * clientului: acela aducea auth/realtime/storage (~45 KB comprimat) pe fiecare pagină, inclusiv pe
 * paginile publice fără login. Trebuie înregistrat ca functionMiddleware global în src/start.ts.
 */
export const attachSupabaseAuthLazy = createMiddleware({ type: "function" }).client(async ({ next }) =>
  next({ headers: await bearerHeaders() }),
);
