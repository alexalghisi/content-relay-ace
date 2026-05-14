import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre noi — MeditatiiDirect.ro" },
      { name: "description", content: "MeditatiiDirect.ro — platforma care conectează direct elevii cu profesori verificați din toată România." },
      { property: "og:title", content: "Despre noi — MeditatiiDirect.ro" },
      { property: "og:description", content: "MeditatiiDirect.ro — platforma care conectează direct elevii cu profesori verificați din toată România." },
    ,
      { property: "og:url", content: "https://meditatiidirect.ro/despre" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/despre" }],
  }),
  component: () => <PageShell title="Despre noi" description="MeditatiiDirect.ro — platforma care conectează direct elevii cu profesori verificați din toată România." />,
});
