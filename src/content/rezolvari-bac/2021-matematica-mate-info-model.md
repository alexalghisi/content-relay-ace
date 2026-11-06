Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2021 la Matematică M_mate-info**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $N = \log_26 - 2\log_23 + \log_224$ este natural

$$N = \log_26 - \log_29 + \log_224 = \log_2\frac{6\cdot24}{9} = \log_216 = 4 \in \mathbb N.$$

*Barem: 3p + 2p.*

### 2. Dreapta $y = 2$ intersectează graficul lui $f(x) = x^2 - x + 2$ în două puncte distincte

$$f(x) = 2 \iff x^2 - x = 0 \iff x(x - 1) = 0 \iff x \in \{0, 1\}.$$

Ecuația are două soluții reale distincte, deci intersecția are două puncte: $(0,2)$ și $(1,2)$. $\blacksquare$ *Barem: 2p + 3p.*

### 3. Ecuația $\sqrt{x^2 - 5} = \sqrt{3x - 1}$

Ridicăm la pătrat: $x^2 - 5 = 3x - 1 \iff x^2 - 3x - 4 = 0 \iff x \in \{-1, 4\}$.

Verificare: $x = -1$ dă $\sqrt{-4}$ — nu convine; $x = 4$ dă $\sqrt{11} = \sqrt{11}$ — convine.

**Răspuns:** $x = 4$. *Barem: 2p + 3p.*

### 4. Câte elemente are $A$, dacă are exact 15 submulțimi cu două elemente?

$$C_n^2 = \frac{n(n-1)}{2} = 15 \iff n^2 - n - 30 = 0 \iff n = 6\ (n \ge 2).$$

**Răspuns:** 6 elemente. *Barem: 2p + 3p.*

### 5. $M, N, P$ mijloacele lui $BC$, $BM$, $CM$; $\overrightarrow{AM} + \overrightarrow{AN} + \overrightarrow{AP} = \frac32\left(\overrightarrow{AB} + \overrightarrow{AC}\right)$

$M$ mijlocul lui $BC$: $\overrightarrow{AM} = \frac12\left(\overrightarrow{AB} + \overrightarrow{AC}\right)$. Cum $BN = NM = MP = PC$, $M$ este și mijlocul lui $NP$, deci $\overrightarrow{AN} + \overrightarrow{AP} = 2\overrightarrow{AM}$.

$$\overrightarrow{AM} + \overrightarrow{AN} + \overrightarrow{AP} = 3\overrightarrow{AM} = \frac32\left(\overrightarrow{AB} + \overrightarrow{AC}\right).\ \blacksquare$$

*Barem: 2p + 3p.*

### 6. $x \in (0,\pi)$ cu $\sin2x + 2\sin^2x = 0$

$$2\sin x\cos x + 2\sin^2x = 0 \iff 2\sin x(\cos x + \sin x) = 0.$$

Pe $(0,\pi)$, $\sin x \ne 0$, deci $\sin x = -\cos x \iff \operatorname{tg}x = -1 \iff x = \frac{3\pi}{4}$.

**Răspuns:** $x = \dfrac{3\pi}{4}$. *Barem: 2p + 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a,b,c) = \begin{pmatrix}1&1&1\\a&b&c\\bc&ac&ab\end{pmatrix}$

#### a) $\det A(0,1,2) = 2$

$$\det\begin{pmatrix}1&1&1\\0&1&2\\2&0&0\end{pmatrix} = 0 + 4 + 0 - 2 - 0 - 0 = 2.$$

*Barem: 2p + 3p.*

#### b) $\det A(a,b,c) = (b - a)(c - a)(c - b)$

Scădem coloana 1 din coloanele 2 și 3:

$$\det A = \begin{vmatrix}1&0&0\\a&b - a&c - a\\bc&c(a - b)&b(a - c)\end{vmatrix} = (b - a)(c - a)\begin{vmatrix}1 & 1\\ -c & -b\end{vmatrix} = (b - a)(c - a)(c - b).$$

*Barem: 2p + 3p.*

#### c) Dacă $m < n < p$ naturale și $\det A(m,n,p)$ este prim, atunci $m, n, p$ sunt în progresie aritmetică

$\det A(m,n,p) = (n - m)(p - m)(p - n)$, produs de trei numere naturale nenule, cu $p - m = (p - n) + (n - m) \ge 2$.

Ca produsul să fie prim, doi factori trebuie să fie $1$; cum $p - m \ge 2$, rezultă $n - m = 1$ și $p - n = 1$ (și atunci $\det = 2$, prim). Deci $n - m = p - n$: $m, n, p$ sunt termeni consecutivi ai unei progresii aritmetice. $\blacksquare$ *Barem: 3p + 2p.*

### 2. $f = X^4 + aX^3 + \hat2X + b \in \mathbb Z_3[X]$

#### a) $a = \hat1$, $b = \hat2$: $f(\hat0) + f(\hat2) = \hat2$

$f = X^4 + X^3 + \hat2X + \hat2$. $f(\hat0) = \hat2$; $f(\hat2) = 16 + 8 + 4 + 2 = 30 = \hat0$ în $\mathbb Z_3$.

$$f(\hat0) + f(\hat2) = \hat2 + \hat0 = \hat2.$$

*Barem: 3p + 2p.*

#### b) Perechile $(a,b)$ cu $f$ divizibil cu $X + \hat2$

$X + \hat2 = X - \hat1$, deci $f$ divizibil $\iff f(\hat1) = \hat0$:

$$\hat1 + a + \hat2 + b = \hat0 \iff a + b = \hat0.$$

**Răspuns:** $(\hat0,\hat0)$, $(\hat1,\hat2)$, $(\hat2,\hat1)$. *Barem: 3p + 2p.*

#### c) Pentru orice $a, b$, există $x \ne y$ cu $f(x) = f(y)$

$f(\hat0) = b$, $f(\hat1) = \hat1 + a + \hat2 + b = a + b$, $f(\hat2) = \hat1 + \hat2a + \hat1 + b = \hat2 + \hat2a + b$. Suma:

$$f(\hat0) + f(\hat1) + f(\hat2) = \hat3a + \hat3b + \hat2 = \hat2.$$

Dacă valorile ar fi distincte două câte două, ar fi exact $\hat0, \hat1, \hat2$ (în altă ordine), cu suma $\hat3 = \hat0 \ne \hat2$ — contradicție. Deci două valori coincid. $\blacksquare$ *Barem: 3p + 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{xe^x}{e^x + 2}$

#### a) $f'(x) = \dfrac{e^x(e^x + 2x + 2)}{(e^x + 2)^2}$

$$f'(x) = \frac{(e^x + xe^x)(e^x + 2) - xe^x\cdot e^x}{(e^x+2)^2} = \frac{e^{2x} + 2e^x + 2xe^x}{(e^x+2)^2} = \frac{e^x(e^x + 2x + 2)}{(e^x+2)^2}.$$

*Barem: 3p + 2p.*

#### b) $y = x$ este asimptotă oblică spre $+\infty$

$$m = \lim_{x\to\infty}\frac{f(x)}{x} = \lim_{x\to\infty}\frac{e^x}{e^x + 2} = 1,\qquad n = \lim_{x\to\infty}(f(x) - x) = \lim_{x\to\infty}\frac{-2x}{e^x + 2} = 0.$$

Deci $y = x$ este asimptotă oblică spre $+\infty$. $\blacksquare$ *Barem: 2p + 3p.*

#### c) $f$ are un unic punct de extrem

Semnul lui $f'$ este semnul lui $g(x) = e^x + 2x + 2$. $g$ este strict crescătoare și continuă, cu $\lim\limits_{x\to-\infty}g = -\infty$, $\lim\limits_{x\to\infty}g = +\infty$, deci există un unic $c$ cu $g(c) = 0$; $g < 0$ pe $(-\infty, c)$ și $g > 0$ pe $(c, \infty)$.

Așadar $f$ e strict descrescătoare pe $(-\infty, c]$ și strict crescătoare pe $[c,\infty)$: $c$ este unicul punct de extrem (minim). $\blacksquare$ *Barem: 3p + 2p.*

### 2. $f(x) = \dfrac{2(x + 3)}{\sqrt{x^2 + 4x + 5}}$

#### a) $\displaystyle\int_0^1 f(x)\sqrt{x^2 + 4x + 5}\,dx = 7$

$$\int_0^1 2(x + 3)dx = (x^2 + 6x)\Big|_0^1 = 7.$$

*Barem: 3p + 2p.*

#### b) $\displaystyle\int_0^1\left(f^2(x) - 4\right)dx = 4\ln2$

$$f^2(x) - 4 = \frac{4(x+3)^2 - 4(x^2 + 4x + 5)}{x^2 + 4x + 5} = \frac{4(2x + 4)}{x^2 + 4x + 5} = 4\cdot\frac{(x^2 + 4x + 5)'}{x^2 + 4x + 5}.$$

$$\int_0^1\left(f^2 - 4\right)dx = 4\ln(x^2 + 4x + 5)\Big|_0^1 = 4\ln\frac{10}{5} = 4\ln2.$$

*Barem: 2p + 3p.*

#### c) $0 \le a < b$, $I_n = \displaystyle\int_a^bf^n(x)dx$; $\lim I_n = +\infty$

Din b), $f^2(x) - 4 = \frac{4(2x+4)}{x^2+4x+5} > 0$ pentru $x \ge 0$, iar $f(x) > 0$ pentru $x \ge 0$; deci $f(x) > 2$ și $f^n(x) \ge 2^n$ pe $[a, b]$.

$$I_n \ge \int_a^b2^ndx = 2^n(b - a) \xrightarrow[n\to\infty]{} +\infty,$$

deci $\lim\limits_{n\to\infty}I_n = +\infty$. $\blacksquare$ *Barem: 2p + 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $N = 4$ |
| I.3 | $x = 4$ |
| I.4 | 6 elemente |
| I.6 | $x = \frac{3\pi}{4}$ |
| II.1.b | $(b-a)(c-a)(c-b)$ |
| II.2.b | $(\hat0,\hat0), (\hat1,\hat2), (\hat2,\hat1)$ |
| III.1.b | $y = x$ |

## Ce merită reținut din model

- **Determinant de tip Vandermonde:** scade coloanele și scoate factori comuni.
- **În $\mathbb Z_3$**, suma $\hat0 + \hat1 + \hat2 = \hat0$ — argument tipic de „principiul cutiei”.
- **Limite de $\int f^n$:** dacă $f \ge q > 1$, integrala tinde la $+\infty$; dacă $0 \le f \le q < 1$, tinde la $0$.
