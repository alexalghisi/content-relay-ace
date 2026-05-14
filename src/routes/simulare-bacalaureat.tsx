import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/simulare-bacalaureat")({
  head: () => ({
    meta: [
      { title: "Simulare bacalaureat — MeditatiiDirect.ro" },
      { name: "description", content: "Simulări BAC oficiale și de antrenament cu rezolvări detaliate." },
      { property: "og:title", content: "Simulare bacalaureat — MeditatiiDirect.ro" },
      { property: "og:description", content: "Simulări BAC oficiale și de antrenament cu rezolvări detaliate." },
      { property: "og:url", content: "https://meditatiidirect.ro/simulare-bacalaureat" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/simulare-bacalaureat" }],
  }),
  component: () => <PageShell title="Simulare bacalaureat" description="Simulări BAC oficiale și de antrenament cu rezolvări detaliate." />,
});
