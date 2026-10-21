import { describe, expect, it } from "bun:test";
import { signupSchema } from "./signup-validation";

const account = { name: "Elev Test", email: "elev@example.com", password: "parola-test" };
describe("Înscriere cu email și telefon", () => {
  it("cere telefonul de la crearea contului", () => {
    expect(signupSchema.safeParse({ ...account, phone: "" }).success).toBe(false);
  });
  it("salvează mobilul în format internațional", () => {
    expect(signupSchema.parse({ ...account, phone: "0712 345 678" }).phone).toBe("40712345678");
  });
  it("cere un email valid", () => {
    expect(signupSchema.safeParse({ ...account, email: "invalid", phone: "0712345678" }).success).toBe(false);
  });
});