import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/meditatii-romana")({
  head: () => ({
    meta: [
      { title: "Meditații limba română — MeditatiiDirect.ro" },
      { name: "description", content: "Profesori verificați de limba română pentru Evaluare Națională, BAC și admitere." },
      { property: "og:title", content: "Meditații limba română — MeditatiiDirect.ro" },
      { property: "og:description", content: "Profesori verificați de limba română pentru Evaluare Națională, BAC și admitere." },
      { property: "og:url", content: "https://meditatiidirect.ro/meditatii-romana" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/meditatii-romana" }],
  }),
  component: () => <PageShell title="Meditații limba română" description="Profesori verificați de limba română pentru Evaluare Națională, BAC și admitere." />,
});
