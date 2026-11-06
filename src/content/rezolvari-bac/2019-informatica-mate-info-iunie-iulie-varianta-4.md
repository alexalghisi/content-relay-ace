Rezolvarea completă a subiectului de **Bacalaureat 2019 la Informatică, limbajul C/C++, profil mate-info**, sesiunea iunie–iulie, **varianta 4**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **a**, 2 – **b**, 3 – **b**, 4 – **b**, 5 – **c** (câte 4 puncte).

### 1. Valori pentru care `x/2+x%y-x/y==0` → a. x=4 şi y=2

- a. 4/2 + 4%2 − 4/2 = 2 + 0 − 2 = **0** ✔.
- b. 3 + 0 − 2 = 1. c. 4 + 0 − 2 = 2. d. y = 0 → împărțire la zero.

### 2. Valoarea lui f(6) → b. 5

f(1) = 1, f(2) = 2. Apoi: f(3) = f(1) − f(2) = −1; f(4) = f(3) − f(2) = −3; f(5) = f(3) − f(4) = 2; f(6) = f(5) − f(4) = 2 − (−3) = **5**.

### 3. Verificarea vocalei → b. `strchr("aeiou",x)`

`strchr` returnează adresa caracterului x în șirul „aeiou” dacă există (valoare nenulă), altfel NULL.

- a. `strcmp` compară două șiruri, nu un caracter. c. include și consoane (b, c, d, …). d. `a`, `e` etc. fără apostrofuri sunt nume de variabile, nu caractere.

### 4. Al șaptelea număr → b. 5413

Numerele se generează descrescător, cifră cu cifră, cu cifre distincte. După 5420, terminate variantele care încep cu 542, urmează cele cu 541: prima este **5413** (5415 nu e posibil — cifra 5 este deja folosită).

### 5. Numărul maxim de componente conexe → c. 16

Ca să avem cât mai multe componente, punem toate muchiile pe cât mai puține noduri. Graful complet cu 5 noduri are exact $5 \cdot 4 / 2 = 10$ muchii. Rămân 15 noduri izolate → 1 + 15 = **16** componente.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru p de la p la q: s1 numără valorile divizibile cu m **sau** cu n, s2 pe cele divizibile cu m **și** cu n. Se afișează s1 − 2·s2.

#### a) Pentru 4, 3, 11, 25 → **3**

În [11, 25]: multiplii lui 4 sau 3 sunt 12, 15, 16, 18, 20, 21, 24 → s1 = 7; multiplii comuni (ai lui 12) sunt 12, 24 → s2 = 2. Se afișează 7 − 4 = **3**. *(6p)*

#### b) m = 3, n = 5, p = 1, se afișează 10

Oricare două dintre **25, 26, 30, 31, 32**. De exemplu, pentru q = 25: multiplii lui 3 sau 5 sunt 8 + 5 − 1 = 12, multiplul comun 15 → 12 − 2 = 10 ✔. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, p, q, s1 = 0, s2 = 0;
    cin >> m >> n >> p >> q;
    while (p <= q)
    {
        if (p % m == 0 || p % n == 0) s1 = s1 + 1;
        if (p % m == 0 && p % n == 0) s2 = s2 + 1;
        p = p + 1;
    }
    cout << s1 - 2 * s2;
    return 0;
}
```

#### d) Structura „cât timp” înlocuită cu „pentru” *(6p)*

```text
citește m, n, p, q (numere naturale nenule, p≤q)
s1 ← 0; s2 ← 0
┌pentru i ← p, q execută
│ ┌dacă i%m = 0 sau i%n = 0 atunci s1 ← s1 + 1
│ └■
│ ┌dacă i%m = 0 și i%n = 0 atunci s2 ← s2 + 1
│ └■
└■
s ← s1 − 2*s2
scrie s
```

### 2. Un drum elementar de lungime maximă *(6p)*

Vârful 3 nu are arce care intră în el, deci un drum care îl conține începe cu el. Un drum prin toate cele 6 vârfuri nu există, iar lungimea maximă este 4, de exemplu: **3, 5, 1, 2, 6** (arcele (3,5), (5,1), (1,2), (2,6)). Altă variantă: 4, 1, 2, 6, 5.

### 3. Inițializarea cercului *(6p)*

```cpp
fig.raza = 1;
fig.centru.x = 0;
fig.centru.y = 0;
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul Impare *(10p)*

Parcurgem cifrele de la dreapta la stânga și reconstruim numărul cu o putere a lui 10; fiecare cifră impară c devine c − 1 (cea mai mare cifră pară mai mică decât ea). Zerourile de la început dispar singure (15690 → 4680).

```cpp
void Impare(int &n)
{
    int r = 0, p = 1, x = n;
    while (x != 0)
    {
        int c = x % 10;
        if (c % 2 == 1) c = c - 1;
        r = r + c * p;
        p = p * 10;
        x = x / 10;
    }
    n = r;
}
```

**Exemple:** 235690 → **224680**; 15690 → **4680** ✔.

### 2. Tablou simetric față de coloana din mijloc *(10p)*

Pe fiecare linie, elementul de pe coloana j trebuie să fie egal cu cel de pe coloana n − 1 − j (simetricul său).

```cpp
#include <iostream>
using namespace std;

int a[22][22];

int main()
{
    int m, n, ok = 1;
    cin >> m >> n;
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> a[i][j];
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n / 2; j++)
            if (a[i][j] != a[i][n - 1 - j]) ok = 0;
    if (ok) cout << "DA";
    else cout << "NU";
    return 0;
}
```

### 3. Vârfurile locale ale șirului

#### a) Descrierea algoritmului *(2p)*

Citim numerele pe rând, păstrând maximul `mx` al termenilor anteriori, termenul anterior și dacă acesta a fost vârf local. Termenul curent x este vârf local dacă x > mx (niciun termen anterior nu e mai mare sau egal) sau dacă x este egal cu termenul anterior, iar acela a fost vârf local. Primul termen este mereu vârf. Afișăm vârfurile pe măsură ce le găsim.

**Eficiență:** o singură parcurgere → timp **liniar**; doar câteva variabile → memorie **constantă**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, ant, mx, varfAnt;
    f >> x;
    cout << x << ' ';            // primul termen este vârf local
    mx = x; ant = x; varfAnt = 1;
    while (f >> x)
    {
        int varf = (x > mx) || (x == ant && varfAnt);
        if (varf) cout << x << ' ';
        if (x > mx) mx = x;
        ant = x; varfAnt = varf;
    }
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** 7 4 9 10 10 10 8 10 10 8 30 → **7 9 10 10 10 30** (al doilea grup de 10 urmează după 8, care nu e vârf) ✔.

## Ce merită reținut din varianta 4

- **`strchr("aeiou", c)`** — testul clasic pentru vocale.
- **Recursivitate cu două apeluri:** calculează valorile de jos în sus.
- **Maximum de componente conexe:** strânge toate muchiile într-un graf complet cât mai mic.
- **Drum elementar maxim:** pornește din vârfurile fără arce de intrare.
- **Simetrie față de coloana din mijloc:** `a[i][j] == a[i][n-1-j]`.
