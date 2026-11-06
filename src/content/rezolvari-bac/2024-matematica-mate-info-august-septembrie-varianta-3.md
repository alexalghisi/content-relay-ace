Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_mate-info**, sesiunea august–septembrie, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Termenul $a_1$ al progresiei aritmetice cu $a_2 = 14$ și $a_3 = 18$

Într-o progresie aritmetică, fiecare termen (de la al doilea încolo) este media aritmetică a vecinilor săi:

$$a_2 = \frac{a_1 + a_3}{2} \iff 14 = \frac{a_1 + 18}{2} \iff a_1 + 18 = 28 \iff a_1 = 10.$$

(Echivalent: rația este $r = a_3 - a_2 = 4$, iar $a_1 = a_2 - r = 10$.)

**Răspuns:** $a_1 = 10$. *Barem: 3p relația dintre termeni, 2p rezultatul.*

### 2. $f(x) = x + 2$: arătați că $(f\circ f)(5) = 9$

Compunerea se calculează din interior spre exterior: $f(5) = 7$, apoi

$$(f\circ f)(5) = f(f(5)) = f(7) = 9.$$

*Barem: 2p $f(5)$, 3p finalizarea.*

### 3. Ecuația $\sqrt[3]{x^2 + 2x + 1} = \sqrt[3]{1 - x}$

Radicalul de ordin impar este definit pe tot $\mathbb R$ și este o funcție injectivă, deci nu avem condiții de existență și putem ridica la puterea a treia fără pierderi sau soluții false:

$$x^2 + 2x + 1 = 1 - x \iff x^2 + 3x = 0 \iff x(x + 3) = 0.$$

**Răspuns:** $x \in \{-3, 0\}$. *Barem: 3p ecuația $x^2 + 3x = 0$, 2p soluțiile.*

### 4. Câte numere naturale impare, de două cifre distincte, se formează cu $A = \{1, 2, 3, 7, 9\}$

Un număr e impar dacă cifra unităților e impară. Cifrele impare din $A$: $1, 3, 7, 9$ — **4 moduri** pentru cifra unităților.

Cifra zecilor trebuie să fie diferită de cea a unităților: rămân **4 moduri** (oricare din celelalte 4 elemente ale lui $A$; 0 nu apare, deci nu avem problema cifrei zecilor nule).

Regula produsului: $4 \cdot 4 = 16$ numere.

**Răspuns:** 16 numere. *Barem: 2p alegerea cifrei unităților, 3p numărarea.*

### 5. $A(2,1)$: coordonatele lui $B$ cu $\overrightarrow{AB} = 2\overrightarrow{OA}$

$\overrightarrow{OA} = 2\vec i + \vec j$, deci $2\overrightarrow{OA} = 4\vec i + 2\vec j$. Cu $B(x_B, y_B)$: $\overrightarrow{AB} = (x_B - 2)\vec i + (y_B - 1)\vec j$.

Doi vectori sunt egali dacă au aceleași coordonate:

$$x_B - 2 = 4,\quad y_B - 1 = 2 \Rightarrow x_B = 6,\ y_B = 3.$$

**Răspuns:** $B(6, 3)$. *Barem: 3p scrierea vectorilor, 2p coordonatele.*

### 6. Triunghi dreptunghic în $A$, $BC = 12$, $AB = \dfrac{BC}{2}$: aria este $18\sqrt3$

$AB = 6$. Cu Pitagora: $AC = \sqrt{BC^2 - AB^2} = \sqrt{144 - 36} = \sqrt{108} = 6\sqrt3$.

Aria triunghiului dreptunghic = semiprodusul catetelor:

$$\mathcal A = \frac{AB\cdot AC}{2} = \frac{6\cdot 6\sqrt3}{2} = 18\sqrt3.$$

*Barem: 2p catetele, 3p aria.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}0 & 0 & 0\\ 0 & 1 & 0\\ 0 & 0 & 1\end{pmatrix}$, $B(x) = \begin{pmatrix}2^x & 0 & 0\\ 0 & 1 & x\\ 0 & x & 1\end{pmatrix}$

#### a) $\det(B(1)) = 0$

$$\det(B(1)) = \begin{vmatrix}2 & 0 & 0\\ 0 & 1 & 1\\ 0 & 1 & 1\end{vmatrix} = 2 + 0 + 0 - 0 - 2 - 0 = 0.$$

(Sau: liniile 2 și 3 sunt egale, deci determinantul este 0.) *Barem: 2p scrierea, 3p calculul.*

#### b) $B(x)\cdot B(y) - B(x + y) = xyA$

$$B(x)\cdot B(y) = \begin{pmatrix}2^x\cdot 2^y & 0 & 0\\ 0 & 1 + xy & y + x\\ 0 & x + y & xy + 1\end{pmatrix} = \begin{pmatrix}2^{x+y} & 0 & 0\\ 0 & 1 + xy & x + y\\ 0 & x + y & 1 + xy\end{pmatrix}.$$

Scădem $B(x + y) = \begin{pmatrix}2^{x+y} & 0 & 0\\ 0 & 1 & x + y\\ 0 & x + y & 1\end{pmatrix}$:

$$B(x)B(y) - B(x + y) = \begin{pmatrix}0 & 0 & 0\\ 0 & xy & 0\\ 0 & 0 & xy\end{pmatrix} = xyA.$$

*Barem: 3p produsul, 2p finalizarea.*

#### c) Numerele $x$ cu $B(x)\cdot B(x + 1) - B(2x)\cdot B(1) = xA$

Folosim relația de la b): $B(x)B(y) = B(x + y) + xyA$.

- $B(x)B(x + 1) = B(2x + 1) + x(x + 1)A$;
- $B(2x)B(1) = B(2x + 1) + 2x\cdot 1\cdot A$.

Diferența: $(x^2 + x - 2x)A = (x^2 - x)A$. Ecuația $(x^2 - x)A = xA$, cu $A \ne O_3$, devine (comparând elementul de pe poziția $(2,2)$):

$$x^2 - x = x \iff x^2 - 2x = 0 \iff x(x - 2) = 0.$$

**Răspuns:** $x \in \{0, 2\}$. *Barem: 3p reducerea la $(x^2 - x)A$, 2p soluțiile.*

### 2. Polinomul $f = X^3 + aX^2 + X + 2 - a$

#### a) $f(1) = 4$ pentru orice $a$

$$f(1) = 1 + a + 1 + 2 - a = 4.$$

Termenii cu $a$ se reduc, deci valoarea nu depinde de $a$. *Barem: 3p înlocuirea, 2p calculul.*

#### b) Rădăcinile pentru $a = 2$

$f = X^3 + 2X^2 + X = X(X^2 + 2X + 1) = X(X + 1)^2$.

**Răspuns:** $x_1 = x_2 = -1$ (rădăcină dublă) și $x_3 = 0$. *Barem: 2p descompunerea, 3p rădăcinile.*

#### c) $a$ pentru care $(x_1 - x_1^2)(x_2 - x_2^2)(x_3 - x_3^2) = 4$

Dăm factor comun: $x_k - x_k^2 = x_k(1 - x_k)$, deci produsul este

$$x_1x_2x_3\cdot(1 - x_1)(1 - x_2)(1 - x_3).$$

- Din forma descompusă $f = (X - x_1)(X - x_2)(X - x_3)$, pentru $X = 1$: $(1 - x_1)(1 - x_2)(1 - x_3) = f(1) = 4$ (punctul a)).
- Relațiile lui Viète: $x_1x_2x_3 = -\dfrac{2 - a}{1} = a - 2$.

Condiția: $4(a - 2) = 4 \iff a - 2 = 1 \iff a = 3$.

**Răspuns:** $a = 3$. *Barem: 3p scrierea produsului cu Viète și $f(1)$, 2p valoarea lui $a$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = (x^2 - 2)e^{2x}$

#### a) $f'(x) = 2e^{2x}(x^2 + x - 2)$

Regula produsului, cu $(e^{2x})' = 2e^{2x}$:

$$f'(x) = 2x\,e^{2x} + (x^2 - 2)\cdot 2e^{2x} = 2e^{2x}(x + x^2 - 2) = 2e^{2x}(x^2 + x - 2).$$

*Barem: 2p regula produsului, 3p forma finală.*

#### b) $\displaystyle\lim_{x\to+\infty}\frac{f(x)}{f'(x)}$

Factorul $e^{2x}$ se simplifică:

$$\frac{f(x)}{f'(x)} = \frac{x^2 - 2}{2(x^2 + x - 2)} = \frac{x^2\left(1 - \frac{2}{x^2}\right)}{2x^2\left(1 + \frac1x - \frac2{x^2}\right)} \xrightarrow[x\to+\infty]{} \frac12.$$

**Răspuns:** $\dfrac12$. *Barem: 3p simplificarea, 2p limita.*

#### c) Imaginea funcției $f$

$x^2 + x - 2 = (x + 2)(x - 1)$, iar $2e^{2x} > 0$, deci semnul lui $f'$ este semnul lui $(x + 2)(x - 1)$:

| $x$ | $-\infty$ | | $-2$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $0$ | ↗ | $2e^{-4}$ | ↘ | $-e^2$ | ↗ | $+\infty$ |

Limitele: $\lim\limits_{x\to-\infty}(x^2 - 2)e^{2x} = 0$ (exponențiala „bate” polinomul), $\lim\limits_{x\to+\infty}f(x) = +\infty$. Valori: $f(1) = -e^2$, $f(-2) = 2e^{-4}$.

- Pe $(-\infty, -2]$ valorile sunt în $(0, 2e^{-4}]$;
- pe $[-2, 1]$ valorile sunt $[-e^2, 2e^{-4}]$;
- pe $[1, +\infty)$, $f$ este continuă și crescătoare de la $-e^2$ la $+\infty$, deci ia toate valorile din $[-e^2, +\infty)$.

Reunind, $\operatorname{Im} f = [-e^2, +\infty)$; minimul global este $f(1) = -e^2$.

**Răspuns:** $\operatorname{Im} f = [-e^2, +\infty)$. *Barem: 3p monotonia, 2p limitele, minimul și concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = x^4 + 6x^2 + 1$

#### a) $\displaystyle\int_{-1}^1(f(x) - 6x^2)\,dx = \frac{12}{5}$

$$\int_{-1}^1(x^4 + 1)\,dx = \left(\frac{x^5}{5} + x\right)\Big|_{-1}^1 = \left(\frac15 + 1\right) - \left(-\frac15 - 1\right) = \frac{12}{5}.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^6\frac{x^3}{f(x) - 1}\,dx = \frac{\ln 6}{2}$

$f(x) - 1 = x^4 + 6x^2 = x^2(x^2 + 6)$, deci $\dfrac{x^3}{f(x) - 1} = \dfrac{x}{x^2 + 6} = \dfrac12\cdot\dfrac{(x^2 + 6)'}{x^2 + 6}$.

$$\int_1^6\frac{x}{x^2 + 6}\,dx = \frac12\ln(x^2 + 6)\Big|_1^6 = \frac12(\ln 42 - \ln 7) = \frac12\ln 6.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $\displaystyle\lim_{x\to0}\left(\frac1{x^3}\int_0^x\big(f(2t) - f(t)\big)dt\right) = 6$

Pentru $x \to 0$ integrala tinde la 0 și $x^3 \to 0$: nedeterminare $\frac00$. Aplicăm **l'Hôpital**; derivata integralei cu limita superioară $x$ este integrandul evaluat în $x$:

$$\lim_{x\to0}\frac{f(2x) - f(x)}{3x^2}.$$

$f(2x) - f(x) = (16x^4 + 24x^2 + 1) - (x^4 + 6x^2 + 1) = 15x^4 + 18x^2$, deci

$$\lim_{x\to0}\frac{15x^4 + 18x^2}{3x^2} = \lim_{x\to0}(5x^2 + 6) = 6.$$

*Barem: 3p l'Hôpital, 2p calculul limitei.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_1 = 10$ |
| I.3 | $x \in \{-3, 0\}$ |
| I.4 | 16 numere |
| I.5 | $B(6, 3)$ |
| II.1.c | $x \in \{0, 2\}$ |
| II.2.b | $-1$ (dublă), $0$ |
| II.2.c | $a = 3$ |
| III.1.b | $\frac12$ |
| III.1.c | $[-e^2, +\infty)$ |

## Ce merită reținut din varianta 3

- **Relații de forma $B(x)B(y) = B(x + y) + xyA$**: reutilizează-le la punctul c) în loc să înmulțești din nou matricele.
- **Produse peste rădăcini**: $(1 - x_1)(1 - x_2)(1 - x_3) = f(1)$ când coeficientul dominant e 1 — un truc care apare des.
- **Imaginea unei funcții**: tabel de variație + limite la capete + valorile extremelor; verifică ce interval acoperă fiecare ramură.
