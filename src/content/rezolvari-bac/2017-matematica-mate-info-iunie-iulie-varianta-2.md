Rezolvarea completă a subiectului de **Bacalaureat 2017 la Matematică M_mate-info**, sesiunea iunie–iulie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z = 2 + i$; arătați că $z + \bar z + z\bar z = 9$

$\bar z = 2 - i$, deci $z + \bar z = 4$, iar $z\bar z = (2+i)(2-i) = 4 - i^2 = 5$.

$$z + \bar z + z\bar z = 4 + 5 = 9.$$

*Barem: 3p înlocuirea, 2p calculul.*

### 2. $A(1, m)$ pe graficul lui $f(x) = x^2 + 2x - 3$

$A \in G_f \iff f(1) = m \iff 1 + 2 - 3 = m$.

**Răspuns:** $m = 0$. *Barem: 3p condiția, 2p valoarea.*

### 3. Ecuația $(1 - \log_2 x)(2 - \log_2 x) = 0$

**Condiție:** $x > 0$. Un produs e nul dacă un factor e nul:

$$\log_2 x = 1 \Rightarrow x = 2 \qquad\text{sau}\qquad \log_2 x = 2 \Rightarrow x = 4.$$

**Răspuns:** $x \in \{2, 4\}$ (ambele convin). *Barem: 3p cele două ecuații, 2p soluțiile.*

### 4. Probabilitatea ca un număr de două cifre să aibă cifra zecilor strict mai mică decât a unităților

**Cazuri posibile:** $10, \dots, 99$ — 90.

**Cazuri favorabile:** dacă cifra zecilor este $d \in \{1, \dots, 8\}$, cifra unităților poate fi $d+1, \dots, 9$, adică $9 - d$ variante:

$$8 + 7 + 6 + \dots + 1 = 36.$$

(Altfel: alegem două cifre distincte din $\{1,\dots,9\}$ și le așezăm crescător: $C_9^2 = 36$.)

$$p = \frac{36}{90} = \frac25.$$

**Răspuns:** $p = \dfrac25$. *Barem: 2p cazurile posibile, 2p cazurile favorabile, 1p probabilitatea.*

### 5. Lungimea medianei din $C$; $A(3,1)$, $B(3,3)$, $C(0,2)$

Mijlocul lui $AB$: $M\left(\frac{3+3}{2}, \frac{1+3}{2}\right) = M(3, 2)$.

$$CM = \sqrt{(3-0)^2 + (2-2)^2} = 3.$$

**Răspuns:** $3$. *Barem: 3p mijlocul, 2p lungimea.*

### 6. $(1 + \operatorname{tg}^2 x)\cos^2 x - (1 + \operatorname{ctg}^2 x)\sin^2 x = 0$, $x \in \left(0, \frac\pi2\right)$

$$\left(1 + \frac{\sin^2 x}{\cos^2 x}\right)\cos^2 x = \cos^2 x + \sin^2 x = 1, \qquad \left(1 + \frac{\cos^2 x}{\sin^2 x}\right)\sin^2 x = \sin^2 x + \cos^2 x = 1.$$

Diferența este $1 - 1 = 0$. $\blacksquare$ *Barem: 3p transformările, 2p finalizarea.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix} 1 & 1 & 2\\ 1 & 2 & a\\ -2 & -1 & 3\end{pmatrix}$ și sistemul omogen asociat

#### a) $\det(A(9)) = 0$

Regula lui Sarrus:

$$\det(A(9)) = 6 + (-2) + (-18) - (-8) - (-9) - 3 = 0.$$

*Barem: 2p scrierea, 3p calculul.*

#### b) Valorile lui $a$ pentru care sistemul are soluție unică

$$\det(A(a)) = 6 - 2a - 2 + 8 + a - 3 = 9 - a.$$

Un sistem omogen are soluție unică (doar cea nulă) $\iff \det \ne 0 \iff a \ne 9$.

**Răspuns:** $a \in \mathbb R\setminus\{9\}$. *Barem: 3p determinantul, 2p concluzia.*

#### c) Dacă $(x_0, y_0, z_0)$ are toate componentele nenule, atunci $-x_0 + y_0 + z_0 = 11(x_0 + y_0 + z_0)$

O soluție nenulă există doar dacă $\det A(a) = 0$, deci $a = 9$. Din primele două ecuații: scăzându-le, $y + 7z = 0 \Rightarrow y = -7z$, apoi $x = -y - 2z = 5z$. Soluțiile sunt $(5\alpha, -7\alpha, \alpha)$ (a treia ecuație: $-10\alpha + 7\alpha + 3\alpha = 0$ ✔).

$$-x_0 + y_0 + z_0 = -5\alpha - 7\alpha + \alpha = -11\alpha, \qquad 11(x_0 + y_0 + z_0) = 11(5\alpha - 7\alpha + \alpha) = -11\alpha. \ \blacksquare$$

*Barem: 3p forma soluției, 2p finalizarea.*

### 2. $x\circ y = xy + 7x + 7y + 42$

#### a) $x\circ y = (x+7)(y+7) - 7$

$$xy + 7x + 7y + 49 - 7 = x(y+7) + 7(y+7) - 7 = (x+7)(y+7) - 7.$$

*Barem: 2p scrierea $42 = 49 - 7$, 3p factorizarea.*

#### b) $x\circ x = x$

$$(x+7)^2 - 7 = x \iff (x+7)^2 - (x+7) = 0 \iff (x+7)(x+6) = 0.$$

**Răspuns:** $x \in \{-7, -6\}$. *Barem: 2p ecuația, 3p soluțiile.*

#### c) $2017^a\circ(-6) = 1$

$-6 + 7 = 1$, deci $2017^a\circ(-6) = (2017^a + 7)\cdot1 - 7 = 2017^a$ ($-6$ este elementul neutru). Ecuația devine $2017^a = 1$.

**Răspuns:** $a = 0$. *Barem: 3p simplificarea, 2p valoarea lui $a$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(1,+\infty)\to\mathbb R$, $f(x) = \dfrac{\ln x}{1 - x}$

#### a) $f'(x) = \dfrac{1 - x + x\ln x}{x(1-x)^2}$

$$f'(x) = \frac{\frac1x(1-x) - \ln x\cdot(-1)}{(1-x)^2} = \frac{\frac{1-x}{x} + \ln x}{(1-x)^2} = \frac{1 - x + x\ln x}{x(1-x)^2}.$$

*Barem: 3p derivarea câtului, 2p finalizarea.*

#### b) Asimptota orizontală spre $+\infty$

Cazul $\frac{\infty}{\infty}$, l'Hôpital:

$$\lim_{x\to+\infty}\frac{\ln x}{1-x} = \lim_{x\to+\infty}\frac{\frac1x}{-1} = 0.$$

**Răspuns:** $y = 0$. *Barem: 3p limita, 2p concluzia.*

#### c) $x\ln x > x - 1$ pentru $x > 1$

Fie $g(x) = x\ln x - x + 1$. $g'(x) = \ln x + 1 - 1 = \ln x > 0$ pentru $x > 1$, deci $g$ strict crescătoare pe $(1, +\infty)$. Cum $\lim\limits_{x\to1} g(x) = 0$, rezultă $g(x) > 0$, adică $x\ln x > x - 1$. $\blacksquare$

(Echivalent: numărătorul lui $f'$ este pozitiv.) *Barem: 3p studiul lui $g'$, 2p concluzia.*

### 2. $f(x) = e^x + 3x^2$

#### a) $\displaystyle\int_0^1 (f(x) - 3x^2)\,dx = e - 1$

$$\int_0^1 e^x\,dx = e^x\Big|_0^1 = e - 1.$$

*Barem: 2p simplificarea, 3p calculul.*

#### b) $\displaystyle\int_0^1 xf(x)\,dx = \frac74$

$$\int_0^1 (xe^x + 3x^3)\,dx = (x-1)e^x\Big|_0^1 + \frac{3x^4}{4}\Big|_0^1 = (0 - (-1)) + \frac34 = \frac74.$$

*Barem: 3p primitivele, 2p calculul.*

#### c) $n$ cu aria sub $g(x) = f(x) - e^x$ pe $[0, n]$ egală cu $n^2 - n + 1$

$g(x) = 3x^2 \ge 0$, deci

$$\mathcal A = \int_0^n 3x^2\,dx = x^3\Big|_0^n = n^3.$$

$n^3 = n^2 - n + 1 \iff n^3 - n^2 + n - 1 = 0 \iff (n-1)(n^2 + 1) = 0 \iff n = 1$.

**Răspuns:** $n = 1$. *Barem: 3p aria, 2p valoarea lui $n$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = 0$ |
| I.3 | $x \in \{2, 4\}$ |
| I.4 | $p = \frac25$ |
| I.5 | $3$ |
| II.1.b | $a \ne 9$ |
| II.2.b | $x \in \{-7, -6\}$ |
| II.2.c | $a = 0$ |
| III.1.b | $y = 0$ |
| III.2.c | $n = 1$ |

## Ce merită reținut din varianta 2

- **Sistem omogen**: soluție unică $\iff \det \ne 0$; soluții nenule există doar când $\det = 0$ — atunci le parametrizezi.
- **Legea $(x+a)(y+a) - a$**: elementul neutru este $1 - a$ (aici $-6$).
- **Inegalități de tip $x\ln x > x - 1$**: construiește $g = $ diferența și studiază monotonia.
- **Aria** = integrala unei funcții pozitive; verifică întâi semnul.
