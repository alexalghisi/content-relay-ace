Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_șt-nat**, sesiunea august–septembrie, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $2 - 5i + i(5 - 3i) = 5$

Desfacem paranteza: $i(5 - 3i) = 5i - 3i^2$. Cum $i^2 = -1$, avem $-3i^2 = 3$.

$$2 - 5i + 5i - 3i^2 = 2 + 0\cdot i + 3 = 5.$$

Partea imaginară se reduce ($-5i + 5i = 0$), deci rezultatul este real. *Barem: 3p desfacerea parantezei, 2p finalizarea.*

### 2. $f(x) = 6x + m$: determinați $m$ cu $f(2) = 15$

$f(2) = 6\cdot 2 + m = 12 + m$. Din $12 + m = 15$ obținem $m = 3$.

**Răspuns:** $m = 3$. *Barem: 3p scrierea lui $f(2)$ și a ecuației, 2p rezolvarea.*

### 3. Ecuația exponențială $7^{2x+1} = 7^x \cdot 7^2$

Membrul drept, după regula $a^m\cdot a^n = a^{m+n}$: $7^x\cdot 7^2 = 7^{x+2}$. Ecuația devine $7^{2x+1} = 7^{x+2}$.

Funcția exponențială de bază $7$ este injectivă, deci exponenții sunt egali:

$$2x + 1 = x + 2 \iff x = 1.$$

**Verificare:** $7^3 = 7\cdot 49 = 343$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. Probabilitatea ca un număr de două cifre să aibă cel puțin o cifră egală cu 1

**Cazuri posibile:** numerele de două cifre sunt $10, 11, \dots, 99$, adică $99 - 10 + 1 = 90$ numere.

**Cazuri favorabile:** numărăm numerele care conțin cifra 1:
- cifra zecilor egală cu 1: $10, 11, \dots, 19$ — 10 numere;
- cifra unităților egală cu 1, dar cifra zecilor diferită de 1: $21, 31, \dots, 91$ — 8 numere (numărul $11$ a fost deja numărat).

Total: $10 + 8 = 18$ cazuri favorabile.

$$p = \frac{18}{90} = \frac15.$$

**Răspuns:** $p = \dfrac15$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.* Greșeala frecventă: să numeri $11$ de două ori și să obții 19.

### 5. Distanța de la $A(2,5)$ la mijlocul segmentului $OB$, $B(4,2)$

Mijlocul $M$ al lui $OB$, cu $O(0,0)$: $x_M = \dfrac{0 + 4}{2} = 2$, $y_M = \dfrac{0 + 2}{2} = 1$, deci $M(2,1)$.

$$AM = \sqrt{(2-2)^2 + (5-1)^2} = \sqrt{16} = 4.$$

**Răspuns:** $AM = 4$. *Barem: 3p coordonatele lui $M$, 2p distanța.*

### 6. Triunghi dreptunghic în $A$, $AB = 5$, $BC = 5\sqrt5$: arătați că $\sin C = \dfrac{\sqrt5}{5}$

În triunghiul dreptunghic, sinusul unui unghi ascuțit este cateta opusă supra ipotenuză. Opusă unghiului $C$ este cateta $AB$, iar ipotenuza este $BC$:

$$\sin C = \frac{AB}{BC} = \frac{5}{5\sqrt5} = \frac{1}{\sqrt5} = \frac{\sqrt5}{5}.$$

(Ultimul pas este raționalizarea numitorului: înmulțim cu $\sqrt5$ sus și jos.) *Barem: 3p formula sinusului, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $I_2$, $A = \begin{pmatrix}2 & -1\\ 1 & 0\end{pmatrix}$ și $B(x) = \begin{pmatrix}x & x-3\\ 3-x & x-4\end{pmatrix}$

#### a) $\det A = 1$

$$\det A = \begin{vmatrix}2 & -1\\ 1 & 0\end{vmatrix} = 2\cdot 0 - (-1)\cdot 1 = 0 + 1 = 1.$$

*Barem: 3p formula determinantului de ordin 2, 2p calculul.*

#### b) $a$ pentru care $B(4)\cdot B(4) + I_2 = aB(4)$

$B(4) = \begin{pmatrix}4 & 1\\ -1 & 0\end{pmatrix}$. Calculăm produsul linie cu coloană:

$$B(4)\cdot B(4) = \begin{pmatrix}4\cdot4 + 1\cdot(-1) & 4\cdot1 + 1\cdot0\\ -1\cdot4 + 0\cdot(-1) & -1\cdot1 + 0\cdot0\end{pmatrix} = \begin{pmatrix}15 & 4\\ -4 & -1\end{pmatrix}.$$

Adunăm $I_2$: $B(4)\cdot B(4) + I_2 = \begin{pmatrix}16 & 4\\ -4 & 0\end{pmatrix} = 4\begin{pmatrix}4 & 1\\ -1 & 0\end{pmatrix} = 4B(4)$.

Egalitatea $4B(4) = aB(4)$, cu $B(4) \ne O_2$, dă (comparând de exemplu elementul de pe poziția (1,2)) $a = 4$.

**Răspuns:** $a = 4$. *Barem: 3p calculul lui $B(4)\cdot B(4)$, 2p identificarea lui $a$.*

#### c) $x$ pentru care $A\cdot B(x) = B(x)\cdot A$

$$A\cdot B(x) = \begin{pmatrix}2x - (3-x) & 2(x-3) - (x-4)\\ x & x - 3\end{pmatrix} = \begin{pmatrix}3x - 3 & x - 2\\ x & x - 3\end{pmatrix},$$

$$B(x)\cdot A = \begin{pmatrix}2x + (x-3) & -x\\ 2(3-x) + (x-4) & -(3-x)\end{pmatrix} = \begin{pmatrix}3x - 3 & -x\\ 2 - x & x - 3\end{pmatrix}.$$

Egalăm elementele corespunzătoare: diagonala coincide; din poziția (1,2): $x - 2 = -x \Rightarrow x = 1$; din poziția (2,1): $x = 2 - x \Rightarrow x = 1$. Ambele condiții dau aceeași valoare.

**Răspuns:** $x = 1$. *Barem: 3p cele două produse, 2p valoarea lui $x$.*

### 2. Legea $x * y = (x + y)(4 - x - y)$

#### a) $0 * 3 = 3$

$$0 * 3 = (0 + 3)(4 - 0 - 3) = 3\cdot 1 = 3.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x * 1 = 0$

$x * 1 = (x + 1)(4 - x - 1) = (x + 1)(3 - x)$. Un produs este zero dacă unul dintre factori e zero:

$$(x+1)(3-x) = 0 \iff x = -1 \text{ sau } x = 3.$$

**Răspuns:** $x \in \{-1, 3\}$. *Barem: 2p expresia lui $x * 1$, 3p soluțiile.*

#### c) $n$ natural pentru care $N = (n+5) * (n-5)$ este natural

Suma celor două elemente: $(n + 5) + (n - 5) = 2n$. Deci

$$N = 2n(4 - 2n) = 4n(2 - n).$$

Pentru $n \in \mathbb N$, $4n \ge 0$, deci $N \ge 0$ dacă și numai dacă $n = 0$ sau $2 - n \ge 0$, adică $n \le 2$. Valorile: $n = 0 \Rightarrow N = 0$; $n = 1 \Rightarrow N = 4$; $n = 2 \Rightarrow N = 0$ — toate naturale. Pentru $n \ge 3$, $N = -4n(n-2) < 0$.

**Răspuns:** $n \in \{0, 1, 2\}$. *Barem: 2p expresia $4n(2-n)$, 3p valorile lui $n$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(-1, +\infty) \to \mathbb R$, $f(x) = x^2 - x - 2\ln(x+1)$

#### a) $f'(x) = \dfrac{2x^2 + x - 3}{x+1}$

Derivăm termen cu termen; $(\ln(x+1))' = \dfrac{1}{x+1}$:

$$f'(x) = 2x - 1 - \frac{2}{x+1} = \frac{(2x-1)(x+1) - 2}{x+1} = \frac{2x^2 + 2x - x - 1 - 2}{x+1} = \frac{2x^2 + x - 3}{x+1}.$$

*Barem: 3p derivata, 2p aducerea la forma cerută.*

#### b) Tangenta în punctul de abscisă $x = 0$

$f(0) = 0 - 0 - 2\ln 1 = 0$ și $f'(0) = \dfrac{-3}{1} = -3$.

Ecuația tangentei: $y - f(0) = f'(0)(x - 0)$, adică $y = -3x$.

**Răspuns:** $y = -3x$. *Barem: 2p $f(0)$ și $f'(0)$, 3p ecuația tangentei.*

#### c) $x^2 - x \ge 2\ln\dfrac{x+1}{2}$ pentru orice $x > -1$

Factorizăm numărătorul derivatei: $2x^2 + x - 3 = (x - 1)(2x + 3)$. Pe $(-1, +\infty)$ avem $2x + 3 > 0$ și $x + 1 > 0$, deci semnul lui $f'$ este semnul lui $x - 1$:

| $x$ | $-1$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | | ↘ | $-2\ln2$ | ↗ | |

$f$ este descrescătoare pe $(-1, 1]$ și crescătoare pe $[1, +\infty)$, deci $x = 1$ este punct de minim global: $f(x) \ge f(1) = 1 - 1 - 2\ln 2 = -2\ln 2$.

Rescriem: $x^2 - x - 2\ln(x+1) \ge -2\ln 2 \iff x^2 - x \ge 2\ln(x+1) - 2\ln 2 = 2\ln\dfrac{x+1}{2}$, pentru orice $x \in (-1, +\infty)$. $\blacksquare$

*Barem: 2p monotonia, 3p minimul și concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = x^2 + 3x + 1$

#### a) $\displaystyle\int_0^3 (f(x) - 3x)\,dx = 12$

$f(x) - 3x = x^2 + 1$:

$$\int_0^3 (x^2 + 1)\,dx = \left(\frac{x^3}{3} + x\right)\Big|_0^3 = \frac{27}{3} + 3 - 0 = 12.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 \frac{1}{(f(x) - x^2)^2}\,dx = \frac14$

$f(x) - x^2 = 3x + 1$, care este pozitiv pe $[0,1]$. Cum $(3x+1)' = 3$:

$$\int_0^1 \frac{dx}{(3x+1)^2} = \frac13\int_0^1 \frac{(3x+1)'}{(3x+1)^2}\,dx = -\frac{1}{3(3x+1)}\Big|_0^1 = -\frac{1}{12} + \frac13 = \frac14.$$

(Am folosit $\displaystyle\int \frac{u'}{u^2} = -\frac1u + C$.) *Barem: 3p primitiva, 2p calculul.*

#### c) Aria delimitată de $g(x) = \dfrac{f(x) - x^2 - 1}{e^x}$, $Ox$, $x = 0$, $x = 1$, este $3\left(1 - \dfrac2e\right)$

$f(x) - x^2 - 1 = 3x$, deci $g(x) = 3xe^{-x}$. Pe $[0,1]$, $g(x) \ge 0$, deci aria este chiar integrala:

$$\mathcal A = \int_0^1 3xe^{-x}\,dx.$$

Integrăm prin părți cu $u = x$, $v' = e^{-x}$, $v = -e^{-x}$:

$$\int_0^1 xe^{-x}\,dx = -xe^{-x}\Big|_0^1 + \int_0^1 e^{-x}\,dx = -\frac1e + \left(-e^{-x}\right)\Big|_0^1 = -\frac1e - \frac1e + 1 = 1 - \frac2e.$$

Deci $\mathcal A = 3\left(1 - \dfrac2e\right)$. $\blacksquare$

**Atenție:** trebuie justificat că $g \ge 0$ pe interval; altfel aria ar fi integrala lui $|g|$. *Barem: 2p expresia lui $g$ și scrierea ariei, 3p calculul integralei.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = 3$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac15$ |
| I.5 | $AM = 4$ |
| II.1.b | $a = 4$ |
| II.1.c | $x = 1$ |
| II.2.b | $x \in \{-1, 3\}$ |
| II.2.c | $n \in \{0, 1, 2\}$ |
| III.1.b | $y = -3x$ |

## Ce merită reținut din varianta 3

- **Numărarea cifrelor**: la „cel puțin o cifră egală cu…” separă cazurile ca să nu numeri de două ori numerele de tipul $11$.
- **Comutarea matricelor**: $AB = BA$ se rezolvă egalând element cu element; de obicei două ecuații dau aceeași soluție.
- **Inegalități cu logaritmi**: studiază o funcție, găsește minimul global și rescrie $f(x) \ge f(x_0)$.
- **Arii**: verifică semnul funcției pe interval înainte de a scrie aria ca integrală.
