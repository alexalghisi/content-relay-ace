import { useEffect } from "react";
import { deTradus, loturi, pastreazaSpatii, TR_LIMBI } from "@/lib/traducere";

const SARIT = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "TEXTAREA", "SVG", "MATH", "KBD", "SAMP"]);
const ATRIBUTE = ["placeholder", "title", "aria-label", "alt"] as const;
const STOCARE = (l: string) => `md_tr_v1_${l}`;

/** Original Romanian text of every node/attribute we changed, so switching back restores it. */
const originale = new WeakMap<Node, string>();
const aplicate = new WeakMap<Node, string>();
const atrOriginale = new WeakMap<Element, Record<string, string>>();
const atinse = new Set<Node>();

function sarit(el: Element | null): boolean {
  for (let e = el; e; e = e.parentElement) {
    if (SARIT.has(e.tagName.toUpperCase())) return true;
    if (e.getAttribute("translate") === "no" || e.classList.contains("notranslate") || (e as HTMLElement).isContentEditable) return true;
  }
  return false;
}

function incarca(lang: string): Map<string, string> {
  try {
    const raw = localStorage.getItem(STOCARE(lang));
    if (raw) return new Map(Object.entries(JSON.parse(raw) as Record<string, string>));
  } catch { /* storage unavailable */ }
  return new Map();
}

function salveaza(lang: string, m: Map<string, string>) {
  try {
    // Keep the browser cache bounded (≈ the most recent 4000 texts).
    const e = [...m.entries()].slice(-4000);
    localStorage.setItem(STOCARE(lang), JSON.stringify(Object.fromEntries(e)));
  } catch { /* storage full or unavailable */ }
}

export function restaureazaTot() {
  for (const n of atinse) {
    if (n.nodeType === Node.TEXT_NODE) {
      const o = originale.get(n);
      if (o !== undefined && n.nodeValue === aplicate.get(n)) n.nodeValue = o;
    } else if (n instanceof Element) {
      const o = atrOriginale.get(n);
      if (o) for (const [a, v] of Object.entries(o)) n.setAttribute(a, v);
    }
  }
  atinse.clear();
}

/**
 * Translates the whole visible page into `locale` (any language except Romanian) and keeps it
 * translated as React renders new content. Romanian stays the source; nothing changes for "ro".
 */
export function TraducereAutomata({ locale }: { locale: string }) {
  useEffect(() => {
    if (locale === "ro" || !TR_LIMBI[locale]) {
      restaureazaTot();
      document.documentElement.classList.remove("md-traduce");
      return;
    }
    let oprit = false;
    const cache = incarca(locale);
    const inZbor = new Set<string>();
    const asteapta = new Map<string, (() => void)[]>();
    let timer: number | null = null;

    const aplicaText = (n: Text, orig: string) => {
      const tr = cache.get(orig.trim());
      if (!tr) return false;
      const v = pastreazaSpatii(orig, tr);
      originale.set(n, orig);
      aplicate.set(n, v);
      atinse.add(n);
      if (n.nodeValue !== v) n.nodeValue = v;
      return true;
    };
    const aplicaAtr = (el: Element, a: string, orig: string) => {
      const tr = cache.get(orig.trim());
      if (!tr) return false;
      const o = atrOriginale.get(el) ?? {};
      if (!(a in o)) o[a] = orig;
      atrOriginale.set(el, o);
      atinse.add(el);
      if (el.getAttribute(a) !== tr) el.setAttribute(a, tr);
      return true;
    };

    const cere = (t: string, cand: () => void) => {
      const k = t.trim();
      (asteapta.get(k) ?? asteapta.set(k, []).get(k)!).push(cand);
      if (!inZbor.has(k)) {
        inZbor.add(k);
        if (timer === null) timer = window.setTimeout(trimite, 120);
      }
    };

    async function trimite() {
      timer = null;
      const toate = [...inZbor].filter((k) => !cache.has(k) && asteapta.has(k));
      if (!toate.length) return;
      for (const lot of loturi(toate)) {
        try {
          const r = await fetch("/api/traducere", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ lang: locale, texte: lot }),
          });
          const j = (await r.json().catch(() => null)) as { traduceri?: string[] } | null;
          if (oprit) return;
          j?.traduceri?.forEach((tr, i) => { if (tr) cache.set(lot[i], tr); });
        } catch { /* offline: keep Romanian */ }
        for (const k of lot) {
          inZbor.delete(k);
          const cb = asteapta.get(k);
          asteapta.delete(k);
          cb?.forEach((f) => f());
        }
      }
      salveaza(locale, cache);
    }

    const proceseaza = (root: Node) => {
      if (oprit) return;
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
      for (let n: Node | null = root; n; n = walker.nextNode()) {
        if (n.nodeType === Node.TEXT_NODE) {
          const t = n as Text;
          const v = t.nodeValue ?? "";
          if (v === aplicate.get(t) || !deTradus(v) || sarit(t.parentElement)) continue;
          if (!aplicaText(t, v)) cere(v, () => { if (t.isConnected && t.nodeValue === v) aplicaText(t, v); });
        } else if (n instanceof Element) {
          if (sarit(n)) continue;
          for (const a of ATRIBUTE) {
            const v = n.getAttribute(a);
            if (!v || v === cache.get(atrOriginale.get(n)?.[a]?.trim() ?? "") || !deTradus(v)) continue;
            if (!aplicaAtr(n, a, v)) cere(v, () => { if (n.isConnected && n.getAttribute(a) === v) aplicaAtr(n, a, v); });
          }
        }
      }
    };

    document.documentElement.classList.add("md-traduce");
    proceseaza(document.body);
    const obs = new MutationObserver((muts) => {
      for (const m of muts) {
        if (m.type === "characterData") proceseaza(m.target);
        else if (m.type === "attributes" && m.target instanceof Element) proceseaza(m.target);
        else m.addedNodes.forEach((n) => proceseaza(n));
      }
    });
    obs.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: [...ATRIBUTE] });
    return () => {
      oprit = true;
      obs.disconnect();
      if (timer !== null) window.clearTimeout(timer);
      restaureazaTot();
    };
  }, [locale]);
  return null;
}
