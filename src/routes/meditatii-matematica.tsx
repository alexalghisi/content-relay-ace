import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/meditatii-matematica")({
  head: () => ({
    meta: [
      { title: "Meditații matematică — MeditatiiDirect.ro" },
      { name: "description", content: "Profesori verificați de matematică pentru gimnaziu, liceu, BAC și admitere." },
      { property: "og:title", content: "Meditații matematică — MeditatiiDirect.ro" },
      { property: "og:description", content: "Profesori verificați de matematică pentru gimnaziu, liceu, BAC și admitere." },
    ,
      { property: "og:url", content: "https://meditatiidirect.ro/meditatii-matematica" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/meditatii-matematica" }],
  }),
  component: () => <PageShell title="Meditații matematică" description="Profesori verificați de matematică pentru gimnaziu, liceu, BAC și admitere." />,
});
