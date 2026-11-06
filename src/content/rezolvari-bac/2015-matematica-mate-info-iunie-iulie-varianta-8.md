Rezolvarea completă a subiectului de **Bacalaureat 2015 la Matematică M_mate-info**, sesiunea iunie–iulie, **varianta 8**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $(\sqrt5 + 1)^2 + (\sqrt5 - 1)^2 = 12$

$(\sqrt5 + 1)^2 = 6 + 2\sqrt5$, $(\sqrt5 - 1)^2 = 6 - 2\sqrt5$; suma este $12$. *Barem: 2p, 3p.*

### 2. $f(x) = x - 3$: $f(1)f(2)f(3)f(4)$

$f(3) = 0$, deci produsul este $0$. **Răspuns:** $0$. *Barem: 3p, 2p.*

### 3. $\log_2(x^2 - 4x + 4) = 0$

$x^2 - 4x + 4 = 1 \iff x^2 - 4x + 3 = 0 \iff x \in \{1, 3\}$ (ambele verifică, argumentul fiind $1 > 0$).

**Răspuns:** $x \in \{1, 3\}$. *Barem: 2p, 3p.*

### 4. Numere impare de trei cifre distincte formate cu $2, 3, 4$

Cifra unităților trebuie să fie impară: $3$. Celelalte două cifre sunt $2$ și $4$, în orice ordine: $243$ și $423$.

**Răspuns:** 2 numere. *Barem: 2p, 3p.*

### 5. Dreapta $d$ prin $A(1,2)$, perpendiculară pe $AB$, $B(2,3)$

$m_{AB} = 1$, deci $m_d = -1$: $y - 2 = -(x - 1) \iff y = -x + 3$.

**Răspuns:** $y = -x + 3$. *Barem: 3p, 2p.*

### 6. $\sin(\pi - x) + \sin(\pi + x) = 0$

$\sin(\pi - x) = \sin x$, $\sin(\pi + x) = -\sin x$; suma este $0$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $B(x) = \begin{pmatrix} 1 & 0 & x\\ 0 & 1 & 0\\ 3x & 0 & 1\end{pmatrix}$

#### a) $\det(B(0)) = 1$

$B(0) = I_3$, deci $\det = 1$. *Barem: 2p, 3p.*

#### b) $B(x) + B(y) = 2B\left(\dfrac{x+y}{2}\right)$

$$B(x) + B(y) = \begin{pmatrix} 2 & 0 & x + y\\ 0 & 2 & 0\\ 3x + 3y & 0 & 2\end{pmatrix} = 2\begin{pmatrix} 1 & 0 & \frac{x+y}{2}\\ 0 & 1 & 0\\ 3\cdot\frac{x+y}{2} & 0 & 1\end{pmatrix} = 2B\left(\frac{x+y}{2}\right).$$

*Barem: 3p, 2p.*

#### c) $B(x^2 + 1)B(x) = B(x^2 + x + 1)$

În general $B(a)B(b) = \begin{pmatrix} 1 + 3ab & 0 & a + b\\ 0 & 1 & 0\\ 3(a + b) & 0 & 1 + 3ab\end{pmatrix}$. Cu $a = x^2 + 1$, $b = x$: $a + b = x^2 + x + 1$ (coincide), iar colțurile sunt $1 + 3x(x^2 + 1) = 3x^3 + 3x + 1$.

Egalitatea cu $B(x^2 + x + 1)$ (care are colțurile $1$) cere $3x(x^2 + 1) = 0 \iff x = 0$.

**Răspuns:** $x = 0$. *Barem: 3p, 2p.*

### 2. Legea $x\circ y = \dfrac12(x - 3)(y - 3) + 3$ (asociativă)

#### a) $(-3)\circ 3 = 3$

$\frac12(-6)\cdot 0 + 3 = 3$. *Barem: 3p, 2p.*

#### b) $n$ natural cu $n\circ n = 11$

$$\frac12(n - 3)^2 + 3 = 11 \iff (n - 3)^2 = 16 \iff n \in \{-1, 7\}.$$

**Răspuns:** $n = 7$. *Barem: 2p, 3p.*

#### c) $1\circ 2\circ 3\circ\ldots\circ 2015$

$x\circ 3 = 3\circ x = 3$ pentru orice $x$. Deci $(1\circ 2)\circ 3\circ(4\circ\ldots\circ 2015) = 3$.

**Răspuns:** $3$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(1, +\infty) \to \mathbb R$, $f(x) = \dfrac{x + 2}{x - 1}$

#### a) $f'(x) = -\dfrac{3}{(x-1)^2}$

$$f'(x) = \frac{(x - 1) - (x + 2)}{(x - 1)^2} = -\frac{3}{(x - 1)^2}.$$

*Barem: 3p, 2p.*

#### b) $f$ convexă pe $(1, +\infty)$

$f''(x) = \dfrac{6}{(x - 1)^3} > 0$ pentru $x > 1$. *Barem: 3p, 2p.*

#### c) Punctul în care tangenta este paralelă cu $y = -3x$

$f'(x) = -3 \iff (x - 1)^2 = 1 \iff x - 1 = \pm1$; cu $x > 1$: $x = 2$, $f(2) = 4$.

**Răspuns:** $(2, 4)$. *Barem: 3p, 2p.*

### 2. $f(x) = xe^x$

#### a) $\displaystyle\int_1^2\frac1x f(x)\,dx = e(e - 1)$

$$\int_1^2 e^x\,dx = e^2 - e = e(e - 1).$$

*Barem: 3p, 2p.*

#### b) Primitiva $F$ cu $F(1) = 0$

$\displaystyle\int xe^x\,dx = (x - 1)e^x + c$ (prin părți). $F(1) = 0 + c = 0 \Rightarrow c = 0$.

**Răspuns:** $F(x) = (x - 1)e^x$. *Barem: 3p, 2p.*

#### c) $I_n = \displaystyle\int_0^1 x^nf(x)\,dx$; $I_n + (n + 1)I_{n-1} = e$

$I_n = \displaystyle\int_0^1 x^{n+1}e^x\,dx$. Prin părți ($u = x^{n+1}$, $v' = e^x$):

$$I_n = x^{n+1}e^x\Big|_0^1 - (n + 1)\int_0^1 x^ne^x\,dx = e - (n + 1)I_{n-1}.$$

Deci $I_n + (n + 1)I_{n-1} = e$ pentru $n \ge 2$. $\blacksquare$ *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $0$ |
| I.3 | $x \in \{1, 3\}$ |
| I.4 | 2 numere |
| I.5 | $y = -x + 3$ |
| II.1.c | $x = 0$ |
| II.2.b | $n = 7$ |
| II.2.c | $3$ |
| III.1.c | $(2, 4)$ |
| III.2.b | $F(x) = (x - 1)e^x$ |

## Ce merită reținut din varianta 8

- **Drepte paralele cu tangenta**: rezolvă $f'(x) = $ panta dată și ține cont de domeniu.
- **Legea $\frac12(x-3)(y-3) + 3$**: $3$ este element absorbant.
- **Integrale $\int x^ne^x$**: prin părți obții o recurență în care exponentul scade cu 1.
