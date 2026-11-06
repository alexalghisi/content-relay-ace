Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2021 la Matematică M_șt-nat**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $\log_23$, $\log_26$, $\log_212$ sunt termeni consecutivi ai unei progresii aritmetice

Trebuie ca termenul din mijloc să fie media celorlalți:

$$\log_23 + \log_212 = \log_236 = \log_26^2 = 2\log_26.\ \blacksquare$$

*Barem: 3p + 2p.*

### 2. $f(x) = x^2 - x + 1$; $x$ cu $f(x) = x$

$$x^2 - x + 1 = x \iff x^2 - 2x + 1 = 0 \iff x = 1.$$

*Barem: 3p + 2p.*

### 3. Ecuația $|2x - 1| = 2x + 1$

Necesar $2x + 1 \ge 0$. Avem $2x - 1 = 2x + 1$ (imposibil) sau $2x - 1 = -(2x + 1) \iff 4x = 0 \iff x = 0$ (verifică: $|-1| = 1$).

**Răspuns:** $x = 0$. *Barem: 3p + 2p.*

### 4. Probabilitatea ca un număr de două cifre să aibă cifra zecilor pară și a unităților impară

90 cazuri posibile. Zecile: $2, 4, 6, 8$ (4 moduri); unitățile: $1, 3, 5, 7, 9$ (5 moduri): $20$ favorabile.

$$p = \frac{20}{90} = \frac29.$$

*Barem: 2p + 2p + 1p.*

### 5. $a$ cu $\vec u = a\vec i + \vec j$ și $\vec v = 8\vec i + 2\vec j$ coliniari

Coliniari $\iff \frac a8 = \frac12 \iff a = 4$.

*Barem: 3p + 2p.*

### 6. $\triangle ABC$ dreptunghic în $A$, $BC = 12$, $B = \frac\pi6$; aria $= 18\sqrt3$

$\cos B = \frac{AB}{BC} \Rightarrow AB = 12\cdot\frac{\sqrt3}2 = 6\sqrt3$.

$$\mathcal A = \frac12AB\cdot BC\cdot\sin B = \frac12\cdot6\sqrt3\cdot12\cdot\frac12 = 18\sqrt3.$$

*Barem: 3p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}2a - 1 & 4a - 4\\ 1 - a & 3 - 2a\end{pmatrix}$

#### a) $\det A(2) = 1$

$$A(2) = \begin{pmatrix}3&4\\-1&-1\end{pmatrix},\quad \det = -3 + 4 = 1.$$

*Barem: 3p + 2p.*

#### b) $A(a)A(b) = A(a + b - 1)$

$$A(a)A(b) = \begin{pmatrix}(2a-1)(2b-1) + (4a-4)(1-b) & (2a-1)(4b-4) + (4a-4)(3-2b)\\ (1-a)(2b-1) + (3-2a)(1-b) & (1-a)(4b-4) + (3-2a)(3-2b)\end{pmatrix} = \begin{pmatrix}2a + 2b - 3 & 4a + 4b - 8\\ 2 - a - b & 5 - 2a - 2b\end{pmatrix}.$$

Cu $t = a + b - 1$: $2t - 1 = 2a + 2b - 3$, $4t - 4 = 4a + 4b - 8$, $1 - t = 2 - a - b$, $3 - 2t = 5 - 2a - 2b$. Deci produsul este $A(a + b - 1)$. $\blacksquare$ *Barem: 3p + 2p.*

#### c) $n$ natural cu $A(1)A(2)A(2^2)A(2^3)A(2^4) = A(32)A(-n)$

Aplicând repetat b), parametrii se adună și se scade câte 1 la fiecare înmulțire (4 înmulțiri):

$$A(1 + 2 + 4 + 8 + 16 - 4) = A(27),\qquad A(32)A(-n) = A(31 - n).$$

Cum $A(a) = A(b) \Rightarrow 2a - 1 = 2b - 1 \Rightarrow a = b$: $27 = 31 - n \iff n = 4$.

*Barem: 3p + 2p.*

### 2. Legea $x\circ y = 3x^2 - 5xy + 2y^2$

#### a) $1\circ2 = 1$

$$1\circ2 = 3 - 10 + 8 = 1.$$

*Barem: 3p + 2p.*

#### b) $x\circ x = 0$

$$x\circ x = 3x^2 - 5x^2 + 2x^2 = 0.$$

*Barem: 3p + 2p.*

#### c) $x$ cu $2^x\circ3^x = 0$

Legea se factorizează: $x\circ y = (x - y)(3x - 2y)$. Deci

$$2^x\circ3^x = (2^x - 3^x)(3\cdot2^x - 2\cdot3^x) = 0.$$

$2^x = 3^x \iff \left(\frac23\right)^x = 1 \iff x = 0$; $3\cdot2^x = 2\cdot3^x \iff 2^{x-1} = 3^{x-1} \iff x = 1$.

**Răspuns:** $x \in \{0, 1\}$. *Barem: 3p + 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \sqrt{x^2 + 2x + 2} - x$

#### a) $f'(x) = \dfrac{x+1}{\sqrt{x^2+2x+2}} - 1$

$$f'(x) = \frac{2x + 2}{2\sqrt{x^2+2x+2}} - 1 = \frac{x + 1}{\sqrt{x^2+2x+2}} - 1.$$

*Barem: 3p + 2p.*

#### b) Tangenta în punctul de abscisă $x = -1$

$f(-1) = \sqrt1 + 1 = 2$, $f'(-1) = 0 - 1 = -1$:

$$y - 2 = -(x + 1) \iff y = -x + 1.$$

*Barem: 2p + 3p.*

#### c) $\sqrt{(x^2+1)^2 + 2(x^2+1) + 2} - \sqrt{4x^2 + 4x + 2} \le (x - 1)^2$

Cum $\sqrt{(x+1)^2 + 1} > |x + 1| \ge x + 1$, avem $f'(x) < 0$: $f$ e descrescătoare pe $\mathbb R$. Din $x^2 + 1 \ge 2x$ rezultă $f(x^2 + 1) \le f(2x)$:

$$\sqrt{(x^2+1)^2 + 2(x^2+1) + 2} - (x^2 + 1) \le \sqrt{4x^2 + 4x + 2} - 2x,$$

adică $\sqrt{(x^2+1)^2 + 2(x^2+1) + 2} - \sqrt{4x^2+4x+2} \le x^2 - 2x + 1 = (x - 1)^2$. $\blacksquare$ *Barem: 3p + 2p.*

### 2. $f(x) = \dfrac{2x}{\sqrt{x^2+1}}$

#### a) $\displaystyle\int_0^1\left(4 - f^2(x)\right)dx = \pi$

$4 - f^2(x) = 4 - \dfrac{4x^2}{x^2+1} = \dfrac{4}{x^2+1}$:

$$\int_0^1\frac4{x^2+1}dx = 4\operatorname{arctg}x\Big|_0^1 = 4\cdot\frac\pi4 = \pi.$$

*Barem: 3p + 2p.*

#### b) Aria suprafeței dintre $G_f$, $Ox$, $x = 0$, $x = 1$ este $2(\sqrt2 - 1)$

$f(x) \ge 0$ pe $[0,1]$, deci

$$\mathcal A = \int_0^1\frac{2x}{\sqrt{x^2+1}}dx = 2\sqrt{x^2+1}\Big|_0^1 = 2\sqrt2 - 2 = 2(\sqrt2 - 1).$$

*Barem: 3p + 2p.*

#### c) $\displaystyle\int_1^2\frac{f(x^2)}{x}dx = \ln\left(\sqrt{34} - \sqrt{17} + 4\sqrt2 - 4\right)$

$\dfrac{f(x^2)}{x} = \dfrac{2x}{\sqrt{x^4+1}}$. Cu $t = x^2$, $dt = 2x\,dx$:

$$\int_1^4\frac{dt}{\sqrt{t^2+1}} = \ln\left(t + \sqrt{t^2+1}\right)\Big|_1^4 = \ln\frac{4 + \sqrt{17}}{1 + \sqrt2}.$$

Amplificăm cu $\sqrt2 - 1$: $\dfrac{4 + \sqrt{17}}{1 + \sqrt2} = (4 + \sqrt{17})(\sqrt2 - 1) = 4\sqrt2 - 4 + \sqrt{34} - \sqrt{17}$. $\blacksquare$

*Barem: 3p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $x = 1$ |
| I.3 | $x = 0$ |
| I.4 | $p = \frac29$ |
| I.5 | $a = 4$ |
| II.1.c | $n = 4$ |
| II.2.c | $x \in \{0,1\}$ |
| III.1.b | $y = -x + 1$ |

## Ce merită reținut din model

- **Lege de forma $A(a)A(b) = A(a + b - 1)$:** la $k$ factori, parametrul e suma minus $(k - 1)$.
- **Formă pătratică omogenă** $3x^2 - 5xy + 2y^2 = (x - y)(3x - 2y)$ — factorizează!
- **$\int\frac{dt}{\sqrt{t^2+1}} = \ln\left(t + \sqrt{t^2+1}\right)$.**
