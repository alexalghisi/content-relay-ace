Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2014 la Matematică M_tehnologic**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $3(4 + \sqrt3) - \sqrt{27}$ este natural

$\sqrt{27} = 3\sqrt3$, deci

$$3(4 + \sqrt3) - 3\sqrt3 = 12 + 3\sqrt3 - 3\sqrt3 = 12 \in \mathbb N.$$

*Barem: 2p + 3p.*

### 2. $f(x) = 2x + 3$; $f(1) + \dots + f(10)$

$$2(1 + 2 + \dots + 10) + 10\cdot3 = 2\cdot55 + 30 = 140.$$

*Barem: 2p + 3p.*

### 3. Ecuația $\log_7(x^2 + 8) = \log_7(6x)$

Condiție: $x > 0$. $x^2 + 8 = 6x \iff x^2 - 6x + 8 = 0 \iff (x-2)(x-4) = 0$; ambele soluții sunt pozitive.

**Răspuns:** $x \in \{2, 4\}$. *Barem: 2p + 3p.*

### 4. După o scumpire cu 30%, prețul este 325 lei

$x + 0{,}3x = 1{,}3x = 325 \iff x = 250$.

**Răspuns:** 250 de lei. *Barem: 2p + 3p.*

### 5. $Q$ astfel încât $R(3,3)$ să fie mijlocul lui $PQ$, $P(1,3)$

$x_Q = 2x_R - x_P = 5$, $y_Q = 2y_R - y_P = 3$.

**Răspuns:** $Q(5, 3)$. *Barem: 1p + 2p + 2p.*

### 6. $\sin10^\circ + \sin30^\circ - \sin170^\circ = \frac12$

$\sin170^\circ = \sin(180^\circ - 10^\circ) = \sin10^\circ$, deci expresia este $\sin30^\circ = \frac12$. *Barem: 2p + 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} -3 & 1\\ 2 & -2\end{pmatrix}$, $B = \begin{pmatrix} 0 & 1\\ 1 & 0\end{pmatrix}$

#### a) $\det A$

$$\det A = (-3)(-2) - 2\cdot1 = 6 - 2 = 4.$$

*Barem: 3p + 2p.*

#### b) $B\cdot A - A\cdot B = \begin{pmatrix} 1 & 1\\ -1 & -1\end{pmatrix}$

Înmulțirea la stânga cu $B$ schimbă liniile, la dreapta schimbă coloanele:

$$B\cdot A = \begin{pmatrix} 2 & -2\\ -3 & 1\end{pmatrix}, \qquad A\cdot B = \begin{pmatrix} 1 & -3\\ -2 & 2\end{pmatrix}, \qquad B\cdot A - A\cdot B = \begin{pmatrix} 1 & 1\\ -1 & -1\end{pmatrix}.$$

*Barem: 2p + 3p.*

#### c) $\det(A + xB) = 0$

$$A + xB = \begin{pmatrix} -3 & 1 + x\\ 2 + x & -2\end{pmatrix}, \qquad \det = 6 - (1+x)(2+x) = -x^2 - 3x + 4.$$

$x^2 + 3x - 4 = 0 \iff (x + 4)(x - 1) = 0$.

**Răspuns:** $x \in \{-4, 1\}$. *Barem: 3p + 2p.*

### 2. Legea asociativă $x\circ y = xy - 3(x + y) + 12$

#### a) $x\circ3 = 3\circ x = 3$

$$x\circ3 = 3x - 3x - 9 + 12 = 3, \qquad 3\circ x = 3x - 9 - 3x + 12 = 3.$$

*Barem: 2p + 3p.*

#### b) $x\circ x = x$

$$x^2 - 6x + 12 = x \iff x^2 - 7x + 12 = 0 \iff (x-3)(x-4) = 0.$$

**Răspuns:** $x \in \{3, 4\}$. *Barem: 1p + 2p + 2p.*

#### c) $1\circ2\circ\dots\circ2014$

Din a), $3$ este element absorbant. Grupând (asociativitate):

$$(1\circ2)\circ3\circ(4\circ\dots\circ2014) = \big((1\circ2)\circ3\big)\circ(\dots) = 3\circ(\dots) = 3.$$

**Răspuns:** $3$. *Barem: 2p + 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = e^x - x$

#### a) $f'(x)$

$f'(x) = e^x - 1$. *Barem: 3p + 2p.*

#### b) Tangenta în $x_0 = 0$

$f(0) = 1$, $f'(0) = 0$, deci tangenta este $y = 1$. *Barem: 2p + 3p.*

#### c) $e^x \ge x + 1$ pentru orice $x$

$f'(x) < 0$ pentru $x < 0$ și $f'(x) > 0$ pentru $x > 0$, deci $0$ este punct de minim global: $f(x) \ge f(0) = 1$, adică $e^x - x \ge 1 \iff e^x \ge x + 1$. $\blacksquare$ *Barem: 3p + 2p.*

### 2. $f:(0,+\infty)\to\mathbb R$, $f(x) = 3 - \frac1x$

#### a) $\displaystyle\int_1^2(3 - f(x))\,dx$

$3 - f(x) = \frac1x$, deci $\displaystyle\int_1^2\frac1x\,dx = \ln2$. *Barem: 2p + 3p.*

#### b) Primitiva $F$ cu $F(1) = 3$

$F(x) = 3x - \ln x + c$; $F(1) = 3 + c = 3 \Rightarrow c = 0$.

**Răspuns:** $F(x) = 3x - \ln x$. *Barem: 3p + 2p.*

#### c) Volumul pentru $g(x) = xf(x) = 3x - 1$ pe $[1,2]$

$$V = \pi\int_1^2(3x - 1)^2\,dx = \pi\int_1^2(9x^2 - 6x + 1)\,dx = \pi(3x^3 - 3x^2 + x)\Big|_1^2 = \pi(14 - 1) = 13\pi.$$

**Răspuns:** $V = 13\pi$. *Barem: 2p + 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $12$ |
| I.2 | $140$ |
| I.3 | $x \in \{2, 4\}$ |
| I.4 | 250 lei |
| I.5 | $Q(5, 3)$ |
| II.1.a | $4$ |
| II.1.c | $x \in \{-4, 1\}$ |
| II.2.b | $x \in \{3, 4\}$ |
| II.2.c | $3$ |
| III.1.b | $y = 1$ |
| III.2.a | $\ln2$ |
| III.2.b | $F(x) = 3x - \ln x$ |
| III.2.c | $13\pi$ |

## Ce merită reținut din modelul 2014

- **$xy - a(x + y) + a^2 + a = (x-a)(y-a) + a$**: $a$ este absorbant (aici $a = 3$).
- **Inegalitatea $e^x \ge x + 1$** se demonstrează studiind minimul lui $e^x - x$.
- **Unghiuri suplementare**: $\sin(180^\circ - x) = \sin x$.
- **Matricea $B = \begin{pmatrix}0&1\\1&0\end{pmatrix}$** schimbă liniile (la stânga) sau coloanele (la dreapta).
