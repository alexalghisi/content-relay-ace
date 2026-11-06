Rezolvarea completă a subiectului de **Bacalaureat 2018 la Informatică, limbajul C/C++, profil mate-info**, sesiunea specială, **varianta 9**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (30 de puncte)

### 1. Expresie echivalentă cu `x<=3 || x>10` → d. `!(x>3) || !(x<=10)` *(4p)*

`!(x>3)` înseamnă `x<=3`, iar `!(x<=10)` înseamnă `x>10`. Varianta d este exact expresia dată.

- a. `!(x<3 && x<10)` ⇔ `x>=3` (pentru că x < 3 implică x < 10). Greșit.
- b. `x>=3 && x<10` — este intervalul [3, 10). Greșit.
- c. `!(x<3 || x<=10)` ⇔ `x>10`; pierde x ≤ 3. Greșit.

### 2. Algoritmul în pseudocod

Pentru fiecare număr b citit, bucla interioară numără de câte ori se împarte b la 2 (exponentul lui 2 în descompunerea lui b). Algoritmul numără câte dintre cele n numere au **exact exponentul a** pentru factorul 2.

#### a) Pentru 5, 3, 9, 206, 200, 80, 24 → **2** *(6p)*

n = 5, a = 3.

| b | Împărțiri la 2 | c | c = 3? |
|---|---|---|---|
| 9 | — | 0 | nu |
| 206 | 103 | 1 | nu |
| 200 | 100, 50, 25 | 3 | **da** |
| 80 | 40, 20, 10, 5 | 4 | nu |
| 24 | 12, 6, 3 | 3 | **da** |

Se afișează **2**.

#### b) n = 4, a = 2 și se afișează 4 *(4p)*

Toate cele patru numere trebuie să se dividă cu 4, dar nu cu 8, adică să fie de forma **4 · k, cu k impar**. Exemplu: **12, 20, 28, 36**.

#### c) Prima structură „cât timp” înlocuită cu „pentru” *(6p)*

```text
citește n,a (numere naturale nenule)
nr ← 0
┌pentru i ← 1,n execută
│  citește b (număr natural nenul)
│  c ← 0
│ ┌cât timp b%2=0 execută
│ │  b ← [b/2]; c ← c+1
│ └■
│ ┌dacă c=a atunci nr ← nr+1
│ └■
└■
scrie nr
```

#### d) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a, b, c, nr = 0, i = 1;
    cin >> n >> a;
    while (i <= n)
    {
        cin >> b;
        c = 0;
        while (b % 2 == 0)
        {
            b = b / 2;
            c = c + 1;
        }
        if (c == a) nr = nr + 1;
        i = i + 1;
    }
    cout << nr;
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, decizie 2p, repetitive 3p, atribuiri 1p, corectitudine 1p.*

## Subiectul al II-lea (30 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **c** (câte 4 puncte).

### 1. Fiii nodului 5 → d. 4 6 8

În vectorul de tați (3, 3, 0, 5, 2, 5, 2, 5, 8), valoarea 5 apare pe pozițiile **4, 6, 8** — acestea sunt nodurile care îl au pe 5 drept tată.

### 2. Numărul de noduri → c. 38

Un graf fără cicluri este o **pădure**: fiecare componentă conexă este un arbore, cu (noduri − 1) muchii. Sumând: muchii = noduri − componente, deci noduri = 26 + 12 = **38**.

### 3. prim / patrat / cel mai mic și cel mai mare divizor propriu *(6p)*

- dacă cel mai mic divizor > 1 este numărul însuși → **prim**;
- dacă pătratul lui este numărul → numărul este $p^2$, cu singurul divizor propriu p → **patrat**;
- altfel cel mai mic divizor propriu este `mic`, iar cel mai mare este `nr / mic`.

```cpp
if (d.mic == d.nr) cout << "prim";
else if (d.mic * d.mic == d.nr) cout << "patrat";
else cout << d.mic << ' ' << d.nr / d.mic;
```

Test: 12 (mic = 2) → `2 6` ✔; 9 (mic = 3) → `patrat` ✔.

### 4. Completarea tabloului 9×9 *(6p)*

Fiecare element este egal cu **minimul dintre numărul liniei și numărul coloanei**: deasupra diagonalei principale (i < j) valoarea este i, în rest j.

```cpp
for(i=1;i<=9;i++)
   for(j=1;j<=9;j++)
      if (i < j) a[i][j] = i;
      else a[i][j] = j;
```

### 5. Numărul care începe cu cea mai mare cifră *(10p)*

Separăm textul cu `strtok`. Un element este număr dacă primul caracter este cifră. Comparăm doar primele caractere (cifrele se compară corect și ca și caractere) și păstrăm în `rez` numărul cel mai bun.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[101], rez[101] = "", *p;
    cin.getline(s, 101);
    p = strtok(s, " ");
    while (p)
    {
        if (p[0] >= '0' && p[0] <= '9')          // e număr
            if (rez[0] == '\0' || p[0] > rez[0])
                strcpy(rez, p);
        p = strtok(NULL, " ");
    }
    if (rez[0] == '\0') cout << "nu exista";
    else cout << rez;
    return 0;
}
```

**Verificare:** „am 190 de nuci si 70 de castane” → 190 începe cu 1, 70 cu 7 → se afișează **70** ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Apelul care dă cmmdc(30, 50) → b. `f2(30,50)` *(4p)*

f2 este **algoritmul lui Euclid prin scăderi**: (30, 50) → (30, 20) → (10, 20) → (10, 10) → 10 = cmmdc(30, 50).

f1 calculează doar cea mai mare putere a lui 2 comună: f1(30, 50) = 2. Varianta d calculează cmmdc(15, 50) = 5.

### 2. Backtracking — a cincea și a șasea soluție *(6p)*

Ordinea: {fondante, caramele, dropsuri, acadele}. După (fondante, dropsuri), extinderea (fondante, dropsuri, acadele) este interzisă. Urmează (fondante, acadele), apoi s-au terminat cutiile cu fondante și se trece la caramele.

- a 5-a soluție: **(fondante, acadele)**
- a 6-a soluție: **(caramele, dropsuri)**

### 3. Subprogramul echilibrat *(10p)*

Parcurgem cifrele de la dreapta (poziția 0) și le adunăm separat după paritatea poziției.

```cpp
int echilibrat(int n)
{
    int sp = 0, si = 0, poz = 0;
    while (n != 0)
    {
        if (poz % 2 == 0) sp = sp + n % 10;
        else si = si + n % 10;
        poz++;
        n = n / 10;
    }
    if (sp % 2 == 0 && si % 2 == 1) return 1;
    return 0;
}
```

**Verificare:** 25163912 — pozițiile pare: 2 + 9 + 6 + 5 = 22 (par), pozițiile impare: 1 + 3 + 1 + 2 = 7 (impar) → **1** ✔. 11211: poziții pare 1 + 2 + 1 = 4, impare 1 + 1 = 2 (par) → **0** ✔.

### 4. Secvențe încadrate de lungime maximă

#### a) Descrierea algoritmului *(2p)*

Pentru o valoare i, cea mai lungă secvență încadrată de i începe la **prima** apariție a lui i și se termină la **ultima**. Valorile sunt cifre, deci folosim doi vectori de 10 elemente: `p[i]` (prima poziție a lui i) și `u[i]` (ultima poziție). Citim șirul o dată, numărând pozițiile; la fiecare valoare x, dacă `p[x]` nu e setat îl setăm, iar `u[x]` devine poziția curentă. La final calculăm maximul lui `u[i] − p[i] + 1` și afișăm, în ordine crescătoare, valorile i care îl ating.

**Eficiență:** o singură parcurgere a fișierului → timp **liniar**; memoria este constantă (doi vectori de 10 elemente), independent de lungimea șirului.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int p[10], u[10], x, poz = 0, Lmax = 0;
    for (int i = 0; i <= 9; i++) p[i] = 0;
    while (f >> x)
    {
        poz++;
        if (p[x] == 0) p[x] = poz;   // prima apariție
        u[x] = poz;                  // ultima apariție
    }
    for (int i = 0; i <= 9; i++)
        if (p[i] != 0 && u[i] - p[i] + 1 > Lmax)
            Lmax = u[i] - p[i] + 1;
    cout << Lmax << '\n';
    for (int i = 0; i <= 9; i++)
        if (p[i] != 0 && u[i] - p[i] + 1 == Lmax)
            cout << i << ' ';
    f.close();
    return 0;
}
```

**Verificare** pe exemplu: 5 apare prima oară pe poziția 3 și ultima pe 11 → 9; 4 pe pozițiile 5 și 13 → 9. Se afișează `9`, apoi `4 5` ✔.

## Ce merită reținut din varianta 9

- **Negații:** `!(x>3)` ⇔ `x<=3`; verifică fiecare variantă pe valori de test.
- **Exponentul lui 2:** împarte la 2 cât timp numărul e par.
- **Pădure:** noduri = muchii + componente conexe.
- **Matricea min(i, j):** deasupra diagonalei i, sub ea j.
- **Euclid prin scăderi** calculează cmmdc-ul.
- **Prima și ultima apariție** a fiecărei valori rezolvă problemele cu „secvențe care încep și se termină cu aceeași valoare”.
