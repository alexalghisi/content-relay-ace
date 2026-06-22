import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { AuthProvider } from "@/lib/auth";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";
import { ADSENSE_CLIENT } from "@/components/ads/adsense";
import { StickyAnchorAd } from "@/components/ads/sticky-anchor";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Pagina nu a fost găsită</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Pagina căutată nu există sau a fost mutată.
        </p>
        <Link to="/" className="btn-primary mt-6">Înapoi acasă</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">A apărut o eroare</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">
            Încearcă din nou
          </button>
          <Link to="/" className="btn-outline">Acasă</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "MeditatiiDirect" },
      { name: "language", content: "ro" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "theme-color", content: "#0ea5e9" },
      { name: "format-detection", content: "telephone=no" },
      { name: "geo.region", content: "RO" },
      { name: "geo.placename", content: "România" },
      { name: "rating", content: "general" },
      { name: "google-site-verification", content: "0ffO5lotmxwkEENDzoH1pVYFDx96xfPwo6XpohLNn_E" },
      { property: "og:site_name", content: "MeditatiiDirect.ro" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ro_RO" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@meditatiidirect" },
    ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "dns-prefetch", href: "https://pagead2.googlesyndication.com" },
        { rel: "preconnect", href: "https://pagead2.googlesyndication.com", crossOrigin: "anonymous" },
        { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        { rel: "alternate", hrefLang: "ro", href: "https://meditatiidirect.ro" },
        { rel: "alternate", hrefLang: "x-default", href: "https://meditatiidirect.ro" },
      ],
      scripts: [
        ...(ADSENSE_CLIENT
          ? [{
              async: true,
              src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`,
              crossOrigin: "anonymous",
            } as never]
          : []),
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://meditatiidirect.ro/#org",
                name: "MeditatiiDirect",
                url: "https://meditatiidirect.ro",
                logo: "https://meditatiidirect.ro/favicon.ico",
                sameAs: [],
                description: "Platformă de anunțuri meditații cu profesori verificați din toată România. Contact direct, fără comision.",
              },
              {
                "@type": "WebSite",
                "@id": "https://meditatiidirect.ro/#website",
                url: "https://meditatiidirect.ro",
                name: "MeditatiiDirect.ro",
                inLanguage: "ro-RO",
                publisher: { "@id": "https://meditatiidirect.ro/#org" },
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://meditatiidirect.ro/meditatii?q={query}",
                  "query-input": "required name=query",
                },
              },
              {
                "@type": "EducationalOrganization",
                "@id": "https://meditatiidirect.ro/#edu",
                name: "MeditatiiDirect",
                url: "https://meditatiidirect.ro",
                logo: "https://meditatiidirect.ro/favicon.ico",
                description: "Platformă educațională cu profesori particulari verificați pentru meditații online și la domiciliu — gimnaziu, liceu, BAC 2026, admitere facultate.",
                areaServed: { "@type": "Country", name: "România" },
                knowsLanguage: ["ro", "en"],
                sameAs: [],
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://meditatiidirect.ro/#business",
                name: "MeditatiiDirect — Meditații România",
                url: "https://meditatiidirect.ro",
                areaServed: { "@type": "Country", name: "România" },
                priceRange: "30-200 RON",
                description: "Anunțuri meditații cu profesori verificați în București, Cluj, Iași, Timișoara, Brașov, Constanța și restul țării.",
              },
            ],
          }),
        },
      ],
    }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
        <Toaster />
        <StickyAnchorAd />
      </AuthProvider>
    </QueryClientProvider>
  );
}
