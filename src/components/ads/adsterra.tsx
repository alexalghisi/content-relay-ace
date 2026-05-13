import { useEffect, useRef } from "react";

/**
 * Adsterra ad slots for meditatiidirect.ro.
 * Toate scripturile sunt încărcate doar pe client.
 */

// === Social Bar (global, înainte de </body>) ===
export function AdsterraSocialBar() {
  useEffect(() => {
    if (document.getElementById("adsterra-social-bar")) return;
    const s = document.createElement("script");
    s.id = "adsterra-social-bar";
    s.src = "//pl28658947.profitablecpmratenetwork.com/a0/9f/6a/a09f6a5d814edea7ad9b7e8ef7576015.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);
  return null;
}

// === Native Banner (4:1) ===
export function AdsterraNativeBanner({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current || ref.current.dataset.loaded) return;
    ref.current.dataset.loaded = "1";
    const s = document.createElement("script");
    s.async = true;
    s.setAttribute("data-cfasync", "false");
    s.src = "//pl28681688.profitablecpmratenetwork.com/95124b7bfc8466072188bbabf608cbf1/invoke.js";
    ref.current.appendChild(s);
  }, []);
  return (
    <div className={`my-8 ${className}`}>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 text-center">Publicitate</div>
      <div ref={ref}>
        <div id="container-95124b7bfc8466072188bbabf608cbf1" />
      </div>
    </div>
  );
}

// === Banner 728x90 (desktop) ===
export function AdsterraBanner728({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current || ref.current.dataset.loaded) return;
    ref.current.dataset.loaded = "1";
    const opts = document.createElement("script");
    opts.text = `atOptions = { 'key':'7fc628f1017bfe4d5cc26dc8c9885f53','format':'iframe','height':90,'width':728,'params':{} };`;
    const inv = document.createElement("script");
    inv.src = "//www.profitablecpmratenetwork.com/7fc628f1017bfe4d5cc26dc8c9885f53/invoke.js";
    inv.async = true;
    ref.current.appendChild(opts);
    ref.current.appendChild(inv);
  }, []);
  return (
    <div className={`my-8 hidden md:flex flex-col items-center ${className}`}>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Publicitate</div>
      <div ref={ref} style={{ width: 728, height: 90 }} />
    </div>
  );
}

// === Banner 320x50 (mobile) ===
export function AdsterraBanner320({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current || ref.current.dataset.loaded) return;
    ref.current.dataset.loaded = "1";
    const opts = document.createElement("script");
    opts.text = `atOptions = { 'key':'0e3484e9a11e0faff6adb5a6f5a74348','format':'iframe','height':50,'width':320,'params':{} };`;
    const inv = document.createElement("script");
    inv.src = "//www.profitablecpmratenetwork.com/0e3484e9a11e0faff6adb5a6f5a74348/invoke.js";
    inv.async = true;
    ref.current.appendChild(opts);
    ref.current.appendChild(inv);
  }, []);
  return (
    <div className={`my-6 flex md:hidden flex-col items-center ${className}`}>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Publicitate</div>
      <div ref={ref} style={{ width: 320, height: 50 }} />
    </div>
  );
}

// === Banner combinat responsive (728 desktop / 320 mobile) ===
export function AdsterraBannerResponsive({ className = "" }: { className?: string }) {
  return (
    <>
      <AdsterraBanner728 className={className} />
      <AdsterraBanner320 className={className} />
    </>
  );
}
