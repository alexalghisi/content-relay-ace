import { expect, test } from "@playwright/test";

// Căutări în creștere (Google Trends, nov. 2026) care trebuie să aibă pagini indexabile.
for (const [cale, titlu] of [
  ["/meditatii-matematica-online", "Meditații matematică online"],
  ["/meditatii/matematica/brasov", "Meditații matematică Brașov"],
]) {
  test(`${cale} e indexabilă, cu canonical propriu`, async ({ request }) => {
    const res = await request.get(cale);
    expect(res.status()).toBe(200);
    const html = await res.text();
    expect(html).toContain(`<link rel="canonical" href="https://meditatiidirect.ro${cale}"`);
    expect(html).not.toContain('content="noindex');
    expect(html).toContain(titlu);
  });
}

test("șablonul generic /meditatii-{materie}-online rămâne noindex", async ({ request }) => {
  const html = await (await request.get("/meditatii-chimie-online")).text();
  expect(html).toContain('content="noindex, follow"');
});

test("sitemap.xml include pagina de matematică online", async ({ request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  expect(xml).toContain("https://meditatiidirect.ro/meditatii-matematica-online</loc>");
});
