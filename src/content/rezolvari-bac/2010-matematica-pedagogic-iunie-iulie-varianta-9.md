Rezolvarea completă a subiectului de **Bacalaureat 2010 la Matematică, filiera vocațională, profilul pedagogic**, sesiunea iunie–iulie, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $\log_2\sqrt6 - \log_2\sqrt3$

$$\log_2\sqrt6 - \log_2\sqrt3 = \log_2\frac{\sqrt6}{\sqrt3} = \log_2\sqrt2 = \log_2 2^{1/2} = \frac12.$$

**Răspuns:** $\dfrac12$. *Barem: 2p, 3p.*

### 2. $f(x) = x - 5$; calculați $f(1)\cdot f(2)\cdot\ldots\cdot f(10)$

Printre factori se află $f(5) = 0$, deci produsul este $0$.

**Răspuns:** $0$. *Barem: 3p $f(5) = 0$, 2p concluzia.*

### 3. Ecuația $2^{2x+1} - 2^{x+1} = 24$

Notăm $y = 2^x > 0$: $2^{2x+1} = 2y^2$, $2^{x+1} = 2y$.

$$2y^2 - 2y = 24 \iff y^2 - y - 12 = 0 \iff y \in \{-3, 4\}.$$

$y = -3 < 0$ nu convine; $2^x = 4 \iff x = 2$.

**Răspuns:** $x = 2$. *Barem: 2p, 2p, 1p.*

### 4. Numărul submulțimilor cu două elemente ale lui $A = \{x \in \mathbb N \mid x \le 8\}$

$A = \{0, 1, \dots, 8\}$ are **9** elemente (atenție la $0$!).

$$C_9^2 = \frac{9\cdot 8}{2} = 36.$$

**Răspuns:** $36$. *Barem: 2p, 1p, 2p.*

### 5. $A(3, 4)$, $B(2, m)$ pe dreapta $y = 3x + 20$; mijlocul segmentului $[AB]$

$B$ pe dreaptă: $m = 3\cdot 2 + 20 = 26$. Mijlocul:

$$M\left(\frac{3 + 2}{2}, \frac{4 + 26}{2}\right) = M\left(\frac52, 15\right).$$

**Răspuns:** $M\left(\frac52, 15\right)$. *Barem: 2p $m$, 3p mijlocul.*

### 6. $E(x) = \cos x + \sin 2x$ pentru $x = 30^\circ$

$$E(30^\circ) = \cos 30^\circ + \sin 60^\circ = \frac{\sqrt3}{2} + \frac{\sqrt3}{2} = \sqrt3.$$

**Răspuns:** $\sqrt3$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

$M = \{a + b\sqrt2 \mid a, b \in \mathbb Z\}$, $x \circ y = x + y + \sqrt2$.

### a) $x + y \in M$ pentru orice $x, y \in M$

Fie $x = a + b\sqrt2$, $y = c + d\sqrt2$ cu $a, b, c, d \in \mathbb Z$:

$$x + y = (a + c) + (b + d)\sqrt2 \in M,$$

deoarece $a + c,\ b + d \in \mathbb Z$. *Barem: 2p, 3p.*

### b) $x\cdot y \in M$ pentru orice $x, y \in M$

$$x\cdot y = ac + ad\sqrt2 + bc\sqrt2 + 2bd = (ac + 2bd) + (ad + bc)\sqrt2 \in M.$$

*Barem: 1p, 2p, 2p.*

### c) $x \in M$ cu $x\cdot(1 + \sqrt2)^2 = 1$

$(1 + \sqrt2)^2 = 1 + 2\sqrt2 + 2 = 3 + 2\sqrt2$. Atunci

$$x = \frac{1}{3 + 2\sqrt2} = \frac{3 - 2\sqrt2}{9 - 8} = 3 - 2\sqrt2 \in M.$$

**Răspuns:** $x = 3 - 2\sqrt2$. *Barem: 2p, 3p.*

### d) $\dfrac{1}{1 + \sqrt2}\circ\dfrac{1}{3 + 2\sqrt2} \in M$

Raționalizăm: $\dfrac{1}{1+\sqrt2} = \sqrt2 - 1$, $\dfrac{1}{3 + 2\sqrt2} = 3 - 2\sqrt2$. Atunci

$$(\sqrt2 - 1)\circ(3 - 2\sqrt2) = \sqrt2 - 1 + 3 - 2\sqrt2 + \sqrt2 = 2 = 2 + 0\cdot\sqrt2 \in M.$$

*Barem: 2p, 2p, 1p.*

### e) Legea „$\circ$" este asociativă

$$(x\circ y)\circ z = x + y + \sqrt2 + z + \sqrt2 = x + y + z + 2\sqrt2 = x\circ(y\circ z).$$

*Barem: 2p, 2p, 1p.*

### f) $(M, \circ)$ este grup

- **Lege de compoziție pe $M$**: $x \circ y = x + y + \sqrt2 \in M$ (din a), cu $\sqrt2 = 0 + 1\cdot\sqrt2 \in M$);
- **Asociativitate**: punctul e);
- **Element neutru**: $x \circ e = x \iff e = -\sqrt2 \in M$ (și $e \circ x = x$, legea fiind comutativă);
- **Simetrice**: $x \circ x' = -\sqrt2 \iff x' = -x - 2\sqrt2 \in M$.

Deci $(M, \circ)$ este grup (chiar abelian). $\blacksquare$ *Barem: 1p, 2p, 2p.*

## Subiectul al III-lea (30 de puncte)

$M = \begin{pmatrix} 2 & 2\\ -1 & -1\end{pmatrix}$, $A(a) = M + aI_2 = \begin{pmatrix} a + 2 & 2\\ -1 & a - 1\end{pmatrix}$.

### a) $M^2 = M$

$$M^2 = \begin{pmatrix} 4 - 2 & 4 - 2\\ -2 + 1 & -2 + 1\end{pmatrix} = \begin{pmatrix} 2 & 2\\ -1 & -1\end{pmatrix} = M.$$

*Barem: 1p, 4p.*

### b) $A(2010)$

$$A(2010) = M + 2010I_2 = \begin{pmatrix} 2012 & 2\\ -1 & 2009\end{pmatrix}.$$

*Barem: 2p, 3p.*

### c) $a$ cu $\det(A(a)) = 2$

$$\det A(a) = (a + 2)(a - 1) + 2 = a^2 + a.$$

$a^2 + a = 2 \iff a^2 + a - 2 = 0 \iff (a - 1)(a + 2) = 0$.

**Răspuns:** $a \in \{-2, 1\}$. *Barem: 2p, 2p, 1p.*

### d) $A^{-1}(1) = \dfrac12\begin{pmatrix} 0 & -2\\ 1 & 3\end{pmatrix}$

$A(1) = \begin{pmatrix} 3 & 2\\ -1 & 0\end{pmatrix}$. Verificăm:

$$A(1)\cdot\frac12\begin{pmatrix} 0 & -2\\ 1 & 3\end{pmatrix} = \frac12\begin{pmatrix} 2 & -6 + 6\\ 0 & 2\end{pmatrix} = I_2,$$

și analog produsul în ordine inversă este $I_2$. *Barem: 2p, 3p.*

### e) $A(a) + (A(a))^t$ este inversabilă pentru orice $a \in \mathbb Z$

$$A(a) + (A(a))^t = \begin{pmatrix} 2a + 4 & 1\\ 1 & 2a - 2\end{pmatrix}, \quad \det = (2a + 4)(2a - 2) - 1 = 4a^2 + 4a - 9.$$

Pentru $a \in \mathbb Z$, $4a^2 + 4a$ este par, deci $4a^2 + 4a - 9$ este **impar**, în particular nenul. Matricea este inversabilă. $\blacksquare$ *Barem: 2p, 2p, 1p.*

### f) Ecuația $X\cdot A(1) = \begin{pmatrix} 1 & 2\\ 2 & 6\end{pmatrix}$

Înmulțim la dreapta cu $A^{-1}(1)$:

$$X = \begin{pmatrix} 1 & 2\\ 2 & 6\end{pmatrix}\cdot\frac12\begin{pmatrix} 0 & -2\\ 1 & 3\end{pmatrix} = \frac12\begin{pmatrix} 2 & 4\\ 6 & 14\end{pmatrix} = \begin{pmatrix} 1 & 2\\ 3 & 7\end{pmatrix}.$$

**Răspuns:** $X = \begin{pmatrix} 1 & 2\\ 3 & 7\end{pmatrix}$. *Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $\tfrac12$ |
| I.2 | $0$ |
| I.3 | $x = 2$ |
| I.4 | $36$ |
| I.5 | $M(\tfrac52, 15)$ |
| I.6 | $\sqrt3$ |
| II.c | $x = 3 - 2\sqrt2$ |
| II.f | element neutru $-\sqrt2$, simetric $-x - 2\sqrt2$ |
| III.b | $\begin{pmatrix}2012&2\\-1&2009\end{pmatrix}$ |
| III.c | $a \in \{-2, 1\}$ |
| III.f | $X = \begin{pmatrix}1&2\\3&7\end{pmatrix}$ |

## Ce merită reținut din varianta 9

- **Produs cu un factor nul**: caută $f(k) = 0$ printre factori înainte de a calcula.
- **$\mathbb N$ conține $0$**: $\{x \in \mathbb N \mid x \le 8\}$ are 9 elemente.
- **Raționalizarea** cu conjugata ($a - b\sqrt2$) arată că inversul lui $3 + 2\sqrt2$ este tot în $M$.
- **Ecuația $XA = B$** se rezolvă cu $X = BA^{-1}$ (inversa la dreapta!).
- **Paritate**: un număr impar nu poate fi $0$ — argument elegant pentru inversabilitate.
