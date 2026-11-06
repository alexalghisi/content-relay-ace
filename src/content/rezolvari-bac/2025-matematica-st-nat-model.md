Rezolvarea completă a **modelului oficial** pentru **Bacalaureat 2025 la Matematică M_șt-nat** (filiera teoretică, profilul real, specializarea științe ale naturii). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie aritmetică: $a_1$, știind $a_3 = 19$ și $a_4 = 25$

Într-o progresie aritmetică, diferența dintre doi termeni consecutivi este rația: $r = a_4 - a_3 = 25 - 19 = 6$.

Termenul general este $a_n = a_1 + (n-1)r$, deci $a_3 = a_1 + 2r$, de unde

$$a_1 = a_3 - 2r = 19 - 12 = 7.$$

**Verificare:** $7, 13, 19, 25$ ✔.

**Răspuns:** $a_1 = 7$. *Barem: 3p rația, 2p $a_1$.*

### 2. $f(x) = 2x + a$, cu $f(2) = 8$

$f(2) = 2\cdot 2 + a = 4 + a$. Condiția: $4 + a = 8 \Rightarrow a = 4$.

**Răspuns:** $a = 4$. *Barem: 2p $f(2) = 4 + a$, 3p valoarea lui $a$.*

### 3. Ecuația exponențială $5^{2-x} - \dfrac{1}{625}\cdot 25^x = 0$

Scriem totul ca puteri ale lui 5: $625 = 5^4$, $25^x = 5^{2x}$, deci $\dfrac{1}{625}\cdot 25^x = 5^{2x-4}$.

Ecuația devine $5^{2-x} = 5^{2x-4}$. Funcția exponențială fiind injectivă, egalăm exponenții:

$$2 - x = 2x - 4 \iff 3x = 6 \iff x = 2.$$

**Verificare:** $5^0 - \dfrac{625}{625} = 1 - 1 = 0$ ✔.

**Răspuns:** $x = 2$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. Numărul submulțimilor cu două elemente ale lui $A = \{1, 2, 3, 4, 5, 6\}$

O submulțime cu 2 elemente înseamnă o alegere neordonată de 2 elemente din 6 — combinări:

$$C_6^2 = \frac{6!}{2!\,4!} = \frac{6\cdot 5}{2} = 15.$$

**Răspuns:** 15 submulțimi. *Barem: 3p formula combinărilor, 2p rezultatul.*

### 5. $A(2,2)$, $B(2,0)$, $C(8,2)$; lungimea $DE$, cu $D$, $E$ mijloacele lui $OA$, $BC$

Mijlocul unui segment are coordonatele mediile aritmetice ale capetelor:

$$D\left(\frac{0+2}{2}, \frac{0+2}{2}\right) = D(1,1), \qquad E\left(\frac{2+8}{2}, \frac{0+2}{2}\right) = E(5,1).$$

$$DE = \sqrt{(5-1)^2 + (1-1)^2} = \sqrt{16} = 4.$$

**Răspuns:** $DE = 4$. *Barem: 2p coordonatele lui $D$ și $E$, 3p lungimea.*

### 6. Triunghi dreptunghic în $A$, $AB = 6$, $B = \dfrac{\pi}{6}$: raza cercului circumscris este $2\sqrt3$

În triunghiul dreptunghic, cateta alăturată unghiului $B$ este $AB$, iar ipotenuza este $BC$:

$$\cos B = \frac{AB}{BC} \Rightarrow \frac{\sqrt3}{2} = \frac{6}{BC} \Rightarrow BC = \frac{12}{\sqrt3} = 4\sqrt3.$$

Într-un triunghi dreptunghic, centrul cercului circumscris este mijlocul ipotenuzei (unghiul drept este înscris într-un semicerc), deci

$$R = \frac{BC}{2} = 2\sqrt3.$$

*Barem: 3p $BC = 4\sqrt3$, 2p $R = 2\sqrt3$.* (Alternativ: teorema sinusurilor, $\dfrac{AC}{\sin B} = 2R$, cu $AC = AB\,\operatorname{tg} B = 2\sqrt3$.)

## Subiectul al II-lea (30 de puncte)

### 1. $I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$, $A = \begin{pmatrix}0 & -1\\ 2 & 4\end{pmatrix}$, $M(a) = \begin{pmatrix}a & 1\\ 2-2a & 2-a\end{pmatrix}$

#### a) $\det A = 2$

$$\det A = \begin{vmatrix}0 & -1\\ 2 & 4\end{vmatrix} = 0\cdot 4 - (-1)\cdot 2 = 0 + 2 = 2.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $x$ real cu $M(2)\cdot A = xM(1)$

$M(2) = \begin{pmatrix}2 & 1\\ -2 & 0\end{pmatrix}$ și $M(1) = \begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}$.

$$M(2)\cdot A = \begin{pmatrix}2 & 1\\ -2 & 0\end{pmatrix}\begin{pmatrix}0 & -1\\ 2 & 4\end{pmatrix} = \begin{pmatrix}2\cdot0 + 1\cdot2 & 2\cdot(-1) + 1\cdot4\\ -2\cdot0 + 0\cdot2 & (-2)(-1) + 0\cdot4\end{pmatrix} = \begin{pmatrix}2 & 2\\ 0 & 2\end{pmatrix} = 2M(1).$$

Deci $2M(1) = xM(1)$; cum $M(1) \ne O_2$, comparând de exemplu elementele de pe poziția $(1,1)$ obținem $x = 2$.

**Răspuns:** $x = 2$. *Barem: 3p produsul $M(2)A = 2M(1)$, 2p valoarea lui $x$.*

#### c) $a$ real cu $\left(M(a) - 2I_2\right)M(a) = (a+2)I_2$

$$M(a) - 2I_2 = \begin{pmatrix}a-2 & 1\\ 2-2a & -a\end{pmatrix}.$$

Înmulțim cu $M(a)$:

- poziția $(1,1)$: $(a-2)a + 1\cdot(2-2a) = a^2 - 2a + 2 - 2a = a^2 - 4a + 2$;
- poziția $(1,2)$: $(a-2)\cdot 1 + 1\cdot(2-a) = 0$;
- poziția $(2,1)$: $(2-2a)a + (-a)(2-2a) = 0$;
- poziția $(2,2)$: $(2-2a)\cdot 1 + (-a)(2-a) = 2 - 2a - 2a + a^2 = a^2 - 4a + 2$.

Deci $\left(M(a) - 2I_2\right)M(a) = (a^2 - 4a + 2)I_2$, pentru orice $a$. Egalitatea cerută devine

$$a^2 - 4a + 2 = a + 2 \iff a^2 - 5a = 0 \iff a(a-5) = 0 \iff a \in \{0, 5\}.$$

**Răspuns:** $a = 0$ sau $a = 5$. *Barem: 3p calculul produsului, 2p valorile lui $a$.*

### 2. Legea $x \circ y = (x-6)(y-6) + 6$

#### a) $9 \circ 8 = 12$

$$9 \circ 8 = (9-6)(8-6) + 6 = 3\cdot 2 + 6 = 12.$$

*Barem: 3p înlocuirea, 2p rezultatul.*

#### b) $e = 7$ este elementul neutru

Trebuie arătat că $x \circ 7 = 7 \circ x = x$ pentru orice $x$ real:

$$x \circ 7 = (x-6)(7-6) + 6 = x - 6 + 6 = x, \qquad 7 \circ x = (7-6)(x-6) + 6 = x.$$

Ambele egalități au loc pentru orice $x \in \mathbb R$ (legea este de altfel comutativă), deci $e = 7$ este elementul neutru. *Barem: 2p $x \circ 7 = x$, 3p $7 \circ x = x$ și concluzia.*

#### c) $x \ne 0$ cu $x \circ \dfrac{6}{x} = 6x$

$$x \circ \frac6x = (x-6)\left(\frac6x - 6\right) + 6 = (x-6)\cdot\frac{6(1-x)}{x} + 6.$$

Ecuația: $\dfrac{6(x-6)(1-x)}{x} + 6 = 6x$. Împărțim la 6 și înmulțim cu $x \ne 0$:

$$(x-6)(1-x) + x = x^2 \iff -x^2 + 7x - 6 + x = x^2 \iff 2x^2 - 8x + 6 = 0 \iff x^2 - 4x + 3 = 0.$$

Soluțiile: $x = 1$ și $x = 3$, ambele nenule, deci convin.

**Verificare:** $1 \circ 6 = (-5)\cdot 0 + 6 = 6 = 6\cdot 1$ ✔; $3 \circ 2 = (-3)(-4) + 6 = 18 = 6\cdot 3$ ✔.

**Răspuns:** $x \in \{1, 3\}$. *Barem: 2p expresia lui $x \circ \frac6x$, 3p soluțiile care convin.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = (x^2 - 5)\sqrt x$

#### a) $f'(x) = \dfrac{5(x-1)(x+1)}{2\sqrt x}$

Regula produsului, cu $(\sqrt x)' = \dfrac{1}{2\sqrt x}$:

$$f'(x) = 2x\sqrt x + (x^2 - 5)\cdot\frac{1}{2\sqrt x} = \frac{4x^2 + x^2 - 5}{2\sqrt x} = \frac{5x^2 - 5}{2\sqrt x} = \frac{5(x-1)(x+1)}{2\sqrt x}.$$

(Am adus la numitorul comun $2\sqrt x$: $2x\sqrt x = \dfrac{2x\sqrt x\cdot 2\sqrt x}{2\sqrt x} = \dfrac{4x^2}{2\sqrt x}$.) *Barem: 3p derivarea, 2p forma finală.*

#### b) $\displaystyle\lim_{x\to+\infty}\frac{f'(x)}{x\sqrt x} = \frac52$

$$\frac{f'(x)}{x\sqrt x} = \frac{5(x^2 - 1)}{2\sqrt x\cdot x\sqrt x} = \frac{5(x^2 - 1)}{2x^2} = \frac52\left(1 - \frac{1}{x^2}\right) \xrightarrow[x\to+\infty]{} \frac52,$$

pentru că $\sqrt x\cdot\sqrt x = x$ și $\dfrac{1}{x^2} \to 0$. *Barem: 3p simplificarea, 2p limita.*

#### c) $f(x+2) - f(x) \le 26$, pentru orice $x \in (0, 2]$

**Monotonia.** Pe $(0, +\infty)$ avem $x + 1 > 0$, $\sqrt x > 0$, deci semnul lui $f'$ este semnul lui $x - 1$: $f'(x) < 0$ pe $(0,1)$ și $f'(x) > 0$ pe $(1, +\infty)$. Așadar $f$ este descrescătoare pe $(0,1]$, crescătoare pe $[1, +\infty)$, iar $x = 1$ este punct de minim global: $f(x) \ge f(1) = (1-5)\cdot 1 = -4$.

**Majorarea lui $f(x+2)$.** Pentru $x \in (0,2]$ avem $x + 2 \in (2, 4]$, interval pe care $f$ e crescătoare, deci $f(x+2) \le f(4) = (16-5)\cdot 2 = 22$.

Combinând: $f(x+2) - f(x) \le 22 - (-4) = 26$, pentru orice $x \in (0,2]$. $\blacksquare$

*Barem: 2p monotonia lui $f$, 3p estimările $f(x) \ge f(1) = -4$, $f(x+2) \le f(4) = 22$ și concluzia.* Atenție: nu se cere ca $f(x+2) - f(x)$ să fie maximă în același punct — majorăm separat cei doi termeni.

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = x^2 + 4\ln x$

#### a) $\displaystyle\int_1^2 \left(f(x) - 4\ln x\right)dx = \frac73$

$f(x) - 4\ln x = x^2$, deci

$$\int_1^2 x^2\,dx = \frac{x^3}{3}\Big|_1^2 = \frac83 - \frac13 = \frac73.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^e \frac{f(x) - x^2}{x}\,dx = 2$

$\dfrac{f(x) - x^2}{x} = \dfrac{4\ln x}{x} = 4\ln x\cdot(\ln x)'$, iar o primitivă a lui $\ln x\cdot(\ln x)'$ este $\dfrac{\ln^2 x}{2}$:

$$\int_1^e \frac{4\ln x}{x}\,dx = 2\ln^2 x\Big|_1^e = 2\cdot 1^2 - 2\cdot 0 = 2.$$

(Echivalent: substituția $t = \ln x$, $dt = \dfrac{dx}{x}$, limitele devin $0$ și $1$: $\int_0^1 4t\,dt = 2$.) *Barem: 3p primitiva, 2p calculul.*

#### c) $m$ cu $\displaystyle\int_1^2 \left(f(x)f''(x) + \left(f'(x)\right)^2\right)dx = m\left(f(2) - f(1)\right)$

**Ideea cheie:** integrandul este derivata unui produs: $\left(f\cdot f'\right)' = f'\cdot f' + f\cdot f'' = f f'' + (f')^2$. Deci

$$\int_1^2 \left(f f'' + (f')^2\right)dx = f(x)f'(x)\Big|_1^2 = f(2)f'(2) - f(1)f'(1).$$

Derivata: $f'(x) = 2x + \dfrac4x$, deci $f'(1) = 2 + 4 = 6$ și $f'(2) = 4 + 2 = 6$. Atunci integrala este

$$6f(2) - 6f(1) = 6\left(f(2) - f(1)\right).$$

Egalitatea devine $6\left(f(2) - f(1)\right) = m\left(f(2) - f(1)\right)$. Cum $f(1) = 1$ și $f(2) = 4 + 4\ln 2 \ne 1$, putem împărți la $f(2) - f(1) \ne 0$ și obținem $m = 6$.

**Răspuns:** $m = 6$. *Barem: 3p integrala ca $f f'\big|_1^2$, 2p $f'(1) = f'(2) = 6$ și $m = 6$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_1 = 7$ |
| I.2 | $a = 4$ |
| I.3 | $x = 2$ |
| I.4 | 15 submulțimi |
| I.5 | $DE = 4$ |
| I.6 | $R = 2\sqrt3$ |
| II.1.b | $x = 2$ |
| II.1.c | $a \in \{0, 5\}$ |
| II.2.c | $x \in \{1, 3\}$ |
| III.1.b | $\dfrac52$ |
| III.2.c | $m = 6$ |

## Ce merită reținut din modelul 2025

- **Ecuații exponențiale**: aduci toți termenii la aceeași bază și egalezi exponenții.
- **Matrice cu parametru**: calculează produsul element cu element; de multe ori iese un multiplu al lui $I_2$.
- **Legi de forma** $(x-a)(y-a) + a$: elementul neutru este $a + 1$.
- **Inegalități cu funcții**: folosește monotonia pentru a majora și minora separat fiecare termen.
- **Integrale de forma** $\int (f f'' + f'^2)$: recunoaște derivata produsului $(f f')'$.
