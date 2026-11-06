Rezolvarea completă a subiectului de **Bacalaureat 2019 la Informatică, limbajul C/C++, profil mate-info**, sesiunea august–septembrie, **varianta 2**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **c**, 3 – **a**, 4 – **d**, 5 – **b** (câte 4 puncte).

### 1. Expresia cu valoarea 0 → b. `'m'=='M'`

Literele mici și cele mari au coduri ASCII diferite ('m' = 109, 'M' = 77), deci comparația este falsă (0).

- a. 'm' < 'n' — adevărat (1).
- c. 'm' + 'N' − 'n' = 'm' − 32 = 'M' — adevărat.
- d. 'N' = 'M' + 1 — adevărat (literele sunt consecutive).

### 2. Ce afișează f(75,30) → c. 75 45 15 15

Funcția afișează i, iar dacă i ≠ j, interschimbă i și j când i < j și se autoapelează cu (i − j, j) — Euclid prin scăderi.

- `f(75,30)` afișează 75 → `f(45,30)` afișează 45 → `f(15,30)` afișează 15; acum i < j, se interschimbă (30, 15) → `f(15,15)` afișează 15 și se oprește.

### 3. A cincea soluție → a. (ciocolată, caramel, frișcă)

Primele două straturi se aleg din {caramel, ciocolată, nuci} (distincte, ordinea contează), iar ultimul este frișcă sau vanilie. După (caramel, nuci, vanilie), terminate soluțiile care încep cu caramel, urmează **(ciocolată, caramel, frișcă)**.

### 4. Nodurile unui arbore cu 4 muchii → d. 5

Un arbore cu n noduri are n − 1 muchii, deci n = 4 + 1 = **5**.

### 5. Grade posibile pentru un graf cu 6 noduri → b. 2,2,3,4,0,3

- a. suma gradelor 7 este impară — imposibil (suma este de două ori numărul muchiilor).
- c. un nod de grad 5 este legat de toate celelalte, deci nu poate exista un nod de grad 0.
- d. gradul 6 este imposibil cu 6 noduri (maximum 5).
- b. suma 14 (7 muchii), gradul maxim 4 printre cele 5 noduri neizolate — posibil ✔.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare cifră x de la 1 la 9, se parcurg cifrele lui n și, de câte ori apare x, se adaugă la finalul lui m. Rezultatul: **cifrele nenule ale lui n, în ordine crescătoare**.

#### a) Pentru 27102 → **1227**

Cifrele nenule 2, 7, 1, 2 ordonate crescător: 1, 2, 2, 7. *(6p)*

#### b) Trei numere din [10, 9999] pentru care se afișează 11

Cifrele nenule trebuie să fie exact două de 1; restul pot fi zerouri: oricare trei dintre **11, 101, 110, 1001, 1010, 1100**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, m = 0, x = 1, cp;
    cin >> n;
    while (x <= 9)
    {
        cp = n;
        while (cp != 0)
        {
            if (cp % 10 == x) m = m * 10 + x;
            cp = cp / 10;
        }
        x = x + 1;
    }
    cout << m;
    return 0;
}
```

#### d) Prima structură „cât timp” înlocuită cu „pentru” *(6p)*

```text
citește n (număr natural)
m ← 0
┌pentru x ← 1, 9 execută
│  cp ← n
│ ┌cât timp cp ≠ 0 execută
│ │ ┌dacă cp%10 = x atunci m ← m*10 + x
│ │ └■
│ │  cp ← [cp/10]
│ └■
└■
scrie m
```

### 2. Sufixul de trei caractere *(6p)*

Sufixul de lungime 3 începe la poziția `strlen(b) - 3`.

```cpp
if (strlen(b) >= 3) strcpy(a, b + strlen(b) - 3);
else strcpy(a, "nedeterminat");
```

Pentru „centaur” → **aur**; pentru „au” → **nedeterminat** ✔.

### 3. Punctul coincide cu centrul cercului *(6p)*

```cpp
p.x == c.centru.x && p.y == c.centru.y
```

Coordonatele centrului sunt pe al doilea nivel al structurii `cerc`: `c.centru.x`, `c.centru.y`.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul MaxImp *(10p)*

Pornim de la b în jos și calculăm produsul divizorilor impari. Produsul poate deveni foarte mare (depășește `long long` pentru unele numere), dar ne interesează doar dacă depășește numărul — așa că ne oprim imediat ce produsul devine mai mare.

```cpp
int MaxImp(int a, int b)
{
    for (int x = b; x >= a; x--)
    {
        long long p = 1;
        for (int d = 1; d <= x && p <= x; d += 2)
            if (x % d == 0) p = p * d;
        if (p > x) return x;
    }
    return 0;
}
```

**Exemplu:** a = 14, b = 19 → 19: 1·19 = 19, nu; **18**: 1·3·9 = 27 > 18 ✔.

### 2. Pătratul de dimensiune maximă cu elemente egale *(10p)*

Pătratul de dimensiune m are toate elementele egale cu `a[0][0]`. Trecând de la m − 1 la m se adaugă linia m − 1 (coloanele 0 … m−1) și coloana m − 1 (liniile 0 … m−1); le verificăm doar pe acestea.

```cpp
#include <iostream>
using namespace std;

int a[21][21];

int main()
{
    int n;
    cin >> n;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> a[i][j];
    int m = 1, ok = 1;
    while (m < n && ok)
    {
        for (int k = 0; k <= m; k++)
            if (a[m][k] != a[0][0] || a[k][m] != a[0][0]) ok = 0;
        if (ok) m++;
    }
    cout << m;
    return 0;
}
```

Pe exemplu: pătratul 3×3 conține doar 2, dar pătratul 4×4 conține 1 și 8 → se afișează **3** ✔.

### 3. Impare crescător, apoi pare crescător

#### a) Descrierea algoritmului *(2p)*

Valorile sunt din [0, 1000], deci folosim un vector de frecvență `v`, cu `v[i]` = numărul de apariții ale lui i, completat la citire. Apoi parcurgem indicii impari crescător, afișând fiecare valoare de `v[i]` ori, și la fel pentru indicii pari.

**Eficiență:** o parcurgere a fișierului plus două parcurgeri ale vectorului de 1001 elemente → timp **liniar**, fără nicio sortare.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int v[1001];

int main()
{
    ifstream f("bac.txt");
    int x;
    while (f >> x) v[x]++;
    for (int i = 1; i <= 1000; i += 2)
        for (int k = 0; k < v[i]; k++) cout << i << ' ';
    for (int i = 0; i <= 1000; i += 2)
        for (int k = 0; k < v[i]; k++) cout << i << ' ';
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** 12 2 3 1 2 5 → **1 3 5 2 2 12** ✔.

## Ce merită reținut din varianta 2

- **Majusculele și literele mici** diferă prin 32 în codul ASCII.
- **Arbore:** n noduri, n − 1 muchii.
- **Grade posibile:** suma pară, fiecare grad ≤ n − 1, iar un nod de grad n − 1 exclude nodurile izolate.
- **Produse mari:** oprește calculul când ai depășit pragul care te interesează.
- **Sortare prin numărare** pentru valori dintr-un domeniu mic.
