Rezolvarea completă a subiectului de **Bacalaureat 2010 la Matematică M1 (mate-info)**, subiectul de rezervă, **varianta 10**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z = i\sqrt2 - 1$ este soluție a ecuației $z^2 + 2z + 3 = 0$

$$z^2 = (i\sqrt2 - 1)^2 = 2i^2 - 2i\sqrt2 + 1 = -1 - 2\sqrt2\,i,$$

$$z^2 + 2z + 3 = (-1 - 2\sqrt2\,i) + (2\sqrt2\,i - 2) + 3 = 0.$$

*Barem: 1p înlocuirea, 2p calculul, 2p finalizarea.*

### 2. $f(x) = 2x + a$, $g(x) = x^2 - a$; $a$ cu $(f\circ g)(x) > 0$ pentru orice $x$

$$(f\circ g)(x) = 2(x^2 - a) + a = 2x^2 - a.$$

Minimul lui $2x^2 - a$ este $-a$ (în $x = 0$), deci $2x^2 - a > 0$ pentru orice $x \iff -a > 0 \iff a < 0$.

**Răspuns:** $a \in (-\infty, 0)$. *Barem: 2p + 1p compunerea, 2p condiția.*

### 3. Ecuația $\sqrt{x^2 - 2x + 1} = x + 1$

$\sqrt{(x-1)^2} = |x - 1|$, deci $|x - 1| = x + 1$ (cu $x + 1 \ge 0$).

- $x - 1 = x + 1$ — imposibil;
- $x - 1 = -(x + 1) \Rightarrow 2x = 0 \Rightarrow x = 0$, iar $x + 1 = 1 \ge 0$ ✔.

**Răspuns:** $x = 0$. *Barem: 2p ridicarea la pătrat/modulul, 1p ecuația, 2p soluția.*

### 4. Numărul elementelor mulțimii $A = \{1, 3^3, 3^6, 3^9, \dots, 3^{2010}\}$

Exponenții $0, 3, 6, \dots, 2010$ formează o progresie aritmetică cu rația $3$: numărul termenilor este $\dfrac{2010 - 0}{3} + 1 = 671$.

**Răspuns:** $671$. *Barem: 2p progresia, 3p numărarea.*

### 5. Mediana din $A$ în triunghiul $A(3,5)$, $B(-2,5)$, $C(6,-3)$

Mijlocul lui $[BC]$: $M\left(\frac{-2+6}{2}, \frac{5-3}{2}\right) = M(2, 1)$. Dreapta $AM$:

$$m_{AM} = \frac{5 - 1}{3 - 2} = 4, \qquad y - 1 = 4(x - 2) \iff y = 4x - 7.$$

**Răspuns:** $y = 4x - 7$. *Barem: 2p mijlocul, 3p ecuația.*

### 6. Calculați $\sin\dfrac{\pi}{12}$

$\dfrac\pi{12} = \dfrac\pi3 - \dfrac\pi4$:

$$\sin\frac\pi{12} = \sin\frac\pi3\cos\frac\pi4 - \cos\frac\pi3\sin\frac\pi4 = \frac{\sqrt3}{2}\cdot\frac{\sqrt2}{2} - \frac12\cdot\frac{\sqrt2}{2} = \frac{\sqrt6 - \sqrt2}{4}.$$

*Barem: 2p descompunerea, 3p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. Sistemul $\begin{cases}x + y + az = 1\\x + 2ay + z = -1\\2ax + y + (a+1)z = 0\end{cases}$

#### a) Rezolvare pentru $a = 0$

$$\begin{cases}x + y = 1\\x + z = -1\\y + z = 0\end{cases}$$

Adunând: $2(x + y + z) = 0$, deci $x + y + z = 0$. Rezultă $z = -1$, $y = 1$, $x = 0$.

**Răspuns:** $(0, 1, -1)$. *Barem: 2p sistemul, 3p soluția.*

#### b) Pentru $a = -1$ sistemul este compatibil

$A = \begin{pmatrix}1&1&-1\\1&-2&1\\-2&1&0\end{pmatrix}$, $\det A = 1(0 - 1) - 1(0 + 2) - 1(1 - 4) = -1 - 2 + 3 = 0$, iar $\begin{vmatrix}1&1\\1&-2\end{vmatrix} = -3 \ne 0$, deci $\operatorname{rang}A = 2$.

Minorul caracteristic:

$$\begin{vmatrix}1&1&1\\1&-2&-1\\-2&1&0\end{vmatrix} = 1(0 + 1) - 1(0 - 2) + 1(1 - 4) = 0.$$

Conform teoremei lui Rouché, sistemul este compatibil (nedeterminat). *Barem: 3p minorul caracteristic, 1p rangul, 1p concluzia.*

#### c) $a$ pentru care sistemul are soluție unică

$$\det A = \begin{vmatrix}1&1&a\\1&2a&1\\2a&1&a+1\end{vmatrix} = -4a^3 + 2a^2 + 4a - 2 = -2(2a-1)(a-1)(a+1).$$

Soluție unică $\iff \det A \ne 0$.

**Răspuns:** $a \in \mathbb R\setminus\left\{-1, \frac12, 1\right\}$. *Barem: 3p determinantul, 2p concluzia.*

### 2. $f = X^3 - 3X^2 + mX - n$, rădăcinile $x_1, x_2, x_3$

#### a) $m, n$ pentru $x_1 = 2 + i$

$f$ are coeficienți reali, deci $x_2 = 2 - i$. Viète: $x_1 + x_2 + x_3 = 3 \Rightarrow x_3 = 3 - 4 = -1$.

$$m = x_1x_2 + x_3(x_1 + x_2) = 5 + (-1)\cdot 4 = 1, \qquad n = x_1x_2x_3 = 5\cdot(-1) = -5.$$

**Răspuns:** $m = 1$, $n = -5$. *Barem: 1p $x_2$, 2p $x_3$, 2p $m, n$.*

#### b) $m, n$ pentru care restul împărțirii la $(X-1)^2$ este $0$

Restul are forma $r = aX + b$, cu $r(1) = f(1)$ și $r'(1) = f'(1)$ (pentru că $1$ e rădăcină dublă a împărțitorului):

$f(1) = m - n - 2$, $f'(1) = 3 - 6 + m = m - 3$, deci

$$r = (m-3)(X - 1) + m - n - 2 = (m-3)X + 1 - n.$$

$r = 0 \iff m = 3$ și $n = 1$.

**Răspuns:** $m = 3$, $n = 1$. *Barem: 3p restul, 2p valorile.*

#### c) Dacă rădăcinile sunt reale și $m, n > 0$, atunci sunt strict pozitive

Presupunem prin absurd că o rădăcină $x_1 \le 0$. Atunci $x_1^3 \le 0$, $-3x_1^2 \le 0$, $mx_1 \le 0$ și $-n < 0$. Adunând:

$$0 = f(x_1) = x_1^3 - 3x_1^2 + mx_1 - n < 0,$$

contradicție. Deci toate rădăcinile sunt strict pozitive. $\blacksquare$ *Barem: 3p inegalitățile, 2p contradicția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \sqrt[3]{x^3 - 3x + 2}$

#### a) $y = x$ este asimptotă oblică spre $+\infty$

$$m = \lim_{x\to+\infty}\frac{f(x)}{x} = \lim_{x\to+\infty}\sqrt[3]{1 - \frac3{x^2} + \frac2{x^3}} = 1.$$

Cu $a - b = \dfrac{a^3 - b^3}{a^2 + ab + b^2}$:

$$n = \lim_{x\to+\infty}\big(f(x) - x\big) = \lim_{x\to+\infty}\frac{-3x + 2}{f^2(x) + xf(x) + x^2} = 0,$$

deoarece numitorul este de ordinul $3x^2$. Deci $y = x$ este asimptotă oblică. *Barem: 2p $m$, 2p $n$, 1p concluzia.*

#### b) Derivabilitatea în $x = -2$

$x^3 - 3x + 2 = (x-1)^2(x+2)$, $f(-2) = 0$:

$$\frac{f(x) - f(-2)}{x + 2} = \frac{\sqrt[3]{(x-1)^2(x+2)}}{x+2} = \sqrt[3]{\frac{(x-1)^2}{(x+2)^2}} \xrightarrow[x\to-2]{} +\infty.$$

**Răspuns:** $f$ nu este derivabilă în $-2$ (derivata laterală este $+\infty$, tangentă verticală). *Barem: 1p factorizarea, 1p raportul, 2p limita, 1p concluzia.*

#### c) $\displaystyle\lim_{x\to+\infty}\frac{\ln f(x)}{\ln x}$

$$\frac{\ln f(x)}{\ln x} = \frac{\frac13\ln(x^3 - 3x + 2)}{\ln x} = \frac{\frac13\left[3\ln x + \ln\left(1 - \frac3{x^2} + \frac2{x^3}\right)\right]}{\ln x} \to \frac13\cdot 3 = 1.$$

**Răspuns:** $1$. *Barem: 2p rescrierea, 3p limita.*

### 2. $f(x) = \dfrac{\cos x}{2 - \cos^2 x}$

Observație: $2 - \cos^2 x = 1 + \sin^2 x$.

#### a) $\displaystyle\int_0^{\pi/2} f(x)\,dx$

Substituția $t = \sin x$, $dt = \cos x\,dx$:

$$\int_0^{\pi/2}\frac{\cos x}{1 + \sin^2x}\,dx = \int_0^1\frac{dt}{1 + t^2} = \operatorname{arctg} t\Big|_0^1 = \frac\pi4.$$

**Răspuns:** $\dfrac\pi4$. *Barem: 3p substituția, 2p calculul.*

#### b) Orice primitivă a lui $f$ este strict crescătoare pe $\left[0, \frac\pi2\right]$

$F'(x) = f(x) = \dfrac{\cos x}{1 + \sin^2 x} \ge 0$ pe $\left[0, \frac\pi2\right]$, cu egalitate doar în $x = \frac\pi2$. Deci $F$ este strict crescătoare pe interval. $\blacksquare$ *Barem: 2p $F' = f$, 2p semnul, 1p concluzia.*

#### c) $\displaystyle I = \int_0^{2\pi}x\,f(x)\,dx$

$f(2\pi - y) = f(y)$ (cosinusul are perioada $2\pi$ și este par). Substituția $x = 2\pi - y$:

$$I = \int_0^{2\pi}(2\pi - y)f(y)\,dy = 2\pi\int_0^{2\pi}f(y)\,dy - I.$$

Dar $\displaystyle\int_0^{2\pi}f(y)\,dy = \operatorname{arctg}(\sin y)\Big|_0^{2\pi} = 0$, deci $2I = 0$.

**Răspuns:** $I = 0$. *Barem: 1p simetria, 1p substituția, 1p relația, 1p integrala nulă, 1p rezultatul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a < 0$ |
| I.3 | $x = 0$ |
| I.4 | $671$ |
| I.5 | $y = 4x - 7$ |
| I.6 | $\frac{\sqrt6 - \sqrt2}{4}$ |
| II.1.a | $(0, 1, -1)$ |
| II.1.c | $a \in \mathbb R\setminus\{-1, \frac12, 1\}$ |
| II.2.a | $m = 1$, $n = -5$ |
| II.2.b | $m = 3$, $n = 1$ |
| III.1.a | $y = x$ |
| III.1.b | nederivabilă în $-2$ |
| III.1.c | $1$ |
| III.2.a | $\frac\pi4$ |
| III.2.c | $0$ |

## Ce merită reținut din varianta 10

- **$\sqrt{a^2} = |a|$** — nu uita modulul la ecuațiile iraționale.
- **Rest la împărțirea cu $(X - a)^2$**: $r = f'(a)(X - a) + f(a)$.
- **Polinoame cu coeficienți reali**: rădăcinile complexe vin în perechi conjugate.
- **Integrale $\int_0^{2\pi}x f(x)\,dx$** cu $f(2\pi - x) = f(x)$: substituția $x = 2\pi - y$ dă $I = \pi\int_0^{2\pi}f$.
