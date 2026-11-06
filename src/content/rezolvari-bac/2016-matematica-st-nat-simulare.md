Rezolvarea completă a **simulării pentru clasa a XII-a, Bacalaureat 2016, la Matematică M_șt-nat**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Rația progresiei aritmetice cu $2a_{10} = a_5 + a_6 + 36$

$$2(a_1 + 9r) = (a_1 + 4r) + (a_1 + 5r) + 36 \iff 18r = 9r + 36 \iff r = 4.$$

**Răspuns:** $r = 4$. *Barem: 3p, 2p.*

### 2. Abscisele punctelor de intersecție ale graficului lui $f(x) = x^2 + 3x - 1$ cu dreapta $y = x - 1$

$$x^2 + 3x - 1 = x - 1 \iff x^2 + 2x = 0 \iff x(x + 2) = 0.$$

**Răspuns:** $x \in \{-2, 0\}$. *Barem: 3p, 2p.*

### 3. Ecuația $\log_2\dfrac{x - 1}{x + 1} + \log_2(x^2 - 1) = 4$

**Condiții:** $\frac{x-1}{x+1} > 0$ și $x^2 - 1 > 0$, adică $|x| > 1$.

$$\log_2\left(\frac{x-1}{x+1}\cdot(x-1)(x+1)\right) = 4 \iff (x - 1)^2 = 16 \iff x - 1 = \pm 4.$$

$x = 5$ și $x = -3$ verifică $|x| > 1$.

**Răspuns:** $x \in \{-3, 5\}$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca produsul cifrelor unui număr de două cifre să fie divizibil cu 10

Cazuri posibile: **90**. Produsul cifrelor este divizibil cu 10 dacă:

- cifra unităților este $0$ (produs $0$): $10, 20, \dots, 90$ — **9** numere;
- cifra zecilor $5$ și unităților pară nenulă: $52, 54, 56, 58$ — **4**;
- cifra unităților $5$ și zecilor pară: $25, 45, 65, 85$ — **4**.

Total **17** cazuri favorabile: $p = \dfrac{17}{90}$.

*Barem: 1p, 2p, 2p.*

### 5. Centrul cercului circumscris triunghiului cu $A(1,1)$, $B(1,4)$, $C(5,1)$

$AB \parallel Oy$ ($x = 1$) și $AC \parallel Ox$ ($y = 1$), deci triunghiul este dreptunghic în $A$. Centrul cercului circumscris este mijlocul ipotenuzei $BC$:

$$O\left(\frac{1 + 5}{2}, \frac{4 + 1}{2}\right) = O\left(3, \frac52\right).$$

**Răspuns:** $\left(3, \dfrac52\right)$. *Barem: 2p, 3p.*

### 6. $\dfrac{1 + \cos 2x}{1 - \cos 2x} = \operatorname{ctg}^2 x$ pentru $x \in \left(0, \frac\pi2\right)$

$1 + \cos 2x = 2\cos^2 x$ și $1 - \cos 2x = 2\sin^2 x \ne 0$, deci

$$\frac{2\cos^2 x}{2\sin^2 x} = \operatorname{ctg}^2 x.$$

*Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $M(x) = \begin{pmatrix} 1 & 1 & 1\\ 2 & 3 & 1\\ x & 2x - 1 & 1\end{pmatrix}$

#### a) $\det(M(0))$

$$\det\begin{pmatrix} 1 & 1 & 1\\ 2 & 3 & 1\\ 0 & -1 & 1\end{pmatrix} = 3 + 0 - 2 - 0 + 1 - 2 = 0.$$

**Răspuns:** $0$. *Barem: 3p, 2p.*

#### b) $2M(x) - M(-x) = M(3x)$

Primele două linii: $2(1,1,1) - (1,1,1) = (1,1,1)$, $2(2,3,1) - (2,3,1) = (2,3,1)$. Linia a treia:

$$2(x, 2x - 1, 1) - (-x, -2x - 1, 1) = (3x, 6x - 1, 1) = (3x, 2\cdot 3x - 1, 1).$$

Deci $2M(x) - M(-x) = M(3x)$. *Barem: 3p, 2p.*

#### c) Aria triunghiului $OAB$, $A(n, 2n - 1)$, $B(n^2, 2n^2 - 1)$, este număr natural

$$\Delta = \begin{vmatrix} 0 & 0 & 1\\ n & 2n - 1 & 1\\ n^2 & 2n^2 - 1 & 1\end{vmatrix} = n(2n^2 - 1) - n^2(2n - 1) = n^2 - n = n(n - 1).$$

$\mathcal A_{OAB} = \frac12|\Delta| = \frac{n(n-1)}{2}$. Produsul a două numere consecutive este par, deci aria este număr natural. $\blacksquare$ *Barem: 3p, 2p.*

### 2. $x \circ y = 6xy - 2x - 2y + 1$ (asociativă)

Observăm că $x \circ y = 6\left(x - \frac13\right)\left(y - \frac13\right) + \frac13$.

#### a) $1\circ\frac13$

$$1\circ\frac13 = 2 - 2 - \frac23 + 1 = \frac13.$$

**Răspuns:** $\dfrac13$. *Barem: 2p, 3p.*

#### b) Elementul neutru

$x \circ e = x \iff 6xe - 2x - 2e + 1 = x \iff (3x - 1)(2e - 1) = 0$ pentru orice $x$, deci $e = \frac12$ (iar legea e comutativă).

**Răspuns:** $e = \dfrac12$. *Barem: 2p, 3p.*

#### c) $\dfrac{1}{1008}\circ\dfrac{2}{1008}\circ\dots\circ\dfrac{2016}{1008}$

$x \circ \frac13 = \frac13 \circ y = \frac13$ (element absorbant). Printre factori se află $\frac{336}{1008} = \frac13$, deci prin asociativitate rezultatul este $\frac13$.

**Răspuns:** $\dfrac13$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x}{x^4 + 3}$

#### a) $f'(x) = -\dfrac{3(x - 1)(x + 1)(x^2 + 1)}{(x^4 + 3)^2}$

$$f'(x) = \frac{x^4 + 3 - 4x^4}{(x^4+3)^2} = \frac{3(1 - x^4)}{(x^4+3)^2} = -\frac{3(x-1)(x+1)(x^2+1)}{(x^4+3)^2}.$$

*Barem: 3p, 2p.*

#### b) Tangenta în punctul de abscisă $x = 0$

$f(0) = 0$, $f'(0) = \frac39 = \frac13$: $y = \dfrac13x$.

**Răspuns:** $y = \dfrac13x$. *Barem: 2p, 3p.*

#### c) $-\frac14 \le f(x) \le \frac14$

$f' = 0$ în $\pm 1$; $f$ descrescătoare pe $(-\infty, -1]$, crescătoare pe $[-1, 1]$, descrescătoare pe $[1, +\infty)$. Cu $\lim\limits_{x\to\pm\infty} f(x) = 0$, $f(-1) = -\frac14$, $f(1) = \frac14$:

- pe $(-\infty, -1]$, $f$ coboară de la $0$ la $-\frac14$;
- pe $[-1, 1]$, urcă de la $-\frac14$ la $\frac14$;
- pe $[1, +\infty)$, coboară de la $\frac14$ spre $0$.

Deci $-\frac14 \le f(x) \le \frac14$. $\blacksquare$ *Barem: 1p, 1p, 3p.*

### 2. $f(x) = xe^x - 2$

#### a) Primitiva $F$ cu $F(1) = 0$

$\int xe^x\,dx = (x - 1)e^x$, deci $F(x) = (x - 1)e^x - 2x + c$; $F(1) = -2 + c = 0 \Rightarrow c = 2$.

**Răspuns:** $F(x) = (x - 1)e^x - 2x + 2$. *Barem: 3p, 2p.*

#### b) $\displaystyle\int_0^1 xf(x)\,dx$

$$\int_0^1(x^2e^x - 2x)\,dx = \int_0^1 x^2e^x\,dx - 1.$$

Prin părți: $\int_0^1 x^2e^x\,dx = x^2e^x\Big|_0^1 - 2\int_0^1 xe^x\,dx = e - 2\cdot 1 = e - 2$ (căci $\int_0^1 xe^x\,dx = (x-1)e^x\big|_0^1 = 1$).

**Răspuns:** $e - 3$. *Barem: 3p, 2p.*

#### c) $x$ cu $\displaystyle\int_1^x f(t)\,dt = 0$

$$\int_1^x f(t)\,dt = F(x) - F(1) = (x - 1)e^x - 2x + 2 = (x - 1)(e^x - 2).$$

$(x - 1)(e^x - 2) = 0 \iff x = 1$ sau $x = \ln 2$.

**Răspuns:** $x \in \{\ln 2, 1\}$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $r = 4$ |
| I.2 | $x \in \{-2, 0\}$ |
| I.3 | $x \in \{-3, 5\}$ |
| I.4 | $p = \tfrac{17}{90}$ |
| I.5 | $(3, \tfrac52)$ |
| II.1.a | $0$ |
| II.2.a | $\tfrac13$ |
| II.2.b | $e = \tfrac12$ |
| II.2.c | $\tfrac13$ |
| III.1.b | $y = \tfrac13x$ |
| III.2.a | $F(x) = (x-1)e^x - 2x + 2$ |
| III.2.b | $e - 3$ |
| III.2.c | $x \in \{\ln 2, 1\}$ |

## Ce merită reținut din simulare

- **Cercul circumscris unui triunghi dreptunghic** are centrul în mijlocul ipotenuzei.
- **Aria cu determinant**: $\mathcal A = \frac12|\Delta|$.
- **Formulele unghiului dublu**: $1 + \cos 2x = 2\cos^2 x$, $1 - \cos 2x = 2\sin^2 x$.
- **Element absorbant** al legii $k(x-a)(y-a) + a$: $a$ — caută-l printre factori.
