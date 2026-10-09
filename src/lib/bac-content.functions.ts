// Citiri publice pentru arhiva BAC pe sesiuni și rezolvările explicate.
// Rulează pe server cu cheia publishable (RLS ca anon) — fără secrete în client.
import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

/** Doar rezolvările făcute pe subiectul oficial (PDF verificat) sunt publice și indexabile. */
export const REZOLVARE_SURSA_OFICIALA = "subiect_oficial";

function publicClient() {
  return createClient<Database>(
    process.env["SUPABASE_URL"] ?? process.env["VITE_SUPABASE_URL"]!,
    process.env["SUPABASE_PUBLISHABLE_KEY"] ?? process.env["VITE_SUPABASE_PUBLISHABLE_KEY"]!,
    { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } },
  );
}

const ComboSchema = z.object({
  materie: z.string().min(1).max(40).regex(/^[a-z][a-z0-9-]*$/),
  an: z.coerce.number().int().min(2000).max(2035),
  sesiune: z.enum(["iunie", "august", "speciala", "simulare"]),
});

export const getVariantaSesiune = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) => ComboSchema.parse(input))
  .handler(async ({ data }) => {
    const sb = publicClient();
    const prefix = `${data.materie}/${data.an}/${data.sesiune}-`;
    const [{ data: varianta }, { data: rezolvare }, { data: names }] = await Promise.all([
      sb
        .from("bac_variante")
        .select("id, subiect_path, barem_path, specializare, are_rezolvare, updated_at")
        .eq("materie", data.materie)
        .eq("an", data.an)
        .eq("sesiune", data.sesiune)
        .maybeSingle(),
      sb
        .from("bac_rezolvari")
        .select("slug, dificultate, timp_estimat_minute, status")
        .eq("materie", data.materie)
        .eq("an", data.an)
        .eq("sesiune", data.sesiune)
        .eq("sursa", REZOLVARE_SURSA_OFICIALA)
        .maybeSingle(),
      sb.rpc("bac_pdf_names", { _prefix: prefix }),
    ]);
    const files = new Set((names ?? []) as string[]);
    return {
      varianta: varianta ?? null,
      rezolvare: rezolvare ?? null,
      pdfs: {
        subiect: files.has(`${prefix}subiect.pdf`) ? `${prefix}subiect.pdf` : null,
        barem: files.has(`${prefix}barem.pdf`) ? `${prefix}barem.pdf` : null,
      },
    };
  });

export const getRezolvare = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) => ComboSchema.parse(input))
  .handler(async ({ data }) => {
    const sb = publicClient();
    const { data: rezolvare } = await sb
      .from("bac_rezolvari")
      .select("titlu, continut, dificultate, timp_estimat_minute, status, updated_at, sursa")
      .eq("materie", data.materie)
      .eq("an", data.an)
      .eq("sesiune", data.sesiune)
      .eq("sursa", REZOLVARE_SURSA_OFICIALA)
      .maybeSingle();
    return { rezolvare: rezolvare ?? null };
  });

export const listRezolvari = createServerFn({ method: "GET" }).handler(async () => {
  const sb = publicClient();
  const { data } = await sb
    .from("bac_rezolvari")
    .select("materie, an, sesiune, dificultate, timp_estimat_minute, status")
    .eq("sursa", REZOLVARE_SURSA_OFICIALA)
    .order("an", { ascending: false })
    .limit(500);
  return { items: data ?? [] };
});

const MaterieSchema = z.object({
  materie: z.string().min(1).max(40).regex(/^[a-z][a-z0-9-]*$/),
});

export interface VariantaDisponibila {
  an: number;
  sesiune: "iunie" | "august" | "speciala" | "simulare";
  subiect_path: string;
  are_barem: boolean;
}

/** Variantele pentru care subiectul există efectiv în Storage (nu doar în tabel). */
export const getVarianteMaterie = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) => MaterieSchema.parse(input))
  .handler(async ({ data }) => {
    const sb = publicClient();
    const { data: names } = await sb.rpc("bac_pdf_names", { _prefix: `${data.materie}/` });
    const byCombo = new Map<string, VariantaDisponibila>();
    for (const n of (names ?? []) as string[]) {
      const m = /^([a-z][a-z0-9-]*)\/(\d{4})\/(iunie|august|speciala|simulare)-(subiect|barem)\.pdf$/.exec(n);
      if (!m || m[1] !== data.materie) continue;
      const key = `${m[2]}-${m[3]}`;
      const row = byCombo.get(key) ?? {
        an: Number(m[2]),
        sesiune: m[3] as VariantaDisponibila["sesiune"],
        subiect_path: "",
        are_barem: false,
      };
      if (m[4] === "subiect") row.subiect_path = n;
      else row.are_barem = true;
      byCombo.set(key, row);
    }
    const variante = [...byCombo.values()]
      .filter((v) => v.subiect_path)
      .sort((a, b) => b.an - a.an || a.sesiune.localeCompare(b.sesiune));
    return { variante };
  });
