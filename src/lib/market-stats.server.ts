// Server-only: calculează agregatele reale pentru paginile SEO (apelat din createServerFn).
// Doar agregate și câmpuri anonimizate pleacă de aici — niciodată nume, e-mailuri, telefoane sau text liber.
import type { ComboInput, ComboStats, TrustStats } from "@/lib/market-stats.functions";
import { CITIES } from "@/data/cities";
import { SUBJECTS_SEO } from "@/data/subjects-seo";
import { inLocalitate, potrivesteMaterie } from "@/lib/pagina-locala";

const norm = (s: string | null | undefined) =>
  (s ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

function quantiles(values: number[]) {
  const v = values.filter((x) => x > 0).sort((a, b) => a - b);
  if (!v.length) return null;
  const mid = Math.floor(v.length / 2);
  const median = v.length % 2 ? v[mid] : Math.round((v[mid - 1] + v[mid]) / 2);
  return { min: v[0], median, max: v[v.length - 1], n: v.length };
}

/** Shows only a known subject name (never the student's free text). */
function knownSubject(subject: string | null) {
  const n = norm(subject);
  if (!n) return null;
  return (
    SUBJECTS_SEO.find((x) => norm(x.name) === n || x.dbSlugs.some((d) => norm(d) === n))?.name ??
    null
  );
}

/** Shows only a known city name, "online" or a neutral label (never the student's free text). */
function knownPlace(isOnline: boolean, city: string | null, fallback: string) {
  if (isOnline) return "online";
  const n = norm(city);
  if (!n) return fallback;
  return (
    CITIES.find((c) => c.matchLocation.some((m) => n.includes(norm(m))))?.name ?? "altă localitate"
  );
}

export async function computeComboStats(data: ComboInput): Promise<ComboStats> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const matchesSubject = (s: string | null) =>
    potrivesteMaterie(s, data.subjectName, data.subjectSlugs);
  const inCity = (loc: string | null) => inLocalitate(loc, data.cityMatch);

  const [adsR, tpR, offR, reqR] = await Promise.all([
    supabaseAdmin
      .from("ads")
      .select("price_per_hour,location,is_online,subject_slug")
      .eq("status", "active")
      .in("subject_slug", data.subjectSlugs),
    supabaseAdmin
      .from("teacher_profiles")
      .select("user_id,subjects,city,online_available,levels")
      .eq("is_published", true),
    supabaseAdmin.from("teacher_offers").select("subject,price_per_hour").eq("status", "published"),
    supabaseAdmin
      .from("student_requests")
      .select("id,subject,level,city,is_online,budget_per_hour,created_at")
      .order("created_at", { ascending: false })
      .limit(1000),
  ]);

  const ads = (adsR.data ?? []).filter((a) => a.is_online || inCity(a.location));
  const localAds = ads.filter((a) => inCity(a.location));
  const teachers = (tpR.data ?? []).filter(
    (t) => (t.subjects ?? []).some(matchesSubject) && (t.online_available || inCity(t.city)),
  );
  const offers = (offR.data ?? []).filter((o) => matchesSubject(o.subject));
  const reqs = (reqR.data ?? []).filter((r) => matchesSubject(r.subject));
  const localReqs = reqs.filter((r) => r.is_online || inCity(r.city));

  let proposalPrices: number[] = [];
  let ratings: number[] = [];
  let firstProposalHours: number | null = null;
  let answeredRequests = 0;
  if (reqs.length) {
    const { data: props } = await supabaseAdmin
      .from("teacher_proposals")
      .select("request_id,price_per_hour,rating,created_at")
      .in(
        "request_id",
        reqs.map((r) => r.id),
      );
    proposalPrices = (props ?? []).map((p) => p.price_per_hour ?? 0);
    ratings = (props ?? []).map((p) => p.rating ?? 0).filter((x) => x > 0);
    const firstByReq = new Map<string, number>();
    for (const p of props ?? []) {
      const t = new Date(p.created_at).getTime();
      const prev = firstByReq.get(p.request_id);
      if (prev == null || t < prev) firstByReq.set(p.request_id, t);
    }
    const delays: number[] = [];
    for (const r of reqs) {
      const first = firstByReq.get(r.id);
      if (first == null) continue;
      const hours = (first - new Date(r.created_at).getTime()) / 3_600_000;
      if (hours >= 0) delays.push(hours);
    }
    answeredRequests = delays.length;
    if (delays.length) {
      delays.sort((a, b) => a - b);
      const mid = Math.floor(delays.length / 2);
      const med = delays.length % 2 ? delays[mid] : (delays[mid - 1] + delays[mid]) / 2;
      firstProposalHours = Math.round(med * 10) / 10;
    }
  }

  const price = quantiles([
    ...ads.map((a) => a.price_per_hour ?? 0),
    ...offers.map((o) => o.price_per_hour ?? 0),
    ...proposalPrices,
  ]);

  const lv = new Map<string, number>();
  for (const t of teachers)
    for (const l of (t.levels ?? []) as string[]) if (l) lv.set(l, (lv.get(l) ?? 0) + 1);
  return {
    priceOnline: quantiles(ads.filter((a) => a.is_online).map((a) => a.price_per_hour ?? 0)),
    priceInPerson: quantiles(
      localAds.filter((a) => !a.is_online).map((a) => a.price_per_hour ?? 0),
    ),
    teachersByLevel: [...lv.entries()]
      .map(([level, count]) => ({ level, count }))
      .sort((a, b) => b.count - a.count),
    listings: ads.length,
    localListings: localAds.length,
    onlineListings: ads.filter((a) => a.is_online).length,
    teachers: teachers.length,
    price,
    recentRequests: localReqs.slice(0, 5).map((r) => ({
      subject: knownSubject(r.subject),
      level: r.level,
      place: knownPlace(r.is_online, r.city, data.cityName),
      budget: r.budget_per_hour,
      date: r.created_at.slice(0, 10),
    })),
    requestsTotal: localReqs.length,
    cityRequests: data.cityMatch.length
      ? reqs.filter((r) => !r.is_online && inCity(r.city)).length
      : 0,
    firstProposalHours,
    answeredRequests,
    rating: ratings.length
      ? {
          avg: Math.round((ratings.reduce((s, x) => s + x, 0) / ratings.length) * 10) / 10,
          count: ratings.length,
        }
      : null,
    updatedAt: new Date().toISOString().slice(0, 10),
  };
}

export async function computeTrustStats(): Promise<TrustStats> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const [t, r, c, rt] = await Promise.all([
    supabaseAdmin
      .from("teacher_profiles")
      .select("id", { count: "exact", head: true })
      .eq("is_published", true),
    supabaseAdmin.from("student_requests").select("id", { count: "exact", head: true }),
    supabaseAdmin
      .from("teacher_proposals")
      .select("id", { count: "exact", head: true })
      .eq("status", "accepted"),
    supabaseAdmin.from("teacher_proposals").select("rating").not("rating", "is", null),
  ]);
  const vals = (rt.data ?? []).map((x) => x.rating ?? 0).filter((x) => x > 0);
  return {
    teachers: t.count ?? 0,
    requests: r.count ?? 0,
    completed: c.count ?? 0,
    ratings: vals.length,
    avgRating: vals.length
      ? Math.round((vals.reduce((s, x) => s + x, 0) / vals.length) * 10) / 10
      : null,
  };
}
