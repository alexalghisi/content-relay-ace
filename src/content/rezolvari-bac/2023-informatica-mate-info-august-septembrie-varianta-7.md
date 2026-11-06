Rezolvarea completă a subiectului de **Bacalaureat 2023 la Informatică, limbajul C/C++, profil mate-info**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **c**, 3 – **a**, 4 – **b**, 5 – **d** (câte 4 puncte).

### 1. Valorile pentru care `y%x-(x/y)*3!=0` este 1 → b. x=25 și y=15

Pentru b: `15%25 = 15`, `25/15 = 1`, deci $15 - 1 \cdot 3 = 12 \ne 0$ → valoarea 1 ✔.

- a. `75%25 = 0`, `25/75 = 0` → $0 - 0 = 0$ → expresia e 0.
- c. y = 0 → `x/y` este **împărțire la zero** (eroare).
- d. `30%10 = 0`, `10/30 = 0` → 0.

### 2. Valoarea `f(3,2)` → c. 9

Funcția calculează $x^y$ prin **ridicare rapidă la putere**: $x^y = (x^{y/2})^2$, înmulțit încă o dată cu x dacă y e impar.

- f(3,0) = 1; f(3,1) = 1·1·3 = 3 (1 impar); f(3,2) = 3·3 = **9** (2 par).

### 3. Șirul s → a. 20123

`strcpy(s+3,"23")` scrie „23” începând cu poziția 3 (a patra literă), peste „9” și peste terminatorul de șir: „201” + „23” = **„20123”**.

### 4. Penultima soluție → b. (cireș, lămâie, salcâm)

Soluțiile sunt combinări de 3 din 5, în ordine lexicografică. Ultimele combinări sunt …, (cireș, iris, salcâm), **(cireș, lămâie, salcâm)**, (iris, lămâie, salcâm) — ultima.

- a. este antepenultima. c. nu respectă ordinea din mulțime (lămâie înainte de iris). d. este ultima.

### 5. Valori posibile pentru x și y → d. 3 și 3

Verificăm fiecare variantă:

- a. Nodul 5 cu gradul 4 ar fi legat de **toate** celelalte noduri, inclusiv de nodul 2, care ar avea gradul 0 — contradicție.
- b. Gradul 5 este imposibil într-un graf cu 5 noduri (maximum 4).
- c. Suma gradelor $2 + 2 + 3 + 3 + 3 = 13$ este impară — imposibil.
- d. Gradele 2, 3, 3, 3, 3 (suma 14 → 7 muchii) se pot realiza, de exemplu: [1,2], [1,3], [2,4], [2,5], [3,4], [3,5], [4,5] ✔.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare pereche (a, b): bucla reduce a la **prima lui cifră**, iar p devine $10^{k-1}$ (k = numărul de cifre ale lui a). Apoi $a \leftarrow \text{prima cifră} \cdot p + b$, adică prima cifră a lui a urmată de b „pe restul pozițiilor”. Dacă rezultatul diferă de valoarea inițială a lui a, x crește. Se afișează numărul de perechi pentru care b **nu** este exact numărul format din cifrele lui a fără prima.

#### a) Pentru 3, 746, 82, 3067, 67, 78, 178 → **2**

| a | b | Prima cifră · p | Rezultat | ≠ a? |
|---|---|---|---|---|
| 746 | 82 | 7 · 100 | 782 | da → x = 1 |
| 3067 | 67 | 3 · 1000 | 3067 | nu |
| 78 | 178 | 7 · 10 | 248 | da → x = 2 |

Se afișează **2**. *(6p)*

#### b) n = 2, valori din [0, 9], se afișează 0

Pentru a de o cifră, p = 1 și rezultatul este $a + b$, egal cu a doar dacă **b = 0**. Un șir corect: **5, 0, 7, 0** (orice șir de forma x, 0, y, 0). *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x = 0, a, b, c, p;
    cin >> n;
    while (n > 0)
    {
        cin >> a >> b;
        c = a; p = 1;
        while (a > 9)
        {
            a = a / 10;
            p = p * 10;
        }
        a = a * p + b;
        if (a != c)
            x = x + 1;
        n = n - 1;
    }
    cout << x;
    return 0;
}
```

#### d) Algoritm echivalent cu „pentru … execută” *(6p)*

Bucla exterioară se execută de n ori, iar valoarea lui n nu mai este folosită ulterior:

```text
citește n (număr natural nenul)
x ← 0
┌pentru i ← 1, n execută
│  citește a, b (numere naturale)
│  c ← a; p ← 1
│ ┌cât timp a > 9 execută
│ │  a ← [a/10]; p ← p*10
│ └■
│  a ← a*p + b
│ ┌dacă a ≠ c atunci x ← x + 1
│ └■
└■
scrie x
```

### 2. Rădăcini cu număr minim de niveluri *(6p)*

Numărul de niveluri este minim când rădăcina se află în **centrul** arborelui. Cel mai lung lanț este, de exemplu, 1 – 2 – 3 – 4 (lungime 3), iar mijlocul lui este format din nodurile **2** și **3**. Cu rădăcina 2 sau 3 arborele are 3 niveluri (0, 1, 2); cu orice altă rădăcină are cel puțin 4.

### 3. Prima literă sau `*` *(6p)*

```cpp
if (p.pret < 100)
    a = p.denumire[0];
else
    a = '*';
```

Prima literă a denumirii este caracterul de pe poziția 0 al șirului; constanta caracter se scrie între apostrofuri.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul DNPI *(10p)*

Parcurgem divizorii lui n în perechi (d, n/d) cu $d^2 \le n$ — maximum ~31 623 de pași pentru $n \le 10^9$. Pentru fiecare divizor **impar** verificăm dacă nu este prim (1 nu este prim, deci se afișează).

```cpp
int prim(int x)
{
    if (x < 2) return 0;
    for (int d = 2; d * d <= x; d++)
        if (x % d == 0) return 0;
    return 1;
}

void DNPI(int n)
{
    for (int d = 1; d * d <= n; d++)
        if (n % d == 0)
        {
            int e = n / d;
            if (d % 2 == 1 && !prim(d)) cout << d << ' ';
            if (e != d && e % 2 == 1 && !prim(e)) cout << e << ' ';
        }
}
```

**Verificare:** n = 90 → divizori impari 1, 3, 5, 9, 15, 45; eliminăm primii 3 și 5 → se afișează 1, 9, 15, 45 (ordinea nu contează) ✔.

### 2. Pătratul de valoare maximă *(10p)*

Fiecare pătrat 2×2 are colțul stânga-sus pe poziția (i, j), cu $i < m-1$ și $j < n-1$. Calculăm suma celor patru celule și reținem maximul.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, a[21][21], i, j, maxim = -1;
    cin >> m >> n;
    for (i = 0; i < m; i++)
        for (j = 0; j < n; j++)
            cin >> a[i][j];
    for (i = 0; i + 1 < m; i++)
        for (j = 0; j + 1 < n; j++)
        {
            int s = a[i][j] + a[i][j + 1] + a[i + 1][j] + a[i + 1][j + 1];
            if (s > maxim) maxim = s;
        }
    cout << maxim;
    return 0;
}
```

**Verificare pe exemplu:** pătratul cu celulele 10, 1, 13, 12 (liniile 2–3, coloanele 2–3) are suma **36**, cea mai mare ✔.

### 3. Numărul maxim de perechi cu valori egale

#### a) Descrierea algoritmului *(2p)*

Valorile sunt între 0 și 99, deci folosim doi **vectori de frecvență**: `fa[v]` = de câte ori apare v în A și `fb[v]` = de câte ori apare v în B, completați la citire. Pentru o valoare v putem forma cel mult $\min(fa[v], fb[v])$ perechi (fiecare poziție se folosește o singură dată), iar acest număr se poate atinge. Răspunsul este $\sum_{v=0}^{99} \min(fa[v], fb[v])$.

**Eficiență:** citirea este **liniară** în $m + n$, iar însumarea are 100 de pași. Nu memorăm șirurile și nu comparăm toate perechile de poziții (ar fi $O(m \cdot n)$).

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int fa[100], fb[100];

int main()
{
    ifstream f("date.in");
    int m, n, x, i;
    long long total = 0;
    f >> m >> n;
    for (i = 0; i < m; i++) { f >> x; fa[x]++; }
    for (i = 0; i < n; i++) { f >> x; fb[x]++; }
    for (x = 0; x < 100; x++)
        total += (fa[x] < fb[x]) ? fa[x] : fb[x];
    cout << total;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** valoarea 1: min(2, 3) = 2; 3: min(1, 2) = 1; 5: min(3, 2) = 2; 0: min(1, 1) = 1; 4 și 7 nu apar în ambele. Total **6** ✔.

## Ce merită reținut din varianta 7

- **Împărțirea la zero** face o expresie invalidă — elimină imediat varianta.
- **Ridicarea rapidă la putere:** $x^y = (x^{y/2})^2 \cdot x^{y \bmod 2}$.
- **`strcpy(s+k, …)`** suprascrie șirul începând cu poziția k.
- **Șiruri de grade:** suma trebuie să fie pară și niciun grad nu poate depăși n − 1.
- **Perechi cu valori egale:** suma minimelor frecvențelor.
