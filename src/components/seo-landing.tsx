import { Link } from "@tanstack/react-router";
import { Download, FileText, GraduationCap, BadgeCheck, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { AdSenseSlot } from "@/components/ads/adsense";
import { AdsterraBanner728, AdsterraNativeBanner } from "@/components/ads/adsterra";

export interface FaqItem { q: string; a: string; }
export interface PdfItem { href: string; title: string; meta?: string; }
export interface SeoLandingProps {
  h1: string;
  intro: string;
  bullets?: string[];
  ctaPrimary?: { to: string; label: string; params?: Record<string, string>; search?: Record<string, string | undefined> };
  ctaSecondary?: { to: string; label: string; search?: Record<string, string | undefined> };
  /** Optional CTA block at the end of the page; defaults to the student request CTA. */
  ctaFooter?: { title: string; body: string; to: string; label: string; search?: Record<string, string | undefined> };
  sections?: { title: string; body: ReactNode }[];
  pdfs?: PdfItem[];
  faqs?: FaqItem[];
  related?: { to: string; label: string }[];
  /** Full URL of the current page; if set, a BreadcrumbList JSON-LD is emitted (Acasă → h1). */
  pageUrl?: string;
  /** Optional intermediate breadcrumb between Acasă and the current page (e.g. { name: "Meditații", url: "https://meditatiidirect.ro/meditatii" }). */
  breadcrumbParent?: { name: string; url: string };
}

export function SeoLanding(p: SeoLandingProps) {
  const breadcrumbLd = p.pageUrl
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: "https://meditatiidirect.ro/" },
          ...(p.breadcrumbParent
            ? [{ "@type": "ListItem", position: 2, name: p.breadcrumbParent.name, item: p.breadcrumbParent.url }]
            : []),
          { "@type": "ListItem", position: p.breadcrumbParent ? 3 : 2, name: p.h1, item: p.pageUrl },
        ],
      }
    : null;
  return (
    <article className="container-page py-10 lg:py-14">
      {breadcrumbLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      )}
      {p.pageUrl && (
        <nav aria-label="Breadcrumb" className="mb-5 text-xs text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><a href="/" className="hover:text-primary">Acasă</a></li>
            <li aria-hidden="true">/</li>
            {p.breadcrumbParent && (
              <>
                <li>
                  <a href={new URL(p.breadcrumbParent.url).pathname} className="hover:text-primary">
                    {p.breadcrumbParent.name}
                  </a>
                </li>
                <li aria-hidden="true">/</li>
              </>
            )}
            <li aria-current="page" className="text-foreground/80">{p.h1}</li>
          </ol>
        </nav>
      )}
      <header className="max-w-3xl">
        <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
          <BadgeCheck className="h-4 w-4" /> Profesori verificați • Fără comision
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{p.h1}</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{p.intro}</p>

        {p.bullets && (
          <ul className="mt-5 grid gap-2 text-sm text-foreground/90 sm:grid-cols-2">
            {p.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-7 flex flex-wrap gap-3">
          {p.ctaPrimary && (
            <Link to={p.ctaPrimary.to} search={p.ctaPrimary.search as never} className="btn-primary h-11 px-5 inline-flex items-center gap-2">
              {p.ctaPrimary.label} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
          {p.ctaSecondary && (
            <Link to={p.ctaSecondary.to} search={p.ctaSecondary.search as never} className="btn-outline h-11 px-5">
              {p.ctaSecondary.label}
            </Link>
          )}
        </div>
      </header>

      <AdSenseSlot format="auto" className="mt-10" />
      <AdsterraBanner728 className="mt-6" />
      <AdsterraNativeBanner className="mt-6" />

      {p.sections && (
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {p.sections.map((s) => (
            <section key={s.title} className="card-soft p-6">
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <div className="mt-3 text-sm text-muted-foreground leading-relaxed space-y-3">{s.body}</div>
            </section>
          ))}
        </div>
      )}

      {p.pdfs && p.pdfs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Materiale gratuite (PDF)</h2>
          <p className="mt-2 text-muted-foreground">
            Subiecte și bareme — găzduite direct pe MeditatiiDirect.ro, descarci instant fără să părăsești platforma.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {p.pdfs.map((d) => (
              <a key={d.href + d.title} href={d.href} rel="noopener"
                 className="card-soft p-4 flex items-start gap-3 hover:border-primary/40 hover:shadow-[var(--shadow-pop)] transition">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                  <FileText className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{d.title}</p>
                  {d.meta && <p className="text-xs text-muted-foreground">{d.meta}</p>}
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-primary">
                    <Download className="h-3 w-3" /> Vezi & descarcă PDF
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {p.faqs && p.faqs.length > 0 && (
        <section className="mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold">Întrebări frecvente</h2>
          <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
            {p.faqs.map((f) => (
              <details key={f.q} className="group p-5 open:bg-muted/30">
                <summary className="cursor-pointer list-none font-medium text-foreground flex items-center justify-between">
                  {f.q}
                  <span className="text-muted-foreground transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {p.related && p.related.length > 0 && (
        <section className="mt-14">
          <h2 className="text-lg font-semibold">Vezi și</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.related.map((r) => (
              <Link key={r.to} to={r.to} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground hover:border-primary/40 hover:text-primary">
                {r.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-14 card-soft p-8 bg-gradient-to-br from-primary-soft to-card">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold inline-flex items-center gap-2"><GraduationCap className="h-5 w-5 text-primary" /> Caută profesorul potrivit</h2>
            <p className="mt-1 text-sm text-muted-foreground">Meditatori particulari verificați. Contact direct, fără intermediari.</p>
          </div>
          <Link to="/meditatii" className="btn-primary h-11 px-5">Vezi anunțuri</Link>
        </div>
      </section>
    </article>
  );
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
