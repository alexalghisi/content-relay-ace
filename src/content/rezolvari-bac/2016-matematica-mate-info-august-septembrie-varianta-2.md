Rezolvarea completă a subiectului de **Bacalaureat 2016 la Matematică M_mate-info**, sesiunea august–septembrie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Al treilea termen, $a_1 = 2016$, $r = 2$

$a_3 = a_1 + 2r = 2020$. *Barem: 3p, 2p.*

### 2. $A(1,2)$ pe graficul lui $f(x) = x + m$

$1 + m = 2 \iff m = 1$. *Barem: 3p, 2p.*

### 3. $2^{4x - 6} = 4^{3x - 4}$

$4^{3x - 4} = 2^{6x - 8}$, deci $4x - 6 = 6x - 8 \iff x = 1$.

**Răspuns:** $x = 1$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr din $\{1, 2, \dots, 40\}$ să conțină cifra 4

Favorabile: $4, 14, 24, 34, 40$ — 5 din 40.

**Răspuns:** $p = \dfrac18$. *Barem: 1p, 2p, 2p.*

### 5. Ecuația dreptei $AB$, $A(1,2)$, $B(4,5)$

$$y - 2 = \frac{5 - 2}{4 - 1}(x - 1) \iff y = x + 1.$$

*Barem: 3p, 2p.*

### 6. $x \in \left(0, \dfrac\pi2\right)$, $\sin x = \dfrac45$: $\sin 2x = \dfrac{24}{25}$

$\cos x = \sqrt{1 - \frac{16}{25}} = \frac35$ (pozitiv în cadranul I), deci $\sin 2x = 2\cdot\frac45\cdot\frac35 = \frac{24}{25}$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix} 1 & a & 1\\ a & 1 & -1\\ 1 & 1 & -2\end{pmatrix}$, sistemul $\begin{cases} x + ay + z = 1\\ ax + y - z = -1\\ x + y - 2z = 0\end{cases}$

#### a) $\det(A(0)) = -2$

$$\begin{vmatrix} 1 & 0 & 1\\ 0 & 1 & -1\\ 1 & 1 & -2\end{vmatrix} = -2 + 0 + 0 - 1 + 1 - 0 = -2.$$

*Barem: 2p, 3p.*

#### b) $A(a)$ inversabilă pentru $a \ne \pm1$

Sarrus: $\det A(a) = -2 - a + a - 1 + 1 + 2a^2 = 2a^2 - 2 = 2(a - 1)(a + 1)$, nenul pentru $a \ne \pm1$. $\blacksquare$ *Barem: 3p, 2p.*

#### c) $a$ întreg pentru care soluția unică are componente întregi

Soluție unică $\Rightarrow a \ne \pm1$. Verificăm că soluția este $\left(-\dfrac{1}{a-1}, \dfrac{1}{a-1}, 0\right)$:

- a treia ecuație: $x + y - 0 = 0$ ✔;
- prima: $\dfrac{-1 + a}{a - 1} = 1$ ✔;
- a doua: $\dfrac{-a + 1}{a - 1} = -1$ ✔.

$\dfrac{1}{a-1} \in \mathbb Z \iff a - 1 \in \{-1, 1\} \iff a \in \{0, 2\}$.

**Răspuns:** $a \in \{0, 2\}$. *Barem: 3p, 2p.*

### 2. Legea $x\circ y = 3xy + 3x + 3y + 2$ (asociativă)

#### a) $x\circ y = 3(x + 1)(y + 1) - 1$

$3(xy + x + y + 1) - 1 = 3xy + 3x + 3y + 2$. *Barem: 3p, 2p.*

#### b) $f(x) = 3x + 3$: $f(x\circ y) = f(x)f(y)$

$$f(x\circ y) = 3\big(3(x+1)(y+1) - 1\big) + 3 = 9(x+1)(y+1) = (3x + 3)(3y + 3) = f(x)f(y).$$

*Barem: 3p, 2p.*

#### c) $\underbrace{a\circ a\circ\ldots\circ a}_{2016} = 3^{2015} - 1$

Aplicăm $f$ (bijectivă) și b): $\big(f(a)\big)^{2016} = f(3^{2015} - 1) = 3\cdot 3^{2015} = 3^{2016}$.

Deci $f(a) = \pm3$: $3a + 3 = 3 \Rightarrow a = 0$; $3a + 3 = -3 \Rightarrow a = -2$.

**Răspuns:** $a \in \{-2, 0\}$. *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(1, +\infty) \to \mathbb R$, $f(x) = \ln\dfrac{x+1}{x-1}$

#### a) $f'(x) = \dfrac1{x+1} - \dfrac1{x-1}$

Pe $(1, \infty)$, $f(x) = \ln(x + 1) - \ln(x - 1)$, de unde formula. *Barem: 2p, 3p.*

#### b) $f$ convexă pe $(1, +\infty)$

$$f''(x) = -\frac{1}{(x+1)^2} + \frac{1}{(x-1)^2} = \frac{(x+1)^2 - (x-1)^2}{(x-1)^2(x+1)^2} = \frac{4x}{(x-1)^2(x+1)^2} > 0.$$

*Barem: 2p, 3p.*

#### c) $\lim\limits_{n\to\infty}\big(f'(2) + f'(3) + \ldots + f'(n)\big) = -\dfrac32$

Suma telescopică:

$$\sum_{k=2}^n\left(\frac{1}{k+1} - \frac{1}{k-1}\right) = \frac1n + \frac{1}{n+1} - 1 - \frac12 \xrightarrow[n\to\infty]{} -\frac32.$$

*Barem: 3p, 2p.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = \sqrt x + \dfrac{1}{\sqrt x}$

#### a) $\displaystyle\int_1^2\sqrt x\,f(x)\,dx = \frac52$

$\sqrt x f(x) = x + 1$:

$$\left(\frac{x^2}{2} + x\right)\Big|_1^2 = 4 - \frac32 = \frac52.$$

*Barem: 3p, 2p.*

#### b) $\displaystyle\int_1^{e^2}(f(x) - \sqrt x)\ln x\,dx = 4$

Integrandul este $\dfrac{\ln x}{\sqrt x}$; prin părți ($v = 2\sqrt x$):

$$\int\frac{\ln x}{\sqrt x}dx = 2\sqrt x\ln x - 4\sqrt x \Rightarrow (2e\cdot 2 - 4e) - (0 - 4) = 4.$$

*Barem: 3p, 2p.*

#### c) $a > 1$ cu volumul pentru $g = f|_{[1,a]}$ egal cu $\pi\left(\ln a + \dfrac72\right)$

$g^2(x) = x + 2 + \dfrac1x$:

$$V = \pi\left(\frac{x^2}{2} + 2x + \ln x\right)\Big|_1^a = \pi\left(\frac{a^2}{2} + 2a + \ln a - \frac52\right).$$

$\dfrac{a^2}{2} + 2a - \dfrac52 = \dfrac72 \iff a^2 + 4a - 12 = 0 \iff (a + 6)(a - 2) = 0$; cu $a > 1$: $a = 2$.

**Răspuns:** $a = 2$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $2020$ |
| I.2 | $m = 1$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac18$ |
| I.5 | $y = x + 1$ |
| II.1.c | $a \in \{0, 2\}$ |
| II.2.c | $a \in \{-2, 0\}$ |
| III.1.c | $-\tfrac32$ |
| III.2.c | $a = 2$ |

## Ce merită reținut din varianta 2

- **Morfisme pentru compuneri repetate**: $f(a\circ\dots\circ a) = f(a)^n$ transformă ecuația într-una cu puteri.
- **Sume telescopice**: $\frac1{k+1} - \frac1{k-1}$ lasă doar primii și ultimii termeni.
- **Soluții întregi ale unui sistem**: exprimă soluția în funcție de parametru și impune divizibilitatea.
