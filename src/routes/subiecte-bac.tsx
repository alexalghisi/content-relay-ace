import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/subiecte-bac")({
  head: () => ({
    meta: [
      { title: "Subiecte BAC rezolvate — MeditatiiDirect.ro" },
      { name: "description", content: "Subiecte de bacalaureat rezolvate complet, pe ani și sesiuni, la toate materiile." },
      { property: "og:title", content: "Subiecte BAC rezolvate — MeditatiiDirect.ro" },
      { property: "og:description", content: "Subiecte de bacalaureat rezolvate complet, pe ani și sesiuni, la toate materiile." },
      { property: "og:url", content: "https://meditatiidirect.ro/subiecte-bac" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/subiecte-bac" }],
  }),
  component: () => <PageShell title="Subiecte BAC rezolvate" description="Subiecte de bacalaureat rezolvate complet, pe ani și sesiuni, la toate materiile." />,
});
