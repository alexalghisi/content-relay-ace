Rezolvarea completă a subiectului de **Bacalaureat 2016 la Matematică M_pedagogic**, **simularea pentru clasa a XII-a**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Numerele naturale $a, b, c$ cu $2016 = 2^a\cdot3^b\cdot7^c$

$2016 = 2\cdot1008 = 2^5\cdot63 = 2^5\cdot3^2\cdot7$.

**Răspuns:** $a = 5$, $b = 2$, $c = 1$. *Barem: 2p descompunerea, 3p valorile.*

### 2. Abscisele punctelor de pe graficul lui $f(x) = 4x^2 - 3$ cu ordonata $1$

$4x^2 - 3 = 1 \iff x^2 = 1 \iff x = \pm1$. *Barem: 3p, 2p.*

### 3. Ecuația $\sqrt{3x + 10} - 2x = 4 - x$

$\sqrt{3x + 10} = x + 4$, cu $x + 4 \ge 0$. Ridicăm la pătrat:

$$3x + 10 = x^2 + 8x + 16 \iff x^2 + 5x + 6 = 0 \iff x \in \{-3, -2\}.$$

Ambele verifică ($\sqrt1 = 1$, $\sqrt4 = 2$). **Răspuns:** $x \in \{-3, -2\}$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr de două cifre să aibă suma cifrelor $\le 10$

Pentru cifra zecilor $a = 1, 2, \dots, 9$, cifra unităților $b \le 10 - a$ (și $b \le 9$): $10, 9, 8, \dots, 2$ variante.

$$10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 = 54 \Rightarrow p = \frac{54}{90} = \frac35.$$

*Barem: 1p, 2p, 2p.*

### 5. Simetricul lui $A(-1,2)$ față de $B(3,5)$

$x_C = 2\cdot3 + 1 = 7$, $y_C = 2\cdot5 - 2 = 8$. **Răspuns:** $C(7, 8)$. *Barem: 3p, 2p.*

### 6. Ipotenuza $BC$, știind perimetrul $72$ și $\sin C = 0{,}8$

$\sin C = \dfrac{AB}{BC} = \dfrac45 \Rightarrow AB = \dfrac45BC$; Pitagora: $AC = \dfrac35BC$.

$$\frac45BC + \frac35BC + BC = 72 \iff \frac{12}{5}BC = 72 \iff BC = 30.$$

**Răspuns:** $BC = 30$. *Barem: 1p, 2p, 2p.*

## Subiectul al II-lea (30 de puncte)

Legea pe $\mathbb R$: $x\circ y = xy + x + y$.

### 1. $(-\sqrt2)\circ\sqrt2$

$$-2 - \sqrt2 + \sqrt2 = -2.$$

*Barem: 3p, 2p.*

### 2. $x\circ y = (x+1)(y+1) - 1$

$$xy + x + y + 1 - 1 = x(y + 1) + (y + 1) - 1 = (x+1)(y+1) - 1.$$

*Barem: 2p, 3p.*

### 3. Ecuația $x^2\circ x = -1$

$(x^2 + 1)(x + 1) = 0$; cum $x^2 + 1 > 0$, $x = -1$. *Barem: 3p, 2p.*

### 4. Legea este asociativă

$$(x\circ y)\circ z = (x+1)(y+1)(z+1) - 1 = x\circ(y\circ z).$$

**Răspuns:** da. *Barem: 2p, 3p.*

### 5. $n\circ n$ este multiplu de 8 pentru $n$ natural par

$n = 2k$: $n\circ n = (2k + 1)^2 - 1 = 4k^2 + 4k = 4k(k+1)$. Produsul a două numere consecutive $k(k+1)$ este par, deci $n\circ n$ este multiplu de $8$. $\blacksquare$ *Barem: 3p, 2p.*

### 6. Exemplu de numere iraționale $a, b$ cu $a\circ b \in \mathbb N$

$a\circ b \in \mathbb N \iff (a+1)(b+1) - 1 \in \mathbb N$. Alegem $a = \sqrt2 - 1$, $b = 2\sqrt2 - 1$ (iraționale):

$$a\circ b = \sqrt2\cdot2\sqrt2 - 1 = 4 - 1 = 3 \in \mathbb N.$$

*Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

$A(x) = \begin{pmatrix}x & x - 1\\1 & 2\end{pmatrix}$, cu $\det A(x) = 2x - (x - 1) = x + 1$.

### 1. $\det(A(2))$

$\det\begin{pmatrix}2&1\\1&2\end{pmatrix} = 3$. *Barem: 2p, 3p.*

### 2. $A(1) + A(3) = 2A(2)$

$$\begin{pmatrix}1&0\\1&2\end{pmatrix} + \begin{pmatrix}3&2\\1&2\end{pmatrix} = \begin{pmatrix}4&2\\2&4\end{pmatrix} = 2A(2).$$

*Barem: 3p, 2p.*

### 3. $n \in \mathbb N$ cu $|\det(A(n))| = 1 - 2n$

$|n + 1| = n + 1 = 1 - 2n \iff 3n = 0 \iff n = 0$. **Răspuns:** $n = 0$. *Barem: 2p, 3p.*

### 4. $x$ cu $\det(xA(x) - 2I_2) \ge 0$

$$xA(x) - 2I_2 = \begin{pmatrix}x^2 - 2 & x^2 - x\\x & 2x - 2\end{pmatrix},$$

$$\det = (x^2 - 2)(2x - 2) - x(x^2 - x) = x^3 - x^2 - 4x + 4 = (x - 1)(x - 2)(x + 2).$$

Semnul: negativ pe $(-\infty, -2)$, pozitiv pe $(-2, 1)$, negativ pe $(1, 2)$, pozitiv pe $(2, +\infty)$.

**Răspuns:** $x \in [-2, 1]\cup[2, +\infty)$. *Barem: 3p determinantul, 2p soluția.*

### 5. $A(x^2)$ este inversabilă pentru orice $x$

$\det A(x^2) = x^2 + 1 > 0$. $\blacksquare$ *Barem: 3p, 2p.*

### 6. $X$ cu $2X + 3A(1) = 4A(2)$

$$2X = 4\begin{pmatrix}2&1\\1&2\end{pmatrix} - 3\begin{pmatrix}1&0\\1&2\end{pmatrix} = \begin{pmatrix}5&4\\1&2\end{pmatrix} \Rightarrow X = \begin{pmatrix}\frac52 & 2\\\frac12 & 1\end{pmatrix}.$$

*Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a = 5$, $b = 2$, $c = 1$ |
| I.2 | $x = \pm1$ |
| I.3 | $x \in \{-3, -2\}$ |
| I.4 | $p = \frac35$ |
| I.5 | $C(7, 8)$ |
| I.6 | $BC = 30$ |
| II.1 | $-2$ |
| II.3 | $x = -1$ |
| II.6 | ex. $a = \sqrt2 - 1$, $b = 2\sqrt2 - 1$ |
| III.1 | $3$ |
| III.3 | $n = 0$ |
| III.4 | $[-2, 1]\cup[2, +\infty)$ |
| III.6 | $X = \begin{pmatrix}\frac52&2\\\frac12&1\end{pmatrix}$ |

## Ce merită reținut din simulare

- **Descompunerea în factori primi** rezolvă direct ecuațiile de tipul $2^a3^b7^c = N$.
- **Legea $(x+1)(y+1) - 1$**: alegerea $a + 1$, $b + 1$ convenabile dă exemple rapide.
- **Produsul a două numere consecutive este par** — argument standard pentru divizibilitate.
- **Inecuații polinomiale**: factorizează și fă tabelul de semn.
