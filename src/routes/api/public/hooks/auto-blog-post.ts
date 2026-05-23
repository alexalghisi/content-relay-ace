import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

// SEO seed topics — high-value long-tail keywords from GSC + Semrush research
const SEED_TOPICS = [
  "Cum te pregătești pentru admitere medicină — strategia pe materii (biologie, chimie, fizică)",
  "Diferența între meditații individuale și grup — care funcționează pentru tine",
  "Top 10 greșeli la BAC matematică și cum le eviți",
  "Pregătire BAC română — eseu pe Mihai Eminescu (Luceafărul) explicat",
  "Admitere UPB Electronică — proba scrisă, programa, subiecte",
  "Meditații Cambridge Advanced (CAE) — cum iei C1 în 6 luni",
  "Bursă Erasmus pentru liceeni și studenți — cum aplici în 2026",
  "Cum alegi un liceu de top după Evaluarea Națională",
  "Pregătire admitere Drept București — gramatică + raționament logic",
  "Meditații chimie organică BAC — alcooli, acizi, esteri explicate simplu",
  "Subiecte oficiale UMF Cluj — analiză 2022–2025 + predicții 2026",
  "Cum recuperezi 2 ani de matematică în 6 luni pentru BAC",
  "Diferențe între Evaluare Națională și Testele Naționale — calendar și probe",
  "Cele mai bune profile de liceu pentru admitere medicină",
  "Strategie de învățare cu tehnica Pomodoro pentru elevi de liceu",
  "Cum te pregătești pentru proba orală de limba română la BAC",
  "Admitere Politehnică Cluj (UTCN) — calendar, taxe, medii admitere",
  "Cum scrii un CV pentru bursă în străinătate (UK, Germania, Olanda)",
  "Meditații fizică — electromagnetism explicat pas cu pas",
  "Tot ce trebuie să știi despre simularea BAC 2026 — date, probe, note",
];

interface GeneratedPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string; // markdown
  category: string;
  tags: string[];
}

export const Route = createFileRoute("/api/public/hooks/auto-blog-post")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        // Basic auth via Supabase anon key (apikey header pattern)
        const apiKey = request.headers.get("apikey") ?? request.headers.get("x-api-key");
        const expected = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY;
        if (!apiKey || !expected || apiKey !== expected) {
          return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
          });
        }

        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        if (!LOVABLE_API_KEY) {
          return new Response(JSON.stringify({ error: "LOVABLE_API_KEY missing" }), { status: 500 });
        }

        // Get existing slugs/titles to avoid duplicates
        const { data: existing } = await supabaseAdmin
          .from("blog_posts")
          .select("slug,title")
          .order("created_at", { ascending: false })
          .limit(60);
        const existingSlugs = new Set((existing ?? []).map((p) => p.slug));
        const existingTitles = (existing ?? []).map((p) => p.title).slice(0, 25).join("\n - ");

        // Pick a topic not yet covered (basic heuristic)
        const candidates = SEED_TOPICS.filter((t) => {
          const seedSlug = t.toLowerCase().split(" ").slice(0, 4).join("-");
          return !Array.from(existingSlugs).some((s) => s.includes(seedSlug.slice(0, 12)));
        });
        const pool = candidates.length ? candidates : SEED_TOPICS;
        const topic = pool[Math.floor(Math.random() * pool.length)];

        const systemPrompt = `Ești redactor SEO senior pentru MeditatiiDirect.ro — platformă de meditații din România.
Scrii articole în limba română, cu diacritice corecte (ă, â, î, ș, ț), optimizate la maximum pentru Google.

REGULI STRICTE:
- Lungime conținut: 600–900 cuvinte
- Format markdown: titluri cu "## ", paragrafe normale, listele cu "- " sau "1. "
- Adaugă MINIM 6 linkuri interne sub forma [text ancoră](/cale), folosind DOAR aceste URL-uri reale:
  /meditatii, /meditatii-online, /meditatii-matematica, /meditatii-romana, /meditatii-engleza,
  /meditatii-franceza, /meditatii-informatica, /meditatii-fizica, /meditatii-bac, /meditatii-evaluare-nationala,
  /admitere, /subiecte-bac, /variante-bacalaureat, /simulari-bacalaureat-2026,
  /grile-medicina, /grile-upb, /ore-online, /platforma-meditatii-online,
  /profesori, /meditatori, /preturi-meditatii, /ofer-meditatii, /anunturi-meditatii,
  /meditatii-la-domiciliu, /pentru-profesori, /blog
- Folosește cifre reale plauzibile (tarife, procente, medii). Anul curent este 2026.
- Titlu între 50 și 70 caractere, conține anul 2026 dacă e relevant
- Excerpt între 140 și 160 caractere, descrie clar beneficiul cititorului
- Slug url-friendly fără diacritice, separat cu liniuțe, max 60 caractere, NU repeta sluguri existente
- Category: una singură ("BAC", "Admitere", "Meditații online", "Pentru profesori", "Limbi străine", "Evaluare Națională", "Burse & finanțare")
- Tags: 3-5 cuvinte cheie scurte`;

        const userPrompt = `Scrie un articol nou SEO-optimizat la maxim despre subiectul: "${topic}".

Sluguri DEJA folosite (nu le repeta):
 - ${existingTitles}

Returnează DOAR JSON valid cu schema: { title, slug, excerpt, content, category, tags }.`;

        const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-pro",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt },
            ],
            tools: [
              {
                type: "function",
                function: {
                  name: "create_blog_post",
                  description: "Create one SEO-optimized blog post",
                  parameters: {
                    type: "object",
                    properties: {
                      title: { type: "string", minLength: 30, maxLength: 80 },
                      slug: { type: "string", pattern: "^[a-z0-9-]+$", maxLength: 70 },
                      excerpt: { type: "string", minLength: 120, maxLength: 180 },
                      content: { type: "string", minLength: 1500 },
                      category: { type: "string" },
                      tags: { type: "array", items: { type: "string" }, minItems: 3, maxItems: 6 },
                    },
                    required: ["title", "slug", "excerpt", "content", "category", "tags"],
                    additionalProperties: false,
                  },
                },
              },
            ],
            tool_choice: { type: "function", function: { name: "create_blog_post" } },
          }),
        });

        if (!aiRes.ok) {
          const errText = await aiRes.text();
          if (aiRes.status === 429) {
            return new Response(JSON.stringify({ error: "rate_limited", detail: errText }), { status: 429 });
          }
          if (aiRes.status === 402) {
            return new Response(JSON.stringify({ error: "credits_exhausted" }), { status: 402 });
          }
          return new Response(JSON.stringify({ error: "ai_failed", detail: errText }), { status: 502 });
        }

        const aiData = await aiRes.json();
        const toolCall = aiData?.choices?.[0]?.message?.tool_calls?.[0];
        if (!toolCall?.function?.arguments) {
          return new Response(JSON.stringify({ error: "no_tool_call", raw: aiData }), { status: 502 });
        }

        let post: GeneratedPost;
        try {
          post = JSON.parse(toolCall.function.arguments) as GeneratedPost;
        } catch (e) {
          return new Response(JSON.stringify({ error: "parse_failed", raw: toolCall.function.arguments }), {
            status: 502,
          });
        }

        // Ensure unique slug
        let finalSlug = post.slug;
        if (existingSlugs.has(finalSlug)) {
          finalSlug = `${post.slug}-${new Date().toISOString().slice(0, 10)}`;
        }

        const { data: inserted, error: insertErr } = await supabaseAdmin
          .from("blog_posts")
          .insert({
            title: post.title,
            slug: finalSlug,
            excerpt: post.excerpt,
            content: post.content,
            category: post.category,
            tags: post.tags,
            is_published: true,
            published_at: new Date().toISOString(),
          })
          .select("id,slug,title")
          .single();

        if (insertErr) {
          return new Response(JSON.stringify({ error: "insert_failed", detail: insertErr.message }), { status: 500 });
        }

        return new Response(
          JSON.stringify({
            success: true,
            topic,
            post: inserted,
            url: `https://meditatiidirect.ro/blog/${inserted?.slug}`,
          }),
          { headers: { "Content-Type": "application/json" } },
        );
      },
    },
  },
});
