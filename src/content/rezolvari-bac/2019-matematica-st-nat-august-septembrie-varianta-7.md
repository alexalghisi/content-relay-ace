Rezolvarea completă a subiectului de **Bacalaureat 2019 la Matematică M_șt-nat**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Suma primilor trei termeni ai progresiei aritmetice cu $a_1 = 2$, $r = 2$

$a_2 = 4$, $a_3 = 6$, suma $= 12$. *Barem: 2p, 3p.*

### 2. Intersecția graficului lui $f(x) = x^2 - 10x + 9$ cu $Ox$

$x^2 - 10x + 9 = 0 \iff (x - 1)(x - 9) = 0$.

**Răspuns:** $x \in \{1, 9\}$. *Barem: 3p, 2p.*

### 3. Ecuația $5^{x+1} - 3\cdot 5^x = 2$

$5^x(5 - 3) = 2 \iff 5^x = 1 \iff x = 0$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca $x \in \{0, \dots, 9\}$ să verifice $x^2 - 4x + 4 = 0$

$(x - 2)^2 = 0 \iff x = 2$: un caz favorabil din 10.

$$p = \frac1{10}.$$

*Barem: 1p, 2p, 2p.*

### 5. Lungimea vectorului $\overrightarrow{AB} + \overrightarrow{AC}$, $\triangle ABC$ echilateral, $AB = 2$

Cu $M$ mijlocul lui $BC$: $\overrightarrow{AB} + \overrightarrow{AC} = 2\overrightarrow{AM}$. Mediana în triunghiul echilateral: $AM = \frac{2\sqrt3}{2} = \sqrt3$. Lungimea: $2\sqrt3$.

**Răspuns:** $2\sqrt3$. *Barem: 3p, 2p.*

### 6. $\sin^2\left(\frac\pi2 - x\right) + \sin^2(x + \pi) = 1$

$\sin\left(\frac\pi2 - x\right) = \cos x$, $\sin(x + \pi) = -\sin x$, deci suma este $\cos^2x + \sin^2x = 1$. $\blacksquare$ *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}1 + 4a & -6a\\ 2a & 1 - 3a\end{pmatrix}$

**a)** $A(1) = \begin{pmatrix}5 & -6\\ 2 & -2\end{pmatrix}$, $\det = -10 + 12 = 2$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $$A(a)A(b) = \begin{pmatrix}(1+4a)(1+4b) - 12ab & -6b(1+4a) - 6a(1 - 3b)\\ 2a(1 + 4b) + 2b(1 - 3a) & -12ab + (1-3a)(1-3b)\end{pmatrix} = \begin{pmatrix}1 + 4a + 4b + 4ab & -6a - 6b - 6ab\\ 2a + 2b + 2ab & 1 - 3a - 3b - 3ab\end{pmatrix},$$

adică $A(a + b + ab)$. $\blacksquare$ *Barem: 3p, 2p.*

**c)** $A(m + n + mn) = A(2) \iff m + n + mn = 2 \iff (m + 1)(n + 1) = 3$. Cu $m, n$ naturali: $\{m + 1, n + 1\} = \{1, 3\}$.

**Răspuns:** $(m, n) \in \{(0, 2), (2, 0)\}$. *Barem: 2p, 3p.*

### 2. $x \circ y = 2xy - 2x - 2y + 3$

**a)** $2xy - 2x - 2y + 2 + 1 = 2(x - 1)(y - 1) + 1$. $\blacksquare$ *Barem: 2p, 3p.*

**b)** $2(x - 1)^2 + 1 \le 9 \iff (x - 1)^2 \le 4 \iff -2 \le x - 1 \le 2 \iff x \in [-1, 3]$. *Barem: 2p, 3p.*

**c)** $1 \circ x = 2\cdot 0\cdot(x - 1) + 1 = 1$ pentru orice $x$. Cum $1^n = 1$, prin asociativitate

$$1^n \circ (2^n \circ \dots \circ 2019^n) = 1.$$

**Răspuns:** $1$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x - \ln x^e = x - e\ln x$, $x > 0$

**a)** $f'(x) = 1 - \dfrac ex = \dfrac{x - e}{x}$. $\blacksquare$ *Barem: 2p, 3p.*

**b)** Tangenta paralelă cu $Ox \iff f'(a) = 0 \iff a = e$. *Barem: 3p, 2p.*

**c)** $f' < 0$ pe $(0, e)$, $f' > 0$ pe $(e, +\infty)$: $e$ este punct de minim strict, $f(e) = e - e = 0$, deci $f(x) > 0$ pentru $x \ne e$.

$e^x = x^e \iff x = e\ln x \iff f(x) = 0 \iff x = e$. Ecuația are exact o soluție, $x = e$. $\blacksquare$

*Barem: 2p, 3p.*

### 2. $f(x) = (x - 1)(x + 1)e^x = (x^2 - 1)e^x$

**a)** $$\int_0^3\frac{f(x)}{e^x}dx = \int_0^3(x^2 - 1)\,dx = \left(\frac{x^3}{3} - x\right)\Big|_0^3 = 9 - 3 = 6.\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** Pe $[1, 2]$, $f \ge 0$. Integrăm prin părți de două ori:

$$\mathcal A = \int_1^2(x^2 - 1)e^xdx = (x^2 - 1)e^x\Big|_1^2 - \int_1^2 2xe^xdx = 3e^2 - 2(x - 1)e^x\Big|_1^2 = 3e^2 - 2e^2 = e^2.$$

**Răspuns:** $e^2$. *Barem: 2p, 3p.*

**c)** $\dfrac{2xe^x}{f(x)} = \dfrac{2x}{x^2 - 1}$, deci

$$\int_2^a\frac{2x}{x^2-1}dx = \ln(x^2 - 1)\Big|_2^a = \ln\frac{a^2 - 1}{3}.$$

$\ln\dfrac{a^2-1}{3} = 3\ln2 = \ln 8 \iff a^2 - 1 = 24 \iff a^2 = 25$; cu $a > 2$: $a = 5$.

**Răspuns:** $a = 5$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $12$ |
| I.2 | $x \in \{1, 9\}$ |
| I.3 | $x = 0$ |
| I.4 | $p = \tfrac1{10}$ |
| I.5 | $2\sqrt3$ |
| II.1.c | $(0,2)$, $(2,0)$ |
| II.2.b | $x \in [-1, 3]$ |
| II.2.c | $1$ |
| III.1.b | $x = e$ |
| III.2.b | $e^2$ |
| III.2.c | $a = 5$ |

## Ce merită reținut din varianta 7

- **$A(a)A(b) = A(a + b + ab)$:** parametrul $a + 1$ se înmulțește, deci $(m+1)(n+1) = 3$.
- **$e^x = x^e$:** logaritmează și studiază funcția $x - e\ln x$.
- **Suma a doi vectori cu origine comună:** de două ori vectorul median.
