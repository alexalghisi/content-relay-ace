import { expect, test } from "@playwright/test";

const SITE = "https://meditatiidirect.ro";
const ld = (html: string) =>
  [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) =>
    JSON.parse(m[1]),
  );
const tipuri = (html: string) =>
  ld(html)
    .flatMap((j) => (Array.isArray(j) ? j : (j["@graph"] ?? [j])))
    .map((o: { "@type": string }) => o["@type"]);

test("/meditatii-copii e indexabilă, cu un singur H1, FAQ și canonical propriu", async ({
  request,
}) => {
  const res = await request.get("/meditatii-copii");
  expect(res.status()).toBe(200);
  const html = await res.text();
  expect(html).toContain(`<link rel="canonical" href="${SITE}/meditatii-copii"`);
  expect(html).not.toContain('content="noindex');
  expect(html).toContain("<title>Meditații pentru copii — clasele 0–IV, online sau acasă</title>");
  expect(html.match(/<h1[\s>]/g)?.length).toBe(1);
  expect(tipuri(html)).toContain("FAQPage");
  expect(html).toContain("Evaluările de la clasele a II-a și a IV-a");
});

test("/meditatii-germana are conținut despre examene și FAQ", async ({ request }) => {
  const html = await (await request.get("/meditatii-germana")).text();
  expect(html).toContain("Goethe, telc, ÖSD, DSD și BAC");
  expect(tipuri(html)).toContain("FAQPage");
  expect(html.match(/<h1[\s>]/g)?.length).toBe(1);
});

for (const [cale, inceput] of [
  ["/meditatii-matematica", "Meditații matematică"],
  ["/meditatii-romana", "Meditații română"],
  ["/meditatii-engleza", "Medita"],
  ["/meditatii-informatica", "Meditații informatică"],
  ["/meditatii-fizica", "Meditații fizică"],
] as const) {
  test(`${cale}: titlul începe cu interogarea, are descriere și rămâne indexabil`, async ({
    request,
  }) => {
    const html = await (await request.get(cale)).text();
    const titlu = html.match(/<title>([^<]+)<\/title>/)?.[1] ?? "";
    expect(titlu.startsWith(inceput)).toBe(true);
    expect(html).toMatch(/<meta name="description" content="[^"]{60,}"/);
    expect(html).not.toContain('content="noindex');
    // og:title e același cu titlul paginii
    expect(html).toContain(`<meta property="og:title" content="${titlu}"`);
  });
}

test("paginile de nivel nu mai trimit link-uri spre adrese redirecționate", async ({ request }) => {
  for (const cale of ["/meditatii-gimnaziu", "/meditatii-liceu", "/meditatii-particulare"]) {
    const html = await (await request.get(cale)).text();
    expect(html).not.toContain('href="/meditatii-scoala"');
    expect(html).not.toContain('href="/meditatii-private"');
  }
  expect(await (await request.get("/meditatii-gimnaziu")).text()).toContain(
    'href="/meditatii-copii"',
  );
});

test("sitemap.xml include /meditatii-copii", async ({ request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  expect(xml).toContain(`<loc>${SITE}/meditatii-copii</loc>`);
});

test("articolele de blog duplicate fac 301 spre articolul complet", async ({ request }) => {
  for (const [dup, canonic] of [
    ["evaluare-nationala-2026-ghid", "evaluare-nationala-2026-strategie"],
    ["admitere-medicina-2026-strategie-completa", "admitere-medicina-2026-ghid-complet"],
  ]) {
    const res = await request.get(`/blog/${dup}`, { maxRedirects: 0 });
    expect(res.status()).toBe(301);
    expect(res.headers().location).toContain(`/blog/${canonic}`);
  }
});
