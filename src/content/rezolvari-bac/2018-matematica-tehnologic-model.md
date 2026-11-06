Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2018 la Matematică M_tehnologic**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $n = \sqrt8\left(\sqrt2 + 1\right) - 2\sqrt2$ este pătratul unui număr natural

$\sqrt8\cdot\sqrt2 = \sqrt{16} = 4$, iar $\sqrt8 = 2\sqrt2$:

$$n = 4 + 2\sqrt2 - 2\sqrt2 = 4 = 2^2.$$

*Barem: 2p desfacerea parantezei, 3p finalizarea.*

### 2. $f(x) = x^2 - x + 2$, $g(x) = x + 1$; $f(a) = g(a)$

$$a^2 - a + 2 = a + 1 \iff a^2 - 2a + 1 = 0 \iff (a-1)^2 = 0 \iff a = 1.$$

**Răspuns:** $a = 1$. *Barem: 2p expresiile, 3p soluția.*

### 3. Ecuația $\sqrt{2x^2 - 6x + 5} = x - 1$

Ridicăm la pătrat: $2x^2 - 6x + 5 = x^2 - 2x + 1 \iff x^2 - 4x + 4 = 0 \iff (x-2)^2 = 0 \iff x = 2$.

**Verificare:** $\sqrt{8 - 12 + 5} = 1 = 2 - 1$ ✔.

**Răspuns:** $x = 2$. *Barem: 3p ecuația de gradul II, 2p soluția care convine.*

### 4. Numere de trei cifre distincte cu cifre din $\{1,2,3,4,5\}$

Prima cifră: 5 moduri; a doua: 4 moduri; a treia: 3 moduri.

$$5\cdot4\cdot3 = 60.$$

**Răspuns:** 60. *Barem: 1p + 1p primele cifre, 3p finalizarea.*

### 5. Dreapta prin mijlocul lui $AO$, paralelă cu $AB$; $A(2,1)$, $B(3,0)$

$m_{AB} = \dfrac{0 - 1}{3 - 2} = -1$, deci $m_d = -1$. Mijlocul lui $AO$: $M\left(1, \frac12\right)$.

$$d:\ y - \frac12 = -(x - 1) \iff y = -x + \frac32.$$

**Răspuns:** $d: y = -x + \dfrac32$ (sau $2x + 2y - 3 = 0$). *Barem: 2p panta, 3p ecuația.*

### 6. $(\sin x + 7\cos x)^2 + (7\sin x - \cos x)^2 = 50$

$$(\sin x + 7\cos x)^2 = \sin^2 x + 14\sin x\cos x + 49\cos^2 x,$$
$$(7\sin x - \cos x)^2 = 49\sin^2 x - 14\sin x\cos x + \cos^2 x.$$

Adunând, termenii mixți se reduc: $50\sin^2 x + 50\cos^2 x = 50(\sin^2 x + \cos^2 x) = 50$. $\blacksquare$ *Barem: 2p primul pătrat, 3p finalizarea.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(m) = \begin{pmatrix} 1 & 2\\ m & m+1\end{pmatrix}$

#### a) $\det(A(0)) = 1$

$$\det\begin{pmatrix} 1 & 2\\ 0 & 1\end{pmatrix} = 1 - 0 = 1.$$

*Barem: 2p scrierea, 3p calculul.*

#### b) $A(m) + A(-m) = 2A(0)$

$$\begin{pmatrix} 1 & 2\\ m & m+1\end{pmatrix} + \begin{pmatrix} 1 & 2\\ -m & -m+1\end{pmatrix} = \begin{pmatrix} 2 & 4\\ 0 & 2\end{pmatrix} = 2\begin{pmatrix} 1 & 2\\ 0 & 1\end{pmatrix} = 2A(0).$$

*Barem: 3p suma, 2p finalizarea.*

#### c) $X$ cu $A(2)\cdot X = A(5)$

$A(2) = \begin{pmatrix} 1 & 2\\ 2 & 3\end{pmatrix}$, $\det A(2) = 3 - 4 = -1 \ne 0$, deci $A(2)^{-1} = \dfrac{1}{-1}\begin{pmatrix} 3 & -2\\ -2 & 1\end{pmatrix} = \begin{pmatrix} -3 & 2\\ 2 & -1\end{pmatrix}$.

$$X = A(2)^{-1}A(5) = \begin{pmatrix} -3 & 2\\ 2 & -1\end{pmatrix}\begin{pmatrix} 1 & 2\\ 5 & 6\end{pmatrix} = \begin{pmatrix} 7 & 6\\ -3 & -2\end{pmatrix}.$$

**Răspuns:** $X = \begin{pmatrix} 7 & 6\\ -3 & -2\end{pmatrix}$. *Barem: 3p inversa, 2p matricea $X$.*

### 2. $x\circ y = 3xy + 3x + 3y + 2$

#### a) $x\circ y = 3(x+1)(y+1) - 1$

$$3xy + 3x + 3y + 3 - 1 = 3x(y+1) + 3(y+1) - 1 = 3(x+1)(y+1) - 1.$$

*Barem: 2p scrierea $2 = 3 - 1$, 3p factorizarea.*

#### b) $x\circ\left(-\frac23\right) = x$

$$x\circ\left(-\frac23\right) = 3(x+1)\cdot\frac13 - 1 = x + 1 - 1 = x.$$

*Barem: 3p înlocuirea, 2p finalizarea.*

#### c) Numerele naturale $n$ cu $n\circ(n-1) < 17$

$$3(n+1)n - 1 < 17 \iff 3n^2 + 3n - 18 < 0 \iff n^2 + n - 6 < 0 \iff (n+3)(n-2) < 0 \iff n \in (-3, 2).$$

**Răspuns:** $n \in \{0, 1\}$. *Barem: 3p inecuația, 2p numerele naturale.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(2,+\infty)\to\mathbb R$, $f(x) = \dfrac{x^2 + 6x}{x - 2}$

#### a) $f'(x) = \dfrac{(x-6)(x+2)}{(x-2)^2}$

$$f'(x) = \frac{(2x+6)(x-2) - (x^2 + 6x)}{(x-2)^2} = \frac{2x^2 + 2x - 12 - x^2 - 6x}{(x-2)^2} = \frac{x^2 - 4x - 12}{(x-2)^2} = \frac{(x-6)(x+2)}{(x-2)^2}.$$

*Barem: 3p derivarea câtului, 2p finalizarea.*

#### b) Asimptota oblică spre $+\infty$

$$m = \lim_{x\to+\infty}\frac{f(x)}{x} = \lim_{x\to+\infty}\frac{x^2 + 6x}{x^2 - 2x} = 1,$$
$$n = \lim_{x\to+\infty}\big(f(x) - x\big) = \lim_{x\to+\infty}\frac{x^2 + 6x - x^2 + 2x}{x - 2} = \lim_{x\to+\infty}\frac{8x}{x-2} = 8.$$

**Răspuns:** $y = x + 8$. *Barem: 2p panta, 3p ordonata la origine și ecuația.*

#### c) $f$ nu are puncte de inflexiune

Scriem $f(x) = x + 8 + \dfrac{16}{x-2}$ (împărțind $x^2 + 6x$ la $x - 2$: cât $x + 8$, rest $16$). Atunci $f'(x) = 1 - \dfrac{16}{(x-2)^2}$ și

$$f''(x) = \frac{32}{(x-2)^3} > 0 \quad\text{pentru orice } x > 2.$$

$f''$ nu își schimbă semnul ($f$ este convexă pe tot domeniul), deci $f$ nu are puncte de inflexiune. *Barem: 3p $f''$, 2p concluzia.*

### 2. $f(x) = \dfrac{1}{e^x + 1}$

#### a) $\displaystyle\int_0^1 (e^x + 1)f(x)\,dx = 1$

$(e^x + 1)f(x) = 1$, deci $\displaystyle\int_0^1 1\,dx = x\Big|_0^1 = 1$. *Barem: 3p simplificarea, 2p calculul.*

#### b) $\displaystyle\int_0^1 \frac{x}{f(x)}\,dx = \frac32$

$\dfrac{x}{f(x)} = x(e^x + 1) = xe^x + x$. Primitiva lui $xe^x$ este $(x-1)e^x$:

$$\int_0^1 xe^x\,dx + \int_0^1 x\,dx = (x-1)e^x\Big|_0^1 + \frac{x^2}{2}\Big|_0^1 = (0 + 1) + \frac12 = \frac32.$$

*Barem: 2p separarea, 3p calculul.*

#### c) Volumul pentru $g(x) = \sqrt{e^x f(x)}$, $x\in[0,1]$

$g^2(x) = \dfrac{e^x}{e^x + 1}$, iar numărătorul este derivata numitorului:

$$V = \pi\int_0^1 \frac{e^x}{e^x + 1}\,dx = \pi\ln(e^x + 1)\Big|_0^1 = \pi\big(\ln(e+1) - \ln 2\big) = \pi\ln\frac{e+1}{2}.$$

**Răspuns:** $V = \pi\ln\dfrac{e+1}{2}$. *Barem: 2p formula volumului, 3p calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $n = 4 = 2^2$ |
| I.2 | $a = 1$ |
| I.3 | $x = 2$ |
| I.4 | 60 |
| I.5 | $y = -x + \frac32$ |
| II.1.c | $X = \begin{pmatrix}7&6\\-3&-2\end{pmatrix}$ |
| II.2.c | $n \in \{0, 1\}$ |
| III.1.b | $y = x + 8$ |
| III.2.c | $V = \pi\ln\frac{e+1}{2}$ |

## Ce merită reținut din modelul 2018

- **Legea $axy + ax + ay + a - 1$** se scrie $a(x+1)(y+1) - 1$; elementul neutru se citește apoi ușor.
- **Ecuația $AX = B$**: $X = A^{-1}B$ (atenție la ordinea înmulțirii!).
- **Funcții raționale**: împarte numărătorul la numitor — derivatele și asimptota se văd imediat.
- **$\int\frac{u'}{u} = \ln|u|$** apare foarte des la volume și arii.
