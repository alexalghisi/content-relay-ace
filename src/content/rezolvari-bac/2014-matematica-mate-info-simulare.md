Rezolvarea completă a subiectului de **Simulare Bacalaureat 2014 la Matematică M_mate-info** (clasa a XII-a). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $a, b$ reali cu $\dfrac{1+i}{1-i} = a + ib$

$$\frac{1+i}{1-i} = \frac{(1+i)^2}{2} = \frac{2i}{2} = i.$$

**Răspuns:** $a = 0$, $b = 1$. *Barem: 3p, 2p.*

### 2. Intersecțiile graficului lui $f(x) = x^2 - 6x + 8$ cu axele

- $Ox$: $x^2 - 6x + 8 = 0 \Rightarrow x \in \{2, 4\}$: punctele $(2, 0)$, $(4, 0)$;
- $Oy$: $f(0) = 8$: punctul $(0, 8)$. *Barem: 3p, 2p.*

### 3. $9^{\frac{x+2}{2}} + 3^{x+1} = 36$

$9^{\frac{x+2}{2}} = 3^{x+2} = 3\cdot 3^{x+1}$, deci $4\cdot 3^{x+1} = 36 \iff 3^{x+1} = 9 \iff x = 1$.

**Răspuns:** $x = 1$. *Barem: 2p, 3p.*

### 4. Probabilitatea ca un număr de două cifre să nu conțină cifra 6

Cifra zecilor: 8 variante ($1$–$9$ fără $6$); cifra unităților: 9 variante ($0$–$9$ fără $6$) — $72$ favorabile din 90.

**Răspuns:** $p = \dfrac{72}{90} = \dfrac45$. *Barem: 2p, 1p, 2p.*

### 5. Paralela prin $C(0, -2)$ la $AB$, $A(-1, 2)$, $B(2, 3)$

$m_{AB} = \dfrac{3 - 2}{2 + 1} = \dfrac13$, deci $y + 2 = \dfrac13x$.

**Răspuns:** $y = \dfrac13x - 2$. *Barem: 3p, 2p.*

### 6. $x \in \left(0, \dfrac\pi2\right)$ cu $\dfrac{1 + \sin x}{\sin x} = \dfrac{1 + \cos x}{\cos x}$

Echivalent: $\dfrac{1}{\sin x} + 1 = \dfrac{1}{\cos x} + 1 \iff \sin x = \cos x$; în primul cadran $x = \dfrac\pi4$.

**Răspuns:** $x = \dfrac\pi4$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix} a & 1 & 1\\ 1 & a & 1\\ 1 & 1 & a\end{pmatrix}$

#### a) $\det(A(a)) = (a + 2)(a - 1)^2$

Adunăm coloanele la prima și scoatem factorul $a + 2$, apoi scădem prima linie din celelalte:

$$\det A(a) = (a + 2)\begin{vmatrix} 1 & 1 & 1\\ 1 & a & 1\\ 1 & 1 & a\end{vmatrix} = (a + 2)\begin{vmatrix} 1 & 1 & 1\\ 0 & a - 1 & 0\\ 0 & 0 & a - 1\end{vmatrix} = (a + 2)(a - 1)^2.$$

*Barem: 3p, 2p.*

#### b) Inversa lui $A(-1)$

$\det A(-1) = 1\cdot 4 = 4 \ne 0$. Calculând adjuncta (sau verificând direct):

$$A(-1)^{-1} = \begin{pmatrix} 0 & \frac12 & \frac12\\ \frac12 & 0 & \frac12\\ \frac12 & \frac12 & 0\end{pmatrix}.$$

Verificare: linia $(-1, 1, 1)$ înmulțită cu coloana $(0, \frac12, \frac12)$ dă $1$, iar cu $(\frac12, 0, \frac12)$ dă $0$ etc. *Barem: 2p, 3p.*

#### c) Perechile $(a, b)$ naturale cu suma elementelor lui $A(a)A(b)$ egală cu $24$

$$A(a)A(b) = \begin{pmatrix} ab + 2 & a + b + 1 & a + b + 1\\ a + b + 1 & ab + 2 & a + b + 1\\ a + b + 1 & a + b + 1 & ab + 2\end{pmatrix}.$$

Suma: $3(ab + 2) + 6(a + b + 1) = 24 \iff ab + 2a + 2b + 4 = 8 \iff (a + 2)(b + 2) = 8$.

Cu $a + 2, b + 2 \ge 2$: $\{a+2, b+2\} = \{2, 4\}$.

**Răspuns:** $(a, b) \in \{(0, 2), (2, 0)\}$. *Barem: 2p, 1p, 2p.*

### 2. Legea $x * y = 3xy - 3x - 3y + 4$ (asociativă, cu element neutru)

#### a) $x * y = 3(x - 1)(y - 1) + 1$

$3(xy - x - y + 1) + 1 = 3xy - 3x - 3y + 4$. *Barem: 3p, 2p.*

#### b) $\dfrac{1}{1007} * \dfrac{2}{1007} * \ldots * \dfrac{2014}{1007}$

$x * 1 = 1 * x = 1$ pentru orice $x$, iar printre termeni se află $\dfrac{1007}{1007} = 1$. Grupând în jurul lui:

**Răspuns:** $1$. *Barem: 2p, 3p.*

#### c) Numerele egale cu simetricele lor

Elementul neutru: $3(x - 1)(e - 1) + 1 = x \iff (x - 1)\big(3(e - 1) - 1\big) = 0$ pentru orice $x$, deci $e = \dfrac43$.

$x$ este propriul simetric $\iff x * x = \dfrac43 \iff 3(x - 1)^2 = \dfrac13 \iff (x - 1)^2 = \dfrac19$.

**Răspuns:** $x \in \left\{\dfrac23, \dfrac43\right\}$. *Barem: 1p, 2p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(1, +\infty) \to \mathbb R$, $f(x) = \dfrac{x^2 + 2}{x - 1}$

#### a) Asimptota oblică

$$m = \lim_{x\to\infty}\frac{x^2 + 2}{x^2 - x} = 1, \qquad n = \lim_{x\to\infty}\left(\frac{x^2 + 2}{x - 1} - x\right) = \lim_{x\to\infty}\frac{x + 2}{x - 1} = 1.$$

**Răspuns:** $y = x + 1$. *Barem: 2p, 3p.*

#### b) Tangenta în $x = 2$

$f(2) = 6$; $f'(x) = \dfrac{2x(x - 1) - (x^2 + 2)}{(x-1)^2} = \dfrac{x^2 - 2x - 2}{(x-1)^2}$, deci $f'(2) = -2$.

$$y - 6 = -2(x - 2) \iff y = -2x + 10.$$

*Barem: 3p, 2p.*

#### c) $\lim\limits_{x\to+\infty}\left(\dfrac{f(x)}{x}\right)^{x+3}$

$\dfrac{f(x)}{x} = \dfrac{x^2 + 2}{x^2 - x} = 1 + \dfrac{x + 2}{x^2 - x}$ — cazul $1^\infty$:

$$\lim_{x\to\infty}\left(1 + \frac{x+2}{x^2 - x}\right)^{x + 3} = e^{\lim\limits_{x\to\infty}\frac{(x+2)(x+3)}{x^2 - x}} = e^1 = e.$$

**Răspuns:** $e$. *Barem: 3p, 2p.*

### 2. $I_n = \displaystyle\int_0^1\frac{x^n}{x + 1}dx$

#### a) $I_1$

$$I_1 = \int_0^1\left(1 - \frac{1}{x + 1}\right)dx = 1 - \ln 2.$$

*Barem: 2p, 3p.*

#### b) $I_{n+1} + I_n = \dfrac{1}{n + 1}$

$$I_{n+1} + I_n = \int_0^1\frac{x^n(x + 1)}{x + 1}dx = \int_0^1 x^n\,dx = \frac{1}{n + 1}.$$

*Barem: 3p, 2p.*

#### c) $\lim\limits_{n\to\infty}(n + 1)I_n = \dfrac12$

$I_{n+1} - I_n = \displaystyle\int_0^1\frac{x^n(x - 1)}{x + 1}dx \le 0$, deci șirul e descrescător. Din b):

$$2I_{n+1} \le I_{n+1} + I_n = \frac{1}{n+1} \le 2I_n.$$

Deci $I_n \ge \dfrac{1}{2(n+1)}$ și (scriind relația pentru $n - 1$) $I_n \le \dfrac{1}{2n}$. Înmulțind cu $n + 1$:

$$\frac12 \le (n + 1)I_n \le \frac{n + 1}{2n} \to \frac12.$$

Criteriul cleștelui: limita este $\dfrac12$. $\blacksquare$ *Barem: 1p, 2p, 1p, 1p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a = 0$, $b = 1$ |
| I.2 | $(2,0)$, $(4,0)$, $(0,8)$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac45$ |
| I.5 | $y = \tfrac13x - 2$ |
| I.6 | $x = \tfrac\pi4$ |
| II.1.c | $(0,2)$, $(2,0)$ |
| II.2.b | $1$ |
| II.2.c | $x \in \{\tfrac23, \tfrac43\}$ |
| III.1.a | $y = x + 1$ |
| III.1.b | $y = -2x + 10$ |
| III.1.c | $e$ |
| III.2.a | $1 - \ln2$ |

## Ce merită reținut din simulare

- **Legea $3(x-1)(y-1) + 1$**: $1$ este absorbant, $\frac43$ este neutru.
- **Limite $1^\infty$**: $\lim(1 + u)^v = e^{\lim uv}$ când $u \to 0$, $v \to \infty$.
- **$\lim nI_n$**: monotonia + relația de recurență dau încadrarea.
