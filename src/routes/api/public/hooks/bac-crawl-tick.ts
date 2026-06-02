// Public hook lovit de pg_cron. Auth: bearer cu SUPABASE_SERVICE_ROLE_KEY
// (NU mai folosim publishable key, care e bundle-uit în client).
import { createFileRoute } from "@tanstack/react-router";
import { runBacCrawlTick } from "@/lib/bac-tick.server";

export const Route = createFileRoute("/api/public/hooks/bac-crawl-tick")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const expected = process.env.SUPABASE_SERVICE_ROLE_KEY;
        const auth = request.headers.get("authorization") ?? "";
        const token = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
        if (!expected || !token || token.length !== expected.length || token !== expected) {
          return new Response("Unauthorized", { status: 401 });
        }
        const { status, body } = await runBacCrawlTick();
        return new Response(JSON.stringify(body), {
          status,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
