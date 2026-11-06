Rezolvarea completă a **simulării pentru Bacalaureat 2021 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **a**, 3 – **c**, 4 – **d**, 5 – **b** (câte 4 puncte).

### 1. Intervalul pentru care expresia are valoarea 1 → c. [2002, 2020]

Traducem fiecare parte: `!(x<2001)` ⇔ x ≥ 2001; `!(x<2002 || x>2020)` ⇔ 2002 ≤ x ≤ 2020; `!(x>2021)` ⇔ x ≤ 2021. Intersecția celor trei condiții este **[2002, 2020]**.

### 2. Al câtelea număr este 8 → a. al 10-lea

Se generează numerele formate cu cifrele 2, 8, 9 (cel mult 3 cifre), mai mici decât 289, în ordine lexicografică: 2, 22, 222, 228, 229, 28, **282**, **288** (289 nu e mai mic), **29** (cele de 3 cifre care încep cu 29 depășesc 289), apoi **8** — al **10-lea**.

### 3. Atribuire corectă → c. `s.vizite.nrAccesari=2*s.vizite.nrAprecieri;`

`vizite` este un câmp de tip structură al lui `s`, deci câmpurile lui se accesează cu doi „.”: `s.vizite.nrAccesari`. Variantele a, b folosesc o sintaxă inexistentă, iar d folosește numele tipului (`site`) ca și cum ar fi un câmp.

### 4. Completarea pentru cmmdc → d. `x-y>0`

Funcția este algoritmul lui Euclid prin scăderi: cât timp x ≠ y, se scade numărul mai mic din cel mai mare. Ramura `f(x-y,y)` trebuie aleasă când **x > y**, adică `x-y>0`.

### 5. Numărul de muchii al unei păduri → b. 35

Fiecare componentă conexă este un arbore, cu (noduri − 1) muchii. Însumând: $40 - 5 = 35$ de muchii.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Cifrele lui x se iau de la dreapta la stânga, ignorându-le pe cele nule. Fiecare cifră nenulă c se compară cu cifra din stânga ei: dacă aceasta este **mai mică**, c se adaugă **la dreapta** lui y (`y*10+c`); altfel c se adaugă **la stânga** lui y (`c*p+y`, p fiind puterea lui 10 corespunzătoare lungimii lui y).

#### a) Pentru 35210579 → **2197553**

| c | cifra din stânga | unde se pune | y |
|---|---|---|---|
| 9 | 7 < 9 | dreapta | 9 |
| 7 | 5 < 7 | dreapta | 97 |
| 5 | 0 < 5 | dreapta | 975 |
| 0 | — | ignorată | 975 |
| 1 | 2 ≥ 1 | stânga | 1975 |
| 2 | 5 ≥ 2 | stânga | 21975 |
| 5 | 3 < 5 | dreapta | 219755 |
| 3 | 0 < 3 | dreapta | 2197553 |

*(6p)*

#### b) Două numere din [1000, 10000) pentru care se afișează 212

Numerele cerute sunt oricare două dintre **2012**, **2201**, **2210**. De exemplu, pentru 2201: 1 (cifra din stânga 0 < 1) → y = 1; 0 ignorat; 2 (cifra din stânga 2 ≥ 2) → stânga: y = 21; 2 (în stânga 0 < 2) → dreapta: y = **212** ✔. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int x, p = 1, y = 0, c;
    cin >> x;
    do
    {
        c = x % 10; x = x / 10;
        if (c != 0)
        {
            if (x % 10 < c) y = y * 10 + c;
            else y = c * p + y;
            p = p * 10;
        }
    } while (x != 0);
    cout << y;
    return 0;
}
```

#### d) Structura „repetă” înlocuită cu una cu test inițial *(6p)*

Singura diferență apare pentru x = 0: bucla „repetă” face un pas în care c = 0, deci nu modifică y. Așadar putem testa direct `x ≠ 0`.

```text
citește x (număr natural)
p ← 1; y ← 0
┌cât timp x ≠ 0 execută
│  c ← x%10; x ← [x/10]
│ ┌dacă c ≠ 0 atunci
│ │ ┌dacă x%10 < c atunci y ← y*10 + c
│ │ │altfel y ← c*p + y
│ │ └■
│ │  p ← p*10
│ └■
└■
scrie y
```

### 2. Un lanț neelementar și un ciclu elementar *(6p)*

- **Lanț neelementar** (repetă un nod): **1, 2, 6, 5, 3, 6** — nodul 6 apare de două ori; muchiile [1,2], [2,6], [6,5], [5,3], [3,6] există.
- **Ciclu elementar:** **1, 2, 6, 1** — muchiile [1,2], [2,6], [6,1] există și nu se repetă niciun nod.

### 3. Șirul obținut → **ELEMENT** *(6p)*

s = „ELITIST”, s[0] = 'E', s[1] = 'L'.

| i | regulă | s[i] | s |
|---|---|---|---|
| 2 | par → s[0] | E | ELETIST |
| 3 | impar → s[1] + 1 | M | ELEMIST |
| 4 | par → s[0] | E | ELEMEST |
| 5 | impar → s[1] + 2 | N | ELEMENT |

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul putere *(10p)*

Descompunem n în factori primi, iar pentru fiecare factor calculăm exponentul. Reținem factorul cu exponentul **strict** mai mic decât minimul de până atunci — cum factorii apar crescător, la egalitate rămâne cel mai mic. Factorul rămas la final (dacă n > 1) are exponentul 1.

```cpp
int putere(int n)
{
    int pmin = 100, rez = 0;
    for (int d = 2; d * d <= n; d++)
        if (n % d == 0)
        {
            int e = 0;
            while (n % d == 0) { e++; n = n / d; }
            if (e < pmin) { pmin = e; rez = d; }
        }
    if (n > 1 && 1 < pmin) rez = n;   // factor prim rămas, la puterea 1
    return rez;
}
```

**Exemplu:** 880 = $2^4 \cdot 5 \cdot 11$ → exponenți 4, 1, 1 → cel mai mic factor cu exponentul 1 este **5** ✔.

### 2. Deplasarea circulară a liniei k *(10p)*

Cu indici de la 1, elementele de pe linia k aflate în stânga diagonalei principale sunt `a[k][1..k-1]`. Pentru o deplasare circulară spre dreapta salvăm ultimul element, mutăm restul cu o poziție la dreapta și punem elementul salvat pe prima poziție.

```cpp
#include <iostream>
using namespace std;

int a[21][21];

int main()
{
    int n, k;
    cin >> n;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= n; j++)
            cin >> a[i][j];
    cin >> k;
    int aux = a[k][k - 1];
    for (int j = k - 1; j > 1; j--)
        a[k][j] = a[k][j - 1];
    a[k][1] = aux;
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++) cout << a[i][j] << ' ';
        cout << '\n';
    }
    return 0;
}
```

Pe exemplu (k = 5): 3 0 6 4 devine 4 3 0 6, iar restul tabloului rămâne neschimbat ✔.

### 3. Suma plătită pentru elementele grafice

#### a) Descrierea algoritmului *(2p)*

Laturile sunt numere din [1, 10], deci folosim un vector de frecvență `a`, unde `a[x]` = câte elemente au latura x. Îl completăm citind fișierul o singură dată. La final, pentru fiecare x cu `a[x] ≠ 0`, adunăm taxa de proiectare 10 și $x^2 \cdot a[x]$.

**Eficiență:** o singură parcurgere a fișierului → timp **liniar**, plus 10 pași la final; memoria este constantă (un vector de 11 elemente).

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.in");
    long long a[11] = {0}, s = 0;
    int x;
    while (f >> x) a[x]++;
    for (x = 1; x <= 10; x++)
        if (a[x] != 0) s += 10 + x * x * a[x];
    cout << s;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** latura 1 de 4 ori → 10 + 4; latura 2 de 3 ori → 10 + 12; latura 7 de 2 ori → 10 + 98. Total **144** ✔.

## Ce merită reținut din simulare

- **Negații de intervale:** `!(x<a || x>b)` ⇔ a ≤ x ≤ b.
- **Câmp de tip structură:** `s.vizite.nrAccesari`.
- **Euclid prin scăderi:** scade numărul mic din cel mare până devin egale.
- **Pădure:** n noduri, p arbori → n − p muchii.
- **Deplasare circulară spre dreapta:** salvează ultimul element, mută restul, pune-l pe primul loc.
