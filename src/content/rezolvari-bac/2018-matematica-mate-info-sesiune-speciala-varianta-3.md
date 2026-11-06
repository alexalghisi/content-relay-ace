Rezolvarea completă a subiectului de **Bacalaureat 2018 la Matematică M_mate-info**, sesiunea specială, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z = 1 - 2i$; arătați că $z^2 - 2z + 5 = 0$

$z^2 = (1-2i)^2 = 1 - 4i + 4i^2 = 1 - 4i - 4 = -3 - 4i$.

$$z^2 - 2z + 5 = -3 - 4i - 2 + 4i + 5 = 0.$$

*Barem: 2p înlocuirea, 3p calculul.*

### 2. $f(x) = 2x + a$, $g(x) = bx + 2$ se intersectează în $M(2, 8)$

$M \in G_f$: $f(2) = 8 \iff 4 + a = 8 \iff a = 4$.

$M \in G_g$: $g(2) = 8 \iff 2b + 2 = 8 \iff b = 3$.

**Răspuns:** $a = 4$, $b = 3$. *Barem: 3p $a$, 2p $b$.*

### 3. Ecuația $\log_3(4x + 5) = 1 + \log_3(x + 3)$

**Condiții:** $4x + 5 > 0$ și $x + 3 > 0$, deci $x > -\dfrac54$.

Scriem $1 = \log_3 3$, deci membrul drept este $\log_3\big(3(x+3)\big)$:

$$4x + 5 = 3x + 9 \iff x = 4.$$

$x = 4 > -\frac54$, convine.

**Răspuns:** $x = 4$. *Barem: 3p ecuația $4x+5 = 3x+9$, 2p soluția.*

### 4. Probabilitatea ca un număr de două cifre să aibă ambele cifre pare

Cazuri posibile: $10, 11, \dots, 99$ — **90**.

Cazuri favorabile: cifra zecilor $\in \{2, 4, 6, 8\}$ (4 variante, nu poate fi $0$), cifra unităților $\in \{0, 2, 4, 6, 8\}$ (5 variante): $4 \cdot 5 = 20$.

$$p = \frac{20}{90} = \frac29.$$

**Răspuns:** $p = \dfrac29$. *Barem: 1p cazurile posibile, 2p cazurile favorabile, 2p probabilitatea.*

### 5. $A(2,2)$, $B(4,1)$, $C(0,8)$; $M$ simetricul lui $A$ față de $B$. Lungimea $CM$

$B$ este mijlocul lui $AM$: $x_M = 2x_B - x_A = 6$, $y_M = 2y_B - y_A = 0$, deci $M(6, 0)$.

$$CM = \sqrt{(6-0)^2 + (0-8)^2} = \sqrt{36 + 64} = 10.$$

**Răspuns:** $CM = 10$. *Barem: 3p coordonatele lui $M$, 2p lungimea.*

### 6. Aria paralelogramului $ABCD$ cu $AB = 6$, $AC = 10$, $m(\angle BAC) = \frac{\pi}{6}$

Diagonala $AC$ împarte paralelogramul în două triunghiuri congruente:

$$\mathcal A_{ABCD} = 2\mathcal A_{ABC} = AB\cdot AC\cdot\sin\frac{\pi}{6} = 6\cdot 10\cdot\frac12 = 30.$$

**Răspuns:** $30$. *Barem: 3p formula, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $M(a) = \begin{pmatrix} 1 & 1 & 1\\ a+1 & -1 & 1\\ 1 & 1 & -a\end{pmatrix}$ și sistemul $\begin{cases} x + y + z = 2\\ (a+1)x - y + z = 0\\ x + y - az = 1\end{cases}$

#### a) $\det(M(-1)) = 0$

$$\det(M(-1)) = \begin{vmatrix} 1 & 1 & 1\\ 0 & -1 & 1\\ 1 & 1 & 1\end{vmatrix} = (-1) + 1 + 0 - (-1) - 1 - 0 = 0.$$

(Sau direct: liniile 1 și 3 sunt egale.) *Barem: 2p scrierea, 3p calculul.*

#### b) Valorile lui $a$ cu $\det(M(a)) = 0$

Dezvoltând după prima linie:

$$\det M(a) = 1\cdot(a - 1) - 1\cdot\big(-a(a+1) - 1\big) + 1\cdot(a + 1 + 1) = a - 1 + a^2 + a + 1 + a + 2 = a^2 + 3a + 2.$$

$a^2 + 3a + 2 = (a+1)(a+2) = 0 \iff a \in \{-2, -1\}$.

**Răspuns:** $a = -2$ sau $a = -1$. *Barem: 3p determinantul, 2p valorile.*

#### c) Soluția unică $(x_0, y_0, z_0)$ cu $2x_0 + y_0 z_0 = 0$

Soluție unică $\iff \det M(a) \ne 0 \iff a \in \mathbb R\setminus\{-2, -1\}$.

- Scădem ecuația a treia din prima: $(1 + a)z = 1 \Rightarrow z_0 = \dfrac{1}{a+1}$.
- Adunăm primele două: $(a+2)x + 2z = 2 \Rightarrow x_0 = \dfrac{2 - 2z_0}{a+2} = \dfrac{2a}{(a+1)(a+2)}$.
- $y_0 = 2 - x_0 - z_0 = \dfrac{2(a+1)(a+2) - 2a - (a+2)}{(a+1)(a+2)} = \dfrac{2a^2 + 3a + 2}{(a+1)(a+2)}$.

Condiția:

$$\frac{4a}{(a+1)(a+2)} + \frac{2a^2 + 3a + 2}{(a+1)^2(a+2)} = 0 \iff 4a(a+1) + 2a^2 + 3a + 2 = 0 \iff 6a^2 + 7a + 2 = 0.$$

$\Delta = 49 - 48 = 1$, $a = \dfrac{-7 \pm 1}{12}$, deci $a = -\dfrac12$ sau $a = -\dfrac23$, ambele diferite de $-1, -2$.

**Răspuns:** $a \in \left\{-\dfrac23, -\dfrac12\right\}$. *Barem: 2p soluția sistemului, 3p valorile lui $a$.*

### 2. $x * y = \dfrac{1}{10}xy - (x + y) + 20$ (asociativă)

#### a) $x * y = \dfrac{1}{10}(x - 10)(y - 10) + 10$

$$\frac{1}{10}(x-10)(y-10) + 10 = \frac{1}{10}(xy - 10x - 10y + 100) + 10 = \frac{xy}{10} - x - y + 20 = x * y.$$

*Barem: 2p, 3p.*

#### b) $x * x \le \dfrac{101}{10}$

$$\frac{1}{10}(x-10)^2 + 10 \le \frac{101}{10} \iff (x - 10)^2 \le 1 \iff -1 \le x - 10 \le 1 \iff x \in [9, 11].$$

**Răspuns:** $x \in [9, 11]$. *Barem: 3p inecuația, 2p soluția.*

#### c) $\log_2 1 * \log_2 2 * \dots * \log_2 2018$

Din a), $x * 10 = \frac{1}{10}(x-10)\cdot 0 + 10 = 10$ și analog $10 * x = 10$: **$10$ este element „absorbant"**.

Printre factori apare $\log_2 1024 = 10$. Folosind asociativitatea:

$$\big((\log_2 1 * \dots * \log_2 1023) * 10\big) * (\log_2 1025 * \dots * \log_2 2018) = 10 * (\dots) = 10.$$

**Răspuns:** $10$. *Barem: 2p elementul absorbant, 3p finalizarea.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(-1, +\infty) \to \mathbb R$, $f(x) = 2x^3 - 3x^2 + 6x - 6\ln(x+1)$

#### a) $f'(x) = \dfrac{6x^3}{x+1}$

$$f'(x) = 6x^2 - 6x + 6 - \frac{6}{x+1} = \frac{(6x^2 - 6x + 6)(x+1) - 6}{x+1} = \frac{6x^3 + 6x^2 - 6x^2 - 6x + 6x + 6 - 6}{x+1} = \frac{6x^3}{x+1}.$$

*Barem: 3p derivata, 2p forma finală.*

#### b) Valoarea minimă a lui $f$ este $0$

$x + 1 > 0$, deci semnul lui $f'$ este semnul lui $x^3$: $f'(x) = 0 \iff x = 0$, $f' \le 0$ pe $(-1, 0]$ ($f$ descrescătoare), $f' \ge 0$ pe $[0, +\infty)$ ($f$ crescătoare).

Deci $x = 0$ este punct de minim global: $f(x) \ge f(0) = 0 - 0 + 0 - 6\ln 1 = 0$.

**Răspuns:** minimul este $f(0) = 0$. *Barem: 1p $f'(x) = 0$, 2p monotonia, 2p concluzia.*

#### c) $\displaystyle\lim_{x\to 0}\frac{\sqrt{f(x)}}{x}$

Din b), $f(x) \ge 0$, deci radicalul există. Calculăm întâi, cu regula lui l'Hospital (caz $\frac00$):

$$\lim_{x\to 0}\frac{f(x)}{x^2} = \lim_{x\to 0}\frac{f'(x)}{2x} = \lim_{x\to 0}\frac{3x^2}{x+1} = 0.$$

Atunci $\left|\dfrac{\sqrt{f(x)}}{x}\right| = \sqrt{\dfrac{f(x)}{x^2}} \to 0$, deci

$$\lim_{x\to 0}\frac{\sqrt{f(x)}}{x} = 0.$$

**Răspuns:** $0$. *Barem: 2p limita $f(x)/x^2$, 3p concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = (x^2 + x + 1)e^x$

#### a) $\displaystyle\int_0^1 f(x)e^{-x}\,dx = \frac{11}{6}$

$f(x)e^{-x} = x^2 + x + 1$:

$$\int_0^1 (x^2 + x + 1)\,dx = \left(\frac{x^3}{3} + \frac{x^2}{2} + x\right)\Big|_0^1 = \frac13 + \frac12 + 1 = \frac{11}{6}.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) Orice primitivă a lui $f$ are exact două puncte de inflexiune

Dacă $F$ e primitivă, $F' = f$ și

$$F''(x) = f'(x) = (2x + 1)e^x + (x^2 + x + 1)e^x = (x^2 + 3x + 2)e^x = (x+1)(x+2)e^x.$$

$F''$ se anulează în $-2$ și $-1$ și **își schimbă semnul** în fiecare: $F'' > 0$ pe $(-\infty, -2)$, $F'' < 0$ pe $(-2, -1)$, $F'' > 0$ pe $(-1, +\infty)$. Deci $F$ are exact două puncte de inflexiune: $x = -2$ și $x = -1$. $\blacksquare$

*Barem: 2p $F''$, 3p semnul și concluzia.*

#### c) $\displaystyle\lim_{t\to 0}\frac1t\int_0^t f(x)\,dx = 1$

Fie $F$ o primitivă a lui $f$. Atunci $\int_0^t f = F(t) - F(0)$ și, din definiția derivatei:

$$\lim_{t\to 0}\frac{F(t) - F(0)}{t} = F'(0) = f(0) = 1.$$

(Sau cu l'Hospital: $\lim\limits_{t\to 0}\dfrac{F'(t)}{1} = \lim\limits_{t\to 0} f(t) = 1$.) *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 4$, $b = 3$ |
| I.3 | $x = 4$ |
| I.4 | $p = \tfrac29$ |
| I.5 | $CM = 10$ |
| I.6 | aria $= 30$ |
| II.1.b | $a \in \{-2, -1\}$ |
| II.1.c | $a \in \{-\tfrac23, -\tfrac12\}$ |
| II.2.b | $x \in [9, 11]$ |
| II.2.c | $10$ |
| III.1.b | minimul $0$, în $x = 0$ |
| III.1.c | $0$ |
| III.2.a | $\tfrac{11}{6}$ |
| III.2.c | $1$ |

## Ce merită reținut din varianta 3

- **Forma $\frac1k(x-a)(y-a) + a$** a unei legi arată imediat elementul absorbant $a$ (aici $10 = \log_2 1024$).
- **Puncte de inflexiune ale unei primitive** = punctele în care $f'$ își schimbă semnul.
- **$\frac1t\int_0^t f$** este un raport de tip derivată: limita este $f(0)$.
- **Limite cu radical**: calculează limita expresiei de sub radical (ridicată la pătrat) și apoi extrage radicalul.
