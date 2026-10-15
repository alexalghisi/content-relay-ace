import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

// Un articol per apel. Cron-ul îl cheamă de 5 ori pe zi.
// Teme legate direct de ce face platforma: elevul postează o cerere, profesorii trimit
// propuneri cu dată/oră/tarif, chat direct, evaluare în stele — plus materii și examene.
const SEED_TOPICS = [
  "Cum ceri meditații fără să suni la zece profesori: cererea care aduce propuneri",
  "Ce să scrii în cererea de meditații ca să primești propuneri potrivite",
  "Cum compari propunerile profesorilor: tarif, disponibilitate, experiență",
  "Prima lecție de meditații: ce întrebări să pui profesorului în chat",
  "Cum evaluezi corect un profesor după lecție și de ce contează stelele",
  "Meditații matematică pentru BAC M1: plan de pregătire pe luni",
  "Meditații matematică clasa a 8-a: cum recuperezi materia pentru Evaluarea Națională",
  "Meditații română BAC: cum structurezi eseul despre un roman interbelic",
  "Meditații română: comentariul de text poetic pas cu pas",
  "Meditații engleză pentru adulți: de la zero la conversație",
  "Meditații engleză pentru BAC: proba orală și scrisă explicate",
  "Meditații informatică BAC: algoritmii care apar cel mai des",
  "Meditații chimie organică: cum înveți grupele funcționale",
  "Meditații fizică BAC: mecanica fără formule memorate pe de rost",
  "Meditații biologie pentru admitere la medicină: ce capitole contează",
  "Meditații germană: când merită un profesor și când o aplicație",
  "Meditații online sau acasă: cum alegi formatul potrivit",
  "Cât costă meditațiile în 2026 și cum îți stabilești bugetul în cerere",
  "Cum te organizezi în ultimele 3 luni înainte de BAC",
  "Cum folosești subiectele BAC din anii trecuți ca să te antrenezi",
  "Simularea BAC: ce faci cu rezultatul ca să crești nota",
  "Evaluarea Națională la română: greșeli care costă puncte",
  "Cum găsești elevi ca profesor: răspunde la cereri cu propuneri clare",
  "Pentru profesori: cum scrii o propunere de meditații care e acceptată",
  "Pentru părinți: cum îți dai seama dacă copilul are nevoie de meditații",
  "Tehnici de învățare care funcționează: repetiția spațiată și testarea",
  "Cum îți faci un program de studiu pe săptămână pentru clasa a 12-a",
  "Admitere la Politehnică: ce materii pregătești și cu cât timp înainte",
  "Admitere la Drept: cum te pregătești la limba română și logică",
  "Meditații pentru copii cu dificultăți la matematică: răbdare și pași mici",
];

const INTERNAL_LINKS = [
  "/meditatii", "/cum-functioneaza", "/meditatii-online", "/meditatii-matematica", "/meditatii-romana",
  "/meditatii-engleza", "/meditatii-germana", "/meditatii-franceza", "/meditatii-informatica", "/meditatii-fizica",
  "/meditatii-chimie", "/meditatii-biologie", "/meditatii-bac", "/meditatii-evaluare-nationala", "/bac",
  "/rezolvari", "/subiecte-bac", "/variante-bacalaureat", "/simulare-bacalaureat", "/calculator-medie-bac",
  "/calculator-nota-admitere", "/admitere", "/preturi-meditatii", "/pentru-profesori", "/vreau-sa-dau-meditatii",
  "/cereri", "/blog",
];

const CATEGORIES = ["BAC", "Admitere", "Meditații online", "Pentru profesori", "Pentru părinți", "Limbi străine", "Evaluare Națională", "Cum funcționează"];

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 70);
}

async function readText(res: Response): Promise<{ text: string; stop: string | null; error?: string }> {
  const reader = res.body!.getReader();
  const dec = new TextDecoder();
  let buf = "";
  let text = "";
  let stop: string | null = null;
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buf += dec.decode(value, { stream: true });
    let i: number;
    while ((i = buf.indexOf("\n")) >= 0) {
      const line = buf.slice(0, i).trim();
      buf = buf.slice(i + 1);
      if (!line.startsWith("data:")) continue;
      try {
        const ev = JSON.parse(line.slice(5));
        if (ev.type === "content_block_delta" && ev.delta?.type === "text_delta") text += ev.delta.text;
        else if (ev.type === "message_delta" && ev.delta?.stop_reason) stop = ev.delta.stop_reason;
        else if (ev.type === "error") return { text, stop, error: JSON.stringify(ev.error ?? ev).slice(0, 300) };
      } catch {
        /* cadru incomplet */
      }
    }
  }
  return { text, stop };
}

const json = (b: unknown, status = 200) =>
  new Response(JSON.stringify(b), { status, headers: { "Content-Type": "application/json" } });

export const Route = createFileRoute("/api/public/hooks/auto-blog-post")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = request.headers.get("x-webhook-secret") ?? request.headers.get("x-api-key");
        const expected = process.env.BLOG_HOOK_SECRET;
        if (!expected || !apiKey || apiKey !== expected) return json({ error: "Unauthorized" }, 401);
        // Oprit la cererea proprietarului (15 oct 2026): publicarea automată producea articole duplicate.
        if (process.env.AUTO_BLOG_ENABLED !== "true") return json({ status: "disabled" });

        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        if (!LOVABLE_API_KEY) return json({ error: "LOVABLE_API_KEY missing" }, 500);

        // Limită de siguranță: maximum 5 articole publicate automat pe zi.
        const since = new Date();
        since.setUTCHours(0, 0, 0, 0);
        const { count } = await supabaseAdmin
          .from("blog_posts")
          .select("id", { count: "exact", head: true })
          .gte("published_at", since.toISOString());
        if ((count ?? 0) >= 5) return json({ status: "daily_limit_reached" });

        const { data: existing } = await supabaseAdmin
          .from("blog_posts")
          .select("slug,title")
          .order("created_at", { ascending: false })
          .limit(300);
        const existingSlugs = new Set((existing ?? []).map((p) => p.slug));
        const titles = (existing ?? []).map((p) => p.title);
        const norm = (s: string) => slugify(s).split("-").filter((w) => w.length > 3);
        const covered = (t: string) => {
          const w = new Set(norm(t));
          return titles.some((x) => {
            const xs = norm(x);
            const hit = xs.filter((y) => w.has(y)).length;
            return xs.length > 0 && hit / Math.min(w.size, xs.length) >= 0.6;
          });
        };
        const pool = SEED_TOPICS.filter((t) => !covered(t));
        const topic = pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;

        const { data: seoReport } = await supabaseAdmin.from("daily_seo_reports")
          .select("report_date,reports").eq("status", "complete")
          .order("report_date", { ascending: false }).limit(1).maybeSingle();
        const research = seoReport?.reports as { keywords?: { data?: { rows?: unknown[][] } } } | null;
        const demand = research?.keywords?.data?.rows?.filter(row =>
          typeof row[0] === "string" && /^[a-zA-Z0-9ăâîșțĂÂÎȘȚ –-]+$/.test(row[0]) && Number.isFinite(Number(row[1]))
        ).map(row => ({ keyword: String(row[0]), volume: Number(row[1]) }))
          .sort((a, b) => b.volume - a.volume).slice(0, 5) ?? [];

        const prompt = `Ești redactor pentru MeditatiiDirect.ro, platformă din România care pune în legătură elevii cu profesorii într-un mod nou: elevul (sau părintele) postează gratuit, fără cont, o cerere de meditații (materie, nivel, oraș sau online, buget), iar profesorii îi trimit propuneri cu dată, oră, tarif și mesaj. Elevul compară propunerile, vorbește direct cu profesorul în chat și, după lecție, evaluează propunerea aleasă cu 1–5 stele. Platforma mai are arhivă de subiecte BAC oficiale, rezolvări explicate, simulări și calculatoare de medie.

${topic ? `Tema: „${topic}”.` : "Alege o temă nouă, utilă elevilor, părinților sau profesorilor din România, legată de meditații, BAC, Evaluarea Națională sau admitere."}

${demand.length ? `Cercetare Semrush România din ${seoReport?.report_date}: ${demand.map(item => `${item.keyword} (~${item.volume} căutări/lună estimate)`).join(", ")}. Prioritizează un unghi util și nou legat de această cerere, fără repetarea articolelor existente. Datele sunt context editorial, NU le publica drept statistici proprii și NU sunt Google Trends sau poziții live.` : ""}

Titluri deja publicate (NU repeta tema, alege alt unghi):
${titles.slice(0, 120).map((t) => `- ${t}`).join("\n")}

Reguli:
- Română cu diacritice, ton cald, concret, util. 900–1300 de cuvinte. Răspunde direct la întrebarea cititorului în primul paragraf.
- Markdown: secțiuni "## ", subsecțiuni "### ", liste, un mic exemplu practic sau un plan pe pași.
- NU inventa cifre, statistici, studii, citate, mărturii, nume de profesori sau număr de profesori/elevi pe platformă. Fără „profesori verificați”, fără liste de profesori. Tarifele doar ca interval orientativ și spune că fiecare profesor își trimite tariful în propunere.
- Unde e firesc, explică pe scurt cum ajută modelul cerere → propuneri → chat → stele. Nu transforma tot articolul în reclamă.
- Minim 5 linkuri interne [text](/cale), DOAR din: ${INTERNAL_LINKS.join(", ")}. Încheie cu un îndemn către [cererea gratuită](/meditatii).
- Data curentă: ${new Date().toISOString().slice(0, 10)}.

Răspunde STRICT cu un obiect JSON, fără text în afară, cu cheile:
{"title": "50–70 caractere", "excerpt": "140–160 caractere", "category": una din ${JSON.stringify(CATEGORIES)}, "tags": ["3–5 etichete"], "content": "markdown"}`;

        const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/messages", {
          method: "POST",
          headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json", "X-Lovable-AIG-SDK": "fetch" },
          body: JSON.stringify({
            model: "anthropic/claude-sonnet-5",
            max_tokens: 16000,
            stream: true,
            messages: [{ role: "user", content: prompt }],
          }),
        });
        if (!aiRes.ok) {
          const detail = (await aiRes.text().catch(() => "")).slice(0, 300);
          return json({ error: "ai_failed", detail }, aiRes.status === 402 || aiRes.status === 403 || aiRes.status === 429 ? aiRes.status : 502);
        }
        const { text, stop, error } = await readText(aiRes);
        if (error) return json({ error: "ai_stream_error", detail: error }, 502);
        if (stop === "refusal") return json({ error: "refusal" }, 422);

        let post: { title: string; excerpt: string; category: string; tags: string[]; content: string };
        try {
          const s = text.indexOf("{");
          const e = text.lastIndexOf("}");
          post = JSON.parse(text.slice(s, e + 1));
        } catch {
          return json({ error: "parse_failed" }, 502);
        }
        if (!post?.title || !post?.content || post.content.length < 3000) return json({ error: "too_short" }, 502);
        if (covered(post.title)) return json({ status: "duplicate_skipped", title: post.title });

        let slug = slugify(post.title);
        if (existingSlugs.has(slug)) slug = `${slug}-${new Date().toISOString().slice(0, 10)}`;

        const { data: inserted, error: insertErr } = await supabaseAdmin
          .from("blog_posts")
          .insert({
            title: post.title.slice(0, 90),
            slug,
            excerpt: (post.excerpt ?? "").slice(0, 200),
            content: post.content,
            category: CATEGORIES.includes(post.category) ? post.category : "Meditații online",
            tags: Array.isArray(post.tags) ? post.tags.slice(0, 6) : [],
            is_published: true,
            published_at: new Date().toISOString(),
          })
          .select("id,slug,title")
          .single();
        if (insertErr) return json({ error: "insert_failed", detail: insertErr.message }, 500);

        return json({ success: true, topic, post: inserted, url: `https://meditatiidirect.ro/blog/${inserted?.slug}` });
      },
    },
  },
});
