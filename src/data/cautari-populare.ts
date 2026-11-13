// Scurtături organizate, afișate DOAR pe pagina principală (nu sitewide): câte un link pe pagină,
// cu etichete firești, grupate pe intenție. Orașele au deja secțiunea lor pe pagina principală.
// Paginile interioare primesc linkuri contextuale din src/lib/linkuri-contextuale.ts.
export interface GrupScurtaturi {
  titlu: string;
  linkuri: { label: string; href: string }[];
}

export const SCURTATURI_ACASA: GrupScurtaturi[] = [
  {
    titlu: "Meditații pe materii",
    linkuri: [
      { label: "Matematică", href: "/meditatii-matematica" },
      { label: "Română", href: "/meditatii-romana" },
      { label: "Engleză", href: "/meditatii-engleza" },
      { label: "Germană", href: "/meditatii-germana" },
      { label: "Fizică", href: "/meditatii-fizica" },
      { label: "Chimie", href: "/meditatii-chimie" },
      { label: "Biologie", href: "/meditatii-biologie" },
      { label: "Informatică", href: "/meditatii-informatica" },
    ],
  },
  {
    titlu: "Pregătire pentru examene",
    linkuri: [
      { label: "Meditații BAC", href: "/meditatii-bac" },
      { label: "Matematică pentru BAC", href: "/meditatii-matematica-bac" },
      { label: "Evaluarea Națională", href: "/meditatii-evaluare-nationala" },
      { label: "Admitere medicină", href: "/meditatii-admitere-medicina" },
      { label: "Calendar BAC 2027", href: "/calendar-bac-2027" },
      { label: "Admitere liceu 2027", href: "/admitere-liceu-2027" },
      { label: "Simulare BAC 2027", href: "/simulare-bacalaureat" },
      { label: "Modele subiecte BAC 2027", href: "/modele-subiecte-bac-2027" },
      { label: "Modele Evaluarea Națională 2027", href: "/modele-subiecte-evaluare-nationala-2027" },
      { label: "Vacanțe școlare 2026-2027", href: "/structura-an-scolar-2026-2027" },
    ],
  },
  {
    titlu: "Resurse gratuite",
    linkuri: [
      { label: "Subiecte BAC cu barem", href: "/subiecte-bac" },
      { label: "Subiecte BAC fizică", href: "/subiecte-bac/materie/fizica" },
      { label: "Prețuri meditații matematică", href: "/preturi-meditatii/matematica" },
      { label: "Profesorul AI", href: "/profesor-ai" },
      { label: "Blog", href: "/blog" },
    ],
  },
];
