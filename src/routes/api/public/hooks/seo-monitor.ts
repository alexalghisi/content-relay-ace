import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/hooks/seo-monitor")({
  server: { handlers: { POST: async ({ request }) => {
    const expected = process.env.BLOG_HOOK_SECRET;
    const provided = request.headers.get("x-webhook-secret");
    if (!expected || !provided || provided !== expected) return Response.json({ error: "Unauthorized" }, { status: 401 });
    const { collectDailySeoReport } = await import("@/lib/seo-monitor.server");
    try {
      const result = await collectDailySeoReport();
      return Response.json(result, { status: result.status === "failed" ? 502 : 200 });
    } catch (error) {
      console.error("Daily SEO monitoring failed", error);
      return Response.json({ error: error instanceof Error ? error.message : "SEO monitoring failed" }, { status: 500 });
    }
  } } },
});