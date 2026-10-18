export function getAdsterraBanner(wide: boolean) {
  return wide
    ? { key: "7fc628f1017bfe4d5cc26dc8c9885f53", width: 728, height: 90 }
    : { key: "0e3484e9a11e0faff6adb5a6f5a74348", width: 320, height: 50 };
}

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

export function adsterraDocument(banner: boolean, wide: boolean) {
  const options = getAdsterraBanner(wide);
  const provider = banner
    ? `<script>atOptions=${JSON.stringify({ ...options, format: "iframe", params: {} })};</script><script src="https://www.highrevenueformat.com/${options.key}/invoke.js"></script>`
    : `<div id="container-95124b7bfc8466072188bbabf608cbf1"></div><script async data-cfasync="false" src="https://pl28681688.profitableratecpmnetwork.com/95124b7bfc8466072188bbabf608cbf1/invoke.js"></script>`;
  return `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0}</style></head><body>${fillObserver}${provider}</body></html>`;
}