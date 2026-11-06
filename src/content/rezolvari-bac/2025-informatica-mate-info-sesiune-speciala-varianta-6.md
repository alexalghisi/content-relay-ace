Rezolvarea completă a subiectului de **Bacalaureat 2025 la Informatică, limbajul C/C++, profil mate-info**, sesiunea specială, **varianta 6**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas și codul C++ complet, testat.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe se punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **c**, 3 – **a**, 4 – **b**, 5 – **c** (câte 4 puncte).

### 1. x în [m,n], dar nu în (p,q) → d. `x>=m && x<=p || x>=q && x<=n`

Cum $m < p < q < n$, mulțimea cerută este $[m,n] \setminus (p,q) = [m,p] \cup [q,n]$. Varianta d descrie exact reuniunea celor două intervale (`&&` are prioritate mai mare decât `||`).

- a. `x<=m || … || x>=n` acceptă valori din afara lui [m,n].
- b. `x<=m && x>=p` este imposibil (p > m), la fel `x<=q && x>=n` → expresia e mereu 0.
- c. `x>=m || … || x<=n` este adevărată pentru orice x.

### 2. Ce afișează `f(2050)` → c. 2050 205 205 20 2 2 0 20 2050

Funcția afișează mereu n la intrare. Dacă ultima cifră e nenulă, mai afișează n o dată și apoi se apelează; dacă e 0 (și n ≠ 0), se apelează întâi și afișează n **la revenire**.

- f(2050): „2050”, ultima cifră 0 → f(205), apoi „2050”.
- f(205): „205 205”, apoi f(20).
- f(20): „20”, ultima cifră 0 → f(2), apoi „20”.
- f(2): „2 2”, apoi f(0): „0” și se oprește (n = 0).

Rezultat: **2050 205 205 20 2 2 0 20 2050**.

### 3. Ultima soluție generată → a. (complement, atribut, subiect, predicat)

Din primele soluții deducem ordinea elementelor: subiect, predicat, atribut, complement. Ultimele soluții încep cu **complement**; pe poziția a doua punem cel mai „mare” element posibil, **atribut**. Atributul trebuie să fie lângă subiect, deci urmează **subiect**, apoi predicat.

- b. atributul nu este lângă subiect → nu e soluție.
- c. și d. sunt soluții valide, dar (complement, subiect, …) și (complement, predicat, …) apar **înainte** de (complement, atribut, …).

### 4. Element de pe diagonala principală → b. `m[16][16]`

Pe diagonala principală linia este egală cu coloana. În C/C++ fiecare indice se scrie între paranteze drepte proprii: `m[16][16]`. Variantele a, c, d au sintaxă greșită.

### 5. Numărul minim de muchii eliminate → c. 10

Un graf cu 7 noduri și $21 = \frac{7 \cdot 6}{2}$ muchii este **complet**. Împărțim nodurile în două grupe (fiecare cu cel puțin 2 noduri) și păstrăm doar muchiile din interiorul grupelor:

- 2 + 5 noduri: $1 + 10 = 11$ muchii păstrate → eliminăm $21 - 11 = $ **10**;
- 3 + 4 noduri: $3 + 6 = 9$ muchii păstrate → eliminăm 12.

Minimul este **10**.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare `i` de la n la m: `c` este ultima cifră, iar bucla taie cifre de la dreapta cât timp ultima cifră rămasă este egală cu `c`. Ajungem la `x = 0` doar dacă **toate cifrele lui i sunt egale**. Se afișează, în ordine descrescătoare, numerele din [m, n] cu toate cifrele egale.

#### a) Pentru 75 și 90 → **88 77**

Între 75 și 90, numerele cu cifre egale sunt 77 și 88; parcurgerea e descrescătoare → **88 77**. *(6p)*

#### b) m = 2025 și se afișează o singură valoare

Primele numere cu cifre egale de la 2025 în sus sunt 2222 și 3333. Ca să se afișeze doar 2222, trebuie $n \in [2222, 3332]$, de exemplu **2222** și **3000**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, i, x, c;
    cin >> m >> n;
    for (i = n; i >= m; i--)
    {
        x = i;
        c = x % 10;
        do
        {
            x = x / 10;
        } while (x % 10 == c);
        if (x == 0)
            cout << i << ' ';
    }
    return 0;
}
```

„până când `x%10≠c`” devine `while (x % 10 == c)`. Bucla se oprește sigur: dacă toate cifrele sunt egale cu c ≠ 0, la `x = 0` avem `0 % 10 = 0 ≠ c`; dacă c = 0, numărul are prima cifră nenulă, deci nu ajungem la 0 cu toate cifrele 0.

#### d) Algoritm echivalent cu „cât timp … execută” *(6p)*

```text
citește m, n (numere naturale nenule, m ≤ n)
i ← n
┌cât timp i ≥ m execută
│  x ← i
│  c ← x%10
│ ┌repetă
│ │  x ← [x/10]
│ └până când x%10 ≠ c
│ ┌dacă x = 0 atunci scrie i, ' '
│ └■
│  i ← i − 1
└■
```

### 2. Rădăcini pentru care nodul 4 păstrează aceiași frați *(6p)*

Vectorul de tați (3, 0, 2, 5, 2, 5, 1, 5): rădăcina este 2; fiii lui 5 sunt **4, 6, 8**, deci frații lui 4 sunt 6 și 8.

Ca 4, 6 și 8 să rămână fiii lui 5 (și doar ei), tatăl lui 5 trebuie să rămână 2, adică rădăcina trebuie aleasă „de partea lui 2”: nodurile 2, 3, 1, 7. Excludem rădăcina curentă (2) → pot fi alese, de exemplu, **1** și **7** (sau 3).

Dacă rădăcina ar fi 5, nodul 2 ar deveni și el fiu al lui 5 (frate în plus); dacă ar fi 4, 6 sau 8, structura s-ar schimba complet.

### 3. Verificarea pătratului *(6p)*

Dreptunghiul are laturile paralele cu axele, deci lățimea este diferența absciselor, iar înălțimea diferența ordonatelor. Este pătrat dacă cele două sunt egale.

```cpp
if (abs(d.B.x - d.A.x) == abs(d.A.y - d.B.y))
    cout << "DA";
else
    cout << "NU";
```

`d.A.x` înseamnă: din variabila `d`, câmpul `A` (de tip `punct`), apoi câmpul `x`.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul diviz *(10p)*

Pătratele perfecte care pot divide n sunt $d^2$ cu $d^2 \le n$. Le încercăm pe toate, crescător, și îl păstrăm pe ultimul care îl divide pe n (cel mai mare). Pentru $n \le 10^9$ facem cel mult ~31 623 de pași.

```cpp
int diviz(int n)
{
    int best = 1;
    for (int d = 1; d * d <= n; d++)
        if (n % (d * d) == 0)
            best = d * d;
    return best;
}
```

**Verificare:** 72 → pătratele 1, 4, 9, 36 îl divid → **36** ✔; 16 → **16** ✔; 15 → doar 1 ✔.

### 2. Cuvinte separate prin „ - ” *(10p)*

Extragem cuvintele cu `strtok` (care sare peste oricâte spații) și construim un text nou în care între cuvinte punem `" - "`. La final îl copiem înapoi în variabila inițială. Rezultatul poate fi mai lung decât textul inițial (cel mult ~200 de caractere), de aceea dimensionăm generos.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[301], t[301] = "";
    cin.getline(s, 101);
    char *p = strtok(s, " ");
    while (p != NULL)
    {
        if (t[0] != '\0')
            strcat(t, " - ");
        strcat(t, p);
        p = strtok(NULL, " ");
    }
    strcpy(s, t);
    cout << s;
    return 0;
}
```

**Verificare pe exemplu:** `anul          acesta devin                student` → `anul - acesta - devin - student` ✔.

### 3. Triunghiuri dreptunghice cu aceeași ipotenuză

#### a) Descrierea algoritmului *(2p)*

Laturile sunt cel mult 100, deci ipotenuza este cel mult 100. Folosim un vector de frecvență `nr[101]`. Pentru fiecare triplet citit, determinăm latura maximă c (ipotenuza posibilă) și celelalte două, a și b. Dacă $a^2 + b^2 = c^2$, triunghiul este dreptunghic și creștem `nr[c]`. La final afișăm maximul din vector.

**Eficiență:** fiecare triplet este prelucrat o singură dată, în timp constant → timp **liniar** în numărul de triplete; vectorul de frecvență are dimensiune fixă (101), deci nu memorăm tripletele.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int nr[101];

int main()
{
    ifstream f("bac.txt");
    int a, b, c, aux, maxim = 0;
    while (f >> a >> b >> c)
    {
        if (a > c) { aux = a; a = c; c = aux; }
        if (b > c) { aux = b; b = c; c = aux; }
        if (a * a + b * b == c * c)
            nr[c]++;
    }
    for (int i = 1; i <= 100; i++)
        if (nr[i] > maxim) maxim = nr[i];
    cout << maxim;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** dreptunghice sunt (7, 24, 25), (7, 25, 24), (15, 20, 25) — ipotenuza 25 — plus (8, 6, 10) și (4, 5, 3). Ipotenuza 25 apare de 3 ori → se afișează **3** ✔.

## Ce merită reținut din varianta 6

- **Interval cu o „gaură”:** $[m,n] \setminus (p,q) = [m,p] \cup [q,n]$.
- **Recursivitate:** ce se afișează **înainte** de apel apare la coborâre, ce se afișează **după** apare la revenire, în ordine inversă.
- **Graf complet:** pentru a obține componente, păstrează o componentă cât mai mare.
- **Vector de tați:** schimbarea rădăcinii schimbă relațiile tată–fiu doar pe drumul dintre vechea și noua rădăcină.
- **`strtok`:** ignoră automat spațiile multiple dintre cuvinte.
