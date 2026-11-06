Rezolvarea completă a subiectului de la **simularea națională a Bacalaureatului 2024 la Matematică M_tehnologic**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\left(0{,}2 + \dfrac{3}{10}\right)\cdot 10 = 5$

Scriem fracția ca număr zecimal: $\dfrac{3}{10} = 0{,}3$. Atunci:

$$\left(0{,}2 + 0{,}3\right)\cdot 10 = 0{,}5\cdot 10 = 5.$$

*Barem: 3p calculul parantezei, 2p finalizarea.*

### 2. $f(x) = 2x + 3$: determinați $a$ cu $f(a) = 7$

$f(a) = 2a + 3$, deci $2a + 3 = 7 \iff 2a = 4 \iff a = 2$.

**Răspuns:** $a = 2$. *Barem: 2p expresia lui $f(a)$, 3p rezolvarea ecuației.*

### 3. Ecuația irațională $\sqrt{x^2 + 2x + 4} = 2$

**Condiția de existență:** $x^2 + 2x + 4 = (x+1)^2 + 3 > 0$ pentru orice $x$ real, deci radicalul există mereu.

Ambii membri sunt nenegativi, așa că putem ridica la pătrat:

$$x^2 + 2x + 4 = 4 \iff x^2 + 2x = 0 \iff x(x + 2) = 0 \iff x \in \{0, -2\}.$$

**Verificare:** $x = 0$: $\sqrt4 = 2$ ✔; $x = -2$: $\sqrt{4 - 4 + 4} = \sqrt4 = 2$ ✔.

**Răspuns:** $x \in \{-2, 0\}$. *Barem: 3p ecuația $x(x+2) = 0$, 2p soluțiile care convin.*

### 4. Prețul înainte de o scumpire cu 50%, știind prețul final 225 lei

Notăm cu $x$ prețul inițial. După scumpire, prețul este prețul inițial plus $50\%$ din el:

$$x + \frac{50}{100}\cdot x = 225 \iff \frac32 x = 225 \iff x = 150 \text{ lei}.$$

Verificare: $150 + 75 = 225$ ✔. Greșeala frecventă: să scazi $50\%$ din 225 (ar da $112{,}5$) — procentul se aplică prețului **inițial**, nu celui final.

**Răspuns:** 150 de lei. *Barem: 3p ecuația, 2p rezultatul.*

### 5. $A(1,3)$, $B(5,0)$, $C(5,5)$: triunghiul $ABC$ este isoscel

Formula distanței: $AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.

$$AB = \sqrt{(5-1)^2 + (0-3)^2} = \sqrt{16 + 9} = 5,$$

$$BC = \sqrt{(5-5)^2 + (5-0)^2} = \sqrt{25} = 5.$$

Cum $AB = BC = 5$, triunghiul $ABC$ este isoscel (cu baza $AC$; pentru comparație, $AC = \sqrt{16 + 4} = 2\sqrt5 \ne 5$). *Barem: 2p $AB$, 3p $BC$ și concluzia.*

### 6. Triunghi dreptunghic în $A$, $AB = 3$, $BC = 5$: arătați că $\operatorname{tg} B = \dfrac43$

$BC$ este ipotenuza (opusă unghiului drept). Din teorema lui Pitagora:

$$AC = \sqrt{BC^2 - AB^2} = \sqrt{25 - 9} = \sqrt{16} = 4.$$

Tangenta unui unghi ascuțit = cateta opusă / cateta alăturată. Pentru unghiul $B$, cateta opusă este $AC$, iar cea alăturată este $AB$:

$$\operatorname{tg} B = \frac{AC}{AB} = \frac43.$$

*Barem: 3p $AC = 4$, 2p calculul tangentei.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$ și $A(x) = \begin{pmatrix}1 & 0\\ 0 & 2^x\end{pmatrix}$

#### a) $\det(A(2)) = 4$

$A(2) = \begin{pmatrix}1 & 0\\ 0 & 4\end{pmatrix}$, deci

$$\det(A(2)) = \begin{vmatrix}1 & 0\\ 0 & 4\end{vmatrix} = 1\cdot 4 - 0\cdot 0 = 4.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $A(3) + 2A(1) = 3A(2)$

$$A(3) + 2A(1) = \begin{pmatrix}1 & 0\\ 0 & 8\end{pmatrix} + \begin{pmatrix}2 & 0\\ 0 & 4\end{pmatrix} = \begin{pmatrix}3 & 0\\ 0 & 12\end{pmatrix} = 3\begin{pmatrix}1 & 0\\ 0 & 4\end{pmatrix} = 3A(2).$$

(La $2A(1)$ se înmulțește **fiecare** element cu $2$, inclusiv $1$-ul din colț.) *Barem: 3p suma, 2p identificarea cu $3A(2)$.*

#### c) $x$ real cu $A(x)\cdot A(x^2) = I_2$

Produsul a două matrice diagonale este matricea diagonală a produselor:

$$A(x)\cdot A(x^2) = \begin{pmatrix}1 & 0\\ 0 & 2^x\end{pmatrix}\begin{pmatrix}1 & 0\\ 0 & 2^{x^2}\end{pmatrix} = \begin{pmatrix}1 & 0\\ 0 & 2^{x + x^2}\end{pmatrix}.$$

Egalitatea cu $I_2$ revine la $2^{x + x^2} = 1 = 2^0$, deci $x^2 + x = 0 \iff x(x+1) = 0 \iff x \in \{-1, 0\}$.

**Răspuns:** $x \in \{-1, 0\}$. *Barem: 2p produsul, 3p ecuația și soluțiile.*

### 2. Legea $x \circ y = xy - x - y + 2$

#### a) $2 \circ 3 = 3$

$$2 \circ 3 = 2\cdot 3 - 2 - 3 + 2 = 6 - 2 - 3 + 2 = 3.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x$ real cu $x \circ 4 = x + 6$

$x \circ 4 = 4x - x - 4 + 2 = 3x - 2$. Ecuația:

$$3x - 2 = x + 6 \iff 2x = 8 \iff x = 4.$$

**Răspuns:** $x = 4$. *Barem: 3p expresia lui $x \circ 4$, 2p soluția.*

#### c) $(x - 2)\circ(x + 2) \ge -3$ pentru orice $x$ real

$$(x-2)\circ(x+2) = (x-2)(x+2) - (x-2) - (x+2) + 2 = x^2 - 4 - 2x + 2 = x^2 - 2x - 2.$$

Formăm pătrat perfect: $x^2 - 2x - 2 = (x^2 - 2x + 1) - 3 = (x - 1)^2 - 3$.

Cum $(x-1)^2 \ge 0$ pentru orice $x$ real, rezultă $(x-1)^2 - 3 \ge -3$, cu egalitate pentru $x = 1$. *Barem: 2p calculul compunerii, 3p pătratul perfect și concluzia.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(2, +\infty) \to \mathbb R$, $f(x) = \dfrac{e^x}{x^2 - 3}$

#### a) $f'(x) = \dfrac{e^x(x^2 - 2x - 3)}{(x^2 - 3)^2}$

Regula câtului, cu $u = e^x$ ($u' = e^x$) și $v = x^2 - 3$ ($v' = 2x$):

$$f'(x) = \frac{e^x(x^2 - 3) - e^x\cdot 2x}{(x^2-3)^2} = \frac{e^x(x^2 - 2x - 3)}{(x^2-3)^2},\quad x \in (2, +\infty).$$

(Pe $(2,+\infty)$ avem $x^2 - 3 > 1 > 0$, deci $f$ este bine definită și derivabilă.) *Barem: 3p regula câtului, 2p forma finală.*

#### b) $\displaystyle\lim_{x\to+\infty}\frac{x f(x)}{e^x} = 0$

$$\frac{x f(x)}{e^x} = \frac{x\cdot\frac{e^x}{x^2-3}}{e^x} = \frac{x}{x^2 - 3} = \frac{x}{x^2\left(1 - \frac{3}{x^2}\right)} = \frac{1}{x\left(1 - \frac{3}{x^2}\right)}.$$

Când $x \to +\infty$, numitorul $x\left(1 - \frac3{x^2}\right) \to +\infty\cdot 1 = +\infty$, deci limita este $0$.

*Barem: 3p simplificarea lui $e^x$ și factorul comun, 2p limita.*

#### c) $\dfrac{e^{x-3}}{x^2 - 3} \ge \dfrac16$ pentru orice $x \in (2, +\infty)$

**Idee:** inegalitatea este de fapt $f(x) \ge \dfrac{e^3}{6}$ (înmulțim ambii membri cu $e^3 > 0$: $\dfrac{e^x}{x^2-3} \ge \dfrac{e^3}{6}$), adică $\dfrac{e^3}{6}$ trebuie să fie minimul lui $f$.

Semnul lui $f'$: $e^x > 0$, $(x^2-3)^2 > 0$, deci semnul este dat de $x^2 - 2x - 3 = (x - 3)(x + 1)$. Pe $(2, +\infty)$ avem $x + 1 > 0$, deci semnul este cel al lui $x - 3$:

| $x$ | $2$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | | ↘ | $\tfrac{e^3}{6}$ | ↗ | |

Deci $f$ este descrescătoare pe $(2, 3]$ și crescătoare pe $[3, +\infty)$, iar $x = 3$ este punct de minim global pe $(2,+\infty)$:

$$f(3) = \frac{e^3}{9 - 3} = \frac{e^3}{6} \Rightarrow f(x) \ge \frac{e^3}{6},\ \forall x \in (2, +\infty).$$

Împărțind la $e^3 > 0$: $\dfrac{e^x}{e^3(x^2-3)} = \dfrac{e^{x-3}}{x^2 - 3} \ge \dfrac16$, ceea ce trebuia demonstrat.

*Barem: 3p monotonia, 2p valoarea minimă și concluzia.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = x + \ln x$

#### a) $\displaystyle\int_2^4 (f(x) - \ln x)\,dx = 6$

$f(x) - \ln x = x$, deci

$$\int_2^4 x\,dx = \frac{x^2}{2}\Big|_2^4 = \frac{16}{2} - \frac42 = 8 - 2 = 6.$$

*Barem: 3p simplificarea și primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^e \frac{f(x) - x}{x}\,dx = \frac12$

$\dfrac{f(x) - x}{x} = \dfrac{\ln x}{x} = \ln x\cdot(\ln x)'$, iar o primitivă a lui $u\cdot u'$ este $\dfrac{u^2}{2}$:

$$\int_1^e \frac{\ln x}{x}\,dx = \frac{(\ln x)^2}{2}\Big|_1^e = \frac{(\ln e)^2}{2} - \frac{(\ln 1)^2}{2} = \frac12 - 0 = \frac12.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $n$ natural nenul cu $\displaystyle\int_1^n f(x)\,dx = 2 + 3\ln n$

Pentru $\int \ln x\,dx$ folosim integrarea prin părți, cu $\ln x = x'\ln x$:

$$\int_1^n \ln x\,dx = x\ln x\Big|_1^n - \int_1^n x\cdot\frac1x\,dx = n\ln n - (n - 1).$$

Atunci

$$\int_1^n (x + \ln x)\,dx = \frac{n^2 - 1}{2} + n\ln n - n + 1 = \frac{n^2 - 2n + 1}{2} + n\ln n = \frac{(n-1)^2}{2} + n\ln n.$$

Ecuația devine:

$$\frac{(n-1)^2}{2} + n\ln n = 2 + 3\ln n \iff \frac{(n-1)^2 - 4}{2} + (n - 3)\ln n = 0.$$

Cum $(n-1)^2 - 4 = (n - 3)(n + 1)$, dăm factor comun $(n - 3)$:

$$(n - 3)\left(\frac{n+1}{2} + \ln n\right) = 0 \iff (n - 3)(n + 1 + 2\ln n) = 0.$$

Pentru $n \ge 1$ natural, $n + 1 \ge 2 > 0$ și $\ln n \ge 0$, deci $n + 1 + 2\ln n > 0$. Rămâne $n - 3 = 0$.

Verificare: $\int_1^3 f = \frac{4}{2} + 3\ln 3 = 2 + 3\ln 3$ ✔.

**Răspuns:** $n = 3$. *Barem: 3p calculul integralei, 2p rezolvarea ecuației.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $5$ |
| I.2 | $a = 2$ |
| I.3 | $x \in \{-2, 0\}$ |
| I.4 | 150 de lei |
| I.5 | $AB = BC = 5$ |
| I.6 | $\operatorname{tg} B = \frac43$ |
| II.1.c | $x \in \{-1, 0\}$ |
| II.2.b | $x = 4$ |
| II.2.c | $(x-1)^2 - 3 \ge -3$ |
| III.1.c | minimul lui $f$ este $f(3) = \frac{e^3}{6}$ |
| III.2.c | $n = 3$ |

## Ce merită reținut din simulare

- **Procente inverse**: la „după o scumpire cu $p\%$ prețul este…”, pune ecuația pe prețul inițial $x + \frac{p}{100}x$.
- **Inegalități de tipul $f(x) \ge k$**: rescrie-le ca „valoarea minimă a funcției” și folosește tabelul de variație.
- **Pătrat perfect** pentru a arăta că o expresie de gradul II este mărginită inferior.
- **Ecuații cu $n$ și $\ln n$**: caută un factor comun $(n - a)$; celălalt factor este, de obicei, strict pozitiv.
