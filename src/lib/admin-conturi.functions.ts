// Ștergerea unui cont la cererea titularului (GDPR), din pagina /admin/stergere-cont. Doar admin.
import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** Acceptă e-mailul, ID-ul contului sau linkul / slugul profilului public (/profesor/{slug}). */
export function tipIdentificator(v: string): { tip: "email" | "uid" | "slug"; valoare: string } {
  const s = v.trim();
  if (UUID.test(s)) return { tip: "uid", valoare: s.toLowerCase() };
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)) return { tip: "email", valoare: s.toLowerCase() };
  const slug = s.replace(/^https?:\/\/[^/]+/, "").replace(/^\/?profesor\//, "").replace(/[/?#].*$/, "");
  return { tip: "slug", valoare: slug };
}

type Rezultat = { ok: true; sterse: number } | { ok: false; error: string };

export const adminStergeCont = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { identificator: string; confirm: string }) => {
    if (d?.confirm !== "STERGE") throw new Error("Confirmă cu STERGE.");
    if (!d.identificator?.trim()) throw new Error("Lipsește contul.");
    return d;
  })
  .handler(async ({ data, context }): Promise<Rezultat> => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", { _user_id: context.userId, _role: "admin" });
    if (!isAdmin) return { ok: false, error: "Doar administratorul poate șterge conturi." };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { stergeContComplet } = await import("@/lib/stergere-cont.server");

    const id = tipIdentificator(data.identificator);
    let uid: string | null = id.tip === "uid" ? id.valoare : null;
    if (id.tip === "slug") {
      const { data: p } = await supabaseAdmin.from("teacher_profiles").select("user_id").eq("slug", id.valoare).maybeSingle();
      uid = p?.user_id ?? null;
    }
    if (id.tip === "email") {
      for (let page = 1; page <= 100 && !uid; page++) {
        const { data: lista, error } = await supabaseAdmin.auth.admin.listUsers({ page, perPage: 1000 });
        if (error) return { ok: false, error: "Nu pot căuta contul momentan." };
        uid = lista.users.find((u) => u.email?.toLowerCase() === id.valoare)?.id ?? null;
        if (lista.users.length < 1000) break;
      }
    }
    if (!uid) return { ok: false, error: "Nu am găsit niciun cont sau profil pentru acest identificator." };
    if (uid === context.userId) return { ok: false, error: "Nu îți poți șterge propriul cont de aici." };
    await stergeContComplet(supabaseAdmin, uid);
    return { ok: true, sterse: 1 };
  });

/** Curăță profilurile publice de profesor rămase de la conturi deja șterse (cu fotografiile lor). */
export const adminCurataConturiSterse = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<Rezultat> => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", { _user_id: context.userId, _role: "admin" });
    if (!isAdmin) return { ok: false, error: "Doar administratorul poate face curățenia." };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { stergeContComplet } = await import("@/lib/stergere-cont.server");

    const existente = new Set<string>();
    for (let page = 1; page <= 100; page++) {
      const { data: lista, error } = await supabaseAdmin.auth.admin.listUsers({ page, perPage: 1000 });
      if (error) return { ok: false, error: "Nu pot lista conturile momentan." };
      for (const u of lista.users) existente.add(u.id);
      if (lista.users.length < 1000) break;
    }
    const { data: profile, error } = await supabaseAdmin.from("teacher_profiles").select("user_id");
    if (error) return { ok: false, error: error.message };
    const orfane = [...new Set((profile ?? []).map((p) => p.user_id))].filter((u) => !existente.has(u));
    for (const uid of orfane) await stergeContComplet(supabaseAdmin, uid);

    // Fotografiile rămase în storage (avatars/{uid}/…) ale conturilor care nu mai există.
    const { stergeFisiereCont } = await import("@/lib/stergere-cont.server");
    let fotoSterse = 0;
    for (let offset = 0; ; offset += 1000) {
      const { data: foldere, error: listErr } = await supabaseAdmin.storage
        .from("avatars")
        .list("", { limit: 1000, offset });
      if (listErr) return { ok: false, error: "Nu pot lista fotografiile momentan." };
      for (const f of foldere ?? []) {
        if (f.id === null && UUID.test(f.name) && !existente.has(f.name)) {
          await stergeFisiereCont(supabaseAdmin, f.name);
          fotoSterse++;
        }
      }
      if ((foldere ?? []).length < 1000) break;
    }
    return { ok: true, sterse: orfane.length + fotoSterse };
  });
