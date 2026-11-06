Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2014 la Matematică M_mate-info**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $a + ib$ este conjugatul lui $z = \dfrac{1+i}{1-i}$

$$z = \frac{(1 + i)^2}{(1 - i)(1 + i)} = \frac{1 + 2i - 1}{2} = i, \qquad \overline z = -i.$$

**Răspuns:** $a = 0$, $b = -1$. *Barem: 2p, 1p, 2p.*

### 2. Vârful parabolei $f(x) = x^2 + 4x - 12$

$x_V = -2$, $y_V = f(-2) = 4 - 8 - 12 = -16$.

**Răspuns:** $V(-2, -16)$. *Barem: 2p, 3p.*

### 3. $\log_3(x^2 - 4) = \log_3(6x - 12)$

$x^2 - 4 = 6x - 12 \iff x^2 - 6x + 8 = 0 \iff x \in \{2, 4\}$. Pentru $x = 2$ argumentele sunt $0$ — nu convine; $x = 4$: $12 = 12 > 0$ ✔.

**Răspuns:** $x = 4$. *Barem: 2p, 3p.*

### 4. Probabilitatea ca un număr de trei cifre să fie divizibil cu 100

Favorabile: $100, 200, \dots, 900$ — 9. Posibile: 900.

**Răspuns:** $p = \dfrac{9}{900} = \dfrac1{100}$. *Barem: 2p, 1p, 2p.*

### 5. $\vec{AB} = 4\vec i - 3\vec j$, $\vec{BC} = 2\vec i - 5\vec j$; lungimea lui $\vec{AB} + \vec{AC} + \vec{BC}$

$\vec{AC} = \vec{AB} + \vec{BC} = 6\vec i - 8\vec j$, deci $|\vec{AC}| = \sqrt{36 + 64} = 10$. Atunci

$$\vec{AB} + \vec{AC} + \vec{BC} = (\vec{AB} + \vec{BC}) + \vec{AC} = 2\vec{AC},$$

cu lungimea $20$.

**Răspuns:** $20$. *Barem: 2p, 3p.*

### 6. $AC$, știind $BC = 8$, $A = \dfrac\pi4$, $C = \dfrac{7\pi}{12}$

$B = \pi - \dfrac\pi4 - \dfrac{7\pi}{12} = \dfrac{\pi}{6}$. Teorema sinusurilor:

$$\frac{BC}{\sin A} = \frac{AC}{\sin B} \Rightarrow AC = \frac{8\cdot\frac12}{\frac{\sqrt2}{2}} = \frac{8}{\sqrt2} = 4\sqrt2.$$

**Răspuns:** $AC = 4\sqrt2$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} x & 1 & 2\\ 2 & 1 & 1\\ 1 & 0 & -x\end{pmatrix}$

#### a) $A(x) + A(-x) = 2A(0)$

$$A(x) + A(-x) = \begin{pmatrix} 0 & 2 & 4\\ 4 & 2 & 2\\ 2 & 0 & 0\end{pmatrix} = 2\begin{pmatrix} 0 & 1 & 2\\ 2 & 1 & 1\\ 1 & 0 & 0\end{pmatrix} = 2A(0).$$

*Barem: 2p, 3p.*

#### b) $x$ cu $\det(A(x)) = 0$

Sarrus:

$$\det(A(x)) = -x^2 + 1 + 0 - 2 - 0 + 2x = -x^2 + 2x - 1 = -(x - 1)^2.$$

**Răspuns:** $x = 1$. *Barem: 3p, 2p.*

#### c) Există o infinitate de matrice $X$ cu $A(1)X = O_{3,1}$

Pentru $X = (x, y, z)^T$, ecuația este sistemul omogen

$$\begin{cases} x + y + 2z = 0\\ 2x + y + z = 0\\ x - z = 0\end{cases}$$

cu determinantul $\det A(1) = 0$, deci sistemul are o infinitate de soluții. Concret: $x = z$, $y = -3z$, adică $X = (\alpha, -3\alpha, \alpha)^T$, $\alpha \in \mathbb R$. $\blacksquare$ *Barem: 3p, 2p.*

### 2. $f = X^3 + mX^2 + mX + 1$

#### a) $f(-1)$

$-1 + m - m + 1 = 0$. **Răspuns:** $0$. *Barem: 2p, 3p.*

#### b) $m$ cu $x_1^2 + x_2^2 + x_3^2 = -1$

Viète: $\sum x_i = -m$, $\sum x_ix_j = m$, deci $\sum x_i^2 = m^2 - 2m = -1 \iff (m - 1)^2 = 0$.

**Răspuns:** $m = 1$. *Barem: 2p, 1p, 2p.*

#### c) $m$ pentru care toate rădăcinile sunt reale

Din a), $X + 1 \mid f$:

$$f = (X + 1)\big(X^2 + (m - 1)X + 1\big).$$

Toate rădăcinile sunt reale $\iff \Delta = (m - 1)^2 - 4 \ge 0 \iff |m - 1| \ge 2$.

**Răspuns:** $m \in (-\infty, -1] \cup [3, +\infty)$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \sqrt{x^2 + x + 1}$

#### a) $f'(x)$

$$f'(x) = \frac{2x + 1}{2\sqrt{x^2 + x + 1}}.$$

*Barem: 2p, 3p.*

#### b) Asimptota spre $+\infty$

$$m = \lim_{x\to+\infty}\frac{f(x)}{x} = 1, \qquad n = \lim_{x\to+\infty}\left(\sqrt{x^2 + x + 1} - x\right) = \lim_{x\to+\infty}\frac{x + 1}{\sqrt{x^2 + x + 1} + x} = \frac12.$$

**Răspuns:** $y = x + \dfrac12$ (asimptotă oblică). *Barem: 2p, 2p, 1p.*

#### c) Intervalele de monotonie

$f'(x) = 0 \iff x = -\dfrac12$; semnul lui $f'$ este semnul lui $2x + 1$.

**Răspuns:** $f$ descrescătoare pe $\left(-\infty, -\dfrac12\right]$ și crescătoare pe $\left[-\dfrac12, +\infty\right)$. *Barem: 1p, 2p, 2p.*

### 2. $I_n = \displaystyle\int_0^1(1 - x)^ne^x\,dx$

#### a) $I_1$

Prin părți ($u = 1 - x$, $v' = e^x$):

$$I_1 = (1 - x)e^x\Big|_0^1 + \int_0^1 e^x\,dx = -1 + e - 1 = e - 2.$$

**Răspuns:** $I_1 = e - 2$. *Barem: 3p, 2p.*

#### b) $I_{n+1} = (n + 1)I_n - 1$

Prin părți cu $u = (1 - x)^{n+1}$, $u' = -(n+1)(1 - x)^n$:

$$I_{n+1} = (1 - x)^{n+1}e^x\Big|_0^1 + (n + 1)\int_0^1(1 - x)^ne^x\,dx = -1 + (n + 1)I_n.$$

*Barem: 2p, 3p.*

#### c) $I_n = n!\left(e - 1 - \dfrac1{1!} - \ldots - \dfrac1{n!}\right)$

Inducție după $n$.

- $n = 1$: $1!\left(e - 1 - 1\right) = e - 2 = I_1$ ✔.
- Dacă $I_k = k!\left(e - 1 - \frac1{1!} - \dots - \frac1{k!}\right)$, din b):

$$I_{k+1} = (k + 1)!\left(e - 1 - \frac1{1!} - \dots - \frac1{k!}\right) - 1 = (k+1)!\left(e - 1 - \frac1{1!} - \dots - \frac1{k!} - \frac{1}{(k+1)!}\right).$$

Deci formula este adevărată pentru orice $n \ge 1$. $\blacksquare$ *Barem: 1p, 4p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a = 0$, $b = -1$ |
| I.2 | $V(-2, -16)$ |
| I.3 | $x = 4$ |
| I.4 | $p = \tfrac1{100}$ |
| I.5 | $20$ |
| I.6 | $AC = 4\sqrt2$ |
| II.1.b | $x = 1$ |
| II.2.a | $0$ |
| II.2.b | $m = 1$ |
| II.2.c | $m \in (-\infty, -1] \cup [3, \infty)$ |
| III.1.b | $y = x + \tfrac12$ |
| III.2.a | $e - 2$ |

## Ce merită reținut din model

- **Sistem omogen cu determinant nul** $\Rightarrow$ o infinitate de soluții.
- **Polinom reciproc** ($X^3 + mX^2 + mX + 1$): are rădăcina $-1$; factorizează și studiază $\Delta$ factorului de gradul 2.
- **Recurențe pentru integrale**: integrarea prin părți scade exponentul; formula explicită se demonstrează prin inducție.
