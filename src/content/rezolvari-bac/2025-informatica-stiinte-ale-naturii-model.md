Rezolvarea completă a subiectului de **Bacalaureat 2025 la Informatică, limbajul C/C++, profil științe ale naturii**, **modelul oficial** publicat de CNCE. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **b**, 3 – **c**, 4 – **a**, 5 – **d** (câte 4 puncte).

### 1. Intervalul lui x → c. [2005, 2024]

Simplificăm fiecare negație:

- `!(x<2004)` ⇔ $x \ge 2004$;
- `!(x<2005 || x>2024)` ⇔ $2005 \le x \le 2024$ (legea lui De Morgan);
- `!(x>2025)` ⇔ $x \le 2025$.

Intersecția celor trei condiții este **[2005, 2024]**. Variantele a, b, d conțin valori (2004 sau 2025) care fac falsă condiția din mijloc.

### 2. x comparat cu două elemente → b. 5, 25

Tabloul (2, 5, 10, 15, 16, 25, 50), pozițiile 1..7. Prima comparație: poziția 4 → 15. A doua comparație: în stânga, poziția 2 → **5**; în dreapta, poziția 6 → **25**. Căutarea se încheie după exact două comparații doar dacă x este găsit la al doilea pas, deci x = 5 sau x = 25.

- a, c, d. valorile 2, 10, 16, 50 se află la al treilea nivel al căutării (3 comparații).

### 3. Expresia cu valoarea −3 → c. `floor(x-y)`

`floor` rotunjește în jos (spre −∞): $x - y = 2{,}5 - 5{,}2 = -2{,}7$ → **−3** ✔.

- a. $-7{,}7$ → −8. b. $2{,}7$ → 2. d. $7{,}7$ → 7.

### 4. Suma numerelor ≥ 2025 → a. `if(x>=2025) s=s+x;`

Adunăm la `s` doar numerele care respectă condiția; celelalte se ignoră (și 0, ultimul citit, nu influențează suma).

- b, d. scad numerele mici din sumă. Greșit.
- c. `else s=0` resetează suma la fiecare număr mic — inclusiv la 0 de la final. Greșit.

### 5. Ce reprezintă x → d. cel mai mare divizor comun

Este **algoritmul lui Euclid prin scăderi repetate**: se scade numărul mai mic din cel mai mare până când devin egale; valoarea comună este cmmdc(2025, 280) = 5.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare i de la n la 1, `nr` crește dacă i este divizibil cu **exact unul** dintre x și y (cu x dar nu cu y, sau cu y dar nu cu x).

#### a) Pentru 15, 3, 4 → **6**

- multipli de 3 din 1..15: 3, 6, 9, 12, 15;
- multipli de 4: 4, 8, 12;
- 12 se divide cu amândouă → nu se numără.

Rămân 3, 6, 9, 15, 4, 8 → **6**. *(6p)*

#### b) Două seturi pentru care se afișează 0

Dacă **x = y**, orice număr este divizibil fie cu amândouă, fie cu niciunul, deci `nr` rămâne 0. Exemple: **n = 10, x = 2, y = 2** și **n = 5, x = 3, y = 3**. *(câte 3p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x, y, nr = 0, i;
    cin >> n >> x >> y;
    for (i = n; i >= 1; i--)
        if (i % x == 0 && i % y != 0)
            nr = nr + 1;
        else if (i % x != 0 && i % y == 0)
            nr = nr + 1;
    cout << nr;
    return 0;
}
```

#### d) „pentru” înlocuit cu test inițial *(6p)*

Inițializăm contorul cu n, testăm `i ≥ 1` și scădem contorul la sfârșitul corpului:

```text
citește n, x, y (numere naturale nenule, x ≤ n, y ≤ n)
nr ← 0
i ← n
┌cât timp i ≥ 1 execută
│ ┌dacă i%x = 0 și i%y ≠ 0 atunci
│ │  nr ← nr + 1
│ │altfel
│ │ ┌dacă i%x ≠ 0 și i%y = 0 atunci
│ │ │  nr ← nr + 1
│ │ └■
│ └■
│  i ← i − 1
└■
scrie nr
```

### 2. Elementele tabloului B *(6p)*

Rezultatul interclasării conține toate elementele lui A și toate ale lui B. Eliminând din (3, 4, 7, 8, 21, 25, 37, 45, 55, 70) elementele lui A = (3, 21, 25, 37, 55), rămâne **B = (4, 7, 8, 45, 70)** (B este crescător, pentru că interclasarea a fost crescătoare).

### 3. Data primei expoziții *(6p)*

Lunile sunt ianuarie (`'I'`) și februarie (`'F'`). Dacă expozițiile sunt în aceeași lună, prima este cea cu ziua mai mică; altfel, prima este cea din ianuarie.

```cpp
char luna1, luna2;
int z; char l;
if (luna1 == luna2)
{
    if (ziua1 < ziua2) z = ziua1;
    else z = ziua2;
    l = luna1;
}
else if (luna1 == 'I') { z = ziua1; l = luna1; }
else { z = ziua2; l = luna2; }
cout << z << ' ';
if (l == 'I') cout << "IANUARIE";
else cout << "FEBRUARIE";
```

**Verificare:** (15, I) și (20, I) → **15 IANUARIE**; (15, I) și (10, F) → **15 IANUARIE** ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Numere par-oglindite — pseudocod *(10p)*

Păstrăm doar cifrele **pare nenule** (2, 4, 6, 8). Din x construim numărul `a` cu aceste cifre **în ordinea lor** (adăugăm fiecare cifră în față, cu o putere a lui 10). Din y construim `b` cu cifrele **în ordine inversă** (`b ← b*10 + c` cât timp parcurgem de la dreapta). x și y sunt par-oglindite dacă `a = b`. Dacă niciun număr nu are cifre pare nenule (a = b = 0), răspunsul este 0, ca în exemplul x = 15, y = 510.

```text
citește x, y (numere naturale)
a ← 0; p ← 1; b ← 0
┌cât timp x ≠ 0 execută
│  c ← x%10
│ ┌dacă c%2 = 0 și c ≠ 0 atunci
│ │  a ← c*p + a; p ← p*10
│ └■
│  x ← [x/10]
└■
┌cât timp y ≠ 0 execută
│  c ← y%10
│ ┌dacă c%2 = 0 și c ≠ 0 atunci
│ │  b ← b*10 + c
│ └■
│  y ← [y/10]
└■
┌dacă a = b și a ≠ 0 atunci
│  scrie 1
│altfel
│  scrie 0
└■
```

**Verificare:** 814 → a = 84; 7003485 → cifrele 4, 8, inversate → b = 84 → **1** ✔. Pentru y = 7003465 → b = 64 → 0; y = 7003845 → b = 48 → 0; x = 15, y = 510 → a = b = 0 → **0** ✔ (toate exemplele au fost verificate și în C++).

### 2. Tabloul cu multipli și numere descrescătoare *(10p)*

Pe poziția pară `i` (0, 2, 4, …) se pune al $(i/2+1)$-lea multiplu al lui k. Pozițiile impare sunt în număr de $[n/2]$ și trebuie să conțină $[n/2]-1, \dots, 1, 0$.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int k, n, v[101], i, d;
    cin >> k >> n;
    d = n / 2 - 1;                 // prima valoare de pe pozițiile impare
    for (i = 0; i < n; i++)
        if (i % 2 == 0)
            v[i] = (i / 2 + 1) * k;
        else
        {
            v[i] = d;
            d--;
        }
    for (i = 0; i < n; i++)
        cout << v[i] << ' ';
    return 0;
}
```

**Verificare:** k = 5, n = 9 → **5 3 10 2 15 1 20 0 25** ✔.

### 3. Colecționarul ultimei mașini din anul x

#### a) Descrierea algoritmului *(2p)*

Anul are 4 cifre, deci pentru un cod `crt` anul este `crt % 10000`, iar identificatorul colecționarului este `[crt / 10000]`. Citim codurile pe rând și, de fiecare dată când anul este x, actualizăm `u = [crt/10000]` (inițial −1). Cum suprascriem mereu, la final `u` corespunde **ultimei** mașini din anul x; dacă `u = −1`, afișăm „nu exista”.

**Eficiență:** o singură parcurgere a fișierului → timp **liniar**; nu memorăm codurile → memorie **O(1)**.

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
        if (crt % 10000 == x)
            u = crt / 10000;
    if (u == -1) cout << "nu exista";
    else cout << u;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** codurile din 1925 sunt 21925, 8931925, 201925, 31925, 151925, 201925 → ultima este 201925 → se afișează **20** ✔.

## Ce merită reținut din model

- **De Morgan:** `!(a || b)` ⇔ `!a && !b`; `!(x<a)` ⇔ `x>=a`.
- **`floor` pe numere negative** rotunjește spre −∞: `floor(-2.7) = -3`.
- **Euclid prin scăderi** → cmmdc.
- **Interclasare:** B = rezultatul fără elementele lui A.
- **Coduri alipite:** `%10000` și `/10000` separă ultimele 4 cifre de restul numărului.
