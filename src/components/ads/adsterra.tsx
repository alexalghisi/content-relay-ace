import { useEffect, useState } from "react";


const nativeDocument = `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><script async data-cfasync="false" src="https://pl28681688.profitableratecpmnetwork.com/95124b7bfc8466072188bbabf608cbf1/invoke.js"></script><div id="container-95124b7bfc8466072188bbabf608cbf1"></div></body></html>`;

export function getAdsterraBanner(wide: boolean) {
  return wide
    ? { key: "7fc628f1017bfe4d5cc26dc8c9885f53", width: 728, height: 90 }
    : { key: "0e3484e9a11e0faff6adb5a6f5a74348", width: 320, height: 50 };
}

function bannerDocument(wide: boolean) {
  const options = getAdsterraBanner(wide);
  return `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head><body><script>atOptions=${JSON.stringify({ ...options, format: "iframe", params: {} })};</script><script src="https://www.highrevenueformat.com/${options.key}/invoke.js"></script></body></html>`;
}

function AdsterraPlacement({ className = "", banner = false, mobileOnly = false }: { className?: string; banner?: boolean; mobileOnly?: boolean }) {

  // Wait for the viewport before requesting a banner: desktop must not
  // request the mobile zone first and immediately discard that impression.
  const [wide, setWide] = useState<boolean | null>(null);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 800px)");
    const update = () => setWide(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const desktopBanner = banner && wide === true && !mobileOnly;
  return <aside aria-label="Publicitate" className={`mx-auto w-full overflow-hidden ${className}`}>
    <p className="mb-2 text-center text-xs text-muted-foreground">Publicitate</p>
    {(!banner || wide !== null) && <iframe title={banner ? "Banner Adsterra" : "Reclame Adsterra"} srcDoc={banner ? bannerDocument(desktopBanner) : nativeDocument} sandbox="allow-scripts" referrerPolicy="strict-origin-when-cross-origin" loading="lazy" className={desktopBanner ? "mx-auto h-28 w-[748px] max-w-full border-0" : banner ? "mx-auto h-[70px] w-[340px] max-w-full border-0" : "h-80 w-full border-0"} />}
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
  return <AdsterraPlacement banner mobileOnly className={className} />;
}

/** Popunder / social bar eliminate definitiv — nu mai randează nimic. */
export function AdsterraSocialBar() {
  return null;
}
