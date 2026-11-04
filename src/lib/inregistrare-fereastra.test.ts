import { expect, test } from "bun:test";
import { cuFereastraEmail } from "./inregistrare-fereastra";
const run = cuFereastraEmail<{ ok: boolean; reason?: string }>;

function fakeCache() {
  const entries = new Map<string, Response>();
  return {
    match: async (request: Request) => entries.get(request.url)?.clone(),
    put: async (request: Request, response: Response) => { entries.set(request.url, response.clone()); },
    delete: async (request: Request) => entries.delete(request.url),
  } as unknown as Cache;
}
const blocked = { ok: false, reason: "pending" };
for (const reason of ["telefon", "email", "generateLink", "netrimis"]) {
  test(`failed ${reason} attempt permits immediate corrected retry`, async () => {
    const cache = fakeCache();
    await run(cache, "signup:test", async () => ({ ok: false, reason }), blocked);
    let called = false;
    const retry = await run(cache, "signup:test", async () => { called = true; return { ok: true }; }, blocked);
    expect(called).toBe(true);
    expect(retry.ok).toBe(true);
  });
}
test("thrown generation or delivery error releases claim", async () => {
  const cache = fakeCache();
  await expect(run(cache, "signup:test", async () => { throw new Error("provider"); }, blocked)).rejects.toThrow("provider");
  expect((await run(cache, "signup:test", async () => ({ ok: true }), blocked)).ok).toBe(true);
});
test("successful send retains a 60-second cooldown", async () => {
  const cache = fakeCache();
  await run(cache, "signup:test", async () => ({ ok: true }), blocked);
  let calls = 0;
  expect(await run(cache, "signup:test", async () => { calls++; return { ok: true }; }, blocked)).toEqual(blocked);
  expect(calls).toBe(0);
  const entry = await cache.match(new Request("https://inregistrare.meditatiidirect.ro/signup%3Atest"));
  expect(entry?.headers.get("Cache-Control")).toBe("max-age=60");
});
test("an already visible in-flight claim prevents a second send", async () => {
  const cache = fakeCache();
  let finish: ((value: { ok: boolean }) => void) | undefined;
  let started: (() => void) | undefined;
  const ready = new Promise<void>((resolve) => { started = resolve; });
  const first = run(cache, "signup:test", () => { started?.(); return new Promise<{ ok: boolean }>((resolve) => { finish = resolve; }); }, blocked);
  await ready;
  let calls = 0;
  expect(await run(cache, "signup:test", async () => { calls++; return { ok: true }; }, blocked)).toEqual(blocked);
  expect(calls).toBe(0);
  finish?.({ ok: false });
  await first;
});