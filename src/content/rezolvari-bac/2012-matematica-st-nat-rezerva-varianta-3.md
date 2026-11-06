Rezolvarea completă a subiectului de **Bacalaureat 2012 la Matematică M2** (filiera teoretică, specializarea științe ale naturii; filiera tehnologică), sesiunea de rezervă, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Ordonați crescător $\sqrt{12}$, $2\sqrt2$ și $3$

Scriem totul sub radical: $2\sqrt2 = \sqrt8$, $3 = \sqrt9$. Cum $8 < 9 < 12$ și radicalul este crescător:

$$2\sqrt2 < 3 < \sqrt{12}.$$

*Barem: 2p, 2p, 1p.*

### 2. Sistemul $\begin{cases} x + y = 5\\ xy = 6\end{cases}$

$x$ și $y$ sunt rădăcinile ecuației $t^2 - 5t + 6 = 0$, adică $t_1 = 2$, $t_2 = 3$.

**Răspuns:** $S = \{(2, 3), (3, 2)\}$. *Barem: 2p, 2p, 1p.*

### 3. $f(x) = \log_2(x + 1)$, $g(x) = 2^x - 1$; calculați $f(g(1))$

$g(1) = 2 - 1 = 1$, apoi $f(1) = \log_2 2 = 1$.

**Răspuns:** $f(g(1)) = 1$. *Barem: 2p, 3p.*

### 4. O mulțime are 10 submulțimi cu două elemente. Numărul elementelor

$$C_n^2 = \frac{n(n-1)}{2} = 10 \iff n(n-1) = 20 \iff n = 5.$$

**Răspuns:** $n = 5$. *Barem: 2p, 3p.*

### 5. $O(0,0)$, $A(5,1)$, $B(3,5)$; lungimea medianei din $O$ în triunghiul $OAB$

Mijlocul lui $AB$: $M\left(\frac{5 + 3}{2}, \frac{1 + 5}{2}\right) = M(4, 3)$.

$$OM = \sqrt{16 + 9} = 5.$$

**Răspuns:** $5$. *Barem: 2p, 3p.*

### 6. Triunghiul $MNP$ cu $MP = 6$, $\sin N = \frac35$, $\sin P = \frac45$. Lungimea $MN$

Teorema sinusurilor: $MN$ se opune unghiului $P$, $MP$ unghiului $N$:

$$\frac{MN}{\sin P} = \frac{MP}{\sin N} \Rightarrow MN = \frac{6\cdot\frac45}{\frac35} = 8.$$

**Răspuns:** $MN = 8$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. Sistemul $\begin{cases} mx - 2y + z = 1\\ 2x - my - 3z = 3\\ x - y + 2z = 4\end{cases}$

Matricea sistemului: $A = \begin{pmatrix} m & -2 & 1\\ 2 & -m & -3\\ 1 & -1 & 2\end{pmatrix}$.

#### a) Suma elementelor de pe diagonala principală este 2

$$m + (-m) + 2 = 2.$$

*Barem: 3p, 2p.*

#### b) $m$ pentru care $\det A \ne 0$

Regula lui Sarrus:

$$\det A = -2m^2 + 6 - 2 - (-m + 3m - 8) = -2m^2 - 2m + 12 = -2(m^2 + m - 6) = -2(m + 3)(m - 2).$$

**Răspuns:** $m \in \mathbb R\setminus\{-3, 2\}$. *Barem: 3p, 2p.*

#### c) Pentru $m = 1$: $y_1^2 = x_1z_1$

Pentru $m = 1$, $\det A = 8 \ne 0$, deci sistemul are soluție unică. Sistemul $x - 2y + z = 1$, $2x - y - 3z = 3$, $x - y + 2z = 4$ are soluția $(4, 2, 1)$:

$$4 - 4 + 1 = 1,\quad 8 - 2 - 3 = 3,\quad 4 - 2 + 2 = 4. \ ✔$$

(Se poate obține cu regula lui Cramer: $\Delta_x = 32$, $\Delta_y = 16$, $\Delta_z = 8$.) Atunci $y_1^2 = 4 = 4\cdot 1 = x_1z_1$. $\blacksquare$ *Barem: 4p, 1p.*

### 2. $f = X^3 + mX^2 + mX + 1$

#### a) Pentru $m = 0$: restul împărțirii la $X - 1$

$f = X^3 + 1$; restul este $f(1) = 2$.

**Răspuns:** $2$. *Barem: 2p, 3p.*

#### b) $f$ se divide cu $X + 1$

$$f(-1) = -1 + m - m + 1 = 0,$$

deci $X + 1 \mid f$ (teorema lui Bézout). *Barem: 3p, 2p.*

#### c) $m$ pentru care $f$ are trei rădăcini reale

$$f = (X + 1)\left(X^2 + (m - 1)X + 1\right).$$

$f$ are trei rădăcini reale $\iff$ factorul de gradul 2 are rădăcini reale $\iff \Delta = (m-1)^2 - 4 \ge 0 \iff m^2 - 2m - 3 \ge 0 \iff (m - 3)(m + 1) \ge 0$.

**Răspuns:** $m \in (-\infty, -1] \cup [3, +\infty)$. *Barem: 2p, 2p, 1p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{2x^2 - 1}{x^2 + 2}$

#### a) $f'(x) = \dfrac{10x}{(x^2 + 2)^2}$

$$f'(x) = \frac{4x(x^2 + 2) - 2x(2x^2 - 1)}{(x^2+2)^2} = \frac{4x^3 + 8x - 4x^3 + 2x}{(x^2+2)^2} = \frac{10x}{(x^2+2)^2}.$$

*Barem: 3p, 2p.*

#### b) Asimptota orizontală spre $+\infty$

$$\lim_{x\to+\infty}\frac{2x^2 - 1}{x^2 + 2} = 2.$$

**Răspuns:** $y = 2$. *Barem: 3p, 2p.*

#### c) $-\frac12 \le f(x) \le \frac13$ pentru $x \in [0, 1]$

Pe $[0, 1]$, $f'(x) \ge 0$, deci $f$ este crescătoare. Atunci

$$f(0) \le f(x) \le f(1) \iff -\frac12 \le f(x) \le \frac13. \ \blacksquare$$

*Barem: 2p, 3p.*

### 2. $I_n = \displaystyle\int_0^1\frac{x^n}{x + 1}\,dx$

#### a) $I_1$

$$I_1 = \int_0^1\frac{x}{x+1}\,dx = \int_0^1\left(1 - \frac{1}{x+1}\right)dx = \big(x - \ln(x+1)\big)\Big|_0^1 = 1 - \ln 2.$$

**Răspuns:** $I_1 = 1 - \ln 2$. *Barem: 2p, 3p.*

#### b) $I_n + I_{n+1} = \dfrac{1}{n+1}$

$$I_n + I_{n+1} = \int_0^1\frac{x^n + x^{n+1}}{x + 1}\,dx = \int_0^1\frac{x^n(x + 1)}{x + 1}\,dx = \int_0^1 x^n\,dx = \frac{1}{n+1}.$$

*Barem: 2p, 3p.*

#### c) $\dfrac{1}{4026} \le I_{2012} \le \dfrac{1}{2013}$

Pentru $x \in [0, 1]$: $1 \le x + 1 \le 2$, deci $\dfrac{x^{2012}}{2} \le \dfrac{x^{2012}}{x + 1} \le x^{2012}$. Integrăm:

$$\frac12\cdot\frac{1}{2013} \le I_{2012} \le \frac{1}{2013} \iff \frac{1}{4026} \le I_{2012} \le \frac{1}{2013}. \ \blacksquare$$

*Barem: 2p, 1p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $2\sqrt2 < 3 < \sqrt{12}$ |
| I.2 | $\{(2,3), (3,2)\}$ |
| I.3 | $1$ |
| I.4 | $n = 5$ |
| I.5 | $5$ |
| I.6 | $MN = 8$ |
| II.1.b | $m \in \mathbb R\setminus\{-3, 2\}$ |
| II.1.c | $(4, 2, 1)$ |
| II.2.a | $2$ |
| II.2.c | $m \in (-\infty,-1]\cup[3,+\infty)$ |
| III.1.b | $y = 2$ |
| III.2.a | $1 - \ln 2$ |

## Ce merită reținut din varianta 3

- **Compararea radicalilor**: introdu factorii sub radical și compară radicanzii.
- **Sisteme sumă–produs** se rezolvă cu ecuația $t^2 - St + P = 0$.
- **Teorema sinusurilor**: $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$.
- **Polinoame reciproce** ($X^3 + mX^2 + mX + 1$) au rădăcina $-1$.
- **Încadrarea integralelor** prin încadrarea numitorului pe interval.
