import { describe, expect, it } from "bun:test";
import type { SupabaseClient } from "@supabase/supabase-js";
import { stergeContComplet, TABELE_CONT } from "./stergere-cont.server";
import { tipIdentificator } from "./admin-conturi.functions";

function adminFals(opts: { fisiere?: string[]; authDeleteError?: string } = {}) {
  const sterse: string[] = [];
  const fisiereSterse: string[] = [];
  let fisiere = [...(opts.fisiere ?? [])];
  let authSters = false;
  const tabel = (nume: string) => ({
    select: () => ({ or: async () => ({ data: [{ id: "c1" }] }) }),
    delete: () => ({
      eq: async (_c: string, v: string) => (sterse.push(`${nume}:${v}`), { error: null }),
      in: async () => (sterse.push(`${nume}:in`), { error: null }),
    }),
  });
  const admin = {
    from: tabel,
    storage: {
      from: () => ({
        list: async () => ({ data: fisiere.map((name) => ({ name })), error: null }),
        remove: async (paths: string[]) => {
          fisiereSterse.push(...paths);
          fisiere = [];
          return { error: null };
        },
      }),
    },
    auth: {
      admin: {
        deleteUser: async () => {
          authSters = true;
          return { error: opts.authDeleteError ? { message: opts.authDeleteError } : null };
        },
      },
    },
  } as unknown as SupabaseClient;
  return { admin, sterse, fisiereSterse, authSters: () => authSters };
}

describe("stergeContComplet", () => {
  it("șterge profilul public de profesor, ofertele, disponibilitatea, fotografiile și contul", async () => {
    const f = adminFals({ fisiere: ["avatar.png"] });
    await stergeContComplet(f.admin, "u1");
    for (const t of ["teacher_profiles", "teacher_offers", "teacher_availability", "profiles"]) {
      expect(f.sterse).toContain(`${t}:u1`);
    }
    expect(f.sterse).toContain("messages:in");
    expect(f.fisiereSterse).toEqual(["u1/avatar.png"]);
    expect(f.authSters()).toBe(true);
  });

  it("ofertele și disponibilitatea se șterg înaintea profilului", () => {
    expect(TABELE_CONT.indexOf("teacher_offers")).toBeLessThan(TABELE_CONT.indexOf("teacher_profiles"));
    expect(TABELE_CONT.indexOf("teacher_availability")).toBeLessThan(TABELE_CONT.indexOf("teacher_profiles"));
  });

  it("un cont deja șters din auth nu e eroare: curăță ce a rămas", async () => {
    const f = adminFals({ authDeleteError: "User not found" });
    await stergeContComplet(f.admin, "u2");
    expect(f.sterse).toContain("teacher_profiles:u2");
  });

  it("altă eroare la ștergerea contului e raportată", async () => {
    const f = adminFals({ authDeleteError: "Database error" });
    await expect(stergeContComplet(f.admin, "u3")).rejects.toThrow("Nu am putut șterge contul");
  });
});

describe("tipIdentificator", () => {
  it("recunoaște e-mailul, ID-ul și linkul profilului", () => {
    expect(tipIdentificator(" Ana@Exemplu.ro ")).toEqual({ tip: "email", valoare: "ana@exemplu.ro" });
    expect(tipIdentificator("b9e2bf32-2635-437d-93d0-ac9c13e8ae8c").tip).toBe("uid");
    expect(tipIdentificator("https://meditatiidirect.ro/profesor/glisca-mihai-tudor-b9e2bf")).toEqual({
      tip: "slug",
      valoare: "glisca-mihai-tudor-b9e2bf",
    });
    expect(tipIdentificator("/profesor/ana-pop-123?x=1").valoare).toBe("ana-pop-123");
  });
});
