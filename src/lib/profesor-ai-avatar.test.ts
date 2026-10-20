import { expect, test } from "bun:test";
import { HANNAH_FRIENDLY, HANNAH_VOICE, createLiveAvatarAccess, liveAvatarConfig, LIVEAVATAR_TOKEN_URL } from "./profesor-ai-avatar.server";

const la = { key: "test-la", avatarId: "11111111-2222-4333-8444-555555555555", voiceId: "66666666-7777-4888-9999-000000000000" };

test("HEYGEN_* secrets are used as LiveAvatar credentials when LIVEAVATAR_* are missing", () => {
  expect(liveAvatarConfig({ HEYGEN_API_KEY: "k", HEYGEN_AVATAR_ID: "a", HEYGEN_VOICE_ID: "v" })).toEqual({ key: "k", avatarId: HANNAH_FRIENDLY, voiceId: HANNAH_VOICE });
});
test("LIVEAVATAR_* secrets take priority over HEYGEN_*", () => {
  expect(liveAvatarConfig({ LIVEAVATAR_API_KEY: "L", HEYGEN_API_KEY: "k", HEYGEN_AVATAR_ID: "a", LIVEAVATAR_VOICE_ID: "V" })).toEqual({ key: "L", avatarId: HANNAH_FRIENDLY, voiceId: "V" });
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

test("avatar and voice come only from LIVEAVATAR_* secrets (no auto-pick, no HeyGen IDs)", () => {
  const c = liveAvatarConfig({ LIVEAVATAR_API_KEY: "k", HEYGEN_AVATAR_ID: "old", HEYGEN_VOICE_ID: "old" });
  expect(c.avatarId).toBe(HANNAH_FRIENDLY);
  expect(c.voiceId).toBe(HANNAH_VOICE);
});
test("without chosen IDs the session gets no avatar and no API call", async () => {
  let calls = 0;
  const r = await createLiveAvatarAccess({ key: "k" }, async () => { calls++; return new Response(); });
  expect(calls).toBe(0);
  expect(r.heygen).toBeNull();
});
test("plan session cap from LiveAvatar is applied in exactly one repaired retry", async () => {
  const sent: number[] = [];
  const r = await createLiveAvatarAccess({ ...la, maxSeconds: 2100 }, async (_u, init) => {
    sent.push(JSON.parse(String(init?.body)).max_session_duration);
    return sent.length === 1
      ? Response.json({ message: "max_session_duration (2100s) exceeds the maximum allowed (120s)" }, { status: 400 })
      : Response.json({ data: { session_token: "tok" } });
  });
  expect(sent).toEqual([2100, 120]);
  expect(r.heygen?.token).toBe("tok");
});
