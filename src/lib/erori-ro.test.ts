import { describe, expect, test } from "bun:test";
import { erroareRo } from "./erori-ro";

describe("erroareRo", () => {
  test("traduce erorile frecvente Supabase", () => {
    expect(erroareRo("New password should be different from the old password.")).toContain("diferită");
    expect(erroareRo("Password should be at least 6 characters.")).toContain("minim 6");
    expect(erroareRo("A user with this email address has already been registered")).toContain("deja un cont");
    expect(erroareRo("Email rate limit exceeded")).toContain("Prea multe");
    expect(erroareRo('duplicate key value violates unique constraint "teacher_profiles_slug_key"')).toContain("deja");
    expect(erroareRo("new row violates row-level security policy")).toContain("Reautentifică");
    expect(erroareRo("TypeError: Failed to fetch")).toContain("internetul");
    expect(erroareRo("value too long for type character varying(500)")).toContain("prea lung");
  });
  test("mesaj necunoscut → fallback în română, niciodată textul brut", () => {
    expect(erroareRo("Something weird happened")).toBe("A apărut o eroare. Mai încearcă o dată.");
    expect(erroareRo(undefined, "Nu am putut trimite.")).toBe("Nu am putut trimite.");
  });
});
