Rezolvarea completă a subiectului dat la **simularea națională** a **Bacalaureatului 2026 la Matematică M_șt-nat** (filiera teoretică, profilul real, specializarea științe ale naturii). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie aritmetică cu $a_1 = 2$, $a_3 = 14$: determinați $a_4$

Într-o progresie aritmetică $a_3 = a_1 + 2r$, deci $2r = a_3 - a_1 = 14 - 2 = 12$, adică rația $r = 6$.

$$a_4 = a_3 + r = 14 + 6 = 20.$$

**Răspuns:** $a_4 = 20$. *Barem: 3p rația, 2p $a_4$.*

### 2. $f(x) = ax + 3$: determinați $a$ cu $f(0) + (f\circ f)(0) = 0$

$f(0) = 3$, iar $(f\circ f)(0) = f(f(0)) = f(3) = 3a + 3$. Ecuația:

$$3 + 3a + 3 = 0 \iff 3a = -6 \iff a = -2.$$

**Verificare:** pentru $a = -2$, $f(3) = -3$ și $3 + (-3) = 0$ ✔.

**Răspuns:** $a = -2$. *Barem: 3p calculul lui $f(0)$ și $(f\circ f)(0)$, 2p valoarea lui $a$.*

### 3. Ecuație exponențială: $5^x - 4\cdot 5^{x-2} = 105$

Dăm factor comun $5^{x-2}$ (puterea cea mai mică), folosind $5^x = 5^2\cdot 5^{x-2} = 25\cdot 5^{x-2}$:

$$5^{x-2}(25 - 4) = 105 \iff 21\cdot 5^{x-2} = 105 \iff 5^{x-2} = 5.$$

Prin injectivitatea funcției exponențiale: $x - 2 = 1$, deci $x = 3$.

**Verificare:** $5^3 - 4\cdot 5 = 125 - 20 = 105$ ✔.

**Răspuns:** $x = 3$. *Barem: 3p obținerea lui $5^{x-2} = 5$, 2p soluția.*

### 4. Numere naturale impare, de trei cifre distincte, cu cifre din $A = \{1, 2, 3, 9\}$

- **Cifra unităților** trebuie să fie impară: $1$, $3$ sau $9$ → 3 moduri.
- **Cifra zecilor**: oricare din cele 3 cifre rămase (diferită de cea a unităților) → 3 moduri.
- **Cifra sutelor**: oricare din cele 2 cifre rămase → 2 moduri (nu există cifra 0, deci nicio restricție suplimentară).

Regula produsului: $3\cdot 3\cdot 2 = 18$ numere.

**Răspuns:** 18 numere. *Barem: 2p cifra unităților, 3p numărarea completă.*

### 5. $A(1, 0)$, $B(5, 4)$, $d: 2x + ay = 0$: mijlocul lui $AB$ aparține lui $d$

Mijlocul segmentului $AB$: $M\left(\dfrac{1 + 5}{2}, \dfrac{0 + 4}{2}\right) = M(3, 2)$.

$M \in d$ înseamnă că coordonatele lui verifică ecuația dreptei:

$$2\cdot 3 + a\cdot 2 = 0 \iff 2a = -6 \iff a = -3.$$

**Răspuns:** $a = -3$. *Barem: 3p mijlocul segmentului, 2p valoarea lui $a$.*

### 6. Triunghi dreptunghic în $A$, $BC = 12$, $C = \dfrac\pi6$, $M \in AC$ cu $3AM = AC$: arătați că $BM = 4\sqrt3$

Catetele: $AB = BC\sin C = 12\cdot\dfrac12 = 6$ (cateta opusă unghiului de $30^\circ$) și $AC = BC\cos C = 12\cdot\dfrac{\sqrt3}{2} = 6\sqrt3$.

Atunci $AM = \dfrac{AC}{3} = 2\sqrt3$. Triunghiul $ABM$ este dreptunghic în $A$ (unghiul $A$ e drept, iar $M$ e pe $AC$), deci din teorema lui Pitagora:

$$BM^2 = AB^2 + AM^2 = 36 + 12 = 48 \Rightarrow BM = \sqrt{48} = 4\sqrt3.$$

*Barem: 2p catetele $AB$ și $AC$, 3p $AM$ și $BM$.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricea $A(a) = \begin{pmatrix}1 & a\\ -a & 1 - a\end{pmatrix}$

**a)** Arătați că $\det(A(1)) = 1$.

$A(1) = \begin{pmatrix}1 & 1\\ -1 & 0\end{pmatrix}$, deci $\det(A(1)) = 1\cdot 0 - 1\cdot(-1) = 0 + 1 = 1$.

*Barem: 3p scrierea determinantului, 2p calculul.*

**b)** Arătați că $A(a + b) - A(a)\cdot A(b) = abA(1)$.

Calculăm produsul:

$$A(a)\cdot A(b) = \begin{pmatrix}1 & a\\ -a & 1 - a\end{pmatrix}\begin{pmatrix}1 & b\\ -b & 1 - b\end{pmatrix} = \begin{pmatrix}1 - ab & a + b - ab\\ -a - b + ab & 1 - a - b\end{pmatrix}.$$

(De exemplu, elementul $(2,2)$: $-ab + (1 - a)(1 - b) = -ab + 1 - a - b + ab = 1 - a - b$.)

$$A(a + b) = \begin{pmatrix}1 & a + b\\ -a - b & 1 - a - b\end{pmatrix}.$$

Scăzând:

$$A(a + b) - A(a)A(b) = \begin{pmatrix}ab & ab\\ -ab & 0\end{pmatrix} = ab\begin{pmatrix}1 & 1\\ -1 & 0\end{pmatrix} = abA(1). \ \blacksquare$$

*Barem: 3p calculul produsului și al diferenței, 2p concluzia.*

**c)** Determinați $a$ pentru care $2A(2a) - A(a)\cdot A(a) - A(1)\cdot A(2a - 1) = 2A(1)$.

Folosim b) de două ori, rescriind relația ca $A(a + b) - A(a)A(b) = abA(1)$:

- cu $b = a$: $A(2a) - A(a)A(a) = a^2A(1)$;
- cu $1$ și $2a - 1$ (suma lor este $2a$): $A(2a) - A(1)A(2a - 1) = (2a - 1)A(1)$.

Adunând cele două relații:

$$2A(2a) - A(a)A(a) - A(1)A(2a - 1) = (a^2 + 2a - 1)A(1).$$

Condiția devine $(a^2 + 2a - 1)A(1) = 2A(1)$. Cum $A(1) \ne O_2$, egalăm coeficienții: $a^2 + 2a - 1 = 2 \iff a^2 + 2a - 3 = 0 \iff (a + 3)(a - 1) = 0$.

**Răspuns:** $a \in \{-3, 1\}$. *Barem: 2p rescrierea cu ajutorul lui b), 3p ecuația și soluțiile.*

### 2. Legea $x \circ y = \dfrac16(x - 5)(y - 5) + 5$ (asociativă, cu elementul neutru $e = 11$)

**a)** Arătați că $7 \circ 8 = 6$.

$$7 \circ 8 = \frac16(7 - 5)(8 - 5) + 5 = \frac16\cdot 2\cdot 3 + 5 = 1 + 5 = 6.$$

*Barem: 3p înlocuirea, 2p calculul.*

**b)** Determinați $x$ pentru care $x \circ (6x - 1) = 10$.

$$x \circ (6x - 1) = \frac16(x - 5)(6x - 6) + 5 = (x - 5)(x - 1) + 5 = x^2 - 6x + 10.$$

$$x^2 - 6x + 10 = 10 \iff x(x - 6) = 0 \iff x \in \{0, 6\}.$$

**Răspuns:** $x = 0$ sau $x = 6$. *Barem: 3p expresia, 2p soluțiile.*

**c)** Numerele naturale $n \ne 5$ ale căror simetrice sunt numere naturale pare.

Simetricul $n'$ al lui $n$ verifică $n \circ n' = e = 11$:

$$\frac16(n - 5)(n' - 5) + 5 = 11 \iff (n - 5)(n' - 5) = 36 \iff n' = 5 + \frac{36}{n - 5}.$$

(Pentru $n = 5$ produsul ar fi 0, deci 5 nu are simetric — de aceea e exclus.)

Pentru ca $n'$ să fie natural, $n - 5$ trebuie să fie divizor al lui 36 și $n' \ge 0$. Dacă $n - 5 < 0$, atunci $n \in \{0, \dots, 4\}$, $n - 5 \in \{-5, \dots, -1\}$ și $n' = 5 + \tfrac{36}{n - 5} \le 5 - \tfrac{36}{5} < 0$ — imposibil. Deci $n - 5$ este un divizor pozitiv al lui 36:

| $n - 5$ | 1 | 2 | 3 | 4 | 6 | 9 | 12 | 18 | 36 |
|---|---|---|---|---|---|---|---|---|---|
| $n$ | 6 | 7 | 8 | 9 | 11 | 14 | 17 | 23 | 41 |
| $n' - 5$ | 36 | 18 | 12 | 9 | 6 | 4 | 3 | 2 | 1 |
| $n'$ | 41 | 23 | 17 | 14 | 11 | 9 | 8 | 7 | 6 |

$n'$ este par pentru $n' \in \{14, 8, 6\}$, adică $n \in \{9, 17, 41\}$.

**Răspuns:** $n \in \{9, 17, 41\}$. *Barem: 2p relația $(n-5)(n'-5) = 36$, 3p valorile lui $n$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty)\to\mathbb R$, $f(x) = \dfrac1x - 1 + 4\ln(x + 3)$

**a)** Arătați că $f'(x) = \dfrac{(x - 1)(4x + 3)}{x^2(x + 3)}$.

$$f'(x) = -\frac{1}{x^2} + \frac{4}{x + 3} = \frac{-(x + 3) + 4x^2}{x^2(x + 3)} = \frac{4x^2 - x - 3}{x^2(x + 3)}.$$

Descompunem $4x^2 - x - 3$: rădăcinile sunt $1$ și $-\tfrac34$, deci $4x^2 - x - 3 = (x - 1)(4x + 3)$. *Barem: 3p derivarea, 2p forma finală.*

**b)** Arătați că $\displaystyle\lim_{x\to1}\frac{4\ln(x + 3) - f(x)}{\ln x} = 1$.

Numărătorul: $4\ln(x + 3) - f(x) = 1 - \dfrac1x = \dfrac{x - 1}{x}$. Pentru $x \to 1$, numărătorul și $\ln x$ tind la 0 (nedeterminare $\frac00$). Aplicăm l'Hôpital:

$$\lim_{x\to1}\frac{1 - \frac1x}{\ln x} = \lim_{x\to1}\frac{\frac{1}{x^2}}{\frac1x} = \lim_{x\to1}\frac1x = 1.$$

(Alternativ: $\lim\limits_{x\to1}\dfrac{x - 1}{\ln x} = 1$, limita fundamentală, și $\dfrac1x \to 1$.) *Barem: 3p aplicarea l'Hôpital, 2p calculul.*

**c)** Demonstrați că $\dfrac{1}{x^2} - \dfrac1x \ge 4\ln\dfrac{x + 3}{x^2 + 3}$, pentru orice $x \in (0, 1]$.

Din a): pe $(0, 1)$ avem $x - 1 < 0$, $4x + 3 > 0$, $x^2(x + 3) > 0$, deci $f'(x) < 0$ și $f'(1) = 0$. Așadar $f$ este **descrescătoare** pe $(0, 1]$.

Pentru $x \in (0, 1]$: $0 < x^2 \le x \le 1$, deci $x^2$ și $x$ sunt ambele în $(0, 1]$, și din monotonie:

$$f(x^2) \ge f(x) \iff \frac{1}{x^2} - 1 + 4\ln(x^2 + 3) \ge \frac1x - 1 + 4\ln(x + 3).$$

Mutăm termenii:

$$\frac{1}{x^2} - \frac1x \ge 4\ln(x + 3) - 4\ln(x^2 + 3) = 4\ln\frac{x + 3}{x^2 + 3}. \ \blacksquare$$

Ideea-cheie: membrul stâng și cel drept provin din $f(x^2) - f(x)$ — recunoașterea acestei structuri este cea mai grea parte. *Barem: 2p monotonia, 3p comparația $f(x) \le f(x^2)$ și concluzia.*

### 2. $f:\mathbb R\to\mathbb R$, $f(x) = (x^2 + 4x)e^{-x}$

**a)** Arătați că $\displaystyle\int_0^3 f(x)e^x\,dx = 27$.

$f(x)e^x = x^2 + 4x$:

$$\int_0^3 (x^2 + 4x)\,dx = \left(\frac{x^3}{3} + 2x^2\right)\Big|_0^3 = 9 + 18 = 27.$$

*Barem: 3p primitiva, 2p calculul.*

**b)** Arătați că $\displaystyle\int_{-1}^0\frac{f(x)}{x + 4}dx = -1$.

Pe $[-1, 0]$, $x + 4 \ne 0$ și $\dfrac{f(x)}{x + 4} = \dfrac{x(x + 4)e^{-x}}{x + 4} = xe^{-x}$. Integrăm prin părți, cu $e^{-x} = (-e^{-x})'$:

$$\int_{-1}^0 xe^{-x}\,dx = -xe^{-x}\Big|_{-1}^0 + \int_{-1}^0 e^{-x}\,dx = \big(0 - e\big) + \left(-e^{-x}\right)\Big|_{-1}^0 = -e + (-1 + e) = -1.$$

(La $x = -1$: $-xe^{-x} = -(-1)e^{1} = e$, deci diferența este $0 - e = -e$.) *Barem: 3p integrarea prin părți, 2p calculul.*

**c)** $g:(0, +\infty)\to\mathbb R$, $g(x) = \dfrac{f(x^2)}{x^2}$. Demonstrați că orice primitivă $G$ a lui $g$ este concavă.

Simplificăm: $f(x^2) = (x^4 + 4x^2)e^{-x^2} = x^2(x^2 + 4)e^{-x^2}$, deci $g(x) = (x^2 + 4)e^{-x^2}$.

Dacă $G$ este o primitivă a lui $g$, atunci $G' = g$ și $G'' = g'$. Derivăm cu regula produsului, folosind $\left(e^{-x^2}\right)' = -2xe^{-x^2}$:

$$G''(x) = 2xe^{-x^2} + (x^2 + 4)(-2x)e^{-x^2} = 2xe^{-x^2}\left(1 - x^2 - 4\right) = -2x(x^2 + 3)e^{-x^2}.$$

Pentru $x > 0$: $2x > 0$, $x^2 + 3 > 0$, $e^{-x^2} > 0$, deci $G''(x) < 0$. Prin urmare $G$ este concavă pe $(0, +\infty)$. Raționamentul nu depinde de constanta primitivei, deci este valabil pentru **orice** primitivă. $\blacksquare$

*Barem: 3p calculul lui $G''$, 2p semnul și concluzia.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_4 = 20$ |
| I.2 | $a = -2$ |
| I.3 | $x = 3$ |
| I.4 | 18 numere |
| I.5 | $a = -3$ |
| I.6 | $BM = 4\sqrt3$ |
| II.1.c | $a \in \{-3, 1\}$ |
| II.2.a | $7 \circ 8 = 6$ |
| II.2.b | $x \in \{0, 6\}$ |
| II.2.c | $n \in \{9, 17, 41\}$ |
| III.1.b | $1$ |
| III.2.b | $-1$ |

## Ce merită reținut din simulare

- **Folosește subpunctul anterior**: la II.1.c, identitatea de la b) aplicată de două ori scurtează tot calculul matriceal.
- **Simetricul la legi de forma** $k(x-a)(y-a) + a$: relația devine $(n-a)(n'-a) = $ constantă, apoi se analizează divizorii.
- **Inegalități din monotonie**: dacă $f$ e descrescătoare și $x^2 \le x$, atunci $f(x^2) \ge f(x)$ — scrie explicit ambele valori.
- **Concavitatea unei primitive**: $G'' = g'$, deci e suficient semnul derivatei lui $g$.
