Rezolvarea completă a subiectului de **Bacalaureat 2026 la Matematică M_șt-nat**, sesiunea specială, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $2\sqrt2\left(3 + \sqrt2\right) + 3\left(1 - 2\sqrt2\right) = 7$

Desfacem parantezele:

$$2\sqrt2\cdot 3 + 2\sqrt2\cdot\sqrt2 + 3 - 6\sqrt2 = 6\sqrt2 + 2\cdot 2 + 3 - 6\sqrt2.$$

Termenii $6\sqrt2$ și $-6\sqrt2$ se reduc, iar $\sqrt2\cdot\sqrt2 = 2$:

$$= 4 + 3 = 7.$$

*Barem: 2p desfacerea parantezelor, 3p finalizarea.*

### 2. $f(x) = 3x - 10$: determinați $a$ cu $f(2a) = f(a) - 3$

$f(2a) = 6a - 10$ și $f(a) = 3a - 10$. Ecuația devine:

$$6a - 10 = 3a - 10 - 3 \iff 3a = -3 \iff a = -1.$$

**Verificare:** $f(-2) = -16$ și $f(-1) - 3 = -13 - 3 = -16$ ✔.

**Răspuns:** $a = -1$. *Barem: 2p expresiile, 3p rezolvarea ecuației.*

### 3. Ecuație irațională: $\sqrt{4x^2 - 6x + 5} = x\sqrt3$

**Condiții:** membrul stâng este $\ge 0$, deci trebuie $x\sqrt3 \ge 0$, adică $x \ge 0$. (Expresia de sub radical, $4x^2 - 6x + 5$, are discriminantul $36 - 80 < 0$, deci e mereu pozitivă.)

Ridicăm la pătrat (ambii membri nenegativi):

$$4x^2 - 6x + 5 = 3x^2 \iff x^2 - 6x + 5 = 0 \iff (x - 1)(x - 5) = 0,$$

deci $x_1 = 1$, $x_2 = 5$, ambele $\ge 0$.

**Verificare:** $x = 1$: $\sqrt{3} = \sqrt3$ ✔; $x = 5$: $\sqrt{100 - 30 + 5} = \sqrt{75} = 5\sqrt3$ ✔.

**Răspuns:** $x \in \{1, 5\}$. *Barem: 2p ecuația de gradul II, 3p soluțiile care convin.*

### 4. Probabilitatea ca un număr de două cifre să aibă suma cifrelor cel mult 3

**Cazuri posibile:** numerele de la 10 la 99, adică 90.

**Cazuri favorabile:** $\overline{ab}$ cu $a \ge 1$ și $a + b \le 3$:

- $a = 1$: $b \in \{0, 1, 2\}$ → $10, 11, 12$;
- $a = 2$: $b \in \{0, 1\}$ → $20, 21$;
- $a = 3$: $b = 0$ → $30$.

În total 6 numere.

$$p = \frac{6}{90} = \frac{1}{15}.$$

**Răspuns:** $p = \dfrac{1}{15}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(0, 3)$, $B(1, 5)$, $C(6, 0)$: arătați că triunghiul $ABC$ este dreptunghic în $A$

Calculăm pantele dreptelor care pleacă din $A$:

$$m_{AB} = \frac{5 - 3}{1 - 0} = 2, \qquad m_{AC} = \frac{0 - 3}{6 - 0} = -\frac12.$$

$m_{AB}\cdot m_{AC} = 2\cdot\left(-\tfrac12\right) = -1$, deci $AB \perp AC$ și unghiul $A$ este drept. $\blacksquare$

(Alternativ, cu reciproca teoremei lui Pitagora: $AB^2 = 5$, $AC^2 = 45$, $BC^2 = 50 = AB^2 + AC^2$.) *Barem: 2p $m_{AB}$, 3p $m_{AC}$ și concluzia.*

### 6. $E(x) = \cos x\cdot\sin 3x - \sin 2x$: arătați că $E\left(\dfrac\pi6\right) = 0$

Pentru $x = \dfrac\pi6$: $3x = \dfrac\pi2$ și $2x = \dfrac\pi3$. Valorile: $\cos\dfrac\pi6 = \dfrac{\sqrt3}{2}$, $\sin\dfrac\pi2 = 1$, $\sin\dfrac\pi3 = \dfrac{\sqrt3}{2}$.

$$E\left(\frac\pi6\right) = \frac{\sqrt3}{2}\cdot 1 - \frac{\sqrt3}{2} = 0.$$

*Barem: 3p valorile trigonometrice, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $I_2$ și $A(x) = \begin{pmatrix}2x + 1 & 0\\ 4x & x + 1\end{pmatrix}$

**a)** Arătați că $\det(A(1)) = 6$.

$A(1) = \begin{pmatrix}3 & 0\\ 4 & 2\end{pmatrix}$, deci $\det(A(1)) = 3\cdot 2 - 0\cdot 4 = 6$.

*Barem: 3p scrierea determinantului, 2p calculul.*

**b)** Determinați $x$ pentru care $A(-2)\cdot A(1) - 4I_2 = A(x)$.

$A(-2) = \begin{pmatrix}-3 & 0\\ -8 & -1\end{pmatrix}$.

$$A(-2)\cdot A(1) = \begin{pmatrix}-3 & 0\\ -8 & -1\end{pmatrix}\begin{pmatrix}3 & 0\\ 4 & 2\end{pmatrix} = \begin{pmatrix}-9 & 0\\ -24 - 4 & -2\end{pmatrix} = \begin{pmatrix}-9 & 0\\ -28 & -2\end{pmatrix}.$$

$$A(-2)\cdot A(1) - 4I_2 = \begin{pmatrix}-13 & 0\\ -28 & -6\end{pmatrix}.$$

Egalăm cu $A(x)$: din $2x + 1 = -13$ rezultă $x = -7$; verificăm și celelalte elemente: $4\cdot(-7) = -28$ ✔, $-7 + 1 = -6$ ✔. Deci matricea obținută este exact $A(-7)$.

**Răspuns:** $x = -7$. *Barem: 2p produsul, 3p identificarea cu $A(-7)$.*

**c)** Demonstrați că $\det\left(A(x) + A\left(\tfrac1x\right) - 2I_2\right) \ge 8$ pentru orice $x \ne 0$.

$$A(x) + A\left(\tfrac1x\right) - 2I_2 = \begin{pmatrix}2x + 1 + \frac2x + 1 - 2 & 0\\ 4x + \frac4x & x + 1 + \frac1x + 1 - 2\end{pmatrix} = \begin{pmatrix}2x + \frac2x & 0\\ 4x + \frac4x & x + \frac1x\end{pmatrix}.$$

Matricea este triunghiulară, deci determinantul este produsul elementelor de pe diagonală:

$$\det = \left(2x + \frac2x\right)\left(x + \frac1x\right) = 2\left(x + \frac1x\right)^2 = 2\left(x^2 + 2 + \frac{1}{x^2}\right).$$

Scriem $x^2 + 2 + \dfrac{1}{x^2} = \left(x - \dfrac1x\right)^2 + 4$ (pentru că $\left(x - \tfrac1x\right)^2 = x^2 - 2 + \tfrac{1}{x^2}$). Atunci:

$$\det = 2\left(x - \frac1x\right)^2 + 8 \ge 8,$$

deoarece un pătrat este nenegativ. Egalitate pentru $x = \pm1$. $\blacksquare$

*Barem: 2p calculul matricei și al determinantului, 3p inegalitatea.*

### 2. Legea $x \circ y = x^2 - xy - x + 2y + 1$

**a)** Arătați că $1 \circ 1 = 2$.

$$1 \circ 1 = 1^2 - 1\cdot 1 - 1 + 2\cdot 1 + 1 = 1 - 1 - 1 + 2 + 1 = 2.$$

*Barem: 3p înlocuirea, 2p calculul.*

**b)** Determinați $x$ pentru care $x \circ (2x) = 1$.

$$x \circ (2x) = x^2 - 2x^2 - x + 4x + 1 = -x^2 + 3x + 1.$$

$$-x^2 + 3x + 1 = 1 \iff -x^2 + 3x = 0 \iff x(3 - x) = 0 \iff x \in \{0, 3\}.$$

**Răspuns:** $x = 0$ sau $x = 3$. *Barem: 2p expresia, 3p soluțiile.*

**c)** Perechile $(m, n)$ de numere naturale cu $m \circ n = m$.

$$m^2 - mn - m + 2n + 1 = m \iff m^2 - mn - 2m + 2n = -1.$$

Grupăm: $m^2 - mn - 2m + 2n = m(m - n) - 2(m - n) = (m - 2)(m - n)$. Deci

$$(m - 2)(m - n) = -1.$$

$m - 2$ și $m - n$ sunt numere întregi cu produsul $-1$, deci una este $1$ și cealaltă $-1$:

- $m - 2 = 1$, $m - n = -1$ $\Rightarrow$ $m = 3$, $n = 4$;
- $m - 2 = -1$, $m - n = 1$ $\Rightarrow$ $m = 1$, $n = 0$.

Ambele perechi sunt formate din numere naturale. Verificare: $3 \circ 4 = 9 - 12 - 3 + 8 + 1 = 3$ ✔; $1 \circ 0 = 1 - 0 - 1 + 0 + 1 = 1$ ✔.

**Răspuns:** $(m, n) \in \{(1, 0),\ (3, 4)\}$. *Barem: 2p obținerea relației, 3p perechile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty)\to\mathbb R$, $f(x) = (x - 1)\sqrt x + \dfrac{2}{\sqrt x}$

**a)** Arătați că $f'(x) = \dfrac{3x^2 - x - 2}{2x\sqrt x}$.

Folosim $(\sqrt x)' = \dfrac{1}{2\sqrt x}$ și $\left(\dfrac{1}{\sqrt x}\right)' = \left(x^{-1/2}\right)' = -\dfrac{1}{2x\sqrt x}$:

$$f'(x) = \sqrt x + (x - 1)\cdot\frac{1}{2\sqrt x} - \frac{2}{2x\sqrt x} = \frac{2x^2 + x(x - 1) - 2}{2x\sqrt x} = \frac{3x^2 - x - 2}{2x\sqrt x}.$$

(Am adus la numitorul comun $2x\sqrt x$: $\sqrt x = \dfrac{2x^2}{2x\sqrt x}$, $\dfrac{x-1}{2\sqrt x} = \dfrac{x(x-1)}{2x\sqrt x}$.) *Barem: 3p derivarea, 2p forma finală.*

**b)** Arătați că $\displaystyle\lim_{x\to1}\frac{\sqrt x\cdot f'(x)}{5x - 5} = \frac12$.

$\sqrt x\cdot f'(x) = \dfrac{3x^2 - x - 2}{2x}$. Pentru $x \to 1$ avem $\frac00$; descompunem $3x^2 - x - 2 = (3x + 2)(x - 1)$ (rădăcinile $1$ și $-\tfrac23$):

$$\lim_{x\to1}\frac{(3x + 2)(x - 1)}{2x\cdot 5(x - 1)} = \lim_{x\to1}\frac{3x + 2}{10x} = \frac{5}{10} = \frac12.$$

*Barem: 3p simplificarea, 2p limita.*

**c)** Determinați imaginea funcției $f$.

$f'(x) = 0 \iff 3x^2 - x - 2 = 0 \iff x = 1$ (cealaltă rădăcină, $-\tfrac23$, nu e în domeniu). Numitorul $2x\sqrt x > 0$, deci semnul lui $f'$ este semnul lui $(3x + 2)(x - 1)$, adică semnul lui $x - 1$:

| $x$ | $0$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | $+\infty$ | ↘ | $2$ | ↗ | $+\infty$ |

$f(1) = 0 + 2 = 2$. La capete: $\lim\limits_{x\to+\infty} f(x) = +\infty$ (termenul $(x-1)\sqrt x \to +\infty$), iar $\lim\limits_{x\searrow 0} f(x) = +\infty$ (termenul $\tfrac{2}{\sqrt x} \to +\infty$).

$f$ este continuă, descrescătoare pe $(0, 1]$ și crescătoare pe $[1, +\infty)$, cu minimul $2$ și nemărginită superior; din proprietatea lui Darboux ia toate valorile din $[2, +\infty)$.

**Răspuns:** $\operatorname{Im} f = [2, +\infty)$. *Barem: 2p monotonia, 3p limita, minimul și concluzia.*

### 2. $f:\mathbb R\to\mathbb R$, $f(x) = (x^2 + x)e^x$

**a)** Arătați că $\displaystyle\int_0^1\frac{f(x)}{e^x}dx = \frac56$.

$\dfrac{f(x)}{e^x} = x^2 + x$:

$$\int_0^1 (x^2 + x)\,dx = \left(\frac{x^3}{3} + \frac{x^2}{2}\right)\Big|_0^1 = \frac13 + \frac12 = \frac56.$$

*Barem: 3p primitiva, 2p calculul.*

**b)** Arătați că $\displaystyle\int_1^2\frac{f(x)}{x}dx = e(2e - 1)$.

Pentru $x \in [1, 2]$: $\dfrac{f(x)}{x} = (x + 1)e^x$. Observăm că $(xe^x)' = e^x + xe^x = (x + 1)e^x$, deci $xe^x$ este o primitivă:

$$\int_1^2 (x + 1)e^x\,dx = xe^x\Big|_1^2 = 2e^2 - e = e(2e - 1).$$

(Se poate și prin părți.) *Barem: 3p primitiva, 2p calculul.*

**c)** Determinați $a$ pentru care $\displaystyle\int_2^4\frac{x f(x)}{f(x - 1)}dx = ae(5 + \ln 3)$.

$f(x - 1) = \big((x - 1)^2 + (x - 1)\big)e^{x-1} = (x - 1)x\,e^{x - 1}$. Pe $[2, 4]$ este nenul. Atunci

$$\frac{x f(x)}{f(x - 1)} = \frac{x\cdot x(x + 1)e^x}{x(x - 1)e^{x-1}} = e\cdot\frac{x^2 + x}{x - 1}.$$

Împărțim: $x^2 + x = (x - 1)(x + 2) + 2$, deci $\dfrac{x^2 + x}{x - 1} = x + 2 + \dfrac{2}{x - 1}$.

$$\int_2^4\frac{x f(x)}{f(x-1)}dx = e\left(\frac{x^2}{2} + 2x + 2\ln(x - 1)\right)\Big|_2^4 = e\big[(8 + 8 + 2\ln 3) - (2 + 4 + 0)\big] = e(10 + 2\ln 3) = 2e(5 + \ln 3).$$

Din $ae(5 + \ln 3) = 2e(5 + \ln 3)$ rezultă $a = 2$.

**Răspuns:** $a = 2$. *Barem: 3p calculul integralei, 2p valoarea lui $a$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $7$ |
| I.2 | $a = -1$ |
| I.3 | $x \in \{1, 5\}$ |
| I.4 | $p = \tfrac{1}{15}$ |
| I.5 | $m_{AB}\cdot m_{AC} = -1$ |
| I.6 | $E(\pi/6) = 0$ |
| II.1.b | $x = -7$ |
| II.1.c | $\det = 2\left(x - \tfrac1x\right)^2 + 8 \ge 8$ |
| II.2.b | $x \in \{0, 3\}$ |
| II.2.c | $(1, 0)$ și $(3, 4)$ |
| III.1.c | $\operatorname{Im} f = [2, +\infty)$ |
| III.2.c | $a = 2$ |

## Ce merită reținut din varianta 2

- **Ecuații în numere naturale/întregi**: aduce relația la forma produs $= $ constantă și analizează divizorii.
- **Inegalități cu $x + \tfrac1x$**: scrie expresia ca pătrat perfect plus constantă.
- **Imaginea unei funcții**: tabel de variație + limite la capetele domeniului + continuitate.
- **Integrale cu $e^x$**: caută o derivată de produs, ca $(xe^x)' = (x+1)e^x$, înainte de a integra prin părți.
