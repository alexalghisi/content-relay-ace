import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPublicBlogPost } from "@/lib/blog.functions";
import { BlogContent, slugifyHeading } from "@/components/blog-content";
import { CalendarDays, ArrowLeft } from "lucide-react";
import { AdsterraBanner728, AdsterraNativeBanner } from "@/components/ads/adsterra";
import { AdSenseSlot } from "@/components/ads/adsense";

interface Post {
  slug: string; title: string; excerpt: string | null; content: string | null;
  category: string | null; published_at: string | null; tags: string[] | null;
  featured_image: string | null; updated_at?: string | null;
}

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const { post } = await getPublicBlogPost({ data: { slug: params.slug } });
    if (!post?.content?.trim()) throw notFound();
    return { post: post as Post };
  },
  head: ({ params, loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Articol indisponibil | MeditatiiDirect.ro" }, { name: "description", content: "Articolul solicitat nu este disponibil. Consultă ghidurile publicate pe MeditatiiDirect.ro." }, { property: "og:title", content: "Articol indisponibil | MeditatiiDirect.ro" }, { property: "og:description", content: "Consultă ghidurile publicate pe MeditatiiDirect.ro." }, { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary" }, { name: "robots", content: "noindex, follow" }] };
    const url = `https://meditatiidirect.ro/blog/${params.slug}`;
    const articleLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt ?? undefined,
      datePublished: post.published_at ?? undefined,
      dateModified: post.updated_at ?? post.published_at ?? undefined,
      author: { "@type": "Organization", name: "MeditatiiDirect", url: "https://meditatiidirect.ro" },
      publisher: {
        "@type": "Organization",
        name: "MeditatiiDirect",
        logo: { "@type": "ImageObject", url: "https://meditatiidirect.ro/apple-touch-icon.png" },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
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
        { name: "twitter:card", content: "summary_large_image" },
        ...(post.published_at ? [{ property: "article:published_time", content: post.published_at }] : []),
        ...(post.category ? [{ property: "article:section", content: post.category }] : []),
        ...((post.tags ?? []).map((t) => ({ property: "article:tag", content: t }))),
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
  errorComponent: () => <article className="container-page py-10"><h1 className="text-2xl font-bold">Articolul nu poate fi încărcat momentan</h1><Link to="/blog" className="mt-4 inline-flex text-primary">Înapoi la blog</Link></article>,
  notFoundComponent: () => <article className="container-page py-10"><h1 className="text-2xl font-bold">Articol indisponibil</h1><Link to="/blog" className="mt-4 inline-flex text-primary">Vezi articolele publicate</Link></article>,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const content = post.content ?? post.excerpt ?? "";
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.round(words / 200));
  const headings = Array.from(content.matchAll(/^## (.+)$/gm)).map((m) => m[1].trim());

  return (
    <article className="container-page py-10 max-w-3xl">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><a href="/" className="hover:text-primary">Acasă</a></li>
          <li aria-hidden="true">/</li>
          <li><a href="/blog" className="hover:text-primary">Blog</a></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground/80 line-clamp-1">{post.title}</li>
        </ol>
      </nav>
      <Link to="/blog" className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Înapoi la blog
      </Link>
      <header className="mt-6">
        {post.category && <span className="text-xs text-primary uppercase tracking-wide">{post.category}</span>}
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{post.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span>
            de <a href="/despre" className="text-foreground/80 hover:text-primary">Redacția MeditatiiDirect</a>
          </span>
          {post.published_at && (
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3 w-3" />
              <time dateTime={post.published_at}>{new Date(post.published_at).toLocaleDateString("ro-RO")}</time>
            </span>
          )}
          {post.updated_at && post.updated_at !== post.published_at && (
            <span>Actualizat: <time dateTime={post.updated_at}>{new Date(post.updated_at).toLocaleDateString("ro-RO")}</time></span>
          )}
          <span>{readingMinutes} min citire</span>
        </div>
      </header>

      {headings.length >= 3 && (
        <nav aria-label="Cuprins" className="mt-6 card-soft p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Cuprins</h2>
          <ol className="mt-3 space-y-1.5 text-sm">
            {headings.map((h) => (
              <li key={h}>
                <a href={`#${slugifyHeading(h)}`} className="text-primary hover:underline">{h}</a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <AdsterraBanner728 className="mt-6" />
      <div className="mt-8 prose max-w-none">
        <BlogContent content={content} />
      </div>
      <AdsterraNativeBanner className="mt-8" />
      <AdSenseSlot format="auto" className="mt-6" />

      <section className="mt-12">
        <h2 className="text-lg font-bold">Continuă cu</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            { to: "/meditatii-matematica", label: "Meditații matematică" },
            { to: "/meditatii-romana", label: "Meditații română" },
            { to: "/meditatii-engleza", label: "Meditații engleză" },
            { to: "/meditatii-online", label: "Meditații online" },
            { to: "/meditatii-bac", label: "Meditații BAC 2026" },
            { to: "/preturi-meditatii", label: "Prețuri meditații" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary">
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-12 card-soft p-6 bg-gradient-to-br from-primary-soft to-card">
        <h2 className="text-lg font-bold">Caută profesorul potrivit pentru tine</h2>
        <p className="mt-1 text-sm text-muted-foreground">Meditatori particulari verificați. Contact direct, fără comision.</p>
        <Link to="/meditatii" className="btn-primary mt-4 h-11 px-5 inline-flex">Vezi anunțuri meditații</Link>
      </div>
    </article>
  );
}
