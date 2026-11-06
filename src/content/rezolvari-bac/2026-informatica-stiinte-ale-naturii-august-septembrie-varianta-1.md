Rezolvarea completă a subiectului de **Bacalaureat 2026 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea august–septembrie, **varianta 1**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **d**, 3 – **c**, 4 – **a**, 5 – **c** (câte 4 puncte).

### 1. Divizibil cu 26, dar nu cu 2026 → b. `!(x%26!=0) && !(x%2026==0)`

`!(x%26!=0)` înseamnă `x%26==0` (divizibil cu 26), iar `!(x%2026==0)` înseamnă `x%2026!=0` (nu e divizibil cu 2026). Cele două condiții trebuie să fie adevărate **simultan**, deci `&&`.

- a. folosește `||` → e adevărată și pentru x = 1 (nedivizibil cu 2026). Greșit.
- c. echivalent cu „nu e divizibil nici cu 26, nici cu 2026” — opusul cerinței. Greșit.
- d. echivalent cu „divizibil cu 26 **sau** cu 2026” → adevărată și pentru 2026. Greșit.

### 2. Liniile impare 2 3 2 3 2 → d. `2+(j+1)%2`

Liniile pare (i = 2, 4) sunt date de `3*(j%2)` → 3 0 3 0 3. Pentru liniile impare trebuie 2 când j e impar și 3 când j e par. `(j+1)%2` dă 0 pentru j impar și 1 pentru j par, deci `2+(j+1)%2` dă 2, 3, 2, 3, 2 ✔.

- a. `(i+j)%2` dă doar 0 și 1.
- b. `i%2+j%2` pentru i impar dă 2, 1, 2, 1, 2.
- c. `2+(i+1)%2` nu depinde de j: pentru i impar dă mereu 2.

### 3. Căutare binară cu comparațiile 49, 21, 23 → c. `(-10,21,23,49,50,70,95)`

Căutarea binară cere un tablou **sortat**, iar cu 7 elemente (pozițiile 1..7) mijlocul este poziția 4. În c: poziția 4 = **49**; 23 < 49 → căutăm în pozițiile 1..3, mijlocul 2 = **21**; 23 > 21 → poziția 3 = **23** ✔.

- a, b. tablourile nu sunt sortate.
- d. mijlocul este 49, apoi 22 (nu 21).

### 4. Echivalent cu `pow(x+y,2)` → a. `pow(x,2)+pow(y,2)+2*x*y`

Formula pătratului sumei: $(x+y)^2 = x^2 + 2xy + y^2$.

- b. este $2x + 2y + xy$. Greșit.
- c. lipsește termenul $2xy$. Greșit.
- d. este $2^{x+y}$. Greșit.

### 5. Cel mai mic multiplu comun → c. `z/y`

Bucla este algoritmul lui Euclid prin scăderi: la final `x == y == cmmdc(x0, y0)`. Cum `z = x0 * y0`, avem $\text{cmmmc}(x_0,y_0) = \dfrac{x_0 \cdot y_0}{\text{cmmdc}(x_0,y_0)}$ = `z/y` (sau `z/x`, e același lucru).

- a. `(x+y)/2` = cmmdc. b. `x/z` dă 0 sau 1. d. `z-x` nu are legătură cu cmmmc.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Bucla interioară numără în `nr` câți biți de 1 are `i` în baza 2. `nr = 1` exact când `i` este o **putere a lui 2** (1, 2, 4, 8, 16, …). Așadar `s` adună puterile lui 2 până când devine cel puțin `n`: s ia succesiv valorile 1, 3, 7, 15, 31, 63, …

#### a) Valoarea afișată pentru n = 10 → **15**

| i | nr (biți de 1) | s după pas |
|---|---|---|
| 1 | 1 | 1 |
| 2 | 1 | 3 |
| 3 | 2 | 3 |
| 4 | 1 | 7 |
| 5, 6, 7 | 2, 2, 3 | 7 |
| 8 | 1 | 15 |

Acum s = 15 ≥ 10, bucla se oprește → se afișează **15**. *(6p)*

#### b) Două valori pentru care se afișează 31

Se afișează 31 când bucla nu se oprește la s = 15 (adică $n > 15$), dar se oprește la s = 31 (adică $n \le 31$). Orice număr din **[16, 31]**, de exemplu **16** și **31**. *(câte 3p, total 6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, s = 0, i = 1, j, nr;
    cin >> n;
    while (s < n)
    {
        j = i; nr = 0;
        while (j != 0)
        {
            nr = nr + j % 2;
            j = j / 2;
        }
        if (nr == 1)
            s = s + i;
        i = i + 1;
    }
    cout << s;
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, repetitive 3p, decizie 2p, atribuiri 1p, corectitudine 1p.*

#### d) A doua structură „cât timp” înlocuită cu test final *(6p)*

La intrarea în bucla interioară `j = i ≥ 1`, deci `j ≠ 0` este adevărată măcar o dată — o structură cu test final este echivalentă direct.

```text
citește n (număr natural nenul)
s ← 0; i ← 1
┌cât timp s < n execută
│  j ← i; nr ← 0
│ ┌repetă
│ │  nr ← nr + j%2; j ← [j/2]
│ └până când j = 0
│ ┌dacă nr = 1 atunci
│ │  s ← s + i
│ └■
│  i ← i + 1
└■
scrie s
```

### 2. Interclasarea descrescătoare — perechile pentru elementele 5 și 6 *(6p)*

A = (128, 78, 8, 5, 3), B = (78, 18, 10, 6, 4, 1). La fiecare pas comparăm elementul curent din A cu cel din B și îl punem în C pe cel **mai mare**.

| Pas | Pereche (x, y) | Element adăugat în C |
|---|---|---|
| 1 | (128, 78) | 128 |
| 2 | (78, 78) | 78 |
| 3 | (8, 78) sau (78, 18) | 78 |
| 4 | (8, 18) | 18 |
| 5 | **(8, 10)** | 10 |
| 6 | **(8, 6)** | 8 |

Răspuns: **(8,10)** și **(8,6)** — câte 3p.

### 3. Suma totală din casa de marcat *(6p)*

Fiecare tip de bancnotă aduce cupiura × numărul de exemplare:

```cpp
cout << v1 * n1 + v2 * n2;
```

*Barem: valoarea pentru fiecare cupiură și suma lor 4p, afișare 1p, corectitudine 1p.*

## Subiectul al III-lea (30 de puncte)

### 1. Număr reprezentat în baza b — pseudocod *(10p)*

Parcurgem cifrele lui n cu `%10` și `[n/10]`; dacă găsim o cifră ≥ b, numărul nu este scris în baza b.

```text
citește n, b (numere naturale, b ∈ [2,10])
ok ← 1
┌cât timp n ≠ 0 și ok = 1 execută
│ ┌dacă n%10 ≥ b atunci
│ │  ok ← 0
│ └■
│  n ← [n/10]
└■
┌dacă ok = 1 atunci
│  scrie 1
│altfel
│  scrie -1
└■
```

**Verificare:** n = 32412, b = 8 → toate cifrele (2, 1, 4, 2, 3) sunt < 8 → 1 ✔; pentru b = 3 cifra 4 ≥ 3 → −1 ✔.

### 2. Floarea cu cel mai mic necesar de lumină *(10p)*

Florile ocupă câte două poziții: la poziția pară (0, 2, 4, …) este codul, la următoarea — numărul de ore. Căutăm minimul după ore, iar la egalitate păstrăm codul mai mic.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, v[101], i;
    cin >> n;
    for (i = 0; i < 2 * n; i++)
        cin >> v[i];
    int cod = v[0], ore = v[1];
    for (i = 2; i < 2 * n; i += 2)
        if (v[i + 1] < ore || (v[i + 1] == ore && v[i] < cod))
        {
            ore = v[i + 1];
            cod = v[i];
        }
    cout << cod;
    return 0;
}
```

**Verificare pe exemplu:** florile cu 3 ore sunt 17 și 15 → se alege codul mai mic, **15** ✔.

### 3. Cel mai lung mesaj de avertisment

#### a) Descrierea algoritmului *(2p)*

Citim biții pe rând, fără a-i memora. Păstrăm `lc` = lungimea secvenței curente de biți 1 și `lmax` = cea mai mare lungime întâlnită. La un bit 1 creștem `lc` și actualizăm `lmax`; la un bit 0 resetăm `lc = 0`. Toți biții mesajului sunt 1, deci la final afișăm de `lmax` ori valoarea 1.

**Eficiență:** o singură parcurgere a fișierului → timp **liniar** O(n); doar câteva variabile simple, fără tablou → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, lc = 0, lmax = 0;
    while (f >> x)
    {
        if (x == 1)
        {
            lc++;
            if (lc > lmax) lmax = lc;
        }
        else
            lc = 0;
    }
    for (int i = 1; i <= lmax; i++)
        cout << 1 << ' ';
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** secvențele de 1 au lungimile 1, 5, 8, 1 → se afișează opt valori `1 1 1 1 1 1 1 1` ✔. Baremul descrie o variantă echivalentă cu pozițiile ultimilor doi biți 0 (lungimea = diferența pozițiilor − 1).

## Ce merită reținut din varianta 1

- **Negații logice:** `!(a!=b)` ⇔ `a==b`; „și … dar nu” se traduce prin `&&`.
- **Căutare binară:** tabloul trebuie să fie sortat; la 7 elemente prima comparație e cu elementul din mijloc (poziția 4).
- **cmmmc** = produs / cmmdc, după algoritmul lui Euclid.
- **Numărul de biți de 1** egal cu 1 ⇔ puterile lui 2.
- **Secvență maximă din fișier:** contor curent + maxim, resetat la fiecare element care „rupe” secvența.
