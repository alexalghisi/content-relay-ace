import { expect, test } from "@playwright/test";
import { mockSupabase, serverFnResult, waitForHydration } from "./helpers";

test.describe("Înscriere și autentificare", () => {
  test("înscrierea cere telefon: câmp obligatoriu, fără el nu pleacă nicio cerere", async ({ page }) => {
    await mockSupabase(page);
    let cereri = 0;
    await page.route("**/_serverFn/**", (route) => {
      cereri++;
      return route.fulfill(serverFnResult({ ok: true, stare: "trimis" }));
    });
    await page.goto("/signup");
    await waitForHydration(page);
    await expect(page.getByLabel("Telefon mobil")).toHaveAttribute("required", "");
    await page.getByLabel("Nume").fill("Marga Test");
    await page.getByLabel("Email").fill("marga@example.com");
    await page.getByLabel("Parolă").fill("parola123");
    await page.getByRole("button", { name: "Creează cont gratuit" }).click();
    await expect(page.getByRole("heading", { name: "Verifică-ți emailul" })).toHaveCount(0);
    expect(cereri).toBe(0);
  });

  test("înscriere validă → serverul creează contul și trimite emailul → ecranul de confirmare", async ({ page }) => {
    await mockSupabase(page);
    const trimise: string[] = [];
    await page.route("**/_serverFn/**", (route) => {
      trimise.push(route.request().postData() ?? "");
      return route.fulfill(serverFnResult({ ok: true, stare: "trimis" }));
    });
    await page.goto("/signup");
    await waitForHydration(page);
    await page.getByLabel("Nume").fill("Marga Test");
    await page.getByLabel("Email").fill("marga@example.com");
    await page.getByLabel("Telefon mobil").fill("0712345678");
    await page.getByLabel("Parolă").fill("parola123");
    await page.getByRole("button", { name: "Creează cont gratuit" }).click();
    await expect(page.getByRole("heading", { name: "Verifică-ți emailul" })).toBeVisible();
    expect(trimise.length).toBe(1);
    expect(trimise[0]).toContain("marga@example.com");
    expect(trimise[0]?.replace(/\D/g, "")).toContain("712345678");
  });

  test("email existent și confirmat → mesaj clar și trimitere la login", async ({ page }) => {
    await mockSupabase(page);
    await page.route("**/_serverFn/**", (route) =>
      route.fulfill(serverFnResult({ ok: false, stare: "exista", error: "Există deja un cont cu acest email. Autentifică-te." })),
    );
    await page.goto("/signup");
    await waitForHydration(page);
    await page.getByLabel("Nume").fill("Marga Test");
    await page.getByLabel("Email").fill("marga@example.com");
    await page.getByLabel("Telefon mobil").fill("0712345678");
    await page.getByLabel("Parolă").fill("parola123");
    await page.getByRole("button", { name: "Creează cont gratuit" }).click();
    await expect(page.getByText("Există deja un cont cu acest email. Autentifică-te.")).toBeVisible();
    await expect(page).toHaveURL(/\/login$/);
  });

  test("telefon folosit deja de alt cont → mesaj clar, rămâne pe formular", async ({ page }) => {
    await mockSupabase(page);
    await page.route("**/_serverFn/**", (route) =>
      route.fulfill(serverFnResult({ ok: false, stare: "telefon", error: "Acest număr de telefon este deja înregistrat. Ai deja un cont, nu poți crea altul cu același număr — autentifică-te în contul existent." })),
    );
    await page.goto("/signup");
    await waitForHydration(page);
    await page.getByLabel("Nume").fill("Marga Test");
    await page.getByLabel("Email").fill("alt@example.com");
    await page.getByLabel("Telefon mobil").fill("0712345678");
    await page.getByLabel("Parolă").fill("parola123");
    await page.getByRole("button", { name: "Creează cont gratuit" }).click();
    await expect(page.getByRole("alert").filter({ hasText: "deja înregistrat" })).toBeVisible();
    await expect(page.getByRole("alert").getByRole("link", { name: "Autentificare" })).toBeVisible();
    await expect(page).toHaveURL(/\/signup$/);
    await expect(page.getByRole("heading", { name: "Verifică-ți emailul" })).toHaveCount(0);
  });

  test("emailul nu a plecat → rămâne ecranul de confirmare cu retrimitere funcțională", async ({ page }) => {
    await mockSupabase(page);
    let n = 0;
    await page.route("**/_serverFn/**", (route) => {
      n++;
      return route.fulfill(n === 1
        ? serverFnResult({ ok: false, stare: "netrimis", error: "Contul a fost creat, dar emailul de confirmare nu a putut fi trimis." })
        : serverFnResult({ ok: true, stare: "retrimis" }));
    });
    await page.goto("/signup");
    await waitForHydration(page);
    await page.getByLabel("Nume").fill("Marga Test");
    await page.getByLabel("Email").fill("marga@example.com");
    await page.getByLabel("Telefon mobil").fill("0712345678");
    await page.getByLabel("Parolă").fill("parola123");
    await page.getByRole("button", { name: "Creează cont gratuit" }).click();
    await expect(page.getByRole("heading", { name: "Verifică-ți emailul" })).toBeVisible();
    await page.getByRole("button", { name: "Trimite din nou emailul" }).click();
    await expect(page.getByText("Ți-am trimis un email nou de confirmare.")).toBeVisible();
    expect(n).toBe(2);
  });

  test("link de confirmare → email confirmat, apoi pasul SMS (contul nu e gata încă)", async ({ page }) => {
    await mockSupabase(page);
    await page.route("**/auth/v1/verify**", (route) => {
      const now = Math.floor(Date.now() / 1000);
      return route.fulfill({ json: {
        access_token: "e2e.fake.token", refresh_token: "r", token_type: "bearer", expires_in: 3600, expires_at: now + 3600,
        user: { id: "00000000-0000-4000-8000-000000000e2e", aud: "authenticated", role: "authenticated", email: "marga@example.com",
          app_metadata: {}, user_metadata: { display_name: "Marga Test" }, created_at: new Date().toISOString() },
      } });
    });
    await page.goto("/confirmare-cont?token_hash=abc123&type=signup");
    await expect(page.getByRole("heading", { name: "Email confirmat" })).toBeVisible({ timeout: 60_000 });
    await expect(page).toHaveURL(/\/confirmare-cont$/); // tokenul dispare din URL
    await expect(page.getByText("Verifică-ți telefonul")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Contul este gata" })).toHaveCount(0);
  });

  test("link expirat → mesaj clar, fără ecran alb", async ({ page }) => {
    await mockSupabase(page);
    await page.route("**/auth/v1/verify**", (route) =>
      route.fulfill({ status: 403, json: { code: 403, error_code: "otp_expired", msg: "Email link is invalid or has expired" } }));
    await page.goto("/confirmare-cont?token_hash=expirat&type=signup");
    await expect(page.getByRole("heading", { name: "Linkul nu mai este valabil" })).toBeVisible({ timeout: 60_000 });
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

test("parola se poate afișa ca utilizatorul să verifice ce a tastat", async ({ page }) => {
  await mockSupabase(page);
  await page.goto("/signup");
  await waitForHydration(page);
  const parola = page.getByLabel("Parolă", { exact: true });
  await parola.fill("Parola123");
  await expect(parola).toHaveAttribute("type", "password");
  await page.getByRole("button", { name: "Arată parola" }).click();
  await expect(parola).toHaveAttribute("type", "text");
  await expect(parola).toHaveValue("Parola123");
  await page.getByRole("button", { name: "Ascunde parola" }).click();
  await expect(parola).toHaveAttribute("type", "password");
});
