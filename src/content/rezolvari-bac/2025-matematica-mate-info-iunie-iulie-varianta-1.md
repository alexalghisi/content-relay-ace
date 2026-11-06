Rezolvarea completă a subiectului de **Bacalaureat 2025 la Matematică M_mate-info**, sesiunea iunie–iulie, **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Numere complexe: arătați că $2z_1 + iz_2 = 1$, pentru $z_1 = 1 - i$, $z_2 = 2 + i$

Înlocuim și desfacem parantezele:

$$2z_1 + iz_2 = 2(1 - i) + i(2 + i) = 2 - 2i + 2i + i^2.$$

Termenii în $i$ se reduc, iar $i^2 = -1$:

$$2z_1 + iz_2 = 2 - 1 = 1.$$

*Barem: 2p calculul expresiei, 3p finalizarea.*

### 2. Funcția $f(x) = x + 3$: determinați $a$ cu $(f \circ f)(a) = 9$

Compunerea înseamnă „aplică $f$ de două ori”: $(f\circ f)(a) = f(f(a))$.

$f(a) = a + 3$, apoi $f(a + 3) = (a + 3) + 3 = a + 6$.

Ecuația devine $a + 6 = 9$, deci $a = 3$.

**Răspuns:** $a = 3$. *Barem: 3p expresia lui $(f\circ f)(a)$, 2p rezolvarea ecuației.*

### 3. Ecuație irațională: $\sqrt{2x^2 - 3x + 2} = x$

**Condiții:** membrul stâng este un radical, deci $\ge 0$; trebuie așadar $x \ge 0$. (Expresia de sub radical are $\Delta = 9 - 16 < 0$, deci $2x^2 - 3x + 2 > 0$ pentru orice $x$.)

Ridicăm la pătrat: $2x^2 - 3x + 2 = x^2 \iff x^2 - 3x + 2 = 0 \iff (x - 1)(x - 2) = 0$, deci $x_1 = 1$, $x_2 = 2$.

**Verificare:** $x = 1$: $\sqrt{2 - 3 + 2} = \sqrt1 = 1$ ✔; $x = 2$: $\sqrt{8 - 6 + 2} = \sqrt4 = 2$ ✔.

**Răspuns:** $x \in \{1, 2\}$. *Barem: 2p ecuația $x^2 - 3x + 2 = 0$, 3p soluțiile, cu precizarea că ele convin.*

### 4. Probabilitatea ca un număr natural de două cifre să fie divizor al lui $2^6$

**Cazuri posibile:** numerele de două cifre sunt $10, 11, \dots, 99$, adică $99 - 10 + 1 = 90$ de numere.

**Cazuri favorabile:** divizorii lui $2^6 = 64$ sunt $1, 2, 4, 8, 16, 32, 64$. Dintre ei, au două cifre doar $16, 32, 64$ — adică 3 cazuri.

$$p = \frac{\text{cazuri favorabile}}{\text{cazuri posibile}} = \frac{3}{90} = \frac{1}{30}.$$

**Răspuns:** $p = \dfrac{1}{30}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(0,1)$, $B(5,0)$, $C(6,3)$, $D(a,b)$; segmentele $AC$ și $BD$ au același mijloc

Mijlocul unui segment are coordonatele egale cu media coordonatelor capetelor.

- Mijlocul lui $AC$: $\left(\dfrac{0+6}{2}, \dfrac{1+3}{2}\right) = (3, 2)$.
- Mijlocul lui $BD$: $\left(\dfrac{5+a}{2}, \dfrac{0+b}{2}\right)$.

Egalăm: $\dfrac{5+a}{2} = 3 \Rightarrow a = 1$ și $\dfrac{b}{2} = 2 \Rightarrow b = 4$.

(Geometric: diagonalele $AC$ și $BD$ se înjumătățesc, deci $ABCD$ este paralelogram.)

**Răspuns:** $a = 1$, $b = 4$. *Barem: 3p coordonatele celor două mijloace, 2p valorile lui $a$ și $b$.*

### 6. Triunghi dreptunghic în $A$, $AB = 2$, $\operatorname{tg} B = 3$; arătați că $BC = 2\sqrt{10}$

Într-un triunghi dreptunghic, tangenta unui unghi ascuțit = cateta opusă / cateta alăturată. Pentru unghiul $B$: cateta opusă este $AC$, cea alăturată este $AB$.

$$\operatorname{tg} B = \frac{AC}{AB} \Rightarrow 3 = \frac{AC}{2} \Rightarrow AC = 6.$$

Teorema lui Pitagora (ipotenuza este $BC$, opusă unghiului drept):

$$BC^2 = AB^2 + AC^2 = 4 + 36 = 40 \Rightarrow BC = \sqrt{40} = 2\sqrt{10}.$$

*Barem: 3p $AC = 6$, 2p calculul lui $BC$.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricea $A(x) = \begin{pmatrix}2 - 3x & 0 & x\\ 0 & 2 & 0\\ -9x & 0 & 2 + 3x\end{pmatrix}$

#### a) $\det(A(1)) = 8$

$$A(1) = \begin{pmatrix}-1 & 0 & 1\\ 0 & 2 & 0\\ -9 & 0 & 5\end{pmatrix}.$$

Cu regula lui Sarrus:

$$\det(A(1)) = (-1)\cdot2\cdot5 + 0 + 0 - \big(1\cdot2\cdot(-9)\big) - 0 - 0 = -10 + 18 = 8.$$

(Mai rapid: dezvoltând după linia a doua, $\det = 2\cdot\begin{vmatrix}-1 & 1\\ -9 & 5\end{vmatrix} = 2(-5 + 9) = 8$.) *Barem: 2p scrierea determinantului, 3p calculul.*

#### b) $A(x)\cdot A(y) = 2A(x+y)$

Calculăm produsul element cu element (linie × coloană):

- poziția $(1,1)$: $(2-3x)(2-3y) + 0 + x\cdot(-9y) = 4 - 6x - 6y + 9xy - 9xy = 4 - 6x - 6y$;
- poziția $(1,3)$: $(2-3x)y + 0 + x(2+3y) = 2y - 3xy + 2x + 3xy = 2x + 2y$;
- poziția $(2,2)$: $2\cdot2 = 4$; pozițiile din coloana/linia a doua, în rest, sunt $0$;
- poziția $(3,1)$: $-9x(2-3y) + 0 + (2+3x)(-9y) = -18x + 27xy - 18y - 27xy = -18x - 18y$;
- poziția $(3,3)$: $-9x\cdot y + (2+3x)(2+3y) = -9xy + 4 + 6x + 6y + 9xy = 4 + 6x + 6y$.

Deci

$$A(x)A(y) = \begin{pmatrix}4 - 6(x+y) & 0 & 2(x+y)\\ 0 & 4 & 0\\ -18(x+y) & 0 & 4 + 6(x+y)\end{pmatrix} = 2\begin{pmatrix}2 - 3(x+y) & 0 & x+y\\ 0 & 2 & 0\\ -9(x+y) & 0 & 2 + 3(x+y)\end{pmatrix} = 2A(x+y).$$

Observă că termenii în $xy$ se anulează peste tot — de aceea rezultatul depinde doar de $x + y$. *Barem: 3p calculul produsului, 2p identificarea cu $2A(x+y)$.*

#### c) $x$ real pentru care $\big(A(x) + A(3x)\big)\cdot A(2x) = 4A(x^2)$

**Pas 1.** Elementele lui $A(t)$ depind de gradul întâi în $t$, deci $A(x) + A(3x)$ are pe fiecare poziție dublul elementului lui $A(2x)$ (de exemplu $(2-3x) + (2-9x) = 2(2 - 6x)$, $x + 3x = 2\cdot 2x$). Așadar $A(x) + A(3x) = 2A(2x)$.

**Pas 2.** Folosind b): $\big(A(x) + A(3x)\big)A(2x) = 2A(2x)A(2x) = 2\cdot 2A(4x) = 4A(4x)$.

**Pas 3.** Ecuația devine $4A(4x) = 4A(x^2)$, adică $A(4x) = A(x^2)$. Comparând elementele de pe poziția $(1,3)$: $4x = x^2 \iff x(x - 4) = 0$, deci $x = 0$ sau $x = 4$ (și atunci toate elementele coincid).

**Răspuns:** $x \in \{0, 4\}$. *Barem: 3p $A(x) + A(3x) = 2A(2x)$ și produsul $4A(4x)$, 2p rezolvarea $4x = x^2$.*

### 2. Polinomul $f = aX^3 + 3X^2 - aX - 6$, $a \ne 0$

#### a) $f(1) = -3$ pentru orice $a$ nenul

$$f(1) = a\cdot1^3 + 3\cdot1^2 - a\cdot1 - 6 = a + 3 - a - 6 = -3.$$

Parametrul $a$ se reduce, deci rezultatul nu depinde de $a$. *Barem: 3p înlocuirea, 2p finalizarea.*

#### b) Pentru $a = 1$: câtul și restul împărțirii lui $f$ la $g = X^2 + 3X - 1$

Pentru $a = 1$: $f = X^3 + 3X^2 - X - 6$. Observăm că primii trei termeni au factor comun $X$:

$$X^3 + 3X^2 - X = X(X^2 + 3X - 1) = X\cdot g,$$

deci $f = X\cdot g + (-6)$. Cum $-6$ are gradul $0 < 2 = \operatorname{grad} g$, aceasta este chiar teorema împărțirii cu rest.

**Răspuns:** câtul $q = X$, restul $r = -6$. *Barem: 3p câtul, 2p restul.*

#### c) $a$ nenul pentru care $(1 + x_1)(1 + x_2)(1 + x_3) = 1$

Polinomul se scrie descompus: $f = a(X - x_1)(X - x_2)(X - x_3)$. Calculăm în $X = -1$:

$$f(-1) = a(-1 - x_1)(-1 - x_2)(-1 - x_3) = -a(1 + x_1)(1 + x_2)(1 + x_3).$$

Deci $(1 + x_1)(1 + x_2)(1 + x_3) = -\dfrac{f(-1)}{a}$.

Iar $f(-1) = -a + 3 + a - 6 = -3$, deci produsul este $-\dfrac{-3}{a} = \dfrac{3}{a}$.

Condiția: $\dfrac{3}{a} = 1 \Rightarrow a = 3$.

(Se poate lucra și cu relațiile lui Viète: produsul dezvoltat este $1 + S_1 + S_2 + S_3 = 1 - \frac3a - 1 + \frac6a = \frac3a$ — același rezultat.)

**Răspuns:** $a = 3$. *Barem: 3p exprimarea produsului prin $f(-1)$, 2p valoarea lui $a$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = 2x + \ln\dfrac{x}{x+2}$

#### a) $f'(x) = \dfrac{2(x+1)^2}{x(x+2)}$

Derivata lui $\ln u$ este $\dfrac{u'}{u}$. Cu $u = \dfrac{x}{x+2}$: $u' = \dfrac{(x+2) - x}{(x+2)^2} = \dfrac{2}{(x+2)^2}$, deci

$$\left(\ln\frac{x}{x+2}\right)' = \frac{x+2}{x}\cdot\frac{2}{(x+2)^2} = \frac{2}{x(x+2)}.$$

(Echivalent: $\ln\frac{x}{x+2} = \ln x - \ln(x+2)$, cu derivata $\frac1x - \frac1{x+2} = \frac{2}{x(x+2)}$.)

$$f'(x) = 2 + \frac{2}{x(x+2)} = \frac{2x^2 + 4x + 2}{x(x+2)} = \frac{2(x+1)^2}{x(x+2)}.$$

*Barem: 3p derivarea, 2p aducerea la forma cerută.*

#### b) Asimptota oblică spre $+\infty$

Căutăm $y = mx + n$:

$$m = \lim_{x\to+\infty}\frac{f(x)}{x} = \lim_{x\to+\infty}\left(2 + \frac1x\ln\frac{x}{x+2}\right) = 2 + 0\cdot\ln 1 = 2,$$

deoarece $\dfrac{x}{x+2} \to 1$, deci $\ln\dfrac{x}{x+2} \to 0$.

$$n = \lim_{x\to+\infty}\big(f(x) - 2x\big) = \lim_{x\to+\infty}\ln\frac{x}{x+2} = \ln 1 = 0.$$

**Răspuns:** asimptota oblică spre $+\infty$ este $y = 2x$. *Barem: 2p panta $m = 2$, 3p $n = 0$ și concluzia.*

#### c) $f$ este bijectivă

**Injectivitate.** Pentru $x > 0$: $(x+1)^2 > 0$, $x > 0$, $x + 2 > 0$, deci $f'(x) > 0$. Funcția este strict crescătoare pe $(0, +\infty)$, așadar injectivă (valori diferite ale lui $x$ dau valori diferite ale lui $f$).

**Surjectivitate.** Limitele la capete:

- $x \to 0^+$: $2x \to 0$, iar $\dfrac{x}{x+2} \to 0^+$, deci $\ln\dfrac{x}{x+2} \to -\infty$; așadar $\lim\limits_{x\to0^+}f(x) = -\infty$.
- $x \to +\infty$: $2x \to +\infty$ și $\ln\dfrac{x}{x+2} \to 0$, deci $\lim\limits_{x\to+\infty}f(x) = +\infty$.

$f$ este continuă (compunere și sumă de funcții continue) și strict crescătoare, deci, prin proprietatea lui Darboux, ia toate valorile dintre $-\infty$ și $+\infty$: $\operatorname{Im} f = \mathbb R$. Deci $f$ este surjectivă.

Injectivă + surjectivă $\Rightarrow$ $f$ este **bijectivă**. *Barem: 2p injectivitatea, 3p surjectivitatea și concluzia.*

### 2. $f:(-1, +\infty) \to \mathbb R$, $f(x) = \dfrac{x^2}{(x+1)^3}$

#### a) $\displaystyle\int_0^3 f(x)(x+1)^3\,dx = 9$

Produsul se simplifică: $f(x)(x+1)^3 = x^2$.

$$\int_0^3 x^2\,dx = \frac{x^3}{3}\Big|_0^3 = \frac{27}{3} - 0 = 9.$$

*Barem: 3p simplificarea și primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 \sqrt{f(x)(x+1)}\,dx = 1 - \ln 2$

$f(x)(x+1) = \dfrac{x^2}{(x+1)^2}$, iar pe $[0, 1]$ avem $x \ge 0$ și $x + 1 > 0$, deci

$$\sqrt{\frac{x^2}{(x+1)^2}} = \frac{|x|}{x+1} = \frac{x}{x+1} = 1 - \frac{1}{x+1}.$$

(Atenție la $\sqrt{x^2} = |x|$ — aici modulul dispare pentru că $x \ge 0$.)

$$\int_0^1\left(1 - \frac{1}{x+1}\right)dx = \Big(x - \ln(x+1)\Big)\Big|_0^1 = (1 - \ln 2) - (0 - \ln 1) = 1 - \ln 2.$$

*Barem: 3p simplificarea radicalului și primitiva, 2p calculul.*

#### c) Aria delimitată de graficul lui $g(x) = \dfrac{f(e^x)}{e^x}$, axa $Ox$ și dreptele $x = -1$, $x = 1$ este $\dfrac{e-1}{2(e+1)}$

**Expresia lui $g$.** $e^x > 0 > -1$, deci $f(e^x)$ există:

$$g(x) = \frac{1}{e^x}\cdot\frac{e^{2x}}{(e^x + 1)^3} = \frac{e^x}{(e^x + 1)^3} > 0.$$

Cum $g > 0$, aria este chiar integrala (fără modul):

$$\mathcal A = \int_{-1}^{1}\frac{e^x}{(e^x + 1)^3}\,dx.$$

**Primitiva.** Numărătorul $e^x$ este derivata lui $e^x + 1$, deci integrandul are forma $u'\cdot u^{-3}$, cu primitiva $\dfrac{u^{-2}}{-2}$:

$$\mathcal A = -\frac{1}{2(e^x + 1)^2}\Big|_{-1}^{1} = -\frac{1}{2(e+1)^2} + \frac{1}{2(e^{-1}+1)^2}.$$

Simplificăm: $e^{-1} + 1 = \dfrac{1 + e}{e}$, deci $\dfrac{1}{(e^{-1}+1)^2} = \dfrac{e^2}{(e+1)^2}$. Atunci

$$\mathcal A = \frac{e^2 - 1}{2(e+1)^2} = \frac{(e-1)(e+1)}{2(e+1)^2} = \frac{e-1}{2(e+1)}.$$

*Barem: 3p expresia lui $g$ și primitiva, 2p calculul final.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $2z_1 + iz_2 = 1$ |
| I.2 | $a = 3$ |
| I.3 | $x \in \{1, 2\}$ |
| I.4 | $p = \dfrac{1}{30}$ |
| I.5 | $a = 1$, $b = 4$ |
| I.6 | $AC = 6$, $BC = 2\sqrt{10}$ |
| II.1.c | $x \in \{0, 4\}$ |
| II.2.b | cât $X$, rest $-6$ |
| II.2.c | $a = 3$ |
| III.1.b | $y = 2x$ |
| III.2.c | $\dfrac{e-1}{2(e+1)}$ |

## Ce merită reținut din varianta 1

- **Matrice de forma $A(x)$ cu $A(x)A(y) = kA(x+y)$**: odată demonstrată relația, folosește-o la punctul c) în loc să înmulțești din nou matricele.
- **Produse de forma $(c + x_1)(c + x_2)(c + x_3)$**: se obțin rapid din $f(-c)$ și coeficientul dominant.
- **Bijectivitate**: strict monotonă (injectivă) + continuă cu limitele $-\infty$ și $+\infty$ la capete (surjectivă).
- **$\sqrt{x^2} = |x|$**: verifică semnul pe intervalul de integrare înainte să scoți modulul.
