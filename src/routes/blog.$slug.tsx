import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { CalendarDays, ArrowLeft } from "lucide-react";
import { AdsterraBanner728, AdsterraNativeBanner } from "@/components/ads/adsterra";
import { AdSenseSlot } from "@/components/ads/adsense";

interface Post {
  slug: string; title: string; excerpt: string | null; content: string | null;
  category: string | null; published_at: string | null; tags: string[] | null;
  featured_image: string | null;
}

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const { data } = await supabase.from("blog_posts")
      .select("slug,title,excerpt,content,category,published_at,tags,featured_image")
      .eq("slug", params.slug).eq("is_published", true).maybeSingle();
    if (!data) throw notFound();
    return { post: data as Post };
  },
  head: ({ params, loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [] };
    const url = `https://meditatiidirect.ro/blog/${params.slug}`;
    const articleLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt ?? undefined,
      datePublished: post.published_at ?? undefined,
      dateModified: post.published_at ?? undefined,
      author: { "@type": "Organization", name: "MeditatiiDirect", url: "https://meditatiidirect.ro" },
      publisher: {
        "@type": "Organization",
        name: "MeditatiiDirect",
        logo: { "@type": "ImageObject", url: "https://meditatiidirect.ro/favicon.ico" },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: post.featured_image ?? "https://meditatiidirect.ro/favicon.ico",
      inLanguage: "ro-RO",
      articleSection: post.category ?? undefined,
      keywords: (post.tags ?? []).join(", ") || undefined,
    };

    // Extract Q&A pairs from a "## Întrebări frecvente" (or FAQ) section.
    const faqs: { q: string; a: string }[] = [];
    const content = post.content ?? "";
    const faqMatch = content.match(/##\s*(?:Întrebări frecvente|Intrebari frecvente|FAQ|Întrebări|Q&A)[^\n]*\n([\s\S]+?)(?=\n##\s|$)/i);
    if (faqMatch) {
      const re = /###\s+(.+?)\n+([\s\S]+?)(?=\n###\s|\n##\s|$)/g;
      let m: RegExpExecArray | null;
      while ((m = re.exec(faqMatch[1])) !== null) {
        const q = m[1].trim();
        const a = m[2].replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\s+/g, " ").trim();
        if (q && a) faqs.push({ q, a });
      }
    }
    const faqLd = faqs.length >= 2 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    } : null;

    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://meditatiidirect.ro/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://meditatiidirect.ro/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    };

    return {
      meta: [
        { title: `${post.title} | MeditatiiDirect.ro` },
        { name: "description", content: post.excerpt ?? "" },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt ?? "" },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        ...(post.published_at ? [{ property: "article:published_time", content: post.published_at }] : []),
        ...(post.category ? [{ property: "article:section", content: post.category }] : []),
        ...((post.tags ?? []).map((t) => ({ property: "article:tag", content: t }))),
        ...(post.featured_image ? [{ property: "og:image", content: post.featured_image }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(articleLd) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbLd) },
        ...(faqLd ? [{ type: "application/ld+json", children: JSON.stringify(faqLd) }] : []),
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  // Render markdown-light: ## headings + paragraphs + [link](url)
  const renderContent = (md: string) => {
    return md.split(/\n\n+/).map((block, i) => {
      const h2 = block.match(/^## (.+)/);
      if (h2) return <h2 key={i} className="mt-8 text-xl font-bold">{h2[1]}</h2>;
      const linked = block.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, j) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (m) return <Link key={j} to={m[2] as never} className="text-primary underline">{m[1]}</Link>;
        return <span key={j}>{part}</span>;
      });
      return <p key={i} className="mt-4 text-foreground/90 leading-relaxed whitespace-pre-line">{linked}</p>;
    });
  };
  return (
    <article className="container-page py-10 max-w-3xl">
      <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Înapoi la blog
      </Link>
      <header className="mt-6">
        {post.category && <span className="text-xs text-primary uppercase tracking-wide">{post.category}</span>}
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{post.title}</h1>
        {post.published_at && (
          <p className="mt-3 text-sm text-muted-foreground inline-flex items-center gap-1"><CalendarDays className="h-3 w-3" />{new Date(post.published_at).toLocaleDateString("ro-RO")}</p>
        )}
      </header>
      <AdsterraBanner728 className="mt-6" />
      <div className="mt-8 prose max-w-none">
        {renderContent(post.content ?? post.excerpt ?? "")}
      </div>
      <AdsterraNativeBanner className="mt-8" />
      <AdSenseSlot format="auto" className="mt-6" />
      <div className="mt-12 card-soft p-6 bg-gradient-to-br from-primary-soft to-card">
        <h2 className="text-lg font-bold">Caută profesorul potrivit pentru tine</h2>
        <p className="mt-1 text-sm text-muted-foreground">Meditatori particulari verificați. Contact direct, fără comision.</p>
        <Link to="/meditatii" className="btn-primary mt-4 h-11 px-5 inline-flex">Vezi anunțuri meditații</Link>
      </div>
    </article>
  );
}
