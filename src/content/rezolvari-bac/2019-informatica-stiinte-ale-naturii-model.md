Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2019 la Informatică, limbajul C/C++, profil științe ale naturii**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **b**, 3 – **a**, 4 – **c**, 5 – **d** (câte 4 puncte).

### 1. Divizibil cu 20, dar nu cu 19 → d. `!(n%20!=0 || n%19==0)`

Cu De Morgan: `!(n%20!=0 || n%19==0)` = `n%20==0 && n%19!=0` ✔. Variantele a și c folosesc câtul (`/`), iar b este adevărată și pentru numere care nu se divid cu 20.

### 2. Interclasarea descrescătoare → b. (20,19,10,10,9,8,7,5,5,1,1)

Rezultatul conține **toate** cele 11 elemente (inclusiv dublurile 10, 5, 1), în ordine descrescătoare. Variantele a și c pierd elemente, iar d nu este ordonată (7 înaintea lui 8).

### 3. x aparține intervalului (−19, 19) → a. `abs(-x)<19`

|−x| = |x|, iar |x| < 19 ⇔ −19 < x < 19 ✔. Variantele b și d sunt mereu adevărate (o valoare absolută nu poate fi negativă), iar c include și capetele ±19.

### 4. Expresia afișată → c. `(i-1)*4+j`

Pe linia i se afișează 4 numere consecutive, iar linia i începe cu $(i-1) \cdot 4 + 1$. Deci elementul de pe coloana j este `(i-1)*4+j`.

### 5. Valoarea lui z → d. restul împărțirii lui x la y

Din x se scade y cât timp se poate; ce rămâne (mai mic decât y) este **restul** împărțirii lui x la y. Numărul de scăderi ar fi câtul.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Se afișează 1 o dată, 2 de două ori, 3 de trei ori etc., până se epuizează n valori; ultima grupă poate fi incompletă.

#### a) Pentru n = 7 → **1 2 2 3 3 3 4**

*(6p)*

#### b) Ultima valoare afișată să fie 10 → **46** și **55**

Grupele 1…9 au 45 de valori; 10 este ultima valoare afișată pentru n ∈ [46, 55]. *(6p)*

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

### 2. Mulțimea R sau mulțimea C *(6p)*

Un număr complex este real exact când partea imaginară este 0.

```cpp
float pre, pim;
// ... (valorile sunt deja memorate)
if (pim == 0) cout << "multimea R";
else cout << "multimea C";
```

### 3. Tablou pentru care se fac cel mult 3 comparații *(6p)*

Căutarea binară cere un tablou ordonat. Cu 7 elemente, zona de căutare scade 7 → 3 → 1, deci se fac cel mult 3 comparații (și cel puțin 3 sunt necesare pentru unele valori). Exemplu: **(1, 2, 3, 4, 5, 6, 7)**. (Orice tablou ordonat cu 4–7 elemente are tot maximum 3 comparații.)

## Subiectul al III-lea (30 de puncte)

### 1. Suma cifrelor prime — pseudocod *(10p)*

```text
citește n (număr natural)
s ← 0
┌cât timp n ≠ 0 execută
│  c ← n%10
│ ┌dacă c = 2 sau c = 3 sau c = 5 sau c = 7 atunci s ← s + c
│ └■
│  n ← [n/10]
└■
scrie s
```

**Exemple:** 1235405 → 2 + 3 + 5 + 5 = **15**; 140 → **0** ✔.

### 2. Primul număr impar și ultimul număr par *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[105], imp = -1, par = -1;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
        if (a[i] % 2 == 1 && imp == -1) imp = a[i];   // primul impar
        if (a[i] % 2 == 0) par = a[i];                // ultimul par
    }
    if (imp == -1 || par == -1) cout << "nu exista";
    else cout << imp << ' ' << par;
    return 0;
}
```

Test: (8, 2, 0, 5, 9, 4, 1) → **5 4**; (9, 3, 1, 5, 5, 9, 1) → **nu exista** ✔.

### 3. Intervalul prieten de grad maxim

#### a) Descrierea algoritmului *(2p)*

Un interval prieten de grad n este format din n numere întregi consecutive care apar toate în șir. Valorile sunt din [0, 100], deci construim un vector de apariții la citire și căutăm cea mai lungă secvență de valori consecutive prezente: parcurgem vectorul, mărim lungimea curentă cât timp valorile apar și o resetăm la 0 când o valoare lipsește, actualizând maximul.

**Eficiență:** o singură parcurgere a fișierului → timp **liniar**, plus 101 pași pe vectorul de apariții.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int v[101] = {0}, x, L = 0, mx = 0;
    while (f >> x) v[x] = 1;
    for (int i = 0; i <= 100; i++)
    {
        if (v[i]) L++;
        else L = 0;
        if (L > mx) mx = L;
    }
    cout << mx;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** valorile 2, 3, 4, 5 apar toate → 4; 10, 11 și 14, 15 dau doar 2 → se afișează **4** ✔.

## Ce merită reținut din model

- **De Morgan:** `!(A || B)` ⇔ `!A && !B`.
- **Interclasarea** păstrează și valorile egale din ambele tablouri.
- **|x| < a** ⇔ −a < x < a.
- **Scăderi repetate** dau restul (iar numărul lor dă câtul).
- **Valori consecutive prezente** → vector de apariții parcurs o dată.
