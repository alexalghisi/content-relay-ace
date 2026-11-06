Rezolvarea completă a subiectului de **Bacalaureat 2024 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea august–septembrie, **varianta 8**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **b**, 3 – **c**, 4 – **d**, 5 – **a** (câte 4 puncte).

### 1. [x, y] nu conține niciun număr de două cifre → b. `!(x<=99 && y>=10)`

Intervalul [x, y] (cu x ≤ y) **intersectează** [10, 99] exact când $x \le 99$ și $y \ge 10$. Cerința este negația acestei condiții, adică exact varianta b (echivalent: `x>99 || y<10`).

- a. ⇔ `x<10 && y<=99` — pentru [5, 50] dă 1, dar intervalul conține 10..50. Greșit.
- c. pentru [20, 30] dă 1. Greșit.
- d. `x>99 && y<10` este imposibil când x ≤ y. Greșit.

### 2. Element din A care apare într-o singură pereche → b. 16

Perechile comparate, în ordine: (3,4) → 3; (5,4) → 4; (5,7) → 5; (14,7) → 7; (14,8) → 8; (14,20) → 14; **(16,20)** → 16; (25,20) → 20; (25,29) → 25; (27,29) → 27.

- 16 apare într-o singură pereche ✔.
- 25 apare în două, 14 în trei, 5 în două.

### 3. `sqrt(4+x)==2+floor(x/4.0)` → c. 5

Pentru x = 5: $\sqrt{9} = 3$ și $2 + \lfloor 1{,}25 \rfloor = 3$ ✔.

- a. x = 2: $\sqrt{6} \approx 2{,}45 \ne 2$.
- b. x = 4: $\sqrt{8} \approx 2{,}83 \ne 3$.
- d. x = 12: $\sqrt{16} = 4 \ne 2 + 3 = 5$.

### 4. r = 18 = 2024 − 2006 → d. `r+2`

La fiecare pas distanța dintre x și y scade cu 2, deci r trebuie să crească cu 2. Diferența 18 este pară, deci după 9 pași x = y = 2015, r = 18, iar corecția `if(x!=y) r=r-1` nu se aplică. (Corecția există pentru diferențe impare.)

### 5. Șir crescător, fiecare valoare de două ori → a.

Se citesc 10 numere; `i` este indicele lui `y` (al doilea, al treilea, …). Șirul trebuie să fie de forma $a, a, b, b, c, c, \dots$ cu $a < b < c < \dots$:

- pentru **i par**, y trebuie să fie **egal** cu x (al doilea element al perechii) → eroare dacă `x!=y`;
- pentru **i impar**, y începe o pereche nouă și trebuie să fie **strict mai mare** → eroare dacă `x>=y`.

Condiția de eroare este `x!=y && i%2==0 || x>=y && i%2==1` — varianta a. Variantele b, c, d descriu (prin negare) exact cazurile corecte sau combinații greșite.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Bucla elimină câte o cifră din dreapta cât timp n are cel puțin două cifre. La prima trecere, `x` = **ultimele două cifre**; la următoarele, `y` se suprascrie, rămânând în final cu **primele două cifre**. La ieșire n este **prima cifră**. Rezultatul: prima cifră, urmată de min(x, y) și max(x, y) (câte două cifre).

#### a) Pentru n = 412531 → **43141**

| n | Acțiune |
|---|---|
| 412531 | x = 31 |
| 41253 | y = 53 |
| 4125 | y = 25 |
| 412 | y = 12 |
| 41 | y = 41 |
| 4 | stop |

x = 31 < y = 41 → n = (4·100 + 31)·100 + 41 = **43141**. *(6p)*

#### b) Două numere din [1, 11110] pentru care se afișează 11111

Trebuie: prima cifră 1, primele două cifre 11 și ultimele două cifre 11. Variante: **111**, **1111**, **11011**. *(câte 3p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x = -1, y = -1;
    cin >> n;
    while (n > 9)
    {
        if (x == -1) x = n % 100;
        else y = n % 100;
        n = n / 10;
    }
    if (x < y) n = (n * 100 + x) * 100 + y;
    else n = (n * 100 + y) * 100 + x;
    cout << n;
    return 0;
}
```

#### d) „cât timp” înlocuit cu test final *(6p)*

Dacă n ≤ 9, bucla inițială nu se execută deloc, deci structura cu test final trebuie pusă într-un `dacă`:

```text
citește n (număr natural nenul)
x ← -1; y ← -1
┌dacă n > 9 atunci
│ ┌repetă
│ │ ┌dacă x = -1 atunci x ← n%100
│ │ │altfel y ← n%100
│ │ └■
│ │  n ← [n/10]
│ └până când n ≤ 9
└■
┌dacă x < y atunci n ← (n*100+x)*100+y
│altfel n ← (n*100+y)*100+x
└■
scrie n
```

### 2. Tablou pentru care 16 se compară cu exact două elemente *(6p)*

Tabloul trebuie să fie ordonat și să conțină 2, 10 și 24. Cu 7 elemente, prima comparație e cu poziția 4, a doua cu poziția 2 sau 6. Punem 16 pe poziția 6 și un element < 16 pe poziția 4:

**(2, 4, 6, 10, 12, 16, 24)**: 16 > 10 (poziția 4) → în 5..7 mijlocul este poziția 6 = 16 → găsit după **două** comparații ✔.

### 3. Terța muzicală *(6p)*

Ordinea din gamă, în notație englezească: C, D, E, F, G, A, B. Terța înseamnă că nota2 se află la **două poziții** după nota1. Pentru C, D, E literele sunt consecutive în alfabet, deci nota2 = nota1 + 2; pentru F și G trecem „peste” sfârșitul literelor: F → A, G → B.

```cpp
char nota1, nota2;
if (nota1 == 'C' || nota1 == 'D' || nota1 == 'E')
{
    if (nota2 == nota1 + 2) cout << "TERTA";
    else cout << "NU";
}
else if ((nota1 == 'F' && nota2 == 'A') || (nota1 == 'G' && nota2 == 'B'))
    cout << "TERTA";
else
    cout << "NU";
```

**Verificare:** G, B → TERTA ✔; C, E → TERTA; C, D → NU.

## Subiectul al III-lea (30 de puncte)

### 1. Număr moderat — pseudocod *(10p)*

Cel mai mic divizor `p ≥ 2` al lui n este întotdeauna prim. Căutăm apoi `q`, primul număr prim mai mare decât p. n este moderat exact când $n = p \cdot q$ (de exemplu pentru 4 = 2·2 obținem q = 3 și 2·3 ≠ 4, deci 0).

```text
citește n (număr natural nenul)
┌dacă n < 2 atunci
│  scrie 0
│altfel
│  p ← 2
│ ┌cât timp n%p ≠ 0 execută p ← p + 1
│ └■
│  q ← p + 1; gasit ← 0
│ ┌cât timp gasit = 0 execută
│ │  prim ← 1; d ← 2
│ │ ┌cât timp d*d ≤ q și prim = 1 execută
│ │ │ ┌dacă q%d = 0 atunci prim ← 0
│ │ │ └■
│ │ │  d ← d + 1
│ │ └■
│ │ ┌dacă prim = 1 atunci gasit ← 1
│ │ │altfel q ← q + 1
│ │ └■
│ └■
│ ┌dacă p*q = n atunci scrie 1
│ │altfel scrie 0
│ └■
└■
```

**Verificare:** 35 → p = 5, q = 7, 5·7 = 35 → **1** ✔; 18 → p = 2, q = 3, 6 ≠ 18 → 0 ✔; 55 → p = 5, q = 7, 35 ≠ 55 → 0 ✔; 4 → 0 ✔.

### 2. Tunderea gazonului *(10p)*

Gazonul se află pe pozițiile impare (1, 3, 5, …), florile pe cele pare. Pentru fiecare parcelă cu flori de pe poziția i, gazonul anterior (poziția i−1) trebuie să aibă cel mult $v_i - 1$; dacă e mai înalt, îl coborâm exact la această valoare (înălțimea maximă permisă).

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, v[101], i;
    cin >> n;
    for (i = 1; i <= n; i++)
        cin >> v[i];
    for (i = 2; i <= n; i += 2)          // pozițiile pare: flori
        if (v[i - 1] > v[i] - 1)         // gazonul anterior e prea înalt
            v[i - 1] = v[i] - 1;
    for (i = 1; i <= n; i++)
        cout << v[i] << ' ';
    return 0;
}
```

**Verificare:** 6 2 3 7 9 4 → perechile (6,2) → 1; (3,7) rămâne; (9,4) → 3 → **1 2 3 7 3 4** ✔.

### 3. Termenii șirului ≤ y, descrescător

#### a) Descrierea algoritmului *(2p)*

Din relația $f_n = 3f_{n-1} - 2f_{n-2}$ și primii termeni se observă că $f_n = 2^{n-1} + 1$, deci termenul anterior se poate obține din cel curent: $f_{n-1} = [(f_n + 1)/2]$ (de exemplu 65 → 33 → 17 → … → 3 → 2). Scriem y și x, apoi calculăm pe rând termenul anterior cu această formulă și îl scriem, până ajungem la 2. (Echivalent, din doi termeni consecutivi: $f_{n-2} = (3f_{n-1} - f_n)/2$.)

**Eficiență:** termenii se înjumătățesc la fiecare pas → doar $O(\log y)$ pași (cel mult ~31); nu memorăm șirul, doar o variabilă → memorie O(1).

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ofstream g("bac.txt");
    int x, y, crt;
    cin >> x >> y;
    g << y << ' ' << x;
    crt = x;
    while (crt > 2)
    {
        crt = (crt + 1) / 2;
        g << ' ' << crt;
    }
    g.close();
    return 0;
}
```

**Verificare:** 33 65 → **65 33 17 9 5 3 2** ✔; 2 3 → 3 2.

## Ce merită reținut din varianta 8

- **Intervale disjuncte:** [x, y] nu atinge [a, b] ⇔ `y<a || x>b`.
- **Interclasare:** urmărește perechile comparate pas cu pas, într-un tabel.
- **„cât timp” → test final:** pune bucla într-un `dacă` cu aceeași condiție.
- **Cel mai mic divizor ≥ 2** al unui număr este prim.
- **Șiruri recurente:** caută o formulă închisă ($2^{n-1}+1$) ca să mergi ușor înapoi.
