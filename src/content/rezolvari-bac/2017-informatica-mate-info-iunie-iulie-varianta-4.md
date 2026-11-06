Rezolvarea completă a subiectului de **Bacalaureat 2017 la Informatică, limbajul C/C++, profil mate-info**, sesiunea iunie–iulie, **varianta 4**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (30 de puncte)

### 1. x are exact o cifră → a. `x%10==x` *(4p)*

Restul împărțirii la 10 este ultima cifră. Ea este egală cu întregul număr doar când numărul are o singură cifră (0…9).

- b. `x/10==x` este adevărat doar pentru x = 0.
- c. `x%10==x/10` — de exemplu 11 are 1 = 1, deși are două cifre.
- d. `(x%10)/10` este mereu 0, deci doar x = 0.

### 2. Algoritmul în pseudocod

Algoritmul parcurge un „tablou” n × n: pe cele două diagonale (i = j sau i + j = n + 1) scrie `#`, iar în rest scrie numărul coloanei j.

#### a) Pentru n = 3 → **#2#1#3#2#** *(6p)*

| i | j = 1 | j = 2 | j = 3 |
|---|---|---|---|
| 1 | # | 2 | # |
| 2 | 1 | # | 3 |
| 3 | # | 2 | # |

Totul se scrie pe un singur rând: **#2#1#3#2#**.

#### b) 100 de simboluri # → **50** *(4p)*

Fiecare diagonală are n elemente. Pentru n par, diagonalele nu au element comun → 2n simboluri; pentru n impar se suprapun în centru → 2n − 1 (număr impar). Deci 2n = 100 → **n = 50**.

#### c) Prima structură „pentru” înlocuită cu una cu test inițial *(6p)*

```text
citește n (număr natural nenul)
i ← 1
┌cât timp i≤n execută
│ ┌pentru j ← 1,n execută
│ │ ┌dacă i=j sau i+j=n+1 atunci
│ │ │  scrie '#'
│ │ │altfel
│ │ │  scrie j
│ │ └■
│ └■
│  i ← i+1
└■
```

#### d) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, i, j;
    cin >> n;
    for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++)
            if (i == j || i + j == n + 1) cout << '#';
            else cout << j;
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, decizie 3p, repetitive 3p, corectitudine 1p.*

## Subiectul al II-lea (30 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **c** (câte 4 puncte).

### 1. `strstr("veni,vidi,vici","vi")` → b. vidi,vici

`strstr` returnează adresa **primei apariții** a lui „vi”; afișarea pornește de acolo și merge până la sfârșitul șirului: **vidi,vici**.

### 2. Minimul de muchii eliminate → c. 10

Un graf cu 7 noduri are cel mult 21 de muchii, deci este **complet**. Împărțim nodurile în două grupe (fiecare cu cel puțin 2 noduri) și eliminăm toate muchiile dintre grupe, adică $k \cdot (7-k)$ muchii:

- 2 + 5 → $2 \cdot 5 = 10$
- 3 + 4 → $3 \cdot 4 = 12$

Minimul este **10**.

### 3. Prima literă și media anuală *(6p)*

```cpp
cout << x.nume[0] << '\n' << (x.media1 + x.media2) / 2.0;
```

Împărțim la `2.0`, altfel media 9 și 10 ar da 9 în loc de **9.5**.

### 4. Graf orientat cu 5 vârfuri, 6 arce și două circuite elementare *(6p)*

Alegem arcele (1,2), (2,3), (3,1) și (3,4), (4,5), (5,3). Circuitele elementare sunt exact **1, 2, 3, 1** și **3, 4, 5, 3** (au în comun doar vârful 3, deci nu se pot combina într-un circuit elementar nou).

```text
0 1 0 0 0
0 0 1 0 0
1 0 0 1 0
0 0 0 0 1
0 0 1 0 0
```

Matricea are 5 × 5 elemente și exact 6 valori de 1.

### 5. Conturul tabloului primește valoarea din colțul dreapta-jos *(10p)*

Salvăm întâi valoarea `a[n-1][m-1]` într-o variabilă — colțul face și el parte din contur.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, m, a[51][51];
    cin >> n >> m;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++) cin >> a[i][j];
    int v = a[n - 1][m - 1];
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            if (i == 0 || i == n - 1 || j == 0 || j == m - 1)
                a[i][j] = v;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++) cout << a[i][j] << ' ';
        cout << '\n';
    }
    return 0;
}
```

**Verificare** pe exemplul din enunț: colțul are valoarea 5 și se obține exact tabloul cerut ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Al optulea număr generat → b. 152 *(4p)*

După 128 urmează numerele care încep cu 15: 151 are trei cifre impare (1, 5, 1) — **nu** e valid; următorul este **152** (1 și 5 impare, 2 par).

### 2. Valorile `f(3,9)` și `f(1,1000)` *(6p)*

- f(3,9): 3·5 = 15 > 9/5 = 1 → returnează **3**.
- f(1,1000): 5 > 200? nu → f(5,200): 25 > 40? nu → f(25,40): 125 > 8 → returnează **25**.

### 3. Subprogramul duplicare *(10p)*

Parcurgem cifrele de la dreapta la stânga și construim rezultatul `r` tot de la dreapta, cu o putere `p` a lui 10. Dacă cifra c este pară, punem întâi cifra inserată c/2 (ea stă **după** c, deci mai la dreapta), apoi pe c.

```cpp
void duplicare(int &n)
{
    int r = 0, p = 1, c;
    do
    {
        c = n % 10;
        if (c % 2 == 0)
        {
            r = r + (c / 2) * p;   // cifra inserată, jumătatea lui c
            p = p * 10;
        }
        r = r + c * p;             // cifra originală, în fața ei
        p = p * 10;
        n = n / 10;
    } while (n != 0);
    n = r;
}
```

**Urmărire pentru 2380:** 0 → r = 00 (p = 100); 8 → r = 400, apoi 8400; 3 → 38400; 2 → 138400, apoi **2138400** ✔. Pentru 35 nu există cifre pare → 35 ✔. Parametrul este transmis **prin referință**, ca rezultatul să ajungă în apelant. Cel mai mare rezultat posibil are 8 cifre, deci încape în `int`.

### 4. Numărul de secvențe pare de lungime maximă

#### a) Descrierea algoritmului *(2p)*

Citim numerele pe rând și ținem `L` = numărul de termeni pari consecutivi până la poziția curentă (crește la un termen par, revine la 0 la unul impar). Când L ≥ 2: dacă L depășește maximul, maximul devine L și numărul de secvențe devine 1; dacă L este egal cu maximul, creștem numărul de secvențe. Fiecare secvență atinge o anumită lungime o singură dată, deci este numărată corect.

**Eficiență:** o singură parcurgere a fișierului → timp **liniar** O(n); doar câteva variabile, fără tablou → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, L = 0, Lmax = 1, nr = 0;
    while (f >> x)
        if (x % 2 == 0)
        {
            L++;
            if (L >= 2)
            {
                if (L > Lmax) { Lmax = L; nr = 1; }
                else if (L == Lmax) nr++;
            }
        }
        else L = 0;
    cout << nr;
    f.close();
    return 0;
}
```

**Verificare** pe exemplu: secvențele pare sunt 4 6 10 2 8 (5), 4 6 10 (3), 20 4 (2), 10 2 (2), 2 6 8 10 16 (5) → două secvențe de lungime maximă 5 → se afișează **2** ✔.

## Ce merită reținut din varianta 4

- **O singură cifră:** `x%10==x`.
- **Diagonalele unei matrice n × n** au un element comun doar pentru n impar.
- **`strstr`** întoarce adresa primei apariții; afișarea continuă până la `'\0'`.
- **Inserarea de cifre** se face cel mai ușor construind rezultatul de la dreapta, cu o putere a lui 10.
- **Secvențe maximale:** un contor resetat la termenii „răi”, plus maxim și număr de apariții ale maximului.
