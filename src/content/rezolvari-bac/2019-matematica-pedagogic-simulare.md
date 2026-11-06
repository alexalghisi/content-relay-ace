Rezolvarea completă a subiectului de la **simularea Bacalaureatului 2019 (clasa a XII-a) la Matematică M_pedagogic**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $(\sqrt2 - 1)(3\sqrt2 + 1) + (\sqrt2 + 1)^2$ este întreg

$(\sqrt2 - 1)(3\sqrt2 + 1) = 6 + \sqrt2 - 3\sqrt2 - 1 = 5 - 2\sqrt2$ și $(\sqrt2 + 1)^2 = 3 + 2\sqrt2$. Suma: $8 \in \mathbb Z$. $\blacksquare$

*Barem: 2p, 3p.*

### 2. $f(x) = (2m - 1)x - 5$; determinați $m$ știind că $|f(1)| = 4$

$f(1) = 2m - 6$, deci $2m - 6 = 4$ sau $2m - 6 = -4$, adică $m = 5$ sau $m = 1$.

**Răspuns:** $m \in \{1, 5\}$. *Barem: 3p, 2p.*

### 3. Ecuația $\sqrt{2x + 3} = 3x + 2$

Ridicăm la pătrat: $2x + 3 = 9x^2 + 12x + 4 \iff 9x^2 + 10x + 1 = 0 \iff x \in \left\{-1, -\frac19\right\}$.

Trebuie $3x + 2 \ge 0$: $x = -1$ dă $-1 < 0$ (nu convine); $x = -\frac19$ dă $3x + 2 = \frac53$ și $\sqrt{\frac{25}{9}} = \frac53$ ✔.

**Răspuns:** $x = -\dfrac19$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr de două cifre să aibă cifra zecilor strict mai mică decât a unităților

90 de cazuri posibile. Un număr $\overline{ab}$ cu $1 \le a < b \le 9$ corespunde unei alegeri de două cifre distincte din $\{1, \dots, 9\}$: $C_9^2 = 36$ cazuri favorabile.

$$p = \frac{36}{90} = \frac25.$$

*Barem: 1p, 2p, 2p.*

### 5. $A(1,1)$, $B(2,1)$, $C(0,a)$: $AC \perp OB$

$m_{AC} = \frac{a - 1}{0 - 1} = 1 - a$, $m_{OB} = \frac12$. Perpendicularitate: $\frac{1 - a}{2} = -1 \iff a = 3$.

**Răspuns:** $a = 3$. *Barem: 2p, 3p.*

### 6. $BC = 6\sqrt2$, $AC = 12$, $\angle B = 45^\circ$: măsura unghiului $A$

Teorema sinusurilor: $\dfrac{BC}{\sin A} = \dfrac{AC}{\sin B} \Rightarrow \dfrac{6\sqrt2}{\sin A} = \dfrac{12}{\frac{\sqrt2}{2}} = 12\sqrt2 \Rightarrow \sin A = \frac12$.

$A = 150^\circ$ nu convine ($150^\circ + 45^\circ > 180^\circ$), deci $A = 30^\circ$.

**Răspuns:** $30^\circ$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

Legea asociativă: $x * y = (x - 2)(y - 2) + 2$.

### 1. $2 * 4$

$(2 - 2)(4 - 2) + 2 = 2$. **Răspuns:** $2$. *Barem: 3p, 2p.*

### 2. Comutativitatea

$y * x = (y - 2)(x - 2) + 2 = (x-2)(y-2) + 2 = x * y$. $\blacksquare$ *Barem: 2p, 3p.*

### 3. $e = 3$ este element neutru?

$x * 3 = (x - 2)\cdot 1 + 2 = x$ și $3 * x = x$. **Da.** *Barem: 2p, 3p.*

### 4. $2^x * 4^x = 2$

$(2^x - 2)(4^x - 2) = 0 \iff 2^x = 2$ sau $4^x = 2 \iff x = 1$ sau $x = \frac12$.

**Răspuns:** $x \in \left\{\frac12, 1\right\}$. *Barem: 3p, 2p.*

### 5. $x * (x + 1) \le 8$

$(x - 2)(x - 1) + 2 \le 8 \iff x^2 - 3x - 4 \le 0 \iff (x - 4)(x + 1) \le 0 \iff x \in [-1, 4]$.

**Răspuns:** $x \in [-1, 4]$. *Barem: 3p, 2p.*

### 6. $1 * 2 * 3 * \dots * 10$

$x * 2 = 2$ și $2 * y = 2$ pentru orice $x, y$ (un factor e $0$). Folosind asociativitatea:

$$1 * 2 * 3 * \dots * 10 = (1 * 2) * (3 * \dots * 10) = 2 * (3 * \dots * 10) = 2.$$

**Răspuns:** $2$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

$M = \begin{pmatrix}2 & 1\\ -1 & 3\end{pmatrix}$, $A(a) = M + 2aI_2$.

### 1. $\det M$

$2\cdot 3 - 1\cdot(-1) = 7$. *Barem: 3p, 2p.*

### 2. $\det A(a) = 7$

$A(a) = \begin{pmatrix}2 + 2a & 1\\ -1 & 3 + 2a\end{pmatrix}$, $\det = (2 + 2a)(3 + 2a) + 1 = 4a^2 + 10a + 7$.

$4a^2 + 10a = 0 \iff 2a(2a + 5) = 0 \iff a \in \left\{-\frac52, 0\right\}$. *Barem: 3p, 2p.*

### 3. $M\cdot A(a) = A(a)\cdot M$

$MA(a) = M(M + 2aI_2) = M^2 + 2aM$ și $A(a)M = (M + 2aI_2)M = M^2 + 2aM$. $\blacksquare$ *Barem: 2p, 3p.*

### 4. Inversa matricei $A(-1)$

$A(-1) = \begin{pmatrix}0 & 1\\ -1 & 1\end{pmatrix}$, $\det = 0 + 1 = 1$:

$$A(-1)^{-1} = \begin{pmatrix}1 & -1\\ 1 & 0\end{pmatrix}.$$

*Barem: 2p, 3p.*

### 5. $a > 0$ cu suma elementelor lui $A(\log_2 a)$ egală cu $37$

Suma elementelor lui $A(t)$: $(2 + 2t) + 1 - 1 + (3 + 2t) = 5 + 4t$. $5 + 4\log_2 a = 37 \iff \log_2 a = 8 \iff a = 256$.

**Răspuns:** $a = 256$. *Barem: 2p, 3p.*

### 6. $\det A(m)$ este natural impar pentru orice $m \in \mathbb Z$

$\det A(m) = 4m^2 + 10m + 7$ este întreg. Pozitiv: discriminantul $100 - 112 < 0$, deci trinomul e mereu $> 0$ — număr natural. $4m^2$ și $10m$ sunt pare, iar $7$ impar, deci suma este impară. $\blacksquare$

*Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m \in \{1, 5\}$ |
| I.3 | $x = -\tfrac19$ |
| I.4 | $p = \tfrac25$ |
| I.5 | $a = 3$ |
| I.6 | $30^\circ$ |
| II.4 | $x \in \{\tfrac12, 1\}$ |
| II.5 | $x \in [-1, 4]$ |
| II.6 | $2$ |
| III.2 | $a \in \{-\tfrac52, 0\}$ |
| III.5 | $a = 256$ |

## Ce merită reținut din simulare

- **Element „absorbant”:** dacă $x * 2 = 2$ pentru orice $x$, orice compunere care îl conține pe $2$ dă $2$.
- **Teorema sinusurilor** dă două unghiuri posibile — elimină-l pe cel incompatibil cu suma unghiurilor.
- **Paritatea** se citește din termeni: $4m^2 + 10m$ par, $+7$ impar.
