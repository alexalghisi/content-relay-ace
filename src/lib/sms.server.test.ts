import { afterEach, describe, expect, it } from "bun:test";
import { sendSms } from "./sms.server";

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