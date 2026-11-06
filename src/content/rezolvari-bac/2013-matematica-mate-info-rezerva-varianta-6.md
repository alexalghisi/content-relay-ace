Rezolvarea completă a subiectului de **Bacalaureat 2013 la Matematică M_mate-info**, sesiunea de rezervă, **varianta 6**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $n = (\sqrt3 - 1)^2 + 2\sqrt3$ este natural

$(\sqrt3 - 1)^2 = 3 - 2\sqrt3 + 1 = 4 - 2\sqrt3$, deci $n = 4 - 2\sqrt3 + 2\sqrt3 = 4 \in \mathbb N$. *Barem: 3p, 2p.*

### 2. Intersecția graficelor lui $f(x) = x + 1$ și $g(x) = 2x - 1$

$x + 1 = 2x - 1 \iff x = 2$, $y = 3$.

**Răspuns:** $(2, 3)$. *Barem: 2p, 3p.*

### 3. $2^{6 - x^2} = 2^x$

$6 - x^2 = x \iff x^2 + x - 6 = 0 \iff (x + 3)(x - 2) = 0$.

**Răspuns:** $x \in \{-3, 2\}$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr de trei cifre să aibă suma cifrelor 2

Cazuri posibile: 900. Cu prima cifră nenulă și suma 2: $101, 110, 200$ — 3 cazuri favorabile.

$$p = \frac{3}{900} = \frac{1}{300}.$$

**Răspuns:** $p = \dfrac1{300}$. *Barem: 2p, 1p, 2p.*

### 5. Mediatoarea segmentului $AB$, $A(1,3)$, $B(3,1)$

Mijlocul $M(2, 2)$; $m_{AB} = \dfrac{1 - 3}{3 - 1} = -1$, deci mediatoarea are panta $1$: $y - 2 = x - 2$.

**Răspuns:** $y = x$. *Barem: 2p, 2p, 1p.*

### 6. Raza cercului circumscris triunghiului dreptunghic în $A$, $BC = 8$

Ipotenuza este diametru al cercului circumscris: $R = \dfrac{BC}{2} = 4$.

**Răspuns:** $R = 4$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} 1 & x & 1\\ 1 & -1 & 1\\ x & -1 & 1\end{pmatrix}$

#### a) $A(0)\cdot A(1)$

$$\begin{pmatrix} 1 & 0 & 1\\ 1 & -1 & 1\\ 0 & -1 & 1\end{pmatrix}\begin{pmatrix} 1 & 1 & 1\\ 1 & -1 & 1\\ 1 & -1 & 1\end{pmatrix} = \begin{pmatrix} 2 & 0 & 2\\ 1 & 1 & 1\\ 0 & 0 & 0\end{pmatrix}.$$

*Barem: 2p, 3p.*

#### b) $\det(A(x)) = x^2 - 1$

Sarrus:

$$\det(A(x)) = -1 + x^2 - 1 + x + 1 - x = x^2 - 1.$$

*Barem: 3p, 2p.*

#### c) $x \in \mathbb Z$ pentru care inversa lui $A(x)$ are elemente întregi

Din $A(x)\cdot A(x)^{-1} = I_3$: $\det A(x)\cdot\det A(x)^{-1} = 1$. Pentru $x \in \mathbb Z$, $\det A(x) \in \mathbb Z$; dacă inversa are elemente întregi, și $\det A(x)^{-1} \in \mathbb Z$. Două numere întregi cu produsul 1 sunt $\pm1$, deci $x^2 - 1 = \pm1$, adică $x^2 \in \{0, 2\}$; în $\mathbb Z$ rămâne $x = 0$.

Reciproc, pentru $x = 0$, $\det = -1$, iar $A(0)^{-1} = -A(0)^*$ are elemente întregi.

**Răspuns:** $x = 0$. *Barem: 1p, 1p, 1p, 2p.*

### 2. Legea $x\circ y = \sqrt{x^2y^2 + x^2 + y^2}$ (asociativă)

#### a) $2\circ 3$

$\sqrt{36 + 4 + 9} = \sqrt{49} = 7$. **Răspuns:** $7$. *Barem: 3p, 2p.*

#### b) $x\circ y = \sqrt{(x^2 + 1)(y^2 + 1) - 1}$

$(x^2 + 1)(y^2 + 1) - 1 = x^2y^2 + x^2 + y^2 + 1 - 1$. *Barem: 2p, 3p.*

#### c) $x\circ x\circ x = x$

Din b), $(x\circ y)^2 + 1 = (x^2 + 1)(y^2 + 1)$, deci $x\circ x\circ x = \sqrt{(x^2 + 1)^3 - 1}$.

Ecuația cere $x \ge 0$ și $(x^2 + 1)^3 - 1 = x^2$. Cu $t = x^2 + 1 \ge 1$: $t^3 = t \iff t(t^2 - 1) = 0 \Rightarrow t = 1$, adică $x = 0$, care verifică.

**Răspuns:** $x = 0$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = e^x$, $g(x) = x^2 + 2x + 2$

#### a) $g'(2)$

$g'(x) = 2x + 2$, deci $g'(2) = 6$. *Barem: 3p, 2p.*

#### b) $\lim\limits_{x\to0}\dfrac{2f(x) - g(x)}{2x^3} = \dfrac16$

Cazul $\frac00$; aplicăm l'Hospital de două ori:

$$\lim_{x\to0}\frac{2e^x - x^2 - 2x - 2}{2x^3} = \lim_{x\to0}\frac{2e^x - 2x - 2}{6x^2} = \lim_{x\to0}\frac{2e^x - 2}{12x} = \lim_{x\to0}\frac{e^x - 1}{6x} = \frac16.$$

*Barem: 2p, 3p.*

#### c) $2f(x) \ge g(x)$ pe $[0, +\infty)$

Fie $h(x) = 2e^x - x^2 - 2x - 2$. Atunci $h'(x) = 2e^x - 2x - 2$, $h''(x) = 2e^x - 2 \ge 0$ pe $[0, \infty)$.

$h'$ crescătoare $\Rightarrow h'(x) \ge h'(0) = 0$; deci $h$ crescătoare $\Rightarrow h(x) \ge h(0) = 0$. $\blacksquare$ *Barem: 2p, 1p, 2p.*

### 2. $f(x) = x + 2 + \dfrac{1}{x + 2}$, $F(x) = \dfrac{x^2}{2} + 2x + \ln(x + 2)$, pe $(-2, +\infty)$

#### a) $\displaystyle\int_0^1(x + 2)f(x)\,dx$

$(x + 2)f(x) = (x + 2)^2 + 1 = x^2 + 4x + 5$:

$$\int_0^1(x^2 + 4x + 5)\,dx = \frac13 + 2 + 5 = \frac{22}{3}.$$

**Răspuns:** $\dfrac{22}{3}$. *Barem: 1p, 2p, 2p.*

#### b) $F$ este primitivă a lui $f$

$F'(x) = x + 2 + \dfrac{1}{x + 2} = f(x)$. Da. *Barem: 3p, 2p.*

#### c) $\displaystyle\int_{-1}^0 F(x)f(x)\,dx$

$f = F'$, deci $\displaystyle\int FF' = \frac{F^2}{2}$. $F(0) = \ln 2$, $F(-1) = \dfrac12 - 2 + \ln 1 = -\dfrac32$:

$$\frac{F^2(0) - F^2(-1)}{2} = \frac12\left(\ln^2 2 - \frac94\right).$$

**Răspuns:** $\dfrac12\left(\ln^2 2 - \dfrac94\right)$. *Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $n = 4$ |
| I.2 | $(2, 3)$ |
| I.3 | $x \in \{-3, 2\}$ |
| I.4 | $p = \tfrac1{300}$ |
| I.5 | $y = x$ |
| I.6 | $R = 4$ |
| II.1.c | $x = 0$ |
| II.2.a | $7$ |
| II.2.c | $x = 0$ |
| III.1.a | $6$ |
| III.2.a | $\tfrac{22}{3}$ |
| III.2.c | $\tfrac12(\ln^2 2 - \tfrac94)$ |

## Ce merită reținut din varianta 6

- **Inversă cu elemente întregi** $\Rightarrow \det A = \pm1$ (produsul determinanților este 1).
- **Legea $\sqrt{(x^2+1)(y^2+1) - 1}$**: lucrează cu $x^2 + 1$, care se înmulțește.
- **Inegalități prin derivate succesive**: $h'' \ge 0 \Rightarrow h' \ge h'(0) \Rightarrow h \ge h(0)$.
