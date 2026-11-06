Rezolvarea completă a subiectului de **Bacalaureat 2014 la Matematică M_mate-info**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Partea reală a lui $z = 1 + 2i + 3i^2$

$i^2 = -1$, deci $z = 1 + 2i - 3 = -2 + 2i$.

**Răspuns:** $\operatorname{Re} z = -2$. *Barem: 2p, 3p.*

### 2. Intersecția graficelor lui $f(x) = x - 1$ și $g(x) = 3x - 5$

$x - 1 = 3x - 5 \iff x = 2$, $y = 1$.

**Răspuns:** $(2, 1)$. *Barem: 3p, 2p.*

### 3. $3^{x^2 - x} = 3^{2x}$

$x^2 - x = 2x \iff x^2 - 3x = 0 \iff x(x - 3) = 0$.

**Răspuns:** $x \in \{0, 3\}$. *Barem: 3p, 2p.*

### 4. Numere pare de două cifre formate cu cifrele $0, 1, 2, 3$

Cifra unităților: $0$ sau $2$ (2 moduri). Cifra zecilor: nenulă, din $\{1, 2, 3\}$ (3 moduri; cifrele se pot repeta). Total $3\cdot 2 = 6$: $10, 12, 20, 22, 30, 32$.

**Răspuns:** 6 numere. *Barem: 2p, 3p.*

### 5. $\vec{AB} = 3\vec i + 2\vec j$, $\vec{AC} = (m+1)\vec i + 4\vec j$, $\vec{AC} = 2\vec{AB}$

$(m + 1)\vec i + 4\vec j = 6\vec i + 4\vec j \iff m + 1 = 6$.

**Răspuns:** $m = 5$. *Barem: 2p, 3p.*

### 6. $\cos C$ în triunghiul cu $AB = AC = 3$, $BC = 3\sqrt2$

$AB^2 + AC^2 = 18 = BC^2$, deci triunghiul este dreptunghic isoscel în $A$ și $m(\angle C) = 45^\circ$.

**Răspuns:** $\cos C = \dfrac{\sqrt2}{2}$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} 1 & 0 & 0\\ x & 1 & 0\\ 2x^2 - 2x & 4x & 1\end{pmatrix}$

#### a) $\det(A(0)) = 1$

$A(0) = I_3$, deci $\det = 1$. *Barem: 2p, 3p.*

#### b) $A(x + y) = A(x)A(y)$

Calculăm $A(x)A(y)$ (matrici inferior triunghiulare):

- linia 2: $(x + y,\ 1,\ 0)$;
- linia 3, coloana 1: $(2x^2 - 2x) + 4x\cdot y + (2y^2 - 2y) = 2(x + y)^2 - 2(x + y)$;
- linia 3, coloana 2: $4x + 4y = 4(x + y)$; coloana 3: $1$.

Rezultatul este exact $A(x + y)$. *Barem: 2p, 3p.*

#### c) $x$ cu $A(x^2 + 2) = A(x)A(x)A(x)$

Din b), $A(x)A(x)A(x) = A(3x)$. Cum $A(a) = A(b) \iff a = b$ (elementul $(2,1)$), avem $x^2 + 2 = 3x \iff (x - 1)(x - 2) = 0$.

**Răspuns:** $x \in \{1, 2\}$. *Barem: 2p, 3p.*

### 2. $f = X^3 - 3X^2 + aX - 2$

#### a) $f(2) = 2(a - 3)$

$f(2) = 8 - 12 + 2a - 2 = 2a - 6 = 2(a - 3)$. *Barem: 2p, 3p.*

#### b) $a$ cu $X^2 - X + 1 \mid f$

$(X - 2)(X^2 - X + 1) = X^3 - 3X^2 + 3X - 2$, deci

$$f = (X - 2)(X^2 - X + 1) + (a - 3)X.$$

Restul împărțirii la $X^2 - X + 1$ este $(a - 3)X$, nul $\iff a = 3$.

**Răspuns:** $a = 3$. *Barem: 3p, 2p.*

#### c) Pentru $a = 3$: $f(2^x) = 0$

$f = (X - 2)(X^2 - X + 1)$, deci $(2^x - 2)(4^x - 2^x + 1) = 0$. Al doilea factor e pozitiv ($t^2 - t + 1 > 0$, $\Delta < 0$), deci $2^x = 2$.

**Răspuns:** $x = 1$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(-2, +\infty) \to \mathbb R$, $f(x) = \dfrac{xe^x}{x + 2}$

#### a) $f'(x) = \dfrac{(x^2 + 2x + 2)e^x}{(x+2)^2}$

$$f'(x) = \frac{(e^x + xe^x)(x + 2) - xe^x}{(x+2)^2} = \frac{e^x(x^2 + 3x + 2 - x)}{(x+2)^2} = \frac{(x^2 + 2x + 2)e^x}{(x + 2)^2}.$$

*Barem: 2p, 3p.*

#### b) Tangenta în $x_0 = 0$

$f(0) = 0$, $f'(0) = \dfrac{2}{4} = \dfrac12$.

**Răspuns:** $y = \dfrac12x$. *Barem: 2p, 3p.*

#### c) $f(x) = 1$ are cel puțin o soluție în $(1, 2)$

$g(x) = f(x) - 1$ este continuă pe $[1, 2]$, cu

$$g(1) = \frac e3 - 1 = \frac{e - 3}{3} < 0, \qquad g(2) = \frac{2e^2}{4} - 1 = \frac{e^2 - 2}{2} > 0.$$

Din proprietatea lui Darboux, există $c \in (1, 2)$ cu $g(c) = 0$, adică $f(c) = 1$. $\blacksquare$ *Barem: 2p, 3p.*

### 2. $I_n = \displaystyle\int_0^1\frac{x^n}{1 + x^n}dx$

#### a) $I_1 = 1 - \ln 2$

$$I_1 = \int_0^1\left(1 - \frac{1}{1 + x}\right)dx = \big(x - \ln(1 + x)\big)\Big|_0^1 = 1 - \ln 2.$$

*Barem: 2p, 3p.*

#### b) $I_{n+1} \le I_n$

$$I_{n+1} - I_n = \int_0^1\left(\frac{x^{n+1}}{1 + x^{n+1}} - \frac{x^n}{1 + x^n}\right)dx = \int_0^1\frac{x^n(x - 1)}{(1 + x^n)(1 + x^{n+1})}dx.$$

Pe $[0, 1]$: $x - 1 \le 0$, $x^n \ge 0$, numitorul pozitiv, deci integrandul este $\le 0$ și $I_{n+1} \le I_n$. $\blacksquare$ *Barem: 2p, 3p.*

#### c) $\lim\limits_{n\to\infty} I_n = 0$

Pe $[0, 1]$, $0 \le \dfrac{x^n}{1 + x^n} \le x^n$, deci

$$0 \le I_n \le \int_0^1 x^n\,dx = \frac{1}{n+1} \to 0.$$

Criteriul cleștelui: $\lim I_n = 0$. $\blacksquare$ *Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $-2$ |
| I.2 | $(2, 1)$ |
| I.3 | $x \in \{0, 3\}$ |
| I.4 | 6 |
| I.5 | $m = 5$ |
| I.6 | $\cos C = \tfrac{\sqrt2}{2}$ |
| II.1.c | $x \in \{1, 2\}$ |
| II.2.b | $a = 3$ |
| II.2.c | $x = 1$ |
| III.1.b | $y = \tfrac x2$ |
| III.2.a | $1 - \ln2$ |
| III.2.c | $0$ |

## Ce merită reținut din varianta 7

- **Matrice cu $A(x)A(y) = A(x+y)$**: puterile devin $A(nx)$.
- **Divizibilitate de polinoame**: scrie $f = $ (cât)$\cdot g$ + rest și anulează restul.
- **Existența unei soluții**: funcție continuă cu valori de semne opuse la capete (Darboux).
- **Limite de integrale**: majorează integrandul cu $x^n$ și folosește cleștele.
