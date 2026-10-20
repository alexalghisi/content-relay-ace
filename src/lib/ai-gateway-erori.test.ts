/// <reference types="bun" />
import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import {
  AiError,
  aiIndisponibil,
  aiStare,
  callAi,
  CREDITS_PAUSE_SEC,
  eroareDinStatus,
  eroareFurnizor,
  eroareGemini,
  MESAJ_CREDITE,
  refundQuota,
  takeQuota,
} from "./ai-gateway.server";

/** Cache în memorie compatibil cu `caches.default` din Cloudflare (doar ce folosim). */
class FakeCache {
  store = new Map<string, string>();
  async match(req: Request) {
    const v = this.store.get(req.url);
    return v === undefined ? undefined : new Response(v);
  }
  async put(req: Request, res: Response) {
    this.store.set(req.url, await res.text());
  }
  async delete(req: Request) {
    return this.store.delete(req.url);
  }
}

const g = globalThis as unknown as { caches?: { default: FakeCache }; fetch: typeof fetch };
const fetchReal = g.fetch;
let cache: FakeCache;
let apeluri = 0;

function raspunde(status: number, headers: Record<string, string> = {}) {
  g.fetch = (async () => {
    apeluri++;
    return new Response("{}", { status, headers });
  }) as unknown as typeof fetch;
}

function raspundeOk(text: string) {
  g.fetch = (async () => {
    apeluri++;
    const ev = { type: "content_block_delta", delta: { type: "text_delta", text } };
    return new Response(`data: ${JSON.stringify(ev)}\n\n`, { status: 200 });
  }) as unknown as typeof fetch;
}

const cerere = { system: "s", messages: [{ role: "user" as const, content: "x" }], maxTokens: 10 };

async function eroare(p: Promise<unknown>): Promise<AiError> {
  try {
    await p;
  } catch (e) {
    if (e instanceof AiError) return e;
    throw e;
  }
  throw new Error("se aștepta o eroare");
}

beforeEach(() => {
  cache = new FakeCache();
  g.caches = { default: cache };
  process.env["LOVABLE_API_KEY"] = "cheie-de-test";
  apeluri = 0;
});

afterEach(() => {
  g.fetch = fetchReal;
  delete g.caches;
  delete process.env["LOVABLE_API_KEY"];
  delete process.env["GEMINI_API_KEY"];
});

describe("AI gateway — clasificarea erorilor furnizorului", () => {
  it("402 = credite epuizate, mesaj clar, fără succes fals", () => {
    const e = eroareDinStatus(402, null);
    expect(e.kind).toBe("credits");
    expect(e.userMessage).toBe(MESAJ_CREDITE);
  });
  it("429 = limită de cereri, respectă Retry-After", () => {
    expect(eroareDinStatus(429, "17").retryAfterSec).toBe(17);
    expect(eroareDinStatus(429, null).retryAfterSec).toBe(60);
    expect(eroareDinStatus(429, null).kind).toBe("rate_limit");
  });
  it("401/403 = configurare/autentificare greșită, fără să expună cheia", () => {
    for (const s of [401, 403]) {
      const e = eroareDinStatus(s, null);
      expect(e.kind).toBe("auth");
      expect(e.userMessage).not.toContain("cheie-de-test");
    }
  });
  it("5xx = eroare temporară a furnizorului", () => {
    expect(eroareDinStatus(503, null).kind).toBe("upstream");
  });
  it("lipsa cheii = config, fără apel la furnizor", async () => {
    delete process.env["LOVABLE_API_KEY"];
    raspundeOk("nu trebuie apelat");
    expect((await eroare(callAi(cerere))).kind).toBe("config");
    expect(apeluri).toBe(0);
  });
});

describe("AI gateway — creditele epuizate (402) și revenirea", () => {
  it("după 402 nu mai apelează furnizorul până expiră pauza", async () => {
    raspunde(402);
    const e1 = await eroare(callAi(cerere));
    expect(e1.kind).toBe("credits");
    expect(apeluri).toBe(1);
    const pauza = await aiIndisponibil();
    expect(pauza?.kind).toBe("credits");
    expect(pauza!.until - Date.now()).toBeLessThanOrEqual(CREDITS_PAUSE_SEC * 1000);

    const e2 = await eroare(callAi(cerere));
    expect(e2.kind).toBe("credits");
    expect(e2.userMessage).toBe(MESAJ_CREDITE);
    expect(apeluri).toBe(1); // scurtcircuitat
  });
  it("după expirarea pauzei și reîncărcarea creditelor, merge din nou", async () => {
    raspunde(402);
    await eroare(callAi(cerere));
    // Simulează trecerea timpului: pauza a expirat.
    const k = [...cache.store.keys()].find((u) => u.includes("ai-status"))!;
    cache.store.set(k, JSON.stringify({ kind: "credits", until: Date.now() - 1 }));
    expect(await aiIndisponibil()).toBeNull();

    raspundeOk("Bună!");
    expect(await callAi(cerere)).toBe("Bună!");
    expect(await aiIndisponibil()).toBeNull();
    expect(cache.store.has(k)).toBe(false); // starea de pauză a fost ștearsă
  });
  it("429 nu blochează platforma (e trecător)", async () => {
    raspunde(429, { "retry-after": "5" });
    const e = await eroare(callAi(cerere));
    expect(e.kind).toBe("rate_limit");
    expect(e.retryAfterSec).toBe(5);
    expect(await aiIndisponibil()).toBeNull();
  });
  it("eroare de rețea = upstream, controlat", async () => {
    g.fetch = (async () => {
      throw new TypeError("network");
    }) as unknown as typeof fetch;
    expect((await eroare(callAi(cerere))).kind).toBe("upstream");
  });
});

describe("Limita internă pe utilizator", () => {
  it("se oprește exact la limită", async () => {
    for (let i = 0; i < 3; i++) expect((await takeQuota("u1", "profesor-ai", 3)).ok).toBe(true);
    expect((await takeQuota("u1", "profesor-ai", 3)).ok).toBe(false);
    expect((await takeQuota("u2", "profesor-ai", 3)).ok).toBe(true); // alt utilizator
  });
  it("o eroare a furnizorului nu consumă din limită (rambursare)", async () => {
    await takeQuota("u1", "profesor-ai", 2);
    await takeQuota("u1", "profesor-ai", 2);
    expect((await takeQuota("u1", "profesor-ai", 2)).ok).toBe(false);
    await refundQuota("u1", "profesor-ai");
    expect((await takeQuota("u1", "profesor-ai", 2)).ok).toBe(true);
  });
  it("rambursarea nu coboară sub zero", async () => {
    await refundQuota("u9", "profesor-ai");
    await refundQuota("u9", "profesor-ai");
    expect((await takeQuota("u9", "profesor-ai", 1)).ok).toBe(true);
    expect((await takeQuota("u9", "profesor-ai", 1)).ok).toBe(false);
  });
  it("se rambursează doar erorile furnizorului, nu refuzurile de conținut", () => {
    expect(eroareFurnizor(eroareDinStatus(402, null))).toBe(true);
    expect(eroareFurnizor(eroareDinStatus(429, null))).toBe(true);
    expect(eroareFurnizor(new AiError("r", "nu", "refusal"))).toBe(false);
    expect(eroareFurnizor(new Error("x"))).toBe(false);
  });
});

/** Lovable răspunde cu `lovable`, Gemini cu `gemini` (status + corp). Numără apelurile per furnizor. */
function furnizori(lovable: number, gemini: { status: number; body: unknown }) {
  const n = { lovable: 0, gemini: 0, cheieGemini: "" };
  g.fetch = (async (url: string, init: RequestInit) => {
    if (String(url).includes("generativelanguage")) {
      n.gemini++;
      n.cheieGemini = new Headers(init.headers).get("x-goog-api-key") ?? "";
      return new Response(JSON.stringify(gemini.body), { status: gemini.status });
    }
    n.lovable++;
    return new Response("{}", { status: lovable });
  }) as unknown as typeof fetch;
  return n;
}
const okGemini = (text: string) => ({
  status: 200,
  body: { candidates: [{ content: { parts: [{ text: "gând", thought: true }, { text }] } }] },
});

describe("Rezerva Gemini (plan gratuit)", () => {
  beforeEach(() => {
    process.env["GEMINI_API_KEY"] = "cheie-gemini";
  });
  it("Lovable 402 → răspunde Gemini (fără gândurile interne)", async () => {
    const n = furnizori(402, okGemini("Salut!"));
    expect(await callAi(cerere)).toBe("Salut!");
    expect(n).toMatchObject({ lovable: 1, gemini: 1, cheieGemini: "cheie-gemini" });
  });
  it("cât Lovable e în pauză, merge direct la Gemini", async () => {
    const n = furnizori(402, okGemini("a"));
    await callAi(cerere);
    await callAi(cerere);
    expect(n.lovable).toBe(1);
    expect(n.gemini).toBe(2);
  });
  it("fără cheie Lovable, folosește doar Gemini", async () => {
    delete process.env["LOVABLE_API_KEY"];
    const n = furnizori(200, okGemini("b"));
    expect(await callAi(cerere)).toBe("b");
    expect(n.lovable).toBe(0);
  });
  it("ambele epuizate → eroare controlată 429, nu răspuns inventat", async () => {
    furnizori(402, {
      status: 429,
      body: { error: { status: "RESOURCE_EXHAUSTED", details: [{ retryDelay: "23s" }] } },
    });
    const e = await eroare(callAi(cerere));
    expect(e.kind).toBe("rate_limit");
    expect(e.retryAfterSec).toBe(23);
  });
  it("cheie Gemini invalidă = auth", () => {
    expect(eroareGemini(400, '{"error":{"message":"API key not valid"}}').kind).toBe("auth");
    expect(eroareGemini(400, "{}").kind).toBe("upstream");
  });
  it("blocat de filtrele Gemini = refusal", async () => {
    furnizori(402, { status: 200, body: { promptFeedback: { blockReason: "SAFETY" } } });
    expect((await eroare(callAi(cerere))).kind).toBe("refusal");
  });
  it("răspuns gol = bad_response", async () => {
    furnizori(402, { status: 200, body: { candidates: [] } });
    expect((await eroare(callAi(cerere))).kind).toBe("bad_response");
  });
  it("refuzul Lovable NU trece la Gemini", async () => {
    let gemini = 0;
    g.fetch = (async (url: string) => {
      if (String(url).includes("generativelanguage")) gemini++;
      const ev = { type: "message_delta", delta: { stop_reason: "refusal" } };
      return new Response(`data: ${JSON.stringify(ev)}\n\n`, { status: 200 });
    }) as unknown as typeof fetch;
    expect((await eroare(callAi(cerere))).kind).toBe("refusal");
    expect(gemini).toBe(0);
  });
  it("aiStare: disponibil cu Gemini chiar dacă Lovable e în pauză", async () => {
    furnizori(402, okGemini("x"));
    await callAi(cerere);
    expect(await aiIndisponibil()).not.toBeNull();
    expect((await aiStare()).ok).toBe(true);
    delete process.env["GEMINI_API_KEY"];
    expect(await aiStare()).toMatchObject({ ok: false, kind: "credits" });
    delete process.env["LOVABLE_API_KEY"];
    expect(await aiStare()).toMatchObject({ ok: false, kind: "config" });
  });
});
