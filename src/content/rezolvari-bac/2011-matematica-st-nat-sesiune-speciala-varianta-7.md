Rezolvarea completă a subiectului de **Bacalaureat 2011 la Matematică M2** (profil real, științele naturii, și filiera tehnologică), sesiunea specială, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și punctajul cerinței. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Pentru această variantă nu avem baremul oficial publicat, așa că punctajul este indicat la nivel de cerință (5 puncte fiecare); orice rezolvare corectă primește punctajul integral.

## Subiectul I (30 de puncte)

### 1. Comparați $a = \log_2 4$ și $b = \sqrt[3]{27}$

$a = \log_2 2^2 = 2$, $b = \sqrt[3]{3^3} = 3$. Deci $a < b$.

**Răspuns:** $a < b$. *Punctaj: 5p.*

### 2. Inecuația $3x^2 - 11x + 6 \le 0$

$\Delta = 121 - 72 = 49$, rădăcinile $x_{1,2} = \dfrac{11 \pm 7}{6}$, adică $\dfrac23$ și $3$. Coeficientul lui $x^2$ este pozitiv, deci trinomul este $\le 0$ între rădăcini.

**Răspuns:** $x \in \left[\dfrac23, 3\right]$. *Punctaj: 5p.*

### 3. Ecuația $3^{x^2 + x + 1} = 3^{5x - 2}$

Funcția exponențială este injectivă:

$$x^2 + x + 1 = 5x - 2 \iff x^2 - 4x + 3 = 0 \iff (x-1)(x-3) = 0.$$

**Răspuns:** $x \in \{1, 3\}$. *Punctaj: 5p.*

### 4. $n \ge 2$ cu $C_n^1 + C_n^2 = 15$

$$n + \frac{n(n-1)}{2} = 15 \iff 2n + n^2 - n = 30 \iff n^2 + n - 30 = 0 \iff (n+6)(n-5) = 0.$$

**Răspuns:** $n = 5$. *Punctaj: 5p.*

### 5. $A_m(2m - 1, m^2)$ pe dreapta $d: x - y + 1 = 0$

$$2m - 1 - m^2 + 1 = 0 \iff 2m - m^2 = 0 \iff m(2 - m) = 0.$$

**Răspuns:** $m \in \{0, 2\}$. *Punctaj: 5p.*

### 6. $\cos x$, știind $0^\circ < x < 90^\circ$ și $\sin x = \frac{12}{13}$

$$\cos^2 x = 1 - \frac{144}{169} = \frac{25}{169}.$$

În cadranul I, $\cos x > 0$, deci $\cos x = \dfrac{5}{13}$. *Punctaj: 5p.*

## Subiectul al II-lea (30 de puncte)

### 1. $G = \left\{\begin{pmatrix} a & b\\ b & a\end{pmatrix} \,\middle|\, a, b \in \mathbb N\right\}$

#### a) $m, n$ naturale cu $\begin{pmatrix} 4 & m^2\\ 9 & n^2\end{pmatrix} \in G$

Trebuie ca elementele de pe diagonală să fie egale și cele din afara diagonalei să fie egale: $n^2 = 4$ și $m^2 = 9$. Cu $m, n$ naturale: $m = 3$, $n = 2$.

**Răspuns:** $m = 3$, $n = 2$. *Punctaj: 5p.*

#### b) $U, V \in G \Rightarrow U\cdot V \in G$

Fie $U = \begin{pmatrix} a & b\\ b & a\end{pmatrix}$, $V = \begin{pmatrix} c & d\\ d & c\end{pmatrix}$, cu $a, b, c, d \in \mathbb N$.

$$U\cdot V = \begin{pmatrix} ac + bd & ad + bc\\ bc + ad & bd + ac\end{pmatrix} = \begin{pmatrix} p & q\\ q & p\end{pmatrix},$$

cu $p = ac + bd \in \mathbb N$ și $q = ad + bc \in \mathbb N$. Deci $U\cdot V \in G$. $\blacksquare$ *Punctaj: 5p.*

#### c) Suma elementelor lui $U$, dacă suma elementelor lui $U^2$ este $8$

$$U^2 = \begin{pmatrix} a^2 + b^2 & 2ab\\ 2ab & a^2 + b^2\end{pmatrix}, \quad \text{suma} = 2(a^2 + b^2) + 4ab = 2(a+b)^2.$$

$2(a+b)^2 = 8 \iff (a+b)^2 = 4 \iff a + b = 2$ ($a + b \ge 0$). Suma elementelor lui $U$ este $2a + 2b = 2(a+b) = 4$.

**Răspuns:** $4$. *Punctaj: 5p.*

### 2. $f = X^4 - X^3 - 4X^2 + 2X + 4$

#### a) Restul împărțirii la $g = X - \sqrt2$ este $0$

Teorema restului: restul este $f(\sqrt2)$. Cu $(\sqrt2)^2 = 2$, $(\sqrt2)^3 = 2\sqrt2$, $(\sqrt2)^4 = 4$:

$$f(\sqrt2) = 4 - 2\sqrt2 - 8 + 2\sqrt2 + 4 = 0. \ \blacksquare$$

*Punctaj: 5p.*

#### b) Ecuația $f(x) = 0$

Analog, $f(-\sqrt2) = 4 + 2\sqrt2 - 8 - 2\sqrt2 + 4 = 0$, deci $f$ se divide cu $(X - \sqrt2)(X + \sqrt2) = X^2 - 2$:

$$f = (X^2 - 2)(X^2 - X - 2) = (X^2 - 2)(X - 2)(X + 1).$$

(Verificare: $(X^2 - 2)(X^2 - X - 2) = X^4 - X^3 - 2X^2 - 2X^2 + 2X + 4$ ✔.)

**Răspuns:** $x \in \{-\sqrt2, -1, \sqrt2, 2\}$. *Punctaj: 5p.*

#### c) $16^x - 8^x - 4\cdot4^x + 2\cdot2^x + 4 = 0$

Cu $t = 2^x > 0$ ecuația devine $t^4 - t^3 - 4t^2 + 2t + 4 = 0$, adică $f(t) = 0$. Din b), rădăcinile pozitive sunt $t = \sqrt2$ și $t = 2$:

- $2^x = \sqrt2 = 2^{\frac12} \Rightarrow x = \dfrac12$;
- $2^x = 2 \Rightarrow x = 1$.

**Răspuns:** $x \in \left\{\dfrac12, 1\right\}$. *Punctaj: 5p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \begin{cases}\dfrac{x+1}{x}, & x > 1\\[2mm] x + 1, & 0 < x \le 1\end{cases}$

#### a) $f$ este continuă în $x_0 = 1$

$$\lim_{x\nearrow1}(x + 1) = 2, \qquad \lim_{x\searrow1}\frac{x+1}{x} = 2, \qquad f(1) = 2.$$

Limitele laterale sunt egale cu valoarea funcției, deci $f$ este continuă în $1$. *Punctaj: 5p.*

#### b) $f$ este convexă pe $(1, +\infty)$

Pe $(1,+\infty)$: $f(x) = 1 + \dfrac1x$, $f'(x) = -\dfrac{1}{x^2}$, $f''(x) = \dfrac{2}{x^3} > 0$. Deci $f$ este convexă pe $(1, +\infty)$. *Punctaj: 5p.*

#### c) $f(x) + f\left(\frac1x\right) \le 4$ pentru $x > 0$

- **$x = 1$:** $f(1) + f(1) = 4$ ✔.
- **$x > 1$:** atunci $\frac1x \in (0, 1)$, deci $f(x) = 1 + \frac1x$ și $f\left(\frac1x\right) = \frac1x + 1$. Suma: $2 + \frac2x < 2 + 2 = 4$.
- **$0 < x < 1$:** atunci $\frac1x > 1$, deci $f(x) = x + 1$ și $f\left(\frac1x\right) = \dfrac{\frac1x + 1}{\frac1x} = 1 + x$. Suma: $2 + 2x < 4$.

În toate cazurile $f(x) + f\left(\frac1x\right) \le 4$. $\blacksquare$ *Punctaj: 5p.*

### 2. $f(x) = e^x\ln x$, $g(x) = \dfrac{e^x}{x}$, $x > 0$

#### a) $\displaystyle\int_1^2 x\cdot g(x)\,dx$

$x\cdot g(x) = e^x$:

$$\int_1^2 e^x\,dx = e^x\Big|_1^2 = e^2 - e.$$

**Răspuns:** $e^2 - e$. *Punctaj: 5p.*

#### b) $\displaystyle\int_e^{e^2}\frac{f(x)}{x\cdot e^x}\,dx$

$\dfrac{e^x\ln x}{xe^x} = \dfrac{\ln x}{x}$:

$$\int_e^{e^2}\frac{\ln x}{x}\,dx = \frac{\ln^2 x}{2}\Big|_e^{e^2} = \frac{4 - 1}{2} = \frac32.$$

**Răspuns:** $\dfrac32$. *Punctaj: 5p.*

#### c) $\displaystyle\int_1^e\big(f(x) + g(x)\big)dx = e^e$

Observăm că $f + g$ este derivata lui $f$ ca produs: $(e^x\ln x)' = e^x\ln x + \dfrac{e^x}{x} = f(x) + g(x)$. Deci

$$\int_1^e\big(f(x) + g(x)\big)dx = e^x\ln x\Big|_1^e = e^e\cdot1 - e\cdot0 = e^e. \ \blacksquare$$

*Punctaj: 5p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a = 2 < b = 3$ |
| I.2 | $x \in [\frac23, 3]$ |
| I.3 | $x \in \{1, 3\}$ |
| I.4 | $n = 5$ |
| I.5 | $m \in \{0, 2\}$ |
| I.6 | $\cos x = \frac{5}{13}$ |
| II.1.a | $m = 3$, $n = 2$ |
| II.1.c | $4$ |
| II.2.b | $\{-\sqrt2, -1, \sqrt2, 2\}$ |
| II.2.c | $x \in \{\frac12, 1\}$ |
| III.2.a | $e^2 - e$ |
| III.2.b | $\frac32$ |
| III.2.c | $e^e$ |

## Ce merită reținut din varianta 7

- **Rădăcini iraționale conjugate**: dacă $\sqrt2$ e rădăcină a unui polinom cu coeficienți raționali, atunci și $-\sqrt2$ este; împarte la $X^2 - 2$.
- **Ecuații exponențiale cu $2^x, 4^x, 8^x, 16^x$**: substituția $t = 2^x$ le reduce la o ecuație polinomială — păstrează doar $t > 0$.
- **Inegalități cu $f(x) + f\left(\frac1x\right)$** pentru funcții pe ramuri: analizează separat $x < 1$, $x = 1$, $x > 1$.
- **$(e^x\ln x)' = e^x\ln x + \frac{e^x}{x}$** — recunoaște derivata unui produs în integrand.
