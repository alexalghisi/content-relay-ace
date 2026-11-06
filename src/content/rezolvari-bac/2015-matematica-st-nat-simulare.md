Rezolvarea completă a **simulării pentru clasa a XII-a, Bacalaureat 2015, la Matematică M_șt-nat**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Numărul real cu partea întreagă $-2$ și partea fracționară $0{,}75$

$x = [x] + \{x\} = -2 + 0{,}75 = -1{,}25$.

**Răspuns:** $-1{,}25$. *Barem: 3p, 2p.*

### 2. Distanța dintre punctele de intersecție ale graficului lui $f(x) = -\frac43x + 4$ cu axele

- cu $Ox$: $-\frac43x + 4 = 0 \iff x = 3$, $A(3, 0)$;
- cu $Oy$: $f(0) = 4$, $B(0, 4)$.

$$AB = \sqrt{9 + 16} = 5.$$

**Răspuns:** $5$. *Barem: 2p, 3p.*

### 3. Ecuația $\left(\frac13\right)^{2x + 10} = 81$

$\left(\frac13\right)^{2x+10} = 3^{-2x-10}$ și $81 = 3^4$, deci $-2x - 10 = 4 \iff x = -7$.

**Răspuns:** $x = -7$. *Barem: 3p, 2p.*

### 4. $n$ cu $C_n^0 + C_n^1 + \dots + C_n^n = 64$

Suma coeficienților binomiali este $2^n$: $2^n = 64 \iff n = 6$.

**Răspuns:** $n = 6$. *Barem: 3p, 2p.*

### 5. $M(-1, 1)$, $N(3, 1)$, $P(3, 5)$; triunghiul $MNP$ este isoscel

$MN = 3 - (-1) = 4$ (segment orizontal), $NP = 5 - 1 = 4$ (segment vertical). Deci $MN = NP$ și triunghiul este isoscel (chiar dreptunghic isoscel în $N$). *Barem: 2p, 3p.*

### 6. Raza cercului înscris în triunghiul cu $AB = 6$, $AC = 8$, $BC = 10$

$36 + 64 = 100$, deci triunghiul este dreptunghic în $A$: $\mathcal A = \frac{6\cdot 8}{2} = 24$. Semiperimetrul $p = 12$.

$$r = \frac{\mathcal A}{p} = \frac{24}{12} = 2.$$

**Răspuns:** $r = 2$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x, a) = \begin{pmatrix} x & a & a\\ -a & x & a\\ -a & -a & x\end{pmatrix}$

#### a) $\det(A(2, 0))$

$A(2, 0) = 2I_3$, deci $\det = 2^3 = 8$.

**Răspuns:** $8$. *Barem: 3p, 2p.*

#### b) $A(x, a) + A(x, -a) = 2xA(1, 0)$

Elementele din afara diagonalei se anulează:

$$A(x, a) + A(x, -a) = \begin{pmatrix} 2x & 0 & 0\\ 0 & 2x & 0\\ 0 & 0 & 2x\end{pmatrix} = 2x I_3 = 2x A(1, 0).$$

*Barem: 2p, 3p.*

#### c) Ecuația $\det(A(x, -3)) = 0$

$$A(x, -3) = \begin{pmatrix} x & -3 & -3\\ 3 & x & -3\\ 3 & 3 & x\end{pmatrix}.$$

Regula lui Sarrus:

$$\det = x^3 + 27 - 27 - (-9x - 9x - 9x) = x^3 + 27x = x(x^2 + 27).$$

$x^2 + 27 > 0$, deci singura soluție reală este $x = 0$.

**Răspuns:** $x = 0$. *Barem: 3p, 2p.*

### 2. $x \circ y = 3xy + 3x + 3y + 2$ (asociativă)

#### a) $x \circ y = 3(x + 1)(y + 1) - 1$

$$3(xy + x + y + 1) - 1 = 3xy + 3x + 3y + 2.$$

*Barem: 2p, 3p.*

#### b) Numerele întregi $a, b$ cu $a \circ b = 2$

$3(a + 1)(b + 1) - 1 = 2 \iff (a + 1)(b + 1) = 1$. În $\mathbb Z$: $a + 1 = b + 1 = 1$ sau $a + 1 = b + 1 = -1$.

**Răspuns:** $(a, b) \in \{(0, 0), (-2, -2)\}$. *Barem: 2p, 3p.*

#### c) $(-1)\circ 0\circ 1\circ\dots\circ 2015$

Din a), $(-1)\circ x = 3\cdot 0\cdot(x + 1) - 1 = -1$ pentru orice $x$. Prin asociativitate:

$$(-1)\circ(0\circ 1\circ\dots\circ 2015) = -1.$$

**Răspuns:** $-1$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = xe^x - e^x + 1$

#### a) $f'(x)$

$$f'(x) = e^x + xe^x - e^x = xe^x.$$

*Barem: 3p, 2p.*

#### b) Asimptota orizontală spre $-\infty$

$\lim\limits_{x\to-\infty} xe^x = \lim\limits_{x\to-\infty}\dfrac{x}{e^{-x}} \overset{\text{l'H}}{=} \lim\limits_{x\to-\infty}\dfrac{1}{-e^{-x}} = 0$ și $\lim\limits_{x\to-\infty} e^x = 0$, deci

$$\lim_{x\to-\infty} f(x) = 0 - 0 + 1 = 1.$$

**Răspuns:** $y = 1$. *Barem: 3p, 2p.*

#### c) Intervalele de monotonie

$f'(x) = xe^x = 0 \iff x = 0$; semnul lui $f'$ este semnul lui $x$.

**Răspuns:** $f$ descrescătoare pe $(-\infty, 0]$, crescătoare pe $[0, +\infty)$. *Barem: 1p, 2p, 2p.*

### 2. $f(x) = 4x^3 + 3x^2 + 2x + 1$

#### a) $\displaystyle\int_0^1 f(x)\,dx$

$$\int_0^1(4x^3 + 3x^2 + 2x + 1)\,dx = (x^4 + x^3 + x^2 + x)\Big|_0^1 = 4.$$

**Răspuns:** $4$. *Barem: 3p, 2p.*

#### b) Primitiva $F$ cu $F(-1) = 1$

$F(x) = x^4 + x^3 + x^2 + x + c$; $F(-1) = 1 - 1 + 1 - 1 + c = c = 1$.

**Răspuns:** $F(x) = x^4 + x^3 + x^2 + x + 1$. *Barem: 2p, 3p.*

#### c) $\displaystyle\int_0^a f(x)\,dx + \frac1a\int_a^0 f(x)\,dx = a^4 - 1$, pentru $a \ne 0$

Fie $G(x) = x^4 + x^3 + x^2 + x$ (primitivă cu $G(0) = 0$). Atunci

$$\int_0^a f = G(a), \qquad \frac1a\int_a^0 f = -\frac{G(a)}{a} = -(a^3 + a^2 + a + 1).$$

$$G(a) - (a^3 + a^2 + a + 1) = a^4 + a^3 + a^2 + a - a^3 - a^2 - a - 1 = a^4 - 1. \ \blacksquare$$

*Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $-1{,}25$ |
| I.2 | $5$ |
| I.3 | $x = -7$ |
| I.4 | $n = 6$ |
| I.6 | $r = 2$ |
| II.1.a | $8$ |
| II.1.c | $x = 0$ |
| II.2.b | $(0,0)$, $(-2,-2)$ |
| II.2.c | $-1$ |
| III.1.b | $y = 1$ |
| III.2.a | $4$ |
| III.2.b | $F(x) = x^4 + x^3 + x^2 + x + 1$ |

## Ce merită reținut din simulare

- **$x = [x] + \{x\}$**, cu $\{x\} \in [0, 1)$ — și pentru numere negative.
- **$\sum_{k=0}^n C_n^k = 2^n$** (suma coeficienților binomiali).
- **$\lim\limits_{x\to-\infty} xe^x = 0$** — exponențiala „câștigă".
- **$\int_a^0 f = -\int_0^a f$** — schimbarea limitelor schimbă semnul.
