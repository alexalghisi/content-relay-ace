import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { expect, test } from "@playwright/test";

// Favicon-ul este toca de absolvire (public/). Testul pică dacă pagina trimite alt fișier
// decât cel din repo sau dacă lipsește un format cerut de Google / iPhone.
const sha = (b: Buffer) => createHash("sha256").update(b).digest("hex");

test("homepage declară favicon-ul în toate formatele și servește exact fișierele din repo", async ({ page, request }) => {
  const res = await page.goto("/");
  const html = await res!.text();
  const icons = [
    { href: "/favicon.ico?v=3", file: "public/favicon.ico" },
    { href: "/favicon.svg?v=3", file: "public/favicon.svg" },
    { href: "/icon-192.png?v=3", file: "public/icon-192.png" },
    { href: "/apple-touch-icon.png?v=3", file: "public/apple-touch-icon.png" },
  ];
  for (const i of icons) {
    expect(html, `lipsește ${i.href} din <head>`).toContain(`href="${i.href}"`);
    const r = await request.get(i.href);
    expect(r.status(), i.href).toBe(200);
    expect(sha(Buffer.from(await r.body())), i.href).toBe(sha(readFileSync(i.file)));
  }
  expect(html).toContain('sizes="48x48"');
});
