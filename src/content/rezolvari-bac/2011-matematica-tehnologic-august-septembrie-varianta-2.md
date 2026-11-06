Rezolvarea completă a subiectului de **Bacalaureat 2011 la Matematică M2 (științe ale naturii / tehnologic)**, sesiunea august–septembrie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresia aritmetică cu $a_2 = 6$, $a_3 = 5$; calculați $a_6$

$r = a_3 - a_2 = -1$, deci $a_6 = a_3 + 3r = 5 - 3 = 2$.

**Răspuns:** $a_6 = 2$. *Barem: 2p rația, 3p $a_6$.*

### 2. Soluțiile întregi ale inecuației $2x^2 - x - 3 \le 0$

Rădăcinile trinomului: $x_{1,2} = \dfrac{1 \pm 5}{4}$, adică $-1$ și $\dfrac32$. Trinomul (coeficient dominant pozitiv) este $\le 0$ între rădăcini: $x \in \left[-1, \frac32\right]$.

**Răspuns:** $x \in \{-1, 0, 1\}$. *Barem: 3p intervalul, 2p soluțiile întregi.*

### 3. Ecuația $\log_3(x+2) - \log_3(x-4) = 1$

**Condiții:** $x + 2 > 0$ și $x - 4 > 0$, deci $x > 4$.

$$\log_3\frac{x+2}{x-4} = 1 \iff \frac{x+2}{x-4} = 3 \iff x + 2 = 3x - 12 \iff x = 7.$$

$7 > 4$, deci convine. **Răspuns:** $x = 7$. *Barem: 1p condițiile, 2p ecuația, 2p soluția.*

### 4. Prețul inițial, știind că o scumpire cu $5\%$ înseamnă $12$ lei

$$\frac{5}{100}\cdot x = 12 \iff x = 240.$$

**Răspuns:** $240$ de lei. *Barem: 3p ecuația, 2p soluția.*

### 5. Mediatoarea segmentului $[AB]$, $A(1,4)$, $B(5,0)$

Mijlocul $M(3, 2)$; $m_{AB} = \dfrac{0 - 4}{5 - 1} = -1$, deci mediatoarea (perpendiculară pe $AB$) are panta $1$:

$$d: y - 2 = 1\cdot(x - 3) \iff y = x - 1.$$

**Răspuns:** $y = x - 1$. *Barem: 1p mijlocul, 2p panta, 2p ecuația.*

### 6. Raza cercului circumscris, $BC = 9$, $\angle BAC = 120^\circ$

$$R = \frac{BC}{2\sin A} = \frac{9}{2\cdot\frac{\sqrt3}{2}} = \frac{9}{\sqrt3} = 3\sqrt3.$$

**Răspuns:** $R = 3\sqrt3$. *Barem: 2p teorema sinusurilor, 2p $\sin 120^\circ$, 1p rezultatul.*

## Subiectul al II-lea (30 de puncte)

### 1. $D(x,y) = \begin{vmatrix}1&1&1\\1&x&y\\1&x+1&y+1\end{vmatrix}$, $x, y \in \mathbb Z$

Calcul general (util la toate punctele): scădem linia 2 din linia 3, apoi linia 1 din linia 2:

$$D(x,y) = \begin{vmatrix}1&1&1\\0&x-1&y-1\\0&1&1\end{vmatrix} = (x - 1) - (y - 1) = x - y.$$

#### a) $D(-1, 1)$

$$D(-1,1) = \begin{vmatrix}1&1&1\\1&-1&1\\1&0&2\end{vmatrix} = -2 + 1 + 0 + 1 - 0 - 2 = -2.$$

**Răspuns:** $-2$ (și $x - y = -1 - 1 = -2$ ✔). *Barem: 2p scrierea, 3p calculul.*

#### b) $x \in \mathbb Z$ cu $D(x, 2010) = 1$

$$D(x, 2010) = x - 2010 = 1 \iff x = 2011 \in \mathbb Z.$$

**Răspuns:** $x = 2011$. *Barem: 1p scrierea, 2p determinantul, 2p soluția.*

#### c) $D(x,y)\cdot D(x,-y) = D(x^2, y^2)$

$$D(x,y)\cdot D(x,-y) = (x - y)(x + y) = x^2 - y^2 = D(x^2, y^2). \ \blacksquare$$

*Barem: 2p $D(x,y)$, 2p celelalte, 1p finalizarea.*

### 2. $x * y = 2xy - 6x - 6y + 21$

#### a) $x * y = 2(x-3)(y-3) + 3$

$$x * y = 2x(y - 3) - 6(y - 3) + 3 = (y-3)(2x - 6) + 3 = 2(x-3)(y-3) + 3.$$

*Barem: 3p gruparea, 2p finalizarea.*

#### b) Legea este asociativă

$$(x*y)*z = 2\big(2(x-3)(y-3)\big)(z-3) + 3 = 4(x-3)(y-3)(z-3) + 3,$$

$$x*(y*z) = 2(x-3)\big(2(y-3)(z-3)\big) + 3 = 4(x-3)(y-3)(z-3) + 3.$$

*Barem: 2p + 2p, 1p finalizarea.*

#### c) $1 * 2 * \dots * 2011$

$x * 3 = 3 * x = 3$ pentru orice $x$. Deci

$$(1 * 2) * 3 * (4 * \dots * 2011) = 3.$$

**Răspuns:** $3$. *Barem: 3p elementul absorbant, 2p rezultatul.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x^3 + x^2 + x + 3^x$

#### a) $f'(0)$

$f'(x) = 3x^2 + 2x + 1 + 3^x\ln 3$, deci $f'(0) = 1 + \ln 3$.

**Răspuns:** $1 + \ln3$. *Barem: 3p derivata, 2p valoarea.*

#### b) $f$ este crescătoare pe $\mathbb R$

$$f'(x) = 2x^2 + (x+1)^2 + 3^x\ln 3 > 0,$$

pentru că primii doi termeni sunt $\ge 0$, iar $3^x\ln3 > 0$. Deci $f$ este (strict) crescătoare. *Barem: 3p semnul derivatei, 2p concluzia.*

#### c) $a^3 + a^2 + a - b^3 - b^2 - b \le 3^b - 3^a$ pentru $a \le b$

$f$ crescătoare și $a \le b$ $\Rightarrow$ $f(a) \le f(b)$:

$$a^3 + a^2 + a + 3^a \le b^3 + b^2 + b + 3^b \iff a^3 + a^2 + a - b^3 - b^2 - b \le 3^b - 3^a. \ \blacksquare$$

*Barem: 3p monotonia, 1p + 1p rearanjarea.*

### 2. $f_n:[0,1]\to\mathbb R$, $f_n(x) = x^ne^x$

#### a) $\displaystyle\int_0^1\frac{f_1(x)}{e^x}\,dx$

$$\int_0^1 x\,dx = \frac{x^2}{2}\Big|_0^1 = \frac12.$$

**Răspuns:** $\dfrac12$. *Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 f_1(x)\,dx$

Prin părți ($u = x$, $v' = e^x$):

$$\int_0^1 xe^x\,dx = xe^x\Big|_0^1 - \int_0^1 e^x\,dx = e - (e - 1) = 1.$$

**Răspuns:** $1$. *Barem: 2p formula, 2p calculul, 1p rezultatul.*

#### c) $\displaystyle\int_0^1 f_n(x^2)\,dx \ge \frac{1}{2n+1}$

$f_n(x^2) = x^{2n}e^{x^2}$, iar $e^{x^2} \ge 1$, deci $x^{2n}e^{x^2} \ge x^{2n}$ pe $[0,1]$. Integrând:

$$\int_0^1 f_n(x^2)\,dx \ge \int_0^1 x^{2n}\,dx = \frac{1}{2n+1}. \ \blacksquare$$

*Barem: 1p scrierea, 2p minorarea, 2p calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_6 = 2$ |
| I.2 | $\{-1, 0, 1\}$ |
| I.3 | $x = 7$ |
| I.4 | $240$ lei |
| I.5 | $y = x - 1$ |
| I.6 | $R = 3\sqrt3$ |
| II.1.a | $-2$ |
| II.1.b | $x = 2011$ |
| II.2.c | $3$ |
| III.1.a | $1 + \ln3$ |
| III.2.a | $\frac12$ |
| III.2.b | $1$ |

## Ce merită reținut din varianta 2

- **Mediatoarea** trece prin mijloc și e perpendiculară pe segment.
- **Determinanți cu linii aproape egale**: scade liniile între ele înainte de calcul.
- **Legea $2(x-3)(y-3) + 3$**: $3$ este element absorbant.
- **Inegalități din monotonie**: $a \le b \Rightarrow f(a) \le f(b)$ pentru $f$ crescătoare.
