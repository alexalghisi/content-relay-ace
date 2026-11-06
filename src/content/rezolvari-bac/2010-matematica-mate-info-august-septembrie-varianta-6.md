Rezolvarea completă a subiectului de **Bacalaureat 2010 la Matematică M1 (mate-info)**, sesiunea august–septembrie, **varianta 6**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Care este mai mare: $2\sqrt[3]{6}$ sau $3\sqrt[3]{3}$?

Introducem factorii sub radical:

$$2\sqrt[3]6 = \sqrt[3]{8\cdot 6} = \sqrt[3]{48}, \qquad 3\sqrt[3]3 = \sqrt[3]{27\cdot3} = \sqrt[3]{81}.$$

Radicalul de ordin 3 este crescător și $48 < 81$, deci $2\sqrt[3]6 < 3\sqrt[3]3$.

**Răspuns:** $3\sqrt[3]{3}$ este mai mare. *Barem: 2p + 2p introducerea sub radical, 1p comparația.*

### 2. Mulțimea valorilor funcției $f(x) = |x|$

- $|x| \ge 0$ pentru orice $x$, deci $\operatorname{Im} f \subset [0, +\infty)$;
- pentru $y \ge 0$, $f(y) = y$, deci $[0, +\infty) \subset \operatorname{Im} f$.

**Răspuns:** $\operatorname{Im} f = [0, +\infty)$. *Barem: 2p + 2p cele două incluziuni, 1p concluzia.*

### 3. $m$ cu $x^2 - x + m^2 = 0$ având două soluții reale egale

$$\Delta = 1 - 4m^2 = 0 \iff m^2 = \frac14 \iff m = \pm\frac12.$$

**Răspuns:** $m \in \left\{-\frac12, \frac12\right\}$. *Barem: 2p $\Delta$, 1p condiția, 2p valorile.*

### 4. Numărul termenilor raționali din $\left(1 + \sqrt[4]2\right)^{41}$

$$T_{k+1} = C_{41}^k\left(\sqrt[4]2\right)^k = C_{41}^k\, 2^{\frac k4}, \quad k = 0, 1, \dots, 41.$$

$T_{k+1} \in \mathbb Q \iff 4 \mid k$: $k \in \{0, 4, 8, \dots, 40\}$, adică **11** valori.

**Răspuns:** $11$ termeni raționali. *Barem: 2p termenul general, 1p condiția, 2p numărarea.*

### 5. $A(2,1)$, $B(-2,3)$, $C(1,-3)$, $D(4,a)$; $AB \parallel CD$

$$m_{AB} = \frac{3 - 1}{-2 - 2} = -\frac12, \qquad m_{CD} = \frac{a + 3}{4 - 1} = \frac{a+3}{3}.$$

$m_{AB} = m_{CD} \iff a + 3 = -\frac32 \iff a = -\frac92$.

**Răspuns:** $a = -\dfrac92$. *Barem: 1p condiția, 2p pantele, 2p valoarea.*

### 6. Probabilitatea ca $x \in A = \left\{0, \frac\pi6, \frac\pi2, \pi, \frac{3\pi}2\right\}$ să verifice $\sin^3x + \cos^3x = 1$

- $x = 0$: $0 + 1 = 1$ ✔;
- $x = \frac\pi6$: $\frac18 + \frac{3\sqrt3}{8} \ne 1$;
- $x = \frac\pi2$: $1 + 0 = 1$ ✔;
- $x = \pi$: $0 - 1 = -1$;
- $x = \frac{3\pi}{2}$: $-1 + 0 = -1$.

$$P = \frac25.$$

*Barem: 3p soluțiile, 2p probabilitatea.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}0&1&0\\0&0&1\\a&0&0\end{pmatrix}$, $B_n = A^n + A^{n+1} + A^{n+2}$

#### a) $A^{2010} = a^{670}I_3$

$$A^2 = \begin{pmatrix}0&0&1\\a&0&0\\0&a&0\end{pmatrix}, \qquad A^3 = A^2\cdot A = \begin{pmatrix}a&0&0\\0&a&0\\0&0&a\end{pmatrix} = aI_3.$$

$$A^{2010} = \left(A^3\right)^{670} = (aI_3)^{670} = a^{670}I_3.$$

*Barem: 1p $A^2$, 2p $A^3$, 2p finalizarea.*

#### b) $a$ cu $\det(B_1) = 0$

$$B_1 = A + A^2 + A^3 = \begin{pmatrix}a&1&1\\a&a&1\\a&a&a\end{pmatrix}.$$

Scădem linia 2 din linia 1 și linia 3 din linia 2:

$$\det(B_1) = \begin{vmatrix}0 & 1-a & 0\\0 & 0 & 1-a\\a & a & a\end{vmatrix} = a(1-a)^2.$$

$\det(B_1) = 0 \iff a \in \{0, 1\}$. *Barem: 2p $B_1$, 2p determinantul, 1p valorile.*

#### c) $a$ pentru care toate matricele $B_n$ sunt inversabile

$B_n = A^{n-1}(A + A^2 + A^3) = A^{n-1}B_1$. Dezvoltând după prima coloană, $\det A = a$. Atunci

$$\det B_n = (\det A)^{n-1}\det B_1 = a^{n-1}\cdot a(a-1)^2 = a^n(a-1)^2.$$

Toate $B_n$ sunt inversabile $\iff a^n(a-1)^2 \ne 0$ pentru orice $n \iff a \notin \{0,1\}$.

**Răspuns:** $a \in \mathbb R\setminus\{0, 1\}$. *Barem: 1p $B_n = A^{n-1}B_1$, 1p condiția, 2p determinantul, 1p răspunsul.*

### 2. $x * y = 2xy - 3x - 3y + m$, $M = \mathbb R \setminus \left\{\frac32\right\}$

Forma utilă: $x * y = 2\left(x - \frac32\right)\left(y - \frac32\right) + \frac32 + m - 6$.

#### a) $m$ astfel încât $x * y \in M$ pentru orice $x, y \in M$

- Dacă $m = 6$: $x * y = 2\left(x - \frac32\right)\left(y - \frac32\right) + \frac32 \ne \frac32$, deoarece ambii factori sunt nenuli. Deci $M$ este parte stabilă.
- Dacă $m \ne 6$: $0 * y = -3y + m$, iar $0 * \dfrac{2m-3}{6} = \dfrac32$. Avem $0 \in M$ și $\dfrac{2m-3}{6} \ne \dfrac32$ (egalitatea ar da $m = 6$), deci găsim două elemente din $M$ al căror compus nu e în $M$.

**Răspuns:** $m = 6$. *Barem: 1p forma, 2p cazul $m = 6$, 2p cazul $m \ne 6$.*

#### b) Pentru $m = 6$, $(M, *)$ este grup

Notăm $u = x - \frac32$. Legea este $x * y = 2uv + \frac32$.

- **Asociativitate:** $(x*y)*z = 4\left(x-\frac32\right)\left(y-\frac32\right)\left(z-\frac32\right) + \frac32 = x*(y*z)$.
- **Element neutru:** $x * e = x \iff e(2x-3) = 4x - 6 = 2(2x - 3)$, deci $e = 2 \in M$ (și legea este comutativă).
- **Simetrice:** $x * x' = 2 \iff x'(2x - 3) = 3x - 4 \iff x' = \dfrac{3x-4}{2x-3}$. Avem $x' \ne \frac32$ (altfel $6x - 8 = 6x - 9$, imposibil), deci $x' \in M$.

Așadar $(M, *)$ este grup (chiar abelian). *Barem: 1p asociativitatea, 2p neutrul, 2p simetricele.*

#### c) $f(x) = 2x - 3$ este izomorfism între $(M, *)$ și $(\mathbb R^*, \cdot)$

**Morfism:**

$$f(x * y) = 2\left[2\left(x - \tfrac32\right)\left(y - \tfrac32\right) + \tfrac32\right] - 3 = (2x - 3)(2y - 3) = f(x)f(y).$$

**Bijectivitate:** pentru $y \in \mathbb R^*$, ecuația $2x - 3 = y$ are soluția unică $x = \frac{y+3}{2}$, iar $x \ne \frac32$ pentru că $y \ne 0$. Deci $f: M \to \mathbb R^*$ este bijectivă și este izomorfism. $\blacksquare$ *Barem: 3p morfismul, 2p bijectivitatea.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \sqrt[3]{2x - 1} - \sqrt[3]{2x + 1}$

#### a) Tangenta în $x = 0$

Pentru $x \ne \pm\frac12$:

$$f'(x) = \frac{2}{3\sqrt[3]{(2x-1)^2}} - \frac{2}{3\sqrt[3]{(2x+1)^2}}.$$

$f(0) = -1 - 1 = -2$, $f'(0) = \frac23 - \frac23 = 0$, deci tangenta este $y + 2 = 0$.

**Răspuns:** $y = -2$. *Barem: 2p derivata, 2p valorile, 1p ecuația.*

#### b) Asimptota orizontală spre $+\infty$

Cu $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$, unde $a = \sqrt[3]{2x-1}$, $b = \sqrt[3]{2x+1}$:

$$f(x) = \frac{(2x - 1) - (2x + 1)}{a^2 + ab + b^2} = \frac{-2}{a^2 + ab + b^2} \xrightarrow[x\to+\infty]{} 0.$$

**Răspuns:** $y = 0$. *Barem: 3p limita, 2p concluzia.*

#### c) $\displaystyle\lim_{n\to\infty}\left(\frac{f(1) + \dots + f(n)}{-\sqrt[3]{2n+1}}\right)^{\sqrt[3]{2n}}$

Suma este telescopică: $f(k) = \sqrt[3]{2k-1} - \sqrt[3]{2k+1}$, deci

$$f(1) + \dots + f(n) = 1 - \sqrt[3]{2n+1}.$$

Baza este $\dfrac{1 - \sqrt[3]{2n+1}}{-\sqrt[3]{2n+1}} = 1 - \dfrac{1}{\sqrt[3]{2n+1}} \to 1$, exponentul $\to\infty$: nedeterminare $1^\infty$.

$$\lim\left(1 - \frac{1}{\sqrt[3]{2n+1}}\right)^{\sqrt[3]{2n}} = e^{\lim\left(-\frac{\sqrt[3]{2n}}{\sqrt[3]{2n+1}}\right)} = e^{-1} = \frac1e.$$

**Răspuns:** $\dfrac1e$. *Barem: 2p suma, 1p + 1p limita, 1p rezultatul.*

### 2. $I_n = \displaystyle\int_0^1 \frac{x^n}{x^2 + x + 1}\,dx$

#### a) $I_1 + I_2 + I_3$

$$I_1 + I_2 + I_3 = \int_0^1 \frac{x + x^2 + x^3}{x^2 + x + 1}\,dx = \int_0^1 x\,dx = \frac12.$$

**Răspuns:** $\dfrac12$. *Barem: 2p gruparea, 3p calculul.*

#### b) Șirul este descrescător

Pentru $x \in [0,1]$, $x^{n+1} \le x^n$, iar $x^2 + x + 1 > 0$, deci

$$\frac{x^{n+1}}{x^2+x+1} \le \frac{x^n}{x^2+x+1} \Rightarrow I_{n+1} \le I_n. \ \blacksquare$$

*Barem: 1p $x^n \ge x^{n+1}$, 2p numitorul pozitiv, 2p concluzia.*

#### c) $\lim\limits_{n\to\infty} I_n$

Pentru $x \in [0,1]$, $x^2 + x + 1 \ge 1$, deci $0 \le \dfrac{x^n}{x^2+x+1} \le x^n$ și

$$0 \le I_n \le \int_0^1 x^n\,dx = \frac{1}{n+1} \to 0.$$

Din criteriul cleștelui, $\lim I_n = 0$.

**Răspuns:** $0$. *Barem: 2p încadrarea integrandului, 2p încadrarea integralei, 1p limita.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $3\sqrt[3]3 > 2\sqrt[3]6$ |
| I.2 | $[0, +\infty)$ |
| I.3 | $m = \pm\frac12$ |
| I.4 | $11$ termeni |
| I.5 | $a = -\frac92$ |
| I.6 | $P = \frac25$ |
| II.1.b | $a \in \{0, 1\}$ |
| II.1.c | $a \in \mathbb R\setminus\{0,1\}$ |
| II.2.a | $m = 6$ |
| III.1.a | $y = -2$ |
| III.1.b | $y = 0$ |
| III.1.c | $\frac1e$ |
| III.2.a | $\frac12$ |
| III.2.c | $0$ |

## Ce merită reținut din varianta 6

- **Matrice de permutare „ponderate”**: $A^3 = aI_3$ reduce orice putere mare.
- **Legea $2xy - 3x - 3y + m$**: completează produsul $2\left(x - \frac32\right)\left(y - \frac32\right)$ — de aici reies stabilitatea, neutrul și izomorfismul.
- **Diferențe de radicali de ordin 3**: amplifică cu $a^2 + ab + b^2$.
- **Sume telescopice** urmate de limite $1^\infty$: $\lim(1 + a_n)^{b_n} = e^{\lim a_nb_n}$.
