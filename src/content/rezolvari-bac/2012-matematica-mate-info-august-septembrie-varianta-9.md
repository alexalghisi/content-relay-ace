Rezolvarea completă a subiectului de **Bacalaureat 2012 la Matematică M1 (mate-info)**, sesiunea august–septembrie, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\log_2\left(\sqrt7 + \sqrt3\right) + \log_2\left(\sqrt7 - \sqrt3\right) = 2$

$$\log_2\big((\sqrt7 + \sqrt3)(\sqrt7 - \sqrt3)\big) = \log_2(7 - 3) = \log_2 4 = 2.$$

*Barem: 3p produsul, 2p finalizarea.*

### 2. Distanța dintre punctele de intersecție ale graficului $f(x) = x^2 + 5x + 4$ cu $Ox$

$f(x) = 0 \iff (x+1)(x+4) = 0 \iff x \in \{-1, -4\}$. Punctele sunt $(-1, 0)$ și $(-4, 0)$, iar distanța dintre ele este $|-1 - (-4)| = 3$.

**Răspuns:** $3$. *Barem: 3p rădăcinile, 2p distanța.*

### 3. Ecuația $3^x + 3^{x+1} = 4$

Cu $t = 3^x > 0$: $t + 3t = 4 \Rightarrow t = 1 \Rightarrow 3^x = 1 \Rightarrow x = 0$.

**Răspuns:** $x = 0$. *Barem: 3p substituția, 2p soluția.*

### 4. Rangul termenului care conține $x^{14}$ în $\left(x + \dfrac{1}{\sqrt x}\right)^{20}$

$$T_{k+1} = C_{20}^k\,x^{20-k}\left(x^{-\frac12}\right)^k = C_{20}^k\,x^{20 - \frac{3k}{2}}.$$

$20 - \dfrac{3k}{2} = 14 \iff k = 4$, deci termenul este $T_5$.

**Răspuns:** rangul $5$. *Barem: 2p termenul general, 2p $k = 4$, 1p rangul.*

### 5. Dreapta prin $A(3,3)$, paralelă cu $3x + 2y - 1 = 0$

Panta dreptei date: $m = -\dfrac32$. Paralela are aceeași pantă:

$$y - 3 = -\frac32(x - 3) \iff y = -\frac32x + \frac{15}{2}.$$

**Răspuns:** $y = -\dfrac32x + \dfrac{15}{2}$ (sau $3x + 2y - 15 = 0$). *Barem: 2p panta, 3p ecuația.*

### 6. Unghiul $C$, știind $BC = 2$, $AB = \sqrt2$, $\angle A = 45^\circ$

Teorema sinusurilor:

$$\frac{BC}{\sin A} = \frac{AB}{\sin C} \Rightarrow \sin C = \frac{AB\sin A}{BC} = \frac{\sqrt2\cdot\frac{\sqrt2}{2}}{2} = \frac12.$$

$C \in \{30^\circ, 150^\circ\}$, dar $BC > AB$ implică $\angle A > \angle C$, deci $\angle C < 45^\circ$.

**Răspuns:** $\angle C = 30^\circ$. *Barem: 3p $\sin C$, 2p alegerea unghiului.*

## Subiectul al II-lea (30 de puncte)

### 1. Sistemul $\begin{cases}-x + ay + (2a+4)z = 1\\(a+2)x + ay + (a+1)z = 1\\(a+1)x + (2a-1)y + 3z = 2\end{cases}$

#### a) $\det A = 3a^3 + 9a^2 - 3a - 9$

Adunăm coloanele 2 și 3 la prima (fiecare linie dă suma $3a + 3$), apoi scădem linia 1 din liniile 2 și 3:

$$\det A = (3a+3)\begin{vmatrix}1 & a & 2a+4\\1 & a & a+1\\1 & 2a-1 & 3\end{vmatrix} = (3a+3)\begin{vmatrix}1 & a & 2a+4\\0 & 0 & -a-3\\0 & a-1 & -2a-1\end{vmatrix}.$$

$$= (3a+3)\big[0 - (-a-3)(a-1)\big] = 3(a+1)(a+3)(a-1) = 3a^3 + 9a^2 - 3a - 9.$$

*Barem: 2p scrierea, 2p transformările, 1p finalizarea.*

#### b) Valorile lui $a$ pentru care sistemul este compatibil determinat

Compatibil determinat $\iff \det A \ne 0 \iff 3(a+1)(a-1)(a+3) \ne 0$.

**Răspuns:** $a \in \mathbb R\setminus\{-3, -1, 1\}$. *Barem: 2p condiția, 2p rădăcinile, 1p răspunsul.*

#### c) Rezolvare pentru $a = -2$

$$\begin{cases}-x - 2y = 1\\-2y - z = 1\\-x - 5y + 3z = 2\end{cases}$$

Din primele două: $x = -1 - 2y$, $z = -1 - 2y$. În a treia:

$$(1 + 2y) - 5y + 3(-1 - 2y) = 2 \iff -2 - 9y = 2 \iff y = -\frac49.$$

Atunci $x = z = -1 + \dfrac89 = -\dfrac19$.

**Răspuns:** $\left(-\dfrac19, -\dfrac49, -\dfrac19\right)$. *Barem: 1p sistemul, 4p soluția.*

### 2. $f = X^8 + \hat4X^4 + \hat3 \in \mathbb Z_5[X]$

#### a) $a^5 = a$ pentru orice $a \in \mathbb Z_5$

Verificăm toate elementele:

$$\hat0^5 = \hat0,\quad \hat1^5 = \hat1,\quad \hat2^5 = \widehat{32} = \hat2,\quad \hat3^5 = \widehat{243} = \hat3,\quad \hat4^5 = \widehat{1024} = \hat4.$$

*Barem: 5p verificarea.*

#### b) $f$ este reductibil peste $\mathbb Z_5$

$$f = X^8 + X^4 + \hat3X^4 + \hat3 = X^4(X^4 + \hat1) + \hat3(X^4 + \hat1) = (X^4 + \hat1)(X^4 + \hat3),$$

produs de doi polinomi de grad $4 \ge 1$, deci $f$ este reductibil. *Barem: 2p gruparea, 3p factorizarea.*

#### c) $f$ nu are rădăcini în $\mathbb Z_5$

- $f(\hat0) = \hat3 \ne \hat0$;
- pentru $a \ne \hat0$, din a) $a^5 = a$ și $a$ inversabil, deci $a^4 = \hat1$, iar $a^8 = \hat1$:

$$f(a) = \hat1 + \hat4 + \hat3 = \hat8 = \hat3 \ne \hat0.$$

Deci $f$ nu are rădăcini în $\mathbb Z_5$. $\blacksquare$ *Barem: 1p $f(\hat0)$, 2p $a^4 = \hat1$, 1p $f(a)$, 1p concluzia.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R\to(0,+\infty)$, $f(x) = x + \sqrt{x^2 + 1}$

#### a) $\displaystyle\lim_{x\to0}\frac{f(x) - 1}{x}$

$f(0) = 1$, deci limita este $f'(0)$. $f'(x) = 1 + \dfrac{x}{\sqrt{x^2+1}}$, $f'(0) = 1$.

**Răspuns:** $1$. *Barem: 2p derivata, 3p limita.*

#### b) Asimptota oblică spre $+\infty$

$$m = \lim_{x\to+\infty}\frac{x + \sqrt{x^2+1}}{x} = 1 + 1 = 2,$$

$$n = \lim_{x\to+\infty}\left(\sqrt{x^2+1} - x\right) = \lim_{x\to+\infty}\frac{1}{\sqrt{x^2+1} + x} = 0.$$

**Răspuns:** $y = 2x$. *Barem: 2p $m$, 2p $n$, 1p ecuația.*

#### c) Pentru $m > 0$, ecuația $f(x) = m$ are soluție unică

**Existența:** $f$ este continuă, $\lim\limits_{x\to-\infty}f(x) = \lim\limits_{x\to-\infty}\dfrac{1}{\sqrt{x^2+1} - x} = 0$ și $\lim\limits_{x\to+\infty}f(x) = +\infty$; din proprietatea lui Darboux, $f$ ia toate valorile din $(0, +\infty)$.

**Unicitatea:** $f'(x) = \dfrac{\sqrt{x^2+1} + x}{\sqrt{x^2+1}} > 0$ (pentru că $\sqrt{x^2+1} > |x| \ge -x$), deci $f$ este strict crescătoare, adică injectivă. $\blacksquare$ *Barem: 2p existența, 3p unicitatea.*

### 2. $I_p = \displaystyle\int_0^1 x^pe^{x^2}\,dx$

#### a) $I_1$

$$I_1 = \int_0^1 xe^{x^2}\,dx = \frac12e^{x^2}\Big|_0^1 = \frac{e - 1}{2}.$$

**Răspuns:** $\dfrac{e-1}{2}$. *Barem: 3p primitiva, 2p calculul.*

#### b) $2I_p + (p-1)I_{p-2} = e$ pentru $p \ge 3$

Scriem $2I_p = \displaystyle\int_0^1 x^{p-1}\cdot 2xe^{x^2}\,dx = \int_0^1 x^{p-1}\left(e^{x^2}\right)'dx$ și integrăm prin părți:

$$2I_p = x^{p-1}e^{x^2}\Big|_0^1 - (p-1)\int_0^1 x^{p-2}e^{x^2}\,dx = e - (p-1)I_{p-2}.$$

Deci $2I_p + (p-1)I_{p-2} = e$. $\blacksquare$ *Barem: 3p integrarea prin părți, 2p finalizarea.*

#### c) $\displaystyle\lim_{n\to+\infty}\frac{1}{n^2}\left(e^{\frac{1^2}{n^2}} + 2e^{\frac{2^2}{n^2}} + \dots + ne^{\frac{n^2}{n^2}}\right)$

Rescriem ca sumă Riemann pentru $f(x) = xe^{x^2}$ pe $[0,1]$, cu diviziunea $\frac kn$ și punctele intermediare $\frac kn$:

$$\frac{1}{n^2}\sum_{k=1}^n ke^{\frac{k^2}{n^2}} = \frac1n\sum_{k=1}^n\frac kn e^{\left(\frac kn\right)^2} \xrightarrow[n\to\infty]{} \int_0^1 xe^{x^2}\,dx = \frac{e-1}{2}.$$

**Răspuns:** $\dfrac{e-1}{2}$. *Barem: 1p funcția și diviziunea, 2p rescrierea, 2p rezultatul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $3$ |
| I.3 | $x = 0$ |
| I.4 | rangul $5$ |
| I.5 | $y = -\frac32x + \frac{15}2$ |
| I.6 | $\angle C = 30^\circ$ |
| II.1.b | $a \in \mathbb R\setminus\{-3, -1, 1\}$ |
| II.1.c | $\left(-\frac19, -\frac49, -\frac19\right)$ |
| II.2.b | $(X^4 + \hat1)(X^4 + \hat3)$ |
| III.1.a | $1$ |
| III.1.b | $y = 2x$ |
| III.2.a | $\frac{e-1}{2}$ |
| III.2.c | $\frac{e-1}{2}$ |

## Ce merită reținut din varianta 9

- **Teorema sinusurilor** dă două unghiuri posibile; alege folosind „latura mai mare se opune unghiului mai mare”.
- **Mica teoremă a lui Fermat în $\mathbb Z_p$**: $a^{p-1} = \hat1$ pentru $a \ne \hat0$ — reduce puterile mari.
- **Bijectivitate pe imagine**: continuitate + limite la capete (existența) și strict monotonă (unicitatea).
- **Sume Riemann**: identifică $\frac1n\sum f\left(\frac kn\right)$ și înlocuiește cu $\int_0^1 f$.
