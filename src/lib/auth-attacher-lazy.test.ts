import { describe, expect, it } from "bun:test";
import { readFileSync } from "node:fs";
import { bearerHeaders } from "./auth-attacher-lazy";

describe("antetul de autentificare pentru apelurile către server", () => {
  it("trimite tokenul sesiunii", async () => {
    const h = await bearerHeaders(async () => ({ auth: { getSession: async () => ({ data: { session: { access_token: "tok" } } }) } }));
    expect(h).toEqual({ Authorization: "Bearer tok" });
  });
  it("fără sesiune nu trimite nimic", async () => {
    expect(await bearerHeaders(async () => ({ auth: { getSession: async () => ({ data: { session: null } }) } }))).toEqual({});
  });
  it("start.ts folosește varianta leneșă (clientul Supabase nu intră în pachetul principal)", () => {
    const start = readFileSync("src/start.ts", "utf8");
    expect(start).toContain("attachSupabaseAuthLazy");
    expect(start).not.toMatch(/from "\.\/integrations\/supabase\/auth-attacher"/);
  });
});
