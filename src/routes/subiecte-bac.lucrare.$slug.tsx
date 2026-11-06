import { createFileRoute, redirect } from "@tanstack/react-router";
import { bacPaperPath, isBundledOriginal } from "@/lib/bac-paths";
import { getBacBySlug } from "@/lib/subiecte-bac.functions";

/**
 * Legacy descriptive-slug URLs (/subiecte-bac/lucrare/bac-2026-…-subiect-v01).
 * Original PDFs live at /subiecte-bac/{an}/{materie}/{sesiune-varianta}; unknown slugs
 * point to the archive instead of a 404.
 */
export const Route = createFileRoute("/subiecte-bac/lucrare/$slug")({
  loader: async ({ params }) => {
    const data = await getBacBySlug({ data: { slug: params.slug } });
    if (data && isBundledOriginal(data.row)) {
      throw redirect({ href: bacPaperPath(data.row), statusCode: 301 });
    }
    throw redirect({ href: "/subiecte-bac", statusCode: 301 });
  },
  head: () => ({ meta: [{ name: "robots", content: "noindex, follow" }] }),
});
