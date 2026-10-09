export const SEO_MARKET = "ro";
export const SEO_DOMAINS = ["meditatiidirect.ro", "meditatii.ro", "anunturi-meditatii.ro", "superprof.ro"];
export const SEO_KEYWORDS = ["meditatii", "meditatii matematica", "meditatii romana", "meditatii engleza", "meditator engleza", "meditatii informatica", "meditatii biologie", "meditatii online", "subiecte bac matematica", "meditatii chimie", "meditatii fizica", "meditatii germana", "meditatii cluj", "meditatii matematica cluj", "evaluare nationala", "evaluare nationala cluj"];

export function romaniaReportDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Bucharest", year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
}

export function providerFailure(status: number, body: unknown): string | null {
  const data = body as { error?: unknown; status?: number } | null;
  if (status >= 400 || data?.error || (data?.status ?? 200) >= 400) {
    return `Semrush [${status}]: ${JSON.stringify(body)}`;
  }
  return null;
}