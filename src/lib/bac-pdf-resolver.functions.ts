// Server function that resolves the actual PDF URL for a BAC subject/year/kind
// by querying storage.objects directly. Handles both legacy layout
// `{year}/{slug}-{kind}.pdf` and new crawler layout `{slug}/{year}/{session}-{kind}.pdf`.
import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const BASE = () =>
  `${process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL}/storage/v1/object/public/bac-pdfs`;

const SESSION_PRIORITY = ["iunie", "speciala", "august", "simulare"];

export const resolveBacPdfs = createServerFn({ method: "GET" })
  .inputValidator((input: { materie: string; an: number }) => input)
  .handler(async ({ data }) => {
    const { materie, an } = data;
    // Pull all object names for this subject/year combination across both layouts.
    const { data: rows } = await supabaseAdmin
      .schema("storage")
      .from("objects")
      .select("name")
      .eq("bucket_id", "bac-pdfs")
      .or(`name.like.${materie}/${an}/%,name.like.${an}/${materie}-%,name.like.${an}/${materie}.%`);

    const names = (rows ?? []).map((r) => r.name as string);
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
