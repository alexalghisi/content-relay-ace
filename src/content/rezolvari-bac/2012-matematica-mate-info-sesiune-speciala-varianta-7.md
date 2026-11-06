Rezolvarea completă a subiectului de **Bacalaureat 2012 la Matematică M1 (mate-info)**, sesiunea specială, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $m$ cu $A = \{2\}$ și $B = \{x \in \mathbb R \mid x^2 + mx + 4 = 0\}$ egale

$2 \in B \Rightarrow 4 + 2m + 4 = 0 \Rightarrow m = -4$. Atunci $x^2 - 4x + 4 = (x - 2)^2 = 0$ are doar soluția $2$, deci $B = \{2\} = A$.

**Răspuns:** $m = -4$. *Barem: 3p, 2p.*

### 2. Vârful parabolei $f(x) = x^2 - 3x + 2$

$$x_V = \frac32, \qquad \Delta = 9 - 8 = 1, \qquad y_V = -\frac14.$$

**Răspuns:** $V\left(\dfrac32, -\dfrac14\right)$. *Barem: 2p, 1p, 2p.*

### 3. $3^{\log_3 x} < 1$

Condiție $x > 0$; atunci $3^{\log_3 x} = x$, deci $x < 1$.

**Răspuns:** $x \in (0, 1)$. *Barem: 2p, 2p, 1p.*

### 4. Probabilitatea ca un număr de 2 cifre să aibă doar cifre impare

Cazuri posibile: 90. Favorabile: ambele cifre din $\{1, 3, 5, 7, 9\}$ — $5\cdot 5 = 25$.

$$p = \frac{25}{90} = \frac{5}{18}.$$

**Răspuns:** $p = \dfrac5{18}$. *Barem: 1p, 2p, 1p, 1p.*

### 5. $\vec u = 3\vec i + a\vec j$ și $\vec v = a\vec i + (2a - 3)\vec j$ coliniari

$$\frac3a = \frac{a}{2a - 3} \iff a^2 = 6a - 9 \iff (a - 3)^2 = 0.$$

**Răspuns:** $a = 3$. *Barem: 2p, 2p, 1p.*

### 6. Raza cercului circumscris, $AB = AC = 5$, $BC = 6$

Înălțimea din $A$ cade în mijlocul lui $BC$: $h = \sqrt{25 - 9} = 4$, deci $S = \dfrac{6\cdot 4}{2} = 12$.

$$R = \frac{abc}{4S} = \frac{5\cdot5\cdot6}{48} = \frac{25}{8}.$$

**Răspuns:** $R = \dfrac{25}{8}$. *Barem: 2p, 2p, 1p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}\cos x & 0 & i\sin x\\ 0 & 1 & 0\\ i\sin x & 0 & \cos x\end{pmatrix}$

#### a) $\det(A(\pi))$

$A(\pi) = \begin{pmatrix} -1 & 0 & 0\\ 0 & 1 & 0\\ 0 & 0 & -1\end{pmatrix}$, deci $\det = (-1)\cdot1\cdot(-1) = 1$. *Barem: 3p, 2p.*

#### b) $A(x)A(y) = A(x + y)$

Elementele nenule ale produsului (folosind $i^2 = -1$):

- pozițiile $(1,1)$ și $(3,3)$: $\cos x\cos y + i\sin x\cdot i\sin y = \cos x\cos y - \sin x\sin y = \cos(x + y)$;
- pozițiile $(1,3)$ și $(3,1)$: $i(\cos x\sin y + \sin x\cos y) = i\sin(x + y)$;
- poziția $(2,2)$: $1$.

Deci $A(x)A(y) = A(x + y)$. *Barem: 3p, 1p, 1p.*

#### c) $x$ cu $(A(x))^{2012} = I_3$

Din b), prin inducție, $(A(x))^{2012} = A(2012x)$. $A(2012x) = I_3 \iff \cos(2012x) = 1$ și $\sin(2012x) = 0 \iff 2012x = 2k\pi$.

**Răspuns:** $x = \dfrac{k\pi}{1006}$, $k \in \mathbb Z$. *Barem: 2p, 1p, 2p.*

### 2. Pe $G = (0,1)$: $x\circ y = \dfrac{xy}{2xy - x - y + 1}$ (asociativă)

#### a) $e = \dfrac12$ este element neutru

$$x\circ\tfrac12 = \frac{\frac x2}{x - x - \frac12 + 1} = \frac{x/2}{1/2} = x,$$

și analog $\frac12\circ x = x$ (expresia e simetrică în $x, y$). *Barem: 2p, 2p, 1p.*

#### b) Orice element este simetrizabil

Legea e comutativă. Căutăm $x' \in G$ cu $x\circ x' = \dfrac12$:

$$2xx' = 2xx' - x - x' + 1 \iff x' = 1 - x.$$

Pentru $x \in (0,1)$, $x' = 1 - x \in (0, 1)$. $\blacksquare$ *Barem: 1p, 3p, 1p.*

#### c) $f(x) = \dfrac1x - 1$ este izomorfism de la $(G, \circ)$ la $(\mathbb R_+^*, \cdot)$

**Bijectivitate:** $f$ este continuă și strict descrescătoare pe $(0,1)$, cu $\lim\limits_{x\to0} f = +\infty$ și $\lim\limits_{x\to1} f = 0$, deci $f:(0,1) \to (0, +\infty)$ e bijectivă (inversa: $y \mapsto \frac1{y+1}$).

**Morfism:**

$$f(x\circ y) = \frac{2xy - x - y + 1}{xy} - 1 = \frac{xy - x - y + 1}{xy} = \frac{(x - 1)(y - 1)}{xy} = \left(\frac1x - 1\right)\left(\frac1y - 1\right) = f(x)f(y). \ \blacksquare$$

*Barem: 2p, 2p, 1p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{e^x + e^{-x}}{2}$

#### a) $\lim\limits_{x\to+\infty}\dfrac{x}{f(x)}$

$$\lim_{x\to+\infty}\frac{2x}{e^x + e^{-x}} = \lim_{x\to+\infty}\frac{2}{e^x - e^{-x}} = 0$$

(l'Hospital; sau: exponențiala crește mai repede decât $x$). **Răspuns:** $0$. *Barem: 3p, 2p.*

#### b) $f$ convexă pe $\mathbb R$

$f'(x) = \dfrac{e^x - e^{-x}}{2}$, $f''(x) = \dfrac{e^x + e^{-x}}{2} > 0$. *Barem: 1p, 2p, 2p.*

#### c) $g(x) = f(\sqrt x)$ strict crescătoare pe $(0, +\infty)$

$$g'(x) = f'(\sqrt x)\cdot\frac{1}{2\sqrt x} = \frac{e^{\sqrt x} - e^{-\sqrt x}}{4\sqrt x}.$$

Pentru $x > 0$: $\sqrt x > 0 > -\sqrt x$, deci $e^{\sqrt x} > e^{-\sqrt x}$ și $g'(x) > 0$. *Barem: 2p, 2p, 1p.*

### 2. $I_n = \displaystyle\int_0^1 x^n\sqrt{1 - x^2}\,dx$, $J_n = \displaystyle\int_0^{\pi/2}\sin^n x\,dx$

#### a) $J_1$

$$J_1 = \int_0^{\pi/2}\sin t\,dt = -\cos t\Big|_0^{\pi/2} = 0 + 1 = 1.$$

*Barem: 1p, 2p, 2p.*

#### b) $I_1$

$\left((1 - x^2)^{3/2}\right)' = -3x\sqrt{1 - x^2}$, deci

$$I_1 = -\frac13(1 - x^2)\sqrt{1 - x^2}\Big|_0^1 = 0 + \frac13 = \frac13.$$

*Barem: 1p, 3p, 1p.*

#### c) $J_{2n} - J_{2n+2} = I_{2n}$

$$J_{2n} - J_{2n+2} = \int_0^{\pi/2}\sin^{2n}x(1 - \sin^2 x)\,dx = \int_0^{\pi/2}\sin^{2n}x\cos^2 x\,dx.$$

Substituim $t = \sin x$, $dt = \cos x\,dx$; pe $[0, \frac\pi2]$, $\cos x = \sqrt{1 - t^2} \ge 0$:

$$\int_0^{\pi/2}\sin^{2n}x\cos x\cdot\cos x\,dx = \int_0^1 t^{2n}\sqrt{1 - t^2}\,dt = I_{2n}. \ \blacksquare$$

*Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $m = -4$ |
| I.2 | $V(\tfrac32, -\tfrac14)$ |
| I.3 | $x \in (0, 1)$ |
| I.4 | $p = \tfrac5{18}$ |
| I.5 | $a = 3$ |
| I.6 | $R = \tfrac{25}{8}$ |
| II.1.a | $1$ |
| II.1.c | $x = \tfrac{k\pi}{1006}$ |
| II.2.b | $x' = 1 - x$ |
| III.1.a | $0$ |
| III.2.a | $J_1 = 1$ |
| III.2.b | $I_1 = \tfrac13$ |

## Ce merită reținut din varianta 7

- **Matrice de „rotație”** cu $\cos x$ și $i\sin x$: $A(x)A(y) = A(x+y)$, deci puterile se reduc la $A(nx)$.
- **Izomorfisme**: verifică separat bijectivitatea și relația de morfism.
- **Raza cercului circumscris**: $R = \frac{abc}{4S}$.
- **Legătura $\int\sin^n$ – $\int x^n\sqrt{1-x^2}$**: substituția $t = \sin x$.
