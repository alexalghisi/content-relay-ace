Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2017 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (30 de puncte)

### 1. Valoarea expresiei `5+7/2` → b. 8 *(4p)*

Împărțirea are prioritate și este **întreagă**: 7 / 2 = 3, deci 5 + 3 = **8**.

### 2. Algoritmul în pseudocod

Pentru fiecare x din [p, q], bucla interioară elimină de la dreapta cifrele egale cu ultima cifră c. Dacă y ajunge la 0, toate cifrele lui x erau egale cu c. Algoritmul afișează deci **numerele din [p, q] care au toate cifrele egale**.

#### a) Pentru 65 și 80 → **66 77** *(6p)*

Între 65 și 80, numerele cu toate cifrele egale sunt 66 și 77.

#### b) p = 1234, se afișează 5 numere → **7776** *(4p)*

Numerele cu cifre identice de la 1234 încolo: 2222, 3333, 4444, 5555, 6666, 7777, … Ca să apară exact primele cinci, q trebuie să fie între 6666 și 7776. Cel mai mare: **7776**.

#### c) „cât timp” exterior înlocuit cu „pentru” *(6p)*

```text
citește p,q (numere naturale nenule, p≤q)
┌pentru x ← p,q execută
│  y ← x
│  c ← y%10
│ ┌cât timp y≠0 și y%10=c execută
│ │  y ← [y/10]
│ └■
│ ┌dacă y=0 atunci scrie x,' '
│ └■
└■
```

#### d) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int p, q, x, y, c;
    cin >> p >> q;
    x = p;
    while (x <= q)
    {
        y = x;
        c = y % 10;
        while (y != 0 && y % 10 == c)
            y = y / 10;
        if (y == 0) cout << x << ' ';
        x = x + 1;
    }
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, repetitive 4p, atribuiri 2p, corectitudine 1p.*

## Subiectul al II-lea (30 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **a** (câte 4 puncte).

### 1. Un frate al nodului 4 → c. 7

În vectorul (3, 0, 2, 2, 4, 4, 2, 4), tatăl lui 4 este 2. Frații lui 4 sunt ceilalți fii ai lui 2: nodurile cu valoarea 2 în vector, adică 3, 4, 7. Dintre variante, **7**.

### 2. Numărul minim de vârfuri pentru 15 arce fără circuite → a. 6

Fără circuite, între două vârfuri poate exista cel mult un arc (altfel (i,j) și (j,i) formează un circuit), deci cu n vârfuri sunt cel mult $\frac{n(n-1)}{2}$ arce. Pentru n = 5 avem maxim 10 < 15; pentru n = 6 avem maxim 15 — se poate (toate arcele orientate de la vârful mai mic la cel mai mare). Minimul: **6**.

### 3. Scăderea fracției 1/2017 *(6p)*

$\frac{x}{y} - \frac{1}{2017} = \frac{2017x - y}{2017y}$.

```cpp
fd.x = f.x * 2017 - f.y;
fd.y = f.y * 2017;
```

### 4. Graf conex cu 5 noduri, dintre care 3 de grad 1 *(6p)*

Muchiile [1,2], [2,3], [3,4], [3,5]: gradele sunt 1, 2, 3, 1, 1 → nodurile 1, 4, 5 au gradul 1, iar graful este conex.

```text
1 — 2 — 3 — 4
        |
        5
```

Matricea de adiacență:

```text
0 1 0 0 0
1 0 1 0 0
0 1 0 1 1
0 0 1 0 0
0 0 1 0 0
```

### 5. Înlocuirea cuvintelor cu număr par de litere cu # *(10p)*

Parcurgem textul cuvânt cu cuvânt (de la poziția i până la următorul spațiu) și construim un text nou `t`: pentru un cuvânt de lungime pară adăugăm `#`, altfel cuvântul însuși, păstrând spațiile. La final copiem `t` înapoi în `s` (transformare în memorie).

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[101], t[101] = "";
    int gasit = 0, i = 0, n;
    cin.getline(s, 101);
    n = strlen(s);
    while (i < n)
    {
        int j = i;
        while (j < n && s[j] != ' ') j++;      // cuvântul este s[i..j-1]
        if ((j - i) % 2 == 0)
        {
            strcat(t, "#");
            gasit = 1;
        }
        else
            strncat(t, s + i, j - i);
        if (j < n) strcat(t, " ");
        i = j + 1;
    }
    strcpy(s, t);
    if (gasit) cout << s;
    else cout << "nu exista";
    return 0;
}
```

**Verificare:** „anii de liceu sunt foarte frumosi” → `# # liceu # # frumosi` ✔.

## Subiectul al III-lea (30 de puncte)

### 1. A opta soluție → c. {clarinet, corn, saxofon} *(4p)*

După {clarinet, corn, oboi} (a 6-a) urmează extinderea {clarinet, corn, oboi, saxofon} (a 7-a), apoi, terminate extinderile, se înlocuiește oboi cu saxofon: **{clarinet, corn, saxofon}** (a 8-a).

### 2. Ce afișează `f(12)` → **2 2 3 3 2 4 6** *(6p)*

f(n) afișează fiecare divizor i din [2, n/2] și apelează imediat f(n/i):

- f(12): i = 2 → **2**, apel f(6)
  - f(6): i = 2 → **2**, f(3) (nimic); i = 3 → **3**, f(2) (nimic)
- f(12): i = 3 → **3**, apel f(4)
  - f(4): i = 2 → **2**, f(2) (nimic)
- f(12): i = 4 → **4**, f(3); i = 6 → **6**, f(2)

Se afișează **2 2 3 3 2 4 6**.

### 3. Subprogramul nrDiv *(10p)*

Numerele de forma k(k + 1) cresc repede, deci nu parcurgem intervalul [a, b], ci valorile lui k: cât timp $k(k+1) \le b$ (cel mult ~31 623 de pași), numărăm produsele care sunt ≥ a.

```cpp
int nrDiv(int a, int b)
{
    int nr = 0;
    for (long long k = 1; k * (k + 1) <= b; k++)
        if (k * (k + 1) >= a) nr++;
    return nr;
}
```

`long long` evită depășirea la calculul lui k(k + 1) aproape de $10^9$. **Verificare:** a = 10, b = 40 → 12, 20, 30 → **3** ✔.

### 4. Termenii șirului ≤ y, în ordine descrescătoare

#### a) Descrierea algoritmului *(2p)*

Mergem înapoi în șir, de la y. Termenii de pe poziții pare se obțin adunând 1 la cel anterior, deci sunt pari, iar cei de pe poziții impare (de la al treilea) sunt de forma $1 + 2f_{n-2} = 2f_{n-1} - 1$, deci impari. Astfel:

- dacă y este par, termenul anterior este y − 1;
- dacă y este impar (și y ≠ x), termenul anterior este (y + 1) / 2.

Scriem y, apoi repetăm acest pas, scriind fiecare termen, până ajungem la x (primul termen).

**Eficiență:** fiecare termen se calculează în O(1) din cel următor, iar la fiecare doi pași valoarea se înjumătățește, deci se fac doar câteva zeci de pași; timpul este **liniar** în numărul de termeni scriși. Folosim două variabile → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    int x, y;
    cin >> x >> y;
    ofstream g("bac.txt");
    g << y;
    while (y != x)
    {
        if (y % 2 == 1) y = (y + 1) / 2;
        else y = y - 1;
        g << ' ' << y;
    }
    g.close();
    return 0;
}
```

**Verificare** pentru x = 21, y = 175: fișierul conține `175 88 87 44 43 22 21` ✔.

## Ce merită reținut din model

- **Împărțirea întreagă:** `7/2` este 3, nu 3.5.
- **Numere cu toate cifrele egale:** elimină cifrele egale cu ultima și verifică dacă ai ajuns la 0.
- **Graf orientat fără circuite:** cel mult $\frac{n(n-1)}{2}$ arce.
- **Frați în arbore:** noduri cu același tată în vectorul de tați.
- **Recursivitate cu buclă:** urmărește apelurile în adâncime, în ordinea în care se fac.
- **Numere de forma k(k+1):** parcurge k, nu intervalul de valori.
