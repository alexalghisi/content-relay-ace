Rezolvarea completă a subiectului de **Bacalaureat 2011 la Matematică (M2 — științe ale naturii / filiera tehnologică)**, sesiunea iunie–iulie, **varianta 5**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $x - 1$, $x + 1$, $3x - 1$ termeni consecutivi ai unei progresii aritmetice

Termenul din mijloc este media aritmetică a vecinilor:

$$2(x + 1) = (x - 1) + (3x - 1) \iff 2x + 2 = 4x - 2 \iff x = 2.$$

**Răspuns:** $x = 2$. *Barem: 3p, 2p.*

### 2. $f(x) = 5 - x$; $f(0)\cdot f(1)\cdot\ldots\cdot f(10)$

$f(5) = 0$ este unul dintre factori, deci produsul este $0$.

**Răspuns:** $0$. *Barem: 3p, 2p.*

### 3. $\sqrt{x - 1} = x - 3$

Condiții: $x \ge 1$ și $x - 3 \ge 0$, deci $x \ge 3$. Ridicăm la pătrat:

$$x - 1 = (x - 3)^2 \iff x^2 - 7x + 10 = 0 \iff x \in \{2, 5\}.$$

$x = 2 \notin [3, \infty)$, deci rămâne $x = 5$ (verificare: $\sqrt4 = 2$ ✔).

**Răspuns:** $x = 5$. *Barem: 1p, 2p, 1p, 1p.*

### 4. Submulțimi ordonate cu 2 elemente dintr-o mulțime cu 7 elemente

$$A_7^2 = \frac{7!}{5!} = 7\cdot 6 = 42.$$

**Răspuns:** 42. *Barem: 2p, 3p.*

### 5. Distanța de la $A(2,3)$ la intersecția dreptelor $2x - y - 6 = 0$ și $-x + 2y - 6 = 0$

Din prima, $y = 2x - 6$; înlocuind: $-x + 4x - 12 - 6 = 0 \Rightarrow x = 6$, $y = 6$.

$$d = \sqrt{(6 - 2)^2 + (6 - 3)^2} = \sqrt{16 + 9} = 5.$$

**Răspuns:** $5$. *Barem: 2p, 2p, 1p.*

### 6. $\cos M$ în triunghiul $MNP$ cu $MN = 4$, $MP = 5$, $NP = 6$

Teorema cosinusului:

$$\cos M = \frac{MN^2 + MP^2 - NP^2}{2\cdot MN\cdot MP} = \frac{16 + 25 - 36}{40} = \frac{5}{40} = \frac18.$$

**Răspuns:** $\cos M = \dfrac18$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 1 & -1\\ -2 & 2\end{pmatrix}$, $X(a) = I_2 + aA$, $a \in \mathbb Z$

#### a) $A^2 - 3A$

$$A^2 = \begin{pmatrix} 1 + 2 & -1 - 2\\ -2 - 4 & 2 + 4\end{pmatrix} = \begin{pmatrix} 3 & -3\\ -6 & 6\end{pmatrix} = 3A \Rightarrow A^2 - 3A = O_2.$$

*Barem: 3p, 1p, 1p.*

#### b) $X(a)X(b) = X(a + b + 3ab)$

$$X(a)X(b) = I_2 + aA + bA + abA^2 = I_2 + (a + b + 3ab)A = X(a + b + 3ab).$$

*Barem: 2p, 1p, 2p.*

#### c) $X(a)$ este inversabilă pentru orice $a \in \mathbb Z$

$$X(a) = \begin{pmatrix} 1 + a & -a\\ -2a & 1 + 2a\end{pmatrix}, \quad \det X(a) = (1 + a)(1 + 2a) - 2a^2 = 1 + 3a.$$

$\det X(a) = 0 \iff a = -\dfrac13 \notin \mathbb Z$, deci pentru orice $a$ întreg determinantul este nenul și $X(a)$ e inversabilă. $\blacksquare$ *Barem: 2p, 1p, 1p, 1p.*

### 2. $f = X^3 + 2X^2 - 5X + m$, cu rădăcinile $x_1, x_2, x_3$

Viète: $x_1 + x_2 + x_3 = -2$, $x_1x_2 + x_1x_3 + x_2x_3 = -5$, $x_1x_2x_3 = -m$.

#### a) $x_1^2 + x_2^2 + x_3^2$

$$(-2)^2 - 2(-5) = 4 + 10 = 14.$$

**Răspuns:** $14$. *Barem: 2p, 2p, 1p.*

#### b) $m \ne 0$ cu $x_1 + x_2 + x_3 = \dfrac1{x_1} + \dfrac1{x_2} + \dfrac1{x_3}$

$$\frac1{x_1} + \frac1{x_2} + \frac1{x_3} = \frac{-5}{-m} = \frac5m, \qquad -2 = \frac5m \iff m = -\frac52.$$

**Răspuns:** $m = -\dfrac52$. *Barem: 1p, 2p, 2p.*

#### c) $\Delta = \begin{vmatrix} x_1 & x_2 & x_3\\ x_2 & x_3 & x_1\\ x_3 & x_1 & x_2\end{vmatrix}$ este natural

Cu regula lui Sarrus: $\Delta = 3x_1x_2x_3 - (x_1^3 + x_2^3 + x_3^3)$, iar identitatea $a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)$ dă

$$\Delta = (x_1 + x_2 + x_3)\big(x_1x_2 + x_2x_3 + x_3x_1 - x_1^2 - x_2^2 - x_3^2\big) = -2(-5 - 14) = 38 \in \mathbb N.$$

Valoarea nu depinde de $m$. $\blacksquare$ *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:[1, +\infty) \to \mathbb R$, $f(x) = e^x - \dfrac1x$

#### a) $\lim\limits_{x\to2}\dfrac{f(x) - f(2)}{x - 2}$

Este $f'(2)$; $f'(x) = e^x + \dfrac1{x^2}$, deci limita este $e^2 + \dfrac14$.

**Răspuns:** $e^2 + \dfrac14$. *Barem: 2p, 2p, 1p.*

#### b) $f(x) > 0$ pe $[1, +\infty)$

$f'(x) > 0$, deci $f$ e crescătoare: $f(x) \ge f(1) = e - 1 > 0$. *Barem: 2p, 3p.*

#### c) Graficul nu admite asimptotă spre $+\infty$

$\lim\limits_{x\to+\infty} f(x) = +\infty$ — nu există asimptotă orizontală.

$\lim\limits_{x\to+\infty}\dfrac{f(x)}{x} = \lim\limits_{x\to+\infty}\left(\dfrac{e^x}{x} - \dfrac{1}{x^2}\right) = +\infty$ — nu există asimptotă oblică. $\blacksquare$ *Barem: 2p, 3p.*

### 2. $f(x) = \sqrt{x^2 + 10}$

#### a) Volumul pentru $g = f|_{[0,3]}$

$$V = \pi\int_0^3(x^2 + 10)\,dx = \pi\left(\frac{x^3}{3} + 10x\right)\Big|_0^3 = \pi(9 + 30) = 39\pi.$$

**Răspuns:** $39\pi$. *Barem: 2p, 3p.*

#### b) Orice primitivă $F$ este crescătoare

$F'(x) = f(x) = \sqrt{x^2 + 10} > 0$ pentru orice $x$, deci $F$ este crescătoare. *Barem: 2p, 3p.*

#### c) $\displaystyle\int_{-10}^{10} f(x)\,dx = 2\int_0^{10} f(x)\,dx$

Împărțim: $\displaystyle\int_{-10}^{10} = \int_{-10}^{0} + \int_0^{10}$. În prima substituim $x = -t$, $dx = -dt$; $f$ este pară ($f(-t) = f(t)$):

$$\int_{-10}^{0} f(x)\,dx = \int_{10}^{0} f(-t)(-dt) = \int_0^{10} f(t)\,dt.$$

Deci totalul este $2\displaystyle\int_0^{10} f(x)\,dx$. $\blacksquare$ *Barem: 2p, 2p, 1p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $x = 2$ |
| I.2 | $0$ |
| I.3 | $x = 5$ |
| I.4 | 42 |
| I.5 | $5$ |
| I.6 | $\cos M = \tfrac18$ |
| II.1.a | $O_2$ |
| II.2.a | $14$ |
| II.2.b | $m = -\tfrac52$ |
| II.2.c | $\Delta = 38$ |
| III.1.a | $e^2 + \tfrac14$ |
| III.2.a | $39\pi$ |

## Ce merită reținut din varianta 5

- **Trei termeni consecutivi în progresie aritmetică**: $2b = a + c$.
- **Ecuații iraționale**: pune condiția ca membrul drept să fie $\ge 0$ înainte de ridicarea la pătrat.
- **Determinantul circulant** $= -(a+b+c)(a^2 + b^2 + c^2 - ab - bc - ca)$; combină cu Viète.
- **Funcții pare**: $\int_{-a}^a f = 2\int_0^a f$.
