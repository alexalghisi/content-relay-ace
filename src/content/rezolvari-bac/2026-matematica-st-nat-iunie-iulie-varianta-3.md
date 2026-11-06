Rezolvarea completă a subiectului de **Bacalaureat 2026 la Matematică M_șt-nat**, sesiunea iunie–iulie, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $(4{,}9 - 3{,}4) : 3 + 2{,}5 = 3$

Respectăm ordinea operațiilor: întâi paranteza, apoi împărțirea, la final adunarea.

$$4{,}9 - 3{,}4 = 1{,}5, \qquad 1{,}5 : 3 = 0{,}5, \qquad 0{,}5 + 2{,}5 = 3.$$

*Barem: 2p calculul parantezei, 3p finalizarea.*

### 2. Funcția $f(x) = 2x - 21$: determinați $a$ pentru care $A(-3a, a)$ aparține graficului

Un punct $(x_0, y_0)$ aparține graficului lui $f$ dacă și numai dacă $f(x_0) = y_0$. Deci condiția este $f(-3a) = a$:

$$2(-3a) - 21 = a \iff -6a - 21 = a \iff -7a = 21 \iff a = -3.$$

**Verificare:** $A(9, -3)$ și $f(9) = 18 - 21 = -3$ ✔.

**Răspuns:** $a = -3$. *Barem: 2p condiția $f(-3a) = a$, 3p rezolvarea.*

### 3. Ecuație logaritmică: $\log_7(1 + 2x - x^2) = \log_7(3 - x)$

**Condiții de existență:** argumentele logaritmilor trebuie să fie strict pozitive: $1 + 2x - x^2 > 0$ și $3 - x > 0$.

Funcția $\log_7$ este injectivă, deci egalitatea logaritmilor implică egalitatea argumentelor:

$$1 + 2x - x^2 = 3 - x \iff x^2 - 3x + 2 = 0 \iff (x - 1)(x - 2) = 0,$$

cu soluțiile $x_1 = 1$, $x_2 = 2$.

**Verificare** (e suficient să fie pozitiv un argument, celălalt fiind egal cu el):

- $x = 1$: $3 - 1 = 2 > 0$ și $1 + 2 - 1 = 2$ ✔;
- $x = 2$: $3 - 2 = 1 > 0$ și $1 + 4 - 4 = 1$ ✔.

**Răspuns:** $x \in \{1, 2\}$. *Barem: 2p ecuația de gradul al II-lea, 3p soluțiile, cu precizarea că ele convin.*

### 4. Probabilitatea ca un număr natural de două cifre să fie multiplu impar de 11

**Cazuri posibile:** numerele de două cifre sunt $10, 11, \dots, 99$, adică $99 - 10 + 1 = 90$ de numere.

**Cazuri favorabile:** multiplii de 11 de două cifre sunt $11, 22, 33, 44, 55, 66, 77, 88, 99$; dintre aceștia sunt impari $11, 33, 55, 77, 99$ — deci $5$ cazuri favorabile.

$$p = \frac{5}{90} = \frac{1}{18}.$$

**Răspuns:** $p = \dfrac{1}{18}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(0,5)$, $B(2,0)$, $C(4,2)$, $D$ mijlocul lui $BC$: arătați că triunghiul $ADC$ este isoscel

Mijlocul lui $BC$: $D\left(\dfrac{2 + 4}{2}, \dfrac{0 + 2}{2}\right) = D(3, 1)$.

Calculăm laturile din $A$:

$$AD = \sqrt{(3 - 0)^2 + (1 - 5)^2} = \sqrt{9 + 16} = 5, \qquad AC = \sqrt{(4 - 0)^2 + (2 - 5)^2} = \sqrt{16 + 9} = 5.$$

Cum $AD = AC = 5$, triunghiul $ADC$ este isoscel (cu baza $DC$; pentru completare, $DC = \sqrt{1 + 1} = \sqrt2 \ne 5$).

*Barem: 3p coordonatele lui $D$ și $AD = 5$, 2p $AC = 5$ și concluzia.*

### 6. Triunghi dreptunghic în $A$, $\operatorname{tg} B = \dfrac13$, aria $24$: arătați că $AC = 4$

Într-un triunghi dreptunghic, tangenta unui unghi ascuțit este cateta opusă supra cateta alăturată. Pentru unghiul $B$: cateta opusă este $AC$, cea alăturată $AB$:

$$\operatorname{tg} B = \frac{AC}{AB} = \frac13 \Rightarrow AB = 3AC.$$

Aria triunghiului dreptunghic este semiprodusul catetelor:

$$\frac{AB \cdot AC}{2} = 24 \Rightarrow \frac{3AC^2}{2} = 24 \Rightarrow AC^2 = 16 \Rightarrow AC = 4$$

(lungimea este pozitivă). *Barem: 2p relația $AB = 3AC$, 3p folosirea ariei și concluzia.*

## Subiectul al II-lea (30 de puncte)

### 1. $I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ și $A(a) = \begin{pmatrix} 2a + 2 & -a \\ a - 3 & 1 \end{pmatrix}$, $a \in \mathbb R$

#### a) $\det(A(1)) = 2$

$$A(1) = \begin{pmatrix} 4 & -1 \\ -2 & 1 \end{pmatrix}, \qquad \det(A(1)) = 4 \cdot 1 - (-1)\cdot(-2) = 4 - 2 = 2.$$

*Barem: 3p scrierea matricei și a determinantului, 2p calculul.*

#### b) $x$ real cu $A(0)\cdot\left(6I_2 - A(2) - A(-2)\right) = xI_2$

Calculăm matricele:

$$A(0) = \begin{pmatrix} 2 & 0 \\ -3 & 1 \end{pmatrix}, \quad A(2) = \begin{pmatrix} 6 & -2 \\ -1 & 1 \end{pmatrix}, \quad A(-2) = \begin{pmatrix} -2 & 2 \\ -5 & 1 \end{pmatrix}.$$

$A(2) + A(-2) = \begin{pmatrix} 4 & 0 \\ -6 & 2 \end{pmatrix}$, deci

$$6I_2 - A(2) - A(-2) = \begin{pmatrix} 6 - 4 & 0 \\ 6 & 6 - 2 \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 6 & 4 \end{pmatrix}.$$

Produsul:

$$A(0)\cdot\begin{pmatrix} 2 & 0 \\ 6 & 4 \end{pmatrix} = \begin{pmatrix} 2\cdot2 + 0\cdot6 & 0 \\ -3\cdot2 + 1\cdot6 & 1\cdot4 \end{pmatrix} = \begin{pmatrix} 4 & 0 \\ 0 & 4 \end{pmatrix} = 4I_2.$$

Din $4I_2 = xI_2$ rezultă $x = 4$.

**Răspuns:** $x = 4$. *Barem: 3p calculul matricelor și al produsului, 2p valoarea lui $x$.*

#### c) Matricea $X$ cu $A(1)\cdot X\cdot A(1) = 4I_2$

Din a), $\det(A(1)) = 2 \ne 0$, deci $A(1)$ este inversabilă. Înmulțim egalitatea la stânga și la dreapta cu $(A(1))^{-1}$:

$$X = 4\,(A(1))^{-1}\cdot(A(1))^{-1}.$$

**Inversa:** pentru $\begin{pmatrix} p & q \\ r & s \end{pmatrix}$ cu determinant $d \ne 0$, inversa este $\dfrac1d\begin{pmatrix} s & -q \\ -r & p \end{pmatrix}$:

$$(A(1))^{-1} = \frac12\begin{pmatrix} 1 & 1 \\ 2 & 4 \end{pmatrix} = \begin{pmatrix} \frac12 & \frac12 \\ 1 & 2 \end{pmatrix}.$$

Atunci

$$X = 4\cdot\frac14\begin{pmatrix} 1 & 1 \\ 2 & 4 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 2 & 4 \end{pmatrix} = \begin{pmatrix} 1 + 2 & 1 + 4 \\ 2 + 8 & 2 + 16 \end{pmatrix} = \begin{pmatrix} 3 & 5 \\ 10 & 18 \end{pmatrix}.$$

**Verificare:** $A(1)\cdot X = \begin{pmatrix} 2 & 2 \\ 4 & 8 \end{pmatrix}$, iar $\begin{pmatrix} 2 & 2 \\ 4 & 8 \end{pmatrix}A(1) = \begin{pmatrix} 4 & 0 \\ 0 & 4 \end{pmatrix}$ ✔.

**Răspuns:** $X = \begin{pmatrix} 3 & 5 \\ 10 & 18 \end{pmatrix}$. *Barem: 2p exprimarea lui $X$ cu inversa, 3p calculul inversei și al lui $X$.* Atenție: înmulțirea matricelor nu e comutativă — inversa se pune o dată la stânga și o dată la dreapta, nu „se împarte” cu $A(1)^2$.

### 2. Polinomul $f = X^3 - aX + 2 + a$, $a \in \mathbb R$

#### a) $f(1) = 3$ pentru orice $a$

$$f(1) = 1^3 - a\cdot 1 + 2 + a = 1 + 2 = 3,$$

termenii cu $a$ se reduc, deci rezultatul nu depinde de $a$. *Barem: 3p înlocuirea, 2p finalizarea.*

#### b) $a$ pentru care $f$ este divizibil cu $g = X + 2$

Din teorema lui Bézout, $f$ este divizibil cu $X + 2 = X - (-2)$ dacă și numai dacă $f(-2) = 0$:

$$f(-2) = -8 + 2a + 2 + a = 3a - 6 = 0 \iff a = 2.$$

**Răspuns:** $a = 2$. *Barem: 3p calculul lui $f(-2)$, 2p valoarea lui $a$.*

#### c) $a$ pentru care $x_1^3 + x_2^3 + x_3^3 = x_1x_2 + x_1x_3 + x_2x_3$

**Relațiile lui Viète** pentru $X^3 + 0\cdot X^2 - aX + (2 + a)$:

$$x_1 + x_2 + x_3 = 0, \qquad x_1x_2 + x_1x_3 + x_2x_3 = -a.$$

**Suma cuburilor:** fiecare rădăcină verifică $f(x_k) = 0$, adică $x_k^3 = ax_k - 2 - a$. Adunând pentru $k = 1, 2, 3$:

$$x_1^3 + x_2^3 + x_3^3 = a(x_1 + x_2 + x_3) - 3(2 + a) = a\cdot 0 - 6 - 3a = -3a - 6.$$

Condiția devine $-3a - 6 = -a \iff -2a = 6 \iff a = -3$.

**Răspuns:** $a = -3$. *Barem: 2p relațiile lui Viète, 3p suma cuburilor și valoarea lui $a$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = e^x(2x^2 - 3x)$

#### a) $f'(x) = e^x(2x + 3)(x - 1)$

Regula produsului $(uv)' = u'v + uv'$, cu $u = e^x$, $v = 2x^2 - 3x$:

$$f'(x) = e^x(2x^2 - 3x) + e^x(4x - 3) = e^x(2x^2 + x - 3).$$

Descompunem trinomul: rădăcinile lui $2x^2 + x - 3$ sunt $x = 1$ și $x = -\dfrac32$, deci $2x^2 + x - 3 = (2x + 3)(x - 1)$. Așadar $f'(x) = e^x(2x + 3)(x - 1)$, $x \in \mathbb R$.

*Barem: 3p derivarea, 2p forma finală.*

#### b) $\displaystyle\lim_{x\to0}\frac{f(x) - x}{f(x) + x} = 2$

Pentru $x \to 0$: $f(0) = 0$, deci numărătorul și numitorul tind la $0$ — nedeterminare $\frac00$. Aplicăm **regula lui l'Hôpital**:

$$\lim_{x\to0}\frac{f(x) - x}{f(x) + x} = \lim_{x\to0}\frac{f'(x) - 1}{f'(x) + 1} = \lim_{x\to0}\frac{e^x(2x + 3)(x - 1) - 1}{e^x(2x + 3)(x - 1) + 1}.$$

Cum $f'(0) = 1\cdot 3\cdot(-1) = -3$:

$$\frac{-3 - 1}{-3 + 1} = \frac{-4}{-2} = 2.$$

*Barem: 2p aplicarea regulii lui l'Hôpital, 3p calculul limitei.*

#### c) $a$ pentru care tangenta în punctul de abscisă $a$ are panta $0$

Panta tangentei la grafic în punctul de abscisă $a$ este $f'(a)$. Condiția:

$$f'(a) = 0 \iff e^a(2a + 3)(a - 1) = 0.$$

Cum $e^a > 0$ pentru orice $a$, rămâne $(2a + 3)(a - 1) = 0$, deci $a = -\dfrac32$ sau $a = 1$.

**Răspuns:** $a \in \left\{-\dfrac32, 1\right\}$. *Barem: 3p condiția $f'(a) = 0$, 2p valorile lui $a$.*

### 2. $f:(-1, +\infty) \to \mathbb R$, $f(x) = (2x^2 + 4x)\sqrt{x + 1}$

#### a) $\displaystyle\int_0^3 \frac{f(x)}{\sqrt{x + 1}}\,dx = 36$

Radicalul se simplifică: $\dfrac{f(x)}{\sqrt{x + 1}} = 2x^2 + 4x$.

$$\int_0^3 (2x^2 + 4x)\,dx = \left(\frac{2x^3}{3} + 2x^2\right)\Big|_0^3 = \frac{2\cdot27}{3} + 2\cdot 9 = 18 + 18 = 36.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_3^8 \frac{x^2 + 2x}{f(x)}\,dx = 1$

Observăm că $2x^2 + 4x = 2(x^2 + 2x)$, deci

$$\frac{x^2 + 2x}{f(x)} = \frac{x^2 + 2x}{2(x^2 + 2x)\sqrt{x + 1}} = \frac{1}{2\sqrt{x + 1}}$$

(pe $[3, 8]$ avem $x^2 + 2x > 0$, deci simplificarea e permisă). Cum $\left(\sqrt{x + 1}\right)' = \dfrac{1}{2\sqrt{x + 1}}$:

$$\int_3^8 \frac{1}{2\sqrt{x + 1}}\,dx = \sqrt{x + 1}\,\Big|_3^8 = \sqrt9 - \sqrt4 = 3 - 2 = 1.$$

*Barem: 3p simplificarea și primitiva, 2p calculul.*

#### c) Aria de sub graficul lui $g(x) = \dfrac{4\sqrt{x + 1}}{f(x)}$, între $x = 1$ și $x = 4$

Simplificăm: $g(x) = \dfrac{4\sqrt{x + 1}}{2x(x + 2)\sqrt{x + 1}} = \dfrac{2}{x(x + 2)}$, $x > 0$. Pe $[1, 4]$ avem $g(x) > 0$, deci

$$\mathcal A = \int_1^4 |g(x)|\,dx = \int_1^4 \frac{2}{x(x + 2)}\,dx.$$

**Descompunere în fracții simple:** $\dfrac{2}{x(x + 2)} = \dfrac1x - \dfrac{1}{x + 2}$ (verificare: $\dfrac{(x + 2) - x}{x(x + 2)} = \dfrac{2}{x(x + 2)}$ ✔).

$$\mathcal A = \left(\ln x - \ln(x + 2)\right)\Big|_1^4 = (\ln 4 - \ln 6) - (\ln 1 - \ln 3) = \ln\frac{4\cdot 3}{6} = \ln 2.$$

**Răspuns:** $\mathcal A = \ln 2$. *Barem: 3p scrierea ariei și descompunerea, 2p calculul final.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $3$ |
| I.2 | $a = -3$ |
| I.3 | $x \in \{1, 2\}$ |
| I.4 | $p = \tfrac{1}{18}$ |
| I.5 | $AD = AC = 5$ |
| I.6 | $AC = 4$ |
| II.1.b | $x = 4$ |
| II.1.c | $X = \begin{pmatrix} 3 & 5 \\ 10 & 18 \end{pmatrix}$ |
| II.2.b | $a = 2$ |
| II.2.c | $a = -3$ |
| III.1.c | $a \in \{-\tfrac32, 1\}$ |
| III.2.c | $\ln 2$ |

## Ce merită reținut din varianta 3

- **Ecuații logaritmice**: egalează argumentele, apoi verifică obligatoriu că sunt pozitive.
- **Ecuații matriceale $AXA = B$**: $X = A^{-1}BA^{-1}$ — ordinea factorilor contează.
- **Suma puterilor rădăcinilor**: înlocuiește fiecare rădăcină în polinom și adună; combini apoi cu Viète.
- **Integrale cu radicali**: caută întâi simplificarea; $\dfrac{1}{2\sqrt{x+1}}$ este derivata lui $\sqrt{x+1}$.
