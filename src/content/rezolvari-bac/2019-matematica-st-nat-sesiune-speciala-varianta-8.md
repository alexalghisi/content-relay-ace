Rezolvarea completă a subiectului de **Bacalaureat 2019 la Matematică M_șt-nat**, sesiunea specială, **varianta 8**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $(1 + i)^2 - 2i = 0$

$(1 + i)^2 = 1 + 2i + i^2 = 2i$, deci $2i - 2i = 0$. $\blacksquare$ *Barem: 3p, 2p.*

### 2. $f(x) = mx^2 + 8x - 7$, abscisa vârfului egală cu $12$

$x_V = -\frac{b}{2a} = -\frac{8}{2m} = 12 \iff m = -\frac13$.

**Răspuns:** $m = -\dfrac13$. *Barem: 3p, 2p.*

### 3. Ecuația $\log_4(x^2 - 10x + 40) = 2$

$x^2 - 10x + 40 = 16 \iff x^2 - 10x + 24 = 0 \iff x \in \{4, 6\}$ (ambele convin, argumentul fiind $16 > 0$).

**Răspuns:** $x \in \{4, 6\}$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr din $\{1, 2, \dots, 100\}$ să fie impar

$p = \frac{50}{100} = \frac12$. *Barem: 2p, 2p, 1p.*

### 5. $ABCD$ paralelogram, $A(2,-1)$, $B(-2,0)$, $C(0,3)$: lungimea lui $\overrightarrow{BD}$

Regula paralelogramului: $\overrightarrow{BD} = \overrightarrow{BA} + \overrightarrow{BC} = (4\vec i - \vec j) + (2\vec i + 3\vec j) = 6\vec i + 2\vec j$.

$|\overrightarrow{BD}| = \sqrt{36 + 4} = 2\sqrt{10}$.

**Răspuns:** $2\sqrt{10}$. *Barem: 2p, 3p.*

### 6. $x \in \left(0, \frac\pi2\right)$, $\sin x = \frac{\sqrt3}{2}$: arătați că $\sin3x + \sin2x + \sin x = \sqrt3$

$x = \frac\pi3$, deci $\sin\pi + \sin\frac{2\pi}{3} + \sin\frac\pi3 = 0 + \frac{\sqrt3}2 + \frac{\sqrt3}2 = \sqrt3$. $\blacksquare$ *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}1 & 1\\ 3 & 3\end{pmatrix}$, $M(a) = I_2 + aA$

**a)** $M(1) = \begin{pmatrix}2 & 1\\ 3 & 4\end{pmatrix}$, $\det = 8 - 3 = 5$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $A^2 = \begin{pmatrix}4 & 4\\ 12 & 12\end{pmatrix} = 4A$, deci

$$M(a)M(b) = I_2 + (a + b)A + abA^2 = I_2 + (a + b + 4ab)A = M(a + b + 4ab).\ \blacksquare$$

*Barem: 2p, 3p.*

**c)** $M(a)^2 = M(2a + 4a^2) = M(2)$. Cum $A \ne O_2$, $M$ este injectivă în parametru: $4a^2 + 2a - 2 = 0 \iff 2a^2 + a - 1 = 0 \iff a \in \left\{-1, \frac12\right\}$.

**Răspuns:** $a \in \left\{-1, \frac12\right\}$. *Barem: 3p, 2p.*

### 2. $x * y = 5x + 5y - xy - 20$

**a)** $-xy + 5x + 5y - 25 + 5 = -x(y - 5) + 5(y - 5) + 5 = -(x - 5)(y - 5) + 5$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $-(x - 5)^2 + 5 \ge x \iff (x - 5)^2 + (x - 5) \le 0 \iff (x - 5)(x - 4) \le 0 \iff x \in [4, 5]$. *Barem: 3p, 2p.*

**c)** $x * 5 = 5 * x = 5$ pentru orice $x$ (element „absorbant”) — atenție, din a): $-(x - 5)\cdot 0 + 5 = 5$. Grupând (asociativitate):

$$\big(1 * (-2) * 3 * (-4)\big) * 5 * \big((-6) * \dots * 2019\big) = 5.$$

**Răspuns:** $5$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x^2 + 6x + 9}{e^x} = (x + 3)^2e^{-x}$

**a)** $$f'(x) = \frac{(2x + 6)e^x - (x^2 + 6x + 9)e^x}{e^{2x}} = \frac{-x^2 - 4x - 3}{e^x} = \frac{-(x + 1)(x + 3)}{e^x}.\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** L'Hospital de două ori: $\lim\limits_{x\to+\infty}\frac{x^2 + 6x + 9}{e^x} = \lim\frac{2x + 6}{e^x} = \lim\frac{2}{e^x} = 0$. Asimptota: $y = 0$. *Barem: 3p, 2p.*

**c)** $f' \ge 0$ pe $[-3, -1]$, $f' \le 0$ pe $[-1, +\infty)$, deci pe $[-3, +\infty)$: $f(x) \le f(-1) = 4e$, adică $(x + 3)^2 \le 4e^{x+1}$. Cum $x + 3 \ge 0$:

$$0 \le x + 3 \le 2e^{\frac{x+1}{2}},\qquad 0 \le y + 3 \le 2e^{\frac{y+1}{2}}.$$

Înmulțind (numere nenegative): $0 \le (x + 3)(y + 3) \le 4e^{\frac{x + y + 2}{2}}$. $\blacksquare$

*Barem: 3p, 2p.*

### 2. $f(x) = \dfrac{x^3}{x + 1}$, $x > -1$

**a)** $\int_0^2(x+1)f(x)\,dx = \int_0^2 x^3dx = \frac{16}{4} = 4$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $$F'(x) = x^2 - x + 1 - \frac{1}{x + 1} = \frac{(x^2 - x + 1)(x + 1) - 1}{x + 1} = \frac{x^3 + 1 - 1}{x + 1} = \frac{x^3}{x+1} = f(x).\ \blacksquare$$

*Barem: 3p, 2p.*

**c)** $g(x) = \frac{1}{x^3}f(x) = \frac{1}{x + 1} > 0$:

$$\mathcal A = \int_1^{a^2}\frac{dx}{x + 1} = \ln(a^2 + 1) - \ln 2 = \ln 5 \iff a^2 + 1 = 10 \iff a = 3\ (a > 1).$$

**Răspuns:** $a = 3$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = -\tfrac13$ |
| I.3 | $x \in \{4, 6\}$ |
| I.4 | $p = \tfrac12$ |
| I.5 | $2\sqrt{10}$ |
| II.1.c | $a \in \{-1, \tfrac12\}$ |
| II.2.b | $x \in [4, 5]$ |
| II.2.c | $5$ |
| III.1.b | $y = 0$ |
| III.2.c | $a = 3$ |

## Ce merită reținut din varianta 8

- **$A^2 = kA$** face ca $M(a) = I_2 + aA$ să se înmulțească după regula $a + b + kab$.
- **Element absorbant** ($x * 5 = 5$): orice compunere care îl conține dă $5$.
- **Inegalități cu două variabile:** obține-o pentru o variabilă din maximul funcției, apoi înmulțește.
