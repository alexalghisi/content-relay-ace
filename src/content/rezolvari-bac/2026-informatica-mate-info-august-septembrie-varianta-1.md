Rezolvarea completă a subiectului de **Bacalaureat 2026 la Informatică, limbajul C/C++, profil mate-info**, sesiunea august–septembrie, **varianta 1**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **d**, 3 – **c**, 4 – **a**, 5 – **b** (câte 4 puncte).

### 1. Divizibil cu 26, dar nu cu 2026 → b. `!(x%26!=0) && !(x%2026==0)`

`!(x%26!=0)` înseamnă `x%26==0`, iar `!(x%2026==0)` înseamnă `x%2026!=0`. Legate cu `&&`, obținem exact cerința.

- a. folosește `||` — e adevărată și pentru x = 1 (nu e divizibil cu 2026). Greșit.
- c. echivalează cu `x%26!=0 && x%2026!=0` — x **nu** e divizibil cu 26. Greșit.
- d. echivalează cu `x%26==0 || x%2026==0` — acceptă și x = 2026, care e divizibil cu 2026. Greșit.

### 2. Afișarea 1 2 … 10 la apelul `f(10)` → d. `x>=1`

Apelul recursiv se face **înainte** de afișare, deci numerele apar în ordine crescătoare, de la cel mai mic apel care trece testul. Cu `x>=1`: f(10) → f(9) → … → f(1) → f(0) se oprește; la revenire se afișează 1, 2, …, 10.

- c. `x>=2` se oprește la f(1) → afișează doar 2 … 10.
- a/b. `x<=10` / `x<=11` sunt adevărate și pentru 0, −1, … → recursivitate infinită.

### 3. Suma de bani pentru primul tip de bancnote → c. `m.valoare[0]*m.exemplare[0]`

`m` este o **structură** (nu un tablou de structuri), iar câmpurile `valoare` și `exemplare` sunt tablouri. Deci accesăm câmpul cu `m.valoare`, apoi elementul cu `[0]`. Variantele a (indexează structura), b și d (sintaxă inexistentă) sunt greșite.

### 4. A 5-a soluție generată → a. {Arghezi, Blaga, Eminescu}

Soluțiile sunt submulțimi generate în ordine lexicografică (elementele crescătoare după poziția din mulțime). După {Arghezi, Blaga, Coșbuc, Eminescu} nu mai putem adăuga nimic, așa că revenim și înlocuim Coșbuc cu următorul element: **{Arghezi, Blaga, Eminescu}**.

- b. nu respectă ordinea (Blaga după Eminescu).
- c. și d. încep cu alt autor — apar mult mai târziu.

### 5. Numărul minim de niveluri → b. 3

Alegem, de fiecare dată când există mai multe variante, tatăl care ține arborele cât mai „jos”:

| Nod adăugat | Tată (diferență minimă) | Nivel |
|---|---|---|
| 2 | 4 (singurul nod) | 1 |
| 3 | 2 (diferență 1; 4 ar fi tot 1) | 2 |
| 1 | 2 (diferență 1) — frate cu 3 | 2 |
| 5 | 4 (diferență 1) — frate cu 2 | 1 |
| 7 | 5 (diferență 2, minimă) | 2 |
| 6 | 5 sau 7 (diferență 1) → alegem 5 | 2 |

Arborele are nivelurile 0, 1, 2 → **3 niveluri**. Dacă 3 ar fi fost pus sub 4, nodul 5 nu mai putea fi fiul lui 4 (ar fi avut doi frați) și am fi ajuns la 4 niveluri.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Bucla interioară calculează `nr` = numărul de cifre 1 din scrierea în baza 2 a lui `i`. Condiția `nr = 1` este adevărată exact pentru **puterile lui 2**. Deci `s` adună 1, 2, 4, 8, … până când `s ≥ n`.

#### a) Valoarea afișată pentru n = 10 → **15**

$s = 1 \to 3 \to 7 \to 15$. După adunarea lui 8, $s = 15 \ge 10$ și bucla se oprește. *(6p)*

#### b) Două valori pentru care se afișează 31

După puterile 1, 2, 4, 8 avem $s = 15$; mai adunăm 16 și obținem $s = 31$. Ca bucla să nu se fi oprit la 15, trebuie $n > 15$, iar ca să se oprească la 31, trebuie $n \le 31$. Orice $n \in [16, 31]$ este corect, de exemplu **16** și **31**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, s = 0, i = 1, j, nr;
    cin >> n;
    while (s < n)
    {
        j = i; nr = 0;
        while (j != 0)
        {
            nr = nr + j % 2;
            j = j / 2;
        }
        if (nr == 1)
            s = s + i;
        i = i + 1;
    }
    cout << s;
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, repetitive 3p, decizie 2p, atribuiri 1p, corectitudine 1p.*

#### d) Algoritm echivalent, cu test final pentru a doua structură *(6p)*

Cum `i ≥ 1`, la intrare `j = i ≠ 0`, deci corpul buclei interioare se execută cel puțin o dată — îl putem înlocui direct cu o structură repetitivă cu test final.

```text
citește n (număr natural nenul)
s ← 0; i ← 1
┌cât timp s < n execută
│  j ← i; nr ← 0
│ ┌repetă
│ │  nr ← nr + j%2; j ← [j/2]
│ └până când j = 0
│ ┌dacă nr = 1 atunci s ← s + i
│ └■
│  i ← i + 1
└■
scrie s
```

### 2. Valori nule și nenule în matricea de adiacență *(6p)*

Fiecare muchie [x,y] produce **două** valori 1: `a[x][y]` și `a[y][x]`. Deci avem $2 \cdot 10 = $ **20 de valori nenule**. Matricea are $8 \cdot 8 = 64$ de elemente, deci **44 de valori nule**.

### 3. Completarea tabloului 5×5 *(6p)*

Privind indicii (numerotați de la 1):

- linie impară și coloană impară → **2**;
- linie pară și coloană pară → **0**;
- paritate diferită → **3**.

```cpp
for(i=1;i<=5;i++)
    for(j=1;j<=5;j++)
        if (i % 2 == 1 && j % 2 == 1) a[i][j] = 2;
        else if (i % 2 == 0 && j % 2 == 0) a[i][j] = 0;
        else a[i][j] = 3;
```

Am folosit exact 3 atribuiri (maximul permis).

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul baza *(10p)*

Numărul este reprezentat în baza b dacă **toate** cifrele sale sunt mai mici decât b. Parcurgem cifrele și, la prima cifră ≥ b, returnăm −1.

```cpp
int baza(int n, int b)
{
    while (n != 0)
    {
        if (n % 10 >= b)
            return -1;
        n = n / 10;
    }
    return 1;
}
```

**Verificare:** pentru 32412 cifrele sunt 2, 1, 4, 2, 3 — toate < 8 → 1; cu b = 3, cifra 4 ≥ 3 → −1 ✔. Pentru n = 0 se returnează 1 (0 este o cifră validă în orice bază).

### 2. Floarea cu cel mai mic necesar de lumină *(10p)*

Citim textul cu `getline`, îl împărțim în cuvinte cu `strtok` și luăm cuvintele **două câte două**: denumirea, apoi cifra orelor. Reținem minimul; la egalitate păstrăm denumirea mai mică alfabetic (`strcmp`).

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[201], nume[21], best[21] = "";
    int minim = 10;
    cin.getline(s, 201);
    char *p = strtok(s, " ");
    while (p != NULL)
    {
        strcpy(nume, p);
        p = strtok(NULL, " ");
        int ore = p[0] - '0';
        if (ore < minim || (ore == minim && strcmp(nume, best) < 0))
        {
            minim = ore;
            strcpy(best, nume);
        }
        p = strtok(NULL, " ");
    }
    cout << best;
    return 0;
}
```

**Verificare pe exemplu:** valorile minime sunt 3 (impatiens, begonie); alfabetic, „begonie” < „impatiens” → se afișează `begonie` ✔.

### 3. Cel mai lung mesaj de avertisment

#### a) Descrierea algoritmului *(2p)*

Un mesaj conține exact un 0, deci cel mai lung mesaj care conține un anumit 0 se întinde între **zeroul anterior** și **zeroul următor** (exclusiv). Citim biții pe rând și reținem pozițiile ultimelor trei zerouri p1 < p2 < p3 (inițial 0, ca un „zero fictiv” înaintea șirului). La fiecare 0 nou, deplasăm: p1 ← p2, p2 ← p3, p3 ← poziția curentă; mesajul dintre p1 și p3 are lungimea $p3 - p1 - 1$. Păstrăm tripletul cu lungimea maximă (p1m, p2m, p3m). La final afișăm $p2m-p1m-1$ biți 1, un 0 și $p3m-p2m-1$ biți 1.

**Eficiență:** o singură parcurgere a fișierului → timp **liniar** O(n); nu memorăm șirul, ci doar câteva variabile → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, poz = 0, p1 = 0, p2 = 0, p3 = 0, p1m = 0, p2m = 0, p3m = 0;
    while (f >> x)
    {
        poz++;
        if (x == 0)
        {
            p1 = p2; p2 = p3; p3 = poz;
            if (p3 - p1 > p3m - p1m)
            {
                p1m = p1; p2m = p2; p3m = p3;
            }
        }
    }
    for (int i = 1; i < p2m - p1m; i++) cout << 1 << ' ';
    cout << 0 << ' ';
    for (int i = 1; i < p3m - p2m; i++) cout << 1 << ' ';
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** zerourile sunt pe pozițiile 1, 9, 10, 14, 19, 22. Primul triplet util (0, 1, 9) dă lungimea 8 → se afișează `0 1 1 1 1 1 1 1` ✔ (unul dintre răspunsurile acceptate).

## Ce merită reținut din varianta 1

- **Negații:** `!(a!=b)` este `a==b`; aplică legile lui De Morgan cu atenție.
- **Recursivitate:** afișarea **după** apel produce ordinea crescătoare.
- **Structuri cu tablouri:** `variabilă.câmp[indice]`.
- **Matrice de adiacență (neorientat):** numărul de 1 este dublul numărului de muchii.
- **Secvențe cu exact un element special:** reține pozițiile ultimelor apariții ale elementului special.
