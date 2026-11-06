Rezolvarea completă a **simulării pentru Bacalaureat 2022 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **b**, 3 – **c**, 4 – **a**, 5 – **c** (câte 4 puncte).

### 1. Expresie echivalentă cu `x<=3 || x>30` → d. `!(x>3) || !(x<=30)`

`!(x>3)` înseamnă `x<=3`, iar `!(x<=30)` înseamnă `x>30` — exact expresia dată.

- a. `x>=3 && x<30` — aproape opusul. Greșit.
- b. `!(x>=3 && x<=30)` = `x<3 || x>30` — ratează x = 3. Greșit.
- c. `!(x<3 || x<=30)` = `x>30` — ratează x ≤ 3. Greșit.

### 2. Valoarea f(0,4,x) → b. 3

Funcția împarte intervalul în două jumătăți (divide et impera) și, pe fiecare element, returnează 1 dacă `v[i]==i`. Rezultatul este numărul de poziții i cu `v[i] == i`. Pentru (7, 1, 2, 5, 4): v[1] = 1, v[2] = 2, v[4] = 4 → **3**.

### 3. Soluția de după {Cristian, Valentin, Ștefan, Răzvan} → c. {Valentin, Alin, Răzvan, Ștefan}

Ordinea jucătorilor: Alin, Bogdan, Cristian, Răzvan, Ștefan, Valentin. Lider poate fi Alin, Cristian sau Valentin; după ce s-au terminat echipele cu liderul Cristian, urmează cele cu liderul **Valentin**, iar primul secund posibil este **Alin**; vice-skip și skip sunt Răzvan, Ștefan, în această ordine → **{Valentin, Alin, Răzvan, Ștefan}**.

### 4. Densitatea primului oraș → a. `oras[0].nrLocuitori/oras[0].suprafata`

`oras` este un tablou de structuri: întâi alegem elementul (`oras[0]`), apoi câmpul (`.nrLocuitori`). Cum `suprafata` este `float`, împărțirea este reală.

### 5. Un număr de muchii imposibil pentru un subgraf al lui K₄ → c. 2

Un subgraf se obține eliminând noduri (cu muchiile lor). Din graful complet cu 4 noduri rămâne tot un graf complet, cu k noduri și $k(k-1)/2$ muchii: 0, 0, 1, 3 sau 6. Valoarea **2** nu se poate obține.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare număr y citit, se taie ultimele cifre ale lui y cât timp ultima cifră nu are aceeași paritate cu x. Apoi, dacă y a ajuns egal cu x, se numără. Așadar se numără valorile y care, după ce își pierd „coada” de cifre cu paritate diferită de a lui x, devin x.

#### a) n = 6, x = 16 → **3**

| y | după tăiere | = 16? |
|---|---|---|
| 4273 | 42 | nu |
| 1679 | 16 | **da** |
| 3165 | 316 | nu |
| 16 | 16 | **da** |
| 200 | 200 | nu |
| 167 | 16 | **da** |

Se afișează **3**. *(6p)*

#### b) n = 2, x = 22, se afișează 2

x este par, deci tăiem cifrele impare de la final. Ca să rămână 22, numerele (cu 4 cifre, din [1000, 10000)) trebuie să fie de forma $\overline{22xy}$ cu x, y cifre impare: de exemplu **2213** și **2279**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x, y, nr = 0, i = 1;
    cin >> n >> x;
    while (i <= n)
    {
        cin >> y;
        while (y != 0 && y % 2 != x % 2)
            y = y / 10;
        if (y == x) nr = nr + 1;
        i = i + 1;
    }
    cout << nr;
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, decizie 2p, repetitive 3p, atribuiri 1p, corectitudine 1p.*

#### d) Prima structură „cât timp” înlocuită cu „pentru” *(6p)*

```text
citește n, x (numere naturale nenule)
nr ← 0
┌pentru i ← 1, n execută
│  citește y (număr natural)
│ ┌cât timp y ≠ 0 și y%2 ≠ x%2 execută
│ │  y ← [y/10]
│ └■
│ ┌dacă y = x atunci nr ← nr + 1
│ └■
└■
scrie nr
```

Contorul `i` merge de la 1 la n și se actualizează automat, deci dispar `i ← 1` și `i ← i + 1`.

### 2. Frunze pe niveluri impare *(6p)*

Rădăcina este 5. Fiii: 5 → 2, 3, 9; 2 → 8, 10; 9 → 7; 10 → 1, 4, 6.

| Nivel | Noduri | Frunze |
|---|---|---|
| 0 | 5 | — |
| 1 | 2, 3, 9 | 3 |
| 2 | 7, 8, 10 | 7, 8 |
| 3 | 1, 4, 6 | 1, 4, 6 |

Frunzele de pe niveluri impare sunt 1, 3, 4, 6 — oricare trei, de exemplu **1, 3, 4**.

### 3. Verificarea existenței unui romb *(6p)*

Un romb are centrul obligatoriu pe rândul din mijloc (linia 1), pe o coloană j de la 1 la 13. Cele patru vase din jur sunt `a[0][j]`, `a[2][j]`, `a[1][j-1]`, `a[1][j+1]`.

```cpp
ok = 0;
for (j = 1; j < 14; j++)
    if (a[0][j] == a[2][j] && a[0][j] == a[1][j-1] && a[0][j] == a[1][j+1]) ok = 1;
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul rest *(10p)*

Căutăm cea mai mare valoare, deci pornim de la n și coborâm până găsim un număr cu ambele resturi egale cu 2. Dacă nu găsim (de exemplu când x ≤ 2, restul nu poate fi 2), k rămâne 0.

```cpp
void rest(int x, int y, int n, int &k)
{
    k = 0;
    for (int i = n; i >= 1 && k == 0; i--)
        if (i % x == 2 && i % y == 2) k = i;
}
```

**Exemplu:** x = 10, y = 101, n = 3000 → primul număr de la 3000 în jos cu ambele resturi 2 este **2022** ✔.

### 2. Numele invitaților cu prenumele x *(10p)*

Spargem textul în cuvinte cu `strtok`, folosind ca separatori spațiul și „;”. Cuvintele alternează: prenume (poziții pare 0, 2, 4, …), nume (poziții impare). Dacă prenumele este x, afișăm cuvântul următor.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[251], x[251];
    cin.getline(s, 251);
    cin.getline(x, 251);
    int poz = 0, gasit = 0, e = 0;
    char *p = strtok(s, " ;");
    while (p != NULL)
    {
        if (poz % 2 == 0) e = (strcmp(p, x) == 0);   // prenume
        else if (e) { cout << p << ' '; gasit = 1; } // nume
        poz++;
        p = strtok(NULL, " ;");
    }
    if (!gasit) cout << "NU";
    return 0;
}
```

Test: lista din exemplu și x = DAN → **MARIS POPA** (EDANA DAN nu contează: DAN este acolo nume) ✔.

### 3. Cea mai mare putere a lui 45 care divide n!

#### a) Descrierea algoritmului *(2p)*

$45 = 3^2 \cdot 5$. Dacă în descompunerea lui n! exponentul lui 3 este `e3`, iar al lui 5 este `e5`, atunci $45^p$ divide n! exact când $2p \le e3$ și $p \le e5$, deci $p = \min([e3/2], e5)$. Exponenții se calculează cu formula lui Legendre: $e3 = [n/3] + [n/9] + [n/27] + \dots$, analog pentru 5.

**Eficiență:** numărul de pași este logaritmic în n (aproximativ $\log_3 n$ și $\log_5 n$), memorie constantă — nu calculăm deloc n!.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    long long n, e3 = 0, e5 = 0, p;
    cin >> n;
    for (p = 3; p <= n; p = p * 3) e3 += n / p;
    for (p = 5; p <= n; p = p * 5) e5 += n / p;
    ofstream g("bac.txt");
    g << min(e3 / 2, e5);
    g.close();
    return 0;
}
```

**Verificare pe exemplu:** n = 14 → e3 = 4 + 1 = 5, e5 = 2 → min(2, 2) = **2** ✔.

## Ce merită reținut din simulare

- **Negarea comparațiilor:** `!(x>3)` ⇔ `x<=3`, `!(x<=30)` ⇔ `x>30`.
- **Subgraf al unui graf complet** = tot graf complet: $k(k-1)/2$ muchii.
- **Tablou de structuri:** `tablou[i].camp`.
- **Formula lui Legendre:** exponentul lui p în n! este $\sum [n/p^k]$ — nu calcula factorialul.
