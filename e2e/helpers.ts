import type { Page } from "@playwright/test";

export const SUPABASE_REF = "gmgcufdfwwvfnnzfazae";
export const FAKE_USER_ID = "00000000-0000-4000-8000-000000000e2e";

/** Toate cererile către Supabase sunt simulate: testele nu creează conturi reale. */
export async function mockSupabase(page: Page, opts: { signupSession?: boolean } = {}) {
  const calls: { method: string; url: string; contentType?: string; bytes?: number }[] = [];
  const photos: { id: string; storage_path: string }[] = [];
  let uploadOffset = 0;
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
    if (url.includes("/storage/v1/upload/resumable")) {
      if (req.method() === "POST") {
        uploadOffset = body?.length ?? 0;
        return route.fulfill({ status: 201, headers: { location: `https://${SUPABASE_REF}.supabase.co/storage/v1/upload/resumable/e2e`, "access-control-expose-headers": "location,upload-offset,tus-resumable", "tus-resumable": "1.0.0", "upload-offset": String(uploadOffset) } });
      }
      if (req.method() === "HEAD") return route.fulfill({ status: 200, headers: { "access-control-expose-headers": "location,upload-offset,tus-resumable", "tus-resumable": "1.0.0", "upload-offset": String(uploadOffset) } });
      uploadOffset += body?.length ?? 0;
      return route.fulfill({ status: 204, headers: { "access-control-expose-headers": "location,upload-offset,tus-resumable", "tus-resumable": "1.0.0", "upload-offset": String(uploadOffset) } });
    }
    if (url.includes("/rest/v1/profile_photos")) {
      if (req.method() === "POST") { const value = JSON.parse(req.postData() ?? "{}"); const photo = { id: String(photos.length + 1), storage_path: value.storage_path }; photos.push(photo); return route.fulfill({ status: 201, json: photo }); }
      return route.fulfill({ json: photos });
    }
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
    const ctx = c.getContext("2d");
    if (!ctx) throw new Error("canvas unavailable");
    const img = ctx.createImageData(w, h);
    for (let i = 0; i < img.data.length; i += 4) {
      img.data[i] = (i * 13) % 255; img.data[i + 1] = (i * 7) % 251; img.data[i + 2] = (Math.random() * 255) | 0; img.data[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    const blob: Blob = await new Promise((r, reject) => c.toBlob((b) => b ? r(b) : reject(new Error("canvas failed")), "image/png"));
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

/**
 * Răspuns simulat pentru un server function TanStack Start (format seroval, x-tss-serialized),
 * ca testele să nu atingă backend-ul real. Acceptă doar obiecte plate cu text, număr sau boolean.
 */
export function serverFnResult(result: Record<string, string | boolean | number>) {
  // seroval: 0 = număr, 1 = text, 2 = constantă (2 = true, 3 = false)
  const enc = (v: string | boolean | number) =>
    typeof v === "number" ? { t: 0, s: v } : typeof v === "string" ? { t: 1, s: v } : { t: 2, s: v ? 2 : 3 };
  const keys = Object.keys(result);
  return {
    status: 200,
    headers: { "content-type": "application/json", "x-tss-serialized": "true" },
    body: JSON.stringify({
      t: 10, i: 0,
      p: { k: ["result", "error", "context"], v: [
        { t: 10, i: 1, p: { k: keys, v: keys.map((k) => enc(result[k] ?? "")) }, o: 0 },
        { t: 2, s: 1 },
        { t: 11, i: 2, p: { k: [], v: [] }, o: 0 },
      ] },
      o: 0,
    }),
  };
}
