import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/tutoriale")({
  head: () => ({
    meta: [
      { title: "Tutoriale — MeditatiiDirect.ro" },
      { name: "description", content: "Tutoriale video și scrise pentru elevi, părinți și profesori." },
      { property: "og:title", content: "Tutoriale — MeditatiiDirect.ro" },
      { property: "og:description", content: "Tutoriale video și scrise pentru elevi, părinți și profesori." },
    ,
      { property: "og:url", content: "https://meditatiidirect.ro/tutoriale" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/tutoriale" }],
  }),
  component: () => <PageShell title="Tutoriale" description="Tutoriale video și scrise pentru elevi, părinți și profesori." />,
});
