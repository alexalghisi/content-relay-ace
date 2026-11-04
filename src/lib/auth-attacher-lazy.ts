import { createMiddleware } from "@tanstack/react-start";
import { bearerHeaders } from "./auth-bearer";

/**
 * Echivalentul lui integrations/supabase/auth-attacher.ts (fișier generat), dar fără import static al
 * clientului: acela aducea auth/realtime/storage (~45 KB comprimat) pe fiecare pagină, inclusiv pe
 * paginile publice fără login. Trebuie înregistrat ca functionMiddleware global în src/start.ts.
 */
export const attachSupabaseAuthLazy = createMiddleware({ type: "function" }).client(async ({ next }) =>
  next({ headers: await bearerHeaders() }),
);
