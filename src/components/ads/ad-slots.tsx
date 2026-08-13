import { AdSenseSlot } from "./adsense";

/**
 * Sloturi AdSense reutilizabile (non-invazive: doar în flux, fără popup/popunder/anchor).
 *
 * Slot ID-uri opționale prin env:
 *  - VITE_ADSENSE_SLOT_HORIZONTAL  (bannere late, sub hero / între secțiuni)
 *  - VITE_ADSENSE_SLOT_INARTICLE   (in-article / native, în conținut)
 *  - VITE_ADSENSE_SLOT_RECTANGLE   (dreptunghi, sidebar / final de pagină)
 * Fallback: VITE_ADSENSE_SLOT_DEFAULT.
 */
const SLOT_HORIZONTAL = import.meta.env.VITE_ADSENSE_SLOT_HORIZONTAL as string | undefined;
const SLOT_INARTICLE = import.meta.env.VITE_ADSENSE_SLOT_INARTICLE as string | undefined;
const SLOT_RECTANGLE = import.meta.env.VITE_ADSENSE_SLOT_RECTANGLE as string | undefined;

export function AdBanner({ className = "" }: { className?: string }) {
  return <AdSenseSlot slot={SLOT_HORIZONTAL} format="horizontal" className={className} />;
}

export function AdInArticle({ className = "" }: { className?: string }) {
  return <AdSenseSlot slot={SLOT_INARTICLE} format="fluid" className={className} />;
}

export function AdRectangle({ className = "" }: { className?: string }) {
  return <AdSenseSlot slot={SLOT_RECTANGLE} format="rectangle" className={className} />;
}
