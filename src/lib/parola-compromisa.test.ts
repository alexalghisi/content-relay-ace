import { describe, expect, it } from "bun:test";
import { parolaCompromisa, sha1Hex } from "./parola-compromisa";

describe("parolaCompromisa", () => {
  it("1234567890 e găsită în lista furată", async () => {
    const h = await sha1Hex("1234567890");
    const cauta = async (p: string) =>
      p === h.slice(0, 5) ? `AAAA:1\n${h.slice(5)}:3000000\n` : "";
    expect(await parolaCompromisa("1234567890", cauta)).toBe(true);
  });
  it("parolă absentă din listă e acceptată", async () => {
    expect(
      await parolaCompromisa("x9!Lk2-qZ", async () => "0000000000000000000000000000000000A:5"),
    ).toBe(false);
  });
  it("padding (count 0) nu blochează", async () => {
    const h = await sha1Hex("abc");
    expect(await parolaCompromisa("abc", async () => `${h.slice(5)}:0`)).toBe(false);
  });
  it("dacă serviciul nu răspunde, nu blochează", async () => {
    expect(
      await parolaCompromisa("1234567890", async () => {
        throw new Error("net");
      }),
    ).toBe(false);
  });
});
