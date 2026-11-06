Rezolvarea completă a subiectului de **Bacalaureat 2022 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea iunie–iulie, **varianta 1**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **d**, 3 – **b**, 4 – **b**, 5 – **a** (câte 4 puncte).

### 1. Valoarea expresiei `22/20*20/2` → c. 10

Operanzii sunt întregi, deci `/` este **împărțire întreagă**, iar `*` și `/` se evaluează de la stânga la dreapta: `22/20 = 1`, `1*20 = 20`, `20/2 = 10`.

### 2. Verificarea că toate valorile sunt < 2022 → d. `if(k>=2022) strM=0;`

`strM` pornește de la 1 și trebuie să devină 0 la **prima** valoare care încalcă proprietatea, fără să mai revină la 1.

- a. și b. resetează `strM` la fiecare citire, deci contează doar ultima valoare. Greșit.
- c. nu pune niciodată `strM` pe 0. Greșit.
- d. corect ✔.

### 3. Tabloul pentru care se compară 21, 16, 18 → b. (4,16,18,21,52,63,70)

Indici 0…6: mijlocul 3 → **21** > 18, căutăm în [0, 2]; mijlocul 1 → **16** < 18, căutăm în [2, 2]; mijlocul 2 → **18** — găsit. Doar tabloul b dă această succesiune.

### 4. Valoarea maximă a expresiei `ceil(1+sqrt(x%100))` → b. 11

`x%100` este cel mult 99; $\sqrt{99} \approx 9{,}95$, deci $1 + 9{,}95 = 10{,}95$, iar `ceil` rotunjește în sus la **11**.

### 5. Câtul lui 2022 la 100 prin scăderi repetate → a. `r+1`

La fiecare pas se scade 100 din y și se numără scăderea: `r = r + 1`. După 20 de scăderi y = 22 < 100 și bucla se oprește, iar r = **20**.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Algoritmul împarte `n` la 2, apoi la 3, 5, 7, … cât timp se poate, numărând în `k` toate împărțirile. Deci `k` = **numărul factorilor primi ai lui n, numărați cu multiplicitate**.

#### a) Pentru n = 56 → **4**

$56 = 2^3 \cdot 7$: trei împărțiri la 2 (56 → 28 → 14 → 7) și una la 7 → k = **4**. *(6p)*

#### b) Două numere din [10, 99] pentru care se afișează 1

Se afișează 1 exact când n este **prim**: de exemplu **11** și **97**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, i = 2, k = 0;
    cin >> n;
    while (n >= i)
    {
        while (n % i == 0)
        {
            k = k + 1;
            n = n / i;
        }
        if (i == 2) i = i + 1;
        else i = i + 2;
    }
    cout << k;
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, decizie 2p, repetitive 3p, atribuiri 1p, corectitudine 1p.*

#### d) A doua structură „cât timp” înlocuită cu una cu test final *(6p)*

Bucla cu test final se execută cel puțin o dată, deci o punem sub un `dacă` cu aceeași condiție.

```text
citește n (număr natural)
i ← 2; k ← 0
┌cât timp n ≥ i execută
│ ┌dacă n%i = 0 atunci
│ │ ┌repetă
│ │ │  k ← k + 1
│ │ │  n ← [n/i]
│ │ └până când n%i ≠ 0
│ └■
│ ┌dacă i = 2 atunci i ← i + 1
│ │altfel i ← i + 2
│ └■
└■
scrie k
```

### 2. Valorile din B comparate cu 16 → **14, 15, 49** *(6p)*

Parcurse de la dreapta la stânga, tablourile apar crescătoare: A: 5, 7, 16, 18, 21 și B: 2, 3, 14, 15, 49.

| Comparație | Se copiază |
|---|---|
| 5 cu 2 | 2 |
| 5 cu 3 | 3 |
| 5 cu 14 | 5 |
| 7 cu 14 | 7 |
| 16 cu **14** | 14 |
| 16 cu **15** | 15 |
| 16 cu **49** | 16 |

### 3. Materialul cu costul total mai mare *(6p)*

```cpp
char denumire1, denumire2;
// ... (datele sunt deja memorate)
if (pret1 * cantitate1 > pret2 * cantitate2) cout << denumire1;
else if (pret1 * cantitate1 < pret2 * cantitate2) cout << denumire2;
else cout << "egal";
```

Denumirea este o singură literă, deci tipul potrivit este `char`.

## Subiectul al III-lea (30 de puncte)

### 1. Înlocuirea secvențelor 22 cu 20 — pseudocod *(10p)*

Parcurgem cifrele de la dreapta la stânga și reconstruim numărul în `r`, cu puterea lui 10 `p`. Când cifra curentă e 2 și cifra din stânga ei e tot 2, punem 0 pentru cifra din dreapta, 2 pentru cea din stânga și sărim peste amândouă.

```text
citește n (număr natural)
r ← 0; p ← 1
┌cât timp n ≠ 0 execută
│  c ← n % 10
│ ┌dacă c = 2 și [n/10] % 10 = 2 atunci
│ │  r ← r + 2 * p * 10        ▷ „22” devine „20”
│ │  p ← p * 100; n ← [n/100]
│ │altfel
│ │  r ← r + c * p
│ │  p ← p * 10; n ← [n/10]
│ └■
└■
scrie r
```

**Exemplu:** 202233228 → **202033208** ✔.

### 2. Înnisiparea plajei (tablou unidimensional) *(10p)*

O parcelă are cel mult doi vecini: cea din stânga și cea din dreapta (cele de la capete au unul singur). Calculăm minimul vecinilor existenți și, dacă parcela e strict mai joasă, adăugăm diferența.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[105], total = 0;
    cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    for (int i = 0; i < n; i++)
    {
        int mn = 100;
        if (i > 0 && a[i - 1] < mn) mn = a[i - 1];
        if (i < n - 1 && a[i + 1] < mn) mn = a[i + 1];
        if (a[i] < mn) total = total + mn - a[i];
    }
    cout << total;
    return 0;
}
```

**Verificare pe exemplu:** 3 (vecin 4) → +1; 3 (vecini 9, 6) → +3; 2 (vecini 3, 4) → +1; 3 (vecini 5, 8) → +2. Total **7** ✔.

### 3. Valori distincte din [1, x]

#### a) Descrierea algoritmului *(2p)*

Șirul e crescător, deci valorile egale sunt alăturate. Citim numerele pe rând, păstrând doar valoarea anterioară `ant` (inițial 0). Un număr `crt ≤ x` cu `crt ≠ ant` este o valoare nouă și îl numărăm. Ne oprim când `crt > x`.

**Eficiență:** o singură parcurgere → timp **liniar**; nu memorăm șirul → memorie **constantă**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, crt, ant = 0, nr = 0;
    f >> x;
    while (f >> crt && crt <= x)
    {
        if (crt != ant) nr++;
        ant = crt;
    }
    cout << nr;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** valorile distincte ≤ 9 sunt 1, 2, 3, 5, 6, 7, 8 → se afișează **7** ✔.

## Ce merită reținut din varianta 1

- **Împărțirea întreagă** taie zecimalele; `*` și `/` se evaluează de la stânga la dreapta.
- **Verificarea „toate”:** pornești cu 1 și pui 0 la primul contraexemplu, fără `else`.
- **Căutarea binară:** elementul din mijloc decide jumătatea în care continui.
- **Factorizare:** numărul total de împărțiri = numărul factorilor primi; 1 ⇔ număr prim.
- **Șir sortat:** valorile distincte se numără comparând cu termenul anterior.
