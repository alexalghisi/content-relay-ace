Rezolvarea completă a subiectului de **Bacalaureat 2014 la Matematică M_mate-info**, sesiunea de rezervă, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z = 1 + i$; $z^2$

$z^2 = 1 + 2i + i^2 = 2i$. **Răspuns:** $2i$. *Barem: 2p, 3p.*

### 2. Parabola lui $f(x) = x^2 - 4x + 6$ nu intersectează $Ox$

$\Delta = 16 - 24 = -8 < 0$, deci ecuația $f(x) = 0$ nu are soluții reale. *Barem: 3p, 2p.*

### 3. $\log_2(2x - 3) = \log_2(x + 1)$

$2x - 3 = x + 1 \iff x = 4$; verificare: $5 = 5 > 0$ ✔.

**Răspuns:** $x = 4$. *Barem: 2p, 3p.*

### 4. Probabilitatea ca un număr de două cifre să fie impar

45 de numere impare ($11, 13, \dots, 99$) din 90.

**Răspuns:** $p = \dfrac12$. *Barem: 2p, 1p, 2p.*

### 5. $M, N, P$ mijloacele laturilor: $\vec{AM} + \vec{BN} + \vec{CP} = \vec0$

$\vec{AM} = \frac12\vec{AB}$, $\vec{BN} = \frac12\vec{BC}$, $\vec{CP} = \frac12\vec{CA}$, deci suma este

$$\frac12\left(\vec{AB} + \vec{BC} + \vec{CA}\right) = \frac12\vec{AA} = \vec0.$$

*Barem: 2p, 3p.*

### 6. $\operatorname{tg} a = \sqrt3$: $\dfrac{\sin a - \cos a}{\cos a + \sin a} = 2 - \sqrt3$

Împărțim numărătorul și numitorul la $\cos a \ne 0$:

$$\frac{\operatorname{tg} a - 1}{1 + \operatorname{tg} a} = \frac{\sqrt3 - 1}{\sqrt3 + 1} = \frac{(\sqrt3 - 1)^2}{2} = \frac{4 - 2\sqrt3}{2} = 2 - \sqrt3.$$

*Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix} 1 & 1 & 1\\ 1 & a & 2\\ 1 & 2 & a\end{pmatrix}$

#### a) $\det(A(1)) = -1$

$$\begin{vmatrix} 1 & 1 & 1\\ 1 & 1 & 2\\ 1 & 2 & 1\end{vmatrix} = 1 + 2 + 2 - 1 - 4 - 1 = -1.$$

*Barem: 2p, 3p.*

#### b) $m$ cu $\det(A(m)) = 0$

$$\det(A(m)) = m^2 + 2 + 2 - m - 4 - m = m^2 - 2m.$$

**Răspuns:** $m \in \{0, 2\}$. *Barem: 3p, 2p.*

#### c) $a$ cu $A(a)A(a) - A(a^2) = \begin{pmatrix} 2 & 1 & 1\\ 1 & 5 & -5\\ 1 & -5 & 5\end{pmatrix}$

$$A(a)^2 = \begin{pmatrix} 3 & a + 3 & a + 3\\ a + 3 & a^2 + 5 & 4a + 1\\ a + 3 & 4a + 1 & a^2 + 5\end{pmatrix}, \quad A(a)^2 - A(a^2) = \begin{pmatrix} 2 & a + 2 & a + 2\\ a + 2 & 5 & 4a - 1\\ a + 2 & 4a - 1 & 5\end{pmatrix}.$$

Egalând: $a + 2 = 1$ și $4a - 1 = -5$, ambele dând $a = -1$.

**Răspuns:** $a = -1$. *Barem: 3p, 2p.*

### 2. Legea $x * y = 3x + 3y - xy - 6$ (asociativă)

#### a) $1 * 3$

$3 + 9 - 3 - 6 = 3$. **Răspuns:** $3$. *Barem: 3p, 2p.*

#### b) $x * y = 3 - (x - 3)(y - 3)$

$3 - (xy - 3x - 3y + 9) = -xy + 3x + 3y - 6 = x * y$. *Barem: 2p, 3p.*

#### c) $\underbrace{x * x * \ldots * x}_{2014} = x$

Din b), $(x * y) - 3 = -(x - 3)(y - 3)$. Prin inducție, compunerea a $n$ copii ale lui $x$ dă $(-1)^{n-1}(x - 3)^n + 3$; pentru $n = 2014$: $3 - (x - 3)^{2014}$.

$$3 - (x - 3)^{2014} = x \iff (x - 3)^{2014} = -(x - 3).$$

Cu $t = x - 3$: $t(t^{2013} + 1) = 0 \iff t = 0$ sau $t = -1$.

**Răspuns:** $x \in \{2, 3\}$. *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x - 2}{x^2 - 4x + 5}$

#### a) $f'(x) = \dfrac{(1 - x)(x - 3)}{(x^2 - 4x + 5)^2}$

$$f'(x) = \frac{(x^2 - 4x + 5) - (x - 2)(2x - 4)}{(x^2 - 4x + 5)^2} = \frac{-x^2 + 4x - 3}{(x^2 - 4x + 5)^2} = \frac{(1 - x)(x - 3)}{(x^2 - 4x + 5)^2}.$$

*Barem: 2p, 3p.*

#### b) Asimptota spre $+\infty$

$\lim\limits_{x\to+\infty}\dfrac{x - 2}{x^2 - 4x + 5} = 0$ (gradul numitorului mai mare).

**Răspuns:** $y = 0$. *Barem: 3p, 2p.*

#### c) Monotonia

$f'(x) = 0 \iff x \in \{1, 3\}$; $(1 - x)(x - 3) \ge 0$ doar între rădăcini.

**Răspuns:** $f$ descrescătoare pe $(-\infty, 1]$, crescătoare pe $[1, 3]$, descrescătoare pe $[3, +\infty)$. *Barem: 2p, 1p, 1p, 1p.*

### 2. $I_n = \displaystyle\int_1^e x\ln^n x\,dx$

#### a) $I_1 = \dfrac{e^2 + 1}{4}$

$$I_1 = \frac{x^2}{2}\ln x\Big|_1^e - \int_1^e\frac{x}{2}dx = \frac{e^2}{2} - \frac{e^2 - 1}{4} = \frac{e^2 + 1}{4}.$$

*Barem: 3p, 2p.*

#### b) $I_{n+1} \le I_n$

$$I_{n+1} - I_n = \int_1^e x\ln^n x(\ln x - 1)\,dx \le 0,$$

căci pe $[1, e]$: $\ln x \in [0, 1]$, deci $\ln^n x \ge 0$ și $\ln x - 1 \le 0$. $\blacksquare$ *Barem: 2p, 3p.*

#### c) $2I_{n+1} + (n + 1)I_n = e^2$

Prin părți ($u = \ln^{n+1}x$, $v' = x$):

$$I_{n+1} = \frac{x^2}{2}\ln^{n+1}x\Big|_1^e - \int_1^e\frac{x^2}{2}\cdot\frac{(n+1)\ln^n x}{x}dx = \frac{e^2}{2} - \frac{n+1}{2}I_n.$$

Înmulțind cu 2: $2I_{n+1} + (n + 1)I_n = e^2$. $\blacksquare$ *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $z^2 = 2i$ |
| I.3 | $x = 4$ |
| I.4 | $p = \tfrac12$ |
| II.1.a | $-1$ |
| II.1.b | $m \in \{0, 2\}$ |
| II.1.c | $a = -1$ |
| II.2.a | $3$ |
| II.2.c | $x \in \{2, 3\}$ |
| III.1.b | $y = 0$ |
| III.2.a | $\tfrac{e^2+1}{4}$ |

## Ce merită reținut din varianta 3

- **Legea $3 - (x-3)(y-3)$**: compunerea repetată dă $3 + (-1)^{n-1}(x-3)^n$ — atenție la semn.
- **Raport cu $\sin$ și $\cos$**: împarte la $\cos a$ ca să lucrezi cu $\operatorname{tg} a$.
- **Integrale cu $\ln^n x$**: pe $[1, e]$, $0 \le \ln x \le 1$, deci șirul este descrescător.
