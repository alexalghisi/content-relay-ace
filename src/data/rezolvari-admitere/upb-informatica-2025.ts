import type { RezolvareAdmitere } from "@/data/rezolvari-verificate/types";

const VERIFICA = "bash scripts/verificare-rezolvari/admitere-upb-informatica-2025/verifica.sh";

export const UPB_INFORMATICA_2025: RezolvareAdmitere = {
  examen: "admitere",
  universitate: "upb",
  universitateNume: "Universitatea Națională de Știință și Tehnologie POLITEHNICA București",
  materie: "informatica",
  an: 2025,
  sesiune: "iulie",
  proba: "Chestionar de concurs — Disciplina: Informatică I, Varianta S (14 iulie 2025)",
  programa:
    "Concurs de admitere UNSTPB (Politehnica București), proba de Informatică, Varianta S: 10 întrebări grilă, fiecare cu 6 variante de răspuns, cod în C/C++ și Pascal",
  varianta: null,
  specializare: "admitere",
  titlu:
    "Rezolvare admitere Politehnica București (UPB) 2025, Informatică, Varianta S — pas cu pas, cu cod testat",
  descriere:
    "Rezolvarea completă a chestionarului de admitere la Informatică de la Politehnica București, 14 iulie 2025, Varianta S: zile lucrătoare, maximul fără if, tablouri, vectorul de tați, backtracking în baza 7, combinări de perechi, structuri, căutare în matrice sortată, recursivitate și citire din fișier. Codul din subiect a fost compilat și rulat, iar fiecare răspuns a fost verificat și prin forță brută acolo unde se poate.",
  status: "publicat",
  dificultate: "mediu",
  timpMinute: 180,
  actualizat: "2026-10-23",
  punctajTotal: 90,
  documente: {
    subiect: "upb/informatica/2025-iulie-subiect.pdf",
    sursaUrl: "http://www.physics.pub.ro/Admitere/2025/Informatica_I_(Varianta_S).pdf",
    notaBarem:
      "Nu avem în arhivă un barem oficial pentru această variantă, așa că nu afișăm niciunul. Răspunsurile de mai jos sunt ale noastre, obținute prin raționament și verificate prin rularea codului; nu sunt baremul oficial.",
  },
  sursa: {
    emitent: "Universitatea Națională de Știință și Tehnologie POLITEHNICA București",
    detalii:
      "Chestionar de concurs, 14 iulie 2025, Disciplina: Informatică I, Varianta S (antetul documentului oficial).",
  },
  verificari: [
    {
      ce: "Itemii 1, 2, 3, 9: codul din subiect rulat exact cum e tipărit; la 1 numărare independentă, la 2 toate perechile a,b din [-60,60], la 9 lanțul complet de apeluri",
      metoda: "Programe C++ compilate cu g++ 13.3 (-std=c++17 -Wall) și rulate",
      comanda: VERIFICA,
      data: "2026-10-23",
      rezultat: "PASS",
    },
    {
      ce: "Itemii 4, 5, 6: frunzele din vectorul de tați, backtracking comparat cu enumerarea directă a primelor 300 de numere, forță brută pe toate mulțimile de 3 perechi",
      metoda: "Programe C++ compilate și rulate; fiecare rezultat comparat cu o a doua metodă, independentă",
      comanda: VERIFICA,
      data: "2026-10-23",
      rezultat: "PASS",
    },
    {
      ce: "Itemul 7: expresia aleasă pe un număr real și pe unul imaginar; variantele c–f respinse de compilator",
      metoda: "Tipurile din subiect compilate cu g++ (-fsyntax-only) pentru fiecare variantă",
      comanda: VERIFICA,
      data: "2026-10-23",
      rezultat: "PASS",
    },
    {
      ce: "Itemul 8: căutarea în scară, corectă pe 48 000 de interogări (matrici aleatoare n=1..40) și cu cel mult 2n−1 comparații",
      metoda: "Program C++ comparat cu căutarea completă în matrice",
      comanda: VERIFICA,
      data: "2026-10-23",
      rezultat: "PASS",
    },
    {
      ce: "Itemul 10: main.c și main.cpp din subiect compilate și rulate lângă propriile surse; la main.pas, a 7-a linie citită cu un program care imită bucla readln (compilatorul Pascal nu e instalat)",
      metoda: "gcc/g++ 13.3; ieșirea comparată caracter cu caracter",
      comanda: VERIFICA,
      data: "2026-10-23",
      rezultat: "PASS",
    },
  ],
  notaPunctaj:
    "Chestionarul are 10 întrebări grilă, fiecare notată pe subiect cu 9 puncte, deci 90 de puncte pe itemi. Fiecare întrebare are un singur răspuns corect dintre cele 6 variante. Regulile de calcul ale notei finale (eventuale puncte din oficiu, ponderea în media de admitere) nu sunt tipărite pe chestionar — verifică-le în regulamentul de admitere al facultății.",
  sectiuni: [
    {
      titlu: "Chestionar — Informatică I, Varianta S",
      puncte: 90,
      itemi: [
        {
          id: "q1",
          eticheta: "Întrebarea 1",
          puncte: 9,
          cerinta:
            "Funcția este_lucratoare(zi) întoarce adevărat dacă zi % 7 nu e nici 0, nici 6; zile_lucratoare(an) numără zilele lucrătoare din 1..an. Cât întoarce zile_lucratoare(365)? Variante: 261, 258, 262, 200, 250, 251.",
          ceSeCere: "Să numeri câte numere din 1..365 dau la împărțirea cu 7 restul 1, 2, 3, 4 sau 5.",
          notiuni: ["operatorul `%`", "numărare pe perioade", "funcții care întorc o valoare logică"],
          pasi: [
            "O zi e „lucrătoare” când restul la 7 este 1, 2, 3, 4 sau 5 — adică 5 resturi din 7.",
            "365 = 52·7 + 1, deci zilele 1..364 formează 52 de săptămâni complete, fiecare cu exact 5 zile lucrătoare: 52·5 = 260.",
            "Rămâne ziua 365, cu 365 % 7 = 1 — este lucrătoare.",
            "Total: 260 + 1 = 261.",
          ],
          raspuns: "**a** — 261",
          verificare:
            "Am rulat funcțiile din subiect: zile_lucratoare(365) = 261; o numărare separată pe resturi (r = 1..5) dă tot 261.",
          greseli: [
            "A uita ultima zi (365) și a răspunde 260 — nu e printre variante, semn că ceva lipsește.",
            "A considera și restul 6 (sau 0) ca zi lucrătoare: condiția exclude ambele resturi.",
          ],
          cod: {
            limbaj: "cpp",
            sursa:
              "int este_lucratoare(int zi) {\n  return (zi % 7 != 0 && zi % 7 != 6);\n}\n\nint zile_lucratoare(int an) {\n  int zile = 0;\n  for (int zi = 1; zi <= an; zi++) {\n    if (este_lucratoare(zi))\n      zile++;\n  }\n  return zile;\n}",
          },
        },
        {
          id: "q2",
          eticheta: "Întrebarea 2",
          puncte: 9,
          cerinta:
            "Ce valoare primește m după m=(a+b+abs(a-b))/2? Variante: maximul dintre a și b, minimul, a+b, a-b, a, b.",
          ceSeCere: "Să simplifici expresia în cele două cazuri posibile: a ≥ b și a < b.",
          notiuni: ["modulul unui număr", "împărțire întreagă", "analiză pe cazuri"],
          pasi: [
            "Dacă a ≥ b: abs(a-b) = a-b, deci m = (a+b+a-b)/2 = 2a/2 = a.",
            "Dacă a < b: abs(a-b) = b-a, deci m = (a+b+b-a)/2 = 2b/2 = b.",
            "În ambele cazuri m este cel mai mare dintre a și b. Numărătorul e mereu par (2a sau 2b), deci împărțirea întreagă nu pierde nimic.",
          ],
          raspuns: "**a** — maximul dintre a și b",
          verificare:
            "Am rulat instrucțiunea pentru toate perechile a, b din [-60, 60]: m a fost de fiecare dată egal cu maximul, iar fiecare dintre celelalte cinci variante a fost contrazisă de cel puțin o pereche.",
          greseli: [
            "Confuzia cu formula minimului, care are minus: (a+b-abs(a-b))/2.",
            "A testa o singură pereche (de ex. a=b) — acolo variantele a, b, e și f dau toate același rezultat.",
          ],
        },
        {
          id: "q3",
          eticheta: "Întrebarea 3",
          puncte: 9,
          cerinta:
            "Pentru n=6, a=(2,1,5,3,4,6), b=(1,3,5,2,4,6) se execută for(i=0;i<n;i++) a[i]=a[b[n-i-1]-1]; apoi for(i=0;i<n;i++) b[n-i-1]=b[a[i]-1];. Ce conțin a și b la final?",
          ceSeCere:
            "Să simulezi pas cu pas, ținând cont că tablourile se modifică pe loc (un element deja schimbat poate fi citit mai târziu).",
          notiuni: ["tablouri unidimensionale", "indici calculați", "modificare pe loc"],
          pasi: [
            "Prima buclă (b nu se schimbă): i=0: a[0]=a[b[5]-1]=a[5]=6 → a=(6,1,5,3,4,6).",
            "i=1: a[1]=a[b[4]-1]=a[3]=3; i=2: a[2]=a[b[3]-1]=a[1]=3 (valoarea nouă!); i=3: a[3]=a[b[2]-1]=a[4]=4.",
            "i=4: a[4]=a[b[1]-1]=a[2]=3; i=5: a[5]=a[b[0]-1]=a[0]=6. După prima buclă a=(6,3,3,4,3,6) — rămâne așa până la final.",
            "A doua buclă (b se modifică de la coadă spre început): i=0: b[5]=b[a[0]-1]=b[5]=6; i=1: b[4]=b[2]=5; i=2: b[3]=b[2]=5.",
            "i=3: b[2]=b[3]=5; i=4: b[1]=b[2]=5; i=5: b[0]=b[5]=6. Deci b=(6,5,5,5,5,6).",
          ],
          raspuns: "**a** — a=(6,3,3,4,3,6), b=(6,5,5,5,5,6)",
          verificare:
            "Am rulat exact cele două bucle din subiect pe datele din enunț; programul afișează a=(6,3,3,4,3,6) și b=(6,5,5,5,5,6).",
          greseli: [
            "A calcula toate elementele noi din valorile inițiale (ca și cum s-ar folosi o copie a tabloului) — de exemplu a[2] ar ieși 1 în loc de 3.",
            "A uita scăderea lui 1 din indice (`-1`): valorile sunt 1..6, indicii sunt 0..5.",
          ],
          cod: {
            limbaj: "cpp",
            sursa:
              "for(i=0;i<n;i++) a[i]=a[b[n-i-1]-1];\n  for(i=0;i<n;i++) b[n-i-1]=b[a[i]-1];",
          },
        },
        {
          id: "q4",
          eticheta: "Întrebarea 4",
          puncte: 9,
          cerinta:
            "Un arbore cu 9 noduri are vectorul de tați t=(0,1,1,2,1,2,2,5,5). Câte frunze are? Variante: 6, 5, 4, 3, 7, 9.",
          ceSeCere: "Să găsești nodurile care nu sunt tatăl niciunui alt nod.",
          notiuni: ["vector de tați", "rădăcină", "frunză"],
          pasi: [
            "t[1]=0, deci 1 este rădăcina.",
            "Tații care apar în vector (fără 0) sunt 1, 2 și 5: fiii lui 1 sunt 2, 3, 5; fiii lui 2 sunt 4, 6, 7; fiii lui 5 sunt 8, 9.",
            "Nodurile care nu apar ca tată sunt frunzele: 3, 4, 6, 7, 8, 9 — în total 6.",
          ],
          raspuns: "**a** — 6",
          verificare:
            "Un program care marchează fiecare t[i] ca „are fiu” găsește frunzele 3, 4, 6, 7, 8, 9 (6 frunze) și o singură rădăcină.",
          greseli: [
            "A număra valorile distincte din vector (0, 1, 2, 5) în loc de nodurile care lipsesc din el.",
            "A socoti rădăcina frunză: aici are trei fii.",
          ],
        },
        {
          id: "q5",
          eticheta: "Întrebarea 5",
          puncte: 9,
          cerinta:
            "Cu backtracking se generează în ordine crescătoare numerele naturale scrise doar cu cifrele 0–6 (primele: 0, 1, …, 6, 10, 11, 12). Care este al 256-lea număr generat? Variante: 513, 501, 555, 466, 444, 503.",
          ceSeCere:
            "Să observi că șirul este, de fapt, numărarea în baza 7 și să scrii în baza 7 poziția potrivită.",
          notiuni: ["backtracking", "baze de numerație", "ordine crescătoare"],
          pasi: [
            "Numerele cu cifre 0–6, în ordine crescătoare, sunt exact scrierile în baza 7 ale lui 0, 1, 2, 3, … (de exemplu „10” este al 8-lea număr, adică 7 scris în baza 7).",
            "Primul număr generat este 0, deci al 256-lea este scrierea în baza 7 a lui 255.",
            "255 = 5·49 + 10, iar 10 = 1·7 + 3. Deci 255 = 5·7² + 1·7 + 3, adică 513 în baza 7.",
          ],
          raspuns: "**a** — 513",
          verificare:
            "Am implementat backtracking-ul (pe lungimi, fără 0 în față) și l-am comparat cu enumerarea directă a numerelor naturale care au toate cifrele ≤ 6: primele 300 coincid, primele 10 sunt cele din enunț, iar al 256-lea este 513.",
          greseli: [
            "A converti 256 în loc de 255 (șirul începe cu 0, nu cu 1) — ar da 514, care nu e printre variante.",
            "A lucra în baza 6 pentru că cea mai mare cifră e 6: sunt 7 cifre (0–6), deci baza 7.",
          ],
        },
        {
          id: "q6",
          eticheta: "Întrebarea 6",
          puncte: 9,
          cerinta:
            "Din n=7 fete și m=5 băieți se formează k=3 perechi fată–băiat. În câte moduri? Variante: 2100, 35, 60, 210, 2880, 700.",
          ceSeCere: "Să alegi fetele, să alegi băieții și apoi să-i potrivești între ei.",
          notiuni: ["combinări", "permutări", "regula produsului"],
          pasi: [
            "Alegem cele 3 fete care dansează: C(7,3) = 35.",
            "Alegem cei 3 băieți: C(5,3) = 10.",
            "Potrivim cele 3 fete cu cei 3 băieți: 3! = 6 moduri.",
            "Total: 35 · 10 · 6 = 2100. (Echivalent: A(7,3)·C(5,3) = 210·10 = 2100.)",
          ],
          raspuns: "**a** — 2100",
          verificare:
            "Forță brută: am enumerat toate mulțimile de 3 perechi (fată, băiat) dintre cele 35 de perechi posibile și le-am păstrat doar pe cele fără fată sau băiat repetat — 2100, la fel ca formula.",
          greseli: [
            "A uita potrivirea între fete și băieți: 35·10 = 350 (nu e printre variante).",
            "A număra perechile ca fiind ordonate (prima, a doua, a treia pereche): ar ieși 2100·6 = 12600.",
          ],
        },
        {
          id: "q7",
          eticheta: "Întrebarea 7",
          puncte: 9,
          cerinta:
            "Tipul Complex are câmpurile re, im; tipul ComplexSecv are n și tabloul elemente[100] de Complex. Pentru variabila CS, ce expresie testează că primul element din secvență este număr real?",
          ceSeCere:
            "Să accesezi corect primul element din tablou (indice 0 în C/C++) și să verifici că partea imaginară e 0.",
          notiuni: ["struct / record", "tablou de structuri", "operatorul `.`", "număr complex real"],
          pasi: [
            "Un număr complex re + im·i este real exact când im = 0.",
            "Tabloul se află în câmpul elemente, deci primul element este CS.elemente[0] în C/C++ (CS.elemente[1] în Pascal, unde indicii încep de la 1).",
            "Expresia corectă: CS.elemente[0].im==0.",
            "Varianta b testează partea reală (re==0), adică dacă numărul e pur imaginar. Variantele c–f nu compilează: elemente e un tablou (nu are câmpul im fără indice), iar CS nu are câmpul im.",
          ],
          raspuns: "**a** — `CS.elemente[0].im==0` (Pascal: `CS.elemente[1].im=0`)",
          verificare:
            "Am compilat tipurile din subiect: expresia a dă adevărat pentru 5 și fals pentru 2i; varianta b dă greșit „real” pentru 2i; variantele c, d, e, f sunt respinse de compilator.",
          greseli: [
            "Confuzia între partea reală și cea imaginară: „real” înseamnă im = 0, nu re = 0.",
            "Indicele 1 în C/C++: primul element are indicele 0.",
          ],
          cod: {
            limbaj: "cpp",
            sursa:
              "typedef struct {\n    int re, im;\n} Complex;\ntypedef struct {\n    int n;\n    Complex elemente[100];\n} ComplexSecv;",
          },
        },
        {
          id: "q8",
          eticheta: "Întrebarea 8",
          puncte: 9,
          cerinta:
            "Într-o matrice n×n de numere reale, fiecare linie și fiecare coloană sunt sortate crescător. Care este complexitatea timp minimă a unui algoritm care verifică dacă un x dat apare în matrice? Variante: O(n), O(n·log n), O(n²), O(log n), O(n²·log n), O(1).",
          ceSeCere:
            "Să găsești un algoritm rapid și să argumentezi de ce nu se poate mai repede de atât.",
          notiuni: ["complexitate timp", "căutare în scară (saddleback search)", "matrice sortată"],
          pasi: [
            "Pornim din colțul dreapta-sus a[0][n-1]. Dacă e egal cu x, am terminat.",
            "Dacă a[i][j] > x, tot ce e sub el pe coloana j e și mai mare, deci eliminăm coloana: j--.",
            "Dacă a[i][j] < x, tot ce e în stânga lui pe linia i e și mai mic, deci eliminăm linia: i++.",
            "La fiecare pas dispare o linie sau o coloană, deci facem cel mult 2n−1 comparații: O(n).",
            "Mai repede nu se poate: elementele de pe diagonala secundară (i + j = n−1) nu sunt ordonate între ele de proprietatea din enunț — oricare dintre ele poate fi x — deci în cel mai rău caz trebuie privite toate cele n. Astfel O(n) este complexitatea minimă.",
          ],
          raspuns: "**a** — O(n)",
          verificare:
            "Am rulat căutarea în scară pe 48 000 de interogări (matrici aleatoare sortate pe linii și coloane, n=1..40), comparând cu căutarea completă: niciun răspuns greșit și niciodată mai mult de 2n−1 comparații. Limita inferioară (de ce nu există ceva sub O(n)) este argumentul de la pasul 5, nu un test.",
          greseli: [
            "O(log n) prin căutare binară: matricea nu e sortată „la rând” ca un singur vector, deci căutarea binară globală nu funcționează.",
            "O(n·log n), căutare binară pe fiecare linie: e corectă, dar nu e minimă.",
          ],
          cod: {
            limbaj: "cpp",
            sursa:
              "bool cauta(const std::vector<std::vector<double>>& a, int n, double x) {\n  int i = 0, j = n - 1;           // pornim din colțul dreapta-sus\n  while (i < n && j >= 0) {\n    comparatii++;\n    if (a[i][j] == x) return true;\n    if (a[i][j] > x) j--;         // tot ce e sub a[i][j] pe coloana j e și mai mare\n    else i++;                     // tot ce e în stânga lui a[i][j] pe linia i e și mai mic\n  }\n  return false;\n}",
          },
          complexitate: "O(n) timp (cel mult 2n−1 comparații), O(1) memorie suplimentară.",
        },
        {
          id: "q9",
          eticheta: "Întrebarea 9",
          puncte: 9,
          cerinta:
            "power(x,n) întoarce 1 dacă n==0, x*power(x,n/2) dacă n e par, altfel power(x,(n-1)/2). Cât este power(2,2025)? Variante: 8, 1024, 128, 4096, 16, 2048.",
          ceSeCere:
            "Să urmărești lanțul de apeluri și să numeri de câte ori se înmulțește cu x (doar la n par!).",
          notiuni: ["recursivitate", "paritate", "urmărirea apelurilor"],
          pasi: [
            "Funcția seamănă cu ridicarea rapidă la putere, dar are o greșeală: pe ramura n impar nu înmulțește cu x, iar pe ramura n par înmulțește o singură dată (nu ridică la pătrat).",
            "Lanțul: 2025 (impar) → 1012 (par, ×2) → 506 (par, ×2) → 253 (impar) → 126 (par, ×2) → 63 → 31 → 15 → 7 → 3 → 1 (toate impare) → 0, care întoarce 1.",
            "S-a înmulțit cu 2 de exact 3 ori (la 1012, 506 și 126): 2³ = 8.",
          ],
          raspuns: "**a** — 8",
          verificare:
            "Am rulat funcția exact cum e tipărită: power(2,2025) = 8. O copie instrumentată afișează lanțul 2025 1012 506 253 126 63 31 15 7 3 1 0 și numără 3 înmulțiri.",
          greseli: [
            "A presupune că funcția calculează 2^2025 (ar depăși oricum int) și a căuta o putere mare printre variante.",
            "A înmulți cu x și la pașii impari — la cele 11 apeluri cu n > 0 ar ieși 2^11 = 2048 (varianta f, capcana).",
          ],
          cod: {
            limbaj: "cpp",
            sursa:
              "int power(int x, int n) {\n    if(n==0)\n       return 1;\n    if(n%2==0)\n       return x * power(x, n/2);\n    else\n       return power(x, (n-1)/2);\n}",
          },
        },
        {
          id: "q10",
          eticheta: "Întrebarea 10",
          puncte: 9,
          cerinta:
            "Un program își deschide propriul fișier sursă și citește linii într-o buclă (5 linii în C/C++, 7 în Pascal), apoi afișează ultima linie citită. Ce afișează? Variante: int i = 0; / i := 0;, nimic, } / end., i++; / inc(i);, int main() { / begin, return 0; / writeln(sir);.",
          ceSeCere:
            "Să numeri liniile fișierului sursă, inclusiv liniile goale, și să găsești linia citită ultima.",
          notiuni: ["fișiere text", "fgets / getline / readln", "numărarea liniilor"],
          pasi: [
            "Bucla citește câte o linie la fiecare pas, deci după ea sir conține linia a 5-a (C/C++) sau a 7-a (Pascal).",
            "main.c: 1 `#include <stdio.h>`, 2 linie goală, 3 `int main() {`, 4 `FILE * file = …`, 5 `int i = 0;`.",
            "main.cpp: 1 `#include <iostream>`, 2 `#include <fstream>`, 3 `std::ifstream file(\"main.cpp\");`, 4 `int main() {`, 5 `int i = 0;`.",
            "main.pas: 1 `program Program1;`, 2 `var …`, 3 `i: Integer;`, 4 `begin`, 5 `assign(…)`, 6 `reset(f);`, 7 `i := 0;`.",
            "În toate cele trei variante se afișează linia de inițializare a lui i.",
          ],
          raspuns: "**a** — C/C++: `int i = 0;` / Pascal: `i := 0;`",
          verificare:
            "Am salvat main.c și main.cpp exact ca în subiect, le-am compilat (gcc/g++ 13.3) și le-am rulat în același director: ambele afișează „  int i = 0;”. Pentru main.pas compilatorul Pascal nu e disponibil, așa că am citit a 7-a linie a fișierului cu un program care imită bucla readln: „  i := 0;”.",
          greseli: [
            "A sări peste linia goală din main.c — ai ajunge la `char sir[128];`.",
            "A crede că programul nu afișează nimic pentru că „citește codul”: fișierul e un text obișnuit.",
          ],
          cod: {
            limbaj: "cpp",
            sursa:
              "#include <iostream>\n#include <fstream>\nstd::ifstream file(\"main.cpp\");\nint main() {\n  int i = 0;\n  char sir[128];\n  while(i < 5) {\n    file.getline(sir, 128);\n    i++;\n  }\n  file.close();\n  std::cout << sir;\n  return 0;\n}",
          },
        },
      ],
    },
  ],
};
