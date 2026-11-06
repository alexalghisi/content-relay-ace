Rezolvarea completă a subiectului de **Bacalaureat 2010 la Matematică (M2 — filiera tehnologică / științe ale naturii)**, sesiunea august–septembrie, **varianta 6**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $x \in \mathbb Z$ cu $-1 \le \dfrac{x+1}{3} \le 1$

$$-3 \le x + 1 \le 3 \iff -4 \le x \le 2.$$

**Răspuns:** $x \in \{-4, -3, -2, -1, 0, 1, 2\}$. *Barem: 2p, 2p, 1p.*

### 2. Funcția de gradul al doilea cu graficul prin $A(0,0)$, $B(2,2)$, $C(-1,2)$

$f(x) = ax^2 + bx + c$:

$$f(0) = 0 \Rightarrow c = 0, \quad f(2) = 2 \Rightarrow 4a + 2b = 2, \quad f(-1) = 2 \Rightarrow a - b = 2.$$

Din $2a + b = 1$ și $a - b = 2$: $3a = 3$, $a = 1$, $b = -1$.

**Răspuns:** $f(x) = x^2 - x$. *Barem: 3p sistemul, 2p funcția.*

### 3. $\log_2(x + 3) - \log_2 x = 2$

Condiții: $x > 0$. $\log_2\dfrac{x+3}{x} = 2 \iff \dfrac{x+3}{x} = 4 \iff x + 3 = 4x \iff x = 1$.

**Răspuns:** $x = 1$. *Barem: 1p, 2p, 2p.*

### 4. Probabilitatea ca $n \in \{1, 2, 3, 4\}$ să verifice $2^n \ge n^2$

| $n$ | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| $2^n$ | 2 | 4 | 8 | 16 |
| $n^2$ | 1 | 4 | 9 | 16 |

Inegalitatea are loc pentru $n \in \{1, 2, 4\}$: 3 cazuri favorabile din 4.

**Răspuns:** $p = \dfrac34$. *Barem: 1p, 1p, 2p, 1p.*

### 5. $A(2,0)$, $B(1,-1)$: $C$ cu $\vec{OC} = 2\vec{OA} + \vec{OB}$

$$2\vec{OA} + \vec{OB} = 4\vec i + \vec i - \vec j = 5\vec i - \vec j.$$

**Răspuns:** $C(5, -1)$. *Barem: 3p, 2p.*

### 6. Raza cercului circumscris: $AB = 6$, $m(\angle ACB) = 30^\circ$

Teorema sinusurilor: $\dfrac{AB}{\sin C} = 2R$, deci $R = \dfrac{6}{2\cdot\frac12} = 6$.

**Răspuns:** $R = 6$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 1 & 0 & 0\\ 0 & 1 & 0\\ 1 & 0 & 1\end{pmatrix}$

#### a) $\det(A)$

Matrice inferior triunghiulară: $\det A = 1\cdot1\cdot1 = 1$. *Barem: 3p, 2p.*

#### b) Verificați că $A^{-1} = \begin{pmatrix} 1 & 0 & 0\\ 0 & 1 & 0\\ -1 & 0 & 1\end{pmatrix}$

$$A\cdot\begin{pmatrix} 1 & 0 & 0\\ 0 & 1 & 0\\ -1 & 0 & 1\end{pmatrix} = \begin{pmatrix} 1 & 0 & 0\\ 0 & 1 & 0\\ 1 - 1 & 0 & 1\end{pmatrix} = I_3,$$

și analog produsul în ordine inversă dă $I_3$. Deci da, este inversa. *Barem: 2p + 2p + 1p.*

#### c) $A\cdot X = \begin{pmatrix} 1 & 1 & 1\\ 2 & 2 & 2\\ 3 & 3 & 3\end{pmatrix}$

Înmulțim la stânga cu $A^{-1}$:

$$X = \begin{pmatrix} 1 & 0 & 0\\ 0 & 1 & 0\\ -1 & 0 & 1\end{pmatrix}\begin{pmatrix} 1 & 1 & 1\\ 2 & 2 & 2\\ 3 & 3 & 3\end{pmatrix} = \begin{pmatrix} 1 & 1 & 1\\ 2 & 2 & 2\\ 2 & 2 & 2\end{pmatrix}.$$

(Linia a treia: $-1 + 3 = 2$.) *Barem: 3p, 2p.*

### 2. $f \in \mathbb Z_3[X]$, $f = X^3 + \hat2X^2$; $G = \{aX^3 + bX^2 + cX + d \mid a, b, c, d \in \mathbb Z_3\}$

#### a) $f(\hat1)$

$f(\hat1) = \hat1 + \hat2 = \hat3 = \hat0$. *Barem: 2p, 3p.*

#### b) Rădăcinile lui $f$

$f = X^2(X + \hat2)$. Rădăcini: $X = \hat0$ și $X = -\hat2 = \hat1$.

**Răspuns:** $\hat0$ și $\hat1$. *Barem: 2p, 3p.*

#### c) Numărul elementelor lui $G$

Fiecare dintre $a, b, c, d$ ia 3 valori din $\mathbb Z_3$: $3^4 = 81$.

**Răspuns:** 81. *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:[0,1] \to \mathbb R$, $f(x) = \dfrac{e^x}{1 + x}$

#### a) $\dfrac{f'(x)}{f(x)} = \dfrac{x}{x+1}$

$$f'(x) = \frac{e^x(1 + x) - e^x}{(1 + x)^2} = \frac{xe^x}{(x + 1)^2}, \qquad \frac{f'(x)}{f(x)} = \frac{xe^x}{(x+1)^2}\cdot\frac{x + 1}{e^x} = \frac{x}{x+1}.$$

*Barem: 3p, 2p.*

#### b) $f$ crescătoare pe $[0,1]$

$f'(x) = \dfrac{xe^x}{(x+1)^2} \ge 0$ pentru $x \in [0,1]$. *Barem: 2p, 3p.*

#### c) $\dfrac2e \le \dfrac{1}{f(x)} \le 1$

Din b): $f(0) \le f(x) \le f(1)$, adică $1 \le f(x) \le \dfrac e2$. Trecând la inverse (numere pozitive): $\dfrac2e \le \dfrac{1}{f(x)} \le 1$. $\blacksquare$ *Barem: 2p, 3p.*

### 2. $f(x) = \begin{cases}\sqrt{x^2 + 3}, & x \ge 1\\ 2x, & x < 1\end{cases}$

#### a) $f$ admite primitive pe $\mathbb R$

$\lim\limits_{x\nearrow1}2x = 2$, $\lim\limits_{x\searrow1}\sqrt{x^2+3} = 2 = f(1)$: $f$ continuă în 1, deci continuă pe $\mathbb R$ și admite primitive. *Barem: 3p, 2p.*

#### b) Volumul corpului obținut prin rotația graficului lui $g = f|_{[1,2]}$

$$V = \pi\int_1^2(x^2 + 3)\,dx = \pi\left(\frac{x^3}{3} + 3x\right)\Big|_1^2 = \pi\left(\frac83 + 6 - \frac13 - 3\right) = \frac{16\pi}{3}.$$

**Răspuns:** $\dfrac{16\pi}{3}$. *Barem: 1p, 3p, 1p.*

#### c) $\displaystyle\int_1^{\sqrt6} x f(x)\,dx$

Pe $[1, \sqrt6]$: $\displaystyle\int_1^{\sqrt6}x\sqrt{x^2 + 3}\,dx$. Substituim $t = x^2 + 3$, $dt = 2x\,dx$, $t \in [4, 9]$:

$$\frac12\int_4^9\sqrt t\,dt = \frac12\cdot\frac23 t^{3/2}\Big|_4^9 = \frac13(27 - 8) = \frac{19}{3}.$$

**Răspuns:** $\dfrac{19}{3}$. *Barem: 1p, 4p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $\{-4, \dots, 2\}$ |
| I.2 | $f(x) = x^2 - x$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac34$ |
| I.5 | $C(5, -1)$ |
| I.6 | $R = 6$ |
| II.1.c | $X = \begin{pmatrix}1&1&1\\2&2&2\\2&2&2\end{pmatrix}$ |
| II.2.b | $\hat0$, $\hat1$ |
| II.2.c | 81 |
| III.2.b | $\tfrac{16\pi}{3}$ |
| III.2.c | $\tfrac{19}{3}$ |

## Ce merită reținut din varianta 6

- **Polinoame peste $\mathbb Z_n$**: $-\hat2 = \hat1$ în $\mathbb Z_3$; testează toate cele $n$ valori dacă ai dubii.
- **Ecuații matriceale $AX = B$**: $X = A^{-1}B$ (înmulțire la **stânga**).
- **$\int x\sqrt{x^2 + a}\,dx$**: substituția $t = x^2 + a$.
