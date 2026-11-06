Rezolvarea completă a **simulării de Bacalaureat 2017 la Matematică M_șt-nat** pentru clasa a XII-a. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z$ cu $2z + \bar z = 6 + i$

Fie $z = a + bi$, $a, b \in \mathbb R$. Atunci $2(a + bi) + (a - bi) = 3a + bi = 6 + i$. Identificând: $a = 2$, $b = 1$.

**Răspuns:** $z = 2 + i$. *Barem: 2p scrierea algebrică, 3p soluția.*

### 2. $f(x) = 4x - 5$; $f(1) + f(2) + \dots + f(10)$

$$\sum_{k=1}^{10}(4k - 5) = 4(1 + 2 + \dots + 10) - 10\cdot5 = 4\cdot55 - 50 = 170.$$

**Răspuns:** $170$. *Barem: 3p gruparea, 2p calculul.*

### 3. Ecuația $\log_2(x+3) = 1 + \log_2(x+1)$

**Condiții:** $x > -1$. Scriem $1 = \log_2 2$: $\log_2(x+3) = \log_2\big(2(x+1)\big) \Rightarrow x + 3 = 2x + 2 \Rightarrow x = 1$.

**Verificare:** $\log_2 4 = 2 = 1 + \log_2 2$ ✔. **Răspuns:** $x = 1$. *Barem: 3p ecuația, 2p soluția.*

### 4. Probabilitatea ca un număr de două cifre să aibă cifrele egale

Cazuri posibile: 90. Favorabile: $11, 22, \dots, 99$ — 9.

$$p = \frac{9}{90} = \frac{1}{10}.$$

*Barem: 2p + 2p + 1p.*

### 5. Dreapta prin $C(-2,6)$ perpendiculară pe $AB$, $A(1,1)$, $B(5,5)$

$m_{AB} = \dfrac{5-1}{5-1} = 1$, deci $m_d = -1$.

$$y - 6 = -(x + 2) \iff y = -x + 4.$$

**Răspuns:** $y = -x + 4$. *Barem: 2p panta, 3p ecuația.*

### 6. $AB = 3\sqrt2$, $C = 30^\circ$, $A = 45^\circ$; aflați $BC$

Teorema sinusurilor: $\dfrac{AB}{\sin C} = \dfrac{BC}{\sin A}$.

$$BC = \frac{3\sqrt2\cdot\sin45^\circ}{\sin30^\circ} = \frac{3\sqrt2\cdot\frac{\sqrt2}{2}}{\frac12} = \frac{3}{\frac12} = 6.$$

**Răspuns:** $BC = 6$. *Barem: 2p teorema sinusurilor, 3p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} 1 & 1 & 1\\ 2 & 3 & x\\ 4 & 9 & x^2\end{pmatrix}$

#### a) $A(1) - A(0)$

Diferă doar ultima coloană: $(1, 1, 1)^T - (1, 0, 0)^T$.

$$A(1) - A(0) = \begin{pmatrix} 0 & 0 & 0\\ 0 & 0 & 1\\ 0 & 0 & 1\end{pmatrix}.$$

*Barem: 2p matricele, 3p diferența.*

#### b) $\det(A(x)) = (x-2)(x-3)$

Regula lui Sarrus:

$$\det(A(x)) = 3x^2 + 18 + 4x - 12 - 9x - 2x^2 = x^2 - 5x + 6 = (x-2)(x-3).$$

(Este un determinant Vandermonde în $2, 3, x$: $(3-2)(x-2)(x-3)$.) *Barem: 3p calculul, 2p factorizarea.*

#### c) $a$ cu $\det(A(a)) \le \det(A(x))$ pentru orice $x$

Trebuie ca $a$ să fie punctul de minim al lui $x^2 - 5x + 6 = \left(x - \frac52\right)^2 - \frac14$.

**Răspuns:** $a = \dfrac52$. *Barem: 2p forma canonică, 3p valoarea.*

### 2. $x\circ y = 4xy - 4x - 4y + 5$

#### a) $x\circ y = 4(x-1)(y-1) + 1$

$$4xy - 4x - 4y + 4 + 1 = 4x(y-1) - 4(y-1) + 1 = 4(x-1)(y-1) + 1.$$

*Barem: 2p + 3p.*

#### b) $N = 2016\circ2017$ este pătrat perfect

$$N = 4\cdot2015\cdot2016 + 1 = 4\cdot2015^2 + 4\cdot2015 + 1 = (2\cdot2015 + 1)^2 = 4031^2.$$

*Barem: 2p scrierea lui $N$, 3p pătratul.*

#### c) $a, b$ naturale cu $a\circ b = 13$

$4(a-1)(b-1) + 1 = 13 \iff (a-1)(b-1) = 3$. Cu $a - 1, b - 1 \ge -1$ întregi, singurele descompuneri sunt $1\cdot3$ și $3\cdot1$ ($(-1)(-3)$ nu e posibil, căci $b - 1 \ge -1$).

**Răspuns:** $(a,b) \in \{(2,4), (4,2)\}$. *Barem: 2p ecuația, 3p soluțiile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,+\infty)\to\mathbb R$, $f(x) = x^2\ln x$

#### a) $f'(x) = x(2\ln x + 1)$

$$f'(x) = 2x\ln x + x^2\cdot\frac1x = 2x\ln x + x = x(2\ln x + 1).$$

*Barem: 3p derivarea, 2p finalizarea.*

#### b) Tangenta în $x = 1$

$f(1) = 0$, $f'(1) = 1$, deci $y - 0 = 1\cdot(x - 1)$.

**Răspuns:** $y = x - 1$. *Barem: 2p valorile, 3p ecuația.*

#### c) $1 + 2ef(x) \ge 0$ pentru $x > 0$

$f'(x) = 0 \iff \ln x = -\frac12 \iff x = \dfrac{1}{\sqrt e}$. $f' \le 0$ pe $\left(0, \frac{1}{\sqrt e}\right]$ și $f' \ge 0$ pe $\left[\frac{1}{\sqrt e}, +\infty\right)$, deci minimul global este

$$f\left(\frac{1}{\sqrt e}\right) = \frac1e\cdot\left(-\frac12\right) = -\frac{1}{2e}.$$

Așadar $f(x) \ge -\dfrac{1}{2e} \iff 2ef(x) \ge -1 \iff 1 + 2ef(x) \ge 0$. $\blacksquare$ *Barem: 1p + 1p + 1p monotonia, 2p concluzia.*

### 2. $f(x) = (x-1)e^x$

#### a) $\displaystyle\int_0^1 f(x)e^{-x}\,dx = -\frac12$

$$\int_0^1 (x-1)\,dx = \left(\frac{x^2}{2} - x\right)\Big|_0^1 = \frac12 - 1 = -\frac12.$$

*Barem: 3p simplificarea și primitiva, 2p calculul.*

#### b) $F(x) = (x+a)e^x$ primitivă a lui $f$

$F'(x) = e^x + (x+a)e^x = (x + a + 1)e^x$. Cerem $F' = f$: $x + a + 1 = x - 1$ pentru orice $x$, deci $a = -2$.

**Răspuns:** $a = -2$. *Barem: 2p derivata, 3p valoarea.*

#### c) $\displaystyle\int_0^1 x^3f(x)\,dx \le -\frac{1}{20}$

$x^3f(x) = (x^4 - x^3)e^x$. Pe $[0,1]$: $x^4 - x^3 = x^3(x-1) \le 0$ și $e^x \ge 1$; înmulțind un număr nepozitiv cu ceva $\ge 1$ obținem ceva mai mic sau egal:

$$(x^4 - x^3)e^x \le x^4 - x^3.$$

Integrând:

$$\int_0^1 x^3f(x)\,dx \le \int_0^1 (x^4 - x^3)\,dx = \frac15 - \frac14 = -\frac{1}{20}. \ \blacksquare$$

*Barem: 3p inegalitatea punctuală, 2p integrarea.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $z = 2 + i$ |
| I.2 | $170$ |
| I.3 | $x = 1$ |
| I.4 | $p = \frac{1}{10}$ |
| I.5 | $y = -x + 4$ |
| I.6 | $BC = 6$ |
| II.1.c | $a = \frac52$ |
| II.2.b | $N = 4031^2$ |
| II.2.c | $(2,4)$, $(4,2)$ |
| III.1.b | $y = x - 1$ |
| III.2.b | $a = -2$ |

## Ce merită reținut din simularea 2017

- **Ecuații cu $z$ și $\bar z$**: scrie $z = a + bi$ și identifică părțile reală și imaginară.
- **Determinantul Vandermonde** cu $1, a, b$ / $1, a^2, b^2$ se factorizează imediat.
- **$4n(n+1) + 1 = (2n+1)^2$** — util pentru a arăta că un număr e pătrat perfect.
- **Inegalități de integrale**: majorează integrandul punctual (atenție la semne când înmulțești).
