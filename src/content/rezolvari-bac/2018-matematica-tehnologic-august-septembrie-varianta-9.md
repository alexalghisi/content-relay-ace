Rezolvarea completă a subiectului de **Bacalaureat 2018 la Matematică M_tehnologic**, sesiunea august–septembrie, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\left(2 - \frac12\right)\left(3 - \frac13\right)\left(4 - \frac14\right)\cdot\frac15 = 3$

$$\frac32\cdot\frac83\cdot\frac{15}{4}\cdot\frac15 = \frac{3\cdot 8\cdot 15}{2\cdot 3\cdot 4\cdot 5} = \frac{360}{120} = 3.$$

*Barem: 3p aducerea la același numitor, 2p calculul.*

### 2. $f(x) = x^2 + 2$; determinați $a$ cu $f(a) + f(a+1) = 5$

$$a^2 + 2 + (a+1)^2 + 2 = 5 \iff 2a^2 + 2a = 0 \iff 2a(a+1) = 0.$$

**Răspuns:** $a \in \{-1, 0\}$. *Barem: 3p ecuația, 2p soluțiile.*

### 3. Ecuația $5^{2x-4} = 25$

$25 = 5^2$, deci $2x - 4 = 2 \iff x = 3$.

**Răspuns:** $x = 3$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. Probabilitatea ca un număr din $M = \{10, 15, 20, \dots, 50\}$ să fie divizibil cu 10

- Cazuri posibile: $M$ are **9** elemente.
- Cazuri favorabile: $10, 20, 30, 40, 50$ — **5**.

$$p = \frac59.$$

**Răspuns:** $p = \dfrac59$. *Barem: 1p posibile, 2p favorabile, 2p probabilitatea.*

### 5. $A(6,1)$, $B(2,5)$; lungimea $OM$, $M$ mijlocul lui $AB$

$$M\left(\frac{6+2}{2}, \frac{1+5}{2}\right) = M(4, 3), \qquad OM = \sqrt{4^2 + 3^2} = 5.$$

**Răspuns:** $OM = 5$. *Barem: 2p mijlocul, 3p lungimea.*

### 6. Arătați că $2\sin 45^\circ\cos 45^\circ - \sin^2 45^\circ - \cos^2 60^\circ = \dfrac14$

$$2\cdot\frac{\sqrt2}{2}\cdot\frac{\sqrt2}{2} - \left(\frac{\sqrt2}{2}\right)^2 - \left(\frac12\right)^2 = 1 - \frac12 - \frac14 = \frac14.$$

*Barem: 3p valorile, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}5&1\\4&8\end{pmatrix}$, $M(a) = \begin{pmatrix}a-2 & 1\\4 & a+1\end{pmatrix}$

#### a) $\det A = 36$

$$\det A = 5\cdot 8 - 4\cdot 1 = 40 - 4 = 36.$$

*Barem: 3p formula, 2p calculul.*

#### b) Valorile lui $a$ pentru care $M(a)$ este inversabilă

$$\det(M(a)) = (a-2)(a+1) - 4 = a^2 - a - 6 = (a-3)(a+2).$$

$M(a)$ inversabilă $\iff \det \ne 0 \iff a \notin \{-2, 3\}$.

**Răspuns:** $a \in \mathbb R \setminus \{-2, 3\}$. *Barem: 2p determinantul, 3p concluzia.*

#### c) $x, y$ cu $M(x)\cdot M(y) = A$

$$M(x)M(y) = \begin{pmatrix}(x-2)(y-2) + 4 & x + y - 1\\ 4(y-2) + 4(x+1) & 4 + (x+1)(y+1)\end{pmatrix} = \begin{pmatrix}xy - 2x - 2y + 8 & x + y - 1\\4x + 4y - 4 & xy + x + y + 5\end{pmatrix}.$$

Egalând cu $A$: $x + y - 1 = 1 \Rightarrow x + y = 2$, apoi $xy - 4 + 8 = 5 \Rightarrow xy = 1$ (celelalte ecuații se verifică). $x$ și $y$ sunt rădăcinile lui $t^2 - 2t + 1 = 0$, deci $x = y = 1$.

**Răspuns:** $x = y = 1$. *Barem: 3p sistemul $x+y = 2$, $xy = 1$; 2p soluția.*

### 2. $f = X^3 + mX - 6$

#### a) $f(1) = m - 5$

$$f(1) = 1 + m - 6 = m - 5.$$

*Barem: 3p înlocuirea, 2p finalizarea.*

#### b) $m$ cu $x_1^2 + x_2^2 + x_3^2 = 4$

Viète: $x_1 + x_2 + x_3 = 0$, $x_1x_2 + x_1x_3 + x_2x_3 = m$.

$$x_1^2 + x_2^2 + x_3^2 = (x_1 + x_2 + x_3)^2 - 2(x_1x_2 + x_1x_3 + x_2x_3) = 0 - 2m = -2m.$$

$-2m = 4 \iff m = -2$. **Răspuns:** $m = -2$. *Barem: 3p suma pătratelor, 2p valoarea lui $m$.*

#### c) Pentru $m = -7$: $p, q$ cu $f = (X+1)(X^2 + pX + q)$

$$(X+1)(X^2 + pX + q) = X^3 + (p+1)X^2 + (p+q)X + q.$$

Identificăm cu $X^3 - 7X - 6$: $p + 1 = 0$, $p + q = -7$, $q = -6$, deci $p = -1$, $q = -6$ (compatibil).

**Răspuns:** $p = -1$, $q = -6$. *Barem: 3p identificarea coeficienților, 2p valorile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x^3 - 3x^2 + 3$

#### a) $f'(x) = 3x(x-2)$

$$f'(x) = 3x^2 - 6x = 3x(x-2).$$

*Barem: 3p derivarea, 2p factorizarea.*

#### b) Tangenta în $x = 1$

$f(1) = 1 - 3 + 3 = 1$, $f'(1) = 3 - 6 = -3$:

$$y - 1 = -3(x - 1) \iff y = -3x + 4.$$

**Răspuns:** $y = -3x + 4$. *Barem: 2p valorile, 3p ecuația.*

#### c) $f(x) \ge -1$ pentru $x \in [0, +\infty)$

$f'(x) \le 0$ pe $[0,2]$ ($f$ descrescătoare) și $f'(x) \ge 0$ pe $[2, +\infty)$ ($f$ crescătoare), deci pe $[0,+\infty)$ minimul este

$$f(2) = 8 - 12 + 3 = -1, \quad\text{deci } f(x) \ge -1. \ \blacksquare$$

*Barem: 2p monotonia, 3p concluzia.*

### 2. $f(x) = \begin{cases}3x^2 - x, & x \le 1\\ 2 + \dfrac1x\ln x, & x > 1\end{cases}$

#### a) $\displaystyle\int_{-1}^1 f(x)\,dx = 2$

$$\int_{-1}^1 (3x^2 - x)\,dx = \left(x^3 - \frac{x^2}{2}\right)\Big|_{-1}^1 = \left(1 - \frac12\right) - \left(-1 - \frac12\right) = 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $f$ admite primitive pe $\mathbb R$

$\lim\limits_{x\nearrow1}(3x^2 - x) = 2$, $\lim\limits_{x\searrow1}\left(2 + \dfrac{\ln x}{x}\right) = 2 + 0 = 2$ și $f(1) = 2$, deci $f$ este continuă în $1$. Pe $(-\infty,1)$ și $(1,+\infty)$ este continuă (operații cu funcții elementare). Fiind continuă pe $\mathbb R$, $f$ admite primitive. *Barem: 3p continuitatea în 1, 2p concluzia.*

#### c) $n$ natural cu $\displaystyle\int_0^2 f(x)\,dx = \frac{n^2 - 4 + \ln^2 2}{2}$

$$\int_0^1 (3x^2 - x)\,dx = 1 - \frac12 = \frac12, \qquad \int_1^2\left(2 + \frac{\ln x}{x}\right)dx = \left(2x + \frac{\ln^2 x}{2}\right)\Big|_1^2 = 2 + \frac{\ln^2 2}{2}.$$

(Am folosit $\left(\frac{\ln^2 x}{2}\right)' = \frac{\ln x}{x}$.) Total: $\dfrac{5 + \ln^2 2}{2}$.

$$\frac{5 + \ln^2 2}{2} = \frac{n^2 - 4 + \ln^2 2}{2} \iff n^2 = 9 \Rightarrow n = 3 \ (n \in \mathbb N).$$

**Răspuns:** $n = 3$. *Barem: 3p calculul integralei, 2p valoarea lui $n$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a \in \{-1, 0\}$ |
| I.3 | $x = 3$ |
| I.4 | $p = \frac59$ |
| I.5 | $OM = 5$ |
| II.1.b | $a \in \mathbb R \setminus \{-2, 3\}$ |
| II.1.c | $x = y = 1$ |
| II.2.b | $m = -2$ |
| II.2.c | $p = -1$, $q = -6$ |
| III.1.b | $y = -3x + 4$ |
| III.2.c | $n = 3$ |

## Ce merită reținut din varianta 9

- **Suma pătratelor rădăcinilor**: $S_1^2 - 2S_2$, direct din Viète.
- **Funcție pe ramuri**: continuitatea în punctul de racord asigură existența primitivelor.
- **Integrala pe ramuri**: împarte intervalul în punctul de racord.
- **$\int\frac{\ln x}{x}dx = \frac{\ln^2 x}{2} + C$** — formă $u'u$.
