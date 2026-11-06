Rezolvarea completă a subiectului de **Bacalaureat 2024 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea specială, **varianta 4**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **a**, 2 – **d**, 3 – **d**, 4 – **b**, 5 – **c** (câte 4 puncte).

### 1. Echivalent cu `!(x>25 || y<6)` → a. `x<=25 && y>=6`

Legea lui De Morgan: negația unei disjuncții este conjuncția negațiilor, $\overline{A \lor B} = \overline{A} \land \overline{B}$. `!(x>25)` devine `x<=25`, `!(y<6)` devine `y>=6`, iar `||` devine `&&`.

- b. neagă corect comparațiile, dar păstrează `||` în loc de `&&`. Greșit.
- c, d. neagă greșit a doua condiție (`y<6`).

### 2. Interclasarea descrescătoare → d. `(49,25,21,17,15,10,10,7,4,1)`

Rezultatul conține toate cele 10 elemente, ordonate descrescător: 49, 25, 21, 17, 15, 10, 10, 7, 4, 1.

- a. are doar 5 elemente.
- b, c. nu sunt ordonate (21 înaintea lui 25).

### 3. Expresia cu valoarea 1 → d. `20.24+1<ceil(20.24)+1`

`ceil(20.24) = 21`, deci comparăm $21{,}24 < 22$ → adevărat ✔.

- a. `ceil(1.2024) = 2` și `ceil(0.2024)+1 = 2` → `2 > 2` e fals.
- b. `1*1 > 1` e fals.
- c. `ceil(-20.24) = -20 ≠ 20.24`.

### 4. Ce memorează z → b. cel mai mare divizor comun

`d` parcurge crescător 1..x și `z` primește fiecare divizor comun al lui x și y; ultima atribuire se face pentru **cel mai mare** divizor comun. Variantele c, d sunt greșite pentru că z poate fi și neprim (de ex. x = y = 4 → z = 4), iar a ar fi mereu 1.

### 5. Ultima cifră a sumei → c. `(s+x)%10`

Păstrăm în s doar ultima cifră a sumei parțiale: ultima cifră a lui $s + x$ depinde numai de ultima cifră a lui s.

- a. `s+x%10` adună cifrele unităților, dar rezultatul poate depăși 9.
- b. `x%10` reține doar ultima cifră a ultimului număr.
- d. `s%10+x%10` poate ajunge la 18.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare i de la 1 la n, `m` devine i împărțit la 2 de câte ori se poate (partea impară a lui i). Valoarea se afișează doar dacă `m ≠ i`, adică pentru **i par**.

#### a) Pentru n = 10 → **1 1 3 1 5**

| i | m (după împărțiri) | Se afișează? |
|---|---|---|
| 1, 3, 5, 7, 9 | m = i | nu |
| 2 | 1 | 1 |
| 4 | 1 | 1 |
| 6 | 3 | 3 |
| 8 | 1 | 1 |
| 10 | 5 | 5 |

Se afișează **1 1 3 1 5**. *(6p)*

#### b) Exact patru valori egale cu 1

Se afișează 1 pentru i = puteri ale lui 2 (2, 4, 8, 16, 32, …). Vrem exact patru: 2, 4, 8, 16 → $16 \le n \le 31$. Exemplu: **16** și **31**. *(câte 3p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, i = 1, m;
    cin >> n;
    while (i <= n)
    {
        m = i;
        while (m % 2 == 0)
            m = m / 2;
        if (m != i)
            cout << m << ' ';
        i = i + 1;
    }
    return 0;
}
```

#### d) Prima structură „cât timp” înlocuită cu „pentru” *(6p)*

```text
citește n (număr natural, n ≥ 2)
┌pentru i ← 1, n execută
│  m ← i
│ ┌cât timp m%2 = 0 execută
│ │  m ← [m/2]
│ └■
│ ┌dacă m ≠ i atunci
│ │  scrie m, ' '
│ └■
└■
```

Inițializarea `i ← 1` și actualizarea `i ← i + 1` sunt preluate de structura „pentru”.

### 2. Valori ale lui x comparate cu trei elemente *(6p)*

Tabloul (48, 24, 16, 14, 9, 8, 4) are 7 elemente, deci căutarea binară are cel mult 3 niveluri: poziția 4 (14); apoi 2 (24) sau 6 (8); apoi 1, 3, 5 sau 7 (48, 16, 9, 4). Exact trei comparații se fac dacă x este **unul dintre 48, 16, 9, 4**, sau dacă x **nu apare** în tablou. Exemple: **9** și **16** (sau, de exemplu, 100).

### 3. Ultimul telefon achiziționat *(6p)*

Dacă lunile diferă, ultimul telefon este cel cu luna mai mare; afișăm sistemul lui de operare.

```cpp
char tip1, tip2;
if (luna1 == luna2)
    cout << "Aceeasi luna";
else
{
    char t;
    if (luna1 > luna2) t = tip1;
    else t = tip2;
    if (t == 'A') cout << "Android";
    else cout << "Windows";
}
```

**Verificare:** tip1 = 'A', luna1 = 4, tip2 = 'W', luna2 = 1 → ultimul este primul telefon → **Android** ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Aglomerare de fulgi de nea — pseudocod *(10p)*

Numărul trebuie să aibă **exact 9 cifre**, toate din {1, 2, 3, 4}, și fiecare dintre cele patru cifre să apară cel puțin o dată. Parcurgem cifrele, le numărăm și marcăm ce cifre au apărut.

```text
citește n (număr natural)
nc ← 0; ok ← 1
a1 ← 0; a2 ← 0; a3 ← 0; a4 ← 0
┌cât timp n ≠ 0 execută
│  c ← n%10; nc ← nc + 1
│ ┌dacă c = 1 atunci a1 ← 1
│ │altfel ┌dacă c = 2 atunci a2 ← 1
│ │       │altfel ┌dacă c = 3 atunci a3 ← 1
│ │       │       │altfel ┌dacă c = 4 atunci a4 ← 1
│ │       │       │       │altfel ok ← 0
│ │       │       │       └■
│ │       │       └■
│ │       └■
│ └■
│  n ← [n/10]
└■
┌dacă ok = 1 și nc = 9 și a1 = 1 și a2 = 1 și a3 = 1 și a4 = 1 atunci
│  scrie 1
│altfel
│  scrie 0
└■
```

**Verificare:** 112243413 → 1 ✔; 12314 (5 cifre) → 0; 112253513 (cifra 5) → 0; 112243457 (5, 7) → 0; 111122223 (lipsește 4) → 0 ✔.

### 2. Cea mai mică valoare generată *(10p)*

Pentru fiecare i, calculăm $q = [k/i]$ (cu k ≤ 50, q are cel mult 2 cifre; poate fi și 0). Cele două valori generate sunt i urmat de cifrele lui q, adică $i \cdot 10^{c(q)} + q$, și q urmat de i, adică $q \cdot 10^{c(i)} + i$, unde $c(\cdot)$ este numărul de cifre. Păstrăm minimul.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, k, v[51], i, q, p1, p2, x, y;
    cin >> n >> k;
    for (i = 1; i <= n; i++)
    {
        q = k / i;
        // p1 = 10 la puterea (numărul de cifre ale lui q), p2 = la fel pentru i
        p1 = 10; if (q >= 10) p1 = 100;
        p2 = 10; if (i >= 10) p2 = 100;
        x = i * p1 + q;            // cifrele lui q alipite la dreapta lui i
        y = q * p2 + i;            // cifrele lui q alipite la stânga lui i
        if (x < y) v[i] = x;
        else v[i] = y;
    }
    for (i = 1; i <= n; i++)
        cout << v[i] << ' ';
    return 0;
}
```

**Verificare:** n = 7, k = 4 → **14 22 13 14 5 6 7** ✔ (de ex. i = 3: q = 1 → 31 sau 13 → 13; i = 5: q = 0 → 50 sau 05 = 5 → 5). Pentru k = 10 → **101 25 33 24 25 16 17** ✔.

### 3. Primul număr care conține cifra maximă

#### a) Descrierea algoritmului *(2p)*

Numerele au cel mult două cifre, deci cifra maximă a lui x este $\max(x \% 10, [x/10])$. Citim numerele pe rând și păstrăm `cifMax` (cea mai mare cifră întâlnită) și `p` (primul număr care o conține). Actualizăm doar când cifra maximă a numărului curent este **strict mai mare** decât `cifMax` — astfel `p` rămâne prima apariție.

**Eficiență:** o singură parcurgere → timp **liniar** O(n); fără tablouri → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("numere.in");
    int x, cm, cifMax = -1, p = 0;
    while (f >> x)
    {
        cm = x % 10;
        if (x / 10 > cm) cm = x / 10;   // x are cel mult două cifre
        if (cm > cifMax)
        {
            cifMax = cm;
            p = x;
        }
    }
    cout << p;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** cifra maximă din fișier este 8, iar primul număr care o conține este **38** ✔.

## Ce merită reținut din varianta 4

- **De Morgan:** `!(A || B)` ⇔ `!A && !B`, iar fiecare comparație se neagă (`>` ↔ `<=`, `<` ↔ `>=`).
- **`ceil`** rotunjește în sus, și pentru negative: `ceil(-20.24) = -20`.
- **Ultima cifră a unei sume:** `s = (s + x) % 10` la fiecare pas.
- **Căutare binară pe 7 elemente:** cel mult 3 comparații.
- **Alipirea a două numere:** $a \cdot 10^{c(b)} + b$.
