Rezolvarea completă a subiectului de **Bacalaureat 2011 la Matematică (M2 — filiera tehnologică / științe ale naturii)**, sesiunea specială, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas și răspunsul final. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu; fiecare cerință valorează 5 puncte.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Pentru această variantă nu avem baremul oficial, așa că punctajele parțiale indicate mai jos sunt orientative — orice soluție corectă primește punctajul integral.

## Subiectul I (30 de puncte)

### 1. Comparați $a = \log_2 4$ și $b = \sqrt[3]{27}$

$a = \log_2 2^2 = 2$, $b = \sqrt[3]{3^3} = 3$.

**Răspuns:** $a < b$. *Orientativ: 2p + 2p calculul fiecărui număr, 1p comparația.*

### 2. Inecuația $3x^2 - 11x + 6 \le 0$

$\Delta = 121 - 72 = 49$, rădăcinile $x_{1,2} = \dfrac{11 \pm 7}{6}$, adică $\dfrac23$ și $3$. Coeficientul lui $x^2$ este pozitiv, deci trinomul este $\le 0$ între rădăcini.

**Răspuns:** $x \in \left[\dfrac23, 3\right]$. *Orientativ: 3p rădăcinile, 2p intervalul.*

### 3. $3^{x^2 + x + 1} = 3^{5x - 2}$

Exponențiala este injectivă:

$$x^2 + x + 1 = 5x - 2 \iff x^2 - 4x + 3 = 0 \iff (x - 1)(x - 3) = 0.$$

**Răspuns:** $x \in \{1, 3\}$. *Orientativ: 3p ecuația, 2p soluțiile.*

### 4. $n \ge 2$ cu $C_n^1 + C_n^2 = 15$

$$n + \frac{n(n-1)}{2} = 15 \iff n^2 + n - 30 = 0 \iff (n + 6)(n - 5) = 0.$$

**Răspuns:** $n = 5$. *Orientativ: 3p ecuația, 2p soluția naturală.*

### 5. $A_m(2m - 1, m^2)$ pe dreapta $d: x - y + 1 = 0$

$$2m - 1 - m^2 + 1 = 0 \iff m(2 - m) = 0.$$

**Răspuns:** $m \in \{0, 2\}$. *Orientativ: 3p condiția, 2p valorile.*

### 6. $\cos x$, știind $0^\circ < x < 90^\circ$ și $\sin x = \dfrac{12}{13}$

$\cos^2 x = 1 - \dfrac{144}{169} = \dfrac{25}{169}$; în cadranul I, $\cos x > 0$.

**Răspuns:** $\cos x = \dfrac5{13}$. *Orientativ: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $G = \left\{\begin{pmatrix} a & b\\ b & a\end{pmatrix} \,\middle|\, a, b \in \mathbb N\right\}$

#### a) $m, n$ naturale cu $\begin{pmatrix} 4 & m^2\\ 9 & n^2\end{pmatrix} \in G$

Trebuie ca elementele de pe diagonală să fie egale și cele din afara ei egale: $n^2 = 4$, $m^2 = 9$. Cu $m, n$ naturale: $m = 3$, $n = 2$.

**Răspuns:** $m = 3$, $n = 2$. *Orientativ: 3p condițiile, 2p valorile.*

#### b) $U, V \in G \Rightarrow UV \in G$

Fie $U = \begin{pmatrix} a & b\\ b & a\end{pmatrix}$, $V = \begin{pmatrix} c & d\\ d & c\end{pmatrix}$, $a, b, c, d \in \mathbb N$:

$$UV = \begin{pmatrix} ac + bd & ad + bc\\ bc + ad & bd + ac\end{pmatrix}.$$

Diagonala are elementele egale ($ac + bd$), celelalte două sunt egale ($ad + bc$), și toate sunt naturale. Deci $UV \in G$. $\blacksquare$ *Orientativ: 3p produsul, 2p concluzia.*

#### c) Suma elementelor lui $U \in G$, dacă suma elementelor lui $U^2$ este $8$

$U^2 = \begin{pmatrix} a^2 + b^2 & 2ab\\ 2ab & a^2 + b^2\end{pmatrix}$, cu suma elementelor $2(a^2 + b^2) + 4ab = 2(a + b)^2$.

$2(a + b)^2 = 8 \iff (a + b)^2 = 4 \iff a + b = 2$ ($a, b \ge 0$). Suma elementelor lui $U$ este $2(a + b) = 4$.

**Răspuns:** $4$. *Orientativ: 3p suma pentru $U^2$, 2p rezultatul.*

### 2. $f = X^4 - X^3 - 4X^2 + 2X + 4$

#### a) Restul împărțirii la $g = X - \sqrt2$ este $0$

Restul este $f(\sqrt2)$. Cu $(\sqrt2)^2 = 2$, $(\sqrt2)^3 = 2\sqrt2$, $(\sqrt2)^4 = 4$:

$$f(\sqrt2) = 4 - 2\sqrt2 - 8 + 2\sqrt2 + 4 = 0. \ \blacksquare$$

*Orientativ: 2p teorema restului, 3p calculul.*

#### b) Ecuația $f(x) = 0$

Analog $f(-\sqrt2) = 4 + 2\sqrt2 - 8 - 2\sqrt2 + 4 = 0$, deci $X^2 - 2 \mid f$. Împărțind:

$$f = (X^2 - 2)(X^2 - X - 2) = (X^2 - 2)(X - 2)(X + 1).$$

(Verificare: $(X^2 - 2)(X^2 - X - 2) = X^4 - X^3 - 2X^2 - 2X^2 + 2X + 4$ ✔.)

**Răspuns:** $x \in \{-\sqrt2, -1, \sqrt2, 2\}$. *Orientativ: 3p factorizarea, 2p rădăcinile.*

#### c) $16^x - 8^x - 4\cdot 4^x + 2\cdot 2^x + 4 = 0$

Cu $t = 2^x > 0$ ecuația devine $t^4 - t^3 - 4t^2 + 2t + 4 = 0$, adică $f(t) = 0$. Din b), soluțiile pozitive sunt $t = \sqrt2$ și $t = 2$:

$$2^x = \sqrt2 = 2^{1/2} \Rightarrow x = \tfrac12, \qquad 2^x = 2 \Rightarrow x = 1.$$

**Răspuns:** $x \in \left\{\dfrac12, 1\right\}$. *Orientativ: 2p substituția, 3p soluțiile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \begin{cases}\dfrac{x+1}{x}, & x \in (1, +\infty)\\ x + 1, & x \in (0, 1]\end{cases}$

#### a) $f$ continuă în $x_0 = 1$

$$\lim_{x\nearrow1}(x + 1) = 2, \qquad \lim_{x\searrow1}\frac{x+1}{x} = 2, \qquad f(1) = 2.$$

Limitele laterale sunt egale cu valoarea funcției, deci $f$ este continuă în 1. *Orientativ: 2p + 2p limitele, 1p concluzia.*

#### b) $f$ convexă pe $(1, +\infty)$

Pe $(1, +\infty)$, $f(x) = 1 + \dfrac1x$, deci $f'(x) = -\dfrac{1}{x^2}$ și $f''(x) = \dfrac{2}{x^3} > 0$. Funcția este convexă. *Orientativ: 3p $f''$, 2p semnul.*

#### c) $f(x) + f\left(\dfrac1x\right) \le 4$ pentru $x > 0$

- Dacă $x > 1$: $\dfrac1x \in (0, 1)$, deci $f(x) + f\left(\dfrac1x\right) = 1 + \dfrac1x + \dfrac1x + 1 = 2 + \dfrac2x < 4$.
- Dacă $x \in (0, 1)$: $\dfrac1x > 1$, deci $f(x) + f\left(\dfrac1x\right) = x + 1 + 1 + x = 2 + 2x < 4$.
- Dacă $x = 1$: $f(1) + f(1) = 4$.

În toate cazurile suma este $\le 4$. $\blacksquare$ *Orientativ: 2p + 2p cazurile, 1p finalizarea.*

### 2. $f(x) = e^x\ln x$, $g(x) = \dfrac{e^x}{x}$, pe $(0, +\infty)$

#### a) $\displaystyle\int_1^2 x\,g(x)\,dx$

$$\int_1^2 e^x\,dx = e^x\Big|_1^2 = e^2 - e.$$

**Răspuns:** $e^2 - e$. *Orientativ: 3p, 2p.*

#### b) $\displaystyle\int_e^{e^2}\frac{f(x)}{x\,e^x}dx$

$$\int_e^{e^2}\frac{\ln x}{x}dx = \frac{\ln^2 x}{2}\Big|_e^{e^2} = \frac{4 - 1}{2} = \frac32.$$

**Răspuns:** $\dfrac32$. *Orientativ: 3p primitiva, 2p calculul.*

#### c) $\displaystyle\int_1^e(f(x) + g(x))\,dx = e^e$

Observăm că $(e^x\ln x)' = e^x\ln x + \dfrac{e^x}{x} = f(x) + g(x)$. Deci

$$\int_1^e(f + g)\,dx = e^x\ln x\Big|_1^e = e^e\cdot 1 - e\cdot 0 = e^e. \ \blacksquare$$

*Orientativ: 3p recunoașterea derivatei, 2p calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a = 2 < b = 3$ |
| I.2 | $x \in [\tfrac23, 3]$ |
| I.3 | $x \in \{1, 3\}$ |
| I.4 | $n = 5$ |
| I.5 | $m \in \{0, 2\}$ |
| I.6 | $\cos x = \tfrac5{13}$ |
| II.1.a | $m = 3$, $n = 2$ |
| II.1.c | $4$ |
| II.2.b | $\{-\sqrt2, -1, \sqrt2, 2\}$ |
| II.2.c | $x \in \{\tfrac12, 1\}$ |
| III.2.a | $e^2 - e$ |
| III.2.b | $\tfrac32$ |
| III.2.c | $e^e$ |

## Ce merită reținut din varianta 7

- **Ecuații exponențiale de grad mare**: substituția $t = 2^x$ le transformă într-o ecuație polinomială deja studiată — păstrează doar rădăcinile pozitive.
- **Rădăcini iraționale conjugate**: dacă $\sqrt2$ e rădăcină a unui polinom cu coeficienți raționali, verifică și $-\sqrt2$, apoi împarte la $X^2 - 2$.
- **$(e^x\ln x)' = e^x\ln x + \frac{e^x}{x}$** — integrala unei sume care e derivata unui produs se calculează direct.
