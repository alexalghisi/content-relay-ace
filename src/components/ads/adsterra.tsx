/**
 * Adsterra a fost eliminat complet (popunder / social bar / native banner).
 * Aceste export-uri sunt păstrate ca alias-uri către sloturile Google AdSense,
 * ca plasările existente din pagini să continue să funcționeze — dar cu reclame
 * non-invazive, conforme cu politicile AdSense.
 */
import { AdBanner, AdInArticle } from "./ad-slots";

export function AdsterraNativeBanner({ className = "" }: { className?: string }) {
  return <AdInArticle className={className} />;
}

export function AdsterraBanner728({ className = "" }: { className?: string }) {
  return <AdBanner className={className} />;
}

export function AdsterraBannerResponsive({ className = "" }: { className?: string }) {
  return <AdBanner className={className} />;
}

export function AdsterraBanner320({ className = "" }: { className?: string }) {
  return <AdBanner className={className} />;
}

/** Popunder / social bar eliminate definitiv — nu mai randează nimic. */
export function AdsterraSocialBar() {
  return null;
}
