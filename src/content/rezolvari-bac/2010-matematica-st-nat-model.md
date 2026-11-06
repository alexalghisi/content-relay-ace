Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2010 la Matematică M2** (profil real, științele naturii, și filiera tehnologică). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie aritmetică cu $a_1 = 3$, $a_3 = 7$; suma primilor 10 termeni

$a_3 = a_1 + 2r \Rightarrow 7 = 3 + 2r \Rightarrow r = 2$. Atunci $a_{10} = a_1 + 9r = 21$ și

$$S_{10} = \frac{(a_1 + a_{10})\cdot10}{2} = \frac{24\cdot10}{2} = 120.$$

**Răspuns:** $S_{10} = 120$. *Barem: 2p rația, 1p $a_{10}$, 2p suma.*

### 2. $A(m, -1)$ pe graficul lui $f(x) = x^2 - 3x + 1$

$$m^2 - 3m + 1 = -1 \iff m^2 - 3m + 2 = 0 \iff (m-1)(m-2) = 0.$$

**Răspuns:** $m \in \{1, 2\}$. *Barem: 3p ecuația, 2p soluțiile.*

### 3. Ecuația $\log_5(2x + 3) = 2$

**Condiție:** $2x + 3 > 0 \iff x > -\frac32$. Atunci $2x + 3 = 5^2 = 25 \iff x = 11$, care convine.

**Răspuns:** $x = 11$. *Barem: 1p condiția, 4p soluția.*

### 4. Submulțimi cu 3 elemente ale unei mulțimi cu 5 elemente

$$C_5^3 = \frac{5\cdot4\cdot3}{3!} = 10.$$

*Barem: 3p formula, 2p rezultatul.*

### 5. Distanța de la $C(2,-1)$ la mijlocul lui $AB$, $A(-1,-2)$, $B(1,2)$

Mijlocul: $M\left(\frac{-1+1}{2}, \frac{-2+2}{2}\right) = M(0,0)$.

$$CM = \sqrt{(2-0)^2 + (-1-0)^2} = \sqrt5.$$

**Răspuns:** $\sqrt5$. *Barem: 2p mijlocul, 1p formula, 2p rezultatul.*

### 6. Aria triunghiului cu $AB = AC = 8$, $\angle BAC = 30^\circ$

$$\mathcal A = \frac{AB\cdot AC\cdot\sin A}{2} = \frac{8\cdot8\cdot\frac12}{2} = 16.$$

**Răspuns:** $16$. *Barem: 2p formula, 3p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 3 & 1 & 1\\ 0 & 3 & 1\\ 0 & 0 & 3\end{pmatrix}$, $B = \begin{pmatrix} 0 & 3 & 4\\ 0 & 0 & 3\\ 0 & 0 & 0\end{pmatrix}$, $f(X) = X^2 - 3X + I_3$

#### a) $\det(I_3 + B)$

$$I_3 + B = \begin{pmatrix} 1 & 3 & 4\\ 0 & 1 & 3\\ 0 & 0 & 1\end{pmatrix}.$$

Matrice superior triunghiulară, deci $\det(I_3 + B) = 1\cdot1\cdot1 = 1$. *Barem: 2p matricea, 3p determinantul.*

#### b) $f(A) = I_3 + B$

$$A^2 = \begin{pmatrix} 9 & 6 & 7\\ 0 & 9 & 6\\ 0 & 0 & 9\end{pmatrix}$$

(de exemplu elementul $(1,3)$: $3\cdot1 + 1\cdot1 + 1\cdot3 = 7$).

$$f(A) = A^2 - 3A + I_3 = \begin{pmatrix} 9 - 9 + 1 & 6 - 3 & 7 - 3\\ 0 & 1 & 6 - 3\\ 0 & 0 & 1\end{pmatrix} = \begin{pmatrix} 1 & 3 & 4\\ 0 & 1 & 3\\ 0 & 0 & 1\end{pmatrix} = I_3 + B.$$

*Barem: 2p $A^2$, 1p scrierea, 2p finalizarea.*

#### c) $(f(A))^3 = I_3 + 3B + 3B^2$

$I_3$ comută cu $B$, deci se aplică binomul lui Newton:

$$(I_3 + B)^3 = I_3 + 3B + 3B^2 + B^3.$$

$B^2 = \begin{pmatrix} 0 & 0 & 9\\ 0 & 0 & 0\\ 0 & 0 & 0\end{pmatrix}$, iar $B^3 = B^2\cdot B = O_3$ (prima linie a lui $B^2$ înmulțită cu orice coloană a lui $B$ dă $9\cdot0 = 0$). Deci $(f(A))^3 = I_3 + 3B + 3B^2$. $\blacksquare$ *Barem: 2p binomul, 2p $B^3 = O_3$, 1p finalizarea.*

### 2. Pe $\mathbb Z$: $x * y = x + y - 3$, $x\circ y = (x-3)(y-3) + 3$

#### a) $x\circ x = x * x$

$$(x-3)^2 + 3 = 2x - 3 \iff (x-3)^2 - 2(x-3) = 0 \iff (x-3)(x-5) = 0.$$

**Răspuns:** $x \in \{3, 5\}$. *Barem: 2p + 1p + 2p.*

#### b) $a$ cu $x\circ a = 3$ pentru orice $x$ întreg

$(x-3)(a-3) + 3 = 3 \iff (x-3)(a-3) = 0$ pentru orice $x$, deci $a = 3$.

**Răspuns:** $a = 3$. *Barem: 2p + 3p.*

#### c) Sistemul $x * (y+1) = 4$, $(x - y)\circ1 = 5$

- $x + y + 1 - 3 = 4 \iff x + y = 6$;
- $(x - y - 3)(1 - 3) + 3 = 5 \iff (x - y - 3)(-2) = 2 \iff x - y = 2$.

Adunând: $2x = 8$, deci $x = 4$, $y = 2$.

**Răspuns:** $x = 4$, $y = 2$. *Barem: 3p sistemul, 2p soluția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R^*\to\mathbb R$, $f(x) = x^3 + \frac3x$

#### a) $f'(x)$

$$f'(x) = 3x^2 - \frac{3}{x^2} = \frac{3(x^4 - 1)}{x^2}.$$

*Barem: 2p + 2p + 1p.*

#### b) $\lim\limits_{x\to1}\dfrac{f(x) - f(1)}{x - 1}$

Este definiția derivatei în $1$: $f'(1) = 3 - 3 = 0$.

**Răspuns:** $0$. *Barem: 3p + 2p.*

#### c) Intervalele de monotonie

$f'(x) = \dfrac{3(x^2 - 1)(x^2 + 1)}{x^2}$; semnul este dat de $x^2 - 1$. $f'(x) = 0 \iff x = \pm1$.

| $x$ | $(-\infty, -1]$ | $[-1, 0)$ | $(0, 1]$ | $[1, +\infty)$ |
|---|---|---|---|---|
| $f'$ | $+$ | $-$ | $-$ | $+$ |
| $f$ | crescătoare | descrescătoare | descrescătoare | crescătoare |

**Răspuns:** $f$ crescătoare pe $(-\infty, -1]$ și pe $[1, +\infty)$; descrescătoare pe $[-1, 0)$ și pe $(0, 1]$. *Barem: 1p + 2p + 2p.*

### 2. $f:[0,1]\to\mathbb R$, $f(x) = x\sqrt{2 - x^2}$

#### a) Volumul corpului de rotație

$$V = \pi\int_0^1 x^2(2 - x^2)\,dx = \pi\left(\frac{2x^3}{3} - \frac{x^5}{5}\right)\Big|_0^1 = \pi\left(\frac23 - \frac15\right) = \frac{7\pi}{15}.$$

*Barem: 1p + 2p + 2p.*

#### b) $\displaystyle\int_0^1 f(x)\,dx$

Substituția $t = 2 - x^2$, $dt = -2x\,dx$; $x = 0 \Rightarrow t = 2$, $x = 1 \Rightarrow t = 1$:

$$\int_0^1 x\sqrt{2-x^2}\,dx = \frac12\int_1^2\sqrt t\,dt = \frac12\cdot\frac23t\sqrt t\Big|_1^2 = \frac{2\sqrt2 - 1}{3}.$$

**Răspuns:** $\dfrac{2\sqrt2 - 1}{3}$. *Barem: 3p substituția, 2p calculul.*

#### c) $\lim\limits_{x\to0}\dfrac{\int_0^x f(t)\,dt}{x^2}$

Cazul $\frac00$. Funcția $F(x) = \int_0^x f(t)\,dt$ are $F'(x) = f(x)$, deci, cu l'Hôpital:

$$\lim_{x\to0}\frac{f(x)}{2x} = \lim_{x\to0}\frac{x\sqrt{2-x^2}}{2x} = \frac{\sqrt2}{2}.$$

(Baremul calculează explicit $\int_0^x f(t)\,dt = \frac{2\sqrt2 - (2-x^2)\sqrt{2-x^2}}{3}$ și ajunge la același rezultat.)

**Răspuns:** $\dfrac{\sqrt2}{2}$. *Barem: 3p integrala, 2p limita.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $S_{10} = 120$ |
| I.2 | $m \in \{1, 2\}$ |
| I.3 | $x = 11$ |
| I.4 | 10 |
| I.5 | $\sqrt5$ |
| I.6 | $16$ |
| II.1.a | $1$ |
| II.2.a | $x \in \{3, 5\}$ |
| II.2.b | $a = 3$ |
| II.2.c | $x = 4$, $y = 2$ |
| III.1.b | $0$ |
| III.2.a | $\frac{7\pi}{15}$ |
| III.2.b | $\frac{2\sqrt2-1}{3}$ |
| III.2.c | $\frac{\sqrt2}{2}$ |

## Ce merită reținut din modelul 2010

- **Binomul lui Newton pentru matrice** funcționează când matricele comută ($I_3$ comută cu orice); o matrice strict triunghiulară $3\times3$ are $B^3 = O_3$.
- **Aria cu sinus**: $\mathcal A = \frac12 ab\sin C$.
- **Limite cu $\int_0^x f$**: l'Hôpital + $\left(\int_0^x f\right)' = f(x)$.
