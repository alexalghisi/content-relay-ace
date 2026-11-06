/**
 * Which BAC papers have a written step-by-step solution. Client-safe: the glob is lazy,
 * so only the file names are bundled, never the Markdown itself.
 */
const KEYS = new Set(
  Object.keys(import.meta.glob("/src/content/rezolvari-bac/*.md", { query: "?raw" })).map((p) =>
    p.replace(/^.*\/([^/]+)\.md$/, "$1"),
  ),
);

/** Key format matches bacPaperKey: {an}-{materie}-{lucrare}. */
export function hasRezolvareKey(key: string) {
  return KEYS.has(key);
}
