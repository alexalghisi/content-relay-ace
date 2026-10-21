export function getAdsterraBanner(wide: boolean) {
  return wide
    ? { key: "7fc628f1017bfe4d5cc26dc8c9885f53", width: 728, height: 90 }
    : { key: "0e3484e9a11e0faff6adb5a6f5a74348", width: 320, height: 50 };
}

/** Opaque ad frames have no cookie jar; never grant access to site cookies. */
export function installAdCookieBoundary(doc: Document) {
  try {
    void doc.cookie;
  } catch (error) {
    if (!(error instanceof DOMException) || error.name !== "SecurityError") throw error;
    Object.defineProperty(doc, "cookie", {
      configurable: false,
      get: () => "",
      set: (_value: string) => { /* No persistence in an opaque frame. */ },
    });
  }
}

const cookieBoundary = `<script>(${installAdCookieBoundary.toString()})(document);</script>`;

// Runs inside the opaque-origin sandbox. Script load alone is not an ad fill.
const fillObserver = `<script>
(() => {
  const loadedFrames = new WeakSet();
  const visible = (node) => {
    const box = node.getBoundingClientRect();
    const style = getComputedStyle(node);
    return box.width > 1 && box.height > 1 && style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) > 0;
  };
  const inspect = () => {
    document.querySelectorAll('iframe').forEach(frame => {
      if (!frame.dataset.observed) {
        frame.dataset.observed = 'true';
        frame.addEventListener('load', () => { loadedFrames.add(frame); inspect(); });
      }
    });
    const filled = Array.from(document.querySelectorAll('iframe,img,video,a')).some(node => {
      if (!visible(node)) return false;
      if (node.tagName === 'IFRAME') return loadedFrames.has(node) && /^https?:/.test(node.src);
      if (node.tagName === 'IMG') return node.complete && node.naturalWidth > 1;
      if (node.tagName === 'VIDEO') return node.readyState >= 2;
      return /^https?:/.test(node.href) && node.textContent.trim().length > 0;
    });
    parent.postMessage({ type: 'adsterra-fill', filled }, '*');
  };
  new MutationObserver(inspect).observe(document.body, { childList: true, subtree: true, attributes: true });
  document.addEventListener('load', inspect, true);
  setInterval(inspect, 1000);
  inspect();
})();
</script>`;

// Codurile curente din panoul Adsterra (Websites → meditatiidirect.ro, 19 oct 2026).
// Adsterra servește zonele de pe domeniul său curent (bicea.org / arwf.org); vechile domenii
// profitableratecpmnetwork.com / highrevenueformat.com răspundeau cu 0 bytes.
export const ADSTERRA_HOST = "https://bicea.org";
export const ADSTERRA_SMARTLINK = "https://arwf.org/4/c462925f5d81f7eae9d76fb825822ea2";
export const ADSTERRA_SOCIAL_SCRIPT = `${ADSTERRA_HOST}/14/a09f6a5d814edea7ad9b7e8ef7576015`;
export const ADSTERRA_NATIVE_ID = "95124b7bfc8466072188bbabf608cbf1";
export const ADSTERRA_NATIVE_SCRIPT = `${ADSTERRA_HOST}/21/${ADSTERRA_NATIVE_ID}`;
export const adsterraBannerScript = (key: string) => `${ADSTERRA_HOST}/22/${key}`;

export function adsterraDocument(banner: boolean, wide: boolean, social = false) {
  const options = getAdsterraBanner(wide);
  const provider = social ? `<script data-cfasync="false" src="${ADSTERRA_SOCIAL_SCRIPT}"></script>` : banner
    ? `<script>atOptions=${JSON.stringify({ ...options, format: "iframe", params: {} })};</script><script src="${adsterraBannerScript(options.key)}"></script>`
    : `<script async="async" data-cfasync="false" src="${ADSTERRA_NATIVE_SCRIPT}"></script><div id="container-${ADSTERRA_NATIVE_ID}"></div>`;
  return `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0}</style></head><body>${cookieBoundary}${fillObserver}${provider}</body></html>`;
}