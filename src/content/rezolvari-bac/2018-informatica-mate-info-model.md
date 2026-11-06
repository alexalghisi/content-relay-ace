Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2018 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (30 de puncte)

### 1. Șirul crescător pentru `!(x>=y) && z>y` → a. x, y, z *(4p)*

`!(x>=y)` înseamnă `x < y`, iar `z > y`. Deci $x < y < z$.

### 2. Algoritmul în pseudocod

Variabilele `b` și `c` sunt doi termeni consecutivi din **șirul lui Fibonacci** (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, …). Pentru fiecare z din [x, y], bucla „cât timp” avansează în șir până când c ≥ z; dacă c = z, z este termen Fibonacci și se afișează. Algoritmul afișează deci **termenii șirului lui Fibonacci din intervalul [x, y]**.

#### a) Pentru 3 și 10 → **3 5 8** *(6p)*

Termenii Fibonacci din [3, 10] sunt 3, 5, 8.

#### b) x = 18, se afișează o singură valoare → **21** și **33** *(4p)*

Primul termen Fibonacci ≥ 18 este 21, iar următorul este 34. Intervalul [18, y] trebuie să conțină 21, dar nu și 34: $21 \le y \le 33$. Cel mai mic y este **21**, cel mai mare **33**.

#### c) Algoritm echivalent cu structură repetitivă cu test final *(6p)*

Bucla „cât timp” se poate executa de zero ori, așa că o protejăm cu un **dacă** înainte de „repetă”:

```text
citește x,y (numere naturale, x≤y)
b ← 0; c ← 1
┌pentru z ← x,y execută
│ ┌dacă c<z atunci
│ │ ┌repetă
│ │ │  a ← b; b ← c; c ← a+b
│ │ └până când c≥z
│ └■
│ ┌dacă z=c atunci scrie z,' '
│ └■
└■
```

#### d) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int x, y, a, b = 0, c = 1, z;
    cin >> x >> y;
    for (z = x; z <= y; z++)
    {
        while (c < z)
        {
            a = b;
            b = c;
            c = a + b;
        }
        if (z == c) cout << z << ' ';
    }
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, decizie 2p, repetitive 3p, atribuiri 1p, corectitudine 1p.*

## Subiectul al II-lea (30 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **d** (câte 4 puncte).

### 1. Vârfuri cu grad extern nul → c. 3

Gradul extern = numărul de arce care **pleacă** din vârf. Arcele pleacă din 1, 3, 5, 6, 8. Nu pleacă niciun arc din **2, 4, 7** → 3 vârfuri.

### 2. Numărul maxim de muchii eliminate → d. 110

Graful complet cu 21 de noduri are $\frac{21 \cdot 20}{2} = 210$ muchii. Împărțim nodurile în două grupe complete de k și 21 − k noduri; păstrăm $\frac{k(k-1)}{2} + \frac{(21-k)(20-k)}{2}$ muchii. Ca să eliminăm cât mai multe, păstrăm cât mai puține — grupele trebuie să fie cât mai egale: 10 și 11 noduri → $45 + 55 = 100$ muchii păstrate. Eliminăm $210 - 100 =$ **110**.

### 3. Structura masina *(6p)*

Expresia `m.data.luna` arată că `data` este ea însăși o structură, cu câmpurile `luna` și `an`.

```cpp
struct masina
{
    struct
    {
        int luna, an;
    } data;
    char marca[21];
} m;
```

`marca` are 21 de caractere: 20 pentru text + 1 pentru `'\0'`.

### 4. Eliminarea caracterului din mijloc *(6p)*

Pentru lungime impară L, caracterul din mijloc are indicele L/2. Copiem tot șirul, apoi suprascriem de la mijloc cu restul șirului de după el.

```cpp
if (strlen(s) % 2 == 0)
    strcpy(x, s);
else
{
    strcpy(x, s);
    strcpy(x + strlen(s) / 2, s + strlen(s) / 2 + 1);
}
```

Test: „pictura” (7 litere, mijlocul este 't' de pe poziția 3) → **picura** ✔.

### 5. Diagonala secundară „îngroșată” *(10p)*

Elementul `a[i][j]` (indici de la 0) este pe diagonala secundară dacă $i + j = n-1$. Vecinii din stânga și din dreapta au $i + j = n-2$, respectiv $i + j = n$. Deci valoarea este 1 când $n-2 \le i+j \le n$, altfel 2.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[51][51];
    cin >> n;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            if (i + j >= n - 2 && i + j <= n) a[i][j] = 1;
            else a[i][j] = 2;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++) cout << a[i][j] << ' ';
        cout << '\n';
    }
    return 0;
}
```

**Verificare** pentru n = 7: se obține exact tabloul din enunț ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Valoarea `f(20,18)` → c. 6 *(4p)*

Fiecare apel adaugă 1 și îl înjumătățește pe cel mai mare dintre x și y, până devin egale:

(20,18) → (10,18) → (10,9) → (5,9) → (5,4) → (2,4) → (2,2) = 0.

Au fost 6 pași, deci **6**.

### 2. Cele două soluții dinaintea lui (trova, fado, romanță, baladă, doină) *(6p)*

Ordinea elementelor: {baladă, doină, fado, romanță, trova}. Soluțiile care încep cu (trova, fado, …) se generează în ordinea: (trova, fado, baladă, doină, romanță), (trova, fado, baladă, romanță, doină), (trova, fado, doină, baladă, romanță), (trova, fado, doină, romanță, baladă), (trova, fado, romanță, baladă, doină).

Ultimele două dinaintea soluției date:

- **(trova, fado, doină, baladă, romanță)**
- **(trova, fado, doină, romanță, baladă)**

### 3. Subprogramul divizori *(10p)*

Alegem x și y divizori ai lui n cu x < y și calculăm z = n − x − y; verificăm că z > y și că z divide n. Ne oprim la primul triplet găsit; dacă nu există, punem 0 în toate.

```cpp
void divizori(int n, int &x, int &y, int &z)
{
    for (int a = 1; a < n; a++)
        if (n % a == 0)
            for (int b = a + 1; a + b < n; b++)
                if (n % b == 0)
                {
                    int c = n - a - b;
                    if (c > b && n % c == 0)
                    {
                        x = a; y = b; z = c;
                        return;
                    }
                }
    x = y = z = 0;
}
```

Parametrii x, y, z sunt transmiși **prin referință** (`&`), ca valorile să ajungă în apelant. **Verificare:** n = 24 → 4, 8, 12 ✔; n = 9 → 0, 0, 0 ✔.

### 4. Sub-numere care apar o singură dată

#### a) Descrierea algoritmului *(2p)*

Folosim un vector de apariții `v[10..99]`, inițial 0. Citim pe rând numerele din fișier; pentru fiecare număr y, cât timp are cel puțin două cifre, `y % 100` este un sub-număr (ultimele două cifre consecutive): creștem `v[y%100]` și eliminăm ultima cifră. La final afișăm indicii i cu `v[i] = 1`; dacă nu există, afișăm „nu exista”.

**Eficiență:** fiecare număr din fișier are cel mult 10 cifre și se prelucrează în timp constant, deci algoritmul este **liniar** în numărul de valori din fișier. Memoria este constantă: un vector de 100 de elemente, fără a păstra numerele citite.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int v[100] = {0}, y, gasit = 0;
    while (f >> y)
        while (y >= 10)
        {
            v[y % 100]++;
            y = y / 10;
        }
    for (int i = 10; i <= 99; i++)
        if (v[i] == 1)
        {
            cout << i << ' ';
            gasit = 1;
        }
    if (!gasit) cout << "nu exista";
    f.close();
    return 0;
}
```

Sub-numerele care încep cu 0 (de exemplu „05” din 105) au valoarea < 10 și sunt ignorate automat, pentru că nu au exact două cifre. **Verificare** pentru 391 7772 4358 23972: se afișează `23 35 43 58 91 97` (aceleași valori ca în enunț, altă ordine — permisă) ✔.

## Ce merită reținut din model

- **„cât timp” → „repetă”:** pune un **dacă** cu aceeași condiție înaintea lui „repetă”, pentru cazul în care bucla nu s-ar executa deloc.
- **Grafuri complete împărțite în componente:** numărul de muchii păstrate e minim când componentele au mărimi cât mai apropiate.
- **Structuri imbricate:** `m.data.luna` înseamnă un câmp-structură `data` în interiorul structurii.
- **Subprograme care „furnizează” valori:** parametri prin referință.
- **Vector de apariții:** soluția standard pentru „apare o singură dată” cu valori dintr-un domeniu mic.
