// IndexNow submission helper (Bing, Yandex, Seznam, Naver share the protocol).
// Google no longer supports sitemap ping, so for Google we rely on accurate
// <lastmod> values in /sitemap.xml (which is regenerated on every request).

export const INDEXNOW_KEY = "93ab3f4de925e48d9dc2fbd67fc6e09c";
export const SITE_HOST = "meditatiidirect.ro";
export const SITE_URL = `https://${SITE_HOST}`;

export interface IndexNowResult {
  submitted: number;
  status: number | null;
  error?: string;
}

/** Submit up to 10k URLs to IndexNow. URLs must be absolute and on SITE_HOST. */
export async function submitToIndexNow(urls: string[]): Promise<IndexNowResult> {
  const unique = Array.from(
    new Set(urls.filter((u) => u.startsWith(`${SITE_URL}/`) || u === SITE_URL)),
  ).slice(0, 10000);

  if (unique.length === 0) return { submitted: 0, status: null, error: "no valid urls" };

  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: unique,
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      console.error(`IndexNow failed [${res.status}]: ${body}`);
      return { submitted: 0, status: res.status, error: body.slice(0, 300) };
    }
    return { submitted: unique.length, status: res.status };
  } catch (err) {
    console.error("IndexNow request error", err);
    return { submitted: 0, status: null, error: String(err) };
  }
}
