import type { RezolvareVerificata } from "./types";

const VERIFICA = "bash scripts/verificare-rezolvari/informatica-2026-iunie/verifica.sh";

export const INFORMATICA_2026_IUNIE: RezolvareVerificata = {
  materie: "informatica",
  an: 2026,
  sesiune: "iunie",
  proba: "Proba E. d) — Informatică, limbajul C/C++",
  programa: "Filiera teoretică, profil real, specializarea matematică-informatică / intensiv informatică; filiera vocațională, profil militar, matematică-informatică",
  varianta: 4,
  specializare: "mate-info",
  titlu: "Rezolvare BAC Informatică 2026 (iunie), mate-info, Varianta 4 — pas cu pas, cu cod C++ testat",
  descriere:
    "Rezolvarea completă a subiectului de bacalaureat la informatică, sesiunea iunie 2026, matematică-informatică, Varianta 4: grilele explicate, algoritmul cu divizori primi, șiruri de caractere, structuri, subprogramul moda, tabloul bidimensional și algoritmul eficient cu fișierul bac.txt. Fiecare program a fost compilat și rulat pe exemplele din enunț și pe cazuri limită.",
  status: "publicat",
  dificultate: "mediu",
  timpMinute: 180,
  actualizat: "2026-10-23",
  documente: {
    subiect: "informatica/2026/iunie-subiect.pdf",
    notaBarem:
      "Baremul pe care îl avem în arhivă pentru această sesiune este pentru specializarea științe ale naturii, nu pentru matematică-informatică, așa că nu îl afișăm lângă această variantă. Rezolvarea de mai jos este a noastră și nu înlocuiește baremul oficial.",
  },
  sursa: {
    emitent: "Ministerul Educației și Cercetării — Centrul Național pentru Curriculum și Evaluare",
    detalii: "Examenul național de bacalaureat 2026, Proba E. d), Informatică, limbajul C/C++, Varianta 4 (antetul documentului oficial).",
  },
  verificari: [
    {
      ce: "Grilele I.1–I.5 și itemul II.2 (calcul direct, enumerare completă, forță brută pe graf)",
      metoda: "Program C++ compilat cu g++ 13.3 (-std=c++17 -Wall) și rulat",
      comanda: VERIFICA,
      data: "2026-10-23",
      rezultat: "PASS",
    },
    {
      ce: "II.1 a–d: valoarea pentru 2600, toate numerele din [10,99] care dau 1, echivalența variantei cu do-while pe 10..99 și pe cazuri limită",
      metoda: "Două programe C++ rulate în paralel și comparate ieșire cu ieșire",
      comanda: VERIFICA,
      data: "2026-10-23",
      rezultat: "PASS",
    },
    {
      ce: "III.1, III.2, III.3: exemplele din enunț, cifre zero la final, n=0, minime egale, cel mai mare termen al șirului ≤ 10⁹ (tip long long)",
      metoda: "Programe C++ compilate și rulate; fișierul bac.txt citit și comparat cu șirul generat independent în Python",
      comanda: VERIFICA,
      data: "2026-10-23",
      rezultat: "PASS",
    },
  ],
  notaPunctaj:
    "Proba are 90 de puncte pe itemi plus 10 din oficiu: Subiectul I — 20 p (5 grile × 4 p), Subiectul al II-lea — 40 p, Subiectul al III-lea — 30 p. La barem se punctează orice rezolvare corectă, chiar dacă diferă de cea de mai jos.",
  sectiuni: [
    {
      titlu: "Subiectul I",
      puncte: 20,
      itemi: [
        {
          id: "s1-1",
          eticheta: "Subiectul I, 1",
          puncte: 4,
          cerinta: "Indicați expresia C/C++ a cărei valoare este 26: (2026-26)/100, 2026/100, (2026-26)%100, 2026%100.",
          ceSeCere: "Să calculezi fiecare expresie cu regulile împărțirii întregi din C/C++.",
          notiuni: ["împărțirea întreagă `/` între int-uri", "restul împărțirii `%`"],
          pasi: [
            "`(2026-26)/100 = 2000/100 = 20`.",
            "`2026/100 = 20` (partea fracționară se pierde la împărțirea întreagă).",
            "`(2026-26)%100 = 2000%100 = 0`.",
            "`2026%100 = 26` — restul împărțirii lui 2026 la 100 sunt ultimele două cifre.",
          ],
          raspuns: "**d** — `2026%100`",
          verificare: "Am evaluat cele patru expresii într-un program C++: 20, 20, 0, 26.",
          greseli: ["A crede că `2026/100` dă 20,26 — între int-uri rezultatul este tot int."],
        },
        {
          id: "s1-2",
          eticheta: "Subiectul I, 2",
          puncte: 4,
          cerinta: "Subprogramul f(n,m) returnează 0 dacă n≥m, altfel 1+f(n+1,m-2). Indicați f(1,10).",
          ceSeCere: "Să urmărești apelurile recursive până la condiția de oprire.",
          notiuni: ["recursivitate", "condiție de oprire"],
          pasi: [
            "f(1,10): 1<10 → 1 + f(2,8)",
            "f(2,8): 2<8 → 1 + f(3,6)",
            "f(3,6): 3<6 → 1 + f(4,4)",
            "f(4,4): 4≥4 → 0. Adunăm: 1+1+1+0 = 3.",
          ],
          raspuns: "**b** — 3",
          verificare: "Funcția a fost rulată în C++: f(1,10) = 3.",
          greseli: ["Oprirea cu un pas prea târziu (n>m în loc de n≥m) — ar da 4, care nici nu e printre variante."],
        },
        {
          id: "s1-3",
          eticheta: "Subiectul I, 3",
          puncte: 4,
          cerinta: "Backtracking pe pachete (Clisura Dunării, munte, litoral), cu mulțimile ordonate date. Ce pachet se generează imediat înainte de (Șvinița, Bușteni, Venus)?",
          ceSeCere: "Să recunoști produsul cartezian generat în ordine lexicografică și să faci un pas înapoi.",
          notiuni: ["backtracking", "produs cartezian", "ordine lexicografică"],
          pasi: [
            "Exemplul din enunț arată că ultima componentă variază cel mai repede: Venus, Neptun, Olimp; apoi se schimbă destinația de munte.",
            "(Șvinița, Bușteni, Venus) este primul pachet care începe cu Șvinița: munte = primul (Bușteni), litoral = primul (Venus).",
            "Deci înaintea lui vine ultimul pachet care începe cu destinația precedentă, Eșelnița: munte = ultimul (Predeal), litoral = ultimul (Olimp).",
          ],
          raspuns: "**b** — (Eșelnița, Predeal, Olimp)",
          verificare: "Am generat toate cele 27 de pachete în ordine și am citit elementul dinaintea lui (Șvinița, Bușteni, Venus).",
          greseli: ["Alegerea unui pachet care începe cu Șvinița — toate acestea vin după (Șvinița, Bușteni, Venus)."],
        },
        {
          id: "s1-4",
          eticheta: "Subiectul I, 4",
          puncte: 4,
          cerinta: "Graf orientat cu 4 vârfuri, dat prin matricea de adiacență (linii: 0110 / 1010 / 0001 / 1100). Indicați un circuit elementar.",
          ceSeCere: "Un drum închis, pe arce existente, în care vârfurile nu se repetă (în afară de primul = ultimul).",
          notiuni: ["matrice de adiacență în graf orientat", "circuit elementar"],
          pasi: [
            "Din matrice, arcele sunt: 1→2, 1→3, 2→1, 2→3, 3→4, 4→1, 4→2.",
            "a) 1,2,1,3,4,1 repetă vârful 1 la mijloc — nu e elementar.",
            "b) 1,2,3,4 nu se întoarce în 1 — nu e circuit.",
            "c) 1→3, 3→4, 4→2, 2→1 — toate arcele există și vârfurile sunt distincte.",
            "d) folosește arcul 1→4, care nu există (a[1][4] = 0).",
          ],
          raspuns: "**c** — 1, 3, 4, 2, 1",
          verificare: "Am testat fiecare variantă pe matrice: doar c are toate arcele și vârfurile distincte.",
          greseli: ["Citirea matricei pe coloane: la graf orientat, a[i][j] = 1 înseamnă arcul i→j."],
        },
        {
          id: "s1-5",
          eticheta: "Subiectul I, 5",
          puncte: 4,
          cerinta: "Graf neorientat cu 12 noduri și 16 muchii (date în enunț). Numărul minim de muchii de eliminat ca să rămână 3 componente conexe a câte 4 noduri.",
          ceSeCere: "Să împarți nodurile în trei grupe conexe de câte 4, tăind cât mai puține muchii între grupe.",
          notiuni: ["componentă conexă", "graf parțial", "muchie critică (punte)"],
          pasi: [
            "Muchiile care rămân sunt doar cele din interiorul grupelor; vrem să păstrăm cât mai multe dintre cele 16, adică să tăiem cât mai puține muchii dintre grupe.",
            "Partea din dreapta are forma triunghi 7–8–9, muchia 9–10, triunghi 10–11–12. Grupa {9,10,11,12} este conexă (9–10, 10–11, 10–12, 11–12).",
            "Rămân nodurile 1…8: grupele {1,2,3,4} (1–2, 1–3, 2–3, 2–4) și {5,6,7,8} (5–6, 6–7, 7–8) sunt amândouă conexe.",
            "Muchii tăiate: 3–5, 4–5, 4–6 între primele două grupe și 7–9, 8–9 spre a treia: 5 muchii.",
            "Nicio altă împărțire în trei grupe conexe de câte 4 noduri nu taie mai puțin de 5 muchii — am verificat toate împărțirile posibile (vezi verificarea).",
          ],
          raspuns: "**c** — 5 muchii",
          verificare: "Forță brută în C++ peste toate cele 3¹² colorări ale nodurilor: păstrăm doar împărțirile în 3 grupe de câte 4, fiecare conexă, și numărăm muchiile dintre grupe. Minimul obținut este 5.",
          greseli: ["A număra doar muchiile „evidente” (6–7 și 9–10) — rezultă componente de 6, nu de 4 noduri."],
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
          cerinta: "Pseudocodul împarte repetat n la d (d = 2, 3, …, cât timp d·d ≤ n) și numără divizorii d care l-au împărțit; la final, dacă n ≠ 1 mai adaugă 1. Ce se afișează pentru n = 2600?",
          ceSeCere: "Să rulezi algoritmul de mână și să recunoști ce numără.",
          notiuni: ["descompunere în factori primi", "variabilă-indicator (p = 0/1)"],
          pasi: [
            "Algoritmul numără **factorii primi distincți** ai lui n: p devine 1 o singură dată pentru fiecare d care divide n, oricâte împărțiri ar face.",
            "d=2: 2600 → 1300 → 650 → 325, p=1, nr=1.",
            "d=3, d=4: nu divid 325, p=0.",
            "d=5: 325 → 65 → 13, p=1, nr=2.",
            "d=6: 6·6 = 36 > 13, ieșim din buclă. n = 13 ≠ 1, deci nr = 3.",
          ],
          raspuns: "Se afișează **3** (2600 = 2³ · 5² · 13).",
          verificare: "Programul C++ de la punctul c, rulat cu intrarea 2600, afișează 3.",
          greseli: ["Uitarea ultimului pas `dacă n≠1` — factorul prim 13 > √325 rămâne în n după buclă."],
        },
        {
          id: "s2-1b",
          eticheta: "Subiectul al II-lea, 1b",
          puncte: 6,
          cerinta: "Scrieți două numere din [10,99] pentru care se afișează 1.",
          ceSeCere: "Numere cu un singur factor prim distinct.",
          notiuni: ["puteri ale unui număr prim"],
          pasi: [
            "Se afișează 1 exact când n are un singur factor prim, adică n = xᵏ cu x prim și k ≥ 1.",
            "Exemple: 16 = 2⁴ și 27 = 3³ (merg și numere prime, de exemplu 11 sau 97).",
          ],
          raspuns: "De exemplu **16** și **27**.",
          verificare: "Am rulat algoritmul pentru toate numerele 10..99: cele care dau 1 sunt exact numerele prime și puterile de prime (11, 13, 16, 17, 19, 23, 25, 27, 29, 31, 32, …, 81, 83, 89, 97).",
          greseli: ["Alegerea unui număr ca 12 = 2²·3 — are doi factori primi, se afișează 2."],
        },
        {
          id: "s2-1c",
          eticheta: "Subiectul al II-lea, 1c",
          puncte: 10,
          cerinta: "Scrieți programul C/C++ corespunzător algoritmului dat.",
          ceSeCere: "Transcriere fidelă: citire, două bucle while, decizie finală, afișare.",
          notiuni: ["while", "operatorii / și % pe int"],
          pasi: [
            "Declarăm n, nr, d, p ca int și inițializăm nr = 0, d = 2.",
            "`[n/d]` devine `n / d` (împărțire întreagă), `cât timp` devine `while`.",
          ],
          raspuns: "Programul de mai jos.",
          cod: {
            limbaj: "cpp",
            sursa: `#include <iostream>
using namespace std;
int main()
{
    int n, nr = 0, d = 2, p;
    cin >> n;
    while (d * d <= n)
    {
        p = 0;
        while (n % d == 0)
        {
            p = 1;
            n = n / d;
        }
        nr = nr + p;
        d = d + 1;
    }
    if (n != 1)
        nr = nr + 1;
    cout << nr;
    return 0;
}`,
          },
          complexitate: "O(√n) pași pentru bucla exterioară.",
          verificare: "Compilat fără avertismente (g++ -Wall) și rulat: 2600 → 3.",
          greseli: ["`d*d<=n` scris ca `d<=n` — rezultatul rămâne corect, dar algoritmul nu mai este cel dat."],
        },
        {
          id: "s2-1d",
          eticheta: "Subiectul al II-lea, 1d",
          puncte: 6,
          cerinta: "Scrieți în pseudocod un algoritm echivalent, înlocuind a doua structură cât timp...execută cu o structură repetitivă cu test final.",
          ceSeCere: "O buclă repetă...până când care să nu se execute deloc atunci când d nu divide n.",
          notiuni: ["structură cu test final", "echivalența buclelor"],
          pasi: [
            "Bucla cu test final se execută cel puțin o dată, deci o protejăm cu un `dacă n%d=0 atunci`.",
            "Condiția de oprire a lui `repetă … până când` este negația condiției de continuare: `până când n%d≠0`.",
          ],
          raspuns: "Algoritmul echivalent de mai jos.",
          cod: {
            limbaj: "pseudocod",
            sursa: `citește n (număr natural nenul)
nr ← 0; d ← 2
┌cât timp d*d ≤ n execută
│ p ← 0
│ ┌dacă n%d = 0 atunci
│ │ ┌repetă
│ │ │ p ← 1; n ← [n/d]
│ │ └până când n%d ≠ 0
│ └■
│ nr ← nr+p; d ← d+1
└■
┌dacă n ≠ 1 atunci
│ nr ← nr+1
└■
scrie nr`,
          },
          verificare: "Varianta cu do-while din C++ a dat aceeași ieșire ca programul original pentru toate n = 10..99 și pentru 1, 2, 97, 10⁶ și 999999937.",
          greseli: ["Bucla fără `dacă` în față: pentru d care nu divide n, s-ar face o împărțire greșită și p ar deveni 1."],
        },
        {
          id: "s2-2",
          eticheta: "Subiectul al II-lea, 2",
          puncte: 6,
          cerinta: "s = \"anatoliana\", t = \"ana\". Ce afișează: strlen(s); DA/NU dacă strstr(s,t)==s; DA/NU dacă strcmp(strstr(s+1,t),t)==0?",
          ceSeCere: "Să știi ce întorc strlen, strstr și strcmp.",
          notiuni: ["strlen", "strstr întoarce adresa primei apariții sau NULL", "strcmp întoarce 0 la egalitate"],
          pasi: [
            "strlen(\"anatoliana\") = 10.",
            "strstr(s,t) găsește \"ana\" chiar la începutul lui s, deci întoarce adresa s → **DA**.",
            "s+1 = \"natoliana\"; prima apariție a lui \"ana\" este la finalul cuvântului; de acolo șirul este exact \"ana\", deci strcmp(…,\"ana\") = 0 → **DA**.",
          ],
          raspuns: "Se afișează **10 DA DA**.",
          verificare: "Secvența a fost rulată în C++ și a afișat „10 DA DA”.",
          greseli: ["A crede că strstr(s+1,t) întoarce o poziție (număr) — întoarce un pointer, iar comparația se face pe șirul care începe acolo."],
        },
        {
          id: "s2-3",
          eticheta: "Subiectul al II-lea, 3",
          puncte: 6,
          cerinta: "Definiți structura cu eticheta observator și variabila s astfel încât s.numar, s.stea[0].magnitudine și s.stea[0].distanta să aibă sens (cel mult 200 de stele).",
          ceSeCere: "O structură care conține un întreg și un tablou de structuri.",
          notiuni: ["struct", "tablou de structuri", "tipuri: int pentru distanțe până la 10⁶, float pentru magnitudine"],
          pasi: [
            "numar este natural din [10,200] → int.",
            "Fiecare stea are magnitudine (real) și distanță (natural ≤ 10⁶) → o structură internă; păstrăm 200 de elemente.",
          ],
          raspuns: "Definiția de mai jos.",
          cod: {
            limbaj: "cpp",
            sursa: `struct observator
{
    int numar;
    struct
    {
        float magnitudine;
        int distanta;
    } stea[200];
} s;`,
          },
          verificare: "Definiția a fost compilată și folosită exact cu expresiile din enunț.",
          greseli: ["Declararea tabloului `stea` în afara structurii — atunci `s.stea[0]` nu mai există."],
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
          cerinta: "Subprogramul moda(n, pc): n ∈ [0, 10⁹] are cifrele modelelor (impar = rochie, par = costum, există cel puțin un costum); pc = numărul de ordine, de la stânga, al primului costum. Exemplu: 576798 și 5700 → pc = 3.",
          ceSeCere: "Poziția, numărată de la stânga, a primei cifre pare.",
          notiuni: ["parcurgerea cifrelor cu %10 și /10", "transmitere prin referință"],
          pasi: [
            "Cifrele se extrag de la dreapta la stânga. Dacă reținem poziția **ultimei** cifre pare întâlnite, obținem prima cifră pară de la stânga.",
            "Numărăm cifrele (k) în aceeași parcurgere; poziția de la stânga este k − poz + 1.",
            "Folosim do…while ca să tratăm și n = 0, care are o cifră (0, costum) → pc = 1.",
            "Pentru 5700: de la dreapta, 0 (poz=1), 0 (poz=2), 7, 5 → k = 4, pc = 4 − 2 + 1 = 3.",
          ],
          raspuns: "Subprogramul de mai jos.",
          cod: {
            limbaj: "cpp",
            sursa: `void moda(int n, int &pc)
{
    int poz = 0, k = 0;          // k = poziția cifrei curente, numărată de la dreapta
    do
    {
        k++;
        if (n % 10 % 2 == 0)     // cifră pară = costum
            poz = k;             // ultimul găsit de la dreapta = primul de la stânga
        n = n / 10;
    } while (n != 0);
    pc = k - poz + 1;            // k = numărul de cifre
}`,
          },
          complexitate: "O(numărul de cifre) ≤ 10 pași, memorie O(1).",
          verificare: "Rulat pe 576798 → 3, 5700 → 3, 0 → 1, 8 → 1, 1000000000 → 2, 135792 → 6.",
          greseli: [
            "Oprirea la prima cifră pară găsită de la dreapta — pentru 576798 ar da poziția lui 8, nu a lui 6.",
            "Bucla while (n != 0) — pentru n = 0 nu intră deloc și pc ar fi greșit.",
          ],
        },
        {
          id: "s3-2",
          eticheta: "Subiectul al III-lea, 2",
          puncte: 10,
          cerinta: "Matrice m×n (2 ≤ m,n ≤ 50, valori ≤ 10²). Pentru fiecare coloană, minimul se interschimbă cu primul element al coloanei dacă e par, altfel cu ultimul. Se afișează matricea.",
          ceSeCere: "Pe fiecare coloană: poziția unui minim, paritatea lui, o interschimbare.",
          notiuni: ["parcurgere pe coloane", "minim și poziția lui", "interschimbare cu variabilă auxiliară"],
          pasi: [
            "Pentru coloana j căutăm linia imin a unui minim (primul găsit).",
            "Dacă minimul e par, ținta este linia 0; altfel linia m−1.",
            "Interschimbăm a[imin][j] cu a[țintă][j] (dacă sunt aceeași poziție, nu se schimbă nimic).",
            "Pe exemplul din enunț, coloana 1 (7,1,2,5): minimul 1 e impar → se schimbă cu 5 → 7,5,2,1, exact ca în tabloul rezultat.",
          ],
          raspuns: "Programul de mai jos.",
          cod: {
            limbaj: "cpp",
            sursa: `#include <iostream>
using namespace std;
int main()
{
    int m, n, a[50][50], i, j, imin, aux;
    cin >> m >> n;
    for (i = 0; i < m; i++)
        for (j = 0; j < n; j++)
            cin >> a[i][j];
    for (j = 0; j < n; j++)
    {
        imin = 0;
        for (i = 1; i < m; i++)
            if (a[i][j] < a[imin][j])
                imin = i;
        if (a[imin][j] % 2 == 0)
            i = 0;           // minim par: schimbăm cu primul element al coloanei
        else
            i = m - 1;       // minim impar: schimbăm cu ultimul element al coloanei
        aux = a[imin][j]; a[imin][j] = a[i][j]; a[i][j] = aux;
    }
    for (i = 0; i < m; i++)
    {
        for (j = 0; j < n; j++)
            cout << a[i][j] << ' ';
        cout << '\\n';
    }
    return 0;
}`,
          },
          complexitate: "O(m·n) timp, memorie doar pentru tablou.",
          verificare: "Rulat pe exemplul din enunț: rezultatul coincide linie cu linie cu tabloul din enunț. Rulat și pe o matrice cu toate valorile egale (rămâne neschimbată).",
          greseli: ["Căutarea minimului pe linii în loc de coloane.", "Interschimbarea cu a[0][0] / a[m-1][n-1] în loc de elementul de pe aceeași coloană."],
        },
        {
          id: "s3-3",
          eticheta: "Subiectul al III-lea, 3",
          puncte: 10,
          cerinta: "Șirul 0, 3, 9, 21, 45, … are termenul următor = precedentul + 2·|diferența ultimilor doi|. Se citesc ultimul și penultimul termen (≤ 10⁹); în bac.txt se scriu toți termenii, descrescător. Algoritm eficient în timp și memorie.",
          ceSeCere: "a) descrierea algoritmului și de ce e eficient; b) programul.",
          notiuni: ["relații de recurență", "parcurgere înapoi a unui șir", "eficiență: fără tablouri"],
          pasi: [
            "Șirul este crescător, deci |diferența| = y − z, unde x = ultimul, y = penultimul, z = antepenultimul: x = y + 2(y − z).",
            "De aici z = (3y − x) / 2. Știind doi termeni consecutivi îl aflăm pe cel dinainte — mergem înapoi.",
            "**a)** Scriem x și y; cât timp y ≠ 0, calculăm z = (3y − x)/2, îl scriem, apoi x ← y, y ← z. Ne oprim după ce am scris 0, primul termen. Folosim doar trei variabile (memorie O(1)), iar diferențele se dublează la fiecare pas, deci numărul de pași e logaritmic în valoarea citită: cel mult ~30 de pași pentru 10⁹.",
            "3y poate depăși 2³¹ − 1 când y ≈ 10⁹, de aceea folosim long long.",
          ],
          raspuns: "Programul de mai jos (pentru 189 93 scrie: 189 93 45 21 9 3 0).",
          cod: {
            limbaj: "cpp",
            sursa: `#include <fstream>
#include <iostream>
using namespace std;
int main()
{
    long long x, y, z;           // x = ultima lună, y = penultima lună
    cin >> x >> y;
    ofstream fout("bac.txt");
    fout << x << ' ' << y;
    while (y != 0)
    {
        // din x = y + 2*(y - z)  =>  z = (3*y - x) / 2
        z = (3 * y - x) / 2;
        fout << ' ' << z;
        x = y;
        y = z;
    }
    fout.close();
    return 0;
}`,
          },
          complexitate: "Timp O(log x), memorie O(1).",
          verificare: "Rulat pe exemplul din enunț (189 93), pe cazul cu doar două luni (3 0) și pe cel mai mare termen al șirului care nu depășește 10⁹; conținutul lui bac.txt a coincis cu șirul generat independent în Python.",
          greseli: [
            "Memorarea întregului șir într-un tablou — nu e necesar și pierde punctul de eficiență.",
            "Calculul 3*y în int: depășire pentru valori apropiate de 10⁹.",
          ],
        },
      ],
    },
  ],
};
