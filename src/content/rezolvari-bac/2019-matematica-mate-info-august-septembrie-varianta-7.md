Rezolvarea completă a subiectului de **Bacalaureat 2019 la Matematică M_mate-info**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Suma elementelor lui $A = \{n \in \mathbb N \mid |n - 1| \le 4\}$ este $15$

$|n - 1| \le 4 \iff -3 \le n \le 5$; cu $n$ natural: $A = \{0, 1, 2, 3, 4, 5\}$, iar suma este $0 + 1 + 2 + 3 + 4 + 5 = 15$. $\blacksquare$

*Barem: 3p mulțimea, 2p suma.*

### 2. $f(x) = x^2 - 2x + m$: ordonata vârfului parabolei este $2$

$\Delta = 4 - 4m$, iar $y_V = -\dfrac{\Delta}{4a} = \dfrac{4m - 4}{4} = m - 1$. Din $m - 1 = 2$: $m = 3$.

(Alternativ: $x_V = 1$, $f(1) = m - 1 = 2$.) **Răspuns:** $m = 3$. *Barem: 2p, 3p.*

### 3. Ecuația $\sqrt{x + 3} = \sqrt{9 - x}$

$x + 3 = 9 - x \iff x = 3$; verificare: $\sqrt6 = \sqrt6$ ✔.

**Răspuns:** $x = 3$. *Barem: 3p, 2p.*

### 4. Numărul submulțimilor cu cel puțin 8 elemente ale unei mulțimi cu 10 elemente

$$C_{10}^8 + C_{10}^9 + C_{10}^{10} = 45 + 10 + 1 = 56.$$

**Răspuns:** $56$. *Barem: 3p, 2p.*

### 5. $A(5,1)$, $B(-1,3)$, $C(8,10)$, $D$ mijlocul lui $AB$: lungimea $CD$

$D\left(\frac{5 - 1}{2}, \frac{1 + 3}{2}\right) = D(2, 2)$, $CD = \sqrt{(8-2)^2 + (10-2)^2} = \sqrt{36 + 64} = 10$.

**Răspuns:** $CD = 10$. *Barem: 2p, 3p.*

### 6. Arătați că $1 + \cos\pi + \cos2\pi + \dots + \cos2019\pi = 0$

$\cos 2k\pi = 1$, $\cos(2k+1)\pi = -1$. Suma are $2020$ de termeni ($k = 0, \dots, 2019$), alternativ $1$ și $-1$: $1010$ perechi $(1 + (-1)) = 0$. $\blacksquare$

*Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}a + 1 & 0 & 0\\ 1 & a & 1\\ 0 & 0 & a + 1\end{pmatrix}$

**a)** $A(1) = \begin{pmatrix}2&0&0\\1&1&1\\0&0&2\end{pmatrix}$; dezvoltând după prima linie: $\det A(1) = 2\cdot(1\cdot2 - 1\cdot0) = 4$. $\blacksquare$ *Barem: 2p, 3p.*

**b)** Calculăm produsul:

$$A(a)A(b) = \begin{pmatrix}(a+1)(b+1) & 0 & 0\\ a + b + 1 & ab & a + b + 1\\ 0 & 0 & (a+1)(b+1)\end{pmatrix}.$$

Cum $(a+1)(b+1) = ab + (a + b + 1)$, matricea se scrie

$$ab\,I_3 + (a + b + 1)\begin{pmatrix}1&0&0\\1&0&1\\0&0&1\end{pmatrix} = ab\,I_3 + (a + b + 1)A(0).\ \blacksquare$$

*Barem: 3p, 2p.*

**c)** Din b) cu $a = 0$: $A(0)A(b) = (b + 1)A(0)$. Aplicând repetat:

$$A(0)A(1)A(2)\cdots A(2019) = 2\cdot 3\cdots 2020\cdot A(0) = 2020!\,A(0).$$

**Răspuns:** $n = 2020$. *Barem: 2p, 3p.*

### 2. $f = X^3 - mX^2 + 2X + 3 - m$

**a)** $f(1) = 1 - m + 2 + 3 - m = 6 - 2m = 0 \iff m = 3$. *Barem: 3p, 2p.*

**b)** Pentru $m = 3$: $f = X^3 - 3X^2 + 2X = X(X - 1)(X - 2)$.

**Răspuns:** rădăcinile $0, 1, 2$. *Barem: 2p, 3p.*

**c)** Viète: $s_1 = m$, $s_2 = 2$, $s_3 = x_1x_2x_3 = m - 3$. Identitatea

$$x_1^3 + x_2^3 + x_3^3 = s_1^3 - 3s_1s_2 + 3s_3 = m^3 - 6m + 3(m - 3) = m^3 - 3m - 9.$$

Condiția: $m^3 - 3m - 9 = m^3 - 12 \iff 3m = 3 \iff m = 1$.

**Răspuns:** $m = 1$. *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = 1 - \dfrac{2}{x + 1} - \ln\dfrac{x}{x + 1}$, $x > 0$

**a)** $\ln\dfrac{x}{x+1} = \ln x - \ln(x+1)$, deci

$$f'(x) = \frac{2}{(x+1)^2} - \frac1x + \frac{1}{x + 1} = \frac{2}{(x+1)^2} - \frac{1}{x(x+1)} = \frac{2x - (x + 1)}{x(x+1)^2} = \frac{x - 1}{x(x+1)^2}.\ \blacksquare$$

*Barem: 2p, 3p.*

**b)** $\dfrac{2}{x+1} \to 0$, $\dfrac{x}{x+1} \to 1$, deci $\ln\dfrac{x}{x+1} \to 0$ și $\lim\limits_{x\to+\infty}f(x) = 1$. Asimptota: $y = 1$. *Barem: 3p, 2p.*

**c)** Observăm că $g(x) = \dfrac{x - 1}{x + 1} = 1 - \dfrac{2}{x+1}$, deci $f = g - h$ și $g(x) = h(x) \iff f(x) = 0$.

Din a): $f' \le 0$ pe $(0, 1]$, $f' \ge 0$ pe $[1, +\infty)$, deci $f(x) \ge f(1) = 1 - 1 - \ln\frac12 = \ln 2 > 0$. Așadar $f$ nu se anulează, iar graficele lui $g$ și $h$ nu au puncte comune. $\blacksquare$

*Barem: 3p minimul, 2p concluzia.*

### 2. $f(x) = \sqrt{x^2 + 4}$

**a)** $$\int_0^1 f^2(x)\,dx = \int_0^1 (x^2 + 4)\,dx = \frac13 + 4 = \frac{13}{3}.\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** $g(x) = x\sqrt{x^2+4}$ este negativă pe $[-1, 0]$ și pozitivă pe $[0, 1]$; o primitivă este $\frac13(x^2 + 4)^{3/2}$:

$$\mathcal A = -\int_{-1}^0 g + \int_0^1 g = -\frac13\left(8 - 5\sqrt5\right) + \frac13\left(5\sqrt5 - 8\right) = \frac{10\sqrt5 - 16}{3}.\ \blacksquare$$

*Barem: 2p, 3p.*

**c)** Cazul $\frac00$; cu l'Hospital (derivata integralei cu limită variabilă este integrandul):

$$\lim_{x\to0}\frac{\int_0^x t^3f(t)\,dt}{x^4} = \lim_{x\to0}\frac{x^3\sqrt{x^2+4}}{4x^3} = \frac{\sqrt4}{4} = \frac12.$$

**Răspuns:** $\dfrac12$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = 3$ |
| I.3 | $x = 3$ |
| I.4 | $56$ |
| I.5 | $CD = 10$ |
| II.1.c | $n = 2020$ |
| II.2.a | $m = 3$ |
| II.2.b | $0, 1, 2$ |
| II.2.c | $m = 1$ |
| III.1.b | $y = 1$ |
| III.2.c | $\tfrac12$ |

## Ce merită reținut din varianta 7

- **Suma cuburilor rădăcinilor:** $s_1^3 - 3s_1s_2 + 3s_3$.
- **Graficele nu se intersectează** $\iff$ diferența funcțiilor nu se anulează — studiază minimul diferenței.
- **Aria când funcția schimbă semnul:** împarte intervalul și ia modulul pe fiecare bucată.
