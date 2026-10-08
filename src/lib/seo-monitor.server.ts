import { SEO_DOMAINS, SEO_KEYWORDS, SEO_MARKET, providerFailure, romaniaReportDate } from "./seo-monitor-config";

/** Called only after the hook's server-only secret has been verified. */
export async function collectDailySeoReport() {
  const key = process.env.SEMRUSH_API_KEY;
  const gatewayKey = process.env.LOVABLE_API_KEY;
  if (!key || !gatewayKey) throw new Error("Semrush connection is not configured");
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const day = romaniaReportDate();
  // Unique day claims prevent simultaneous or repeated callbacks spending quota.
  const { error: claimError } = await supabaseAdmin.from("daily_seo_reports").insert({ report_date: day });
  if (claimError?.code === "23505") return { status: "already_collected", day };
  if (claimError) throw new Error(claimError.message);
  const reports: Record<string, any> = { source: "Semrush", market: SEO_MARKET, note: "Estimated monthly demand and domain visibility; not Google Trends or exact live keyword positions." };
  let failure: string | null = null;
  const requests = [
    { name: "keywords", path: "keywords/phrase_these", params: { phrase: SEO_KEYWORDS.join(";"), database: SEO_MARKET, export_columns: "Ph,Nq", display_limit: "9" } },
    ...SEO_DOMAINS.map(domain => ({ name: domain, path: "domains/domain_rank", params: { domain, database: SEO_MARKET, export_columns: "Dn,Rk,Or,Ot" } })),
  ];
  try {
    for (const item of requests) {
      const url = new URL(`https://connector-gateway.lovable.dev/semrush/${item.path}`);
      for (const [name, value] of Object.entries(item.params)) if (value !== undefined) url.searchParams.set(name, value);
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${gatewayKey}`, "X-Connection-Api-Key": key },
        signal: AbortSignal.timeout(20000),
      });
      const text = await response.text();
      let body: unknown;
      try { body = JSON.parse(text); } catch { body = { error: text }; }
      const error = providerFailure(response.status, body);
      if (error) {
        console.error(error);
        failure = error;
        break; // Do not repeatedly consume quota after a provider failure.
      }
      reports[item.name] = body;
    }
  } catch (error) {
    failure = error instanceof Error ? error.message : "SEO report failed";
  }
  const status = failure ? "failed" : "complete";
  const { error: saveError } = await supabaseAdmin.from("daily_seo_reports").update({
    status, reports, error_message: failure, completed_at: new Date().toISOString(),
  }).eq("report_date", day);
  if (saveError) throw new Error(saveError.message);
  return { status, day, error: failure };
}