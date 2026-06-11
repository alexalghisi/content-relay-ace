// Server function that resolves the actual PDF URL for a BAC subject/year/kind
// by querying storage.objects directly. Handles both legacy layout
// `{year}/{slug}-{kind}.pdf` and new crawler layout `{slug}/{year}/{session}-{kind}.pdf`.
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const BASE = () =>
  `${process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL}/storage/v1/object/public/bac-pdfs`;

const SESSION_PRIORITY = ["iunie", "speciala", "august", "simulare"];

const InputSchema = z.object({
  materie: z.string().min(1).max(40).regex(/^[a-z][a-z0-9-]*$/),
  an: z.coerce.number().int().min(2000).max(2035),
});

export const resolveBacPdfs = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const { materie, an } = data;
    // List both possible layouts via the storage API.
    const bucket = supabaseAdmin.storage.from("bac-pdfs");
    const [a, b] = await Promise.all([
      bucket.list(`${materie}/${an}`, { limit: 100 }),
      bucket.list(`${an}`, { limit: 100, search: materie }),
    ]);
    const names: string[] = [
      ...(a.data ?? []).map((f) => `${materie}/${an}/${f.name}`),
      ...(b.data ?? []).map((f) => `${an}/${f.name}`),
    ];
    const pick = (kind: "subiect" | "barem"): string | null => {
      // Prefer new-layout, iunie session first
      for (const sess of SESSION_PRIORITY) {
        const hit = names.find((n) => n === `${materie}/${an}/${sess}-${kind}.pdf`);
        if (hit) return `${BASE()}/${hit}`;
      }
      // Fall back to legacy layout
      const legacy = names.find((n) => n === `${an}/${materie}-${kind}.pdf`);
      if (legacy) return `${BASE()}/${legacy}`;
      return null;
    };

    return {
      subiect: pick("subiect"),
      barem: pick("barem"),
      available: names.length > 0,
    };
  });
