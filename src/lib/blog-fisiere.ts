// Încarcă articolele Markdown din src/content/blog (Vite glob). Importat doar din server functions
// și din sitemap, ca textul articolelor să nu ajungă în bundle-ul din browser.
import { aziRo, postariPublicate, type PostMarkdown } from "@/lib/blog-markdown";

const FISIERE = import.meta.glob("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export function postariMarkdown(azi = aziRo()): PostMarkdown[] {
  return postariPublicate(FISIERE, azi, (e) => console.error("[blog] fișier invalid:", e.message));
}

export function postareMarkdown(slug: string, azi = aziRo()): PostMarkdown | null {
  return postariMarkdown(azi).find((p) => p.slug === slug) ?? null;
}
