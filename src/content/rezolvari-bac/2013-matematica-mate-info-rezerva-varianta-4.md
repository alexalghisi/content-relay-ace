Rezolvarea completă a subiectului de **Bacalaureat 2013 la Matematică M_mate-info**, sesiunea de rezervă, **varianta 4**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Suma primilor trei termeni, $a_1 = 2$, $a_3 = 8$

$$S_3 = \frac{(a_1 + a_3)\cdot3}{2} = \frac{10\cdot3}{2} = 15.$$

*Barem: 3p + 2p.*

### 2. Vârful parabolei $f(x) = x^2 - 4x + 2$

$x_V = 2$, $y_V = f(2) = 4 - 8 + 2 = -2$.

**Răspuns:** $V(2, -2)$. *Barem: 2p + 3p.*

### 3. Ecuația $\log_3 x = \log_3(4 - x)$

Condiții: $0 < x < 4$. Atunci $x = 4 - x \iff x = 2$, care convine.

*Barem: 3p + 2p.*

### 4. Probabilitatea ca produsul cifrelor unui număr de două cifre să fie $4$

$4 = 1\cdot4 = 2\cdot2 = 4\cdot1$: numerele $14, 22, 41$ — 3 cazuri favorabile din 90.

$$p = \frac{3}{90} = \frac{1}{30}.$$

*Barem: 2p + 1p + 2p.*

### 5. $A(1,1)$, $B(4,1)$, $\overrightarrow{AM} = \frac13\overrightarrow{AB}$

$\overrightarrow{AB} = 3\vec i$, deci $\overrightarrow{AM} = \vec i$: $x_M - 1 = 1$, $y_M - 1 = 0$.

**Răspuns:** $M(2, 1)$. *Barem: 2p + 3p.*

### 6. $4\sin\frac{\pi}{12}\cos\frac{\pi}{12} = 1$

$$4\sin\frac{\pi}{12}\cos\frac{\pi}{12} = 2\cdot2\sin\frac{\pi}{12}\cos\frac{\pi}{12} = 2\sin\frac\pi6 = 2\cdot\frac12 = 1.$$

*Barem: 3p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(m) = \begin{pmatrix} 2 & 2 & m+1\\ 2 & m+1 & 2\\ m+1 & 2 & 2\end{pmatrix}$

#### a) $\det(A(-1))$

$$\det\begin{pmatrix} 2 & 2 & 0\\ 2 & 0 & 2\\ 0 & 2 & 2\end{pmatrix} = 0 + 0 + 0 - 0 - 8 - 8 = -16.$$

*Barem: 2p + 3p.*

#### b) $A(0)\cdot A(1) = 5A(1)$?

$A(1)$ are toate elementele egale cu $2$. Fiecare linie a lui $A(0) = \begin{pmatrix} 2 & 2 & 1\\ 2 & 1 & 2\\ 1 & 2 & 2\end{pmatrix}$ are suma $5$, deci fiecare element al produsului este $5\cdot2 = 10$:

$$A(0)\cdot A(1) = \begin{pmatrix} 10 & 10 & 10\\ 10 & 10 & 10\\ 10 & 10 & 10\end{pmatrix} = 5A(1).$$

**Răspuns:** da. *Barem: 2p + 3p.*

#### c) $\det(A(m)) = 0$

Adunăm toate coloanele la prima: fiecare linie are suma $m + 5$:

$$\det A(m) = (m+5)\begin{vmatrix} 1 & 2 & m+1\\ 1 & m+1 & 2\\ 1 & 2 & 2\end{vmatrix} = (m+5)\begin{vmatrix} 1 & 2 & m+1\\ 0 & m-1 & 1-m\\ 0 & 0 & 1-m\end{vmatrix} = (m+5)(m-1)(1-m).$$

Deci $\det A(m) = -(m+5)(m-1)^2 = 0 \iff m \in \{-5, 1\}$.

**Răspuns:** $m \in \{-5, 1\}$. *Barem: 3p + 2p.*

### 2. Legea asociativă $x\circ y = xy - 2x - 2y + 6$

#### a) $x\circ y = (x-2)(y-2) + 2$

$$xy - 2x - 2y + 6 = x(y-2) - 2(y-2) + 2 = (x-2)(y-2) + 2.$$

**Răspuns:** da. *Barem: 3p + 2p.*

#### b) $x\circ2 = 2\circ x = 2$

$x\circ2 = (x-2)\cdot0 + 2 = 2$ și $2\circ x = 0\cdot(x-2) + 2 = 2$. *Barem: 2p + 3p.*

#### c) $1\circ2\circ3\circ\dots\circ2013$

Din b), $2$ este element absorbant: $(1\circ2) = 2$, iar apoi $2\circ(3\circ\dots\circ2013) = 2$ (folosind asociativitatea).

**Răspuns:** $2$. *Barem: 3p + 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x^3 - 1}{x^2 + 1}$

#### a) $f'(x) = \dfrac{x^4 + 3x^2 + 2x}{(x^2+1)^2}$

$$f'(x) = \frac{3x^2(x^2 + 1) - 2x(x^3 - 1)}{(x^2+1)^2} = \frac{3x^4 + 3x^2 - 2x^4 + 2x}{(x^2+1)^2} = \frac{x^4 + 3x^2 + 2x}{(x^2+1)^2}.$$

*Barem: 2p + 3p.*

#### b) $\lim\limits_{x\to0}\dfrac{f(x) - f(0)}{x}$

Este $f'(0) = 0$. *Barem: 3p + 2p.*

#### c) $\lim\limits_{x\to+\infty}\left(\dfrac{x+1}{x-1}\right)^{f(x)}$

Cazul $1^\infty$: $\dfrac{x+1}{x-1} = 1 + \dfrac{2}{x-1}$, iar $f(x) \to +\infty$.

$$\left(1 + \frac{2}{x-1}\right)^{f(x)} = \left[\left(1 + \frac{2}{x-1}\right)^{\frac{x-1}{2}}\right]^{\frac{2}{x-1}f(x)}.$$

Paranteza dreaptă tinde la $e$, iar exponentul:

$$\frac{2(x^3 - 1)}{(x-1)(x^2 + 1)} = \frac{2(x^2 + x + 1)}{x^2 + 1} \to 2.$$

**Răspuns:** $e^2$. *Barem: 1p + 2p + 2p.*

### 2. $I_n = \displaystyle\int_0^1 x^ne^{-x}\,dx$

#### a) $I_1 = \frac{e-2}{e}$

Prin părți ($u = x$, $v = -e^{-x}$):

$$I_1 = -xe^{-x}\Big|_0^1 + \int_0^1 e^{-x}\,dx = -\frac1e + \left(1 - \frac1e\right) = 1 - \frac2e = \frac{e - 2}{e}.$$

*Barem: 3p + 2p.*

#### b) $I_{n+1} = (n+1)I_n - \frac1e$

$$I_{n+1} = -x^{n+1}e^{-x}\Big|_0^1 + (n+1)\int_0^1 x^ne^{-x}\,dx = -\frac1e + (n+1)I_n.$$

**Răspuns:** da, relația este adevărată. *Barem: 3p + 2p.*

#### c) $0 \le I_n \le \frac{1}{n+1}$

Pe $[0,1]$: $0 < e^{-x} \le 1$, deci $0 \le x^ne^{-x} \le x^n$. Integrând:

$$0 \le I_n \le \int_0^1 x^n\,dx = \frac{1}{n+1}. \ \blacksquare$$

*Barem: 2p + 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $15$ |
| I.2 | $V(2, -2)$ |
| I.3 | $x = 2$ |
| I.4 | $p = \frac{1}{30}$ |
| I.5 | $M(2, 1)$ |
| II.1.a | $-16$ |
| II.1.b | da |
| II.1.c | $m \in \{-5, 1\}$ |
| II.2.c | $2$ |
| III.1.b | $0$ |
| III.1.c | $e^2$ |

## Ce merită reținut din varianta 4

- **Matrice cu aceeași sumă pe linii**: adună coloanele la prima și scoate factorul comun.
- **Element absorbant** într-o compunere lungă: dacă apare printre factori, rezultatul este chiar el.
- **Limite $1^\infty$**: scrie baza ca $1 + \alpha(x)$ și folosește $(1 + \alpha)^{1/\alpha} \to e$.
- **$2\sin a\cos a = \sin 2a$**.
