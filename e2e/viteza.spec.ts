import { expect, test } from "@playwright/test";
import { mockSupabase } from "./helpers";

// Viteză: scripturile de reclame (~1,5 s de procesor pe telefon) pornesc abia la prima interacțiune.
test("reclamele nu pornesc la încărcare, ci la prima interacțiune", async ({ page }) => {
  await mockSupabase(page);
  await page.route("**/pagead2.googlesyndication.com/**", (r) => r.fulfill({ status: 200, contentType: "text/javascript", body: "" }));
  await page.goto("/meditatii-chimie");
  await page.waitForLoadState("load");
  await page.waitForTimeout(5000); // înainte, AdSense pornea aici (la ~4 s după încărcare)
  await expect(page.locator("script[data-adsbygoogle-lib]")).toHaveCount(0);
  await page.mouse.wheel(0, 400);
  await expect(page.locator("script[data-adsbygoogle-lib]")).toHaveCount(1, { timeout: 10_000 });
});

