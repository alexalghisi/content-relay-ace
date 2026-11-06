Rezolvarea completă a subiectului de **Bacalaureat 2013 la Matematică M_șt-nat**, sesiunea de rezervă, **varianta 6**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $\sqrt8 - 2(\sqrt2 - 3)$ este număr natural

$\sqrt8 = \sqrt{4\cdot 2} = 2\sqrt2$, deci

$$2\sqrt2 - 2\sqrt2 + 6 = 6 \in \mathbb N.$$

*Barem: 2p, 3p.*

### 2. $f(x) = 3x + 1$; calculați $(f \circ f)(0)$

$f(0) = 1$, apoi $(f\circ f)(0) = f(1) = 4$.

**Răspuns:** $4$. *Barem: 2p, 3p.*

### 3. Ecuația $\log_2(x^2 + 1) = \log_2 5$

$x^2 + 1 > 0$ mereu. Logaritmul e injectiv: $x^2 + 1 = 5 \iff x^2 = 4 \iff x = \pm 2$.

**Răspuns:** $x \in \{-2, 2\}$. *Barem: 3p, 2p.*

### 4. După o ieftinire cu $20\%$ prețul scade cu 200 lei. Prețul după ieftinire

Fie $x$ prețul inițial: $\frac{20}{100}x = 200 \iff x = 1000$. Prețul după ieftinire: $1000 - 200 = 800$ lei.

**Răspuns:** $800$ de lei. *Barem: 2p, 3p.*

### 5. $a$ pentru care $\vec u = (a - 1)\vec i + 4\vec j$ și $\vec v = 2\vec i - 4\vec j$ sunt opuși

Vectori opuși: $\vec u = -\vec v = -2\vec i + 4\vec j$. Identificând: $a - 1 = -2$, deci $a = -1$ (iar coeficienții lui $\vec j$ coincid: $4 = 4$).

**Răspuns:** $a = -1$. *Barem: 3p, 2p.*

### 6. Mediana din $A$ în triunghiul dreptunghic $ABC$ cu ipotenuza $BC = 10$

Mediana corespunzătoare ipotenuzei este jumătate din ipotenuză:

$$AM = \frac{BC}{2} = 5.$$

**Răspuns:** $5$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. Sistemul $\begin{cases} x - y + 2z = a\\ 2x - y = 0\\ y - z = 1\end{cases}$

#### a) $a$ știind că $(1, 2, 1)$ este soluție

A doua și a treia ecuație sunt verificate: $2 - 2 = 0$, $2 - 1 = 1$. Din prima: $1 - 2 + 2 = a$, deci $a = 1$.

**Răspuns:** $a = 1$. *Barem: 3p, 2p.*

#### b) Determinantul matricei sistemului

$$\begin{vmatrix} 1 & -1 & 2\\ 2 & -1 & 0\\ 0 & 1 & -1\end{vmatrix} = 1 + 0 + 4 - 0 - 0 - 2 = 3.$$

**Răspuns:** $3$. *Barem: 2p, 3p.*

#### c) Rezolvați sistemul pentru $a = -2$

Din a doua ecuație $y = 2x$, din a treia $z = y - 1 = 2x - 1$. Înlocuim în prima:

$$x - 2x + 2(2x - 1) = -2 \iff 3x - 2 = -2 \iff x = 0.$$

Atunci $y = 0$, $z = -1$.

**Răspuns:** $(x, y, z) = (0, 0, -1)$. *Barem: 2p, 2p, 1p.*

### 2. $f = X^3 - X + a$, $a \in \mathbb Z$

#### a) Pentru $a = -2$, calculați $f(2)$

$f = X^3 - X - 2$, $f(2) = 8 - 2 - 2 = 4$.

**Răspuns:** $4$. *Barem: 3p, 2p.*

#### b) $x_1^2 + x_2^2 + x_3^2 = 2$

Viète: $x_1 + x_2 + x_3 = 0$, $x_1x_2 + x_1x_3 + x_2x_3 = -1$.

$$x_1^2 + x_2^2 + x_3^2 = 0^2 - 2\cdot(-1) = 2.$$

*Barem: 2p, 3p.*

#### c) Dacă $f$ are o rădăcină întreagă, atunci $a$ este multiplu de 6

Fie $k \in \mathbb Z$ rădăcină: $k^3 - k + a = 0$, deci

$$a = -(k^3 - k) = -(k - 1)k(k + 1).$$

Produsul a trei numere întregi consecutive se divide cu 2 (unul e par) și cu 3 (unul e multiplu de 3), deci cu 6. Așadar $a$ este multiplu de 6. $\blacksquare$ *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \frac2x + \ln x$

#### a) $f'(x) = \dfrac{x - 2}{x^2}$

$$f'(x) = -\frac{2}{x^2} + \frac1x = \frac{-2 + x}{x^2} = \frac{x - 2}{x^2}.$$

*Barem: 2p, 3p.*

#### b) Punctele de extrem

$f'(x) = 0 \iff x = 2$; $f' < 0$ pe $(0, 2)$ și $f' > 0$ pe $(2, +\infty)$. Deci $x = 2$ este punct de minim (singurul punct de extrem), cu $f(2) = 1 + \ln 2$.

**Răspuns:** $x = 2$ (punct de minim). *Barem: 2p, 2p, 1p.*

#### c) $f$ este convexă pe $(0, 4)$

$$f''(x) = \left(\frac{x - 2}{x^2}\right)' = \frac{x^2 - (x - 2)\cdot 2x}{x^4} = \frac{-x^2 + 4x}{x^4} = \frac{4 - x}{x^3}.$$

Pentru $x \in (0, 4)$: $4 - x > 0$ și $x^3 > 0$, deci $f''(x) > 0$ și $f$ este convexă. $\blacksquare$ *Barem: 3p, 2p.*

### 2. $f:(1, +\infty) \to \mathbb R$, $f(x) = \dfrac{1}{x^2 - 1}$

#### a) $\displaystyle\int_2^4 (x - 1)f(x)\,dx = \ln\frac53$

$(x - 1)f(x) = \dfrac{x - 1}{(x-1)(x+1)} = \dfrac{1}{x + 1}$:

$$\int_2^4\frac{dx}{x + 1} = \ln(x + 1)\Big|_2^4 = \ln 5 - \ln 3 = \ln\frac53.$$

*Barem: 2p, 3p.*

#### b) $\displaystyle\int_2^3 (x^3 - 1)f(x)\,dx$

$$\frac{x^3 - 1}{x^2 - 1} = \frac{(x - 1)(x^2 + x + 1)}{(x - 1)(x + 1)} = \frac{x^2 + x + 1}{x + 1} = x + \frac{1}{x + 1}.$$

$$\int_2^3\left(x + \frac{1}{x+1}\right)dx = \left(\frac{x^2}{2} + \ln(x + 1)\right)\Big|_2^3 = \frac92 - 2 + \ln 4 - \ln 3 = \frac52 + \ln\frac43.$$

**Răspuns:** $\dfrac52 + \ln\dfrac43$. *Barem: 2p, 3p.*

#### c) Aria suprafeței delimitate de $G_f$, $Ox$, $x = 2$, $x = 3$ este $\frac12\ln\frac32$

$f > 0$ pe $[2, 3]$. Folosim $\displaystyle\int\frac{dx}{x^2 - 1} = \frac12\ln\frac{x - 1}{x + 1} + C$ (descompunere $\frac{1}{x^2-1} = \frac12\left(\frac{1}{x-1} - \frac{1}{x+1}\right)$):

$$\mathcal A = \frac12\ln\frac{x-1}{x+1}\Big|_2^3 = \frac12\left(\ln\frac12 - \ln\frac13\right) = \frac12\ln\frac32. \ \blacksquare$$

*Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $6$ |
| I.2 | $4$ |
| I.3 | $x \in \{-2, 2\}$ |
| I.4 | $800$ de lei |
| I.5 | $a = -1$ |
| I.6 | $5$ |
| II.1.a | $a = 1$ |
| II.1.b | $3$ |
| II.1.c | $(0, 0, -1)$ |
| II.2.a | $4$ |
| III.1.b | $x = 2$ (minim) |
| III.2.b | $\tfrac52 + \ln\tfrac43$ |

## Ce merită reținut din varianta 6

- **Mediana pe ipotenuză** este jumătate din ipotenuză.
- **Vectori opuși**: $\vec u = -\vec v$, deci coordonatele sunt opuse.
- **$k^3 - k = (k-1)k(k+1)$** — produs de trei întregi consecutivi, divizibil cu 6.
- **$\int\frac{dx}{x^2 - a^2} = \frac{1}{2a}\ln\left|\frac{x - a}{x + a}\right| + C$** — formulă des folosită.
