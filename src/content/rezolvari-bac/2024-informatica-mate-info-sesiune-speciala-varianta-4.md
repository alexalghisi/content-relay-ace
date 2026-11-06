Rezolvarea completă a subiectului de **Bacalaureat 2024 la Informatică, limbajul C/C++, profil mate-info**, sesiunea specială, **varianta 4**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **a**, 2 – **b**, 3 – **d**, 4 – **d**, 5 – **c** (câte 4 puncte).

### 1. Echivalentă cu `!(x>25 || y<6)` → a. `x<=25 && y>=6`

După De Morgan, $\neg(A \lor B) = \neg A \land \neg B$: `!(x>25)` devine `x<=25`, `!(y<6)` devine `y>=6`, iar `||` devine `&&`.

- b. și d. păstrează `||` — greșit.
- c. nu neagă și a doua condiție.

### 2. Ce afișează `f(9)` → b. 545522

- f(9): 9 nu e multiplu de 5 → x = 9·5/2 = 22, apel f(22); la revenire afișează **22**.
- f(22): x = 22·5/2 = 55, apel f(55); la revenire afișează **55**.
- f(55): 55 e multiplu de 5 → x = 54, afișează **54**.

Ordinea afișării (de la cel mai adânc apel): 54, 55, 22 → **545522**.

### 3. Soluțiile din jurul lui SV-68-CAB → d. SV-68-BAC, TL-24-BAC

Grupul de litere are doar două variante: BAC, apoi CAB. Deci înaintea lui SV-68-CAB este **SV-68-BAC**. După el, 68 este ultimul număr posibil (cifre strict crescătoare din {2,4,6,8}), iar SV-68-CAB este ultima soluție cu SV; urmează primul indicativ următor, TL, cu primul număr și primul grup: **TL-24-BAC**.

- a. „86” nu are cifrele în ordine crescătoare; b., c. nu sunt vecine cu SV-68-CAB.

### 4. Anul achiziționării → d. `t.achizitionare.an`

Variabila este `t`, câmpul de tip `data` se numește `achizitionare`, iar acesta are câmpul `an`. Variantele a și c folosesc numele tipului (`telefon`), iar b folosește numele tipului `data` în locul câmpului.

### 5. Lungimea maximă a unui drum elementar → c. 4

Un drum elementar nu repetă vârfuri, deci trece prin cel mult 5 vârfuri și are cel mult **4 arce**. Lungimea 4 se poate atinge: de exemplu, graful cu arcele (i, j) pentru toate perechile i < j are gradele interne + externe egale cu 4 pentru fiecare vârf și conține drumul 1→2→3→4→5. Variantele 10, 8 depășesc numărul de vârfuri.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare i de la 1 la n, m devine i fără factorii 2 (cea mai mare parte impară a lui i). Se afișează m doar dacă m ≠ i, adică doar pentru **i par**.

#### a) Pentru n = 10 → **1 1 3 1 5**

i = 2 → 1; i = 4 → 1; i = 6 → 3; i = 8 → 1; i = 10 → 5. Numerele impare nu se afișează (m = i). *(6p)*

#### b) Exact patru valori egale cu 1

Se afișează 1 pentru fiecare **putere a lui 2** cel puțin 2: 2, 4, 8, 16, 32, … Ca să fie exact 4 (2, 4, 8, 16), trebuie $16 \le n \le 31$, de exemplu **16** și **31**. *(6p)*

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

#### d) Algoritm echivalent cu „pentru … execută” *(6p)*

```text
citește n (număr natural, n ≥ 2)
┌pentru i ← 1, n execută
│  m ← i
│ ┌cât timp m%2 = 0 execută
│ │  m ← [m/2]
│ └■
│ ┌dacă m ≠ i atunci scrie m, ' '
│ └■
└■
```

Inițializarea `i ← 1` și actualizarea `i ← i + 1` sunt preluate de structura „pentru”.

### 2. Graf parțial conex și fără cicluri *(6p)*

Un graf parțial păstrează toate nodurile, eliminând doar muchii. Conex și fără cicluri înseamnă **arbore**: cu 6 noduri, păstrăm 5 muchii. Graful are 7 muchii și două cicluri: 2–4–5–2 și 4–5–6–4. Eliminăm [4,5] și [5,6] și păstrăm [1,2], [2,3], [2,4], [2,5], [4,6]:

```text
1: 2
2: 1, 3, 4, 5
3: 2
4: 2, 6
5: 2
6: 4
```

### 3. Cuvânt de două litere cu o vocală și o consoană *(6p)*

Cuvântul trebuie să aibă exact 2 litere, iar una să fie vocală și cealaltă nu: „este vocală” pentru prima literă trebuie să fie **diferit** de „este vocală” pentru a doua.

```cpp
c = 0;
for (i = 1; i <= 10; i++)
{
    cin >> s;
    if (strlen(s) == 2 &&
        (strchr("aeiou", s[0]) != NULL) != (strchr("aeiou", s[1]) != NULL))
        c = 1;
}
```

Exemplu: „au” are două vocale, „el” are vocală + consoană → c = 1 ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul fulg *(10p)*

n reprezintă o aglomerare studiată dacă are **exact 9 cifre**, toate din {1, 2, 3, 4}, și fiecare dintre cele patru cifre apare cel puțin o dată. Parcurgem cifrele, le numărăm și marcăm ce tipuri au apărut.

```cpp
int fulg(int n)
{
    int nr = 0, ap[10] = {0};
    while (n != 0)
    {
        int c = n % 10;
        if (c < 1 || c > 4) return 0;
        ap[c] = 1;
        nr++;
        n = n / 10;
    }
    if (nr == 9 && ap[1] && ap[2] && ap[3] && ap[4]) return 1;
    return 0;
}
```

**Verificare:** 112243413 → 9 cifre din {1,…,4}, toate tipurile prezente → 1 ✔; 12314 (5 cifre) → 0; 112253513 (cifra 5) → 0; 112243457 → 0; 111122223 (lipsește 4) → 0 ✔.

### 2. Tabloul cu valori generate *(10p)*

Lipirea lui b la dreapta lui a este $a \cdot 10^{k} + b$, unde k este numărul de cifre ale lui b. Calculăm ambele variante (i lipit cu j și j lipit cu i) și o păstrăm pe cea mai mică.

```cpp
#include <iostream>
using namespace std;

int lipire(int a, int b)
{
    int p = 1;
    while (p <= b) p = p * 10;   // 10^(numărul de cifre ale lui b)
    return a * p + b;
}

int main()
{
    int m, n, a[51][51], i, j;
    cin >> m >> n;
    for (i = 1; i <= m; i++)
        for (j = 1; j <= n; j++)
        {
            int x = lipire(i, j), y = lipire(j, i);
            a[i][j] = (x < y) ? x : y;
        }
    for (i = 1; i <= m; i++)
    {
        for (j = 1; j <= n; j++)
            cout << a[i][j] << ' ';
        cout << '\n';
    }
    return 0;
}
```

**Verificare:** pentru i = 5, j = 2: 52 și 25 → 25 ✔; pentru i = j = 3: 33 ✔. Se obține exact tabloul din exemplu.

### 3. Primul și ultimul număr cu cifra maximă

#### a) Descrierea algoritmului *(2p)*

Citim numerele pe rând și calculăm cifra maximă a fiecăruia. Reținem cifra maximă globală `cmax`, primul număr care o conține (`p`), ultimul (`u`) și câte numere o conțin (`nr`). Dacă numărul curent are o cifră mai mare decât `cmax`, reluăm totul de la el (`p = u = x`, `nr = 1`); dacă are cifra maximă egală cu `cmax`, actualizăm `u = x` și creștem `nr`. La final, dacă `nr < 2`, afișăm „nu exista”, altfel p și u.

**Eficiență:** o singură parcurgere → timp **liniar**; doar câteva variabile simple → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("numere.in");
    int x, cmax = -1, p = 0, u = 0, nr = 0;
    while (f >> x)
    {
        int c = (x % 10 > x / 10) ? x % 10 : x / 10;   // cifra maximă a lui x (x < 100)
        if (c > cmax)
        {
            cmax = c; p = x; u = x; nr = 1;
        }
        else if (c == cmax)
        {
            u = x; nr++;
        }
    }
    if (nr < 2) cout << "nu exista";
    else cout << p << ' ' << u;
    f.close();
    return 0;
}
```

**Verificare pe exemple:** cifra maximă 8 apare în 38, 87, 8, 82 → `38 82` ✔; în al doilea exemplu ultimul este 38 → `38 38` ✔; în al treilea doar 38 conține 8 → `nu exista` ✔.

## Ce merită reținut din varianta 4

- **De Morgan:** negația unei disjuncții este conjuncția negațiilor.
- **Recursivitate:** afișările de după apel apar în ordine inversă apelurilor.
- **Drum elementar:** cu n vârfuri, lungimea maximă este n − 1.
- **Arbore parțial:** din n noduri păstrezi n − 1 muchii, eliminând câte o muchie din fiecare ciclu.
- **Alipirea numerelor:** $a \cdot 10^{\text{nr. cifre}(b)} + b$.
