import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog MeditatiiDirect — MeditatiiDirect.ro" },
      { name: "description", content: "Articole, sfaturi și ghiduri despre educație, examene și carieră." },
      { property: "og:title", content: "Blog MeditatiiDirect — MeditatiiDirect.ro" },
      { property: "og:description", content: "Articole, sfaturi și ghiduri despre educație, examene și carieră." },
    ],
  }),
  component: () => <PageShell title="Blog MeditatiiDirect" description="Articole, sfaturi și ghiduri despre educație, examene și carieră." />,
});
