Rezolvarea completă a subiectului de **Bacalaureat 2026 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea iunie–iulie, **varianta 3**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **c**, 3 – **a**, 4 – **b**, 5 – **d** (câte 4 puncte).

### 1. Aceeași paritate pentru x și y → c. `(x+y)%2==0`

Două numere au aceeași paritate exact când suma lor este pară: par + par = par, impar + impar = par, iar par + impar = impar.

- a. `(x*y)%2==0` — e adevărat și pentru 2 și 3 (parități diferite). Greșit.
- b. `x%2==0 && y%2==0` — ratează cazul „ambele impare”. Greșit.
- d. `!(x%2==y%2)` — este exact **negația** cerinței. Greșit.

### 2. Comparații până la includerea lui 12 → c. 5

Interclasare descrescătoare a lui A = (27, 12, 10, …) cu B = (49, 36, 25, 9, …): la fiecare comparație trece în rezultat elementul mai mare.

| Comparația | Pereche | Se adaugă |
|---|---|---|
| 1 | 27 cu 49 | 49 |
| 2 | 27 cu 36 | 36 |
| 3 | 27 cu 25 | 27 |
| 4 | 12 cu 25 | 25 |
| 5 | 12 cu 9 | **12** |

Sunt necesare **5** comparații.

### 3. Tabloul „în șerpuire” pe coloane → a. `5*j+4-i`

Coloana `j` conține valorile $5j, \dots, 5j+4$. Pe coloanele pare se afișează `5*j+i` (cresc în jos). Pe coloanele impare valorile **scad** în jos: pe linia 0 este $5j+4$, pe linia 4 este $5j$ → `5*j+4-i`. Verificare: j = 1, i = 0 → 9 ✔; i = 4 → 5 ✔.

- b. `5*j-i` dă 5, 4, 3, … pe coloana 1. Greșit.
- c, d. coeficientul 4 dă alte valori (de exemplu c pentru j = 3, i = 0 dă 16, nu 19).

### 4. x ∈ [−3,−1] ∪ [1,3] → b. `abs(x)>=1 && abs(x)<=3`

Reuniunea este simetrică față de 0: înseamnă exact $1 \le |x| \le 3$.

- a. `abs(x)<=3 || x!=0` e adevărată pentru orice x ≠ 0 (de ex. 100). Greșit.
- c. `abs(x-3)>=1` înseamnă x ≤ 2 sau x ≥ 4 — include −100. Greșit.
- d. `abs(x-1)>=3` înseamnă x ≤ −2 sau x ≥ 4 — exclude 1, 2, 3. Greșit.

### 5. Testul de primalitate → d. 3

Ramura `else` tratează numerele **impare**, deci căutăm doar divizori impari: pornim de la `d = 3` și creștem cu 2 (3, 5, 7, …) cât timp $d^2 \le n$.

- a. `d=0` → `n%0` (împărțire la zero). Greșit.
- b. `d=1` → `n%1==0` mereu, deci orice număr impar ar fi declarat neprim. Greșit.
- c. `d=2` → s-ar testa 2, 4, 6, …, doar divizori pari, iar 9 ar fi declarat prim. Greșit.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Algoritmul ține în `x` ultima valoare care a fost „record” (mai mare decât toate dinainte). Dacă `y` depășește recordul, îl adună la `s` și devine noul record; dacă `y` este **egal** cu recordul, îl scade din `s`.

#### a) Valoarea afișată pentru 8, 3, 1, 5, 2, 4, 5, 5, 7 → **5**

| y | Condiție | s | x |
|---|---|---|---|
| 3 | 3 > 0 | 3 | 3 |
| 1 | — | 3 | 3 |
| 5 | 5 > 3 | 8 | 5 |
| 2 | — | 8 | 5 |
| 4 | — | 8 | 5 |
| 5 | 5 = 5 | 3 | 5 |
| 5 | 5 = 5 | −2 | 5 |
| 7 | 7 > 5 | 5 | 7 |

Se afișează **5**. *(6p)*

#### b) n = 3 și se afișează 0

Un exemplu: **4, 4, 1**. Primul 4 este record → `s = 4`; al doilea 4 este egal cu recordul → `s = 0`; 1 este mai mic → nu se schimbă nimic. Orice set de forma `x, x, y` sau `x, y, x` cu `y < x` este corect. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, y, s = 0, x = 0, p = 1;
    cin >> n;
    do
    {
        cin >> y;
        if (y > x)
        {
            s = s + y;
            x = y;
        }
        else if (x == y)
            s = s - y;
        p = p + 1;
    } while (p <= n);
    cout << s;
    return 0;
}
```

Structura **repetă … până când p > n** devine în C++ `do { … } while (p <= n);` — condiția se **neagă**. *Barem: variabile 1p, citire 1p, afișare 1p, repetitivă 2p, decizii 3p, atribuiri 1p, corectitudine 1p.*

#### d) Algoritm echivalent cu „pentru … execută” *(6p)*

```text
citește n (număr natural nenul)
s ← 0; x ← 0
┌pentru p ← 1, n execută
│  citește y (număr natural nenul)
│ ┌dacă y > x atunci
│ │  s ← s + y; x ← y
│ │altfel
│ │ ┌dacă x = y atunci s ← s − y
│ │ └■
│ └■
└■
scrie s
```

Contorul `p` merge de la 1 la n, iar actualizarea lui este automată, deci atribuirea `p ← p + 1` dispare. Bucla se execută tot de `n` ori (n ≥ 1).

### 2. Căutare binară cu comparațiile 19, 23, 21 *(6p)*

Tabloul (5, 7, 15, 19, 21, 23, 25), pozițiile 1..7:

1. mijlocul = poziția 4 → **19**; ca să mergem la dreapta trebuie $x > 19$;
2. intervalul 5..7, mijlocul = poziția 6 → **23**; ca să mergem la stânga trebuie $x < 23$;
3. intervalul 5..5 → **21**; aici căutarea se oprește oricum (găsit sau nu).

Deci $19 < x < 23$: mulțimea este **{20, 21, 22}** (câte 2p pentru fiecare valoare).

### 3. Al treilea termen al progresiei *(6p)*

$a_3 = a_1 + 2r$:

```cpp
t = p + 2 * r;
```

## Subiectul al III-lea (30 de puncte)

### 1. Cifrele impare, apoi cele pare — pseudocod *(10p)*

Parcurgem cifrele de la dreapta la stânga și construim separat numărul din cifrele impare (`ni`) și cel din cifrele pare (`np`), adăugând fiecare cifră **în fața** numărului construit, cu ajutorul unei puteri a lui 10 (`pi`, `pp`), ca să păstrăm ordinea. La final lipim: `ni · pp + np`.

```text
citește n (număr natural cu cifre nenule)
ni ← 0; np ← 0; pi ← 1; pp ← 1
┌cât timp n ≠ 0 execută
│  c ← n%10
│ ┌dacă c%2 = 1 atunci
│ │  ni ← c*pi + ni; pi ← pi*10
│ │altfel
│ │  np ← c*pp + np; pp ← pp*10
│ └■
│  n ← [n/10]
└■
scrie ni*pp + np
```

**Urmărire pentru n = 19472:** 2 → np = 2; 7 → ni = 7; 4 → np = 42; 9 → ni = 97; 1 → ni = 197. La final pp = 100, rezultat $197 \cdot 100 + 42 = 19742$ ✔.

### 2. Alternanța semnelor în tablou *(10p)*

Tabloul alternează dacă oricare două elemente vecine au **semne diferite**. Comparăm semnul fiecărui element cu al celui dinainte. Evităm testul `v[i-1]*v[i] > 0`, pentru că produsul a două valori de ordinul $10^9$ depășește `int`.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, v[21], i, ok = 1;
    cin >> n;
    for (i = 0; i < n; i++)
        cin >> v[i];
    for (i = 1; i < n; i++)
        if ((v[i - 1] > 0) == (v[i] > 0))   // același semn pe poziții consecutive
            ok = 0;
    if (ok) cout << "alterneaza";
    else cout << "nu alterneaza";
    return 0;
}
```

**Verificare:** (−32, 15, −7, 16, −20) → **alterneaza** ✔; (−32, 15, −7, 16, 20) → 16 și 20 sunt pozitive consecutive → **nu alterneaza** ✔.

### 3. Rezultate motivante la șah

#### a) Descrierea algoritmului *(2p)*

Citim perechile (p, c) pe rând, fără să le memorăm. Păstrăm doar poziția de la **ultimul concurs de șah** (`ups`, inițial −1 = „încă niciun concurs”) și contorul `ns`. Pentru fiecare pereche cu c = 1: dacă `ups ≠ −1` și `p < ups`, creștem `ns`; apoi `ups = p`. Concursurile de go (c = 2) sunt ignorate.

**Eficiență:** fiecare valoare se citește o singură dată → timp **liniar** O(n); folosim câteva variabile simple → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int p, c, ups = -1, ns = 0;
    while (f >> p >> c)
        if (c == 1)
        {
            if (ups != -1 && p < ups) ns++;
            ups = p;
        }
    cout << ns;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** pozițiile la șah sunt 6, 7, **3**, 4, 5, **1**, 2, **1** → se afișează **3** ✔.

## Ce merită reținut din varianta 3

- **Paritate:** „aceeași paritate” ⇔ `(x+y)%2==0`.
- **Interclasare:** fiecare element adăugat (până se termină un tablou) costă o comparație.
- **Căutare binară:** dintr-o succesiune de comparații obții un interval pentru x.
- **Primalitate pentru impare:** divizori 3, 5, 7, … cât timp $d^2 \le n$.
- **Semne alternante:** compară `(a>0)==(b>0)`, nu produsul (risc de depășire).
