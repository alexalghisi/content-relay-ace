Rezolvarea completă a subiectului de **Bacalaureat 2011 la Matematică (M2 — științe ale naturii / filiera tehnologică)**, sesiunea august–septembrie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresia aritmetică cu $a_2 = 6$, $a_3 = 5$; $a_6$

$r = a_3 - a_2 = -1$, deci $a_6 = a_3 + 3r = 5 - 3 = 2$.

**Răspuns:** $a_6 = 2$. *Barem: 2p, 3p.*

### 2. Soluțiile întregi ale inecuației $2x^2 - x - 3 \le 0$

Rădăcinile: $x = -1$ și $x = \dfrac32$; trinomul (cu $a = 2 > 0$) este $\le 0$ între rădăcini: $x \in \left[-1, \dfrac32\right]$.

**Răspuns:** $x \in \{-1, 0, 1\}$. *Barem: 3p, 2p.*

### 3. $\log_3(x + 2) - \log_3(x - 4) = 1$

Condiții: $x > 4$. $\log_3\dfrac{x+2}{x-4} = 1 \iff x + 2 = 3(x - 4) \iff x = 7$, care convine.

**Răspuns:** $x = 7$. *Barem: 1p, 2p, 2p.*

### 4. O scumpire cu $5\%$ crește prețul cu 12 lei; prețul inițial

$\dfrac{5}{100}x = 12 \iff x = 240$.

**Răspuns:** 240 de lei. *Barem: 3p, 2p.*

### 5. Mediatoarea segmentului $[AB]$, $A(1,4)$, $B(5,0)$

Mijlocul $M(3, 2)$; $m_{AB} = \dfrac{0 - 4}{5 - 1} = -1$, deci mediatoarea (perpendiculară pe $AB$) are panta $1$:

$$y - 2 = x - 3 \iff y = x - 1.$$

**Răspuns:** $y = x - 1$. *Barem: 1p, 2p, 2p.*

### 6. Raza cercului circumscris, $BC = 9$, $m(\angle BAC) = 120^\circ$

$\sin 120^\circ = \sin 60^\circ = \dfrac{\sqrt3}{2}$, iar din teorema sinusurilor:

$$R = \frac{BC}{2\sin A} = \frac{9}{\sqrt3} = 3\sqrt3.$$

**Răspuns:** $R = 3\sqrt3$. *Barem: 2p, 2p, 1p.*

## Subiectul al II-lea (30 de puncte)

### 1. $D(x,y) = \begin{vmatrix} 1 & 1 & 1\\ 1 & x & y\\ 1 & x + 1 & y + 1\end{vmatrix}$, $x, y \in \mathbb Z$

Calcul general (scădem linia 1 din linia 2 și linia 2 din linia 3):

$$D(x,y) = \begin{vmatrix} 1 & 1 & 1\\ 0 & x - 1 & y - 1\\ 0 & 1 & 1\end{vmatrix} = (x - 1) - (y - 1) = x - y.$$

#### a) $D(-1, 1)$

$D(-1, 1) = -1 - 1 = -2$. **Răspuns:** $-2$. *Barem: 2p, 3p.*

#### b) $x$ cu $D(x, 2010) = 1$

$x - 2010 = 1 \iff x = 2011$. **Răspuns:** $x = 2011$. *Barem: 1p, 2p, 2p.*

#### c) $D(x,y)\cdot D(x,-y) = D(x^2, y^2)$

$$(x - y)(x + y) = x^2 - y^2 = D(x^2, y^2). \ \blacksquare$$

*Barem: 2p, 2p, 1p.*

### 2. Legea $x * y = 2xy - 6x - 6y + 21$

#### a) $x * y = 2(x - 3)(y - 3) + 3$

$$2(x - 3)(y - 3) + 3 = 2xy - 6x - 6y + 18 + 3 = x * y.$$

*Barem: 3p, 2p.*

#### b) Asociativitatea

$$(x * y) * z = 2\big(2(x-3)(y-3)\big)(z - 3) + 3 = 4(x - 3)(y - 3)(z - 3) + 3,$$

$$x * (y * z) = 2(x - 3)\big(2(y-3)(z-3)\big) + 3 = 4(x - 3)(y - 3)(z - 3) + 3.$$

Egale, deci legea este asociativă. *Barem: 2p, 2p, 1p.*

#### c) $1 * 2 * \ldots * 2011$

$x * 3 = 3 * x = 3$ pentru orice $x$. Grupând: $(1 * 2) * 3 * (4 * \ldots * 2011) = 3$.

**Răspuns:** $3$. *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x^3 + x^2 + x + 3^x$

#### a) $f'(0)$

$f'(x) = 3x^2 + 2x + 1 + 3^x\ln3$, deci $f'(0) = 1 + \ln 3$.

**Răspuns:** $1 + \ln 3$. *Barem: 3p, 2p.*

#### b) $f$ crescătoare pe $\mathbb R$

$3x^2 + 2x + 1 = 2x^2 + (x + 1)^2 > 0$ (nu se anulează simultan ambii termeni), iar $3^x\ln3 > 0$. Deci $f'(x) > 0$ și $f$ este (strict) crescătoare. *Barem: 3p, 2p.*

#### c) $a^3 + a^2 + a - b^3 - b^2 - b \le 3^b - 3^a$ pentru $a \le b$

$f$ crescătoare și $a \le b$ $\Rightarrow f(a) \le f(b)$:

$$a^3 + a^2 + a + 3^a \le b^3 + b^2 + b + 3^b \iff a^3 + a^2 + a - b^3 - b^2 - b \le 3^b - 3^a. \ \blacksquare$$

*Barem: 3p, 1p, 1p.*

### 2. $f_n:[0,1] \to \mathbb R$, $f_n(x) = x^ne^x$

#### a) $\displaystyle\int_0^1\frac{f_1(x)}{e^x}dx$

$$\int_0^1 x\,dx = \frac12.$$

**Răspuns:** $\dfrac12$. *Barem: 3p, 2p.*

#### b) $\displaystyle\int_0^1 f_1(x)\,dx$

Prin părți ($u = x$, $v' = e^x$):

$$\int_0^1 xe^x\,dx = xe^x\Big|_0^1 - \int_0^1 e^x\,dx = e - (e - 1) = 1.$$

**Răspuns:** $1$. *Barem: 2p, 2p, 1p.*

#### c) $\displaystyle\int_0^1 f_n(x^2)\,dx \ge \frac{1}{2n+1}$

$f_n(x^2) = x^{2n}e^{x^2}$. Cum $x^2 \ge 0$, $e^{x^2} \ge 1$, deci $x^{2n}e^{x^2} \ge x^{2n}$ și

$$\int_0^1 f_n(x^2)\,dx \ge \int_0^1 x^{2n}dx = \frac{1}{2n+1}. \ \blacksquare$$

*Barem: 1p, 2p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_6 = 2$ |
| I.2 | $\{-1, 0, 1\}$ |
| I.3 | $x = 7$ |
| I.4 | 240 lei |
| I.5 | $y = x - 1$ |
| I.6 | $R = 3\sqrt3$ |
| II.1.a | $-2$ |
| II.1.b | $x = 2011$ |
| II.2.c | $3$ |
| III.1.a | $1 + \ln3$ |
| III.2.a | $\tfrac12$ |
| III.2.b | $1$ |

## Ce merită reținut din varianta 2

- **Mediatoarea** trece prin mijlocul segmentului și are panta $-\frac{1}{m_{AB}}$.
- **Determinanți cu linii aproape egale**: scade liniile între ele înainte de a dezvolta.
- **Inegalități din monotonie**: $a \le b \Rightarrow f(a) \le f(b)$, apoi rearanjezi termenii.
- **Minorarea integralei**: $e^{x^2} \ge 1$ simplifică integrandul la o putere.
