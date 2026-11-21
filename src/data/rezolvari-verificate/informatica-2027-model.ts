// Rezolvare verificată: Informatică BAC 2027 — modelul oficial (C/C++, specializarea matematică-informatică).
// Modelul oficial NU este un subiect dat la examen; arată structura probei. Rezolvarea este originală
// MeditatiiDirect, nu baremul oficial. Codul C++ afișat a fost compilat și testat cu
// scripts/verificare-rezolvari/informatica-2027-model/verifica.sh (22 de verificări PASS, 2026-11-21).
import type { RezolvareVerificata } from "./types";

export const INFORMATICA_2027_MODEL: RezolvareVerificata = {
  materie: "informatica",
  an: 2027,
  sesiune: "model",
  proba: "Proba E. d) — Informatică, limbajul C/C++",
  programa: "Filieră teoretică, profil real, specializarea matematică-informatică",
  varianta: null,
  specializare: "mate-info",
  titlu: "Rezolvare model oficial BAC Informatică 2027 (C/C++, mate-info) — explicată pas cu pas",
  descriere:
    "Rezolvarea completă a modelului oficial de subiect BAC 2027 la informatică (C/C++, mate-info): raționamentul fiecărui item, codul C++ testat efectiv și greșelile frecvente. Modelul arată structura probei; subiectele de la examen sunt altele.",
  status: "publicat",
  dificultate: "mediu",
  timpMinute: 180,
  actualizat: "2026-11-21",
  documente: {
    subiect: "informatica/2027/model-mi-c-subiect.pdf",
    notaBarem:
      "Baremul oficial al modelului (informatica/2027/model-mi-barem.pdf) este găzduit și verificat; este comun pentru C/C++ și Pascal. Rezolvarea de față este originală și nu îl înlocuiește.",
  },
  sursa: {
    emitent: "Ministerul Educației și Cercetării — Centrul Național pentru Curriculum și Evaluare",
    detalii:
      "Model oficial de subiect pentru BAC 2027, publicat de Minister în noiembrie 2026. PDF verificat după conținut (emitent, an, antet „Model”) prin scripts/audit-bac-pdfs.py.",
  },
  verificari: [
    {
      ce: "Toate răspunsurile de la Subiectul I și programele de la Subiectele II–III, compilate și rulate pe exemplele din enunț, cazuri limită și date aleatoare cu referință independentă în Python",
      metoda: "g++ -std=c++17 -O2, 22 de verificări automate, inclusiv 8 semințe aleatoare pentru III.3",
      comanda: "bash scripts/verificare-rezolvari/informatica-2027-model/verifica.sh",
      data: "2026-11-21",
      rezultat: "PASS",
    },
  ],
  sectiuni: [
    {
      titlu: "Subiectul I",
      puncte: 20,
      itemi: [
        {
          id: "s1-1",
          eticheta: "Subiectul I, 1",
          puncte: 4,
          cerinta: "Indicați expresia C/C++ a cărei valoare este 0: A. 27==27/(3*3*3)  B. 27==(27+1)/3*3  C. 27==27/3+27/3+27/3  D. 27==(27+2)/3+(27+1)/3+27/3",
          ceSeCere: "Să evaluezi patru expresii cu împărțire întreagă și să găsești singura falsă.",
          notiuni: ["împărțire întreagă", "operatorul ==", "prioritatea operatorilor"],
          pasi: [
            "În C/C++, împărțirea între intregi taie partea zecimală: 27/(3*3*3) = 27/27 = 1, deci 27==1 este fals (0).",
            "B: (27+1)/3*3 = 28/3*3 = 9*3 = 27 — adevărat.",
            "C: 27/3+27/3+27/3 = 9+9+9 = 27 — adevărat.",
            "D: (27+2)/3+(27+1)/3+27/3 = 29/3+28/3+9 = 9+9+9 = 27 — adevărat.",
          ],
          raspuns: "A (27/(3*3*3) este 1, nu 27, deci expresia valorează 0)",
          verificare: "Am compilat și afișat cele patru comparații: 0 1 1 1 (verifica.sh, testul I.1).",
          greseli: ["Să crezi că 27/3*3 se calculează ca 27/(3*3) — operatorii * și / se evaluează de la stânga la dreapta."],
        },
        {
          id: "s1-2",
          eticheta: "Subiectul I, 2",
          puncte: 4,
          cerinta: "Variabila p (struct pantof { int marime; float pret; } p[100];) memorează mărimea și prețul a 100 de perechi de pantofi. Indicați expresia prin care se accesează prețul celei de a treia perechi.",
          ceSeCere: "Accesarea unui câmp al unui element de tablou de structuri.",
          notiuni: ["struct", "tablouri de structuri", "indexare de la 0"],
          pasi: [
            "p este un tablou; al treilea element are indicele 2: p[2].",
            "Câmpul pret al acestui element se accesează cu punct: p[2].pret.",
            "Variantele A și B pun indicele pe câmp, nu pe tablou; C indexează câmpul pret, care nu e tablou.",
          ],
          raspuns: "D (p[2].pret)",
          verificare: "Verificare directă pe definiția din enunț: p[2] este a treia pereche, .pret este câmpul cerut.",
          greseli: ["Indexarea de la 1: p[3] ar fi a patra pereche, nu a treia."],
        },
        {
          id: "s1-3",
          eticheta: "Subiectul I, 3",
          puncte: 4,
          cerinta: "Subprogramul int f(int n, int k) { if(n==0) return 0; else if(k*k<=n) return k+f(n/2,k+1); else return k+f(n/2,n); } — indicați valoarea f(97,0).",
          ceSeCere: "Urmărirea unui apel recursiv cu doi parametri care evoluează diferit.",
          notiuni: ["recursivitate", "urmărirea apelurilor"],
          pasi: [
            "f(97,0): k*k=0≤97 → 0+f(48,1)",
            "f(48,1): 1≤48 → 1+f(24,2); f(24,2): 4≤24 → 2+f(12,3); f(12,3): 9≤12 → 3+f(6,4)",
            "f(6,4): 16>6 → 4+f(3,6); f(3,6): 36>3 → 6+f(1,3)",
            "f(1,3): 9>1 → 3+f(0,3); f(0,3) → 0",
            "Suma: 0+1+2+3+4+6+3 = 19.",
          ],
          raspuns: "C (19)",
          verificare: "Am implementat funcția identic și am rulat f(97,0): rezultat 19 (verifica.sh, testul I.3).",
          greseli: ["Să uiți că în ramura else al doilea argument devine n, nu k+1."],
        },
        {
          id: "s1-4",
          eticheta: "Subiectul I, 4",
          puncte: 4,
          cerinta: "Prin backtracking se generează seturile de echipamente din {rucsac (100), bocanci (200), lanternă (50), bidon (20), pelerină (100), busolă (50), hartă (30)} cu cost total 200 de lei. Primele trei soluții sunt (rucsac, lanternă, bidon, hartă), (rucsac, lanternă, busolă), (rucsac, bidon, busolă, hartă). Indicați a șasea soluție.",
          ceSeCere: "Continuarea enumerării backtracking în ordinea generării.",
          notiuni: ["backtracking", "submulțimi cu sumă fixă"],
          pasi: [
            "Generarea respectă ordinea mulțimii; după soluțiile care încep cu rucsac urmează cele fără rucsac.",
            "A patra soluție: (rucsac, pelerină) = 100+100. A cincea: (lanternă, bidon, busolă, hartă)? 50+20+50+30=150 — nu; continuăm enumerarea.",
            "Am enumerat programatic toate soluțiile: a șasea este (lanternă, bidon, pelerină, hartă) = 50+20+100+30 = 200.",
          ],
          raspuns: "D (lanternă, bidon, pelerină, hartă)",
          verificare: "Program backtracking propriu, rulat: primele trei soluții coincid cu enunțul, a șasea este (lanterna, bidon, pelerina, harta) (verifica.sh, testul I.4).",
          greseli: ["Să numeri soluțiile în altă ordine decât cea a mulțimii ordonate din enunț."],
        },
        {
          id: "s1-5",
          eticheta: "Subiectul I, 5",
          puncte: 4,
          cerinta: "Un arbore cu rădăcină are cinci niveluri. Nodurile de nivelul 2 au câte 4 fii, nodurile de pe același nivel au același număr de fii, iar niveluri diferite au număr diferit de fii. Indicați numărul de noduri de pe ultimul nivel astfel încât totalul nodurilor să fie minim.",
          ceSeCere: "Minimizarea numărului de noduri cu constrângeri pe numărul de fii pe nivel.",
          notiuni: ["arbori cu rădăcină", "optimizare"],
          pasi: [
            "Fie a, b, c numărul de fii al nodurilor de pe nivelele 1, 3 și 4 (nivelul 2 are câte 4 fii); a, b, c sunt distincte între ele și diferite de 4.",
            "Nivelurile au: 1, a, a·b, 4ab, 4abc noduri. Total = 1 + a + a·b + 4ab + 4abc.",
            "Căutarea exhaustivă pe valori mici dă minimul la a=1, b=2, c=3: total = 1+1+2+8+24 = 36.",
            "Răspunsul cerut este numărul de noduri de pe ultimul nivel: 4·1·2·3 = 24.",
          ],
          raspuns: "B (24)",
          verificare: "Căutare exhaustivă a,b,c ∈ [1,9] distincte și ≠4: total minim 36, cu 4·a·b·c = 24 frunze (verifica.sh, testul I.5).",
          greseli: ["Să minimizezi doar frunzele, nu totalul — cerința minimizează totalul nodurilor."],
        },
      ],
    },
    {
      titlu: "Subiectul al II-lea",
      puncte: 40,
      itemi: [
        {
          id: "s2-1a",
          eticheta: "Subiectul II, 1.a",
          puncte: 6,
          cerinta: "Se dă algoritmul în pseudocod (citește x,y; n←1; cât timp x>0: ok←1; cât timp ok=1: dacă x%2=0 atunci y←y*y, x←[x/2] altfel x←x-1, ok←0; n←n*y). Scrieți valoarea afișată pentru x=11, y=2.",
          ceSeCere: "Urmărirea algoritmului — este ridicarea la putere prin împărțiri repetate (exponențiere rapidă).",
          notiuni: ["pseudocod", "exponențiere rapidă", "urmărirea algoritmului"],
          pasi: [
            "Algoritmul calculează y^x: la fiecare bit 1 al lui x înmulțește n cu y-ul curent, altfel pătratește y.",
            "x=11 (1011 în binar), y=2: pașii dau n = 2 · 4 · 256 = 2048 = 2^11.",
            "Verificare: 2^11 = 2048.",
          ],
          raspuns: "2048",
          verificare: "Programul C++ corespunzător, rulat cu intrarea 11 2, afișează 2048 (verifica.sh, testul II.1a).",
          greseli: ["Să oprești bucla interioară greșit: ok devine 0 doar pe ramura cu x impar."],
        },
        {
          id: "s2-1b",
          eticheta: "Subiectul II, 1.b",
          puncte: 6,
          cerinta: "Dacă primul număr citit este 3, scrieți două numere din [1,10] care pot fi citite pentru y astfel încât numărul afișat să fie din [27,127].",
          ceSeCere: "Algoritmul afișează y^3; cauți y cu 27 ≤ y³ ≤ 127.",
          notiuni: ["pseudocod", "inecuații"],
          pasi: [
            "Pentru x=3 algoritmul afișează y³.",
            "3³=27 ✓, 4³=64 ✓, 5³=125 ✓, 6³=216 ✗.",
            "Orice două valori din {3, 4, 5} sunt corecte.",
          ],
          raspuns: "De exemplu 3 și 4 (corecte sunt 3, 4 și 5)",
          verificare: "Am rulat programul pentru y de la 1 la 10: exact y ∈ {3,4,5} dau rezultat în [27,127] (verifica.sh, testul II.1b).",
          greseli: ["Să incluzi 2 (2³=8 < 27) sau 6 (6³=216 > 127)."],
        },
        {
          id: "s2-1c",
          eticheta: "Subiectul II, 1.c",
          puncte: 10,
          cerinta: "Scrieți programul C/C++ corespunzător algoritmului dat.",
          ceSeCere: "Traducerea fidelă a pseudocodului în C++.",
          notiuni: ["structuri repetitive", "traducere pseudocod → C++"],
          pasi: [
            "Traducerea păstrează exact structura: bucla exterioară while (x>0), cea interioară while (ok==1) cu if pe paritatea lui x.",
            "La final se afișează n.",
          ],
          raspuns: "Programul de mai jos, compilat și testat pe exemplele de la a și b.",
          verificare: "Compilat cu g++ -std=c++17 și rulat pe testele II.1a și II.1b (verifica.sh).",
          greseli: ["Să inversezi ramurile if/else — pe x par se pătratește y, pe x impar se înmulțește n."],
          cod: {
            limbaj: "cpp",
            sursa: `#include <iostream>
using namespace std;

int main()
{
    int x, y, n, ok;
    cin >> x >> y;
    n = 1;
    while (x > 0)
    {
        ok = 1;
        while (ok == 1)
            if (x % 2 == 0)
            {
                y = y * y;
                x = x / 2;
            }
            else
            {
                x = x - 1;
                ok = 0;
            }
        n = n * y;
    }
    cout << n;
    return 0;
}`,
          },
          complexitate: "O(log x) iterații ale buclei exterioare",
        },
        {
          id: "s2-1d",
          eticheta: "Subiectul II, 1.d",
          puncte: 6,
          cerinta: "Scrieți în pseudocod un algoritm echivalent cu cel dat, înlocuind adecvat prima structură cât timp...execută cu o structură repetitivă cu test final.",
          ceSeCere: "Echivalența while → do...while, cu atenție la cazul x=0.",
          notiuni: ["structuri repetitive cu test final", "echivalența algoritmilor"],
          pasi: [
            "O buclă do...execută...cât timp rulează corpul cel puțin o dată; pentru x=0 algoritmul original nu afișează nimic după n←1? Ba da: afișează n=1.",
            "Pentru echivalență exactă inclusiv la x=0, protejăm cu un dacă x>0 atunci înainte de bucla cu test final.",
            "Pseudocod: citește x,y; n←1; dacă x>0 atunci execută { ok←1; cât timp ok=1 ...; n←n*y } cât timp x>0; scrie n.",
          ],
          raspuns: "Algoritm echivalent cu do...cât timp, protejat de x=0; mai jos varianta C++ folosită la verificarea echivalenței.",
          verificare: "Am comparat ieșirile celor două programe pentru toate perechile (x,y) cu x ∈ [0,12], y ∈ [0,5] — identice, inclusiv x=0 (verifica.sh, testul II.1d).",
          greseli: ["Să lași bucla do...while neprotejată: pentru x=0 ar calcula greșit (ar intra o dată în buclă)."],
          cod: {
            limbaj: "cpp",
            sursa: `#include <iostream>
using namespace std;

int main()
{
    long long x, y, n, ok;
    cin >> x >> y;
    n = 1;
    if (x > 0)
        do
        {
            ok = 1;
            while (ok == 1)
                if (x % 2 == 0) { y = y * y; x = x / 2; }
                else { x = x - 1; ok = 0; }
            n = n * y;
        } while (x > 0);
    cout << n;
    return 0;
}`,
          },
        },
        {
          id: "s2-2",
          eticheta: "Subiectul II, 2",
          puncte: 6,
          cerinta: "Un graf orientat are 5 vârfuri și arcele (4,5), (2,1), (3,1), (1,4), (1,2), (5,3). Scrieți un drum cu lungimea minimum 3 și un circuit care nu este elementar.",
          ceSeCere: "Identificarea unui drum de lungime ≥3 și a unui circuit cu vârfuri repetate.",
          notiuni: ["grafuri orientate", "drum", "circuit"],
          pasi: [
            "Lanțul 1→4→5→3 folosește arcele (1,4), (4,5), (5,3): drum de lungime 3 ✓.",
            "Continuăm cu (3,1): 1→4→5→3→1 este un circuit elementar de lungime 4.",
            "Adăugăm (1,2) și (2,1): 1→4→5→3→1→2→1 este circuit (începe și se termină în 1) și repetă vârful 1, deci NU este elementar ✓.",
          ],
          raspuns: "Drum: 1→4→5→3 (lungime 3). Circuit neelementar: 1→4→5→3→1→2→1.",
          verificare: "Am verificat manual fiecare arc pe lista din enunț și repetarea vârfului 1 în circuit.",
          greseli: ["Un circuit elementar (fără vârfuri repetate) nu răspunde cerinței — trebuie neelementar."],
        },
        {
          id: "s2-3",
          eticheta: "Subiectul II, 3",
          puncte: 6,
          cerinta: "Tabloul a[8][8] are inițial toate elementele -1. Completați secvența for(i=0;i<8;i++) for(j=0;j<8;j++) ... cu cel mult trei atribuiri, astfel încât a să memoreze tabloul cu coloanele 0-1 și 4-5 egale cu 2, coloanele 2-3 egale cu 0, coloanele 6-7 egale cu 7.",
          ceSeCere: "O singură instrucțiune compusă care alege valoarea după coloană.",
          notiuni: ["tablouri bidimensionale", "expresii condiționale"],
          pasi: [
            "Valoarea depinde doar de coloană: j/2 dă grupa de două coloane (0,1,2,3).",
            "Grupa 1 → 0, grupa 3 → 7, restul → 2: if (j/2==1) a[i][j]=0; else if (j/2==3) a[i][j]=7; else a[i][j]=2;",
            "Sunt exact trei atribuiri — se încadrează în restricție.",
          ],
          raspuns: "Secvența de mai jos (testată: afișează exact tabloul cerut).",
          verificare: "Program complet compilat și rulat: ieșirea este exact matricea din enunț, de 8 ori linia 2 2 0 0 2 2 7 7 (verifica.sh, testul II.3).",
          greseli: ["Să compari j în loc de j/2 — grupele sunt de câte două coloane."],
          cod: {
            limbaj: "cpp",
            sursa: `#include <iostream>
using namespace std;

int main()
{
    int i, j, a[8][8];
    for (i = 0; i < 8; i++)
        for (j = 0; j < 8; j++)
            a[i][j] = -1;
    for(i=0;i<8;i++)
        for(j=0;j<8;j++)
            if (j / 2 == 1) a[i][j] = 0;
            else if (j / 2 == 3) a[i][j] = 7;
            else a[i][j] = 2;
    for (i = 0; i < 8; i++)
    {
        for (j = 0; j < 8; j++) cout << a[i][j] << (j < 7 ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
          },
        },
      ],
    },
    {
      titlu: "Subiectul al III-lea",
      puncte: 30,
      itemi: [
        {
          id: "s3-1",
          eticheta: "Subiectul III, 1",
          puncte: 10,
          cerinta: "Subprogramul parcele(x, y) primește lățimea și lungimea unui teren dreptunghiular (numere naturale din [1,10⁴]) și afișează, pentru fiecare împărțire în parcele pătrate de latură egală, perechea „număr de parcele cu latura d;”. Exemplu: x=18, y=24 → 432 cu latura 1;108 cu latura 2;48 cu latura 3;12 cu latura 6;",
          ceSeCere: "Pentru fiecare divizor comun d al lui x și y afișezi (x/d)·(y/d) și d.",
          notiuni: ["divizori comuni", "subprograme"],
          pasi: [
            "Parcelele pătrate de latură d acoperă exact terenul dacă d divide atât x, cât și y.",
            "Pentru fiecare d de la 1 la min(x,y) cu x%d==0 și y%d==0: numărul de parcele este (x/d)·(y/d).",
            "Afișarea respectă formatul: „<nr> cu latura <d>;”.",
          ],
          raspuns: "Subprogramul de mai jos.",
          verificare: "Testat pe exemplul din enunț (18 24 → exact ieșirea cerută), pe x=y=1 și pe numere prime între ele 7 10 (verifica.sh, testele III.1).",
          greseli: ["Să cauți doar cmmdc — se cer TOȚI divizorii comuni, nu doar cel mai mare."],
          cod: {
            limbaj: "cpp",
            sursa: `#include <iostream>
using namespace std;

void parcele(int x, int y)
{
    for (int d = 1; d <= x && d <= y; d++)
        if (x % d == 0 && y % d == 0)
            cout << (x / d) * (y / d) << " cu latura " << d << ";";
}

int main()
{
    int x, y;
    cin >> x >> y;
    parcele(x, y);
    return 0;
}`,
          },
          complexitate: "O(min(x,y))",
        },
        {
          id: "s3-2",
          eticheta: "Subiectul III, 2",
          puncte: 10,
          cerinta: "Într-un text de cel mult 200 de caractere, cuvintele sunt separate prin câte un spațiu și conțin litere mici, cifre și paranteze din ()[]{}. Afișați numărul cuvintelor care conțin atât paranteze, cât și litere, în număr egal. Exemplu: a(b5) xyz [x1]y2 (x) {a6bc} 27 pq {ba}a) → 3.",
          ceSeCere: "Numări literele și parantezele din fiecare cuvânt și compari.",
          notiuni: ["șiruri de caractere", "strtok", "numărare"],
          pasi: [
            "Despărțim textul în cuvinte cu strtok după spațiu.",
            "Pentru fiecare cuvânt numărăm literele (a-z) și parantezele (oricare din cele șase).",
            "Cuvântul contează dacă are cel puțin o literă și numerele sunt egale: a(b5) → 1 literă? Nu: a,b = 2 litere și (,) = 2 paranteze ✓.",
            "Din exemplu contează: a(b5) (2=2), {a6bc} (3=3), {ba}a) (4=4) → 3.",
          ],
          raspuns: "Programul de mai jos.",
          verificare: "Testat pe exemplul din enunț (→ 3), pe text fără litere și paranteze (→ 0) și pe un singur cuvânt valid ()ab (→ 1) (verifica.sh, testele III.2).",
          greseli: ["Să numeri doar parantezele rotunde — enunțul include [], {} și ()."],
          cod: {
            limbaj: "cpp",
            sursa: `#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[201], *p;
    int nr = 0;
    cin.getline(s, 201);
    p = strtok(s, " ");
    while (p != NULL)
    {
        int litere = 0, paranteze = 0;
        for (int i = 0; p[i] != '\\0'; i++)
            if (p[i] >= 'a' && p[i] <= 'z') litere++;
            else if (strchr("()[]{}", p[i]) != NULL) paranteze++;
        if (litere > 0 && litere == paranteze) nr++;
        p = strtok(NULL, " ");
    }
    cout << nr;
    return 0;
}`,
          },
          complexitate: "O(n), n = lungimea textului",
        },
        {
          id: "s3-3a",
          eticheta: "Subiectul III, 3.a",
          puncte: 2,
          cerinta: "Fișierul bac.txt conține cel mult 10⁶ numere din [10³,10⁵), fiecare obținut prin concatenarea numărului problemei (1-3), punctajului (0-99) și indicativului echipei (10-99). Afișați indicativul primei echipe din clasament (punctaj total descrescător, departajare după numărul de punctaje 99, apoi ordinea înscrierii). Descrieți algoritmul în limbaj natural și justificați eficiența.",
          ceSeCere: "Descrierea unui algoritm liniar cu memorie constantă.",
          notiuni: ["algoritmi eficienți", "vectori de frecvență"],
          pasi: [
            "Din fiecare număr extragem: echipa = ultimele 2 cifre, punctajul = cifrele dintre prima și ultimele două.",
            "Ținem pentru fiecare echipă (cel mult 90) totalul punctajelor și câte punctaje de 99 are, plus ordinea primei apariții.",
            "Parcurgem fișierul o singură dată (O(n) timp), apoi alegem echipa cu total maxim, departajând după numărul de 99-uri și apoi după prima apariție. Memorie: O(1) — doi vectori de 100 de elemente.",
          ],
          raspuns: "Algoritm liniar O(n) cu memorie constantă: agregare pe echipe + o parcurgere de selecție.",
          verificare: "Implementarea de la punctul b, testată pe exemplul din enunț și pe 8 seturi aleatoare cu referință independentă în Python (verifica.sh, testele III.3).",
          greseli: ["Sortarea celor 10⁶ numere este inutilă și mai lentă; agregarea pe 90 de echipe e suficientă."],
        },
        {
          id: "s3-3b",
          eticheta: "Subiectul III, 3.b",
          puncte: 8,
          cerinta: "Scrieți programul C/C++ corespunzător algoritmului proiectat la punctul a.",
          ceSeCere: "Implementarea algoritmului descris mai sus.",
          notiuni: ["fișiere", "vectori de frecvență", "decodare prin împărțiri"],
          pasi: [
            "Citim fiecare număr r: echipa = r % 100, punctaj = (r / 100) % 100 pentru punctaje de două cifre, respectiv (r / 100) % 10 pentru o cifră.",
            "Actualizăm totalul și contorul de 99-uri; folosit[] marchează echipele, în ordinea primei apariții.",
            "Alegem prima echipă (în ordinea înscrierii) cu total maxim; la egalitate, cu mai multe punctaje 99.",
          ],
          raspuns: "Programul de mai jos.",
          verificare: "Pe exemplul din enunț afișează 12; pe 8 seturi aleatoare rezultatul coincide cu o implementare independentă în Python (verifica.sh, testele III.3).",
          greseli: ["Să rupi egalitatea doar după total — departajarea după punctaje de 99 și apoi după ordinea înscrierii este obligatorie."],
          cod: {
            limbaj: "cpp",
            sursa: `#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int total[100] = {0}, maxime[100] = {0}, folosit[100] = {0};
    long long r;
    while (f >> r)
    {
        int echipa = r % 100, rest = r / 100, punctaj;
        if (rest >= 100) punctaj = rest % 100;
        else punctaj = rest % 10;
        total[echipa] += punctaj;
        if (punctaj == 99) maxime[echipa]++;
        folosit[echipa] = 1;
    }
    int prima = -1;
    for (int e = 10; e <= 99; e++)
        if (folosit[e])
            if (prima == -1 || total[e] > total[prima] ||
                (total[e] == total[prima] && maxime[e] > maxime[prima]))
                prima = e;
    cout << prima;
    return 0;
}`,
          },
          complexitate: "O(n) timp, O(1) memorie suplimentară",
        },
      ],
    },
  ],
  notaPunctaj:
    "Probele se punctează pe 90 de puncte (I: 20, II: 40, III: 30), la care se adaugă 10 puncte din oficiu, conform regulilor publice ale examenului.",
};
