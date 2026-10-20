import { expect, test } from "bun:test";
import { createLiveAvatarAccess, liveAvatarConfig, LIVEAVATAR_TOKEN_URL } from "./profesor-ai-avatar.server";

const la = { key: "test-la", avatarId: "11111111-2222-4333-8444-555555555555", voiceId: "66666666-7777-4888-9999-000000000000" };

test("HEYGEN_* secrets are used as LiveAvatar credentials when LIVEAVATAR_* are missing", () => {
  expect(liveAvatarConfig({ HEYGEN_API_KEY: "k", HEYGEN_AVATAR_ID: "a", HEYGEN_VOICE_ID: "v" })).toEqual({ key: "k", avatarId: "a", voiceId: "v" });
});
test("LIVEAVATAR_* secrets take priority over HEYGEN_*", () => {
  expect(liveAvatarConfig({ LIVEAVATAR_API_KEY: "L", HEYGEN_API_KEY: "k", HEYGEN_AVATAR_ID: "a", LIVEAVATAR_VOICE_ID: "V" })).toEqual({ key: "L", avatarId: "a", voiceId: "V" });
});
test("missing voice never calls the provider", async () => {
  let calls = 0;
  const r = await createLiveAvatarAccess({ ...la, voiceId: undefined }, async () => { calls++; return new Response(); });
  expect(calls).toBe(0);
  expect(r.heygen).toBeNull();
});
test("only the LiveAvatar endpoint is called, with selected avatar, voice and Romanian", async () => {
  const urls: string[] = [];
  const r = await createLiveAvatarAccess(la, async (url, init) => {
    urls.push(String(url));
    const b = JSON.parse(String(init?.body));
    expect(b.avatar_id).toBe(la.avatarId);
    expect(b.avatar_persona.voice_id).toBe(la.voiceId);
    expect(b.avatar_persona.language).toBe("ro");
    return Response.json({ code: 100, data: { session_id: "s", session_token: "tok" } });
  });
  expect(urls).toEqual([LIVEAVATAR_TOKEN_URL]);
  expect(r.heygen).toEqual({ provider: "liveavatar", token: "tok" });
});
const cases: [number, string][] = [[401, "cheie invalidă"], [402, "credite"], [400, "avatarul sau vocea"], [422, "avatarul sau vocea"]];
for (const [status, reason] of cases) {
  test(`LiveAvatar ${status} shows the real reason in one call`, async () => {
    let calls = 0;
    const r = await createLiveAvatarAccess(la, async () => { calls++; return Response.json({ message: "x" }, { status }); });
    expect(calls).toBe(1);
    expect(r.heygen).toBeNull();
    expect(r.error).toContain(reason);
  });
}
test("malformed success is not access", async () => {
  const r = await createLiveAvatarAccess(la, async () => Response.json({ data: { session_token: 1 } }));
  expect(r.heygen).toBeNull();
});

import { chooseLiveAvatar, resolveLiveAvatarIds } from "./profesor-ai-avatar.server";
test("auto-pick prefers a female teacher preset and a Romanian voice when listed", () => {
  const c = chooseLiveAvatar(
    [{ id: "a1", name: "Dexter Lawyer", default_voice: { id: "m", name: "Dexter" } },
     { id: "a2", name: "Bob Teacher Sitting", default_voice: { id: "m", name: "Bob" } },
     { id: "a3", name: "Judy Teacher Standing", default_voice: { id: "f", name: "Judy" } }],
    [{ id: "m", name: "Bob", gender: "male", language: "en" }, { id: "r", name: "Ioana", gender: "female", language: "ro" }],
  );
  expect(c).toMatchObject({ avatarId: "a3", voiceId: "r", romanianVoice: true });
});
test("without a Romanian voice, the avatar's own voice is used", () => {
  const c = chooseLiveAvatar([{ id: "a3", name: "Judy Teacher Sitting", default_voice: { id: "f", name: "Judy" } }], []);
  expect(c).toMatchObject({ voiceId: "f", romanianVoice: false });
});
test("valid UUID overrides skip the catalogue", async () => {
  let calls = 0;
  const r = await resolveLiveAvatarIds(la, async () => { calls++; return new Response(); });
  expect(calls).toBe(0);
  expect(r.avatarId).toBe(la.avatarId);
});
