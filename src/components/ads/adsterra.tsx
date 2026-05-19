/**
 * Adsterra a fost dezactivat — încalcă politicile Google AdSense
 * (popunders + social bars sunt explicit interzise). Componentele
 * sunt păstrate ca no-op pentru a nu sparge importurile existente.
 *
 * Reclamele sunt servite acum prin Google AdSense (vezi <AdSenseSlot />).
 */
import { AdSenseSlot } from "./adsense";

export function AdsterraSocialBar() { return null; }

export function AdsterraNativeBanner({ className = "" }: { className?: string }) {
  return <AdSenseSlot className={className} format="fluid" layoutKey="-6t+ed+2i-1n-4w" />;
}
export function AdsterraBanner728({ className = "" }: { className?: string }) {
  return <AdSenseSlot className={className} format="horizontal" />;
}
export function AdsterraBanner320({ className = "" }: { className?: string }) {
  return <AdSenseSlot className={className} format="horizontal" />;
}
export function AdsterraBannerResponsive({ className = "" }: { className?: string }) {
  return <AdSenseSlot className={className} format="auto" />;
}
