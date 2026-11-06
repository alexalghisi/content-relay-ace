Rezolvarea completă a subiectului de **Bacalaureat 2019 la Matematică M_mate-info**, sesiunea specială, **varianta 8**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z_1 = 3 - i$, $z_2 = 8 - 3i$: arătați că $|3z_1 - z_2| = 1$

$3z_1 - z_2 = 9 - 3i - 8 + 3i = 1$, deci modulul este $1$. $\blacksquare$ *Barem: 2p, 3p.*

### 2. $f(x) = x - 5$: determinați $a$ cu $f(a) + f(a + 1) = 35$

$(a - 5) + (a + 1 - 5) = 35 \iff 2a - 9 = 35 \iff a = 22$. *Barem: 2p, 3p.*

### 3. Ecuația $2\cdot 4^x - 4^{x+1} + 32 = 0$

$4^x(2 - 4) + 32 = 0 \iff 4^x = 16 \iff x = 2$.

**Răspuns:** $x = 2$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr natural de o cifră să verifice $n(n+1) \ge 42$

10 cazuri posibile ($0, \dots, 9$). $5\cdot 6 = 30 < 42$, $6\cdot 7 = 42$ ✔, deci $n \in \{6, 7, 8, 9\}$ — 4 cazuri favorabile.

$$p = \frac{4}{10} = \frac25.$$

*Barem: 2p, 2p, 1p.*

### 5. $A(8,4)$, $B(0,6)$, $C(m, 5)$ cu $AC = CB$

Observăm că $5 = \frac{4 + 6}{2}$. Calcul direct: $AC^2 = (m - 8)^2 + 1$, $CB^2 = m^2 + 1$, deci $(m-8)^2 = m^2 \iff -16m + 64 = 0 \iff m = 4$ — $C$ este chiar mijlocul lui $AB$.

**Răspuns:** $m = 4$. *Barem: 2p, 3p.*

### 6. Ipotenuza $BC$, $AB = 6$, aria $= 24$

$\mathcal A = \frac{AB\cdot AC}{2} \Rightarrow 24 = 3AC \Rightarrow AC = 8$; Pitagora: $BC = \sqrt{36 + 64} = 10$.

**Răspuns:** $BC = 10$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}a + 1 & 0 & 0\\ 0 & 1 & \ln(a+1)\\ 0 & 0 & 1\end{pmatrix}$, $a > 0$

**a)** $A(1)$ este triunghiulară: $\det A(1) = 2\cdot 1\cdot 1 = 2$. $\blacksquare$ *Barem: 2p, 3p.*

**b)** $$A(a)A(b) = \begin{pmatrix}(a+1)(b+1) & 0 & 0\\ 0 & 1 & \ln(b+1) + \ln(a+1)\\ 0 & 0 & 1\end{pmatrix}.$$

Cum $(a+1)(b+1) = (ab + a + b) + 1$ și $\ln(a+1) + \ln(b+1) = \ln\big((ab + a + b) + 1\big)$, produsul este $A(ab + a + b)$. $\blacksquare$

*Barem: 3p, 2p.*

**c)** Din b), parametrul „$c + 1$” se înmulțește: $A(a)A(a) = A\big((a+1)^2 - 1\big)$, $A(a)^3 = A\big((a+1)^3 - 1\big)$.

$(a + 1)^3 - 1 = 7 \iff (a+1)^3 = 8 \iff a = 1$.

**Răspuns:** $a = 1$. *Barem: 2p, 3p.*

### 2. $f = X^3 + mX^2 - mX + 2$

**a)** $f(-2) = -8 + 4m + 2m + 2 = 6m - 6 = 0 \iff m = 1$. *Barem: 3p, 2p.*

**b)** Pentru $m = 1$, $-2$ este rădăcină; împărțind: $f = (X + 2)(X^2 - X + 1)$. Ecuația $x^2 - x + 1 = 0$ are $\Delta = -3$:

**Răspuns:** $x_1 = -2$, $x_{2,3} = \dfrac{1 \pm i\sqrt3}{2}$. *Barem: 2p, 3p.*

**c)** Amplificăm fiecare fracție cu $x_k$ (numitorul devine $x_1x_2x_3 = -2$):

$$a = \frac{x_1^3 + mx_1^2 + x_2^3 + mx_2^2 + x_3^3 + mx_3^2}{x_1x_2x_3}.$$

Din $f(x_k) = 0$: $x_k^3 + mx_k^2 = mx_k - 2$. Cu $x_1 + x_2 + x_3 = -m$:

$$a = \frac{m(x_1 + x_2 + x_3) - 6}{-2} = \frac{-m^2 - 6}{-2} = \frac{m^2 + 6}{2} \ge 3.\ \blacksquare$$

*Barem: 2p Viète, 3p calculul.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = e^x(x^2 + 4x + 1)$

**a)** $f'(x) = e^x(x^2 + 4x + 1) + e^x(2x + 4) = e^x(x^2 + 6x + 5) = e^x(x + 5)(x + 1)$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** Tangenta paralelă cu $Ox \iff f'(x_0) = 0 \iff x_0 \in \{-5, -1\}$. *Barem: 2p, 3p.*

**c)** Tabelul de variație: $f$ crește pe $(-\infty, -5]$, scade pe $[-5, -1]$, crește pe $[-1, +\infty)$.

$$\lim_{x\to-\infty}f(x) = 0,\quad f(-5) = e^{-5}(25 - 20 + 1) = \frac{6}{e^5},\quad f(-1) = e^{-1}(1 - 4 + 1) = -\frac2e,\quad \lim_{x\to+\infty}f(x) = +\infty.$$

Pe $(-\infty, -5)$ valorile sunt $\left(0, \frac6{e^5}\right)$, pe $(-5, -1)$: $\left(-\frac2e, \frac6{e^5}\right)$, pe $(-1, +\infty)$: $\left(-\frac2e, +\infty\right)$. Trei soluții (câte una pe fiecare interval) $\iff a \in \left(0, \frac{6}{e^5}\right)$.

**Răspuns:** $a \in \left(0, \dfrac{6}{e^5}\right)$. *Barem: 2p, 3p.*

### 2. $f(x) = \dfrac{1}{\ln x}$, $x > 1$

**a)** Dacă $F$ e primitivă, $F'(x) = \frac{1}{\ln x} > 0$ pe $(1, +\infty)$ (deoarece $\ln x > 0$), deci $F$ este strict crescătoare. $\blacksquare$ *Barem: 2p, 3p.*

**b)** $\dfrac1x f(x) = \dfrac{(\ln x)'}{\ln x}$:

$$\int_e^{e^2}\frac{1}{x\ln x}dx = \ln(\ln x)\Big|_e^{e^2} = \ln 2 - \ln 1 = \ln 2.$$

**Răspuns:** $\ln 2$. *Barem: 3p, 2p.*

**c)** $g(x) = \ln x > 0$ pe $[e, a]$:

$$\mathcal A = \int_e^a\ln x\,dx = (x\ln x - x)\Big|_e^a = a\ln a - a - (e - e) = a\ln a - a.$$

$a\ln a - a = 2a \iff \ln a = 3 \iff a = e^3$ (și $e^3 > e$).

**Răspuns:** $a = e^3$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 22$ |
| I.3 | $x = 2$ |
| I.4 | $p = \tfrac25$ |
| I.5 | $m = 4$ |
| I.6 | $BC = 10$ |
| II.1.c | $a = 1$ |
| II.2.a | $m = 1$ |
| II.2.b | $-2$, $\frac{1\pm i\sqrt3}{2}$ |
| III.1.b | $x_0 \in \{-5, -1\}$ |
| III.1.c | $a \in (0, \tfrac6{e^5})$ |
| III.2.b | $\ln 2$ |
| III.2.c | $a = e^3$ |

## Ce merită reținut din varianta 8

- **$A(a)A(b) = A(ab + a + b)$** înseamnă că $a + 1$ se înmulțește — scrie $a + 1 = t$.
- **Expresii cu rădăcini:** folosește $f(x_k) = 0$ pentru a coborî gradul.
- **$\int\frac{1}{x\ln x}dx = \ln(\ln x)$.**
