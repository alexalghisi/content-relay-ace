Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2020 la Informatică, limbajul C/C++, profil științe ale naturii**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **d**, 3 – **b**, 4 – **a**, 5 – **d** (câte 4 puncte).

### 1. x mai mic decât y și decât z → c. `x+z<z+y && z+y>y+x`

`x+z<z+y` ⇔ x < y, iar `z+y>y+x` ⇔ z > x. Împreună: x < y și x < z ✔. Celelalte variante, simplificate, compară alte perechi (de exemplu b dă z < y și z > x).

### 2. Secvențele cu aceeași valoare a lui p pentru n = 12 → d. s1, s2 și s3

- s1: $p = 2 \cdot 3 \cdots 12 = 12!$.
- s2: $p = 12 \cdot 11 \cdot 10 \cdot 9 \cdots 2 \cdot 1 = 12!$ (câte doi factori la fiecare pas).
- s3: n este par, deci p = 1, apoi pentru i = 1…6 se înmulțește cu $i \cdot (13 - i)$: $1 \cdot 12 \cdot 2 \cdot 11 \cdots 6 \cdot 7 = 12!$.

### 3. Transcrierea expresiei → b. `sqrt(x*(pow(x,2)-y))`

Expresia matematică este $\sqrt{x \cdot (x^2 - y)}$. `pow(x,2)` = $x^2$, iar `sqrt` aplică radicalul întregului produs. Variantele a și c folosesc `pow` cu un singur argument (greșit), iar d calculează $\sqrt{x^3 - y}$ — echivalent matematic, dar nu este forma dată.

### 4. Căutarea binară a lui 56 → a. 12, 57, 55

Indici 0…6: mijlocul 3 → **12** < 56, căutăm în [4, 6]; mijlocul 5 → **57** > 56, căutăm în [4, 4]; se compară **55** ≠ 56 și căutarea se încheie.

### 5. Tablourile interclasate → d. A=(45,29,17,12,10,3), B=(16,12,7,2)

Pentru o interclasare descrescătoare, ambele tablouri trebuie să fie ordonate descrescător și să conțină, împreună, exact valorile rezultatului. Varianta d îndeplinește ambele condiții (10 elemente: 6 + 4). Variantele a și c au valori care nu apar în rezultat, iar b are doar 9 elemente.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

m urcă, n coboară. Când m este multiplu de x, se adaugă la s, iar pasul lui m devine x; analog pentru n (dacă m ≠ n). Bucla se oprește când m depășește n.

#### a) Pentru 21, 38, 4 → **120**

| m | n | ce se adaugă | s |
|---|---|---|---|
| 21 | 38 | — | 0 |
| 22 | 37 | — | 0 |
| 23 | 36 | 36 (pn = 4) | 36 |
| 24 | 32 | 24 (pm = 4) și 32 | 92 |
| 28 | 28 | 28 (m = n, n nu se mai adaugă) | 120 |

*(6p)*

#### b) m = 20, x = 2020 → **2020** și **4039**

Trebuie adunat o singură dată multiplul 2020. Pentru n < 2020 nu se întâlnește niciun multiplu. Pentru n = 2020, n se adaugă imediat. Pentru n între 2021 și 4039, n coboară din 1 în 1 și întâlnește 2020 o singură dată. Pentru n ≥ 4040 se adaugă și 4040. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, x, s = 0, pm = 1, pn = 1;
    cin >> m >> n >> x;
    do
    {
        if (m % x == 0) { s = s + m; pm = x; }
        if (n % x == 0 && m != n) { s = s + n; pn = x; }
        m = m + pm;
        n = n - pn;
    } while (m <= n);
    cout << s;
    return 0;
}
```

#### d) Structura „repetă” înlocuită cu una de alt tip *(6p)*

Datele garantează m ≤ n, deci prima iterație se execută oricum; folosim `cât timp m ≤ n`.

```text
citește m, n, x (numere naturale nenule, m≤n)
s ← 0; pm ← 1; pn ← 1
┌cât timp m ≤ n execută
│ ┌dacă m%x = 0 atunci s ← s + m; pm ← x
│ └■
│ ┌dacă n%x = 0 și m ≠ n atunci s ← s + n; pn ← x
│ └■
│  m ← m + pm; n ← n − pn
└■
scrie s
```

### 2. Suma încasată pentru o zonă de parcare *(6p)*

```cpp
char id;
// ...
cout << numar * pret;
```

Identificatorul este o literă → `char`; suma este numărul de locuri înmulțit cu prețul.

### 3. Poziția ultimului 2020 citit *(6p)*

```cpp
p = 0;
for (i = 1; i <= 10; i++)
{
    cin >> x;
    if (x == 2020) p = i;
}
```

La fiecare apariție a lui 2020, p primește poziția curentă, deci la final este poziția **ultimei** apariții. Pentru exemplul dat, p = **5** ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Duplicarea cifrelor impare — pseudocod *(10p)*

Parcurgem cifrele de la dreapta la stânga și reconstruim numărul cu o putere a lui 10. O cifră impară se scrie de două ori, una pară o singură dată.

```text
citește n (număr natural, n≥1)
d ← 0; p ← 1; imp ← 0
┌cât timp n ≠ 0 execută
│  c ← n%10
│ ┌dacă c%2 = 1 atunci
│ │  d ← d + c*p + c*p*10; p ← p*100; imp ← 1
│ │altfel
│ │  d ← d + c*p; p ← p*10
│ └■
│  n ← [n/10]
└■
┌dacă imp = 0 atunci scrie −1
│altfel scrie d
└■
```

**Exemplu:** 2019 → se scrie **201199** ✔.

### 2. Valorile ≥ x înaintea celorlalte *(10p)*

Folosim două „cursoare”: unul de la stânga, care sare peste valorile ≥ x, și unul de la dreapta, care sare peste valorile < x. Când ambele s-au oprit, interschimbăm elementele.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x, a[105], mari = 0;
    cin >> n >> x;
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
        if (a[i] >= x) mari++;
    }
    if (mari == 0 || mari == n) { cout << "nu exista"; return 0; }
    int i = 0, j = n - 1;
    while (i < j)
    {
        while (i < j && a[i] >= x) i++;
        while (i < j && a[j] < x) j--;
        if (i < j) { int aux = a[i]; a[i] = a[j]; a[j] = aux; }
    }
    for (int k = 0; k < n; k++) cout << a[k] << ' ';
    return 0;
}
```

Test: n = 9, x = 19, (20, 19, 20, 5, 20, 18, 7, 75, 3) → **20 19 20 75 20 18 7 5 3** — întâi valorile ≥ 19, apoi celelalte ✔ (orice ordine în cadrul celor două grupe este acceptată).

### 3. Valori lipsă dintre primul și ultimul termen

#### a) Descrierea algoritmului *(2p)*

Șirul este strict descrescător, deci între doi termeni consecutivi x > y lipsesc exact x − y − 1 valori. Citim termenii pe rând, păstrând doar termenul anterior, și adunăm aceste diferențe.

**Eficiență:** o singură parcurgere, fără a memora șirul → timp **liniar**, memorie **constantă**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("numere.in");
    long long x, y, nr = 0;
    f >> x;
    while (f >> y)
    {
        nr += x - y - 1;
        x = y;
    }
    cout << nr;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** 8 5 3 2 → 2 + 1 + 0 = **3** (lipsesc 7, 6, 4) ✔.

## Ce merită reținut din model

- **Simplifică expresiile** (`x+z<z+y` ⇔ `x<y`) înainte de a decide.
- **Același produs** (aici 12!) se poate calcula în mai multe ordini.
- **Căutarea binară:** urmărește indicii stânga, dreapta, mijloc.
- **Interclasare:** tablourile de intrare trebuie să fie ordonate în același sens ca rezultatul.
- **Golurile dintr-un șir strict monoton:** suma diferențelor x − y − 1.
