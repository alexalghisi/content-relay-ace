Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2019 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **a**, 3 – **b**, 4 – **c**, 5 – **d** (câte 4 puncte).

### 1. Divizibil cu 20, dar nu cu 19 → d. `!(n%20!=0 || n%19==0)`

Cu De Morgan: `!(n%20!=0 || n%19==0)` = `n%20==0 && n%19!=0` ✔.

- a. și c. folosesc `/` (câtul), nu `%`. Greșit.
- b. este adevărată și pentru numere care nu se divid cu 20 (de exemplu 7). Greșit.

### 2. Afișarea descrescătoare a divizorilor proprii ai lui 1000 → a. `f(1000,2)`

Apelul recursiv se face **înaintea** afișării, deci funcția coboară până la d = n/2 = 500 și afișează la revenire, de la d mare spre d mic: 500, 250, 200, …, 2 — toți divizorii proprii ai lui 1000, în ordine descrescătoare. Celelalte apeluri au alt n.

### 3. Soluția de dinaintea lui (geranium, iasomie, paciuli) → b. (agar, paciuli, tuberoze)

Combinări de câte 3 din {agar, geranium, iasomie, paciuli, tuberoze}. Ultima soluție care începe cu agar este **(agar, paciuli, tuberoze)**; imediat după ea vine prima care începe cu geranium: (geranium, iasomie, paciuli).

### 4. Numărul de frunze → c. 6

Nodurile care apar în vectorul (6, 5, 7, 5, 9, 9, 6, 7, 0, 5) sunt tați: 5, 6, 7, 9 (4 noduri). Celelalte **6** noduri (1, 2, 3, 4, 8, 10) sunt frunze.

### 5. Numărul maxim de noduri al unui graf conex cu 10 muchii → d. 11

Un graf conex cu n noduri are cel puțin n − 1 muchii. Deci n − 1 ≤ 10, adică n ≤ **11** (cazul arborelui).

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Se afișează 1 o dată, 2 de două ori, 3 de trei ori etc., până se epuizează n valori. Ultima grupă poate fi incompletă.

#### a) Pentru n = 7 → **1 2 2 3 3 3 4**

1 (rămân 6), 2 2 (rămân 4), 3 3 3 (rămâne 1), 4 (rămân 0). *(6p)*

#### b) Ultima valoare afișată să fie 10 → **46** și **55**

Grupele 1…9 conțin 1 + 2 + … + 9 = 45 de valori. Ultima valoare este 10 dacă n ∈ [46, 55] (grupa lui 10 are cel mult 10 valori). Cel mai mic n: **46**, cel mai mare: **55**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, k = 1, i;
    cin >> n;
    while (n >= 1)
    {
        if (n > k) i = k;
        else i = n;
        n = n - i;
        while (i >= 1)
        {
            cout << k << ' ';
            i = i - 1;
        }
        k = k + 1;
    }
    return 0;
}
```

#### d) Structura „cât timp” interioară înlocuită cu una de alt tip *(6p)*

```text
citește n (număr natural)
k ← 1
┌cât timp n ≥ 1 execută
│ ┌dacă n > k atunci i ← k
│ │altfel i ← n
│ └■
│  n ← n − i
│ ┌pentru j ← 1, i execută
│ │  scrie k, ' '
│ └■
│  k ← k + 1
└■
```

Bucla „pentru” afișează k de exact i ori, la fel ca bucla inițială (valoarea lui i nu mai este folosită ulterior).

### 2. Structura complex *(6p)*

```cpp
struct complex
{
    float pre, pim;
} z[20];
```

### 3. Completarea tabloului *(6p)*

Valorile 1…25 se scriu linie cu linie: pe linia i (de la 1) se află 5(i−1)+1 … 5(i−1)+5.

```cpp
for (i = 1; i <= 5; i++)
    for (j = 1; j <= 5; j++)
        a[i][j] = (i - 1) * 5 + j;
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul CifrePrime *(10p)*

Cifrele prime sunt 2, 3, 5, 7. Parcurgem cifrele și le adunăm doar pe acestea.

```cpp
int CifrePrime(int n)
{
    int s = 0;
    while (n != 0)
    {
        int c = n % 10;
        if (c == 2 || c == 3 || c == 5 || c == 7) s = s + c;
        n = n / 10;
    }
    return s;
}
```

**Exemple:** 1235405 → 2 + 3 + 5 + 5 = **15**; 140 → **0** ✔.

### 2. Șirul din prima consoană, prima vocală și ultima literă *(10p)*

Despărțim textul cu `strtok` (care tratează corect și spațiile multiple) și reținem primul cuvânt, al doilea și ultimul. Căutăm în primul prima consoană, în al doilea prima vocală, iar din ultimul luăm ultima literă.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[101], prim[101], doi[101], ultim[101], rez[4];
    cin.getline(s, 101);
    int k = 0;
    char *p = strtok(s, " ");
    while (p != NULL)
    {
        if (k == 0) strcpy(prim, p);
        if (k == 1) strcpy(doi, p);
        strcpy(ultim, p);
        k++;
        p = strtok(NULL, " ");
    }
    char c1 = 0, c2 = 0;
    for (int i = 0; prim[i] && !c1; i++)
        if (!strchr("aeiou", prim[i])) c1 = prim[i];
    for (int i = 0; doi[i] && !c2; i++)
        if (strchr("aeiou", doi[i])) c2 = doi[i];
    if (c1 && c2)
    {
        rez[0] = c1; rez[1] = c2; rez[2] = ultim[strlen(ultim) - 1]; rez[3] = '\0';
        cout << rez;
    }
    else cout << "nu exista";
    return 0;
}
```

Test: „el prefera sa mearga la schi” → l, e, i → **lei**; „ei prefera sa mearga la schi” → „ei” nu are consoane → **nu exista** ✔.

### 3. Intervalul prieten de grad maxim

#### a) Descrierea algoritmului *(2p)*

Un interval prieten conține doar valori întregi care apar toate în șir, deci corespunde unei secvențe de valori **consecutive** prezente în șir; gradul lui este suma frecvențelor acestor valori. Valorile sunt din [0, 100], deci construim un vector de frecvență la citire. Apoi îl parcurgem: cât timp frecvențele sunt nenule, adunăm la suma curentă; la o frecvență nulă, suma redevine 0. Răspunsul este maximul acestor sume.

**Eficiență:** o singură parcurgere a fișierului → timp **liniar**, plus 101 pași pe vectorul de frecvență.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int v[101] = {0}, x, s = 0, mx = 0;
    while (f >> x) v[x]++;
    for (int i = 0; i <= 100; i++)
    {
        if (v[i] > 0) s += v[i];
        else s = 0;
        if (s > mx) mx = s;
    }
    cout << mx;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** valorile 2, 3, 4, 5 apar de 3, 2, 2, 1 ori → 8; valorile 10…15 dau 2 + 1 + 1 + 1 + 1 + 1 = 7 → se afișează **8** ✔.

## Ce merită reținut din model

- **De Morgan:** `!(A || B)` ⇔ `!A && !B`.
- **Afișare după apelul recursiv** → ordine inversă (aici descrescătoare).
- **Frunzele** sunt nodurile care nu apar în vectorul de „tați”.
- **Graf conex:** cel puțin n − 1 muchii.
- **Secvențe de valori consecutive** → vector de frecvență parcurs o dată.
