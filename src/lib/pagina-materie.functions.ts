// Datele reale ale unei pagini /meditatii-{materie} (la nivel național): anunțurile active ale
// profesorilor, numărul lor și orașele unde pagina materie × oraș are conținut real (indexabilă).
import { createServerFn } from "@tanstack/react-start";
import { CITIES } from "@/data/cities";
import { getSubjectSeo } from "@/data/subjects-seo";
import type { AnuntCard } from "@/lib/pagina-locala.functions";

export interface PaginaMaterieData {
  anunturi: AnuntCard[];
  /** Anunțuri active ale materiei, în toată țara. */
  totalAnunturi: number;
  /** Profesori distincți cu anunț activ la materie. */
  profesori: number;
  /** Orașele cu pagină materie × oraș indexabilă, în ordinea din CITIES. */
  orase: { slug: string; name: string }[];
}

type Row = {
  id: string;
  title: string;
  seo_slug: string | null;
  price_per_hour: number | null;
  location: string | null;
  is_online: boolean | null;
  is_promoted: boolean | null;
  teacher_id: string | null;
  views_count: number | null;
  legacy_teachers: { full_name: string; avatar_url: string | null } | null;
};

export const getPaginaMaterieData = createServerFn({ method: "GET" })
  .inputValidator((d: { materie: string }) => d)
  .handler(async ({ data }): Promise<PaginaMaterieData> => {
    const subject = getSubjectSeo(data.materie);
    if (!subject) throw new Error("Materie necunoscută");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { comboIndexabil } = await import("@/lib/pagina-locala");
    const { getGhidLocal } = await import("@/data/ghiduri-locale");

    const [adsR, toateR, cereriR] = await Promise.all([
      supabaseAdmin
        .from("ads")
        .select(
          "id,title,seo_slug,price_per_hour,location,is_online,is_promoted,teacher_id,views_count,legacy_teachers(full_name,avatar_url)",
        )
        .eq("status", "active")
        .in("subject_slug", subject.dbSlugs)
        .limit(1000),
      supabaseAdmin
        .from("ads")
        .select("subject_slug,location,is_online")
        .eq("status", "active")
        .in("subject_slug", subject.dbSlugs)
        .limit(10000),
      supabaseAdmin
        .from("student_requests")
        .select("subject,city,is_online")
        .order("created_at", { ascending: false })
        .limit(1000),
    ]);
    if (adsR.error || toateR.error) throw new Error("Anunțurile nu pot fi încărcate momentan.");

    const rows = (adsR.data ?? []) as unknown as Row[];
    const sortate = [...rows].sort(
      (a, b) =>
        Number(b.is_promoted) - Number(a.is_promoted) || (b.views_count ?? 0) - (a.views_count ?? 0),
    );
    const anunturi: AnuntCard[] = sortate.slice(0, 12).map((a) => ({
      id: a.id,
      title: a.title,
      seo_slug: a.seo_slug,
      price_per_hour: a.price_per_hour,
      location: a.location,
      is_online: !!a.is_online,
      is_promoted: !!a.is_promoted,
      teacher_name: a.legacy_teachers?.full_name ?? null,
      avatar_url: a.legacy_teachers?.avatar_url ?? null,
    }));
    const profesori = new Set(rows.map((r) => r.teacher_id).filter(Boolean)).size;
    const toate = (toateR.data ?? []).map((r) => ({ ...r, is_online: !!r.is_online }));
    const cereri = cereriR.data ?? [];
    const orase = CITIES.filter((c) =>
      comboIndexabil(subject, c, toate, cereri, !!getGhidLocal(subject.slug, c.slug)),
    ).map((c) => ({ slug: c.slug, name: c.name }));
    return { anunturi, totalAnunturi: rows.length, profesori, orase };
  });
