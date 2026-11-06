Rezolvarea completă a subiectului de **Bacalaureat 2013 la Matematică M_mate-info**, sesiunea august–septembrie, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Rația progresiei geometrice cu $b_1 = 1$, $b_4 = 27$

$b_4 = b_1q^3 \Rightarrow q^3 = 27 \Rightarrow q = 3$ (singura rădăcină reală).

*Barem: 3p + 2p.*

### 2. Vârful parabolei $f(x) = x^2 - 6x + 8$

$x_V = 3$, $y_V = f(3) = 9 - 18 + 8 = -1$.

**Răspuns:** $V(3, -1)$. *Barem: 2p + 3p.*

### 3. Ecuația $3^{x+2} = 9^{1-x}$

$9^{1-x} = 3^{2(1-x)}$, deci $x + 2 = 2 - 2x \iff 3x = 0 \iff x = 0$.

*Barem: 3p + 2p.*

### 4. Probabilitatea ca un număr de două cifre să fie pătrat perfect

Pătratele perfecte de două cifre: $16, 25, 36, 49, 64, 81$ — 6 cazuri favorabile din 90.

$$p = \frac{6}{90} = \frac{1}{15}.$$

*Barem: 2p + 1p + 2p.*

### 5. $\overrightarrow{AB} = 4\vec i - 3\vec j$, $\overrightarrow{BC} = 2\vec i - 5\vec j$; lungimea lui $\overrightarrow{AC}$

$$\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC} = 6\vec i - 8\vec j, \qquad |\overrightarrow{AC}| = \sqrt{36 + 64} = 10.$$

*Barem: 3p + 2p.*

### 6. $\sin A$ în triunghiul cu $AB = 4$, $BC = 5$, $\sin C = \frac45$

Teorema sinusurilor: $\dfrac{AB}{\sin C} = \dfrac{BC}{\sin A}$:

$$\sin A = \frac{BC\cdot\sin C}{AB} = \frac{5\cdot\frac45}{4} = 1.$$

(Triunghiul este dreptunghic în $A$.) *Barem: 2p + 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(m) = \begin{pmatrix} 1 & 1 & 1\\ m & 0 & 0\\ m & 0 & m\end{pmatrix}$

#### a) $\det(A(1))$

$$\det\begin{pmatrix} 1 & 1 & 1\\ 1 & 0 & 0\\ 1 & 0 & 1\end{pmatrix}.$$

Dezvoltând după linia a doua: $-1\cdot\begin{vmatrix} 1 & 1\\ 0 & 1\end{vmatrix} = -1$.

**Răspuns:** $-1$. *Barem: 2p + 3p.*

#### b) $A(m)\cdot A(-m) = \begin{pmatrix} -1 & 1 & 0\\ 1 & 1 & 1\\ 0 & 1 & 0\end{pmatrix}$

$$A(m)\cdot A(-m) = \begin{pmatrix} 1 & 1 & 1\\ m & 0 & 0\\ m & 0 & m\end{pmatrix}\begin{pmatrix} 1 & 1 & 1\\ -m & 0 & 0\\ -m & 0 & -m\end{pmatrix} = \begin{pmatrix} 1 - 2m & 1 & 1 - m\\ m & m & m\\ m - m^2 & m & m - m^2\end{pmatrix}.$$

Identificând: $1 - 2m = -1$, $m = 1$, $1 - m = 0$, $m - m^2 = 0$ — toate sunt satisfăcute doar de $m = 1$.

**Răspuns:** $m = 1$. *Barem: 3p + 2p.*

#### c) $\det\big(A(1) + \dots + A(101)\big) = -51^2\cdot101^3$

Fie $S = 1 + 2 + \dots + 101 = \dfrac{101\cdot102}{2} = 101\cdot51$.

$$A(1) + \dots + A(101) = \begin{pmatrix} 101 & 101 & 101\\ S & 0 & 0\\ S & 0 & S\end{pmatrix}.$$

Dezvoltând după linia a doua:

$$\det = -S\cdot\begin{vmatrix} 101 & 101\\ 0 & S\end{vmatrix} = -S\cdot101S = -101S^2 = -101\cdot101^2\cdot51^2 = -51^2\cdot101^3. \ \blacksquare$$

*Barem: 3p + 2p.*

### 2. Legea asociativă $x\circ y = xy - 4x - 4y + 20$

#### a) $3\circ4$

$$3\circ4 = 12 - 12 - 16 + 20 = 4.$$

*Barem: 3p + 2p.*

#### b) $x\circ y = (x-4)(y-4) + 4$

$$xy - 4x - 4y + 16 + 4 = x(y-4) - 4(y-4) + 4 = (x-4)(y-4) + 4.$$

*Barem: 3p + 2p.*

#### c) $\underbrace{x\circ x\circ\dots\circ x}_{2013} = 5$

Prin inducție, $\underbrace{x\circ\dots\circ x}_{n} = (x-4)^n + 4$ (la fiecare compunere se înmulțește cu încă un factor $x - 4$). Ecuația devine

$$(x-4)^{2013} + 4 = 5 \iff (x-4)^{2013} = 1 \iff x - 4 = 1 \iff x = 5$$

(exponent impar, deci singura rădăcină reală a lui $t^{2013} = 1$ este $t = 1$).

**Răspuns:** $x = 5$. *Barem: 1p + 2p + 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,+\infty)\to\mathbb R$, $f(x) = \dfrac{e^x}{x + e^x}$

#### a) $f'(x) = \dfrac{(x-1)e^x}{(x + e^x)^2}$

$$f'(x) = \frac{e^x(x + e^x) - e^x(1 + e^x)}{(x + e^x)^2} = \frac{e^x(x - 1)}{(x + e^x)^2}.$$

*Barem: 3p + 2p.*

#### b) Asimptota spre $+\infty$

$$\lim_{x\to+\infty}\frac{e^x}{x + e^x} = \lim_{x\to+\infty}\frac{1}{\frac{x}{e^x} + 1} = 1$$

(căci $\frac{x}{e^x} \to 0$). **Răspuns:** asimptota orizontală $y = 1$. *Barem: 3p + 2p.*

#### c) $f(x) \ge \dfrac{e}{e+1}$

$f'(x) \le 0$ pe $(0, 1]$ și $f'(x) \ge 0$ pe $[1, +\infty)$, deci $x = 1$ este punct de minim global:

$$f(x) \ge f(1) = \frac{e}{1 + e}. \ \blacksquare$$

*Barem: 3p + 2p.*

### 2. $I_n = \displaystyle\int_0^1 xe^{-nx^2}\,dx$

#### a) $I_0$

$$I_0 = \int_0^1 x\,dx = \frac12.$$

*Barem: 3p + 2p.*

#### b) $I_{n+1} \le I_n$

$$I_{n+1} - I_n = \int_0^1 xe^{-nx^2}\left(e^{-x^2} - 1\right)dx.$$

Pe $[0,1]$: $x \ge 0$, $e^{-nx^2} > 0$, iar $e^{-x^2} \le 1$. Integrandul este $\le 0$, deci $I_{n+1} \le I_n$. $\blacksquare$ *Barem: 2p + 3p.*

#### c) $I_n = \dfrac{1}{2n}\left(1 - \dfrac{1}{e^n}\right)$ pentru $n \ge 1$

$\left(e^{-nx^2}\right)' = -2nxe^{-nx^2}$, deci $xe^{-nx^2} = -\dfrac{1}{2n}\left(e^{-nx^2}\right)'$:

$$I_n = -\frac{1}{2n}e^{-nx^2}\Big|_0^1 = -\frac{1}{2n}\left(e^{-n} - 1\right) = \frac{1}{2n}\left(1 - \frac{1}{e^n}\right). \ \blacksquare$$

*Barem: 3p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $q = 3$ |
| I.2 | $V(3, -1)$ |
| I.3 | $x = 0$ |
| I.4 | $p = \frac{1}{15}$ |
| I.5 | $10$ |
| I.6 | $\sin A = 1$ |
| II.1.a | $-1$ |
| II.1.b | $m = 1$ |
| II.2.a | $4$ |
| II.2.c | $x = 5$ |
| III.1.b | $y = 1$ |
| III.2.a | $I_0 = \frac12$ |

## Ce merită reținut din varianta 9

- **Legea $(x-a)(y-a) + a$** compusă de $n$ ori cu același $x$: $(x-a)^n + a$.
- **Suma de matrice $A(k)$** cu elemente liniare în $k$: înlocuiește $k$ cu $\sum k = \frac{n(n+1)}{2}$.
- **Monotonia unui șir de integrale**: semnul integrandului în $I_{n+1} - I_n$.
- **$\int xe^{-nx^2}dx$**: integrandul este, până la o constantă, derivata lui $e^{-nx^2}$.
