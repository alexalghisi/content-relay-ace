import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/meditatii-engleza")({
  head: () => ({
    meta: [
      { title: "Meditații limba engleză — MeditatiiDirect.ro" },
      { name: "description", content: "Profesori verificați de engleză: conversație, gramatică, Cambridge, IELTS, BAC." },
      { property: "og:title", content: "Meditații limba engleză — MeditatiiDirect.ro" },
      { property: "og:description", content: "Profesori verificați de engleză: conversație, gramatică, Cambridge, IELTS, BAC." },
    ],
  }),
  component: () => <PageShell title="Meditații limba engleză" description="Profesori verificați de engleză: conversație, gramatică, Cambridge, IELTS, BAC." />,
});
