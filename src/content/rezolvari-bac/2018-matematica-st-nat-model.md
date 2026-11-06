Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2018 la Matematică M_șt-nat** (filiera teoretică, profilul real, specializarea științe ale naturii). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Suma elementelor mulțimii $\{n \in \mathbb N \mid n(n+2) < 14\}$ este 3

Funcția $n \mapsto n(n+2)$ este crescătoare pe $\mathbb N$: $0\cdot 2 = 0$, $1\cdot 3 = 3$, $2\cdot 4 = 8$, $3\cdot 5 = 15 \ge 14$. Deci mulțimea este $\{0, 1, 2\}$ și suma este $0 + 1 + 2 = 3$.

*Barem: 3p elementele mulțimii, 2p suma.*

### 2. $f(x) = ax + b$, $f(0) = 1$ și $f(x+1) = f(x) + 2$

$f(0) = b = 1$. Apoi $a(x+1) + 1 = ax + 1 + 2 \iff a = 2$ (pentru orice $x$).

**Răspuns:** $a = 2$, $b = 1$. *Barem: 2p $b$, 3p $a$.*

### 3. Inecuația $(x + 5)^2 - 9 > 0$

Diferență de pătrate: $(x + 5 - 3)(x + 5 + 3) = (x + 2)(x + 8) > 0$. Rădăcinile sunt $-8$ și $-2$; produsul e pozitiv în afara rădăcinilor.

**Răspuns:** $x \in (-\infty, -8) \cup (-2, +\infty)$. *Barem: 2p factorizarea, 3p mulțimea soluțiilor.*

### 4. Numărul submulțimilor ordonate cu două elemente din $\{1, 3, 5, 7, 9\}$

Submulțimile ordonate (contează ordinea) sunt aranjamente:

$$A_5^2 = 5\cdot 4 = 20.$$

**Răspuns:** $20$. *Barem: 3p formula, 2p rezultatul.*

### 5. $A(0,2)$, $B(3,5)$, $C(-1,3)$; simetricul lui $A$ față de mijlocul lui $BC$

Mijlocul lui $BC$: $M\left(\frac{3 + (-1)}{2}, \frac{5 + 3}{2}\right) = M(1, 4)$.

Simetricul $A'$ al lui $A$ față de $M$: $M$ este mijlocul lui $AA'$, deci $x = 2\cdot 1 - 0 = 2$, $y = 2\cdot 4 - 2 = 6$.

**Răspuns:** $A'(2, 6)$. *Barem: 2p mijlocul, 3p coordonatele.*

### 6. $\sin D$ în $\triangle DEF$ cu semiperimetrul 6, $DE = 4$, $DF = 5$

Perimetrul este $12$, deci $EF = 12 - 4 - 5 = 3$. Cum $DE^2 + EF^2 = 16 + 9 = 25 = DF^2$, triunghiul este dreptunghic în $E$ (reciproca teoremei lui Pitagora), cu ipotenuza $DF$.

$$\sin D = \frac{EF}{DF} = \frac35.$$

**Răspuns:** $\sin D = \dfrac35$. *Barem: 2p $EF$, 3p $\sin D$.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 1 & 0 & 1\\ 0 & -1 & 1\\ 1 & -1 & 0\end{pmatrix}$, $I_3$

#### a) $\det A = 2$

$$\det A = 1\cdot(-1)\cdot 0 + 0\cdot 1\cdot 1 + 1\cdot 0\cdot(-1) - 1\cdot(-1)\cdot 1 - 1\cdot 1\cdot(-1) - 0 = 0 + 0 + 0 + 1 + 1 - 0 = 2.$$

*Barem: 3p regula lui Sarrus, 2p rezultatul.*

#### b) $x, y$ cu $A\cdot A\cdot A = xA + yI_3$

$$A\cdot A = \begin{pmatrix} 2 & -1 & 1\\ 1 & 0 & -1\\ 1 & 1 & 0\end{pmatrix}, \qquad A\cdot A\cdot A = \begin{pmatrix} 3 & 0 & 1\\ 0 & 1 & 1\\ 1 & -1 & 2\end{pmatrix}.$$

$$xA + yI_3 = \begin{pmatrix} x + y & 0 & x\\ 0 & -x + y & x\\ x & -x & y\end{pmatrix}.$$

Identificând: $x = 1$ (pozițiile $(1,3)$, $(3,1)$), $y = 2$ (poziția $(3,3)$); verificare: $x + y = 3$, $-x + y = 1$ ✔.

**Răspuns:** $x = 1$, $y = 2$. *Barem: 2p puterile, 3p valorile.*

#### c) Inversa matricei $B = A + I_3$

$$B = \begin{pmatrix} 2 & 0 & 1\\ 0 & 0 & 1\\ 1 & -1 & 1\end{pmatrix}, \quad \det B = 0 + 0 + 0 - 0 - (-2) - 0 = 2 \ne 0,$$

deci $B$ este inversabilă. Complemenții algebrici: $\Gamma_{11} = 1$, $\Gamma_{12} = 1$, $\Gamma_{13} = 0$, $\Gamma_{21} = -1$, $\Gamma_{22} = 1$, $\Gamma_{23} = 2$, $\Gamma_{31} = 0$, $\Gamma_{32} = -2$, $\Gamma_{33} = 0$. Adjuncta (transpusa matricei complemenților) și inversa:

$$B^* = \begin{pmatrix} 1 & -1 & 0\\ 1 & 1 & -2\\ 0 & 2 & 0\end{pmatrix}, \qquad B^{-1} = \frac12 B^* = \begin{pmatrix} \frac12 & -\frac12 & 0\\ \frac12 & \frac12 & -1\\ 0 & 1 & 0\end{pmatrix}.$$

**Verificare** (prima linie a lui $B\cdot B^{-1}$): $(2\cdot\frac12 + 0 + 0,\ -1 + 0 + 1,\ 0 + 0 + 0) = (1, 0, 0)$ ✔. *Barem: 2p $\det B$, 3p inversa.*

### 2. Pe $M = (0, +\infty)$: $x \circ y = x^{2\log_3 y}$

#### a) $2 \circ 9 = 16$

$$2 \circ 9 = 2^{2\log_3 9} = 2^{2\cdot 2} = 2^4 = 16.$$

*Barem: 3p, 2p.*

#### b) $x \circ 3 = 25$

$$x^{2\log_3 3} = 25 \iff x^2 = 25 \iff x = \pm 5.$$

Cum $x \in M = (0, +\infty)$, $x = -5$ nu convine.

**Răspuns:** $x = 5$. *Barem: 2p ecuația, 3p soluția.*

#### c) Legea este comutativă

Scriem $x = 3^{\log_3 x}$:

$$x \circ y = \left(3^{\log_3 x}\right)^{2\log_3 y} = 3^{2\log_3 x\cdot\log_3 y} = \left(3^{\log_3 y}\right)^{2\log_3 x} = y^{2\log_3 x} = y \circ x,$$

pentru orice $x, y \in M$. $\blacksquare$ *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(1, +\infty) \to \mathbb R$, $f(x) = \dfrac{e^x}{x - 1}$

#### a) $f'(x) = \dfrac{e^x(x-2)}{(x-1)^2}$

Regula câtului:

$$f'(x) = \frac{e^x(x-1) - e^x\cdot 1}{(x-1)^2} = \frac{e^x(x-2)}{(x-1)^2}.$$

*Barem: 2p, 3p.*

#### b) Intervalele de monotonie

$e^x > 0$, $(x-1)^2 > 0$, deci semnul lui $f'$ este semnul lui $x - 2$: $f'(x) = 0 \iff x = 2$.

- pe $(1, 2]$: $f' \le 0$, $f$ **descrescătoare**;
- pe $[2, +\infty)$: $f' \ge 0$, $f$ **crescătoare**.

*Barem: 2p, 3p.*

#### c) $e^{x-2} - x + 1 \ge 0$ pentru orice $x \in (1, +\infty)$

Din b), $x = 2$ este punct de minim: $f(x) \ge f(2) = \dfrac{e^2}{1} = e^2$. Deci

$$\frac{e^x}{x-1} \ge e^2 \iff \frac{e^{x-2}}{x-1} \ge 1 \iff e^{x-2} \ge x - 1 \iff e^{x-2} - x + 1 \ge 0,$$

(am înmulțit cu $x - 1 > 0$). $\blacksquare$ *Barem: 2p minimul, 3p finalizarea.*

### 2. $f(x) = \sin x$

#### a) $\displaystyle\int_0^{\pi/3} f(x)\,dx = \frac12$

$$\int_0^{\pi/3}\sin x\,dx = -\cos x\Big|_0^{\pi/3} = -\frac12 + 1 = \frac12.$$

*Barem: 3p, 2p.*

#### b) $\displaystyle\int_0^{\pi/2} x f(x)\,dx = 1$

Integrare prin părți cu $u = x$, $v' = \sin x$ ($v = -\cos x$):

$$\int_0^{\pi/2} x\sin x\,dx = -x\cos x\Big|_0^{\pi/2} + \int_0^{\pi/2}\cos x\,dx = 0 + \sin x\Big|_0^{\pi/2} = 1.$$

*Barem: 3p, 2p.*

#### c) Volumul corpului de rotație pentru $g:[0, \frac\pi4] \to \mathbb R$, $g = f$

Folosim $\sin^2 x = \dfrac{1 - \cos 2x}{2}$:

$$V = \pi\int_0^{\pi/4}\sin^2 x\,dx = \pi\int_0^{\pi/4}\frac{1 - \cos 2x}{2}\,dx = \pi\left(\frac x2 - \frac{\sin 2x}{4}\right)\Big|_0^{\pi/4} = \pi\left(\frac\pi8 - \frac14\right) = \frac{\pi(\pi - 2)}{8}.$$

**Răspuns:** $V = \dfrac{\pi(\pi-2)}{8}$. *Barem: 2p formula volumului, 3p calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | mulțimea $\{0,1,2\}$, suma $3$ |
| I.2 | $a = 2$, $b = 1$ |
| I.3 | $x \in (-\infty,-8)\cup(-2,+\infty)$ |
| I.4 | $20$ |
| I.5 | $(2, 6)$ |
| I.6 | $\sin D = \tfrac35$ |
| II.1.b | $x = 1$, $y = 2$ |
| II.1.c | $B^{-1} = \begin{pmatrix}\frac12&-\frac12&0\\\frac12&\frac12&-1\\0&1&0\end{pmatrix}$ |
| II.2.b | $x = 5$ |
| III.1.b | descrescătoare pe $(1,2]$, crescătoare pe $[2,+\infty)$ |
| III.2.c | $V = \tfrac{\pi(\pi-2)}{8}$ |

## Ce merită reținut din model

- **Submulțimi ordonate** = aranjamente $A_n^k$; submulțimi neordonate = combinări $C_n^k$.
- **Triunghiul 3-4-5** apare des: verifică reciproca lui Pitagora înainte de a aplica formulele trigonometrice.
- **Inegalități cu exponențiale**: deseori sunt doar „$f(x) \ge$ minimul lui $f$" rescris.
- **$\sin^2 x$ se integrează** prin formula unghiului dublu $\sin^2 x = \frac{1 - \cos 2x}{2}$.
