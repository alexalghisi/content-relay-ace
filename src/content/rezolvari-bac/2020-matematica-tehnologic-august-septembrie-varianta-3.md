Rezolvarea completă a subiectului de **Bacalaureat 2020 la Matematică M_tehnologic**, sesiunea august–septembrie, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\left(10 + \frac12\right)\left(10 - \frac12\right) = \frac{399}{4}$

Diferența de pătrate: $10^2 - \frac14 = \frac{400 - 1}{4} = \frac{399}{4}$. $\blacksquare$ *Barem: 3p, 2p.*

### 2. Abscisa punctului de intersecție a graficelor $f(x) = 2x + 1$, $g(x) = 10 - x$

$f(x) = g(x) \iff 2x + 1 = 10 - x \iff 3x = 9 \iff x = 3$.

**Răspuns:** $x = 3$. *Barem: 3p, 2p.*

### 3. Ecuația $\log_7(x^2 + 13) = 2$

$x^2 + 13 = 7^2 = 49 \iff x^2 = 36 \iff x = \pm 6$ (ambele convin, $x^2 + 13 > 0$).

**Răspuns:** $x \in \{-6, 6\}$. *Barem: 3p, 2p.*

### 4. După o ieftinire cu $20\%$, tableta costă 800 de lei. Prețul inițial?

$p - \frac{20}{100}p = 800 \iff 0{,}8p = 800 \iff p = 1000$.

**Răspuns:** $1000$ de lei. *Barem: 3p, 2p.*

### 5. $A(2,1)$, $B(2,7)$, $M$ mijlocul lui $AB$: calculați $AM$

$AB = |7 - 1| = 6$ (aceeași abscisă), deci $AM = \frac{AB}{2} = 3$.

**Răspuns:** $AM = 3$. *Barem: 2p, 3p.*

### 6. Arătați că $2\sin^2 30^\circ - \sin^2 45^\circ = 0$

$$2\cdot\left(\tfrac12\right)^2 - \left(\tfrac{\sqrt2}{2}\right)^2 = \tfrac24 - \tfrac24 = 0.\ \blacksquare$$

*Barem: 2p valorile, 3p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}a + 1 & 1\\ 1 & a - 1\end{pmatrix}$

**a)** $\det A(0) = \begin{vmatrix}1 & 1\\ 1 & -1\end{vmatrix} = -1 - 1 = -2$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $$A(a)A(-a) = \begin{pmatrix}a+1 & 1\\ 1 & a-1\end{pmatrix}\begin{pmatrix}-a+1 & 1\\ 1 & -a-1\end{pmatrix} = \begin{pmatrix}1 - a^2 + 1 & a + 1 - a - 1\\ -a + 1 + a - 1 & 1 + 1 - a^2\end{pmatrix} = (2 - a^2)I_2.\ \blacksquare$$

*Barem: 3p, 2p.*

**c)** $A(1) = \begin{pmatrix}2 & 1\\ 1 & 0\end{pmatrix}$, $\det A(1) = -1 \ne 0$, deci inversabilă: $A(1)^{-1} = \dfrac{1}{-1}\begin{pmatrix}0 & -1\\ -1 & 2\end{pmatrix} = \begin{pmatrix}0 & 1\\ 1 & -2\end{pmatrix}$.

$$X = A(1)^{-1}A(2) = \begin{pmatrix}0 & 1\\ 1 & -2\end{pmatrix}\begin{pmatrix}3 & 1\\ 1 & 1\end{pmatrix} = \begin{pmatrix}1 & 1\\ 1 & -1\end{pmatrix}.$$

**Verificare:** $A(1)X = \begin{pmatrix}3 & 1\\ 1 & 1\end{pmatrix} = A(2)$ ✔. *Barem: 3p inversa, 2p $X$.*

### 2. $x * y = x^2 + xy - x - y + 1$

**a)** $3 * 2 = 9 + 6 - 3 - 2 + 1 = 11$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $x * (-x) = x^2 - x^2 - x + x + 1 = 1$. $\blacksquare$ *Barem: 3p, 2p.*

**c)** $2^x * 4 = 1$:

$$2^{2x} + 4\cdot 2^x - 2^x - 4 + 1 = 1 \iff 2^{2x} + 3\cdot 2^x - 4 = 0 \iff (2^x + 4)(2^x - 1) = 0.$$

$2^x + 4 > 0$, deci $2^x = 1 \iff x = 0$.

**Răspuns:** $x = 0$. *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x^2 + 2x + 3}{x^2 + 2x + 2}$

**a)** Regula câtului (numărătorul și numitorul au aceeași derivată $2x + 2$):

$$f'(x) = \frac{(2x+2)(x^2+2x+2) - (x^2+2x+3)(2x+2)}{(x^2+2x+2)^2} = \frac{(2x+2)(-1)}{(x^2+2x+2)^2} = \frac{-2(x+1)}{(x^2+2x+2)^2}.\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** $\lim\limits_{x\to+\infty} f(x) = 1$ (raportul coeficienților dominanți), deci asimptota orizontală spre $+\infty$ este $y = 1$. *Barem: 3p, 2p.*

**c)** $f'(x) = 0 \iff x = -1$; $f' \ge 0$ pe $(-\infty, -1]$ (crescătoare), $f' \le 0$ pe $[-1, +\infty)$ (descrescătoare). Maximul: $f(-1) = \frac{2}{1} = 2$.

Limitele la $\pm\infty$ sunt $1$, iar $f(x) = 1 + \dfrac{1}{x^2 + 2x + 2} > 1$, deci valoarea $1$ nu este atinsă. Funcția fiind continuă:

**Răspuns:** $\mathrm{Im}\,f = (1, 2]$. *Barem: 3p monotonia, 2p imaginea.*

### 2. $f(x) = \dfrac{x + 2}{\sqrt{x^2 + 4}}$

**a)** $$\int_0^1 f(x)\sqrt{x^2+4}\,dx = \int_0^1 (x + 2)\,dx = \left(\frac{x^2}{2} + 2x\right)\Big|_0^1 = \frac52.\ \blacksquare$$

*Barem: 2p, 3p.*

**b)** $f^2(x) - 1 = \dfrac{x^2 + 4x + 4}{x^2 + 4} - 1 = \dfrac{4x}{x^2+4} = 2\cdot\dfrac{(x^2+4)'}{x^2+4}$, deci

$$\int_0^1 (f^2(x) - 1)\,dx = 2\ln(x^2 + 4)\Big|_0^1 = 2\ln 5 - 2\ln 4 = 2\ln\frac54.\ \blacksquare$$

*Barem: 2p, 3p.*

**c)** $F(x) = \int_0^x f(t)\,dt = \int_0^x\frac{t}{\sqrt{t^2+4}}dt + 2\int_0^x\frac{dt}{\sqrt{t^2+4}}$. Folosind primitivele uzuale $\sqrt{t^2+4}$ și $\ln\left(t + \sqrt{t^2+4}\right)$:

$$F(x) = \left[\sqrt{t^2+4} + 2\ln\left(t + \sqrt{t^2+4}\right)\right]_0^x = \sqrt{x^2+4} + 2\ln\left(x + \sqrt{x^2+4}\right) - 2 - 2\ln 2.$$

**Verificare:** $F(0) = 2 + 2\ln 2 - 2 - 2\ln 2 = 0$ ✔. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $x = 3$ |
| I.3 | $x \in \{-6, 6\}$ |
| I.4 | $1000$ lei |
| I.5 | $AM = 3$ |
| II.1.c | $X = \begin{pmatrix}1&1\\1&-1\end{pmatrix}$ |
| II.2.c | $x = 0$ |
| III.1.b | $y = 1$ |
| III.1.c | $\mathrm{Im}\,f = (1, 2]$ |
| III.2.c | $F(x) = \sqrt{x^2+4} + 2\ln(x + \sqrt{x^2+4}) - 2 - 2\ln 2$ |

## Ce merită reținut din varianta 3

- **Ecuația matriceală $AX = B$:** $X = A^{-1}B$ (inversa la stânga!).
- **Imaginea unei funcții:** monotonie + limite + continuitate; verifică dacă limitele sunt atinse.
- **Primitiva cu $F(0) = 0$:** $F(x) = \int_0^x f(t)\,dt$.
