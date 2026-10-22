// Rezolvări verificate pentru subiectele oficiale de admitere. Înregistrează aici fiecare fișier nou.
import type { RezolvareAdmitere } from "@/data/rezolvari-verificate/types";
import { UPB_INFORMATICA_2025 } from "./upb-informatica-2025";
import { UPB_MATEMATICA_2025 } from "./upb-matematica-2025";

export const TOATE_REZOLVARILE_ADMITERE: RezolvareAdmitere[] = [
  UPB_INFORMATICA_2025,
  UPB_MATEMATICA_2025,
];

export const REZOLVARI_ADMITERE_PUBLICATE = TOATE_REZOLVARILE_ADMITERE.filter(
  (r) => r.status === "publicat",
);

export function rezolvareAdmitere(
  universitate: string,
  materie: string,
  an: number,
): RezolvareAdmitere | null {
  return (
    REZOLVARI_ADMITERE_PUBLICATE.find(
      (r) => r.universitate === universitate && r.materie === materie && r.an === an,
    ) ?? null
  );
}
