import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/pentru-profesori")({
  head: () => ({
    meta: [
      { title: "Pentru profesori — MeditatiiDirect.ro" },
      { name: "description", content: "Publică-ți profilul gratuit, primește mesaje direct de la elevi, păstrează 100% din tarif." },
      { property: "og:title", content: "Pentru profesori — MeditatiiDirect.ro" },
      { property: "og:description", content: "Publică-ți profilul gratuit, primește mesaje direct de la elevi, păstrează 100% din tarif." },
    ],
  }),
  component: () => <PageShell title="Pentru profesori" description="Publică-ți profilul gratuit, primește mesaje direct de la elevi, păstrează 100% din tarif." />,
});
