Rezolvarea completă a subiectului de **Bacalaureat 2025 la Matematică M_mate-info**, sesiunea august–septembrie, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Număr complex: arătați că $3(4 - 5i) + 5i(3 + 2i) = 2$

Desfacem parantezele:

$$3(4 - 5i) + 5i(3 + 2i) = 12 - 15i + 15i + 10i^2.$$

Termenii în $i$ se reduc, iar $i^2 = -1$:

$$12 + 10\cdot(-1) = 12 - 10 = 2.$$

*Barem: 3p desfacerea parantezelor, 2p finalizarea.*

### 2. $f(x) = x + 4$, $g(x) = 2x + a$: determinați $a$ cu $(g \circ f)(1) = 1$

Compunerea se calculează „din interior spre exterior”: $(g\circ f)(1) = g(f(1))$.

$f(1) = 1 + 4 = 5$, apoi $g(5) = 2\cdot 5 + a = 10 + a$.

$$10 + a = 1 \iff a = -9.$$

**Răspuns:** $a = -9$. *Barem: 3p calculul $(g\circ f)(1) = 10 + a$, 2p valoarea lui $a$.*

### 3. Ecuație logaritmică: $\log_2(6x - x^2) = \log_2(4 + x)$

**Condiții de existență:** $6x - x^2 > 0 \iff x(6 - x) > 0 \iff x \in (0, 6)$ și $4 + x > 0 \iff x > -4$. Deci $x \in (0, 6)$.

Funcția $\log_2$ este injectivă, deci egalăm argumentele:

$$6x - x^2 = 4 + x \iff x^2 - 5x + 4 = 0 \iff (x - 1)(x - 4) = 0,$$

cu soluțiile $x = 1$ și $x = 4$.

**Verificare:** $x = 1$: $6 - 1 = 5 = 4 + 1$ ✔, $5 > 0$; $x = 4$: $24 - 16 = 8 = 4 + 4$ ✔, $8 > 0$. Ambele sunt în $(0, 6)$.

**Răspuns:** $x \in \{1, 4\}$. *Barem: 2p ecuația de gradul II, 3p soluțiile care convin.*

### 4. Numere naturale impare, de două cifre distincte, cu cifre din $A = \{3, 4, 5, 7, 9\}$

Un număr este impar dacă cifra unităților este impară. Începem cu cifra cu restricție:

- **cifra unităților** se alege dintre cifrele impare $\{3, 5, 7, 9\}$: $4$ moduri;
- **cifra zecilor** poate fi orice cifră din $A$ diferită de cea a unităților: $5 - 1 = 4$ moduri (inclusiv cifra 4; nu există problema cifrei 0).

Conform regulii produsului: $4 \cdot 4 = 16$ numere.

**Răspuns:** 16 numere. *Barem: 2p alegerea cifrei unităților, 3p numărarea finală.* Greșeală frecventă: să alegi întâi cifra zecilor (5 moduri) și apoi să nu mai știi câte cifre impare au rămas.

### 5. $A(0,2)$, $B(6,4)$: coordonatele lui $C$ cu $2\overrightarrow{AC} = \overrightarrow{OB}$

$\overrightarrow{OB} = 6\vec i + 4\vec j$ și, pentru $C(x_C, y_C)$, $\overrightarrow{AC} = (x_C - 0)\vec i + (y_C - 2)\vec j$.

$$2x_C\,\vec i + 2(y_C - 2)\,\vec j = 6\vec i + 4\vec j \Rightarrow 2x_C = 6,\ 2(y_C - 2) = 4 \Rightarrow x_C = 3,\ y_C = 4.$$

**Răspuns:** $C(3, 4)$. *Barem: 2p scrierea vectorilor, 3p coordonatele lui $C$.*

### 6. Triunghi dreptunghic în $A$, $AB = 4$, $R = 4$: aria este $8\sqrt3$

Într-un triunghi dreptunghic, centrul cercului circumscris este mijlocul ipotenuzei, deci ipotenuza este diametrul: $BC = 2R = 8$.

Cu teorema lui Pitagora: $AC = \sqrt{BC^2 - AB^2} = \sqrt{64 - 16} = \sqrt{48} = 4\sqrt3$.

$$\mathcal A_{ABC} = \frac{AB\cdot AC}{2} = \frac{4\cdot 4\sqrt3}{2} = 8\sqrt3.$$

*Barem: 3p $BC = 8$ și $AC = 4\sqrt3$, 2p aria.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}a & 1 & 2a\\ a & 1 & 0\\ 1 & 1 & -a\end{pmatrix}$ și sistemul $\begin{cases}ax + y + 2az = a + 1\\ ax + y = 0\\ x + y - az = -1\end{cases}$

#### a) $\det(A(2)) = 4$

$$\det(A(2)) = \begin{vmatrix}2 & 1 & 4\\ 2 & 1 & 0\\ 1 & 1 & -2\end{vmatrix}.$$

Regula lui Sarrus: diagonala principală și paralelele: $2\cdot1\cdot(-2) + 2\cdot1\cdot4 + 1\cdot1\cdot0 = -4 + 8 + 0$; diagonala secundară și paralelele: $4\cdot1\cdot1 + 0\cdot1\cdot2 + (-2)\cdot2\cdot1 = 4 + 0 - 4$.

$$\det(A(2)) = (-4 + 8 + 0) - (4 + 0 - 4) = 4 - 0 = 4.$$

*Barem: 2p scrierea determinantului, 3p calculul.*

#### b) Pentru $a = 1$, sistemul are o infinitate de soluții

Pentru $a = 1$ sistemul este $\begin{cases}x + y + 2z = 2\\ x + y = 0\\ x + y - z = -1\end{cases}$, cu determinantul matricei

$$\Delta = \begin{vmatrix}1 & 1 & 2\\ 1 & 1 & 0\\ 1 & 1 & -1\end{vmatrix} = 0$$

(primele două coloane sunt egale). Un minor principal nenul este $\Delta_p = \begin{vmatrix}1 & 0\\ 1 & -1\end{vmatrix} = -1 \ne 0$ (coloanele lui $y$ și $z$, ecuațiile 2 și 3), deci rangul matricei sistemului este 2.

Minorul caracteristic, obținut bordând $\Delta_p$ cu coloana termenilor liberi și ecuația 1:

$$\Delta_c = \begin{vmatrix}1 & 2 & 2\\ 1 & 0 & 0\\ 1 & -1 & -1\end{vmatrix} = 0$$

(ultimele două coloane sunt egale). Conform teoremei lui Rouché, sistemul este compatibil; fiind 3 necunoscute și rang 2, este compatibil nedeterminat — are o infinitate de soluții.

**Direct:** din ecuația 2, $y = -x$; înlocuind în 1: $2z = 2 \Rightarrow z = 1$; în 3: $-z = -1$ ✔. Soluțiile sunt $(x, -x, 1)$, $x \in \mathbb R$ — o infinitate.

*Barem: 2p sistemul și $\Delta = 0$, 3p minorul principal, minorul caracteristic nul și concluzia.*

#### c) $a$ pentru care sistemul are soluție unică cu $x_0 = a$

$$\det(A(a)) = \begin{vmatrix}a & 1 & 2a\\ a & 1 & 0\\ 1 & 1 & -a\end{vmatrix} = -a^2 + 0 + 2a^2 - 2a - 0 + a^2 = 2a^2 - 2a = 2a(a - 1).$$

Soluție unică $\iff \det(A(a)) \ne 0 \iff a \in \mathbb R \setminus \{0, 1\}$.

Aflăm $x_0$. Scăzând ecuația 2 din ecuația 1: $2az = a + 1$, deci $z = \dfrac{a+1}{2a}$. Scăzând ecuația 3 din ecuația 2: $(a - 1)x + az = 1$, adică

$$(a - 1)x = 1 - \frac{a+1}{2} = \frac{1 - a}{2} \Rightarrow x_0 = -\frac12 \quad (a \ne 1).$$

Așadar $x_0 = -\dfrac12$ pentru orice $a \notin\{0, 1\}$, iar condiția $x_0 = a$ dă $a = -\dfrac12$, care convine ($-\frac12 \notin \{0, 1\}$).

**Răspuns:** $a = -\dfrac12$. *Barem: 2p determinantul și condiția $a \in \mathbb R\setminus\{0,1\}$, 3p $x_0 = -\frac12$ și concluzia.*

### 2. Polinomul $f = X^4 - 3X^3 + X^2 - 2X + m$

#### a) Pentru $m = 3$, $f(1) = 0$

$$f(1) = 1^4 - 3\cdot1^3 + 1^2 - 2\cdot1 + 3 = 1 - 3 + 1 - 2 + 3 = 0.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $m$ pentru care $(x_1x_2x_3x_4)^2 - x_1 - x_2 - x_3 - x_4 = 1$

Relațiile lui Viète pentru $X^4 + a_3X^3 + a_2X^2 + a_1X + a_0$ (coeficient dominant 1): $x_1 + x_2 + x_3 + x_4 = -a_3 = 3$ și $x_1x_2x_3x_4 = a_0 = m$.

$$(x_1x_2x_3x_4)^2 - (x_1 + x_2 + x_3 + x_4) = m^2 - 3.$$

$m^2 - 3 = 1 \iff m^2 = 4 \iff m \in \{-2, 2\}$.

**Răspuns:** $m \in \{-2, 2\}$. *Barem: 3p relațiile lui Viète și expresia $m^2 - 3$, 2p valorile lui $m$.*

#### c) Pentru $m = 0$: $a$ real cu restul împărțirii lui $f$ la $X - a$ egal cu $a$

Conform teoremei restului, restul împărțirii lui $f$ la $X - a$ este $f(a)$. Pentru $m = 0$, $f = X^4 - 3X^3 + X^2 - 2X$, deci:

$$f(a) = a \iff a^4 - 3a^3 + a^2 - 2a = a \iff a^4 - 3a^3 + a^2 - 3a = 0.$$

Grupăm: $a^3(a - 3) + a(a - 3) = a(a - 3)(a^2 + 1) = 0$. Cum $a^2 + 1 > 0$ pentru $a$ real, rămân $a = 0$ sau $a = 3$.

**Răspuns:** $a \in \{0, 3\}$. *Barem: 3p ecuația $f(a) = a$, 2p descompunerea și soluțiile reale.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x^2 + 6}{\sqrt{x^2 + 1}}$

#### a) $f'(x) = \dfrac{x(x^2 - 4)}{(x^2 + 1)\sqrt{x^2 + 1}}$

Regula câtului, cu $\left(\sqrt{x^2+1}\right)' = \dfrac{2x}{2\sqrt{x^2+1}} = \dfrac{x}{\sqrt{x^2+1}}$:

$$f'(x) = \frac{2x\sqrt{x^2+1} - (x^2 + 6)\cdot\dfrac{x}{\sqrt{x^2+1}}}{x^2 + 1}.$$

Aducem numărătorul la numitorul comun $\sqrt{x^2+1}$:

$$f'(x) = \frac{2x(x^2+1) - x(x^2+6)}{(x^2+1)\sqrt{x^2+1}} = \frac{2x^3 + 2x - x^3 - 6x}{(x^2+1)\sqrt{x^2+1}} = \frac{x^3 - 4x}{(x^2+1)\sqrt{x^2+1}} = \frac{x(x^2-4)}{(x^2+1)\sqrt{x^2+1}}.$$

*Barem: 3p aplicarea regulii de derivare, 2p forma finală.*

#### b) Tangenta în punctul de abscisă $x = 0$

$f(0) = \dfrac{6}{1} = 6$ și $f'(0) = 0$. Ecuația tangentei: $y - f(0) = f'(0)(x - 0)$, adică $y = 6$.

**Răspuns:** $y = 6$. *Barem: 2p $f(0)$ și $f'(0)$, 3p ecuația.*

#### c) $f(7x) - f(x) \le 2\sqrt2$, pentru orice $x \in [0, 1]$

**Monotonia pe $[0, +\infty)$.** Numitorul lui $f'$ este pozitiv, deci semnul lui $f'$ este semnul lui $x(x^2 - 4) = x(x-2)(x+2)$. Pentru $x \ge 0$: $f'(x) \le 0$ pe $[0, 2]$ și $f'(x) \ge 0$ pe $[2, +\infty)$. Deci $f$ este descrescătoare pe $[0, 2]$ și crescătoare pe $[2, +\infty)$.

Valori utile:

$$f(0) = 6, \quad f(1) = \frac{7}{\sqrt2}, \quad f(7) = \frac{55}{\sqrt{50}} = \frac{55}{5\sqrt2} = \frac{11}{\sqrt2}.$$

**Majorăm $f(7x)$.** Pentru $x \in [0,1]$, $7x \in [0, 7]$. Pe $[0, 7]$, $f$ coboară de la $f(0)$ până la $f(2)$, apoi urcă până la $f(7)$, deci maximul pe $[0,7]$ este $\max\{f(0), f(7)\} = \max\left\{6, \frac{11}{\sqrt2}\right\} = \frac{11}{\sqrt2}$ (căci $\frac{11}{\sqrt2} \approx 7{,}78 > 6$). Astfel $f(7x) \le \dfrac{11}{\sqrt2}$.

**Minorăm $f(x)$.** Pe $[0, 1] \subset [0, 2]$, $f$ este descrescătoare, deci $f(x) \ge f(1) = \dfrac{7}{\sqrt2}$.

**Concluzie:**

$$f(7x) - f(x) \le \frac{11}{\sqrt2} - \frac{7}{\sqrt2} = \frac{4}{\sqrt2} = 2\sqrt2, \quad \forall x \in [0,1]. \ \blacksquare$$

*Barem: 2p monotonia, 3p valorile $f(0)$, $f(1)$, $f(7)$ și concluzia.*

### 2. $f(x) = 3x^2 - 1 + e^{2x}$

#### a) $\displaystyle\int_0^3 \left(f(x) - e^{2x}\right)dx = 24$

$f(x) - e^{2x} = 3x^2 - 1$, deci

$$\int_0^3 (3x^2 - 1)\,dx = (x^3 - x)\Big|_0^3 = (27 - 3) - 0 = 24.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 4x\left(f(x) - 3x^2 + 1\right)dx = e^2 + 1$

$f(x) - 3x^2 + 1 = e^{2x}$, deci integrala este $\displaystyle\int_0^1 4xe^{2x}\,dx$. Scriem $4xe^{2x} = 2x\cdot(e^{2x})'$ și integrăm prin părți ($u = 2x$, $v = e^{2x}$):

$$\int_0^1 2x(e^{2x})'\,dx = 2xe^{2x}\Big|_0^1 - \int_0^1 2e^{2x}\,dx = 2e^2 - e^{2x}\Big|_0^1 = 2e^2 - (e^2 - 1) = e^2 + 1.$$

*Barem: 3p integrarea prin părți, 2p calculul final.*

#### c) $\displaystyle\lim_{x\to0}\frac{1}{x^2}\int_0^x \frac{f(t)}{t+1}\,dt = 1$

Pentru $x \to 0$, integrala tinde la $\int_0^0 = 0$ și $x^2 \to 0$: nedeterminare $\frac00$. Funcția $t \mapsto \frac{f(t)}{t+1}$ este continuă în jurul lui 0, deci $\left(\int_0^x \frac{f(t)}{t+1}dt\right)' = \frac{f(x)}{x+1}$. Aplicăm **regula lui l'Hôpital**:

$$\lim_{x\to0}\frac{\int_0^x \frac{f(t)}{t+1}dt}{x^2} = \lim_{x\to0}\frac{\frac{f(x)}{x+1}}{2x} = \lim_{x\to0}\frac{f(x)}{2x(x+1)} = \lim_{x\to 0}\frac{f(x)}{2x^2 + 2x}.$$

Cum $f(0) = 0 - 1 + 1 = 0$, avem din nou $\frac00$. Aplicăm încă o dată l'Hôpital, cu $f'(x) = 6x + 2e^{2x}$:

$$\lim_{x\to0}\frac{6x + 2e^{2x}}{4x + 2} = \frac{0 + 2}{0 + 2} = 1. \ \blacksquare$$

*Barem: 3p prima aplicare a regulii lui l'Hôpital, 2p finalizarea.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $2$ |
| I.2 | $a = -9$ |
| I.3 | $x \in \{1, 4\}$ |
| I.4 | 16 numere |
| I.5 | $C(3, 4)$ |
| I.6 | $\mathcal A = 8\sqrt3$ |
| II.1.c | $a = -\tfrac12$ |
| II.2.b | $m \in \{-2, 2\}$ |
| II.2.c | $a \in \{0, 3\}$ |
| III.1.b | $y = 6$ |
| III.2.c | limita $= 1$ |

## Ce merită reținut din varianta 9

- **Triunghi dreptunghic și cercul circumscris**: ipotenuza este diametru, $BC = 2R$.
- **Sisteme cu parametru**: uneori o necunoscută ($x_0 = -\frac12$) nu depinde de parametru — combinațiile de ecuații o scot rapid, fără Cramer complet.
- **Inegalități de forma $f(7x) - f(x) \le c$**: majorează separat $f(7x)$ (maxim pe $[0,7]$) și minorează $f(x)$ (minim pe $[0,1]$).
- **Limite cu integrale**: l'Hôpital se poate aplica de două ori — verifică de fiecare dată că ai tot $\frac00$.
