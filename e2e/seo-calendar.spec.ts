import { expect, test } from "@playwright/test";
import { mockSupabase } from "./helpers";

for (const p of [
  { url: "/calendar-bac-2027", h1: /Calendar BAC 2027/, data: "14 iunie" },
  { url: "/calendar-evaluare-nationala-2027", h1: /Calendar Evaluarea Națională 2027/, data: "24 iunie" },
]) {
  test(`${p.url}: conținut SSR, canonical, FAQ + Event JSON-LD`, async ({ page }) => {
    await mockSupabase(page);
    await page.route("**/_serverFn/**", (r) => r.abort());
    const res = await page.goto(p.url);
    expect(res?.status()).toBe(200);
    const html = await res!.text(); // ce vede Google înainte de JavaScript
    expect(html).toContain(p.data);
    expect(html).toContain(`<link rel="canonical" href="https://meditatiidirect.ro${p.url}"`);
    expect(html).toContain('"@type":"FAQPage"');
    // Article, nu Event (Google cerea offers/performer, care nu există pentru un examen)
    expect(html).toContain('"@type":"Article"');
    expect(html).not.toContain('"@type":"Event"');
    const img = /<meta property="og:image" content="([^"]+)"/.exec(html)?.[1];
    expect(img).toBe(`https://meditatiidirect.ro/og/calendar${p.url}.jpg`);
    const r = await page.request.get(new URL(img!).pathname);
    expect(r.status()).toBe(200);
    expect(r.headers()["content-type"]).toContain("image/jpeg");
    await expect(page.getByRole("heading", { level: 1, name: p.h1 })).toBeVisible();
    await expect(page.getByText(p.data).first()).toBeVisible();
  });
}

for (const p of [
  { url: "/meditatii-evaluare-nationala", h1: /Meditații pentru Evaluarea Națională 2027/, text: "Ce se dă la Evaluarea Națională" },
  { url: "/admitere-liceu-2027", h1: /Admitere liceu 2027/, text: "OME 6060/2025" },
  { url: "/meditatii-chimie", h1: /Meditații chimie/, text: "Cum găsești profesorul pe MeditatiiDirect" },
  { url: "/profesor-particular", h1: /Profesor particular/, text: "Cum alegi un profesor particular" },
]) {
  test(`${p.url}: conținut real în HTML-ul inițial + FAQ JSON-LD`, async ({ page }) => {
    await mockSupabase(page);
    await page.route("**/_serverFn/**", (r) => r.abort());
    const res = await page.goto(p.url);
    expect(res?.status()).toBe(200);
    const html = await res!.text();
    expect(html).toContain(p.text);
    expect(html).toContain(`<link rel="canonical" href="https://meditatiidirect.ro${p.url}"`);
    expect(html).toContain('"@type":"FAQPage"');
    expect(html).not.toMatch(/peste 1000|doctoranzi|mii de elevi/);
    await expect(page.getByRole("heading", { level: 1, name: p.h1 })).toBeVisible();
  });
}
