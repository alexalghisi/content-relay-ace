Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2024 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **d**, 3 – **a**, 4 – **b**, 5 – **b** (câte 4 puncte).

### 1. Valoarea maximă a lui `x%2024` → c. 2023

Restul împărțirii la 2024 este între 0 și 2023, iar 2023 se obține, de exemplu, pentru x = 2023. Un rest nu poate fi real (a), iar 494071 (d) depășește împărțitorul. 295 (b) nu este maximul.

### 2. Aceeași valoare pentru n = 24 → d. f1, f2 și f3

- f1(24) = $\frac{24 \cdot 25}{2} = 300$.
- f2 calculează recursiv $24 + 23 + \dots + 1 = 300$.
- f3 descompune suma: pentru n par, $1 + 2 + \dots + n$ = (suma numerelor pare) + (suma celor impare) = $2 \cdot f3(n/2) + n^2/4$. Concret: f3(1) = 1, f3(2) = 3, f3(3) = 6, f3(6) = 9 + 12 = 21, f3(12) = 36 + 42 = 78, f3(24) = 144 + 156 = **300**.

Toate trei dau 300.

### 3. Al șaptelea preparat → a. (broccoli, smântână, ou, cașcaval)

Ordinea ingredientelor: broccoli, cașcaval, conopidă, ou, pătrunjel, smântână. După a cincea soluție, (broccoli, smântână, cașcaval, ou), urmează:

- a 6-a: (broccoli, smântână, cașcaval, **pătrunjel**);
- a 7-a: (broccoli, smântână, **ou, cașcaval**) — smântâna e înaintea cașcavalului ✔.

Variantele b, c, d încep cu alt ingredient decât broccoli, deci apar după toate preparatele care încep cu broccoli. Am verificat ordinea și cu un program.

### 4. Numărul de frunze → b. 5

Frunzele sunt nodurile care **nu apar** în vectorul de tați (nu sunt tatăl nimănui). Valorile din vector sunt 7, 4, 6, 9, 5 (și 0). Nodurile care lipsesc: **1, 2, 3, 8, 10** → 5 frunze.

### 5. Muchii adăugate pentru graf eulerian → b. 2

Graful este o „stea”: centrul are gradul 4, iar celelalte 4 noduri au gradul 1 (impar). Un graf eulerian are toate gradele pare. O muchie nouă schimbă paritatea a exact două noduri, deci pentru 4 noduri impare sunt necesare minimum **2 muchii**, de exemplu între perechile de „frunze” (A,B) și (C,D). Gradele devin 4, 2, 2, 2, 2, iar graful rămâne conex.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare x citit, bucla interioară taie ultima cifră **cât timp ea este ≤ cifra zecilor**. Se oprește când ultima cifră este strict mai mare decât cifra din fața ei (pentru un număr de o cifră nenul, cifra zecilor este 0). Valorile obținute se adună în m; dacă suma este egală cu n se afișează „egal”, altfel suma.

#### a) Pentru 4, 721, 20020, 1321, 211 → **2024**

| x | Tăieri | Rezultat |
|---|---|---|
| 721 | 1 ≤ 2 → 72; 2 ≤ 7 → 7 | 7 |
| 20020 | 0 ≤ 2 → 2002 (2 > 0) | 2002 |
| 1321 | 1 ≤ 2 → 132; 2 ≤ 3 → 13 (3 > 1) | 13 |
| 211 | 1 ≤ 1 → 21; 1 ≤ 2 → 2 | 2 |

$m = 7 + 2002 + 13 + 2 = 2024 \ne 4$ → se afișează **2024**. *(6p)*

#### b) n = 2 și se afișează „egal”

Trebuie $m = 2$, deci fiecare număr trebuie să se reducă la **1**. Exemplu: **10 și 100** (10 → 1; 100 → 10 → 1). Orice două numere distincte din {10, 11, 100, 110, 111, 1000, 1100, 1110, 1111, 10000} sunt corecte. *(6p)*

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

#### d) Algoritm echivalent cu „pentru … execută” *(6p)*

Contorul `i` pleacă de la n și scade cu 1 până la 1:

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

### 2. Structura telefon *(6p)*

`t.dimensiune[0]` arată că `dimensiune` este un **tablou** de 3 numere reale (lățime, grosime, lungime).

```cpp
struct telefon
{
    char producator;
    int frecventa;
    float dimensiune[3];
} t;
```

### 3. Coloanele cu primul și ultimul element 2024 *(6p)*

Primul element al coloanei i este `a[0][i]`, ultimul este `a[3][i]` (4 linii, numerotate de la 0).

```cpp
for (i = 0; i < 24; i++)
    if (a[0][i] == 2024 && a[3][i] == 2024)
        cout << i << ' ';
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul produs *(10p)*

Divizorii comuni ai lui a și b sunt numerele d care îi divid pe amândoi; ei sunt cel mult $\min(a,b)$. Îi înmulțim pe toți.

```cpp
long long produs(int a, int b)
{
    long long p = 1;
    for (int d = 1; d <= a && d <= b; d++)
        if (a % d == 0 && b % d == 0)
            p = p * d;
    return p;
}
```

**Verificare:** a = 20, b = 12 → divizori comuni 1, 2, 4 → **8** ✔. Am folosit `long long` pentru produse mai mari (baremul acceptă și tipul `int`, punctând algoritmul).

### 2. Cuvinte mai scurte / mai lungi decât n *(10p)*

Parcurgem textul de două ori: prima dată afișăm cuvintele cu mai puțin de n litere, a doua oară pe cele cu mai mult de n litere. Cum `strtok` strică șirul, lucrăm pe o copie. Dacă una dintre mulțimi e vidă, afișăm doar „nu exista”.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    int n, mici = 0, mari = 0;
    char s[101], c[101];
    cin >> n;
    cin.get();
    cin.getline(s, 101);
    strcpy(c, s);
    for (char *p = strtok(c, " "); p; p = strtok(NULL, " "))
    {
        int L = strlen(p);
        if (L < n) mici++;
        if (L > n) mari++;
    }
    if (mici == 0 || mari == 0)
    {
        cout << "nu exista";
        return 0;
    }
    strcpy(c, s);
    for (char *p = strtok(c, " "); p; p = strtok(NULL, " "))
        if ((int)strlen(p) < n) cout << p << ' ';
    cout << '\n';
    strcpy(c, s);
    for (char *p = strtok(c, " "); p; p = strtok(NULL, " "))
        if ((int)strlen(p) > n) cout << p << ' ';
    return 0;
}
```

**Verificare pe exemplu:** n = 3, „era o apa rece si cu gust bun” → linia 1: `o si cu`, linia 2: `rece gust` ✔ (cuvintele de 3 litere nu apar).

### 3. Prețurile cărților pentru premii

#### a) Descrierea algoritmului *(2p)*

Prețurile sunt între 10 și 1000, deci folosim un **vector de apariții** `ap[p]` = câte cărți au prețul p, completat pe măsura citirii. Apoi parcurgem prețurile **descrescător**, de la 1000 la 10: primul preț cu `ap[p] ≥ n1` devine x (premiul I); după ce avem x, primul preț următor (mai mic) cu `ap[p] ≥ n2` devine y; după y, primul cu `ap[p] ≥ n3` devine z. Dacă z nu a fost găsit, afișăm „nu exista”.

**Eficiență:** citirea este **liniară** în numărul de cărți, iar parcurgerea vectorului are un număr fix de pași (cel mult 991), independent de numărul de cărți. Nu sortăm șirul (sortarea ar costa $O(n \log n)$).

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int ap[1001];

int main()
{
    ifstream f("bac.txt");
    int n1, n2, n3, p, x = 0, y = 0, z = 0;
    f >> n1 >> n2 >> n3;
    while (f >> p) ap[p]++;
    for (p = 1000; p >= 10 && z == 0; p--)
        if (x == 0)
        {
            if (ap[p] >= n1) x = p;
        }
        else if (y == 0)
        {
            if (ap[p] >= n2) y = p;
        }
        else if (ap[p] >= n3) z = p;
    if (z == 0) cout << "nu exista";
    else cout << x << ' ' << y << ' ' << z;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** n1 = 3, n2 = 2, n3 = 4. Descrescător: 500 (1), 200 (2) nu ajung pentru 3; **100** apare de 5 ori → x = 100; 75 (1) ✘, **52** (3 ≥ 2) → y = 52; 30, 25 ✘, **20** (4 ≥ 4) → z = 20. Se afișează `100 52 20` ✔.

## Ce merită reținut din model

- **Restul împărțirii la k:** este între 0 și k−1.
- **Frunzele din vectorul de tați:** nodurile care nu apar ca valori în vector.
- **Graf eulerian:** o muchie nouă corectează paritatea a două noduri → minim (nr. noduri impare)/2 muchii.
- **Transformarea „cât timp” cu contor în „pentru”:** atenție la pasul −1.
- **Valori dintr-un interval mic:** vectorul de apariții înlocuiește sortarea.
