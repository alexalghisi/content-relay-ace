import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/admitere")({
  head: () => ({
    meta: [
      { title: "Admitere la facultate — MeditatiiDirect.ro" },
      { name: "description", content: "Pregătire pentru admiterea la Medicină, Politehnică, Drept, ASE, SNSPA și 100+ universități din România." },
      { property: "og:title", content: "Admitere la facultate — MeditatiiDirect.ro" },
      { property: "og:description", content: "Pregătire pentru admiterea la Medicină, Politehnică, Drept, ASE, SNSPA și 100+ universități din România." },
    ],
  }),
  component: () => <PageShell title="Admitere la facultate" description="Pregătire pentru admiterea la Medicină, Politehnică, Drept, ASE, SNSPA și 100+ universități din România." />,
});
