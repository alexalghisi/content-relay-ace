import { expect, test } from "@playwright/test";
import { mockSupabase, waitForHydration } from "./helpers";

test("clipul demo de pe prima pagină pornește pe mut și primește sunet doar din buton", async ({ page }) => {
  await mockSupabase(page);
  await page.goto("/");
  await waitForHydration(page);
  // Clipul se remontează la fiecare lecție: îl căutăm de fiecare dată lângă butonul de sunet.
  const buton = page.getByRole("button", { name: "Pornește sunetul" }).first();
  await buton.scrollIntoViewIfNeeded({ timeout: 30_000 });
  await expect(buton).toBeVisible();
  const video = page.locator("video:has(source[src^='/demo-video/'])").first();
  await expect(video).toBeAttached({ timeout: 30_000 });
  expect(await video.evaluate((v: HTMLVideoElement) => v.muted)).toBe(true);

  // Un clic oarecare pe pagină nu mai pornește sunetul.
  await page.locator("h1").first().click();
  await page.waitForTimeout(500);
  expect(await video.evaluate((v: HTMLVideoElement) => v.muted)).toBe(true);

  await buton.click();
  await expect(page.getByRole("button", { name: "Oprește sunetul" }).first()).toBeVisible();
  expect(await video.evaluate((v: HTMLVideoElement) => v.muted)).toBe(false);
});
