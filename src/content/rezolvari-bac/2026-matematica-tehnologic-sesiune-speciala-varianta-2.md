Rezolvarea completă a subiectului de **Bacalaureat 2026 la Matematică M_tehnologic**, sesiunea specială, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\dfrac83 - 2\cdot\left(1 - \dfrac16\right) = 1$

Paranteza: $1 - \dfrac16 = \dfrac56$. Înmulțirea: $2\cdot\dfrac56 = \dfrac{10}{6} = \dfrac53$.

$$\frac83 - \frac53 = \frac33 = 1.$$

*Barem: 3p calculul parantezei și al produsului, 2p finalizarea.*

### 2. $f(x) = 7x + 5$: determinați $m$ cu $f(m) = 26$

$f(m) = 7m + 5$, deci $7m + 5 = 26 \iff 7m = 21 \iff m = 3$.

**Răspuns:** $m = 3$. *Barem: 3p expresia $f(m)$, 2p rezolvarea.*

### 3. Ecuația $3^{2x - 1} = 3^{5 - x}$

Funcția exponențială cu baza $3$ este injectivă (două puteri ale lui 3 sunt egale doar dacă exponenții sunt egali), deci egalăm exponenții:

$$2x - 1 = 5 - x \iff 3x = 6 \iff x = 2.$$

**Verificare:** $3^{3} = 3^{3}$ ✔.

**Răspuns:** $x = 2$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. După o ieftinire cu 65%, obiectul costă 70 de lei. Prețul inițial?

Notăm cu $x$ prețul inițial. După ieftinire rămân $100\% - 65\% = 35\%$ din preț:

$$x - \frac{65}{100}x = 70 \iff \frac{35}{100}x = 70 \iff x = \frac{70\cdot 100}{35} = 200.$$

**Verificare:** $65\%$ din $200$ înseamnă $130$ lei, iar $200 - 130 = 70$ ✔.

**Răspuns:** 200 de lei. Greșeală frecventă: să calculezi 65% din 70 și să aduni — procentul se aplică prețului **inițial**, nu celui final. *Barem: 3p ecuația, 2p rezultatul.*

### 5. $A(1, 3)$, $B(8, 6)$, $C$ mijlocul lui $OB$: distanța $AC$

$$C\left(\frac{0 + 8}{2}, \frac{0 + 6}{2}\right) = C(4, 3).$$

$$AC = \sqrt{(4 - 1)^2 + (3 - 3)^2} = \sqrt{9} = 3.$$

**Răspuns:** $AC = 3$. *Barem: 2p coordonatele lui $C$, 3p distanța.*

### 6. Triunghi dreptunghic în $A$, $AC = 6\cdot AB$, aria 12: arătați că $AB = 2$

Într-un triunghi dreptunghic, catetele sunt înălțimi una pentru cealaltă, deci aria este $\dfrac{AB\cdot AC}{2}$:

$$\frac{AB\cdot 6AB}{2} = 12 \iff 3AB^2 = 12 \iff AB^2 = 4.$$

Cum $AB > 0$ (lungime), $AB = 2$. *Barem: 3p formula ariei, 2p calculul lui $AB$.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricea $A(x) = \begin{pmatrix} x & 2 \\ 2x & x + 4 \end{pmatrix}$

#### a) $\det(A(1)) = 1$

$$A(1) = \begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix}, \qquad \det(A(1)) = 1\cdot 5 - 2\cdot 2 = 5 - 4 = 1.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $3A(3) - A(1) = 2A(4)$

$$3A(3) = 3\begin{pmatrix} 3 & 2 \\ 6 & 7 \end{pmatrix} = \begin{pmatrix} 9 & 6 \\ 18 & 21 \end{pmatrix} \Rightarrow 3A(3) - A(1) = \begin{pmatrix} 8 & 4 \\ 16 & 16 \end{pmatrix}.$$

$$2A(4) = 2\begin{pmatrix} 4 & 2 \\ 8 & 8 \end{pmatrix} = \begin{pmatrix} 8 & 4 \\ 16 & 16 \end{pmatrix}.$$

Matricele coincid. *Barem: 3p calculul diferenței, 2p finalizarea.*

#### c) $x$ real cu $A(0)\cdot A(x)\cdot A(0) = 4xA(0)$

$A(0) = \begin{pmatrix} 0 & 2 \\ 0 & 4 \end{pmatrix}$. Calculăm pas cu pas:

$$A(0)\cdot A(x) = \begin{pmatrix} 0 & 2 \\ 0 & 4 \end{pmatrix}\begin{pmatrix} x & 2 \\ 2x & x + 4 \end{pmatrix} = \begin{pmatrix} 4x & 2x + 8 \\ 8x & 4x + 16 \end{pmatrix},$$

$$\big(A(0)A(x)\big)\cdot A(0) = \begin{pmatrix} 4x & 2x + 8 \\ 8x & 4x + 16 \end{pmatrix}\begin{pmatrix} 0 & 2 \\ 0 & 4 \end{pmatrix} = \begin{pmatrix} 0 & 16x + 32 \\ 0 & 32x + 64 \end{pmatrix} = (8x + 16)\,A(0).$$

Ecuația devine $(8x + 16)A(0) = 4xA(0)$. Cum $A(0)$ nu e matricea nulă, coeficienții trebuie să fie egali:

$$8x + 16 = 4x \iff 4x = -16 \iff x = -4.$$

**Răspuns:** $x = -4$. *Barem: 3p calculul produsului, 2p determinarea lui $x$.*

### 2. Polinomul $f = X^3 - 4X^2 + aX - 2$

#### a) Pentru $a = 5$, $f(1) = 0$

$$f = X^3 - 4X^2 + 5X - 2 \Rightarrow f(1) = 1 - 4 + 5 - 2 = 0.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) Pentru $a = 3$: $x_1x_2x_3 + 2x_1x_2 + 2x_1x_3 + 2x_2x_3 = 8$

Relațiile lui Viète pentru $X^3 + bX^2 + cX + d$ (aici $b = -4$, $c = 3$, $d = -2$):

$$x_1x_2 + x_1x_3 + x_2x_3 = c = 3, \qquad x_1x_2x_3 = -d = 2.$$

Scoatem factor comun 2 din ultimii trei termeni:

$$x_1x_2x_3 + 2(x_1x_2 + x_1x_3 + x_2x_3) = 2 + 2\cdot 3 = 8.$$

*Barem: 2p relațiile lui Viète, 3p calculul.*

#### c) $a$ pentru care restul împărțirii lui $f$ la $g = X - 3$ este egal cu restul împărțirii lui $g$ la $h = X + 2$

**Teorema restului:** restul împărțirii unui polinom $p$ la $X - \alpha$ este $p(\alpha)$.

- Restul împărțirii lui $f$ la $X - 3$: $f(3) = 27 - 36 + 3a - 2 = 3a - 11$.
- Restul împărțirii lui $g$ la $X + 2 = X - (-2)$: $g(-2) = -2 - 3 = -5$.

Condiția: $3a - 11 = -5 \iff 3a = 6 \iff a = 2$.

**Răspuns:** $a = 2$. *Barem: 3p cele două resturi, 2p determinarea lui $a$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{2x + 1}{x^2 + 6}$

#### a) $f'(x) = \dfrac{2(x + 3)(2 - x)}{(x^2 + 6)^2}$

Regula câtului:

$$f'(x) = \frac{2(x^2 + 6) - (2x + 1)\cdot 2x}{(x^2 + 6)^2} = \frac{2x^2 + 12 - 4x^2 - 2x}{(x^2 + 6)^2} = \frac{-2x^2 - 2x + 12}{(x^2 + 6)^2}.$$

Numărătorul: $-2(x^2 + x - 6) = -2(x + 3)(x - 2) = 2(x + 3)(2 - x)$ (rădăcinile lui $x^2 + x - 6$ sunt $-3$ și $2$). *Barem: 3p derivarea, 2p forma finală.*

#### b) $\lim\limits_{x\to+\infty}\big(x\cdot f(x)\big) = 2$

$$\lim_{x\to+\infty}\frac{2x^2 + x}{x^2 + 6} = \lim_{x\to+\infty}\frac{x^2\left(2 + \frac1x\right)}{x^2\left(1 + \frac{6}{x^2}\right)} = \frac{2 + 0}{1 + 0} = 2.$$

*Barem: 3p scoaterea factorului comun, 2p calculul limitei.*

#### c) $a$ pentru care tangenta în punctul de abscisă $a$ are panta 0

Panta tangentei la grafic în punctul de abscisă $a$ este $f'(a)$. Condiția: $f'(a) = 0$.

$$\frac{2(a + 3)(2 - a)}{(a^2 + 6)^2} = 0 \iff (a + 3)(2 - a) = 0 \iff a = -3 \text{ sau } a = 2.$$

(Numitorul este mereu pozitiv, deci nu impune restricții.)

**Răspuns:** $a \in \{-3, 2\}$. *Barem: 2p condiția $f'(a) = 0$, 3p rezolvarea.*

### 2. $f:(-4, +\infty) \to \mathbb R$, $f(x) = \dfrac{4x}{\sqrt{x + 4}}$

#### a) $\displaystyle\int_0^2 f(x)\sqrt{x + 4}\,dx = 8$

Radicalul se simplifică: $f(x)\sqrt{x + 4} = 4x$.

$$\int_0^2 4x\,dx = 2x^2\Big|_0^2 = 8 - 0 = 8.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_5^{12}\frac{1}{2x}f(x)\,dx = 4$

$\dfrac{1}{2x}\cdot\dfrac{4x}{\sqrt{x+4}} = \dfrac{2}{\sqrt{x + 4}}$. Cum $\left(\sqrt{x + 4}\right)' = \dfrac{1}{2\sqrt{x + 4}}$, o primitivă a lui $\dfrac{2}{\sqrt{x+4}}$ este $4\sqrt{x + 4}$:

$$\int_5^{12}\frac{2}{\sqrt{x + 4}}\,dx = 4\sqrt{x + 4}\Big|_5^{12} = 4\sqrt{16} - 4\sqrt9 = 16 - 12 = 4.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $a > 0$ pentru care volumul corpului de rotație al lui $g(x) = \dfrac{f(x)}{4\sqrt x}$, $x \in [a, a + 8]$, este $4\pi(2 - \ln 2)$

Simplificăm: $g(x) = \dfrac{4x}{4\sqrt x\sqrt{x + 4}} = \dfrac{\sqrt x}{\sqrt{x + 4}}$, deci $g^2(x) = \dfrac{x}{x + 4} = 1 - \dfrac{4}{x + 4}$.

Volumul corpului obținut prin rotirea graficului în jurul axei $Ox$ este $V = \pi\displaystyle\int_a^{a+8} g^2(x)\,dx$:

$$V = \pi\int_a^{a + 8}\left(1 - \frac{4}{x + 4}\right)dx = \pi\big(x - 4\ln(x + 4)\big)\Big|_a^{a + 8} = \pi\left(8 - 4\ln\frac{a + 12}{a + 4}\right) = 4\pi\left(2 - \ln\frac{a + 12}{a + 4}\right).$$

Condiția $V = 4\pi(2 - \ln 2)$ dă $\ln\dfrac{a + 12}{a + 4} = \ln 2$, adică

$$\frac{a + 12}{a + 4} = 2 \iff a + 12 = 2a + 8 \iff a = 4.$$

$a = 4 \in (0, +\infty)$, deci convine.

**Răspuns:** $a = 4$. *Barem: 3p calculul volumului, 2p determinarea lui $a$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = 3$ |
| I.3 | $x = 2$ |
| I.4 | 200 de lei |
| I.5 | $AC = 3$ |
| I.6 | $AB = 2$ |
| II.1.c | $x = -4$ |
| II.2.b | $8$ |
| II.2.c | $a = 2$ |
| III.1.c | $a \in \{-3, 2\}$ |
| III.2.c | $a = 4$ |

## Ce merită reținut din varianta 2

- **Ieftiniri și scumpiri**: dacă știi prețul **după** modificare, notează prețul inițial cu $x$ și scrie ecuația.
- **Teorema restului**: restul împărțirii la $X - \alpha$ este valoarea polinomului în $\alpha$ — nu e nevoie de împărțire efectivă.
- **Tangentă orizontală** $\iff$ panta 0 $\iff$ $f'(a) = 0$.
- **Volume de rotație**: $V = \pi\int_a^b g^2(x)\,dx$; simplifică $g^2$ și desparte în fracții simple înainte de integrare.
