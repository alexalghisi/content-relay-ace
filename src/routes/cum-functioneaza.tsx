import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/cum-functioneaza")({
  head: () => ({
    meta: [
      { title: "Cum funcționează MeditatiiDirect — MeditatiiDirect.ro" },
      { name: "description", content: "Trei pași simpli: caută profesorul, discută direct prin chat, învață și lasă o recenzie." },
      { property: "og:title", content: "Cum funcționează MeditatiiDirect — MeditatiiDirect.ro" },
      { property: "og:description", content: "Trei pași simpli: caută profesorul, discută direct prin chat, învață și lasă o recenzie." },
    ],
  }),
  component: () => <PageShell title="Cum funcționează MeditatiiDirect" description="Trei pași simpli: caută profesorul, discută direct prin chat, învață și lasă o recenzie." />,
});
