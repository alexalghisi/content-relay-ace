import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/grile-medicina")({
  head: () => ({
    meta: [
      { title: "Grile pentru admiterea la Medicină — MeditatiiDirect.ro" },
      { name: "description", content: "Grile UMF: biologie, chimie organică, fizică. Antrenament pentru admiterea la Medicină." },
      { property: "og:title", content: "Grile pentru admiterea la Medicină — MeditatiiDirect.ro" },
      { property: "og:description", content: "Grile UMF: biologie, chimie organică, fizică. Antrenament pentru admiterea la Medicină." },
      { property: "og:url", content: "https://meditatiidirect.ro/grile-medicina" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/grile-medicina" }],
  }),
  component: () => <PageShell title="Grile pentru admiterea la Medicină" description="Grile UMF: biologie, chimie organică, fizică. Antrenament pentru admiterea la Medicină." />,
});
