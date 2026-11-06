import { Link } from "@tanstack/react-router";
import { Bot, ClipboardCheck, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * MeditatiiDirect.ro next steps under every BAC paper and solution page:
 * a real teacher (/meditatii-bac), Profesorul AI and the BAC simulation.
 */
export function BacMeditatiiCta({ an, materie }: { an: number; materie: string }) {
  return (
    <Card data-testid="bac-meditatii-cta" className="mt-8 border-primary/30 bg-primary/5 p-5">
      <h2 className="text-lg font-semibold">Vrei să iei nota pe care ți-o dorești la BAC {an}?</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Ai lucrat subiectul de {materie}? Pe MeditatiiDirect.ro îl poți relua cu un profesor sau cu
        Profesorul AI, exact pe punctele unde ai pierdut puncte la barem.
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        <li>
          <Link
            to="/meditatii-bac"
            className="flex h-full items-start gap-2 rounded-md border bg-background p-3 text-sm transition hover:border-primary/50 hover:text-primary"
          >
            <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <strong className="block">Cere meditații BAC</strong>
              Profesori verificați îți trimit oferte gratuit.
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/profesor-ai"
            className="flex h-full items-start gap-2 rounded-md border bg-background p-3 text-sm transition hover:border-primary/50 hover:text-primary"
          >
            <Bot className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <strong className="block">Lucrezi subiectul cu Profesorul AI</strong>
              Îți explică pas cu pas, cu voce și tablă.
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/simulare-bacalaureat"
            className="flex h-full items-start gap-2 rounded-md border bg-background p-3 text-sm transition hover:border-primary/50 hover:text-primary"
          >
            <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <strong className="block">Simulare Bacalaureat</strong>
              Testează-te în condiții de examen.
            </span>
          </Link>
        </li>
      </ul>
    </Card>
  );
}
