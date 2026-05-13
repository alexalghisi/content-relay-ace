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
import { AdsterraSocialBar } from "@/components/ads/adsterra";

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
      { title: "MeditatiiDirect.ro — Meditații cu profesori verificați în România" },
      { name: "description", content: "1000+ meditatori verificați la matematică, română, engleză, BAC, admitere. Online sau acasă, recenzii reale, prețuri de la 30 lei/oră." },
      { name: "author", content: "MeditatiiDirect" },
      { name: "language", content: "ro" },
      { property: "og:title", content: "MeditatiiDirect.ro — Meditații cu profesori verificați în România" },
      { property: "og:description", content: "1000+ meditatori verificați la matematică, română, engleză, BAC, admitere. Online sau acasă, recenzii reale, prețuri de la 30 lei/oră." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ro_RO" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MeditatiiDirect.ro — Meditații cu profesori verificați în România" },
      { name: "twitter:description", content: "1000+ meditatori verificați la matematică, română, engleză, BAC, admitere. Online sau acasă, recenzii reale, prețuri de la 30 lei/oră." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/595a298f-0e96-42e8-8bd2-03820d4b8a6c/id-preview-377c4ecf--df47450a-a5d2-435d-86cc-507a4b01c196.lovable.app-1778666401576.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/595a298f-0e96-42e8-8bd2-03820d4b8a6c/id-preview-377c4ecf--df47450a-a5d2-435d-86cc-507a4b01c196.lovable.app-1778666401576.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
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
        <AdsterraSocialBar />
      </AuthProvider>
    </QueryClientProvider>
  );
}
