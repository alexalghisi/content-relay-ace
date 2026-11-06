Rezolvarea completă a subiectului de **Bacalaureat 2017 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea iunie–iulie, **varianta 4**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

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

### 1. Expresia cu valoarea 1 → b. `ceil(6.15)>floor(5.61)`

`ceil` rotunjește în sus, `floor` în jos: ceil(6.15) = 7, ceil(5.61) = 6, floor(6.15) = 6, floor(5.61) = 5.

- a. 7 < 6 — fals
- b. 7 > 5 — **adevărat**
- c. 6 < 6 — fals
- d. 6 < 5 — fals

### 2. Condiția pentru divizorii proprii → c. `i<=x/2`

Un divizor propriu (diferit de x) este cel mult x/2, deci bucla trebuie să meargă de la 2 până la x/2. Cu `i<=x` s-ar afișa și x; cu `i>0` sau `i>=2` bucla nu s-ar opri.

### 3. Inițiala și media anuală *(6p)*

```cpp
char initiala;
cout << initiala << '\n' << (media1 + media2) / 2.0;
```

Împărțim la `2.0`: altfel 9 și 10 ar da 9 în loc de **9.5**.

### 4. Inserarea jumătății după fiecare cifră pară

#### a) Algoritmul în pseudocod *(10p)*

Parcurgem cifrele lui n de la dreapta și construim rezultatul r tot de la dreapta, cu o putere p a lui 10. Dacă cifra c este pară, întâi punem cifra inserată c/2 (ea stă după c), apoi pe c.

```text
citește n (număr natural nenul)
r ← 0; p ← 1
┌repetă
│  c ← n%10
│ ┌dacă c%2=0 atunci
│ │  r ← r+[c/2]*p
│ │  p ← p*10
│ └■
│  r ← r+c*p
│  p ← p*10
│  n ← [n/10]
└până când n=0
scrie r
```

**Urmărire pentru 2380:** 0 → r = 00; 8 → r = 400, apoi 8400; 3 → 38400; 2 → 138400, apoi **2138400** ✔. Pentru 35 nu există cifre pare → **35** ✔.

#### b) Rolul variabilelor, date de intrare și de ieșire *(6p)*

- **n** — numărul citit; i se elimină pe rând ultima cifră;
- **c** — cifra curentă (ultima cifră a lui n);
- **p** — puterea lui 10 corespunzătoare poziției pe care se pune următoarea cifră în r;
- **r** — numărul construit.

**Date de intrare:** n. **Date de ieșire:** r.

## Subiectul al III-lea (30 de puncte)

### 1. Condiția pentru chenarul de 1 → a. `(4-i)%4==0 || (4-j)%4==0` *(4p)*

Valorile 1 sunt pe **chenar**: linia 0 sau 4, ori coloana 0 sau 4. Pentru i ∈ {0, …, 4}, `(4-i)%4==0` este adevărat exact pentru i = 0 (4 % 4) și i = 4 (0 % 4). Chenarul înseamnă linie de margine **sau** coloană de margine → `||`.

### 2. Interclasarea lui A = (1,7,9) cu B = (5,7,8,12) *(6p)*

Comparăm mereu primele elemente rămase și îl luăm pe cel mai mic:

**1, 5, 7, 7, 8, 9, 12**

Interclasarea păstrează toate elementele, deci 7 apare de două ori.

### 3. Ordonarea descrescătoare doar a elementelor nenule *(10p)*

Folosim sortarea prin selecție (interschimbare), dar comparăm și interschimbăm **doar elemente nenule**; zerourile nu sunt atinse, deci își păstrează pozițiile.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[51], aux;
    cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    for (int i = 0; i < n - 1; i++)
        if (a[i] != 0)
            for (int j = i + 1; j < n; j++)
                if (a[j] != 0 && a[j] > a[i])   // comparăm doar elemente nenule
                {
                    aux = a[i];
                    a[i] = a[j];
                    a[j] = aux;
                }
    for (int i = 0; i < n; i++) cout << a[i] << ' ';
    return 0;
}
```

**Verificare:** (5, 0, 0, 9, 3, 4, 0, 7, 3) → `9 0 0 7 5 4 0 3 3` ✔.

### 4. Numărul de secvențe pare

#### a) Descrierea algoritmului *(2p)*

Citim numerele pe rând și ținem `L` = numărul de termeni pari consecutivi până la poziția curentă (crește la un termen par, revine la 0 la unul impar). O secvență pară trebuie să aibă cel puțin 2 termeni, deci o numărăm exact în momentul în care L devine 2 — fiecare secvență maximală trece o singură dată prin această valoare.

**Eficiență:** o singură parcurgere a fișierului → timp **liniar** O(n); doar trei variabile, fără tablou → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, L = 0, nr = 0;
    while (f >> x)
        if (x % 2 == 0)
        {
            L++;
            if (L == 2) nr++;     // secvența curentă tocmai a devenit validă
        }
        else L = 0;
    cout << nr;
    f.close();
    return 0;
}
```

**Verificare:** secvențele pare sunt 4 6 10 2 8, 4 6 14 și 20 4 (singurul 2 de la început nu formează secvență) → **3** ✔.

## Ce merită reținut din varianta 4

- **O singură cifră:** `x%10==x`.
- **ceil / floor:** rotunjire în sus / în jos la întreg.
- **Divizori proprii:** se caută între 2 și x/2.
- **Chenarul unei matrice:** linie de margine `||` coloană de margine.
- **Sortare cu elemente „fixe”:** compară și interschimbă doar elementele care participă la ordonare.
- **Numărarea secvențelor de lungime ≥ 2:** numără momentul în care lungimea curentă devine 2.
