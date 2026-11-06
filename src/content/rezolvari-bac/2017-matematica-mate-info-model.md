Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2017 la Matematică M_mate-info**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z_1 = 2 + 3i$, $z_2 = 4 - 6i$: $z_1z_2 + 2z_1 + z_2$ este real

$$z_1z_2 = (2 + 3i)(4 - 6i) = 8 - 12i + 12i - 18i^2 = 26,$$

$$z_1z_2 + 2z_1 + z_2 = 26 + 4 + 6i + 4 - 6i = 34 \in \mathbb R.$$

*Barem: 2p scrierea, 3p calculul.*

### 2. $(f\circ g)(0)$, $f(x) = 2x - 1$, $g(x) = x^2 + x + 1$

$g(0) = 1$, deci $(f\circ g)(0) = f(1) = 2 - 1 = 1$.

**Răspuns:** $1$. *Barem: 2p $g(0)$, 3p rezultatul.*

### 3. $\log_5(x^2 - 4) = \log_5(5x - 8)$

$$x^2 - 4 = 5x - 8 \iff x^2 - 5x + 4 = 0 \iff x \in \{1, 4\}.$$

$x = 1$: $x^2 - 4 = -3 < 0$, nu convine. $x = 4$: $12 = 12 > 0$ ✔.

**Răspuns:** $x = 4$. *Barem: 3p ecuația, 2p soluția.*

### 4. Probabilitatea ca un număr de două cifre să fie multiplu de 7

90 cazuri posibile. Multiplii de 7 de două cifre: $14 = 7\cdot 2, \dots, 98 = 7\cdot 14$ — **13** cazuri favorabile.

**Răspuns:** $p = \dfrac{13}{90}$. *Barem: 1p, 2p, 2p.*

### 5. Paralela prin $A(1, 0)$ la $d: y = 3x - 2017$

Panta paralelei este $3$: $y - 0 = 3(x - 1) \iff y = 3x - 3$.

**Răspuns:** $y = 3x - 3$. *Barem: 2p panta, 3p ecuația.*

### 6. $\sin\left(\dfrac\pi2 + x\right)\sin x + \cos\left(\dfrac\pi2 + x\right)\cos x = 0$

Recunoaștem formula $\cos(a - b) = \cos a\cos b + \sin a\sin b$ cu $a = \frac\pi2 + x$, $b = x$:

$$\cos\left(\tfrac\pi2 + x - x\right) = \cos\tfrac\pi2 = 0.$$

(Altfel: $\sin(\frac\pi2 + x) = \cos x$, $\cos(\frac\pi2 + x) = -\sin x$, deci $\cos x\sin x - \sin x\cos x = 0$.) *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} x & 0 & 0\\ 0 & x & 0\\ 0 & 0 & 1\end{pmatrix}$, $B(x) = \begin{pmatrix} 0 & 0 & x\\ 0 & x & 0\\ 2 & 0 & 0\end{pmatrix}$

#### a) $\det(A(2))$

$A(2)$ este diagonală: $\det = 2\cdot 2\cdot 1 = 4$. **Răspuns:** $4$. *Barem: 2p, 3p.*

#### b) $\det(A(x) + B(x)) = \det(B(x))$

$$\det(A(x) + B(x)) = \begin{vmatrix} x & 0 & x\\ 0 & 2x & 0\\ 2 & 0 & 1\end{vmatrix} = 2x(x - 2x) = -2x^2$$

(dezvoltare după linia a doua), iar $\det(B(x)) = 0 + 0 + 0 - 2\cdot x\cdot x - 0 - 0 = -2x^2$. Egale. *Barem: 3p, 2p.*

#### c) $n, p$ naturale cu $A(n)B(p) = B(3)$

$$A(n)B(p) = \begin{pmatrix} 0 & 0 & np\\ 0 & np & 0\\ 2 & 0 & 0\end{pmatrix} = \begin{pmatrix} 0 & 0 & 3\\ 0 & 3 & 0\\ 2 & 0 & 0\end{pmatrix} \iff np = 3.$$

**Răspuns:** $(n, p) \in \{(1, 3), (3, 1)\}$. *Barem: 2p, 3p.*

### 2. $f = X^3 + aX^2 + 8X + 3$

#### a) $f(1) = 0$

$1 + a + 8 + 3 = 0 \iff a = -12$. *Barem: 2p, 3p.*

#### b) Pentru $a = 6$: împărțirea la $X^2 + 5X + 3$

$$(X + 1)(X^2 + 5X + 3) = X^3 + 5X^2 + 3X + X^2 + 5X + 3 = X^3 + 6X^2 + 8X + 3 = f.$$

**Răspuns:** câtul $X + 1$, restul $0$. *Barem: 3p câtul, 2p restul.*

#### c) Pentru $a \in (-4, 4)$, $f$ nu are toate rădăcinile reale

Viète: $x_1 + x_2 + x_3 = -a$, $x_1x_2 + x_1x_3 + x_2x_3 = 8$.

$$x_1^2 + x_2^2 + x_3^2 = (x_1 + x_2 + x_3)^2 - 2\cdot 8 = a^2 - 16.$$

Pentru $a \in (-4, 4)$, $a^2 - 16 < 0$; dacă toate rădăcinile ar fi reale, suma pătratelor ar fi $\ge 0$ — contradicție. $\blacksquare$ *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x^{2018} + 2018x + 2$

#### a) $f'(x) = 2018(x^{2017} + 1)$

$$f'(x) = 2018x^{2017} + 2018 = 2018(x^{2017} + 1).$$

*Barem: 2p, 3p.*

#### b) $A(a, 2020)$ pe tangenta în $x = 0$

$f(0) = 2$, $f'(0) = 2018$: tangenta $y = 2018x + 2$. Atunci $2020 = 2018a + 2 \iff a = 1$.

**Răspuns:** $a = 1$. *Barem: 3p, 2p.*

#### c) $f(x) = 0$ are exact două soluții reale

$f'(x) = 0 \iff x^{2017} = -1 \iff x = -1$; $f' < 0$ pe $(-\infty, -1)$, $f' > 0$ pe $(-1, +\infty)$.

$\lim\limits_{x\to-\infty} f(x) = +\infty$ (puterea pară domină), $f(-1) = 1 - 2018 + 2 = -2015 < 0$, $\lim\limits_{x\to+\infty} f(x) = +\infty$.

Pe fiecare interval de strictă monotonie, $f$ continuă trece o singură dată de la valori pozitive la negative (și invers), deci $f(x) = 0$ are exact o soluție în $(-\infty, -1)$ și una în $(-1, +\infty)$. $\blacksquare$ *Barem: 2p, 3p.*

### 2. $I_n = \displaystyle\int_0^1 \frac{x^n}{x^2 + 2x + 2}dx$

#### a) $\displaystyle\int_0^1(x^2 + 2x + 2)\,dx$

$$\left(\frac{x^3}{3} + x^2 + 2x\right)\Big|_0^1 = \frac13 + 1 + 2 = \frac{10}{3}.$$

*Barem: 3p, 2p.*

#### b) $I_{n+1} + 2I_n + 2I_{n-1} = \dfrac1n$

$$I_{n+1} + 2I_n + 2I_{n-1} = \int_0^1\frac{x^{n-1}(x^2 + 2x + 2)}{x^2 + 2x + 2}dx = \int_0^1 x^{n-1}dx = \frac{x^n}{n}\Big|_0^1 = \frac1n.$$

*Barem: 2p, 3p.*

#### c) $\lim\limits_{n\to\infty} nI_n = \dfrac15$

**Monotonie:** $I_{n+1} - I_n = \displaystyle\int_0^1\frac{x^n(x - 1)}{x^2 + 2x + 2}dx \le 0$ (pe $[0,1]$, $x - 1 \le 0$), deci $(I_n)$ e descrescător și pozitiv.

**Încadrare:** din $I_{n+1} \le I_n \le I_{n-1}$ și b):

$$5I_{n+1} \le I_{n+1} + 2I_n + 2I_{n-1} = \frac1n \le 5I_{n-1}.$$

Deci $I_{n+1} \le \dfrac{1}{5n}$, adică $I_n \le \dfrac{1}{5(n-1)}$; și $I_{n-1} \ge \dfrac{1}{5n}$, adică $I_n \ge \dfrac{1}{5(n+1)}$. Înmulțind cu $n$:

$$\frac{n}{5(n+1)} \le nI_n \le \frac{n}{5(n-1)}.$$

Ambele margini tind la $\dfrac15$; criteriul cleștelui dă $\lim\limits_{n\to\infty} nI_n = \dfrac15$. $\blacksquare$ *Barem: 1p monotonia, 2p încadrarea, 2p limita.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $34$ |
| I.2 | $1$ |
| I.3 | $x = 4$ |
| I.4 | $p = \tfrac{13}{90}$ |
| I.5 | $y = 3x - 3$ |
| II.1.a | $4$ |
| II.1.c | $(1,3)$ sau $(3,1)$ |
| II.2.a | $a = -12$ |
| II.2.b | cât $X + 1$, rest $0$ |
| III.1.b | $a = 1$ |
| III.2.a | $\tfrac{10}{3}$ |
| III.2.c | $\tfrac15$ |

## Ce merită reținut din model

- **Rădăcini nereale prin Viète**: dacă $\sum x_i^2 < 0$, nu toate rădăcinile sunt reale.
- **Recurențe pentru integrale**: combină $I_{n+1}, I_n, I_{n-1}$ astfel încât să reconstitui numitorul.
- **$\lim nI_n$**: monotonia șirului + recurența dau o încadrare, apoi cleștele.
- **Număr de soluții**: tabel de variație + limite + valori în punctele de extrem.
