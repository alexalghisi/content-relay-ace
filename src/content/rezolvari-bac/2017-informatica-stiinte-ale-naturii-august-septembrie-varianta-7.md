Rezolvarea completă a subiectului de **Bacalaureat 2017 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (30 de puncte)

### 1. Valoarea expresiei `3+7/4+3` → c. 7 *(4p)*

Împărțirea are prioritate și este **întreagă**: 7 / 4 = 1. Apoi 3 + 1 + 3 = **7**.

### 2. Algoritmul în pseudocod

Pentru fiecare număr x citit, bucla interioară găsește **cel mai mic divizor y ≥ 2** al lui x (pentru x = 1 bucla nu rulează și y rămâne 2). Atunci [x/y] este **cel mai mare divizor propriu** al lui x (sau 1, dacă x e prim). Algoritmul afișează maximul acestor valori.

#### a) Pentru 4, 5, 24, 3, 45 → **15** *(6p)*

| x | y (cel mai mic divizor) | [x/y] | k |
|---|---|---|---|
| 5 | 5 | 1 | 1 |
| 24 | 2 | 12 | 12 |
| 3 | 3 | 1 | 12 |
| 45 | 3 | 15 | **15** |

Se afișează **15**.

#### b) n = 3 și se afișează 1 *(4p)*

Avem nevoie ca [x/y] ≤ 1 pentru toate numerele și măcar o dată egal cu 1. Pentru un număr prim, [x/y] = 1; pentru x = 1, [1/2] = 0. Un set: **2, 3, 5** (oricare trei numere prime distincte, sau două prime distincte și 1).

#### c) Prima structură „cât timp” înlocuită cu „pentru” *(6p)*

```text
citește n (număr natural nenul)
k ← 0
┌pentru i ← 1,n execută
│  citește x (număr natural nenul)
│  y ← 2
│ ┌cât timp x>1 și x%y≠0 execută
│ │  y ← y+1
│ └■
│ ┌dacă k<[x/y] atunci k ← [x/y]
│ └■
└■
scrie k
```

#### d) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, k = 0, i = 1, x, y;
    cin >> n;
    while (i <= n)
    {
        cin >> x;
        y = 2;
        while (x > 1 && x % y != 0)
            y = y + 1;
        if (k < x / y)
            k = x / y;
        i = i + 1;
    }
    cout << k;
    return 0;
}
```

*Barem: variabile 1p, citire 1p, decizie 2p, repetitive 3p, atribuiri 1p, afișare 1p, corectitudine 1p.*

## Subiectul al II-lea (30 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **a** (câte 4 puncte).

### 1. x ∈ [−4, −2] ∪ [2, 4] → b. `abs(x)>=2 && abs(x)<=4`

Reuniunea este simetrică față de 0, deci condiția se scrie pe modul: $2 \le |x| \le 4$.

- a. Pune condiția de paritate: 3 ar fi exclus și 0 inclus. Greșit.
- c. $|x-2| \le 4$ înseamnă $x \in [-2, 6]$. Greșit.
- d. $|x-2| \ge 2$ înseamnă $x \le 0$ sau $x \ge 4$. Greșit.

### 2. Interschimbarea prin înmulțire și împărțire → a. `x=x*y;`

Cu x = a, y = b: `x=x*y` → x = ab; `y=x/y` → y = ab/b = a; `x=x/y` → x = ab/a = b. Valorile s-au interschimbat ✔ (numerele sunt nenule, deci împărțirile sunt exacte).

### 3. Intersecția cu [2013, 2017] *(6p)*

Două intervale închise [s, d] și [2013, 2017] au puncte comune exact când fiecare începe înainte ca celălalt să se termine: $s \le 2017$ și $d \ge 2013$.

```cpp
if (s <= 2017 && d >= 2013) cout << "se intersecteaza";
else cout << "disjuncte";
```

### 4. Tripletele x + y + z = c cu a ≤ x ≤ y ≤ z ≤ b

#### a) Algoritmul în pseudocod *(10p)*

Alegem x și y, iar z rezultă din ecuație: z = c − x − y. Verificăm doar că $y \le z \le b$.

```text
citește a,b,c (numere naturale, a<b)
gasit ← 0
┌pentru x ← a,b execută
│ ┌pentru y ← x,b execută
│ │  z ← c-x-y
│ │ ┌dacă z≥y și z≤b atunci
│ │ │  scrie '{',x,',',y,',',z,'}'
│ │ │  gasit ← 1
│ │ └■
│ └■
└■
┌dacă gasit=0 atunci scrie 'nu exista'
└■
```

Exemplu: a = 2, b = 4, c = 8 → **{2,2,4}{2,3,3}** ✔; a = 5, b = 8, c = 8 → **nu exista** ✔.

#### b) Rolul variabilelor, date de intrare și de ieșire *(6p)*

- **a, b** — capetele intervalului în care se află x, y, z;
- **c** — suma cerută;
- **x, y** — primele două numere ale tripletului, parcurse cu câte o structură „pentru”;
- **z** — al treilea număr, calculat din ecuație;
- **gasit** — indică dacă s-a scris cel puțin un triplet.

**Date de intrare:** a, b, c. **Date de ieșire:** tripletele x, y, z (sau mesajul „nu exista”).

## Subiectul al III-lea (30 de puncte)

### 1. Expresia pentru tabloul afișat → d. `(i+j)/2` *(4p)*

Pe fiecare linie valorile cresc din două în două coloane, iar linia următoare este decalată cu o poziție: valoarea depinde de $i + j$. Verificare: (0,0) → 0, (0,2) → 1, (1,1) → 1, (4,4) → 4 ✔. Variantele a și c dau valori negative sau scad pe linie.

### 2. Căutarea binară a lui 8 în (4, 7, 9, 12, 16, 20, 45) → **12, 7, 9** *(6p)*

1. Intervalul 1…7, mijlocul 4 → **12**; 8 < 12 → stânga (1…3);
2. mijlocul 2 → **7**; 8 > 7 → dreapta (3…3);
3. mijlocul 3 → **9**; 9 ≠ 8, intervalul se golește → căutare fără succes.

### 3. Inserarea mediei la mijlocul tabloului *(10p)*

Calculăm suma la citire. Pentru n par, mijlocul este poziția n/2 (indexare de la 0): mutăm elementele de la n/2 încolo cu o poziție la dreapta, de la coadă spre mijloc, apoi punem media pe poziția eliberată.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n;
    double a[52], s = 0;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
        s = s + a[i];
    }
    for (int i = n; i > n / 2; i--)   // mutăm a doua jumătate cu o poziție la dreapta
        a[i] = a[i - 1];
    a[n / 2] = s / n;
    n++;
    for (int i = 0; i < n; i++) cout << a[i] << ' ';
    return 0;
}
```

**Verificare:** n = 4, tabloul 3 2.25 3 1.75 → media 10 / 4 = 2.5 → `3 2.25 2.5 3 1.75` ✔.

### 4. Numerele distincte formează o progresie de rație 2?

#### a) Descrierea algoritmului *(2p)*

Valorile sunt în [0, 1000], deci folosim un **vector caracteristic** `v`: la citire marcăm `v[x] = 1`. Apoi parcurgem v crescător și ținem ultima valoare marcată. Numerele distincte, puse în ordine crescătoare, formează o progresie de rație 2 exact când oricare două valori marcate succesive diferă prin 2. Dacă undeva diferența e alta, răspunsul este NU.

**Eficiență:** citirea este **liniară** în numărul de termeni (fiecare termen se citește o dată), iar parcurgerea vectorului are un număr fix de 1001 pași — algoritmul este O(n) și nu are nevoie de sortare.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.in");
    int v[1001] = {0}, x, ant = -1, ok = 1;
    while (f >> x) v[x] = 1;
    for (int i = 0; i <= 1000; i++)
        if (v[i])
        {
            if (ant != -1 && i - ant != 2) ok = 0;
            ant = i;
        }
    if (ok) cout << "DA";
    else cout << "NU";
    f.close();
    return 0;
}
```

**Verificare:** 12 20 16 18 12 14 20 20 → valorile distincte 12, 14, 16, 18, 20 → **DA** ✔.

## Ce merită reținut din varianta 7

- **Împărțirea întreagă** are prioritate față de adunare și trunchiază.
- **Intervale simetrice** ⇒ condiție pe `abs(x)`.
- **Interschimbare fără variabilă auxiliară:** `x=x*y; y=x/y; x=x/y;` (doar pentru valori nenule).
- **Două intervale se intersectează** ⇔ fiecare începe înainte să se termine celălalt.
- **Vector caracteristic:** ideal când valorile sunt mici și contează doar valorile distincte.
