Rezolvarea completă a subiectului de **Bacalaureat 2023 la Matematică M_șt-nat**, sesiunea iunie–iulie, **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $4 - 6\sqrt3 + 3\left(2\sqrt3 - 1\right) = 1$

Desfacem paranteza înmulțind fiecare termen cu 3: $3\left(2\sqrt3 - 1\right) = 6\sqrt3 - 3$.

$$4 - 6\sqrt3 + 6\sqrt3 - 3 = 4 - 3 = 1.$$

Termenii cu radical se reduc ($-6\sqrt3 + 6\sqrt3 = 0$), rămânând doar numerele întregi. *Barem: 3p desfacerea parantezei, 2p finalizarea.*

### 2. $f(x) = 5x - 3$, $g(x) = 2x + 3$: determinați $a$ cu $f(a) = g(a)$

Înlocuim $x$ cu $a$ în ambele funcții:

$$5a - 3 = 2a + 3 \iff 5a - 2a = 3 + 3 \iff 3a = 6 \iff a = 2.$$

Verificare: $f(2) = 7$, $g(2) = 7$ ✔. Geometric, $a = 2$ este abscisa punctului de intersecție a graficelor.

**Răspuns:** $a = 2$. *Barem: 3p scrierea ecuației, 2p rezolvarea.*

### 3. Ecuația exponențială $2^{2x+1}\cdot 2^3 = 1$

Folosim regula $2^m \cdot 2^n = 2^{m+n}$ și faptul că $1 = 2^0$:

$$2^{2x+1}\cdot 2^3 = 2^{2x+4} = 2^0.$$

Funcția exponențială de bază 2 este injectivă, deci exponenții sunt egali: $2x + 4 = 0 \iff x = -2$.

**Răspuns:** $x = -2$. *Barem: 3p reducerea la $2x + 4 = 0$, 2p soluția.*

### 4. Câte numere de două cifre distincte se formează cu cifre din $A = \{3, 4, 5, 6\}$

Un număr de două cifre are forma $\overline{ab}$. Cum $0 \notin A$, orice cifră poate fi pe prima poziție.

- cifra zecilor $a$: 4 alegeri;
- cifra unităților $b$: trebuie să fie diferită de $a$, deci 3 alegeri.

Regula produsului: $4 \cdot 3 = 12$ numere (echivalent, aranjamente $A_4^2 = 12$).

**Răspuns:** 12 numere. *Barem: 2p alegerea cifrei zecilor, 3p numărarea finală.*

### 5. $A(4,0)$, $B(0,2)$, $C(3,3)$, $M$ mijlocul lui $AB$: arătați că $MO = MC$

Mijlocul segmentului: $M\left(\dfrac{4+0}{2}, \dfrac{0+2}{2}\right) = M(2, 1)$.

Cu formula distanței $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$:

$$MO = \sqrt{2^2 + 1^2} = \sqrt5, \qquad MC = \sqrt{(3-2)^2 + (3-1)^2} = \sqrt{1 + 4} = \sqrt5.$$

Deci $MO = MC$. *Barem: 3p coordonatele lui $M$ și $MO$, 2p $MC$ și concluzia.*

### 6. $E(x) = 2\sin x\sin 2x - \cos x$; arătați că $E\left(\dfrac{\pi}{6}\right) = 0$

Pentru $x = \dfrac\pi6$ avem $2x = \dfrac\pi3$. Valorile: $\sin\dfrac\pi6 = \dfrac12$, $\sin\dfrac\pi3 = \dfrac{\sqrt3}{2}$, $\cos\dfrac\pi6 = \dfrac{\sqrt3}{2}$.

$$E\left(\frac\pi6\right) = 2\cdot\frac12\cdot\frac{\sqrt3}{2} - \frac{\sqrt3}{2} = \frac{\sqrt3}{2} - \frac{\sqrt3}{2} = 0.$$

*Barem: 3p valorile trigonometrice, 2p calculul final.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$ și $A(a) = \begin{pmatrix}3+a & 2-2a\\ 1-a & 1+3a\end{pmatrix}$

#### a) $\det(A(0)) = 1$

Pentru $a = 0$: $A(0) = \begin{pmatrix}3 & 2\\ 1 & 1\end{pmatrix}$.

$$\det(A(0)) = \begin{vmatrix}3 & 2\\ 1 & 1\end{vmatrix} = 3\cdot 1 - 2\cdot 1 = 1.$$

*Barem: 3p scrierea matricei și a determinantului, 2p calculul.*

#### b) $A(0)\cdot\left(A(a) - A(0)\right) = aI_2$, pentru orice $a$ real

Scădem element cu element:

$$A(a) - A(0) = \begin{pmatrix}3+a-3 & 2-2a-2\\ 1-a-1 & 1+3a-1\end{pmatrix} = \begin{pmatrix}a & -2a\\ -a & 3a\end{pmatrix}.$$

Înmulțim (linie cu coloană):

$$\begin{pmatrix}3 & 2\\ 1 & 1\end{pmatrix}\begin{pmatrix}a & -2a\\ -a & 3a\end{pmatrix} = \begin{pmatrix}3a - 2a & -6a + 6a\\ a - a & -2a + 3a\end{pmatrix} = \begin{pmatrix}a & 0\\ 0 & a\end{pmatrix} = aI_2.$$

*Barem: 2p diferența $A(a) - A(0)$, 3p produsul și concluzia.*

#### c) $\det\left(A(a^2) - aA(a)\right) \ge 0$, pentru orice $a$ real

Înlocuim $a$ cu $a^2$ în formula matricei: $A(a^2) = \begin{pmatrix}3+a^2 & 2-2a^2\\ 1-a^2 & 1+3a^2\end{pmatrix}$, iar $aA(a) = \begin{pmatrix}3a+a^2 & 2a-2a^2\\ a-a^2 & a+3a^2\end{pmatrix}$.

$$A(a^2) - aA(a) = \begin{pmatrix}3 - 3a & 2 - 2a\\ 1 - a & 1 - a\end{pmatrix}.$$

Toate elementele au factorul $(1 - a)$:

$$\det = (3-3a)(1-a) - (2-2a)(1-a) = 3(1-a)^2 - 2(1-a)^2 = (1-a)^2 \ge 0,$$

pentru că un pătrat de număr real este nenegativ. Egalitatea are loc doar pentru $a = 1$. *Barem: 2p matricea $A(a^2) - aA(a)$, 3p determinantul și concluzia.*

### 2. Legea de compoziție $x \circ y = x^2 - 4xy + 3y^2$

#### a) $0 \circ 2 = 12$

$$0 \circ 2 = 0^2 - 4\cdot 0\cdot 2 + 3\cdot 2^2 = 0 - 0 + 12 = 12.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) Numerele reale $x$ pentru care $(2x)\circ x = -1$

$$(2x)\circ x = (2x)^2 - 4\cdot 2x\cdot x + 3x^2 = 4x^2 - 8x^2 + 3x^2 = -x^2.$$

Ecuația devine $-x^2 = -1 \iff x^2 = 1 \iff x \in \{-1, 1\}$.

**Răspuns:** $x = -1$ sau $x = 1$. *Barem: 2p expresia $(2x)\circ x = -x^2$, 3p soluțiile.*

#### c) Perechile $(m, n)$ de numere întregi, $m < n$, cu $m \circ n = 3$

Descompunem expresia împărțind $-4mn = -mn - 3mn$:

$$m\circ n = m^2 - mn - 3mn + 3n^2 = m(m - n) - 3n(m - n) = (m - n)(m - 3n).$$

Ecuația: $(m - n)(m - 3n) = 3$. Ambii factori sunt întregi, iar din $m < n$ avem $m - n < 0$. Produsul fiind pozitiv, și $m - 3n < 0$. Divizorii negativi ai lui 3 sunt $-1$ și $-3$:

- $m - n = -1$, $m - 3n = -3$: scăzând, $2n = 2 \Rightarrow n = 1$, $m = 0$;
- $m - n = -3$, $m - 3n = -1$: scăzând, $2n = -2 \Rightarrow n = -1$, $m = -4$.

Verificare: $0\circ 1 = 0 - 0 + 3 = 3$ ✔; $(-4)\circ(-1) = 16 - 16 + 3 = 3$ ✔.

**Răspuns:** $(m, n) \in \{(-4, -1),\ (0, 1)\}$. *Barem: 2p descompunerea în factori, 3p perechile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = 5 + \dfrac{4x - 4}{x^2}$

#### a) $f'(x) = \dfrac{4(2 - x)}{x^3}$

Derivata constantei 5 este 0; pentru fracție folosim regula câtului:

$$f'(x) = \frac{4\cdot x^2 - (4x - 4)\cdot 2x}{x^4} = \frac{4x^2 - 8x^2 + 8x}{x^4} = \frac{-4x^2 + 8x}{x^4} = \frac{4x(2 - x)}{x^4} = \frac{4(2 - x)}{x^3}.$$

(Simplificarea cu $x$ este permisă pentru că $x > 0$.) *Barem: 3p derivarea, 2p forma finală.*

#### b) Asimptota orizontală spre $+\infty$

Scriem fracția termen cu termen: $\dfrac{4x - 4}{x^2} = \dfrac4x - \dfrac4{x^2}$.

$$\lim_{x\to+\infty} f(x) = \lim_{x\to+\infty}\left(5 + \frac4x - \frac{4}{x^2}\right) = 5 + 0 - 0 = 5.$$

Limita este finită, deci **dreapta $y = 5$** este asimptotă orizontală spre $+\infty$.

**Răspuns:** $y = 5$. *Barem: 3p calculul limitei, 2p concluzia.*

#### c) $|f(x) - f(y)| \le 1$, pentru orice $x, y \in [1, +\infty)$

Ideea: arătăm că toate valorile lui $f$ pe $[1, +\infty)$ stau într-un interval de lungime 1.

Din a): $f'(x) = 0 \iff x = 2$; pe $[1, 2]$ avem $2 - x \ge 0$, deci $f' \ge 0$ și $f$ crescătoare; pe $[2, +\infty)$, $f' \le 0$ și $f$ descrescătoare.

| $x$ | $1$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | |
| $f(x)$ | $5$ | ↗ | $6$ | ↘ | $5$ |

Valorile: $f(1) = 5 + 0 = 5$, $f(2) = 5 + \dfrac{4}{4} = 6$, $\lim\limits_{x\to+\infty} f(x) = 5$.

Așadar maximul pe $[1, +\infty)$ este $6$, iar $f(x) \ge 5$ (pe $[1,2]$ din monotonie, pe $[2,+\infty)$ pentru că $f$ descrește spre limita 5; direct: $4x - 4 \ge 0$ pentru $x \ge 1$). Deci $5 \le f(x) \le 6$ pentru orice $x \ge 1$.

Pentru $x, y \ge 1$: $f(x), f(y) \in [5, 6]$, iar distanța dintre două numere din acest interval este cel mult $6 - 5 = 1$: $|f(x) - f(y)| \le 1$.

*Barem: 2p monotonia, 3p încadrarea $5 \le f(x) \le 6$ și concluzia.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = 3x^2 + 4\ln x$

#### a) $\displaystyle\int_1^2 \left(f(x) - 4\ln x\right)dx = 7$

Integrandul se simplifică: $f(x) - 4\ln x = 3x^2$.

$$\int_1^2 3x^2\,dx = x^3\Big|_1^2 = 8 - 1 = 7.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^e x\left(f(x) - 3x^2\right)dx = e^2 + 1$

Integrandul devine $x\cdot 4\ln x = 4x\ln x$. Integrăm prin părți, cu $(2x^2)' = 4x$:

$$\int_1^e 4x\ln x\,dx = 2x^2\ln x\Big|_1^e - \int_1^e 2x^2\cdot\frac1x\,dx = 2e^2\cdot 1 - 0 - \int_1^e 2x\,dx.$$

$$\int_1^e 2x\,dx = x^2\Big|_1^e = e^2 - 1, \quad\text{deci rezultatul este } 2e^2 - (e^2 - 1) = e^2 + 1.$$

*Barem: 3p integrarea prin părți, 2p calculul final.*

#### c) $\displaystyle\int_1^{\sqrt e} f(x)F''(x)\,dx = \frac{(3e - 1)(3e + 5)}{2}$, pentru orice primitivă $F$ a lui $f$

$F$ primitivă a lui $f$ înseamnă $F'(x) = f(x)$, deci $F''(x) = f'(x)$ — rezultatul nu depinde de alegerea primitivei.

Integrala devine $\displaystyle\int_1^{\sqrt e} f(x)f'(x)\,dx$, iar $\left(\dfrac{f^2(x)}{2}\right)' = f(x)f'(x)$:

$$\int_1^{\sqrt e} f(x)f'(x)\,dx = \frac{f^2(x)}{2}\Big|_1^{\sqrt e}.$$

Valorile: $f(\sqrt e) = 3e + 4\cdot\dfrac12 = 3e + 2$ (pentru că $\ln\sqrt e = \dfrac12$), iar $f(1) = 3$.

$$\frac{(3e + 2)^2 - 3^2}{2} = \frac{(3e + 2 - 3)(3e + 2 + 3)}{2} = \frac{(3e - 1)(3e + 5)}{2}.$$

(diferență de pătrate $a^2 - b^2 = (a-b)(a+b)$). *Barem: 2p $F'' = f'$, 3p calculul integralei.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 2$ |
| I.3 | $x = -2$ |
| I.4 | 12 numere |
| II.1.c | $\det = (1-a)^2 \ge 0$ |
| II.2.b | $x \in \{-1, 1\}$ |
| II.2.c | $(-4, -1)$ și $(0, 1)$ |
| III.1.b | $y = 5$ |
| III.1.c | $5 \le f(x) \le 6$ pe $[1, +\infty)$ |

## Ce merită reținut din varianta 1

- **Matrice cu parametru**: după scădere, caută un factor comun în toate elementele — determinantul devine un pătrat perfect.
- **Legi de forma** $x^2 + bxy + cy^2$: descompune în factori și folosește divizorii întregi, ținând cont de semnul impus de $m < n$.
- **Inegalități de tipul** $|f(x) - f(y)| \le k$: arată că $f$ ia valori într-un interval de lungime $k$ (min și max din tabelul de variație).
- **Integrale cu $F''$**: $F'' = f'$, iar $\int f f' = \dfrac{f^2}{2}$.
