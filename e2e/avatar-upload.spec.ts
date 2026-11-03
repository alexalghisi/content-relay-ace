import { expect, test } from "@playwright/test";
import { bigPhonePhoto, loginWithFakeSession, mockSupabase, waitForHydration } from "./helpers";

test.describe("Încărcare poză de profil (bug raportat: nu se putea încărca poza)", () => {
  test("o poză mare de telefon se micșorează și se urcă pe /cont", async ({ page }) => {
    const calls = await mockSupabase(page);
    await page.route("**/_serverFn/**", (r) => r.abort());
    await loginWithFakeSession(page);
    await page.goto("/cont");
    await waitForHydration(page, '[data-testid="avatar-input"]');
    await expect(page.getByRole("heading", { name: "Contul meu" })).toBeVisible();

    const photo = await bigPhonePhoto(page);
    expect(photo.length).toBeGreaterThan(3 * 1024 * 1024); // peste vechea limită de 3 MB

    await page.getByTestId("avatar-input").setInputFiles({ name: "IMG_4021.png", mimeType: "image/png", buffer: photo });
    // first upload also pays the cold dev-server compile + canvas resize → generous timeout
    await expect(page.getByRole("img", { name: "Fotografie de profil" })).toBeVisible({ timeout: 45_000 });
    await expect(page.getByRole("alert")).toHaveCount(0);

    const upload = calls.find((c) => c.url.includes("/storage/v1/upload/resumable"));
    expect(upload, "trebuie să existe un upload în bucketul avatars").toBeTruthy();
    expect(upload!.url).toMatch(/#00000000-0000-4000-8000-000000000e2e\/avatar-\d+-[0-9a-f-]+\.jpg$/);
    expect(upload!.bytes!).toBeLessThanOrEqual(3 * 1024 * 1024); // încape în bucket
    expect(calls.some((c) => c.url.includes("/rest/v1/profile_photos") && c.method === "POST")).toBe(true);
    expect(calls.some((c) => c.url.includes("/rest/v1/profiles") && c.method === "POST")).toBe(true);
  });

  test("o poză mică se urcă exact cum e (originalul, fără recomprimare)", async ({ page }) => {
    const calls = await mockSupabase(page);
    await page.route("**/_serverFn/**", (r) => r.abort());
    await loginWithFakeSession(page);
    await page.goto("/cont");
    await waitForHydration(page, '[data-testid="avatar-input"]');
    const mica = Buffer.from("/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=", "base64");
    await page.getByTestId("avatar-input").setInputFiles({ name: "mica.jpg", mimeType: "image/jpeg", buffer: mica });
    await expect(page.getByRole("img", { name: "Fotografie de profil" })).toBeVisible({ timeout: 45_000 });
    const upload = calls.find((c) => c.url.includes("/storage/v1/upload/resumable"));
    expect(upload!.bytes).toBe(mica.length);
  });

  test("o poză HEIC de iPhone e acceptată de input (nu mai e respinsă din start)", async ({ page }) => {
    await mockSupabase(page);
    await page.route("**/_serverFn/**", (r) => r.abort());
    await loginWithFakeSession(page);
    await page.goto("/cont");
    await waitForHydration(page, '[data-testid="avatar-input"]');
    const accept = await page.getByTestId("avatar-input").getAttribute("accept");
    expect(accept).toContain("image/*");
    expect(accept).toContain(".heic");
  });

  test("un fișier care nu e poză primește mesaj clar în română", async ({ page }) => {
    const calls = await mockSupabase(page);
    await page.route("**/_serverFn/**", (r) => r.abort());
    await loginWithFakeSession(page);
    await page.goto("/cont");
    await waitForHydration(page, '[data-testid="avatar-input"]');
    await expect(page.getByRole("heading", { name: "Contul meu" })).toBeVisible();
    await page.getByTestId("avatar-input").setInputFiles({ name: "cv.pdf", mimeType: "application/pdf", buffer: Buffer.from("%PDF-1.4") });
    await expect(page.getByText(/Alege o fotografie/)).toBeVisible();
    expect(calls.some((c) => c.url.includes("/storage/v1/object/avatars/"))).toBe(false);
  });
});
