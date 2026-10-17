export const AD_CONSENT_KEY = "md-adsterra-consent-v1";
export function canServeAdsterra(consent: string | null): boolean {
  return consent === "accepted";
}