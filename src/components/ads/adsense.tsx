import { useEffect, useRef } from "react";
import { AD_SERVING_ENABLED } from "@/lib/ads-policy";
import { onPageIdle } from "@/hooks/use-after-load";

/**
 * Google AdSense slot.
 *
 * Configurare:
 * 1. Setează `VITE_ADSENSE_CLIENT` în .env cu Publisher ID-ul (ex: `ca-pub-1234567890123456`).
 * 2. Opțional: setează `VITE_ADSENSE_SLOT_DEFAULT` cu ID-ul slotului default
 *    sau folosește prop `slot` per instanță.
 *
 * Dacă nu e configurat, componenta nu randează nimic — sigur pentru AdSense review.
 */
const CLIENT = (import.meta.env.VITE_ADSENSE_CLIENT as string | undefined) || "ca-pub-4079300108937036";
const DEFAULT_SLOT = import.meta.env.VITE_ADSENSE_SLOT_DEFAULT as string | undefined;

interface Props {
  slot?: string;
  format?: "auto" | "fluid" | "horizontal" | "rectangle" | "vertical";
  layoutKey?: string;
  className?: string;
  fullWidthResponsive?: boolean;
}

export function AdSenseSlot({
  slot,
  format = "auto",
  layoutKey,
  className = "",
  fullWidthResponsive = true,
}: Props) {
  const ref = useRef<HTMLModElement>(null);
  const resolvedSlot = slot || DEFAULT_SLOT;

  useEffect(() => {
    if (!AD_SERVING_ENABLED || !CLIENT || !resolvedSlot) return;
    // Ads load only after the page is interactive and idle.
    return onPageIdle(() => {
      loadAdsenseScript();
      try {
        // @ts-expect-error adsbygoogle global injected by AdSense script
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        /* no-op */
      }
    }, 4000);
  }, [resolvedSlot]);

  if (!AD_SERVING_ENABLED || !CLIENT || !resolvedSlot) return null;

  return (
    <div className={`my-8 flex flex-col items-center ${className}`}>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Publicitate</div>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block", width: "100%", minWidth: 250 }}
        data-ad-client={CLIENT}
        data-ad-slot={resolvedSlot}
        data-ad-format={format}
        {...(layoutKey ? { "data-ad-layout-key": layoutKey } : {})}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}

export const ADSENSE_CLIENT = CLIENT;

function loadAdsenseScript() {
  if (document.querySelector("script[data-adsbygoogle-lib]")) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CLIENT}`;
  s.crossOrigin = "anonymous";
  s.dataset.adsbygoogleLib = "1";
  document.head.appendChild(s);
}
