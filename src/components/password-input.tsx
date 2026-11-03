import { useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";

/** Câmp de parolă cu buton „Arată / Ascunde” — pe telefon oamenii nu pot verifica ce au tastat. */
export function PasswordInput({ className = "", ...props }: Omit<InputHTMLAttributes<HTMLInputElement>, "type">) {
  const [vizibil, setVizibil] = useState(false);
  return (
    <div className="relative mt-1">
      <input {...props} type={vizibil ? "text" : "password"} autoCapitalize="none" autoCorrect="off" spellCheck={false} className={`${className} pr-12`} />
      <button
        type="button"
        onClick={() => setVizibil((v) => !v)}
        aria-label={vizibil ? "Ascunde parola" : "Arată parola"}
        aria-pressed={vizibil}
        className="absolute inset-y-0 right-0 grid w-12 place-items-center rounded-r-xl text-muted-foreground hover:text-foreground"
      >
        {vizibil ? <EyeOff className="h-5 w-5" aria-hidden="true" /> : <Eye className="h-5 w-5" aria-hidden="true" />}
      </button>
    </div>
  );
}
