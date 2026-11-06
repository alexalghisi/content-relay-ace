Rezolvarea completă a subiectului de **Bacalaureat 2013 la Matematică M_mate-info**, sesiunea iunie–iulie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $a = 3(3 - 2i) + 2(5 + 3i)$ este real

$$a = 9 - 6i + 10 + 6i = 19 \in \mathbb R.$$

*Barem: 2p + 2p + 1p.*

### 2. $f(x) = 4x - 1$; $f(1) + f(2) + \dots + f(10)$

$$4(1 + 2 + \dots + 10) - 10 = 4\cdot55 - 10 = 210.$$

*Barem: 3p + 2p.*

### 3. Ecuația $\log_2(2x) = \log_2(1 + x)$

Condiții: $x > 0$. Injectivitatea logaritmului: $2x = 1 + x \iff x = 1$, care convine.

**Răspuns:** $x = 1$. *Barem: 3p + 2p.*

### 4. După o scumpire cu 10%, prețul este 2200 lei

$x + \dfrac{10}{100}x = 1{,}1x = 2200 \iff x = 2000$.

**Răspuns:** 2000 de lei. *Barem: 2p + 3p.*

### 5. $\vec u = \vec i + 4\vec j$ și $\vec v = 2\vec i + (a+1)\vec j$ coliniari

$$\frac21 = \frac{a+1}{4} \iff a + 1 = 8 \iff a = 7.$$

*Barem: 3p + 2p.*

### 6. $x \in \left(0, \frac\pi2\right)$ cu $\frac{3\sin x + \cos x}{\sin x} = 4$

$$3\sin x + \cos x = 4\sin x \iff \cos x = \sin x \iff \operatorname{tg} x = 1 \Rightarrow x = \frac\pi4.$$

*Barem: 3p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $D(a,b) = \begin{vmatrix} 1 & 1 & 1\\ a & a^2 & 1\\ b & b^2 & 1\end{vmatrix}$

#### a) $D(2,3) = 2$

$$D(2,3) = \begin{vmatrix} 1 & 1 & 1\\ 2 & 4 & 1\\ 3 & 9 & 1\end{vmatrix} = 4 + 3 + 18 - 12 - 9 - 2 = 2.$$

*Barem: 2p + 3p.*

#### b) $D(a,b) = (a-1)(b-1)(b-a)$

Scădem linia 1 din liniile 2 și 3:

$$D(a,b) = \begin{vmatrix} 1 & 1 & 1\\ a - 1 & a^2 - 1 & 0\\ b - 1 & b^2 - 1 & 0\end{vmatrix} = 1\cdot\begin{vmatrix} a-1 & a^2-1\\ b-1 & b^2-1\end{vmatrix}$$

(dezvoltare după coloana a treia). Scoatem factorii $a - 1$ și $b - 1$:

$$D(a,b) = (a-1)(b-1)\begin{vmatrix} 1 & a+1\\ 1 & b+1\end{vmatrix} = (a-1)(b-1)(b - a).$$

**Răspuns:** da, egalitatea are loc pentru orice $a, b$. *Barem: 2p + 2p + 1p.*

#### c) $n \ge 3$ cu aria triunghiului $P_1P_2P_n$ egală cu $1$, $P_n(n, n^2)$

Aria este $\frac12|\Delta|$, unde

$$\Delta = \begin{vmatrix} 1 & 1 & 1\\ 2 & 4 & 1\\ n & n^2 & 1\end{vmatrix} = D(2, n) = (2-1)(n-1)(n-2) = (n-1)(n-2).$$

$\frac12(n-1)(n-2) = 1 \iff n^2 - 3n + 2 = 2 \iff n(n-3) = 0$, iar $n \ge 3$.

**Răspuns:** $n = 3$. *Barem: 2p + 3p.*

### 2. $f = X^3 - 4X^2 + 3X - m$, rădăcinile $x_1, x_2, x_3$

#### a) Pentru $m = 4$, $f(4) = 8$

$$f(4) = 64 - 64 + 12 - 4 = 8.$$

*Barem: 2p + 3p.*

#### b) $m$ cu $x_1 + x_2 = x_3$

Viète: $x_1 + x_2 + x_3 = 4$, deci $2x_3 = 4$, $x_3 = 2$. Atunci $f(2) = 8 - 16 + 6 - m = -2 - m = 0$.

**Răspuns:** $m = -2$. *Barem: 1p + 2p + 2p.*

#### c) Dacă $x_1^3 + x_2^3 + x_3^3 = 7(x_1 + x_2 + x_3)$, atunci $X - 3 \mid f$

Fiecare rădăcină verifică $x_i^3 = 4x_i^2 - 3x_i + m$. Adunând:

$$\sum x_i^3 = 4\sum x_i^2 - 3\sum x_i + 3m.$$

$\sum x_i = 4$, $\sum x_i^2 = 16 - 2\cdot3 = 10$, deci $\sum x_i^3 = 40 - 12 + 3m = 28 + 3m$.

Condiția: $28 + 3m = 28 \Rightarrow m = 0$. Atunci $f = X^3 - 4X^2 + 3X$ și $f(3) = 27 - 36 + 9 = 0$, deci $X - 3 \mid f$. $\blacksquare$ *Barem: 2p + 1p + 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \cos x + \frac{x^2}{2}$

#### a) $f'(x)$

$$f'(x) = -\sin x + x = x - \sin x.$$

*Barem: 2p + 3p.*

#### b) Tangenta în $x_0 = 0$

$f(0) = 1$, $f'(0) = 0$, deci $y - 1 = 0$.

**Răspuns:** $y = 1$. *Barem: 2p + 2p + 1p.*

#### c) $f(x) \ge 1$ pentru orice $x$

$f''(x) = 1 - \cos x \ge 0$, deci $f'$ este crescătoare. Cum $f'(0) = 0$: $f'(x) \le 0$ pentru $x \le 0$ și $f'(x) \ge 0$ pentru $x \ge 0$. Deci $f$ are minim global în $0$:

$$f(x) \ge f(0) = 1. \ \blacksquare$$

*Barem: 2p + 2p + 1p.*

### 2. $I_n = \displaystyle\int_0^1 x^ne^x\,dx$

#### a) $I_1$

Prin părți:

$$I_1 = xe^x\Big|_0^1 - \int_0^1 e^x\,dx = e - (e - 1) = 1.$$

*Barem: 3p + 2p.*

#### b) $I_{n+1} + (n+1)I_n = e$

Prin părți cu $u = x^{n+1}$, $v' = e^x$:

$$I_{n+1} = x^{n+1}e^x\Big|_0^1 - (n+1)\int_0^1 x^ne^x\,dx = e - (n+1)I_n. \ \blacksquare$$

*Barem: 3p + 2p.*

#### c) $1 \le (n+1)I_n \le e$

Pe $[0,1]$: $1 \le e^x \le e$ și $x^n \ge 0$, deci $x^n \le x^ne^x \le ex^n$. Integrând și folosind $\int_0^1 x^n\,dx = \frac{1}{n+1}$:

$$\frac{1}{n+1} \le I_n \le \frac{e}{n+1} \iff 1 \le (n+1)I_n \le e. \ \blacksquare$$

*Barem: 2p + 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a = 19$ |
| I.2 | $210$ |
| I.3 | $x = 1$ |
| I.4 | 2000 lei |
| I.5 | $a = 7$ |
| I.6 | $x = \frac\pi4$ |
| II.1.c | $n = 3$ |
| II.2.b | $m = -2$ |
| II.2.c | $m = 0$, $f(3) = 0$ |
| III.1.b | $y = 1$ |
| III.2.a | $I_1 = 1$ |

## Ce merită reținut din varianta 2

- **Determinantul Vandermonde**: scazi linii, scoți factori comuni — rezultatul e produsul diferențelor.
- **Aria triunghiului cu vârfurile date** $= \frac12|\Delta|$, cu $\Delta$ determinantul coordonatelor.
- **Sume de puteri ale rădăcinilor**: înlocuiește $x_i^3$ din ecuația $f(x_i) = 0$.
- **Inegalități de tip $f(x) \ge f(0)$**: studiază $f''$ pentru a afla semnul lui $f'$.
