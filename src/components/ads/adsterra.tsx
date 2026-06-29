/**
 * Adsterra ad units — reactivate per user request.
 * NOTE: popunders / social bars pot încălca politicile AdSense; sunt incluse
 * doar pentru că au fost cerute explicit. Sunt randate o singură dată per pagină.
 */
import { useEffect, useRef } from "react";

const loaded = new Set<string>();

function injectScript(src: string, attrs: Record<string, string> = {}) {
  if (loaded.has(src)) return;
  loaded.add(src);
  const s = document.createElement("script");
  s.src = src;
  s.async = true;
  for (const [k, v] of Object.entries(attrs)) s.setAttribute(k, v);
  document.body.appendChild(s);
}

/**
 * Native banner Adsterra (container fix #95124b…).
 */
export function AdsterraNativeBanner({ className = "" }: { className?: string }) {
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    injectScript(
      "https://pl28681688.effectivecpmnetwork.com/95124b7bfc8466072188bbabf608cbf1/invoke.js",
      { "data-cfasync": "false" },
    );
  }, []);
  return (
    <div className={`my-6 flex justify-center ${className}`}>
      <div id="container-95124b7bfc8466072188bbabf608cbf1" />
    </div>
  );
}

/**
 * Banner 728x90 (key 7fc628f1…). Folosește iframe-ul Adsterra
 * prin window.atOptions + invoke.js. Pentru a permite mai multe
 * instanțe, randăm fiecare într-un iframe izolat cu document.write.
 */
export function AdsterraBanner728({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current || ref.current.dataset.loaded) return;
    ref.current.dataset.loaded = "1";
    const iframe = document.createElement("iframe");
    iframe.width = "728";
    iframe.height = "90";
    iframe.scrolling = "no";
    iframe.frameBorder = "0";
    iframe.style.border = "0";
    iframe.style.maxWidth = "100%";
    ref.current.appendChild(iframe);
    const doc = iframe.contentDocument;
    if (!doc) return;
    doc.open();
    doc.write(`<!doctype html><html><head><meta charset="utf-8"></head><body style="margin:0">
<script type="text/javascript">
  atOptions = { 'key':'7fc628f1017bfe4d5cc26dc8c9885f53','format':'iframe','height':90,'width':728,'params':{} };
<\/script>
<script src="https://www.highperformanceformat.com/7fc628f1017bfe4d5cc26dc8c9885f53/invoke.js"><\/script>
</body></html>`);
    doc.close();
  }, []);
  return <div ref={ref} className={`my-6 flex justify-center overflow-hidden ${className}`} />;
}

export function AdsterraBannerResponsive({ className = "" }: { className?: string }) {
  return <AdsterraBanner728 className={className} />;
}
export function AdsterraBanner320({ className = "" }: { className?: string }) {
  return <AdsterraBanner728 className={className} />;
}

/**
 * Social bar / popunder global — injectat o singură dată pe site.
 */
export function AdsterraSocialBar() {
  useEffect(() => {
    injectScript(
      "https://pl28658947.effectivecpmnetwork.com/a0/9f/6a/a09f6a5d814edea7ad9b7e8ef7576015.js",
    );
  }, []);
  return null;
}
