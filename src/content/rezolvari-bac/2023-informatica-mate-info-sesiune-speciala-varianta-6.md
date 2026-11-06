Rezolvarea completă a subiectului de **Bacalaureat 2023 la Informatică, limbajul C/C++, profil mate-info**, sesiunea specială, **varianta 6**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **a**, 3 – **d**, 4 – **b**, 5 – **c** (câte 4 puncte).

### 1. m și n sunt ambele pare → c. `m%2+n%2==0`

`m%2` și `n%2` sunt 0 sau 1 (numere naturale). Suma lor este 0 doar dacă **ambele** resturi sunt 0.

- a. `(m+n)%2==0` și b. `(m-n)%2==0` sunt adevărate și pentru două numere impare.
- d. `m%2-n%2==0` înseamnă doar „aceeași paritate”.

### 2. Valoarea `f(35,3)` → a. 1022

Funcția construiește scrierea lui n în **baza k**, cu cifrele puse într-un număr zecimal: ultima cifră este `n%k`, iar restul vine din `f(n/k,k)` înmulțit cu 10.

$35 = 1 \cdot 27 + 0 \cdot 9 + 2 \cdot 3 + 2$ → în baza 3: **1022**. Pas cu pas: 35 % 3 = 2, 11 % 3 = 2, 3 % 3 = 0, 1 % 3 = 1 → 1022.

### 3. Volumul paralelipipedului → d. `v=p.lg*p.lt*p.h;`

Câmpurile se accesează prin numele **variabilei**, urmat de punct: `p.lg`, `p.lt`, `p.h`. Variantele a (fără variabilă), b (ordine inversată) și c (sintaxă inexistentă) sunt greșite.

### 4. Soluția de după GURMA → b. GRAMU

Ordinea literelor: A, M, U, R, G. După GURMA nu mai există continuare cu prefixul „GU” (R trebuie să fie înaintea lui A și M, iar M, A sunt deja ultimele). Trecem la a doua literă următoare după U, adică **R**: „GR”, apoi cel mai mic rest posibil: A, M, U → **GRAMU** ✔ (R precede A și M).

- c. GRAUM și d. GRUAM vin după GRAMU. a. GARUM nu respectă regula (A înaintea lui R).

Am verificat ordinea generând toate soluțiile cu un program.

### 5. Numărul maxim de vârfuri ale unui drum elementar din 1 → c. 16

Din fiecare vârf pleacă **un singur** arc (spre 2i, dacă $2i \le 23$, altfel spre i−1), deci drumul din 1 este unic. Îl urmăm până la prima repetare:

1 → 2 → 4 → 8 → 16 → 15 → 14 → 13 → 12 → 11 → 22 → 21 → 20 → 19 → 18 → 17 → (16, deja vizitat).

Drumul elementar are **16 vârfuri**.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Se parcurge o matrice n × n: pe poziția (i, j) se scrie 2 dacă $j \le i$ (pe diagonala principală sau sub ea) și 3 altfel.

#### a) Pentru n = 3 → **233223222**

Linia 1: 2 3 3; linia 2: 2 2 3; linia 3: 2 2 2 → **233223222**. *(6p)*

#### b) Numărul de cifre 2 în [20, 50]

Se afișează câte un 2 pentru fiecare pereche cu $j \le i$: $1 + 2 + \dots + n = \frac{n(n+1)}{2}$. Pentru n = 6, 7, 8, 9 obținem 21, 28, 36, 45 (în interval); pentru 5 doar 15, iar pentru 10 deja 55. Exemple: **6** și **9**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, i, j;
    cin >> n;
    for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++)
            if (j <= i) cout << 2;
            else cout << 3;
    return 0;
}
```

#### d) Algoritm echivalent cu o structură „cât timp” *(6p)*

Înlocuim structura interioară:

```text
citește n (număr natural nenul)
┌pentru i ← 1, n execută
│  j ← 1
│ ┌cât timp j ≤ n execută
│ │ ┌dacă j ≤ i atunci scrie 2
│ │ │altfel scrie 3
│ │ └■
│ │  j ← j + 1
│ └■
└■
```

### 2. Descendenții nodului 2 *(6p)*

Vectorul de tați (0,1,1,2,2,4,5,1): fiii lui 2 sunt **4** și **5**; fiul lui 4 este **6**, iar fiul lui 5 este **7**. Descendenții lui 2 (toate nodurile din subarborele lui): **4, 5, 6, 7**.

### 3. Prefixele care se încheie cu prima literă *(6p)*

k parcurge pozițiile de la ultima la prima. Prefixul care se termină pe poziția k are lungimea k+1; îl afișăm doar dacă `s[k]` este egal cu prima literă, `s[0]`.

```cpp
int i;
for(k=strlen(s)-1;k>=0;k--)
{
    if (s[k] == s[0])
    {
        for (i = 0; i <= k; i++) cout << s[i];
        cout << ' ';
    }
}
```

Exemplu: „elemente” are litera e pe pozițiile 7, 4, 2, 0 → `elemente eleme ele e` ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul Putere *(10p)*

Încercăm bazele x = 2, 3, … cât timp $x^2 \le n$ (o putere cu exponent ≥ 2 are baza cel mult $\sqrt{n}$). Pentru fiecare x împărțim n la x cât se poate; dacă ajungem la 1, n este o putere a lui x, iar prima astfel de bază este cea mai mică. Dacă nu găsim nicio bază, $n = n^1$.

```cpp
void Putere(int n, int &x, int &p)
{
    for (long long b = 2; b * b <= n; b++)
    {
        int m = n, e = 0;
        while (m % b == 0)
        {
            m = m / b;
            e++;
        }
        if (m == 1)
        {
            x = b; p = e;
            return;
        }
    }
    x = n; p = 1;
}
```

**Verificare:** 16 → baza 2: 16 → 8 → 4 → 2 → 1, e = 4 → x = 2, p = 4 ✔; 216 → baza 2 lasă 27, baza 3 lasă 8, baza 6: 216 → 36 → 6 → 1 → x = 6, p = 3 ✔; 12 → nicio bază → x = 12, p = 1 ✔.

### 2. Tabloul expoziției *(10p)*

Cu indici de la 0, diagonala secundară conține pozițiile cu $i + j = n - 1$. Pentru liniile $i \ge 1$: dacă $i + j \le n - 1$, elementul este $(a[i-1][j] + a[i-1][j+1]) \bmod 100$ (ultimele două cifre; un 0 în față dispare automat ca număr), altfel −1 (gazon). Elementul $a[i-1][j+1]$ există mereu, deoarece $j + 1 \le n - i \le n - 1$.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[21][21], i, j;
    cin >> n;
    for (j = 0; j < n; j++) cin >> a[0][j];
    for (i = 1; i < n; i++)
        for (j = 0; j < n; j++)
            if (i + j <= n - 1)
                a[i][j] = (a[i - 1][j] + a[i - 1][j + 1]) % 100;
            else
                a[i][j] = -1;
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
            cout << a[i][j] << ' ';
        cout << '\n';
    }
    return 0;
}
```

**Verificare pe exemplu:** linia 2: 90 + 10 = 100 → **0**, 10 + 4 = 14, 4 + 27 = 31, 27 + 30 = 57, apoi −1 ✔; ultima linie: 59 + 33 = 92 ✔.

### 3. p-intervale identice

#### a) Descrierea algoritmului *(2p)*

p-intervalul este $[\min, \max]$ al primilor p termeni. El coincide cu (p−1)-intervalul exact când al p-lea termen **se află deja** în intervalul primilor p−1 termeni (nu modifică nici minimul, nici maximul).

Citim termenii pe rând, cu poziția p. Pentru $p \ge 2$, dacă $minc \le x \le maxc$, poziția p este bună: o reținem ca `pmin` la prima apariție și o actualizăm mereu ca `pmax`. Apoi actualizăm minc și maxc cu x. La final, dacă nu am găsit nicio poziție, afișăm „nu exista”.

**Eficiență:** o singură parcurgere → timp **liniar**; doar câteva variabile → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.in");
    int x, p = 0, pmin = 0, pmax = 0;
    int minc = 1000000001, maxc = -1000000001;
    while (f >> x)
    {
        p++;
        if (p >= 2 && x >= minc && x <= maxc)
        {
            if (pmin == 0) pmin = p;
            pmax = p;
        }
        if (x < minc) minc = x;
        if (x > maxc) maxc = x;
    }
    if (pmin == 0) cout << "nu exista";
    else cout << pmin << ' ' << pmax;
    f.close();
    return 0;
}
```

**Verificare pe exemple:** pentru 2 7 1 8 3 10 6 −3 −2 13, termenii 3 (p = 5), 6 (p = 7) și −2 (p = 9) sunt în interiorul intervalului anterior → `5 9` ✔. Pentru 2 7 1 0 8 10 −3 13 fiecare termen extinde intervalul → `nu exista` ✔.

## Ce merită reținut din varianta 6

- **„Ambele pare”:** suma resturilor la 2 este 0.
- **Recursivitate și baze de numerație:** `n%k + 10*f(n/k,k)` scrie n în baza k.
- **Graf orientat cu un singur arc de ieșire din fiecare vârf:** drumul este unic — urmează-l până la repetare.
- **Descendenți vs. fii:** descendenții includ și nepoții, strănepoții etc.
- **Intervalul minim care conține niște valori:** este $[\min, \max]$.
