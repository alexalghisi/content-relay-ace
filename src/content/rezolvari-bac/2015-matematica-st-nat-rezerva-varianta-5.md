Rezolvarea completă a subiectului de **Bacalaureat 2015 la Matematică M_șt-nat**, sesiunea de rezervă, **varianta 5**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $(2 - 3i)(2 + 3i)$

$$(2 - 3i)(2 + 3i) = 4 - 9i^2 = 4 + 9 = 13.$$

**Răspuns:** $13$. *Barem: 3p, 2p.*

### 2. $f(f(3))$, $f(x) = 2x - 1$

$f(3) = 5$, $f(5) = 9$.

**Răspuns:** $9$. *Barem: 2p, 3p.*

### 3. Ecuația $\log_3(x^2 + 17) = \log_3 81$

$x^2 + 17 = 81 \iff x^2 = 64 \iff x = \pm 8$ (ambele verifică).

**Răspuns:** $x \in \{-8, 8\}$. *Barem: 2p, 3p.*

### 4. Probabilitatea ca un număr de două cifre să fie divizibil cu 5

Cazuri posibile: **90**. Divizibile cu 5: $10, 15, \dots, 95$ — **18**.

$$p = \frac{18}{90} = \frac15.$$

*Barem: 1p, 2p, 2p.*

### 5. $A(1, a)$, $B(3, 2)$, $C(2, 1)$ coliniare

$m_{BC} = \dfrac{1 - 2}{2 - 3} = 1$, $m_{AB} = \dfrac{2 - a}{3 - 1} = \dfrac{2 - a}{2}$. Coliniare $\iff m_{AB} = m_{BC} \iff 2 - a = 2 \iff a = 0$.

**Răspuns:** $a = 0$. *Barem: 2p, 3p.*

### 6. $E(x) = \sin\frac x3 + \cos\frac x2$; arătați că $E\left(\frac\pi2\right) = \frac{1 + \sqrt2}{2}$

$$E\left(\frac\pi2\right) = \sin\frac\pi6 + \cos\frac\pi4 = \frac12 + \frac{\sqrt2}{2} = \frac{1 + \sqrt2}{2}.$$

*Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix} 1 & 2a\\ 2a & 4\end{pmatrix}$

#### a) $A(1) + A(-1) = 2A(0)$

$$\begin{pmatrix} 1 & 2\\ 2 & 4\end{pmatrix} + \begin{pmatrix} 1 & -2\\ -2 & 4\end{pmatrix} = \begin{pmatrix} 2 & 0\\ 0 & 8\end{pmatrix} = 2\begin{pmatrix} 1 & 0\\ 0 & 4\end{pmatrix} = 2A(0).$$

*Barem: 3p, 2p.*

#### b) $a$ cu $\det(A(a)) = 0$

$$\det A(a) = 4 - 4a^2 = 0 \iff a \in \{-1, 1\}.$$

**Răspuns:** $a \in \{-1, 1\}$. *Barem: 3p, 2p.*

#### c) Ecuația $A(2)\cdot X = A(8)$

$A(2) = \begin{pmatrix} 1 & 4\\ 4 & 4\end{pmatrix}$, $\det A(2) = -12 \ne 0$, deci

$$(A(2))^{-1} = -\frac{1}{12}\begin{pmatrix} 4 & -4\\ -4 & 1\end{pmatrix} = \begin{pmatrix} -\frac13 & \frac13\\ \frac13 & -\frac{1}{12}\end{pmatrix}.$$

$$X = (A(2))^{-1}A(8) = \begin{pmatrix} -\frac13 & \frac13\\ \frac13 & -\frac{1}{12}\end{pmatrix}\begin{pmatrix} 1 & 16\\ 16 & 4\end{pmatrix} = \begin{pmatrix} 5 & -4\\ -1 & 5\end{pmatrix}.$$

**Verificare:** $A(2)X = \begin{pmatrix} 5 - 4 & -4 + 20\\ 20 - 4 & -16 + 20\end{pmatrix} = \begin{pmatrix} 1 & 16\\ 16 & 4\end{pmatrix} = A(8)$ ✔.

**Răspuns:** $X = \begin{pmatrix} 5 & -4\\ -1 & 5\end{pmatrix}$. *Barem: 3p, 2p.*

### 2. $x \circ y = 2xy - 6x - 6y + 21$ (asociativă)

#### a) $(-3)\circ 3 = 3$

$$(-3)\circ 3 = -18 + 18 - 18 + 21 = 3.$$

*Barem: 3p, 2p.*

#### b) $x \circ y = 2(x - 3)(y - 3) + 3$

$$2(xy - 3x - 3y + 9) + 3 = 2xy - 6x - 6y + 21.$$

*Barem: 2p, 3p.*

#### c) $1\circ\sqrt2\circ\sqrt3\circ\dots\circ\sqrt{2015}$

Din b), $x \circ 3 = 3 \circ y = 3$: **$3$ este element absorbant**. Printre factori apare $\sqrt9 = 3$. Prin asociativitate:

$$\left(1\circ\sqrt2\circ\dots\circ\sqrt8\right)\circ 3\circ\left(\sqrt{10}\circ\dots\circ\sqrt{2015}\right) = 3.$$

**Răspuns:** $3$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = 3e^x + x^2$

#### a) $\lim\limits_{x\to 0}\dfrac{f(x) - f(0)}{x} = 3$

Limita este $f'(0)$; $f'(x) = 3e^x + 2x$, $f'(0) = 3$. *Barem: 2p, 3p.*

#### b) Tangenta în punctul de abscisă $x = 0$

$f(0) = 3$, $f'(0) = 3$: $y - 3 = 3x \iff y = 3x + 3$.

**Răspuns:** $y = 3x + 3$. *Barem: 2p, 3p.*

#### c) $f$ este convexă pe $\mathbb R$

$f''(x) = 3e^x + 2 > 0$ pentru orice $x$, deci $f$ este convexă. *Barem: 2p, 3p.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = x + \frac1x$

#### a) $\displaystyle\int_1^3\left(f(x) - \frac1x\right)dx = 4$

$$\int_1^3 x\,dx = \frac{x^2}{2}\Big|_1^3 = \frac{9 - 1}{2} = 4.$$

*Barem: 3p, 2p.*

#### b) $\displaystyle\int_1^2\left(f(x) - \frac1x\right)e^x\,dx = e^2$

Prin părți:

$$\int_1^2 xe^x\,dx = xe^x\Big|_1^2 - \int_1^2 e^x\,dx = 2e^2 - e - (e^2 - e) = e^2.$$

*Barem: 3p, 2p.*

#### c) $a > 1$ știind că aria delimitată de $G_f$, $Ox$, $x = 1$, $x = a$ este $4 + \ln a$

$f > 0$:

$$\mathcal A = \int_1^a\left(x + \frac1x\right)dx = \left(\frac{x^2}{2} + \ln x\right)\Big|_1^a = \frac{a^2 - 1}{2} + \ln a.$$

$$\frac{a^2 - 1}{2} + \ln a = 4 + \ln a \iff a^2 = 9 \Rightarrow a = 3\ (a > 1).$$

**Răspuns:** $a = 3$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $13$ |
| I.2 | $9$ |
| I.3 | $x \in \{-8, 8\}$ |
| I.4 | $p = \tfrac15$ |
| I.5 | $a = 0$ |
| II.1.b | $a \in \{-1, 1\}$ |
| II.1.c | $X = \begin{pmatrix}5&-4\\-1&5\end{pmatrix}$ |
| II.2.c | $3$ |
| III.1.b | $y = 3x + 3$ |
| III.2.c | $a = 3$ |

## Ce merită reținut din varianta 5

- **$(a - bi)(a + bi) = a^2 + b^2$** — produsul cu conjugatul este real.
- **Coliniaritate prin pante**: pantele $AB$ și $BC$ trebuie să fie egale.
- **Element absorbant ascuns**: printre $\sqrt k$ apare $\sqrt 9 = 3$.
- **$\int xe^x\,dx = (x - 1)e^x + C$** — merită reținută.
