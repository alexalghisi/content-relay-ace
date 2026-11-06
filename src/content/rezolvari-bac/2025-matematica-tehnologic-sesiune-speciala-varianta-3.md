Rezolvarea completă a subiectului de **Bacalaureat 2025 la Matematică M_tehnologic**, sesiunea specială, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Termenul $a_3$ al progresiei aritmetice cu $a_1 = 3$ și $a_2 = 9$

Într-o progresie aritmetică diferența dintre doi termeni consecutivi este constantă (rația $r$):

$$r = a_2 - a_1 = 9 - 3 = 6.$$

Atunci $a_3 = a_2 + r = 9 + 6 = 15$.

**Răspuns:** $a_3 = 15$. *Barem: 3p rația, 2p termenul $a_3$.*

### 2. $f(x) = 3x - 5$: arătați că $f(3) + f(2) + f(0) = 0$

Calculăm fiecare valoare:

$$f(3) = 9 - 5 = 4, \qquad f(2) = 6 - 5 = 1, \qquad f(0) = 0 - 5 = -5.$$

Suma: $4 + 1 + (-5) = 0$.

*Barem: 3p cele trei valori, 2p suma.*

### 3. Ecuația $\sqrt{9x - 5} = 2$

**Condiție de existență:** $9x - 5 \ge 0$, adică $x \ge \dfrac59$.

Membrul drept este pozitiv, deci putem ridica la pătrat fără să introducem soluții false:

$$9x - 5 = 4 \iff 9x = 9 \iff x = 1.$$

**Verificare:** $x = 1 \ge \dfrac59$ și $\sqrt{9 - 5} = \sqrt4 = 2$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p ridicarea la pătrat ($9x - 5 = 4$), 2p soluția și faptul că ea convine.*

### 4. După o ieftinire cu $30\%$ obiectul costă 56 de lei. Prețul inițial?

Notăm cu $x$ prețul inițial. Ieftinirea înseamnă scăderea a $30\%$ din $x$:

$$x - \frac{30}{100}\,x = 56 \iff \frac{70}{100}\,x = 56 \iff x = \frac{56 \cdot 100}{70} = 80.$$

**Verificare:** $30\%$ din 80 este 24, iar $80 - 24 = 56$ ✔.

**Răspuns:** 80 de lei. *Barem: 3p ecuația, 2p rezultatul.* Greșeala frecventă: să aduni $30\%$ din 56 (ar da 72,8 lei) — procentul se aplică prețului **inițial**, nu celui final.

### 5. $A(0,1)$, $B(5,6)$, $C(7,2)$: arătați că $AB = AC$

Folosim formula distanței $AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$:

$$AB = \sqrt{(5-0)^2 + (6-1)^2} = \sqrt{25 + 25} = 5\sqrt2,$$

$$AC = \sqrt{(7-0)^2 + (2-1)^2} = \sqrt{49 + 1} = \sqrt{50} = 5\sqrt2.$$

Deci $AB = AC$ (triunghiul $ABC$ este isoscel cu vârful în $A$). *Barem: 2p $AB$, 3p $AC$ și concluzia.*

### 6. Arătați că $(\sin 30^\circ + 3\cos 60^\circ)\cdot(\sin 45^\circ)^2 = 1$

Valori de reținut: $\sin 30^\circ = \dfrac12$, $\cos 60^\circ = \dfrac12$, $\sin 45^\circ = \dfrac{\sqrt2}{2}$.

$$\left(\frac12 + \frac32\right)\cdot\left(\frac{\sqrt2}{2}\right)^2 = 2 \cdot \frac{2}{4} = 2 \cdot \frac12 = 1.$$

*Barem: 3p valorile trigonometrice, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $I_2$, $A = \begin{pmatrix}1 & 2\\ -2 & 1\end{pmatrix}$ și $B(x) = \begin{pmatrix}2 & x\\ -1 & 2x\end{pmatrix}$

#### a) $\det A = 5$

Pentru o matrice $2 \times 2$: $\det\begin{pmatrix}a & b\\ c & d\end{pmatrix} = ad - bc$.

$$\det A = 1 \cdot 1 - 2 \cdot (-2) = 1 + 4 = 5.$$

*Barem: 3p scrierea și aplicarea formulei, 2p rezultatul.*

#### b) $A + 3I_2 = 2B(1)$

$$A + 3I_2 = \begin{pmatrix}1 & 2\\ -2 & 1\end{pmatrix} + \begin{pmatrix}3 & 0\\ 0 & 3\end{pmatrix} = \begin{pmatrix}4 & 2\\ -2 & 4\end{pmatrix}.$$

Pe de altă parte $B(1) = \begin{pmatrix}2 & 1\\ -1 & 2\end{pmatrix}$, deci $2B(1) = \begin{pmatrix}4 & 2\\ -2 & 4\end{pmatrix}$. Matricele coincid.

*Barem: 3p calculul lui $A + 3I_2$, 2p identificarea cu $2B(1)$.*

#### c) Numerele reale $x$ pentru care $\det\big(B(2x) - B(x)\cdot A\big) = x^2$

**Pas 1.** $B(2x) = \begin{pmatrix}2 & 2x\\ -1 & 4x\end{pmatrix}$.

**Pas 2.** Produsul (linie × coloană):

$$B(x)\cdot A = \begin{pmatrix}2 & x\\ -1 & 2x\end{pmatrix}\begin{pmatrix}1 & 2\\ -2 & 1\end{pmatrix} = \begin{pmatrix}2 - 2x & 4 + x\\ -1 - 4x & -2 + 2x\end{pmatrix}.$$

**Pas 3.** Diferența:

$$B(2x) - B(x)\cdot A = \begin{pmatrix}2 - (2 - 2x) & 2x - (4 + x)\\ -1 - (-1 - 4x) & 4x - (-2 + 2x)\end{pmatrix} = \begin{pmatrix}2x & x - 4\\ 4x & 2x + 2\end{pmatrix}.$$

**Pas 4.** Determinantul:

$$2x(2x + 2) - 4x(x - 4) = 4x^2 + 4x - 4x^2 + 16x = 20x.$$

**Pas 5.** Ecuația $20x = x^2 \iff x(x - 20) = 0 \iff x \in \{0, 20\}$.

**Răspuns:** $x = 0$ sau $x = 20$. *Barem: 3p calculul matricei și al determinantului $20x$, 2p soluțiile.* Atenție: nu împărți la $x$ — ai pierde soluția $x = 0$.

### 2. Legea $x * y = xy - 8x - 8y + 8$

#### a) $0 * 1 = 0$

$$0 * 1 = 0 \cdot 1 - 8 \cdot 0 - 8 \cdot 1 + 8 = 0 - 0 - 8 + 8 = 0.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x * 2 = 2x$

$$x * 2 = 2x - 8x - 16 + 8 = -6x - 8.$$

Ecuația: $-6x - 8 = 2x \iff -8x = 8 \iff x = -1$.

**Verificare:** $(-1) * 2 = -2 + 8 - 16 + 8 = -2 = 2 \cdot (-1)$ ✔.

**Răspuns:** $x = -1$. *Barem: 3p expresia $x * 2$, 2p soluția.*

#### c) Perechile $(m, n)$ de numere naturale, $m < n$, cu $(8 + m) * (8 + n) = 2$

Legea se poate scrie mai comod: $xy - 8x - 8y + 64 = (x - 8)(y - 8)$, deci

$$x * y = (x - 8)(y - 8) - 56.$$

Atunci $(8 + m) * (8 + n) = mn - 56$. (Poți verifica și direct prin desfacerea parantezelor.)

Ecuația: $mn - 56 = 2 \iff mn = 58$.

Descompunem $58 = 2 \cdot 29$; divizorii naturali sunt $1, 2, 29, 58$. Cu $m < n$:

- $m = 1$, $n = 58$;
- $m = 2$, $n = 29$.

**Răspuns:** $(m, n) \in \{(1, 58),\ (2, 29)\}$. *Barem: 2p expresia $mn - 56$, 3p perechile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(-4, +\infty) \to \mathbb R$, $f(x) = \dfrac{4x + 7}{x + 4}$

#### a) $f'(x) = \dfrac{9}{(x + 4)^2}$

Regula câtului $\left(\dfrac uv\right)' = \dfrac{u'v - uv'}{v^2}$, cu $u = 4x + 7$, $v = x + 4$, $u' = 4$, $v' = 1$:

$$f'(x) = \frac{4(x + 4) - (4x + 7)\cdot 1}{(x + 4)^2} = \frac{4x + 16 - 4x - 7}{(x + 4)^2} = \frac{9}{(x + 4)^2}.$$

*Barem: 3p aplicarea regulii câtului, 2p simplificarea.*

#### b) Asimptota orizontală spre $+\infty$

Dăm factor comun $x$ la numărător și la numitor:

$$\lim_{x\to+\infty}\frac{4x + 7}{x + 4} = \lim_{x\to+\infty}\frac{x\left(4 + \frac7x\right)}{x\left(1 + \frac4x\right)} = \frac{4 + 0}{1 + 0} = 4.$$

Limita este finită, deci dreapta $y = 4$ este asimptota orizontală spre $+\infty$.

**Răspuns:** $y = 4$. *Barem: 3p limita, 2p concluzia.*

#### c) $a \in (-4, +\infty)$ pentru care panta tangentei în $A(a, f(a))$ este 1

Panta tangentei în punctul de abscisă $a$ este $f'(a)$. Condiția:

$$\frac{9}{(a + 4)^2} = 1 \iff (a + 4)^2 = 9 \iff a + 4 = 3 \ \text{sau}\ a + 4 = -3.$$

Obținem $a = -1$ sau $a = -7$. Dar $a$ trebuie să fie în domeniul $(-4, +\infty)$, deci $a = -7$ nu convine (altfel spus: $a + 4 > 0$, deci $a + 4 = 3$).

**Răspuns:** $a = -1$. *Barem: 2p condiția $f'(a) = 1$, 3p rezolvarea și alegerea soluției din domeniu.*

### 2. $f:(-3, +\infty) \to \mathbb R$, $f(x) = 2x + \sqrt{x + 3}$

#### a) $\displaystyle\int_1^2\left(f(x) - \sqrt{x + 3}\right)dx = 3$

Radicalul se reduce: $f(x) - \sqrt{x + 3} = 2x$.

$$\int_1^2 2x\,dx = x^2\Big|_1^2 = 4 - 1 = 3.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^6\frac{1}{f(x) - 2x}\,dx = 2$

Acum $f(x) - 2x = \sqrt{x + 3}$, deci integrăm $\dfrac{1}{\sqrt{x + 3}}$. Știm că $\left(\sqrt{u}\right)' = \dfrac{u'}{2\sqrt u}$, așa că $\left(2\sqrt{x + 3}\right)' = \dfrac{1}{\sqrt{x + 3}}$:

$$\int_1^6\frac{dx}{\sqrt{x + 3}} = 2\sqrt{x + 3}\,\Big|_1^6 = 2\sqrt9 - 2\sqrt4 = 6 - 4 = 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) Volumul corpului de rotație generat de $g(x) = \dfrac{x}{f(x) - 2x}$, $x \in [0, 6]$, este $9\pi\ln 3$

$g(x) = \dfrac{x}{\sqrt{x + 3}}$, deci $g^2(x) = \dfrac{x^2}{x + 3}$. Formula volumului:

$$V = \pi\int_0^6 g^2(x)\,dx = \pi\int_0^6\frac{x^2}{x + 3}\,dx.$$

Împărțim polinoamele: $x^2 = (x + 3)(x - 3) + 9$, deci

$$\frac{x^2}{x + 3} = x - 3 + \frac{9}{x + 3}.$$

$$V = \pi\left(\frac{x^2}{2} - 3x + 9\ln(x + 3)\right)\Big|_0^6 = \pi\big[(18 - 18 + 9\ln 9) - 9\ln 3\big] = \pi(18\ln3 - 9\ln3) = 9\pi\ln 3.$$

(Am folosit $\ln 9 = 2\ln 3$.) *Barem: 2p scrierea volumului, 3p calculul integralei.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_3 = 15$ |
| I.3 | $x = 1$ |
| I.4 | 80 de lei |
| I.5 | $AB = AC = 5\sqrt2$ |
| II.1.c | $x \in \{0, 20\}$ |
| II.2.b | $x = -1$ |
| II.2.c | $(1, 58)$ și $(2, 29)$ |
| III.1.b | $y = 4$ |
| III.1.c | $a = -1$ |
| III.2.c | $V = 9\pi\ln 3$ |

## Ce merită reținut din varianta 3

- **Legi de forma $xy - kx - ky + c$**: scrie-le ca $(x - k)(y - k) + (c - k^2)$; cerințele cu $(k + m) * (k + n)$ devin imediat $mn + \text{const}$.
- **Ecuații cu pătrate**: când rezolvi $(a + 4)^2 = 9$, păstrează doar soluțiile din domeniul funcției.
- **Volume de rotație**: $V = \pi\int g^2$; o fracție de tipul $\frac{x^2}{x + 3}$ se integrează după împărțirea polinoamelor.
