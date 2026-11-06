Rezolvarea completă a subiectului de **Bacalaureat 2022 la Matematică M_mate-info**, sesiunea specială, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Număr complex: arătați că $5(1 + 2i) - 2i(5 - i) = 3$

Desfacem parantezele:

$$5(1+2i) - 2i(5-i) = 5 + 10i - 10i + 2i^2 = 5 + 2\cdot(-1) = 3.$$

Termenii în $i$ se reduc ($10i - 10i = 0$), iar $i^2 = -1$ transformă $2i^2$ în $-2$. Atenție la semn: $-2i\cdot(-i) = +2i^2$.

*Barem: 3p desfacerea parantezelor, 2p finalizarea.*

### 2. Funcția $f(x) = x^2 - 2x - 3$: determinați $a$ cu $f(a) = 1 + a^2$

$f(a) = a^2 - 2a - 3$, deci ecuația este

$$a^2 - 2a - 3 = 1 + a^2 \iff -2a = 4 \iff a = -2.$$

Termenul $a^2$ se reduce, așa că ecuația este de fapt de gradul I.

**Răspuns:** $a = -2$. *Barem: 3p scrierea ecuației, 2p rezolvarea.*

### 3. Ecuație logaritmică: $\log_3(2x^2 + 1) = 2$

**Condiții de existență:** $2x^2 + 1 > 0$, adevărat pentru orice $x$ real — nu apare nicio restricție.

Din definiția logaritmului: $2x^2 + 1 = 3^2 = 9 \iff 2x^2 = 8 \iff x^2 = 4 \iff x = \pm 2$.

**Verificare:** pentru $x = \pm 2$, $2\cdot 4 + 1 = 9$ și $\log_3 9 = 2$ ✔.

**Răspuns:** $x \in \{-2, 2\}$. *Barem: 3p ecuația $x^2 - 4 = 0$, 2p soluțiile care convin.*

### 4. Probabilitate: număr de două cifre cu cifrele impare și distincte

**Cazuri posibile:** numerele naturale de două cifre sunt $10, 11, \ldots, 99$, adică $99 - 10 + 1 = 90$ numere.

**Cazuri favorabile:** cifrele impare sunt $\{1, 3, 5, 7, 9\}$ (5 cifre). Cifra zecilor se alege în 5 moduri, iar cifra unităților, diferită de ea, în 4 moduri: $5 \cdot 4 = 20$ numere (aranjamente $A_5^2 = 20$). Prima cifră nu poate fi 0, dar oricum 0 nu e impar, deci nu trebuie exclus nimic.

$$p = \frac{20}{90} = \frac29.$$

**Răspuns:** $p = \dfrac29$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. Punctul $D$ cu $\overrightarrow{AB} = \overrightarrow{DC}$, $A(2,0)$, $B(1,6)$, $C(4,2)$

Metoda 1 (vectori): $\overrightarrow{AB} = (1-2,\ 6-0) = (-1, 6)$. Dacă $D(x, y)$, atunci $\overrightarrow{DC} = (4 - x,\ 2 - y)$. Egalând componentele: $4 - x = -1 \Rightarrow x = 5$ și $2 - y = 6 \Rightarrow y = -4$.

Metoda 2 (barem): $\overrightarrow{AB} = \overrightarrow{DC}$ înseamnă că $ABCD$ este paralelogram, deci diagonalele $AC$ și $BD$ au același mijloc. Mijlocul lui $AC$ este $\left(\frac{2+4}{2}, \frac{0+2}{2}\right) = (3, 1)$, deci $\frac{1 + x}{2} = 3$, $\frac{6+y}{2} = 1$, adică $D(5, -4)$.

**Răspuns:** $D(5, -4)$. *Barem: 2p observația că $ABCD$ e paralelogram (mijloc comun), 3p coordonatele.*

### 6. Triunghi dreptunghic în $A$, $BC = 10$, $\sin B = 2\sin C$: arătați că $AB = 2\sqrt5$

În triunghiul dreptunghic în $A$, ipotenuza este $BC$, iar sinusul unui unghi ascuțit este cateta opusă supra ipotenuză:

$$\sin B = \frac{AC}{BC}, \qquad \sin C = \frac{AB}{BC}.$$

Din $\sin B = 2\sin C$ obținem $AC = 2AB$. Teorema lui Pitagora: $AB^2 + AC^2 = BC^2 = 100$, deci $AB^2 + 4AB^2 = 100 \Rightarrow AB^2 = 20 \Rightarrow AB = \sqrt{20} = 2\sqrt5$ (lungimea e pozitivă).

*Barem: 2p relația $AC = 2AB$, 3p finalizarea cu Pitagora.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $I_3$, $O_3$ și $A(x) = \begin{pmatrix} x+1 & -x & 0\\ x & 1-x & 0\\ 0 & 0 & 1\end{pmatrix}$

#### a) $\det(A(1)) = 1$

$$A(1) = \begin{pmatrix} 2 & -1 & 0\\ 1 & 0 & 0\\ 0 & 0 & 1\end{pmatrix}, \qquad \det(A(1)) = \begin{vmatrix} 2 & -1 & 0\\ 1 & 0 & 0\\ 0 & 0 & 1\end{vmatrix}.$$

Cu regula lui Sarrus: $2\cdot0\cdot1 + (-1)\cdot0\cdot0 + 0\cdot1\cdot0 - 0\cdot0\cdot0 - 0\cdot0\cdot2 - 1\cdot1\cdot(-1) = 0 + 0 + 0 - 0 - 0 + 1 = 1$.

Mai rapid: dezvoltăm după linia a treia — $\det = 1\cdot\begin{vmatrix}2 & -1\\ 1 & 0\end{vmatrix} = 0 + 1 = 1$.

*Barem: 2p scrierea determinantului, 3p calculul.*

#### b) $(A(x) - I_3)(A(x) - I_3) = O_3$

Scădem $1$ de pe diagonala principală:

$$A(x) - I_3 = \begin{pmatrix} x & -x & 0\\ x & -x & 0\\ 0 & 0 & 0\end{pmatrix}.$$

Înmulțim (linie cu coloană):

- elementul $(1,1)$: $x\cdot x + (-x)\cdot x + 0 = x^2 - x^2 = 0$;
- elementul $(1,2)$: $x\cdot(-x) + (-x)(-x) + 0 = -x^2 + x^2 = 0$;
- linia a doua este identică cu prima, deci dă tot $0, 0, 0$;
- a treia coloană și a treia linie sunt nule.

Deci $(A(x) - I_3)^2 = O_3$ pentru orice $x$ real.

*Barem: 2p matricea $A(x) - I_3$, 3p produsul.*

#### c) $x$ real cu $A(x)\cdot A(x) = xA(x) - (x-1)I_3$

Notăm $B = A(x) - I_3$, deci $A(x) = B + I_3$. Cum $B$ comută cu $I_3$ și $B^2 = O_3$ (punctul b):

$$A(x)\cdot A(x) = (B + I_3)^2 = B^2 + 2B + I_3 = 2B + I_3 = 2(A(x) - I_3) + I_3 = 2A(x) - I_3.$$

Ecuația devine

$$2A(x) - I_3 = xA(x) - (x-1)I_3 \iff (2 - x)A(x) - (2 - x)I_3 = O_3 \iff (x - 2)\big(A(x) - I_3\big) = O_3.$$

Produsul este nul dacă $x - 2 = 0$ sau $A(x) - I_3 = O_3$. Din forma lui $A(x) - I_3$ de la b), aceasta e matricea nulă exact când $x = 0$.

**Răspuns:** $x \in \{0, 2\}$. *Barem: 2p $A(x)\cdot A(x) = 2A(x) - I_3$, 3p rezolvarea.* Greșeală frecventă: „simplificarea” cu $A(x) - I_3$ și pierderea soluției $x = 0$.

### 2. Legea $x * y = (x + y)^2 - 2(x - y) - 3$

#### a) $0 * 2 = 5$

$$0 * 2 = (0 + 2)^2 - 2(0 - 2) - 3 = 4 + 4 - 3 = 5.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x * (x + 1) = 8$

$$x * (x+1) = (2x + 1)^2 - 2\big(x - (x+1)\big) - 3 = 4x^2 + 4x + 1 + 2 - 3 = 4x^2 + 4x.$$

Ecuația: $4x^2 + 4x = 8 \iff x^2 + x - 2 = 0 \iff (x+2)(x-1) = 0$.

**Răspuns:** $x \in \{-2, 1\}$. *Barem: 2p expresia $4x^2 + 4x$, 3p soluțiile.*

#### c) Perechile $(m, n)$ de numere naturale cu $m * n = 2mn$

$$(m + n)^2 - 2(m - n) - 3 = 2mn \iff m^2 + 2mn + n^2 - 2m + 2n - 3 = 2mn \iff m^2 + n^2 - 2m + 2n - 3 = 0.$$

Formăm pătrate perfecte: $m^2 - 2m = (m-1)^2 - 1$ și $n^2 + 2n = (n+1)^2 - 1$, deci

$$(m - 1)^2 + (n + 1)^2 = 5.$$

Singura scriere a lui 5 ca sumă de două pătrate perfecte este $1 + 4$ (sau $4 + 1$). Cum $n \ge 0$, avem $n + 1 \ge 1$:

- $(n+1)^2 = 1$, $(m-1)^2 = 4$: $n = 0$, $m - 1 = \pm 2 \Rightarrow m = 3$ (căci $m = -1 \notin \mathbb N$);
- $(n+1)^2 = 4$, $(m-1)^2 = 1$: $n = 1$, $m - 1 = \pm 1 \Rightarrow m \in \{0, 2\}$.

Verificare pentru $(3, 0)$: $3 * 0 = 9 - 6 - 3 = 0 = 2\cdot 3\cdot 0$ ✔.

**Răspuns:** $(m, n) \in \{(0, 1), (2, 1), (3, 0)\}$. *Barem: 2p ecuația $m^2 + n^2 - 2m + 2n - 3 = 0$, 3p perechile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = (x^2 - 5x + 10)\sqrt{x}$

#### a) $f'(x) = \dfrac{5(x^2 - 3x + 2)}{2\sqrt x}$

Regula produsului, cu $(\sqrt x)' = \dfrac{1}{2\sqrt x}$:

$$f'(x) = (2x - 5)\sqrt x + (x^2 - 5x + 10)\cdot\frac{1}{2\sqrt x}.$$

Aducem la numitorul comun $2\sqrt x$ (folosind $\sqrt x \cdot 2\sqrt x = 2x$):

$$f'(x) = \frac{2x(2x - 5) + x^2 - 5x + 10}{2\sqrt x} = \frac{4x^2 - 10x + x^2 - 5x + 10}{2\sqrt x} = \frac{5x^2 - 15x + 10}{2\sqrt x} = \frac{5(x^2 - 3x + 2)}{2\sqrt x}.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Intervalele de monotonie

$f'(x) = 0 \iff x^2 - 3x + 2 = 0 \iff x \in \{1, 2\}$ (ambele în domeniu). Numitorul $2\sqrt x > 0$, deci semnul lui $f'$ este semnul trinomului $(x-1)(x-2)$: pozitiv în afara rădăcinilor, negativ între ele.

| $x$ | $0$ | | $1$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | | ↗ | $6$ | ↘ | $4\sqrt2$ | ↗ | |

**Răspuns:** $f$ este crescătoare pe $(0, 1]$, descrescătoare pe $[1, 2]$ și crescătoare pe $[2, +\infty)$. *Barem: 2p rădăcinile derivatei, 3p intervalele.*

#### c) $\displaystyle\lim_{x\to+\infty}\left(\frac{f(x)}{x^2\sqrt x}\right)^{\frac x5} = \frac1e$

Simplificăm cu $\sqrt x$:

$$\frac{f(x)}{x^2\sqrt x} = \frac{x^2 - 5x + 10}{x^2} = 1 + \frac{-5x + 10}{x^2}.$$

Baza tinde la $1$, exponentul la $+\infty$: nedeterminare $1^\infty$. Folosim limita fundamentală $\lim\limits_{u\to0}(1 + u)^{1/u} = e$, cu $u = \dfrac{-5x+10}{x^2} \to 0$:

$$\left(1 + \frac{-5x+10}{x^2}\right)^{\frac x5} = \left[\left(1 + \frac{-5x+10}{x^2}\right)^{\frac{x^2}{-5x+10}}\right]^{\frac{-5x+10}{x^2}\cdot\frac x5}.$$

Exponentul exterior: $\dfrac{-5x+10}{x^2}\cdot\dfrac{x}{5} = \dfrac{-5x + 10}{5x} \to -1$. Deci limita este $e^{-1} = \dfrac1e$.

*Barem: 3p aducerea la limita fundamentală, 2p finalizarea.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = x + e^x + \dfrac{1}{e^x + 1}$

#### a) $\displaystyle\int_0^2\left(f(x) - \frac{1}{e^x+1}\right)dx = e^2 + 1$

Integrandul devine $x + e^x$:

$$\int_0^2 (x + e^x)\,dx = \left(\frac{x^2}{2} + e^x\right)\Big|_0^2 = (2 + e^2) - (0 + 1) = e^2 + 1.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_{-1}^1 e^x\big(f(x) - x - e^x\big)dx = 1$

$f(x) - x - e^x = \dfrac{1}{e^x+1}$, deci integrandul este $\dfrac{e^x}{e^x + 1} = \dfrac{(e^x+1)'}{e^x+1}$, cu primitiva $\ln(e^x + 1)$:

$$\int_{-1}^1 \frac{e^x}{e^x+1}\,dx = \ln(e^x+1)\Big|_{-1}^1 = \ln(e + 1) - \ln\left(\frac1e + 1\right) = \ln(e+1) - \ln\frac{1 + e}{e} = \ln e = 1.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $m$ real cu $\displaystyle\int_0^1 x\big(f(x) + f(-x)\big)dx = \frac m2 - \frac2e$

Calculăm întâi suma. Termenii $x$ și $-x$ se reduc, iar

$$\frac{1}{e^x+1} + \frac{1}{e^{-x}+1} = \frac{1}{e^x+1} + \frac{e^x}{1 + e^x} = 1$$

(am amplificat a doua fracție cu $e^x$). Deci $f(x) + f(-x) = e^x + e^{-x} + 1$.

Integrăm prin părți, cu $\left(e^x - e^{-x} + x\right)' = e^x + e^{-x} + 1$:

$$\int_0^1 x\left(e^x + e^{-x} + 1\right)dx = x\left(e^x - e^{-x} + x\right)\Big|_0^1 - \int_0^1\left(e^x - e^{-x} + x\right)dx.$$

Primul termen: $e - \dfrac1e + 1$. Al doilea: $\left(e^x + e^{-x} + \dfrac{x^2}{2}\right)\Big|_0^1 = e + \dfrac1e + \dfrac12 - 2 = e + \dfrac1e - \dfrac32$.

$$\int_0^1 x\big(f(x) + f(-x)\big)dx = e - \frac1e + 1 - e - \frac1e + \frac32 = \frac52 - \frac2e.$$

Egalăm: $\dfrac52 - \dfrac2e = \dfrac m2 - \dfrac2e \Rightarrow m = 5$.

**Răspuns:** $m = 5$. *Barem: 3p calculul integralei, 2p valoarea lui $m$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = -2$ |
| I.3 | $x \in \{-2, 2\}$ |
| I.4 | $p = \tfrac29$ |
| I.5 | $D(5, -4)$ |
| II.1.c | $x \in \{0, 2\}$ |
| II.2.b | $x \in \{-2, 1\}$ |
| II.2.c | $(0,1)$, $(2,1)$, $(3,0)$ |
| III.1.b | crescătoare pe $(0,1]$ și $[2,+\infty)$, descrescătoare pe $[1,2]$ |
| III.2.c | $m = 5$ |

## Ce merită reținut din varianta 3

- **Matrice de forma $I_3 + B$ cu $B^2 = O_3$**: $(I_3 + B)^2 = I_3 + 2B$ — puterile devin liniare în $B$.
- **Ecuații diofantice cu pătrate**: grupează în pătrate perfecte și scrie constanta ca sumă de pătrate.
- **Nedeterminarea $1^\infty$**: scrie baza ca $1 + u$ cu $u \to 0$ și folosește $(1+u)^{1/u} \to e$.
- **Integrale cu $f(x) + f(-x)$**: $\dfrac{1}{e^x+1} + \dfrac{1}{e^{-x}+1} = 1$ — o simplificare clasică.
