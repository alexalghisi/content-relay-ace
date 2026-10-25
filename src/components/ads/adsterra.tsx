import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { adsterraDocument, ADSTERRA_SMARTLINK, ADSTERRA_SOCIAL_SCRIPT } from "./adsterra-document";
import { onPageIdle } from "@/hooks/use-after-load";
import { ADSENSE_CLIENT } from "./adsense";
import { useAfterLoad } from "@/hooks/use-after-load";
export { getAdsterraBanner } from "./adsterra-document";

function AdsterraPlacement({ className = "", banner = false, mobileOnly = false, social = false }: { className?: string; banner?: boolean; mobileOnly?: boolean; social?: boolean }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [filled, setFilled] = useState(false);
  // Wait for the viewport before requesting a banner: desktop must not
  // request the mobile zone first and immediately discard that impression.
  const [wide, setWide] = useState<boolean | null>(null);
  // Provider frames are created only after the page has loaded and the browser is idle,
  // so ad scripts never compete with the first render or hydration.
  const idle = useAfterLoad(4000);
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
  }, [desktopBanner, banner, social]);

  return <aside aria-label={filled ? "Publicitate" : undefined} aria-hidden={!filled} data-adsterra-filled={filled} className={`relative mx-auto w-full overflow-hidden ${filled ? className : "h-0"}`}>
    {filled && <p className="mb-2 text-center text-xs text-muted-foreground">Publicitate</p>}
    {idle && (!banner || wide !== null) && <iframe ref={frameRef} key={social ? "social" : banner ? String(desktopBanner) : "native"} title={social ? "Social Bar Adsterra" : banner ? "Banner Adsterra" : "Reclame Adsterra"} srcDoc={adsterraDocument(banner, desktopBanner, social)} sandbox="allow-scripts allow-top-navigation-by-user-activation" referrerPolicy="strict-origin-when-cross-origin" tabIndex={filled ? 0 : -1} className={`${filled ? "" : "pointer-events-none absolute inset-x-0 top-0 opacity-0"} ${desktopBanner ? "mx-auto h-28 w-[748px] max-w-full border-0" : banner ? "mx-auto h-[70px] w-[340px] max-w-full border-0" : "h-80 w-full border-0"}`} />}
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

export function AdsterraSocialBar() {
  // Social Bar and AdSense auto ads are page-level scripts, injected once the page is idle.
  useEffect(() => onPageIdle(() => {
    if (!document.querySelector("script[data-adsterra-social]")) {
      const s = document.createElement("script");
      s.src = ADSTERRA_SOCIAL_SCRIPT;
      s.async = true;
      s.dataset.cfasync = "false";
      s.dataset.adsterraSocial = "1";
      document.body.appendChild(s);
    }
    if (!document.querySelector("script[data-adsbygoogle-lib]")) {
      const g = document.createElement("script");
      g.async = true;
      g.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
      g.crossOrigin = "anonymous";
      g.dataset.adsbygoogleLib = "1";
      document.head.appendChild(g);
    }
  }, 4000), []);
  return null;
}

export function AdsterraMonetization() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (/^\/(admin|profesor|cont|chat|autentificare|inregistrare|cererea-mea)(\/|$)/.test(pathname)) return null;
  return <>
    <AdsterraSocialBar />
    <aside aria-label="Link publicitar" className="container-page flex flex-wrap items-center justify-center gap-3 py-4">
      <span className="text-xs text-muted-foreground">Publicitate externă</span>
      <Button asChild variant="outline"><a href={ADSTERRA_SMARTLINK} target="_blank" rel="sponsored noopener noreferrer nofollow">Oferte publicitare <ExternalLink /></a></Button>
    </aside>
  </>;
}
