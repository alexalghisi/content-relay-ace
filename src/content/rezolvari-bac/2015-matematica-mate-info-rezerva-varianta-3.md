Rezolvarea completă a subiectului de **Bacalaureat 2015 la Matematică M_mate-info**, sesiunea de rezervă, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Rația progresiei aritmetice cu $a_1 = 1$, $a_2 = 2015$

$r = a_2 - a_1 = 2014$. *Barem: 3p, 2p.*

### 2. Valoarea maximă a lui $f:[1,4] \to \mathbb R$, $f(x) = x + 1$

$f$ este crescătoare, deci maximul este $f(4) = 5$. **Răspuns:** $5$. *Barem: 3p, 2p.*

### 3. $\log_3(x^2 - 8x) = \log_3 9$

$x^2 - 8x = 9 \iff x^2 - 8x - 9 = 0 \iff (x - 9)(x + 1) = 0$; ambele dau argumentul $9 > 0$.

**Răspuns:** $x \in \{-1, 9\}$. *Barem: 3p, 2p.*

### 4. Numere de trei cifre distincte cu elemente din $\{1, 2, 3, 4\}$

$4\cdot 3\cdot 2 = 24$. **Răspuns:** 24. *Barem: 2p, 3p.*

### 5. $D$ astfel încât $ABCD$ să fie paralelogram, $A(3,3)$, $B(6,3)$, $C(4,0)$

Diagonalele se înjumătățesc: $x_A + x_C = x_B + x_D$, $y_A + y_C = y_B + y_D$, deci $x_D = 1$, $y_D = 0$.

**Răspuns:** $D(1, 0)$. *Barem: 3p, 2p.*

### 6. $BC$, știind $AB = 1$, $B = \dfrac\pi3$, $C = \dfrac\pi6$

$A = \pi - \dfrac\pi3 - \dfrac\pi6 = \dfrac\pi2$, deci $BC$ este ipotenuza și $AB$ cateta opusă unghiului de $30^\circ$: $BC = 2AB = 2$.

**Răspuns:** $BC = 2$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix} 1 & a & a + 1\\ 0 & 1 & a + 2\\ 0 & 0 & 1\end{pmatrix}$

#### a) $\det(A(1)) = 1$

Matrice superior triunghiulară cu diagonala $1, 1, 1$: $\det = 1$. *Barem: 2p, 3p.*

#### b) $a$ cu $A^2(a) - 2A(a) + I_3 = O_3$

$$A^2(a) = \begin{pmatrix} 1 & 2a & a^2 + 4a + 2\\ 0 & 1 & 2a + 4\\ 0 & 0 & 1\end{pmatrix}, \qquad A^2(a) - 2A(a) + I_3 = \begin{pmatrix} 0 & 0 & a^2 + 2a\\ 0 & 0 & 0\\ 0 & 0 & 0\end{pmatrix}.$$

$a^2 + 2a = 0 \iff a \in \{-2, 0\}$.

**Răspuns:** $a \in \{-2, 0\}$. *Barem: 2p, 1p, 2p.*

#### c) $A(2) + A(4) + \ldots + A(100) = 50A(51)$

Elementele lui $A(a)$ depind liniar de $a$, deci $A(x) + A(y) = 2A\left(\frac{x+y}{2}\right)$. Grupăm termenii simetric:

$$A(2) + A(100) = A(4) + A(98) = \dots = A(50) + A(52) = 2A(51).$$

Sunt 50 de termeni, adică 25 de perechi: suma este $25\cdot 2A(51) = 50A(51)$. $\blacksquare$ *Barem: 3p, 2p.*

### 2. $f = X^3 - 4X^2 + mX + 2$

#### a) $f(0) = 2$

Termenul liber este $2$. *Barem: 3p, 2p.*

#### b) $m$ cu $x_1 = x_2 + x_3$

$x_1 + x_2 + x_3 = 4 \Rightarrow 2x_1 = 4 \Rightarrow x_1 = 2$. $f(2) = 8 - 16 + 2m + 2 = 2m - 6 = 0 \iff m = 3$.

**Răspuns:** $m = 3$. *Barem: 2p, 3p.*

#### c) Pentru $m = 8$, $f$ nu are toate rădăcinile reale

Viète: $\sum x_i = 4$, $\sum x_ix_j = 8$, deci $\sum x_i^2 = 16 - 16 = 0$. Dacă toate rădăcinile ar fi reale, ar rezulta $x_1 = x_2 = x_3 = 0$, dar $f(0) = 2 \ne 0$ — contradicție. $\blacksquare$ *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = e^x(x^2 - 6x + 9)$

#### a) $f'(x) = e^x(x^2 - 4x + 3)$

$f'(x) = e^x(x^2 - 6x + 9) + e^x(2x - 6) = e^x(x^2 - 4x + 3)$. *Barem: 3p, 2p.*

#### b) Monotonia

$f'(x) = e^x(x - 1)(x - 3)$: $f$ crescătoare pe $(-\infty, 1]$, descrescătoare pe $[1, 3]$, crescătoare pe $[3, +\infty)$. *Barem: 2p, 1p, 1p, 1p.*

#### c) $e^x(x - 3)^2 \le 4e$ pentru $x \in (-\infty, 3]$

Din b), pe $(-\infty, 3]$ maximul lui $f$ este $f(1) = 4e$, deci $e^x(x - 3)^2 = f(x) \le 4e$. $\blacksquare$ *Barem: 3p, 2p.*

### 2. $I_n = \displaystyle\int_0^1(1 - x^3)^n\,dx$

#### a) $I_1 = \dfrac34$

$$\int_0^1(1 - x^3)\,dx = \left(x - \frac{x^4}{4}\right)\Big|_0^1 = \frac34.$$

*Barem: 3p, 2p.*

#### b) $I_{n+1} \le I_n$

$$I_{n+1} - I_n = \int_0^1(1 - x^3)^n\big((1 - x^3) - 1\big)dx = \int_0^1(-x^3)(1 - x^3)^n\,dx \le 0,$$

căci pe $[0,1]$: $-x^3 \le 0$ și $(1 - x^3)^n \ge 0$. $\blacksquare$ *Barem: 2p, 3p.*

#### c) $I_{n+1} = \dfrac{3(n+1)}{3n + 4}I_n$

Prin părți cu $u = (1 - x^3)^{n+1}$, $v' = 1$:

$$I_{n+1} = x(1 - x^3)^{n+1}\Big|_0^1 + 3(n + 1)\int_0^1 x^3(1 - x^3)^n\,dx.$$

Primul termen e $0$. Scriem $x^3 = 1 - (1 - x^3)$: integrala devine $I_n - I_{n+1}$. Deci

$$I_{n+1} = 3(n + 1)(I_n - I_{n+1}) \iff (3n + 4)I_{n+1} = 3(n + 1)I_n. \ \blacksquare$$

*Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $r = 2014$ |
| I.2 | $5$ |
| I.3 | $x \in \{-1, 9\}$ |
| I.4 | 24 |
| I.5 | $D(1, 0)$ |
| I.6 | $BC = 2$ |
| II.1.b | $a \in \{-2, 0\}$ |
| II.2.b | $m = 3$ |
| III.2.a | $\tfrac34$ |

## Ce merită reținut din varianta 3

- **Paralelogram**: $x_A + x_C = x_B + x_D$ (diagonalele au același mijloc).
- **Matrice cu elemente liniare în $a$**: $A(x) + A(y) = 2A\left(\frac{x+y}2\right)$ — grupează termenii simetric.
- **$\sum x_i^2 = 0$ cu rădăcini reale** forțează toate rădăcinile nule.
- **Recurențe pentru $\int(1 - x^3)^n$**: prin părți cu $v = x$, apoi $x^3 = 1 - (1 - x^3)$.
