import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/meditatii-online")({
  head: () => ({
    meta: [
      { title: "Meditații online — MeditatiiDirect.ro" },
      { name: "description", content: "Profesori verificați care țin lecții online prin Zoom, Google Meet sau Whiteboard." },
      { property: "og:title", content: "Meditații online — MeditatiiDirect.ro" },
      { property: "og:description", content: "Profesori verificați care țin lecții online prin Zoom, Google Meet sau Whiteboard." },
    ],
  }),
  component: () => <PageShell title="Meditații online" description="Profesori verificați care țin lecții online prin Zoom, Google Meet sau Whiteboard." />,
});
