import { afterEach, describe, expect, it } from "bun:test";
import { sendSms, sendSmsTracked, getSmsDelivery, normalizeRoPhone } from "./sms.server";

const originalFetch = globalThis.fetch;
const originalToken = process.env["GATEWAYAPI_TOKEN"];
const originalError = console.error;

afterEach(() => {
  globalThis.fetch = originalFetch;
  console.error = originalError;
  if (originalToken === undefined) delete process.env["GATEWAYAPI_TOKEN"];
  else process.env["GATEWAYAPI_TOKEN"] = originalToken;
});

describe("SMS delivery", () => {
  it("normalizes local and international forms to the same recipient", () => {
    expect(normalizeRoPhone("0770763175")).toBe("40770763175");
    expect(normalizeRoPhone("+40770763175")).toBe("40770763175");
  });

  it("captures accepted message IDs without claiming delivery", async () => {
    process.env["GATEWAYAPI_TOKEN"] = "test-only-not-a-provider-credential";
    globalThis.fetch = (async () => Response.json({ ids: [1234] })) as unknown as typeof fetch;
    expect(await sendSmsTracked(["0712345678"], "Test")).toEqual({ accepted: 1, messageIds: [1234], httpStatus: 200 });
  });

  it("rechecks the same accepted ID after archive 404, without sending another SMS", async () => {
    process.env["GATEWAYAPI_TOKEN"] = "test-only-not-a-provider-credential";
    const urls: string[] = [];
    globalThis.fetch = (async (input: string | URL | Request, init?: RequestInit) => {
      expect(init?.method ?? "GET").toBe("GET");
      urls.push(String(input));
      return urls.length === 1 ? new Response(null, { status: 404 })
        : Response.json([{ recipients: [{ dsnstatus: "DELIVERED" }] }]);
    }) as unknown as typeof fetch;
    expect((await getSmsDelivery(1234)).state).toBe("unknown");
    expect((await getSmsDelivery(1234)).state).toBe("delivered");
    expect(urls).toEqual(["https://gatewayapi.com/rest/mtsms/1234", "https://gatewayapi.com/rest/mtsms/1234"]);
  });

  it("does not label SENT as delivered", async () => {
    process.env["GATEWAYAPI_TOKEN"] = "test-only-not-a-provider-credential";
    globalThis.fetch = (async () => Response.json([{ recipients: [{ dsnstatus: "SENT" }] }])) as unknown as typeof fetch;
    expect((await getSmsDelivery(1234)).state).toBe("pending");
  });

  it("recognizes terminal delivery failure", async () => {
    process.env["GATEWAYAPI_TOKEN"] = "test-only-not-a-provider-credential";
    globalThis.fetch = (async () => Response.json([{ recipients: [{ dsnstatus: "UNDELIVERABLE" }] }])) as unknown as typeof fetch;
    expect((await getSmsDelivery(1234)).state).toBe("failed");
  });

  it("keeps status authentication failures unknown and does not log private response bodies", async () => {
    process.env["GATEWAYAPI_TOKEN"] = "test-only-not-a-provider-credential";
    const logs: unknown[][] = [];
    console.error = (...args) => { logs.push(args); };
    globalThis.fetch = (async () => new Response("private-provider-body", { status: 401 })) as unknown as typeof fetch;
    expect((await getSmsDelivery(1234)).state).toBe("unknown");
    expect(logs).toEqual([["sms status failed", 401]]);
  });
  it("sends normalized, deduplicated recipients to the global account domain", async () => {
    process.env["GATEWAYAPI_TOKEN"] = "test-only-not-a-provider-credential";
    let endpoint = "";
    let recipients: unknown = null;
    globalThis.fetch = (async (input: string | URL | Request, init?: RequestInit) => {
      endpoint = String(input);
      recipients = JSON.parse(String(init?.body)).recipients;
      return new Response("{}", { status: 200 });
    }) as unknown as typeof fetch;
    expect(await sendSms(["0712345678", "+40712345678"], "Test")).toBe(1);
    expect(endpoint).toBe("https://gatewayapi.com/rest/mtsms");
    expect(recipients).toEqual([{ msisdn: 40712345678 }]);
  });

  it("returns zero on provider rejection without logging the provider body", async () => {
    process.env["GATEWAYAPI_TOKEN"] = "test-only-not-a-provider-credential";
    const logs: unknown[][] = [];
    console.error = (...args) => { logs.push(args); };
    globalThis.fetch = (async () => new Response("private-provider-body", { status: 401 })) as unknown as typeof fetch;
    expect(await sendSms(["0712345678"], "Test")).toBe(0);
    expect(logs).toEqual([["sms failed", 401]]);
  });

  it("does not contact the provider without a configured credential", async () => {
    delete process.env["GATEWAYAPI_TOKEN"];
    let called = false;
    globalThis.fetch = (async () => { called = true; return new Response(); }) as unknown as typeof fetch;
    expect(await sendSms(["0712345678"], "Test")).toBe(0);
    expect(called).toBe(false);
  });
});