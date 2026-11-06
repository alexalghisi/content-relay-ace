Rezolvarea completă a subiectului de **Bacalaureat 2023 la Matematică M_mate-info**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie aritmetică cu $a_1 = 3$, $a_5 = 23$: determinați $a_6$

Termenul general: $a_n = a_1 + (n-1)r$. Pentru $n = 5$: $a_5 = a_1 + 4r$, deci

$$4r = a_5 - a_1 = 23 - 3 = 20 \Rightarrow r = 5.$$

Atunci $a_6 = a_5 + r = 23 + 5 = 28$.

**Răspuns:** $a_6 = 28$. *Barem: 3p rația, 2p $a_6$.*

### 2. $f(x) = x^2 - 6x + 8$; punctul $A(m, -1)$ aparține graficului

Un punct $(m, y)$ este pe grafic dacă $f(m) = y$. Deci $f(m) = -1$:

$$m^2 - 6m + 8 = -1 \iff m^2 - 6m + 9 = 0 \iff (m - 3)^2 = 0 \iff m = 3.$$

**Răspuns:** $m = 3$. *Barem: 3p ecuația $m^2 - 6m + 9 = 0$, 2p $m = 3$.*

### 3. Ecuația $3^{2x-1} = 9\cdot 3^{x+1}$

Scriem totul ca puteri ale lui $3$: $9 = 3^2$, deci $9\cdot 3^{x+1} = 3^{2}\cdot 3^{x+1} = 3^{x+3}$.

Ecuația devine $3^{2x-1} = 3^{x+3}$. Funcția exponențială este injectivă, deci

$$2x - 1 = x + 3 \iff x = 4.$$

Verificare: $3^7 = 9\cdot 3^5 = 3^7$ ✔.

**Răspuns:** $x = 4$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. Submulțimi nevide cu cel mult două elemente ale lui $A = \{1,2,3,4,5\}$

„Nevide, cu cel mult două elemente” înseamnă submulțimi cu **exact 1** sau **exact 2** elemente:

$$C_5^1 + C_5^2 = 5 + \frac{5\cdot 4}{2} = 5 + 10 = 15.$$

**Răspuns:** 15 submulțimi. *Barem: 3p scrierea sumei de combinări, 2p calculul.*

### 5. $A(3,1)$, $B(4,4)$; determinați $C$ cu $\overrightarrow{OA} = \overrightarrow{BC}$

$\overrightarrow{OA} = 3\vec i + \vec j$, iar $\overrightarrow{BC} = (x_C - 4)\vec i + (y_C - 4)\vec j$.

Doi vectori sunt egali dacă au coordonatele egale:

$$x_C - 4 = 3 \Rightarrow x_C = 7, \qquad y_C - 4 = 1 \Rightarrow y_C = 5.$$

**Răspuns:** $C(7, 5)$. *Barem: 3p coordonatele vectorilor, 2p punctul $C$.*

### 6. Triunghi dreptunghic în $A$, $AB = 6$, înălțimea $AD = 3$: raza cercului circumscris este $2\sqrt3$

Triunghiul $ADB$ este dreptunghic în $D$ ($AD \perp BC$), cu ipotenuza $AB$. Din Pitagora:

$$BD = \sqrt{AB^2 - AD^2} = \sqrt{36 - 9} = \sqrt{27} = 3\sqrt3.$$

Teorema catetei în triunghiul $ABC$: $AB^2 = BD\cdot BC$, deci

$$BC = \frac{AB^2}{BD} = \frac{36}{3\sqrt3} = \frac{12}{\sqrt3} = 4\sqrt3.$$

Într-un triunghi dreptunghic, centrul cercului circumscris este mijlocul ipotenuzei, deci $R = \dfrac{BC}{2} = 2\sqrt3$.

(Alternativ: $\sin B = \dfrac{AD}{AB} = \dfrac12 \Rightarrow B = 30^\circ$, iar $AB = BC\cos B \Rightarrow BC = \dfrac{6}{\sqrt3/2} = 4\sqrt3$.) *Barem: 2p $BD$, 3p $BC$ și $R$.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricea $A(x) = \begin{pmatrix}x & x & x\\ 1 & x & 1\\ -1 & -x & -1\end{pmatrix}$

#### a) $\det(A(1)) = 0$

$$\det(A(1)) = \begin{vmatrix}1 & 1 & 1\\ 1 & 1 & 1\\ -1 & -1 & -1\end{vmatrix} = -1 - 1 - 1 + 1 + 1 + 1 = 0.$$

(Cu Sarrus; mai rapid: primele două linii sunt egale, deci determinantul este $0$.) *Barem: 2p scrierea determinantului, 3p calculul.*

#### b) $A(x)\cdot A(y) - A(xy) = (x + y - 2)A(0)$ pentru orice $x, y$ reali

Calculăm produsul $A(x)\cdot A(y)$ linie cu coloană.

Linia 1 $(x, x, x)$: cu coloana 1 $(y, 1, -1)^T$: $xy + x - x = xy$; cu coloana 2 $(y, y, -y)^T$: $xy + xy - xy = xy$; cu coloana 3 $(y, 1, -1)^T$: $xy$.

Linia 2 $(1, x, 1)$: coloana 1: $y + x - 1$; coloana 2: $y + xy - y = xy$; coloana 3: $y + x - 1$.

Linia 3 $(-1, -x, -1)$: coloana 1: $-y - x + 1$; coloana 2: $-y - xy + y = -xy$; coloana 3: $-y - x + 1$.

$$A(x)A(y) = \begin{pmatrix}xy & xy & xy\\ x + y - 1 & xy & x + y - 1\\ -x - y + 1 & -xy & -x - y + 1\end{pmatrix}.$$

Scădem $A(xy) = \begin{pmatrix}xy & xy & xy\\ 1 & xy & 1\\ -1 & -xy & -1\end{pmatrix}$:

$$A(x)A(y) - A(xy) = \begin{pmatrix}0 & 0 & 0\\ x + y - 2 & 0 & x + y - 2\\ -(x + y - 2) & 0 & -(x + y - 2)\end{pmatrix} = (x + y - 2)\begin{pmatrix}0 & 0 & 0\\ 1 & 0 & 1\\ -1 & 0 & -1\end{pmatrix} = (x + y - 2)A(0).$$

*Barem: 3p calculul diferenței, 2p factorul comun și identificarea cu $A(0)$.*

#### c) $x, y$ reali cu $A(-1)\cdot A(3)\cdot A(x) = A(y)$

Aplicăm de două ori relația de la b), scrisă ca $A(x)A(y) = A(xy) + (x + y - 2)A(0)$.

Pas 1: $A(-1)A(3) = A(-3) + (-1 + 3 - 2)A(0) = A(-3)$.

Pas 2: $A(-3)A(x) = A(-3x) + (x - 5)A(0)$.

Deci ecuația este $A(-3x) + (x - 5)A(0) = A(y)$, adică

$$\begin{pmatrix}-3x & -3x & -3x\\ x - 4 & -3x & x - 4\\ -(x - 4) & 3x & -(x - 4)\end{pmatrix} = \begin{pmatrix}y & y & y\\ 1 & y & 1\\ -1 & -y & -1\end{pmatrix}.$$

Identificând elementele: $x - 4 = 1 \Rightarrow x = 5$ și $y = -3x = -15$ (toate celelalte egalități sunt atunci verificate).

**Răspuns:** $x = 5$, $y = -15$. *Barem: 2p reducerea produsului, 3p valorile lui $x$ și $y$.*

### 2. Polinomul $f = X^4 + 2X^3 - 8X^2 + 3mX + m$

#### a) Pentru $m = 2$, $f(1) = 3$

Pentru $m = 2$: $f = X^4 + 2X^3 - 8X^2 + 6X + 2$, deci

$$f(1) = 1 + 2 - 8 + 6 + 2 = 3.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) Pentru $m = 0$, rădăcinile lui $f$

$f = X^4 + 2X^3 - 8X^2 = X^2(X^2 + 2X - 8)$.

$X^2 = 0$ dă rădăcina dublă $0$. Pentru $X^2 + 2X - 8 = 0$: $\Delta = 4 + 32 = 36$, $X = \dfrac{-2 \pm 6}{2} \in \{2, -4\}$.

**Răspuns:** $x_1 = x_2 = 0$, $x_3 = -4$, $x_4 = 2$. *Barem: 2p descompunerea, 3p rădăcinile.*

#### c) $m$ rațional pentru care $x_1 = 1 + \sqrt3$ este rădăcină

Pentru $m$ rațional, $f$ are coeficienți raționali, deci odată cu $1 + \sqrt3$ este rădăcină și conjugatul $x_2 = 1 - \sqrt3$. Avem $x_1 + x_2 = 2$, $x_1x_2 = 1 - 3 = -2$.

Relațiile lui Viète (coeficienții lui $X^3$ și $X^2$ nu depind de $m$):

- $x_1 + x_2 + x_3 + x_4 = -2 \Rightarrow x_3 + x_4 = -4$;
- $\sum x_ix_j = -8$: $x_1x_2 + (x_1 + x_2)(x_3 + x_4) + x_3x_4 = -8 \Rightarrow -2 + 2\cdot(-4) + x_3x_4 = -8 \Rightarrow x_3x_4 = 2$.

Produsul rădăcinilor: $x_1x_2x_3x_4 = m$ (termenul liber, gradul 4 par), deci $m = (-2)\cdot 2 = -4$.

**Verificare:** trebuie să fie satisfăcută și relația pentru coeficientul lui $X$. Pentru $m = -4$:

$$f = X^4 + 2X^3 - 8X^2 - 12X - 4 = (X^2 - 2X - 2)(X^2 + 4X + 2),$$

iar $X^2 - 2X - 2$ are rădăcinile $1 \pm \sqrt3$ ✔. Deci $m = -4$ convine.

(Metodă alternativă: împărțim $f$ la $X^2 - 2X - 2$ și impunem restul nul.)

**Răspuns:** $m = -4$. *Barem: 2p conjugata ca rădăcină, 3p relațiile lui Viète și $m = -4$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{3e^x}{x^2 + x + 1}$

#### a) $f'(x) = \dfrac{3e^x(x^2 - x)}{(x^2 + x + 1)^2}$

Numitorul nu se anulează ($\Delta = 1 - 4 < 0$). Regula câtului:

$$f'(x) = \frac{3e^x(x^2 + x + 1) - 3e^x(2x + 1)}{(x^2 + x + 1)^2} = \frac{3e^x(x^2 + x + 1 - 2x - 1)}{(x^2 + x + 1)^2} = \frac{3e^x(x^2 - x)}{(x^2+x+1)^2}.$$

*Barem: 3p regula câtului, 2p forma finală.*

#### b) $\displaystyle\lim_{x\to+\infty}\frac{f(2x)}{f(x)} = +\infty$

$f(2x) = \dfrac{3e^{2x}}{4x^2 + 2x + 1}$, deci

$$\frac{f(2x)}{f(x)} = \frac{3e^{2x}}{4x^2 + 2x + 1}\cdot\frac{x^2 + x + 1}{3e^x} = e^x\cdot\frac{x^2 + x + 1}{4x^2 + 2x + 1} = e^x\cdot\frac{1 + \frac1x + \frac1{x^2}}{4 + \frac2x + \frac1{x^2}}.$$

Fracția tinde la $\dfrac14 > 0$, iar $e^x \to +\infty$, deci produsul tinde la $+\infty$.

*Barem: 2p scrierea raportului, 3p calculul limitei.*

#### c) $f(x) = m$ are exact trei soluții pentru orice $m \in (e, 3)$

Semnul lui $f'$ este semnul lui $x^2 - x = x(x - 1)$; $f'(x) = 0 \iff x \in \{0, 1\}$.

Valori și limite: $\lim\limits_{x\to-\infty} f(x) = 0$ (exponențiala tinde la $0$, numitorul la $+\infty$), $f(0) = \dfrac{3}{1} = 3$, $f(1) = \dfrac{3e}{3} = e$, $\lim\limits_{x\to+\infty} f(x) = +\infty$ (exponențiala domină polinomul).

| $x$ | $-\infty$ | | $0$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $0$ | ↗ | $3$ | ↘ | $e$ | ↗ | $+\infty$ |

Fie $m \in (e, 3)$ (interval nevid, $e \approx 2{,}718 < 3$). Funcția $f$ este continuă și strict monotonă pe fiecare interval, deci:

- pe $(-\infty, 0)$, $f$ ia bijectiv valorile din $(0, 3)$, iar $m \in (0,3)$ ⇒ exact o soluție;
- pe $(0, 1)$, $f$ ia bijectiv valorile din $(e, 3)$ ⇒ exact o soluție;
- pe $(1, +\infty)$, $f$ ia bijectiv valorile din $(e, +\infty)$ ⇒ exact o soluție;
- $x = 0$ și $x = 1$ nu sunt soluții, pentru că $f(0) = 3 \ne m$, $f(1) = e \ne m$.

În total, exact trei soluții. *Barem: 2p monotonia, 3p limitele, valorile și concluzia.*

### 2. $f:(-1, +\infty) \to \mathbb R$, $f(x) = 6x + \ln(x + 1)$

#### a) $\displaystyle\int_1^2 \big(f(x) - \ln(x+1)\big)\,dx = 9$

$f(x) - \ln(x + 1) = 6x$, deci

$$\int_1^2 6x\,dx = 3x^2\Big|_1^2 = 12 - 3 = 9.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^{e-1}\frac{f(x) - 6x}{x + 1}\,dx = \frac12$

$\dfrac{f(x) - 6x}{x + 1} = \dfrac{\ln(x+1)}{x+1} = \ln(x + 1)\cdot\big(\ln(x+1)\big)'$, cu primitiva $\dfrac{\ln^2(x+1)}{2}$:

$$\int_0^{e-1}\frac{\ln(x+1)}{x+1}\,dx = \frac{\ln^2(x+1)}{2}\Big|_0^{e-1} = \frac{\ln^2 e}{2} - \frac{\ln^2 1}{2} = \frac12.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $a$ real cu aria dintre graficul lui $g(x) = f(x^2)$, $Ox$, $x = 0$, $x = 1$ egală cu $a\pi + \ln 2$

$g(x) = 6x^2 + \ln(x^2 + 1)$. Pe $[0, 1]$, $6x^2 \ge 0$ și $\ln(x^2+1) \ge 0$, deci $g \ge 0$ și aria este

$$\mathcal A = \int_0^1 g(x)\,dx = \int_0^1 6x^2\,dx + \int_0^1 \ln(x^2+1)\,dx = 2 + \int_0^1 \ln(x^2 + 1)\,dx.$$

Pentru a doua integrală, părți cu $u = \ln(x^2+1)$, $v' = 1$ ($v = x$):

$$\int_0^1 \ln(x^2+1)\,dx = x\ln(x^2+1)\Big|_0^1 - \int_0^1 \frac{2x^2}{x^2 + 1}\,dx = \ln 2 - \int_0^1\left(2 - \frac{2}{x^2+1}\right)dx.$$

$$\int_0^1\left(2 - \frac{2}{x^2+1}\right)dx = \big(2x - 2\operatorname{arctg} x\big)\Big|_0^1 = 2 - 2\cdot\frac{\pi}{4} = 2 - \frac{\pi}{2}.$$

Deci $\int_0^1 \ln(x^2+1)\,dx = \ln 2 - 2 + \dfrac{\pi}{2}$ și

$$\mathcal A = 2 + \ln 2 - 2 + \frac{\pi}{2} = \frac{\pi}{2} + \ln 2.$$

Din $\dfrac{\pi}{2} + \ln 2 = a\pi + \ln 2$ obținem $a = \dfrac12$.

**Răspuns:** $a = \dfrac12$. *Barem: 3p scrierea ariei și integrarea prin părți, 2p calculul final și $a$.* Truc util: $\dfrac{2x^2}{x^2+1} = 2 - \dfrac{2}{x^2+1}$ (adaugi și scazi $2$ la numărător).

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_6 = 28$ |
| I.2 | $m = 3$ |
| I.3 | $x = 4$ |
| I.4 | 15 submulțimi |
| I.5 | $C(7, 5)$ |
| I.6 | $R = 2\sqrt3$ |
| II.1.c | $x = 5$, $y = -15$ |
| II.2.b | $0$ (dublă), $-4$, $2$ |
| II.2.c | $m = -4$ |
| III.1.b | $+\infty$ |
| III.2.c | $a = \frac12$ |

## Ce merită reținut din varianta 7

- **Relații de tip $A(x)A(y) = A(xy) + k(x,y)A(0)$**: odată demonstrate la b), folosește-le la c) în loc să înmulțești matrice de mână.
- **Rădăcini iraționale la polinoame cu coeficienți raționali**: conjugata $a - \sqrt b$ este și ea rădăcină; apoi Viète.
- **Numărul de soluții ale lui $f(x) = m$**: tabel de variație + limite la capete + continuitate și strictă monotonie pe fiecare interval.
- **$\int \ln(x^2+1)\,dx$**: prin părți, apoi descompunere până la $\operatorname{arctg}$.
