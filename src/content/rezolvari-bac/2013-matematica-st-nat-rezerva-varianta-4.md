Rezolvarea completă a subiectului de **Bacalaureat 2013 la Matematică M_șt-nat**, subiectul de rezervă, **varianta 4**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $x = 3(1 - i) + 3i$ este real

$$x = 3 - 3i + 3i = 3 \in \mathbb R.$$

*Barem: 3p calculul, 2p concluzia.*

### 2. Distanța dintre punctele de intersecție ale graficului $f(x) = x^2 - 3x + 2$ cu $Ox$

$f(x) = 0 \iff (x-1)(x-2) = 0 \iff x \in \{1, 2\}$; punctele $(1,0)$ și $(2,0)$ sunt la distanța $1$.

**Răspuns:** $1$. *Barem: 3p rădăcinile, 2p distanța.*

### 3. Ecuația $2^{2x+3} = 8$

$8 = 2^3$, deci $2x + 3 = 3 \iff x = 0$.

**Răspuns:** $x = 0$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. Probabilitatea ca un element din $\{1, 2, \dots, 20\}$ să fie divizibil cu 4

Favorabile: $4, 8, 12, 16, 20$ — **5**; posibile: **20**.

$$p = \frac{5}{20} = \frac14.$$

*Barem: 2p favorabile, 1p posibile, 2p probabilitatea.*

### 5. Lungimea medianei din $B$ în triunghiul $A(-2,3)$, $B(3,0)$, $C(2,5)$

Mijlocul lui $[AC]$: $M\left(\frac{-2+2}{2}, \frac{3+5}{2}\right) = M(0, 4)$.

$$BM = \sqrt{(0 - 3)^2 + (4 - 0)^2} = 5.$$

**Răspuns:** $5$. *Barem: 2p mijlocul, 3p lungimea.*

### 6. $AC$, știind $BC = 4$, $B = \frac\pi6$, $C = \frac\pi3$

$A = \pi - \frac\pi6 - \frac\pi3 = \frac\pi2$, deci triunghiul este dreptunghic în $A$ cu ipotenuza $BC$. Cateta $AC$ se opune unghiului $B = 30^\circ$:

$$AC = BC\cdot\sin B = 4\cdot\frac12 = 2.$$

**Răspuns:** $AC = 2$. *Barem: 2p unghiul $A$, 3p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $M(x) = \begin{pmatrix}x & 1-x\\1-x & x\end{pmatrix}$

#### a) $\det(M(2))$

$$\det\begin{pmatrix}2 & -1\\-1 & 2\end{pmatrix} = 4 - 1 = 3.$$

*Barem: 2p scrierea, 3p calculul.*

#### b) $M(x)\cdot M(y) = M(2xy - x - y + 1)$

$$M(x)M(y) = \begin{pmatrix}xy + (1-x)(1-y) & x(1-y) + (1-x)y\\(1-x)y + x(1-y) & (1-x)(1-y) + xy\end{pmatrix}.$$

Pe diagonală: $xy + 1 - x - y + xy = 2xy - x - y + 1$. În afara diagonalei: $x + y - 2xy = 1 - (2xy - x - y + 1)$. Deci $M(x)M(y) = M(2xy - x - y + 1)$.

**Răspuns:** da. *Barem: 3p produsul, 2p identificarea.*

#### c) $a$ cu $M(a)\cdot M(x) = M(a)$ pentru orice $x$

Din b): $M(2ax - a - x + 1) = M(a) \iff 2ax - a - x + 1 = a$ pentru orice $x$:

$$x(2a - 1) + (1 - 2a) = 0 \ \ \forall x \iff 2a - 1 = 0 \iff a = \frac12.$$

**Răspuns:** $a = \dfrac12$. *Barem: 1p reducerea, 2p ecuația, 2p valoarea.*

### 2. $x\circ y = xy + 2x + 2y + 2$ (asociativă)

#### a) $0\circ(-2)$

$$0 + 0 - 4 + 2 = -2.$$

*Barem: 3p înlocuirea, 2p rezultatul.*

#### b) $x\circ y = (x + 2)(y + 2) - 2$

$$xy + 2x + 2y + 2 = x(y + 2) + 2(y + 2) - 2 = (x + 2)(y + 2) - 2.$$

*Barem: 3p gruparea, 2p finalizarea.*

#### c) $x\circ x\circ x = 6$

$x\circ x\circ x = (x + 2)^3 - 2 = 6 \iff (x + 2)^3 = 8 \iff x + 2 = 2 \iff x = 0$.

**Răspuns:** $x = 0$. *Barem: 3p expresia, 2p soluția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(1,+\infty)\to\mathbb R$, $f(x) = \dfrac{x^2 - 2x + 2}{x - 1}$

#### a) $f'(x) = \dfrac{x(x-2)}{(x-1)^2}$

$$f'(x) = \frac{(2x - 2)(x - 1) - (x^2 - 2x + 2)}{(x-1)^2} = \frac{2x^2 - 4x + 2 - x^2 + 2x - 2}{(x-1)^2} = \frac{x^2 - 2x}{(x-1)^2}.$$

*Barem: 3p regula câtului, 2p simplificarea.*

#### b) Punctele de extrem

$f'(x) = 0 \iff x = 2$ (pentru că $x > 1$). $f' < 0$ pe $(1, 2)$, $f' > 0$ pe $(2, +\infty)$.

**Răspuns:** $x = 2$ punct de minim (cu $f(2) = 2$). *Barem: 2p rădăcina, 2p semnul, 1p concluzia.*

#### c) Asimptota oblică spre $+\infty$

$f(x) = x - 1 + \dfrac{1}{x-1}$:

$$m = \lim_{x\to+\infty}\frac{f(x)}{x} = 1, \qquad n = \lim_{x\to+\infty}\big(f(x) - x\big) = \lim_{x\to+\infty}\left(-1 + \frac1{x-1}\right) = -1.$$

**Răspuns:** $y = x - 1$. *Barem: 2p $m$, 2p $n$, 1p ecuația.*

### 2. $f:(0,+\infty)\to\mathbb R$, $f(x) = x\sqrt x$

#### a) $\displaystyle\int_1^2\frac{f(x)}{\sqrt x}\,dx$

$$\int_1^2 x\,dx = \frac{x^2}{2}\Big|_1^2 = 2 - \frac12 = \frac32.$$

**Răspuns:** $\dfrac32$. *Barem: 2p simplificarea, 3p calculul.*

#### b) $F(x) = \dfrac25x^2\sqrt x$ este primitivă a lui $f$

$F(x) = \dfrac25x^{\frac52}$, deci $F'(x) = \dfrac25\cdot\dfrac52x^{\frac32} = x\sqrt x = f(x)$. *Barem: 3p derivata, 2p concluzia.*

#### c) Aria între grafic, $Ox$, $x = 1$, $x = 4$

$f > 0$ pe $[1, 4]$:

$$\mathcal A = \int_1^4 x\sqrt x\,dx = \frac25x^2\sqrt x\Big|_1^4 = \frac25(16\cdot2 - 1) = \frac{62}{5}.$$

**Răspuns:** $\dfrac{62}{5}$. *Barem: 2p formula, 3p calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $x = 3$ |
| I.2 | $1$ |
| I.3 | $x = 0$ |
| I.4 | $p = \frac14$ |
| I.5 | $5$ |
| I.6 | $AC = 2$ |
| II.1.a | $3$ |
| II.1.c | $a = \frac12$ |
| II.2.a | $-2$ |
| II.2.c | $x = 0$ |
| III.1.b | $x = 2$ (minim) |
| III.1.c | $y = x - 1$ |
| III.2.a | $\frac32$ |
| III.2.c | $\frac{62}{5}$ |

## Ce merită reținut din varianta 4

- **Cateta opusă unghiului de $30^\circ$** este jumătate din ipotenuză.
- **Familii de matrice $M(x)$** cu $M(x)M(y) = M(\dots)$: reduc ecuațiile matriceale la ecuații numerice.
- **Fracții raționale**: împărțirea $\frac{x^2 - 2x + 2}{x - 1} = x - 1 + \frac{1}{x-1}$ dă direct asimptota oblică.
- **Puteri fracționare**: $x\sqrt x = x^{3/2}$, primitiva $\frac25x^{5/2}$.
