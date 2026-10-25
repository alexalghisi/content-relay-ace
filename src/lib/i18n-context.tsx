import { createContext, useContext } from "react";
import { DEFAULT_LOCALE, LOCALE_COOKIE, translate, type Locale, type MsgKey } from "./i18n";

// Site-ul este disponibil doar în limba română: limba nu mai poate fi schimbată (cookie-urile vechi sunt ignorate).
export const readLocale = (): Locale => DEFAULT_LOCALE;

export function saveLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

const Ctx = createContext<Locale>(DEFAULT_LOCALE);
export const I18nProvider = Ctx.Provider;

export function useLocale() {
  return useContext(Ctx);
}

export function useT() {
  const locale = useContext(Ctx);
  return (key: MsgKey) => translate(locale, key);
}
