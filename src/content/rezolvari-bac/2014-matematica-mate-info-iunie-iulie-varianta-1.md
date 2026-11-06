Rezolvarea completă a subiectului de **Bacalaureat 2014 la Matematică M_mate-info**, sesiunea iunie–iulie, **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Suma primilor trei termeni, $a_1 = 6$, $a_2 = 12$

$r = 6$, $a_3 = 18$, deci $a_1 + a_2 + a_3 = 36$.

**Răspuns:** $36$. *Barem: 2p, 3p.*

### 2. Vârful parabolei $f(x) = x^2 + 2x + 4$

$x_V = -\dfrac{2}{2} = -1$, $y_V = f(-1) = 1 - 2 + 4 = 3$.

**Răspuns:** $V(-1, 3)$. *Barem: 2p, 3p.*

### 3. $(3^x - 1)(3^x - 3) = 0$

$3^x = 1 \Rightarrow x = 0$ sau $3^x = 3 \Rightarrow x = 1$.

**Răspuns:** $x \in \{0, 1\}$. *Barem: 2p, 3p.*

### 4. Probabilitatea ca un număr de două cifre să conțină cifra 1

Favorabile: $10, 11, \dots, 19$ (10 numere) și $21, 31, \dots, 91$ (8 numere) — 18. Posibile: 90.

$$p = \frac{18}{90} = \frac15.$$

**Răspuns:** $p = \dfrac15$. *Barem: 2p, 1p, 2p.*

### 5. Lungimea vectorului $\vec{AB} + \vec{BC}$ în triunghiul echilateral cu $AB = 2$

$\vec{AB} + \vec{BC} = \vec{AC}$, iar $AC = AB = 2$.

**Răspuns:** $2$. *Barem: 2p, 3p.*

### 6. Aria triunghiului isoscel $ABC$ cu $A = \dfrac\pi2$, $AC = 4$

Triunghiul este dreptunghic isoscel în $A$, deci $AB = AC = 4$ și

$$\mathcal A = \frac{4\cdot 4}{2} = 8.$$

**Răspuns:** $8$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix} 2 & a & a\\ a & 2 & 2\\ a & a & 2\end{pmatrix}$

#### a) $\det(A(0)) = 8$

$$\begin{vmatrix} 2 & 0 & 0\\ 0 & 2 & 2\\ 0 & 0 & 2\end{vmatrix} = 8 + 0 + 0 - 0 - 0 - 0 = 8.$$

*Barem: 2p, 3p.*

#### b) $a$ cu $\det(A(a)) = 0$

Sarrus:

$$\det(A(a)) = 8 + 2a^2 + a^3 - 2a^2 - 4a - 2a^2 = a^3 - 2a^2 - 4a + 8 = (a - 2)(a^2 - 4) = (a - 2)^2(a + 2).$$

**Răspuns:** $a \in \{-2, 2\}$. *Barem: 3p, 2p.*

#### c) $X$ cu $A(1)X = \begin{pmatrix} 4\\ 5\\ 4\end{pmatrix}$

$$\begin{cases} 2x + y + z = 4\\ x + 2y + 2z = 5\\ x + y + 2z = 4\end{cases}$$

A doua minus a treia: $y = 1$. Prima minus a treia: $x - z = 0$. Din a treia, $x + 1 + 2x = 4 \Rightarrow x = 1$, $z = 1$. ($\det A(1) = 3 \ne 0$, soluția e unică.)

**Răspuns:** $X = \begin{pmatrix} 1\\ 1\\ 1\end{pmatrix}$. *Barem: 2p, 3p.*

### 2. $f = X^3 - 2X^2 + 3X + m$, cu rădăcinile $x_1, x_2, x_3$

#### a) $f(1)$

$1 - 2 + 3 + m = m + 2$. **Răspuns:** $m + 2$. *Barem: 2p, 3p.*

#### b) $x_1^2 + x_2^2 + x_3^2 = -2$

Viète: $x_1 + x_2 + x_3 = 2$, $x_1x_2 + x_1x_3 + x_2x_3 = 3$:

$$2^2 - 2\cdot 3 = -2.$$

(Rezultatul negativ arată că nu toate rădăcinile sunt reale.) *Barem: 2p, 3p.*

#### c) $m$ cu $x_1^3 + x_2^3 + x_3^3 = 8$

Fiecare rădăcină verifică $x_i^3 = 2x_i^2 - 3x_i - m$. Adunând:

$$\sum x_i^3 = 2\sum x_i^2 - 3\sum x_i - 3m = 2(-2) - 3\cdot2 - 3m = -10 - 3m.$$

$-10 - 3m = 8 \iff m = -6$.

**Răspuns:** $m = -6$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \dfrac{\ln x}{x}$

#### a) $f'(x) = \dfrac{1 - \ln x}{x^2}$

$$f'(x) = \frac{\frac1x\cdot x - \ln x}{x^2} = \frac{1 - \ln x}{x^2}.$$

*Barem: 2p, 3p.*

#### b) Asimptota spre $+\infty$

$\lim\limits_{x\to+\infty}\dfrac{\ln x}{x} = \lim\limits_{x\to+\infty}\dfrac{1/x}{1} = 0$ (l'Hospital).

**Răspuns:** $y = 0$ (asimptotă orizontală). *Barem: 3p, 2p.*

#### c) $f(x) \le \dfrac1e$

$f'(e) = 0$, $f' > 0$ pe $(0, e)$, $f' < 0$ pe $(e, +\infty)$: $x = e$ este punct de maxim global, deci $f(x) \le f(e) = \dfrac1e$. $\blacksquare$ *Barem: 3p, 2p.*

### 2. $f(x) = x^2 + x + 1$

#### a) $\displaystyle\int_0^1 f(x)\,dx = \frac{11}{6}$

$$\left(\frac{x^3}{3} + \frac{x^2}{2} + x\right)\Big|_0^1 = \frac13 + \frac12 + 1 = \frac{11}{6}.$$

*Barem: 3p, 2p.*

#### b) $I_n = \displaystyle\int_0^1\frac{x^n}{f(x)}dx$; $I_{n+1} \le I_n$

$$I_{n+1} - I_n = \int_0^1\frac{x^n(x - 1)}{x^2 + x + 1}dx \le 0,$$

căci pe $[0,1]$: $x^n \ge 0$, $x - 1 \le 0$, $x^2 + x + 1 > 0$. $\blacksquare$ *Barem: 2p, 3p.*

#### c) $a > 0$ cu $\displaystyle\int_0^a\frac{2x + 1}{f(x)}dx = \ln 3$

Numărătorul este $f'(x)$:

$$\int_0^a\frac{2x+1}{x^2 + x + 1}dx = \ln(x^2 + x + 1)\Big|_0^a = \ln(a^2 + a + 1).$$

$a^2 + a + 1 = 3 \iff (a + 2)(a - 1) = 0$; soluția pozitivă este $a = 1$.

**Răspuns:** $a = 1$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $36$ |
| I.2 | $V(-1, 3)$ |
| I.3 | $x \in \{0, 1\}$ |
| I.4 | $p = \tfrac15$ |
| I.5 | $2$ |
| I.6 | $8$ |
| II.1.b | $a \in \{-2, 2\}$ |
| II.1.c | $X = (1, 1, 1)^T$ |
| II.2.a | $m + 2$ |
| II.2.c | $m = -6$ |
| III.1.b | $y = 0$ |
| III.2.c | $a = 1$ |

## Ce merită reținut din varianta 1

- **Sume de puteri ale rădăcinilor**: înlocuiește $x_i^3$ folosind ecuația $f(x_i) = 0$.
- **Regula triunghiului**: $\vec{AB} + \vec{BC} = \vec{AC}$.
- **Maximul lui $\frac{\ln x}{x}$** este $\frac1e$, atins în $x = e$ — rezultat clasic.
- **$\int\frac{u'}{u} = \ln u$** — verifică întâi dacă numărătorul e derivata numitorului.
