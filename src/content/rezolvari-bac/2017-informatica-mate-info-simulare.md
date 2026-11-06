Rezolvarea completă a **simulării de Bacalaureat 2017 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (30 de puncte)

### 1. Valoarea expresiei `17/3/2%17` → b. 2 *(4p)*

Operatorii `/` și `%` au aceeași prioritate și se evaluează de la stânga la dreapta, cu împărțire întreagă: 17 / 3 = 5, 5 / 2 = 2, 2 % 17 = **2**.

### 2. Algoritmul în pseudocod

Algoritmul afișează numerele x din [1, n] care se divid cu **exact unul** dintre a și b. Dacă nu există niciunul, `ok` rămâne 0 și se afișează 0.

#### a) Pentru 15, 3, 4 → **3 4 6 8 9 15** *(6p)*

Multiplii lui 3 din [1, 15]: 3, 6, 9, 12, 15; multiplii lui 4: 4, 8, 12. Numărul 12 se divide cu amândouă, deci se exclude. Rămân **3 4 6 8 9 15**.

#### b) Două seturi pentru care se afișează 0 *(4p)*

Dacă a = b, orice număr se divide fie cu amândouă, fie cu niciunul, deci nu se afișează nimic în buclă și apoi se scrie 0. Exemple: **n = 5, a = 2, b = 2** și **n = 7, a = 3, b = 3**.

#### c) „cât timp” înlocuit cu „pentru” *(6p)*

```text
citește n,a,b (numere naturale nenule, a≤n, b≤n)
ok ← 0
┌pentru x ← 1,n execută
│ ┌dacă x%a=0 şi x%b≠0 sau x%a≠0 şi x%b=0 atunci
│ │  scrie x,' '
│ │  ok ← 1
│ └■
└■
┌dacă ok=0 atunci scrie 0
└■
```

#### d) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a, b, ok = 0, x = 1;
    cin >> n >> a >> b;
    while (x <= n)
    {
        if ((x % a == 0 && x % b != 0) || (x % a != 0 && x % b == 0))
        {
            cout << x << ' ';
            ok = 1;
        }
        x = x + 1;
    }
    if (ok == 0) cout << 0;
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, decizii 3p, repetitivă 2p, atribuiri 1p, corectitudine 1p.*

## Subiectul al II-lea (30 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **c** (câte 4 puncte).

### 1. `strstr(s,"za")` pentru „tezauriza” → d. zauriza

`strstr` întoarce adresa **primei** apariții a lui „za” (indicele 2), iar afișarea continuă până la sfârșitul șirului: **zauriza**.

### 2. Numărul maxim de componente conexe → c. 4

Matricea unui graf neorientat conține fiecare muchie de două ori, deci graful are 10 / 2 = 5 muchii. Ca să avem cât mai multe componente, înghesuim muchiile în cât mai puține noduri: 3 noduri suportă cel mult 3 muchii, 4 noduri cel mult 6. Punem cele 5 muchii pe 4 noduri (o componentă), iar celelalte 3 noduri rămân izolate: **4** componente.

### 3. Fiii nodului 7 *(6p)*

Vecinii lui 7 sunt 2, 3, 5, 6. Rădăcina este 5, iar muchia [5,7] arată că 5 este **tatăl** lui 7. Ceilalți vecini sunt fiii: **2, 3, 6**.

### 4. Structura masina *(6p)*

```cpp
struct masina
{
    int an;
    char carburant[51];
} m[20];
```

`m[2].an` arată că m este un **tablou** de structuri (20 de mașini); 50 de caractere + `'\0'` = 51.

### 5. Tabloul construit din vecinii din dreapta și de sus *(10p)*

Prima linie are toate valorile n, ultima coloană conține n, n−1, …, 1. Restul elementelor se completează linie cu linie, de sus în jos, iar pe linie **de la dreapta la stânga**, pentru că `a[i][j]` depinde de `a[i][j+1]` (dreapta) și de `a[i-1][j]` (sus).

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[21][21];
    cin >> n;
    for (int j = 0; j < n; j++) a[0][j] = n;          // prima linie
    for (int i = 1; i < n; i++)
    {
        a[i][n - 1] = n - i;                          // ultima coloană: n, n-1, ..., 1
        for (int j = n - 2; j >= 0; j--)
            a[i][j] = a[i][j + 1] + a[i - 1][j];
    }
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++) cout << a[i][j] << ' ';
        cout << '\n';
    }
    return 0;
}
```

**Verificare** pentru n = 4: `4 4 4 4`, `15 11 7 3`, `35 20 9 2`, `65 30 10 1` ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Ce afișează `f(6)` → c. 64246 *(4p)*

- f(6): afișează **6**, apoi f(4), apoi încă o dată **6**
- f(4): afișează **4**, apoi f(2), apoi încă o dată **4**
- f(2): afișează **2** (2 ≤ 3, nu mai continuă)

Ordinea: 6, 4, 2, 4, 6 → **64246**.

### 2. Backtracking — a cincea și a șasea soluție *(6p)*

Ordinea: {brândușă, iasomie, lalea, liliac, margaretă}. După (brândușă, lalea, margaretă) urmează (brândușă, liliac, margaretă). Apoi se trece la buchetele care încep cu iasomie: (iasomie, lalea, liliac) este interzis (iasomie + liliac), deci urmează (iasomie, lalea, margaretă).

- a 5-a soluție: **(brândușă, liliac, margaretă)**
- a 6-a soluție: **(iasomie, lalea, margaretă)**

### 3. Subprogramul ranguri *(10p)*

Parcurgem cifrele de la dreapta, numerotând pozițiile de la 0, și numărăm cifrele egale cu poziția lor. Folosim `do … while` ca și n = 0 să fie tratat (cifra 0 pe poziția 0).

```cpp
int ranguri(int n)
{
    int nr = 0, poz = 0;
    do
    {
        if (n % 10 == poz) nr++;
        poz++;
        n = n / 10;
    } while (n != 0);
    return nr;
}
```

**Verificare:** 6594270 — poziția 0: 0 ✔, 1: 7, 2: 2 ✔, 3: 4, 4: 9, 5: 5 ✔, 6: 6 ✔ → **4** ✔.

### 4. Numerele pare din cele două șiruri, descrescător

#### a) Descrierea algoritmului *(2p)*

Memorăm cele două șiruri în tablouri și le **interclasăm de la dreapta la stânga**: la fiecare pas luăm cel mai mare element rămas dintre cele două tablouri. Astfel obținem toate valorile în ordine descrescătoare. Afișăm valoarea doar dacă este pară și diferă de ultimul număr afișat (o valoare comună celor două șiruri apare de două ori consecutiv). Dacă nu am afișat nimic, scriem „nu exista”.

**Eficiență:** fiecare element este prelucrat o singură dată, deci algoritmul este **liniar**, O(m + n) — mult mai bun decât reunirea urmată de sortare.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int a[10001], b[10001];

int main()
{
    ifstream f("bac.in");
    int m, n, ultim = -1, gasit = 0;
    f >> m >> n;
    for (int i = 0; i < m; i++) f >> a[i];
    for (int j = 0; j < n; j++) f >> b[j];
    int i = m - 1, j = n - 1, x;
    while (i >= 0 || j >= 0)
    {
        if (j < 0 || (i >= 0 && a[i] > b[j])) x = a[i--];   // cel mai mare rămas
        else x = b[j--];
        if (x % 2 == 0 && x != ultim)
        {
            cout << x << ' ';
            ultim = x;
            gasit = 1;
        }
    }
    if (!gasit) cout << "nu exista";
    f.close();
    return 0;
}
```

**Verificare** pe exemplu: se afișează `18 12 10 8 4 2` ✔ (10 și 4 apar în ambele șiruri, dar se afișează o singură dată).

## Ce merită reținut din simulare

- **`/` și `%`** au aceeași prioritate și se evaluează de la stânga la dreapta.
- **„Exact una dintre condiții”:** `(A && !B) || (!A && B)`.
- **Matricea de adiacență** a unui graf neorientat numără fiecare muchie de două ori.
- **Completarea tablourilor cu dependențe:** alege ordinea parcurgerii astfel încât vecinii folosiți să fie deja calculați.
- **Interclasare de la coadă** pentru ordine descrescătoare, cu eliminarea duplicatelor prin compararea cu ultimul afișat.
