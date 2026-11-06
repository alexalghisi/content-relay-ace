Rezolvarea completă a subiectului de la **simularea Bacalaureatului 2019 (clasa a XII-a) la Matematică M_tehnologic**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $(1 + \sqrt5)^2 - \sqrt{20} = 6$

$(1 + \sqrt5)^2 = 6 + 2\sqrt5$ și $\sqrt{20} = 2\sqrt5$, deci diferența este $6$. $\blacksquare$ *Barem: 3p, 2p.*

### 2. Distanța dintre punctele de intersecție ale graficului lui $f(x) = x^2 + 2x - 3$ cu $Ox$

$x^2 + 2x - 3 = 0 \iff x \in \{-3, 1\}$; punctele $(-3, 0)$ și $(1, 0)$ sunt la distanța $|1 - (-3)| = 4$.

**Răspuns:** $4$. *Barem: 3p, 2p.*

### 3. Ecuația $4^x\cdot 8^{x+1} = 16^{2x}$

Scriem totul în baza 2: $2^{2x}\cdot 2^{3x+3} = 2^{8x} \iff 5x + 3 = 8x \iff x = 1$.

**Răspuns:** $x = 1$. *Barem: 3p, 2p.*

### 4. Numerele de trei cifre cu produsul cifrelor egal cu 15

$15 = 1\cdot 3\cdot 5$ (singura descompunere în trei cifre, fiindcă $15$ nu e cifră). Permutările cifrelor $1, 3, 5$:

**Răspuns:** $135, 153, 315, 351, 513, 531$. *Barem: 3p, 2p.*

### 5. $A(a, a + 1)$ se află pe dreapta $y = 2x - 1$

$a + 1 = 2a - 1 \iff a = 2$. *Barem: 3p, 2p.*

### 6. $(2\sin x + 3\cos x)^2 + (3\sin x - 2\cos x)^2 = 13$

Dezvoltând, termenii $\pm12\sin x\cos x$ se reduc: $(4 + 9)\sin^2x + (9 + 4)\cos^2x = 13$. $\blacksquare$ *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}x & x - 1\\ x - 1 & x\end{pmatrix}$

**a)** $\det A(2) = 4 - 1 = 3$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $$A(x)A(y) = \begin{pmatrix}xy + (x-1)(y-1) & x(y-1) + (x-1)y\\ (x-1)y + x(y - 1) & (x-1)(y-1) + xy\end{pmatrix} = \begin{pmatrix}2xy - x - y + 1 & 2xy - x - y\\ 2xy - x - y & 2xy - x - y + 1\end{pmatrix},$$

adică $A(2xy - x - y + 1)$. $\blacksquare$ *Barem: 3p, 2p.*

**c)** Din b): $A(x)A\left(\frac12\right) = A\left(x - x - \frac12 + 1\right) = A\left(\frac12\right)$ și analog $A\left(\frac12\right)A(y) = A\left(\frac12\right)$. Deci

$$A(x)A\left(\tfrac12\right)A(y) = A\left(\tfrac12\right)A(y) = A\left(\tfrac12\right)\quad\Rightarrow\quad a = \tfrac12.$$

*Barem: 2p, 3p.*

### 2. $x * y = x + y - \frac{xy}{4}$

**a)** $6 * 2 = 8 - 3 = 5$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $x + 4x - x^2 = 6 \iff x^2 - 5x + 6 = 0 \iff x \in \{2, 3\}$. *Barem: 3p, 2p.*

**c)** $x * 4 = x + 4 - x = 4$ și $4 * y = 4$ pentru orice $x, y$. Prin asociativitate:

$$1 * 2 * \dots * 2019 = \big((1 * 2 * 3) * 4\big) * (5 * \dots * 2019) = 4 * (5 * \dots * 2019) = 4.$$

**Răspuns:** $4$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = 3 + \dfrac{x - 3}{e^x}$

**a)** $$f'(x) = \frac{e^x - (x - 3)e^x}{e^{2x}} = \frac{4 - x}{e^x}.\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** $f''(x) = \frac{-e^x - (4 - x)e^x}{e^{2x}} = \frac{x - 5}{e^x} \ge 0$ pe $[5, +\infty)$, deci $f$ este convexă acolo. $\blacksquare$ *Barem: 3p, 2p.*

**c)** $f$ crește pe $(-\infty, 4]$ și scade pe $[4, +\infty)$, deci $f(x) \le f(4) = 3 + \frac1{e^4}$:

$$\frac{x - 3}{e^x} \le \frac{1}{e^4} \iff x - 3 \le e^{x-4}.\ \blacksquare$$

*Barem: 2p, 3p.*

### 2. $f(x) = 6x^2 + 4x + 1$

**a)** $\int_0^1 f(x)\,dx = (2x^3 + 2x^2 + x)\Big|_0^1 = 5$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $\Delta = 16 - 24 < 0$ și coeficientul dominant e pozitiv, deci $f(x) > 0$; orice primitivă $F$ are $F' = f > 0$, deci este crescătoare. $\blacksquare$ *Barem: 2p, 3p.*

**c)** $$\int_1^a\left(6x + 4 + \frac1x\right)dx = (3x^2 + 4x + \ln x)\Big|_1^a = 3a^2 + 4a + \ln a - 7.$$

$3a^2 + 4a - 7 = 13 \iff 3a^2 + 4a - 20 = 0 \iff a \in \left\{-\frac{10}3, 2\right\}$; cu $a > 1$: $a = 2$.

**Răspuns:** $a = 2$. *Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $4$ |
| I.3 | $x = 1$ |
| I.4 | $135, 153, 315, 351, 513, 531$ |
| I.5 | $a = 2$ |
| II.1.c | $a = \tfrac12$ |
| II.2.b | $x \in \{2, 3\}$ |
| II.2.c | $4$ |
| III.2.c | $a = 2$ |

## Ce merită reținut din simulare

- **Ecuații exponențiale:** adu toate puterile la aceeași bază.
- **Element absorbant** în legi de compoziție și în produse de matrice ($A(\tfrac12)$ „înghite” orice factor).
- **Inegalitate din maximul funcției:** $f(x) \le f(4)$ se rescrie în forma cerută.
