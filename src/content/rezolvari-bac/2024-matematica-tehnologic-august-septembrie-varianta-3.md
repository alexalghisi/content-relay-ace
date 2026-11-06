Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_tehnologic**, sesiunea august–septembrie, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $(0{,}3 + 0{,}4)\cdot 10 + 2\cdot 0{,}5 = 8$

Respectăm ordinea operațiilor: întâi paranteza, apoi înmulțirile, la final adunarea.

$$(0{,}3 + 0{,}4)\cdot 10 + 2\cdot 0{,}5 = 0{,}7\cdot 10 + 1 = 7 + 1 = 8.$$

*Barem: 3p calculul parantezei și al produselor, 2p rezultatul.*

### 2. $f(x) = 2x - 1$: arătați că $f(1) + f(2) = 4$

$f(1) = 2\cdot 1 - 1 = 1$ și $f(2) = 2\cdot 2 - 1 = 3$, deci $f(1) + f(2) = 1 + 3 = 4$.

*Barem: 2p $f(1)$, 3p $f(2)$ și suma.*

### 3. Ecuația $\log_5(2x + 1) = \log_5 5$

**Condiția de existență:** $2x + 1 > 0 \iff x > -\dfrac12$.

Logaritmul în baza 5 este injectiv, deci argumentele sunt egale:

$$2x + 1 = 5 \iff 2x = 4 \iff x = 2.$$

Cum $2 > -\dfrac12$, soluția convine.

**Răspuns:** $x = 2$. *Barem: 3p ecuația $2x + 1 = 5$, 2p soluția care convine.*

### 4. Probabilitatea ca un număr din $A = \{11, 21, 31, 41, 51, 61, 71, 81, 91\}$ să fie divizibil cu 3

Mulțimea are 9 elemente $\Rightarrow$ **9 cazuri posibile**.

Un număr este divizibil cu 3 dacă suma cifrelor sale se divide cu 3. Sumele cifrelor sunt: $2, 3, 4, 5, 6, 7, 8, 9, 10$. Se divid cu 3 sumele $3, 6, 9$, adică numerele $21, 51, 81$ $\Rightarrow$ **3 cazuri favorabile**.

$$p = \frac{\text{cazuri favorabile}}{\text{cazuri posibile}} = \frac39 = \frac13.$$

**Răspuns:** $p = \dfrac13$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(3,1)$, $B(m,2)$, $C(5,3)$, $B$ mijlocul lui $AC$

Coordonatele mijlocului sunt mediile aritmetice ale coordonatelor capetelor:

$$x_B = \frac{x_A + x_C}{2} \Rightarrow m = \frac{3 + 5}{2} = 4.$$

Verificare pe ordonată: $\dfrac{1 + 3}{2} = 2 = y_B$ ✔.

**Răspuns:** $m = 4$. *Barem: 3p formula mijlocului, 2p $m = 4$.*

### 6. Triunghi dreptunghic în $A$, $BC = 20$, $AC = 16$: perimetrul este 48

Ipotenuza este $BC$. Din teorema lui Pitagora:

$$AB = \sqrt{BC^2 - AC^2} = \sqrt{400 - 256} = \sqrt{144} = 12.$$

$$P_{\triangle ABC} = AB + AC + BC = 12 + 16 + 20 = 48.$$

*Barem: 3p $AB = 12$, 2p perimetrul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}2x + 1 & 1\\ 1 & x\end{pmatrix}$

#### a) $\det(A(1)) = 2$

$$A(1) = \begin{pmatrix}3 & 1\\ 1 & 1\end{pmatrix}, \qquad \det(A(1)) = 3\cdot 1 - 1\cdot 1 = 2.$$

*Barem: 3p dezvoltarea determinantului, 2p rezultatul.*

#### b) $A(1) + A(5) = 2A(3)$

$$A(1) + A(5) = \begin{pmatrix}3 & 1\\ 1 & 1\end{pmatrix} + \begin{pmatrix}11 & 1\\ 1 & 5\end{pmatrix} = \begin{pmatrix}14 & 2\\ 2 & 6\end{pmatrix} = 2\begin{pmatrix}7 & 1\\ 1 & 3\end{pmatrix} = 2A(3).$$

*Barem: 3p suma, 2p identificarea cu $2A(3)$.*

#### c) $X \in \mathcal M_2(\mathbb R)$ cu $X\cdot A(1) = A(3)$

Cum $\det(A(1)) = 2 \ne 0$, $A(1)$ este inversabilă. Înmulțind la **dreapta** cu $A(1)^{-1}$: $X = A(3)\cdot A(1)^{-1}$.

Pentru $\begin{pmatrix}a & b\\ c & d\end{pmatrix}$ cu determinant nenul, inversa este $\dfrac{1}{ad - bc}\begin{pmatrix}d & -b\\ -c & a\end{pmatrix}$:

$$A(1)^{-1} = \frac12\begin{pmatrix}1 & -1\\ -1 & 3\end{pmatrix} = \begin{pmatrix}\frac12 & -\frac12\\ -\frac12 & \frac32\end{pmatrix}.$$

$$X = \begin{pmatrix}7 & 1\\ 1 & 3\end{pmatrix}\begin{pmatrix}\frac12 & -\frac12\\ -\frac12 & \frac32\end{pmatrix} = \begin{pmatrix}\frac72 - \frac12 & -\frac72 + \frac32\\ \frac12 - \frac32 & -\frac12 + \frac92\end{pmatrix} = \begin{pmatrix}3 & -2\\ -1 & 4\end{pmatrix}.$$

**Verificare:** $\begin{pmatrix}3 & -2\\ -1 & 4\end{pmatrix}\begin{pmatrix}3 & 1\\ 1 & 1\end{pmatrix} = \begin{pmatrix}7 & 1\\ 1 & 3\end{pmatrix} = A(3)$ ✔.

**Răspuns:** $X = \begin{pmatrix}3 & -2\\ -1 & 4\end{pmatrix}$. Atenție: ordinea contează — $X = A(3)A(1)^{-1}$, nu $A(1)^{-1}A(3)$. *Barem: 3p inversa, 2p matricea $X$.*

### 2. $f = X^3 + mX^2 + 2X - 5$

#### a) $f(0) = -5$ pentru orice $m$

$$f(0) = 0^3 + m\cdot 0^2 + 2\cdot 0 - 5 = -5,$$

independent de $m$ (termenul liber nu conține $m$). *Barem: 3p înlocuirea, 2p finalizarea.*

#### b) $m$ pentru care 1 este rădăcină

1 este rădăcină $\iff f(1) = 0$: $1 + m + 2 - 5 = 0 \iff m - 2 = 0 \iff m = 2$.

**Răspuns:** $m = 2$. *Barem: 3p condiția $f(1) = 0$, 2p $m = 2$.*

#### c) $m \in \mathbb N$ cu $x_1^2 + x_2^2 + x_3^2 = 5$

Relațiile lui Viète pentru $X^3 + mX^2 + 2X - 5$:

$$x_1 + x_2 + x_3 = -m, \qquad x_1x_2 + x_1x_3 + x_2x_3 = 2.$$

Din $(x_1 + x_2 + x_3)^2 = x_1^2 + x_2^2 + x_3^2 + 2(x_1x_2 + x_1x_3 + x_2x_3)$:

$$x_1^2 + x_2^2 + x_3^2 = m^2 - 2\cdot 2 = m^2 - 4.$$

$m^2 - 4 = 5 \iff m^2 = 9 \iff m = \pm 3$; cum $m$ este natural, $m = 3$.

**Răspuns:** $m = 3$. *Barem: 2p relațiile lui Viète, 3p suma pătratelor și $m = 3$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x^2}{x^2 + 1}$

#### a) $f'(x) = \dfrac{2x}{(x^2 + 1)^2}$

Regula câtului:

$$f'(x) = \frac{(x^2)'(x^2 + 1) - x^2(x^2 + 1)'}{(x^2 + 1)^2} = \frac{2x(x^2 + 1) - x^2\cdot 2x}{(x^2+1)^2} = \frac{2x^3 + 2x - 2x^3}{(x^2+1)^2} = \frac{2x}{(x^2+1)^2}.$$

*Barem: 2p aplicarea regulii câtului, 3p calculul.*

#### b) Asimptota orizontală spre $+\infty$

$$\lim_{x\to+\infty}\frac{x^2}{x^2 + 1} = \lim_{x\to+\infty}\frac{x^2}{x^2\left(1 + \frac{1}{x^2}\right)} = \frac{1}{1 + 0} = 1.$$

Limita este finită, deci dreapta $y = 1$ este asimptotă orizontală spre $+\infty$.

**Răspuns:** $y = 1$. *Barem: 3p limita, 2p concluzia.*

#### c) Intervalele de monotonie

Numitorul $(x^2 + 1)^2 > 0$, deci semnul lui $f'$ este semnul lui $2x$. $f'(x) = 0 \iff x = 0$.

| $x$ | $-\infty$ | | $0$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | | ↘ | $0$ | ↗ | |

**Răspuns:** $f$ este descrescătoare pe $(-\infty, 0]$ și crescătoare pe $[0, +\infty)$. *Barem: 3p semnul derivatei pe $(-\infty, 0]$, 2p pe $[0, +\infty)$.*

### 2. $f(x) = e^x(x + 1)$

#### a) $\displaystyle\int_0^1\frac{f(x)}{x + 1}\,dx = e - 1$

Pe $[0, 1]$, $x + 1 \ne 0$, deci $\dfrac{f(x)}{x + 1} = e^x$:

$$\int_0^1 e^x\,dx = e^x\Big|_0^1 = e - 1.$$

*Barem: 3p simplificarea și primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 f(x)\,dx = e$

Integrăm prin părți cu $u = x + 1$ ($u' = 1$) și $v' = e^x$ ($v = e^x$):

$$\int_0^1 e^x(x + 1)\,dx = e^x(x + 1)\Big|_0^1 - \int_0^1 e^x\,dx = (2e - 1) - (e - 1) = e.$$

(Alternativ: $\left(xe^x\right)' = e^x(x + 1)$, deci $\int_0^1 f(x)\,dx = xe^x\big|_0^1 = e$.) *Barem: 3p integrarea prin părți, 2p rezultatul.*

#### c) $a > 1$ cu $\displaystyle\int_1^a\frac{2xf(x^2)}{x^2 + 1}\,dx = e(e^3 - 1)$

$f(x^2) = e^{x^2}(x^2 + 1)$, deci $\dfrac{2xf(x^2)}{x^2 + 1} = 2xe^{x^2} = \left(e^{x^2}\right)'$:

$$\int_1^a 2xe^{x^2}\,dx = e^{x^2}\Big|_1^a = e^{a^2} - e.$$

Ecuația: $e^{a^2} - e = e^4 - e \iff e^{a^2} = e^4 \iff a^2 = 4 \iff a = \pm 2$. Cum $a > 1$, $a = 2$.

**Răspuns:** $a = 2$. *Barem: 3p calculul integralei, 2p $a = 2$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.3 | $x = 2$ |
| I.4 | $p = \tfrac13$ |
| I.5 | $m = 4$ |
| I.6 | $P = 48$ |
| II.1.c | $X = \begin{pmatrix}3 & -2\\ -1 & 4\end{pmatrix}$ |
| II.2.b | $m = 2$ |
| II.2.c | $m = 3$ |
| III.1.b | $y = 1$ |
| III.1.c | ↘ pe $(-\infty, 0]$, ↗ pe $[0, +\infty)$ |
| III.2.c | $a = 2$ |

## Ce merită reținut din varianta 3

- **Ecuații matriceale $X\cdot B = C$**: $X = C\cdot B^{-1}$ (inversa la dreapta); verifică produsul la final.
- **Suma pătratelor rădăcinilor**: $S_1^2 - 2S_2$, cu relațiile lui Viète.
- **Integrale cu $2x\,e^{x^2}$**: recunoaște derivata lui $e^{x^2}$.
