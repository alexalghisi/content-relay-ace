Rezolvarea completă a subiectului de **Bacalaureat 2016 la Matematică M_șt-nat**, sesiunea specială, **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $(\sqrt5 + 2)^2 - 4\sqrt5 = 9$

$$(\sqrt5 + 2)^2 = 5 + 4\sqrt5 + 4 = 9 + 4\sqrt5 \Rightarrow 9 + 4\sqrt5 - 4\sqrt5 = 9.$$

*Barem: 3p, 2p.*

### 2. $M(m, 4)$ aparține graficului lui $f(x) = x + 2$

$f(m) = 4 \iff m + 2 = 4 \iff m = 2$.

**Răspuns:** $m = 2$. *Barem: 3p, 2p.*

### 3. Ecuația $\log_4(x^2 + 9) = \log_4 25$

$x^2 + 9 = 25 \iff x^2 = 16 \iff x = \pm 4$ (ambele verifică).

**Răspuns:** $x \in \{-4, 4\}$. *Barem: 2p, 3p.*

### 4. Probabilitatea ca un număr din $M = \{1, 2, \dots, 9\}$ să fie divizibil cu 2

Cazuri posibile: **9**; numere pare: $2, 4, 6, 8$ — **4**.

$$p = \frac49.$$

*Barem: 1p, 2p, 2p.*

### 5. $a$ pentru care $\vec u = (a - 1)\vec i - 3\vec j$ și $\vec v = 2\vec i - 6\vec j$ sunt coliniari

$$\frac{a - 1}{2} = \frac{-3}{-6} = \frac12 \iff a - 1 = 1 \iff a = 2.$$

**Răspuns:** $a = 2$. *Barem: 3p, 2p.*

### 6. $x \in \left(0, \frac\pi2\right)$, $\cos x = \frac12$; arătați că $\sin 2x = \frac{\sqrt3}{2}$

$\sin x = \sqrt{1 - \frac14} = \frac{\sqrt3}{2}$ (pozitiv în cadranul I), deci

$$\sin 2x = 2\sin x\cos x = 2\cdot\frac{\sqrt3}{2}\cdot\frac12 = \frac{\sqrt3}{2}.$$

*Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} 1 + 3x & 2x\\ -6x & 1 - 4x\end{pmatrix}$

#### a) $\det(A(0)) = 1$

$A(0) = I_2$, deci $\det A(0) = 1$. *Barem: 2p, 3p.*

#### b) $A(x)A(y) = A(x + y - xy)$

$$A(x)A(y) = \begin{pmatrix} (1+3x)(1+3y) - 12xy & 2y(1 + 3x) + 2x(1 - 4y)\\ -6x(1 + 3y) - 6y(1 - 4x) & -12xy + (1 - 4x)(1 - 4y)\end{pmatrix} = \begin{pmatrix} 1 + 3t & 2t\\ -6t & 1 - 4t\end{pmatrix},$$

unde $t = x + y - xy$. (De exemplu: $1 + 3x + 3y + 9xy - 12xy = 1 + 3(x + y - xy)$.) Deci $A(x)A(y) = A(x + y - xy)$. *Barem: 3p, 2p.*

#### c) $x$ cu $A(2^x)A(2^x) = A(1)$

Din b): $A(2^x)A(2^x) = A(2\cdot 2^x - 4^x)$. Elementul de pe poziția $(1,2)$, $2t$, determină unic pe $t$, deci

$$2\cdot 2^x - 4^x = 1 \iff (2^x - 1)^2 = 0 \iff 2^x = 1 \iff x = 0.$$

**Răspuns:** $x = 0$. *Barem: 3p, 2p.*

### 2. $f = X^3 - X^2 + aX + 2$

#### a) $f(-1) + f(1) = 2$

$f(-1) = -1 - 1 - a + 2 = -a$, $f(1) = 1 - 1 + a + 2 = a + 2$; suma este $2$. *Barem: 2p, 3p.*

#### b) $a$ pentru care $f$ se divide cu $X^2 - 2X + 2$

$(X + 1)(X^2 - 2X + 2) = X^3 - X^2 + 2$, deci

$$f = (X + 1)(X^2 - 2X + 2) + aX.$$

Restul este $aX$, nul $\iff a = 0$.

**Răspuns:** $a = 0$. *Barem: 3p, 2p.*

#### c) $x_1^3 + x_2^3 + x_3^3 + 3(x_1x_2 + x_2x_3 + x_1x_3) = -5$

Viète: $s_1 = 1$, $s_2 = a$, deci $\sum x_i^2 = 1 - 2a$. Fiecare rădăcină verifică $x_i^3 = x_i^2 - ax_i - 2$, deci

$$\sum x_i^3 = \sum x_i^2 - a\sum x_i - 6 = 1 - 2a - a - 6 = -3a - 5.$$

$$\sum x_i^3 + 3s_2 = -3a - 5 + 3a = -5. \ \blacksquare$$

*Barem: 3p, 1p, 1p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(3, +\infty) \to \mathbb R$, $f(x) = \dfrac{x^2 + 2x - 11}{x - 3}$

#### a) $f'(x) = \dfrac{(x - 1)(x - 5)}{(x - 3)^2}$

$$f'(x) = \frac{(2x + 2)(x - 3) - (x^2 + 2x - 11)}{(x-3)^2} = \frac{x^2 - 6x + 5}{(x-3)^2} = \frac{(x-1)(x-5)}{(x-3)^2}.$$

*Barem: 3p, 2p.*

#### b) Asimptota oblică spre $+\infty$

$$m = \lim_{x\to+\infty}\frac{f(x)}{x} = \lim_{x\to+\infty}\frac{x^2 + 2x - 11}{x^2 - 3x} = 1,$$

$$n = \lim_{x\to+\infty}(f(x) - x) = \lim_{x\to+\infty}\frac{x^2 + 2x - 11 - x^2 + 3x}{x - 3} = \lim_{x\to+\infty}\frac{5x - 11}{x - 3} = 5.$$

**Răspuns:** $y = x + 5$. *Barem: 2p, 3p.*

#### c) $f(\pi) > 13$

Pe $(3, 5)$, $(x - 1) > 0$ și $(x - 5) < 0$, deci $f' < 0$ și $f$ este strict descrescătoare. Cum $3 < \pi < 4$ și $f(4) = \frac{16 + 8 - 11}{1} = 13$:

$$f(\pi) > f(4) = 13. \ \blacksquare$$

*Barem: 3p, 2p.*

### 2. $f(x) = (3x + 1)e^x$

#### a) $\displaystyle\int_0^1\frac{1}{e^x}f(x)\,dx = \frac52$

$$\int_0^1(3x + 1)\,dx = \left(\frac{3x^2}{2} + x\right)\Big|_0^1 = \frac32 + 1 = \frac52.$$

*Barem: 2p, 3p.*

#### b) $m$ pentru care $F(x) = (3x + m)e^x$ este o primitivă a lui $f$

$$F'(x) = 3e^x + (3x + m)e^x = (3x + m + 3)e^x.$$

$F' = f \iff 3x + m + 3 = 3x + 1$ pentru orice $x$ $\iff m = -2$.

**Răspuns:** $m = -2$. *Barem: 3p, 2p.*

#### c) $a \ne 0$ cu $\displaystyle\int_0^a f(x)\,dx = 3a$

Din b), $\displaystyle\int_0^a f = (3x - 2)e^x\Big|_0^a = (3a - 2)e^a + 2$.

$$(3a - 2)e^a + 2 = 3a \iff (3a - 2)e^a - (3a - 2) = 0 \iff (3a - 2)(e^a - 1) = 0.$$

$e^a = 1$ dă $a = 0$, exclus; rămâne $a = \frac23$.

**Răspuns:** $a = \dfrac23$. *Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = 2$ |
| I.3 | $x \in \{-4, 4\}$ |
| I.4 | $p = \tfrac49$ |
| I.5 | $a = 2$ |
| II.1.c | $x = 0$ |
| II.2.b | $a = 0$ |
| III.1.b | $y = x + 5$ |
| III.2.b | $m = -2$ |
| III.2.c | $a = \tfrac23$ |

## Ce merită reținut din varianta 1

- **Familii $A(x)A(y) = A(x + y - xy)$**: ecuațiile matriceale devin ecuații în parametru.
- **Suma cuburilor rădăcinilor** se calculează înlocuind $x_i^3$ din ecuația polinomului.
- **Comparații cu $\pi$**: monotonie + o valoare ușor de calculat ($f(4) = 13$).
- **Factorizare la final**: $(3a - 2)(e^a - 1) = 0$ — grupează termenii cu factor comun.
