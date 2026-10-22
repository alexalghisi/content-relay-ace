import type { RezolvareVerificata } from "./types";

const VERIFICA = "bash scripts/verificare-rezolvari/informatica-2025-simulare/verifica.sh";

export const INFORMATICA_2025_SIMULARE: RezolvareVerificata = {
  materie: "informatica",
  an: 2025,
  sesiune: "simulare",
  proba: "Proba E. d) — Informatică, limbajul C/C++",
  programa: "Filiera teoretică, profil real, specializarea matematică-informatică / matematică-informatică intensiv informatică; filiera vocațională, profil militar, matematică-informatică",
  varianta: null,
  specializare: "mate-info",
  titlu: "Rezolvare simulare BAC Informatică 2025, mate-info — pas cu pas, cu cod C++ testat",
  descriere:
    "Rezolvarea completă a simulării de bacalaureat la informatică din 2025 (mate-info, C/C++): grilele explicate, algoritmul care numără numerele prime dintr-un interval, structuri, completarea unui tablou bidimensional, subprogramul zero (zerourile finale ale unui produs), cuvintele „muzicale” dintr-un text și algoritmul eficient pentru semnalele laser din BAC.IN. Fiecare program a fost compilat și testat pe exemplele din enunț, pe cazuri limită și comparat cu implementări independente.",
  status: "publicat",
  dificultate: "mediu",
  timpMinute: 180,
  actualizat: "2026-10-23",
  documente: {
    subiect: "informatica/2025/simulare-subiect.pdf",
    notaBarem:
      "Baremul din arhiva noastră pentru această simulare are antetul Inspectoratului Școlar Județean Cluj, pentru bacalaureatul 2026, și nu precizează varianta, în timp ce subiectul este al ISJ Brăila, pentru 2025 — nu putem confirma că sunt pereche, așa că nu îl afișăm lângă această rezolvare. Rezolvarea de mai jos este a noastră și nu înlocuiește un barem oficial.",
  },
  sursa: {
    emitent: "Ministerul Educației — Inspectoratul Școlar Județean Brăila",
    detalii: "Examenul național de bacalaureat 2025, Proba E. d), Informatică, limbajul C/C++, Simulare (antetul documentului). Documentul nu are număr de variantă.",
  },
  verificari: [
    {
      ce: "Grilele I.1–I.5: evaluarea expresiei, compilarea lui v[0].s, lanțul din arborele cu tatăl [i/2], f(1234) și forță brută peste toate cele 2²¹ grafuri parțiale ale grafului complet cu 7 noduri",
      metoda: "Program C++ compilat cu g++ 13.3 (-std=c++17 -Wall -Werror) și rulat",
      comanda: VERIFICA,
      data: "2026-10-23",
      rezultat: "PASS",
    },
    {
      ce: "II.1 a–d: rezultatul pentru 20 și 30 (și control în Python), toate valorile lui n care dau 2 pentru m = 22, echivalența variantei cu cât timp pe toate perechile 0 ≤ n ≤ m (n ≤ 40, m ≤ 45); II.2 pe patru cazuri; II.3 tabloul obținut, comparat cu cel din enunț",
      metoda: "Programe C++ rulate și comparate ieșire cu ieșire",
      comanda: VERIFICA,
      data: "2026-10-23",
      rezultat: "PASS",
    },
    {
      ce: "III.1 pe exemplul din enunț, numere negative, element 0 și 300 de vectori aleatori comparați cu produsul calculat exact în Python; III.2 pe exemplul din enunț și pe 200 de texte aleatoare comparate cu o implementare independentă; III.3 pe exemple, pe toate perechile cu m ≤ 30 și pe valori de ordinul 10⁶ / 10⁹",
      metoda: "Programe C++ compilate și rulate; rezultatele așteptate generate independent în Python 3",
      comanda: VERIFICA,
      data: "2026-10-23",
      rezultat: "PASS",
    },
  ],
  notaPunctaj:
    "Proba are 90 de puncte pe itemi plus 10 din oficiu: Subiectul I — 20 p (5 grile × 4 p), Subiectul al II-lea — 40 p, Subiectul al III-lea — 30 p. La corectare se punctează orice rezolvare corectă, chiar dacă diferă de cea de mai jos.",
  sectiuni: [
    {
      titlu: "Subiectul I",
      puncte: 20,
      itemi: [
        {
          id: "s1-1",
          eticheta: "Subiectul I, 1",
          puncte: 4,
          cerinta: "Valoarea expresiei C/C++ 3+7/4+3. Variante: 1, 5.5, 7, 7.75.",
          ceSeCere: "Să aplici prioritatea operatorilor și împărțirea întreagă.",
          notiuni: ["prioritatea lui `/` față de `+`", "împărțirea întreagă între int-uri"],
          pasi: [
            "`/` are prioritate mai mare decât `+`, deci se calculează întâi `7/4`.",
            "7 și 4 sunt int, deci `7/4 = 1` (partea fracționară se pierde).",
            "3 + 1 + 3 = 7.",
          ],
          raspuns: "**c** — 7",
          verificare: "Expresia a fost evaluată exact așa într-un program C++: 7.",
          greseli: [
            "7/4 = 1.75 — ar da 7.75 (varianta d), dar între int-uri rezultatul este int.",
            "Calculul de la stânga la dreapta: (3+7)/(4+3) — ignoră prioritatea operatorilor.",
          ],
        },
        {
          id: "s1-2",
          eticheta: "Subiectul I, 2",
          puncte: 4,
          cerinta: "struct interval { float s,d; } v[20]; — expresia care reprezintă extremitatea stângă a primului interval.",
          ceSeCere: "Să accesezi un câmp al unui element dintr-un tablou de structuri.",
          notiuni: ["tablou de structuri", "operatorul `.`", "indexarea de la 0"],
          pasi: [
            "Tabloul se numește v; primul element este v[0].",
            "Câmpul extremității stângi este s, deci expresia este `v[0].s`.",
            "s.v[0] și s(0).v nu au sens (s este un câmp, nu o variabilă); v(0) nu este sintaxa de indexare în C/C++.",
          ],
          raspuns: "**a** — v[0].s",
          verificare: "Declarația din enunț și expresia v[0].s au fost compilate și folosite într-un program C++.",
          greseli: ["Inversarea ordinii (s.v[0]) — întâi alegi elementul tabloului, apoi câmpul."],
        },
        {
          id: "s1-3",
          eticheta: "Subiectul I, 3",
          puncte: 4,
          cerinta: "Arbore cu 50 de noduri, rădăcina 1, tatăl nodului i este [i/2]. Lungimea lanțului dintre nodurile 14 și 47.",
          ceSeCere: "Să urci din fiecare nod spre rădăcină până la primul strămoș comun și să numeri muchiile.",
          notiuni: ["arbore cu rădăcină", "vectorul de tați", "lungimea unui lanț = numărul de muchii"],
          pasi: [
            "Din 47 urcăm: 47 → 23 → 11 → 5 → 2 → 1 (5 muchii).",
            "Din 14 urcăm: 14 → 7 → 3 → 1 (3 muchii).",
            "Primul nod comun este rădăcina 1, deci lanțul este 14, 7, 3, 1, 2, 5, 11, 23, 47.",
            "Lungimea: 5 + 3 = 8 muchii.",
          ],
          raspuns: "**b** — 8",
          verificare: "Program C++: urcare simultană până la strămoșul comun (1) și calcul cu adâncimile nodurilor: 8.",
          greseli: ["Numărarea nodurilor (9) în loc de muchii.", "Diferența 47 − 14 = 33 (varianta d) — numerotarea nu dă distanța."],
        },
        {
          id: "s1-4",
          eticheta: "Subiectul I, 4",
          puncte: 4,
          cerinta: "f(n) întoarce (n%2)*(n%10)+f(n/10) pentru n≠0 și 0 pentru n=0. Valoarea lui f(1234).",
          ceSeCere: "Să observi că f adună cifrele impare ale lui n.",
          notiuni: ["recursivitate", "n%2 este 1 pentru cifră impară, 0 pentru pară"],
          pasi: [
            "(n%2)*(n%10) este ultima cifră dacă n e impar (ultima cifră e impară) și 0 altfel — deci f adună cifrele impare.",
            "f(1234) = 0 + f(123) = 3 + f(12) = 3 + 0 + f(1) = 3 + 1 + f(0) = 4.",
          ],
          raspuns: "**b** — 4",
          verificare: "Funcția din enunț a fost rulată în C++: f(1234) = 4.",
          greseli: ["Adunarea tuturor cifrelor (10, varianta d) — cifrele pare sunt înmulțite cu n%2 = 0."],
        },
        {
          id: "s1-5",
          eticheta: "Subiectul I, 5",
          puncte: 4,
          cerinta: "Graf neorientat cu 7 noduri și 21 de muchii. Numărul minim de muchii de eliminat ca graful parțial să aibă două componente conexe, fiecare cu cel puțin două noduri.",
          ceSeCere: "Să recunoști graful complet și să alegi împărțirea care taie cele mai puține muchii.",
          notiuni: ["graf complet: n(n−1)/2 muchii", "componentă conexă", "graf parțial"],
          pasi: [
            "7 · 6 / 2 = 21, deci graful este complet: oricare două noduri sunt unite printr-o muchie.",
            "Dacă cele două componente au k și 7 − k noduri, trebuie eliminate toate cele k(7 − k) muchii dintre ele (în interiorul fiecărei grupe graful rămâne complet, deci conex).",
            "Cu k ≥ 2 și 7 − k ≥ 2: k = 2 → 10, k = 3 → 12. Minimul este 10.",
          ],
          raspuns: "**c** — 10",
          verificare: "Forță brută în C++ peste toate cele 2²¹ grafuri parțiale: minimul de muchii eliminate pentru exact două componente conexe cu cel puțin două noduri fiecare este 10.",
          greseli: ["Izolarea unui singur nod (6 muchii, varianta a) — dar atunci o componentă are un singur nod."],
        },
      ],
    },
    {
      titlu: "Subiectul al II-lea",
      puncte: 40,
      itemi: [
        {
          id: "s2-1a",
          eticheta: "Subiectul al II-lea, 1a",
          puncte: 6,
          cerinta: "Pentru fiecare x de la n la m, dacă x ≥ 2, se caută cel mai mic divizor a ≥ 2 al lui x; dacă a = x, b crește. Se afișează b. Ce se afișează pentru n = 20, m = 30?",
          ceSeCere: "Să recunoști ce numără algoritmul și să aplici pe intervalul dat.",
          notiuni: ["cel mai mic divizor propriu", "număr prim"],
          pasi: [
            "Bucla cât timp se oprește la cel mai mic divizor a ≥ 2 al lui x. Acesta este chiar x doar dacă x este prim.",
            "Deci algoritmul numără numerele prime din [n, m].",
            "În [20, 30] numerele prime sunt 23 și 29.",
          ],
          raspuns: "Se afișează **2**.",
          verificare: "Programul C++ de la punctul c, rulat cu 20 și 30, afișează 2; numărarea primelor din [20, 30] făcută separat în Python dă tot 2.",
          greseli: ["Numărarea și a lui 21 sau 27 — sunt divizibile cu 3, nu sunt prime."],
        },
        {
          id: "s2-1b",
          eticheta: "Subiectul al II-lea, 1b",
          puncte: 6,
          cerinta: "Cele mai mici două valori întregi pozitive pentru n astfel încât, cu m = 22, să se afișeze 2.",
          ceSeCere: "Intervalul [n, 22] trebuie să conțină exact două numere prime.",
          notiuni: ["numere prime ≤ 22"],
          pasi: [
            "Primele până la 22 sunt 2, 3, 5, 7, 11, 13, 17, 19.",
            "Exact două prime în [n, 22] înseamnă 17 și 19, deci 13 < n ≤ 17.",
            "Cele mai mici două valori: 14 și 15.",
          ],
          raspuns: "**14** și **15**",
          verificare: "Am rulat programul pentru toate n de la 1 la 22 cu m = 22: afișează 2 exact pentru n = 14, 15, 16, 17.",
          greseli: ["Includerea lui 13: [13, 22] conține 13, 17, 19 — se afișează 3."],
        },
        {
          id: "s2-1c",
          eticheta: "Subiectul al II-lea, 1c",
          puncte: 10,
          cerinta: "Scrieți programul C/C++ corespunzător algoritmului dat.",
          ceSeCere: "Transcriere fidelă: citire, for, if-uri imbricate, while, afișare.",
          notiuni: ["for", "while", "if imbricat"],
          pasi: [
            "`pentru x←n,m` devine `for (x = n; x <= m; x++)`.",
            "Al doilea `dacă` este în interiorul primului, deci ambele instrucțiuni stau în blocul lui `if (x >= 2)`.",
          ],
          raspuns: "Programul de mai jos.",
          cod: {
            limbaj: "cpp",
            sursa: `#include <iostream>
using namespace std;
int main()
{
    int n, m, b = 0, x, a;
    cin >> n >> m;
    for (x = n; x <= m; x++)
        if (x >= 2)
        {
            a = 2;
            while (x % a > 0)
                a = a + 1;
            if (x == a)
                b = b + 1;
        }
    cout << b;
    return 0;
}`,
          },
          complexitate: "O((m − n) · m) în cel mai rău caz — pentru fiecare x se caută divizorul liniar.",
          verificare: "Compilat fără avertismente (g++ -Wall -Werror) și rulat: 20 30 → 2.",
          greseli: ["Scoaterea lui `if (x == a)` din blocul lui `if (x >= 2)` — pentru x = 0 sau 1, variabila a ar fi folosită neinițializată."],
        },
        {
          id: "s2-1d",
          eticheta: "Subiectul al II-lea, 1d",
          puncte: 6,
          cerinta: "Scrieți în pseudocod un algoritm echivalent, înlocuind structura pentru...execută cu o structură repetitivă de alt tip.",
          ceSeCere: "O buclă cât timp cu inițializare înainte și incrementare la final.",
          notiuni: ["echivalența pentru ↔ cât timp", "structură cu test inițial"],
          pasi: [
            "Inițializarea contorului (x ← n) se mută înaintea buclei.",
            "Condiția de continuare este x ≤ m; testul fiind inițial, pentru n > m bucla nu s-ar executa (ca și for-ul).",
            "Incrementarea x ← x+1 se pune ultima în corpul buclei.",
          ],
          raspuns: "Algoritmul echivalent de mai jos.",
          cod: {
            limbaj: "pseudocod",
            sursa: `citește n,m (numere naturale, n≤m)
b←0
x←n
┌cât timp x≤m execută
│ ┌dacă x>=2 atunci
│ │ a←2
│ │ ┌cât timp x%a>0 execută
│ │ │ a←a+1
│ │ └■
│ │ ┌dacă x=a atunci
│ │ │ b←b+1
│ │ └■
│ └■
│ x←x+1
└■
scrie b`,
          },
          verificare: "Transcrierea în C++ a acestui algoritm a dat aceeași ieșire ca programul original pentru toate perechile 0 ≤ n ≤ m, cu n ≤ 40 și m ≤ 45.",
          greseli: ["Uitarea lui x ← x+1 — buclă infinită.", "O buclă repetă...până când fără protecție — se execută o dată chiar dacă n > m."],
        },
        {
          id: "s2-2",
          eticheta: "Subiectul al II-lea, 2",
          puncte: 6,
          cerinta: "Declarați variabila s (2 sportivi: vârstă și înălțime naturale de cel mult 3 cifre, greutate reală cu două zecimale), folosită ca s[0].varsta, s[0].inaltimea, s[1].greutatea, și scrieți secvența care afișează înălțimea sportivului mai tânăr; la vârstă egală, a celui cu greutatea mai mică.",
          ceSeCere: "Un tablou de 2 structuri și o decizie în trei pași.",
          notiuni: ["struct", "tablou de structuri", "if…else if"],
          pasi: [
            "Expresiile s[0].varsta și s[1].greutatea arată că s este un tablou de 2 structuri cu câmpurile varsta, inaltimea (int) și greutatea (float).",
            "Comparăm întâi vârstele; doar dacă sunt egale comparăm greutățile.",
            "În programul de mai jos, declarația este structura de deasupra lui `main`, iar secvența cerută este blocul de `if`-uri; citirea este doar pentru testare.",
          ],
          raspuns: "Declarația și secvența de mai jos.",
          cod: {
            limbaj: "cpp",
            sursa: `#include <iostream>
using namespace std;
struct
{
    int varsta, inaltimea;
    float greutatea;
} s[2];
int main()
{
    cin >> s[0].varsta >> s[0].inaltimea >> s[0].greutatea;
    cin >> s[1].varsta >> s[1].inaltimea >> s[1].greutatea;
    if (s[0].varsta < s[1].varsta)
        cout << s[0].inaltimea;
    else if (s[1].varsta < s[0].varsta)
        cout << s[1].inaltimea;
    else if (s[0].greutatea < s[1].greutatea)
        cout << s[0].inaltimea;
    else
        cout << s[1].inaltimea;
    return 0;
}`,
          },
          verificare: "Rulat pe patru cazuri: primul mai tânăr, al doilea mai tânăr, vârste egale cu fiecare dintre sportivi mai ușor — de fiecare dată s-a afișat înălțimea corectă.",
          greseli: ["Declararea a două variabile separate în loc de tablou — expresia s[1].greutatea nu ar mai fi validă.", "Compararea greutăților și când vârstele diferă."],
        },
        {
          id: "s2-3",
          eticheta: "Subiectul al II-lea, 3",
          puncte: 6,
          cerinta: "Completați secvența for(i=0;i<6;i++) for(j=0;j<6;j++) … (fără alte variabile, cel mult 6 atribuiri) astfel încât tabloul a (6×6, inițial nul) să devină cel din enunț: prima și ultima linie pline cu 1, respectiv 6, iar pe liniile 1–4 valoarea i+1 pe coloanele 0, 1, 4, 5 și 0 pe coloanele 2, 3.",
          ceSeCere: "O condiție care descrie pozițiile nenule și valoarea lor.",
          notiuni: ["tablou bidimensional", "condiții pe indici"],
          pasi: [
            "Pe fiecare poziție nenulă valoarea este numărul liniei plus 1: i + 1.",
            "Pozițiile nenule: linia 0, linia 5 și coloanele 0, 1, 4, 5 (j < 2 sau j > 3).",
            "Restul rămân 0, cum erau inițial — nu e nevoie de atribuire. Folosim o singură atribuire.",
          ],
          raspuns: "Secvența de mai jos.",
          cod: {
            limbaj: "cpp",
            sursa: `    for(i=0;i<6;i++)
        for(j=0;j<6;j++)
            if (i == 0 || i == 5 || j < 2 || j > 3) a[i][j] = i + 1;`,
          },
          verificare: "Secvența a fost rulată pe un tablou inițial nul; tabloul afișat coincide linie cu linie cu cel din enunț.",
          greseli: ["Folosirea lui j+1 în loc de i+1 — valorile depind de linie, nu de coloană.", "Condiția j < 2 && j > 3 (imposibilă) în loc de ||."],
        },
      ],
    },
    {
      titlu: "Subiectul al III-lea",
      puncte: 30,
      itemi: [
        {
          id: "s3-1",
          eticheta: "Subiectul al III-lea, 1",
          puncte: 10,
          cerinta: "Subprogramul zero(a, n, imp): a are cel mult 100 de numere întregi; imp = numărul de valori impare; returnează numărul de zerouri în care se termină produsul valorilor. Exemplu: (2, 25, 7, 6, 15, 9, 8) → imp = 4, returnează 3.",
          ceSeCere: "Numărarea imparelor și a zerourilor finale ale produsului, fără a calcula produsul.",
          notiuni: ["10 = 2 · 5", "descompunere în factori", "transmitere prin referință"],
          pasi: [
            "Produsul a până la 100 de numere depășește orice tip întreg, deci nu îl calculăm.",
            "Fiecare zero final provine dintr-un factor 10 = 2 · 5. Numărăm de câte ori apar 2 și 5 în toate valorile; numărul de zerouri este minimul celor două.",
            "Pentru numere negative lucrăm cu valoarea absolută; testul de imparitate `a[i] % 2 != 0` funcționează și pentru ele.",
            "Dacă vectorul conține un 0, produsul este 0, care se scrie cu o singură cifră 0 (enunțul nu tratează explicit cazul; am ales această convenție).",
            "Exemplu: 2 (2¹), 25 (5²), 6 (2¹), 15 (5¹), 8 (2³) → 2⁵ și 5³ → 3 zerouri; impare: 25, 7, 15, 9 → imp = 4.",
          ],
          raspuns: "Subprogramul de mai jos.",
          cod: {
            limbaj: "cpp",
            sursa: `int zero(int a[], int n, int &imp)
{
    int i, x, d2 = 0, d5 = 0;    // de câte ori apar factorii 2 și 5 în produs
    bool areZero = false;
    imp = 0;
    for (i = 0; i < n; i++)
    {
        if (a[i] % 2 != 0)       // merge și pentru numere negative
            imp++;
        if (a[i] == 0)
            areZero = true;
        else
        {
            x = a[i] < 0 ? -a[i] : a[i];
            while (x % 2 == 0) { d2++; x = x / 2; }
            while (x % 5 == 0) { d5++; x = x / 5; }
        }
    }
    if (areZero)
        return 1;                // produsul este 0, scris cu o singură cifră 0
    return d2 < d5 ? d2 : d5;    // fiecare zero final = o pereche 2·5
}`,
          },
          complexitate: "O(n · log V), unde V este cea mai mare valoare absolută; memorie O(1).",
          verificare: "Rulat pe exemplul din enunț (4 3), pe 1000 (0 3), pe valori negative și pe un vector cu 0; apoi pe 300 de vectori aleatori de până la 100 de elemente, comparați cu produsul calculat exact (întregi nelimitați) în Python.",
          greseli: [
            "Calculul produsului într-un int sau long long — depășire chiar pentru vectori scurți.",
            "Numărarea doar a factorilor 5 — corect doar când sunt suficienți factori 2.",
          ],
        },
        {
          id: "s3-2",
          eticheta: "Subiectul al III-lea, 2",
          puncte: 10,
          cerinta: "Un cuvânt e muzical dacă conține o notă din {do, re, mi, fa, sol, la, si}. Textul (cel mult 200 de caractere, litere mici, cuvinte separate prin spații și/sau virgule) se citește de la tastatură; se afișează numărul de cuvinte muzicale și cuvântul cu cele mai multe note distincte. Exemplu: „la orele de muzica fredonam doine, balade, solfegii si cantece remixate” → 8 fredonam (sau 8 remixate).",
          ceSeCere: "Împărțirea textului în cuvinte și căutarea fiecărei note în fiecare cuvânt.",
          notiuni: ["cin.getline", "strtok cu mai mulți separatori", "strstr", "strcpy"],
          pasi: [
            "Citim tot rândul cu `cin.getline` (cin >> s s-ar opri la primul spațiu).",
            "`strtok(text, \" ,\")` separă cuvintele după spații și virgule, oricâte ar fi consecutive.",
            "Pentru fiecare cuvânt numărăm notele distincte conținute: pentru fiecare dintre cele 7 note, `strstr` spune dacă apare.",
            "Cuvântul e muzical dacă numărul este cel puțin 1; reținem primul cuvânt cu numărul maxim (comparație strictă).",
            "Pe exemplu: muzicale sunt la, orele, fredonam, doine, balade, solfegii, si, remixate (8); fredonam (re, do) și remixate (re, mi) au câte 2 note, fredonam apare primul.",
          ],
          raspuns: "Programul de mai jos.",
          cod: {
            limbaj: "cpp",
            sursa: `#include <iostream>
#include <cstring>
using namespace std;
int main()
{
    char text[201], cel[201] = "", *p;
    const char note[7][4] = {"do", "re", "mi", "fa", "sol", "la", "si"};
    int nr = 0, maxim = 0, k, c;
    cin.getline(text, 201);
    p = strtok(text, " ,");
    while (p != NULL)
    {
        c = 0;                       // câte note distincte conține cuvântul p
        for (k = 0; k < 7; k++)
            if (strstr(p, note[k]) != NULL)
                c++;
        if (c > 0)
            nr++;
        if (c > maxim)
        {
            maxim = c;
            strcpy(cel, p);
        }
        p = strtok(NULL, " ,");
    }
    cout << nr;
    if (nr > 0)
        cout << ' ' << cel;
    return 0;
}`,
          },
          complexitate: "O(L · 7), unde L este lungimea textului; memorie pentru două șiruri de 201 caractere.",
          verificare: "Rulat pe exemplul din enunț (8 fredonam), pe text cu virgule și spații multiple, pe text fără cuvinte muzicale și pe 200 de texte aleatoare, comparate cu o implementare separată în Python.",
          greseli: [
            "Numărarea aparițiilor în loc de note distincte (de exemplu „rere” ar număra 2).",
            "Separarea doar după spațiu — „doine,” ar deveni un cuvânt cu virgulă.",
          ],
        },
        {
          id: "s3-3",
          eticheta: "Subiectul al III-lea, 3",
          puncte: 10,
          cerinta: "În minutul k laserul emite semnalele de culori 1, 2, …, k, deci șirul este 1 12 123 1234 … După m minute (m ≤ 10⁶, din BAC.IN), se cere culoarea celui de-al n-lea semnal (n ≤ 10⁹): „OK culoare” sau „EROARE” dacă nu a fost emis. Exemplu: m=5, n=14 → OK 4; m=5, n=24 → EROARE. Algoritm eficient în timp și memorie.",
          ceSeCere: "a) descrierea algoritmului și de ce e eficient; b) programul.",
          notiuni: ["sume 1 + 2 + … + k = k(k+1)/2", "simulare fără tablouri", "long long"],
          pasi: [
            "După k minute s-au emis s = 1 + 2 + … + k semnale. Semnalul n este emis în primul minut k pentru care s ≥ n.",
            "În acel minut, înainte de el s-au emis s − k semnale, deci semnalul n este al n − (s − k)-lea din grupul 1, 2, …, k — adică are culoarea n − (s − k).",
            "**a)** Pornim cu k = 1, s = 1 și, cât timp s < n și k < m, trecem la minutul următor (k crește, s crește cu k). Dacă la final tot s < n, semnalul nu a fost emis: EROARE; altfel afișăm OK n − (s − k). Nu memorăm șirul (memorie O(1)); bucla face cel mult min(m, √(2n) + 1) pași, adică sub 44 722 de pași pentru n ≤ 10⁹, indiferent cât de mare e m.",
            "Pe exemplu: s ia valorile 1, 3, 6, 10, 15; la k = 5, s = 15 ≥ 14, culoarea este 14 − (15 − 5) = 4.",
            "s depășește n cu cel mult k, dar folosim long long ca să nu existe nicio grijă de depășire.",
          ],
          raspuns: "Programul de mai jos (pentru m=5, n=14 afișează OK 4; pentru m=5, n=24 afișează EROARE).",
          cod: {
            limbaj: "cpp",
            sursa: `#include <fstream>
#include <iostream>
using namespace std;
int main()
{
    ifstream fin("BAC.IN");
    long long m, n, k = 1, s = 1;    // s = câte semnale s-au emis până la finalul minutului k
    fin >> m >> n;
    while (s < n && k < m)
    {
        k++;
        s = s + k;                   // în minutul k se emit k semnale
    }
    if (s < n)
        cout << "EROARE";
    else
        cout << "OK " << n - (s - k);  // poziția lui n în grupul 1 2 ... k
    fin.close();
    return 0;
}`,
          },
          complexitate: "Timp O(min(m, √n)), memorie O(1).",
          verificare: "Rulat pe cele două exemple din enunț, pe cazurile limită (ultimul semnal emis, primul neemis, m = 1), pe toate perechile cu m ≤ 30 comparate cu șirul construit efectiv în Python și pe m = 10⁶, n = 10⁹ comparat cu o formulă închisă.",
          greseli: [
            "Construirea șirului într-un tablou — pentru m = 10⁶ ar avea 5 · 10¹¹ elemente.",
            "Parcurgerea semnal cu semnal până la n — până la 10⁹ pași, ineficient.",
            "Afișarea lui k (minutul) în loc de poziția din minut.",
          ],
        },
      ],
    },
  ],
};
