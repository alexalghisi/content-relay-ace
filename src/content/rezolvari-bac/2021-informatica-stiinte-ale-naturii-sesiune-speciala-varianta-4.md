Rezolvarea completă a subiectului de **Bacalaureat 2021 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea specială, **varianta 4**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **b**, 3 – **a**, 4 – **d**, 5 – **c** (câte 4 puncte).

### 1. Expresia C/C++ pentru fracția dată → d. `((x+y)/5+(x-y)/2)/(x+2)`

Numărătorul este $\frac{x+y}{5} + \frac{x-y}{2}$, iar numitorul $x+2$. Ambele trebuie puse între paranteze. Varianta a nu grupează `x+y` și `x-y`, b împarte la (x+2) doar al doilea termen, iar c împarte doar la x și apoi adună 2.

### 2. Șirurile pe care se poate aplica direct căutarea binară → b. doar S3

Căutarea binară cere un șir **ordonat** (crescător sau descrescător). S1 (2, 22, 25, 23, 24) și S2 (1, 8, 9, 6) nu sunt ordonate; S3 (9, 5, 4, 1) este ordonat descrescător ✔.

### 3. Ultimul număr ≥ 2021 → a. `if(x>=2021) m=x;`

La fiecare număr care îndeplinește condiția, m primește acea valoare, deci la final m este **ultimul** astfel de număr; dacă nu există, m rămâne 0.

- c. cu `else m=0` ar șterge valoarea găsită la primul număr mai mic. Greșit.
- b. și d. modifică x, nu m. Greșit.

### 4. Expresie mereu adevărată → d. `ceil(x)+1==ceil(x+1)`

Adunarea unui întreg nu schimbă partea fracționară, deci $\lceil x + 1 \rceil = \lceil x \rceil + 1$ pentru orice x real. Celelalte egalități sunt mereu false (de exemplu, a compară două numere care diferă prin 2).

### 5. Suma divizorilor → c. `i+n/i`

Divizorii vin în perechi (i, n/i) cu $i < \sqrt{n}$. Bucla merge cât timp `i*i < n` și adaugă **ambii** divizori ai perechii: `i + n/i`. Dacă n este pătrat perfect, divizorul $\sqrt{n}$ se adaugă separat, o singură dată, după buclă.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Se afișează numerele i de la 1 la n divizibile **cu exact unul** dintre x și y; dacă nu există, se afișează 0.

#### a) Pentru 15, 3, 4 → **3 4 6 8 9 15**

Multiplii lui 3: 3, 6, 9, 12, 15; multiplii lui 4: 4, 8, 12. 12 se divide cu amândouă, deci nu se afișează. *(6p)*

#### b) Două seturi pentru care se afișează 0

Pentru **x = y**, un număr se divide fie cu ambele, fie cu niciunul. Exemple: **10 2 2** și **5 5 5**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x, y, ok = 0;
    cin >> n >> x >> y;
    for (int i = 1; i <= n; i++)
        if ((i % x == 0 && i % y != 0) || (i % x != 0 && i % y == 0))
        {
            cout << i << ' ';
            ok = 1;
        }
    if (ok == 0) cout << 0;
    return 0;
}
```

#### d) Structura „pentru” înlocuită cu una cu test inițial *(6p)*

```text
citește n, x, y (numere naturale nenule, x≤n, y≤n)
ok ← 0
i ← 1
┌cât timp i ≤ n execută
│ ┌dacă (i%x=0 și i%y≠0) sau (i%x≠0 și i%y=0) atunci
│ │  scrie i, ' '
│ │  ok ← 1
│ └■
│  i ← i + 1
└■
┌dacă ok = 0 atunci scrie 0
└■
```

### 2. Elementele tabloului B → **(3, 5, 8, 48, 60)** *(6p)*

Din rezultatul interclasării (2, 3, 5, 8, 20, 27, 36, 48, 50, 60) eliminăm elementele lui A (2, 20, 27, 36, 50). Rămân 3, 5, 8, 48, 60; cum interclasarea a fost crescătoare, B este ordonat crescător (baremul acceptă și ordinea descrescătoare).

### 3. Datele angajatului cu venitul cel mai mare *(6p)*

```cpp
if (venit1 > venit2) cout << venit1 << endl << an1;
else cout << venit2 << endl << an2;
```

Veniturile sunt diferite, deci nu există caz de egalitate.

## Subiectul al III-lea (30 de puncte)

### 1. Primele n cuburi perfecte, descrescător — pseudocod *(10p)*

Primele n cuburi nenule sunt $1^3, 2^3, \dots, n^3$; le scriem cu b de la n în jos.

```text
citește n (număr natural, n ≥ 1)
┌pentru b ← n, 1, −1 execută
│  scrie b*b*b, ' '
└■
```

Pentru n = 5 → **125 64 27 8 1** ✔.

### 2. Multipli pe poziții pare, naturale pe poziții impare *(10p)*

Pe poziția pară i se află al (i/2 + 1)-lea multiplu al lui k: `k*(i/2+1)`. Pe poziția impară i se află al (i/2 + 1)-lea număr natural, începând de la 0: `i/2`.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int k, n, a[105];
    cin >> k >> n;
    for (int i = 0; i < n; i++)
        if (i % 2 == 0) a[i] = k * (i / 2 + 1);
        else a[i] = i / 2;
    for (int i = 0; i < n; i++) cout << a[i] << ' ';
    return 0;
}
```

Pentru k = 5, n = 9 → **5 0 10 1 15 2 20 3 25** ✔.

### 3. Perechi cu aceeași ultimă cifră

#### a) Descrierea algoritmului *(2p)*

Contează doar ultima cifră. Citim șirul A și construim un vector de frecvență `v`, cu `v[c]` = câte numere din A se termină în cifra c. Apoi, pentru fiecare număr y din B, adăugăm la rezultat `v[y % 10]`.

**Eficiență:** fiecare număr se citește o singură dată și se prelucrează în timp constant → timp **liniar** O(na + nb); memorie: un vector de 10 elemente.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("numere.in");
    int na, nb, x, v[10] = {0};
    long long nr = 0;
    f >> na >> nb;
    for (int i = 0; i < na; i++) { f >> x; v[x % 10]++; }
    for (int i = 0; i < nb; i++) { f >> x; nr += v[x % 10]; }
    cout << nr;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** în A, cifra 2 apare de 3 ori (112, 112, 10012), cifra 4 de 2 ori (4, 824). În B: 52 și 6542 → 2·3 = 6, 1024 → 2; total **8** ✔.

## Ce merită reținut din varianta 4

- **Căutarea binară** se aplică doar pe șiruri ordonate (crescător sau descrescător).
- **Ultima valoare cu o proprietate:** suprascrie la fiecare potrivire, fără `else`.
- **Divizori în perechi** (i, n/i) până la $\sqrt{n}$; pătratul perfect se tratează separat.
- **Interclasare inversă:** B = rezultatul fără elementele lui A.
- **Vector de frecvență pe ultima cifră** pentru numărarea perechilor.
