Rezolvarea completă a subiectului de **Bacalaureat 2017 la Matematică M_tehnologic**, sesiunea iunie–iulie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\left(2 + \frac12\right)\cdot\frac45 = 2$

$$2 + \frac12 = \frac52, \qquad \frac52\cdot\frac45 = \frac{20}{10} = 2.$$

*Barem: 3p paranteza, 2p produsul.*

### 2. Arătați că $\dfrac{x_1 + x_2 - 1}{x_1x_2} = 1$ pentru $x^2 - 4x + 3 = 0$

Relațiile lui Viète: $x_1 + x_2 = 4$, $x_1x_2 = 3$.

$$\frac{x_1 + x_2 - 1}{x_1x_2} = \frac{4 - 1}{3} = 1.$$

*Barem: 2p Viète, 3p calculul.*

### 3. Ecuația $2^{x+1} = 8$

$8 = 2^3$, deci $x + 1 = 3 \iff x = 2$.

**Răspuns:** $x = 2$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. Probabilitatea ca un număr din $A = \{1, 2, \dots, 9\}$ să fie multiplu de 4

- Cazuri posibile: **9**.
- Multipli de 4: $4$ și $8$ — **2**.

$$p = \frac29.$$

*Barem: 2p posibile, 2p favorabile, 1p probabilitatea.*

### 5. Perimetrul triunghiului $OAB$, $A(0,3)$, $B(4,0)$

$$AO = 3, \quad BO = 4, \quad AB = \sqrt{(4-0)^2 + (0-3)^2} = 5.$$

$$P_{OAB} = 3 + 4 + 5 = 12.$$

**Răspuns:** $12$. *Barem: 3p laturile, 2p perimetrul.*

### 6. Arătați că $\sin^2 150^\circ + \sin^2 60^\circ = 1$

$\sin 150^\circ = \sin(180^\circ - 30^\circ) = \sin 30^\circ = \dfrac12$, $\sin 60^\circ = \dfrac{\sqrt3}{2}$.

$$\frac14 + \frac34 = 1.$$

*Barem: 3p valorile, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}3&2\\2&3\end{pmatrix}$, $B = \begin{pmatrix}1&1\\1&a\end{pmatrix}$

#### a) $\det A = 5$

$$\det A = 3\cdot3 - 2\cdot2 = 9 - 4 = 5.$$

*Barem: 3p formula, 2p calculul.*

#### b) $a$ cu $B\cdot B = 2B$

$$B\cdot B = \begin{pmatrix}2 & a+1\\a+1 & a^2+1\end{pmatrix}, \qquad 2B = \begin{pmatrix}2 & 2\\2 & 2a\end{pmatrix}.$$

Din $a + 1 = 2$: $a = 1$; verificăm $a^2 + 1 = 2 = 2a$ ✔.

**Răspuns:** $a = 1$. *Barem: 2p $B\cdot B$, 3p valoarea lui $a$.*

#### c) $\det(A\cdot B - B\cdot A) \ge 0$

$$AB = \begin{pmatrix}5 & 3 + 2a\\5 & 2 + 3a\end{pmatrix}, \quad BA = \begin{pmatrix}5 & 5\\3 + 2a & 2 + 3a\end{pmatrix}, \quad AB - BA = \begin{pmatrix}0 & 2a - 2\\2 - 2a & 0\end{pmatrix}.$$

$$\det(AB - BA) = 0 - (2a-2)(2-2a) = (2a-2)^2 \ge 0.$$

*Barem: 3p diferența, 2p determinantul.*

### 2. Legea $x \circ y = xy - 3x - 3y + 12$

#### a) $1 \circ 3 = 3$

$$1\circ 3 = 3 - 3 - 9 + 12 = 3.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x \circ y = (x-3)(y-3) + 3$

$$x\circ y = xy - 3x - 3y + 9 + 3 = x(y-3) - 3(y-3) + 3 = (x-3)(y-3) + 3.$$

*Barem: 2p rescrierea, 3p factorizarea.*

#### c) $(x\circ x)\circ x = 3$

$x\circ x = (x-3)^2 + 3$, apoi $(x\circ x)\circ x = (x-3)^2(x-3) + 3 = (x-3)^3 + 3$.

$$(x-3)^3 + 3 = 3 \iff (x-3)^3 = 0 \iff x = 3.$$

**Răspuns:** $x = 3$. *Barem: 3p expresia, 2p soluția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x^3 + 6x + 2$

#### a) $f'(x) = 3(x^2 + 2)$

$$f'(x) = 3x^2 + 6 = 3(x^2 + 2).$$

*Barem: 2p derivarea, 3p forma finală.*

#### b) $\displaystyle\lim_{x\to0}\frac{f'(x)}{x+2} = 3$

$$\lim_{x\to0}\frac{3(x^2+2)}{x+2} = \frac{3\cdot 2}{2} = 3.$$

*Barem: 2p înlocuirea, 3p calculul.*

#### c) $-5 \le f(x) \le 9$ pentru $x \in [-1, 1]$

$f'(x) = 3(x^2 + 2) > 0$, deci $f$ este strict crescătoare. Pe $[-1,1]$:

$$f(-1) = -1 - 6 + 2 = -5 \le f(x) \le f(1) = 1 + 6 + 2 = 9. \ \blacksquare$$

*Barem: 2p monotonia, 3p concluzia.*

### 2. $f(x) = 4x^3 - x$

#### a) $\displaystyle\int_0^1 (f(x) + x)\,dx = 1$

$$\int_0^1 4x^3\,dx = x^4\Big|_0^1 = 1.$$

*Barem: 2p simplificarea, 3p calculul.*

#### b) $\displaystyle\int_0^1 (4x^3 - f(x))e^x\,dx = 1$

$4x^3 - f(x) = x$. Prin părți:

$$\int_0^1 xe^x\,dx = (x-1)e^x\Big|_0^1 = 0 - (-1) = 1.$$

*Barem: 2p simplificarea, 3p integrarea prin părți.*

#### c) Aria între grafic, $Ox$, $x = 1$, $x = 3$

Pe $[1,3]$, $f(x) = x(4x^2 - 1) > 0$, deci

$$\mathcal A = \int_1^3 (4x^3 - x)\,dx = \left(x^4 - \frac{x^2}{2}\right)\Big|_1^3 = \left(81 - \frac92\right) - \left(1 - \frac12\right) = 76.$$

**Răspuns:** $76$. *Barem: 3p primitiva, 2p calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.3 | $x = 2$ |
| I.4 | $p = \frac29$ |
| I.5 | perimetrul $= 12$ |
| II.1.a | $\det A = 5$ |
| II.1.b | $a = 1$ |
| II.1.c | $\det = (2a-2)^2 \ge 0$ |
| II.2.c | $x = 3$ |
| III.2.c | aria $= 76$ |

## Ce merită reținut din varianta 2

- **Expresii simetrice în rădăcini** se calculează cu Viète, fără a rezolva ecuația.
- **$\det(AB - BA)$** pentru matrice $2\times2$ iese adesea un pătrat perfect.
- **Încadrarea pe un interval**: dacă $f$ e crescătoare, valorile sunt între $f(a)$ și $f(b)$.
- **Aria**: verifică semnul funcției pe interval înainte de a integra.
