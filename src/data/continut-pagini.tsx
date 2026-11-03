/**
 * Conținut editorial pentru paginile de materie / nivel (SEO), scris pentru elevi și părinți.
 * Reguli: fără cifre de piață inventate (prețurile reale vin din market-stats), fără promisiuni
 * de notă, fără titluri sau rezultate atribuite profesorilor. Faptele de examen sunt cele din
 * programele și metodologiile oficiale; ce se poate schimba e marcat ca atare.
 */
import type { ReactNode } from "react";

type Sectiune = { title: string; body: ReactNode };

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a className="text-primary underline" href={href}>{children}</a>
);

/** Pașii platformei — identici peste tot, ca să nu promitem altceva pe pagini diferite. */
export const CUM_FUNCTIONEAZA: Sectiune = {
  title: "Cum găsești profesorul pe MeditatiiDirect",
  body: (
    <ol className="list-decimal space-y-1 pl-5">
      <li><strong>Postezi gratuit o cerere</strong> pe <A href="/meditatii">pagina de meditații</A>: materia, clasa, obiectivul (recuperare, teză, examen) și dacă vrei online sau acasă.</li>
      <li><strong>Primești propuneri</strong> de la profesori verificați, cu prețul pe oră și disponibilitatea scrise în propunere.</li>
      <li><strong>Vorbești direct cu profesorul</strong> înainte să decizi; plătești direct lui, fără comision către platformă.</li>
      <li><strong>După lecții, lași o evaluare</strong> de la 1 la 5 stele — evaluările vin doar din colaborări reale.</li>
    </ol>
  ),
};

const ALEGERE: Sectiune = {
  title: "Ce să întrebi un profesor înainte de prima ședință",
  body: (
    <ul className="list-disc space-y-1 pl-5">
      <li>Cu ce materiale lucrează: manualul, culegerile, subiectele oficiale din anii trecuți?</li>
      <li>Cum arată o ședință: cât explică, cât rezolvă elevul singur, ce temă primește?</li>
      <li>Cum vei ști că progresezi: test la fiecare capitol, variante complete cronometrate?</li>
      <li>Ce se întâmplă dacă o ședință se anulează și cu cât timp înainte trebuie anunțat?</li>
    </ul>
  ),
};

export const SECTIUNI: Record<string, Sectiune[]> = {
  "meditatii-chimie": [
    { title: "Ce se lucrează la meditațiile de chimie", body: (
      <>
        <p>La gimnaziu (clasele VII–VIII) se pun bazele: structura atomului, tabelul periodic, legături chimice, formule și ecuații, calcule cu masă molară și concentrații. Aici apar cele mai multe goluri, pentru că problemele de calcul cer și matematică sigură.</p>
        <p className="mt-2">La liceu, programa trece la chimie anorganică (soluții, echilibru, reacții redox, electrochimie) și organică (hidrocarburi, alcooli, acizi carboxilici, grăsimi, zaharide, proteine). La Bacalaureat, elevii care dau chimia aleg proba de <strong>chimie organică</strong> sau <strong>chimie anorganică</strong>, pe nivelul specific profilului.</p>
      </>
    ) },
    { title: "Chimie pentru admitere la Medicină", body: (
      <p>Majoritatea facultăților de medicină din țară dau la admitere teste grilă de biologie și <strong>chimie organică</strong>, după manualele și programa anunțate de fiecare universitate. Pregătirea înseamnă mult volum de grile și lucru pe greșelile repetate. Verifică pe site-ul facultății materiile și bibliografia exactă pentru anul tău, apoi exersează pe <A href="/grile-medicina">grile de medicină</A>.</p>
    ) },
    CUM_FUNCTIONEAZA,
    ALEGERE,
  ],
  "meditatii-biologie": [
    { title: "Biologie pentru BAC: două programe, alegi una", body: (
      <p>La proba de biologie a Bacalaureatului alegi între <strong>Biologie vegetală și animală</strong> (materia din clasele IX–X) și <strong>Anatomie și fiziologie umană, genetică și ecologie umană</strong> (clasele XI–XII). Alegerea se face la înscriere; meditațiile au sens doar pe programa pe care o dai, așa că spune-o din prima în cerere.</p>
    ) },
    { title: "Biologie pentru admitere la Medicină", body: (
      <p>La medicină, biologia se dă de regulă sub formă de grile, pe anatomie și fiziologie umană. Spre deosebire de BAC, contează viteza și precizia pe detalii: zeci de întrebări într-un timp limitat. O pregătire bună alternează teoria pe capitole cu seturi de grile cronometrate. Bibliografia exactă diferă de la o universitate la alta.</p>
    ) },
    CUM_FUNCTIONEAZA,
    ALEGERE,
  ],
  "meditatii-gimnaziu": [
    { title: "De ce contează clasele V–VIII", body: (
      <p>În gimnaziu se construiesc bazele pentru tot liceul: fracții, puteri, ecuații, geometrie la matematică; gramatică, tipuri de texte și compunere la română. Un gol lăsat în clasa a V-a sau a VI-a apare din nou la Evaluarea Națională. Meditațiile sunt cele mai eficiente când pornesc de la capitolul unde a apărut golul, nu de la lecția din săptămâna curentă.</p>
    ) },
    { title: "Pe clase", body: (
      <ul className="list-disc space-y-1 pl-5">
        <li><strong>Clasa a V-a:</strong> trecerea de la învățător la profesori pe materii; ajută un ritm stabil și obiceiul temelor.</li>
        <li><strong>Clasa a VI-a:</strong> apar fizica și numerele întregi și raționale; este Evaluarea Națională la clasa a VI-a (română, limbă străină, matematică și științe).</li>
        <li><strong>Clasa a VII-a:</strong> apare chimia, iar la matematică numerele reale și geometria în plan se complică.</li>
        <li><strong>Clasa a VIII-a:</strong> Evaluarea Națională la română și matematică, care decide admiterea la liceu. Vezi <A href="/meditatii-evaluare-nationala">pregătirea pentru Evaluarea Națională</A>.</li>
      </ul>
    ) },
    CUM_FUNCTIONEAZA,
    ALEGERE,
  ],
  "meditatii-liceu": [
    { title: "Ce fel de meditații cer liceenii", body: (
      <ul className="list-disc space-y-1 pl-5">
        <li><strong>Recuperare (clasele IX–X):</strong> trecerea de la gimnaziu e bruscă la matematică, fizică și chimie; câteva luni de lucru constant închid golurile înainte să se adune.</li>
        <li><strong>Teze și medii (oricare clasă):</strong> lucru țintit pe capitolul din test, cu exerciții de tipul celor date la clasă.</li>
        <li><strong>Bacalaureat (clasele XI–XII):</strong> lucru pe programa de examen și pe subiectele oficiale. Vezi <A href="/calendar-bac-2027">calendarul BAC 2027</A>.</li>
        <li><strong>Admitere la facultate:</strong> grile de medicină, matematică pentru politehnică, logică și gramatică pentru drept.</li>
      </ul>
    ) },
    { title: "Online sau acasă?", body: (
      <p>Online economisești drumul și ai de unde alege profesori din toată țara; e potrivit pentru liceeni care lucrează bine la calculator sau tabletă. Acasă ajută elevii care se concentrează greu în fața ecranului. Pe MeditatiiDirect alegi formatul în cerere și primești propuneri pe măsură — vezi <A href="/meditatii-online">meditații online</A> și <A href="/meditatii-la-domiciliu">meditații la domiciliu</A>.</p>
    ) },
    CUM_FUNCTIONEAZA,
    ALEGERE,
  ],
  "meditatii-clasa-8": [
    { title: "Ce se dă la Evaluarea Națională în clasa a VIII-a", body: (
      <p>Două probe scrise, de câte două ore: <strong>Limba și literatura română</strong> și <strong>Matematică</strong> (plus limba maternă pentru elevii care au studiat în limba maternă). Subiectele urmează programa de gimnaziu, iar cea mai bună pregătire sunt modelele și subiectele oficiale din anii trecuți. Datele pentru 2027 sunt în <A href="/calendar-evaluare-nationala-2027">calendarul Evaluării Naționale 2027</A>.</p>
    ) },
    { title: "Un plan realist pentru anul școlar", body: (
      <ul className="list-disc space-y-1 pl-5">
        <li><strong>Până în ianuarie:</strong> recapitulezi materia din clasele V–VII pe capitole, câte unul pe săptămână.</li>
        <li><strong>Februarie–martie:</strong> variante complete o dată pe săptămână și simularea din martie.</li>
        <li><strong>Aprilie–iunie:</strong> lucru țintit pe tipurile de exerciții unde ai pierdut puncte la simulare.</li>
      </ul>
    ) },
    CUM_FUNCTIONEAZA,
  ],
  "meditatii-clasa-12": [
    { title: "Clasa a XII-a: BAC și admitere în același an", body: (
      <p>Anul terminal împarte timpul între materia nouă, recapitularea pentru Bacalaureat și, pentru mulți, pregătirea de admitere. Ajută să decizi devreme ce probe dai la BAC și ce cere facultatea vizată, ca meditațiile să acopere ambele când se suprapun (de exemplu, biologia și chimia pentru medicină).</p>
    ) },
    { title: "Repere 2027", body: (
      <p>Simularea BAC are loc în 22–25 martie 2027, iar probele scrise în 14–18 iunie 2027. Toate datele, cu sursele, sunt în <A href="/calendar-bac-2027">calendarul BAC 2027</A>.</p>
    ) },
    CUM_FUNCTIONEAZA,
    ALEGERE,
  ],
  "profesor-particular": [
    { title: "Cum alegi un profesor particular", body: (
      <ul className="list-disc space-y-1 pl-5">
        <li><strong>Pornește de la obiectiv:</strong> recuperare, notă mai mare la teză, examen național sau admitere. Un profesor bun pentru olimpiadă nu e neapărat cel potrivit pentru recuperare.</li>
        <li><strong>Cere o primă ședință de cunoaștere:</strong> profesorul vede nivelul real, tu vezi dacă stilul lui se potrivește copilului.</li>
        <li><strong>Uită-te la plan, nu doar la preț:</strong> cât lucrează elevul singur, ce temă primește, cum se măsoară progresul.</li>
        <li><strong>Stabilește regulile din start:</strong> durata ședinței, plata, anulările.</li>
      </ul>
    ) },
    { title: "Individual sau în grup", body: (
      <p>Individual, ritmul e al elevului și se lucrează exact pe golurile lui — potrivit pentru recuperare și pentru examen. În grup mic, elevi cu nivel apropiat lucrează pe același capitol și costul se împarte. Poți scrie în cerere ce variantă preferi. Mai multe în ghidul <A href="/blog/meditatii-individuale-vs-grup-ghid-complet-2026">meditații individuale vs. în grup</A>.</p>
    ) },
    CUM_FUNCTIONEAZA,
    ALEGERE,
  ],
};

/** Pagina de pregătire pentru Evaluarea Națională (era doar un titlu). */
export const SECTIUNI_EN: Sectiune[] = [
  { title: "Ce se dă la Evaluarea Națională", body: (
    <p>Elevii de clasa a VIII-a susțin două probe scrise, de câte două ore: <strong>Limba și literatura română</strong> și <strong>Matematică</strong>, iar cei care au studiat într-o limbă maternă dau și proba de limbă maternă. Subiectele urmează programa de gimnaziu (clasele V–VIII). Calendarul 2027: simularea 16–18 martie, examenul 22–25 iunie — detalii în <A href="/calendar-evaluare-nationala-2027">calendarul Evaluării Naționale 2027</A>.</p>
  ) },
  { title: "Cum contează nota pentru liceu", body: (
    <p>La admiterea din 2026, media de admitere a fost media aritmetică a notelor de la Evaluarea Națională; media claselor V–VIII a contat doar la departajare (OME 6060/2025). Pentru 2027 urmează metodologia nouă, așa că urmărește <A href="/admitere-liceu-2027">pagina despre admiterea la liceu 2027</A>, pe care o actualizăm când apare ordinul.</p>
  ) },
  { title: "Pregătirea la matematică", body: (
    <ul className="list-disc space-y-1 pl-5">
      <li><strong>Subiectul I</strong> verifică rapid calculul și noțiunile de bază: aici nu ai voie să pierzi puncte din grabă.</li>
      <li><strong>Subiectele II și III</strong> au probleme de algebră și geometrie cu raționament scris; punctele vin din pași, nu doar din rezultat.</li>
      <li>Exersează pe capitole (numere reale, ecuații și inecuații, funcții, geometrie plană și în spațiu), apoi variante complete cronometrate la 2 ore.</li>
    </ul>
  ) },
  { title: "Pregătirea la română", body: (
    <ul className="list-disc space-y-1 pl-5">
      <li>Înțelegerea textului, literar și nonliterar: răspunsuri scurte, exacte, cu citat din text acolo unde se cere.</li>
      <li>Gramatica: morfologie și sintaxă, exersate pe fraze reale, nu pe liste de reguli.</li>
      <li>Redactarea: compunere, text argumentativ, caracterizare de personaj — cu un plan scris înainte de a începe.</li>
    </ul>
  ) },
  { title: "Resurse gratuite pe site", body: (
    <p>Ai la dispoziție <A href="/evaluare-nationala">subiecte și bareme de Evaluare Națională</A>, <A href="/calculator-media-evaluare-nationala">calculatorul de medie</A>, <A href="/harta-blocajelor">Harta Blocajelor</A> (găsești noțiunea care îți lipsește) și <A href="/scaner-lacune">scanerul de lacune</A>.</p>
  ) },
  CUM_FUNCTIONEAZA,
  ALEGERE,
];

export const FAQ_EN = [
  { q: "Când încep meditațiile pentru Evaluarea Națională?", a: "Cel mai bine la începutul clasei a VIII-a, ca să rămână timp pentru recapitularea claselor V–VII și pentru variante complete înainte de simularea din martie. Și o pregătire începută după simulare ajută, dacă e țintită pe greșelile de acolo." },
  { q: "Câte ședințe pe săptămână sunt potrivite?", a: "De obicei una sau două ședințe pe săptămână la fiecare materie, plus temă între ședințe. Profesorul poate propune un ritm mai intens în lunile dinaintea examenului." },
  { q: "Se pot face meditații pentru Evaluarea Națională online?", a: "Da. Ședințele se țin pe Zoom sau Google Meet, cu foi sau tablă comună pentru exerciții. Alegi formatul în cerere și primești propuneri de la profesori din toată țara." },
  { q: "Cât costă meditațiile pentru Evaluarea Națională?", a: "Fiecare profesor își stabilește tariful și îl vezi în propunere înainte să accepți. Tarifele reale din anunțurile de pe site sunt pe pagina Prețuri meditații." },
  { q: "Contează simularea Evaluării Naționale?", a: "Nu intră în media de admitere, dar e cel mai bun test realist din an: arată exact ce capitole trebuie lucrate până în iunie." },
];

/** Admiterea la liceu 2027 — doar fapte verificate + ce încă nu se știe. */
export const SECTIUNI_ADMITERE_LICEU: Sectiune[] = [
  { title: "Cum s-a calculat media de admitere în 2026", body: (
    <>
      <p>La admiterea pentru anul școlar 2026–2027, media de admitere a fost <strong>media aritmetică a notelor obținute la Evaluarea Națională</strong> (română și matematică; limba maternă pentru cei care au susținut-o, cu posibilitatea de a cere excluderea ei), calculată cu două zecimale, fără rotunjire. De exemplu, 8,60 la română și 9,40 la matematică dau media 9,00.</p>
      <p className="mt-2">Media generală a claselor V–VIII nu a intrat în calcul; a contat doar la <strong>departajare</strong>, când doi candidați cu aceeași medie concurau pentru ultimul loc. Baza legală a fost OME 6060/2025.</p>
    </>
  ) },
  { title: "Ce se știe despre admiterea la liceu 2027", body: (
    <p>Datele Evaluării Naționale 2027 sunt anunțate (simulare 16–18 martie, examen 22–25 iunie 2027) — vezi <A href="/calendar-evaluare-nationala-2027">calendarul complet</A>. Calendarul repartizării computerizate și eventualele schimbări de metodologie pentru 2027 se publică printr-un ordin separat al Ministerului Educației; în presă s-au discutat propuneri de schimbare, dar până la publicarea ordinului regula de mai sus rămâne doar referința din 2026. Actualizăm pagina când apare documentul oficial.</p>
  ) },
  { title: "Ce poți face de acum", body: (
    <ul className="list-disc space-y-1 pl-5">
      <li>Află mediile de intrare din anii trecuți la liceele vizate (le publică inspectoratul școlar județean).</li>
      <li>Calculează-ți ținta cu <A href="/calculator-media-evaluare-nationala">calculatorul de medie</A>.</li>
      <li>Lucrează pe <A href="/evaluare-nationala">subiecte oficiale de Evaluare Națională</A> și dă simularea din martie ca pe examenul real.</li>
      <li>Dacă ai goluri la română sau matematică, un profesor te ajută să le închizi până la simulare — <A href="/meditatii-evaluare-nationala">meditații Evaluare Națională</A>.</li>
    </ul>
  ) },
];

export const FAQ_ADMITERE_LICEU = [
  { q: "Cum se calculează media de admitere la liceu?", a: "În 2026 a fost media aritmetică a notelor de la Evaluarea Națională, cu două zecimale, fără rotunjire. Media claselor V–VIII a contat doar la departajare. Pentru 2027 se aplică metodologia din ordinul care urmează să fie publicat." },
  { q: "Contează media din clasele V–VIII la admiterea la liceu?", a: "La admiterea din 2026, nu în calculul mediei: doar la departajarea candidaților cu aceeași medie pentru ultimul loc dintr-o specializare." },
  { q: "Când se face admiterea la liceu în 2027?", a: "Evaluarea Națională 2027 are loc în 22–25 iunie, iar rezultatele finale pe 7 iulie 2027. Repartizarea computerizată urmează după, conform calendarului de admitere care se publică separat." },
  { q: "Există notă minimă pentru admiterea la liceu?", a: "În 2026 nu a existat o notă minimă: toți elevii care au susținut Evaluarea Națională au participat la repartizare, dar media le-a influențat șansele de a intra la liceul dorit." },
];

export const SURSE_ADMITERE_LICEU = [
  { label: "Digi24 — Cum se calculează media de admitere la liceu (2026)", href: "https://www.digi24.ro/stiri/actualitate/educatie/cum-se-calculeaza-media-de-admitere-la-liceu-dupa-evaluarea-nationala-2026-in-ce-situatii-conteaza-notele-din-clasele-v-viii-3821115" },
  { label: "Digi24 — Calendarul Evaluării Naționale 2027", href: "https://www.digi24.ro/stiri/actualitate/educatie/evaluarea-nationala-2027-ministerul-educatiei-a-anuntat-calendarul-oficial-cand-au-loc-simularea-si-examenul-4000119" },
];
