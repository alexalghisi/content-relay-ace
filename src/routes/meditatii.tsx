import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { AdsterraNativeBanner, AdsterraBannerResponsive } from "@/components/ads/adsterra";

export const Route = createFileRoute("/meditatii")({
  head: () => ({
    meta: [
      { title: "Meditații în România — Profesori Verificați | MeditatiiDirect.ro" },
      { name: "description", content: "Listare meditații cu profesori verificați. Filtre după materie, oraș, preț, online. Recenzii reale, contact direct, fără comision." },
      { property: "og:title", content: "Meditații în România — Profesori Verificați" },
      { property: "og:description", content: "Filtrează meditatori după materie, oraș și disponibilitate online." },
    ],
  }),
  component: ListingPage,
});

function ListingPage() {
  return (
    <>
      <div className="container-page pt-4">
        <AdsterraBannerResponsive />
      </div>
      <PageShell
        title="Meditații în România"
        description="Caută meditații cu profesori verificați după materie, oraș și disponibilitate online. Listarea completă cu filtre vine în iterația următoare."
      />
      <div className="container-page">
        <AdsterraNativeBanner />
      </div>
    </>
  );
}
