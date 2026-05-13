import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/meditatii-bac")({
  head: () => ({
    meta: [
      { title: "Pregătire BAC 2026 — MeditatiiDirect.ro" },
      { name: "description", content: "Meditații specializate pentru Bacalaureat: matematică, română, istorie, biologie, chimie, fizică, informatică." },
      { property: "og:title", content: "Pregătire BAC 2026 — MeditatiiDirect.ro" },
      { property: "og:description", content: "Meditații specializate pentru Bacalaureat: matematică, română, istorie, biologie, chimie, fizică, informatică." },
    ],
  }),
  component: () => <PageShell title="Pregătire BAC 2026" description="Meditații specializate pentru Bacalaureat: matematică, română, istorie, biologie, chimie, fizică, informatică." />,
});
