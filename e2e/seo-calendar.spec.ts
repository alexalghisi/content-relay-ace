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
    expect(html).toContain('"@type":"Event"');
    await expect(page.getByRole("heading", { level: 1, name: p.h1 })).toBeVisible();
    await expect(page.getByText(p.data).first()).toBeVisible();
  });
}
