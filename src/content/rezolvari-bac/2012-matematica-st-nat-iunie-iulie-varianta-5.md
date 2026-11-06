Rezolvarea completă a subiectului de **Bacalaureat 2012 la Matematică M2** (profil real, științele naturii, și filiera tehnologică), sesiunea iunie–iulie, **varianta 5**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $2^{-1} + 2^{-2} = 0{,}75$

$$2^{-1} + 2^{-2} = \frac12 + \frac14 = \frac34 = 0{,}75.$$

*Barem: 3p + 2p.*

### 2. Inecuația $\frac{2}{x-3} < 0$

Numărătorul $2 > 0$, deci fracția e negativă exact când $x - 3 < 0$.

**Răspuns:** $x \in (-\infty, 3)$. *Barem: 3p + 2p.*

### 3. Ecuația $\sqrt{x+2} = x + 2$

**Condiție:** $x \ge -2$ (și atunci și membrul drept e $\ge 0$). Ridicăm la pătrat:

$$x + 2 = (x+2)^2 \iff (x+2)(x + 2 - 1) = 0 \iff (x+2)(x+1) = 0.$$

Ambele soluții verifică: $\sqrt0 = 0$, $\sqrt1 = 1$.

**Răspuns:** $x \in \{-2, -1\}$. *Barem: 1p + 2p + 2p.*

### 4. Depozit de 900 lei, după un an 1008 lei; aflați $p$

Dobânda: $1008 - 900 = 108$ lei.

$$\frac{p}{100}\cdot900 = 108 \iff 9p = 108 \iff p = 12.$$

**Răspuns:** $p = 12\%$. *Barem: 1p + 2p + 2p.*

### 5. $B$ astfel încât $A(2,3)$ să fie mijlocul lui $OB$

$x_A = \dfrac{0 + x_B}{2} \Rightarrow x_B = 4$; $y_A = \dfrac{0 + y_B}{2} \Rightarrow y_B = 6$.

**Răspuns:** $B(4, 6)$. *Barem: 3p + 2p.*

### 6. Unghiul ascuțit $x$ cu $\frac{\sin x + 4\cos x}{\cos x} = 5$

$$\sin x + 4\cos x = 5\cos x \iff \sin x = \cos x \iff \operatorname{tg} x = 1.$$

Unghiul fiind ascuțit: $x = 45^\circ$. *Barem: 1p + 2p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $H(x) = \begin{pmatrix} 1 & 0 & 0\\ 0 & 1 & \ln x\\ 0 & 0 & 1\end{pmatrix}$, $x > 0$

#### a) $\det(H(x)) = 1$

Matrice superior triunghiulară cu diagonala $1, 1, 1$: $\det(H(x)) = 1$.

*Barem: 4p + 1p.*

#### b) $a > 0$ cu $H(x)\cdot H(a) = H(x)$ pentru orice $x > 0$

$$H(x)\cdot H(a) = \begin{pmatrix} 1 & 0 & 0\\ 0 & 1 & \ln a + \ln x\\ 0 & 0 & 1\end{pmatrix} = H(xa).$$

$H(xa) = H(x) \iff \ln a = 0 \iff a = 1$.

**Răspuns:** $a = 1$. *Barem: 3p + 2p.*

#### c) $\det\big(H(1) + H(2) + \dots + H(2012)\big)$

$$H(1) + \dots + H(2012) = \begin{pmatrix} 2012 & 0 & 0\\ 0 & 2012 & \ln1 + \ln2 + \dots + \ln2012\\ 0 & 0 & 2012\end{pmatrix} = \begin{pmatrix} 2012 & 0 & 0\\ 0 & 2012 & \ln(2012!)\\ 0 & 0 & 2012\end{pmatrix}.$$

Matrice superior triunghiulară, deci determinantul este $2012^3$.

**Răspuns:** $2012^3$. *Barem: 3p + 2p.*

### 2. $f = X^3 + 3X^2 - 3X - 1$, cu rădăcinile $x_1, x_2, x_3$

#### a) $f$ se divide cu $X - 1$

$f(1) = 1 + 3 - 3 - 1 = 0$, deci (Bézout) $X - 1 \mid f$. *Barem: 3p + 2p.*

#### b) $x_1^2 + x_2^2 + x_3^2$

Viète: $x_1 + x_2 + x_3 = -3$, $x_1x_2 + x_1x_3 + x_2x_3 = -3$.

$$x_1^2 + x_2^2 + x_3^2 = (-3)^2 - 2(-3) = 9 + 6 = 15.$$

*Barem: 1p + 1p + 3p.*

#### c) $(2 - x_1)(2 - x_2)(2 - x_3) = 13$?

$f = (X - x_1)(X - x_2)(X - x_3)$, deci produsul cerut este $f(2) = 8 + 12 - 6 - 1 = 13$.

**Răspuns:** da, egalitatea este adevărată. *Barem: 3p + 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,+\infty)\to\mathbb R$, $f(x) = \sqrt x - \ln x$

#### a) $\lim\limits_{x\to4}\dfrac{f(x) - f(4)}{x - 4} = 0$

$f'(x) = \dfrac{1}{2\sqrt x} - \dfrac1x$. Limita este $f'(4) = \dfrac14 - \dfrac14 = 0$.

*Barem: 2p + 2p + 1p.*

#### b) $f$ crescătoare pe $(4, +\infty)$

$$f'(x) = \frac{\sqrt x - 2}{2x}.$$

Pentru $x > 4$, $\sqrt x > 2$, deci $f'(x) > 0$ și $f$ este crescătoare. *Barem: 2p + 3p.*

#### c) Asimptota verticală

$\lim\limits_{x\searrow0}(\sqrt x - \ln x) = 0 - (-\infty) = +\infty$.

**Răspuns:** $x = 0$. *Barem: 3p + 2p.*

### 2. $f(x) = xe^x$

#### a) $F(x) = xe^x - e^x + 2012$ este primitivă

$$F'(x) = e^x + xe^x - e^x = xe^x = f(x).$$

*Barem: 3p + 2p.*

#### b) $\displaystyle\int_1^e f(\ln x)\,dx$

$f(\ln x) = \ln x\cdot e^{\ln x} = x\ln x$. Prin părți:

$$\int_1^e x\ln x\,dx = \frac{x^2}{2}\ln x\Big|_1^e - \int_1^e\frac{x^2}{2}\cdot\frac1x\,dx = \frac{e^2}{2} - \frac{x^2}{4}\Big|_1^e = \frac{e^2}{2} - \frac{e^2 - 1}{4} = \frac{e^2 + 1}{4}.$$

**Răspuns:** $\dfrac{e^2 + 1}{4}$. *Barem: 1p + 2p + 2p.*

#### c) Volumul pentru $g(x) = \frac{f(x)}{x} = e^x$ pe $[1,2]$

$$V = \pi\int_1^2 e^{2x}\,dx = \pi\frac{e^{2x}}{2}\Big|_1^2 = \frac{\pi(e^4 - e^2)}{2} = \frac{\pi e^2(e^2 - 1)}{2}.$$

*Barem: 2p + 2p + 1p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $x \in (-\infty, 3)$ |
| I.3 | $x \in \{-2, -1\}$ |
| I.4 | $p = 12$ |
| I.5 | $B(4, 6)$ |
| I.6 | $x = 45^\circ$ |
| II.1.b | $a = 1$ |
| II.1.c | $2012^3$ |
| II.2.b | $15$ |
| II.2.c | da, $f(2) = 13$ |
| III.1.c | $x = 0$ |
| III.2.b | $\frac{e^2+1}{4}$ |
| III.2.c | $\frac{\pi e^2(e^2-1)}{2}$ |

## Ce merită reținut din varianta 5

- **$\prod(a - x_i) = f(a)$** pentru un polinom monic cu rădăcinile $x_i$ — fără Viète.
- **Matricele $H(x)$ cu $\ln x$**: $H(x)H(y) = H(xy)$, iar suma logaritmilor devine $\ln$ de produs.
- **Determinantul unei matrice triunghiulare** = produsul diagonalei.
- **$e^{\ln x} = x$** simplifică $f(\ln x)$.
