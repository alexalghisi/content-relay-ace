Rezolvarea completă a subiectului de **Bacalaureat 2019 la Matematică M_pedagogic**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $4\sqrt5 - \sqrt{75} + \sqrt{108} - \sqrt3 + \sqrt{25} - \sqrt{80} = 5$

Scoatem factorii de sub radical: $\sqrt{75} = 5\sqrt3$, $\sqrt{108} = 6\sqrt3$, $\sqrt{80} = 4\sqrt5$, $\sqrt{25} = 5$:

$$(4\sqrt5 - 4\sqrt5) + (-5\sqrt3 + 6\sqrt3 - \sqrt3) + 5 = 0 + 0 + 5 = 5.\ \blacksquare$$

*Barem: 3p, 2p.*

### 2. $f(x) = x + a$ cu $f(1) = 8$

$1 + a = 8 \iff a = 7$. *Barem: 2p, 3p.*

### 3. Ecuația $\sqrt{2x - 1} = x$

$2x - 1 = x^2 \iff (x - 1)^2 = 0 \iff x = 1$; verificare: $\sqrt1 = 1$ ✔.

**Răspuns:** $x = 1$. *Barem: 2p, 3p.*

### 4. Câte numere de două cifre distincte se pot forma cu cifrele $1, \dots, 9$?

Cifra unităților: 9 moduri; cifra zecilor, diferită de ea: 8 moduri. Total: $9\cdot 8 = 72$ (aranjamente $A_9^2$).

**Răspuns:** $72$. *Barem: 2p, 3p.*

### 5. Intersecția dreptei $y = x - 2$ cu axa $Ox$

Pe $Ox$, $y = 0$: $x - 2 = 0 \iff x = 2$.

**Răspuns:** $(2, 0)$. *Barem: 2p, 3p.*

### 6. Aria triunghiului cu $AB = 6$, $AC = 8$, $BC = 10$

$AB^2 + AC^2 = 36 + 64 = 100 = BC^2$, deci (reciproca teoremei lui Pitagora) triunghiul este dreptunghic în $A$:

$$\mathcal A = \frac{6\cdot 8}{2} = 24.$$

*Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

Legea asociativă: $x * y = xy + x + y$.

### 1. $(-1) * 3 = -1$

$(-1)\cdot 3 + (-1) + 3 = -3 - 1 + 3 = -1$. $\blacksquare$ *Barem: 3p, 2p.*

### 2. $x * y = (x+1)(y+1) - 1$

$xy + x + y + 1 - 1 = x(y + 1) + (y + 1) - 1 = (x + 1)(y + 1) - 1$. $\blacksquare$ *Barem: 2p, 3p.*

### 3. $e = 0$ este element neutru?

$x * 0 = (x + 1)\cdot 1 - 1 = x$ și $0 * x = x$ pentru orice $x$. **Da**, $e = 0$ este elementul neutru. *Barem: 3p, 2p.*

### 4. $-\frac12$ este simetricul lui $1$?

$1 * \left(-\frac12\right) = 2\cdot\frac12 - 1 = 0 = e$ și, analog, $\left(-\frac12\right) * 1 = 0$. **Da.** *Barem: 2p, 3p.*

### 5. $x * x * x = x$

$x * x * x = (x + 1)^3 - 1$, deci $(x+1)^3 - (x + 1) = 0 \iff (x+1)\big((x+1)^2 - 1\big) = 0 \iff x(x+1)(x+2) = 0$.

**Răspuns:** $x \in \{-2, -1, 0\}$. *Barem: 2p, 3p.*

### 6. Probabilitatea ca $n$ (cifră) să verifice $n * n = 3$

10 cazuri posibile. $(n + 1)^2 - 1 = 3 \iff (n+1)^2 = 4 \iff n = 1$ (natural): 1 caz favorabil.

$$p = \frac1{10}.$$

*Barem: 2p, 2p, 1p.*

## Subiectul al III-lea (30 de puncte)

$A(a) = \begin{pmatrix}1 - 2a & 2a\\ -3a & 1 + 3a\end{pmatrix}$.

### 1. $\det A(0) = 1$

$A(0) = I_2$, deci $\det A(0) = 1$. $\blacksquare$ *Barem: 3p, 2p.*

### 2. $A(1) + A(5) = 2A(3)$

$$\begin{pmatrix}-1 & 2\\ -3 & 4\end{pmatrix} + \begin{pmatrix}-9 & 10\\ -15 & 16\end{pmatrix} = \begin{pmatrix}-10 & 12\\ -18 & 20\end{pmatrix} = 2\begin{pmatrix}-5 & 6\\ -9 & 10\end{pmatrix} = 2A(3).\ \blacksquare$$

*Barem: 2p, 3p.*

### 3. $A(1)\cdot A(2) = A(5)$

$$\begin{pmatrix}-1 & 2\\ -3 & 4\end{pmatrix}\begin{pmatrix}-3 & 4\\ -6 & 7\end{pmatrix} = \begin{pmatrix}3 - 12 & -4 + 14\\ 9 - 24 & -12 + 28\end{pmatrix} = \begin{pmatrix}-9 & 10\\ -15 & 16\end{pmatrix} = A(5).\ \blacksquare$$

*Barem: 2p, 3p.*

### 4. Valorile lui $a$ pentru care $A(a)$ este inversabilă

$$\det A(a) = (1 - 2a)(1 + 3a) + 6a^2 = 1 + a - 6a^2 + 6a^2 = 1 + a.$$

Inversabilă $\iff 1 + a \ne 0$.

**Răspuns:** $a \in \mathbb R\setminus\{-1\}$. *Barem: 3p, 2p.*

### 5. $A(a)A(-1) = A(-1)A(a) = A(-1)$

$A(-1) = \begin{pmatrix}3 & -2\\ 3 & -2\end{pmatrix}$.

$$A(a)A(-1) = \begin{pmatrix}3(1 - 2a) + 6a & -2(1-2a) - 4a\\ -9a + 3(1 + 3a) & 6a - 2(1 + 3a)\end{pmatrix} = \begin{pmatrix}3 & -2\\ 3 & -2\end{pmatrix},$$

$$A(-1)A(a) = \begin{pmatrix}3(1-2a) + 6a & 6a - 2(1 + 3a)\\ 3(1-2a) + 6a & 6a - 2(1+3a)\end{pmatrix} = \begin{pmatrix}3 & -2\\ 3 & -2\end{pmatrix}.\ \blacksquare$$

*Barem: 3p, 2p.*

### 6. Numerele naturale nenule $n$ cu $\det A(n^4) < 32$

$\det A(n^4) = 1 + n^4 < 32 \iff n^4 < 31$; $1^4 = 1$, $2^4 = 16$, $3^4 = 81$.

**Răspuns:** $n \in \{1, 2\}$. *Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 7$ |
| I.3 | $x = 1$ |
| I.4 | $72$ |
| I.5 | $(2, 0)$ |
| I.6 | $24$ |
| II.5 | $x \in \{-2, -1, 0\}$ |
| II.6 | $p = \tfrac1{10}$ |
| III.4 | $a \ne -1$ |
| III.6 | $n \in \{1, 2\}$ |

## Ce merită reținut din varianta 7

- **Legea $xy + x + y$** este $(x+1)(y+1) - 1$: neutrul $0$, compunerea de $n$ ori $(x+1)^n - 1$.
- **Reciproca teoremei lui Pitagora** recunoaște triunghiul dreptunghic din laturi.
- **Numere cu cifre distincte:** principiul produsului.
