Rezolvarea completă a subiectului de la **simularea Bacalaureatului 2023 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **b**, 3 – **a**, 4 – **d**, 5 – **c** (câte 4 puncte).

### 1. `x/2+y%3` egal cu 23 → d. x=43 și y=20

`43/2 = 21` (împărțire întreagă), `20%3 = 2` → $21 + 2 = 23$ ✔.

- a. $4 + 2 = 6$. b. $10 + 0 = 10$. c. $11 + 0 = 11$.

### 2. Valoarea `f(2023)` → b. 3232

Funcția reconstruiește numărul cifră cu cifră, înlocuind fiecare cifră 2 cu **3** și orice altă cifră cu **2**. Cifrele 2, 0, 2, 3 devin 3, 2, 3, 2 → **3232**.

### 3. Declararea variabilei m → a.

`m.an` este un câmp simplu, iar `m.dm.garda` arată că `dm` este o structură cu câmpurile `garda` și `lungime`:

```cpp
struct
{
    int an;
    struct { int garda, lungime; } dm;
} m;
```

Variantele b, c, d folosesc punctul sau parantezele în declarații — sintaxă invalidă (punctul se folosește doar la **accesarea** câmpurilor).

### 4. Succesiunea care NU se obține → d. (oolong, tulsi, mate)

Se generează **combinări**, deci elementele fiecărei soluții apar în ordinea din mulțime: matcha, mate, moringa, oolong, tulsi. În d, „mate” apare după „oolong” și „tulsi” — o astfel de succesiune nu este generată (combinarea corespunzătoare apare ca (mate, oolong, tulsi)). Variantele a, b, c respectă ordinea.

### 5. Numărul maxim de culoare → c. 36

Cele 8 raioane sunt împărțite în trei zone cu număr par, nenul, de raioane: singura posibilitate este **2, 2, 4**.

- În interiorul fiecărei zone putem pune arce în ambele sensuri între oricare două raioane: $2 \cdot 1 + 2 \cdot 1 + 4 \cdot 3 = 16$ arce.
- Între două zone diferite putem pune toate arcele, dar **doar într-un singur sens** (altfel zonele s-ar uni într-o singură componentă); ordonând zonele Z1 → Z2 → Z3 și punând toate arcele „înainte”: $2 \cdot 2 + 2 \cdot 4 + 2 \cdot 4 = 20$ arce.

Total: $16 + 20 = 36$.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Bucla exterioară ia, pe rând, x = 5, 4, 3, 2, 1. La fiecare pas, bucla interioară reconstruiește n înlocuind fiecare cifră egală cu x prin $5 - x$. Pe rând: 5 → 0, 4 → 1, 3 → 2, 2 → 3, 1 → 4. Efectul final: cifrele 1 și 4 devin **4**, cifrele 2 și 3 devin **3**, cifra 5 devine **0** (iar zerourile din față dispar), iar 0, 6, 7, 8, 9 rămân neschimbate.

#### a) Pentru 5174 → **474**

x = 5: 5174 → 0174 = 174; x = 4: nu are 4; x = 3, 2: nimic; x = 1: 174 → 474. Se afișează **474**. *(6p)*

#### b) Trei numere impare, cu cifre distincte, din [100, 9999], pentru care se afișează 34

Rezultatul 34 cere o cifră care devine 3 (2 sau 3), urmată de una care devine 4 (1 sau 4), cu cifre 5 sau 0 la început (care dispar). Numerele impare cu cifre distincte sunt: **521**, **531**, **5021**, **5031** (oricare trei dintre ele). *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x = 5, cn, p, c;
    cin >> n;
    do
    {
        cn = n; n = 0; p = 1;
        do
        {
            c = cn % 10;
            if (c == x) c = 5 - c;
            n = c * p + n;
            cn = cn / 10;
            p = p * 10;
        } while (cn != 0);
        x = x - 1;
    } while (x != 0);
    cout << n;
    return 0;
}
```

#### d) Algoritm echivalent cu „pentru … execută” *(6p)*

Prima structură se execută pentru x = 5, 4, 3, 2, 1:

```text
citește n (număr natural)
┌pentru x ← 5, 1, -1 execută
│  cn ← n; n ← 0; p ← 1
│ ┌repetă
│ │  c ← cn%10
│ │ ┌dacă c = x atunci c ← 5 − c
│ │ └■
│ │  n ← c*p + n; cn ← [cn/10]; p ← p*10
│ └până când cn = 0
└■
scrie n
```

### 2. Trei muchii pentru un graf eulerian *(6p)*

Vectorul de tați (4,1,1,0,7,4,4) dă muchiile [1,4], [2,1], [3,1], [5,7], [6,4], [7,4]. Gradele: 1 → 3, 2 → 1, 3 → 1, 4 → 3, 5 → 1, 6 → 1, 7 → 2. Nodurile cu grad impar sunt 1, 2, 3, 4, 5, 6. Le unim două câte două prin muchii **noi** (care nu există deja):

**[2,3], [1,6], [4,5]**

Gradele devin 4, 2, 2, 4, 2, 2, 2 — toate pare — iar graful este conex → eulerian ✔.

### 3. Completarea tabloului *(6p)*

Cu indici de la 1: deasupra diagonalei secundare și pe ea ($i + j \le 6$) valoarea scade pe linie: $5 - j$; sub diagonala secundară ($i + j > 6$) valoarea este $i - 1$.

```cpp
for(i=1;i<=5;i++)
    for(j=1;j<=5;j++)
        if (i + j <= 6) a[i][j] = 5 - j;
        else a[i][j] = i - 1;
```

Verificare: linia 2: 4 3 2 1, apoi a[2][5] = 1 ✔; linia 4: 4 3, apoi 3 3 3 ✔; linia 5: toate 4 ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul NrImp *(10p)*

Divizorii impari ai unui număr sunt divizorii **părții lui impare** (numărul fără factorii 2). Un număr impar are exact 3 divizori doar dacă este de forma $p^2$, cu p prim. Deci numerele căutate sunt $2^k \cdot p^2$, cu p prim **impar** și $k \ge 0$.

Cum $y \le 10^9$, avem $p \le 31\,622$. Pentru fiecare p prim impar cu $p^2 \le y$ generăm $p^2, 2p^2, 4p^2, \dots$ cât timp nu depășesc y și le numărăm pe cele ≥ x. Astfel evităm parcurgerea întregului interval (care ar putea avea un miliard de numere).

```cpp
void NrImp(int x, int y, int &nr)
{
    nr = 0;
    for (long long p = 3; p * p <= y; p += 2)
    {
        int prim = 1;
        for (long long d = 3; d * d <= p && prim; d += 2)
            if (p % d == 0) prim = 0;
        if (!prim) continue;
        for (long long v = p * p; v <= y; v = v * 2)
            if (v >= x) nr++;
    }
}
```

**Verificare:** x = 4, y = 50 → p = 3: 9, 18, 36; p = 5: 25, 50; p = 7: 49 → **nr = 6** ✔.

### 2. Denumirea științifică *(10p)*

Parcurgem cuvintele cu `strtok`. Un cuvânt specific clasificării este **prescurtat** (se termină cu punct) și este un început al unuia dintre cuvintele FAMILIA, GENUL, SPECIA. Pentru el scriem primele trei litere ale cuvântului complet, cu litere mici, urmate de punct; celelalte cuvinte se copiază neschimbate.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[101], t[201] = "";
    const char *cuv[3] = {"FAMILIA", "GENUL", "SPECIA"};
    const char *scurt[3] = {"fam.", "gen.", "spe."};
    cin.getline(s, 101);
    char *p = strtok(s, " ");
    while (p != NULL)
    {
        if (t[0] != '\0') strcat(t, " ");
        int L = strlen(p), gasit = -1;
        if (p[L - 1] == '.')
            for (int k = 0; k < 3; k++)
                if (strncmp(p, cuv[k], L - 1) == 0) gasit = k;
        if (gasit != -1) strcat(t, scurt[gasit]);
        else strcat(t, p);
        p = strtok(NULL, " ");
    }
    cout << t;
    return 0;
}
```

**Verificare:** „FAMIL. PHASIANIDAE GEN. MELEAGRIS SP. GALLOPAVO” și „FAM. PHASIANIDAE G. MELEAGRIS SPECI. GALLOPAVO” → `fam. PHASIANIDAE gen. MELEAGRIS spe. GALLOPAVO` ✔.

### 3. Pașii reprezentativi

#### a) Descrierea algoritmului *(2p)*

Un pas este reprezentativ dacă temperatura lui este cel puțin egală cu maximul temperaturilor anterioare. Reținem temperatura maximă de până acum (`tr`) și poziția ultimului pas cu temperatura ≥ tr (`ptr`). Pentru fiecare pas px cu temperatura x:

- dacă $x > tr$, pasul este reprezentativ;
- dacă $x = tr$, pasul este reprezentativ doar dacă **nu** urmează imediat după un pas cu aceeași temperatură maximă ($px > ptr + 1$);
- dacă $x \ge tr$, actualizăm `ptr = px`, iar dacă $x > tr$, și `tr = x`.

**Eficiență:** o singură parcurgere → timp **liniar**; doar câteva variabile → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, px = 0, tr = -1, ptr = -1;
    while (f >> x)
    {
        px++;
        if (x > tr || (x == tr && px > ptr + 1))
            cout << px << ' ';
        if (x >= tr)
        {
            ptr = px;
            tr = x;
        }
    }
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** 7 (pas 1), 9 (pas 3), 10 (pas 4); pașii 5, 6 continuă secvența de 10 → nu; pasul 10 (temperatura 10, după o întrerupere) → da; pasul 11 continuă → nu; 30 (pas 14) → da. Se afișează `1 3 4 10 14` ✔.

## Ce merită reținut din simulare

- **`/` și `%` întregi** — calculează fiecare variantă rapid.
- **Structuri imbricate:** punctul apare doar la accesare, nu în declarare.
- **Componente tare conexe și număr maxim de arce:** complet în interior, într-un singur sens între componente.
- **Graf eulerian:** unește nodurile cu grad impar două câte două, prin muchii noi.
- **Numere cu exact 3 divizori:** pătrate de numere prime.
