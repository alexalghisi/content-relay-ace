import { describe, expect, it } from "bun:test";
import { signupSchema, telefonSchema } from "./signup-validation";

const account = { name: "Elev Test", email: "elev@example.com", password: "parola-test" };
describe("Înscriere (telefon temporar opțional)", () => {
  it("acceptă contul fără telefon", () => {
    expect(signupSchema.safeParse({ ...account, phone: "" }).success).toBe(true);
    expect(signupSchema.parse({ ...account }).phone).toBe("");
  });
  it("dacă e completat, salvează mobilul în format internațional", () => {
    expect(signupSchema.parse({ ...account, phone: "0712 345 678" }).phone).toBe("40712345678");
  });
  it("respinge un telefon completat greșit", () => {
    expect(signupSchema.safeParse({ ...account, phone: "123" }).success).toBe(false);
  });
  it("cu comutatorul activ, telefonul redevine obligatoriu", () => {
    expect(telefonSchema(true).safeParse("").success).toBe(false);
    expect(telefonSchema(true).parse("0712345678")).toBe("40712345678");
  });
  it("cere un email valid", () => {
    expect(signupSchema.safeParse({ ...account, email: "invalid", phone: "0712345678" }).success).toBe(false);
  });
});
