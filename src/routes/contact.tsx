import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MeditatiiDirect.ro" },
      { name: "description", content: "Ia legătura cu echipa MeditatiiDirect." },
      { property: "og:title", content: "Contact — MeditatiiDirect.ro" },
      { property: "og:description", content: "Ia legătura cu echipa MeditatiiDirect." },
    ,
      { property: "og:url", content: "https://meditatiidirect.ro/contact" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/contact" }],
  }),
  component: () => <PageShell title="Contact" description="Ia legătura cu echipa MeditatiiDirect." />,
});
