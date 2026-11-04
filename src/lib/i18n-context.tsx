import { createContext, useContext } from "react";
// Doar dicționarul român (site-ul e numai în română); celelalte limbi nu ajung în pachetul paginii.
import { DEFAULT_LOCALE, LOCALE_COOKIE, translateRo, type MsgKey } from "./i18n-ro";
type Locale = typeof DEFAULT_LOCALE;

// Site-ul este disponibil doar în limba română: limba nu mai poate fi schimbată (cookie-urile vechi sunt ignorate).
export const readLocale = (): Locale => DEFAULT_LOCALE;

export function saveLocale(locale: string) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

const Ctx = createContext<Locale>(DEFAULT_LOCALE);
export const I18nProvider = Ctx.Provider;

export function useLocale() {
  return useContext(Ctx);
}

export function useT() {
  const locale = useContext(Ctx);
  void locale;
  return (key: MsgKey) => translateRo(key);
}
