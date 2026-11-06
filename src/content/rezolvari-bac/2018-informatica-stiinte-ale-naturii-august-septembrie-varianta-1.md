Rezolvarea completă a subiectului de **Bacalaureat 2018 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea august–septembrie, **varianta 1**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (30 de puncte)

### 1. Șirul crescător pentru `z<x && 2*z==3*y` → b. y, z, x *(4p)*

Din `2*z == 3*y` rezultă $z = \frac{3}{2}y > y$ (numere nenule). Din `z < x` avem și $z < x$. Deci $y < z < x$ — de exemplu y = 2, z = 3, x = 4.

### 2. Algoritmul în pseudocod

Algoritmul parcurge cifrele lui |n| de la dreapta la stânga și ține în `m` maximul cifrelor întâlnite până acum. La fiecare pas pune acest maxim pe poziția cifrei curente: practic, fiecare cifră este înlocuită cu maximul dintre ea și cifrele din dreapta ei.

#### a) Pentru n = 10523 → **55533** *(6p)*

| c | m | x | p (după) |
|---|---|---|---|
| 3 | 3 | 3 | 10 |
| 2 | 3 | 33 | 100 |
| 5 | 5 | 533 | 1000 |
| 0 | 5 | 5533 | 10000 |
| 1 | 5 | 55533 | 100000 |

Se afișează **55533**.

#### b) Patru numere pentru care se afișează 722 *(4p)*

Ultima cifră trebuie să fie 2 și să rămână maximul până la cifra sutelor, care devine 7: numerele au forma 7?2 cu cifra zecilor ≤ 2. Semnul nu contează (n negativ devine pozitiv). Exemple: **722, −722, 712, −712** (sau 702, −702). Câte 1p pentru fiecare număr.

#### c) Algoritm echivalent cu structură repetitivă cu test inițial *(6p)*

Structura **repetă** execută corpul cel puțin o dată, chiar și pentru n = 0. De aceea executăm corpul o dată înainte de **cât timp**:

```text
citește n (număr întreg)
m ← 0; p ← 1; x ← 0
┌dacă n<0 atunci n ← -n
└■
c ← n%10; n ← [n/10]
┌dacă c>m atunci m ← c
└■
x ← m*p+x; p ← p*10
┌cât timp n≠0 execută
│  c ← n%10; n ← [n/10]
│ ┌dacă c>m atunci m ← c
│ └■
│  x ← m*p+x; p ← p*10
└■
scrie x
```

#### d) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, c, m = 0, p = 1, x = 0;
    cin >> n;
    if (n < 0) n = -n;
    do
    {
        c = n % 10;
        n = n / 10;
        if (c > m) m = c;
        x = m * p + x;
        p = p * 10;
    } while (n != 0);
    cout << x;
    return 0;
}
```

„Repetă … până când n = 0” devine `do { … } while (n != 0);` — condiția se **neagă**. *Barem: variabile 1p, citire 1p, afișare 1p, decizii 3p, repetitivă 2p, atribuiri 1p, corectitudine 1p.*

## Subiectul al II-lea (30 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **a** (câte 4 puncte).

### 1. Perechile „săritură de cal” → c. `abs(di)*abs(dj)==2`

Cele 8 perechi au modulele {1, 2} în orice ordine. Produsul modulelor este 2 doar pentru $1 \cdot 2$ sau $2 \cdot 1$ — exact perechile cerute.

- a. Suma 3 acceptă și (0, 3), (3, 0). Greșit.
- b. Exclude (1, 2) (diferența e −1) și acceptă (3, 2). Greșit.
- d. Împarte la `abs(dj)`, care poate fi 0, și nu acceptă (1, 2). Greșit.

### 2. Ultima cifră a lui $4^n$ → a. S1 și S2

Puterile lui 4 se termină în 4, 6, 4, 6, … : $4^0 = 1$, iar pentru n ≥ 1 ultima cifră este 4 dacă n e impar și 6 dacă n e par.

- **S1** aplică exact această regulă. Corect.
- **S2** păstrează la fiecare pas doar ultima cifră a produsului. Corect.
- **S3** face `p=(p%10)*4`, deci p poate rămâne cu două cifre: pentru n = 2 obține 16, nu 6. Greșit.

### 3. Câtul și restul lui 2018 la x *(6p)*

```cpp
if (x != 0)
{
    cat = 2018 / x;
    rest = 2018 % x;
}
else
    cout << "impartire nepermisa";
```

### 4. Cel mai mic x > n, neprim, cu un singur prim în [n, x]

#### a) Algoritmul în pseudocod *(10p)*

Fie p primul număr prim ≥ n. Intervalul [n, p] conține un singur prim, iar p + 1 este par și mai mare ca 2, deci **nu e prim**; orice y cu n < y < p nu are niciun prim în [n, y]. Răspunsul este deci **p + 1**: căutăm primul prim începând de la n și afișăm succesorul lui.

```text
citește n (număr natural, n≥3)
x ← n
┌repetă
│  prim ← 1
│  d ← 2
│ ┌cât timp d*d≤x și prim=1 execută
│ │ ┌dacă x%d=0 atunci prim ← 0
│ │ └■
│ │  d ← d+1
│ └■
│  x ← x+1
└până când prim=1
scrie x
```

La ieșirea din buclă, x a fost deja mărit cu 1 după primul număr prim găsit, deci se afișează exact p + 1. Exemplu: n = 8 → 8, 9, 10 nu sunt prime, 11 este → se afișează **12** ✔.

#### b) Rolul variabilelor, date de intrare și de ieșire *(6p)*

- **n** — numărul citit;
- **x** — numărul testat curent; la final, rezultatul (primul prim ≥ n, plus 1);
- **d** — divizorul încercat în testul de primalitate;
- **prim** — 1 dacă numărul testat este prim, 0 altfel.

**Date de intrare:** n. **Date de ieșire:** x.

## Subiectul al III-lea (30 de puncte)

### 1. Interclasarea descrescătoare → c. (46,21,18,17,14,14,11,8,4,3) *(4p)*

Interclasarea păstrează **toate** cele 10 elemente (a are doar 5) și le pune în ordine descrescătoare. b și d au elemente în ordine greșită (17 înainte de 18, 8 înainte de 11).

### 2. Numărul valorilor egale cu 2018 *(6p)*

```cpp
nr = 0;
for(i=1;i<=10;i++)
{ cin >> x;
  if (x == 2018) nr++;
}
```

### 3. Tabloul care, citit de la dreapta la stânga, dă șirul citit *(10p)*

Ultimul element al tabloului trebuie să fie primul număr citit, deci citim direct de la poziția n − 1 spre 0.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[51];
    cin >> n;
    for (int i = n - 1; i >= 0; i--) cin >> a[i];
    for (int i = 0; i < n; i++) cout << a[i] << ' ';
    return 0;
}
```

**Verificare:** n = 4, șirul 7 2 5 3 → tabloul `3 5 2 7` ✔.

### 4. Termenii șirului ≤ x, în ordine descrescătoare

#### a) Descrierea algoritmului *(2p)*

Din $f_n = 2 f_{n-1} + 2$ rezultă termenul anterior: $f_{n-1} = \frac{f_n - 2}{2}$. Scriem x în fișier, apoi, cât timp x > 0, calculăm x ← [(x − 2) / 2] și îl scriem. Pentru x = 3, [(3 − 2)/2] = 0, deci se ajunge corect la primul termen, 0.

**Eficiență:** fiecare termen se obține în O(1) din cel următor, iar termenii aproape se dublează, deci sunt doar câteva zeci de pași (timp **liniar** în numărul de termeni scriși). Folosim o singură variabilă → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    int x;
    cin >> x;
    ofstream g("bac.txt");
    g << x;
    while (x > 0)
    {
        x = (x - 2) / 2;
        g << ' ' << x;
    }
    g.close();
    return 0;
}
```

**Verificare** pentru 158: fișierul conține `158 78 38 18 8 3 0` ✔.

## Ce merită reținut din varianta 1

- **Repetă … până când** → `do … while` cu condiția negată; la transformarea în „cât timp”, corpul se scrie o dată înainte de buclă.
- **„Săritura calului”:** produsul modulelor deplasărilor este 2.
- **Ultima cifră a unui produs:** păstrează la fiecare pas doar `% 10`.
- **Interclasarea** păstrează toate elementele ambelor tablouri.
- **Șiruri recurente:** scoate din relație termenul anterior ca să mergi înapoi fără să memorezi șirul.
