Rezolvarea completă a subiectului de **Bacalaureat 2026 la Matematică M_tehnologic**, subiectul de rezervă, **varianta 5**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\left(1 + \dfrac15\right) : 2 + \dfrac25 = 1$

Paranteza: $1 + \dfrac15 = \dfrac55 + \dfrac15 = \dfrac65$. Împărțirea la 2 înseamnă înmulțirea cu $\dfrac12$: $\dfrac65 : 2 = \dfrac35$.

$$\frac35 + \frac25 = \frac55 = 1.$$

*Barem: 3p calculul parantezei și al împărțirii, 2p finalizarea.*

### 2. $f(x) = 4 - 2x$: determinați $a$ cu $f(a) = 2\cdot f(1)$

$f(1) = 4 - 2 = 2$, deci $2f(1) = 4$; $f(a) = 4 - 2a$.

$$4 - 2a = 4 \iff -2a = 0 \iff a = 0.$$

**Răspuns:** $a = 0$. *Barem: 3p $f(1)$ și $f(a)$, 2p rezolvarea ecuației.*

### 3. Ecuația $\sqrt{6x + 7} = 5$

**Condiție:** $6x + 7 \ge 0$, adică $x \ge -\dfrac76$. Membrul drept, 5, e pozitiv, deci putem ridica la pătrat:

$$6x + 7 = 25 \iff 6x = 18 \iff x = 3.$$

**Verificare:** $\sqrt{18 + 7} = \sqrt{25} = 5$ ✔.

**Răspuns:** $x = 3$. *Barem: 3p ridicarea la pătrat, 2p soluția care convine.*

### 4. Probabilitatea ca un număr din $A = \{11, 12, \dots, 20\}$ să fie multiplu de 4

Cazuri posibile: mulțimea are 10 elemente.

Multiplii lui 4 din $A$: $12, 16, 20$ — deci 3 cazuri favorabile.

$$p = \frac{3}{10}.$$

**Răspuns:** $p = \dfrac{3}{10}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(4, 0)$, $B(2, 6)$, $C$ mijlocul lui $AB$: arătați că $OC = 3\sqrt2$

$$C\left(\frac{4 + 2}{2}, \frac{0 + 6}{2}\right) = C(3, 3).$$

$$OC = \sqrt{(3 - 0)^2 + (3 - 0)^2} = \sqrt{18} = \sqrt{9\cdot 2} = 3\sqrt2.$$

*Barem: 2p coordonatele lui $C$, 3p distanța $OC$.*

### 6. Arătați că $2(\sin 60^\circ)^2 + \sin 45^\circ\cdot\cos 45^\circ = 2$

Valorile tabelare: $\sin 60^\circ = \dfrac{\sqrt3}{2}$, $\sin 45^\circ = \cos 45^\circ = \dfrac{\sqrt2}{2}$.

$$2\left(\frac{\sqrt3}{2}\right)^2 + \frac{\sqrt2}{2}\cdot\frac{\sqrt2}{2} = 2\cdot\frac34 + \frac24 = \frac32 + \frac12 = 2.$$

*Barem: 3p valorile trigonometrice, 2p calculul final.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricea $M(a) = \begin{pmatrix} 2a & a - 1 \\ a + 1 & a + 3 \end{pmatrix}$

#### a) $\det(M(2)) = 17$

$$M(2) = \begin{pmatrix} 4 & 1 \\ 3 & 5 \end{pmatrix}, \qquad \det(M(2)) = 4\cdot5 - 1\cdot3 = 20 - 3 = 17.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $4M(2) - M(5) = 3M(1)$

$$M(5) = \begin{pmatrix} 10 & 4 \\ 6 & 8 \end{pmatrix}, \quad 4M(2) = \begin{pmatrix} 16 & 4 \\ 12 & 20 \end{pmatrix} \Rightarrow 4M(2) - M(5) = \begin{pmatrix} 6 & 0 \\ 6 & 12 \end{pmatrix}.$$

$$M(1) = \begin{pmatrix} 2 & 0 \\ 2 & 4 \end{pmatrix} \Rightarrow 3M(1) = \begin{pmatrix} 6 & 0 \\ 6 & 12 \end{pmatrix}.$$

Matricele coincid. *Barem: 3p calculul diferenței, 2p finalizarea.*

#### c) $N = \det\big(M(0)\cdot M(n) - M(1)\cdot M(0)\big)$ este pătrat perfect pentru orice $n \in \mathbb N$

Avem $M(0) = \begin{pmatrix} 0 & -1 \\ 1 & 3 \end{pmatrix}$, $M(n) = \begin{pmatrix} 2n & n - 1 \\ n + 1 & n + 3 \end{pmatrix}$, $M(1) = \begin{pmatrix} 2 & 0 \\ 2 & 4 \end{pmatrix}$.

Primul produs (linie cu coloană):

$$M(0)\cdot M(n) = \begin{pmatrix} 0\cdot 2n - (n+1) & 0\cdot(n-1) - (n+3) \\ 2n + 3(n+1) & (n - 1) + 3(n + 3) \end{pmatrix} = \begin{pmatrix} -n - 1 & -n - 3 \\ 5n + 3 & 4n + 8 \end{pmatrix}.$$

Al doilea produs:

$$M(1)\cdot M(0) = \begin{pmatrix} 2\cdot0 + 0\cdot1 & 2\cdot(-1) + 0\cdot3 \\ 2\cdot0 + 4\cdot1 & 2\cdot(-1) + 4\cdot3 \end{pmatrix} = \begin{pmatrix} 0 & -2 \\ 4 & 10 \end{pmatrix}.$$

Diferența: $\begin{pmatrix} -n - 1 & -n - 1 \\ 5n - 1 & 4n - 2 \end{pmatrix}$.

Prima linie are elementele egale, deci scoatem factorul comun $(-n - 1)$:

$$N = (-n-1)(4n-2) - (-n-1)(5n-1) = (-n-1)\big[(4n - 2) - (5n - 1)\big] = (-n-1)(-n-1) = (n+1)^2.$$

Cum $n + 1$ este număr natural, $N$ este pătratul unui număr natural pentru orice $n \in \mathbb N$. $\blacksquare$

*Barem: 2p calculul matricei, 3p determinantul și concluzia.*

### 2. Legea $x \circ y = 3x - 2y + xy$

#### a) $2 \circ 2 = 6$

$$2 \circ 2 = 3\cdot2 - 2\cdot2 + 2\cdot2 = 6 - 4 + 4 = 6.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $3 \circ x = 3$

Atenție la ordine: legea nu e comutativă, aici $3$ este primul operand. $3 \circ x = 9 - 2x + 3x = 9 + x$.

$$9 + x = 3 \iff x = -6.$$

**Răspuns:** $x = -6$. *Barem: 3p expresia $9 + x$, 2p soluția.*

#### c) Numerele întregi $m$ cu $(-m) \circ m > m \circ m$

$$(-m) \circ m = -3m - 2m - m^2 = -5m - m^2, \qquad m \circ m = 3m - 2m + m^2 = m + m^2.$$

Inecuația: $-5m - m^2 > m + m^2 \iff 2m^2 + 6m < 0 \iff m^2 + 3m < 0 \iff m(m + 3) < 0$.

Trinomul $m(m+3)$ are rădăcinile $-3$ și $0$ și este negativ strict între ele: $m \in (-3, 0)$. Numerele întregi din acest interval sunt $-2$ și $-1$.

**Răspuns:** $m \in \{-2, -1\}$. *Barem: 2p expresiile, 3p rezolvarea inecuației în $\mathbb Z$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x^3 + 3x^2 - 24x + 21$

#### a) $f'(x) = 3(x - 2)(x + 4)$

$$f'(x) = 3x^2 + 6x - 24 = 3(x^2 + 2x - 8).$$

Trinomul $x^2 + 2x - 8$ are $\Delta = 4 + 32 = 36$ și rădăcinile $x_{1,2} = \dfrac{-2 \pm 6}{2}$, adică $2$ și $-4$. Deci $f'(x) = 3(x - 2)(x + 4)$. *Barem: 2p derivarea, 3p descompunerea.*

#### b) $\lim\limits_{x\to1}\dfrac{x^3 - f(x)}{x^2 - x} = 18$

$x^3 - f(x) = -3x^2 + 24x - 21 = -3(x^2 - 8x + 7) = -3(x - 1)(x - 7)$, iar $x^2 - x = x(x - 1)$. Pentru $x = 1$ ambele se anulează (nedeterminare $\frac00$), așa că simplificăm cu $x - 1$:

$$\lim_{x\to1}\frac{-3(x - 1)(x - 7)}{x(x - 1)} = \lim_{x\to1}\frac{-3(x - 7)}{x} = \frac{-3\cdot(-6)}{1} = 18.$$

*Barem: 3p descompunerea, 2p calculul limitei.*

#### c) $-28 \le x^3 + 3x^2 - 24x \le 80$ pentru orice $x \in [-4, 3]$

Observăm că $x^3 + 3x^2 - 24x = f(x) - 21$, deci e suficient să arătăm $-7 \le f(x) \le 101$ pe $[-4, 3]$.

Din a), $f'(x) = 0 \iff x \in \{-4, 2\}$. Pe $[-4, 2]$: $x - 2 \le 0$, $x + 4 \ge 0$, deci $f'(x) \le 0$ și $f$ e descrescătoare; pe $[2, 3]$: $f'(x) \ge 0$, deci $f$ e crescătoare.

| $x$ | $-4$ | | $2$ | | $3$ |
|---|---|---|---|---|---|
| $f'(x)$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $101$ | ↘ | $-7$ | ↗ | $3$ |

Valorile: $f(-4) = -64 + 48 + 96 + 21 = 101$, $f(2) = 8 + 12 - 48 + 21 = -7$, $f(3) = 27 + 27 - 72 + 21 = 3$.

Minimul pe interval este $f(2) = -7$, iar maximul este $\max\{f(-4), f(3)\} = 101$. Deci $-7 \le f(x) \le 101$ și, scăzând 21, $-28 \le x^3 + 3x^2 - 24x \le 80$ pentru orice $x \in [-4, 3]$. $\blacksquare$

*Barem: 3p monotonia, 2p valorile și concluzia.*

### 2. $f(x) = 5x - 4$

#### a) $\displaystyle\int_{-1}^1 \big(f(x) + 4\big)\,dx = 0$

$f(x) + 4 = 5x$:

$$\int_{-1}^1 5x\,dx = \frac{5x^2}{2}\Big|_{-1}^1 = \frac52 - \frac52 = 0.$$

(Era de așteptat: funcția $5x$ este impară, iar intervalul e simetric față de 0.) *Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^4 \frac{1}{\sqrt{f(x)}}\,dx = \frac65$

Pe $[1, 4]$, $5x - 4 \ge 1 > 0$, deci radicalul e definit. Știm că $\left(\sqrt{u}\right)' = \dfrac{u'}{2\sqrt u}$; cu $u = 5x - 4$, $u' = 5$, avem $\left(\sqrt{5x - 4}\right)' = \dfrac{5}{2\sqrt{5x - 4}}$, deci o primitivă a lui $\dfrac{1}{\sqrt{5x-4}}$ este $\dfrac25\sqrt{5x - 4}$:

$$\int_1^4 \frac{dx}{\sqrt{5x - 4}} = \frac25\sqrt{5x - 4}\Big|_1^4 = \frac25\left(\sqrt{16} - \sqrt1\right) = \frac25\cdot 3 = \frac65.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $a$ real cu $\displaystyle\int_1^e \frac{f(ax)}{x}\ln x\,dx = 8$

$f(ax) = 5ax - 4$, deci integrandul devine $\dfrac{5ax - 4}{x}\ln x = 5a\ln x - 4\cdot\dfrac{\ln x}{x}$. Separăm:

$$I = 5a\int_1^e \ln x\,dx - 4\int_1^e \frac{\ln x}{x}\,dx.$$

**Prima integrală** (prin părți, $u = \ln x$, $v' = 1$): $\int \ln x\,dx = x\ln x - x$, deci

$$\int_1^e \ln x\,dx = (e\cdot 1 - e) - (1\cdot 0 - 1) = 1.$$

**A doua integrală**: $\dfrac{\ln x}{x} = (\ln x)'\cdot\ln x$, cu primitiva $\dfrac{\ln^2 x}{2}$:

$$\int_1^e \frac{\ln x}{x}\,dx = \frac{\ln^2 x}{2}\Big|_1^e = \frac12 - 0 = \frac12.$$

Deci $I = 5a\cdot 1 - 4\cdot\dfrac12 = 5a - 2$. Condiția $5a - 2 = 8$ dă $a = 2$.

**Răspuns:** $a = 2$. *Barem: 2p separarea integralei, 3p calculul și determinarea lui $a$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 0$ |
| I.3 | $x = 3$ |
| I.4 | $p = \tfrac{3}{10}$ |
| I.5 | $C(3,3)$, $OC = 3\sqrt2$ |
| II.1.c | $N = (n+1)^2$ |
| II.2.b | $x = -6$ |
| II.2.c | $m \in \{-2, -1\}$ |
| III.1.c | $-7 \le f(x) \le 101$ pe $[-4,3]$ |
| III.2.c | $a = 2$ |

## Ce merită reținut din varianta 5

- **Legi necomutative**: ordinea operanzilor contează — la $3 \circ x$, $x$ este al doilea operand.
- **Pătrat perfect din determinant**: când o linie are elemente egale, scoate factorul comun înainte să înmulțești.
- **Inegalități pe un interval închis**: valorile funcției la capete și în punctele critice dau minimul și maximul.
- **Integrale cu $\ln x$**: $\int_1^e \ln x\,dx = 1$ și $\int_1^e \frac{\ln x}{x}\,dx = \frac12$ apar foarte des.
