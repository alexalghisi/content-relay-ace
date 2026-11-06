Rezolvarea completă a subiectului de **Bacalaureat 2012 la Matematică M2** (profil real, științele naturii, și filiera tehnologică), sesiunea august–septembrie, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $a = \log_3 2$; arătați că $\log_3 6 = 1 + a$

$$\log_3 6 = \log_3(3\cdot2) = \log_3 3 + \log_3 2 = 1 + a.$$

*Barem: 2p + 3p.*

### 2. $A(0,1)$ pe graficul lui $f(x) = x^2 - 2x + m - 3$

$f(0) = m - 3 = 1 \iff m = 4$.

**Răspuns:** $m = 4$. *Barem: 2p + 2p + 1p.*

### 3. Ecuația $\log_2(x+1) - \log_2(x+3) = -1$

**Condiții:** $x > -1$. Atunci

$$\log_2\frac{x+1}{x+3} = -1 \iff \frac{x+1}{x+3} = \frac12 \iff 2x + 2 = x + 3 \iff x = 1.$$

$x = 1 > -1$ convine. **Răspuns:** $x = 1$. *Barem: 3p + 1p + 1p.*

### 4. Probabilitatea ca un număr din $\{1, \dots, 30\}$ să fie divizibil cu $7$

Favorabile: $7, 14, 21, 28$ — 4 cazuri; posibile: 30.

$$p = \frac{4}{30} = \frac{2}{15}.$$

*Barem: 1p + 2p + 1p + 1p.*

### 5. $B$ astfel încât $O$ să fie mijlocul lui $AB$, $A(4,-1)$

$x_B = 2x_O - x_A = -4$, $y_B = 2y_O - y_A = 1$.

**Răspuns:** $B(-4, 1)$. *Barem: 3p + 2p.*

### 6. $\cos A$ în triunghiul cu $AB = 5$, $AC = 6$, $BC = 7$

Teorema cosinusului:

$$\cos A = \frac{AB^2 + AC^2 - BC^2}{2\cdot AB\cdot AC} = \frac{25 + 36 - 49}{60} = \frac{12}{60} = \frac15.$$

*Barem: 3p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. Sistemul $\begin{cases} x + y + z = 1\\ 2x + ay + 3z = 1\\ 4x + a^2y + 9z = 1\end{cases}$, matricea $A$

#### a) $\det A = -a^2 + 5a - 6$

$$\det A = \begin{vmatrix} 1 & 1 & 1\\ 2 & a & 3\\ 4 & a^2 & 9\end{vmatrix} = 9a + 12 + 2a^2 - 4a - 3a^2 - 18 = -a^2 + 5a - 6.$$

(Este un determinant Vandermonde în $2, a, 3$: $(a-2)(3-2)(3-a)$.) *Barem: 2p + 3p.*

#### b) $A$ inversabilă

$\det A = -(a-2)(a-3) \ne 0 \iff a \notin \{2, 3\}$.

**Răspuns:** $a \in \mathbb R\setminus\{2, 3\}$. *Barem: 2p + 2p + 1p.*

#### c) Rezolvarea pentru $a = 1$

$$\begin{cases} x + y + z = 1\\ 2x + y + 3z = 1\\ 4x + y + 9z = 1\end{cases}$$

Scăzând prima din a doua: $x + 2z = 0$; scăzând a doua din a treia: $2x + 6z = 0 \Rightarrow x + 3z = 0$. Deci $z = 0$, $x = 0$, $y = 1$.

**Răspuns:** $(0, 1, 0)$. *Barem: 2p + 3p.*

### 2. $f = mX^5 + nX \in \mathbb Z_5[X]$

#### a) $n$ cu $f(\hat1) = m$

$f(\hat1) = m + n = m \iff n = \hat0$.

*Barem: 2p + 3p.*

#### b) Rădăcinile pentru $m = \hat1$, $n = \hat4$

$f = X^5 + \hat4X = X^5 - X$. Prin calcul direct (sau mica teoremă a lui Fermat, $a^5 = a$ în $\mathbb Z_5$): $f(\hat0) = f(\hat1) = f(\hat2) = f(\hat3) = f(\hat4) = \hat0$. De exemplu, $\hat2^5 = \widehat{32} = \hat2$, deci $f(\hat2) = \hat2 + \hat8 = \widehat{10} = \hat0$.

**Răspuns:** toate elementele $\hat0, \hat1, \hat2, \hat3, \hat4$ sunt rădăcini. *Barem: 1p + 3p + 1p.*

#### c) Dacă $f(\hat1) = f(\hat2)$, atunci $f(\hat3) = f(\hat4)$

În $\mathbb Z_5$, $a^5 = a$ pentru orice $a$, deci $f(a) = ma + na = a(m + n)$.

$f(\hat1) = m + n$, $f(\hat2) = \hat2(m+n)$. Egalitatea dă $\hat1\cdot(m + n) = \hat0$, adică $m + n = \hat0$. Atunci $f(\hat3) = \hat3(m+n) = \hat0$ și $f(\hat4) = \hat4(m+n) = \hat0$, deci $f(\hat3) = f(\hat4)$. $\blacksquare$ *Barem: 1p + 2p + 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R\setminus\{-1\}\to\mathbb R$, $f(x) = \dfrac{x^2 - x - 1}{x + 1}$

#### a) $f'(x)$

$$f'(x) = \frac{(2x-1)(x+1) - (x^2 - x - 1)}{(x+1)^2} = \frac{2x^2 + x - 1 - x^2 + x + 1}{(x+1)^2} = \frac{x^2 + 2x}{(x+1)^2}.$$

*Barem: 3p + 2p.*

#### b) $\lim\limits_{x\to+\infty}\dfrac{f(x)\ln x}{x^2 - x - 1}$

$\dfrac{f(x)}{x^2 - x - 1} = \dfrac{1}{x+1}$, deci, cu l'Hôpital:

$$\lim_{x\to+\infty}\frac{\ln x}{x+1} = \lim_{x\to+\infty}\frac{\frac1x}{1} = 0.$$

**Răspuns:** $0$. *Barem: 2p + 3p.*

#### c) Asimptota oblică spre $+\infty$

$$m = \lim_{x\to+\infty}\frac{x^2 - x - 1}{x^2 + x} = 1, \qquad n = \lim_{x\to+\infty}\left(\frac{x^2 - x - 1}{x+1} - x\right) = \lim_{x\to+\infty}\frac{-2x - 1}{x + 1} = -2.$$

**Răspuns:** $y = x - 2$. *Barem: 2p + 2p + 1p.*

### 2. $f:(0,+\infty)\to\mathbb R$, $f(x) = e^x\sqrt{x+1}$

#### a) Primitivele lui $g(x) = \dfrac{f(x)}{\sqrt{x+1}}$

$g(x) = e^x$, deci $\displaystyle\int g(x)\,dx = e^x + C$.

*Barem: 2p + 3p.*

#### b) $\displaystyle\int_1^2\sqrt{x+1}\cdot f(x)\,dx$

$\sqrt{x+1}\cdot f(x) = (x+1)e^x$. Prin părți:

$$\int_1^2 (x+1)e^x\,dx = (x+1)e^x\Big|_1^2 - \int_1^2 e^x\,dx = (3e^2 - 2e) - (e^2 - e) = 2e^2 - e.$$

**Răspuns:** $2e^2 - e$. *Barem: 1p + 3p + 1p.*

#### c) Aria sub $h(x) = e^{-x}f(x)$ între $x = 2$ și $x = 3$

$h(x) = \sqrt{x+1} > 0$:

$$\mathcal A = \int_2^3\sqrt{x+1}\,dx = \frac23(x+1)\sqrt{x+1}\Big|_2^3 = \frac23\left(8 - 3\sqrt3\right).$$

**Răspuns:** $\dfrac{2(8 - 3\sqrt3)}{3}$. *Barem: 1p + 3p + 1p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = 4$ |
| I.3 | $x = 1$ |
| I.4 | $p = \frac{2}{15}$ |
| I.5 | $B(-4, 1)$ |
| I.6 | $\cos A = \frac15$ |
| II.1.b | $a \notin \{2, 3\}$ |
| II.1.c | $(0, 1, 0)$ |
| II.2.a | $n = \hat0$ |
| II.2.b | $\hat0, \hat1, \hat2, \hat3, \hat4$ |
| III.1.b | $0$ |
| III.1.c | $y = x - 2$ |
| III.2.a | $e^x + C$ |
| III.2.b | $2e^2 - e$ |
| III.2.c | $\frac23(8 - 3\sqrt3)$ |

## Ce merită reținut din varianta 9

- **Simetricul unui punct față de altul**: $x_B = 2x_O - x_A$, $y_B = 2y_O - y_A$.
- **Teorema cosinusului** dă cosinusul unui unghi din cele trei laturi.
- **În $\mathbb Z_p$ ($p$ prim)**, $a^p = a$ (mica teoremă a lui Fermat) — simplifică polinoame de grad mare.
- **$\int (x+1)e^x\,dx = xe^x + C$** (prin părți sau observând $(xe^x)' = (x+1)e^x$).
