import { expect, test } from "bun:test";
import { createHeygenAccess, createLiveAvatarAccess, HEYGEN_TOKEN_URL, LIVEAVATAR_TOKEN_URL } from "./profesor-ai-avatar.server";

const config = { key: "test-credential", avatarId: "selected-avatar", voiceId: "selected-romanian-voice" };
test("missing selected voice never substitutes a default or calls provider", async () => {
  let calls = 0;
  const result = await createHeygenAccess({ ...config, voiceId: undefined }, async () => { calls++; return new Response(); });
  expect(calls).toBe(0);
  expect(result.heygen).toBeNull();
});
test("404 is terminal and never probes another endpoint", async () => {
  const urls: string[] = [];
  const result = await createHeygenAccess(config, async (url) => { urls.push(String(url)); return new Response(null, { status: 404 }); });
  expect(urls).toEqual([HEYGEN_TOKEN_URL]);
  expect(result.heygen).toBeNull();
});
for (const status of [401, 403, 429]) {
  test(`HeyGen ${status} cannot produce a working avatar`, async () => {
    let calls = 0;
    const result = await createHeygenAccess(config, async () => { calls++; return new Response(null, { status }); });
    expect(calls).toBe(1);
    expect(result.heygen).toBeNull();
  });
}
test("valid token preserves both user selections and documented legacy request", async () => {
  const result = await createHeygenAccess(config, async (url, init) => {
    expect(String(url)).toBe(HEYGEN_TOKEN_URL);
    expect(init?.method).toBe("POST");
    expect(new Headers(init?.headers).has("x-api-key")).toBe(true);
    return Response.json({ data: { token: "test-session-token" } });
  });
  expect(result.heygen?.avatarId).toBe("selected-avatar");
  expect(result.heygen?.voiceId).toBe("selected-romanian-voice");
});
test("malformed successful response is not successful access", async () => {
  const result = await createHeygenAccess(config, async () => Response.json({ data: { token: 123 } }));
  expect(result.heygen).toBeNull();
});
const la = { key: "test-la", avatarId: "11111111-2222-4333-8444-555555555555", voiceId: "66666666-7777-4888-9999-000000000000" };
test("LiveAvatar refuses legacy HeyGen ids without calling the provider", async () => {
  let calls = 0;
  const r = await createLiveAvatarAccess({ ...la, avatarId: "0123456789abcdef0123456789abcdef" }, async () => { calls++; return new Response(); });
  expect(calls).toBe(0);
  expect(r.heygen).toBeNull();
});
test("LiveAvatar token request keeps the selected avatar, voice and Romanian", async () => {
  const r = await createLiveAvatarAccess(la, async (url, init) => {
    expect(String(url)).toBe(LIVEAVATAR_TOKEN_URL);
    const b = JSON.parse(String(init?.body));
    expect(b.avatar_id).toBe(la.avatarId);
    expect(b.avatar_persona.voice_id).toBe(la.voiceId);
    expect(b.avatar_persona.language).toBe("ro");
    expect(b.avatar_persona.context_id).toBeUndefined();
    return Response.json({ code: 100, data: { session_id: "s", session_token: "tok" } });
  });
  expect(r.heygen).toEqual({ provider: "liveavatar", token: "tok" });
});
for (const status of [401, 402, 404, 422, 429]) {
  test(`LiveAvatar ${status} is a single terminal call`, async () => {
    let calls = 0;
    const r = await createLiveAvatarAccess(la, async () => { calls++; return new Response(null, { status }); });
    expect(calls).toBe(1);
    expect(r.heygen).toBeNull();
  });
}
