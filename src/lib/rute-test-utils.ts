// Utilitar pentru teste: verifică dacă o cale internă corespunde unei rute din src/routes
// (fără catch-all-ul „$.tsx”) și nu e o pagină redirecționată 301.
import { readdirSync } from "node:fs";
import { consolidatedTarget } from "./seo-redirects";

const fisiere = readdirSync("src/routes").filter(
  (f) => /\.tsx?$/.test(f) && f !== "$.tsx" && !f.startsWith("__"),
);

const tipare = fisiere.map((f) => {
  const segmente = f
    .replace(/\.tsx?$/, "")
    .replace(/\[\.\]/g, "§")
    .split(".")
    .filter((s) => s !== "index")
    .map((s) => s.replace(/§/g, "."));
  const re = segmente
    .map((s) => (s.startsWith("$") ? "[^/]+" : s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))
    .join("/");
  return new RegExp(`^/${re}$`);
});

export function rutaExista(cale: string): boolean {
  const p = cale.split(/[?#]/)[0]!.replace(/\/+$/, "") || "/";
  if (p === "/") return true;
  return tipare.some((t) => t.test(p));
}

export function rutaRedirectata(cale: string): boolean {
  return consolidatedTarget(cale.split(/[?#]/)[0]!) !== null;
}
