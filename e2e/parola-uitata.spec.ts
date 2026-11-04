import { expect, test } from "@playwright/test";
import { mockSupabase, serverFnResult, waitForHydration } from "./helpers";

const sesiune = () => {
  const now = Math.floor(Date.now() / 1000);
  return {
    access_token: "e2e.fake.token", refresh_token: "r", token_type: "bearer", expires_in: 3600, expires_at: now + 3600,
    user: { id: "00000000-0000-4000-8000-000000000e2e", aud: "authenticated", role: "authenticated", email: "marga@example.com",
      app_metadata: {}, user_metadata: { display_name: "Marga Test" }, created_at: new Date().toISOString() },
  };
};

test.describe("Am uitat parola", () => {
  test("login → „Ai uitat parola?” cu emailul completat → linkul se trimite", async ({ page }) => {
    await mockSupabase(page);
    const cereri: string[] = [];
    await page.route("**/_serverFn/**", (route) => {
      cereri.push(route.request().postData() ?? "");
      return route.fulfill(serverFnResult({ ok: true }));
    });
    await page.goto("/login");
    await waitForHydration(page);
    await page.getByLabel("Email").fill("marga@example.com");
    await page.getByRole("link", { name: "Ai uitat parola?" }).click();
    await expect(page.getByRole("heading", { name: "Ai uitat parola?" })).toBeVisible();
    await expect(page.getByLabel("Email")).toHaveValue("marga@example.com");
    await page.getByRole("button", { name: "Trimite linkul de resetare" }).click();
    await expect(page.getByRole("heading", { name: "Verifică-ți emailul" })).toBeVisible();
    expect(cereri.length).toBe(1);
    expect(cereri[0]).toContain("marga@example.com");
  });

  test("eroare de trimitere → mesaj clar, rămâne pe formular", async ({ page }) => {
    await mockSupabase(page);
    await page.route("**/_serverFn/**", (route) =>
      route.fulfill(serverFnResult({ ok: false, error: "Emailul nu a putut fi trimis acum. Încearcă din nou peste un minut." })));
    await page.goto("/parola-uitata");
    await waitForHydration(page);
    await page.getByLabel("Email").fill("marga@example.com");
    await page.getByRole("button", { name: "Trimite linkul de resetare" }).click();
    await expect(page.getByText("Emailul nu a putut fi trimis acum.")).toBeVisible();
    await expect(page.getByRole("button", { name: "Trimite linkul de resetare" })).toBeVisible();
  });

  test("link din email → parolă nouă salvată → utilizatorul e autentificat", async ({ page }) => {
    await mockSupabase(page);
    await page.route("**/auth/v1/verify**", (route) => route.fulfill({ json: sesiune() }));
    const parole: string[] = [];
    await page.route("**/auth/v1/user", (route) => {
      if (route.request().method() === "PUT") parole.push(route.request().postData() ?? "");
      return route.fulfill({ json: sesiune().user });
    });
    await page.goto("/resetare-parola?token_hash=abc123&type=recovery");
    await expect(page.getByRole("heading", { name: "Alege o parolă nouă" })).toBeVisible();
    await expect(page).toHaveURL(/\/resetare-parola$/); // tokenul dispare din URL
    await page.getByLabel("Parola nouă", { exact: true }).fill("ParolaNoua1");
    await page.getByLabel("Scrie din nou parola nouă").fill("ParolaNoua2");
    await page.getByRole("button", { name: "Salvează parola nouă" }).click();
    await expect(page.getByRole("alert")).toContainText("nu coincid");
    expect(parole.length).toBe(0);
    await page.getByLabel("Scrie din nou parola nouă").fill("ParolaNoua1");
    await page.getByRole("button", { name: "Salvează parola nouă" }).click();
    await expect(page.getByRole("heading", { name: "Parola a fost schimbată" })).toBeVisible();
    expect(parole.length).toBe(1);
    expect(parole[0]).toContain("ParolaNoua1");
  });

  test("link expirat → mesaj clar + buton pentru link nou", async ({ page }) => {
    await mockSupabase(page);
    await page.route("**/auth/v1/verify**", (route) =>
      route.fulfill({ status: 403, json: { code: 403, error_code: "otp_expired", msg: "Email link is invalid or has expired" } }));
    await page.goto("/resetare-parola?token_hash=vechi&type=recovery");
    await expect(page.getByRole("heading", { name: "Linkul nu mai este valabil" })).toBeVisible();
    await page.getByRole("link", { name: "Cere un link nou" }).click();
    await expect(page.getByRole("heading", { name: "Ai uitat parola?" })).toBeVisible();
  });
});
