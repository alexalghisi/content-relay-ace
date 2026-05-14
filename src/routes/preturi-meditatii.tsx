import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/preturi-meditatii")({
  head: () => ({
    meta: [
      { title: "Prețuri meditații — MeditatiiDirect.ro" },
      { name: "description", content: "Prețuri meditații în România: de la 30 lei/oră. Compară tarifele profesorilor." },
      { property: "og:title", content: "Prețuri meditații — MeditatiiDirect.ro" },
      { property: "og:description", content: "Prețuri meditații în România: de la 30 lei/oră. Compară tarifele profesorilor." },
    ,
      { property: "og:url", content: "https://meditatiidirect.ro/preturi-meditatii" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/preturi-meditatii" }],
  }),
  component: () => <PageShell title="Prețuri meditații" description="Prețuri meditații în România: de la 30 lei/oră. Compară tarifele profesorilor." />,
});
