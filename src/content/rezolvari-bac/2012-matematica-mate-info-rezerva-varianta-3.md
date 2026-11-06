Rezolvarea completă a subiectului de **Bacalaureat 2012 la Matematică M1 (mate-info)**, subiectul de rezervă, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Partea reală a numărului $(1 + 2i)^2$

$$(1 + 2i)^2 = 1 + 4i + 4i^2 = -3 + 4i.$$

**Răspuns:** $\operatorname{Re} = -3$. *Barem: 3p calculul, 2p partea reală.*

### 2. $x^2 - 3x + a = 0$ cu $x_1 + x_2 + x_1x_2 = 5$

Viète: $x_1 + x_2 = 3$, $x_1x_2 = a$, deci $3 + a = 5 \iff a = 2$.

**Răspuns:** $a = 2$. *Barem: 2p suma, 2p produsul, 1p valoarea.*

### 3. $g$ inversa lui $f:(0,+\infty)\to(4,+\infty)$, $f(x) = 2^x + 3$; calculați $g(5)$

$g(5) = x \iff f(x) = 5 \iff 2^x + 3 = 5 \iff 2^x = 2 \iff x = 1$.

**Răspuns:** $g(5) = 1$. *Barem: 2p echivalența, 2p ecuația, 1p rezultatul.*

### 4. Probabilitatea ca o submulțime a lui $\{1,2,3,4,5\}$ să aibă exact trei elemente

- Cazuri posibile: $2^5 = 32$ submulțimi.
- Cazuri favorabile: $C_5^3 = 10$.

$$p = \frac{10}{32} = \frac{5}{16}.$$

*Barem: 1p formula, 2p posibile, 1p favorabile, 1p probabilitatea.*

### 5. $A(1,3)$, $B(7,12)$; $M$ cu $\overrightarrow{AM} = \frac13\overrightarrow{AB}$

$\overrightarrow{AB} = 6\vec i + 9\vec j$, deci $\overrightarrow{AM} = 2\vec i + 3\vec j$:

$$x_M - 1 = 2,\quad y_M - 3 = 3 \Rightarrow M(3, 6).$$

**Răspuns:** $M(3, 6)$. *Barem: 2p vectorii, 2p sistemul, 1p punctul.*

### 6. $x \in \left(0, \frac\pi2\right)$ cu $\dfrac{\sin x + 2\cos x}{\cos x} = 3$

$\cos x \ne 0$ pe interval, deci $\sin x + 2\cos x = 3\cos x \iff \sin x = \cos x \iff \operatorname{tg}x = 1$.

**Răspuns:** $x = \dfrac\pi4$. *Barem: 2p eliminarea numitorului, 1p $\sin x = \cos x$, 2p soluția.*

## Subiectul al II-lea (30 de puncte)

### 1. $D(a,b,c) = \det A(a,b,c)$, $A(a,b,c) = \begin{pmatrix}1&1&1\\2a&2b&2c\\3a^2&3b^2&3c^2\end{pmatrix}$

Formula generală: scoatem $2$ din linia a doua și $3$ din a treia; rămâne un determinant Vandermonde:

$$D(a,b,c) = 6\begin{vmatrix}1&1&1\\a&b&c\\a^2&b^2&c^2\end{vmatrix} = 6(b - a)(c - a)(c - b).$$

#### a) $D(0, 1, -1)$

$$D(0,1,-1) = \begin{vmatrix}1&1&1\\0&2&-2\\0&3&3\end{vmatrix} = 1\cdot(6 + 6) = 12.$$

(Cu formula: $6\cdot1\cdot(-1)\cdot(-2) = 12$ ✔.) **Răspuns:** $12$. *Barem: 2p scrierea, 3p calculul.*

#### b) $x$ pentru care $A(0, 1, x)$ are rangul 2

$A(0,1,x) = \begin{pmatrix}1&1&1\\0&2&2x\\0&3&3x^2\end{pmatrix}$ conține minorul $\begin{vmatrix}1&1\\0&2\end{vmatrix} = 2 \ne 0$, deci rangul este cel puțin $2$. Rangul este exact $2 \iff D(0,1,x) = 0$:

$$D(0,1,x) = 6\cdot1\cdot x\cdot(x - 1) = 0 \iff x \in \{0, 1\}.$$

**Răspuns:** $x \in \{0, 1\}$. *Barem: 1p matricea, 1p minorul, 1p condiția, 2p soluțiile.*

#### c) Dacă $a, b, c$ sunt laturile unui triunghi și $D(a,b,c) = 0$, triunghiul este isoscel

$6(b-a)(c-a)(c-b) = 0 \Rightarrow a = b$ sau $a = c$ sau $b = c$: două laturi sunt egale, deci triunghiul este isoscel. $\blacksquare$ *Barem: 1p factorul 6, 2p Vandermonde, 2p concluzia.*

### 2. $f:\mathbb Z_5\to\mathbb Z_5$, $f(x) = x^3 + \hat2x^2 + \hat4x + \hat3$

#### a) $f(\hat1) + f(\hat3)$

$$f(\hat1) = \hat1 + \hat2 + \hat4 + \hat3 = \widehat{10} = \hat0, \qquad f(\hat3) = \widehat{27} + \widehat{18} + \widehat{12} + \hat3 = \widehat{60} = \hat0.$$

**Răspuns:** $\hat0$. *Barem: 2p + 2p, 1p suma.*

#### b) Descompunerea lui $P = X^3 + \hat2X^2 + \hat4X + \hat3$ în factori ireductibili

$P$ are aceleași valori ca $f$: $P(\hat1) = P(\hat3) = \hat0$, iar $P(\hat4) = \widehat{64} + \widehat{32} + \widehat{16} + \hat3 = \widehat{115} = \hat0$. Fiind de gradul 3, cu coeficient dominant $\hat1$ și trei rădăcini distincte:

$$P = (X - \hat1)(X - \hat3)(X - \hat4) = (X + \hat4)(X + \hat2)(X + \hat1).$$

*Barem: 3p rădăcinile, 2p descompunerea.*

#### c) $f$ nu este surjectivă

$f(\hat1) = f(\hat3)$, deci $f$ nu este injectivă. Pe o mulțime finită, o funcție $f:\mathbb Z_5\to\mathbb Z_5$ este surjectivă doar dacă este injectivă; deci $f$ nu e surjectivă. (Concret: $f(\hat0) = \hat3$, $f(\hat2) = \hat2$, $f(\hat1) = f(\hat3) = f(\hat4) = \hat0$, deci $\operatorname{Im}f = \{\hat0, \hat2, \hat3\}$.) $\blacksquare$ *Barem: 2p neinjectivitatea, 3p concluzia.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x + 9}{\sqrt{x^2 + 3}}$

#### a) $f'(x)\sqrt{x^2 + 3} = \dfrac{3 - 9x}{x^2 + 3}$

$$f'(x) = \frac{\sqrt{x^2+3} - (x+9)\cdot\frac{x}{\sqrt{x^2+3}}}{x^2 + 3} = \frac{x^2 + 3 - x^2 - 9x}{(x^2+3)\sqrt{x^2+3}} = \frac{3 - 9x}{(x^2+3)\sqrt{x^2+3}}.$$

Înmulțind cu $\sqrt{x^2 + 3}$ obținem relația cerută. *Barem: 4p derivata, 1p finalizarea.*

#### b) Asimptota spre $+\infty$

$$\lim_{x\to+\infty}\frac{x + 9}{\sqrt{x^2+3}} = \lim_{x\to+\infty}\frac{x\left(1 + \frac9x\right)}{x\sqrt{1 + \frac3{x^2}}} = 1.$$

**Răspuns:** $y = 1$ (asimptotă orizontală). *Barem: 3p limita, 2p concluzia.*

#### c) Imaginea funcției

- $f' > 0$ pe $\left(-\infty, \frac13\right)$, $f' < 0$ pe $\left(\frac13, +\infty\right)$: maxim în $x = \frac13$.
- $f\left(\frac13\right) = \dfrac{\frac{28}{3}}{\sqrt{\frac{28}{9}}} = \dfrac{28}{3}\cdot\dfrac{3}{\sqrt{28}} = \sqrt{28} = 2\sqrt7$.
- $\lim\limits_{x\to-\infty}f(x) = -1$ (pentru $x < 0$, $\sqrt{x^2} = -x$), $\lim\limits_{x\to+\infty}f(x) = 1$.

Pe $\left(-\infty, \frac13\right]$, $f$ ia (continuu, crescător) valorile $\left(-1, 2\sqrt7\right]$; pe $\left[\frac13, +\infty\right)$ ia valorile $\left(1, 2\sqrt7\right]$.

**Răspuns:** $\operatorname{Im}f = \left(-1, 2\sqrt7\right]$. *Barem: 2p limitele, 2p maximul, 1p imaginea.*

### 2. $f(x) = \ln x$, $x > 0$

#### a) $F(x) = x\ln x - x$ este primitivă a lui $f$

$$F'(x) = \ln x + x\cdot\frac1x - 1 = \ln x = f(x).$$

*Barem: 3p derivata, 2p concluzia.*

#### b) Aria între grafic, $Ox$, $x = 1$, $x = e$

Pe $[1, e]$, $\ln x \ge 0$:

$$\mathcal A = \int_1^e\ln x\,dx = F(e) - F(1) = (e - e) - (0 - 1) = 1.$$

**Răspuns:** $1$. *Barem: 2p formula ariei, 3p calculul.*

#### c) $(p + 1)\displaystyle\int_1^x f^p(t)\,dt + \int_1^x f^{p+1}(t)\,dt = xf^{p+1}(x)$

Integrăm prin părți $\int_1^x\ln^{p+1}t\,dt$, cu $u = \ln^{p+1}t$, $v' = 1$:

$$\int_1^x\ln^{p+1}t\,dt = t\ln^{p+1}t\Big|_1^x - \int_1^x t\cdot(p+1)\ln^p t\cdot\frac1t\,dt = x\ln^{p+1}x - (p+1)\int_1^x\ln^p t\,dt,$$

pentru că $\ln 1 = 0$. Mutând ultimul termen în membrul stâng obținem relația cerută. $\blacksquare$ *Barem: 1p scrierea, 3p integrarea prin părți, 1p finalizarea.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $-3$ |
| I.2 | $a = 2$ |
| I.3 | $g(5) = 1$ |
| I.4 | $p = \frac5{16}$ |
| I.5 | $M(3, 6)$ |
| I.6 | $x = \frac\pi4$ |
| II.1.a | $12$ |
| II.1.b | $x \in \{0, 1\}$ |
| II.2.a | $\hat0$ |
| II.2.b | $(X+\hat1)(X+\hat2)(X+\hat4)$ |
| III.1.b | $y = 1$ |
| III.1.c | $(-1, 2\sqrt7]$ |
| III.2.b | $1$ |

## Ce merită reținut din varianta 3

- **Determinantul Vandermonde**: $\begin{vmatrix}1&1&1\\a&b&c\\a^2&b^2&c^2\end{vmatrix} = (b-a)(c-a)(c-b)$.
- **Pe mulțimi finite**, injectiv $\iff$ surjectiv — un singur contraexemplu de injectivitate e suficient.
- **Imaginea unei funcții**: valoarea maximă din tabelul de variație + limitele la capete (atinse sau nu).
- **$\sqrt{x^2} = |x|$** — la $-\infty$ dă $-x$, de aici limita $-1$.
