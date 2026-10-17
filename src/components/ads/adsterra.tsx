import { useEffect, useState } from "react";
import { useAdConsent } from "./ad-consent";

const nativeDocument = `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><script async data-cfasync="false" src="https://pl28681688.effectivecpmnetwork.com/95124b7bfc8466072188bbabf608cbf1/invoke.js"></script><div id="container-95124b7bfc8466072188bbabf608cbf1"></div></body></html>`;
const bannerDocument = `<!doctype html><html><body><script>atOptions={key:'7fc628f1017bfe4d5cc26dc8c9885f53',format:'iframe',height:90,width:728,params:{}};</script><script src="https://www.highperformanceformat.com/7fc628f1017bfe4d5cc26dc8c9885f53/invoke.js"></script></body></html>`;

function AdsterraPlacement({ className = "", banner = false }: { className?: string; banner?: boolean }) {
  const { allowed } = useAdConsent();
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 800px)");
    const update = () => setWide(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  if (!allowed) return null;
  const desktopBanner = banner && wide;
  return <aside aria-label="Publicitate" className={`mx-auto w-full overflow-hidden ${className}`}>
    <p className="mb-2 text-center text-xs text-muted-foreground">Publicitate</p>
    <iframe title={desktopBanner ? "Banner Adsterra" : "Reclame Adsterra"} srcDoc={desktopBanner ? bannerDocument : nativeDocument} sandbox="allow-scripts" referrerPolicy="strict-origin-when-cross-origin" loading="lazy" className={desktopBanner ? "mx-auto h-28 w-[748px] max-w-full border-0" : "h-80 w-full border-0"} />
  </aside>;
}

export function AdsterraNativeBanner({ className = "" }: { className?: string }) {
  return <AdsterraPlacement className={className} />;
}

export function AdsterraBanner728({ className = "" }: { className?: string }) {
  return <AdsterraPlacement banner className={className} />;
}

export function AdsterraBannerResponsive({ className = "" }: { className?: string }) {
  return <AdsterraPlacement banner className={className} />;
}

export function AdsterraBanner320({ className = "" }: { className?: string }) {
  return <AdsterraPlacement className={className} />;
}

/** Popunder / social bar eliminate definitiv — nu mai randează nimic. */
export function AdsterraSocialBar() {
  return null;
}
