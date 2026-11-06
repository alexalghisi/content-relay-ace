Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_mate-info**, sesiunea specială, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie aritmetică: $a_3$, știind $a_1 = 2$ și $a_2 = 12$

Rația este $r = a_2 - a_1 = 12 - 2 = 10$, deci $a_3 = a_2 + r = 12 + 10 = 22$.

Același rezultat îl dă proprietatea termenului din mijloc: $a_2 = \dfrac{a_1 + a_3}{2} \Rightarrow 12 = \dfrac{2 + a_3}{2} \Rightarrow a_3 = 22$.

**Răspuns:** $a_3 = 22$. *Barem: 3p relația dintre termeni, 2p valoarea lui $a_3$.*

### 2. $f(x) = x - 8$: determinați $m$ cu $f(1 + m) = 1 - m$

$f(1 + m) = 1 + m - 8 = m - 7$. Ecuația:

$$m - 7 = 1 - m \iff 2m = 8 \iff m = 4.$$

**Răspuns:** $m = 4$. *Barem: 2p expresia $f(1+m)$, 3p rezolvarea ecuației.*

### 3. Ecuație logaritmică: $\lg(x^2 - 3x + 5) = \lg 5$

**Condiția de existență:** $x^2 - 3x + 5 > 0$. Discriminantul este $\Delta = 9 - 20 = -11 < 0$ și coeficientul lui $x^2$ este pozitiv, deci condiția are loc pentru orice $x$ real.

Funcția $\lg$ este injectivă, deci egalăm argumentele:

$$x^2 - 3x + 5 = 5 \iff x^2 - 3x = 0 \iff x(x - 3) = 0 \iff x \in \{0, 3\}.$$

**Verificare:** pentru $x = 0$ și $x = 3$ argumentul este $5 > 0$ ✔.

**Răspuns:** $x \in \{0, 3\}$. *Barem: 3p ecuația $x^2 - 3x = 0$, 2p soluțiile care convin.*

### 4. Probabilitatea ca, pentru $n$ natural de două cifre, $\sqrt{n + 1}$ să fie natural

**Cazuri posibile:** numerele de două cifre $10, \dots, 99$ — $90$ de numere.

**Cazuri favorabile:** $\sqrt{n+1} \in \mathbb N \iff n + 1$ este pătrat perfect. Cum $11 \le n + 1 \le 100$, pătratele perfecte posibile sunt $16, 25, 36, 49, 64, 81, 100$, adică $n \in \{15, 24, 35, 48, 63, 80, 99\}$ — $7$ numere. (Nu uita de $n = 99$, pentru care $n + 1 = 100 = 10^2$.)

$$p = \frac{7}{90}.$$

**Răspuns:** $p = \dfrac{7}{90}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(1,2)$, $B(3,0)$, $C(5,a)$: $OA \parallel BC$

Pantele: $m_{OA} = \dfrac{2 - 0}{1 - 0} = 2$ și $m_{BC} = \dfrac{a - 0}{5 - 3} = \dfrac{a}{2}$.

Drepte paralele (distincte) au pante egale: $\dfrac a2 = 2 \Rightarrow a = 4$. (Pentru $a = 4$, $B(3,0)$ nu este pe dreapta $OA$: $y = 2x$, deci dreptele sunt într-adevăr distincte.)

**Răspuns:** $a = 4$. *Barem: 2p $m_{OA}$, 3p $m_{BC}$ și concluzia.*

### 6. Triunghi dreptunghic în $A$, $AC = 9$, $B = \dfrac{\pi}{3}$: arătați că $AB = 3\sqrt3$

Față de unghiul $B$, $AC$ este cateta opusă și $AB$ cateta alăturată:

$$\operatorname{tg} B = \frac{AC}{AB} \Rightarrow \sqrt3 = \frac{9}{AB} \Rightarrow AB = \frac{9}{\sqrt3} = \frac{9\sqrt3}{3} = 3\sqrt3.$$

*Barem: 3p scrierea lui $\operatorname{tg} B$, 2p calculul lui $AB$.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}1 & x & x\\ 0 & 0 & x - 1\\ x & 1 & 1\end{pmatrix}$

#### a) $\det(A(2)) = 3$

$$\det(A(2)) = \begin{vmatrix}1 & 2 & 2\\ 0 & 0 & 1\\ 2 & 1 & 1\end{vmatrix}.$$

Sarrus: $1\cdot0\cdot1 + 0\cdot1\cdot2 + 2\cdot2\cdot1 = 0 + 0 + 4$; minus $2\cdot0\cdot2 + 1\cdot1\cdot1 + 1\cdot2\cdot0 = 0 + 1 + 0$.

$$\det(A(2)) = 4 - 1 = 3.$$

*Barem: 2p scrierea determinantului, 3p calculul.*

#### b) $x$ real cu $A(x)\cdot A(1) = 2A(x)$

$A(1) = \begin{pmatrix}1 & 1 & 1\\ 0 & 0 & 0\\ 1 & 1 & 1\end{pmatrix}$ — are toate coloanele egale, deci și produsul $A(x)\cdot A(1)$ are coloanele egale. Fiecare element al produsului de pe linia $i$ este suma elementelor din coloanele 1 și 3 ale liniei $i$ din $A(x)$:

$$A(x)\cdot A(1) = \begin{pmatrix}1 + x & 1 + x & 1 + x\\ x - 1 & x - 1 & x - 1\\ x + 1 & x + 1 & x + 1\end{pmatrix}.$$

$$2A(x) = \begin{pmatrix}2 & 2x & 2x\\ 0 & 0 & 2x - 2\\ 2x & 2 & 2\end{pmatrix}.$$

Egalăm elementele: poziția $(1,1)$: $1 + x = 2 \Rightarrow x = 1$. Verificăm toate celelalte pentru $x = 1$: linia 1: $2 = 2x = 2$ ✔; linia 2: $0 = 0$, $0 = 2x - 2 = 0$ ✔; linia 3: $2 = 2x = 2$, $2 = 2$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p produsul $A(x)\cdot A(1)$, 2p valoarea lui $x$.*

#### c) Dacă $A(x)$ este inversabilă, atunci și $A(-x)$ este inversabilă

Calculăm $\det(A(x))$ cu Sarrus:

$$\det(A(x)) = 0 + 0 + x(x-1)\cdot x - x\cdot 0\cdot x - 1\cdot(x - 1)\cdot 1 - 0 = x^2(x - 1) - (x - 1) = (x - 1)(x^2 - 1) = (x - 1)^2(x + 1).$$

$A(x)$ este inversabilă $\iff \det(A(x)) \ne 0 \iff x \notin \{-1, 1\}$.

Dacă $x \in \mathbb R\setminus\{-1, 1\}$, atunci și $-x \in \mathbb R\setminus\{-1, 1\}$ (mulțimea $\{-1, 1\}$ este simetrică față de 0). Deci

$$\det(A(-x)) = (-x - 1)^2(-x + 1) = (x + 1)^2(1 - x) \ne 0,$$

adică $A(-x)$ este inversabilă. $\blacksquare$

*Barem: 3p determinantul și condiția $x \in \mathbb R\setminus\{-1,1\}$, 2p concluzia pentru $A(-x)$.*

### 2. Legea $x \circ y = xy + \dfrac{2x + 2y - 1}{4}$ (asociativă)

Utilă pentru toată problema: $x \circ y = xy + \dfrac x2 + \dfrac y2 - \dfrac14 = \left(x + \dfrac12\right)\left(y + \dfrac12\right) - \dfrac12$.

#### a) $1 \circ 1 = \dfrac74$

$$1 \circ 1 = 1\cdot 1 + \frac{2 + 2 - 1}{4} = 1 + \frac34 = \frac74.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $e = \dfrac12$ este elementul neutru

$$x \circ \frac12 = \frac x2 + \frac{2x + 1 - 1}{4} = \frac x2 + \frac x2 = x, \qquad \frac12 \circ x = \frac x2 + \frac{1 + 2x - 1}{4} = \frac x2 + \frac x2 = x,$$

pentru orice $x$ real, deci $e = \dfrac12$ este elementul neutru. *Barem: 2p $x \circ \frac12 = x$, 3p $\frac12 \circ x = x$ și concluzia.*

#### c) $x$ real cu $\left(\dfrac12 - x\right)\circ\left(\dfrac12 + x\right)\circ\left(\dfrac12 + x^2\right) = \dfrac12 - x^2$

Folosim forma $u \circ v = \left(u + \frac12\right)\left(v + \frac12\right) - \frac12$ și asociativitatea (calculăm de la stânga):

$$\left(\frac12 - x\right)\circ\left(\frac12 + x\right) = (1 - x)(1 + x) - \frac12 = \frac12 - x^2.$$

$$\left(\frac12 - x^2\right)\circ\left(\frac12 + x^2\right) = (1 - x^2)(1 + x^2) - \frac12 = \frac12 - x^4.$$

Ecuația devine:

$$\frac12 - x^4 = \frac12 - x^2 \iff x^4 - x^2 = 0 \iff x^2(x - 1)(x + 1) = 0 \iff x \in \{-1, 0, 1\}.$$

**Răspuns:** $x \in \{-1, 0, 1\}$. *Barem: 2p calculul compunerilor, 3p soluțiile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(1,+\infty)\to\mathbb R$, $f(x) = \dfrac{4x^3}{(x - 1)^2}$

#### a) $f'(x) = \dfrac{4x^2(x - 3)}{(x - 1)^3}$

Regula câtului, cu $\left((x-1)^2\right)' = 2(x - 1)$:

$$f'(x) = \frac{12x^2(x-1)^2 - 4x^3\cdot 2(x - 1)}{(x-1)^4}.$$

Simplificăm cu $(x - 1) \ne 0$:

$$f'(x) = \frac{12x^2(x - 1) - 8x^3}{(x-1)^3} = \frac{12x^3 - 12x^2 - 8x^3}{(x-1)^3} = \frac{4x^3 - 12x^2}{(x-1)^3} = \frac{4x^2(x - 3)}{(x-1)^3}.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Asimptota oblică spre $+\infty$

$$m = \lim_{x\to+\infty}\frac{f(x)}{x} = \lim_{x\to+\infty}\frac{4x^2}{(x-1)^2} = 4,$$

$$n = \lim_{x\to+\infty}\left(f(x) - 4x\right) = \lim_{x\to+\infty}\frac{4x^3 - 4x(x^2 - 2x + 1)}{(x-1)^2} = \lim_{x\to+\infty}\frac{8x^2 - 4x}{(x-1)^2} = 8.$$

**Răspuns:** asimptota oblică spre $+\infty$ este $y = 4x + 8$. *Barem: 2p panta, 3p ordonata la origine și ecuația.*

#### c) Ecuația $f(x) = m$ are exact două soluții, pentru orice $m \in (27, +\infty)$

Pe $(1, +\infty)$: $4x^2 > 0$ și $(x - 1)^3 > 0$, deci semnul lui $f'$ este semnul lui $x - 3$.

| $x$ | $1$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | $+\infty$ | ↘ | $27$ | ↗ | $+\infty$ |

Valori: $f(3) = \dfrac{4\cdot 27}{4} = 27$; $\lim\limits_{x\to1^+} f(x) = \dfrac{4}{0^+} = +\infty$; $\lim\limits_{x\to+\infty} f(x) = +\infty$ (de exemplu din b), $f(x) \approx 4x + 8$).

Fie $m > 27$.

- Pe $(1, 3]$, $f$ este continuă și strict descrescătoare de la $+\infty$ la $27$, deci este o bijecție de la $(1, 3]$ la $[27, +\infty)$: ecuația $f(x) = m$ are **exact o soluție** în $(1, 3)$.
- Pe $[3, +\infty)$, $f$ este continuă și strict crescătoare de la $27$ la $+\infty$, deci ecuația are **exact o soluție** în $(3, +\infty)$.

Cum $f(3) = 27 \ne m$, soluțiile sunt distincte și nu există altele: ecuația are exact două soluții. $\blacksquare$

*Barem: 2p monotonia, 3p limitele, $f(3) = 27$, continuitatea și concluzia.*

### 2. $f:(0,+\infty)\to\mathbb R$, $f(x) = x + 1 + x\ln x$

#### a) $\displaystyle\int_1^3 \left(f(x) - x\ln x\right)dx = 6$

$f(x) - x\ln x = x + 1$, deci

$$\int_1^3 (x + 1)\,dx = \left(\frac{x^2}{2} + x\right)\Big|_1^3 = \left(\frac92 + 3\right) - \left(\frac12 + 1\right) = \frac{15}{2} - \frac32 = 6.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^e \left(f(x) - x - 1\right)dx = \frac{e^2 + 1}{4}$

$f(x) - x - 1 = x\ln x$. Integrăm prin părți, cu $u = \ln x$, $v' = x$ ($u' = \frac1x$, $v = \frac{x^2}{2}$):

$$\int_1^e x\ln x\,dx = \frac{x^2}{2}\ln x\Big|_1^e - \int_1^e \frac{x^2}{2}\cdot\frac1x\,dx = \frac{e^2}{2} - \frac{x^2}{4}\Big|_1^e = \frac{e^2}{2} - \frac{e^2}{4} + \frac14 = \frac{e^2 + 1}{4}.$$

*Barem: 3p integrarea prin părți, 2p calculul final.*

#### c) $a$ real nenul pentru care volumul corpului de rotație al graficului lui $g(x) = \dfrac{1}{\left(f(x) - x\ln x\right)^2}$, $x\in[1,3]$, este $\dfrac{7\pi}{24a}$

$f(x) - x\ln x = x + 1$, deci $g(x) = \dfrac{1}{(x + 1)^2}$ și $g^2(x) = \dfrac{1}{(x+1)^4}$.

$$V = \pi\int_1^3 g^2(x)\,dx = \pi\int_1^3 (x + 1)^{-4}\,dx = \pi\left(-\frac{1}{3(x+1)^3}\right)\Big|_1^3 = \pi\left(-\frac{1}{3\cdot 64} + \frac{1}{3\cdot 8}\right).$$

$$V = \pi\cdot\frac{-1 + 8}{192} = \frac{7\pi}{192}.$$

Condiția $\dfrac{7\pi}{192} = \dfrac{7\pi}{24a}$ dă $24a = 192$, deci $a = 8$.

**Răspuns:** $a = 8$. *Barem: 3p formula volumului și calculul integralei, 2p valoarea lui $a$.* Greșeală frecventă: să integrezi $g$ în loc de $g^2$ — volumul folosește pătratul funcției.

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_3 = 22$ |
| I.2 | $m = 4$ |
| I.3 | $x \in \{0, 3\}$ |
| I.4 | $p = \tfrac{7}{90}$ |
| I.5 | $a = 4$ |
| I.6 | $AB = 3\sqrt3$ |
| II.1.b | $x = 1$ |
| II.2.c | $x \in \{-1, 0, 1\}$ |
| III.1.b | $y = 4x + 8$ |
| III.2.c | $a = 8$ |

## Ce merită reținut din varianta 9

- **Legi de compoziție**: rescrie legea sub forma $(x + k)(y + k) - k$ — compunerile repetate devin produse simple.
- **Inversabilitate**: o matrice e inversabilă exact când determinantul este nenul; factorizează determinantul ca să vezi pentru ce valori se anulează.
- **Număr de soluții ale lui $f(x) = m$**: pe fiecare interval de strictă monotonie, $f$ continuă ia fiecare valoare cel mult o dată.
- **Volume de rotație**: $V = \pi\int_a^b g^2(x)\,dx$.
