Rezolvarea completă a **simulării de Bacalaureat 2018 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (30 de puncte)

### 1. Valoarea expresiei `2018/3/22` → a. 30 *(4p)*

Toți operanzii sunt întregi, deci împărțirea este **întreagă** și se face de la stânga la dreapta: 2018 / 3 = 672, apoi 672 / 22 = **30**.

### 2. Algoritmul în pseudocod

Algoritmul caută descompuneri n = x + y + z cu $1 \le x < y \le [n/3]$ și afișează tripletele în care z are aceeași paritate cu x; la final scrie `#`.

#### a) Pentru n = 9 → **135\*234\*#** *(6p)*

[9/3] = 3, deci perechile (x, y) sunt (1,2), (1,3), (2,3):

| x | y | z = 9 − x − y | z%2 = x%2? | Afișare |
|---|---|---|---|---|
| 1 | 2 | 6 | 0 ≠ 1 | — |
| 1 | 3 | 5 | 1 = 1 | 135* |
| 2 | 3 | 4 | 0 = 0 | 234* |

Se afișează **135\*234\*#**.

#### b) Cel mai mic n pentru un singur `*` → **6** *(4p)*

Ca să existe măcar o pereche x < y, trebuie [n/3] ≥ 2, adică n ≥ 6. Pentru n = 6 singura pereche este (1, 2), cu z = 3, impar ca x = 1 → se afișează o dată `123*`. Răspuns: **6**.

#### c) Prima structură „cât timp” înlocuită cu „pentru” *(6p)*

```text
citește n (număr natural)
┌pentru x ← 1,[n/3] execută
│  y ← x+1
│ ┌cât timp y≤[n/3] execută
│ │  z ← n-x-y
│ │ ┌dacă z%2=x%2 atunci scrie x,y,z,'*'
│ │ └■
│ │  y ← y+1
│ └■
└■
scrie '#'
```

Contorul x pornește de la 1 și crește automat cu 1, deci dispar atribuirile `x ← 1` și `x ← x+1`.

#### d) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x, y, z;
    cin >> n;
    x = 1;
    while (x <= n / 3)
    {
        y = x + 1;
        while (y <= n / 3)
        {
            z = n - x - y;
            if (z % 2 == x % 2) cout << x << y << z << '*';
            y = y + 1;
        }
        x = x + 1;
    }
    cout << '#';
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, decizie 2p, repetitive 3p, atribuiri 1p, corectitudine 1p.*

## Subiectul al II-lea (30 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **b** (câte 4 puncte).

### 1. Matricea grafului care conține drumul 1,3,4,3,2 → d

Drumul folosește arcele (1,3), (3,4), (4,3), (3,2), deci trebuie `a[1][3] = a[3][4] = a[4][3] = a[3][2] = 1`.

- a: `a[1][3] = 0` ✗
- b: `a[4][3] = 0` ✗
- c: `a[1][3] = 1`, dar `a[4][3] = 0` ✗
- d: linia 1 = 0 1 1 0 (are 1→3), linia 3 = 0 1 0 1 (are 3→2, 3→4), linia 4 = 0 1 1 0 (are 4→3) ✔

### 2. Numărul maxim de noduri de grad 4 → b. 4

Un nod care nu e rădăcină are gradul = numărul de fii + 1, deci gradul 4 înseamnă **3 fii**. Rădăcina are cel mult 3 fii, deci gradul ei ≤ 3.

Într-un arbore, numărul de frunze este $1 + \sum (\text{fii} - 1)$, suma fiind peste nodurile interne. Fiecare nod cu 3 fii aduce +2. Cel mai bine este ca rădăcina să aibă **un singur fiu**: are gradul 1, deci este unul dintre cele 10 noduri de grad 1 și rămân 9 frunze. Atunci $9 = 1 + 2k$ → **k = 4** noduri cu 3 fii (grad 4). Varianta cu rădăcina internă dă cel mult $10 = 1 + 2k + \ldots$, adică tot cel mult 4.

### 3. Structura meteo *(6p)*

```cpp
struct meteo
{
    int luna, an;
    float temperatura[15];
} m;
```

`m.temperatura[0]` arată că `temperatura` este un **tablou** de 15 numere reale.

### 4. Completarea tabloului 9×9 *(6p)*

Valorile 8 stau pe diagonala secundară ($i + j = 8$) și pe cele două paralele imediat vecine ($i + j = 7$ și $i + j = 9$); restul sunt 1.

```cpp
for(i=0;i<9;i++)
  for(j=0;j<9;j++)
    if (i + j >= 7 && i + j <= 9) a[i][j] = 8;
    else a[i][j] = 1;
```

Verificare: linia 0 are 8 la coloanele 7 și 8 ✔; linia 8 are 8 la coloanele 0 și 1 ✔.

### 5. Pereche descentrată *(10p)*

Fie a cuvântul cu lungime impară L și mijlocul pe poziția m = L/2. Cuvântul b (lungime L + 1) se obține duplicând `a[m]` exact când:

- `b[i] == a[i]` pentru i = 0 … m;
- `b[i+1] == a[i]` pentru i = m … L − 1.

Separăm textul în cuvinte cu `strtok` și verificăm toate perechile.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int descentrate(char a[], char b[])   // a are lungime impară, b pară
{
    int la = strlen(a), lb = strlen(b), m = la / 2;
    if (lb != la + 1) return 0;
    for (int i = 0; i <= m; i++)          // prima jumătate, inclusiv mijlocul
        if (a[i] != b[i]) return 0;
    for (int i = m; i < la; i++)          // a doua jumătate, decalată cu 1 în b
        if (a[i] != b[i + 1]) return 0;
    return 1;
}

int main()
{
    char s[101], c[51][101], *p;
    int n = 0, gasit = 0;
    cin.getline(s, 101);
    p = strtok(s, " ");
    while (p)
    {
        strcpy(c[n++], p);
        p = strtok(NULL, " ");
    }
    for (int i = 0; i < n && !gasit; i++)
        for (int j = 0; j < n && !gasit; j++)
            if (strlen(c[i]) % 2 == 1 && descentrate(c[i], c[j]))
                gasit = 1;
    if (gasit) cout << "DA";
    else cout << "NU";
    return 0;
}
```

**Verificare:** „crezi ca poti sa creezi ceva original” → „crezi” (5 litere, mijloc 'e') și „creezi” → **DA** ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Valoarea `f(2203,2018)` → a. 1100 *(4p)*

Funcția compară cifrele de pe aceeași poziție și construiește un număr cu 1 unde paritățile coincid și 0 în rest (începând cu cifra unităților):

- 3 și 8: parități diferite → 0
- 0 și 1: diferite → 0
- 2 și 0: aceeași paritate → 1
- 2 și 2: aceeași paritate → 1

Rezultatul, citit de la cifra cea mai semnificativă: **1100**.

### 2. Backtracking — a șasea și a șaptea soluție *(6p)*

Ordinea culorilor: {roșu, albastru, roz, portocaliu, verde}. După (roșu, roz, verde, albastru), pe ultima poziție urmează portocaliu → a 6-a soluție. Apoi s-au terminat variantele cu (roșu, roz, …); pe poziția 2 albastrul e interzis lângă roșu, deci vine portocaliu, urmat de cea mai mică culoare permisă (albastru), apoi roz.

- a 6-a soluție: **(roșu, roz, verde, portocaliu)**
- a 7-a soluție: **(roșu, portocaliu, albastru, roz)**

### 3. Subprogramul radical *(10p)*

$\sqrt{n} = x\sqrt{y}$ înseamnă $n = x^2 \cdot y$. Ca x să fie maxim, $x^2$ trebuie să fie **cel mai mare pătrat perfect care îl divide pe n**.

```cpp
void radical(int n, int &x, int &y)
{
    x = 1;
    for (int d = 1; d * d <= n; d++)
        if (n % (d * d) == 0) x = d;
    y = n / (x * x);
}
```

**Verificare:** 15000 = 2500 · 6 = $50^2 \cdot 6$ → x = 50, y = 6 ✔; 9 = $3^2 \cdot 1$ → x = 3, y = 1 ✔. Bucla face cel mult $\sqrt{10^9} \approx 31\,623$ pași.

### 4. Inserarea lui x și y pentru număr asociat minim

#### a) Descrierea algoritmului *(2p)*

Ca numărul să fie minim, fiecare valoare inserată trebuie pusă cât mai la stânga posibil, dar **înaintea primei cifre mai mari** decât ea (dacă o punem înaintea unei cifre mai mici sau egale, numărul crește). Mai întâi interschimbăm x și y dacă e nevoie, ca x ≤ y. Citim termenii unul câte unul și îi afișăm pe loc; înainte de primul termen mai mare decât x afișăm x, iar înainte de primul termen (de acolo încolo) mai mare decât y afișăm y. Dacă nu s-a găsit un astfel de termen, x și/sau y se afișează la final.

**Eficiență:** fiecare termen este citit și afișat o singură dată → timp **liniar**; nu memorăm șirul, folosim doar câteva variabile → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, y, t, aux, px = 0, py = 0;
    f >> x >> y;
    if (x > y) { aux = x; x = y; y = aux; }
    while (f >> t)
    {
        if (!px && t > x) { cout << x << ' '; px = 1; }
        if (px && !py && t > y) { cout << y << ' '; py = 1; }
        cout << t << ' ';
    }
    if (!px) cout << x << ' ';
    if (!py) cout << y << ' ';
    f.close();
    return 0;
}
```

**Verificare** pentru x = 9, y = 6 și șirul 1 7 5: după interschimbare x = 6, y = 9; 6 se pune înaintea lui 7, iar niciun termen nu e mai mare ca 9, deci 9 vine la final → `1 6 7 5 9` ✔.

## Ce merită reținut din simulare

- **Împărțirea întreagă** între `int`-uri trunchiază la fiecare pas, de la stânga la dreapta.
- **Arbori cu cel mult k fii:** frunze = 1 + Σ(fii − 1); rădăcina cu un singur fiu are și ea grad 1.
- **Diagonala secundară** și paralelele ei: $i + j$ = constantă.
- **Radical simplificat:** caută cel mai mare pătrat perfect care divide numărul.
- **Inserare pentru număr minim:** pune cifra înaintea primei cifre mai mari decât ea; se poate face din mers, fără tablou.
