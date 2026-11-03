import type { Page } from "@playwright/test";

export const SUPABASE_REF = "gmgcufdfwwvfnnzfazae";
export const FAKE_USER_ID = "00000000-0000-4000-8000-000000000e2e";

/** Toate cererile către Supabase sunt simulate: testele nu creează conturi reale. */
export async function mockSupabase(page: Page, opts: { signupSession?: boolean } = {}) {
  const calls: { method: string; url: string; contentType?: string; bytes?: number }[] = [];
  await page.route(`https://${SUPABASE_REF}.supabase.co/**`, async (route) => {
    const req = route.request();
    const url = req.url();
    const body = req.postDataBuffer();
    calls.push({ method: req.method(), url, contentType: req.headers()["content-type"], bytes: body?.length });
    if (url.includes("/auth/v1/signup")) {
      const user = { id: FAKE_USER_ID, email: "elev@example.com", aud: "authenticated", user_metadata: {}, app_metadata: {} };
      return route.fulfill({ json: opts.signupSession ? { ...fakeSession(), user } : user });
    }
    if (url.includes("/auth/v1/token")) {
      return route.fulfill({ status: 400, json: { error: "invalid_grant", error_description: "Invalid login credentials", msg: "Invalid login credentials" } });
    }
    if (url.includes("/auth/v1/user")) return route.fulfill({ json: fakeSession().user });
    if (url.includes("/storage/v1/object/avatars/")) {
      return route.fulfill({ json: { Key: url.split("/storage/v1/object/")[1], Id: "e2e" } });
    }
    if (url.includes("/rest/v1/")) return route.fulfill({ status: req.method() === "GET" ? 200 : 201, json: [] });
    return route.fulfill({ json: {} });
  });
  return calls;
}

export function fakeSession() {
  const now = Math.floor(Date.now() / 1000);
  return {
    access_token: "e2e.fake.token",
    refresh_token: "e2e-refresh",
    token_type: "bearer",
    expires_in: 3600,
    expires_at: now + 3600,
    user: {
      id: FAKE_USER_ID,
      aud: "authenticated",
      role: "authenticated",
      email: "elev@example.com",
      app_metadata: { provider: "email", providers: ["email"] },
      user_metadata: { display_name: "Elev Test" },
      created_at: new Date().toISOString(),
    },
  };
}

/** Pune o sesiune falsă în localStorage înainte de încărcarea paginii. */
export async function loginWithFakeSession(page: Page) {
  const key = `sb-${SUPABASE_REF}-auth-token`;
  const value = JSON.stringify(fakeSession());
  await page.addInitScript(([k, v]) => window.localStorage.setItem(k, v), [key, value] as const);
}

/** Generează în browser o poză mare (ca de pe telefon) — PNG de câțiva MB. */
export async function bigPhonePhoto(page: Page, width = 4032, height = 3024): Promise<Buffer> {
  const b64 = await page.evaluate(async ([w, h]) => {
    const c = document.createElement("canvas");
    c.width = w; c.height = h;
    const ctx = c.getContext("2d")!;
    const img = ctx.createImageData(w, h);
    for (let i = 0; i < img.data.length; i += 4) {
      img.data[i] = (i * 13) % 255; img.data[i + 1] = (i * 7) % 251; img.data[i + 2] = (Math.random() * 255) | 0; img.data[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    const blob: Blob = await new Promise((r) => c.toBlob((b) => r(b!), "image/png"));
    const buf = new Uint8Array(await blob.arrayBuffer());
    let s = ""; for (let i = 0; i < buf.length; i += 0x8000) s += String.fromCharCode(...buf.subarray(i, i + 0x8000));
    return btoa(s);
  }, [width, height] as const);
  return Buffer.from(b64, "base64");
}

/** Așteaptă hidratarea React (altfel un click prea rapid trimite formularul nativ). */
export async function waitForHydration(page: Page, selector = "form") {
  await page.waitForFunction((sel) => {
    const el = document.querySelector(sel);
    return !!el && Object.keys(el).some((k) => k.startsWith("__reactFiber") || k.startsWith("__reactProps"));
  }, selector, { timeout: 60_000 });
}
