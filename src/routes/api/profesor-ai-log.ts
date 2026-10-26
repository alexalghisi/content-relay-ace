// Client-side Profesor AI diagnostics (why the live lesson fell back), written to the server log.
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/profesor-ai-log")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const t = (await request.text().catch(() => "")).slice(0, 500).replace(/[\r\n]+/g, " ");
        console.warn(`[profesor-ai] client: ${t} | ua=${(request.headers.get("user-agent") ?? "").slice(0, 120)}`);
        return new Response(null, { status: 204 });
      },
    },
  },
});
