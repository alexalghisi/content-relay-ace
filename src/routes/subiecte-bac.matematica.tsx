import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/subiecte-bac/matematica")({
  beforeLoad: () => {
    throw redirect({
      to: "/subiecte-bac/materie/$materie",
      params: { materie: "matematica" },
      statusCode: 301,
    });
  },
  head: () => ({
    meta: [
      { title: "Subiecte BAC Matematică 2010–2026 | MeditatiiDirect.ro" },
      {
        name: "description",
        content: "Subiecte și bareme originale BAC Matematică, PDF gratuite pentru 2010–2026.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
});
