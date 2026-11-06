Rezolvarea completă a subiectului de **Bacalaureat 2013 la Matematică M_șt-nat**, **modelul oficial** publicat de CNEE. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Produsul primilor trei termeni ai progresiei aritmetice cu $a_1 = 2$, $a_2 = 1$

$r = a_2 - a_1 = -1$, deci $a_3 = 0$, iar $a_1a_2a_3 = 2\cdot1\cdot0 = 0$.

**Răspuns:** $0$. *Barem: 2p rația, 2p $a_3$, 1p produsul.*

### 2. $m$ pentru care $x^2 - 2x - m > 0$ pentru orice $x$ real

Coeficientul dominant este pozitiv, deci condiția este $\Delta < 0$:

$$\Delta = 4 + 4m < 0 \iff m < -1.$$

**Răspuns:** $m \in (-\infty, -1)$. *Barem: 3p condiția, 2p intervalul.*

### 3. Ecuația $\log_2 x + \log_2(x - 1) = \log_2 12$

**Condiții:** $x > 0$ și $x - 1 > 0$, deci $x > 1$.

$$\log_2\big(x(x-1)\big) = \log_2 12 \iff x^2 - x - 12 = 0 \iff x \in \{-3, 4\}.$$

$x = -3$ nu convine. **Răspuns:** $x = 4$. *Barem: 3p ecuația, 2p selectarea.*

### 4. Probabilitatea ca un număr de trei cifre să aibă produsul cifrelor $3$

Cifrele trebuie să fie $1, 1, 3$: numerele $113, 131, 311$ — **3** cazuri favorabile din **900** posibile.

$$p = \frac{3}{900} = \frac{1}{300}.$$

*Barem: 1p formula, 2p favorabile, 1p posibile, 1p probabilitatea.*

### 5. $\vec a\cdot\vec b$, știind $|\vec a| = 2$, $|\vec b| = 3$ și unghiul $\frac\pi3$

$$\vec a\cdot\vec b = |\vec a|\cdot|\vec b|\cdot\cos\frac\pi3 = 2\cdot3\cdot\frac12 = 3.$$

**Răspuns:** $3$. *Barem: 3p formula, 2p calculul.*

### 6. Ortocentrul triunghiului $A(1,3)$, $B(0,1)$, $C(3,1)$

$BC$ este paralelă cu $Ox$ ($y_B = y_C = 1$), deci înălțimea din $A$ este dreapta verticală $x = 1$: $x_H = 1$.

$m_{AC} = \dfrac{1 - 3}{3 - 1} = -1$, iar înălțimea din $B$ este perpendiculară pe $AC$: $m_{BH} = 1$, deci $BH: y = x + 1$. Pentru $x = 1$: $y_H = 2$.

**Răspuns:** $H(1, 2)$. *Barem: 2p $x_H$, 2p condiția de perpendicularitate, 1p $y_H$.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}0&0&1\\2n+1&n&1\\2n^2+1&n^2&1\end{pmatrix}$, $n \in \mathbb N$

#### a) Suma elementelor matricei

$$1 + (2n + 1 + n + 1) + (2n^2 + 1 + n^2 + 1) = 3n^2 + 3n + 5.$$

**Răspuns:** $3n^2 + 3n + 5$. *Barem: 3p suma, 2p rezultatul.*

#### b) $n$ natural cu $\det A \ne 0$

Dezvoltăm după prima linie:

$$\det A = 1\cdot\begin{vmatrix}2n+1 & n\\2n^2+1 & n^2\end{vmatrix} = (2n+1)n^2 - n(2n^2 + 1) = n^2 - n = n(n-1).$$

$\det A \ne 0 \iff n \notin \{0, 1\}$. **Răspuns:** $n \in \mathbb N\setminus\{0, 1\}$. *Barem: 2p determinantul, 3p concluzia.*

#### c) $n \ge 2$ pentru care aria triunghiului $OA_nA_{n^2}$ este $n^2 - 3$

$O(0,0)$, $A_n(2n+1, n)$, $A_{n^2}(2n^2+1, n^2)$. Determinantul ariei este exact $\det A = n^2 - n > 0$ pentru $n \ge 2$, deci

$$\mathcal A = \frac12(n^2 - n) = n^2 - 3 \iff n^2 + n - 6 = 0 \iff n \in \{2, -3\}.$$

**Răspuns:** $n = 2$. *Barem: 1p formula ariei, 3p ecuația, 1p soluția.*

### 2. $x\circ y = x + ay + 1$, $a \in \mathbb R$

#### a) Pentru $a = 1$: $2011\circ2012$

$$2011 + 2012 + 1 = 4024.$$

*Barem: 3p înlocuirea, 2p rezultatul.*

#### b) $a$ pentru care legea este asociativă

$$(x\circ y)\circ z = (x + ay + 1) + az + 1 = x + ay + az + 2,$$

$$x\circ(y\circ z) = x + a(y + az + 1) + 1 = x + ay + a^2z + a + 1.$$

Egalitatea pentru orice $x, y, z$ cere $a^2 = a$ și $a + 1 = 2$, deci $a = 1$.

**Răspuns:** $a = 1$. *Barem: 2p + 2p compunerile, 1p valoarea.*

#### c) Pentru $a = -1$: ecuația $4^x\circ 2^x = 1$

$$4^x - 2^x + 1 = 1 \iff (2^x)^2 - 2^x = 0 \iff 2^x(2^x - 1) = 0.$$

$2^x > 0$, deci $2^x = 1$, adică $x = 0$. **Răspuns:** $x = 0$. *Barem: 2p substituția, 3p soluția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,+\infty)\to\mathbb R$, $f(x) = x + \ln x$

#### a) $\displaystyle\lim_{x\to2}\frac{f(x) - f(2)}{x-2} = \frac32$

Limita este $f'(2)$, iar $f'(x) = 1 + \dfrac1x$, deci $f'(2) = \dfrac32$. *Barem: 2p definiția, 2p derivata, 1p valoarea.*

#### b) Tangenta în $x = 1$

$f(1) = 1$, $f'(1) = 2$: $y - 1 = 2(x - 1) \iff y = 2x - 1$.

**Răspuns:** $y = 2x - 1$. *Barem: 2p formula, 2p valorile, 1p ecuația.*

#### c) $f$ este concavă pe $(0, +\infty)$

$f''(x) = -\dfrac{1}{x^2} < 0$ pentru orice $x > 0$. *Barem: 2p $f''$, 2p semnul, 1p concluzia.*

### 2. $f_n(x) = (x + n)e^x$

#### a) $\displaystyle\int_0^1 f_1(x)\,dx$

Prin părți:

$$\int_0^1(x+1)e^x\,dx = (x+1)e^x\Big|_0^1 - \int_0^1 e^x\,dx = (2e - 1) - (e - 1) = e.$$

**Răspuns:** $e$. *Barem: 2p integrarea prin părți, 3p calculul.*

#### b) $f_{2011}$ este o primitivă a lui $f_{2012}$

$$f_{2011}'(x) = e^x + (x + 2011)e^x = (x + 2012)e^x = f_{2012}(x).$$

*Barem: 3p derivata, 2p concluzia.*

#### c) $\displaystyle\int_0^1 f_n(x)\,dx \ge \frac{9n+5}{6}$

Pe $[0,1]$, $x + n > 0$ și $e^x \ge x + 1$, deci $(x + n)e^x \ge (x + n)(x + 1)$. Integrând:

$$\int_0^1 f_n(x)\,dx \ge \int_0^1\big(x^2 + (n+1)x + n\big)dx = \frac13 + \frac{n+1}{2} + n = \frac{2 + 3n + 3 + 6n}{6} = \frac{9n + 5}{6}. \ \blacksquare$$

*Barem: 1p inegalitatea, 1p integrarea, 2p calculul, 1p finalizarea.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $0$ |
| I.2 | $m < -1$ |
| I.3 | $x = 4$ |
| I.4 | $p = \frac1{300}$ |
| I.5 | $3$ |
| I.6 | $H(1, 2)$ |
| II.1.a | $3n^2 + 3n + 5$ |
| II.1.b | $n \ge 2$ |
| II.1.c | $n = 2$ |
| II.2.a | $4024$ |
| II.2.b | $a = 1$ |
| II.2.c | $x = 0$ |
| III.1.b | $y = 2x - 1$ |
| III.2.a | $e$ |

## Ce merită reținut din model

- **Trinom pozitiv pentru orice $x$**: coeficient dominant $> 0$ și $\Delta < 0$.
- **Ortocentrul**: intersectează două înălțimi; o latură paralelă cu o axă simplifică mult.
- **Asociativitate cu parametru**: identifică coeficienții lui $z$ și termenii liberi.
- **Inegalitatea $e^x \ge x + 1$** permite minorarea integralelor.
