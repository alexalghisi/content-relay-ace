Rezolvarea completă a subiectului de **Bacalaureat 2014 la Matematică M_mate-info**, subiectul de rezervă, **varianta 5**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $x$ pentru care $2$, $4$, $x + 5$ sunt termeni consecutivi ai unei progresii geometrice

$$4^2 = 2(x + 5) \iff 16 = 2x + 10 \iff x = 3.$$

**Răspuns:** $x = 3$. *Barem: 2p condiția, 3p soluția.*

### 2. Parabola funcției $f(x) = x^2 + x + 4$ este situată deasupra axei $Ox$

$\Delta = 1 - 16 = -15 < 0$ și coeficientul dominant $a = 1 > 0$, deci $f(x) > 0$ pentru orice $x$: parabola este deasupra axei $Ox$. *Barem: 2p $\Delta$, 3p concluzia.*

### 3. Ecuația $\sqrt[3]{x^2 - 1} = 2$

$$x^2 - 1 = 8 \iff x^2 = 9 \iff x = \pm3.$$

**Răspuns:** $x \in \{-3, 3\}$. *Barem: 3p ecuația, 2p soluțiile.*

### 4. Probabilitatea ca un număr de două cifre să aibă suma cifrelor $7$

Favorabile: $16, 25, 34, 43, 52, 61, 70$ — **7**; posibile: **90**.

$$p = \frac{7}{90}.$$

*Barem: 2p favorabile, 1p posibile, 2p probabilitatea.*

### 5. Lungimea vectorului $\overrightarrow{OM}$, $M$ mijlocul lui $AB$, $A(-1,4)$, $B(1,2)$

$M(0, 3)$, deci $OM = 3$.

**Răspuns:** $3$. *Barem: 2p mijlocul, 3p lungimea.*

### 6. $\sin 2x$, știind $x \in \left(0, \frac\pi2\right)$ și $\cos x = \frac{\sqrt3}{2}$

$x = \dfrac\pi6$, deci $\sin 2x = \sin\dfrac\pi3 = \dfrac{\sqrt3}{2}$.

(Altfel: $\sin x = \frac12$, $\sin 2x = 2\cdot\frac12\cdot\frac{\sqrt3}{2} = \frac{\sqrt3}{2}$.) *Barem: 2p $x$, 3p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}1 & 2x & 0\\0 & 4x+1 & 0\\0 & 3x & 1\end{pmatrix}$

#### a) $\det(A(0)) = 1$

$A(0) = I_3$, deci $\det = 1$. *Barem: 2p scrierea, 3p calculul.*

#### b) $A(x)\cdot A(y) = A(x + y + 4xy)$

$$A(x)A(y) = \begin{pmatrix}1 & 2y + 2x(4y+1) & 0\\0 & (4x+1)(4y+1) & 0\\0 & 3x(4y+1) + 3y & 1\end{pmatrix} = \begin{pmatrix}1 & 2(x + y + 4xy) & 0\\0 & 4(x + y + 4xy) + 1 & 0\\0 & 3(x + y + 4xy) & 1\end{pmatrix}.$$

Aceasta este exact $A(x + y + 4xy)$. *Barem: 3p produsul, 2p identificarea.*

#### c) $x \ne -\frac14$ pentru care $A(x)$ este egală cu inversa ei

$A(x) = A(x)^{-1} \iff A(x)\cdot A(x) = I_3 = A(0)$. Din b):

$$A(2x + 4x^2) = A(0) \iff 4x^2 + 2x = 0 \iff 2x(2x + 1) = 0.$$

**Răspuns:** $x \in \left\{-\frac12, 0\right\}$. *Barem: 3p ecuația, 2p soluțiile.*

### 2. $f = X^3 + X^2 - 4X + 2a$

#### a) $f(0)$

$f(0) = 2a$. *Barem: 2p, 3p.*

#### b) $a$ știind că $1 + i$ este rădăcină

Coeficienții sunt reali, deci și $x_2 = 1 - i$ este rădăcină. Viète: $x_1 + x_2 + x_3 = -1 \Rightarrow x_3 = -3$, iar $x_1x_2x_3 = -2a$:

$$(1+i)(1-i)(-3) = 2\cdot(-3) = -6 = -2a \iff a = 3.$$

**Răspuns:** $a = 3$. *Barem: 1p conjugata, 2p $x_3$, 2p $a$.*

#### c) Pentru $a = 3$: $x_1^3 + x_2^3 + x_3^3 = -31$

Rădăcinile sunt $1 + i$, $1 - i$, $-3$:

$$(1+i)^3 = (1+i)^2(1+i) = 2i(1+i) = -2 + 2i, \qquad (1-i)^3 = -2 - 2i, \qquad (-3)^3 = -27.$$

$$x_1^3 + x_2^3 + x_3^3 = -2 + 2i - 2 - 2i - 27 = -31.$$

*Barem: 3p cuburile, 2p suma.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(2,+\infty)\to\mathbb R$, $f(x) = \dfrac{x^2}{x-2}$

#### a) $f'(x) = \dfrac{x(x-4)}{(x-2)^2}$

$$f'(x) = \frac{2x(x - 2) - x^2}{(x-2)^2} = \frac{x^2 - 4x}{(x-2)^2} = \frac{x(x-4)}{(x-2)^2}.$$

*Barem: 2p regula câtului, 3p simplificarea.*

#### b) Tangenta în $x_0 = 4$

$f(4) = \dfrac{16}{2} = 8$, $f'(4) = 0$, deci $y = 8$.

**Răspuns:** $y = 8$. *Barem: 2p formula, 3p ecuația.*

#### c) Intervalele de monotonie

$f'(x) = 0 \iff x = 4$ (pe $(2, +\infty)$, $x > 0$). $f' \le 0$ pe $(2, 4]$, $f' \ge 0$ pe $[4, +\infty)$.

**Răspuns:** $f$ descrescătoare pe $(2, 4]$, crescătoare pe $[4, +\infty)$. *Barem: 1p, 2p, 2p.*

### 2. $I_n = \displaystyle\int_0^1\frac{x^n}{x^3 + 1}\,dx$

#### a) $I_2 = \frac13\ln2$

$$I_2 = \frac13\int_0^1\frac{3x^2}{x^3 + 1}\,dx = \frac13\ln(x^3 + 1)\Big|_0^1 = \frac13\ln 2.$$

*Barem: 2p forma $u'/u$, 3p calculul.*

#### b) $I_{n+3} + I_n = \dfrac1{n+1}$

$$I_{n+3} + I_n = \int_0^1\frac{x^n(x^3 + 1)}{x^3 + 1}\,dx = \int_0^1x^n\,dx = \frac{1}{n+1}.$$

*Barem: 3p gruparea, 2p calculul.*

#### c) $\lim\limits_{n\to\infty}I_n$

Pe $[0,1]$, integrandul este $\ge 0$, deci $I_n \ge 0$ și $I_{n+3} \ge 0$. Din b):

$$0 \le I_n = \frac1{n+1} - I_{n+3} \le \frac{1}{n+1} \to 0.$$

**Răspuns:** $\lim I_n = 0$. *Barem: 2p pozitivitatea, 3p criteriul cleștelui.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $x = 3$ |
| I.3 | $x = \pm3$ |
| I.4 | $p = \frac7{90}$ |
| I.5 | $3$ |
| I.6 | $\frac{\sqrt3}{2}$ |
| II.1.c | $x \in \{-\frac12, 0\}$ |
| II.2.a | $2a$ |
| II.2.b | $a = 3$ |
| II.2.c | $-31$ |
| III.1.b | $y = 8$ |
| III.1.c | descr. pe $(2,4]$, cresc. pe $[4,+\infty)$ |
| III.2.a | $\frac13\ln2$ |
| III.2.c | $0$ |

## Ce merită reținut din varianta 5

- **Progresie geometrică**: $b^2 = ac$ pentru trei termeni consecutivi.
- **Matrice egală cu inversa ei**: $A^2 = I$.
- **Rădăcini complexe conjugate** + Viète dau imediat rădăcina reală.
- **Recurențe $I_{n+3} + I_n$**: simplifică numitorul, apoi încadrează pentru limită.
