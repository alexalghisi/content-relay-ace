import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/profesori")({
  head: () => ({
    meta: [
      { title: "Profesori verificați — MeditatiiDirect.ro" },
      { name: "description", content: "1000+ profesori verificați la 20+ materii, în toată România." },
      { property: "og:title", content: "Profesori verificați — MeditatiiDirect.ro" },
      { property: "og:description", content: "1000+ profesori verificați la 20+ materii, în toată România." },
      { property: "og:url", content: "https://meditatiidirect.ro/profesori" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/profesori" }],
  }),
  component: () => <PageShell title="Profesori verificați" description="1000+ profesori verificați la 20+ materii, în toată România." />,
});
