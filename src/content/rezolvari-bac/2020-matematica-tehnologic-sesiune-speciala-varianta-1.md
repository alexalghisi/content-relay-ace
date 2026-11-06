Rezolvarea completă a subiectului de **Bacalaureat 2020 la Matematică M_tehnologic**, sesiunea specială, **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\sqrt5\left(1 + 2\sqrt5\right) - \sqrt5 = 10$

$\sqrt5 + 2\sqrt5\cdot\sqrt5 - \sqrt5 = 2\cdot 5 = 10$. $\blacksquare$ *Barem: 3p, 2p.*

### 2. $f(x) = x^2 - 3x + 1$: arătați că $f(1) = f(2)$

$f(1) = 1 - 3 + 1 = -1$, $f(2) = 4 - 6 + 1 = -1$. $\blacksquare$ *Barem: 2p, 3p.*

### 3. Ecuația $\log_5(x^2 - 21) = \log_5 4$

Injectivitatea logaritmului: $x^2 - 21 = 4 \iff x^2 = 25 \iff x = \pm 5$; pentru ambele $x^2 - 21 = 4 > 0$.

**Răspuns:** $x \in \{-5, 5\}$. *Barem: 3p, 2p.*

### 4. După o scumpire cu $10\%$ un obiect costă 220 de lei. Prețul inițial?

$x + 0{,}1x = 220 \iff 1{,}1x = 220 \iff x = 200$.

**Răspuns:** $200$ de lei. *Barem: 3p, 2p.*

### 5. Mijlocul $M$ al segmentului $AB$, $A(4,8)$, $B(0,4)$

$x_M = \frac{4 + 0}{2} = 2$, $y_M = \frac{8 + 4}{2} = 6$.

**Răspuns:** $M(2, 6)$. *Barem: 3p, 2p.*

### 6. $\angle B = \angle C = 60^\circ$: calculați $\cos A$

$\angle A = 180^\circ - 60^\circ - 60^\circ = 60^\circ$, deci $\cos A = \frac12$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}1 & 6\\ -1 & -4\end{pmatrix}$, $B = \begin{pmatrix}1 & 2\\ 2 & 4\end{pmatrix}$

**a)** $\det A = -4 + 6 = 2$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $$BA = \begin{pmatrix}1 - 2 & 6 - 8\\ 2 - 4 & 12 - 16\end{pmatrix} = \begin{pmatrix}-1 & -2\\ -2 & -4\end{pmatrix} = -B,$$

deci $BA + B = O_2$. $\blacksquare$ *Barem: 3p, 2p.*

**c)** $$B + nA = \begin{pmatrix}1 + n & 2 + 6n\\ 2 - n & 4 - 4n\end{pmatrix},$$
$$\det(B + nA) = (1 + n)(4 - 4n) - (2 + 6n)(2 - n) = 4 - 4n^2 - (4 + 10n - 6n^2) = 2n^2 - 10n.$$

$\det B = 4 - 4 = 0$, $\det A = 2$: $2n^2 - 10n = 2n \iff 2n(n - 6) = 0$.

**Răspuns:** $n \in \{0, 6\}$. *Barem: 2p, 3p.*

### 2. $x \circ y = x + 2y + 1$

**a)** $1 \circ (-1) = 1 - 2 + 1 = 0$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $x \circ \left(-\frac12\right) = x - 1 + 1 = x$. $\blacksquare$ *Barem: 3p, 2p.*

**c)** Presupunem că există $e$ neutru. Atunci $0 \circ e = 0 \Rightarrow 2e + 1 = 0 \Rightarrow e = -\frac12$, iar $e \circ 0 = 0 \Rightarrow e + 1 = 0 \Rightarrow e = -1$. Contradicție, deci nu există element neutru. $\blacksquare$

*Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x^2 + 2}{x^2 + 1}$

**a)** $$f'(x) = \frac{2x(x^2 + 1) - 2x(x^2 + 2)}{(x^2+1)^2} = \frac{2x(-1)}{(x^2+1)^2} = \frac{-2x}{(x^2+1)^2}.\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** $\lim\limits_{x\to+\infty}f(x) = 1$, deci asimptota orizontală spre $+\infty$ este $y = 1$. *Barem: 3p, 2p.*

**c)** Fie $g(x) = f(x) + \ln(x^2 + 1)$ pe $[0, 1]$:

$$g'(x) = \frac{-2x}{(x^2+1)^2} + \frac{2x}{x^2 + 1} = \frac{2x(x^2 + 1) - 2x}{(x^2+1)^2} = \frac{2x^3}{(x^2+1)^2} \ge 0,$$

deci $g$ este crescătoare: $g(x) \le g(1) = \frac32 + \ln 2 < \frac32 + 1 = \frac52$ (deoarece $\ln 2 < \ln e = 1$). $\blacksquare$

*Barem: 3p monotonia, 2p concluzia.*

### 2. $f(x) = \dfrac{e^x}{x + 1}$, $x > -1$

**a)** $$\int_0^2 (x + 1)f(x)\,dx = \int_0^2 e^x\,dx = e^2 - 1.\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** $\dfrac{f'}{f} = (\ln f)'$, iar $f > 0$:

$$\int_0^1\frac{f'(x)}{f(x)}dx = \ln\frac{e^x}{x + 1}\Big|_0^1 = \ln\frac e2 - \ln 1 = 1 - \ln 2.\ \blacksquare$$

*Barem: 3p, 2p.*

**c)** În prima integrală, $\dfrac{1}{x + 1} = (\ln(x+1))'$; integrăm prin părți:

$$\int_0^1 e^x(\ln(x+1))'dx = e^x\ln(x+1)\Big|_0^1 - \int_0^1 e^x\ln(x+1)\,dx = e\ln 2 - \int_0^1 e^x\ln(x+1)\,dx.$$

Adunând a doua integrală, termenii se reduc: suma este $e\ln 2$. $\blacksquare$

*Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.3 | $x \in \{-5, 5\}$ |
| I.4 | $200$ lei |
| I.5 | $M(2, 6)$ |
| I.6 | $\cos A = \tfrac12$ |
| II.1.c | $n \in \{0, 6\}$ |
| III.1.b | $y = 1$ |

## Ce merită reținut din varianta 1

- **Pentru a arăta că nu există element neutru**, găsește două valori diferite pentru $e$ din $0 \circ e = 0$ și $e \circ 0 = 0$.
- **Inegalități pe un interval:** studiază monotonia funcției diferență/sumă și compară cu valoarea la capăt.
- **$\int \frac{f'}{f} = \ln f$** când $f > 0$.
