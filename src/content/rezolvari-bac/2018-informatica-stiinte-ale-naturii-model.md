Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2018 la Informatică, limbajul C/C++, profil științe ale naturii**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (30 de puncte)

### 1. Șirul crescător pentru `!(x>=y) && z>y` → a. x, y, z *(4p)*

`!(x>=y)` înseamnă `x < y`, iar `z > y`. Deci $x < y < z$.

### 2. Algoritmul în pseudocod

Variabilele `b` și `c` sunt doi termeni consecutivi din **șirul lui Fibonacci** (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, …). Pentru fiecare z din [x, y], bucla „cât timp” avansează în șir până când c ≥ z; dacă c = z, z este termen Fibonacci și se afișează. Algoritmul afișează deci **termenii șirului lui Fibonacci din intervalul [x, y]**.

#### a) Pentru 3 și 10 → **3 5 8** *(6p)*

Termenii Fibonacci din [3, 10] sunt 3, 5, 8.

#### b) x = 18, se afișează o singură valoare → **21** și **33** *(4p)*

Primul termen Fibonacci ≥ 18 este 21, iar următorul este 34. Intervalul [18, y] trebuie să conțină 21, dar nu și 34: $21 \le y \le 33$. Cel mai mic y este **21**, cel mai mare **33**.

#### c) Algoritm echivalent cu structură repetitivă cu test final *(6p)*

Bucla „cât timp” se poate executa de zero ori, așa că o protejăm cu un **dacă** înainte de „repetă”:

```text
citește x,y (numere naturale, x≤y)
b ← 0; c ← 1
┌pentru z ← x,y execută
│ ┌dacă c<z atunci
│ │ ┌repetă
│ │ │  a ← b; b ← c; c ← a+b
│ │ └până când c≥z
│ └■
│ ┌dacă z=c atunci scrie z,' '
│ └■
└■
```

#### d) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int x, y, a, b = 0, c = 1, z;
    cin >> x >> y;
    for (z = x; z <= y; z++)
    {
        while (c < z)
        {
            a = b;
            b = c;
            c = a + b;
        }
        if (z == c) cout << z << ' ';
    }
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, decizie 2p, repetitive 3p, atribuiri 1p, corectitudine 1p.*

## Subiectul al II-lea (30 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **c** (câte 4 puncte).

### 1. Cel mai mare x cu `sqrt(x/10+x%10)==100` → c. 100000

Condiția înseamnă $[x/10] + (x \bmod 10) = 10000$. Dacă ultima cifră este d, atunci $[x/10] = 10000 - d$ și $x = 10(10000 - d) + d = 100000 - 9d$, maxim pentru d = 0: **100000**. Verificare: 10000 + 0 = 10000 ✔. Pentru 900001: 90000 + 1 ≠ 10000.

### 2. Secvențele care NU dau ultima cifră a lui 1 + 2 + … + n → c. S1 și S3

Suma este $\frac{n(n+1)}{2}$.

- **S1:** ia întâi ultima cifră a lui $n(n+1)$ și abia apoi împarte la 2 — se pierde informație. Pentru n = 3: $12 \bmod 10 = 2$, 2 / 2 = 1, dar suma este 6. **Greșit.**
- **S2:** adună și păstrează ultima cifră la fiecare pas. Corect.
- **S3:** adună ultimele cifre ale lui i, dar nu mai ia restul la 10 pentru u, care crește peste 9 (pentru n = 4: u = 1 + 2 + 3 + 4 = 10). **Greșit.**

### 3. LA FEL / DIFERIT / VECHI *(6p)*

Anul curent este 2018 (anul examenului).

```cpp
if (an1 == 2018 && an2 == 2018)
{
    if (luna1 == luna2) cout << "LA FEL";
    else cout << "DIFERIT";
}
else
    cout << "VECHI";
```

### 4. Divizorii x < y < z ai lui n cu x + y + z = n

#### a) Algoritmul în pseudocod *(10p)*

Alegem x și y divizori ai lui n (x < y), calculăm z = n − x − y și verificăm că z > y și că z divide n. Ne oprim la primul triplet găsit.

```text
citește n (număr natural, n≥2)
gasit ← 0
x ← 1
┌cât timp x<n și gasit=0 execută
│ ┌dacă n%x=0 atunci
│ │  y ← x+1
│ │ ┌cât timp x+y<n și gasit=0 execută
│ │ │ ┌dacă n%y=0 atunci
│ │ │ │  z ← n-x-y
│ │ │ │ ┌dacă z>y și n%z=0 atunci
│ │ │ │ │  scrie x,' ',y,' ',z
│ │ │ │ │  gasit ← 1
│ │ │ │ └■
│ │ │ └■
│ │ │  y ← y+1
│ │ └■
│ └■
│  x ← x+1
└■
┌dacă gasit=0 atunci scrie 'nu exista'
└■
```

Exemplu: n = 24 → **4 8 12** ✔; n = 9 → **nu exista** ✔.

#### b) Rolul variabilelor, date de intrare și de ieșire *(6p)*

- **n** — numărul citit;
- **x, y** — candidații pentru primii doi divizori;
- **z** — al treilea număr, calculat din condiția x + y + z = n;
- **gasit** — 1 după ce s-a găsit (și scris) un triplet, 0 altfel.

**Date de intrare:** n. **Date de ieșire:** x, y, z (sau mesajul „nu exista”).

## Subiectul al III-lea (30 de puncte)

### 1. Tabloul pentru comparațiile 50, 16, 18 → b. (5,16,18,50,56,70,85) *(4p)*

Tabloul trebuie să fie **ordonat** și să aibă pe poziția din mijloc (a 4-a din 7) valoarea 50. Apoi se caută în stânga (pozițiile 1…3), cu mijlocul pe poziția 2 = 16, apoi pe poziția 3 = 18. Doar varianta b respectă: a[4] = 50, a[2] = 16, a[3] = 18. Varianta d nu este ordonată.

### 2. ok = 1 dacă toate valorile sunt < 2018 *(6p)*

```cpp
ok = 1;
for(i=1;i<=10;i++)
{ cin >> x;
  if (x >= 2018) ok = 0;
}
```

Pornim de la „adevărat” și îl invalidăm la prima valoare care nu respectă condiția.

### 3. Secvențe 2 2 2 separate de 1 *(10p)*

Tabloul are $3n + (n-1) = 4n - 1$ elemente. Cu indexare de la 0, pozițiile 3, 7, 11, … (adică `(i+1) % 4 == 0`) conțin 1, restul 2.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[200];
    cin >> n;
    int m = 4 * n - 1;                 // n secvențe de 3 + (n-1) separatori
    for (int i = 0; i < m; i++)
        if ((i + 1) % 4 == 0) a[i] = 1;
        else a[i] = 2;
    for (int i = 0; i < m; i++) cout << a[i] << ' ';
    return 0;
}
```

**Verificare:** n = 5 → `2 2 2 1 2 2 2 1 2 2 2 1 2 2 2 1 2 2 2` ✔.

### 4. Cifre care apar o singură dată

#### a) Descrierea algoritmului *(2p)*

Folosim un vector de apariții `v[0..9]`, inițial 0. Citim numerele unul câte unul și, pentru fiecare, îi parcurgem cifrele (cu `% 10` și `/ 10`), crescând `v[cifra]`. La final afișăm cifrele c cu `v[c] = 1`, sau „nu exista” dacă nu există.

**Eficiență:** fiecare număr are cel mult 10 cifre, deci prelucrarea lui durează un timp constant; algoritmul este **liniar** în numărul de valori din fișier. Memoria este constantă (10 contoare).

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int v[10] = {0}, x, gasit = 0;
    while (f >> x)
        while (x != 0)
        {
            v[x % 10]++;
            x = x / 10;
        }
    for (int c = 0; c <= 9; c++)
        if (v[c] == 1)
        {
            cout << c << ' ';
            gasit = 1;
        }
    if (!gasit) cout << "nu exista";
    f.close();
    return 0;
}
```

**Verificare** pentru 391 7772 4389 23939: cifrele 1, 4, 8 apar o singură dată → `1 4 8` ✔.

## Ce merită reținut din model

- **„cât timp” → „repetă”:** pune un **dacă** cu aceeași condiție înaintea lui „repetă”.
- **Ultima cifră a unei sume:** ia restul la 10 la fiecare pas, dar nu înainte de o împărțire.
- **Căutarea binară** se aplică doar pe tablouri ordonate; elementele comparate sunt mijloacele intervalelor.
- **Variabile-indicator (ok, gasit):** inițializează-le cu valoarea „implicită” și schimbă-le la primul contraexemplu.
- **Vector de apariții** pentru cifre: 10 contoare ajung pentru orice număr de valori.
