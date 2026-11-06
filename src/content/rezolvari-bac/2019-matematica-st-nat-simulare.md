Rezolvarea completă a subiectului de la **simularea Bacalaureatului 2019 (clasa a XII-a) la Matematică M_șt-nat**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z$ cu $3z + 2\bar z = 5 + 2i$

Fie $z = a + bi$: $3a + 3bi + 2a - 2bi = 5a + bi = 5 + 2i \Rightarrow a = 1$, $b = 2$.

**Răspuns:** $z = 1 + 2i$. *Barem: 3p, 2p.*

### 2. $f(x) = x + a$ cu $(f\circ f\circ f)(x) = x + 3$

$(f\circ f)(x) = x + 2a$, $(f\circ f\circ f)(x) = x + 3a = x + 3 \Rightarrow a = 1$. *Barem: 3p, 2p.*

### 3. Ecuația $\log_3(2x + 3) - \log_3 x = 1$

Condiție $x > 0$. $\log_3\frac{2x + 3}{x} = 1 \iff 2x + 3 = 3x \iff x = 3$, care convine. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr de trei cifre să fie divizibil cu 10

900 de cazuri posibile; multiplii lui 10: $100, 110, \dots, 990$ — 90 de cazuri. $p = \frac{90}{900} = \frac1{10}$. *Barem: 1p, 2p, 2p.*

### 5. $\vec u = (a+1)\vec i + (5a - 1)\vec j$, $\vec v = \vec i + 3\vec j$ coliniari

$\frac{a + 1}{1} = \frac{5a - 1}{3} \iff 3a + 3 = 5a - 1 \iff a = 2$. *Barem: 3p, 2p.*

### 6. Aria lui $\triangle ABC$ cu $AB = 6$, $AC = 10$, $\cos A = \frac35$

$\sin A = \sqrt{1 - \frac9{25}} = \frac45$ (unghi de triunghi, sinus pozitiv).

$$\mathcal A = \frac{AB\cdot AC\cdot\sin A}{2} = \frac{6\cdot10\cdot\frac45}{2} = 24.$$

*Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $M(x) = \begin{pmatrix}x + 1 & 0 & x + 2\\ 0 & x & 0\\ 3 - x & 0 & 4 - x\end{pmatrix}$

**a)** $M(-1) = \begin{pmatrix}0 & 0 & 1\\ 0 & -1 & 0\\ 4 & 0 & 5\end{pmatrix}$. Dezvoltând după linia a doua: $\det = -1\cdot(0\cdot5 - 1\cdot 4) = 4$.

**Răspuns:** $4$. *Barem: 2p, 3p.*

**b)** $$M(x) + M(y) = \begin{pmatrix}x + y + 2 & 0 & x + y + 4\\ 0 & x + y & 0\\ 6 - x - y & 0 & 8 - x - y\end{pmatrix} = \begin{pmatrix}1&0&2\\0&0&0\\3&0&4\end{pmatrix} + M(x + y) = M(0) + M(x+y).\ \blacksquare$$

*Barem: 3p, 2p.*

**c)** Cu $M(1) = \begin{pmatrix}2 & 0 & 3\\ 0 & 1 & 0\\ 2 & 0 & 3\end{pmatrix}$:

$$M(m)M(1) = \begin{pmatrix}4m + 6 & 0 & 6m + 9\\ 0 & m & 0\\ 14 - 4m & 0 & 21 - 6m\end{pmatrix},\quad M(1)M(n) = \begin{pmatrix}11 - n & 0 & 16 - n\\ 0 & n & 0\\ 11 - n & 0 & 16 - n\end{pmatrix}.$$

Sumele elementelor: $50 + m$, respectiv $54 - 3n$. Egalitatea: $m + 3n = 4$, cu $m, n \in \mathbb N$: $(m, n) \in \{(4, 0), (1, 1)\}$.

*Barem: 2p, 3p.*

### 2. $x * y = 4x + 4y - 4xy - 3$

**a)** $1 - 4xy + 4x + 4y - 4 = 1 - 4x(y - 1) + 4(y - 1) = 1 - 4(x - 1)(y - 1)$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $x * \frac1x = 1 - 4(x - 1)\cdot\frac{1 - x}{x} = 1 + \frac{4(x-1)^2}{x} \ge 1$ pentru $x > 0$. $\blacksquare$ *Barem: 3p, 2p.*

**c)** Cu $t = x - 1$: $x * x = 1 - 4t^2$, $x * x * x = 1 + 4^2t^3$, $x * x * x * x = 1 - 4^3t^4$. Ecuația $1 - 64t^4 = 1 + t \iff t(1 + 64t^3) = 0 \iff t = 0$ sau $t = -\frac14$.

**Răspuns:** $x \in \left\{\frac34, 1\right\}$. *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = 5\ln x - x^2 - 3x$, $x > 0$

**a)** $f'(x) = \frac5x - 2x - 3 = \frac{-2x^2 - 3x + 5}{x} = \frac{(1 - x)(2x + 5)}{x}$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $f''(x) = -\frac{5}{x^2} - 2 = \frac{-2x^2 - 5}{x^2} < 0$, deci $f$ este concavă. $\blacksquare$ *Barem: 2p, 3p.*

**c)** $f' \ge 0$ pe $(0, 1]$, $f' \le 0$ pe $[1, +\infty)$, deci $f(x) \le f(1) = -4$: $5\ln x - x^2 - 3x \le -4 \iff 5\ln x \le x^2 + 3x - 4$. $\blacksquare$ *Barem: 3p, 2p.*

### 2. $f(x) = (x^2 + 4x + 5)e^x$

**a)** $x^2 + 4x + 5 = (x + 2)^2 + 1 > 0$, deci $F' = f > 0$ și orice primitivă este (strict) crescătoare. $\blacksquare$ *Barem: 2p, 3p.*

**b)** $f(x) - x^2e^x - 5e^x = 4xe^x$, iar $\int xe^x = (x - 1)e^x$:

$$\int_0^1 4xe^xdx = 4(x - 1)e^x\Big|_0^1 = 0 - 4\cdot(-1) = 4.$$

**Răspuns:** $4$. *Barem: 3p, 2p.*

**c)** Pe $[-3, -1]$: $(x + 2)^2 \in [0, 1]$, deci $1 \le x^2 + 4x + 5 \le 2$ și $e^x \le f(x) \le 2e^x$. Integrând:

$$\int_{-3}^{-1}e^xdx = e^{-1} - e^{-3} = \frac{e^2 - 1}{e^3} \;\Rightarrow\; \frac{e^2 - 1}{e^3} \le \int_{-3}^{-1}f(x)\,dx \le \frac{2(e^2 - 1)}{e^3}.\ \blacksquare$$

*Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $z = 1 + 2i$ |
| I.2 | $a = 1$ |
| I.3 | $x = 3$ |
| I.4 | $p = \tfrac1{10}$ |
| I.5 | $a = 2$ |
| I.6 | $24$ |
| II.1.a | $4$ |
| II.1.c | $(4,0)$, $(1,1)$ |
| II.2.c | $x \in \{\tfrac34, 1\}$ |
| III.2.b | $4$ |

## Ce merită reținut din simulare

- **Ecuații cu $\bar z$:** scrie $z = a + bi$ și identifică părțile reală și imaginară.
- **Concavitate:** $f'' < 0$; **inegalitate** din maximul global al funcției.
- **Încadrarea integralei:** încadrează integrandul și integrează inegalitățile.
