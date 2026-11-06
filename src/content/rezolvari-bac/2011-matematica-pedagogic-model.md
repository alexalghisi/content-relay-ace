Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2011 la Matematică M4** (filiera vocațională, profil pedagogic, specializarea învățător-educatoare). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Calculați $\log_2\sqrt2 + \log_3\frac{1}{\sqrt3}$

$$\log_2 2^{\frac12} = \frac12, \qquad \log_3 3^{-\frac12} = -\frac12, \qquad \text{suma} = 0.$$

*Barem: 2p + 2p + 1p.*

### 2. $A(a, b+1)$ aparține graficelor lui $f(x) = 2x + 5$ și $g(x) = x + 1$

$$\begin{cases} b + 1 = 2a + 5\\ b + 1 = a + 1\end{cases}$$

Din a doua, $b = a$; în prima: $a + 1 = 2a + 5 \Rightarrow a = -4$.

**Răspuns:** $a = b = -4$. *Barem: 1p + 2p + 2p.*

### 3. Probabilitatea ca un element din $\{\sqrt2, \sqrt4, \sqrt6, \sqrt8, \sqrt{10}, \sqrt{12}, \sqrt{14}, \sqrt{16}\}$ să fie irațional

$\sqrt4 = 2$ și $\sqrt{16} = 4$ sunt raționale; celelalte 6 ($\sqrt2, \sqrt6, \sqrt8, \sqrt{10}, \sqrt{12}, \sqrt{14}$) sunt iraționale (radicandul nu e pătrat perfect).

$$p = \frac68 = \frac34.$$

*Barem: 3p cazurile favorabile, 2p probabilitatea.*

### 4. Ecuația $A_x^3 = 2x$, $x \in \mathbb N$

Condiție: $x \ge 3$. $A_x^3 = x(x-1)(x-2) = 2x$; împărțind la $x \ne 0$: $(x-1)(x-2) = 2 \iff x^2 - 3x = 0 \iff x \in \{0, 3\}$. Doar $x = 3$ respectă condiția.

**Răspuns:** $x = 3$. *Barem: 2p + 1p + 2p.*

### 5. Aria triunghiului cu laturile $a = 12$, $b = 13$, $c = 5$

$12^2 + 5^2 = 144 + 25 = 169 = 13^2$, deci triunghiul e dreptunghic, cu catetele $12$ și $5$:

$$\mathcal A = \frac{12\cdot5}{2} = 30.$$

*Barem: 2p + 3p.*

### 6. Media geometrică a lui $x = -\cos135^\circ$ și $y = 2\sin45^\circ$

$x = -\cos135^\circ = \cos45^\circ = \dfrac{\sqrt2}{2}$, $y = 2\cdot\dfrac{\sqrt2}{2} = \sqrt2$.

$$m_g = \sqrt{xy} = \sqrt{\frac{\sqrt2}{2}\cdot\sqrt2} = \sqrt1 = 1.$$

*Barem: 2p + 1p + 2p.*

## Subiectul al II-lea (30 de puncte)

$M = \left\{A(x) = \begin{pmatrix} 1 & x-1\\ 0 & x\end{pmatrix} \,\middle|\, x \ge 0\right\}$, $X\circ Y = X + Y - \begin{pmatrix} 1 & -1\\ 0 & 0\end{pmatrix}$.

### a) Suma elementelor lui $A(x)$ egală cu $2010$

$1 + (x - 1) + 0 + x = 2x = 2010 \iff x = 1005$.

*Barem: 3p + 2p.*

### b) $A(x)\circ A(y) = A(x+y)$

$$\begin{pmatrix} 1 & x-1\\ 0 & x\end{pmatrix} + \begin{pmatrix} 1 & y-1\\ 0 & y\end{pmatrix} - \begin{pmatrix} 1 & -1\\ 0 & 0\end{pmatrix} = \begin{pmatrix} 1 & x + y - 1\\ 0 & x + y\end{pmatrix} = A(x+y).$$

*Barem: 2p + 2p + 1p.*

### c) Elementul neutru în $M$

Căutăm $A(e)$ cu $A(x)\circ A(e) = A(x + e) = A(x)$ pentru orice $x \ge 0$, deci $e = 0$:

$$A(0) = \begin{pmatrix} 1 & -1\\ 0 & 0\end{pmatrix}.$$

*Barem: 2p + 3p.*

### d) Asociativitate pe $M$

$$\big(A(x)\circ A(y)\big)\circ A(z) = A(x+y)\circ A(z) = A(x+y+z) = A(x)\circ A(y+z) = A(x)\circ\big(A(y)\circ A(z)\big).$$

*Barem: 2p + 2p + 1p.*

### e) $A(2)\circ A(x^3) = A(10)$

$A(2 + x^3) = A(10) \iff x^3 = 8 \iff x = 2 \in [0, +\infty)$.

**Răspuns:** $x = 2$ (adică matricea $A(2)$). *Barem: 2p + 3p.*

### f) $A(x)\circ A(x)\circ A(x)\circ A(x)\circ A(x) = A(10)$

Din b), compunerea dă $A(5x)$, deci $5x = 10 \iff x = 2$.

**Răspuns:** $x = 2$. *Barem: 3p + 2p.*

## Subiectul al III-lea (30 de puncte)

$A = \begin{pmatrix} 2 & 1 & 1\\ 1 & -m & 1\\ 1 & 1 & -m\end{pmatrix}$, sistemul $(S)$: $2x + y + z = 3$, $x - my + z = 0$, $x + y - mz = 2$.

### a) $\det A$

Sarrus:

$$\det A = 2m^2 + 1 + 1 - (-m) - 2 - (-m) = 2m^2 + 2m.$$

*Barem: 5p.*

### b) $\det(A + I_3) = -1$

$$A + I_3 = \begin{pmatrix} 3 & 1 & 1\\ 1 & 1-m & 1\\ 1 & 1 & 1-m\end{pmatrix},$$

$$\det(A + I_3) = 3(1-m)^2 + 2 - 2(1-m) - 3 = 3m^2 - 4m.$$

$3m^2 - 4m = -1 \iff 3m^2 - 4m + 1 = 0 \iff (m-1)(3m-1) = 0$.

**Răspuns:** $m \in \left\{\dfrac13, 1\right\}$. *Barem: 1p + 2p + 2p.*

### c) Pentru $m = 2$, $\left(\frac54, \frac{7}{12}, -\frac{1}{12}\right)$ este soluție?

- $2\cdot\frac54 + \frac{7}{12} - \frac{1}{12} = \frac52 + \frac12 = 3$ ✔
- $\frac54 - 2\cdot\frac{7}{12} - \frac{1}{12} = \frac{15}{12} - \frac{15}{12} = 0$ ✔
- $\frac54 + \frac{7}{12} + 2\cdot\frac{1}{12} = \frac{15 + 7 + 2}{12} = 2$ ✔

**Răspuns:** da, tripletul este soluție. *Barem: 2p + 3p.*

### d) Pentru $m = 1$, $\det A \ne 0$

$\det A = 2 + 2 = 4 \ne 0$. *Barem: 2p + 3p.*

### e) Rezolvați $(S)$ pentru $m = 1$

$$\begin{cases} 2x + y + z = 3\\ x - y + z = 0\\ x + y - z = 2\end{cases}$$

Adunând ultimele două: $2x = 2 \Rightarrow x = 1$. Atunci $y + z = 1$ și $-y + z = -1$, deci $z = 0$, $y = 1$.

(Cramer: $D = 4$, $D_x = 4$, $D_y = 4$, $D_z = 0$.)

**Răspuns:** $(x,y,z) = (1, 1, 0)$. *Barem: 2p + 3p.*

### f) Pentru $m = 0$, $(S)$ este incompatibil

$$\begin{cases} 2x + y + z = 3\\ x + z = 0\\ x + y = 2\end{cases}$$

Adunând ecuațiile 2 și 3: $2x + y + z = 2$, în contradicție cu prima ecuație ($= 3$). Sistemul este incompatibil. *Barem: 2p + 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $0$ |
| I.2 | $a = b = -4$ |
| I.3 | $p = \frac34$ |
| I.4 | $x = 3$ |
| I.5 | $30$ |
| I.6 | $1$ |
| II.a | $x = 1005$ |
| II.c | $A(0)$ |
| II.e, f | $x = 2$ |
| III.a | $2m^2 + 2m$ |
| III.b | $m \in \{\frac13, 1\}$ |
| III.e | $(1, 1, 0)$ |

## Ce merită reținut din modelul 2011

- **Morfism de tip $A(x)\circ A(y) = A(x+y)$**: compunerea a $n$ copii dă $A(nx)$, neutrul este $A(0)$.
- **Triunghi cu laturile $5, 12, 13$** este dreptunghic — verifică Pitagora înainte de Heron.
- **Aranjamente**: $A_n^k = n(n-1)\cdots(n-k+1)$, cu condiția $n \ge k$.
- **Incompatibilitate**: combină ecuațiile ca să obții aceeași parte stângă cu termen liber diferit.
