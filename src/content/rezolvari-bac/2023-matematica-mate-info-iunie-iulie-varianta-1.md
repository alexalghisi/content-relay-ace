Rezolvarea completă a subiectului de **Bacalaureat 2023 la Matematică M_mate-info**, sesiunea iunie–iulie, **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z = 3 + i$: arătați că $z(z - 2i) = 10$

$z - 2i = 3 + i - 2i = 3 - i$, adică exact conjugatul lui $z$. Atunci:

$$z(z - 2i) = (3 + i)(3 - i) = 3^2 - i^2 = 9 - (-1) = 10.$$

*Barem: 3p scrierea produsului $(3+i)(3-i)$, 2p finalizarea.*

### 2. $f(x) = 5x + 1$: arătați că $f(2x) - 2f(x) = -1$ pentru orice $x$ real

$f(2x) = 5\cdot 2x + 1 = 10x + 1$ și $2f(x) = 2(5x + 1) = 10x + 2$. Deci

$$f(2x) - 2f(x) = 10x + 1 - 10x - 2 = -1,$$

pentru orice $x$ real. Atenție: $f(2x) \ne 2f(x)$ — $2$ intră în argument, nu în fața funcției. *Barem: 2p $f(2x)$, 3p calculul.*

### 3. Ecuația $\sqrt[3]{x^3 - 2x + 2} = x$

Radicalul de ordin impar există pentru orice număr real, deci nu avem condiții de existență și putem ridica la puterea a treia fără să pierdem sau să adăugăm soluții (funcția $t \mapsto t^3$ este bijectivă pe $\mathbb R$):

$$x^3 - 2x + 2 = x^3 \iff -2x + 2 = 0 \iff x = 1.$$

Verificare: $\sqrt[3]{1 - 2 + 2} = \sqrt[3]{1} = 1$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p ridicarea la cub și $-2x + 2 = 0$, 2p soluția.*

### 4. Probabilitatea ca $n + 5$ să fie multiplu de 10, $n$ număr de două cifre

**Cazuri posibile:** numerele de două cifre sunt $10, 11, \dots, 99$, adică $99 - 10 + 1 = 90$ numere.

**Cazuri favorabile:** $n + 5$ este multiplu de $10$ exact când $n$ se termină în cifra $5$: $n \in \{15, 25, 35, 45, 55, 65, 75, 85, 95\}$ — adică $9$ numere. (Numărul $5$ nu are două cifre, iar $105 - 5 = 100$ are trei.)

$$p = \frac{9}{90} = \frac{1}{10}.$$

**Răspuns:** $p = \dfrac{1}{10}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. Dreapta $d$ prin $O$, paralelă cu $AB$, $A(4,0)$, $B(5,4)$

Panta lui $AB$: $m_{AB} = \dfrac{4 - 0}{5 - 4} = 4$. Drepte paralele au pante egale, deci $m_d = 4$.

Ecuația dreptei prin $O(0,0)$ cu panta $4$: $y - 0 = 4(x - 0)$, adică

$$d:\ y = 4x.$$

**Răspuns:** $y = 4x$ (sau $4x - y = 0$). *Barem: 3p panta lui $d$, 2p ecuația.*

### 6. Triunghi isoscel dreptunghic în $A$, cu aria $4$: arătați că $BC = 4$

Fie $AD$ înălțimea din $A$. În triunghiul dreptunghic isoscel, înălțimea din $A$ este și mediană, iar mediana corespunzătoare ipotenuzei este jumătate din ipotenuză: $AD = \dfrac{BC}{2}$.

$$\mathcal A_{ABC} = \frac{AD\cdot BC}{2} = \frac{BC^2}{4} = 4 \Rightarrow BC^2 = 16 \Rightarrow BC = 4.$$

(Variantă: catetele $AB = AC = l$, aria $\dfrac{l^2}{2} = 4 \Rightarrow l = 2\sqrt2$, iar $BC = l\sqrt2 = 4$.) *Barem: 3p $AD = \frac{BC}{2}$, 2p aria și $BC = 4$.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}2 & 1 & 2\\ 1 & -1 & a\\ a & a+1 & -2\end{pmatrix}$ și sistemul $\begin{cases}2x + y + 2z = 2\\ x - y + az = 4\\ ax + (a+1)y - 2z = a\end{cases}$

#### a) $\det(A(0)) = 8$

$$\det(A(0)) = \begin{vmatrix}2 & 1 & 2\\ 1 & -1 & 0\\ 0 & 1 & -2\end{vmatrix}.$$

Sarrus: diagonala principală și paralelele: $2\cdot(-1)\cdot(-2) + 1\cdot 0\cdot 0 + 2\cdot 1\cdot 1 = 4 + 0 + 2 = 6$; diagonala secundară și paralelele: $2\cdot(-1)\cdot 0 + 2\cdot 0\cdot 1 + 1\cdot 1\cdot(-2) = 0 + 0 - 2 = -2$.

$$\det(A(0)) = 6 - (-2) = 8.$$

*Barem: 2p scrierea determinantului, 3p calculul.*

#### b) Valorile lui $a$ pentru care $A(a)$ este inversabilă

Calculăm $\det(A(a))$ cu Sarrus:

- termeni cu $+$: $2\cdot(-1)\cdot(-2) + 1\cdot a\cdot a + 2\cdot 1\cdot(a+1) = 4 + a^2 + 2a + 2$;
- termeni cu $-$: $2\cdot(-1)\cdot a + 2\cdot a\cdot(a+1) + 1\cdot 1\cdot(-2) = -2a + 2a^2 + 2a - 2 = 2a^2 - 2$.

$$\det(A(a)) = a^2 + 2a + 6 - 2a^2 + 2 = -a^2 + 2a + 8.$$

(Verificare: pentru $a = 0$ obținem $8$, ca la a) ✔.)

O matrice pătratică este inversabilă dacă și numai dacă determinantul ei este nenul. $-a^2 + 2a + 8 = 0 \iff a^2 - 2a - 8 = 0 \iff (a - 4)(a + 2) = 0 \iff a \in \{-2, 4\}$.

**Răspuns:** $a \in \mathbb R \setminus \{-2, 4\}$. *Barem: 2p determinantul, 3p mulțimea valorilor.*

#### c) Pentru $a = -2$: $x_0z_0 + y_0 = -2$ pentru orice soluție

Pentru $a = -2$, sistemul este

$$\begin{cases}2x + y + 2z = 2\\ x - y - 2z = 4\\ -2x - y - 2z = -2\end{cases}$$

A treia ecuație este prima înmulțită cu $-1$, deci o putem ignora (determinantul este $0$, sistemul nu este de tip Cramer). Adunând primele două ecuații: $3x = 6 \Rightarrow x = 2$. Din prima: $y + 2z = 2 - 4 = -2 \Rightarrow y = -2 - 2z$.

Sistemul este compatibil nedeterminat, cu soluțiile $(x_0, y_0, z_0) = (2,\ -2 - 2\alpha,\ \alpha)$, $\alpha \in \mathbb R$. Atunci

$$x_0z_0 + y_0 = 2\alpha + (-2 - 2\alpha) = -2,$$

pentru orice soluție. *Barem: 3p forma soluțiilor, 2p verificarea relației.*

### 2. Legea $x \circ y = xy + (2^x - 2)(2^y - 2)$

#### a) $2 \circ 3 = 18$

$$2 \circ 3 = 2\cdot 3 + (2^2 - 2)(2^3 - 2) = 6 + 2\cdot 6 = 6 + 12 = 18.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $e = 1$ este elementul neutru

Observăm că $2^1 - 2 = 0$, deci paranteza corespunzătoare lui $1$ anulează produsul:

$$x \circ 1 = x\cdot 1 + (2^x - 2)(2^1 - 2) = x + 0 = x, \qquad 1 \circ x = 1\cdot x + (2^1 - 2)(2^x - 2) = x,$$

pentru orice $x$ real. Deci $e = 1$ este element neutru. (Legea este comutativă, dar e bine să scrii ambele egalități.) *Barem: 2p $x \circ 1 = x$, 3p $1 \circ x = x$ și concluzia.*

#### c) $x \circ (-x) \le 1$ pentru orice $x$ real

$$x \circ (-x) = -x^2 + (2^x - 2)(2^{-x} - 2) = -x^2 + 2^x\cdot 2^{-x} - 2\cdot 2^x - 2\cdot 2^{-x} + 4 = -x^2 + 1 - 2\left(2^x + 2^{-x}\right) + 4.$$

Grupăm: $-2(2^x + 2^{-x}) + 4 = -2\left(2^x - 2 + \dfrac{1}{2^x}\right) = -2\left(\sqrt{2^x} - \dfrac{1}{\sqrt{2^x}}\right)^2$, deoarece $\left(\sqrt{2^x} - \frac{1}{\sqrt{2^x}}\right)^2 = 2^x - 2 + \frac{1}{2^x}$.

Deci

$$x \circ (-x) = 1 - x^2 - 2\left(\sqrt{2^x} - \frac{1}{\sqrt{2^x}}\right)^2 \le 1,$$

pentru că $x^2 \ge 0$ și pătratul este $\ge 0$. Egalitatea are loc doar pentru $x = 0$.

(Alternativ: din inegalitatea mediilor, $2^x + 2^{-x} \ge 2$, deci $-2(2^x + 2^{-x}) + 4 \le 0$.) *Barem: 2p dezvoltarea, 3p restrângerea în pătrate și concluzia.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(1, +\infty) \to \mathbb R$, $f(x) = x + 3\ln\dfrac{x+3}{x-1}$

#### a) $f'(x) = \dfrac{x^2 + 2x - 15}{(x-1)(x+3)}$

Pe $(1, +\infty)$ ambele paranteze sunt pozitive, deci $\ln\dfrac{x+3}{x-1} = \ln(x+3) - \ln(x-1)$. Derivăm:

$$f'(x) = 1 + 3\left(\frac{1}{x+3} - \frac{1}{x-1}\right) = 1 + \frac{3}{x+3} - \frac{3}{x-1}.$$

Aducem la numitor comun $(x+3)(x-1)$:

$$f'(x) = \frac{(x+3)(x-1) + 3(x-1) - 3(x+3)}{(x+3)(x-1)} = \frac{x^2 + 2x - 3 + 3x - 3 - 3x - 9}{(x+3)(x-1)} = \frac{x^2 + 2x - 15}{(x-1)(x+3)}.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Asimptota oblică spre $+\infty$

Căutăm $y = mx + n$.

$$m = \lim_{x\to+\infty}\frac{f(x)}{x} = \lim_{x\to+\infty}\left(1 + \frac3x\ln\frac{x+3}{x-1}\right) = 1 + 0\cdot\ln 1 = 1,$$

deoarece $\dfrac{x+3}{x-1} \to 1$, deci $\ln\dfrac{x+3}{x-1} \to 0$.

$$n = \lim_{x\to+\infty}(f(x) - x) = \lim_{x\to+\infty} 3\ln\frac{x+3}{x-1} = 3\ln 1 = 0.$$

**Răspuns:** asimptota oblică spre $+\infty$ este $y = x$. *Barem: 2p panta, 3p ordonata la origine și ecuația.*

#### c) $\ln\dfrac{x+3}{3(x-1)} \ge 1 - \dfrac{x}{3}$ pentru orice $x \in (1, +\infty)$

**Idee:** inegalitatea este de forma $f(x) \ge f(3)$. Într-adevăr, pentru $x > 1$:

$$\ln\frac{x+3}{3(x-1)} \ge 1 - \frac x3 \iff 3\ln\frac{x+3}{x-1} - 3\ln 3 \ge 3 - x \iff x + 3\ln\frac{x+3}{x-1} \ge 3 + 3\ln 3.$$

Iar $f(3) = 3 + 3\ln\dfrac{6}{2} = 3 + 3\ln 3$.

**Monotonia:** $x^2 + 2x - 15 = (x - 3)(x + 5)$, iar pe $(1, +\infty)$ avem $x + 5 > 0$ și $(x-1)(x+3) > 0$; deci semnul lui $f'$ este semnul lui $x - 3$.

| $x$ | $1$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | | ↘ | $3 + 3\ln3$ | ↗ | |

$f$ este descrescătoare pe $(1, 3]$ și crescătoare pe $[3, +\infty)$, deci $x = 3$ este punct de minim global: $f(x) \ge f(3) = 3 + 3\ln 3$ pentru orice $x > 1$, ceea ce, prin echivalențele de mai sus, este exact inegalitatea cerută.

*Barem: 3p monotonia și $f(x) \ge f(3)$, 2p transformarea în inegalitatea cerută.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = (x^2 + 2x)e^{-x}$

#### a) $\displaystyle\int_0^3 f(x)e^x\,dx = 18$

$f(x)e^x = (x^2 + 2x)e^{-x}e^x = x^2 + 2x$.

$$\int_0^3 (x^2 + 2x)\,dx = \left(\frac{x^3}{3} + x^2\right)\Big|_0^3 = \frac{27}{3} + 9 = 18.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 \frac{f(x)}{x+2}\,dx = \frac{e-2}{e}$

$x^2 + 2x = x(x+2)$, deci $\dfrac{f(x)}{x+2} = xe^{-x}$. Integrăm prin părți, cu $u = x$, $v' = e^{-x}$ ($v = -e^{-x}$):

$$\int_0^1 xe^{-x}\,dx = -xe^{-x}\Big|_0^1 + \int_0^1 e^{-x}\,dx = -\frac1e - e^{-x}\Big|_0^1 = -\frac1e - \frac1e + 1 = \frac{e - 2}{e}.$$

*Barem: 3p integrarea prin părți, 2p calculul.*

#### c) $\displaystyle\lim_{x\to0}\left(\frac{1}{x^2}\int_0^x f(t)\,dt\right) = 1$

Când $x \to 0$, $\int_0^x f(t)\,dt \to 0$ și $x^2 \to 0$: nedeterminare $\frac00$. Funcția $F(x) = \int_0^x f(t)\,dt$ este derivabilă, cu $F'(x) = f(x)$ ($f$ continuă). Aplicăm l'Hôpital:

$$\lim_{x\to0}\frac{\int_0^x f(t)\,dt}{x^2} = \lim_{x\to0}\frac{f(x)}{2x} = \lim_{x\to0}\frac{x(x+2)e^{-x}}{2x} = \lim_{x\to0}\frac{(x+2)e^{-x}}{2} = \frac{2\cdot 1}{2} = 1.$$

*Barem: 2p aplicarea regulii lui l'Hôpital, 3p calculul limitei.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $z(z-2i) = 10$ |
| I.3 | $x = 1$ |
| I.4 | $p = \frac{1}{10}$ |
| I.5 | $y = 4x$ |
| I.6 | $BC = 4$ |
| II.1.b | $a \in \mathbb R \setminus \{-2, 4\}$ |
| II.1.c | soluții $(2, -2-2\alpha, \alpha)$, $x_0z_0 + y_0 = -2$ |
| II.2.b | $e = 1$ |
| III.1.b | $y = x$ |
| III.2.b | $\frac{e-2}{e}$ |
| III.2.c | $1$ |

## Ce merită reținut din varianta 1

- **Radical de ordin impar**: nu are condiții de existență, iar ridicarea la cub este o echivalență.
- **Sisteme compatibile nedeterminate**: dacă o ecuație e combinație a celorlalte, exprimă soluțiile cu un parametru și verifică relația cerută.
- **Inegalități $f(x) \ge f(x_0)$**: recunoaște în inegalitate valoarea funcției într-un punct critic, apoi folosește monotonia.
- **Limite cu integrală la $x \to 0$**: l'Hôpital + derivata integralei cu limita superioară variabilă.
