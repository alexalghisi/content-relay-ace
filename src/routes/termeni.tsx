import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/termeni")({
  head: () => ({
    meta: [
      { title: "Termeni și condiții — MeditatiiDirect.ro" },
      { name: "description", content: "Termenii și condițiile de utilizare ale platformei MeditatiiDirect.ro." },
      { property: "og:title", content: "Termeni și condiții — MeditatiiDirect.ro" },
      { property: "og:description", content: "Termenii și condițiile de utilizare ale platformei MeditatiiDirect.ro." },
      { property: "og:url", content: "https://meditatiidirect.ro/termeni" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/termeni" }],
  }),
  component: () => <PageShell title="Termeni și condiții" description="Termenii și condițiile de utilizare ale platformei MeditatiiDirect.ro." />,
});
