import { expect, test } from "bun:test";
import { createHeygenAccess, HEYGEN_TOKEN_URL } from "./profesor-ai-avatar.server";

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