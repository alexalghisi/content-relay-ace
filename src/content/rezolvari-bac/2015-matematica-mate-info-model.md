Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2015 la Matematică M_mate-info**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z = 1 + i$; $(z - 1)^2$

$z - 1 = i$, deci $(z - 1)^2 = i^2 = -1$. **Răspuns:** $-1$. *Barem: 2p, 3p.*

### 2. $3(x_1 + x_2) - 4x_1x_2 = 3$ pentru $x^2 - 5x + 3 = 0$

Viète: $x_1 + x_2 = 5$, $x_1x_2 = 3$, deci $15 - 12 = 3$. *Barem: 2p, 3p.*

### 3. $4^x - 3\cdot 2^x + 2 = 0$

Cu $t = 2^x$: $t^2 - 3t + 2 = (t - 1)(t - 2) = 0$, deci $2^x = 1$ sau $2^x = 2$.

**Răspuns:** $x \in \{0, 1\}$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr de două cifre să fie divizibil cu 13

Multiplii: $13, 26, 39, 52, 65, 78, 91$ — 7 din 90.

**Răspuns:** $p = \dfrac{7}{90}$. *Barem: 2p, 1p, 2p.*

### 5. Paralela prin $A(1, 0)$ la $d: y = 3x + 4$

Panta $3$: $y = 3(x - 1) = 3x - 3$. *Barem: 3p, 2p.*

### 6. Raza cercului circumscris: $AB = 12$, $C = \dfrac\pi6$

$\dfrac{AB}{\sin C} = 2R \Rightarrow R = \dfrac{12}{2\cdot\frac12} = 12$.

**Răspuns:** $R = 12$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix} 1 & 1 & 1\\ 0 & a & a + 1\\ 2 & a + 2 & a + 3\end{pmatrix}$

#### a) $\det(A(a))$

Scădem linia a doua din a treia: $L_3 - L_2 = (2, 2, 2) = 2L_1$. Determinantul cu două linii proporționale este nul.

**Răspuns:** $\det(A(a)) = 0$. *Barem: 2p, 3p.*

#### b) $n$ natural cu $2A(n^2) - A(n) = A(6)$

$$2A(n^2) - A(n) = \begin{pmatrix} 1 & 1 & 1\\ 0 & 2n^2 - n & 2n^2 - n + 1\\ 2 & 2n^2 - n + 2 & 2n^2 - n + 3\end{pmatrix}.$$

Egalitatea cu $A(6)$ revine la $2n^2 - n = 6 \iff (n - 2)(2n + 3) = 0$.

**Răspuns:** $n = 2$ ($-\frac32 \notin \mathbb N$). *Barem: 3p, 2p.*

#### c) Infinitate de matrice $X$ cu $A(2015)X = O_{3,1}$

Pentru $X = (x, y, z)^T$ obținem sistemul omogen

$$\begin{cases} x + y + z = 0\\ 2015y + 2016z = 0\\ 2x + 2017y + 2018z = 0\end{cases}$$

al cărui determinant este $\det A(2015) = 0$; deci sistemul are o infinitate de soluții. $\blacksquare$ *Barem: 2p, 3p.*

### 2. $f = X^3 + mX - 3$

#### a) Pentru $m = 2$: $f(1) = 0$

$1 + 2 - 3 = 0$. *Barem: 2p, 3p.*

#### b) $m$ cu $X + 1 \mid f$

$f(-1) = -1 - m - 3 = 0 \iff m = -4$. **Răspuns:** $m = -4$. *Barem: 2p, 3p.*

#### c) Pentru $m > 0$, $f$ are două rădăcini de module egale

Viète: $\sum x_i = 0$, $\sum x_ix_j = m$, deci $\sum x_i^2 = 0 - 2m < 0$. Prin urmare $f$ are cel puțin o rădăcină nereală. Cum $f$ are coeficienți reali, rădăcinile nereale apar în perechi conjugate $z$, $\overline z$, iar $|z| = |\overline z|$. $\blacksquare$ *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x + 1}{e^x - x}$

#### a) $f'(x)$

$$f'(x) = \frac{(e^x - x) - (x + 1)(e^x - 1)}{(e^x - x)^2} = \frac{1 - xe^x}{(e^x - x)^2}.$$

*Barem: 2p, 3p.*

#### b) Tangenta în $x_0 = 0$

$f(0) = 1$, $f'(0) = 1$: $y = x + 1$. *Barem: 2p, 3p.*

#### c) $\lim\limits_{x\to+\infty} f(-x)$

$$\lim_{x\to+\infty}\frac{-x + 1}{e^{-x} + x} = \lim_{x\to+\infty}\frac{-1 + \frac1x}{\frac{e^{-x}}{x} + 1} = -1.$$

**Răspuns:** $-1$. *Barem: 2p, 3p.*

### 2. $f(x) = \dfrac{1}{\sqrt{x^2 + 4}}$

#### a) $\displaystyle\int_0^2 f^2(x)\,dx$

$$\int_0^2\frac{dx}{x^2 + 4} = \frac12\operatorname{arctg}\frac x2\Big|_0^2 = \frac12\cdot\frac\pi4 = \frac\pi8.$$

**Răspuns:** $\dfrac\pi8$. *Barem: 3p, 2p.*

#### b) Orice primitivă a lui $f$ este crescătoare

$F'(x) = \dfrac{1}{\sqrt{x^2 + 4}} > 0$, deci $F$ este crescătoare pe $\mathbb R$. *Barem: 2p, 3p.*

#### c) $I_n = \displaystyle\int_0^1 x^nf(x)\,dx$; $nI_n = \sqrt5 - 4(n - 1)I_{n-2}$

Scriem $\dfrac{x^n}{\sqrt{x^2+4}} = x^{n-1}\left(\sqrt{x^2 + 4}\right)'$ și integrăm prin părți:

$$I_n = x^{n-1}\sqrt{x^2 + 4}\Big|_0^1 - (n - 1)\int_0^1 x^{n-2}\sqrt{x^2 + 4}\,dx = \sqrt5 - (n - 1)\int_0^1\frac{x^{n-2}(x^2 + 4)}{\sqrt{x^2+4}}dx.$$

Ultima integrală este $I_n + 4I_{n-2}$, deci $I_n = \sqrt5 - (n-1)I_n - 4(n-1)I_{n-2}$, adică

$$nI_n = \sqrt5 - 4(n - 1)I_{n-2}, \quad n \ge 3. \ \blacksquare$$

*Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $-1$ |
| I.3 | $x \in \{0, 1\}$ |
| I.4 | $p = \tfrac7{90}$ |
| I.5 | $y = 3x - 3$ |
| I.6 | $R = 12$ |
| II.1.a | $0$ |
| II.1.b | $n = 2$ |
| II.2.b | $m = -4$ |
| III.1.b | $y = x + 1$ |
| III.1.c | $-1$ |
| III.2.a | $\tfrac\pi8$ |

## Ce merită reținut din model

- **Determinant nul fără calcul**: caută o combinație de linii proporțională cu altă linie.
- **Rădăcini conjugate**: un polinom real cu $\sum x_i^2 < 0$ are rădăcini nereale, care vin în perechi de același modul.
- **$\frac{x}{\sqrt{x^2+a}} = (\sqrt{x^2+a})'$** — cheia recurenței de la III.2.c.
