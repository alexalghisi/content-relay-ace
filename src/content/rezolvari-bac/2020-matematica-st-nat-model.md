Rezolvarea completă a subiectului de **Bacalaureat 2020 la Matematică M_șt-nat**, modelul oficial publicat de minister. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $(0{,}3\cdot 10 - 1)(0{,}3\cdot 10 + 1) = 8$

$0{,}3\cdot 10 = 3$, deci $(3 - 1)(3 + 1) = 2\cdot 4 = 8$. $\blacksquare$ *Barem: 3p, 2p.*

### 2. $x^2 - 6x + m = 0$: determinați $m$ cu $x_1x_2(x_1 + x_2) = 12$

Relațiile lui Viète: $x_1 + x_2 = 6$, $x_1x_2 = m$. Atunci $6m = 12 \iff m = 2$.

**Răspuns:** $m = 2$. *Barem: 2p Viète, 3p rezultatul.*

### 3. Ecuația $2\sqrt{5 - x} = \sqrt{x + 10}$

Ridicăm la pătrat: $4(5 - x) = x + 10 \iff 20 - 4x = x + 10 \iff x = 2$.

**Verificare:** $2\sqrt3 = \sqrt{12}$ ✔. **Răspuns:** $x = 2$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr de două cifre să aibă cifra zecilor cu 3 mai mare decât a unităților

90 de cazuri posibile. Numerele $\overline{ab}$ cu $a = b + 3$: $b \in \{0, 1, \dots, 6\}$ dă $30, 41, 52, 63, 74, 85, 96$ — 7 cazuri favorabile.

$$p = \frac{7}{90}.$$

*Barem: 2p, 2p, 1p.*

### 5. $\vec u = a\vec i + (a - 1)\vec j$ și $\vec v = 3\vec i + 4\vec j$ coliniari

Coordonatele sunt proporționale: $\dfrac{a}{3} = \dfrac{a - 1}{4} \iff 4a = 3a - 3 \iff a = -3$.

**Răspuns:** $a = -3$. *Barem: 3p, 2p.*

### 6. Dacă $\sin x = \cos x$, atunci $\cos 2x = 0$

$$\cos 2x = \cos^2 x - \sin^2 x = (\cos x - \sin x)(\cos x + \sin x) = 0\cdot(\cos x + \sin x) = 0.\ \blacksquare$$

*Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a, b) = \begin{pmatrix}a & 2b\\ -b & a\end{pmatrix}$

**a)** $\det A(1,1) = \begin{vmatrix}1 & 2\\ -1 & 1\end{vmatrix} = 1 + 2 = 3$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $$A(a,b)A(b,a) = \begin{pmatrix}a & 2b\\ -b & a\end{pmatrix}\begin{pmatrix}b & 2a\\ -a & b\end{pmatrix} = \begin{pmatrix}ab - 2ab & 2a^2 + 2b^2\\ -b^2 - a^2 & -2ab + ab\end{pmatrix} = \begin{pmatrix}-ab & 2(a^2+b^2)\\ -(a^2+b^2) & -ab\end{pmatrix},$$

adică $A(-ab, a^2 + b^2)$. $\blacksquare$ *Barem: 3p, 2p.*

**c)** $\det A(m, n) = m^2 + 2n^2 = 1$. Cu $m, n$ întregi: dacă $n \ne 0$, $2n^2 \ge 2 > 1$; deci $n = 0$ și $m^2 = 1$.

**Răspuns:** $(m, n) \in \{(-1, 0), (1, 0)\}$. *Barem: 2p, 3p.*

### 2. $f = X^3 - 15X^2 + mX - 80$

**a)** Pentru $m = 95$: $f(1) = 1 - 15 + 95 - 80 = 1$. $\blacksquare$ *Barem: 2p, 3p.*

**b)** Expresia este $x_1^2 + x_2^2 + x_3^2 - (x_1x_2 + x_2x_3 + x_3x_1) = (x_1 + x_2 + x_3)^2 - 3(x_1x_2 + x_2x_3 + x_3x_1)$. Cu Viète ($x_1 + x_2 + x_3 = 15$, suma produselor $= m$):

$$225 - 3m = 0 \iff m = 75.$$

**Răspuns:** $m = 75$. *Barem: 2p Viète, 3p.*

**c)** Progresie aritmetică: $2x_2 = x_1 + x_3$, iar $x_1 + x_2 + x_3 = 15 \Rightarrow 3x_2 = 15 \Rightarrow x_2 = 5$. Din $x_1x_2x_3 = 80$: $x_1x_3 = 16$, cu $x_1 + x_3 = 10$, deci $x_1, x_3$ sunt rădăcinile lui $t^2 - 10t + 16 = 0$: $2$ și $8$.

**Răspuns:** rădăcinile sunt $2, 5, 8$ (și $m = 2\cdot5 + 5\cdot8 + 2\cdot8 = 66$). *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = e^x - x - 10$

**a)** $f'(x) = e^x - 1$, $f'(0) = 1 - 1 = 0$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $f''(x) = e^x > 0$, deci $f'$ este strict crescătoare, deci injectivă. Pentru $x_1 \ne x_2$, $f'(x_1) \ne f'(x_2)$: tangentele au pante diferite, deci nu sunt paralele — sunt concurente. $\blacksquare$ *Barem: 2p, 3p.*

**c)** $f'(x) \le 0$ pe $(-\infty, 0]$ și $f'(x) \ge 0$ pe $[0, +\infty)$, deci $x = 0$ este punct de minim global: $f(x) \ge f(0) = -9$ pentru orice $x$.

Aplicăm pentru $x^3$: $e^{x^3} - x^3 - 10 \ge -9 \iff e^{x^3} \ge x^3 + 1 = (x + 1)(x^2 - x + 1)$. $\blacksquare$

*Barem: 1p, 2p minimul, 2p concluzia.*

### 2. $f(x) = x + \dfrac9x$, $x > 0$

**a)** $$\int_1^3\left(f(x) - \frac9x\right)dx = \int_1^3 x\,dx = \frac{x^2}{2}\Big|_1^3 = \frac92 - \frac12 = 4.\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** $g(x) = \dfrac{2}{f(x)} = \dfrac{2x}{x^2 + 9} > 0$, deci

$$\mathcal A = \int_1^9\frac{2x}{x^2+9}dx = \ln(x^2 + 9)\Big|_1^9 = \ln 90 - \ln 10 = \ln 9 = 2\ln 3.\ \blacksquare$$

*Barem: 3p, 2p.*

**c)** $\int_1^{\sqrt3} x\,\mathrm{arctg}\,x\,dx$. Prin părți, cu $\left(\frac{x^2 + 1}{2}\right)' = x$ (alegere care simplifică!):

$$\int_1^{\sqrt3} x\,\mathrm{arctg}\,x\,dx = \frac{x^2+1}{2}\mathrm{arctg}\,x\Big|_1^{\sqrt3} - \int_1^{\sqrt3}\frac{x^2 + 1}{2}\cdot\frac{1}{x^2+1}dx = \left(\frac{x^2+1}{2}\mathrm{arctg}\,x - \frac x2\right)\Big|_1^{\sqrt3}.$$

$$= 2\cdot\frac\pi3 - \frac{\sqrt3}{2} - \frac\pi4 + \frac12 = \frac{5\pi}{12} - \frac{\sqrt3 - 1}{2}.$$

Comparând cu $\dfrac{5\pi}{12} - \dfrac{\sqrt3 + 3 - a}{2}$: $3 - a = -1 \iff a = 4$.

**Răspuns:** $a = 4$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = 2$ |
| I.3 | $x = 2$ |
| I.4 | $p = \tfrac{7}{90}$ |
| I.5 | $a = -3$ |
| II.1.c | $(\pm1, 0)$ |
| II.2.b | $m = 75$ |
| II.2.c | $2, 5, 8$ |
| III.2.c | $a = 4$ |

## Ce merită reținut din acest model

- **$x_1^2 + x_2^2 + x_3^2 - \sum x_ix_j = S_1^2 - 3S_2$** — se exprimă direct prin Viète.
- **$f''> 0 \Rightarrow f'$ injectivă** — tangentele au pante distincte.
- **$\int x\,\mathrm{arctg}\,x$:** alege primitiva $\frac{x^2+1}{2}$ ca să se simplifice cu $\frac{1}{1+x^2}$.
