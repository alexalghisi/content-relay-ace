/// <reference types="bun" />
import { describe, it, expect, beforeAll } from "bun:test";
import { AiError, callAi, takeQuota } from "./ai-gateway.server";

const opts = { system: "s", messages: [{ role: "user" as const, content: "salut" }], maxTokens: 10 };
const json = (status: number, body: unknown) =>
  (async () => new Response(JSON.stringify(body), { status })) as unknown as typeof fetch;
const sse = (text: string) =>
  (async () =>
    new Response(
      `data: {"type":"content_block_delta","delta":{"type":"text_delta","text":"${text}"}}\n\ndata: {"type":"message_stop"}\n\n`,
      { status: 200 },
    )) as unknown as typeof fetch;

async function err(f: typeof fetch) {
  try {
    await callAi(opts, f);
  } catch (e) {
    return e as AiError;
  }
  throw new Error("nu a aruncat");
}

beforeAll(() => {
  process.env["LOVABLE_API_KEY"] = process.env["LOVABLE_API_KEY"] || "test-key";
});

describe("gateway AI — tratarea erorilor", () => {
  it("402 (credite epuizate) → mesaj de credite, fără succes fals", async () => {
    const e = await err(json(402, { type: "insufficient_credits" }));
    expect(e.message).toContain("402");
    expect(e.userMessage).toContain("Creditele AI");
  });
  it("403 credit_limit_reached → limită de cheltuieli, nu refuz generic", async () => {
    const e = await err(json(403, { type: "credit_limit_reached" }));
    expect(e.userMessage).toContain("Limita de cheltuieli");
  });
  it("429 → reîncercare peste un minut", async () => {
    expect((await err(json(429, {}))).userMessage).toContain("peste un minut");
  });
  it("401 → eroare de configurare, nu de credite", async () => {
    const e = await err(json(401, {}));
    expect(e.userMessage).toContain("configurată");
    expect(e.userMessage).not.toContain("Creditele");
  });
  it("după restabilirea cotei, același apel reușește", async () => {
    await err(json(402, {}));
    expect(await callAi(opts, sse("Bună"))).toBe("Bună");
  });
  it("limita internă: fără cache edge nu blochează (dev), iar contul de test nu o folosește", async () => {
    expect(await takeQuota("u1", "profesor-ai", 600)).toEqual({ ok: true, left: 600 });
  });
});
