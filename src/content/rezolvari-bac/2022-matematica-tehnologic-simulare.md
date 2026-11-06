Rezolvarea completă a **simulării pentru Bacalaureat 2022 la Matematică M_tehnologic** (clasa a XII-a). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresia aritmetică cu $a_3 = 6$, $a_4 = 9$; calculați $a_1$

$r = a_4 - a_3 = 3$, iar $a_3 = a_1 + 2r \Rightarrow a_1 = 6 - 6 = 0$.

**Răspuns:** $a_1 = 0$. *Barem: 2p + 3p.*

### 2. $f(x) = x^2 + 2x - 3$, $g(x) = x - 3$; $a$ cu $f(a) = g(a)$

$$a^2 + 2a - 3 = a - 3 \iff a^2 + a = 0 \iff a(a + 1) = 0.$$

**Răspuns:** $a \in \{-1, 0\}$. *Barem: 3p + 2p.*

### 3. Ecuația $\log_3(x + 3) = 2$

$x + 3 = 3^2 = 9 \iff x = 6$ (convine, $x + 3 > 0$).

**Răspuns:** $x = 6$. *Barem: 3p + 2p.*

### 4. După o scumpire cu 30%, prețul crește cu 60 de lei. Prețul după scumpire?

Fie $x$ prețul inițial: $\frac{30}{100}x = 60 \Rightarrow x = 200$ lei. După scumpire: $200 + 60 = 260$ lei.

**Răspuns:** $260$ de lei. *Barem: 3p + 2p.*

### 5. $A(-4,1)$, $B(2,3)$, $d: y = 2x + a$; mijlocul lui $AB$ aparține lui $d$

Mijlocul: $M\left(\frac{-4+2}{2}, \frac{1+3}{2}\right) = M(-1, 2)$. $M \in d \iff 2 = -2 + a \iff a = 4$.

**Răspuns:** $a = 4$. *Barem: 2p + 3p.*

### 6. $AB = AC$, $BC = 12$, $\angle B = 45^\circ$; aria $= 36$

Triunghi isoscel cu $\angle B = \angle C = 45^\circ$, deci $\angle A = 90^\circ$: dreptunghic isoscel. Catetele: $AB = AC = \frac{BC}{\sqrt2} = 6\sqrt2$.

$$\mathcal A = \frac{6\sqrt2\cdot6\sqrt2}{2} = \frac{72}{2} = 36.$$

*Barem: 3p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}x & x\\ 1 & 2x + 1\end{pmatrix}$

#### a) $\det A(0) = 0$

$$A(0) = \begin{pmatrix}0&0\\1&1\end{pmatrix},\quad \det A(0) = 0\cdot1 - 0\cdot1 = 0.$$

*Barem: 3p + 2p.*

#### b) $a$ cu $2A(4) + A(-2) = aA(2)$

$$2\begin{pmatrix}4&4\\1&9\end{pmatrix} + \begin{pmatrix}-2&-2\\1&-3\end{pmatrix} = \begin{pmatrix}6&6\\3&15\end{pmatrix} = 3\begin{pmatrix}2&2\\1&5\end{pmatrix} = 3A(2).$$

**Răspuns:** $a = 3$. *Barem: 3p + 2p.*

#### c) Dacă $X\cdot A(1) = A(m)$, $m \in \mathbb Z$, atunci $X$ are elemente întregi

$A(1) = \begin{pmatrix}1&1\\1&3\end{pmatrix}$, $\det A(1) = 2$, $A(1)^{-1} = \dfrac12\begin{pmatrix}3&-1\\-1&1\end{pmatrix}$.

$$X = A(m)A(1)^{-1} = \frac12\begin{pmatrix}m&m\\1&2m+1\end{pmatrix}\begin{pmatrix}3&-1\\-1&1\end{pmatrix} = \frac12\begin{pmatrix}2m & 0\\ 2 - 2m & 2m\end{pmatrix} = \begin{pmatrix}m & 0\\ 1 - m & m\end{pmatrix}.$$

Pentru $m$ întreg, toate elementele lui $X$ sunt întregi. $\blacksquare$ *Barem: 2p + 3p.*

### 2. Legea $x * y = (x + y)(x - 1)(y - 1) + 1$

#### a) $2 * 1 = 1$

$$2 * 1 = 3\cdot1\cdot0 + 1 = 1.$$

*Barem: 3p + 2p.*

#### b) Legea este comutativă

$$x * y = (x + y)(x - 1)(y - 1) + 1 = (y + x)(y - 1)(x - 1) + 1 = y * x,$$

din comutativitatea adunării și înmulțirii numerelor reale. $\blacksquare$ *Barem: 2p + 3p.*

#### c) $n$ natural cu $n * (1 - n) \ge n^2$

$$n * (1 - n) = 1\cdot(n - 1)(-n) + 1 = -n^2 + n + 1.$$

$-n^2 + n + 1 \ge n^2 \iff 2n^2 - n - 1 \le 0 \iff (2n + 1)(n - 1) \le 0 \iff n \in \left[-\frac12, 1\right]$.

**Răspuns:** $n \in \{0, 1\}$. *Barem: 2p + 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,\infty)\to\mathbb R$, $f(x) = \dfrac{x + 3}{x^2} + \ln x$

#### a) $f'(x) = \dfrac{x^2 - x - 6}{x^3}$

$$f'(x) = \frac{x^2 - 2x(x + 3)}{x^4} + \frac1x = \frac{-x - 6}{x^3} + \frac{x^2}{x^3} = \frac{x^2 - x - 6}{x^3}.$$

*Barem: 3p + 2p.*

#### b) Tangenta în punctul de abscisă $x = 1$

$f(1) = 4$, $f'(1) = -6$:

$$y - 4 = -6(x - 1) \iff y = -6x + 10.$$

*Barem: 2p + 3p.*

#### c) $\ln\dfrac x3 \ge \dfrac23 - \dfrac1x - \dfrac3{x^2}$ pe $(0,\infty)$

$x^2 - x - 6 = (x - 3)(x + 2)$, deci $f' \le 0$ pe $(0, 3]$ și $f' \ge 0$ pe $[3,\infty)$: minimul este $f(3) = \frac69 + \ln3 = \frac23 + \ln3$.

$$\frac{x+3}{x^2} + \ln x \ge \frac23 + \ln3 \iff \ln x - \ln 3 \ge \frac23 - \frac1x - \frac3{x^2} \iff \ln\frac x3 \ge \frac23 - \frac1x - \frac3{x^2}.\ \blacksquare$$

*Barem: 3p + 2p.*

### 2. $f(x) = x + \dfrac{e^x}{2} + 1$

#### a) $\displaystyle\int_0^2\left(f(x) - \frac{e^x}{2}\right)dx = 4$

$$\int_0^2(x + 1)dx = \left(\frac{x^2}{2} + x\right)\Big|_0^2 = 2 + 2 = 4.$$

*Barem: 3p + 2p.*

#### b) $\displaystyle\int_0^1 2x\left(f(x) - 1\right)dx = \frac53$

$2x(f(x) - 1) = 2x^2 + xe^x$; o primitivă a lui $xe^x$ este $(x - 1)e^x$:

$$\int_0^1(2x^2 + xe^x)dx = \frac{2x^3}{3}\Big|_0^1 + (x - 1)e^x\Big|_0^1 = \frac23 + (0 - (-1)) = \frac53.$$

*Barem: 3p + 2p.*

#### c) $a$ cu $\displaystyle\int_{-1}^0\big(f(x) - x\big)f(x)dx = \frac{(3e+1)(3e+a)}{8e^2}$

$f'(x) = 1 + \frac{e^x}{2} = f(x) - x$. Deci integrala este

$$\int_{-1}^0 f'(x)f(x)dx = \frac{f^2(x)}{2}\Big|_{-1}^0 = \frac12\left(\frac94 - \frac1{4e^2}\right) = \frac{9e^2 - 1}{8e^2} = \frac{(3e+1)(3e-1)}{8e^2},$$

unde $f(0) = \frac32$, $f(-1) = \frac1{2e}$.

**Răspuns:** $a = -1$. *Barem: 3p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_1 = 0$ |
| I.2 | $a \in \{-1, 0\}$ |
| I.3 | $x = 6$ |
| I.4 | $260$ lei |
| I.5 | $a = 4$ |
| II.1.b | $a = 3$ |
| II.2.c | $n \in \{0,1\}$ |
| III.1.b | $y = -6x + 10$ |
| III.2.c | $a = -1$ |

## Ce merită reținut din simulare

- **Ecuații matriceale $XA = B$**: $X = BA^{-1}$ (înmulțire la dreapta!).
- **Observă relația $f' = f - x$** — transformă integrala în $\int f'f = \frac{f^2}{2}$.
- **Procente:** „crește cu 60 de lei” este suma scumpirii, nu prețul final.
