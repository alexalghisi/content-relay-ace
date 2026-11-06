Rezolvarea completă a subiectului de **Bacalaureat 2012 la Matematică M1 (mate-info)**, sesiunea iunie–iulie, **varianta 5**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Modulul numărului complex $(1 + i)^2$

$(1+i)^2 = 1 + 2i + i^2 = 2i$, deci $|(1+i)^2| = |2i| = 2$.

(Altfel: $|(1+i)^2| = |1+i|^2 = (\sqrt2)^2 = 2$.)

**Răspuns:** $2$. *Barem: 3p ridicarea la pătrat, 2p modulul.*

### 2. Intersecția graficelor $f(x) = x^2 + 2x$ și $g(x) = -x - 2$

$$x^2 + 2x = -x - 2 \iff x^2 + 3x + 2 = 0 \iff x \in \{-1, -2\}.$$

$x = -1 \Rightarrow y = -1$; $x = -2 \Rightarrow y = 0$.

**Răspuns:** $(-1, -1)$ și $(-2, 0)$. *Barem: 1p ecuația, 2p + 2p punctele.*

### 3. Inecuația $2^{x+1} \le 4$

$2^{x+1} \le 2^2$ și funcția exponențială cu baza $2 > 1$ este crescătoare: $x + 1 \le 2 \iff x \le 1$.

**Răspuns:** $x \in (-\infty, 1]$. *Barem: 1p, 2p, 2p.*

### 4. Probabilitatea ca o submulțime cu trei elemente a lui $\{1,2,3,4,5\}$ să aibă elementele în progresie aritmetică

- Cazuri posibile: $C_5^3 = 10$.
- Cazuri favorabile: $\{1,2,3\}$, $\{2,3,4\}$, $\{3,4,5\}$, $\{1,3,5\}$ — **4**.

$$p = \frac{4}{10} = \frac25.$$

*Barem: 1p formula, 2p favorabile, 1p posibile, 1p probabilitatea.*

### 5. $\vec u = \vec i - 2\vec j$, $\vec v = a\vec i - \vec j$; $a$ cu $\vec u\cdot\vec v = 3$

$$\vec u\cdot\vec v = 1\cdot a + (-2)(-1) = a + 2 = 3 \iff a = 1.$$

**Răspuns:** $a = 1$. *Barem: 4p produsul scalar, 1p valoarea.*

### 6. $\cos A$ în triunghiul cu $AB = 4$, $AC = 5$, $BC = 7$

$$\cos A = \frac{AB^2 + AC^2 - BC^2}{2\cdot AB\cdot AC} = \frac{16 + 25 - 49}{40} = -\frac{8}{40} = -\frac15.$$

**Răspuns:** $\cos A = -\dfrac15$. *Barem: 2p formula, 3p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. Sistemul $\begin{cases}2x + y + 3z = 0\\x + 2y + 3z = 0\\x + y + mz = 0\end{cases}$

#### a) Determinantul matricei sistemului

$$\det A = \begin{vmatrix}2&1&3\\1&2&3\\1&1&m\end{vmatrix} = 4m + 3 + 3 - 6 - 6 - m = 3m - 6.$$

*Barem: 2p matricea, 3p determinantul.*

#### b) $m$ pentru care sistemul are soluție unică

Sistem omogen cu soluție unică (cea nulă) $\iff \det A \ne 0 \iff m \ne 2$.

**Răspuns:** $m \in \mathbb R\setminus\{2\}$. *Barem: 2p condiția, 3p răspunsul.*

#### c) Pentru $m = 2$: soluția cu $x_0 > 0$ și $x_0^2 + y_0^2 + z_0^2 = 3$

$\det A = 0$ și $\begin{vmatrix}2&1\\1&2\end{vmatrix} = 3 \ne 0$, deci rangul este $2$. Luăm $z = \alpha$:

$$\begin{cases}2x + y = -3\alpha\\x + 2y = -3\alpha\end{cases} \Rightarrow x = y = -\alpha.$$

$x_0^2 + y_0^2 + z_0^2 = 3\alpha^2 = 3 \Rightarrow \alpha = \pm1$; condiția $x_0 = -\alpha > 0$ dă $\alpha = -1$.

**Răspuns:** $(x_0, y_0, z_0) = (1, 1, -1)$. *Barem: 1p rangul, 2p soluțiile, 1p $\alpha$, 1p soluția.*

### 2. $A = \begin{pmatrix}3&-2\\3&-2\end{pmatrix}$, $G = \{X(p) = I_2 + pA \mid p \in \mathbb R\setminus\{-1\}\}$

Observație: $A^2 = \begin{pmatrix}9 - 6 & -6 + 4\\9 - 6 & -6 + 4\end{pmatrix} = A$.

#### a) $X(p)\cdot X(q) \in G$

$$X(p)X(q) = I_2 + pA + qA + pqA^2 = I_2 + (p + q + pq)A = X(p + q + pq).$$

$p + q + pq + 1 = (p+1)(q+1) \ne 0$, deci $p + q + pq \ne -1$ și $X(p + q + pq) \in G$. *Barem: 3p produsul, 2p apartenența.*

#### b) Inversul lui $X(p)$

Căutăm $q$ cu $p + q + pq = 0$ (neutrul este $X(0)$): $q = -\dfrac{p}{1+p}$. Avem $q \ne -1$ (altfel $-p = -1 - p$, imposibil), deci $X(q) \in G$.

**Răspuns:** $\big(X(p)\big)^{-1} = X\left(-\dfrac{p}{1+p}\right)$. *Barem: 3p inversul, 2p apartenența.*

#### c) Ecuația $(X(p))^3 = I_2 + 7A$

$I_2 + 7A = X(7)$. Din a), $X(p)X(q) = X\big((p+1)(q+1) - 1\big)$, deci

$$(X(p))^3 = X\big((p+1)^3 - 1\big).$$

$(p+1)^3 - 1 = 7 \iff (p+1)^3 = 8 \iff p = 1$.

**Răspuns:** $X(1)$. *Barem: 1p $X(7)$, 3p puterea, 1p soluția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x^3 - 12x$

#### a) $f$ este crescătoare pe $[2, +\infty)$

$f'(x) = 3x^2 - 12 = 3(x-2)(x+2) \ge 0$ pentru $x \ge 2$. *Barem: 3p derivata, 2p semnul.*

#### b) $\displaystyle\lim_{x\to+\infty}\frac{e^x}{f(x)}$

$\lim\limits_{x\to+\infty}f(x) = +\infty$; aplicăm de trei ori regula lui l'Hôpital:

$$\lim_{x\to+\infty}\frac{e^x}{x^3 - 12x} = \lim\frac{e^x}{3x^2 - 12} = \lim\frac{e^x}{6x} = \lim\frac{e^x}{6} = +\infty.$$

**Răspuns:** $+\infty$. *Barem: 2p limita numitorului, 3p l'Hôpital.*

#### c) $a$ pentru care $f(x) = a$ are trei soluții reale distincte

$f'(x) = 0 \iff x = \pm2$; $f(-2) = 16$ (maxim local), $f(2) = -16$ (minim local). Șirul lui Rolle pentru $g(x) = f(x) - a$:

| $x$ | $-\infty$ | $-2$ | $2$ | $+\infty$ |
|---|---|---|---|---|
| $g(x)$ | $-\infty$ | $16 - a$ | $-16 - a$ | $+\infty$ |

Trei schimbări de semn $\iff 16 - a > 0$ și $-16 - a < 0 \iff a \in (-16, 16)$.

**Răspuns:** $a \in (-16, 16)$. *Barem: 3p șirul lui Rolle, 2p concluzia.*

### 2. $f:(-1,+\infty)\to\mathbb R$, $f(x) = \dfrac{2x+3}{x+2}$

#### a) Orice primitivă a lui $f$ este strict crescătoare

$F' = f$, iar pentru $x > -1$: $2x + 3 > 1 > 0$ și $x + 2 > 1 > 0$, deci $f(x) > 0$ și $F$ este strict crescătoare. *Barem: 2p $F' = f$, 1p semnul, 2p concluzia.*

#### b) $\displaystyle\int_0^1\frac{f(x)}{x+1}\,dx$

$\dfrac{2x+3}{(x+1)(x+2)} = \dfrac{1}{x+1} + \dfrac{1}{x+2}$:

$$\int_0^1\left(\frac1{x+1} + \frac1{x+2}\right)dx = \ln 2 + (\ln 3 - \ln 2) = \ln3.$$

**Răspuns:** $\ln 3$. *Barem: 3p descompunerea, 2p calculul.*

#### c) $\displaystyle\lim_{x\to+\infty}\frac{1}{x}\int_x^{2x}f(t)\,dt$

$f(t) = 2 - \dfrac{1}{t+2}$, deci

$$\int_x^{2x}f(t)\,dt = \big(2t - \ln(t+2)\big)\Big|_x^{2x} = 2x - \ln\frac{2x+2}{x+2}.$$

$$\lim_{x\to+\infty}\frac{2x - \ln\frac{2x+2}{x+2}}{x} = 2 - \lim_{x\to+\infty}\frac{\ln\frac{2x+2}{x+2}}{x} = 2 - 0 = 2,$$

pentru că $\ln\dfrac{2x+2}{x+2} \to \ln 2$.

**Răspuns:** $2$. *Barem: 3p integrala, 2p limita.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $2$ |
| I.2 | $(-1,-1)$, $(-2,0)$ |
| I.3 | $(-\infty, 1]$ |
| I.4 | $p = \frac25$ |
| I.5 | $a = 1$ |
| I.6 | $\cos A = -\frac15$ |
| II.1.a | $3m - 6$ |
| II.1.c | $(1, 1, -1)$ |
| II.2.b | $X\left(-\frac{p}{1+p}\right)$ |
| II.2.c | $X(1)$ |
| III.1.b | $+\infty$ |
| III.1.c | $a \in (-16, 16)$ |
| III.2.b | $\ln3$ |
| III.2.c | $2$ |

## Ce merită reținut din varianta 5

- **Matrice idempotente ($A^2 = A$)**: $X(p)X(q) = X(p + q + pq)$, iar $p + q + pq = (p+1)(q+1) - 1$.
- **Număr de soluții ale lui $f(x) = a$**: șirul lui Rolle cu valorile în punctele critice.
- **Limite cu $e^x$ la numărător și polinom la numitor**: l'Hôpital repetat dă $+\infty$.
- **Fracții simple**: $\frac{2x+3}{(x+1)(x+2)} = \frac{1}{x+1} + \frac{1}{x+2}$.
