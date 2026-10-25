import type { ErrorComponentProps } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { AuthProvider } from "@/lib/auth";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";
import { ADSENSE_CLIENT } from "@/components/ads/adsense";
import { AD_SERVING_ENABLED } from "@/lib/ads-policy";
import { AdsterraMonetization } from "@/components/ads/adsterra";
import { I18nProvider, readLocale, useT } from "@/lib/i18n-context";
import { TraducereAutomata } from "@/components/traducere-automata";

function NotFoundComponent() {
  const t = useT();
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">{t("err.404title")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("err.404text")}</p>
        <Link to="/" className="btn-primary mt-6">
          {t("err.home")}
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  const rawMsg = error instanceof Error ? error.message : String(error);
  // După un redeploy, fișierele JS vechi (hash vechi) nu mai există: reîncărcăm o dată pagina
  // în loc să afișăm eroarea brută (Google o indexa ca text al paginii).
  const isChunkError = /dynamically imported module|Importing a module script failed|error loading dynamically/i.test(
    rawMsg,
  );
  if (isChunkError && typeof window !== "undefined") {
    try {
      if (!sessionStorage.getItem("chunk-reload")) {
        sessionStorage.setItem("chunk-reload", "1");
        window.location.reload();
      }
    } catch {
      window.location.reload();
    }
  }
  const t = useT();
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">{t("err.title")}</h1>
        {!isChunkError && <p className="mt-2 text-sm text-muted-foreground">{rawMsg}</p>}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            {t("err.retry")}
          </button>
          <Link to="/" className="btn-outline">
            {t("err.homeShort")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  beforeLoad: () => ({ locale: readLocale() }),
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // Fallback (e.g. 404 page); every content route overrides it.
      { title: "Pagina nu a fost găsită | MeditatiiDirect.ro" },
      { name: "author", content: "MeditatiiDirect" },
      { name: "language", content: "ro" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "theme-color", content: "#0ea5e9" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-title", content: "MeditatiiDirect" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "format-detection", content: "telephone=no" },
      { name: "geo.region", content: "RO" },
      { name: "geo.placename", content: "România" },
      { name: "rating", content: "general" },
      { name: "google-site-verification", content: "0ffO5lotmxwkEENDzoH1pVYFDx96xfPwo6XpohLNn_E" },
      ...(ADSENSE_CLIENT ? [{ name: "google-adsense-account", content: ADSENSE_CLIENT }] : []),
      { property: "og:site_name", content: "MeditatiiDirect.ro" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ro_RO" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@meditatiidirect" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/manifest.webmanifest" },
      // No web fonts are loaded and ad scripts start only after the page is idle,
      // so no early connections are opened for them (they compete with the first render on mobile).
      ...(AD_SERVING_ENABLED ? [{ rel: "dns-prefetch", href: "https://pagead2.googlesyndication.com" }] : []),
      { rel: "alternate", hrefLang: "ro", href: "https://meditatiidirect.ro" },
      { rel: "alternate", hrefLang: "x-default", href: "https://meditatiidirect.ro" },
    ],
    scripts: [
      {
        children:
          "window.addEventListener('vite:preloadError',function(e){try{if(sessionStorage.getItem('chunk-reload'))return;sessionStorage.setItem('chunk-reload','1')}catch(_){}e.preventDefault();location.reload()});",
      },
      // The AdSense library is injected by AdSenseSlot once the page is idle (never render-blocking).
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
              alternateName: ["Meditatii Direct", "MeditatiiDirect.ro"],
              logo: "https://meditatiidirect.ro/apple-touch-icon.png",
              description:
                "Platformă de anunțuri meditații cu profesori verificați din toată România. Contact direct, fără comision.",
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
              logo: "https://meditatiidirect.ro/apple-touch-icon.png",
              description:
                "Platformă educațională cu profesori particulari verificați pentru meditații online și la domiciliu — gimnaziu, liceu, BAC 2026, admitere facultate.",
              areaServed: { "@type": "Country", name: "România" },
              knowsLanguage: ["ro", "en"],
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
  const { locale } = Route.useRouteContext();
  return (
    <html lang={locale ?? "ro"}>
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
  const { queryClient, locale } = Route.useRouteContext();
  return (
    <I18nProvider value={locale}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
              <Outlet />
            </main>
            <AdsterraMonetization />
            <SiteFooter />
          </div>
          <Toaster />
          <TraducereAutomata locale={locale ?? "ro"} />
        </AuthProvider>
      </QueryClientProvider>
    </I18nProvider>
  );
}
