Rezolvarea completă a subiectului de **Simulare Bacalaureat 2015 la Matematică M_mate-info** (clasa a XII-a). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Partea reală a lui $z = \dfrac{3 + 2i}{2 - 3i}$

$$z = \frac{(3 + 2i)(2 + 3i)}{4 + 9} = \frac{6 + 9i + 4i - 6}{13} = \frac{13i}{13} = i.$$

**Răspuns:** $\operatorname{Re} z = 0$. *Barem: 3p, 2p.*

### 2. $a$ pentru care graficul lui $f(x) = x^2 + x - a$ este tangent axei $Ox$

Tangență $\iff \Delta = 0$: $1 + 4a = 0 \iff a = -\dfrac14$.

**Răspuns:** $a = -\dfrac14$. *Barem: 2p, 3p.*

### 3. $2^{2x} + 3\cdot 4^x - 16 = 0$

$2^{2x} = 4^x$, deci $4\cdot 4^x = 16 \iff 4^x = 4 \iff x = 1$.

**Răspuns:** $x = 1$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca o submulțime cu două elemente a lui $\{1, \dots, 7\}$ să aibă un singur element par

Cazuri posibile: $C_7^2 = 21$. Pare: $2, 4, 6$ (3), impare: 4. Favorabile: $C_3^1\cdot C_4^1 = 12$.

**Răspuns:** $p = \dfrac{12}{21} = \dfrac47$. *Barem: 2p, 1p, 2p.*

### 5. Mediatoarea segmentului $MN$, $M(2,3)$, $N(4,1)$

Mijlocul $P(3, 2)$; $m_{MN} = -1$, deci mediatoarea are panta $1$: $y - 2 = x - 3$.

**Răspuns:** $y = x - 1$. *Barem: 2p, 1p, 2p.*

### 6. $(\sin x + \sin(\pi - x))^2 + (\cos x + \cos(2\pi - x))^2 = 4$

$\sin(\pi - x) = \sin x$, $\cos(2\pi - x) = \cos x$, deci expresia este

$$(2\sin x)^2 + (2\cos x)^2 = 4(\sin^2 x + \cos^2 x) = 4.$$

*Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} 0 & 0 & -1\\ x & 0 & 0\\ 0 & -1 & 0\end{pmatrix}$

#### a) $A(1) + A(-1) = 2A(0)$

$$A(1) + A(-1) = \begin{pmatrix} 0 & 0 & -2\\ 0 & 0 & 0\\ 0 & -2 & 0\end{pmatrix} = 2\begin{pmatrix} 0 & 0 & -1\\ 0 & 0 & 0\\ 0 & -1 & 0\end{pmatrix} = 2A(0).$$

*Barem: 3p, 2p.*

#### b) $\det(A(x) + I_3) = 0$

$$\det\begin{pmatrix} 1 & 0 & -1\\ x & 1 & 0\\ 0 & -1 & 1\end{pmatrix} = 1 + 0 + x - 0 - 0 - 0 = 1 + x.$$

**Răspuns:** $x = -1$. *Barem: 3p, 2p.*

#### c) $\det(aI_3 - bA(-1) + cA(-1)A(-1)) \ge 0$ pentru $a, b, c > 0$

$A(-1) = \begin{pmatrix} 0 & 0 & -1\\ -1 & 0 & 0\\ 0 & -1 & 0\end{pmatrix}$, $A(-1)^2 = \begin{pmatrix} 0 & 1 & 0\\ 0 & 0 & 1\\ 1 & 0 & 0\end{pmatrix}$. Atunci

$$aI_3 - bA(-1) + cA(-1)^2 = \begin{pmatrix} a & c & b\\ b & a & c\\ c & b & a\end{pmatrix},$$

cu determinantul

$$a^3 + b^3 + c^3 - 3abc = \frac12(a + b + c)\big[(a - b)^2 + (b - c)^2 + (c - a)^2\big] \ge 0. \ \blacksquare$$

*Barem: 2p, 1p, 2p.*

### 2. Pe $\mathbb Z$: $x * y = xy - 5x - 5y + 30$ (asociativă, cu element neutru)

#### a) $x * y = (x - 5)(y - 5) + 5$

$(x - 5)(y - 5) + 5 = xy - 5x - 5y + 25 + 5$. *Barem: 2p, 3p.*

#### b) Elementele simetrizabile

Neutrul: $(x - 5)(e - 5) + 5 = x$ pentru orice $x$ $\Rightarrow e = 6$. $x$ simetrizabil $\iff$ există $x' \in \mathbb Z$ cu $(x - 5)(x' - 5) = 1$, adică $x' = 5 + \dfrac{1}{x - 5}$ întreg $\iff x - 5 \in \{-1, 1\}$.

**Răspuns:** $x \in \{4, 6\}$. *Barem: 1p, 2p, 2p.*

#### c) $d_1 * d_2 * \dots * d_8$, divizorii naturali ai lui $2015$

$2015 = 5\cdot 13\cdot 31$ are $2^3 = 8$ divizori, printre care $5$. Cum $x * 5 = 5 * x = 5$ pentru orice $x$, iar legea e asociativă, rezultatul este $5$.

**Răspuns:** $5$. *Barem: 2p, 1p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(-1, +\infty) \to \mathbb R$, $f(x) = x - \ln(x + 1)$

#### a) $f'(x)$

$f'(x) = 1 - \dfrac{1}{x + 1} = \dfrac{x}{x+1}$. *Barem: 2p, 3p.*

#### b) $\lim\limits_{x\to1}\dfrac{x - f(x) - \ln2}{x - 1}$

$x - f(x) = \ln(x + 1)$, deci limita este derivata lui $\ln(x + 1)$ în $1$:

$$\lim_{x\to1}\frac{\ln(x + 1) - \ln 2}{x - 1} = \frac{1}{1 + 1} = \frac12.$$

**Răspuns:** $\dfrac12$. *Barem: 2p, 3p.*

#### c) $\ln(x + 1) \le x$ pe $(-1, +\infty)$

$f'(0) = 0$, $f' < 0$ pe $(-1, 0)$, $f' > 0$ pe $(0, +\infty)$: $x = 0$ este minim global, deci $f(x) \ge f(0) = 0$, adică $\ln(x + 1) \le x$. $\blacksquare$ *Barem: 3p, 2p.*

### 2. $f(x) = \dfrac{x}{x^2 + 1}$

#### a) $\displaystyle\int_0^1 f(x)\,dx$

$$\frac12\ln(x^2 + 1)\Big|_0^1 = \frac12\ln 2.$$

**Răspuns:** $\dfrac12\ln 2$. *Barem: 3p, 2p.*

#### b) $\displaystyle\int_0^1\frac{f(x) + x^2f(x)}{x^4 + 1}dx = \frac\pi8$

$f(x)(1 + x^2) = x$, deci integrandul este $\dfrac{x}{x^4 + 1}$. Cu $(x^2)' = 2x$:

$$\int_0^1\frac{x}{(x^2)^2 + 1}dx = \frac12\operatorname{arctg}(x^2)\Big|_0^1 = \frac12\cdot\frac\pi4 = \frac\pi8.$$

*Barem: 2p, 3p.*

#### c) $\lim\limits_{x\to1}\dfrac{1}{x - 1}\displaystyle\int_1^x f(t)\,dt$

Cazul $\frac00$; cu l'Hospital, $\left(\int_1^x f(t)\,dt\right)' = f(x)$, deci limita este $f(1) = \dfrac12$.

**Răspuns:** $\dfrac12$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $0$ |
| I.2 | $a = -\tfrac14$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac47$ |
| I.5 | $y = x - 1$ |
| II.1.b | $x = -1$ |
| II.2.b | $x \in \{4, 6\}$ |
| II.2.c | $5$ |
| III.1.b | $\tfrac12$ |
| III.2.a | $\tfrac12\ln2$ |
| III.2.c | $\tfrac12$ |

## Ce merită reținut din simulare

- **Matrice circulantă** $\begin{pmatrix}a&c&b\\b&a&c\\c&b&a\end{pmatrix}$: determinantul $= a^3 + b^3 + c^3 - 3abc \ge 0$ pentru numere pozitive.
- **Simetrizabile în $\mathbb Z$**: $(x-5)(x'-5) = 1$ are doar soluțiile $\pm1$.
- **Inegalitatea clasică $\ln(1+x) \le x$** se obține din minimul lui $x - \ln(1+x)$.
