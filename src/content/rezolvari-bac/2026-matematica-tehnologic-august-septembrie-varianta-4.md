Rezolvarea completă a subiectului de **Bacalaureat 2026 la Matematică M_tehnologic**, sesiunea august–septembrie, **varianta 4**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\dfrac15\cdot\left(3 + \dfrac13\right) + \dfrac43 = 2$

Calculăm întâi paranteza, aducând la numitor comun: $3 + \dfrac13 = \dfrac93 + \dfrac13 = \dfrac{10}{3}$.

$$\frac15\cdot\frac{10}{3} + \frac43 = \frac{10}{15} + \frac43 = \frac23 + \frac43 = \frac63 = 2.$$

*Barem: 3p calculul parantezei și al produsului, 2p finalizarea.*

### 2. $f(x) = 2x - 3$: determinați $a$ cu $f(a) - f(4) = 4$

$f(4) = 2\cdot 4 - 3 = 5$ și $f(a) = 2a - 3$. Ecuația:

$$2a - 3 - 5 = 4 \iff 2a = 12 \iff a = 6.$$

**Verificare:** $f(6) - f(4) = 9 - 5 = 4$ ✔.

**Răspuns:** $a = 6$. *Barem: 3p valorile $f(4)$ și $f(a)$, 2p rezolvarea.*

### 3. Ecuație exponențială: $2^{1 - x} = 2^{3 + x}$

Bazele sunt egale, iar funcția exponențială este injectivă, deci exponenții sunt egali:

$$1 - x = 3 + x \iff -2x = 2 \iff x = -1.$$

**Verificare:** $2^{2} = 2^{2}$ ✔.

**Răspuns:** $x = -1$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. După o scumpire cu 20%, un obiect costă 48 de lei; prețul inițial

Fie $x$ prețul inițial. Scumpirea adaugă $20\%$ din $x$, adică $\dfrac{20}{100}x$:

$$x + \frac{20}{100}x = 48 \iff \frac{120}{100}x = 48 \iff x = \frac{48\cdot 100}{120} = 40.$$

Greșeală frecventă: să scazi 20% din 48 ($48 - 9{,}6 = 38{,}4$) — procentul se aplică prețului **inițial**, nu celui final. Verificare: $40 + 8 = 48$ ✔.

**Răspuns:** 40 de lei. *Barem: 3p ecuația, 2p rezultatul.*

### 5. $A(2, 5)$, $B(6, 8)$: arătați că $OB = 2AB$

Formula distanței dintre două puncte:

$$OB = \sqrt{(6 - 0)^2 + (8 - 0)^2} = \sqrt{36 + 64} = \sqrt{100} = 10,$$

$$AB = \sqrt{(6 - 2)^2 + (8 - 5)^2} = \sqrt{16 + 9} = \sqrt{25} = 5.$$

Deci $OB = 10 = 2\cdot 5 = 2AB$. $\blacksquare$

*Barem: 2p $OB$, 3p $AB$ și concluzia.*

### 6. Triunghi dreptunghic în $A$, $AB = 4$, $BC = 6$: aria este $4\sqrt5$

Ipotenuza este $BC$. Teorema lui Pitagora: $AC = \sqrt{BC^2 - AB^2} = \sqrt{36 - 16} = \sqrt{20} = 2\sqrt5$.

Aria unui triunghi dreptunghic este semiprodusul catetelor:

$$\mathcal A_{ABC} = \frac{AB\cdot AC}{2} = \frac{4\cdot 2\sqrt5}{2} = 4\sqrt5.$$

*Barem: 3p cateta $AC$, 2p aria.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricea $A(a) = \begin{pmatrix}1 & a - 1\\ 3a - 3 & 3a - 2\end{pmatrix}$

**a)** Arătați că $\det(A(2)) = 1$.

$A(2) = \begin{pmatrix}1 & 1\\ 3 & 4\end{pmatrix}$, deci $\det(A(2)) = 1\cdot 4 - 1\cdot 3 = 1$.

*Barem: 3p scrierea determinantului, 2p calculul.*

**b)** Arătați că $2A(2) + A(5) = 3A(3)$.

$A(5) = \begin{pmatrix}1 & 4\\ 12 & 13\end{pmatrix}$ și $A(3) = \begin{pmatrix}1 & 2\\ 6 & 7\end{pmatrix}$.

$$2A(2) + A(5) = \begin{pmatrix}2 & 2\\ 6 & 8\end{pmatrix} + \begin{pmatrix}1 & 4\\ 12 & 13\end{pmatrix} = \begin{pmatrix}3 & 6\\ 18 & 21\end{pmatrix} = 3\begin{pmatrix}1 & 2\\ 6 & 7\end{pmatrix} = 3A(3). \ \blacksquare$$

*Barem: 3p calculul sumei, 2p concluzia.*

**c)** Determinați $X \in \mathcal M_2(\mathbb R)$ cu $2X\cdot A(2) - A(2) = A(6)$.

Mutăm $A(2)$ în dreapta: $2X\cdot A(2) = A(6) + A(2)$. Cum $\det(A(2)) = 1 \ne 0$, $A(2)$ este inversabilă; înmulțim **la dreapta** cu $A(2)^{-1}$ (ordinea contează, deoarece $X$ apare în stânga lui $A(2)$):

$$X = \frac12\big(A(6) + A(2)\big)\cdot A(2)^{-1}.$$

Inversa unei matrice $2\times 2$: $\begin{pmatrix}a & b\\ c & d\end{pmatrix}^{-1} = \dfrac{1}{ad - bc}\begin{pmatrix}d & -b\\ -c & a\end{pmatrix}$, deci $A(2)^{-1} = \begin{pmatrix}4 & -1\\ -3 & 1\end{pmatrix}$.

$A(6) = \begin{pmatrix}1 & 5\\ 15 & 16\end{pmatrix}$, deci $A(6) + A(2) = \begin{pmatrix}2 & 6\\ 18 & 20\end{pmatrix}$ și $\dfrac12\big(A(6) + A(2)\big) = \begin{pmatrix}1 & 3\\ 9 & 10\end{pmatrix}$.

$$X = \begin{pmatrix}1 & 3\\ 9 & 10\end{pmatrix}\begin{pmatrix}4 & -1\\ -3 & 1\end{pmatrix} = \begin{pmatrix}4 - 9 & -1 + 3\\ 36 - 30 & -9 + 10\end{pmatrix} = \begin{pmatrix}-5 & 2\\ 6 & 1\end{pmatrix}.$$

**Răspuns:** $X = \begin{pmatrix}-5 & 2\\ 6 & 1\end{pmatrix}$. *Barem: 2p exprimarea lui $X$, 3p calculele și rezultatul.*

### 2. Polinomul $f = X^3 - 3X^2 - 2X + m$

**a)** Pentru $m = 9$, arătați că $f(-1) = 7$.

$$f(-1) = (-1)^3 - 3(-1)^2 - 2(-1) + 9 = -1 - 3 + 2 + 9 = 7.$$

*Barem: 3p înlocuirea, 2p calculul.*

**b)** Determinați $m$ pentru care 2 este rădăcină a lui $f$.

$$f(2) = 8 - 12 - 4 + m = m - 8 = 0 \iff m = 8.$$

**Răspuns:** $m = 8$. *Barem: 3p $f(2)$, 2p valoarea lui $m$.*

**c)** Restul împărțirii lui $f$ la $X - 4$ este 14; determinați rădăcinile lui $f$.

Teorema restului: restul este $f(4) = 64 - 48 - 8 + m = 8 + m$. Din $8 + m = 14$ obținem $m = 6$.

$f = X^3 - 3X^2 - 2X + 6$. Grupăm termenii:

$$f = X^2(X - 3) - 2(X - 3) = (X - 3)(X^2 - 2) = (X - 3)(X - \sqrt2)(X + \sqrt2).$$

**Răspuns:** rădăcinile sunt $3$, $-\sqrt2$, $\sqrt2$. *Barem: 2p $m = 6$ și descompunerea, 3p rădăcinile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(-3, +\infty)\to\mathbb R$, $f(x) = \dfrac{x^2 - 5}{x + 3}$

**a)** Arătați că $f'(x) = \dfrac{x^2 + 6x + 5}{(x + 3)^2}$.

Regula câtului $\left(\dfrac uv\right)' = \dfrac{u'v - uv'}{v^2}$:

$$f'(x) = \frac{2x(x + 3) - (x^2 - 5)\cdot 1}{(x + 3)^2} = \frac{2x^2 + 6x - x^2 + 5}{(x + 3)^2} = \frac{x^2 + 6x + 5}{(x + 3)^2}.$$

*Barem: 2p regula câtului, 3p calculul.*

**b)** Ecuația tangentei la grafic în punctul de abscisă $x = -1$.

$f(-1) = \dfrac{1 - 5}{2} = -2$ și $f'(-1) = \dfrac{1 - 6 + 5}{4} = 0$.

Ecuația tangentei: $y - f(-1) = f'(-1)(x + 1)$, adică $y + 2 = 0$, deci

$$y = -2.$$

Tangenta este orizontală (derivata e 0 — punctul $x = -1$ este un punct de extrem local). **Răspuns:** $y = -2$. *Barem: 2p valorile $f(-1)$, $f'(-1)$, 3p ecuația.*

**c)** Ecuația asimptotei oblice la graficul lui $f$.

Domeniul este nemărginit doar spre $+\infty$, deci căutăm asimptota $y = mx + n$ spre $+\infty$:

$$m = \lim_{x\to+\infty}\frac{f(x)}{x} = \lim_{x\to+\infty}\frac{x^2 - 5}{x^2 + 3x} = 1,$$

(împărțim numărătorul și numitorul la $x^2$: $\dfrac{1 - 5/x^2}{1 + 3/x} \to 1$)

$$n = \lim_{x\to+\infty}\big(f(x) - x\big) = \lim_{x\to+\infty}\frac{x^2 - 5 - x^2 - 3x}{x + 3} = \lim_{x\to+\infty}\frac{-3x - 5}{x + 3} = -3.$$

**Răspuns:** asimptota oblică spre $+\infty$ este $y = x - 3$. *Barem: 2p $m = 1$, 3p $n = -3$ și ecuația.*

### 2. $f:(-2, +\infty)\to\mathbb R$, $f(x) = \dfrac{e^x}{x + 2}$

**a)** Arătați că $\displaystyle\int_0^1 (x + 2)f(x)\,dx = e - 1$.

$(x + 2)f(x) = e^x$:

$$\int_0^1 e^x\,dx = e^x\Big|_0^1 = e^1 - e^0 = e - 1.$$

*Barem: 3p simplificarea și primitiva, 2p calculul.*

**b)** Arătați că $\displaystyle\int_0^6\frac{f(x)}{e^x}dx = 2\ln 2$.

$\dfrac{f(x)}{e^x} = \dfrac{1}{x + 2}$, cu primitiva $\ln(x + 2)$ (pe $[0, 6]$, $x + 2 > 0$):

$$\int_0^6\frac{1}{x + 2}dx = \ln(x + 2)\Big|_0^6 = \ln 8 - \ln 2 = \ln 4 = 2\ln 2.$$

*Barem: 3p primitiva, 2p calculul.*

**c)** Determinați $a$ pentru care $\displaystyle\int_0^1\left(a - \frac{1}{f(x)}\right)dx = \frac4e$.

$\dfrac{1}{f(x)} = (x + 2)e^{-x}$. Separăm integrala:

$$\int_0^1 a\,dx - \int_0^1 (x + 2)e^{-x}\,dx = a - \int_0^1 (x + 2)e^{-x}\,dx.$$

Integrăm prin părți, cu $e^{-x} = \left(-e^{-x}\right)'$:

$$\int_0^1 (x + 2)e^{-x}\,dx = -(x + 2)e^{-x}\Big|_0^1 + \int_0^1 e^{-x}\,dx = \left(-\frac3e + 2\right) + \left(-e^{-x}\right)\Big|_0^1 = 2 - \frac3e + 1 - \frac1e = 3 - \frac4e.$$

Deci integrala din enunț este $a - 3 + \dfrac4e$. Din $a - 3 + \dfrac4e = \dfrac4e$ rezultă $a = 3$.

**Răspuns:** $a = 3$. *Barem: 3p calculul integralei (prin părți), 2p valoarea lui $a$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $2$ |
| I.2 | $a = 6$ |
| I.3 | $x = -1$ |
| I.4 | 40 de lei |
| I.5 | $OB = 10 = 2AB$ |
| I.6 | aria $4\sqrt5$ |
| II.1.c | $X = \begin{pmatrix}-5 & 2\\ 6 & 1\end{pmatrix}$ |
| II.2.b | $m = 8$ |
| II.2.c | rădăcinile $3, -\sqrt2, \sqrt2$ |
| III.1.b | $y = -2$ |
| III.1.c | $y = x - 3$ |
| III.2.c | $a = 3$ |

## Ce merită reținut din varianta 4

- **Procente**: scumpirea cu $p\%$ înseamnă $x\left(1 + \tfrac{p}{100}\right)$ — procentul se aplică prețului inițial.
- **Ecuații matriceale** $XA = B$: soluția este $X = BA^{-1}$ (înmulțire la dreapta), nu $A^{-1}B$.
- **Rădăcinile unui polinom de gradul 3**: după aflarea parametrului, încearcă gruparea termenilor pentru descompunere.
- **Asimptota oblică**: $m = \lim \frac{f(x)}{x}$, apoi $n = \lim (f(x) - mx)$.
