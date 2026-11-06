Rezolvarea completă a subiectului de **Bacalaureat 2022 la Informatică, limbajul C/C++, profil mate-info**, sesiunea iunie–iulie, **varianta 1**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **d**, 3 – **a**, 4 – **b**, 5 – **c** (câte 4 puncte).

### 1. Valoarea expresiei `22/20*20/2` → c. 10

Operanzii sunt întregi, deci `/` este **împărțire întreagă**, iar operatorii `*` și `/` se evaluează de la stânga la dreapta: `22/20 = 1`, `1*20 = 20`, `20/2 = 10`.

### 2. Atribuire corectă sintactic → d. `valoare=2*x.cantitate*x.pret;`

- a. o structură nu se poate atribui dintr-o listă între paranteze rotunde. Greșit.
- b. `x.produs.pret` — `produs` este numele tipului, nu un câmp. Greșit.
- c. `x.denumire[5]` este un caracter; nu i se poate atribui un șir. Greșit.
- d. expresie numerică cu câmpuri accesate corect ✔.

### 3. Soluția de după {fotbal, handbal} → a. {volei, handbal}

Ordinea: tenis, fotbal, volei, handbal, baschet; pachete de 2 sau 3 sporturi, fără fotbal + baschet. După {fotbal, handbal} ar urma {fotbal, handbal, baschet} și {fotbal, baschet} — **interzise**. Se trece la pachetele care încep cu volei: **{volei, handbal}**.

### 4. Numărul de componente conexe → b. 3

Componentele sunt {1, 2, 3}, {4, 6} și nodul izolat {5} → **3**.

### 5. Valori pentru x și y → c. x=3, y=8

Rădăcina este 4 (tatăl 0). Cu x = 3 și y = 8: fiii lui 4 sunt 2, 5, 6; ai lui 2: 1, 3; ai lui 6: 8; ai lui 3: 7, 9, 10; ai lui 8: 11, 12.

| Nivel | Noduri |
|---|---|
| 0 | 4 |
| 1 | 2, 5, 6 |
| 2 | 1, 3, 8 |
| 3 | 7, 9, 10, 11, 12 |

Pe ultimul nivel sunt 5 frunze ✔. Nodul 3 are exact 3 fii frunză, iar niciun alt nod nu are un număr de fii frunză egal cu eticheta sa (2 are un fiu frunză, 4 are unul, 8 are doi) ✔.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Algoritmul împarte `n` la 2, apoi la 3, 5, 7, … (numere impare) cât timp se poate, numărând în `k` toate împărțirile. Așadar `k` = **numărul factorilor primi ai lui n, numărați cu multiplicitate**.

#### a) Pentru n = 56 → **4**

$56 = 2^3 \cdot 7$: trei împărțiri la 2 (56 → 28 → 14 → 7), apoi una la 7 (7 → 1) → k = **4**. *(6p)*

#### b) Două numere din [10, 99] pentru care se afișează 1

Se afișează 1 exact când n are un singur factor prim, adică **n este prim**: de exemplu **11** și **97**. *(6p)*

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

O buclă cu test final se execută cel puțin o dată, deci o punem sub un `dacă` cu aceeași condiție (condiția de echivalență pentru prima iterație).

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

### 2. Valori x pentru care f(2022, x) = 2022 *(6p)*

Dacă `a <= b`, funcția returnează direct `a`. Altfel, `a` scade și `b` crește, iar rezultatul va fi mai mic decât 2022. Deci trebuie ca 2022 ≤ x, adică x ∈ {2022, 2023, 2024, 2025}, de exemplu **2022** și **2025**.

### 3. Construirea șirului id *(6p)*

Numele începe imediat după spațiu: `strchr(s, ' ') + 1`. Îl copiem în `id`, apoi lipim „2022”.

```cpp
strcpy(id, strchr(s, ' ') + 1);
strcat(id, "2022");
```

Pentru „Ana Popescu” → `id` = **Popescu2022** ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul secventa *(10p)*

Parcurgem cifrele de la dreapta la stânga și reconstruim numărul în `r`, cu puterea lui 10 `p`. Când cifra curentă e 2 și cifra din stânga ei e tot 2, am găsit o secvență 22: punem 0 în locul cifrei din dreapta, 2 pentru cea din stânga și sărim peste ambele. Cum nu există trei cifre egale consecutive, secvențele 22 nu se suprapun.

```cpp
void secventa(int &n)
{
    int r = 0, p = 1;
    while (n != 0)
    {
        int c = n % 10;
        if (c == 2 && n / 10 % 10 == 2)
        {
            r = r + 0 * p + 2 * p * 10;   // "22" devine "20"
            p = p * 100;
            n = n / 100;
        }
        else
        {
            r = r + c * p;
            p = p * 10;
            n = n / 10;
        }
    }
    n = r;
}
```

**Exemplu:** 202233228 → **202033208** ✔. Zerourile de la final se păstrează, pentru că `p` crește la fiecare cifră.

### 2. Înnisiparea plajei *(10p)*

Pentru fiecare parcelă calculăm minimul vecinilor existenți (sus, jos, stânga, dreapta — verificând marginile). Dacă nivelul parcelei e strict mai mic decât acest minim, adăugăm diferența.

```cpp
#include <iostream>
using namespace std;

int a[105][105];

int main()
{
    int m, n, total = 0;
    cin >> m >> n;
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> a[i][j];
    int di[] = {-1, 1, 0, 0}, dj[] = {0, 0, -1, 1};
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
        {
            int mn = 100;
            for (int d = 0; d < 4; d++)
            {
                int x = i + di[d], y = j + dj[d];
                if (x >= 0 && x < m && y >= 0 && y < n && a[x][y] < mn)
                    mn = a[x][y];
            }
            if (a[i][j] < mn) total = total + mn - a[i][j];
        }
    cout << total;
    return 0;
}
```

**Verificare pe exemplu:** parcela 3 (linia 1) → vecini 5, 4, 5 → +1; 3 (linia 2, dreapta) → vecini 6, 9 → +3; 2 (linia 4) → vecini 3, 5, 3, 4 → +1; 1 (linia 5) → vecini 5, 3, 4 → +2. Total **7** ✔.

### 3. Valori distincte din [x, y]

#### a) Descrierea algoritmului *(2p)*

Șirul e crescător, deci valorile egale sunt alăturate. Citim numerele pe rând, păstrând doar valoarea anterioară `ant` (inițial 0). Un număr `crt` este o valoare nouă exact când `crt ≠ ant`; dacă în plus `x ≤ crt ≤ y`, creștem contorul. Ne putem opri când `crt > y`.

**Eficiență:** o singură parcurgere → timp **liniar**; nu memorăm șirul, doar câteva variabile → memorie **constantă**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, y, crt, ant = 0, nr = 0;
    f >> x >> y;
    while (f >> crt && crt <= y)
    {
        if (crt != ant && crt >= x) nr++;
        ant = crt;
    }
    cout << nr;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** valorile distincte din [2, 9] sunt 2, 3, 5, 6, 7, 8 → se afișează **6** ✔.

## Ce merită reținut din varianta 1

- **Împărțirea întreagă:** la `int`, `/` taie zecimalele; evaluarea `*`, `/` merge de la stânga la dreapta.
- **Factorizare:** contorul tuturor împărțirilor = numărul factorilor primi cu multiplicitate; valoarea 1 ⇔ număr prim.
- **Test final în loc de test inițial:** pune bucla sub un `dacă` cu aceeași condiție.
- **Vecini în matrice:** vectorii de deplasare `di`, `dj` și verificarea marginilor.
- **Șir sortat:** valorile distincte se numără comparând cu termenul anterior.
