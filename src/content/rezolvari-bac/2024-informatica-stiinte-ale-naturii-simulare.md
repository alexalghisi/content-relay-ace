Rezolvarea completă a subiectului de **Bacalaureat 2024 la Informatică, limbajul C/C++, profil științe ale naturii**, **simularea** examenului. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **b**, 3 – **b**, 4 – **d**, 5 – **a** (câte 4 puncte).

### 1. Valoarea lui `6.3/20+24` → c. 24.315

Operandul 6.3 este real, deci împărțirea este **reală**: $6{,}3 / 20 = 0{,}315$, iar $0{,}315 + 24 = 24{,}315$.

- a, b. ar presupune împărțire întreagă (care ar da 0) — nu e cazul, 6.3 nu e întreg.
- d. 24.9 nu corespunde niciunui calcul corect.

### 2. Valorile de sub diagonală → b. `2*j`

Pe și deasupra diagonalei (`j >= i`) se afișează `2*i`. Sub diagonală (`j < i`) valorile depind de **coloană**: coloana 0 are 0, coloana 1 are 2, coloana 2 are 4, coloana 3 are 6 → `2*j`. Verificare: linia 4: 0 2 4 6 (sub diagonală) și 8 (pe diagonală) ✔.

- a. `2+j` dă 2 pe coloana 0. c. `2+i+j` dă cel puțin 2. d. `2*i*j` dă de exemplu 8 pe linia 4, coloana 1.

### 3. Căutare binară pentru x = 22 → b. 16, 24, 20

Pozițiile 1..7, mijlocul 4 → **16**; 22 > 16 → 5..7, mijlocul 6 → **24**; 22 < 24 → poziția 5 → **20**; 22 ≠ 20, căutarea se termină fără succes.

- a. după 16 nu se merge la stânga (6), pentru că 22 > 16.
- c, d. căutarea binară nu începe de la capete.

### 4. `floor(sqrt(24))` → d. 4

$\sqrt{24} \approx 4{,}899$, `floor` dă **4**. c (5) ar fi `ceil`, a și b ignoră radicalul.

### 5. y = 2^n → a. `n%2==0`

Este **exponențierea rapidă**: dacă n este par, $2^n = (x^2)^{n/2}$, deci ridicăm baza la pătrat și înjumătățim exponentul; dacă n este impar, extragem un factor x în y și scădem exponentul cu 1.

Exemplu n = 6: par → x = 4, n = 3; impar → y = 4, n = 2; par → x = 16, n = 1; impar → y = 64 = $2^6$ ✔.

- b. `n/2>=1` (n ≥ 2) pentru n = 3 dă x = 4, n = 1, apoi y = 4 ≠ 8. Greșit.
- c, d. nu corespund parității exponentului.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Algoritmul descompune n în factori primi: pentru fiecare d, împarte cât se poate, iar `p = 1` dacă d a fost divizor. În `s` se adună **factorii primi distincți**; dacă la final n ≠ 1, ce a rămas este un ultim factor prim, care se adaugă și el.

#### a) Pentru n = 32625 → **37**

$32625 = 3^2 \cdot 5^3 \cdot 29$.

| d | Ce se întâmplă | n după | s |
|---|---|---|---|
| 2 | nu divide | 32625 | 0 |
| 3 | se împarte de 2 ori | 3625 | 3 |
| 4 | nu divide | 3625 | 3 |
| 5 | se împarte de 3 ori | 29 | 8 |
| 6 | $36 > 29$ → stop | 29 | 8 |

n = 29 ≠ 1 → s = 8 + 29 = **37**. *(6p)*

#### b) Două numere din [10, 100] pentru care se afișează 2

Suma factorilor primi distincți este 2 doar dacă singurul factor prim este 2, adică n este o putere a lui 2: **16**, **32** sau **64**. *(câte 3p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, s = 0, d = 2, p;
    cin >> n;
    while (d * d <= n)
    {
        p = 0;
        while (n % d == 0)
        {
            n = n / d;
            p = 1;
        }
        s = s + d * p;
        d = d + 1;
    }
    if (n != 1)
        s = s + n;
    cout << s;
    return 0;
}
```

#### d) A doua structură „cât timp” înlocuită cu test final *(6p)*

Structura cu test final se execută cel puțin o dată, de aceea o protejăm cu un `dacă` care tratează cazul inițial `n%d = 0`:

```text
citește n (număr natural nenul)
s ← 0; d ← 2
┌cât timp d*d ≤ n execută
│  p ← 0
│ ┌dacă n%d = 0 atunci
│ │ ┌repetă
│ │ │  n ← [n/d]; p ← 1
│ │ └până când n%d ≠ 0
│ └■
│  s ← s + d*p; d ← d + 1
└■
┌dacă n ≠ 1 atunci
│  s ← s + n
└■
scrie s
```

### 2. Perechile de la pașii 5 și 6 *(6p)*

A = (2, 3, 7, 11, 20), B = (3, 5, 6, 10, 16, 24), interclasare crescătoare:

| Pas | Pereche (x, y) | Se adaugă |
|---|---|---|
| 1 | (2, 3) | 2 |
| 2 | (3, 3) | 3 |
| 3 | (7, 3) sau (3, 5) | 3 |
| 4 | (7, 5) | 5 |
| 5 | **(7, 6)** | 6 |
| 6 | **(7, 10)** | 7 |

Indiferent din ce tablou se ia 3 la egalitate, pașii 5 și 6 sunt **(7,6)** și **(7,10)** (câte 3p).

### 3. Jocul cu mai multe niveluri *(6p)*

```cpp
char c1, c2;
char c; int nr;
if (n1 > n2) { c = c1; nr = n1; }
else { c = c2; nr = n2; }
if (c == 'A') cout << "ACTIUNE ";
else cout << "STRATEGIE ";
cout << nr;
```

**Verificare:** c1 = 'A', n1 = 2, c2 = 'S', n2 = 4 → **STRATEGIE 4** ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Duplicarea cifrelor impare — pseudocod *(10p)*

Parcurgem cifrele de la dreapta la stânga și reconstruim numărul cu o putere a lui 10 (`p`), adăugând fiecare cifră în față. O cifră impară se adaugă **de două ori**. Variabila `ok` reține dacă am întâlnit vreo cifră impară.

```text
citește n (număr natural nenul)
r ← 0; p ← 1; ok ← 0
┌cât timp n ≠ 0 execută
│  c ← n%10
│  r ← c*p + r; p ← p*10
│ ┌dacă c%2 = 1 atunci
│ │  r ← c*p + r; p ← p*10
│ │  ok ← 1
│ └■
│  n ← [n/10]
└■
┌dacă ok = 1 atunci scrie r
│altfel scrie -1
└■
```

**Verificare:** 3361 → 1 → „11”; 6 → „611”; 3 → „33611”; 3 → **3333611** ✔. Pentru 2480 → −1; pentru 10 → 110 (zeroul de la final se păstrează).

### 2. Generarea șirului din șablon *(10p)*

Pentru fiecare termen generic `S[i] < 0`, cifra unităților este `(-S[i]) % 10`. Căutăm în L un număr cu aceeași ultimă cifră și îl punem în locul lui `S[i]`; dacă nu există, afișăm „imposibil”.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int nL, nS, L[101], S[101], i, j, u, gasit, ok = 1;
    cin >> nL;
    for (i = 0; i < nL; i++) cin >> L[i];
    cin >> nS;
    for (i = 0; i < nS; i++) cin >> S[i];
    for (i = 0; i < nS && ok; i++)
        if (S[i] < 0)                       // termen generic
        {
            u = (-S[i]) % 10;               // cifra unităților
            gasit = 0;
            for (j = 0; j < nL && !gasit; j++)
                if (L[j] % 10 == u)
                {
                    S[i] = L[j];
                    gasit = 1;
                }
            if (!gasit) ok = 0;
        }
    if (!ok)
        cout << "imposibil";
    else
        for (i = 0; i < nS; i++)
            cout << S[i] << ' ';
    return 0;
}
```

**Verificare:** pentru S = (−16, 0, 3, −452, −10, −974, 10, −20) se obține **36 0 3 2 0 24 10 0** ✔ (primul șir din exemplu); pentru șablonul cu −17, în listă nu există niciun număr terminat în 7 → **imposibil** ✔.

### 3. Șir de tip api

#### a) Descrierea algoritmului *(2p)*

Valorile sunt între 1 și 1000, deci folosim un **vector de apariții** `ap`, unde `ap[i]` = de câte ori apare i în șir; îl completăm la citire. Apoi parcurgem valorile 1..1000: dacă o valoare apare (`ap[i] ≠ 0`) dar `ap[i]%2 ≠ i%2`, șirul nu este de tip api.

**Eficiență:** fișierul se citește o singură dată, iar vectorul de apariții are dimensiune constantă → timp **liniar**; nu memorăm șirul.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int ap[1001];   // ap[i] = de câte ori apare i

int main()
{
    ifstream f("bac.in");
    int x, i, ok = 1;
    while (f >> x)
        ap[x]++;
    for (i = 1; i <= 1000; i++)
        if (ap[i] != 0 && ap[i] % 2 != i % 2)
            ok = 0;
    if (ok) cout << "DA";
    else cout << "NU";
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** 2 apare de 4 ori, 8 și 14 de câte 2 ori, 27 de 3 ori — toate parități potrivite → **DA** ✔.

## Ce merită reținut din simulare

- **Împărțire reală vs. întreagă:** dacă un operand e real, rezultatul e real.
- **Exponențiere rapidă:** exponent par → `x=x*x; n=n/2`, impar → `y=y*x; n=n-1`.
- **Suma factorilor primi distincți:** nu uita factorul rămas după buclă.
- **Duplicarea cifrelor:** adaugă cifra de două ori cu ajutorul puterii lui 10.
- **Vector de apariții** pentru valori dintr-un interval mic.
