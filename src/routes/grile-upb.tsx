import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/grile-upb")({
  head: () => ({
    meta: [
      { title: "Grile pentru admiterea la UPB — MeditatiiDirect.ro" },
      { name: "description", content: "Grile Politehnica: matematică, fizică, informatică." },
      { property: "og:title", content: "Grile pentru admiterea la UPB — MeditatiiDirect.ro" },
      { property: "og:description", content: "Grile Politehnica: matematică, fizică, informatică." },
    ,
      { property: "og:url", content: "https://meditatiidirect.ro/grile-upb" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/grile-upb" }],
  }),
  component: () => <PageShell title="Grile pentru admiterea la UPB" description="Grile Politehnica: matematică, fizică, informatică." />,
});
