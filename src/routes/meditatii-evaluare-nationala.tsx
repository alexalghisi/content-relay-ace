import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/meditatii-evaluare-nationala")({
  head: () => ({
    meta: [
      { title: "Meditații Evaluare Națională — MeditatiiDirect.ro" },
      { name: "description", content: "Pregătire intensivă pentru Evaluarea Națională la matematică și română." },
      { property: "og:title", content: "Meditații Evaluare Națională — MeditatiiDirect.ro" },
      { property: "og:description", content: "Pregătire intensivă pentru Evaluarea Națională la matematică și română." },
      { property: "og:url", content: "https://meditatiidirect.ro/meditatii-evaluare-nationala" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/meditatii-evaluare-nationala" }],
  }),
  component: () => <PageShell title="Meditații Evaluare Națională" description="Pregătire intensivă pentru Evaluarea Națională la matematică și română." />,
});
