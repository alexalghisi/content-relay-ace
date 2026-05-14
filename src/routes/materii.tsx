import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/materii")({
  head: () => ({
    meta: [
      { title: "Toate materiile — MeditatiiDirect.ro" },
      { name: "description", content: "20+ materii disponibile: matematică, română, engleză, informatică, fizică, chimie, biologie, istorie, geografie și multe altele." },
      { property: "og:title", content: "Toate materiile — MeditatiiDirect.ro" },
      { property: "og:description", content: "20+ materii disponibile: matematică, română, engleză, informatică, fizică, chimie, biologie, istorie, geografie și multe altele." },
      { property: "og:url", content: "https://meditatiidirect.ro/materii" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/materii" }],
  }),
  component: () => <PageShell title="Toate materiile" description="20+ materii disponibile: matematică, română, engleză, informatică, fizică, chimie, biologie, istorie, geografie și multe altele." />,
});
