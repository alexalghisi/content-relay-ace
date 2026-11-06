Rezolvarea completă a subiectului de **Bacalaureat 2017 la Matematică M_mate-info**, sesiunea specială, **varianta 4**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Suma numerelor întregi din intervalul $(-5, 5)$

Numerele sunt $-4, -3, \dots, 3, 4$; se anulează două câte două:

$$(-4) + (-3) + \dots + 3 + 4 = 0.$$

**Răspuns:** $0$. *Barem: 3p scrierea numerelor, 2p suma.*

### 2. $f(x) = x^2 - 1$; calculați $(f\circ f)(1)$

$f(1) = 0$, deci $(f\circ f)(1) = f(0) = -1$.

**Răspuns:** $-1$. *Barem: 2p $f(1)$, 3p $f(0)$.*

### 3. Ecuația $\sqrt{x+3} = x - 3$

**Condiții:** $x + 3 \ge 0$ și $x - 3 \ge 0$ (radicalul e nenegativ), deci $x \ge 3$. Ridicăm la pătrat:

$$x + 3 = x^2 - 6x + 9 \iff x^2 - 7x + 6 = 0 \iff x \in \{1, 6\}.$$

$x = 1$ nu convine ($1 < 3$); $x = 6$: $\sqrt9 = 3 = 6 - 3$ ✔.

**Răspuns:** $x = 6$. *Barem: 3p ecuația de gradul 2, 2p selectarea soluției.*

### 4. Probabilitatea ca un număr din $\{1, 2, \dots, 100\}$ să fie multiplu de 11

- Cazuri posibile: **100**.
- Multipli de 11: $11, 22, \dots, 99$ — **9**.

$$p = \frac{9}{100}.$$

*Barem: 2p posibile, 2p favorabile, 1p probabilitatea.*

### 5. $M(2,2)$, $N(4,2)$; $P \in Ox$ cu $PM = PN$

$P(x_P, 0)$. $PM = PN \iff PM^2 = PN^2$:

$$(2 - x_P)^2 + 4 = (4 - x_P)^2 + 4 \iff 4 - 4x_P = 16 - 8x_P \iff x_P = 3.$$

**Răspuns:** $P(3, 0)$. *Barem: 2p $y_P = 0$, 3p $x_P = 3$.*

### 6. Raza cercului circumscris, $AB = 6\sqrt2$, $C = \frac\pi4$

Teorema sinusurilor:

$$\frac{AB}{\sin C} = 2R \Rightarrow R = \frac{6\sqrt2}{2\cdot\frac{\sqrt2}{2}} = 6.$$

**Răspuns:** $R = 6$. *Barem: 3p teorema sinusurilor, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}1&1&1\\1&2^x&4^x\\1&x&2x\end{pmatrix}$

#### a) $\det(A(1)) = 1$

$$\det\begin{pmatrix}1&1&1\\1&2&4\\1&1&2\end{pmatrix} = 4 + 4 + 1 - 2 - 4 - 2 = 1.$$

*Barem: 2p scrierea, 3p calculul.*

#### b) $\det(A(x)) = (2^x - 1)(2^x + x - x\cdot 2^x)$

Scădem prima linie din celelalte și dezvoltăm după prima coloană:

$$\det(A(x)) = \begin{vmatrix}2^x - 1 & 4^x - 1\\x - 1 & 2x - 1\end{vmatrix} = (2^x - 1)(2x - 1) - (2^x-1)(2^x+1)(x-1).$$

$$= (2^x - 1)\big[2x - 1 - x\cdot 2^x + 2^x - x + 1\big] = (2^x - 1)(2^x + x - x\cdot 2^x).$$

*Barem: 3p transformarea, 2p factorizarea.*

#### c) Suma $A(1) + A(2) + \dots + A(2017)$

Adunăm element cu element:

- prima linie: $2017, 2017, 2017$;
- linia a doua: $2017$, $\displaystyle\sum_{k=1}^{2017}2^k = \frac{2(2^{2017}-1)}{2-1} = 2(2^{2017}-1)$, $\displaystyle\sum_{k=1}^{2017}4^k = \frac{4(4^{2017}-1)}{3}$;
- linia a treia: $2017$, $1 + 2 + \dots + 2017 = \dfrac{2017\cdot2018}{2} = 2017\cdot 1009$, $2(1 + \dots + 2017) = 2017\cdot 2018$.

$$\sum_{k=1}^{2017}A(k) = \begin{pmatrix}2017 & 2017 & 2017\\2017 & 2(2^{2017}-1) & \frac43(4^{2017}-1)\\2017 & 2017\cdot1009 & 2017\cdot 2018\end{pmatrix}.$$

*Barem: 3p sumele, 2p progresiile geometrice.*

### 2. $x * y = 7xy + 7x + 7y + 6$ (asociativă)

#### a) $x * y = 7(x+1)(y+1) - 1$

$$x * y = 7xy + 7x + 7y + 7 - 1 = 7x(y+1) + 7(y+1) - 1 = 7(x+1)(y+1) - 1.$$

*Barem: 2p rescrierea, 3p factorizarea.*

#### b) $x * x * x = x$

$x * x = 7(x+1)^2 - 1$, apoi $x * x * x = 7\cdot 7(x+1)^2(x+1) - 1 = 49(x+1)^3 - 1$.

$$49(x+1)^3 - 1 = x \iff (x+1)\big(49(x+1)^2 - 1\big) = 0.$$

$x + 1 = 0$ sau $x + 1 = \pm\frac17$.

**Răspuns:** $x \in \left\{-\frac87, -1, -\frac67\right\}$. *Barem: 2p $x*x*x$, 3p soluțiile.*

#### c) $a, b, c \in \mathbb N$ cu $a * b * c = 48$ sunt egale

$$a * b * c = 49(a+1)(b+1)(c+1) - 1 = 48 \iff (a+1)(b+1)(c+1) = 1.$$

Factorii sunt naturali $\ge 1$, deci toți sunt $1$: $a = b = c = 0$. $\blacksquare$ *Barem: 2p ecuația, 3p concluzia.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x^2 - 3}{e^x}$

#### a) $f'(x) = \dfrac{-x^2 + 2x + 3}{e^x}$

$$f'(x) = \frac{2x\cdot e^x - (x^2-3)e^x}{e^{2x}} = \frac{-x^2 + 2x + 3}{e^x}.$$

*Barem: 3p regula câtului, 2p simplificarea.*

#### b) Tangenta în $x = -1$

$f(-1) = \dfrac{1 - 3}{e^{-1}} = -2e$, $f'(-1) = \dfrac{-1 - 2 + 3}{e^{-1}} = 0$.

**Răspuns:** $y = -2e$. *Barem: 2p valorile, 3p ecuația.*

#### c) $-2e \le f(x) \le \dfrac6{e^3}$ pentru $x \in [-1, +\infty)$

$f'(x) = 0 \iff -x^2 + 2x + 3 = 0 \iff x \in \{-1, 3\}$; $f' \ge 0$ pe $[-1, 3]$, $f' \le 0$ pe $[3, +\infty)$.

- $f$ crescătoare pe $[-1,3]$: $f(-1) = -2e \le f(x) \le f(3) = \dfrac{6}{e^3}$;
- $f$ descrescătoare pe $[3, +\infty)$ cu $\lim\limits_{x\to+\infty}f(x) = 0$: $0 < f(x) \le \dfrac6{e^3}$.

Deci $-2e \le f(x) \le \dfrac{6}{e^3}$ pe $[-1, +\infty)$. $\blacksquare$ *Barem: 1p rădăcinile, 2p monotonia, 2p concluzia.*

### 2. $f(x) = \dfrac{\sqrt x}{(x+1)^2}$, $x > 0$

#### a) $\displaystyle\int_1^2 \frac{x+1}{\sqrt x}f(x)\,dx = \ln\frac32$

$$\int_1^2 \frac{1}{x+1}\,dx = \ln(x+1)\Big|_1^2 = \ln 3 - \ln 2 = \ln\frac32.$$

*Barem: 2p simplificarea, 3p calculul.*

#### b) Orice primitivă a lui $f$ este strict crescătoare

$F' = f$, iar $f(x) = \dfrac{\sqrt x}{(x+1)^2} > 0$ pe $(0, +\infty)$, deci $F$ este strict crescătoare. *Barem: 2p $F' = f$, 3p semnul.*

#### c) $m > 0$ cu aria $1 - \ln\dfrac{m+1}{m}$, pentru $g(x) = \sqrt x(x+1)f(x)$

$g(x) = \dfrac{x}{x+1} = 1 - \dfrac{1}{x+1} > 0$:

$$\mathcal A = \int_1^2 \left(1 - \frac1{x+1}\right)dx = \big(x - \ln(x+1)\big)\Big|_1^2 = 1 - \ln\frac32.$$

$\ln\dfrac{m+1}{m} = \ln\dfrac32 \iff 2m + 2 = 3m \iff m = 2$.

**Răspuns:** $m = 2$. *Barem: 3p aria, 2p valoarea lui $m$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $0$ |
| I.2 | $-1$ |
| I.3 | $x = 6$ |
| I.4 | $p = \frac{9}{100}$ |
| I.5 | $P(3, 0)$ |
| I.6 | $R = 6$ |
| II.2.b | $x \in \{-\frac87, -1, -\frac67\}$ |
| II.2.c | $a = b = c = 0$ |
| III.1.b | $y = -2e$ |
| III.2.c | $m = 2$ |

## Ce merită reținut din varianta 4

- **Ecuații iraționale**: pune condiția ca membrul drept să fie $\ge 0$ înainte de ridicarea la pătrat.
- **Legea $7(x+1)(y+1) - 1$**: compunerea a $n$ elemente dă $7^{n-1}\prod(x_i+1) - 1$.
- **Sume de matrice**: progresii aritmetice și geometrice pe fiecare poziție.
- **Încadrarea unei funcții pe un interval nemărginit**: monotonie + valori în extreme + limita la infinit.
