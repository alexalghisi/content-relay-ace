Rezolvarea completă a subiectului de **Bacalaureat 2017 la Matematică M_șt-nat**, sesiunea specială, **varianta 4**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z_1 = 3 + 2i$, $z_2 = 3 - 2i$; arătați că $z_1 + z_2$ este real

$$z_1 + z_2 = 3 + 2i + 3 - 2i = 6 \in \mathbb R.$$

(Numerele sunt conjugate, iar suma a două numere conjugate este $2\operatorname{Re} z$.) *Barem: 2p, 3p.*

### 2. $M(2, m)$ aparține graficului funcției $f(x) = x^2 - 3$

$f(2) = m \iff 4 - 3 = m \iff m = 1$.

**Răspuns:** $m = 1$. *Barem: 3p, 2p.*

### 3. Ecuația $3^{3x-5} = 3^{-2}$

Funcția exponențială este injectivă: $3x - 5 = -2 \iff x = 1$.

**Răspuns:** $x = 1$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr din $A = \{1, 2, \dots, 20\}$ să fie multiplu de 5

Cazuri posibile: **20**. Multiplii de 5: $5, 10, 15, 20$ — **4**.

$$p = \frac{4}{20} = \frac15.$$

*Barem: 2p, 2p, 1p.*

### 5. $A(2,5)$, $B(1,3)$, $C(m,1)$; $C \in AB$

Panta lui $AB$: $\dfrac{3 - 5}{1 - 2} = 2$, deci $AB: y - 5 = 2(x - 2)$, adică $y = 2x + 1$.

$C \in AB \iff 1 = 2m + 1 \iff m = 0$.

**Răspuns:** $m = 0$. *Barem: 3p ecuația dreptei, 2p valoarea.*

### 6. $E(x) = \cos\frac x2 + \sin x$; arătați că $E\left(\frac\pi3\right) = \sqrt3$

$$E\left(\frac\pi3\right) = \cos\frac\pi6 + \sin\frac\pi3 = \frac{\sqrt3}{2} + \frac{\sqrt3}{2} = \sqrt3.$$

*Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} x & x+1 & 1\\ 2 & x & 1\\ 3 & 0 & 1\end{pmatrix}$

#### a) $\det(A(0)) = 1$

$$\det A(0) = \begin{vmatrix} 0 & 1 & 1\\ 2 & 0 & 1\\ 3 & 0 & 1\end{vmatrix} = 0 + 3 + 0 - 0 - 0 - 2 = 1.$$

*Barem: 2p, 3p.*

#### b) $x$ cu $A(x) + A(x+2) = 2A(2)$

$$A(x) + A(x+2) = \begin{pmatrix} 2x+2 & 2x+4 & 2\\ 4 & 2x+2 & 2\\ 6 & 0 & 2\end{pmatrix}, \qquad 2A(2) = \begin{pmatrix} 4 & 6 & 2\\ 4 & 4 & 2\\ 6 & 0 & 2\end{pmatrix}.$$

Din $2x + 2 = 4$ și $2x + 4 = 6$: $x = 1$.

**Răspuns:** $x = 1$. *Barem: 2p, 3p.*

#### c) $n \in \mathbb N$ cu $M(n, n+1)$, $N(2, n)$, $P(3, 0)$ coliniare

Punctele sunt coliniare dacă și numai dacă

$$\begin{vmatrix} n & n+1 & 1\\ 2 & n & 1\\ 3 & 0 & 1\end{vmatrix} = 0.$$

Dezvoltând după prima linie: $n(n - 0) - (n+1)(2 - 3) + (0 - 3n) = n^2 + n + 1 - 3n = n^2 - 2n + 1 = (n-1)^2$.

$(n-1)^2 = 0 \iff n = 1$.

**Răspuns:** $n = 1$. *Barem: 2p condiția, 3p valoarea.*

### 2. $f = X^3 + aX^2 + X - 1$

#### a) $f(1) - f(-1) = 4$

$f(1) = 1 + a + 1 - 1 = a + 1$, $f(-1) = -1 + a - 1 - 1 = a - 3$.

$$f(1) - f(-1) = a + 1 - a + 3 = 4.$$

*Barem: 2p, 3p.*

#### b) Pentru $a = 2$: câtul și restul împărțirii la $X^2 + X + 1$

$f = X^3 + 2X^2 + X - 1$. Împărțim:

- $X^3 : X^2 = X$; $X(X^2 + X + 1) = X^3 + X^2 + X$; rămâne $X^2 - 1$;
- $X^2 : X^2 = 1$; $1\cdot(X^2 + X + 1)$; rămâne $X^2 - 1 - X^2 - X - 1 = -X - 2$.

**Răspuns:** câtul $X + 1$, restul $-X - 2$. *Barem: 3p câtul, 2p restul.*

#### c) $a$ cu $x_1 + x_2 + x_3 + x_1x_2 + x_1x_3 + x_2x_3 = x_1x_2x_3 - 1$

Viète: $x_1 + x_2 + x_3 = -a$, $x_1x_2 + x_1x_3 + x_2x_3 = 1$, $x_1x_2x_3 = 1$.

$$-a + 1 = 1 - 1 \iff a = 1.$$

**Răspuns:** $a = 1$. *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(1, +\infty) \to \mathbb R$, $f(x) = \dfrac{x^2 - x + 1}{x - 1}$

#### a) $f'(x) = \dfrac{x(x-2)}{(x-1)^2}$

$$f'(x) = \frac{(2x - 1)(x - 1) - (x^2 - x + 1)}{(x-1)^2} = \frac{2x^2 - 3x + 1 - x^2 + x - 1}{(x-1)^2} = \frac{x^2 - 2x}{(x-1)^2} = \frac{x(x-2)}{(x-1)^2}.$$

*Barem: 3p, 2p.*

#### b) Tangenta în punctul de abscisă $x = 2$

$f(2) = \dfrac{4 - 2 + 1}{1} = 3$, $f'(2) = 0$:

$$y - 3 = 0\cdot(x - 2) \iff y = 3.$$

**Răspuns:** $y = 3$. *Barem: 2p, 3p.*

#### c) $\lim\limits_{x\to+\infty}\dfrac{f(x)}{e^x + 1} = 0$

$$\frac{f(x)}{e^x + 1} = \frac{x^2 - x + 1}{x(x-1)}\cdot\frac{x}{e^x + 1}.$$

Primul factor tinde la $1$ (raport de polinoame de același grad, coeficienți dominanți egali). Pentru al doilea, cu l'Hospital: $\lim\limits_{x\to+\infty}\dfrac{x}{e^x + 1} = \lim\limits_{x\to+\infty}\dfrac{1}{e^x} = 0$. Deci limita este $1\cdot 0 = 0$. *Barem: 2p, 3p.*

### 2. $f(x) = e^x + 2x$

#### a) $\displaystyle\int_0^1 (f(x) - 2x)\,dx = e - 1$

$$\int_0^1 e^x\,dx = e^x\Big|_0^1 = e - 1.$$

*Barem: 3p, 2p.*

#### b) Volumul corpului obținut prin rotația graficului lui $g:[0,1] \to \mathbb R$, $g(x) = f(x) - e^x$

$g(x) = 2x$:

$$V = \pi\int_0^1 4x^2\,dx = 4\pi\cdot\frac{x^3}{3}\Big|_0^1 = \frac{4\pi}{3}.$$

**Răspuns:** $V = \dfrac{4\pi}{3}$. *Barem: 3p, 2p.*

#### c) $a$ cu $\displaystyle\int_0^a x f(x)\,dx = 1 + \frac{2a^3}{3}$

$\int x e^x\,dx = (x - 1)e^x + C$ (prin părți). Atunci

$$\int_0^a (xe^x + 2x^2)\,dx = (x-1)e^x\Big|_0^a + \frac{2x^3}{3}\Big|_0^a = (a-1)e^a + 1 + \frac{2a^3}{3}.$$

$$(a-1)e^a + 1 + \frac{2a^3}{3} = 1 + \frac{2a^3}{3} \iff (a-1)e^a = 0 \iff a = 1 \quad (e^a > 0).$$

**Răspuns:** $a = 1$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $z_1 + z_2 = 6$ |
| I.2 | $m = 1$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac15$ |
| I.5 | $m = 0$ |
| II.1.b | $x = 1$ |
| II.1.c | $n = 1$ |
| II.2.b | câtul $X + 1$, restul $-X - 2$ |
| II.2.c | $a = 1$ |
| III.1.b | $y = 3$ |
| III.2.b | $V = \tfrac{4\pi}{3}$ |
| III.2.c | $a = 1$ |

## Ce merită reținut din varianta 4

- **Coliniaritatea a trei puncte** se verifică cu determinantul $\begin{vmatrix} x_1 & y_1 & 1\\ x_2 & y_2 & 1\\ x_3 & y_3 & 1\end{vmatrix} = 0$.
- **Relațiile lui Viète pentru gradul 3**: $s_1 = -\frac ba$, $s_2 = \frac ca$, $s_3 = -\frac da$.
- **Tangentă orizontală**: când $f'(x_0) = 0$, tangenta este $y = f(x_0)$.
- **Exponențiala crește mai repede decât orice polinom**: $\frac{x^k}{e^x} \to 0$.
