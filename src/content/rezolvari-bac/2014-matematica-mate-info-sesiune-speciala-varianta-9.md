Rezolvarea completă a subiectului de **Bacalaureat 2014 la Matematică M_mate-info**, sesiunea specială, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $3(2 + 4i) + 2(1 - 6i) = 8$

$$6 + 12i + 2 - 12i = 8.$$

*Barem: 3p dezvoltarea, 2p calculul.*

### 2. Parabola funcției $f(x) = x^2 + 2x + 1$ este tangentă la axa $Ox$

$\Delta = 4 - 4 = 0$, deci parabola are un singur punct comun cu $Ox$ (vârful $(-1, 0)$): este tangentă la axă. *Barem: 3p $\Delta$, 2p concluzia.*

### 3. Ecuația $5^{x^2+4} = 5^{4x}$

$$x^2 + 4 = 4x \iff (x - 2)^2 = 0 \iff x = 2.$$

**Răspuns:** $x = 2$. *Barem: 3p ecuația, 2p soluția.*

### 4. Numere de două cifre distincte formate cu cifrele $1, 3, 5, 7$

Cifra unităților: 4 moduri; cifra zecilor (diferită): 3 moduri. $4\cdot3 = 12$.

**Răspuns:** $12$. *Barem: 3p, 2p.*

### 5. Dreapta prin $A(-2,2)$, perpendiculară pe $BC$, $B(-4,-2)$, $C(4,2)$

$m_{BC} = \dfrac{2 + 2}{4 + 4} = \dfrac12$, deci $m_d = -2$:

$$d: y - 2 = -2(x + 2) \iff y = -2x - 2.$$

**Răspuns:** $y = -2x - 2$. *Barem: 2p panta, 3p ecuația.*

### 6. Arătați că $\sin\dfrac\pi4 + \cos\dfrac{3\pi}{4} = 0$

$$\sin\frac\pi4 = \frac{\sqrt2}{2}, \quad \cos\frac{3\pi}4 = -\cos\frac\pi4 = -\frac{\sqrt2}{2} \Rightarrow \text{suma} = 0.$$

*Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(n) = \begin{pmatrix}1&0&0\\0&2^n&0\\0&2^n - 1&1\end{pmatrix}$, $n \in \mathbb N$

#### a) $\det(A(0)) = 1$

$A(0) = I_3$ ($2^0 = 1$, $2^0 - 1 = 0$), deci $\det = 1$. *Barem: 2p, 3p.*

#### b) $n$ cu $A(n)\cdot A(1) = A(3)$

$A(1) = \begin{pmatrix}1&0&0\\0&2&0\\0&1&1\end{pmatrix}$:

$$A(n)A(1) = \begin{pmatrix}1&0&0\\0&2^{n+1}&0\\0&2(2^n - 1) + 1&1\end{pmatrix} = \begin{pmatrix}1&0&0\\0&2^{n+1}&0\\0&2^{n+1} - 1&1\end{pmatrix} = A(n+1).$$

$A(n+1) = A(3) \iff 2^{n+1} = 2^3 \iff n = 2$.

**Răspuns:** $n = 2$. *Barem: 3p produsul, 2p valoarea.*

#### c) $p, q \in \mathbb N$ cu $A(p)\cdot A(q) = A(pq)$

Analog cu b), $A(p)A(q) = A(p + q)$ (elementul $(3,2)$: $(2^p - 1)2^q + 2^q - 1 = 2^{p+q} - 1$). Funcția $n \mapsto 2^n$ este injectivă, deci

$$p + q = pq \iff pq - p - q + 1 = 1 \iff (p-1)(q-1) = 1.$$

În numere întregi: $p - 1 = q - 1 = 1$ sau $p - 1 = q - 1 = -1$.

**Răspuns:** $(p,q) \in \{(0,0), (2,2)\}$. *Barem: 2p $A(p)A(q) = A(p+q)$, 3p soluțiile.*

### 2. $f = X^3 + X^2 - 3X + 2$

#### a) $f(0) = 2$. *Barem: 3p, 2p.*

#### b) Câtul și restul împărțirii la $X^2 - 4$

$$X^3 + X^2 - 3X + 2 = (X^2 - 4)(X + 1) + (X + 6),$$

pentru că $(X^2 - 4)(X + 1) = X^3 + X^2 - 4X - 4$, iar diferența este $X + 6$.

**Răspuns:** câtul $X + 1$, restul $X + 6$. *Barem: 3p câtul, 2p restul.*

#### c) $(x_1 - x_2)^2 + (x_2 - x_3)^2 + (x_3 - x_1)^2 = 20$

Viète: $S_1 = -1$, $S_2 = -3$. Dezvoltând:

$$\sum(x_i - x_j)^2 = 2(x_1^2 + x_2^2 + x_3^2) - 2S_2 = 2(S_1^2 - 2S_2) - 2S_2 = 2S_1^2 - 6S_2 = 2 + 18 = 20.$$

*Barem: 2p Viète, 3p calculul.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = 3x + e^x$

#### a) $f'(x) = 3 + e^x$. *Barem: 2p, 3p.*

#### b) Asimptota oblică spre $-\infty$

$$m = \lim_{x\to-\infty}\frac{3x + e^x}{x} = 3, \qquad n = \lim_{x\to-\infty}\big(f(x) - 3x\big) = \lim_{x\to-\infty}e^x = 0.$$

**Răspuns:** $y = 3x$. *Barem: 2p $m$, 3p $n$ și ecuația.*

#### c) $f(x) \ge 4x + 1$ pentru orice $x$

Fie $g(x) = f(x) - 4x - 1 = e^x - x - 1$. $g'(x) = e^x - 1$: negativă pe $(-\infty, 0)$, pozitivă pe $(0, +\infty)$, deci $g$ are minimul $g(0) = 0$. Așadar $g(x) \ge 0$, adică $f(x) \ge 4x + 1$. $\blacksquare$ *Barem: 3p monotonia lui $g$, 2p concluzia.*

### 2. $f(x) = \dfrac{x^3}{x^2 + x + 1}$

#### a) $\displaystyle\int_0^1(x^2 + x + 1)f(x)\,dx = \frac14$

$$\int_0^1x^3\,dx = \frac{x^4}{4}\Big|_0^1 = \frac14.$$

*Barem: 2p simplificarea, 3p calculul.*

#### b) $\displaystyle\int_0^1\big(f(x) - x + 1\big)dx = \frac{\pi}{3\sqrt3}$

$(x - 1)(x^2 + x + 1) = x^3 - 1$, deci

$$f(x) - x + 1 = \frac{x^3 - (x^3 - 1)}{x^2 + x + 1} = \frac{1}{x^2 + x + 1} = \frac{1}{\left(x + \frac12\right)^2 + \frac34}.$$

$$\int_0^1\frac{dx}{\left(x + \frac12\right)^2 + \left(\frac{\sqrt3}{2}\right)^2} = \frac{2}{\sqrt3}\operatorname{arctg}\frac{2x + 1}{\sqrt3}\Big|_0^1 = \frac{2}{\sqrt3}\left(\frac\pi3 - \frac\pi6\right) = \frac{\pi}{3\sqrt3}.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $\displaystyle\lim_{t\to0}\left(\frac{1}{t^4}\int_0^t f(x)\,dx\right) = \frac14$

Nedeterminare $\frac00$; regula lui l'Hôpital (derivata integralei cu limita superioară variabilă este $f(t)$):

$$\lim_{t\to0}\frac{f(t)}{4t^3} = \lim_{t\to0}\frac{t^3}{4t^3(t^2 + t + 1)} = \lim_{t\to0}\frac{1}{4(t^2 + t + 1)} = \frac14.$$

*Barem: 3p l'Hôpital, 2p rezultatul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.3 | $x = 2$ |
| I.4 | $12$ |
| I.5 | $y = -2x - 2$ |
| II.1.b | $n = 2$ |
| II.1.c | $(0,0)$, $(2,2)$ |
| II.2.a | $2$ |
| II.2.b | cât $X + 1$, rest $X + 6$ |
| II.2.c | $20$ |
| III.1.a | $3 + e^x$ |
| III.1.b | $y = 3x$ |
| III.2.b | $\frac{\pi}{3\sqrt3}$ |
| III.2.c | $\frac14$ |

## Ce merită reținut din varianta 9

- **Familii $A(n)$ cu $A(p)A(q) = A(p+q)$**: compară exponenții.
- **$\sum(x_i - x_j)^2 = 2S_1^2 - 6S_2$** — formulă utilă cu Viète.
- **$\int\frac{dx}{x^2 + x + 1}$**: formează pătrat perfect și folosește $\operatorname{arctg}$.
- **Limite cu integrale de la $0$ la $t$**: l'Hôpital, cu $\left(\int_0^t f\right)' = f(t)$.
