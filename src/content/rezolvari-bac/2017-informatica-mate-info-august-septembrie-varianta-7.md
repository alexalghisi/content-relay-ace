Rezolvarea completă a subiectului de **Bacalaureat 2017 la Informatică, limbajul C/C++, profil mate-info**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (30 de puncte)

### 1. Valoarea expresiei `3+7/4+3` → c. 7 *(4p)*

Împărțirea are prioritate și este **întreagă**: 7 / 4 = 1. Apoi 3 + 1 + 3 = **7**.

### 2. Algoritmul în pseudocod

Pentru fiecare număr x citit, bucla interioară găsește **cel mai mic divizor y ≥ 2** al lui x (pentru x = 1 bucla nu rulează și y rămâne 2). Atunci [x/y] este **cel mai mare divizor propriu** al lui x (sau 1, dacă x e prim). Algoritmul afișează maximul acestor valori.

#### a) Pentru 4, 5, 24, 3, 45 → **15** *(6p)*

| x | y (cel mai mic divizor) | [x/y] | k |
|---|---|---|---|
| 5 | 5 | 1 | 1 |
| 24 | 2 | 12 | 12 |
| 3 | 3 | 1 | 12 |
| 45 | 3 | 15 | **15** |

Se afișează **15**.

#### b) n = 3 și se afișează 1 *(4p)*

Avem nevoie ca [x/y] ≤ 1 pentru toate numerele și măcar o dată egal cu 1. Pentru un număr prim, [x/y] = 1; pentru x = 1, [1/2] = 0. Un set: **2, 3, 5** (oricare trei numere prime distincte, sau două prime distincte și 1).

#### c) Prima structură „cât timp” înlocuită cu „pentru” *(6p)*

```text
citește n (număr natural nenul)
k ← 0
┌pentru i ← 1,n execută
│  citește x (număr natural nenul)
│  y ← 2
│ ┌cât timp x>1 și x%y≠0 execută
│ │  y ← y+1
│ └■
│ ┌dacă k<[x/y] atunci k ← [x/y]
│ └■
└■
scrie k
```

#### d) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, k = 0, i = 1, x, y;
    cin >> n;
    while (i <= n)
    {
        cin >> x;
        y = 2;
        while (x > 1 && x % y != 0)
            y = y + 1;
        if (k < x / y)
            k = x / y;
        i = i + 1;
    }
    cout << k;
    return 0;
}
```

*Barem: variabile 1p, citire 1p, decizie 2p, repetitive 3p, atribuiri 1p, afișare 1p, corectitudine 1p.*

## Subiectul al II-lea (30 de puncte)

**Răspunsuri:** 1 – **a**, 2 – **b** (câte 4 puncte).

### 1. Extremitatea stângă a primului interval → a. `v[0].s`

`v` este tabloul, `v[0]` primul element (o structură), iar `.s` câmpul ei. În C/C++ indicele se scrie cu paranteze pătrate, lângă numele tabloului.

### 2. Lungimea lanțului dintre 14 și 47 → b. 8

Urcăm din fiecare nod spre rădăcină, folosind tatăl [i/2]:

- 14 → 7 → 3 → **1** (3 muchii)
- 47 → 23 → 11 → 5 → 2 → **1** (5 muchii)

Primul strămoș comun este rădăcina 1, deci lanțul are $3 + 5 =$ **8** muchii.

### 3. Subgraf cu un nod de grad 1 și unul de grad 2 *(6p)*

Din matrice, muchiile grafului sunt [1,2], [1,4], [2,4], [3,4]. Un **subgraf** se obține eliminând noduri (împreună cu toate muchiile lor). Eliminăm nodul 2:

- noduri: **{1, 3, 4}**
- muchii: **{[1,4], [3,4]}**

Nodul 4 are gradul 2, iar nodurile 1 și 3 au gradul 1 ✔.

### 4. Cuvinte care se termină cu „are” și nu îl mai conțin în altă parte *(6p)*

`strstr` returnează **prima** apariție a lui „are”. Dacă prima apariție este chiar la final (poziția `strlen(s)-3`), atunci „are” se termină cuvântul și nu mai apare înainte.

```cpp
n = 0;
for(i=1;i<=11;i++)
{ cin >> s;
  if (strlen(s) >= 3 && strstr(s, "are") == s + strlen(s) - 3) n++;
}
```

**Verificare:** proiectare, are, liniare → numărate; areolare are „are” la început → nu. n = **3** ✔.

### 5. Inserarea liniei cu mediile coloanelor *(10p)*

Pentru n par, linia nouă devine linia n/2 (indexare de la 0). Coborâm liniile n/2 … n−1 cu o poziție (de jos în sus, ca să nu suprascriem), apoi completăm linia n/2 cu media fiecărei coloane, calculată din celelalte n linii.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n;
    double a[52][51];
    cin >> n;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) cin >> a[i][j];
    for (int i = n; i > n / 2; i--)          // coborâm a doua jumătate cu o linie
        for (int j = 0; j < n; j++)
            a[i][j] = a[i - 1][j];
    for (int j = 0; j < n; j++)              // linia nouă: media fiecărei coloane
    {
        double s = 0;
        for (int i = 0; i <= n; i++)
            if (i != n / 2) s = s + a[i][j];
        a[n / 2][j] = s / n;
    }
    for (int i = 0; i <= n; i++)
    {
        for (int j = 0; j < n; j++) cout << a[i][j] << ' ';
        cout << '\n';
    }
    return 0;
}
```

**Verificare** pe exemplu: prima coloană are media (1.5 + 2.75 + 4.5 + 0.25) / 4 = 2.25; linia inserată este `2.25 1 2.5 2.55` ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Valoarea `f(1234)` → b. 4 *(4p)*

`(n%2)*(n%10)` este ultima cifră dacă ea e impară și 0 dacă e pară. Funcția adună deci **cifrele impare**: 1 + 3 = **4**.

### 2. Sortări topologice — a patra și a cincea soluție *(6p)*

Condițiile: 4 înaintea lui 6, 3 înaintea lui 4, 3 înaintea lui 1, 2 înaintea lui 5. După (2,3,1,5,4,6), cu prefixul (2,3,1,5) nu mai există altă variantă (6 nu poate veni înaintea lui 4), iar cu prefixul (2,3,1,6) e interzis. Se trece la poziția 3: după 1 urmează **4** (permis, deoarece 3 e deja plasat).

- a 4-a soluție: **(2,3,4,1,5,6)**
- a 5-a soluție: **(2,3,4,1,6,5)**

### 3. Subprogramul triplete *(10p)*

Fixăm x și y (cu $a \le x \le y \le b$), iar z = c − x − y; verificăm $y \le z \le b$.

```cpp
void triplete(int a, int b, int c)
{
    int gasit = 0;
    for (int x = a; x <= b; x++)
        for (int y = x; y <= b; y++)
        {
            int z = c - x - y;
            if (z >= y && z <= b)
            {
                cout << '{' << x << ',' << y << ',' << z << '}';
                gasit = 1;
            }
        }
    if (!gasit) cout << "nu exista";
}
```

**Verificare:** a = 2, b = 4, c = 8 → `{2,2,4}{2,3,3}` ✔; a = 5, b = 8, c = 8 → `nu exista` ✔.

### 4. Rația progresiei formate din numerele distincte

#### a) Descrierea algoritmului *(2p)*

Valorile sunt în [0, 1000], așa că le marcăm într-un **vector caracteristic** `v` pe măsura citirii. Parcurgem apoi v crescător: diferența dintre primele două valori marcate este rația r; pentru toate perechile următoare de valori marcate succesive verificăm că diferența este tot r. Dacă da, afișăm r, altfel NU. (Dacă există o singură valoare distinctă, afișăm 0.)

**Eficiență:** citirea este **liniară** în numărul de termeni, iar parcurgerea vectorului are un număr fix de pași (1001), fără sortare → algoritm O(n).

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.in");
    int v[1001] = {0}, x, ant = -1, r = -1, ok = 1;
    while (f >> x) v[x] = 1;
    for (int i = 0; i <= 1000; i++)
        if (v[i])
        {
            if (ant != -1)
            {
                if (r == -1) r = i - ant;          // rația, din primele două valori
                else if (i - ant != r) ok = 0;
            }
            ant = i;
        }
    if (r == -1) r = 0;                            // o singură valoare distinctă
    if (ok) cout << r;
    else cout << "NU";
    f.close();
    return 0;
}
```

**Verificare:** valorile distincte 30, 80, 130, 180, 230, 280, 330 → se afișează **50** ✔.

## Ce merită reținut din varianta 7

- **Împărțirea întreagă** are prioritate față de adunare și trunchiază.
- **Tablou de structuri:** `v[0].s` — indicele lângă tablou, câmpul după punct.
- **Arbore cu tatăl [i/2]:** urcă din ambele noduri până la primul strămoș comun.
- **Subgraf vs. graf parțial:** subgraful elimină noduri (cu muchiile lor), graful parțial elimină doar muchii.
- **`strstr`** dă prima apariție — compar-o cu poziția dorită.
- **Vector caracteristic** pentru valori mici: înlocuiește sortarea.
