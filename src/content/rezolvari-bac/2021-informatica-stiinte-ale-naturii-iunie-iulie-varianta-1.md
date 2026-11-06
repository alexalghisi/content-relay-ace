Rezolvarea completă a subiectului de **Bacalaureat 2021 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea iunie–iulie, **varianta 1**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **a**, 2 – **b**, 3 – **a**, 4 – **d**, 5 – **c** (câte 4 puncte).

### 1. x și y sunt ambele pare → a. `x%2==0 && (y+1)%2!=0`

`(y+1)%2!=0` înseamnă că y+1 este impar, adică **y este par**. Împreună cu `x%2==0`, expresia spune exact „x și y pare”. Variantele c și d sunt adevărate și pentru două numere impare, iar b de exemplu pentru x = 3, y = 2.

### 2. Comparația care dă al 4-lea element → b. xa=7 și xb=12

Interclasarea produce: 1 (A), 2 (B), 5 (B). Acum elementele curente sunt 7 (din A) și 12 (din B); comparația lor dă al 4-lea element, 7. Deci **xa = 7, xb = 12**.

### 3. Scăderea fracțiilor → a

$\dfrac{2020}{2021} - \dfrac{fa}{fb} = \dfrac{2020 \cdot fb - 2021 \cdot fa}{2021 \cdot fb}$, adică `sa=2020*fb-2021*fa; sb=fb*2021;`.

### 4. Expresia cu valoarea 3 → d. `floor(y-x)`

y − x = 7,2 − 3,5 = 3,7, iar `floor(3.7)` = **3**. Celelalte: `floor(-10.7)` = −11, `floor(10.7)` = 10, `floor(-3.7)` = −4.

### 5. Verificarea termenilor Fibonacci consecutivi → c. `x==0 && y==1`

Bucla „merge înapoi” în șirul lui Fibonacci: din perechea (x, y) obține (y − x, x). Dacă x și y sunt termeni consecutivi, coborâm până la perechea (1, 1) și apoi la (0, 1). De exemplu, (3, 5) → (2, 3) → (1, 2) → (1, 1) → (0, 1). Deci la final trebuie **x = 0 și y = 1**.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

După eventuala interschimbare, x ≤ y. Bucla merge de la y în jos până la x (de y − x + 1 ori). La fiecare pas se afișează 1, apoi 2 dacă nr ≥ x, apoi 1; nr se triplează: 1, 3, 9, 27, …

#### a) Pentru 8 și 5 → **1111121121**

După interschimbare x = 5, y = 8, deci 4 pași cu nr = 1, 3, 9, 27: „11”, „11”, „121”, „121”. *(6p)*

#### b) x = 10, cifra 2 afișată de trei ori → **6** și **15**

- y = 15: x = 10, 6 pași, nr = 1, 3, 9, 27, 81, 243; nr ≥ 10 de 3 ori ✔.
- y = 6: se interschimbă (x = 6, y = 10), 5 pași, nr = 1, 3, 9, 27, 81; nr ≥ 6 de 3 ori ✔.

*(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int x, y, nr, aux;
    cin >> x >> y;
    if (x > y) { aux = x; x = y; y = aux; }
    nr = 1;
    for (int i = y; i >= x; i--)
    {
        cout << 1;
        if (nr >= x) cout << 2;
        nr = nr * 3;
        cout << 1;
    }
    return 0;
}
```

#### d) Structura „pentru” înlocuită cu una cu test inițial *(6p)*

```text
citește x, y (numere naturale nenule)
┌dacă x > y atunci x ↔ y
└■
nr ← 1
i ← y
┌cât timp i ≥ x execută
│  scrie 1
│ ┌dacă nr ≥ x atunci scrie 2
│ └■
│  nr ← nr * 3
│  scrie 1
│  i ← i − 1
└■
```

### 2. Căutarea binară a lui 8 → **12, 7, 10** *(6p)*

Indici 0…6: mijlocul 3 → **12** > 8, căutăm în [0, 2]; mijlocul 1 → **7** < 8, căutăm în [2, 2]; mijlocul 2 → **10** ≠ 8, intervalul se golește (8 nu există în tablou).

### 3. Cel mai mare număr par de două cifre *(6p)*

```cpp
maxp = -1;
for (i = 1; i <= 10; i++)
{
    cin >> x;
    if (x % 2 == 0 && x >= 10 && x <= 99 && x > maxp) maxp = x;
}
```

Inițializarea cu −1 rezolvă automat cazul în care nu există niciun astfel de număr.

## Subiectul al III-lea (30 de puncte)

### 1. Suma divizorilor primi cu exponent impar — pseudocod *(10p)*

Descompunem n în factori primi; pentru fiecare divizor d numărăm exponentul p, iar dacă p este impar, adunăm d. Factorul rămas după bucla cu d·d ≤ n (dacă e > 1) are exponentul 1.

```text
citește n (număr natural, n ≥ 2)
s ← 0; d ← 2
┌cât timp d*d ≤ n execută
│  p ← 0
│ ┌cât timp n%d = 0 execută
│ │  p ← p + 1; n ← [n/d]
│ └■
│ ┌dacă p%2 = 1 atunci s ← s + d
│ └■
│  d ← d + 1
└■
┌dacă n > 1 atunci s ← s + n
└■
scrie s
```

**Exemple:** 360 = $2^3 \cdot 3^2 \cdot 5$ → **7**; 16 = $2^4$ → **0** ✔.

### 2. Primele k elemente cu cifra unităților 0 *(10p)*

Mai întâi numărăm câte elemente se termină în 0. Dacă sunt cel puțin k, le afișăm pe primele k; altfel afișăm mesajul.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, k, a[105], nr = 0;
    cin >> n >> k;
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
        if (a[i] % 10 == 0) nr++;
    }
    if (nr < k) cout << "nu exista";
    else
    {
        int afis = 0;
        for (int i = 0; i < n && afis < k; i++)
            if (a[i] % 10 == 0)
            {
                cout << a[i] << ' ';
                afis++;
            }
    }
    return 0;
}
```

Test: (23, 70, 61, 8, 0, 50, 742, 10), k = 3 → **70 0 50** ✔.

### 3. Ultimul termen cu sufixul x

#### a) Descrierea algoritmului *(2p)*

x are 3 cifre, deci y îl are pe x drept sufix exact când `y % 1000 == x`. Citim șirul o singură dată și, de fiecare dată când un termen are această proprietate, îl reținem în `u` (inițial −1). La final, `u` este ultimul astfel de termen; dacă a rămas −1, afișăm „nu exista”.

**Eficiență:** o singură parcurgere → timp **liniar**; nu memorăm șirul → memorie **constantă**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, crt, u = -1;
    f >> x;
    while (f >> crt)
        if (crt % 1000 == x) u = crt;
    if (u == -1) cout << "nu exista";
    else cout << u;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** ultimul termen terminat în 210 este **20210** ✔.

## Ce merită reținut din varianta 1

- **Interclasare:** al k-lea element rezultă din comparația elementelor curente din cele două tablouri.
- **`floor`** rotunjește în jos, și pentru numere negative (−3,7 → −4).
- **Fibonacci înapoi:** (x, y) → (y − x, x) ajunge la (0, 1) doar pentru termeni consecutivi.
- **Maxim condiționat:** inițializează cu −1 pentru cazul „nu există”.
- **Sufix de 3 cifre:** `y % 1000 == x`.
