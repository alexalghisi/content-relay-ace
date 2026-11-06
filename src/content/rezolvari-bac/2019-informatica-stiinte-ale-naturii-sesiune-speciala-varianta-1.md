Rezolvarea completă a subiectului de **Bacalaureat 2019 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea specială, **varianta 1**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **a**, 3 – **a**, 4 – **b**, 5 – **d** (câte 4 puncte).

### 1. Expresie echivalentă cu `(x<3)&&(y>=5)` → c. `!(!(x<3)||!(y>=5))`

Cu De Morgan: `!(!A || !B)` = `A && B` ✔. Varianta a este `!A && !B`, b este `x<3 && y<5`, iar d este `A || B`.

### 2. Completarea sortării prin selecție → a. vi↔vm

Pentru fiecare poziție i, bucla interioară găsește în m poziția celui mai mic element din v[i..4]. Apoi acest minim trebuie adus pe poziția i: **v[i] ↔ v[m]**. Variantele c, d interschimbă un element cu un indice, iar b folosește k, care după buclă nu mai indică minimul.

### 3. Condiția pentru tablou → a. `i<j`

Linia i conține 5 − j până la diagonală și apoi 5 − i în dreapta ei. De exemplu, linia 2: 4, 3, 3, 3, 3 — pentru j = 1 se afișează 5 − 1 = 4, iar de la j = 2 încolo 5 − 2 = 3. Deci se afișează 5 − i când **i < j** (deasupra diagonalei; pe diagonală 5 − i = 5 − j oricum).

### 4. Instrucțiune echivalentă → b. `y=abs(x);`

Secvența pune în y valoarea absolută a lui x: −x pentru x negativ, x altfel.

### 5. Condiția pentru cel mai mare divizor comun → d. `d<=x && d<=y`

cmmdc poate fi chiar min(x, y) (de exemplu cmmdc(4, 8) = 4), deci d trebuie să parcurgă toate valorile până la min(x, y) inclusiv. Variantele a și b se opresc prea devreme, iar c nu intră niciodată în buclă.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare i de la 1 la n se numără de câte ori se împarte i la k. Suma p este **exponentul lui k în n!**.

#### a) Pentru 10 și 3 → **4**

Multiplii lui 3 până la 10: 3 și 6 (câte o dată), 9 (de două ori) → p = **4**. *(6p)*

#### b) k = 5, se afișează 10

Exponentul lui 5 în n! este [n/5] + [n/25] + …; pentru n = 45…49 este 9 + 1 = 10, iar pentru n = 50 devine 12. Oricare trei dintre **45, 46, 47, 48, 49**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, k, p = 0, i = 1, x;
    cin >> n >> k;
    while (i <= n)
    {
        x = i;
        while (x % k == 0)
        {
            x = x / k;
            p = p + 1;
        }
        i = i + 1;
    }
    cout << p;
    return 0;
}
```

#### d) Prima structură „cât timp” înlocuită cu „pentru” *(6p)*

```text
citește n, k (numere naturale, k număr prim)
p ← 0
┌pentru i ← 1, n execută
│  x ← i
│ ┌cât timp x%k = 0 execută
│ │  x ← [x/k]; p ← p + 1
│ └■
└■
scrie p
```

### 2. Data este anterioară evenimentului *(6p)*

```cpp
d_luna < e_luna || (d_luna == e_luna && d_zi < e_zi)
```

Comparăm întâi lunile; dacă sunt egale, decide ziua.

### 3. Căutarea binară a lui 15 → **7, 21, 16** *(6p)*

Indici 0…6: mijlocul 3 → **7** < 15, căutăm în [4, 6]; mijlocul 5 → **21** > 15, căutăm în [4, 4]; se compară **16** ≠ 15, iar căutarea se încheie fără succes.

## Subiectul al III-lea (30 de puncte)

### 1. Cifrele impare sunt egale — pseudocod *(10p)*

Reținem prima cifră impară întâlnită și o comparăm cu toate celelalte cifre impare.

```text
citește n (număr natural, n≥10)
prima ← −1; ok ← 1
┌cât timp n ≠ 0 execută
│  c ← n%10
│ ┌dacă c%2 = 1 atunci
│ │ ┌dacă prima = −1 atunci prima ← c
│ │ │altfel
│ │ │ ┌dacă c ≠ prima atunci ok ← 0
│ │ │ └■
│ │ └■
│ └■
│  n ← [n/10]
└■
scrie ok
```

**Exemple:** 7727470 → **1**; 7240 → **1**; 7921470 → **0** ✔.

### 2. Numerele de o cifră, apoi cele de două cifre *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[25];
    cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    for (int i = 0; i < n; i++)
        if (a[i] < 10) cout << a[i] << ' ';
    cout << '\n';
    for (int i = 0; i < n; i++)
        if (a[i] >= 10) cout << a[i] << ' ';
    return 0;
}
```

Pentru (3, 14, 2, 1, 7, 21) → „3 2 1 7” și „14 21” ✔.

### 3. Primii n termeni ai șirului, în ordine inversă

#### a) Descrierea algoritmului *(2p)*

Din relația de recurență, diferențele dintre termeni consecutivi alternează: x, x − 1, x, x − 1, … (de exemplu, pentru x = 5: +5, +4, +5, +4). De aici rezultă formula directă $f_i = i \cdot x - [i/2]$. Scriem termenii pentru i = n − 1, n − 2, …, 0, calculând fiecare cu formula.

**Eficiență:** fiecare termen se calculează în timp constant → timp **liniar** în n; fără tablouri → memorie **constantă**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    int n, x;
    cin >> n >> x;
    ofstream g("bac.txt");
    for (int i = n - 1; i >= 0; i--)
        g << i * x - i / 2 << ' ';
    g.close();
    return 0;
}
```

**Verificare pe exemplu:** n = 8, x = 5 → **32 27 23 18 14 9 5 0** ✔.

## Ce merită reținut din varianta 1

- **De Morgan:** `!(!A || !B)` ⇔ `A && B`.
- **Sortarea prin selecție:** minimul din restul tabloului se aduce pe poziția i.
- **Valoarea absolută** a unui real: `abs` (sau `fabs`).
- **cmmdc prin încercare:** d parcurge valorile până la min(x, y) inclusiv.
- **Recurențe:** caută o formulă directă ca să generezi termenii în ordine inversă.
