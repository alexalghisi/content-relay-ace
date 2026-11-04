import { expect, test } from "@playwright/test";
import { mockSupabase, serverFnResult } from "./helpers";

const sesiune = () => {
  const now = Math.floor(Date.now() / 1000);
  return {
    access_token: "e2e.fake.token", refresh_token: "r", token_type: "bearer", expires_in: 3600, expires_at: now + 3600,
    user: { id: "00000000-0000-4000-8000-000000000e2e", aud: "authenticated", role: "authenticated", email: "alex@example.com",
      app_metadata: {}, user_metadata: { display_name: "Alex", phone: "+40770763175" }, created_at: new Date().toISOString() },
  };
};

async function laPasulTelefon(page: import("@playwright/test").Page, raspunsuri: Record<string, string | boolean | number>[]) {
  await mockSupabase(page);
  await page.route("**/auth/v1/verify**", (route) => route.fulfill({ json: sesiune() }));
  let i = 0;
  const cereri: string[] = [];
  await page.route("**/_serverFn/**", (route) => {
    cereri.push(route.request().postData() ?? "");
    return route.fulfill(serverFnResult(raspunsuri[Math.min(i++, raspunsuri.length - 1)]!));
  });
  await page.goto("/confirmare-cont?token_hash=abc&type=signup");
  // Dev serverul rece poate hidrata pagina în peste 15 s.
  await expect(page.getByRole("heading", { name: "Email confirmat" })).toBeVisible({ timeout: 60_000 });
  return cereri;
}

test.describe("Cod SMS la înscriere", () => {
  test("după trimitere: unde vine SMS-ul + retrimitere cu numărătoare, fără eroare „Așteaptă un minut”", async ({ page }) => {
    const cereri = await laPasulTelefon(page, [{ ok: true, retrimitereIn: 3 }, { ok: true, retrimitereIn: 60 }]);
    await page.getByRole("button", { name: "Continuă" }).click();
    await expect(page.getByRole("status")).toContainText("Am trimis codul prin SMS la +40770763175");
    await expect(page.getByText("MeditatiiD", { exact: true })).toBeVisible();
    await expect(page.getByText("Expeditori necunoscuți")).toBeVisible();
    const retrimite = page.getByRole("button", { name: /Retrimite codul/ });
    await expect(retrimite).toBeDisabled();
    await expect(retrimite).toHaveText(/în \d s/);
    await expect(retrimite).toBeEnabled({ timeout: 6000 });
    await retrimite.click();
    await expect(page.getByLabel("Codul primit prin SMS")).toBeVisible();
    expect(cereri.length).toBe(2);
    await expect(page.getByText("Așteaptă un minut")).toHaveCount(0);
  });

  test("cod trimis acum câteva secunde → direct la câmpul pentru cod, nu eroare", async ({ page }) => {
    await laPasulTelefon(page, [{ ok: true, dejaTrimis: true, retrimitereIn: 40 }]);
    await page.getByRole("button", { name: "Continuă" }).click();
    await expect(page.getByRole("status")).toContainText("Ți-am trimis deja un cod");
    await expect(page.getByLabel("Codul primit prin SMS")).toBeVisible();
    await expect(page.getByRole("button", { name: /Retrimite codul în \d+ s/ })).toBeDisabled();
  });

  test("telefon deja verificat → contul e gata, fără SMS", async ({ page }) => {
    await laPasulTelefon(page, [{ ok: true, verificat: true }]);
    await page.getByRole("button", { name: "Continuă" }).click();
    await expect(page.getByRole("heading", { name: "Contul este gata" })).toBeVisible();
  });
});
