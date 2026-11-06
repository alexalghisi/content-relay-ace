Rezolvarea completă a subiectului de **Bacalaureat 2020 la Informatică, limbajul C/C++, profil mate-info**, sesiunea specială, **varianta 2**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **a**, 2 – **d**, 3 – **a**, 4 – **b**, 5 – **c** (câte 4 puncte).

### 1. Valoarea minimă a lui `(x-999)%1000` → a. 0

Pentru x ∈ [1000, 2000], x − 999 ∈ [1, 1001]. Restul la 1000 este 0 pentru x − 999 = 1000, adică **x = 1999**.

### 2. Ce afișează f(9) → d. 0071249

Pentru x ≥ 2: se afișează 0 dacă x e par, apoi se face apelul `f(x/2)`; pentru x < 2 se afișează 7. **După** acestea, fiecare apel afișează x.

`f(9)` (impar, nimic) → `f(4)` afișează 0 → `f(2)` afișează 0 → `f(1)` afișează 7 și 1. La revenire se afișează 2, 4, 9. Rezultat: **0071249**.

### 3. Al șaselea meniu → a. (aperitiv, salată, paste, desert)

După (aperitiv, paste, salată, desert), următoarele încercări cu paste pe poziția a doua — (aperitiv, paste, salată, supă), (aperitiv, paste, supă, …) — încalcă regula „pastele nu înaintea supei”. Se trece la salată pe poziția a doua; legumele sunt interzise alături de salată, deci primul meniu valid este **(aperitiv, salată, paste, desert)**.

### 4. Componente tare conexe → b. 2

Din desen, arcele sunt 1→2, 2→5, 5→1, 5→3, 5→4, 3→4, 4→3. Vârfurile 1, 2, 5 formează un circuit, iar 3 și 4 se ating reciproc; din {3, 4} nu se poate reveni în {1, 2, 5}. Componentele tare conexe sunt **{1, 2, 5}** și **{3, 4}**.

### 5. Numărul maxim de noduri cu același tată → c. 10

Fiecare fiu al unui nod este fie frunză, fie rădăcina unui subarbore care conține cel puțin o frunză. Deci un nod are cel mult atâția fii câte frunze există: **10**. Valoarea se atinge: un lanț de 10 noduri interne, iar ultimul are ca fii toate cele 10 frunze.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare x, cât timp ultima cifră este strict mai mare decât penultima, se elimină ultima cifră. Valoarea rămasă se adună la m. La final se afișează m sau „niciunul” dacă m = 0.

#### a) Pentru 5, 127, 2019, 1005, 7, 1900 → **2020**

| x | transformări | rămâne |
|---|---|---|
| 127 | 7 > 2 → 12, 2 > 1 → 1, 1 > 0 → 0 | 0 |
| 2019 | 9 > 1 → 201, 1 > 0 → 20 | 20 |
| 1005 | 5 > 0 → 100 | 100 |
| 7 | 7 > 0 → 0 | 0 |
| 1900 | 0 > 0? nu | 1900 |

m = 0 + 20 + 100 + 0 + 1900 = **2020**. *(6p)*

#### b) n = 2, se afișează „niciunul”

Fiecare număr trebuie să ajungă la 0, adică să aibă **cifrele în ordine strict crescătoare**. De exemplu: **1234** și **5678**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x, m = 0;
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        cin >> x;
        while (x % 10 > x / 10 % 10)
            x = x / 10;
        m = m + x;
    }
    if (m > 0) cout << m;
    else cout << "niciunul";
    return 0;
}
```

#### d) Structura „pentru” înlocuită cu una de alt tip *(6p)*

```text
citește n (număr natural nenul)
m ← 0
i ← 1
┌cât timp i ≤ n execută
│  citește x (număr natural)
│ ┌cât timp x%10 > [x/10]%10 execută
│ │  x ← [x/10]
│ └■
│  m ← m + x
│  i ← i + 1
└■
┌dacă m > 0 atunci scrie m
│altfel scrie „niciunul”
└■
```

### 2. Structura figura *(6p)*

Din `c.centru.x` rezultă că `centru` este o structură cu câmpurile reale `x` și `y`.

```cpp
struct punct
{
    float x, y;
};
struct figura
{
    punct centru;
    float raza;
} c;
```

### 3. Completarea tabloului *(6p)*

Sub diagonala principală (j < i) se află `+`. Pe diagonală și deasupra ei, litera depinde de distanța față de diagonală: pe diagonală 'a', apoi 'b', 'c', … — adică `'a' + (j - i)`.

```cpp
for (i = 0; i < 7; i++)
    for (j = 0; j < 7; j++)
        if (j >= i) m[i][j] = 'a' + j - i;
        else m[i][j] = '+';
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul multiplu *(10p)*

Încercăm pe rând multiplii lui n: n, 2n, 3n, … și îl returnăm pe primul care este pătrat perfect. Cum $n^2$ este mereu pătrat perfect, căutarea se oprește cel târziu la k = n.

```cpp
#include <cmath>
int multiplu(int n)
{
    for (int k = 1; ; k++)
    {
        int m = k * n;
        int r = (int)sqrt((double)m);
        while (r * r > m) r--;
        while ((r + 1) * (r + 1) <= m) r++;
        if (r * r == m) return m;
    }
}
```

**Exemple:** n = 72 → 72 nu, **144** = $12^2$ da ✔; n = 144 → 144 ✔.

### 2. Transformarea citatelor în majuscule *(10p)*

Parcurgem textul cu un indicator `in` (suntem sau nu într-un citat): `<` îl pornește, `>` îl oprește. Literele mici aflate într-un citat se transformă în majuscule.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[101];
    cin.getline(s, 101);
    int in = 0;
    for (int i = 0; s[i]; i++)
        if (s[i] == '<') in = 1;
        else if (s[i] == '>') in = 0;
        else if (in && s[i] >= 'a' && s[i] <= 'z') s[i] = s[i] - 'a' + 'A';
    cout << s;
    return 0;
}
```

Test: „mai bine sa fii un &lt;om de valoare&gt; decat un &lt;om de succes&gt;” → „mai bine sa fii un &lt;OM DE VALOARE&gt; decat un &lt;OM DE SUCCES&gt;” ✔.

### 3. Vârful cu diferența minimă dintre vecini

#### a) Descrierea algoritmului *(2p)*

Citim șirul o singură dată, păstrând ultimele trei numere citite a, b, c. Când b > a și b > c, b este vârf; calculăm d = |a − c|. Dacă d este mai mic decât minimul de până atunci, sau egal cu el dar b este mai mare decât vârful reținut, actualizăm rezultatul. Dacă nu am găsit niciun vârf, afișăm „nu exista”.

**Eficiență:** o singură parcurgere → timp **liniar**; doar câteva variabile → memorie **constantă**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.in");
    long long a, b, c, dmin = -1, rez = -1;
    if (f >> a >> b)
        while (f >> c)
        {
            if (b > a && b > c)
            {
                long long d = a > c ? a - c : c - a;
                if (dmin == -1 || d < dmin || (d == dmin && b > rez))
                {
                    dmin = d;
                    rez = b;
                }
            }
            a = b; b = c;
        }
    if (rez == -1) cout << "nu exista";
    else cout << rez;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** vârfurile sunt 10 (vecini 7, 5 → 2), 6 (5, 2 → 3), 20 (3, 17 → 14), 11 (9, 7 → 2), 10 (3, 6 → 3). Diferența minimă 2 apare la 10 și 11 → se afișează **11** ✔.

## Ce merită reținut din varianta 2

- **Afișarea după apelul recursiv** se face la revenire, în ordine inversă.
- **Componente tare conexe:** grupuri de vârfuri care se pot atinge reciproc.
- **Un nod are cel mult atâția fii câte frunze are arborele.**
- **Elemente deasupra diagonalei principale:** j > i, la distanța j − i de ea.
- **Vârf într-un șir:** păstrează ultimele trei valori citite.
