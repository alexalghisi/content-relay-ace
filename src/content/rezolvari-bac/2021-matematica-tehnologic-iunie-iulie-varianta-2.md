Rezolvarea completă a subiectului de **Bacalaureat 2021 la Matematică M_tehnologic**, sesiunea iunie–iulie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $2\left(2 - \frac34 : \frac12\right) = 1$

$\frac34 : \frac12 = \frac34\cdot2 = \frac32$, deci $2\left(2 - \frac32\right) = 2\cdot\frac12 = 1$.

*Barem: 3p + 2p.*

### 2. $f(x) = x + 2$, $g(x) = x - 4$; arătați că $f(1) + g(1) = 0$

$f(1) = 3$, $g(1) = -3$, suma $0$. $\blacksquare$ *Barem: 2p + 3p.*

### 3. Ecuația $2^{4-x} = 4$

$2^{4-x} = 2^2 \iff 4 - x = 2 \iff x = 2$.

*Barem: 3p + 2p.*

### 4. Un produs costă 70 de lei; prețul după o scumpire cu 30%

Scumpirea: $\frac{30}{100}\cdot70 = 21$ lei. Prețul nou: $70 + 21 = 91$ de lei.

*Barem: 3p + 2p.*

### 5. Perimetrul triunghiului $A(-3,4)$, $B(-3,0)$, $C(0,4)$

$AB = 4$ (aceeași abscisă), $AC = 3$ (aceeași ordonată), $BC = \sqrt{9 + 16} = 5$.

$$P = 4 + 3 + 5 = 12.$$

*Barem: 2p + 3p.*

### 6. $AC = 2$, $BC = 4$, $\angle A = 30^\circ$; arătați că $\sin B = \frac14$

Teorema sinusurilor: $\dfrac{AC}{\sin B} = \dfrac{BC}{\sin A} \iff \dfrac2{\sin B} = \dfrac4{1/2} = 8 \iff \sin B = \dfrac14$. $\blacksquare$

*Barem: 3p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}3&-2\\2&1\end{pmatrix}$, $B = \begin{pmatrix}4&-3\\3&1\end{pmatrix}$

#### a) $\det A = 7$

$$\det A = 3\cdot1 - (-2)\cdot2 = 7.$$

*Barem: 3p + 2p.*

#### b) $2B + I_2 = 3A$

$$2B + I_2 = \begin{pmatrix}9&-6\\6&3\end{pmatrix} = 3\begin{pmatrix}3&-2\\2&1\end{pmatrix} = 3A.$$

*Barem: 3p + 2p.*

#### c) $X$ cu $A\cdot X - B\cdot X = I_2 - X$

$$AX - BX + X = I_2 \iff (A - B + I_2)X = I_2,\quad A - B + I_2 = \begin{pmatrix}0&1\\-1&1\end{pmatrix},\ \det = 1.$$

Deci $X = (A - B + I_2)^{-1} = \begin{pmatrix}1&-1\\1&0\end{pmatrix}$ (verificare: $\begin{pmatrix}0&1\\-1&1\end{pmatrix}\begin{pmatrix}1&-1\\1&0\end{pmatrix} = I_2$).

*Barem: 2p + 3p.*

### 2. Legea $x * y = 3 - (x - 3)(y - 3)$

#### a) $1 * 3 = 3$

$$1 * 3 = 3 - (-2)\cdot0 = 3.$$

*Barem: 3p + 2p.*

#### b) $e = 2$ este elementul neutru

$x * 2 = 3 - (x - 3)(-1) = 3 + x - 3 = x$, iar $2 * x = 3 - (-1)(x - 3) = x$. $\blacksquare$ *Barem: 2p + 3p.*

#### c) $x$ cu $x * (x + 6) \ge 3$

$$x * (x+6) = 3 - (x - 3)(x + 3) \ge 3 \iff (x - 3)(x + 3) \le 0 \iff x \in [-3, 3].$$

*Barem: 2p + 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,\infty)\to\mathbb R$, $f(x) = \dfrac4x + \ln x - 5$

#### a) $f'(x) = \dfrac{x - 4}{x^2}$

$$f'(x) = -\frac4{x^2} + \frac1x = \frac{x - 4}{x^2}.$$

*Barem: 3p + 2p.*

#### b) Intervalele de monotonie

$f'(x) = 0 \iff x = 4$. $f' \le 0$ pe $(0,4]$ — $f$ **descrescătoare**; $f' \ge 0$ pe $[4,\infty)$ — $f$ **crescătoare**.

*Barem: 2p + 3p.*

#### c) Graficul nu are asimptotă spre $+\infty$

$\lim\limits_{x\to\infty}f(x) = 0 + \infty - 5 = +\infty$ — nu există asimptotă orizontală.

$m = \lim\limits_{x\to\infty}\dfrac{f(x)}x = \lim\left(\dfrac4{x^2} + \dfrac{\ln x}x - \dfrac5x\right) = 0$, iar $\lim(f(x) - 0\cdot x) = +\infty$ — nu există nici asimptotă oblică. $\blacksquare$ *Barem: 3p + 2p.*

### 2. $f(x) = e^x + 3x^2 + 3$

#### a) $\displaystyle\int_1^2\left(f(x) - e^x - 3\right)dx = 7$

$$\int_1^23x^2dx = x^3\Big|_1^2 = 8 - 1 = 7.$$

*Barem: 3p + 2p.*

#### b) $\displaystyle\int_0^1x\left(f(x) - 3x^2\right)dx = \frac52$

$$\int_0^1(xe^x + 3x)dx = (xe^x - e^x)\Big|_0^1 + \frac{3x^2}2\Big|_0^1 = (0 - (-1)) + \frac32 = \frac52.$$

*Barem: 3p + 2p.*

#### c) $a \in (0,1)$ cu $\displaystyle\int_0^a\frac{dx}{f(x) - f'(x)} = \frac16$

$f'(x) = e^x + 6x$, deci $f(x) - f'(x) = 3x^2 - 6x + 3 = 3(x - 1)^2$.

$$\int_0^a\frac{dx}{3(x-1)^2} = -\frac13\cdot\frac1{x - 1}\Big|_0^a = -\frac13\left(\frac1{a - 1} + 1\right).$$

$-\dfrac13\left(\dfrac1{a-1} + 1\right) = \dfrac16 \iff \dfrac1{a-1} = -\dfrac32 \iff a - 1 = -\dfrac23 \iff a = \dfrac13$ (convine).

**Răspuns:** $a = \dfrac13$. *Barem: 3p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.3 | $x = 2$ |
| I.4 | $91$ lei |
| I.5 | $P = 12$ |
| II.1.c | $X = \begin{pmatrix}1&-1\\1&0\end{pmatrix}$ |
| II.2.c | $x \in [-3,3]$ |
| III.1.b | descrescătoare pe $(0,4]$, crescătoare pe $[4,\infty)$ |
| III.2.c | $a = \frac13$ |

## Ce merită reținut din varianta 2

- **Ecuații matriceale:** grupează termenii cu $X$ și dă factor comun la stânga.
- **Nicio asimptotă spre $+\infty$:** verifică și orizontala, și oblica.
- **$f - f'$** simplifică exponențiala și lasă un pătrat perfect.
