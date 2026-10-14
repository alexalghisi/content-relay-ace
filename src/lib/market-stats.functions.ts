// Real, aggregated marketplace numbers for public SEO pages.
// Only aggregates and anonymised fields leave the server — never names, e-mails, phones or free text.
import { createServerFn } from "@tanstack/react-start";

/** A materie × oraș page is indexable only with at least this many real listings. */
export const MIN_LISTINGS_FOR_INDEX = 3;

const norm = (s: string | null | undefined) =>
  (s ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function quantiles(values: number[]) {
  const v = values.filter((x) => x > 0).sort((a, b) => a - b);
  if (!v.length) return null;
  const mid = Math.floor(v.length / 2);
  const median = v.length % 2 ? v[mid] : Math.round((v[mid - 1] + v[mid]) / 2);
  return { min: v[0], median, max: v[v.length - 1], n: v.length };
}

export interface ComboStats {
  listings: number;
  localListings: number;
  onlineListings: number;
  teachers: number;
  price: { min: number; median: number; max: number; n: number } | null;
  recentRequests: { level: string | null; place: string; budget: number | null; date: string }[];
  requestsTotal: number;
  rating: { avg: number; count: number } | null;
  updatedAt: string;
}

export const getComboStats = createServerFn({ method: "GET" })
  .inputValidator((d: { subjectSlugs: string[]; subjectName: string; cityName: string; cityMatch: string[] }) => d)
  .handler(async ({ data }): Promise<ComboStats> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const subj = norm(data.subjectName);
    const subjSlugs = data.subjectSlugs.map(norm);
    const matchesSubject = (s: string | null) => {
      const n = norm(s);
      return !!n && (n.includes(subj) || subjSlugs.some((x) => n.includes(x)));
    };
    const inCity = (loc: string | null) => data.cityMatch.some((m) => norm(loc).includes(norm(m)));

    const [adsR, tpR, offR, reqR] = await Promise.all([
      supabaseAdmin.from("ads").select("price_per_hour,location,is_online,subject_slug").eq("status", "active").in("subject_slug", data.subjectSlugs),
      supabaseAdmin.from("teacher_profiles").select("user_id,subjects,city,online_available").eq("is_published", true),
      supabaseAdmin.from("teacher_offers").select("subject,price_per_hour").eq("status", "published"),
      supabaseAdmin.from("student_requests").select("id,subject,level,city,is_online,budget_per_hour,created_at").order("created_at", { ascending: false }).limit(1000),
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
    if (reqs.length) {
      const { data: props } = await supabaseAdmin
        .from("teacher_proposals").select("price_per_hour,rating").in("request_id", reqs.map((r) => r.id));
      proposalPrices = (props ?? []).map((p) => p.price_per_hour ?? 0);
      ratings = (props ?? []).map((p) => p.rating ?? 0).filter((x) => x > 0);
    }

    const price = quantiles([
      ...ads.map((a) => a.price_per_hour ?? 0),
      ...offers.map((o) => o.price_per_hour ?? 0),
      ...proposalPrices,
    ]);

    return {
      listings: ads.length,
      localListings: localAds.length,
      onlineListings: ads.filter((a) => a.is_online).length,
      teachers: teachers.length,
      price,
      recentRequests: localReqs.slice(0, 5).map((r) => ({
        level: r.level,
        place: r.is_online ? "online" : (r.city ?? data.cityName),
        budget: r.budget_per_hour,
        date: r.created_at.slice(0, 10),
      })),
      requestsTotal: localReqs.length,
      rating: ratings.length ? { avg: Math.round((ratings.reduce((s, x) => s + x, 0) / ratings.length) * 10) / 10, count: ratings.length } : null,
      updatedAt: new Date().toISOString().slice(0, 10),
    };
  });

export interface TrustStats {
  teachers: number;
  requests: number;
  completed: number;
  ratings: number;
  avgRating: number | null;
}

export const getTrustStats = createServerFn({ method: "GET" }).handler(async (): Promise<TrustStats> => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const [t, r, c, rt] = await Promise.all([
    supabaseAdmin.from("teacher_profiles").select("id", { count: "exact", head: true }).eq("is_published", true),
    supabaseAdmin.from("student_requests").select("id", { count: "exact", head: true }),
    supabaseAdmin.from("teacher_proposals").select("id", { count: "exact", head: true }).eq("status", "accepted"),
    supabaseAdmin.from("teacher_proposals").select("rating").not("rating", "is", null),
  ]);
  const vals = (rt.data ?? []).map((x) => x.rating ?? 0).filter((x) => x > 0);
  return {
    teachers: t.count ?? 0,
    requests: r.count ?? 0,
    completed: c.count ?? 0,
    ratings: vals.length,
    avgRating: vals.length ? Math.round((vals.reduce((s, x) => s + x, 0) / vals.length) * 10) / 10 : null,
  };
});

/** Ratings a teacher received from students on accepted/answered proposals (real interactions only). */
export const getTeacherRating = createServerFn({ method: "GET" })
  .inputValidator((d: { userId: string }) => d)
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows } = await supabaseAdmin
      .from("teacher_proposals").select("rating").eq("user_id", data.userId).not("rating", "is", null);
    const vals = (rows ?? []).map((x) => x.rating ?? 0).filter((x) => x > 0);
    return vals.length
      ? { avg: Math.round((vals.reduce((s, x) => s + x, 0) / vals.length) * 10) / 10, count: vals.length }
      : null;
  });
