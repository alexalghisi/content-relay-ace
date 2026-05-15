import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { CalendarDays, Tag } from "lucide-react";

interface Post { slug: string; title: string; excerpt: string | null; category: string | null; published_at: string | null; tags: string[] | null; }

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog Meditații — Ghiduri BAC, Admitere și Sfaturi 2026 | MeditatiiDirect.ro" },
      { name: "description", content: "Articole, ghiduri și sfaturi despre meditații, BAC 2026, admitere la medicină, UPB, Drept, evaluare națională și pregătire pe materii." },
      { name: "keywords", content: "blog meditatii, ghid bac 2026, admitere medicina, pregatire bac, sfaturi meditatii" },
      { property: "og:title", content: "Blog Meditații — Ghiduri BAC și Admitere 2026" },
      { property: "og:description", content: "Articole, ghiduri și sfaturi despre meditații și examene." },
      { property: "og:url", content: "https://meditatiidirect.ro/blog" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    supabase.from("blog_posts").select("slug,title,excerpt,category,published_at,tags").eq("is_published", true).order("published_at", { ascending: false }).limit(100)
      .then(({ data }) => { setPosts((data ?? []) as Post[]); setLoading(false); });
  }, []);
  return (
    <article className="container-page py-10">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Blog Meditații — Ghiduri BAC, Admitere și Pregătire 2026</h1>
        <p className="mt-3 text-lg text-muted-foreground">Articole concrete despre cum alegi un meditator, cât costă meditațiile, cum te pregătești pentru BAC, admitere la medicină, UPB, Drept și evaluare națională.</p>
      </header>
      {loading ? (
        <p className="mt-8 text-muted-foreground">Se încarcă articolele...</p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="card-soft p-5 hover:border-primary/40 hover:shadow-[var(--shadow-pop)] transition flex flex-col">
              {p.category && (
                <span className="self-start inline-flex items-center gap-1 text-xs text-primary"><Tag className="h-3 w-3" />{p.category}</span>
              )}
              <h2 className="mt-2 text-lg font-semibold leading-snug">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
              {p.published_at && (
                <p className="mt-3 text-xs text-muted-foreground inline-flex items-center gap-1"><CalendarDays className="h-3 w-3" />{new Date(p.published_at).toLocaleDateString("ro-RO")}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
