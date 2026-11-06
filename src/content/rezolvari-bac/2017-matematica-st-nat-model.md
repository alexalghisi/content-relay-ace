Rezolvarea completă a subiectului de **Bacalaureat 2017 la Matematică M_șt-nat**, **modelul oficial** publicat de CNEE. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z = 1 - i$; arătați că $z^2 + 2i = 0$

$$z^2 = (1-i)^2 = 1 - 2i + i^2 = -2i, \qquad z^2 + 2i = -2i + 2i = 0.$$

*Barem: 2p dezvoltarea, 3p finalizarea.*

### 2. $(g\circ f)(0)$ pentru $f(x) = x + 2017$, $g(x) = x - 2017$

$f(0) = 2017$, deci $(g\circ f)(0) = g(2017) = 0$.

**Răspuns:** $0$. *Barem: 2p $f(0)$, 3p rezultatul.*

### 3. Ecuația $3^{x^2 - 3x} = 3^{x - 4}$

$$x^2 - 3x = x - 4 \iff x^2 - 4x + 4 = 0 \iff (x-2)^2 = 0 \iff x = 2.$$

**Răspuns:** $x = 2$. *Barem: 3p ecuația, 2p soluția.*

### 4. Probabilitatea ca un număr din $\{1, \dots, 100\}$ să fie pătrat perfect

- Cazuri posibile: **100**.
- Pătrate perfecte: $1^2, 2^2, \dots, 10^2$ — **10**.

$$p = \frac{10}{100} = \frac1{10}.$$

*Barem: 1p posibile, 2p favorabile, 2p probabilitatea.*

### 5. Dreapta prin $A(0,1)$, perpendiculară pe $y = x - 10$

Panta dreptei date este $1$; o perpendiculară are panta $m$ cu $m\cdot 1 = -1$, deci $m = -1$.

$$d: y - 1 = -1\cdot(x - 0) \iff y = -x + 1.$$

**Răspuns:** $d: y = -x + 1$. *Barem: 2p panta, 3p ecuația.*

### 6. Aria triunghiului cu $AB = 6$, $AC = 4$, $A = \frac\pi6$

$$\mathcal A = \frac{AB\cdot AC\cdot\sin A}{2} = \frac{6\cdot 4\cdot\frac12}{2} = 6.$$

**Răspuns:** $6$. *Barem: 3p formula, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(m) = \begin{pmatrix}m-1 & -1\\2 & m-2\end{pmatrix}$

#### a) $\det(A(0))$

$$\det\begin{pmatrix}-1 & -1\\2 & -2\end{pmatrix} = (-1)(-2) - (-1)\cdot 2 = 2 + 2 = 4.$$

**Răspuns:** $4$. *Barem: 2p scrierea, 3p calculul.*

#### b) $A(1+m) + A(1-m) = 2A(1)$

$$A(1+m) + A(1-m) = \begin{pmatrix}m & -1\\2 & m-1\end{pmatrix} + \begin{pmatrix}-m & -1\\2 & -m-1\end{pmatrix} = \begin{pmatrix}0 & -2\\4 & -2\end{pmatrix} = 2\begin{pmatrix}0 & -1\\2 & -1\end{pmatrix} = 2A(1).$$

*Barem: 3p suma, 2p finalizarea.*

#### c) $A(m)$ este inversabilă pentru orice $m$

$$\det(A(m)) = (m-1)(m-2) + 2 = m^2 - 3m + 4.$$

Discriminantul $\Delta = 9 - 16 = -7 < 0$, deci $m^2 - 3m + 4 > 0$ pentru orice $m$ real; $\det \ne 0$, deci $A(m)$ este inversabilă. *Barem: 2p determinantul, 3p concluzia.*

### 2. $x * y = -3xy + 9x + 9y - 24$

#### a) $x * y = -3(x-3)(y-3) + 3$

$$x * y = -3xy + 9x + 9y - 27 + 3 = -3x(y-3) + 9(y-3) + 3 = -3(x-3)(y-3) + 3.$$

*Barem: 2p rescrierea, 3p factorizarea.*

#### b) Legea este asociativă

$$(x*y)*z = -3\big(-3(x-3)(y-3)\big)(z-3) + 3 = 9(x-3)(y-3)(z-3) + 3,$$

$$x*(y*z) = -3(x-3)\big(-3(y-3)(z-3)\big) + 3 = 9(x-3)(y-3)(z-3) + 3.$$

Rezultatele coincid, deci legea este asociativă. *Barem: 2p $(x*y)*z$, 3p $x*(y*z)$ și concluzia.*

#### c) $(x*x)*x = 12$

Din b): $(x*x)*x = 9(x-3)^3 + 3$.

$$9(x-3)^3 + 3 = 12 \iff (x-3)^3 = 1 \iff x - 3 = 1 \iff x = 4.$$

**Răspuns:** $x = 4$. *Barem: 2p expresia, 3p soluția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,+\infty) \to \mathbb R$, $f(x) = x^3 - 3\ln x$

#### a) $f'(x) = \dfrac{3(x-1)(x^2+x+1)}{x}$

$$f'(x) = 3x^2 - \frac3x = \frac{3x^3 - 3}{x} = \frac{3(x^3 - 1)}{x} = \frac{3(x-1)(x^2+x+1)}{x}.$$

*Barem: 3p derivarea, 2p factorizarea.*

#### b) Asimptota verticală

$$\lim_{x\searrow0}(x^3 - 3\ln x) = 0 - 3\cdot(-\infty) = +\infty,$$

deci dreapta $x = 0$ este asimptotă verticală. *Barem: 2p limita, 3p concluzia.*

#### c) $f(x) \ge 1$ pentru $x > 0$

$x^2 + x + 1 > 0$ și $x > 0$, deci semnul lui $f'$ este semnul lui $x - 1$: $f' \le 0$ pe $(0,1]$, $f' \ge 0$ pe $[1,+\infty)$. Minimul este $f(1) = 1 - 0 = 1$, deci $f(x) \ge 1$. $\blacksquare$

*Barem: 1p $f'(x) = 0 \iff x = 1$, 2p monotonia, 2p concluzia.*

### 2. $f(x) = \dfrac{2x + 3}{x^2 + 3x + 3}$

(Numitorul are $\Delta = 9 - 12 < 0$, deci e pozitiv.)

#### a) $\displaystyle\int_1^2 (x^2 + 3x + 3)f(x)\,dx$

$$\int_1^2 (2x + 3)\,dx = (x^2 + 3x)\Big|_1^2 = 10 - 4 = 6.$$

**Răspuns:** $6$. *Barem: 3p primitiva, 2p calculul.*

#### b) Aria între grafic, $Ox$, $x = 0$, $x = 3$ este $\ln 7$

Pe $[0,3]$, $f(x) > 0$, iar numărătorul este derivata numitorului:

$$\mathcal A = \int_0^3 \frac{2x+3}{x^2+3x+3}\,dx = \ln(x^2+3x+3)\Big|_0^3 = \ln 21 - \ln 3 = \ln 7.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $\displaystyle\int_{-1}^0 f'(x)f(x)\,dx = 0$

$$\int_{-1}^0 f'(x)f(x)\,dx = \frac{f^2(x)}{2}\Big|_{-1}^0 = \frac12\big(f^2(0) - f^2(-1)\big).$$

$f(0) = \dfrac33 = 1$, $f(-1) = \dfrac{1}{1 - 3 + 3} = 1$, deci integrala este $\frac12(1 - 1) = 0$. $\blacksquare$ *Barem: 3p primitiva, 2p calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $0$ |
| I.3 | $x = 2$ |
| I.4 | $p = \frac1{10}$ |
| I.5 | $y = -x + 1$ |
| I.6 | aria $= 6$ |
| II.1.a | $4$ |
| II.2.c | $x = 4$ |
| III.1.b | $x = 0$ |
| III.2.a | $6$ |
| III.2.b | $\ln 7$ |

## Ce merită reținut din model

- **Drepte perpendiculare**: produsul pantelor este $-1$.
- **Legea $-3(x-3)(y-3) + 3$**: compunerea a trei elemente dă $9(x-3)(y-3)(z-3) + 3$.
- **Matrice inversabilă pentru orice $m$**: determinantul este un trinom cu $\Delta < 0$.
- **$\int \frac{u'}{u} = \ln|u|$** și **$\int u u' = \frac{u^2}{2}$** — cele două forme care apar la aproape fiecare variantă.
