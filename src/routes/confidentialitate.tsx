import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/confidentialitate")({
  head: () => ({
    meta: [
      { title: "Politica de confidențialitate — MeditatiiDirect.ro" },
      { name: "description", content: "Cum colectăm, folosim și protejăm datele tale personale." },
      { property: "og:title", content: "Politica de confidențialitate — MeditatiiDirect.ro" },
      { property: "og:description", content: "Cum colectăm, folosim și protejăm datele tale personale." },
    ],
  }),
  component: () => <PageShell title="Politica de confidențialitate" description="Cum colectăm, folosim și protejăm datele tale personale." />,
});
