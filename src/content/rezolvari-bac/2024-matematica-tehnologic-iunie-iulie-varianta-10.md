Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_tehnologic**, sesiunea iunie–iulie, **varianta 10**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\dfrac{12}{5}\cdot\left(\dfrac12 + \dfrac13\right) = 2$

Aducem fracțiile din paranteză la numitorul comun 6:

$$\frac12 + \frac13 = \frac36 + \frac26 = \frac56.$$

$$\frac{12}{5}\cdot\frac56 = \frac{12\cdot 5}{5\cdot 6} = \frac{12}{6} = 2.$$

*Barem: 2p suma din paranteză, 3p produsul.*

### 2. $f(x) = 5x + 1$: determinați $a$ cu $f(a) = 6$

$f(a) = 5a + 1$, deci $5a + 1 = 6 \iff 5a = 5 \iff a = 1$.

**Răspuns:** $a = 1$. *Barem: 2p $f(a)$, 3p rezolvarea ecuației.*

### 3. Ecuația $\sqrt{4x + 1} = 3$

**Condiția de existență:** $4x + 1 \ge 0 \iff x \ge -\dfrac14$. Membrul drept este pozitiv, deci putem ridica la pătrat:

$$4x + 1 = 9 \iff 4x = 8 \iff x = 2.$$

**Verificare:** $\sqrt{9} = 3$ ✔, deci soluția convine.

**Răspuns:** $x = 2$. *Barem: 3p ecuația $4x + 1 = 9$, 2p soluția care convine.*

### 4. Probabilitatea ca un număr din $A = \{10, 20, \dots, 90\}$ să fie divizibil cu 20

Mulțimea are 9 elemente $\Rightarrow$ **9 cazuri posibile**.

Divizibile cu 20 sunt multiplii lui 20 din listă: $20, 40, 60, 80$ $\Rightarrow$ **4 cazuri favorabile**. (Atenție: 100 nu este în mulțime.)

$$p = \frac49.$$

**Răspuns:** $p = \dfrac49$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(2,0)$, $B(8,8)$, $C(11,4)$: arătați că $AB = 2BC$

Formula distanței: $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.

$$BC = \sqrt{(11 - 8)^2 + (4 - 8)^2} = \sqrt{9 + 16} = 5,$$
$$AB = \sqrt{(8 - 2)^2 + (8 - 0)^2} = \sqrt{36 + 64} = 10.$$

Deci $AB = 10 = 2\cdot 5 = 2BC$. *Barem: 2p $BC$, 3p $AB$ și concluzia.*

### 6. Arătați că $1 + \sin 30^\circ = 2\sin 60^\circ\cdot\cos 30^\circ$

Valorile: $\sin 30^\circ = \dfrac12$, $\sin 60^\circ = \cos 30^\circ = \dfrac{\sqrt3}{2}$.

- Membrul stâng: $1 + \dfrac12 = \dfrac32$.
- Membrul drept: $2\cdot\dfrac{\sqrt3}{2}\cdot\dfrac{\sqrt3}{2} = 2\cdot\dfrac34 = \dfrac32$.

Membrii sunt egali, deci egalitatea este adevărată. *Barem: 3p valorile trigonometrice, 2p calculul celor doi membri.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}x & x - 1\\ -2x & 2\end{pmatrix}$

#### a) $\det(A(1)) = 2$

$$A(1) = \begin{pmatrix}1 & 0\\ -2 & 2\end{pmatrix}, \qquad \det(A(1)) = 1\cdot 2 - 0\cdot(-2) = 2.$$

*Barem: 3p scrierea și dezvoltarea, 2p rezultatul.*

#### b) $A(2) + A(0) = 2A(1)$

$$A(2) + A(0) = \begin{pmatrix}2 & 1\\ -4 & 2\end{pmatrix} + \begin{pmatrix}0 & -1\\ 0 & 2\end{pmatrix} = \begin{pmatrix}2 & 0\\ -4 & 4\end{pmatrix} = 2\begin{pmatrix}1 & 0\\ -2 & 2\end{pmatrix} = 2A(1).$$

*Barem: 3p suma, 2p identificarea cu $2A(1)$.*

#### c) $x$ cu $\det(A(x) + xI_2) = 2$

$$A(x) + xI_2 = \begin{pmatrix}x & x - 1\\ -2x & 2\end{pmatrix} + \begin{pmatrix}x & 0\\ 0 & x\end{pmatrix} = \begin{pmatrix}2x & x - 1\\ -2x & 2 + x\end{pmatrix}.$$

$$\det = 2x(2 + x) - (x - 1)(-2x) = 4x + 2x^2 + 2x^2 - 2x = 4x^2 + 2x.$$

$4x^2 + 2x = 2 \iff 2x^2 + x - 1 = 0$, cu $\Delta = 1 + 8 = 9$, deci $x = \dfrac{-1 \pm 3}{4}$.

**Răspuns:** $x = -1$ sau $x = \dfrac12$. *Barem: 3p determinantul $4x^2 + 2x$, 2p soluțiile.*

### 2. Legea $x \circ y = 2(x + y) - xy - 4$

#### a) $1 \circ 3 = 1$

$$1 \circ 3 = 2(1 + 3) - 1\cdot 3 - 4 = 8 - 3 - 4 = 1.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) Legea este comutativă

Pentru orice $x, y$ reali:

$$y \circ x = 2(y + x) - yx - 4 = 2(x + y) - xy - 4 = x \circ y,$$

folosind comutativitatea adunării și a înmulțirii numerelor reale. *Barem: 2p scrierea lui $y \circ x$, 3p egalitatea și concluzia.*

#### c) $n \in \mathbb N$ cu $n \circ n \ge n - 2$

$$n \circ n = 2\cdot 2n - n^2 - 4 = 4n - n^2 - 4.$$

$$4n - n^2 - 4 \ge n - 2 \iff -n^2 + 3n - 2 \ge 0 \iff n^2 - 3n + 2 \le 0 \iff (n - 1)(n - 2) \le 0.$$

Produsul este $\le 0$ între rădăcini: $n \in [1, 2]$. Numerele naturale din acest interval sunt $1$ și $2$.

**Verificare:** $1 \circ 1 = -1 \ge -1$ ✔; $2 \circ 2 = 0 \ge 0$ ✔; $0 \circ 0 = -4 < -2$ ✗.

**Răspuns:** $n \in \{1, 2\}$. *Barem: 2p expresia lui $n \circ n$, 3p rezolvarea inecuației.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \dfrac{2x - 1}{x^2}$

#### a) $f'(x) = \dfrac{2(1 - x)}{x^3}$

$$f'(x) = \frac{(2x - 1)'\cdot x^2 - (2x - 1)(x^2)'}{x^4} = \frac{2x^2 - 2x(2x - 1)}{x^4} = \frac{-2x^2 + 2x}{x^4} = \frac{2x(1 - x)}{x^4} = \frac{2(1 - x)}{x^3}.$$

(Simplificarea cu $x$ e permisă, $x > 0$.) *Barem: 3p derivarea, 2p forma finală.*

#### b) Tangenta în punctul de abscisă $x = 1$

$f(1) = \dfrac{2 - 1}{1} = 1$, $f'(1) = \dfrac{2\cdot 0}{1} = 0$.

$$y - f(1) = f'(1)(x - 1) \Rightarrow y - 1 = 0 \Rightarrow y = 1.$$

**Răspuns:** $y = 1$ (tangentă orizontală). *Barem: 2p $f(1)$ și $f'(1)$, 3p ecuația.*

#### c) Intervalele de monotonie

Pe $(0, +\infty)$, $x^3 > 0$, deci semnul lui $f'$ este semnul lui $1 - x$; $f'(x) = 0 \iff x = 1$.

| $x$ | $0$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | |
| $f(x)$ | | ↗ | $1$ | ↘ | |

**Răspuns:** $f$ este crescătoare pe $(0, 1]$ și descrescătoare pe $[1, +\infty)$. *Barem: 3p pe $(0, 1]$, 2p pe $[1, +\infty)$.*

### 2. $f(x) = \dfrac{2x + 1}{x^2 + x + 1}$

(Numitorul nu se anulează: $\Delta = 1 - 4 < 0$, deci $x^2 + x + 1 > 0$ pentru orice $x$.)

#### a) $\displaystyle\int_0^1 (x^2 + x + 1)f(x)\,dx = 2$

Produsul se simplifică la $2x + 1$:

$$\int_0^1 (2x + 1)\,dx = (x^2 + x)\Big|_0^1 = 2 - 0 = 2.$$

*Barem: 3p simplificarea și primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 f(x)\,dx = \ln 3$

Numărătorul este exact derivata numitorului: $(x^2 + x + 1)' = 2x + 1$. Deci $\int \dfrac{u'}{u} = \ln|u|$:

$$\int_0^1\frac{2x + 1}{x^2 + x + 1}\,dx = \ln(x^2 + x + 1)\Big|_0^1 = \ln 3 - \ln 1 = \ln 3.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) Aria suprafeței delimitate de graficul lui $g(x) = e^x(x^2 + x + 1)f(x)$, $Ox$, $x = 0$, $x = 1$ este $e + 1$

Simplificăm: $g(x) = e^x(2x + 1)$. Pe $[0, 1]$, $e^x > 0$ și $2x + 1 > 0$, deci $g(x) > 0$ și aria este

$$\mathcal A = \int_0^1 g(x)\,dx = \int_0^1 e^x(2x + 1)\,dx.$$

Integrăm prin părți cu $u = 2x + 1$ ($u' = 2$), $v' = e^x$ ($v = e^x$):

$$\int_0^1 e^x(2x + 1)\,dx = e^x(2x + 1)\Big|_0^1 - \int_0^1 2e^x\,dx = (3e - 1) - 2(e - 1) = e + 1.$$

*Barem: 3p scrierea ariei și integrarea prin părți, 2p rezultatul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 1$ |
| I.3 | $x = 2$ |
| I.4 | $p = \tfrac49$ |
| II.1.c | $x \in \left\{-1, \tfrac12\right\}$ |
| II.2.c | $n \in \{1, 2\}$ |
| III.1.b | $y = 1$ |
| III.1.c | ↗ pe $(0, 1]$, ↘ pe $[1, +\infty)$ |
| III.2.c | $\mathcal A = e + 1$ |

## Ce merită reținut din varianta 10

- **Integrale $\int\frac{u'}{u}$**: dacă numărătorul e derivata numitorului, primitiva este $\ln|u|$.
- **Aria sub grafic**: verifică semnul funcției pe interval înainte să scrii $\mathcal A = \int g$.
- **Inecuații în $\mathbb N$**: după rezolvarea în $\mathbb R$, păstrează doar numerele naturale din interval.
