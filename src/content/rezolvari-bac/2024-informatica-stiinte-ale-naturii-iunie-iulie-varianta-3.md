Rezolvarea completă a subiectului de **Bacalaureat 2024 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea iunie–iulie, **varianta 3**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **a**, 2 – **c**, 3 – **d**, 4 – **b**, 5 – **c** (câte 4 puncte).

### 1. x și y sunt pare → a. `x%2==0 && (y+1)%2!=0`

`(y+1)%2!=0` înseamnă că y+1 este impar, adică **y este par**. Împreună cu `x%2==0`, expresia cere ca ambele să fie pare ✔.

- b, c, d. sunt adevărate și când x și y sunt **ambele impare** (de ex. 3 și 5) — ele testează doar „aceeași paritate”. Greșit.

### 2. Comparațiile 14, 24, 16 → c. `(4,8,9,14,16,24,48)`

Căutarea binară cere un tablou **sortat**. În c, cu pozițiile 1..7: mijlocul 4 → **14**; 16 > 14 → 5..7, mijlocul 6 → **24**; 16 < 24 → poziția 5 → **16** ✔.

- a, b, d. tablourile nu sunt sortate (iar b și d au doar 6 elemente).

### 3. x ∈ {−3, −1, 1, 3} → d. `abs(x)<=3 && abs(x%2)==1`

Mulțimea conține exact numerele **impare** cu $|x| \le 3$. Folosim `abs(x%2)`, pentru că în C/C++ restul unui număr negativ impar este −1 (de ex. `-3%2 == -1`).

- a. adevărată pentru orice x ≠ 0. b. adevărată pentru orice x par. c. adevărată pentru orice x ≠ 3. Toate greșite.

### 4. Ultima cifră a produsului cifrelor → b. `(u*x)%10`

Ne interesează doar ultima cifră a produsului, deci după fiecare înmulțire păstrăm restul la 10. Cum `u` este o cifră, $(u \cdot x) \bmod 10 = (u \cdot (x \bmod 10)) \bmod 10$ — se înmulțește practic cu ultima cifră a lui x ✔.

- a. `u*(x%10)` calculează tot produsul, nu doar ultima cifră (de ex. 99 → 81).
- c. `u%10*x` înmulțește cu tot numărul x.
- d. `(u%10)*(x%10)` poate da la final o valoare ≥ 10.

### 5. Triunghiurile de 4 din colțuri → c. `i+j<4 || i+j>12`

Se afișează 4 în colțul stânga-sus (linia 0: coloanele 0..3, linia 3: coloana 0 → $i + j \le 3$) și în colțul dreapta-jos (linia 5: coloana 8, linia 8: coloanele 5..8 → $i + j \ge 13$). Cele două zone sunt unite cu `||`.

- d. descrie exact zona de 2 (din mijloc).
- a, b. folosesc `i-j`, adică diagonale paralele cu diagonala principală — altă formă.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare număr citit, structura „repetă” îl împarte la 3 (cel puțin o dată) până devine ≤ 3; dacă rezultatul nu este 0, se înmulțește în `p`.

#### a) Pentru 5, 15, 27, 10, 1, 17 → **9**

| x | Împărțiri succesive la 3 | Final | p |
|---|---|---|---|
| 15 | 5, 1 | 1 | 1 |
| 27 | 9, 3 | 3 | 3 |
| 10 | 3 | 3 | 9 |
| 1 | 0 | 0 (ignorat) | 9 |
| 17 | 5, 1 | 1 | 9 |

Se afișează **9**. *(6p)*

#### b) n = 2 și se afișează 4

Valorile finale sunt în {0, 1, 2, 3}, iar 4 = 2 · 2, deci ambele numere trebuie să ajungă la 2. Asta se întâmplă pentru numerele din $[2\cdot 3^k, 3^{k+1})$: [6, 8], [18, 26], [54, 80], … Exemplu: **6 și 7** (atenție: 2 nu merge, pentru că se împarte o dată și devine 0). *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, p = 1, i, x;
    cin >> n;
    for (i = 1; i <= n; i++)
    {
        cin >> x;
        do
        {
            x = x / 3;
        } while (x > 3);
        if (x != 0)
            p = p * x;
    }
    cout << p;
    return 0;
}
```

#### d) „pentru” înlocuit cu „cât timp” *(6p)*

```text
citește n (număr natural nenul)
p ← 1
i ← 1
┌cât timp i ≤ n execută
│  citește x (număr natural)
│ ┌repetă
│ │  x ← [x/3]
│ └până când x ≤ 3
│ ┌dacă x ≠ 0 atunci p ← p*x
│ └■
│  i ← i + 1
└■
scrie p
```

*Barem: inițializarea contorului, condiția de continuare și actualizarea contorului — câte 1p.*

### 2. Interclasarea crescătoare a lui A = (8, 4, 2) cu B = (3, 8, 10, 17) *(6p)*

A este descrescător, deci îl parcurgem de la dreapta la stânga (2, 4, 8). Rezultatul are 3 + 4 = 7 elemente:

**(2, 3, 4, 8, 8, 10, 17)**

### 3. Tipul ciocolatei și prețul *(6p)*

```cpp
char tip;
if (tip == 'N') cout << "ciocolata neagra";
else cout << "ciocolata cu lapte";
cout << endl;
if (pret > 10) cout << "scumpa";
else cout << "ieftina";
```

Pentru pret = 16, tip = 'N' se afișează `ciocolata neagra` și, pe linia următoare, `scumpa` ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Cel mai mic număr major impar din [a, b] — pseudocod *(10p)*

Parcurgem numerele x de la a la b, oprindu-ne la primul găsit. Pentru fiecare x calculăm suma divizorilor proprii impari (`si`) și pari (`sp`), cu d de la 2 la x−1.

```text
citește a, b (numere naturale, 2 ≤ a ≤ b)
r ← 0; x ← a
┌cât timp x ≤ b și r = 0 execută
│  si ← 0; sp ← 0
│ ┌pentru d ← 2, x−1 execută
│ │ ┌dacă x%d = 0 atunci
│ │ │ ┌dacă d%2 = 1 atunci si ← si + d
│ │ │ │altfel sp ← sp + d
│ │ │ └■
│ │ └■
│ └■
│ ┌dacă si > sp atunci r ← x
│ └■
│  x ← x + 1
└■
scrie r
```

**Verificare:** a = 16, b = 30: 16 (impari: 0; pari: 2+4+8), 17 (prim, sume 0) nu convin; 18: $3 + 9 = 12 > 2 + 6 = 8$ → se scrie **18** ✔.

### 2. Toate elementele au același număr de cifre *(10p)*

Numărăm cifrele fiecărui element; primul dă valoarea `k`, iar dacă un alt element are alt număr de cifre, răspunsul este NU.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, v[51], i, k, c, x, ok = 1;
    cin >> n;
    for (i = 0; i < n; i++)
        cin >> v[i];
    for (i = 0; i < n; i++)
    {
        x = v[i]; c = 0;           // numărăm cifrele lui v[i]
        while (x != 0)
        {
            c++;
            x = x / 10;
        }
        if (i == 0) k = c;
        else if (c != k) ok = 0;
    }
    if (ok) cout << "DA " << k;
    else cout << "NU";
    return 0;
}
```

Valorile sunt ≥ 10, deci niciuna nu este 0 (care ar avea nevoie de tratare separată). **Verificare:** (123, 241, 896, 908, 100, 536) → **DA 3** ✔; (123, 21, …, 1536) → **NU** ✔.

### 3. Lungimea maximă a unei scări

#### a) Descrierea algoritmului *(2p)*

Citim cotele pe rând și păstrăm doar ultima cotă (`ult`), lungimea scării curente (`lgCrt`) și maximul (`lgMax`). Dacă cota citită este `ult + 1`, scara continuă (`lgCrt++`); altfel începe o scară nouă (`lgCrt = 1`). Actualizăm `lgMax` și `ult` la fiecare pas. Dacă la final `lgMax < 2`, nu există nicio scară.

**Eficiență:** o singură parcurgere → timp **liniar** O(n); nu memorăm șirul → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, ult = 0, lgCrt = 0, lgMax = 0;
    while (f >> x)
    {
        if (x == ult + 1) lgCrt++;
        else lgCrt = 1;
        if (lgCrt > lgMax) lgMax = lgCrt;
        ult = x;
    }
    if (lgMax < 2) cout << "nu exista";
    else cout << lgMax;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** scările sunt 600 601, 569 570, 700 701 (lungime 2) și 625 626 627 (lungime 3) → se afișează **3** ✔.

## Ce merită reținut din varianta 3

- **„Ambele pare”** nu e același lucru cu „aceeași paritate”.
- **Rest negativ:** în C/C++ `-3%2 == -1`, de aceea folosește `abs(x%2)` sau `x%2!=0`.
- **Ultima cifră a unui produs:** păstrează doar `%10` după fiecare înmulțire.
- **Zone dintr-o matrice:** `i+j` constant descrie antidiagonale, `i-j` constant — diagonale.
- **Secvență maximă:** contor curent resetat la 1 + maxim actualizat la fiecare pas.
