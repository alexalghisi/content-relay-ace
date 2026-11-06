Rezolvarea completă a subiectului de **Bacalaureat 2019 la Matematică M_mate-info**, sesiunea iunie–iulie, **varianta 6**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $n = (3 - i\sqrt2)(3 + i\sqrt2)$ este întreg

$$n = 3^2 - (i\sqrt2)^2 = 9 - 2i^2 = 9 + 2 = 11 \in \mathbb Z.\ \blacksquare$$

*Barem: 2p, 3p.*

### 2. $A(a, 3)$ aparține graficului lui $f(x) = 2x + a$

$f(a) = 3 \iff 2a + a = 3 \iff a = 1$. *Barem: 3p, 2p.*

### 3. Ecuația $2019^x + 2019^{-x} = 2$

Înmulțim cu $2019^x > 0$: $(2019^x)^2 - 2\cdot 2019^x + 1 = 0 \iff (2019^x - 1)^2 = 0 \iff 2019^x = 1 \iff x = 0$.

**Răspuns:** $x = 0$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr de două cifre să aibă cifra unităților impară

90 de cazuri posibile. Prima cifră: 9 variante, ultima cifră din $\{1,3,5,7,9\}$: 5 variante — $45$ cazuri favorabile.

$$p = \frac{45}{90} = \frac12.$$

*Barem: 2p, 2p, 1p.*

### 5. Dreapta $d$ prin $A(3,-3)$, perpendiculară pe $AB$, $B(2,-2)$

$m_{AB} = \dfrac{-2 + 3}{2 - 3} = -1$, deci $m_d = 1$ (produsul pantelor $= -1$).

$d: y + 3 = 1\cdot(x - 3) \iff y = x - 6$.

**Răspuns:** $y = x - 6$. *Barem: 2p, 3p.*

### 6. $\sin(a - b)\sin(a + b) = (\sin a - \sin b)(\sin a + \sin b)$

$$\sin(a-b)\sin(a+b) = (\sin a\cos b)^2 - (\sin b\cos a)^2 = \sin^2a(1 - \sin^2b) - \sin^2b(1 - \sin^2a) = \sin^2a - \sin^2b,$$

care este $(\sin a - \sin b)(\sin a + \sin b)$. $\blacksquare$ *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}a & 0 & -a\\ 0 & 2 & 0\\ -a & 0 & a\end{pmatrix}$

**a)** Regula lui Sarrus: $\det A(a) = 2a^2 + 0 + 0 - 2a^2 - 0 - 0 = 0$ (sau: coloanele 1 și 3 sunt opuse). $\blacksquare$ *Barem: 2p, 3p.*

**b)** $$A(a)A(b) = \begin{pmatrix}ab + ab & 0 & -ab - ab\\ 0 & 4 & 0\\ -ab - ab & 0 & ab + ab\end{pmatrix} = 2\begin{pmatrix}ab & 0 & -ab\\ 0 & 2 & 0\\ -ab & 0 & ab\end{pmatrix} = 2A(ab).\ \blacksquare$$

*Barem: 3p, 2p.*

**c)** $B$ este produsul a $14$ matrice (bazele $2, 3, \dots, 15$). Aplicând b) de $13$ ori:

$$B = 2^{13}A\left(\log_2 3\cdot\log_3 4\cdots\log_{15}16\right) = 2^{13}A(\log_2 16) = 2^{13}A(4),$$

(produsul logaritmilor „în lanț” se simplifică: $\log_a b\cdot\log_b c = \log_a c$). $A(4)$ are elemente întregi, deci și $B$. $\blacksquare$

*Barem: 3p, 2p.*

### 2. $f = X^3 + X^2 + mX + n$

**a)** $f(-1) = -m + n$, $f(0) = n$, $f(1) = 2 + m + n$:

$$f(-1) - 2f(0) + f(1) = -m + n - 2n + 2 + m + n = 2.\ \blacksquare$$

*Barem: 2p, 3p.*

**b)** $X^2 - 1 = (X - 1)(X + 1) \mid f \iff f(1) = 0$ și $f(-1) = 0$: $2 + m + n = 0$, $-m + n = 0 \Rightarrow m = n = -1$.

**Răspuns:** $m = -1$, $n = -1$. *Barem: 3p, 2p.*

**c)** Viète: $s_1 = -1$, $s_2 = m$, $s_3 = -n$. Atunci

$$x_1^3 + x_2^3 + x_3^3 = s_1^3 - 3s_1s_2 + 3s_3 = -1 + 3m - 3n,$$
$$3(s_2 + s_3) - (x_1^3 + x_2^3 + x_3^3) = 3(m - n) - (-1 + 3m - 3n) = 1.\ \blacksquare$$

*Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x^2e^{-x}$

**a)** $f'(x) = 2xe^{-x} - x^2e^{-x} = x(2 - x)e^{-x}$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $f'(x) = 0 \iff x \in \{0, 2\}$. Semnul lui $x(2 - x)$:

- $f' \le 0$ pe $(-\infty, 0]$: $f$ descrescătoare;
- $f' \ge 0$ pe $[0, 2]$: $f$ crescătoare;
- $f' \le 0$ pe $[2, +\infty)$: $f$ descrescătoare.

*Barem: 2p, 3p.*

**c)** Fie $a \in (0, 4e^{-2})$. Avem $f(0) = 0 < a$, $f(2) = 4e^{-2} > a$, $\lim\limits_{x\to+\infty}f(x) = 0 < a$, $\lim\limits_{x\to-\infty}f(x) = +\infty$.

$f$ este continuă și strict monotonă pe fiecare din $(-\infty, 0)$, $(0, 2)$, $(2, +\infty)$; pe fiecare interval valorile acoperă un interval care îl conține pe $a$ ($(0, +\infty)$, $(0, 4e^{-2})$, $(0, 4e^{-2})$), deci ecuația are exact o soluție pe fiecare — în total exact trei. $\blacksquare$

*Barem: 3p, 2p.*

### 2. $f(x) = x^2 + \ln x$

**a)** $$\int_1^2 x^2dx = \frac{x^3}{3}\Big|_1^2 = \frac83 - \frac13 = \frac73.\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** $g(x) = 2x + \ln x > 0$ pe $[1, e]$. Cu $\int\ln x\,dx = x\ln x - x$:

$$\mathcal A = \int_1^e(2x + \ln x)\,dx = \left(x^2 + x\ln x - x\right)\Big|_1^e = (e^2 + e - e) - (1 + 0 - 1) = e^2.\ \blacksquare$$

*Barem: 3p, 2p.*

**c)** $f(x) - x^2 = \ln x$. Prin părți:

$$\int_{1/e}^1 x^n\ln x\,dx = \left(\frac{x^{n+1}}{n+1}\ln x - \frac{x^{n+1}}{(n+1)^2}\right)\Big|_{1/e}^1 = -\frac{1}{(n+1)^2} + \frac{1}{(n+1)e^{n+1}} + \frac{1}{(n+1)^2e^{n+1}}.$$

Fiecare termen tinde la $0$ când $n\to+\infty$, deci limita este $0$. $\blacksquare$

*Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $n = 11$ |
| I.2 | $a = 1$ |
| I.3 | $x = 0$ |
| I.4 | $p = \tfrac12$ |
| I.5 | $y = x - 6$ |
| II.1.c | $B = 2^{13}A(4)$ |
| II.2.b | $m = n = -1$ |
| III.1.b | $\searrow$ pe $(-\infty,0]$, $\nearrow$ pe $[0,2]$, $\searrow$ pe $[2,+\infty)$ |

## Ce merită reținut din varianta 6

- **$a^x + a^{-x} \ge 2$** cu egalitate doar la $x = 0$ (pătrat perfect).
- **Produs de logaritmi în lanț:** $\log_2 3\cdot\log_3 4\cdots\log_{15}16 = \log_2 16 = 4$.
- **Numărul de soluții:** monotonie pe intervale + continuitate + valorile la capete.
