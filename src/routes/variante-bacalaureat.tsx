import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/variante-bacalaureat")({
  head: () => ({
    meta: [
      { title: "Variante BAC 2026 — MeditatiiDirect.ro" },
      { name: "description", content: "Variante oficiale și de antrenament pentru BAC 2026 la toate materiile." },
      { property: "og:title", content: "Variante BAC 2026 — MeditatiiDirect.ro" },
      { property: "og:description", content: "Variante oficiale și de antrenament pentru BAC 2026 la toate materiile." },
      { property: "og:url", content: "https://meditatiidirect.ro/variante-bacalaureat" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/variante-bacalaureat" }],
  }),
  component: () => <PageShell title="Variante BAC 2026" description="Variante oficiale și de antrenament pentru BAC 2026 la toate materiile." />,
});
