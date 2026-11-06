Rezolvarea completă a subiectului de **Bacalaureat 2012 la Matematică (M2 — filiera tehnologică / științe ale naturii)**, sesiunea august–septembrie, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $a = \log_3 2$; arătați că $\log_3 6 = 1 + a$

$$\log_3 6 = \log_3(3\cdot 2) = \log_3 3 + \log_3 2 = 1 + a.$$

*Barem: 2p, 3p.*

### 2. $A(0, 1)$ pe graficul lui $f(x) = x^2 - 2x + m - 3$

$f(0) = m - 3 = 1 \iff m = 4$.

**Răspuns:** $m = 4$. *Barem: 2p, 2p, 1p.*

### 3. $\log_2(x + 1) - \log_2(x + 3) = -1$

Condiții: $x > -1$. $\log_2\dfrac{x+1}{x+3} = -1 \iff \dfrac{x+1}{x+3} = \dfrac12 \iff 2x + 2 = x + 3 \iff x = 1$, care convine.

**Răspuns:** $x = 1$. *Barem: 3p, 1p, 1p.*

### 4. Probabilitatea ca un număr din $\{1, 2, \dots, 30\}$ să fie divizibil cu 7

Cazuri posibile: 30. Favorabile: $7, 14, 21, 28$ — 4.

$$p = \frac{4}{30} = \frac{2}{15}.$$

**Răspuns:** $p = \dfrac2{15}$. *Barem: 1p, 2p, 1p, 1p.*

### 5. $B$ astfel încât $O$ să fie mijlocul lui $(AB)$, $A(4, -1)$

$x_B = 2x_O - x_A = -4$, $y_B = 2y_O - y_A = 1$.

**Răspuns:** $B(-4, 1)$. *Barem: 3p, 2p.*

### 6. $\cos A$ în triunghiul cu $AB = 5$, $AC = 6$, $BC = 7$

$$\cos A = \frac{AB^2 + AC^2 - BC^2}{2\cdot AB\cdot AC} = \frac{25 + 36 - 49}{60} = \frac{12}{60} = \frac15.$$

**Răspuns:** $\cos A = \dfrac15$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. Sistemul $\begin{cases} x + y + z = 1\\ 2x + ay + 3z = 1\\ 4x + a^2y + 9z = 1\end{cases}$, cu matricea $A$

#### a) $\det A = -a^2 + 5a - 6$

$$\det A = \begin{vmatrix} 1 & 1 & 1\\ 2 & a & 3\\ 4 & a^2 & 9\end{vmatrix} = 9a + 12 + 2a^2 - 4a - 3a^2 - 18 = -a^2 + 5a - 6.$$

*Barem: 2p, 3p.*

#### b) $A$ inversabilă

$\det A \ne 0$; $-a^2 + 5a - 6 = 0 \iff a \in \{2, 3\}$.

**Răspuns:** $a \in \mathbb R \setminus \{2, 3\}$. *Barem: 2p, 2p, 1p.*

#### c) Sistemul pentru $a = 1$

$$\begin{cases} x + y + z = 1\\ 2x + y + 3z = 1\\ 4x + y + 9z = 1\end{cases}$$

Scăzând ecuațiile consecutive: $x + 2z = 0$ și $2x + 6z = 0$. Din prima $x = -2z$, înlocuit: $-4z + 6z = 0 \Rightarrow z = 0$, $x = 0$, apoi $y = 1$.

**Răspuns:** $(x, y, z) = (0, 1, 0)$. *Barem: 2p, 3p.*

### 2. În $\mathbb Z_5[X]$: $f = mX^5 + nX$

#### a) $n$ cu $f(\hat1) = m$

$f(\hat1) = m + n = m \iff n = \hat0$. *Barem: 2p, 3p.*

#### b) Rădăcinile pentru $m = \hat1$, $n = \hat4$

$f = X^5 + \hat4X = X^5 - X$. După mica teoremă a lui Fermat, $x^5 = x$ pentru orice $x \in \mathbb Z_5$; direct: $\hat2^5 = \widehat{32} = \hat2$, $\hat3^5 = \widehat{243} = \hat3$, $\hat4^5 = \widehat{1024} = \hat4$. Deci $f(x) = \hat0$ pentru toate elementele.

**Răspuns:** $\hat0, \hat1, \hat2, \hat3, \hat4$. *Barem: 1p, 3p, 1p.*

#### c) Dacă $f(\hat1) = f(\hat2)$, atunci $f(\hat3) = f(\hat4)$

Cum $x^5 = x$ în $\mathbb Z_5$, $f(x) = (m + n)x$. Atunci $f(\hat1) = m + n$, $f(\hat2) = \hat2(m + n)$; egalitatea dă $m + n = \hat0$. Rezultă $f(\hat3) = \hat3(m + n) = \hat0$ și $f(\hat4) = \hat4(m + n) = \hat0$, deci egale. $\blacksquare$ *Barem: 1p, 2p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R\setminus\{-1\} \to \mathbb R$, $f(x) = \dfrac{x^2 - x - 1}{x + 1}$

#### a) $f'(x)$

$$f'(x) = \frac{(2x - 1)(x + 1) - (x^2 - x - 1)}{(x+1)^2} = \frac{2x^2 + x - 1 - x^2 + x + 1}{(x+1)^2} = \frac{x^2 + 2x}{(x + 1)^2}.$$

*Barem: 3p, 2p.*

#### b) $\lim\limits_{x\to+\infty}\dfrac{f(x)\ln x}{x^2 - x - 1}$

Se simplifică: $\dfrac{f(x)\ln x}{x^2 - x - 1} = \dfrac{\ln x}{x + 1}$. Cu l'Hospital: $\lim\limits_{x\to+\infty}\dfrac{1/x}{1} = 0$.

**Răspuns:** $0$. *Barem: 2p, 3p.*

#### c) Asimptota oblică spre $+\infty$

$$m = \lim_{x\to+\infty}\frac{x^2 - x - 1}{x^2 + x} = 1, \qquad n = \lim_{x\to+\infty}\left(\frac{x^2 - x - 1}{x+1} - x\right) = \lim_{x\to+\infty}\frac{-2x - 1}{x + 1} = -2.$$

**Răspuns:** $y = x - 2$. *Barem: 2p, 2p, 1p.*

### 2. $f(x) = e^x\sqrt{x + 1}$, pe $(0, +\infty)$

#### a) Primitivele lui $g(x) = \dfrac{f(x)}{\sqrt{x+1}}$

$g(x) = e^x$, deci $\displaystyle\int g(x)\,dx = e^x + C$. *Barem: 2p, 3p.*

#### b) $\displaystyle\int_1^2\sqrt{x+1}\,f(x)\,dx$

Integrandul este $(x + 1)e^x$. Prin părți:

$$\int_1^2(x+1)e^x\,dx = (x+1)e^x\Big|_1^2 - \int_1^2 e^x\,dx = 3e^2 - 2e - (e^2 - e) = 2e^2 - e.$$

**Răspuns:** $2e^2 - e$. *Barem: 1p, 3p, 1p.*

#### c) Aria pentru $h(x) = e^{-x}f(x)$ între $x = 2$ și $x = 3$

$h(x) = \sqrt{x + 1} > 0$:

$$\mathcal A = \int_2^3\sqrt{x+1}\,dx = \frac23(x + 1)\sqrt{x+1}\Big|_2^3 = \frac23\left(8 - 3\sqrt3\right).$$

**Răspuns:** $\dfrac23(8 - 3\sqrt3)$. *Barem: 1p, 3p, 1p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = 4$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac2{15}$ |
| I.5 | $B(-4, 1)$ |
| I.6 | $\cos A = \tfrac15$ |
| II.1.b | $a \notin \{2, 3\}$ |
| II.1.c | $(0, 1, 0)$ |
| II.2.a | $n = \hat0$ |
| II.2.b | toate elementele lui $\mathbb Z_5$ |
| III.1.b | $0$ |
| III.1.c | $y = x - 2$ |
| III.2.b | $2e^2 - e$ |
| III.2.c | $\tfrac23(8 - 3\sqrt3)$ |

## Ce merită reținut din varianta 9

- **Mica teoremă a lui Fermat în $\mathbb Z_p$**: $x^p = x$, deci $X^5 - X$ se anulează pe tot $\mathbb Z_5$.
- **Determinant Vandermonde**: liniile $1, a, a^2$ se recunosc ușor; se anulează când două „noduri” coincid.
- **Simplifică înainte de limită**: factorul $x^2 - x - 1$ dispare imediat.
