Rezolvarea completă a subiectului de **Simulare Bacalaureat 2016 la Matematică M_mate-info** (clasa a XII-a). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $a, b$ reali cu $(a + b)(i + 1) = (a - b + 1)(i - 1)$

Dezvoltăm: $(a + b) + (a + b)i = -(a - b + 1) + (a - b + 1)i$. Identificăm:

- părțile reale: $a + b = -a + b - 1 \Rightarrow a = -\dfrac12$;
- părțile imaginare: $a + b = a - b + 1 \Rightarrow b = \dfrac12$.

**Răspuns:** $a = -\dfrac12$, $b = \dfrac12$. *Barem: 3p, 2p.*

### 2. $m$ pentru care $f(x) = x^2 - mx + 1$ are valoarea minimă $-3$

$$-\frac{\Delta}{4a} = -\frac{m^2 - 4}{4} = -3 \iff m^2 = 16 \iff m = \pm4.$$

**Răspuns:** $m \in \{-4, 4\}$. *Barem: 2p, 3p.*

### 3. $\log_3 x = \log_x 3$

Condiții: $x > 0$, $x \ne 1$. $\log_x 3 = \dfrac{1}{\log_3 x}$, deci $(\log_3 x)^2 = 1 \iff \log_3 x = \pm1$.

**Răspuns:** $x \in \left\{\dfrac13, 3\right\}$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr de două cifre să aibă ambele cifre pătrate perfecte

Cifrele pătrate perfecte: $0, 1, 4, 9$. Zecile (nenule): 3 variante, unitățile: 4 — $12$ favorabile din 90.

**Răspuns:** $p = \dfrac{12}{90} = \dfrac2{15}$. *Barem: 1p, 2p, 2p.*

### 5. $A(-1, a)$, $B(0, -3)$, $C(1, 1)$ cu $AB + BC = AC$

Egalitatea înseamnă că $B$ se află pe segmentul $AC$; în particular punctele sunt coliniare: $m_{AB} = m_{BC}$.

$$\frac{-3 - a}{0 + 1} = \frac{1 + 3}{1 - 0} \iff -3 - a = 4 \iff a = -7.$$

(Abscisa lui $B$, $0$, este între $-1$ și $1$, deci $B$ chiar se află între $A$ și $C$.)

**Răspuns:** $a = -7$. *Barem: 2p, 3p.*

### 6. $a \in (0, \pi)$ cu $\left(\sin\frac\pi7 - \cos a\right)^2 + \left(\cos\frac\pi7 - \sin a\right)^2 = 2$

Dezvoltând și folosind $\sin^2 + \cos^2 = 1$:

$$2 - 2\left(\sin\tfrac\pi7\cos a + \cos\tfrac\pi7\sin a\right) = 2 \iff \sin\left(\tfrac\pi7 + a\right) = 0.$$

Pentru $a \in (0, \pi)$, $\frac\pi7 + a \in \left(\frac\pi7, \frac{8\pi}7\right)$, deci $\frac\pi7 + a = \pi$.

**Răspuns:** $a = \dfrac{6\pi}{7}$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(m) = \begin{pmatrix} 2 & 1 & m\\ m & m & 1\\ 1 & m & 1\end{pmatrix}$

#### a) $\det(A(1))$

$A(1)$ are liniile a doua și a treia egale ($1, 1, 1$), deci $\det = 0$. *Barem: 3p, 2p.*

#### b) $m$ pentru care $A(m)$ e inversabilă

Sarrus: $\det A(m) = 2m + 1 + m^3 - m^2 - 2m - m = m^3 - m^2 - m + 1 = (m - 1)^2(m + 1)$.

**Răspuns:** $m \in \mathbb R\setminus\{-1, 1\}$. *Barem: 2p, 3p.*

#### c) $X\cdot A(0) = \begin{pmatrix} 2 & 1 & 0\\ -1 & 3 & 2\end{pmatrix}$

$A(0) = \begin{pmatrix} 2 & 1 & 0\\ 0 & 0 & 1\\ 1 & 0 & 1\end{pmatrix}$, $\det A(0) = 1$, iar

$$A(0)^{-1} = \begin{pmatrix} 0 & -1 & 1\\ 1 & 2 & -2\\ 0 & 1 & 0\end{pmatrix}$$

(se verifică $A(0)\cdot A(0)^{-1} = I_3$). Înmulțim la **dreapta**:

$$X = \begin{pmatrix} 2 & 1 & 0\\ -1 & 3 & 2\end{pmatrix}A(0)^{-1} = \begin{pmatrix} 1 & 0 & 0\\ 3 & 9 & -7\end{pmatrix}.$$

*Barem: 3p, 2p.*

### 2. Legea $x * y = xy - 4x - 4y + 20$ (asociativă)

#### a) $x * y = (x - 4)(y - 4) + 4$

$(x - 4)(y - 4) + 4 = xy - 4x - 4y + 16 + 4$. *Barem: 2p, 3p.*

#### b) $1 * 2 * 3 * \ldots * 2016$

$x * 4 = 4 * x = 4$, deci $\big((1 * 2 * 3) * 4\big) * (5 * \ldots * 2016) = 4$.

**Răspuns:** $4$. *Barem: 2p, 3p.*

#### c) $a < b < c$ naturale cu $a * b * c = 66$

$a * b * c = (a - 4)(b - 4)(c - 4) + 4$, deci $(a - 4)(b - 4)(c - 4) = 62 = 2\cdot31$. Factorii sunt întregi distincți, crescători, fiecare $\ge -4$. Variantele posibile: $(1, 2, 31)$ și $(-2, -1, 31)$.

**Răspuns:** $(a, b, c) \in \{(5, 6, 35), (2, 3, 35)\}$. *Barem: 1p, 2p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R\setminus\{-1, 0\} \to \mathbb R$, $f(x) = \dfrac{1}{x(x+1)}$

#### a) Asimptota orizontală spre $+\infty$

$\lim\limits_{x\to+\infty}\dfrac{1}{x(x+1)} = 0$. **Răspuns:** $y = 0$. *Barem: 3p, 2p.*

#### b) Punctul în care tangenta e paralelă cu $Ox$

$f'(x) = -\dfrac{2x + 1}{x^2(x+1)^2} = 0 \iff x = -\dfrac12$, iar $f\left(-\frac12\right) = \dfrac{1}{-\frac12\cdot\frac12} = -4$.

**Răspuns:** $\left(-\dfrac12, -4\right)$. *Barem: 3p, 2p.*

#### c) $\lim\limits_{n\to\infty}\big(f(1) + f(2) + \ldots + f(n)\big)^n$

$f(k) = \dfrac1k - \dfrac1{k+1}$, deci suma telescopează la $1 - \dfrac{1}{n+1} = \dfrac{n}{n+1}$. Atunci

$$\lim_{n\to\infty}\left(1 - \frac{1}{n+1}\right)^n = e^{\lim\frac{-n}{n+1}} = e^{-1}.$$

**Răspuns:** $\dfrac1e$. *Barem: 3p, 2p.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = \dfrac{\ln x}{x}$

#### a) $\displaystyle\int_2^4\frac{1}{\ln x}f(x)\,dx$

$$\int_2^4\frac1x\,dx = \ln 4 - \ln 2 = \ln 2.$$

**Răspuns:** $\ln 2$. *Barem: 3p, 2p.*

#### b) $\displaystyle\int_1^e\frac{f(x)}{x}dx = 1 - \frac2e$

Prin părți cu $v = -\frac1x$:

$$\int_1^e\frac{\ln x}{x^2}dx = -\frac{\ln x}{x}\Big|_1^e + \int_1^e\frac{1}{x^2}dx = -\frac1e + \left(1 - \frac1e\right) = 1 - \frac2e.$$

*Barem: 3p, 2p.*

#### c) $\lim\limits_{n\to\infty}\displaystyle\int_1^e\frac{f(x)}{x^n}dx = 0$

Pe $[1, e]$, $0 \le \ln x \le 1$, deci $0 \le \dfrac{\ln x}{x^{n+1}} \le \dfrac{1}{x^{n+1}}$ și

$$0 \le \int_1^e\frac{f(x)}{x^n}dx \le \int_1^e x^{-n-1}dx = \frac1n\left(1 - \frac1{e^n}\right) \to 0.$$

Criteriul cleștelui încheie. $\blacksquare$ *Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a = -\tfrac12$, $b = \tfrac12$ |
| I.2 | $m = \pm4$ |
| I.3 | $x \in \{\tfrac13, 3\}$ |
| I.4 | $p = \tfrac2{15}$ |
| I.5 | $a = -7$ |
| I.6 | $a = \tfrac{6\pi}{7}$ |
| II.1.a | $0$ |
| II.1.b | $m \notin \{-1, 1\}$ |
| II.1.c | $X = \begin{pmatrix}1&0&0\\3&9&-7\end{pmatrix}$ |
| II.2.b | $4$ |
| II.2.c | $(5,6,35)$, $(2,3,35)$ |
| III.1.b | $(-\tfrac12, -4)$ |
| III.1.c | $\tfrac1e$ |
| III.2.a | $\ln2$ |

## Ce merită reținut din simulare

- **$X\cdot A = B \Rightarrow X = B\cdot A^{-1}$** — înmulțirea se face la **dreapta**.
- **$AB + BC = AC$** înseamnă că $B$ e pe segmentul $AC$.
- **Ecuații de tip $(m-4)(n-4)(p-4) = k$ în $\mathbb N$**: descompune $k$ în factori și ține cont de margini (factorii $\ge -4$).
- **$\left(1 - \frac1{n+1}\right)^n \to \frac1e$.**
