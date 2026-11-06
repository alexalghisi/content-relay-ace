Rezolvarea completă a subiectului de **Bacalaureat 2024 la Informatică, limbajul C/C++, profil științe ale naturii**, **modelul oficial** publicat de CNCE. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **a**, 3 – **c**, 4 – **b**, 5 – **d** (câte 4 puncte).

### 1. Valoarea maximă a lui `x%2024` → c. 2023

Restul împărțirii la 2024 este un număr întreg din intervalul [0, 2023]. Valoarea 2023 se obține, de exemplu, pentru x = 2023, care se află în domeniul permis.

- a. 20.24 nu este întreg — `%` dă numai rezultate întregi.
- b. 295 este posibil, dar nu este maximul.
- d. 494071 > 2023, imposibil.

### 2. Triunghiul de 4 din partea de jos → a. `j<i && i+j>6`

Valorile 4 apar pe linia 4 (coloana 3), linia 5 (coloanele 2..4) și linia 6 (coloanele 1..5). Toate sunt **sub diagonala principală** (`j<i`) și **sub diagonala secundară** (`i+j>6`). Verificare la margini: linia 6, coloana 0: $i+j = 6$ → nu e > 6, deci 2 ✔; linia 5, coloana 5: $j = i$ → 2 ✔.

- b. `i+j<6` dă zona din stânga.
- c, d. `j>i` înseamnă deasupra diagonalei principale.

### 3. Câte elemente din B se compară cu 24 → c. 3

Parcurgem de la dreapta la stânga: A → 7, 10, 24, 35, 40; B → 2, 6, 16, 20, 60.

| Comparație | Se adaugă |
|---|---|
| 7 cu 2 | 2 |
| 7 cu 6 | 6 |
| 7 cu 16 | 7 |
| 10 cu 16 | 10 |
| **24 cu 16** | 16 |
| **24 cu 20** | 20 |
| **24 cu 60** | 24 |

24 se compară cu 16, 20 și 60 → **3** elemente.

### 4. `floor(sqrt(24))` → b. 4

$\sqrt{24} \approx 4{,}899$, iar `floor` dă partea întreagă inferioară: **4**. Varianta c (5) ar fi rotunjirea în sus.

### 5. Aceeași valoare pentru n = 12 → d. s1, s2 și s3

Toate trei calculează suma $1 + 2 + \dots + 12 = \dfrac{12 \cdot 13}{2} = 78$:

- **s1** adună direct 1..12 → 78;
- **s2** adună perechi $(12+11) + (10+9) + \dots + (2+1)$ → 78;
- **s3** (n par, deci `if` nu se execută) adună de 6 ori $i + (13 - i) = 13$ → 78.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare număr x citit, bucla interioară elimină ultima cifră cât timp ea este **mai mică sau egală** cu cifra din stânga ei. Ce rămâne se adună la `m`. La final se afișează `m` sau „egal”, dacă `m = n`.

#### a) Pentru 4, 721, 20020, 1321, 211 → **2024**

| x | Eliminări | Rămâne |
|---|---|---|
| 721 | 1 ≤ 2 → 72; 2 ≤ 7 → 7 | 7 |
| 20020 | 0 ≤ 2 → 2002 (2 > 0, stop) | 2002 |
| 1321 | 1 ≤ 2 → 132; 2 ≤ 3 → 13 | 13 |
| 211 | 1 ≤ 1 → 21; 1 ≤ 2 → 2 | 2 |

m = 7 + 2002 + 13 + 2 = 2024 ≠ 4 → se afișează **2024**. *(6p)*

#### b) Primul număr 2 și se afișează „egal”

Trebuie ca m = 2. Prima cifră a unui număr nu se elimină niciodată, deci fiecare număr rămâne cel puțin cu o cifră nenulă; singura posibilitate este ca **ambele numere să se reducă la 1**. Asta se întâmplă pentru numerele formate dintr-un 1 urmat doar de cifre 1 și 0 ne-crescătoare: 10, 11, 100, 110, 111, 1000, … Exemplu: **10 și 11**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, m = 0, i, x;
    cin >> n;
    i = n;
    while (i >= 1)
    {
        cin >> x;
        while (x % 10 <= x / 10 % 10)
            x = x / 10;
        m = m + x;
        i = i - 1;
    }
    if (m != n) cout << m;
    else cout << "egal";
    return 0;
}
```

#### d) Prima structură repetitivă înlocuită cu „pentru” *(6p)*

Contorul `i` pornește de la n și scade cu 1 până la 1 — exact o structură „pentru” cu pas −1:

```text
citește n (număr natural nenul)
m ← 0
┌pentru i ← n, 1, -1 execută
│  citește x (număr natural)
│ ┌cât timp x%10 ≤ [x/10]%10 execută
│ │  x ← [x/10]
│ └■
│  m ← m + x
└■
┌dacă m ≠ n atunci scrie m
│altfel scrie „egal”
└■
```

### 2. Tablou cu comparațiile 20, 2, 4 pentru x = 10 *(6p)*

Cu 7 elemente (pozițiile 1..7): prima comparație e cu poziția 4 → 20. Cum 10 < 20, într-un tablou crescător mergem la stânga (1..3), mijlocul 2 → 2. Cum 10 > 2, mergem la poziția 3 → 4. Deci: poziția 2 = 2, poziția 3 = 4, poziția 4 = 20, iar restul trebuie să păstreze ordinea crescătoare:

**(1, 2, 4, 20, 25, 30, 40)**

### 3. Datele telefonului *(6p)*

```cpp
char prod;
double pret;
cout << "PRODUCATOR ";
if (prod == 'A') cout << "APPLE";
else cout << "SAMSUNG";
cout << endl << "PRET " << pret;
```

Pentru prod = 'A', pret = 1599.99 se afișează `PRODUCATOR APPLE` și `PRET 1599.99` ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Produsul divizorilor comuni — pseudocod *(10p)*

Un divizor comun al lui a și b este cel mult min(a, b). Parcurgem d de la 1 la min(a, b) și înmulțim valorile care divid ambele numere.

```text
citește a, b (numere naturale nenule)
┌dacă a < b atunci m ← a
│altfel m ← b
└■
p ← 1
┌pentru d ← 1, m execută
│ ┌dacă a%d = 0 și b%d = 0 atunci
│ │  p ← p*d
│ └■
└■
scrie p
```

**Verificare:** a = 20, b = 12 → divizorii comuni 1, 2, 4 → **8** ✔.

### 2. Numere cu mai puțin / mai mult de trei cifre *(10p)*

„Mai puțin de trei cifre” ⇔ $x < 100$; „mai mult de trei cifre” ⇔ $x \ge 1000$. Numărăm întâi elementele din fiecare mulțime ca să știm dacă vreuna este vidă; apoi le afișăm pe două linii.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, v[101], i, mici = 0, mari = 0;
    cin >> n;
    for (i = 0; i < n; i++)
    {
        cin >> v[i];
        if (v[i] < 100) mici++;          // cel mult două cifre
        else if (v[i] >= 1000) mari++;   // cel puțin patru cifre
    }
    if (mici == 0 || mari == 0)
        cout << "nu exista";
    else
    {
        for (i = 0; i < n; i++)
            if (v[i] < 100) cout << v[i] << ' ';
        cout << endl;
        for (i = 0; i < n; i++)
            if (v[i] >= 1000) cout << v[i] << ' ';
    }
    return 0;
}
```

**Verificare:** (124, 49, 957, 9000, 2, 5237, 100000) → `49 2` și `9000 5237 100000` ✔.

### 3. Prețurile cărților pentru premii

#### a) Descrierea algoritmului *(2p)*

Prețurile sunt între 10 și 1000, deci folosim un **vector de apariții** `ap`, unde `ap[p]` = câte cărți au prețul p; îl completăm la citire. Apoi parcurgem prețurile **descrescător**: primul preț cu `ap[p] ≥ n1` este prețul pentru premiul I (x); după el, primul preț mai mic cu `ap[p] ≥ n2` este prețul pentru premiul al II-lea (y). Dacă y nu se găsește, afișăm „nu exista”.

**Eficiență:** fișierul se parcurge o singură dată, iar vectorul de apariții are dimensiune constantă (~1000) → timp **liniar** în numărul de valori; nu memorăm șirul de prețuri.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int ap[1001];   // ap[p] = câte cărți au prețul p

int main()
{
    ifstream f("bac.txt");
    int n1, n2, p, x = 0, y = 0;
    f >> n1 >> n2;
    while (f >> p)
        ap[p]++;
    for (p = 1000; p >= 10 && y == 0; p--)
        if (x == 0)
        {
            if (ap[p] >= n1) x = p;
        }
        else if (ap[p] >= n2)
            y = p;
    if (y == 0) cout << "nu exista";
    else cout << x << ' ' << y;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** n1 = 3, n2 = 2. Apariții: 500 → 1, 200 → 2, **100 → 5**, 75 → 1, **52 → 2**, … Primul preț cu cel puțin 3 cărți este 100, apoi primul preț mai mic cu cel puțin 2 cărți este 52 → **100 52** ✔.

## Ce merită reținut din model

- **`x%k`** ia valori între 0 și k−1.
- **Zone din matrice:** `j<i` (sub diagonala principală), `i+j>n-1` (sub diagonala secundară).
- **Suma 1..n** se poate scrie în mai multe feluri — toate dau $\frac{n(n+1)}{2}$.
- **Divizori comuni:** caută doar până la min(a, b).
- **Valori dintr-un interval mic:** vectorul de apariții dă un algoritm liniar.
