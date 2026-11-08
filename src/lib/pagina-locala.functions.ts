// Datele reale ale unei pagini materie × oraș, într-un singur apel server:
// anunțuri din oraș, anunțuri online ale materiei (din toată țara), statistici locale,
// statistici naționale când cele locale sunt prea puține, și cifrele de încredere.
import { createServerFn } from "@tanstack/react-start";
import { getCityBySlug } from "@/data/cities";
import { getSubjectSeo } from "@/data/subjects-seo";
import type { ComboStats, TrustStats } from "@/lib/market-stats.functions";

export interface AnuntCard {
  id: string;
  title: string;
  seo_slug: string | null;
  price_per_hour: number | null;
  location: string | null;
  is_online: boolean;
  is_promoted: boolean;
  teacher_name: string | null;
  avatar_url: string | null;
}

export interface ComboPageData {
  /** Anunțuri active ale unor profesori cu locația în oraș. */
  local: AnuntCard[];
  /** Anunțuri active online ale materiei, din toată țara (fără cele din oraș). */
  online: AnuntCard[];
  stats: ComboStats;
  /** Agregatele naționale ale materiei, doar când cele locale sunt sub prag. */
  national: ComboStats | null;
  trust: TrustStats;
}

type Row = {
  id: string;
  title: string;
  seo_slug: string | null;
  price_per_hour: number | null;
  location: string | null;
  is_online: boolean;
  is_promoted: boolean;
  legacy_teachers: { full_name: string; avatar_url: string | null } | null;
};

const card = (a: Row): AnuntCard => ({
  id: a.id,
  title: a.title,
  seo_slug: a.seo_slug,
  price_per_hour: a.price_per_hour,
  location: a.location,
  is_online: a.is_online,
  is_promoted: a.is_promoted,
  teacher_name: a.legacy_teachers?.full_name ?? null,
  avatar_url: a.legacy_teachers?.avatar_url ?? null,
});

const COLS =
  "id,title,seo_slug,price_per_hour,location,is_online,is_promoted,legacy_teachers(full_name,avatar_url)";

export const getComboPageData = createServerFn({ method: "GET" })
  .inputValidator((d: { materie: string; oras: string }) => d)
  .handler(async ({ data }): Promise<ComboPageData> => {
    const subject = getSubjectSeo(data.materie);
    const city = getCityBySlug(data.oras);
    if (!subject || !city) throw new Error("Combinație necunoscută");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { computeComboStats, computeTrustStats } = await import("@/lib/market-stats.server");
    const { necesitaDateNationale } = await import("@/lib/pagina-locala");

    const locFilter = city.matchLocation.map((m) => `location.ilike.%${m}%`).join(",");
    const [localR, onlineR, stats, trust] = await Promise.all([
      supabaseAdmin
        .from("ads")
        .select(COLS)
        .eq("status", "active")
        .in("subject_slug", subject.dbSlugs)
        .or(locFilter)
        .order("is_promoted", { ascending: false })
        .order("views_count", { ascending: false })
        .limit(24),
      supabaseAdmin
        .from("ads")
        .select(COLS)
        .eq("status", "active")
        .in("subject_slug", subject.dbSlugs)
        .eq("is_online", true)
        .order("is_promoted", { ascending: false })
        .order("views_count", { ascending: false })
        .limit(40),
      computeComboStats({
        subjectSlugs: subject.dbSlugs,
        subjectName: subject.nameLower,
        cityName: city.name,
        cityMatch: city.matchLocation,
      }),
      computeTrustStats(),
    ]);
    if (localR.error || onlineR.error) throw new Error("Anunțurile nu pot fi încărcate momentan.");
    const local = ((localR.data ?? []) as unknown as Row[]).map(card);
    const localIds = new Set(local.map((a) => a.id));
    const online = ((onlineR.data ?? []) as unknown as Row[])
      .filter((a) => !localIds.has(a.id))
      .slice(0, 9)
      .map(card);
    const national = necesitaDateNationale(stats)
      ? await computeComboStats({
          subjectSlugs: subject.dbSlugs,
          subjectName: subject.nameLower,
          cityName: "România",
          cityMatch: [],
        })
      : null;
    return { local, online, stats, national, trust };
  });
