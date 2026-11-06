Rezolvarea completă a subiectului de **Bacalaureat 2016 la Matematică M_mate-info**, sesiunea specială, **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Al patrulea termen al progresiei aritmetice cu $a_1 = 1$, $a_2 = 4$

$r = 3$, $a_4 = a_1 + 3r = 10$. **Răspuns:** $10$. *Barem: 2p, 3p.*

### 2. $a$ știind că $A(1, a)$ aparține graficului lui $f(x) = x^2 + 4$

$a = f(1) = 5$. *Barem: 3p, 2p.*

### 3. Ecuația $9^{x-2} = 3^{2-x}$

$3^{2x - 4} = 3^{2 - x} \iff 2x - 4 = 2 - x \iff x = 2$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr de două cifre să fie $\le 30$

Favorabile: $10, 11, \dots, 30$ — **21**; posibile: **90**.

$$p = \frac{21}{90} = \frac{7}{30}.$$

*Barem: 1p, 2p, 2p.*

### 5. Dreapta prin $A(0,3)$ cu panta $1$

$y - 3 = x \iff y = x + 3$. *Barem: 3p, 2p.*

### 6. $AB = AC = 10$, $BC = 12$: $\sin B = \frac45$

Triunghiul este isoscel; înălțimea $AD$ este și mediană: $BD = 6$, $AD = \sqrt{100 - 36} = 8$.

$$\sin B = \frac{AD}{AB} = \frac{8}{10} = \frac45.$$

*Barem: 2p $AD$, 3p sinusul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(m) = \begin{pmatrix}-m&1&1\\1&-m&1\\1&1&-m\end{pmatrix}$, sistemul $\begin{cases}-mx + y + z = -1\\x - my + z = -1\\x + y - mz = m\end{cases}$

#### a) $\det(A(0)) = 2$

$$\det\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix} = 0 + 1 + 1 - 0 - 0 - 0 = 2.$$

*Barem: 2p, 3p.*

#### b) $A(m)$ este inversabilă pentru $m \ne -1$, $m \ne 2$

Regula lui Sarrus:

$$\det A(m) = -m^3 + 1 + 1 + m + m + m = -m^3 + 3m + 2 = -(m+1)^2(m-2) = (2 - m)(m + 1)^2.$$

(Verificare: $(m+1)^2(m-2) = (m^2 + 2m + 1)(m - 2) = m^3 - 3m - 2$ ✔.) Pentru $m \notin \{-1, 2\}$, $\det \ne 0$. *Barem: 3p, 2p.*

#### c) Pentru $m = 2$: soluția cu $x_0 + 2y_0 + 3z_0 = 9$

$$\begin{cases}-2x + y + z = -1\\x - 2y + z = -1\\x + y - 2z = 2\end{cases}$$

Scăzând a doua din prima: $-3x + 3y = 0$, deci $x = y$. Din a treia: $2x - 2z = 2$, deci $x = z + 1$. Cu $z = \alpha$: soluțiile sunt $(1 + \alpha, 1 + \alpha, \alpha)$ (verificare în prima: $-2 - 2\alpha + 1 + \alpha + \alpha = -1$ ✔).

$$1 + \alpha + 2(1 + \alpha) + 3\alpha = 9 \iff 6\alpha = 6 \iff \alpha = 1.$$

**Răspuns:** $(2, 2, 1)$. *Barem: 3p soluția generală, 2p soluția cerută.*

### 2. $x * y = -2xy + 10x + 10y - 45$ (asociativă)

#### a) $x * y = -2(x - 5)(y - 5) + 5$

$$-2xy + 10x + 10y - 50 + 5 = -2x(y - 5) + 10(y - 5) + 5 = -2(x-5)(y-5) + 5.$$

*Barem: 2p, 3p.*

#### b) $1 * 2 * \dots * 10 = 5$

$x * 5 = 5 * y = 5$ pentru orice $x, y$. Cu asociativitatea:

$$\big((1 * 2 * 3 * 4) * 5\big) * (6 * \dots * 10) = 5 * (\dots) = 5.$$

*Barem: 2p, 3p.*

#### c) $m, n \in \mathbb N$ cu $m * n = 27$

$-2(m-5)(n-5) + 5 = 27 \iff (m - 5)(n - 5) = -11$. Cum $m - 5, n - 5 \ge -5$, singurele variante sunt $(-1)\cdot11$ și $11\cdot(-1)$.

**Răspuns:** $(m, n) \in \{(4, 16), (16, 4)\}$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,+\infty)\to\mathbb R$, $f(x) = x^2 - 8\ln x$

#### a) $f'(x) = \dfrac{2(x-2)(x+2)}{x}$

$$f'(x) = 2x - \frac8x = \frac{2x^2 - 8}{x} = \frac{2(x-2)(x+2)}{x}.$$

*Barem: 2p, 3p.*

#### b) Intervalele de monotonie

Pe $(0, +\infty)$, $f'(x) = 0 \iff x = 2$; $f' \le 0$ pe $(0, 2]$, $f' \ge 0$ pe $[2, +\infty)$.

**Răspuns:** descrescătoare pe $(0, 2]$, crescătoare pe $[2, +\infty)$. *Barem: 1p, 2p, 2p.*

#### c) Ecuația $f(x) = 0$ are două soluții reale distincte

$$\lim_{x\searrow0}f(x) = 0 - 8\cdot(-\infty) = +\infty, \qquad \lim_{x\to+\infty}x^2\left(1 - \frac{8\ln x}{x^2}\right) = +\infty.$$

Minimul este $f(2) = 4 - 8\ln 2 = 4(1 - 2\ln2) < 0$ (pentru că $\ln 4 > 1$). Pe fiecare dintre intervalele $(0, 2]$ și $[2, +\infty)$, $f$ este continuă și strict monotonă și trece de la $+\infty$ la o valoare negativă (respectiv invers), deci are exact câte o rădăcină. $\blacksquare$ *Barem: 2p limitele, 3p concluzia.*

### 2. $f:(4,+\infty)\to\mathbb R$, $f(x) = \dfrac{1}{x(x-4)}$

#### a) $\displaystyle\int_5^{10}(x - 4)f(x)\,dx = \ln 2$

$$\int_5^{10}\frac1x\,dx = \ln10 - \ln5 = \ln2.$$

*Barem: 3p, 2p.*

#### b) Volumul pentru $g(x) = xf(x) = \dfrac{1}{x-4}$, $x \in [5,6]$

$$V = \pi\int_5^6\frac{dx}{(x-4)^2} = \pi\left(-\frac{1}{x-4}\right)\Big|_5^6 = \pi\left(-\frac12 + 1\right) = \frac\pi2.$$

**Răspuns:** $\dfrac\pi2$. *Barem: 2p, 3p.*

#### c) $\displaystyle\lim_{n\to\infty}\left(n^2\int_n^{n+1}f(x)\,dx\right) = 1$

$\dfrac{1}{x(x-4)} = \dfrac14\left(\dfrac{1}{x-4} - \dfrac1x\right)$, deci pentru $n > 4$:

$$\int_n^{n+1}f(x)\,dx = \frac14\ln\frac{x-4}{x}\Big|_n^{n+1} = \frac14\ln\left(\frac{n-3}{n+1}\cdot\frac{n}{n-4}\right) = \frac14\ln\frac{n^2 - 3n}{n^2 - 3n - 4}.$$

$$n^2\cdot\frac14\ln\left(1 + \frac{4}{n^2 - 3n - 4}\right) = \ln\left(1 + \frac{4}{n^2 - 3n - 4}\right)^{\frac{n^2}{4}} \to \ln e^{\lim\frac{n^2}{n^2 - 3n - 4}} = \ln e = 1. \ \blacksquare$$

*Barem: 2p integrala, 3p limita.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_4 = 10$ |
| I.2 | $a = 5$ |
| I.3 | $x = 2$ |
| I.4 | $p = \frac7{30}$ |
| I.5 | $y = x + 3$ |
| II.1.c | $(2, 2, 1)$ |
| II.2.c | $(4,16)$, $(16,4)$ |
| III.1.b | descr. pe $(0,2]$, cresc. pe $[2,+\infty)$ |
| III.2.a | $\ln 2$ |
| III.2.b | $\frac\pi2$ |
| III.2.c | $1$ |

## Ce merită reținut din varianta 1

- **Determinantul $\begin{vmatrix}-m&1&1\\1&-m&1\\1&1&-m\end{vmatrix} = (2-m)(m+1)^2$** — suma liniilor este $2 - m$.
- **Element absorbant ($5$)** într-un șir lung de compuneri: rezultatul este chiar el.
- **Număr de rădăcini**: monotonie + semnul minimului + limitele la capete.
- **Limite $n^2\ln(1 + a_n)$**: folosește $\ln(1 + t)\sim t$ sau forma $\ln e$.
