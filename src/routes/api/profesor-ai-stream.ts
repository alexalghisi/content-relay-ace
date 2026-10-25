// Streaming Profesor AI reply (plain text deltas). Caller must send its Supabase bearer token and
// the sealed session token; quota and session rules match profesorAiRaspunde.
import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { PaConfig } from "@/lib/profesor-ai";

const body = z.object({
  token: z.string().max(4000),
  mesaje: z
    .array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().min(1).max(3000) }))
    .min(1)
    .max(60)
    .refine((m) => m[m.length - 1].role === "user"),
  // Board drawing / shared photo, re-encoded client-side as JPEG (≈ ≤ 1.5 MB).
  imagine: z.string().regex(/^data:image\/(jpeg|png|webp);base64,/).max(2_000_000).optional(),
  // Owner-only: compare tutor models live without a redeploy.
  model: z.string().max(80).optional(),
});

const err = (status: number, error: string, cod?: string) =>
  Response.json({ error, cod }, { status });

export const Route = createFileRoute("/api/profesor-ai-stream")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const jwt = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
        if (!jwt) return err(401, "Autentifică-te din nou.", "auth_user");
        const url = process.env["SUPABASE_URL"];
        const anon = process.env["SUPABASE_PUBLISHABLE_KEY"];
        if (!url || !anon) return err(500, "Configurare incompletă.", "config");
        const sb = createClient(url, anon, { auth: { persistSession: false, autoRefreshToken: false } });
        // getClaims verifies the JWT signature locally (cached JWKS) — no extra auth round trip.
        const { data: cl } = await sb.auth.getClaims(jwt);
        const userId = typeof cl?.claims?.sub === "string" ? cl.claims.sub : undefined;
        if (!userId) return err(401, "Autentifică-te din nou.", "auth_user");

        const parsed = body.safeParse(await request.json().catch(() => null));
        if (!parsed.success) return err(400, "Cerere invalidă.");
        const ai = await import("@/lib/ai-gateway.server");
        type S = PaConfig & { kind: string; uid: string; exp: number; gratuit: boolean };
        const s = await ai.unseal<S>(parsed.data.token);
        if (!s || s.kind !== "profesor-ai" || s.uid !== userId || (!s.gratuit && Date.now() > s.exp))
          return err(403, "Sesiunea s-a încheiat. Poți începe o sesiune nouă.");

        const { LIMITA_PROFESOR_ZI } = await import("@/lib/profesor-ai.functions");
        const t = await import("@/lib/profesor-ai-tutor.server");
        const { poateTestaProfesorAi } = await import("@/lib/profesor-ai-access");
        const m = parsed.data.model;
        const model = m && poateTestaProfesorAi(userId) && t.MODELE_TEST.test(m) ? m : undefined;
        // The quota check (a database round trip) runs in parallel with the model's first token.
        const cota = s.gratuit ? Promise.resolve({ ok: true }) : ai.takeQuota(userId, "profesor-ai", LIMITA_PROFESOR_ZI);
        const flux = t.streamTutor(t.tutorPrompt(s, s.durata, s.exp), parsed.data.mesaje, parsed.data.imagine, model);
        flux.catch(() => {}); // handled below; avoids an unhandled rejection while the quota is checked
        const q = await cota;
        if (!q.ok) {
          void flux.then((st) => st.cancel()).catch(() => {});
          return err(429, `Ai atins limita de ${LIMITA_PROFESOR_ZI} de mesaje pe zi. Revino mâine.`, "limita_interna");
        }
        const quota = !s.gratuit;
        try {
          const stream = await flux;
          return new Response(stream, {
            headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
          });
        } catch (e) {
          if (quota && ai.eroareFurnizor(e)) await ai.refundQuota(userId, "profesor-ai");
          if (e instanceof ai.AiError) return err(502, e.userMessage, e.kind);
          return err(502, "Serviciul AI nu a răspuns. Încearcă din nou.", "upstream");
        }
      },
    },
  },
});
