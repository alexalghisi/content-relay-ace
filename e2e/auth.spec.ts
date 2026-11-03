import { expect, test } from "@playwright/test";
import { mockSupabase, waitForHydration } from "./helpers";

test.describe("Înscriere și autentificare", () => {
  test("telefon invalid → mesaj de eroare, nicio cerere de înscriere", async ({ page }) => {
    const calls = await mockSupabase(page);
    await page.goto("/signup");
    await waitForHydration(page);
    await page.getByLabel("Nume").fill("Marga Test");
    await page.getByLabel("Email").fill("marga@example.com");
    await page.getByLabel("Telefon mobil").fill("12345");
    await page.getByLabel("Parolă").fill("parola123");
    await page.getByRole("button", { name: "Creează cont gratuit" }).click();
    await expect(page.getByText(/telefon mobil românesc valid/)).toBeVisible();
    expect(calls.some((c) => c.url.includes("/auth/v1/signup"))).toBe(false);
  });

  test("înscriere validă → ecranul de confirmare email", async ({ page }) => {
    const calls = await mockSupabase(page);
    await page.goto("/signup");
    await waitForHydration(page);
    await page.getByLabel("Nume").fill("Marga Test");
    await page.getByLabel("Email").fill("marga@example.com");
    await page.getByLabel("Telefon mobil").fill("0722 123 456");
    await page.getByLabel("Parolă").fill("parola123");
    await page.getByRole("button", { name: "Creează cont gratuit" }).click();
    await expect(page.getByRole("heading", { name: "Verifică-ți emailul" })).toBeVisible();
    expect(calls.some((c) => c.url.includes("/auth/v1/signup"))).toBe(true);
  });

  test("login cu parolă greșită → mesaj în română", async ({ page }) => {
    await mockSupabase(page);
    await page.goto("/login");
    await waitForHydration(page);
    await page.getByLabel("Email").fill("marga@example.com");
    await page.getByLabel("Parolă").fill("gresita1");
    await page.getByRole("button", { name: "Autentificare" }).click();
    await expect(page.getByText("Email sau parolă greșite.")).toBeVisible();
  });
});
