import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/subiecte-admitere")({
  head: () => ({
    meta: [
      { title: "Subiecte de admitere — MeditatiiDirect.ro" },
      { name: "description", content: "Subiecte oficiale de admitere de la principalele universități din România." },
      { property: "og:title", content: "Subiecte de admitere — MeditatiiDirect.ro" },
      { property: "og:description", content: "Subiecte oficiale de admitere de la principalele universități din România." },
    ,
      { property: "og:url", content: "https://meditatiidirect.ro/subiecte-admitere" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/subiecte-admitere" }],
  }),
  component: () => <PageShell title="Subiecte de admitere" description="Subiecte oficiale de admitere de la principalele universități din România." />,
});
