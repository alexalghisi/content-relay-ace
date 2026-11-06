Rezolvarea completă a subiectului de **Bacalaureat 2016 la Matematică M_șt-nat**, sesiunea de rezervă, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Rația progresiei geometrice cu $b_3 = 5$ și $b_4 = 10$

$$q = \frac{b_4}{b_3} = \frac{10}{5} = 2.$$

**Răspuns:** $q = 2$. *Barem: 3p, 2p.*

### 2. Valoarea maximă a funcției $f:[1, 5] \to \mathbb R$, $f(x) = x - 3$

$f$ este crescătoare, deci maximul se atinge în $x = 5$: $f(5) = 2$. (Pentru $x \le 5$: $x - 3 \le 2$.)

**Răspuns:** $2$. *Barem: 2p, 3p.*

### 3. Ecuația $\sqrt{x^2 + 12} = x + 2$

Condiție: $x + 2 \ge 0$. Ridicând la pătrat:

$$x^2 + 12 = x^2 + 4x + 4 \iff 4x = 8 \iff x = 2,$$

care verifică ($\sqrt{16} = 4$). **Răspuns:** $x = 2$. *Barem: 3p, 2p.*

### 4. Numărul submulțimilor cu două elemente ale mulțimii $\{1, 2, \dots, 7\}$

$$C_7^2 = \frac{7!}{2!\cdot 5!} = 21.$$

**Răspuns:** $21$. *Barem: 3p, 2p.*

### 5. Ecuația dreptei $AB$, $A(3, 4)$, $B(1, 0)$

$$\frac{y - 0}{4 - 0} = \frac{x - 1}{3 - 1} \iff y = 2(x - 1) \iff y = 2x - 2.$$

**Răspuns:** $y = 2x - 2$. *Barem: 3p, 2p.*

### 6. Raza cercului circumscris triunghiului cu $AB = 6$, $C = \frac\pi3$

$$2R = \frac{AB}{\sin C} = \frac{6}{\frac{\sqrt3}{2}} = \frac{12}{\sqrt3} = 4\sqrt3 \Rightarrow R = 2\sqrt3.$$

**Răspuns:** $R = 2\sqrt3$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} 1 + x & -x\\ 2x & 1 - 2x\end{pmatrix}$

#### a) $\det(A(0)) = 1$

$A(0) = I_2$, $\det A(0) = 1$. *Barem: 2p, 3p.*

#### b) $A(x)A(y) = A(x + y - xy)$

$$A(x)A(y) = \begin{pmatrix} (1+x)(1+y) - 2xy & -(1+x)y - x(1 - 2y)\\ 2x(1 + y) + (1 - 2x)2y & -2xy + (1 - 2x)(1 - 2y)\end{pmatrix} = \begin{pmatrix} 1 + x + y - xy & -(x + y - xy)\\ 2(x + y - xy) & 1 - 2(x + y - xy)\end{pmatrix}.$$

Cu $t = x + y - xy$, aceasta este exact $A(t)$. *Barem: 3p, 2p.*

#### c) $x \ne 1$ pentru care $A(x)$ este egală cu inversa ei

$\det A(x) = (1 + x)(1 - 2x) + 2x^2 = 1 - x \ne 0$ pentru $x \ne 1$, deci $A(x)$ este inversabilă.

$A(x) = A(x)^{-1} \iff A(x)A(x) = I_2 = A(0)$. Din b), $A(x)A(x) = A(2x - x^2)$, iar $A(t) = A(0) \iff t = 0$ (din elementul de pe poziția $(1,1)$). Deci

$$2x - x^2 = 0 \iff x \in \{0, 2\}.$$

**Răspuns:** $x \in \{0, 2\}$. *Barem: 3p, 2p.*

### 2. $x \circ y = 2xy - 6x - 6y + 21$ (asociativă)

#### a) $x \circ y = 2(x - 3)(y - 3) + 3$

$$2(xy - 3x - 3y + 9) + 3 = 2xy - 6x - 6y + 21.$$

*Barem: 2p, 3p.*

#### b) $1\circ 2\circ 3\circ 4 = 3$

$x \circ 3 = 2(x - 3)\cdot 0 + 3 = 3$ pentru orice $x$, deci

$$\big((1\circ 2)\circ 3\big)\circ 4 = 3\circ 4 = 3.$$

*Barem: 3p, 2p.*

#### c) Ecuația $x \circ x \circ x = x$

$x \circ x = 2(x - 3)^2 + 3$, apoi $x \circ x \circ x = 2\cdot 2(x - 3)^2(x - 3) + 3 = 4(x - 3)^3 + 3$.

$$4(x - 3)^3 + 3 = x \iff (x - 3)\big(4(x - 3)^2 - 1\big) = 0 \iff x - 3 \in \left\{0, \pm\frac12\right\}.$$

**Răspuns:** $x \in \left\{\dfrac52, 3, \dfrac72\right\}$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = x - \ln x$

#### a) $f'(x) = \dfrac{x - 1}{x}$

$$f'(x) = 1 - \frac1x = \frac{x - 1}{x}.$$

*Barem: 2p, 3p.*

#### b) $f$ este convexă

$f''(x) = \dfrac{1}{x^2} > 0$, deci $f$ este convexă pe $(0, +\infty)$. *Barem: 2p, 3p.*

#### c) $\ln x \le x - 1$ pentru orice $x > 0$

$f'(x) = 0 \iff x = 1$; $f$ descrescătoare pe $(0, 1]$, crescătoare pe $[1, +\infty)$. Minimul global: $f(1) = 1$. Deci

$$x - \ln x \ge 1 \iff \ln x \le x - 1. \ \blacksquare$$

*Barem: 1p, 1p, 1p, 2p.*

### 2. $f(x) = \dfrac{1}{x^2 + 1}$

#### a) $\displaystyle\int_0^1(x^2 + 1)f(x)\,dx = 1$

$$\int_0^1 1\,dx = 1.$$

*Barem: 3p, 2p.*

#### b) $\displaystyle\int_0^1 x^2 f(x)\,dx = 1 - \frac\pi4$

$\dfrac{x^2}{x^2 + 1} = 1 - \dfrac{1}{x^2 + 1}$:

$$\int_0^1\left(1 - \frac{1}{x^2+1}\right)dx = (x - \operatorname{arctg} x)\Big|_0^1 = 1 - \frac\pi4.$$

*Barem: 2p, 3p.*

#### c) Numerele naturale $n$ cu $\displaystyle\int_n^{n+1} 2xf(x)\,dx = \ln 2$

$$\int_n^{n+1}\frac{2x}{x^2 + 1}\,dx = \ln(x^2 + 1)\Big|_n^{n+1} = \ln\frac{(n+1)^2 + 1}{n^2 + 1}.$$

$$\frac{n^2 + 2n + 2}{n^2 + 1} = 2 \iff n^2 + 2n + 2 = 2n^2 + 2 \iff n^2 - 2n = 0 \iff n \in \{0, 2\}.$$

**Răspuns:** $n \in \{0, 2\}$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $q = 2$ |
| I.2 | $2$ |
| I.3 | $x = 2$ |
| I.4 | $21$ |
| I.5 | $y = 2x - 2$ |
| I.6 | $R = 2\sqrt3$ |
| II.1.c | $x \in \{0, 2\}$ |
| II.2.b | $3$ |
| II.2.c | $x \in \{\tfrac52, 3, \tfrac72\}$ |
| III.2.b | $1 - \tfrac\pi4$ |
| III.2.c | $n \in \{0, 2\}$ |

## Ce merită reținut din varianta 9

- **Matrice egală cu inversa ei** $\iff A^2 = I_2$ (matrice involutivă).
- **Inegalitatea $\ln x \le x - 1$** — clasică, din minimul lui $x - \ln x$.
- **$\frac{x^2}{x^2+1} = 1 - \frac{1}{x^2+1}$**, iar $\int\frac{dx}{x^2+1} = \operatorname{arctg} x$.
- **Legea $2(x-3)(y-3) + 3$**: compunerea de trei ori a lui $x$ dă $4(x-3)^3 + 3$.
