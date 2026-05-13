import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/meditatii")({
  head: () => ({
    meta: [
      { title: "Meditații în România — MeditatiiDirect.ro" },
      { name: "description", content: "Caută meditații cu profesori verificați după materie, oraș și disponibilitate online. Listarea completă cu filtre vine în iterația următoare." },
      { property: "og:title", content: "Meditații în România — MeditatiiDirect.ro" },
      { property: "og:description", content: "Caută meditații cu profesori verificați după materie, oraș și disponibilitate online. Listarea completă cu filtre vine în iterația următoare." },
    ],
  }),
  component: () => <PageShell title="Meditații în România" description="Caută meditații cu profesori verificați după materie, oraș și disponibilitate online. Listarea completă cu filtre vine în iterația următoare." />,
});
