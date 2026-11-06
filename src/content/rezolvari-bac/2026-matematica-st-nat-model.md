Rezolvarea completă a **modelului oficial** de subiect pentru **Bacalaureat 2026 la Matematică M_șt-nat** (filiera teoretică, profilul real, specializarea științe ale naturii). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Numere complexe: arătați că $z_1 + 3iz_2 = 10$, pentru $z_1 = 4 - 3i$, $z_2 = 1 - 2i$

Calculăm întâi produsul: $3iz_2 = 3i(1 - 2i) = 3i - 6i^2 = 3i + 6$ (pentru că $i^2 = -1$).

$$z_1 + 3iz_2 = 4 - 3i + 3i + 6 = 10.$$

Părțile imaginare $-3i$ și $+3i$ se reduc, deci rezultatul este real. *Barem: 2p calculul lui $3iz_2$, 3p finalizarea.*

### 2. $f(x) = 3 - x$, $g(x) = 2x + 1$: determinați $a$ cu $f(a) = 3a + g(3)$

$g(3) = 2\cdot 3 + 1 = 7$ și $f(a) = 3 - a$. Ecuația devine:

$$3 - a = 3a + 7 \iff -4a = 4 \iff a = -1.$$

**Verificare:** $f(-1) = 4$ și $3\cdot(-1) + 7 = 4$ ✔.

**Răspuns:** $a = -1$. *Barem: 2p valorile $g(3)$ și $f(a)$, 3p rezolvarea ecuației.*

### 3. Ecuație logaritmică: $\log_4(x^2 + 4) = \log_4 x + \log_4 5$

**Condiții de existență:** $x > 0$ (argumentul lui $\log_4 x$); $x^2 + 4 > 0$ este mereu adevărat.

Folosim $\log_4 x + \log_4 5 = \log_4(5x)$. Logaritmul fiind injectiv:

$$x^2 + 4 = 5x \iff x^2 - 5x + 4 = 0 \iff (x - 1)(x - 4) = 0,$$

deci $x_1 = 1$, $x_2 = 4$. Ambele sunt strict pozitive, deci convin.

**Verificare:** $x = 1$: $\log_4 5 = 0 + \log_4 5$ ✔; $x = 4$: $\log_4 20 = 1 + \log_4 5 = \log_4 20$ ✔.

**Răspuns:** $x \in \{1, 4\}$. *Barem: 3p obținerea ecuației $x^2 - 5x + 4 = 0$, 2p soluțiile care convin.*

### 4. Probabilitatea ca un număr de două cifre să aibă produsul cifrelor egal cu 4

**Cazuri posibile:** numerele de două cifre sunt $10, 11, \dots, 99$, adică $99 - 10 + 1 = 90$ numere.

**Cazuri favorabile:** căutăm $\overline{ab}$ cu $a \ne 0$ și $a \cdot b = 4$. Scriem 4 ca produs de două cifre: $1\cdot 4$, $2\cdot 2$, $4 \cdot 1$. Obținem numerele $14$, $22$, $41$ — deci 3 cazuri favorabile. (Cifra 0 nu poate apărea, deoarece produsul ar fi 0.)

$$p = \frac{\text{nr. cazuri favorabile}}{\text{nr. cazuri posibile}} = \frac{3}{90} = \frac{1}{30}.$$

**Răspuns:** $p = \dfrac{1}{30}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(2, 8)$, $B(0, 4)$, $C(a, b)$; segmentele $OA$ și $BC$ au același mijloc

Mijlocul lui $OA$, cu $O(0,0)$: $M\left(\dfrac{0 + 2}{2}, \dfrac{0 + 8}{2}\right) = M(1, 4)$.

$M$ trebuie să fie și mijlocul lui $BC$:

$$\frac{0 + a}{2} = 1 \Rightarrow a = 2, \qquad \frac{4 + b}{2} = 4 \Rightarrow b = 4.$$

**Răspuns:** $a = 2$, $b = 4$. *Barem: 2p mijlocul lui $OA$, 3p determinarea lui $a$ și $b$.*

### 6. Triunghi dreptunghic în $A$, $C = \dfrac{\pi}{6}$, $R = 4$: arătați că $AB = 4$

Într-un triunghi dreptunghic, ipotenuza este diametru al cercului circumscris (unghiul drept este înscris într-un semicerc). Ipotenuza este $BC$, deci

$$BC = 2R = 8.$$

$AB$ este cateta opusă unghiului $C = 30^\circ$, deci este jumătate din ipotenuză (teorema unghiului de $30^\circ$, sau $AB = BC \sin C = 8 \cdot \tfrac12$):

$$AB = \frac{BC}{2} = 4.$$

*Barem: 2p $BC = 2R = 8$, 3p calculul lui $AB$.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$ și $A(x) = \begin{pmatrix}x - 1 & 1\\ 1 - x & x - 5\end{pmatrix}$

**a)** Arătați că $\det(A(6)) = 10$.

Înlocuim $x = 6$: $A(6) = \begin{pmatrix}5 & 1\\ -5 & 1\end{pmatrix}$.

$$\det(A(6)) = \begin{vmatrix}5 & 1\\ -5 & 1\end{vmatrix} = 5 \cdot 1 - 1 \cdot (-5) = 5 + 5 = 10.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

**b)** Determinați $a$ pentru care $A(3) \cdot A(3) = aI_2$.

$A(3) = \begin{pmatrix}2 & 1\\ -2 & -2\end{pmatrix}$. Înmulțim linie cu coloană:

$$A(3)\cdot A(3) = \begin{pmatrix}2\cdot 2 + 1\cdot(-2) & 2\cdot 1 + 1\cdot(-2)\\ -2\cdot 2 + (-2)(-2) & -2\cdot 1 + (-2)(-2)\end{pmatrix} = \begin{pmatrix}2 & 0\\ 0 & 2\end{pmatrix} = 2I_2.$$

Din $2I_2 = aI_2$ obținem $a = 2$.

**Răspuns:** $a = 2$. *Barem: 3p calculul produsului, 2p valoarea lui $a$.*

**c)** Demonstrați că $N = \det\big(A(m)\cdot A(2) - A(m - 1)\big)$ este natural, pentru orice $m$ întreg.

Avem $A(2) = \begin{pmatrix}1 & 1\\ -1 & -3\end{pmatrix}$ și $A(m-1) = \begin{pmatrix}m - 2 & 1\\ 2 - m & m - 6\end{pmatrix}$.

$$A(m)\cdot A(2) = \begin{pmatrix}m-1 & 1\\ 1-m & m-5\end{pmatrix}\begin{pmatrix}1 & 1\\ -1 & -3\end{pmatrix} = \begin{pmatrix}m - 2 & m - 4\\ 6 - 2m & 16 - 4m\end{pmatrix}.$$

(De exemplu, elementul din colțul dreapta-jos: $(1-m)\cdot 1 + (m-5)(-3) = 1 - m - 3m + 15 = 16 - 4m$.)

Scădem $A(m-1)$:

$$A(m)\cdot A(2) - A(m-1) = \begin{pmatrix}0 & m - 5\\ 4 - m & 22 - 5m\end{pmatrix}.$$

$$N = 0\cdot(22 - 5m) - (m - 5)(4 - m) = (m - 4)(m - 5).$$

$m - 5$ și $m - 4$ sunt **două numere întregi consecutive**. Produsul a două întregi consecutive este mereu $\ge 0$: dacă ambii sunt nenegativi sau ambii nepozitivi produsul e $\ge 0$, iar „unul strict negativ și celălalt strict pozitiv” e imposibil, căci între ele nu există niciun întreg (ar trebui să „sară” peste 0). Deci $N \in \mathbb Z$ și $N \ge 0$, adică $N \in \mathbb N$.

*Barem: 3p calculul matricei și $N = (m-4)(m-5)$, 2p justificarea că $N$ e natural.*

### 2. Polinomul $f = X^3 + aX^2 - 2X + 2$

**a)** Arătați că $f(0) = 2$ pentru orice $a$.

$$f(0) = 0^3 + a \cdot 0^2 - 2\cdot 0 + 2 = 2,$$

indiferent de valoarea lui $a$ (termenul cu $a$ se anulează). *Barem: 3p înlocuirea, 2p finalizarea.*

**b)** Determinați $a$ pentru care $x_1x_2x_3(1 + x_1 + x_2 + x_3) = 4$.

Relațiile lui Viète pentru $X^3 + aX^2 - 2X + 2$ (coeficient dominant 1):

$$x_1 + x_2 + x_3 = -a, \qquad x_1x_2x_3 = -2.$$

Atenție la semn: produsul rădăcinilor la gradul 3 este $-\dfrac{d}{a_3} = -2$. Atunci:

$$x_1x_2x_3(1 + x_1 + x_2 + x_3) = -2(1 - a) = 4 \iff 1 - a = -2 \iff a = 3.$$

**Răspuns:** $a = 3$. *Barem: 3p relațiile lui Viète și expresia $-2(1-a)$, 2p valoarea lui $a$.*

**c)** Știind că $X + 1 \mid f$, determinați restul împărțirii lui $f$ la $X^2 - 2$.

$X + 1$ divide $f$ $\iff$ $f(-1) = 0$ (teorema lui Bézout):

$$f(-1) = -1 + a + 2 + 2 = a + 3 = 0 \Rightarrow a = -3.$$

Deci $f = X^3 - 3X^2 - 2X + 2$. Împărțim la $X^2 - 2$, scriind $f$ astfel încât să apară $X^2 - 2$:

$$f = X(X^2 - 2) - 3(X^2 - 2) - 4 = (X^2 - 2)(X - 3) - 4.$$

(Verificare: $X^3 - 2X - 3X^2 + 6 - 4 = X^3 - 3X^2 - 2X + 2$ ✔.) Gradul lui $-4$ este mai mic decât 2, deci acesta este restul.

**Răspuns:** restul este $-4$. *Barem: 2p $a = -3$, 3p restul.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = e^x(x^2 + x - 1)$

**a)** Arătați că $f'(x) = e^x(x^2 + 3x)$.

Regula produsului $(uv)' = u'v + uv'$, cu $u = e^x$, $v = x^2 + x - 1$:

$$f'(x) = e^x(x^2 + x - 1) + e^x(2x + 1) = e^x(x^2 + x - 1 + 2x + 1) = e^x(x^2 + 3x).$$

*Barem: 3p derivarea, 2p forma finală.*

**b)** Arătați că $\displaystyle\lim_{x\to 0}\frac{e^x + f(x)}{f'(x)} = \frac13$.

Numărătorul: $e^x + e^x(x^2 + x - 1) = e^x(x^2 + x)$. Pentru $x \to 0$ numărătorul și numitorul tind la 0 (nedeterminare $\frac00$), dar putem simplifica:

$$\lim_{x\to0}\frac{e^x(x^2 + x)}{e^x(x^2 + 3x)} = \lim_{x\to0}\frac{x(x + 1)}{x(x + 3)} = \lim_{x\to0}\frac{x + 1}{x + 3} = \frac13.$$

*Barem: 3p simplificarea, 2p calculul limitei.*

**c)** Demonstrați că $e^{x+3}(x^2 + x - 1) \le 5$, pentru orice $x \in (-\infty, 0]$.

Observăm că $e^{x+3}(x^2 + x - 1) = e^3 f(x)$, deci inegalitatea e echivalentă cu $f(x) \le 5e^{-3}$.

Din a): $f'(x) = e^x\,x(x + 3)$, iar $e^x > 0$. Semnul lui $f'$ pe $(-\infty, 0]$:

| $x$ | $-\infty$ | | $-3$ | | $0$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ |
| $f(x)$ | | ↗ | $5e^{-3}$ | ↘ | $-1$ |

$f$ este crescătoare pe $(-\infty, -3]$ și descrescătoare pe $[-3, 0]$, deci $x = -3$ este punct de maxim pe $(-\infty, 0]$:

$$f(x) \le f(-3) = e^{-3}(9 - 3 - 1) = \frac{5}{e^3}, \quad \forall x \in (-\infty, 0].$$

Înmulțind cu $e^3 > 0$: $e^{x+3}(x^2 + x - 1) \le 5$. $\blacksquare$

*Barem: 3p monotonia, 2p maximul și concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = x + \sqrt{2x^2 + 1}$

**a)** Arătați că $\displaystyle\int_3^5\left(f(x) - \sqrt{2x^2 + 1}\right)dx = 8$.

$f(x) - \sqrt{2x^2 + 1} = x$, deci

$$\int_3^5 x\,dx = \frac{x^2}{2}\Big|_3^5 = \frac{25}{2} - \frac92 = 8.$$

*Barem: 3p simplificarea și primitiva, 2p calculul.*

**b)** Arătați că $\displaystyle\int_1^2\frac{x}{(f(x) - x)^2}dx = \frac{\ln 3}{4}$.

$(f(x) - x)^2 = \left(\sqrt{2x^2 + 1}\right)^2 = 2x^2 + 1$. Observăm că $(2x^2 + 1)' = 4x$, deci $x = \tfrac14(2x^2+1)'$:

$$\int_1^2\frac{x}{2x^2 + 1}dx = \frac14\int_1^2\frac{(2x^2 + 1)'}{2x^2 + 1}dx = \frac14\ln(2x^2 + 1)\Big|_1^2 = \frac{\ln 9 - \ln 3}{4} = \frac{\ln 3}{4}.$$

(Am folosit $\ln 9 - \ln 3 = \ln\frac93 = \ln 3$.) *Barem: 3p primitiva, 2p calculul.*

**c)** Determinați $a$ pentru care volumul corpului obținut prin rotația graficului lui $g:[0, 2]\to\mathbb R$, $g(x) = f(x)$, în jurul axei $Ox$ este $\dfrac{a\pi}{3}$.

Formula volumului: $V = \pi\displaystyle\int_0^2 g^2(x)\,dx$. Ridicăm la pătrat:

$$g^2(x) = x^2 + 2x\sqrt{2x^2 + 1} + 2x^2 + 1 = 3x^2 + 1 + 2x\sqrt{2x^2 + 1}.$$

Prima parte: $\displaystyle\int_0^2 (3x^2 + 1)\,dx = (x^3 + x)\Big|_0^2 = 10$.

A doua parte, cu substituția $t = 2x^2 + 1$, $dt = 4x\,dx$ (deci $2x\,dx = \tfrac12 dt$); pentru $x = 0$, $t = 1$, iar pentru $x = 2$, $t = 9$:

$$\int_0^2 2x\sqrt{2x^2 + 1}\,dx = \frac12\int_1^9\sqrt t\,dt = \frac12\cdot\frac23 t^{3/2}\Big|_1^9 = \frac13(27 - 1) = \frac{26}{3}.$$

$$V = \pi\left(10 + \frac{26}{3}\right) = \frac{56\pi}{3}.$$

Din $\dfrac{a\pi}{3} = \dfrac{56\pi}{3}$ rezultă $a = 56$.

**Răspuns:** $a = 56$. *Barem: 2p scrierea volumului ca integrală, 3p calculul și valoarea lui $a$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $z_1 + 3iz_2 = 10$ |
| I.2 | $a = -1$ |
| I.3 | $x \in \{1, 4\}$ |
| I.4 | $p = \tfrac{1}{30}$ |
| I.5 | $a = 2$, $b = 4$ |
| I.6 | $AB = 4$ |
| II.1.b | $a = 2$ |
| II.1.c | $N = (m-4)(m-5) \in \mathbb N$ |
| II.2.b | $a = 3$ |
| II.2.c | restul $-4$ |
| III.1.b | $\tfrac13$ |
| III.2.c | $a = 56$ |

## Ce merită reținut din model

- **Relațiile lui Viète la gradul 3**: $x_1x_2x_3 = -\dfrac{d}{a}$ — semnul minus e o greșeală frecventă.
- **Restul împărțirii la $X^2 - 2$**: rescrie polinomul grupând factorul $X^2 - 2$ în loc de împărțirea lungă.
- **Inegalități pe un interval**: studiază monotonia și compară cu valoarea maximă a funcției.
- **Volume de rotație**: $V = \pi\int g^2$; termenii cu radical se integrează prin substituție, observând derivata expresiei de sub radical.
