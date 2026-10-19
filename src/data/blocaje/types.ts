// Harta Blocajelor — tipuri de date.
// Un „blocaj” este un punct în care un elev se împotmolește; fiecare nod descrie
// noțiunile pe care se sprijină (prerechizite), o explicație scurtă, un exemplu
// rezolvat și o verificare rapidă, apoi ce poate învăța în continuare.

export type BlocajMaterie =
  | "matematica"
  | "romana"
  | "fizica"
  | "chimie"
  | "engleza"
  | "informatica";

export interface BlocajExemplu {
  enunt: string;
  pasi: string[];
  raspuns: string;
}

export interface BlocajVerificare {
  intrebare: string;
  optiuni: string[];
  /** Indexul opțiunii corecte în `optiuni`. */
  corect: number;
  /** Explicație afișată după răspuns, indiferent dacă a fost corect sau nu. */
  explicatie: string;
}

export interface BlocajNode {
  /** Unic pe tot site-ul (nu doar pe materie). */
  slug: string;
  materie: BlocajMaterie;
  /** Clasele în care apare de obicei (5–12). */
  clase: number[];
  titlu: string;
  /** Cum descrie elevul blocajul, cu cuvintele lui. */
  blocaj: string;
  /** Semne că blocajul vine de aici. */
  simptome: string[];
  /** Slug-urile noțiunilor care lipsesc de obicei (pot fi din altă materie). */
  lipsa: string[];
  /** Explicație clară, pe paragrafe. */
  explicatie: string[];
  exemplu: BlocajExemplu;
  verificare: BlocajVerificare;
  /** Slug-urile noțiunilor care se construiesc pe aceasta. */
  urmeaza: string[];
  /** Nivelul potrivit pentru cererea de meditații (vezi LEVELS din /meditatii). */
  nivelCerere: "Gimnaziu" | "Evaluare Națională" | "Liceu" | "Bacalaureat" | "Admitere facultate";
}
