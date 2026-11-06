import { expect, test } from "@playwright/test";
import { mockSupabase } from "./helpers";

const PAPER = "/subiecte-bac/2025/matematica-mate-info/iunie-iulie-varianta-1";

test("/subiecte-bac: hub → paper (PDF subiect + barem) → rezolvare pas cu pas", async ({
  page,
}) => {
  await mockSupabase(page);

  // Hub: SSR content, canonical on meditatiidirect.ro, FAQ JSON-LD, links to the paper.
  const hub = await page.goto("/subiecte-bac");
  expect(hub?.status()).toBe(200);
  const hubHtml = await hub!.text();
  expect(hubHtml).toContain('<link rel="canonical" href="https://meditatiidirect.ro/subiecte-bac"');
  expect(hubHtml).toContain('"@type":"FAQPage"');
  await expect(
    page.getByRole("heading", { level: 1, name: /Subiecte BAC 2026, 2025/ }),
  ).toBeVisible();
  const paperLink = page.locator(`a[href="${PAPER}"]`).first();
  await expect(paperLink).toBeAttached();

  // Paper page: original subiect + barem PDFs, embedded and linked, with the site CTAs.
  const paper = await page.goto(PAPER);
  expect(paper?.status()).toBe(200);
  const paperHtml = await paper!.text();
  expect(paperHtml).toContain(`<link rel="canonical" href="https://meditatiidirect.ro${PAPER}"`);
  expect(paperHtml).toContain('"@type":"LearningResource"');
  await expect(
    page.getByRole("heading", { level: 1, name: /Subiecte BAC 2025 Matematică M1/ }),
  ).toBeVisible();
  const frames = page.locator('iframe[src^="/bac/2025/"][src$=".pdf"]');
  await expect(frames).toHaveCount(2);
  const pdfHref = await page
    .getByRole("link", { name: "Subiect", exact: true })
    .getAttribute("href");
  expect(pdfHref).toMatch(/^\/bac\/2025\/.+\.pdf$/);
  const pdf = await page.request.get(pdfHref!);
  expect(pdf.status()).toBe(200);
  expect((await pdf.body()).subarray(0, 4).toString()).toBe("%PDF");
  const cta = page.getByTestId("bac-meditatii-cta");
  await expect(cta.locator('a[href="/meditatii-bac"]')).toBeVisible();
  await expect(cta.locator('a[href^="/profesor-ai"]')).toBeVisible();
  await expect(cta.locator('a[href="/simulare-bacalaureat"]')).toBeVisible();

  // Rezolvare: step-by-step content rendered from Markdown with KaTeX.
  await page.getByRole("link", { name: /Vezi rezolvarea/ }).click();
  await expect(page).toHaveURL(new RegExp(`${PAPER}/rezolvare$`));
  await expect(page.getByRole("heading", { level: 1, name: /Rezolvare BAC 2025/ })).toBeVisible();
  const article = page.getByTestId("bac-rezolvare");
  await expect(article.getByRole("heading", { level: 2, name: /Subiectul I\b/ })).toBeVisible();
  await expect(
    article.getByRole("heading", { level: 2, name: /Subiectul al III-lea/ }),
  ).toBeAttached();
  await expect(article.locator(".katex").first()).toBeAttached();
  await expect(page.getByTestId("bac-meditatii-cta")).toBeVisible();
});

test("/sitemap-subiecte-bac.xml lists papers and solutions", async ({ request }) => {
  const res = await request.get("/sitemap-subiecte-bac.xml");
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toContain("application/xml");
  const xml = await res.text();
  expect(xml).toContain(`<loc>https://meditatiidirect.ro${PAPER}</loc>`);
  expect(xml).toContain(`<loc>https://meditatiidirect.ro${PAPER}/rezolvare</loc>`);
});
