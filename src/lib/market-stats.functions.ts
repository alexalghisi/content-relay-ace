// Real, aggregated marketplace numbers for public SEO pages.
// Only aggregates and anonymised fields leave the server — never names, e-mails, phones or free text.
import { createServerFn } from "@tanstack/react-start";

/** A materie × oraș page is indexable only with at least this many real listings. */
export const MIN_LISTINGS_FOR_INDEX = 3;

export interface ComboStats {
  listings: number;
  localListings: number;
  onlineListings: number;
  teachers: number;
  price: { min: number; median: number; max: number; n: number } | null;
  priceOnline: { min: number; median: number; max: number; n: number } | null;
  priceInPerson: { min: number; median: number; max: number; n: number } | null;
  teachersByLevel: { level: string; count: number }[];
  /** Latest anonymised student requests: subject, level, city (or "online"), budget, day — never names or contacts. */
  recentRequests: {
    subject: string | null;
    level: string | null;
    place: string;
    budget: number | null;
    date: string;
  }[];
  requestsTotal: number;
  /** Requests posted for this city itself (not online-only); 0 for nationwide stats. */
  cityRequests: number;
  /** Median hours from request posting to the first teacher proposal (real data), null when no proposal exists yet. */
  firstProposalHours: number | null;
  answeredRequests: number;
  rating: { avg: number; count: number } | null;
  updatedAt: string;
}

export interface ComboInput {
  subjectSlugs: string[];
  subjectName: string;
  cityName: string;
  /** Empty = nationwide (every city + online). */
  cityMatch: string[];
}

export const getComboStats = createServerFn({ method: "GET" })
  .inputValidator((d: ComboInput) => d)
  .handler(async ({ data }): Promise<ComboStats> => {
    const { computeComboStats } = await import("@/lib/market-stats.server");
    return computeComboStats(data);
  });

export interface TrustStats {
  teachers: number;
  requests: number;
  completed: number;
  ratings: number;
  avgRating: number | null;
}

export const getTrustStats = createServerFn({ method: "GET" }).handler(
  async (): Promise<TrustStats> => {
    const { computeTrustStats } = await import("@/lib/market-stats.server");
    return computeTrustStats();
  },
);

/** Ratings a teacher received from students on accepted/answered proposals (real interactions only). */
export const getTeacherRating = createServerFn({ method: "GET" })
  .inputValidator((d: { userId: string }) => d)
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: rows } = await supabaseAdmin
      .from("teacher_proposals")
      .select("rating")
      .eq("user_id", data.userId)
      .not("rating", "is", null);
    const vals = (rows ?? []).map((x) => x.rating ?? 0).filter((x) => x > 0);
    return vals.length
      ? {
          avg: Math.round((vals.reduce((s, x) => s + x, 0) / vals.length) * 10) / 10,
          count: vals.length,
        }
      : null;
  });
