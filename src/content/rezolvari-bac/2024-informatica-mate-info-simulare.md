Rezolvarea completă a subiectului de la **simularea Bacalaureatului 2024 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **b**, 3 – **b**, 4 – **d**, 5 – **a** (câte 4 puncte).

### 1. Valoarea `6.3/20+24` → c. 24.315

`6.3` este real, deci împărțirea este reală: $6.3 / 20 = 0.315$. Adunat cu 24 → **24.315**.

- a, b. ar presupune împărțire întreagă (rezultat 0).
- d. 24.9 nu rezultă din niciun mod de evaluare a expresiei.

### 2. Ce afișează `f(2024)` → b. 22220444

Pentru x ≥ 24: dacă x e par, afișează **2 înainte** de apel; dacă e impar, afișează **4 după** apel. Pentru x < 24 afișează 0.

| x | Paritate | Acțiune |
|---|---|---|
| 2024 | par | „2”, apel f(1012) |
| 1012 | par | „2”, apel f(506) |
| 506 | par | „2”, apel f(253) |
| 253 | impar | apel f(126), apoi „4” |
| 126 | par | „2”, apel f(63) |
| 63 | impar | apel f(31), apoi „4” |
| 31 | impar | apel f(15), apoi „4” |
| 15 | < 24 | „0” |

Ordinea: 2, 2, 2, 2, 0, apoi cei trei de 4 la revenire → **22220444**.

### 3. Soluția de după (3, 6, 7, 8) → b. (4, 5, 6, 9)

Cu prefixul (3, 6, 7) nu mai există altă valoare: a patra ar trebui să fie 8 (suma 24). Creștem a treia valoare: (3, 6, 8, 7) nu e crescător; (3, 7, …) ar cere două valori > 7 cu suma 14 — imposibil (8 + 9 = 17, nu 14). Trecem la prima valoare 4: (4, 5, 6, 9) are suma 24 și e strict crescătoare ✔.

- a. (3, 5, 7, 9) are suma 24, dar este generată **înainte** de (3, 6, 7, 8).
- c. (4, 5, 7, 8) are suma 24, dar vine după (4, 5, 6, 9).
- d. (5, 5, 6, 8) nu este strict crescătoare.

### 4. Punctele de pe nivelul 2 > 4 → d. `g.puncte[2]>4`

`g` este variabila, `puncte` este un câmp de tip tablou, iar elementul de indice 2 este `g.puncte[2]`. Variantele a, b, c folosesc numele tipului sau ordinea greșită.

### 5. Numărul minim de piste inversate → a. 1

Arcele: A→B, B→E, E→A (circuit), C→D, D→C (circuit), E→C, E→D. Componentele tare conexe sunt {A, B, E} și {C, D}; din {C, D} nu se poate ajunge înapoi în E. Inversăm pista **E→C** în **C→E**: acum C→E, E→D, D→C formează un circuit, legând cele două componente. Graful devine tare conex cu **o singură** inversare (fără inversare nu e tare conex).

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Algoritmul descompune n în factori primi și adună fiecare **factor prim distinct** (`d*p`, unde p = 1 dacă d este factor). Ultimul factor rămas (n ≠ 1) se adună la final. Se afișează **suma factorilor primi distincți** ai lui n.

#### a) Pentru 32625 → **37**

$32625 = 3^2 \cdot 5^3 \cdot 29$ → $3 + 5 + 29 = 37$. *(6p)*

#### b) Două numere din [10, 100] pentru care se afișează 2

Suma factorilor primi distincți este 2 doar dacă singurul factor prim este 2, adică n este o **putere a lui 2**: din interval, **16**, **32** sau **64**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, s = 0, d = 2, p;
    cin >> n;
    while (d * d <= n)
    {
        p = 0;
        while (n % d == 0)
        {
            n = n / d;
            p = 1;
        }
        s = s + d * p;
        d = d + 1;
    }
    if (n != 1)
        s = s + n;
    cout << s;
    return 0;
}
```

#### d) Algoritm echivalent, cu test final pentru a doua structură *(6p)*

Bucla interioară poate să nu se execute deloc, deci o protejăm cu un `dacă`:

```text
citește n (număr natural nenul)
s ← 0; d ← 2
┌cât timp d*d ≤ n execută
│  p ← 0
│ ┌dacă n%d = 0 atunci
│ │ ┌repetă
│ │ │  n ← [n/d]; p ← 1
│ │ └până când n%d ≠ 0
│ └■
│  s ← s + d*p; d ← d + 1
└■
┌dacă n ≠ 1 atunci s ← s + n
└■
scrie s
```

### 2. Nodurile cu un singur fiu *(6p)*

Din vectorul de tați (8,1,4,5,0,9,4,5,4,3) numărăm de câte ori apare fiecare nod ca tată:

| Nod | Fii |
|---|---|
| 1 | 2 |
| 3 | 10 |
| 4 | 3, 7, 9 |
| 5 | 4, 8 |
| 8 | 1 |
| 9 | 6 |

Nodurile cu un singur fiu: **1, 3, 8, 9**.

### 3. Completarea tabloului *(6p)*

Elementul de pe poziția (i, j) este de două ori **minimul** dintre indicele liniei și al coloanei: $a[i][j] = 2 \cdot \min(i, j)$.

```cpp
for(i=0;i<5;i++)
    for(j=0;j<5;j++)
        if (i < j) a[i][j] = 2 * i;
        else a[i][j] = 2 * j;
```

Verificare: a[3][4] = 2·3 = 6 ✔, a[4][4] = 8 ✔, a[0][j] = 0 ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul Impare *(10p)*

Parcurgem cifrele de la dreapta și construim rezultatul punând fiecare cifră în față (cu o putere a lui 10). O cifră impară se pune de **două ori**. Dacă nu am găsit nicio cifră impară, returnăm −1.

```cpp
int Impare(int n)
{
    int r = 0, p = 1, gasit = 0;
    while (n != 0)
    {
        int c = n % 10;
        r = r + c * p; p = p * 10;
        if (c % 2 == 1)
        {
            r = r + c * p; p = p * 10;
            gasit = 1;
        }
        n = n / 10;
    }
    if (!gasit) return -1;
    return r;
}
```

**Verificare:** n = 3361 → 1 → „11”; 6 → „611”; 3 → „33611”; 3 → **3333611** ✔. Pentru $n \le 10^4$ rezultatul are cel mult 8 cifre, deci încape în `int`.

### 2. Generarea frazei din șablon *(10p)*

Citim lista de cuvinte, apoi șablonul (după ce consumăm sfârșitul de linie rămas). Parcurgem cuvintele șablonului cu `strtok`: un cuvânt normal se copiază; un cuvânt generic (începe cu `*`) se înlocuiește cu primul cuvânt din listă care are aceeași lungime. Dacă nu există, fraza nu se poate genera.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    int n, i, ok = 1;
    char lista[101][11], s[101], fraza[300] = "";
    cin >> n;
    for (i = 0; i < n; i++) cin >> lista[i];
    cin.get();
    cin.getline(s, 101);
    char *p = strtok(s, " ");
    while (p != NULL && ok)
    {
        if (fraza[0] != '\0') strcat(fraza, " ");
        if (p[0] == '*')
        {
            int g = -1;
            for (i = 0; i < n && g == -1; i++)
                if (strlen(lista[i]) == strlen(p)) g = i;
            if (g == -1) ok = 0;
            else strcat(fraza, lista[g]);
        }
        else strcat(fraza, p);
        p = strtok(NULL, " ");
    }
    if (ok) cout << fraza;
    else cout << "imposibil";
    return 0;
}
```

**Verificare pe exemplu:** pentru primul șablon programul alege primul cuvânt potrivit din listă și obține `Era o vreme placuta si acasa din belsug acasa` — o frază corectă (enunțul acceptă oricare dintre frazele posibile); pentru al doilea, nu există cuvânt de 3 litere → `imposibil` ✔.

### 3. Șir de tip api

#### a) Descrierea algoritmului *(2p)*

Valorile sunt între 1 și 1000, deci folosim un **vector de apariții** `ap[v]`, completat la citire. Apoi parcurgem valorile v de la 1 la 1000; pentru fiecare valoare prezentă (`ap[v] > 0`) verificăm că $ap[v] \le v$ și că `ap[v]` are aceeași paritate ca v. Dacă o valoare nu respectă condițiile, șirul nu este de tip api.

**Eficiență:** citirea este **liniară** în numărul de termeni, iar verificarea are un număr fix de pași (1000), independent de lungimea șirului.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int ap[1001];

int main()
{
    ifstream f("bac.in");
    int x, ok = 1;
    while (f >> x) ap[x]++;
    for (int v = 1; v <= 1000; v++)
        if (ap[v] > 0 && (ap[v] > v || ap[v] % 2 != v % 2))
            ok = 0;
    if (ok) cout << "DA";
    else cout << "NU";
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** 6 apare de 4 ori, 2 și 14 de câte 2 ori, 27 de 3 ori → toate condițiile sunt respectate → `DA` ✔.

## Ce merită reținut din simulare

- **Împărțirea cu un operand real** este reală.
- **Recursivitate:** afișarea înainte de apel apare la coborâre, după apel — la revenire.
- **Tare conexitate:** uneori e suficient să inversezi un singur arc ca să închizi un circuit între componente.
- **Tablouri cu valori „în trepte”:** gândește-te la $\min(i,j)$ sau $\max(i,j)$.
- **Vector de apariții:** ideal când valorile sunt mici și ne interesează frecvențele.
