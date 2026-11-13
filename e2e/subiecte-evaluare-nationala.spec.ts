import { expect, test } from "@playwright/test";
import { mockSupabase } from "./helpers";

const MODEL = "/subiecte-evaluare-nationala/model-2027-matematica";

test("/subiecte-evaluare-nationala: hub → model 2027 (PDF + barem) → rezolvare", async ({
  page,
}) => {
  await mockSupabase(page);

  const hub = await page.goto("/subiecte-evaluare-nationala");
  expect(hub?.status()).toBe(200);
  const hubHtml = await hub!.text();
  expect(hubHtml).toContain(
    '<link rel="canonical" href="https://meditatiidirect.ro/subiecte-evaluare-nationala"',
  );
  expect(hubHtml).toContain('"@type":"FAQPage"');
  expect(hubHtml).toContain('"@type":"ItemList"');
  await expect(
    page.getByRole("heading", { level: 1, name: /Subiecte Evaluare Națională 2027/ }),
  ).toBeVisible();
  await expect(page.locator(`a[href="${MODEL}"]`).first()).toBeAttached();

  const res = await page.goto(MODEL);
  expect(res?.status()).toBe(200);
  const html = await res!.text();
  expect(html).toContain(`<link rel="canonical" href="https://meditatiidirect.ro${MODEL}"`);
  expect(html).toContain('"@type":"LearningResource"');
  await expect(
    page.getByRole("heading", { level: 1, name: /Model Evaluare Națională 2027 matematică/ }),
  ).toBeVisible();
  // Rezolvarea e randată pe server (SEO), cu formule KaTeX.
  expect(html).toContain("89 de pixuri");
  await expect(page.getByTestId("en-rezolvare").locator(".katex").first()).toBeVisible();
  await expect(page.getByTestId("en-meditatii-cta")).toBeVisible();

  for (const name of ["Subiect", "Barem"]) {
    const href = await page.getByRole("link", { name, exact: true }).getAttribute("href");
    expect(href).toMatch(/^\/evaluare-nationala\/2027\/.+\.pdf$/);
    const pdf = await page.request.get(href!);
    expect(pdf.status()).toBe(200);
    expect((await pdf.body()).subarray(0, 4).toString()).toBe("%PDF");
  }

  const necunoscut = await page.goto("/subiecte-evaluare-nationala/nu-exista");
  expect(necunoscut?.status()).toBe(404);
});

test("sitemap.xml listează subiectele Evaluare Națională", async ({ request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  for (const slug of [
    "model-2027-matematica",
    "model-2027-romana",
    "2026-matematica",
    "2026-romana",
  ]) {
    expect(xml).toContain(`https://meditatiidirect.ro/subiecte-evaluare-nationala/${slug}</loc>`);
  }
});
