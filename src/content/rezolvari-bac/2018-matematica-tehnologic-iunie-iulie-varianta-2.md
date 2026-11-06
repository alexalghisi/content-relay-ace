Rezolvarea completă a subiectului de **Bacalaureat 2018 la Matematică M_tehnologic**, sesiunea iunie–iulie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $30\left(\frac13 - 0{,}3\right) = 1$

$0{,}3 = \frac{3}{10}$, deci

$$30\left(\frac13 - \frac{3}{10}\right) = 30\cdot\frac{10 - 9}{30} = 30\cdot\frac{1}{30} = 1.$$

*Barem: 3p aducerea la același numitor, 2p finalizarea.*

### 2. $x_1, x_2$ soluțiile ecuației $x^2 - x + a = 0$; valorile lui $a$ cu $x_1x_2 - 1 < 0$

Din relațiile lui Viète, $x_1x_2 = \dfrac{c}{a_{\text{coef}}} = a$. Condiția devine $a - 1 < 0$.

**Răspuns:** $a \in (-\infty, 1)$. *Barem: 3p $x_1x_2 = a$, 2p mulțimea valorilor.*

### 3. Ecuația $3^{x+1} = 9^x$

$9^x = 3^{2x}$, iar funcția exponențială este injectivă: $x + 1 = 2x \iff x = 1$.

**Răspuns:** $x = 1$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr de două cifre să aibă cifra unităților 3

Cazuri posibile: **90**. Cazuri favorabile: $13, 23, \dots, 93$ — **9**.

$$p = \frac{9}{90} = \frac{1}{10}.$$

*Barem: 1p, 2p, 2p.*

### 5. $A(-1,-1)$, $O$, $B(4,4)$ sunt coliniare

$$AO = \sqrt{1 + 1} = \sqrt2,\quad OB = \sqrt{16 + 16} = 4\sqrt2,\quad AB = \sqrt{25 + 25} = 5\sqrt2.$$

Cum $AB = AO + OB$, punctul $O$ se află pe segmentul $AB$, deci $A$, $O$, $B$ sunt coliniare. (Altfel: toate trei se află pe dreapta $y = x$.) *Barem: 2p, 3p.*

### 6. $(\sin x + \cos x)^2 - \sin 2x = 1$

Cu $\sin 2x = 2\sin x\cos x$:

$$\sin^2 x + 2\sin x\cos x + \cos^2 x - 2\sin x\cos x = \sin^2 x + \cos^2 x = 1.$$

*Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 1 & -5\\ 2 & 6\end{pmatrix}$, $B = \begin{pmatrix} 6 & 5\\ -2 & 1\end{pmatrix}$

#### a) $\det A = 16$

$$\det A = 1\cdot 6 - 2\cdot(-5) = 6 + 10 = 16.$$

*Barem: 3p, 2p.*

#### b) $a$ cu $A\cdot B = aI_2$

$$A\cdot B = \begin{pmatrix} 6 + 10 & 5 - 5\\ 12 - 12 & 10 + 6\end{pmatrix} = \begin{pmatrix} 16 & 0\\ 0 & 16\end{pmatrix} = 16 I_2.$$

**Răspuns:** $a = 16$. *Barem: 3p, 2p.*

#### c) $\det\left(xA + \frac1x B\right) \ge 49$ pentru $x \ne 0$

$$xA + \frac1x B = \begin{pmatrix} x + \frac6x & -5x + \frac5x\\ 2x - \frac2x & 6x + \frac1x\end{pmatrix}.$$

$$\det = \left(x + \frac6x\right)\left(6x + \frac1x\right) - \left(-5x + \frac5x\right)\left(2x - \frac2x\right) = \left(6x^2 + 37 + \frac{6}{x^2}\right) - \left(-10x^2 + 20 - \frac{10}{x^2}\right) = 16x^2 + 17 + \frac{16}{x^2}.$$

Atunci

$$16x^2 + \frac{16}{x^2} + 17 \ge 49 \iff 16x^2 - 32 + \frac{16}{x^2} \ge 0 \iff 16\left(x - \frac1x\right)^2 \ge 0,$$

adevărat pentru orice $x \ne 0$. $\blacksquare$ *Barem: 3p determinantul, 2p finalizarea.*

### 2. $x \circ y = 5xy + 15(x + y) + 42$ (asociativă)

#### a) $(-2) \circ (-2) = 2$

$$(-2)\circ(-2) = 5\cdot 4 + 15\cdot(-4) + 42 = 20 - 60 + 42 = 2.$$

*Barem: 3p, 2p.*

#### b) $x \circ y = 5(x + 3)(y + 3) - 3$

$$5(x+3)(y+3) - 3 = 5xy + 15x + 15y + 45 - 3 = 5xy + 15(x + y) + 42 = x \circ y.$$

*Barem: 2p, 3p.*

#### c) $(x - 3)\circ(x - 3)\circ(x - 3) = 197$

Din b), $(x-3)\circ(x-3) = 5x\cdot x - 3 = 5x^2 - 3$. Apoi

$$(5x^2 - 3)\circ(x - 3) = 5\cdot 5x^2\cdot x - 3 = 25x^3 - 3.$$

$$25x^3 - 3 = 197 \iff x^3 = 8 \iff x = 2.$$

**Răspuns:** $x = 2$. *Barem: 2p compunerea, 3p soluția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = (x - 2)e^x$

#### a) $f'(x) = (x - 1)e^x$

$$f'(x) = 1\cdot e^x + (x - 2)e^x = e^x(x - 1).$$

*Barem: 3p, 2p.*

#### b) $\lim\limits_{x\to-\infty} f(x) = 0$

Avem forma $(-\infty)\cdot 0$; scriem ca fracție și aplicăm l'Hospital ($\frac{\infty}{\infty}$):

$$\lim_{x\to-\infty}\frac{x - 2}{e^{-x}} = \lim_{x\to-\infty}\frac{1}{-e^{-x}} = 0.$$

*Barem: 3p, 2p.*

#### c) $-e \le f(x) \le 0$ pentru $x \in (-\infty, 2]$

$f'(x) \le 0$ pe $(-\infty, 1]$ ($f$ descrescătoare), $f'(x) \ge 0$ pe $[1, 2]$ ($f$ crescătoare). Deci minimul pe $(-\infty, 2]$ este $f(1) = -e$.

Pe $(-\infty, 1]$, $f$ coboară de la limita $0$ (punctul b)) la $-e$, deci $f(x) < 0$; pe $[1, 2]$ urcă de la $-e$ la $f(2) = 0$. Așadar $-e \le f(x) \le 0$. (Direct: $x - 2 \le 0$ și $e^x > 0$ dau $f(x) \le 0$.) $\blacksquare$

*Barem: 2p monotonia, 3p finalizarea.*

### 2. $f(x) = 3x^2 + 1$

#### a) $\displaystyle\int_{-1}^1 (f(x) - 1)\,dx = 2$

$$\int_{-1}^1 3x^2\,dx = x^3\Big|_{-1}^1 = 1 - (-1) = 2.$$

*Barem: 3p, 2p.*

#### b) Orice primitivă a lui $f$ este crescătoare

$F' = f = 3x^2 + 1 > 0$ pentru orice $x$, deci $F$ este (strict) crescătoare pe $\mathbb R$. *Barem: 2p, 3p.*

#### c) $\displaystyle\int_1^e f(x)\ln x\,dx$

Prin părți, cu $u = \ln x$, $v' = 3x^2 + 1$, $v = x^3 + x$:

$$\int_1^e (3x^2 + 1)\ln x\,dx = (x^3 + x)\ln x\Big|_1^e - \int_1^e (x^3 + x)\cdot\frac1x\,dx = e^3 + e - \int_1^e (x^2 + 1)\,dx.$$

$$\int_1^e (x^2 + 1)\,dx = \left(\frac{x^3}{3} + x\right)\Big|_1^e = \frac{e^3}{3} + e - \frac43.$$

$$\text{Rezultat: } e^3 + e - \frac{e^3}{3} - e + \frac43 = \frac{2e^3 + 4}{3}.$$

**Răspuns:** $\dfrac{2e^3 + 4}{3}$. *Barem: 3p integrarea prin părți, 2p calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a \in (-\infty, 1)$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac{1}{10}$ |
| II.1.b | $a = 16$ |
| II.2.c | $x = 2$ |
| III.1.b | $0$ |
| III.2.a | $2$ |
| III.2.c | $\tfrac{2e^3+4}{3}$ |

## Ce merită reținut din varianta 2

- **Relațiile lui Viète** dau produsul și suma rădăcinilor fără a rezolva ecuația.
- **Forma $k(x+a)(y+a) - a$** a legii face compunerile repetate foarte simple: $x_1 \circ \dots \circ x_n = k^{n-1}(x_1+a)\cdots(x_n+a) - a$.
- **Inegalități de tip $t^2 + \frac{1}{t^2} \ge 2$** se reduc la un pătrat perfect: $\left(t - \frac1t\right)^2 \ge 0$.
- **$\int P(x)\ln x\,dx$**: integrare prin părți cu $u = \ln x$.
