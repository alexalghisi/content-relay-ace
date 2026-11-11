import { Link, useLoaderData, useLocation } from "@tanstack/react-router";
import { ComboDataBlock } from "@/components/market-data";
import type { ComboStats } from "@/lib/market-stats.functions";
import { Download, FileText, GraduationCap, BadgeCheck, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { linkuriContextuale, type ContextPagina } from "@/lib/linkuri-contextuale";
import { AdSenseSlot } from "@/components/ads/adsense";
import { AdsterraBanner728, AdsterraNativeBanner } from "@/components/ads/adsterra";

export interface FaqItem {
  q: string;
  a: string;
}
export interface PdfItem {
  href: string;
  title: string;
  meta?: string;
}
export interface SeoLandingProps {
  h1: string;
  intro: string;
  bullets?: string[];
  ctaPrimary?: {
    to: string;
    label: string;
    params?: Record<string, string>;
    search?: Record<string, string | undefined>;
  };
  ctaSecondary?: { to: string; label: string; search?: Record<string, string | undefined> };
  /** Optional CTA block at the end of the page; defaults to the student request CTA. */
  ctaFooter?: {
    title: string;
    body: string;
    to: string;
    label: string;
    search?: Record<string, string | undefined>;
  };
  sections?: { title: string; body: ReactNode }[];
  pdfs?: PdfItem[];
  faqs?: FaqItem[];
  related?: { to: string; label: string }[];
  /** Full URL of the current page; if set, a BreadcrumbList JSON-LD is emitted (Acasă → h1). */
  pageUrl?: string;
  /** Optional intermediate breadcrumb between Acasă and the current page (e.g. { name: "Meditații", url: "https://meditatiidirect.ro/meditatii" }). */
  breadcrumbParent?: { name: string; url: string };
  /** Materia/orașul paginii pentru linkurile contextuale; implicit se deduc din URL. */
  linkContext?: ContextPagina;
  /** Conținut specific paginii (anunțuri, cereri, date reale), afișat imediat după antet. */
  children?: ReactNode;
}

export function SeoLanding(p: SeoLandingProps) {
  const ld = useLoaderData({ strict: false }) as
    | { subjectStats?: ComboStats | null; subjectName?: string }
    | undefined;
  const { pathname } = useLocation();
  const cale = p.pageUrl ? new URL(p.pageUrl).pathname : pathname;
  // 6–10 linkuri legate de pagina curentă (nu o listă sitewide de cuvinte-cheie).
  const linkuri = linkuriContextuale({ cale, context: p.linkContext, related: p.related });
  // Pe telefon, butonul principal din antet ajunge sub ecran după intro; bara fixă apare doar
  // cât timp el nu e vizibil, ca vizitatorul să aibă mereu un singur pas până la cerere.
  const ctaRef = useRef<HTMLDivElement>(null);
  const [ctaAscuns, setCtaAscuns] = useState(false);
  useEffect(() => {
    const el = ctaRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(([e]) => setCtaAscuns(!e!.isIntersecting));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const breadcrumbLd = p.pageUrl
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: "https://meditatiidirect.ro/" },
          ...(p.breadcrumbParent
            ? [
                {
                  "@type": "ListItem",
                  position: 2,
                  name: p.breadcrumbParent.name,
                  item: p.breadcrumbParent.url,
                },
              ]
            : []),
          {
            "@type": "ListItem",
            position: p.breadcrumbParent ? 3 : 2,
            name: p.h1,
            item: p.pageUrl,
          },
        ],
      }
    : null;
  return (
    <article className="container-page py-10 lg:py-14">
      {breadcrumbLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      )}
      {p.pageUrl && (
        <nav aria-label="Breadcrumb" className="mb-5 text-xs text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <a href="/" className="hover:text-primary">
                Acasă
              </a>
            </li>
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
            <li aria-current="page" className="text-foreground/80">
              {p.h1}
            </li>
          </ol>
        </nav>
      )}
      <header className="max-w-3xl">
        <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
          <BadgeCheck className="h-4 w-4" /> Chat direct elev–profesor • Fără comision
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{p.h1}</h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed sm:text-lg">{p.intro}</p>

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

        <div ref={ctaRef} className="mt-7 flex flex-wrap gap-3">
          {p.ctaPrimary && (
            <Link
              to={p.ctaPrimary.to}
              search={p.ctaPrimary.search as never}
              className="btn-primary h-11 px-5 inline-flex items-center gap-2"
            >
              {p.ctaPrimary.label} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
          {p.ctaSecondary && (
            <Link
              to={p.ctaSecondary.to}
              search={p.ctaSecondary.search as never}
              className="btn-outline h-11 px-5"
            >
              {p.ctaSecondary.label}
            </Link>
          )}
        </div>
      </header>

      <AdSenseSlot format="auto" className="mt-10" />
      <AdsterraBanner728 className="mt-6" />
      <AdsterraNativeBanner className="mt-6" />

      {p.children}

      {p.sections && (
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {p.sections.map((s) => (
            <section key={s.title} className="card-soft p-6">
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <div className="mt-3 text-sm text-muted-foreground leading-relaxed space-y-3">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      )}

      {p.pdfs && p.pdfs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Materiale gratuite (PDF)</h2>
          <p className="mt-2 text-muted-foreground">
            Subiecte și bareme — găzduite direct pe MeditatiiDirect.ro, descarci instant fără să
            părăsești platforma.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {p.pdfs.map((d) => (
              <a
                key={d.href + d.title}
                href={d.href}
                rel="noopener"
                className="card-soft p-4 flex items-start gap-3 hover:border-primary/40 hover:shadow-[var(--shadow-pop)] transition"
              >
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

      {ld?.subjectStats && ld.subjectName && (
        <ComboDataBlock s={ld.subjectStats} subject={ld.subjectName} city="România" />
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

      {linkuri.length > 0 && (
        <nav className="mt-14" aria-labelledby="vezi-si" data-testid="linkuri-contextuale">
          <h2 id="vezi-si" className="text-lg font-semibold">
            Vezi și
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {linkuri.map((r) => (
              <li key={r.to}>
                <Link
                  to={r.to}
                  className="inline-block rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground hover:border-primary/40 hover:text-primary"
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <section className="mt-14 card-soft p-8 bg-gradient-to-br from-primary-soft to-card">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold inline-flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />{" "}
              {p.ctaFooter?.title ?? "Spune-ne ce profesor cauți"}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {p.ctaFooter?.body ??
                "Descrii o singură dată ce ai nevoie și profesorii interesați îți trimit propuneri. Gratuit, fără comision."}
            </p>
          </div>
          <Link
            to={p.ctaFooter?.to ?? "/meditatii"}
            search={(p.ctaFooter?.search ?? undefined) as never}
            className="btn-primary h-11 px-5"
          >
            {p.ctaFooter?.label ?? "Cere ofertă"}
          </Link>
        </div>
      </section>
      {p.ctaPrimary && (
        <>
          <div aria-hidden="true" className="h-20 md:hidden" />
          <div
            data-testid="cta-mobil"
            className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-2.5 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)] backdrop-blur transition-transform md:hidden ${
              ctaAscuns ? "translate-y-0" : "pointer-events-none translate-y-full"
            }`}
            aria-hidden={!ctaAscuns}
          >
            <Link
              to={p.ctaPrimary.to}
              search={p.ctaPrimary.search as never}
              tabIndex={ctaAscuns ? 0 : -1}
              className="btn-primary flex h-11 w-full items-center justify-center gap-2 px-4 text-sm"
            >
              <span className="truncate">{p.ctaPrimary.label}</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>
        </>
      )}
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
