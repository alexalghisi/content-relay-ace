Rezolvarea completă a subiectului de **Bacalaureat 2023 la Informatică, limbajul C/C++, profil științe ale naturii**, **modelul oficial** publicat de CNCE. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **c**, 3 – **c**, 4 – **a**, 5 – **d** (câte 4 puncte).

### 1. `x%20==x/23` → b. {20, 41}

- x = 20: `20%20 = 0`, `20/23 = 0` → egale ✔.
- x = 41: `41%20 = 1`, `41/23 = 1` → egale ✔.

Celelalte: a. 40 → 0 și 1; c. 40 nu merge; d. 60 → 0 și 2. Greșite.

### 2. Liniile 5 4 3 2 1, 4 3 2 1, … → c. `j=6-i;j>=1;j--`

Linia i începe de la $6 - i$ (5, 4, 3, 2, 1) și coboară până la 1.

- a. `j=1;j>=i` nu afișează nimic de la linia 2 încolo (și doar 1 pe prima).
- b. afișează 5 4 3 2 1 pe toate liniile.
- d. linia i începe de la i: 1, apoi 2 1, … — ordinea liniilor inversată.

### 3. Câte elemente din B se compară cu 17 → c. 3

De la dreapta la stânga: A → 6, 9, 17, 20, 23; B → 3, 5, 14, 16, 50.

| Comparație | Se adaugă |
|---|---|
| 6 cu 3 | 3 |
| 6 cu 5 | 5 |
| 6 cu 14 | 6 |
| 9 cu 14 | 9 |
| **17 cu 14** | 14 |
| **17 cu 16** | 16 |
| **17 cu 50** | 17 |

17 se compară cu 14, 16 și 50 → **3**.

### 4. `abs(x-10)<2023` → a. (−2013, 2033)

$|x - 10| < 2023$ ⇔ $-2023 < x - 10 < 2023$ ⇔ $-2013 < x < 2033$. Inegalitatea este strictă, deci intervalul este deschis la ambele capete.

### 5. Afișarea tuturor divizorilor primi → d. A: `n>1`, B: `n`

După buclă, dacă n nu s-a redus la 1, ce a rămas este un **ultim factor prim** mai mare decât $\sqrt{n}$ (de exemplu pentru 14 rămâne 7), deci trebuie afișat n.

- a, b. `p` se referă la ultimul d testat, nu la factorul rămas.
- c. `n>0` este mereu adevărat și ar afișa și 1.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare x din [p, q], x se adună dacă este multiplu de m **sau** de n și se scade înapoi dacă este multiplu de **ambele**. Așadar s = suma numerelor din [p, q] divizibile cu exact unul dintre m și n.

#### a) Pentru 4, 3, 11, 25 → **90**

- multipli de 4: 12, 16, 20, 24;
- multipli de 3: 12, 15, 18, 21, 24;
- 12 și 24 sunt multipli ai ambelor → se adună și se scad.

s = 16 + 20 + 15 + 18 + 21 = **90**. *(6p)*

#### b) m = 10, n = 15, p = 2 și se afișează 250

Numerele numărate sunt multiplii lui 10 sau 15 care nu sunt multipli de 30: 10, 15, 20, 40, 45, 50, 70, 75, … Sumele parțiale: 10, 25, 45, 85, 130, 180, **250** (la 70). Pentru a rămâne 250, q trebuie să includă 70, dar nu 75: q ∈ **[70, 74]**, de exemplu **70** și **74**. *(câte 3p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, p, q, s = 0, x;
    cin >> m >> n >> p >> q;
    for (x = p; x <= q; x++)
    {
        if (x % m == 0 || x % n == 0)
            s = s + x;
        if (x % m == 0 && x % n == 0)
            s = s - x;
    }
    cout << s;
    return 0;
}
```

#### d) „pentru” înlocuit cu test inițial *(6p)*

```text
citește m, n, p, q (numere naturale nenule, p ≤ q)
s ← 0
x ← p
┌cât timp x ≤ q execută
│ ┌dacă x%m = 0 sau x%n = 0 atunci s ← s + x
│ └■
│ ┌dacă x%m = 0 și x%n = 0 atunci s ← s − x
│ └■
│  x ← x + 1
└■
scrie s
```

### 2. Indicativele în ordinea descrescătoare a rezultatelor *(6p)*

Sortăm cele trei perechi (rezultat, indicativ) prin cel mult trei interschimbări — la fiecare interschimbare mutăm **și** rezultatul, **și** indicativul:

```cpp
char i1, i2, i3, ci;
int r1, r2, r3, aux;
if (r1 < r2) { aux = r1; r1 = r2; r2 = aux; ci = i1; i1 = i2; i2 = ci; }
if (r1 < r3) { aux = r1; r1 = r3; r3 = aux; ci = i1; i1 = i3; i3 = ci; }
if (r2 < r3) { aux = r2; r2 = r3; r3 = aux; ci = i2; i2 = i3; i3 = ci; }
cout << i1 << ' ' << i2 << ' ' << i3;
```

După primele două teste, pe prima poziție este rezultatul maxim; al treilea test ordonează ultimele două. **Verificare:** (A, 5), (B, 9), (C, 7) → **B C A** ✔.

### 3. Căutare binară pentru x = 21 *(6p)*

Tabloul (3, 7, 10, 12, 20, 23, 65), pozițiile 1..7: mijlocul 4 → **12**; 21 > 12 → 5..7, mijlocul 6 → **23**; 21 < 23 → poziția 5 → **20**; 21 ≠ 20, stop.

Succesiunea: **12, 23, 20**.

## Subiectul al III-lea (30 de puncte)

### 1. Toate cifrele din {2, 3} — pseudocod *(10p)*

Parcurgem cifrele; la prima cifră diferită de 2 și de 3, rezultatul devine 0. Structura cu test final tratează și n = 0 (cifra 0 → se scrie 0).

```text
citește n (număr natural)
ok ← 1
┌repetă
│  c ← n%10
│ ┌dacă c ≠ 2 și c ≠ 3 atunci ok ← 0
│ └■
│  n ← [n/10]
└până când n = 0
scrie ok
```

**Verificare:** 22323 → 1; 3 → 1; 2023 → conține 0 → **0** ✔.

### 2. Caruselele fără tobogan vecin *(10p)*

Zonele sunt dispuse câte una pe rând, deci zona de pe rândul i are laturi comune doar cu zonele de pe rândurile i−1 și i+1 (dacă există). Un carusel (cod 3) convine dacă niciunul dintre vecini nu este tobogan (cod 0). Atenție la capete: rândul 1 nu are vecin deasupra, rândul n nu are dedesubt.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, v[101], i, gasit = 0;
    cin >> n;
    for (i = 1; i <= n; i++)
        cin >> v[i];
    for (i = 1; i <= n; i++)
        if (v[i] == 3)                              // carusel
            if ((i == 1 || v[i - 1] != 0) &&        // vecinul de deasupra
                (i == n || v[i + 1] != 0))          // vecinul de dedesubt
            {
                cout << i << ' ';
                gasit = 1;
            }
    if (!gasit)
        cout << "nu exista";
    return 0;
}
```

**Verificare:** codurile 1, 3, 2, 0, 3, 3, 1, 3 → caruselele sunt pe rândurile 2, 5, 6, 8; cel de pe rândul 5 are tobogan deasupra → se afișează **2 6 8** ✔.

### 3. Șir ip-ordonat

#### a) Descrierea algoritmului *(2p)*

O pereche (x, y) cu x impar este p-ordonată dacă y este impar (aceeași paritate) sau dacă y este par și **x > y**. Deci condiția trebuie verificată doar între numerele impare din prima jumătate și cele pare din a doua jumătate, iar ea este îndeplinită pentru toate perechile exact când **cel mai mic impar din prima jumătate (i1) > cel mai mare par din a doua jumătate (p2)**. Inițializăm i1 = 1000001 (mai mare decât orice valoare) și p2 = −1; dacă prima jumătate nu are numere impare, i1 rămâne 1000001 și condiția e adevărată, ca în definiție.

**Eficiență:** fiecare număr se citește o singură dată, cu calculul unui minim și al unui maxim → timp **liniar**; nu memorăm șirul → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int n, i, x, i1 = 1000001, p2 = -1;
    f >> n;
    for (i = 1; i <= n; i++)            // primii n termeni
    {
        f >> x;
        if (x % 2 == 1 && x < i1) i1 = x;   // cel mai mic impar
    }
    for (i = 1; i <= n; i++)            // ultimii n termeni
    {
        f >> x;
        if (x % 2 == 0 && x > p2) p2 = x;   // cel mai mare par
    }
    if (i1 > p2) cout << "DA";
    else cout << "NU";
    f.close();
    return 0;
}
```

**Verificare pe exemple:** primul fișier: i1 = 15 (din 37, 21, 15), p2 = 14 (din 2, 14, 4) → 15 > 14 → **DA** ✔; al doilea: prima jumătate are doar numere pare → **DA** ✔.

## Ce merită reținut din model

- **`%` și `/` cu același număr:** încearcă fiecare variantă direct, pe numere concrete.
- **Valoarea absolută:** $|x - a| < r$ ⇔ $a - r < x < a + r$.
- **Factori primi:** după bucla până la $\sqrt{n}$, dacă `n>1`, n este și el un factor prim.
- **Sortarea a trei valori:** trei comparații-interschimbări, mutând împreună datele asociate.
- **„Pentru orice pereche”:** se reduce adesea la a compara un minim cu un maxim.
