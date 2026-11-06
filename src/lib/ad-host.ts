/**
 * Google AdSense runs only on the production domain. Lovable previews (*.lovable.app,
 * *.lovableproject.com), GitHub Pages, localhost and any other copy of the site never
 * load the ad script, so preview/bot/dev hits are not counted as invalid traffic.
 */
export const AD_PRODUCTION_DOMAINS = ["meditatiidirect.ro"] as const;

export function isAdProductionHost(hostname?: string): boolean {
  // Dev-server-only switch so the e2e suite can exercise ad loading on 127.0.0.1.
  if (
    import.meta.env.DEV &&
    typeof window !== "undefined" &&
    (window as Window & { __E2E_FORCE_ADS__?: boolean }).__E2E_FORCE_ADS__
  )
    return true;
  const host = (
    hostname ?? (typeof window === "undefined" ? "" : window.location.hostname)
  ).toLowerCase();
  return AD_PRODUCTION_DOMAINS.some((d) => host === d || host === `www.${d}`);
}
