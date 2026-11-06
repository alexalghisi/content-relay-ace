Rezolvarea completă a subiectului de **Bacalaureat 2020 la Matematică M_șt-nat**, sesiunea specială, **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\log_2 7 + \log_2 6 - \log_2 21 = 1$

$$\log_2\frac{7\cdot 6}{21} = \log_2 2 = 1.\ \blacksquare$$

*Barem: 3p, 2p.*

### 2. $f(x) = x^2$, $g(x) = 2x - 1$: $f(x) \ge g(x)$

$f(x) - g(x) = x^2 - 2x + 1 = (x - 1)^2 \ge 0$ pentru orice $x$. $\blacksquare$ *Barem: 3p, 2p.*

### 3. Ecuația $\sqrt{x^2 + 12} = 2x$

Ridicăm la pătrat: $x^2 + 12 = 4x^2 \iff x^2 = 4 \iff x = \pm 2$. Membrul drept trebuie să fie $\ge 0$, deci $x = -2$ nu convine.

**Răspuns:** $x = 2$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un $x \in \{-2,-1,0,1,2\}$ să verifice $x^2 - 3x + 2 = 0$

5 cazuri posibile. $x^2 - 3x + 2 = (x - 1)(x - 2) = 0 \iff x \in \{1, 2\}$, ambele în mulțime: 2 cazuri favorabile.

$$p = \frac25.$$

*Barem: 2p, 2p, 1p.*

### 5. $\vec u = a\vec i + 6\vec j$, $\vec v = 2\vec i + b\vec j$, $\vec u = 3\vec v$

$a\vec i + 6\vec j = 6\vec i + 3b\vec j \iff a = 6$, $3b = 6 \iff b = 2$.

**Răspuns:** $a = 6$, $b = 2$. *Barem: 3p, 2p.*

### 6. $E(x) = \sin^2 x - \cos^2 x + \sqrt2(\sin x + \cos x) - 2$; arătați că $E\left(\frac\pi4\right) = 0$

$$E\left(\tfrac\pi4\right) = \tfrac12 - \tfrac12 + \sqrt2\left(\tfrac{\sqrt2}2 + \tfrac{\sqrt2}2\right) - 2 = \sqrt2\cdot\sqrt2 - 2 = 0.\ \blacksquare$$

*Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}x + 2 & x + 3\\ x - 3 & x - 2\end{pmatrix}$

**a)** $\det A(x) = (x+2)(x-2) - (x+3)(x-3) = (x^2 - 4) - (x^2 - 9) = 5$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** Elementele lui $A(x)$ sunt de gradul întâi în $x$, deci $A(-k) + A(k) = 2A(0)$. Grupând:

$$[A(-3) + A(3)] + [A(-2) + A(2)] + [A(-1) + A(1)] = 6A(0) \Rightarrow n = 6.$$

**Răspuns:** $n = 6$. *Barem: 3p, 2p.*

**c)** $A(1) = \begin{pmatrix}3 & 4\\ -2 & -1\end{pmatrix}$,

$$A(x)A(1) = \begin{pmatrix}3(x+2) - 2(x+3) & 4(x+2) - (x+3)\\ 3(x-3) - 2(x-2) & 4(x-3) - (x-2)\end{pmatrix} = \begin{pmatrix}x & 3x + 5\\ x - 5 & 3x - 10\end{pmatrix}.$$

Egalând cu $\begin{pmatrix}1 & 8\\ -4 & -7\end{pmatrix}$: $x = 1$ (toate cele patru egalități se verifică).

**Răspuns:** $x = 1$. *Barem: 3p, 2p.*

### 2. $x * y = \dfrac{x + y + 1}{x^2 + y^2 + 1}$

**a)** $0 * 1 = \dfrac{0 + 1 + 1}{0 + 1 + 1} = 1$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $x * x = \dfrac{2x + 1}{2x^2 + 1} = 1 \iff 2x + 1 = 2x^2 + 1 \iff 2x(x - 1) = 0$.

**Răspuns:** $x \in \{0, 1\}$. *Barem: 2p, 3p.*

**c)** $x * (-x) = \dfrac{1}{2x^2 + 1}$, iar

$$\frac{1}{2x^2+1} \le 1 \iff \frac{1 - 2x^2 - 1}{2x^2+1} \le 0 \iff \frac{-2x^2}{2x^2 + 1} \le 0,$$

adevărat pentru orice $x$. $\blacksquare$ *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x\sqrt{x^2 + 2x + 2}$

**a)** $$f'(x) = \sqrt{x^2+2x+2} + x\cdot\frac{2x + 2}{2\sqrt{x^2+2x+2}} = \frac{x^2 + 2x + 2 + x^2 + x}{\sqrt{x^2+2x+2}} = \frac{2x^2 + 3x + 2}{\sqrt{x^2+2x+2}}.\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** $$\frac{f'(x)}{f(x)} = \frac{2x^2 + 3x + 2}{x(x^2 + 2x + 2)} = \frac{2x^2 + 3x + 2}{x^3 + 2x^2 + 2x} \xrightarrow[x\to+\infty]{} 0$$

(gradul numitorului e mai mare).

**Răspuns:** $0$. *Barem: 3p, 2p.*

**c)** $\lim\limits_{x\to-\infty} f(x) = -\infty$ și $\lim\limits_{x\to+\infty}f(x) = +\infty$. Cum $f$ este continuă, are proprietatea lui Darboux, deci ia orice valoare reală $a$: ecuația $f(x) = a$ are cel puțin o soluție. $\blacksquare$

*Barem: 2p, 3p.*

### 2. $f(x) = xe^x + x$

**a)** $$\int_0^1 (f(x) - xe^x)\,dx = \int_0^1 x\,dx = \frac12.\ \blacksquare$$

*Barem: 2p, 3p.*

**b)** $\dfrac1x f(x^2) = \dfrac{x^2e^{x^2} + x^2}{x} = xe^{x^2} + x$, deci

$$\int_1^2\left(xe^{x^2} + x\right)dx = \left(\frac12e^{x^2} + \frac{x^2}{2}\right)\Big|_1^2 = \frac12e^4 - \frac12e + 2 - \frac12 = \frac{e^4 - e + 3}{2}.\ \blacksquare$$

*Barem: 3p, 2p.*

**c)** Prin părți, cu $x' = 1$ și $F' = f$:

$$\int_0^1 F(x)\,dx = xF(x)\Big|_0^1 - \int_0^1 xf(x)\,dx = F(1) - \int_0^1\left(x^2e^x + x^2\right)dx.$$

O primitivă a lui $x^2e^x$ este $(x^2 - 2x + 2)e^x$, deci, cu $F(1) = 0$:

$$\int_0^1 F(x)\,dx = -\left[(x^2 - 2x + 2)e^x + \frac{x^3}{3}\right]_0^1 = -\left(e + \frac13 - 2\right) = \frac{5 - 3e}{3}.\ \blacksquare$$

*Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.3 | $x = 2$ |
| I.4 | $p = \tfrac25$ |
| I.5 | $a = 6$, $b = 2$ |
| II.1.b | $n = 6$ |
| II.1.c | $x = 1$ |
| II.2.b | $x \in \{0, 1\}$ |
| III.1.b | $0$ |

## Ce merită reținut din varianta 1

- **Matrice cu elemente de gradul I în $x$:** $A(-k) + A(k) = 2A(0)$.
- **Darboux:** o funcție continuă cu limitele $-\infty$ și $+\infty$ este surjectivă.
- **$\int F$ când cunoști doar $F(1)$:** integrează prin părți cu $x' = 1$.
