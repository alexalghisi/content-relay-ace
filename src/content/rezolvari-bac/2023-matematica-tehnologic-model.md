Rezolvarea completă a subiectului de **Bacalaureat 2023 la Matematică M_tehnologic**, **modelul oficial** publicat de minister. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie aritmetică: determinați $a_1$, știind $a_2 = 7$ și $a_6 = 23$

Termenul general al unei progresii aritmetice este $a_n = a_1 + (n-1)r$. Între $a_2$ și $a_6$ sunt 4 „pași”:

$$a_6 = a_2 + 4r \iff 23 = 7 + 4r \iff 4r = 16 \iff r = 4.$$

Apoi $a_1 = a_2 - r = 7 - 4 = 3$.

**Răspuns:** $a_1 = 3$. *Barem: 3p rația, 2p $a_1$.*

### 2. $f(x) = 8x - 5$: determinați $a$ astfel încât $A(a, 3a)$ să aparțină graficului

Un punct $(x_0, y_0)$ aparține graficului lui $f$ exact când $f(x_0) = y_0$. Deci:

$$f(a) = 3a \iff 8a - 5 = 3a \iff 5a = 5 \iff a = 1.$$

**Răspuns:** $a = 1$. *Barem: 3p condiția $f(a) = 3a$, 2p rezolvarea.*

### 3. Ecuația $\log_4 x + \log_4(3x) = \log_4 12$

**Condiții de existență:** $x > 0$ și $3x > 0$, adică $x > 0$.

Folosim $\log_a u + \log_a v = \log_a(uv)$:

$$\log_4(3x^2) = \log_4 12 \iff 3x^2 = 12 \iff x^2 = 4 \iff x \in \{-2, 2\}.$$

$x = -2$ nu respectă condiția $x > 0$, deci se respinge; $x = 2$ convine (verificare: $\log_4 2 + \log_4 6 = \log_4 12$ ✔).

**Răspuns:** $x = 2$. *Barem: 3p ecuația $3x^2 = 12$, 2p selectarea soluției care convine.*

### 4. Probabilitatea ca $\sqrt n$ să fie număr natural par, $n$ de două cifre

**Cazuri posibile:** numerele de două cifre sunt $10, 11, \dots, 99$, adică $99 - 10 + 1 = 90$ numere.

**Cazuri favorabile:** $\sqrt n$ natural înseamnă că $n$ este pătrat perfect. Pătratele perfecte de două cifre sunt $16, 25, 36, 49, 64, 81$, cu rădăcinile $4, 5, 6, 7, 8, 9$. Rădăcina e pară pentru $n \in \{16, 36, 64\}$ — 3 cazuri.

$$p = \frac{3}{90} = \frac{1}{30}.$$

**Răspuns:** $p = \dfrac{1}{30}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.* Atenție: se cere ca $\sqrt n$ (nu $n$) să fie par.

### 5. Distanța dintre mijloacele segmentelor $AB$ și $OC$, cu $A(-3,2)$, $B(1,4)$, $C(6,0)$

Mijlocul unui segment are coordonatele mediile aritmetice ale capetelor:

$$M\left(\frac{-3+1}{2}, \frac{2+4}{2}\right) = M(-1, 3), \qquad N\left(\frac{0+6}{2}, \frac{0+0}{2}\right) = N(3, 0).$$

$$MN = \sqrt{(3-(-1))^2 + (0-3)^2} = \sqrt{16 + 9} = 5.$$

**Răspuns:** $MN = 5$. *Barem: 2p mijloacele, 3p distanța.*

### 6. Triunghi dreptunghic în $A$, $BC = 16$, $\angle B = 30^\circ$; arătați că aria este $32\sqrt3$

$BC$ este ipotenuza. Cateta opusă unghiului $B$ este $AC$:

$$\sin B = \frac{AC}{BC} \iff \frac12 = \frac{AC}{16} \iff AC = 8.$$

(Sau: cateta opusă unghiului de $30^\circ$ este jumătate din ipotenuză.) Cu teorema lui Pitagora:

$$AB = \sqrt{BC^2 - AC^2} = \sqrt{256 - 64} = \sqrt{192} = 8\sqrt3.$$

Aria triunghiului dreptunghic este semiprodusul catetelor:

$$\mathcal A_{ABC} = \frac{AB\cdot AC}{2} = \frac{8\sqrt3\cdot 8}{2} = 32\sqrt3.$$

*Barem: 2p $AC = 8$, 3p $AB$ și aria.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $A = \begin{pmatrix}-3 & 3\\ -2 & -1\end{pmatrix}$ și $B(x) = \begin{pmatrix}x+1 & -3\\ 2 & x-1\end{pmatrix}$

#### a) $\det A = 9$

$$\det A = \begin{vmatrix}-3 & 3\\ -2 & -1\end{vmatrix} = (-3)(-1) - 3\cdot(-2) = 3 + 6 = 9.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $x$ pentru care $B(3)\cdot B(4) = xB(1)$

$B(3) = \begin{pmatrix}4 & -3\\ 2 & 2\end{pmatrix}$, $B(4) = \begin{pmatrix}5 & -3\\ 2 & 3\end{pmatrix}$, $B(1) = \begin{pmatrix}2 & -3\\ 2 & 0\end{pmatrix}$.

$$B(3)\cdot B(4) = \begin{pmatrix}4\cdot5 + (-3)\cdot 2 & 4\cdot(-3) + (-3)\cdot 3\\ 2\cdot 5 + 2\cdot 2 & 2\cdot(-3) + 2\cdot 3\end{pmatrix} = \begin{pmatrix}14 & -21\\ 14 & 0\end{pmatrix} = 7\begin{pmatrix}2 & -3\\ 2 & 0\end{pmatrix} = 7B(1).$$

Comparând cu $xB(1)$ (și $B(1) \ne O_2$), obținem $x = 7$.

**Răspuns:** $x = 7$. *Barem: 3p produsul, 2p concluzia.*

#### c) $a$ pentru care $B(a)$ este inversa matricei $C = \dfrac19 A$

$\det C = \dfrac{1}{81}\det A = \dfrac19 \ne 0$, deci $C$ este inversabilă. Inversa unei matrice $2\times2$ $\begin{pmatrix}p & q\\ r & s\end{pmatrix}$ este $\dfrac{1}{ps - qr}\begin{pmatrix}s & -q\\ -r & p\end{pmatrix}$. Pentru $C = \dfrac19\begin{pmatrix}-3 & 3\\ -2 & -1\end{pmatrix}$:

$$C^{-1} = 9A^{-1} = 9\cdot\frac19\begin{pmatrix}-1 & -3\\ 2 & -3\end{pmatrix} = \begin{pmatrix}-1 & -3\\ 2 & -3\end{pmatrix}.$$

Cerem $B(a) = C^{-1}$: $\begin{pmatrix}a+1 & -3\\ 2 & a-1\end{pmatrix} = \begin{pmatrix}-1 & -3\\ 2 & -3\end{pmatrix}$, deci $a + 1 = -1$ și $a - 1 = -3$, ambele dând $a = -2$.

(Varianta baremului: calculezi $C\cdot B(a) = \begin{pmatrix}\frac{-a+1}{3} & \frac{a+2}{3}\\ \frac{-2a-4}{9} & \frac{-a+7}{9}\end{pmatrix}$ și impui să fie $I_2$, ceea ce dă tot $a = -2$.)

**Răspuns:** $a = -2$. *Barem: 2p produsul $C\cdot B(a)$, 3p condiția $C\cdot B(a) = B(a)\cdot C = I_2$ și $a = -2$.*

### 2. Polinomul $f = X^3 + X^2 + mX - 4$

#### a) Pentru $m = 1$, $f(2) = 10$

$f = X^3 + X^2 + X - 4$, deci $f(2) = 8 + 4 + 2 - 4 = 10$.

*Barem: 3p înlocuirea, 2p calculul.*

#### b) Pentru $m = -4$, rădăcinile lui $f$

$f = X^3 + X^2 - 4X - 4$. Grupăm termenii:

$$f = X^2(X + 1) - 4(X + 1) = (X + 1)(X^2 - 4) = (X + 1)(X - 2)(X + 2).$$

**Răspuns:** rădăcinile sunt $-2$, $-1$ și $2$. *Barem: 2p descompunerea, 3p rădăcinile.*

#### c) Pentru orice $m$ natural nenul, $f$ nu are toate rădăcinile reale

Fie $x_1, x_2, x_3$ rădăcinile lui $f$ (în $\mathbb C$). Relațiile lui Viète: $x_1 + x_2 + x_3 = -1$ și $x_1x_2 + x_2x_3 + x_3x_1 = m$. Atunci

$$x_1^2 + x_2^2 + x_3^2 = (x_1 + x_2 + x_3)^2 - 2(x_1x_2 + x_2x_3 + x_3x_1) = 1 - 2m.$$

Pentru $m \in \mathbb N^*$ avem $m \ge 1$, deci $1 - 2m \le -1 < 0$. Dacă toate rădăcinile ar fi reale, suma pătratelor lor ar fi $\ge 0$ — contradicție. Deci $f$ nu are toate rădăcinile reale.

*Barem: 3p suma pătratelor $1 - 2m$, 2p concluzia.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(-2, +\infty) \to \mathbb R$, $f(x) = \dfrac{x^2 - 2x + 1}{x + 2}$

#### a) $f'(x) = \dfrac{x^2 + 4x - 5}{(x+2)^2}$

Regula câtului $\left(\dfrac uv\right)' = \dfrac{u'v - uv'}{v^2}$, cu $u = x^2 - 2x + 1$, $u' = 2x - 2$, $v = x + 2$, $v' = 1$:

$$f'(x) = \frac{(2x-2)(x+2) - (x^2 - 2x + 1)}{(x+2)^2} = \frac{2x^2 + 2x - 4 - x^2 + 2x - 1}{(x+2)^2} = \frac{x^2 + 4x - 5}{(x+2)^2}.$$

*Barem: 3p aplicarea regulii, 2p calculul final.*

#### b) $\lim\limits_{x\to+\infty}\dfrac{f(x)}{e^x} = 0$

$$\lim_{x\to+\infty}\frac{f(x)}{e^x} = \lim_{x\to+\infty}\frac{x^2 - 2x + 1}{e^x(x+2)}.$$

Avem nedeterminare $\frac{\infty}{\infty}$; aplicăm regula lui l'Hôpital. Derivata numitorului: $\left(e^x(x+2)\right)' = e^x(x+2) + e^x = e^x(x+3)$.

$$= \lim_{x\to+\infty}\frac{2x - 2}{e^x(x+3)} \overset{\text{l'H}}{=} \lim_{x\to+\infty}\frac{2}{e^x(x+4)} = 0,$$

pentru că numitorul tinde la $+\infty$. (Intuitiv: exponențiala crește mai repede decât orice polinom.)

*Barem: 3p prima aplicare a l'Hôpital, 2p finalizarea.*

#### c) $f$ este convexă

Derivăm $f'(x) = \dfrac{x^2 + 4x - 5}{(x+2)^2}$. Mai simplu: $x^2 + 4x - 5 = (x+2)^2 - 9$, deci $f'(x) = 1 - \dfrac{9}{(x+2)^2} = 1 - 9(x+2)^{-2}$. Atunci

$$f''(x) = -9\cdot(-2)(x+2)^{-3} = \frac{18}{(x+2)^3}.$$

Pe $(-2, +\infty)$ avem $x + 2 > 0$, deci $f''(x) > 0$ pentru orice $x$ din domeniu, adică $f$ este convexă.

*Barem: 3p $f''$, 2p semnul și concluzia.*

### 2. $f:(-1, +\infty) \to \mathbb R$, $f(x) = x + 1 + \dfrac{1}{\sqrt{x+1}}$

#### a) $\displaystyle\int_1^3\left(f(x) - \frac{1}{\sqrt{x+1}}\right)dx = 6$

Integrandul se simplifică la $x + 1$:

$$\int_1^3 (x+1)\,dx = \left(\frac{x^2}{2} + x\right)\Big|_1^3 = \left(\frac92 + 3\right) - \left(\frac12 + 1\right) = \frac{15}{2} - \frac32 = 6.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^8 (f(x) - x - 1)\,dx = 4$

$f(x) - x - 1 = \dfrac{1}{\sqrt{x+1}}$. Cum $\left(\sqrt{x+1}\right)' = \dfrac{1}{2\sqrt{x+1}}$, o primitivă a lui $\dfrac{1}{\sqrt{x+1}}$ este $2\sqrt{x+1}$:

$$\int_0^8\frac{dx}{\sqrt{x+1}} = 2\sqrt{x+1}\,\Big|_0^8 = 2\cdot 3 - 2\cdot 1 = 4.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) Volumul corpului de rotație al graficului lui $g = f\big|_{[0,3]}$ este $\pi\left(\dfrac{91}{3} + \ln 4\right)$

Formula: $V = \pi\displaystyle\int_0^3 g^2(x)\,dx$. Ridicăm la pătrat:

$$g^2(x) = \left(x + 1 + \frac{1}{\sqrt{x+1}}\right)^2 = (x+1)^2 + 2\sqrt{x+1} + \frac{1}{x+1}$$

(termenul dublu: $2(x+1)\cdot\dfrac{1}{\sqrt{x+1}} = 2\sqrt{x+1}$). Integrăm termen cu termen:

- $\displaystyle\int_0^3 (x+1)^2\,dx = \frac{(x+1)^3}{3}\Big|_0^3 = \frac{64}{3} - \frac13 = 21$;
- $\displaystyle\int_0^3 2(x+1)^{1/2}\,dx = \frac{4}{3}(x+1)\sqrt{x+1}\,\Big|_0^3 = \frac{32}{3} - \frac43 = \frac{28}{3}$;
- $\displaystyle\int_0^3\frac{dx}{x+1} = \ln(x+1)\Big|_0^3 = \ln 4$.

$$V = \pi\left(21 + \frac{28}{3} + \ln 4\right) = \pi\left(\frac{91}{3} + \ln 4\right).$$

*Barem: 2p formula volumului și dezvoltarea pătratului, 3p primitivele și calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_1 = 3$ |
| I.2 | $a = 1$ |
| I.3 | $x = 2$ |
| I.4 | $p = \dfrac{1}{30}$ |
| I.5 | $MN = 5$ |
| I.6 | aria $= 32\sqrt3$ |
| II.1.b | $x = 7$ |
| II.1.c | $a = -2$ |
| II.2.b | rădăcinile $-2, -1, 2$ |
| III.1.c | $f''(x) = \dfrac{18}{(x+2)^3} > 0$ |
| III.2.c | $V = \pi\left(\dfrac{91}{3} + \ln 4\right)$ |

## Ce merită reținut din acest model

- **Ecuații logaritmice**: scrie condițiile de existență la început și elimină explicit soluțiile care nu convin.
- **Rădăcinile nu sunt toate reale**: suma pătratelor rădăcinilor, calculată cu Viète, negativă $\Rightarrow$ există rădăcini nereale.
- **Convexitate**: derivata a doua; rescrierea $f'(x) = 1 - \frac{9}{(x+2)^2}$ scurtează mult calculul.
- **Volume de rotație**: $V = \pi\int g^2$; dezvoltă pătratul cu grijă la termenul dublu.
