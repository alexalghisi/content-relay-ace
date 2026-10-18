import { useEffect, useRef, useState } from "react";
import { adsterraDocument } from "./adsterra-document";
export { getAdsterraBanner } from "./adsterra-document";

function AdsterraPlacement({ className = "", banner = false, mobileOnly = false }: { className?: string; banner?: boolean; mobileOnly?: boolean }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [filled, setFilled] = useState(false);
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
  useEffect(() => {
    setFilled(false);
    const receive = (event: MessageEvent) => {
      if (event.source !== frameRef.current?.contentWindow || event.data?.type !== "adsterra-fill" || typeof event.data.filled !== "boolean") return;
      setFilled(event.data.filled);
    };
    window.addEventListener("message", receive);
    return () => window.removeEventListener("message", receive);
  }, [desktopBanner, banner]);

  return <aside aria-label={filled ? "Publicitate" : undefined} aria-hidden={!filled} data-adsterra-filled={filled} className={`relative mx-auto w-full overflow-hidden ${filled ? className : "h-0"}`}>
    {filled && <p className="mb-2 text-center text-xs text-muted-foreground">Publicitate</p>}
    {(!banner || wide !== null) && <iframe ref={frameRef} key={banner ? String(desktopBanner) : "native"} title={banner ? "Banner Adsterra" : "Reclame Adsterra"} srcDoc={adsterraDocument(banner, desktopBanner)} sandbox="allow-scripts" referrerPolicy="strict-origin-when-cross-origin" tabIndex={filled ? 0 : -1} className={`${filled ? "" : "pointer-events-none absolute inset-x-0 top-0 opacity-0"} ${desktopBanner ? "mx-auto h-28 w-[748px] max-w-full border-0" : banner ? "mx-auto h-[70px] w-[340px] max-w-full border-0" : "h-80 w-full border-0"}`} />}
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
