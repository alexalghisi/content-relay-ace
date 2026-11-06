import { expect, test } from "@playwright/test";
import { mockSupabase, waitForHydration } from "./helpers";

// Viteză: scripturile de reclame (~1,5 s de procesor pe telefon) pornesc abia la prima interacțiune.
test("reclamele nu pornesc la încărcare, ci la prima interacțiune", async ({ page }) => {
  await mockSupabase(page);
  await page.addInitScript(() => {
    (window as Window & { __E2E_FORCE_ADS__?: boolean }).__E2E_FORCE_ADS__ = true;
  });
  await page.route("**/pagead2.googlesyndication.com/**", (r) => r.fulfill({ status: 200, contentType: "text/javascript", body: "" }));
  await page.goto("/meditatii-chimie");
  await waitForHydration(page, "h1");
  await page.waitForTimeout(5000); // înainte, AdSense pornea aici (la ~4 s după încărcare)
  await expect(page.locator("script[data-adsbygoogle-lib]")).toHaveCount(0);
  await page.mouse.wheel(0, 400);
  await expect(page.locator("script[data-adsbygoogle-lib]")).toHaveCount(1, { timeout: 10_000 });
});


// AdSense încarcă doar pe domeniul de producție: pe localhost / preview Lovable nu pornește niciodată.
test("AdSense nu se încarcă în afara domeniului de producție", async ({ page }) => {
  await mockSupabase(page);
  await page.route("**/pagead2.googlesyndication.com/**", (r) => r.fulfill({ status: 200, contentType: "text/javascript", body: "" }));
  await page.goto("/meditatii-chimie");
  await waitForHydration(page, "h1");
  await page.mouse.wheel(0, 400);
  await page.waitForTimeout(5000);
  await expect(page.locator("script[data-adsbygoogle-lib]")).toHaveCount(0);
});
