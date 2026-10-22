// Citiri publice pentru arhiva BAC pe sesiuni și rezolvările explicate.
// Rulează pe server cu cheia publishable (RLS ca anon) — fără secrete în client.
import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import { subiecteVerificate, verificaVarianta, type VariantaVerificata } from "@/lib/bac-verificare";
import { REZOLVARI_PUBLICATE, rezolvarePublicata } from "@/data/rezolvari-verificate";

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
    // Afișăm ca oficiale doar documentele care trec auditul de conținut (src/lib/bac-verificare.ts).
    const verificare: VariantaVerificata = verificaVarianta(data.materie, data.an, data.sesiune, files);
    const statica = rezolvarePublicata(data.materie, data.an, data.sesiune);
    return {
      varianta: varianta ?? null,
      rezolvare: statica
        ? { slug: `rezolvare-${data.materie}-${data.an}-${data.sesiune}`, dificultate: statica.dificultate, timp_estimat_minute: statica.timpMinute, status: statica.status }
        : (rezolvare ?? null),
      pdfs: { subiect: verificare.subiect, barem: verificare.barem },
      verificare,
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
  // Rezolvările verificate din repo au prioritate față de rândurile din DB pe aceeași variantă.
  const statice = REZOLVARI_PUBLICATE.map((r) => ({
    materie: r.materie,
    an: r.an,
    sesiune: r.sesiune,
    dificultate: r.dificultate,
    timp_estimat_minute: r.timpMinute,
    status: "verificat",
  }));
  const chei = new Set(statice.map((r) => `${r.materie}/${r.an}/${r.sesiune}`));
  const items = [...statice, ...(data ?? []).filter((r) => !chei.has(`${r.materie}/${r.an}/${r.sesiune}`))].sort(
    (a, b) => b.an - a.an,
  );
  return { items };
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
    const { data: raw } = await sb.rpc("bac_pdf_names", { _prefix: `${data.materie}/` });
    const all = (raw ?? []) as string[];
    const ok = subiecteVerificate(all);
    const names = all.filter((n) => ok.has(n) || (n.endsWith("-barem.pdf") && ok.has(n.replace(/-barem\.pdf$/, "-subiect.pdf"))));
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
      else row.are_barem = verificaVarianta(data.materie, Number(m[2]), m[3] as VariantaDisponibila["sesiune"], new Set(all)).barem !== null;
      byCombo.set(key, row);
    }
    const variante = [...byCombo.values()]
      .filter((v) => v.subiect_path)
      .sort((a, b) => b.an - a.an || a.sesiune.localeCompare(b.sesiune));
    return { variante };
  });

/** Câte variante reale are fiecare materie, numărate din fișierele efectiv prezente în Storage. */
export const getArhivaBAC = createServerFn({ method: "GET" }).handler(async () => {
  const sb = publicClient();
  const { data: names } = await sb.rpc("bac_pdf_names", { _prefix: "" });
  const contor = new Map<string, { ani: Set<number>; sesiuni: number; cuBarem: number }>();
  for (const n of (names ?? []) as string[]) {
    const m = /^([a-z][a-z0-9-]*)\/(\d{4})\/(iunie|august|speciala|simulare)-(subiect|barem)\.pdf$/.exec(n);
    if (!m) continue;
    const row = contor.get(m[1]) ?? { ani: new Set<number>(), sesiuni: 0, cuBarem: 0 };
    if (m[4] === "subiect") {
      row.ani.add(Number(m[2]));
      row.sesiuni += 1;
    } else row.cuBarem += 1;
    contor.set(m[1], row);
  }
  return {
    materii: [...contor.entries()].map(([materie, r]) => ({
      materie,
      ani: r.ani.size,
      sesiuni: r.sesiuni,
      cuBarem: r.cuBarem,
      ultimul_an: Math.max(...r.ani),
    })),
  };
});
