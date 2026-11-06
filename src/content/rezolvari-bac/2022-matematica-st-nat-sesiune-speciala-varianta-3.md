Rezolvarea completă a subiectului de **Bacalaureat 2022 la Matematică M_șt-nat**, sesiunea specială, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\sqrt2(\sqrt2 - 1)(2 + \sqrt2) = 2$

$\sqrt2(\sqrt2 - 1) = 2 - \sqrt2$, deci

$$(2 - \sqrt2)(2 + \sqrt2) = 4 - 2 = 2.$$

*Barem: 3p + 2p.*

### 2. Abscisele punctelor de intersecție ale graficului lui $f(x) = 2x^2 - 4x$ cu $Ox$

$$f(x) = 0 \iff 2x(x - 2) = 0 \iff x \in \{0, 2\}.$$

*Barem: 3p + 2p.*

### 3. Ecuația $2^{x-3} = \dfrac{1}{2^{2x}}$

$2^{x-3} = 2^{-2x} \iff x - 3 = -2x \iff x = 1$.

**Răspuns:** $x = 1$. *Barem: 3p + 2p.*

### 4. Probabilitatea ca un număr de două cifre să fie multiplu de 11

90 cazuri posibile; multipli de 11: $11, 22, \dots, 99$ — 9 cazuri favorabile.

$$p = \frac{9}{90} = \frac1{10}.$$

*Barem: 2p + 3p.*

### 5. $A(-1,0)$, $B(0,3)$, $C(4,0)$: triunghiul $ABC$ este isoscel

$AC = 4 - (-1) = 5$ (pe axa $Ox$), $BC = \sqrt{4^2 + 3^2} = 5$. Deci $AC = BC$, triunghiul e isoscel. $\blacksquare$

*Barem: 2p + 3p.*

### 6. $E(x) = \operatorname{tg}x + \sin\frac{3x}{2} - 2\cos\frac x2$; arătați că $E\left(\frac\pi3\right) = 1$

$$E\left(\tfrac\pi3\right) = \operatorname{tg}\tfrac\pi3 + \sin\tfrac\pi2 - 2\cos\tfrac\pi6 = \sqrt3 + 1 - 2\cdot\tfrac{\sqrt3}{2} = 1.$$

*Barem: 3p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $M(x) = \begin{pmatrix}x + 1 & -x\\ -2x & 2x + 1\end{pmatrix}$

#### a) $\det M(1) = 4$

$$M(1) = \begin{pmatrix}2&-1\\-2&3\end{pmatrix},\quad \det M(1) = 6 - 2 = 4.$$

*Barem: 3p + 2p.*

#### b) $M(x)\cdot M(1) = M(4x + 1)$

$$M(x)M(1) = \begin{pmatrix}2(x+1) + 2x & -(x+1) - 3x\\ -4x - 2(2x+1) & 2x + 3(2x+1)\end{pmatrix} = \begin{pmatrix}4x + 2 & -4x - 1\\ -8x - 2 & 8x + 3\end{pmatrix}.$$

Cu $t = 4x + 1$: aceasta este $\begin{pmatrix}t + 1 & -t\\ -2t & 2t + 1\end{pmatrix} = M(4x+1)$. $\blacksquare$ *Barem: 3p + 2p.*

#### c) $x$ cu $M(x)\cdot M(1)\cdot M(1) = M(x + 2)$

Aplicând de două ori b): $M(x)M(1)M(1) = M(4x + 1)M(1) = M\big(4(4x+1) + 1\big) = M(16x + 5)$.

$M(16x + 5) = M(x + 2) \iff 16x + 5 = x + 2 \iff x = -\dfrac15$ (elementul din colțul stânga-sus determină parametrul).

**Răspuns:** $x = -\dfrac15$. *Barem: 3p + 2p.*

### 2. Legea $x\circ y = 5xy + 10x + 10y + 18$

#### a) $(-1)\circ0 = 8$

$$(-1)\circ 0 = 0 - 10 + 0 + 18 = 8.$$

*Barem: 3p + 2p.*

#### b) $x\circ y = 5(x+2)(y+2) - 2$

$$5(x+2)(y+2) - 2 = 5xy + 10x + 10y + 20 - 2 = x\circ y.$$

*Barem: 3p + 2p.*

#### c) $m$ întreg cu $m\circ m = m$

$$5(m + 2)^2 - 2 = m \iff 5m^2 + 19m + 18 = 0 \iff (m + 2)(5m + 9) = 0.$$

Soluții: $m = -2$ și $m = -\frac95$ (neîntreg).

**Răspuns:** $m = -2$. *Barem: 2p + 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(1,\infty)\to\mathbb R$, $f(x) = \dfrac{x^2 + 1}{x - 1} + \ln(x - 1)$

#### a) $f'(x) = \dfrac{x^2 - x - 2}{(x-1)^2}$

$$f'(x) = \frac{2x(x-1) - (x^2 + 1)}{(x-1)^2} + \frac{1}{x-1} = \frac{x^2 - 2x - 1 + (x - 1)}{(x-1)^2} = \frac{x^2 - x - 2}{(x-1)^2}.$$

*Barem: 3p + 2p.*

#### b) Tangenta în punctul de abscisă $x = 2$

$f(2) = \frac{5}{1} + \ln 1 = 5$, $f'(2) = \frac{4 - 2 - 2}{1} = 0$.

$$y - 5 = 0\cdot(x - 2) \iff y = 5.$$

**Răspuns:** $y = 5$. *Barem: 2p + 3p.*

#### c) $\dfrac{x^2+1}{x-1} + \ln(x - 1) \ge 5$ pe $(1,\infty)$

$x^2 - x - 2 = (x - 2)(x + 1)$, deci $f'(x) \le 0$ pe $(1, 2]$ și $f'(x) \ge 0$ pe $[2, \infty)$: $f$ descrește, apoi crește, cu minimul în $x = 2$.

Prin urmare $f(x) \ge f(2) = 5$ pentru orice $x > 1$, adică exact inegalitatea cerută. $\blacksquare$ *Barem: 3p monotonia, 2p concluzia.*

### 2. $f(x) = \dfrac{x + 4}{6x^2 + 1}$

#### a) $\displaystyle\int_0^2 f(x)(6x^2+1)dx = 10$

$$\int_0^2(x + 4)dx = \left(\frac{x^2}{2} + 4x\right)\Big|_0^2 = 2 + 8 = 10.$$

*Barem: 3p + 2p.*

#### b) $\displaystyle\int_0^2\left(f(x) - \frac4{6x^2+1}\right)dx = \frac{\ln5}{6}$

$$\int_0^2\frac{x}{6x^2+1}dx = \frac1{12}\int_0^2\frac{(6x^2+1)'}{6x^2+1}dx = \frac1{12}\ln(6x^2+1)\Big|_0^2 = \frac{\ln 25}{12} = \frac{\ln5}{6}.$$

*Barem: 3p + 2p.*

#### c) $m$ cu $\displaystyle\int_0^1\frac{x+4}{f(x)}e^{2x}dx = m(e^2 - 1)$

$\dfrac{x + 4}{f(x)} = 6x^2 + 1$. Integrăm prin părți (de două ori) sau verificăm direct că o primitivă este $e^{2x}(3x^2 - 3x + 2)$:

$$\left(e^{2x}(3x^2 - 3x + 2)\right)' = e^{2x}\left(6x^2 - 6x + 4 + 6x - 3\right) = e^{2x}(6x^2 + 1).$$

$$\int_0^1(6x^2 + 1)e^{2x}dx = e^{2x}(3x^2 - 3x + 2)\Big|_0^1 = 2e^2 - 2 = 2(e^2 - 1).$$

**Răspuns:** $m = 2$. *Barem: 3p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $x \in \{0, 2\}$ |
| I.3 | $x = 1$ |
| I.4 | $p = \frac1{10}$ |
| II.1.c | $x = -\frac15$ |
| II.2.c | $m = -2$ |
| III.1.b | $y = 5$ |
| III.2.c | $m = 2$ |

## Ce merită reținut din varianta 3

- **Inegalitate cu funcții** = minimul funcției: studiază monotonia și compară cu valoarea în punctul de minim.
- **Relația $M(x)M(1) = M(4x+1)$** se poate itera fără a mai înmulți matrice.
- **$\int\frac{x}{ax^2+b}dx = \frac{1}{2a}\ln(ax^2+b)$.**
