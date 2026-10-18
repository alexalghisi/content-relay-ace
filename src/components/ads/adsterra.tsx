import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { adsterraDocument, ADSTERRA_SMARTLINK } from "./adsterra-document";
export { getAdsterraBanner } from "./adsterra-document";

function AdsterraPlacement({ className = "", banner = false, mobileOnly = false, social = false }: { className?: string; banner?: boolean; mobileOnly?: boolean; social?: boolean }) {
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
  }, [desktopBanner, banner, social]);

  return <aside aria-label={filled ? "Publicitate" : undefined} aria-hidden={!filled} data-adsterra-filled={filled} className={`relative mx-auto w-full overflow-hidden ${filled ? className : "h-0"}`}>
    {filled && <p className="mb-2 text-center text-xs text-muted-foreground">Publicitate</p>}
    {(!banner || wide !== null) && <iframe ref={frameRef} key={social ? "social" : banner ? String(desktopBanner) : "native"} title={social ? "Social Bar Adsterra" : banner ? "Banner Adsterra" : "Reclame Adsterra"} srcDoc={adsterraDocument(banner, desktopBanner, social)} sandbox="allow-scripts allow-top-navigation-by-user-activation" referrerPolicy="strict-origin-when-cross-origin" tabIndex={filled ? 0 : -1} className={`${filled ? "" : "pointer-events-none absolute inset-x-0 top-0 opacity-0"} ${desktopBanner ? "mx-auto h-28 w-[748px] max-w-full border-0" : banner ? "mx-auto h-[70px] w-[340px] max-w-full border-0" : "h-80 w-full border-0"}`} />}
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
  // Fixed provider elements remain inside this frame, not over site content.
  return <AdsterraPlacement social className="container-page py-6" />;
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
