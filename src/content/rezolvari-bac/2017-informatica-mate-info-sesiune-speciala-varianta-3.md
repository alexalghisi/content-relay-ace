Rezolvarea completă a subiectului de **Bacalaureat 2017 la Informatică, limbajul C/C++, profil mate-info**, sesiunea specială, **varianta 3**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (30 de puncte)

### 1. x are exact trei cifre → a. `x/1000==0 && x/100!=0` *(4p)*

`x/1000==0` înseamnă x < 1000 (cel mult trei cifre), iar `x/100!=0` înseamnă x ≥ 100 (cel puțin trei cifre). Ambele trebuie să fie adevărate, deci `&&`. Variantele c și d folosesc restul (`%`), care nu spune nimic despre numărul de cifre.

### 2. Algoritmul în pseudocod

După eventuala interschimbare, a ≤ b. Pentru fiecare x din [a, b], bucla „cât timp” caută **cel mai mic divizor c ≥ 2** al lui x. Algoritmul afișează suma acestor divizori.

#### a) Pentru 7 și 4 → **16** *(6p)*

Se interschimbă: a = 4, b = 7.

| x | 4 | 5 | 6 | 7 |
|---|---|---|---|---|
| cel mai mic divizor ≥ 2 | 2 | 5 | 2 | 7 |

s = 2 + 5 + 2 + 7 = **16**.

#### b) Patru seturi din [2, 9] cu rezultatul 7 *(4p)*

Câteva sume posibile: [2, 4] → 2 + 3 + 2 = 7; [4, 5] → 2 + 5 = 7; [5, 6] → 5 + 2 = 7; [7, 7] → 7. Ordinea citirii nu contează (se face interschimbare). Răspuns: **2 4; 4 5; 5 6; 7 7** (sau 4 2, 5 4, 6 5).

#### c) „cât timp” înlocuit cu structură cu test final *(6p)*

```text
citește a,b (numere naturale, a≥2, b≥2)
┌dacă a>b atunci x ← a; a ← b; b ← x
└■
s ← 0
┌pentru x ← a,b execută
│  c ← 2
│ ┌dacă x%c>0 atunci
│ │ ┌repetă
│ │ │  c ← c+1
│ │ └până când x%c=0
│ └■
│  s ← s+c
└■
scrie s
```

Bucla „cât timp” poate să nu se execute deloc (când x e par), de aceea „repetă” este protejat de un **dacă**.

#### d) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int a, b, x, s, c;
    cin >> a >> b;
    if (a > b)
    {
        x = a;
        a = b;
        b = x;
    }
    s = 0;
    for (x = a; x <= b; x++)
    {
        c = 2;
        while (x % c > 0)
            c = c + 1;
        s = s + c;
    }
    cout << s;
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, decizie 2p, repetitive 3p, atribuiri 1p, corectitudine 1p.*

## Subiectul al II-lea (30 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **b** (câte 4 puncte).

### 1. Rădăcina pentru vectorul de tați (5,4,6,0,3,2,6,9,7) → b. 4

Rădăcina este nodul fără tată, adică cel care are 0 în vector: poziția **4**.

### 2. Numărul maxim de cicluri disjuncte → b. 2

Muchiile din desen: [1,2], [2,3], [1,4], [2,4], [2,5], [2,6], [3,6], [4,5], [5,6], [4,7], [4,8], [5,8], [6,8], [6,9], [7,8], [8,9].

Fiecare ciclu are cel puțin 3 noduri, deci 3 cicluri disjuncte ar folosi toate cele 9 noduri. Nodul 1 are doar vecinii 2 și 4, deci ciclul lui conține nodul 2; nodul 3 are doar vecinii 2 și 6, deci și ciclul lui conține nodul 2. Două cicluri disjuncte nu pot avea amândouă nodul 2 → nu putem avea 3 cicluri.

Două se pot obține, de exemplu **1-2-4-1** și **5-6-8-5**. Maximul este **2**.

### 3. Structura poligon *(6p)*

```cpp
struct poligon
{
    int numar;
    struct
    {
        float x, y;
    } varf[100];
} p;
```

`p.varf[0].x` arată că `varf` este un tablou de structuri cu câmpurile `x` și `y`. Numărul de vârfuri este cel mult 99, deci 100 de elemente ajung.

### 4. Completarea tabloului 9×9 *(6p)*

Valorile `a` formează un triunghi deasupra ambelor diagonale: strict deasupra diagonalei principale (`i < j`) și strict deasupra diagonalei secundare (`i + j < 8`).

```cpp
for(i=0;i<9;i++)
   for(j=0;j<9;j++)
      if (i < j && i + j < 8) a[i][j] = 'a';
      else a[i][j] = 'b';
```

Verificare: linia 0 are `a` pe coloanele 1…7, linia 3 doar pe coloana 4 ✔.

### 5. Cuvinte care conțin o notă muzicală *(10p)*

Separăm cuvintele cu `strtok` și căutăm fiecare notă în cuvânt cu `strstr`.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[101], *p;
    char note[7][4] = {"DO", "RE", "MI", "FA", "SOL", "LA", "SI"};
    int gasit = 0;
    cin.getline(s, 101);
    p = strtok(s, " ");
    while (p)
    {
        int are = 0;
        for (int k = 0; k < 7 && !are; k++)
            if (strstr(p, note[k])) are = 1;
        if (are)
        {
            cout << p << '\n';
            gasit = 1;
        }
        p = strtok(NULL, " ");
    }
    if (!gasit) cout << "nu exista";
    return 0;
}
```

**Verificare** pe exemplu: se afișează REMI, DOMINO, SI, DENUMIRI, SIMILARE ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Al șaselea număr generat → c. 262 *(4p)*

După 208 urmează, în ordine crescătoare, numerele pare cu suma cifrelor 10 care încep cu 2: 226 (are două cifre 2 alăturate — respins), 244 (două cifre 4 alăturate — respins), **262** ✔. Numerele 217, 235, 253 sunt impare.

### 2. Ce afișează `f(4)` → **1234123121** *(6p)*

f(n) afișează 1, 2, …, n, apoi apelează f(n−1):

- f(4): 1234
- f(3): 123
- f(2): 12
- f(1): 1
- f(0): nimic

Rezultat: **1234123121**.

### 3. Subprogramul identice *(10p)*

Nu are rost să testăm fiecare număr din [a, b]. Numerele cu toate cifrele identice sunt de forma $c \cdot r$, unde c este o cifră 1…9 și r este un **repunit** (11, 111, 1111, …). Le generăm în ordine crescătoare (după lungime, apoi după cifră) și le afișăm pe cele din interval.

```cpp
void identice(int a, int b)
{
    int gasit = 0;
    for (int r = 11; r <= 1111111; r = r * 10 + 1)   // 11, 111, 1111, ...
        for (int c = 1; c <= 9; c++)
            if (c * r >= a && c * r <= b)
            {
                cout << c * r << ' ';
                gasit = 1;
            }
    if (!gasit) cout << "nu exista";
}
```

**Verificare:** a = 700, b = 1500 → `777 888 999 1111` ✔.

### 4. Poziția de inserare a unui șir în altul

#### a) Descrierea algoritmului *(2p)*

Ambele șiruri sunt strict crescătoare, deci din primul șir contează doar **primul** termen p și **ultimul** u. Citim al doilea șir și numărăm termenii mai mici decât p (k termeni; fiind ordonați, ei sunt la început), reținând și primul termen care nu este mai mic decât p. Inserarea este posibilă dacă există cel puțin un termen înainte (k ≥ 1, inserarea se face **între** două elemente) și dacă termenul următor există și este strict mai mare decât u. Atunci poziția cerută este **k + 1**; altfel afișăm „imposibil”.

**Eficiență:** fiecare număr este citit o singură dată → timp **liniar** O(m + n); nu memorăm șirurile, ci doar câteva valori → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.in");
    int m, n, x, p, u, k = 0, urm = 0;
    f >> m >> n;
    for (int i = 1; i <= m; i++)
    {
        f >> x;
        if (i == 1) p = x;
        u = x;
    }
    for (int i = 1; i <= n; i++)
    {
        f >> x;
        if (x < p) k++;
        else if (urm == 0) urm = x;      // primul termen din B care nu e mai mic decât p
    }
    if (k >= 1 && urm > u) cout << k + 1;
    else cout << "imposibil";
    f.close();
    return 0;
}
```

**Verificare:** pentru primul exemplu p = 15, u = 19; în al doilea șir 7, 10, 12 sunt mai mici (k = 3), următorul este 20 > 19 → se afișează **4** ✔. Pentru al doilea exemplu următorul termen este 18 < 19 → **imposibil** ✔; pentru al treilea, k = 0 → **imposibil** ✔.

## Ce merită reținut din varianta 3

- **Număr de cifre:** folosește împărțirea întreagă la puteri ale lui 10, nu restul.
- **„cât timp” → „repetă”:** protejează bucla cu un **dacă** pe aceeași condiție.
- **Vectorul de tați:** rădăcina are tatăl 0.
- **Cicluri disjuncte:** nodurile de grad 2 forțează vecinii în ciclu — de aici vin contradicțiile.
- **Numere cu cifre identice** = cifră × 11…1; generează-le direct.
- **Șiruri ordonate:** de multe ori ajung primul și ultimul termen, fără a memora tot șirul.
