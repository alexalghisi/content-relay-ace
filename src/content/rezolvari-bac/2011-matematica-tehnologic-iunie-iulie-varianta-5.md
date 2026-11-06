Rezolvarea completă a subiectului de **Bacalaureat 2011 la Matematică M2 (științe ale naturii / tehnologic)**, sesiunea iunie–iulie, **varianta 5**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $x$ pentru care $x - 1$, $x + 1$, $3x - 1$ sunt termeni consecutivi ai unei progresii aritmetice

Termenul din mijloc este media aritmetică a vecinilor:

$$2(x + 1) = (x - 1) + (3x - 1) \iff 2x + 2 = 4x - 2 \iff x = 2.$$

**Răspuns:** $x = 2$ (termenii $1, 3, 5$). *Barem: 3p condiția, 2p soluția.*

### 2. $f(x) = 5 - x$; calculați $f(0)\cdot f(1)\cdot\ldots\cdot f(10)$

Printre factori apare $f(5) = 0$, deci produsul este $0$.

**Răspuns:** $0$. *Barem: 3p $f(5) = 0$, 2p concluzia.*

### 3. Ecuația $\sqrt{x - 1} = x - 3$

**Condiții:** $x - 1 \ge 0$ și $x - 3 \ge 0$, deci $x \ge 3$.

$$x - 1 = (x - 3)^2 \iff x^2 - 7x + 10 = 0 \iff x \in \{2, 5\}.$$

$2 < 3$ nu convine. **Răspuns:** $x = 5$. *Barem: 1p condițiile, 2p ecuația, 1p rădăcinile, 1p selectarea.*

### 4. Numărul submulțimilor ordonate cu 2 elemente ale unei mulțimi cu 7 elemente

$$A_7^2 = \frac{7!}{5!} = 7\cdot 6 = 42.$$

**Răspuns:** $42$. *Barem: 2p aranjamentele, 3p calculul.*

### 5. Distanța de la $A(2,3)$ la intersecția dreptelor $2x - y - 6 = 0$ și $-x + 2y - 6 = 0$

Din prima, $y = 2x - 6$; înlocuim în a doua: $-x + 4x - 12 - 6 = 0 \Rightarrow x = 6$, $y = 6$. Punctul de intersecție este $B(6,6)$.

$$AB = \sqrt{(6-2)^2 + (6-3)^2} = \sqrt{16 + 9} = 5.$$

**Răspuns:** $5$. *Barem: 2p intersecția, 2p formula, 1p rezultatul.*

### 6. $\cos M$ în triunghiul $MNP$ cu $MN = 4$, $MP = 5$, $NP = 6$

Teorema cosinusului:

$$\cos M = \frac{MN^2 + MP^2 - NP^2}{2\cdot MN\cdot MP} = \frac{16 + 25 - 36}{40} = \frac{5}{40} = \frac18.$$

**Răspuns:** $\cos M = \dfrac18$. *Barem: 3p formula, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}1&-1\\-2&2\end{pmatrix}$, $X(a) = I_2 + aA$, $a \in \mathbb Z$

#### a) $A^2 - 3A$

$$A^2 = \begin{pmatrix}1 + 2 & -1 - 2\\-2 - 4 & 2 + 4\end{pmatrix} = \begin{pmatrix}3&-3\\-6&6\end{pmatrix} = 3A \Rightarrow A^2 - 3A = O_2.$$

**Răspuns:** $O_2$. *Barem: 3p $A^2$, 1p $3A$, 1p diferența.*

#### b) $X(a)\cdot X(b) = X(a + b + 3ab)$

$$X(a)X(b) = (I_2 + aA)(I_2 + bA) = I_2 + aA + bA + abA^2 = I_2 + (a + b + 3ab)A = X(a + b + 3ab),$$

folosind $A^2 = 3A$. *Barem: 2p dezvoltarea, 1p $A^2 = 3A$, 2p finalizarea.*

#### c) $X(a)$ este inversabilă pentru orice $a \in \mathbb Z$

$$X(a) = \begin{pmatrix}1 + a & -a\\-2a & 1 + 2a\end{pmatrix}, \quad \det X(a) = (1+a)(1+2a) - 2a^2 = 1 + 3a.$$

$1 + 3a = 0 \iff a = -\frac13 \notin \mathbb Z$, deci $\det X(a) \ne 0$ pentru orice $a$ întreg. $\blacksquare$ *Barem: 2p matricea, 1p condiția, 1p determinantul, 1p concluzia.*

### 2. $f = X^3 + 2X^2 - 5X + m$, rădăcinile $x_1, x_2, x_3$

Viète: $x_1 + x_2 + x_3 = -2$, $x_1x_2 + x_1x_3 + x_2x_3 = -5$, $x_1x_2x_3 = -m$.

#### a) $x_1^2 + x_2^2 + x_3^2$

$$x_1^2 + x_2^2 + x_3^2 = (-2)^2 - 2\cdot(-5) = 4 + 10 = 14.$$

**Răspuns:** $14$. *Barem: 2p Viète, 2p formula, 1p rezultatul.*

#### b) $m \ne 0$ cu $x_1 + x_2 + x_3 = \frac1{x_1} + \frac1{x_2} + \frac1{x_3}$

$$\frac1{x_1} + \frac1{x_2} + \frac1{x_3} = \frac{x_1x_2 + x_1x_3 + x_2x_3}{x_1x_2x_3} = \frac{-5}{-m} = \frac5m.$$

$-2 = \dfrac5m \iff m = -\dfrac52$.

**Răspuns:** $m = -\dfrac52$. *Barem: 1p produsul, 2p suma inverselor, 2p valoarea.*

#### c) $\Delta = \begin{vmatrix}x_1&x_2&x_3\\x_2&x_3&x_1\\x_3&x_1&x_2\end{vmatrix} \in \mathbb N$

Adunând coloanele la prima și scoțând factorul comun (sau prin Sarrus):

$$\Delta = 3x_1x_2x_3 - (x_1^3 + x_2^3 + x_3^3) = (x_1 + x_2 + x_3)\big(x_1x_2 + x_2x_3 + x_3x_1 - x_1^2 - x_2^2 - x_3^2\big).$$

$$\Delta = (-2)(-5 - 14) = 38 \in \mathbb N,$$

independent de $m$. $\blacksquare$ *Barem: 3p factorizarea, 2p valoarea.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:[1,+\infty)\to\mathbb R$, $f(x) = e^x - \dfrac1x$

#### a) $\displaystyle\lim_{x\to2}\frac{f(x) - f(2)}{x - 2}$

Limita este $f'(2)$. $f'(x) = e^x + \dfrac{1}{x^2}$, deci

$$\lim_{x\to2}\frac{f(x) - f(2)}{x-2} = e^2 + \frac14.$$

*Barem: 2p definiția derivatei, 2p $f'$, 1p rezultatul.*

#### b) $f(x) > 0$ pentru $x \ge 1$

$f'(x) = e^x + \dfrac1{x^2} > 0$, deci $f$ este crescătoare pe $[1, +\infty)$, iar $f(x) \ge f(1) = e - 1 > 0$. $\blacksquare$ *Barem: 2p monotonia, 3p concluzia.*

#### c) Graficul nu admite asimptotă spre $+\infty$

$\lim\limits_{x\to+\infty}f(x) = +\infty$ — nu există asimptotă orizontală.

$\lim\limits_{x\to+\infty}\dfrac{f(x)}{x} = \lim\limits_{x\to+\infty}\left(\dfrac{e^x}{x} - \dfrac1{x^2}\right) = +\infty$ — nu există asimptotă oblică. $\blacksquare$ *Barem: 2p orizontală, 3p oblică.*

### 2. $f(x) = \sqrt{x^2 + 10}$

#### a) Volumul corpului de rotație pentru $g = f$ pe $[0,3]$

$$V = \pi\int_0^3 (x^2 + 10)\,dx = \pi\left(\frac{x^3}{3} + 10x\right)\Big|_0^3 = \pi(9 + 30) = 39\pi.$$

**Răspuns:** $V = 39\pi$. *Barem: 2p formula, 3p calculul.*

#### b) Orice primitivă $F$ a lui $f$ este crescătoare

$F'(x) = f(x) = \sqrt{x^2 + 10} > 0$ pentru orice $x$, deci $F$ este crescătoare pe $\mathbb R$. *Barem: 2p $F' = f$, 3p concluzia.*

#### c) $\displaystyle\int_{-10}^{10}f(x)\,dx = 2\int_0^{10}f(x)\,dx$

$f$ este pară: $f(-x) = f(x)$. Împărțim integrala și facem substituția $x = -t$ pe $[-10, 0]$:

$$\int_{-10}^0 f(x)\,dx = \int_{10}^0 f(-t)\,(-dt) = \int_0^{10}f(t)\,dt.$$

Deci $\displaystyle\int_{-10}^{10}f = \int_0^{10}f + \int_0^{10}f = 2\int_0^{10}f(x)\,dx$. $\blacksquare$ *Barem: 2p împărțirea, 2p substituția, 1p finalizarea.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $x = 2$ |
| I.2 | $0$ |
| I.3 | $x = 5$ |
| I.4 | $42$ |
| I.5 | $5$ |
| I.6 | $\cos M = \frac18$ |
| II.1.a | $O_2$ |
| II.2.a | $14$ |
| II.2.b | $m = -\frac52$ |
| II.2.c | $\Delta = 38$ |
| III.1.a | $e^2 + \frac14$ |
| III.2.a | $39\pi$ |

## Ce merită reținut din varianta 5

- **Trei termeni consecutivi în progresie aritmetică**: $2b = a + c$.
- **Matrice cu $A^2 = kA$**: $X(a)X(b) = X(a + b + kab)$.
- **Determinantul circulant al rădăcinilor** se exprimă doar prin $S_1$, $S_2$ — Viète.
- **Funcții pare pe intervale simetrice**: $\int_{-a}^a f = 2\int_0^a f$.
