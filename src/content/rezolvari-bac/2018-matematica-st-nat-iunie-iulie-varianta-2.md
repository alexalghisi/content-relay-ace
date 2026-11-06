Rezolvarea completă a subiectului de **Bacalaureat 2018 la Matematică M_șt-nat**, sesiunea iunie–iulie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Produsul primilor trei termeni ai progresiei geometrice $(b_n)$, știind $b_2 = 4$

Într-o progresie geometrică, $b_1 b_3 = b_2^2$. Deci

$$b_1 b_2 b_3 = b_2^2\cdot b_2 = b_2^3 = 4^3 = 64.$$

**Răspuns:** $64$. *Barem: 2p $b_1b_3 = b_2^2$, 3p rezultatul.*

### 2. $f(x) = (x-1)^2$, $g(x) = 2018 - x$; calculați $g(f(1))$

$f(1) = 0$, deci $g(f(1)) = g(0) = 2018$.

**Răspuns:** $2018$. *Barem: 2p $f(1)$, 3p $g(0)$.*

### 3. Ecuația $25^x = 5^{x^2}$

$25^x = 5^{2x}$, deci

$$5^{2x} = 5^{x^2} \iff x^2 - 2x = 0 \iff x(x-2) = 0.$$

**Răspuns:** $x \in \{0, 2\}$. *Barem: 3p egalarea exponenților, 2p soluțiile.*

### 4. Probabilitatea ca un număr de două cifre să aibă cifra zecilor $9$

- Cazuri posibile: $10, \dots, 99$ — **90**.
- Cazuri favorabile: $90, 91, \dots, 99$ — **10**.

$$p = \frac{10}{90} = \frac19.$$

**Răspuns:** $p = \dfrac19$. *Barem: 1p posibile, 2p favorabile, 2p probabilitatea.*

### 5. $d: (a-1)x - a^2 y - a^2 = 0$, $a \ne 0$, paralelă cu $Ox$

Scriem $y = \dfrac{a-1}{a^2}x - 1$, deci panta este $m_d = \dfrac{a-1}{a^2}$.

$d \parallel Ox \iff m_d = 0 \iff a - 1 = 0 \iff a = 1$ (atunci $d: y = -1$, distinctă de $Ox$).

**Răspuns:** $a = 1$. *Barem: 2p panta, 3p valoarea lui $a$.*

### 6. $\operatorname{tg} x + \operatorname{ctg} x = \dfrac52$, știind $\sin x = \dfrac{1}{\sqrt5}$, $x \in \left(0, \frac\pi2\right)$

$\cos^2 x = 1 - \dfrac15 = \dfrac45$, iar în cadranul I $\cos x > 0$: $\cos x = \dfrac{2}{\sqrt5}$.

$$\operatorname{tg} x + \operatorname{ctg} x = \frac{\sin^2 x + \cos^2 x}{\sin x\cos x} = \frac{1}{\frac{1}{\sqrt5}\cdot\frac{2}{\sqrt5}} = \frac{1}{\frac25} = \frac52.$$

*Barem: 2p $\cos x$, 3p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}x+2 & x\\1 & -2\end{pmatrix}$

#### a) $\det(A(1)) = -7$

$$\det\begin{pmatrix}3 & 1\\1 & -2\end{pmatrix} = 3\cdot(-2) - 1\cdot 1 = -7.$$

*Barem: 3p formula, 2p calculul.*

#### b) $xA(y) - yA(x) = (x-y)A(0)$

$$xA(y) - yA(x) = \begin{pmatrix}xy + 2x - xy - 2y & xy - xy\\ x - y & -2x + 2y\end{pmatrix} = \begin{pmatrix}2(x-y) & 0\\x-y & -2(x-y)\end{pmatrix} = (x-y)\begin{pmatrix}2 & 0\\1 & -2\end{pmatrix} = (x-y)A(0).$$

*Barem: 2p calculul, 3p factorizarea.*

#### c) $a$ cu $\big(aA(-1) + A(a)\big)A(0) = (a^2 + 7)I_2$

Din b) cu $x = a$, $y = -1$: $aA(-1) + A(a) = (a+1)A(0)$. Apoi

$$A(0)\cdot A(0) = \begin{pmatrix}2&0\\1&-2\end{pmatrix}\begin{pmatrix}2&0\\1&-2\end{pmatrix} = \begin{pmatrix}4 & 0\\0 & 4\end{pmatrix} = 4I_2.$$

Egalitatea devine $4(a+1)I_2 = (a^2+7)I_2 \iff a^2 - 4a + 3 = 0 \iff a \in \{1, 3\}$.

**Răspuns:** $a \in \{1, 3\}$. *Barem: 3p reducerea la $4(a+1)I_2$, 2p soluțiile.*

### 2. $f = 4X^3 - 6X + m$

#### a) Pentru $m = 2$, $f(1) = 0$

$$f(1) = 4 - 6 + 2 = 0.$$

*Barem: 3p înlocuirea, 2p finalizarea.*

#### b) $f$ nu se divide cu $X^2 + X + 1$

Împărțim: $4X^3 - 6X + m = (X^2 + X + 1)(4X - 4) + (-6X + m + 4)$.

(Verificare: $(X^2+X+1)(4X-4) = 4X^3 - 4$, iar $4X^3 - 4 - 6X + m + 4 = 4X^3 - 6X + m$ ✔.)

Restul $-6X + m + 4$ are coeficientul lui $X$ egal cu $-6 \ne 0$, deci nu este polinomul nul pentru niciun $m$. *Barem: 3p restul, 2p concluzia.*

#### c) $m \ne 0$ cu $\left(\frac1{x_1} + \frac1{x_2} + \frac1{x_3}\right)^2 = \frac{1}{x_1x_2x_3}$

Relațiile lui Viète: $x_1x_2 + x_1x_3 + x_2x_3 = -\dfrac64 = -\dfrac32$, $x_1x_2x_3 = -\dfrac m4$.

$$\frac1{x_1} + \frac1{x_2} + \frac1{x_3} = \frac{x_1x_2 + x_1x_3 + x_2x_3}{x_1x_2x_3} = \frac{-\frac32}{-\frac m4} = \frac6m, \qquad \frac{1}{x_1x_2x_3} = -\frac4m.$$

$$\frac{36}{m^2} = -\frac4m \iff 36 = -4m \iff m = -9.$$

**Răspuns:** $m = -9$. *Barem: 3p Viète și suma inverselor, 2p valoarea lui $m$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,+\infty) \to \mathbb R$, $f(x) = 1 - \dfrac{\ln x}{x} - \dfrac1x$

#### a) $f'(x) = \dfrac{\ln x}{x^2}$

$$f'(x) = -\frac{\frac1x\cdot x - \ln x}{x^2} + \frac{1}{x^2} = \frac{-1 + \ln x + 1}{x^2} = \frac{\ln x}{x^2}.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Tangenta în $x = 1$

$f(1) = 1 - 0 - 1 = 0$, $f'(1) = 0$:

$$y - f(1) = f'(1)(x-1) \iff y = 0.$$

**Răspuns:** $y = 0$. *Barem: 2p valorile, 3p ecuația.*

#### c) $\dfrac{\ln x}{2\sqrt x} \le 1 - \dfrac{1}{\sqrt x}$ pentru $x > 0$

$f'(x) \le 0$ pe $(0,1]$ și $f'(x) \ge 0$ pe $[1,+\infty)$, deci $x = 1$ este punct de minim global: $f(t) \ge f(1) = 0$ pentru orice $t > 0$.

Aplicăm pentru $t = \sqrt x > 0$:

$$1 - \frac{\ln\sqrt x}{\sqrt x} - \frac{1}{\sqrt x} \ge 0 \iff \frac{\ln x}{2\sqrt x} \le 1 - \frac1{\sqrt x}. \ \blacksquare$$

*Barem: 2p monotonia, 3p concluzia.*

### 2. $f:(-1,+\infty) \to \mathbb R$, $f(x) = 3x^2 + \dfrac{1}{x+1}$

#### a) $\displaystyle\int_0^2 (x+1)f(x)\,dx = 22$

$(x+1)f(x) = 3x^3 + 3x^2 + 1$:

$$\int_0^2 (3x^3 + 3x^2 + 1)\,dx = \left(\frac{3x^4}{4} + x^3 + x\right)\Big|_0^2 = 12 + 8 + 2 = 22.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 \left(f(x) - \frac1{x+1}\right)e^{x^3}\,dx$

Integrandul este $3x^2 e^{x^3} = \left(e^{x^3}\right)'$:

$$\int_0^1 3x^2e^{x^3}\,dx = e^{x^3}\Big|_0^1 = e - 1.$$

**Răspuns:** $e - 1$. *Barem: 3p primitiva, 2p rezultatul.*

#### c) $n$ cu $V = \dfrac\pi n$ pentru $g(x) = f(x) - 3x^2$, $x \in [0,1]$

$g(x) = \dfrac{1}{x+1}$:

$$V = \pi\int_0^1 \frac{dx}{(x+1)^2} = \pi\left(-\frac{1}{x+1}\right)\Big|_0^1 = \pi\left(-\frac12 + 1\right) = \frac\pi2.$$

$\dfrac\pi n = \dfrac\pi2 \iff n = 2$. **Răspuns:** $n = 2$. *Barem: 3p volumul, 2p valoarea lui $n$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $64$ |
| I.2 | $2018$ |
| I.3 | $x \in \{0, 2\}$ |
| I.4 | $p = \frac19$ |
| I.5 | $a = 1$ |
| II.1.c | $a \in \{1, 3\}$ |
| II.2.b | rest $-6X + m + 4 \ne 0$ |
| II.2.c | $m = -9$ |
| III.1.b | $y = 0$ |
| III.2.b | $e - 1$ |
| III.2.c | $n = 2$ |

## Ce merită reținut din varianta 2

- **Progresie geometrică**: $b_1b_3 = b_2^2$, deci produsul a trei termeni consecutivi este $b_2^3$.
- **Relația $xA(y) - yA(x)$** se reutilizează la c) cu valori particulare.
- **Inegalități cu funcții**: găsește minimul funcției din a)/b), apoi substituie convenabil ($t = \sqrt x$).
- **Volumul corpului de rotație**: $V = \pi\int_a^b g^2(x)\,dx$.
