Rezolvarea completă a subiectului de **Bacalaureat 2017 la Matematică M_șt-nat**, sesiunea iunie–iulie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Al treilea termen al progresiei aritmetice cu $a_1 = 4$, $a_2 = 7$

$r = a_2 - a_1 = 3$, deci $a_3 = a_2 + r = 10$.

**Răspuns:** $a_3 = 10$. *Barem: 3p rația, 2p $a_3$.*

### 2. $x_1, x_2$ soluțiile lui $x^2 - 4x + 1 = 0$: $4x_1x_2 - (x_1 + x_2) = 0$

Viète: $x_1 + x_2 = 4$, $x_1x_2 = 1$, deci $4\cdot 1 - 4 = 0$. *Barem: 2p, 3p.*

### 3. $2^{2x+1} = \dfrac18$

$\dfrac18 = 2^{-3}$, deci $2x + 1 = -3 \iff x = -2$.

**Răspuns:** $x = -2$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr de două cifre să fie multiplu de 15

90 cazuri posibile; multiplii de 15: $15, 30, 45, 60, 75, 90$ — 6 favorabile.

$$p = \frac{6}{90} = \frac{1}{15}.$$

**Răspuns:** $p = \dfrac1{15}$. *Barem: 2p, 2p, 1p.*

### 5. $A(0,1)$, $B(1,1)$, $C(3,a)$ coliniare

$m_{AB} = \dfrac{1 - 1}{1 - 0} = 0$, $m_{AC} = \dfrac{a - 1}{3}$. Coliniare $\iff m_{AB} = m_{AC} \iff a - 1 = 0$.

**Răspuns:** $a = 1$. *Barem: 2p, 3p.*

### 6. $AB = 4\sqrt3$, $AC = 4$, $\sin C = \dfrac{\sqrt3}{2}$; $\sin B$

Teorema sinusurilor: $\dfrac{AB}{\sin C} = \dfrac{AC}{\sin B}$, deci

$$\sin B = \frac{AC\cdot\sin C}{AB} = \frac{4\cdot\frac{\sqrt3}{2}}{4\sqrt3} = \frac12.$$

**Răspuns:** $\sin B = \dfrac12$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} 0 & x\\ x & 0\end{pmatrix}$

#### a) $\det(A(1)) = -1$

$\det\begin{pmatrix} 0 & 1\\ 1 & 0\end{pmatrix} = 0 - 1 = -1$. *Barem: 2p, 3p.*

#### b) $A(x)A(y) = xyI_2$

$$A(x)A(y) = \begin{pmatrix} 0 & x\\ x & 0\end{pmatrix}\begin{pmatrix} 0 & y\\ y & 0\end{pmatrix} = \begin{pmatrix} xy & 0\\ 0 & xy\end{pmatrix} = xyI_2.$$

*Barem: 3p, 2p.*

#### c) $A(3^a)A(3^{a+1})A(3^{a+2}) = A(27)$

Din b): $A(3^a)A(3^{a+1}) = 3^{2a+1}I_2$, apoi înmulțit cu $A(3^{a+2})$ dă $A(3^{2a+1}\cdot 3^{a+2}) = A(3^{3a+3})$.

$$3^{3a+3} = 27 = 3^3 \iff 3a + 3 = 3 \iff a = 0.$$

**Răspuns:** $a = 0$. *Barem: 3p, 2p.*

### 2. $f = X^3 + mX^2 + 2X - 4$

#### a) Pentru $m = 1$: $f(1) = 0$

$f(1) = 1 + 1 + 2 - 4 = 0$. *Barem: 3p, 2p.*

#### b) Dacă $X + 2 \mid f$, restul împărțirii la $X + 3$ este $-1$

$f(-2) = -8 + 4m - 4 - 4 = 4m - 16 = 0 \Rightarrow m = 4$, deci $f = X^3 + 4X^2 + 2X - 4$.

Restul la $X + 3$ este $f(-3) = -27 + 36 - 6 - 4 = -1$. $\blacksquare$ *Barem: 3p $m$, 2p restul.*

#### c) $\dfrac1{x_1} + \dfrac1{x_2} + \dfrac1{x_3} + x_1 + x_2 + x_3 = \dfrac12$

Viète: $x_1 + x_2 + x_3 = -m$, $x_1x_2 + x_2x_3 + x_3x_1 = 2$, $x_1x_2x_3 = 4$.

$$\frac{x_1x_2 + x_2x_3 + x_3x_1}{x_1x_2x_3} + (x_1 + x_2 + x_3) = \frac24 - m = \frac12 - m.$$

$\dfrac12 - m = \dfrac12 \iff m = 0$.

**Răspuns:** $m = 0$. *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x + 2017}{e^x}$

#### a) $f'(x) = \dfrac{-(x + 2016)}{e^x}$

$$f'(x) = \frac{e^x - (x + 2017)e^x}{e^{2x}} = \frac{1 - x - 2017}{e^x} = \frac{-(x + 2016)}{e^x}.$$

*Barem: 3p, 2p.*

#### b) Tangenta în $x = 0$

$f(0) = 2017$, $f'(0) = -2016$: $y = -2016x + 2017$. *Barem: 2p, 3p.*

#### c) $f$ convexă pe $[-2015, +\infty)$

$f(x) = -(x + 2016)e^{-x}$ derivat: $f''(x) = -e^{-x} + (x + 2016)e^{-x} = \dfrac{x + 2015}{e^x}$.

Pentru $x \ge -2015$, $f''(x) \ge 0$, deci $f$ este convexă pe $[-2015, +\infty)$. $\blacksquare$ *Barem: 2p, 3p.*

### 2. $f(x) = \dfrac{1}{x^2 + 1}$

#### a) $\displaystyle\int_0^1 \frac{1}{f(x)}dx = \frac43$

$$\int_0^1(x^2 + 1)\,dx = \left(\frac{x^3}{3} + x\right)\Big|_0^1 = \frac13 + 1 = \frac43.$$

*Barem: 3p, 2p.*

#### b) Primitiva $F$ cu $F(1) = \dfrac\pi4 + 1$

$F(x) = \operatorname{arctg} x + c$; $F(1) = \dfrac\pi4 + c = \dfrac\pi4 + 1 \Rightarrow c = 1$.

**Răspuns:** $F(x) = \operatorname{arctg} x + 1$. *Barem: 2p, 3p.*

#### c) $n$ natural cu $\displaystyle\int_0^n xf(x)\,dx = \frac12\ln5$

$$\int_0^n\frac{x}{x^2 + 1}dx = \frac12\ln(x^2 + 1)\Big|_0^n = \frac12\ln(n^2 + 1).$$

$\ln(n^2 + 1) = \ln 5 \iff n^2 = 4 \iff n = 2$ ($n$ natural).

**Răspuns:** $n = 2$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_3 = 10$ |
| I.3 | $x = -2$ |
| I.4 | $p = \tfrac1{15}$ |
| I.5 | $a = 1$ |
| I.6 | $\sin B = \tfrac12$ |
| II.1.c | $a = 0$ |
| II.2.c | $m = 0$ |
| III.1.b | $y = -2016x + 2017$ |
| III.2.b | $F(x) = \operatorname{arctg}x + 1$ |
| III.2.c | $n = 2$ |

## Ce merită reținut din varianta 2

- **Restul împărțirii la $X - a$** este $f(a)$ (teorema restului).
- **Viète pentru inverse**: $\sum\frac1{x_i} = \frac{x_1x_2 + x_2x_3 + x_3x_1}{x_1x_2x_3}$.
- **$\int\frac{x}{x^2+1}dx = \frac12\ln(x^2+1)$** — numărătorul e jumătate din derivata numitorului.
