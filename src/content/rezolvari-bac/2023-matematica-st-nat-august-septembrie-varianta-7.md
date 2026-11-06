Rezolvarea completă a subiectului de **Bacalaureat 2023 la Matematică M_șt-nat**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $3 - 4i + i(4 - i) = 4$

Desfacem paranteza: $i(4 - i) = 4i - i^2 = 4i + 1$ (pentru că $i^2 = -1$).

$$3 - 4i + 4i + 1 = 4.$$

*Barem: 3p desfacerea parantezei, 2p finalizarea.*

### 2. $f(x) = 4 - 2x$: arătați că $(f \circ f)(1) = 0$

$(f \circ f)(1) = f(f(1))$. Calculăm din interior spre exterior: $f(1) = 4 - 2 = 2$, apoi $f(2) = 4 - 4 = 0$.

Deci $(f \circ f)(1) = 0$. *Barem: 2p $f(1)$, 3p $f(f(1))$.*

### 3. Ecuația $\log_5\left(x^2 - 2x + 6\right) = \log_5 6$

**Condiție de existență:** $x^2 - 2x + 6 > 0$ — adevărat pentru orice $x$, deoarece $x^2 - 2x + 6 = (x-1)^2 + 5 \ge 5$.

Logaritmul fiind injectiv:

$$x^2 - 2x + 6 = 6 \iff x^2 - 2x = 0 \iff x(x - 2) = 0 \iff x \in \{0, 2\}.$$

Ambele soluții convin (argumentul este 6 în ambele cazuri).

**Răspuns:** $x \in \{0, 2\}$. *Barem: 2p ecuația $x^2 - 2x = 0$, 3p soluțiile care convin.*

### 4. Probabilitatea ca un număr de două cifre să fie divizibil cu 3 și cu 7

Numerele naturale de două cifre: $10, \dots, 99$ — **90** de cazuri posibile.

3 și 7 sunt prime între ele, deci un număr divizibil cu ambele este divizibil cu $3\cdot 7 = 21$. Multiplii de două cifre ai lui 21: $21, 42, 63, 84$ — **4** cazuri favorabile.

$$p = \frac{4}{90} = \frac{2}{45}.$$

**Răspuns:** $p = \dfrac{2}{45}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(1, 2)$ mijlocul segmentului $BC$, cu $B(a, 0)$, $C(0, b)$

$$x_A = \frac{a + 0}{2} = 1 \Rightarrow a = 2; \qquad y_A = \frac{0 + b}{2} = 2 \Rightarrow b = 4.$$

**Răspuns:** $a = 2$, $b = 4$. *Barem: 3p formulele mijlocului, 2p valorile.*

### 6. Triunghiul isoscel $AB = AC = 10$, $BC = 16$: arătați că înălțimea $AD = 6$

Într-un triunghi isoscel, înălțimea din vârful $A$ este și mediană, deci $D$ este mijlocul lui $BC$: $BD = \dfrac{16}{2} = 8$.

Triunghiul $ABD$ este dreptunghic în $D$; cu teorema lui Pitagora:

$$AD = \sqrt{AB^2 - BD^2} = \sqrt{100 - 64} = \sqrt{36} = 6.$$

*Barem: 3p $BD = 8$ și triunghiul dreptunghic, 2p calculul lui $AD$.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}1 & 2\\ -1 & -2\end{pmatrix}$, $B(x) = \begin{pmatrix}x + 1 & 2x + 1\\ x - 1 & 2x - 1\end{pmatrix}$

#### a) $\det(B(2)) = 4$

$$B(2) = \begin{pmatrix}3 & 5\\ 1 & 3\end{pmatrix}, \qquad \det(B(2)) = 3\cdot 3 - 5\cdot 1 = 9 - 5 = 4.$$

*Barem: 3p matricea și dezvoltarea, 2p rezultatul.*

#### b) $a$ real cu $B(0)\cdot B(1) = aA$

$B(0) = \begin{pmatrix}1 & 1\\ -1 & -1\end{pmatrix}$, $B(1) = \begin{pmatrix}2 & 3\\ 0 & 1\end{pmatrix}$.

$$B(0)\cdot B(1) = \begin{pmatrix}2 + 0 & 3 + 1\\ -2 + 0 & -3 - 1\end{pmatrix} = \begin{pmatrix}2 & 4\\ -2 & -4\end{pmatrix} = 2\begin{pmatrix}1 & 2\\ -1 & -2\end{pmatrix} = 2A.$$

Din $aA = 2A$, comparând elementul $(1,1)$ (nenul în $A$): $a = 2$.

**Răspuns:** $a = 2$. *Barem: 3p produsul, 2p valoarea lui $a$.*

#### c) $x$ real cu $A\cdot B(x) = A\cdot\left(B(0) - 3I_2\right)$

$$A\cdot B(x) = \begin{pmatrix}(x+1) + 2(x-1) & (2x+1) + 2(2x-1)\\ -(x+1) - 2(x-1) & -(2x+1) - 2(2x-1)\end{pmatrix} = \begin{pmatrix}3x - 1 & 6x - 1\\ -3x + 1 & -6x + 1\end{pmatrix}.$$

$B(0) - 3I_2 = \begin{pmatrix}-2 & 1\\ -1 & -4\end{pmatrix}$, deci

$$A\cdot\left(B(0) - 3I_2\right) = \begin{pmatrix}-2 - 2 & 1 - 8\\ 2 + 2 & -1 + 8\end{pmatrix} = \begin{pmatrix}-4 & -7\\ 4 & 7\end{pmatrix}.$$

Egalăm: $3x - 1 = -4 \Rightarrow x = -1$ și $6x - 1 = -7 \Rightarrow x = -1$ — consistent (celelalte două elemente sunt opusele acestora).

**Răspuns:** $x = -1$. *Barem: 3p calculul celor două produse, 2p valoarea lui $x$.* Atenție: $A$ nu este inversabilă ($\det A = 0$), deci nu poți „simplifica” prin $A$ — trebuie făcute produsele.

### 2. Polinomul $f = X^3 + 2X^2 + mX - 3$

#### a) Pentru $m = 0$: $f(1) = 0$

$$f = X^3 + 2X^2 - 3 \Rightarrow f(1) = 1 + 2 - 3 = 0.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $m$ pentru care $f$ este divizibil cu $X + 1$

După teorema lui Bézout, $X + 1 \mid f \iff f(-1) = 0$:

$$f(-1) = -1 + 2 - m - 3 = -m - 2 = 0 \iff m = -2.$$

**Răspuns:** $m = -2$. *Barem: 3p $f(-1)$, 2p valoarea lui $m$.*

#### c) $m$ cu $(1 - x_1)(1 - x_2)(1 - x_3) = x_1x_2x_3$

$f$ fiind monic cu rădăcinile $x_1, x_2, x_3$, avem $f = (X - x_1)(X - x_2)(X - x_3)$, deci

$$(1 - x_1)(1 - x_2)(1 - x_3) = f(1) = 1 + 2 + m - 3 = m.$$

Din relațiile lui Viète, $x_1x_2x_3 = -\dfrac{d}{a} = -\dfrac{-3}{1} = 3$.

Condiția devine $m = 3$.

**Răspuns:** $m = 3$. *Barem: 3p $(1-x_1)(1-x_2)(1-x_3) = f(1) = m$, 2p Viète și valoarea lui $m$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(1, +\infty) \to \mathbb R$, $f(x) = \dfrac{3x^2}{x^2 + x - 2}$

#### a) $f'(x) = \dfrac{3x(x - 4)}{(x^2 + x - 2)^2}$

Regula câtului:

$$f'(x) = \frac{6x(x^2 + x - 2) - 3x^2(2x + 1)}{(x^2 + x - 2)^2} = \frac{6x^3 + 6x^2 - 12x - 6x^3 - 3x^2}{(x^2+x-2)^2} = \frac{3x^2 - 12x}{(x^2+x-2)^2} = \frac{3x(x-4)}{(x^2+x-2)^2}.$$

(Numitorul $x^2 + x - 2 = (x-1)(x+2) > 0$ pe $(1, +\infty)$.) *Barem: 3p derivarea, 2p forma finală.*

#### b) Asimptota orizontală spre $+\infty$

$$\lim_{x\to+\infty}\frac{3x^2}{x^2 + x - 2} = \lim_{x\to+\infty}\frac{3}{1 + \frac1x - \frac{2}{x^2}} = 3.$$

Limita este finită, deci dreapta $y = 3$ este asimptotă orizontală spre $+\infty$.

**Răspuns:** $y = 3$. *Barem: 3p limita, 2p concluzia.*

#### c) $f(x) + f(x^2) \ge \dfrac{17}{3}$, pentru orice $x \in (1, 2]$

Din a), pe $(1, 4]$ avem $3x > 0$ și $x - 4 \le 0$, deci $f'(x) \le 0$: $f$ este **descrescătoare** pe $(1, 4]$.

Pentru $x \in (1, 2]$:

- $x \le 2$, cu $x, 2 \in (1, 4]$ $\Rightarrow f(x) \ge f(2)$;
- $1 < x^2 \le 4$ $\Rightarrow f(x^2) \ge f(4)$.

Valorile: $f(2) = \dfrac{12}{4 + 2 - 2} = 3$, $f(4) = \dfrac{48}{16 + 4 - 2} = \dfrac{48}{18} = \dfrac83$.

Adunând: $f(x) + f(x^2) \ge 3 + \dfrac83 = \dfrac{17}{3}$, cu egalitate pentru $x = 2$. *Barem: 2p monotonia, 3p inegalitățile și concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = x(x - 1)^2$

#### a) $\displaystyle\int_3^7 \frac{f(x)}{(x-1)^2}\,dx = 20$

Pe $[3, 7]$, $(x-1)^2 \ne 0$ și fracția se simplifică la $x$:

$$\int_3^7 x\,dx = \frac{x^2}{2}\Big|_3^7 = \frac{49}{2} - \frac92 = \frac{40}{2} = 20.$$

*Barem: 3p simplificarea și primitiva, 2p calculul.*

#### b) $\displaystyle\int_2^3 \frac{x}{f(x)}\,dx = \frac12$

$\dfrac{x}{f(x)} = \dfrac{1}{(x-1)^2} = (x-1)^{-2}$, care are primitiva $-\dfrac{1}{x-1}$:

$$\int_2^3 \frac{dx}{(x-1)^2} = -\frac{1}{x-1}\Big|_2^3 = -\frac12 + 1 = \frac12.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $\displaystyle\int_0^1 \frac{x f(e^x)}{e^x}\,dx = \frac{e^2 - 5}{4}$

$f(e^x) = e^x(e^x - 1)^2$, deci $\dfrac{x f(e^x)}{e^x} = x(e^x - 1)^2 = x\left(e^{2x} - 2e^x + 1\right)$.

Integrăm termen cu termen, folosind **integrarea prin părți** $\int u\,v' = uv - \int u'v$ cu $u = x$:

$$\int_0^1 xe^{2x}\,dx = \frac{xe^{2x}}{2}\Big|_0^1 - \int_0^1\frac{e^{2x}}{2}\,dx = \frac{e^2}{2} - \frac{e^{2x}}{4}\Big|_0^1 = \frac{e^2}{2} - \frac{e^2 - 1}{4} = \frac{e^2 + 1}{4},$$

$$\int_0^1 xe^{x}\,dx = xe^x\Big|_0^1 - \int_0^1 e^x\,dx = e - (e - 1) = 1, \qquad \int_0^1 x\,dx = \frac12.$$

Combinând:

$$\int_0^1 x(e^x-1)^2\,dx = \frac{e^2 + 1}{4} - 2\cdot 1 + \frac12 = \frac{e^2 + 1 - 8 + 2}{4} = \frac{e^2 - 5}{4}.$$

*Barem: 3p simplificarea și integrarea prin părți, 2p calculul final.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.3 | $x \in \{0, 2\}$ |
| I.4 | $p = \frac{2}{45}$ |
| I.5 | $a = 2$, $b = 4$ |
| II.1.b | $a = 2$ |
| II.1.c | $x = -1$ |
| II.2.b | $m = -2$ |
| II.2.c | $m = 3$ |
| III.1.b | $y = 3$ |

## Ce merită reținut din varianta 7

- **Divizibil cu 3 și cu 7** înseamnă divizibil cu 21 (numere prime între ele).
- **Produsul** $(a - x_1)(a - x_2)(a - x_3)$ pentru un polinom monic este $f(a)$ — nu dezvolta parantezele.
- **Inegalități cu** $f(x) + f(x^2)$: folosește monotonia pe un interval care conține atât $x$, cât și $x^2$.
- **Integrale cu** $f(e^x)$: simplifică întâi, apoi integrează prin părți termenii de forma $xe^{kx}$.
