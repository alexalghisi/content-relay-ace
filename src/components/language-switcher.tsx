import { useRouter } from "@tanstack/react-router";
import { Globe } from "lucide-react";
import { LOCALES, parseLocale } from "@/lib/i18n";
import { saveLocale, useLocale, useT } from "@/lib/i18n-context";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const t = useT();
  const router = useRouter();
  return (
    <label className={`relative inline-flex h-10 items-center gap-1 rounded-full border border-border px-2 text-sm ${className}`}>
      <Globe className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
      <span className="sr-only">{t("ui.language")}</span>
      <select
        value={locale}
        aria-label={t("ui.language")}
        className="cursor-pointer bg-transparent pr-1 text-sm outline-none"
        onChange={(e) => {
          saveLocale(parseLocale(e.target.value));
          router.invalidate();
        }}
      >
        {LOCALES.map((l) => (
          <option key={l.code} value={l.code}>{l.code.toUpperCase()} · {l.name}</option>
        ))}
      </select>
    </label>
  );
}
