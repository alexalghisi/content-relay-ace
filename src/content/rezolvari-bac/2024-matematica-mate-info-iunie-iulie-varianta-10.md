Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_mate-info**, sesiunea iunie–iulie, **varianta 10**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $2\lg 100 + \lg 2 + \lg 5 = 5$

$\lg 100 = \lg 10^2 = 2$, iar suma logaritmilor este logaritmul produsului: $\lg 2 + \lg 5 = \lg 10 = 1$.

$$2\lg 100 + \lg 2 + \lg 5 = 2\cdot 2 + 1 = 5.$$

*Barem: 3p $\lg 100 = 2$ și $\lg 2 + \lg 5 = \lg 10$, 2p rezultatul.*

### 2. $f(x) = x - 6$: numărul $a$ cu $f(a) + f(3a) = 0$

$f(a) = a - 6$, $f(3a) = 3a - 6$. Ecuația:

$$a - 6 + 3a - 6 = 0 \iff 4a = 12 \iff a = 3.$$

**Răspuns:** $a = 3$. *Barem: 3p expresiile, 2p soluția.*

### 3. Ecuația $5^{3x}\cdot 5^2 = 5^x$

La înmulțirea puterilor cu aceeași bază, exponenții se adună: $5^{3x + 2} = 5^x$. Funcția exponențială este injectivă, deci exponenții sunt egali:

$$3x + 2 = x \iff 2x = -2 \iff x = -1.$$

**Răspuns:** $x = -1$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. Submulțimi cu două elemente, ambele pare, ale lui $A = \{1, 2, 4, 6, 8, 9\}$

Numerele pare din $A$ sunt $2, 4, 6, 8$ — 4 elemente. O submulțime cu două elemente pare înseamnă o alegere neordonată a 2 dintre ele:

$$C_4^2 = \frac{4!}{2!\cdot 2!} = 6.$$

(Le poți și lista: $\{2,4\}, \{2,6\}, \{2,8\}, \{4,6\}, \{4,8\}, \{6,8\}$.)

**Răspuns:** 6 submulțimi. *Barem: 2p numărul elementelor pare, 3p combinările.*

### 5. $A(3,1)$, $B(3,0)$: coordonatele lui $C$ cu $\overrightarrow{AC} = \overrightarrow{OB}$

$\overrightarrow{OB} = 3\vec i$, iar pentru $C(x_C, y_C)$: $\overrightarrow{AC} = (x_C - 3)\vec i + (y_C - 1)\vec j$.

Egalând coordonatele: $x_C - 3 = 3$ și $y_C - 1 = 0$, deci $x_C = 6$, $y_C = 1$.

**Răspuns:** $C(6, 1)$. *Barem: 3p scrierea vectorilor, 2p coordonatele.*

### 6. Triunghi dreptunghic în $A$, cu aria 18 și $B = \dfrac\pi4$: arătați că $AB = 6$

Un triunghi dreptunghic cu un unghi ascuțit de $45^\circ$ are și celălalt unghi ascuțit de $45^\circ$, deci este isoscel: $AB = AC$.

$$\mathcal A = \frac{AB\cdot AC}{2} = \frac{AB^2}{2} = 18 \Rightarrow AB^2 = 36 \Rightarrow AB = 6$$

(lungimea este pozitivă). *Barem: 2p $AB = AC$, 3p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $M(x) = \begin{pmatrix}x & 0 & 0\\ 0 & x + 2 & x\\ 0 & 2x & x + 2\end{pmatrix}$

#### a) $\det(M(1)) = 7$

$$\det(M(1)) = \begin{vmatrix}1 & 0 & 0\\ 0 & 3 & 1\\ 0 & 2 & 3\end{vmatrix} = 9 + 0 + 0 - 0 - 0 - 2 = 7.$$

(Dezvoltând după prima linie: $1\cdot(3\cdot3 - 1\cdot2) = 7$.) *Barem: 2p scrierea, 3p calculul.*

#### b) Numărul $x$ cu $M(x)\cdot M(2) = M(x - 1)$

$M(2) = \begin{pmatrix}2 & 0 & 0\\ 0 & 4 & 2\\ 0 & 4 & 4\end{pmatrix}$. Produsul:

$$M(x)\cdot M(2) = \begin{pmatrix}2x & 0 & 0\\ 0 & 4(x + 2) + 4x & 2(x + 2) + 4x\\ 0 & 8x + 4(x + 2) & 4x + 4(x + 2)\end{pmatrix} = \begin{pmatrix}2x & 0 & 0\\ 0 & 8x + 8 & 6x + 4\\ 0 & 12x + 8 & 8x + 8\end{pmatrix}.$$

$M(x - 1) = \begin{pmatrix}x - 1 & 0 & 0\\ 0 & x + 1 & x - 1\\ 0 & 2x - 2 & x + 1\end{pmatrix}$. Egalăm elementele:

- $2x = x - 1 \Rightarrow x = -1$;
- $8x + 8 = x + 1 \Rightarrow x = -1$; $6x + 4 = x - 1 \Rightarrow x = -1$; $12x + 8 = 2x - 2 \Rightarrow x = -1$.

Toate ecuațiile au soluția comună $x = -1$.

**Răspuns:** $x = -1$. *Barem: 3p produsul, 2p soluția.*

#### c) Numerele naturale $n$ cu $2\det(M(n)) \le \det(M(2n))$

Dezvoltăm după prima linie:

$$\det(M(x)) = x\big[(x + 2)^2 - 2x^2\big] = x(-x^2 + 4x + 4).$$

Deci $\det(M(n)) = n(-n^2 + 4n + 4)$ și $\det(M(2n)) = 2n(-4n^2 + 8n + 4)$.

Inegalitatea:

$$2n(-n^2 + 4n + 4) \le 2n(-4n^2 + 8n + 4) \iff 2n(3n^2 - 4n) \le 0 \iff 2n^2(3n - 4) \le 0.$$

Pentru $n = 0$ inegalitatea este egalitate (adevărată). Pentru $n \ge 1$, $2n^2 > 0$, deci trebuie $3n - 4 \le 0$, adică $n \le \frac43$, deci $n = 1$.

**Răspuns:** $n \in \{0, 1\}$. *Barem: 2p determinanții, 3p rezolvarea inecuației.* Nu uita cazul $n = 0$ — este număr natural.

### 2. Polinomul $f = X^3 - 2X^2 - aX + 2a$

#### a) $f(2) = 0$ pentru orice $a$

$$f(2) = 8 - 8 - 2a + 2a = 0.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) Pentru $a = 1$, $f$ este divizibil cu $g = X + 1$

$f = X^3 - 2X^2 - X + 2$. Teorema lui Bézout: $f$ se divide cu $X + 1$ dacă și numai dacă $f(-1) = 0$.

$$f(-1) = -1 - 2 + 1 + 2 = 0,$$

deci $f$ este divizibil cu $X + 1$. *Barem: 3p calculul lui $f(-1)$, 2p concluzia.*

#### c) $a > 0$ pentru care $|x_1| + |x_2| + |x_3| = 8$

Grupăm termenii: $f = X^2(X - 2) - a(X - 2) = (X - 2)(X^2 - a)$.

Cum $a > 0$, rădăcinile sunt $x_1 = 2$, $x_2 = \sqrt a$, $x_3 = -\sqrt a$. Atunci

$$|x_1| + |x_2| + |x_3| = 2 + 2\sqrt a = 8 \iff \sqrt a = 3 \iff a = 9.$$

**Răspuns:** $a = 9$. *Barem: 3p descompunerea și rădăcinile, 2p valoarea lui $a$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = e^x(2x - 4) + x^2 - 2x + 4$

#### a) $f'(x) = 2(x - 1)(e^x + 1)$

$$f'(x) = e^x(2x - 4) + 2e^x + 2x - 2 = e^x(2x - 2) + (2x - 2) = 2(x - 1)(e^x + 1).$$

*Barem: 3p derivarea, 2p factorizarea.*

#### b) $\displaystyle\lim_{x\to0}\frac{f(x)}{1 - e^x} = 4$

$f(0) = -4 + 4 = 0$ și $1 - e^0 = 0$: nedeterminare $\frac00$. Cu **l'Hôpital**:

$$\lim_{x\to0}\frac{f'(x)}{-e^x} = \frac{2(0 - 1)(1 + 1)}{-1} = \frac{-4}{-1} = 4.$$

*Barem: 3p aplicarea l'Hôpital, 2p rezultatul.*

#### c) Ecuația $f(x) = 0$ are exact două soluții

$e^x + 1 > 0$, deci semnul lui $f'$ este semnul lui $x - 1$:

- pe $(-\infty, 1)$: $f' < 0$, $f$ strict descrescătoare;
- pe $(1, +\infty)$: $f' > 0$, $f$ strict crescătoare.

Valori și limite:

- $\lim\limits_{x\to-\infty}f(x) = +\infty$ (termenul $e^x(2x - 4) \to 0$, iar $x^2 - 2x + 4 \to +\infty$);
- $f(1) = -2e + 3 < 0$ (deoarece $e > 1{,}5$);
- $\lim\limits_{x\to+\infty}f(x) = +\infty$.

$f$ este continuă și strict monotonă pe fiecare interval: pe $(-\infty, 1)$ trece de la $+\infty$ la $3 - 2e < 0$, deci se anulează **exact o dată** (de fapt în $x = 0$, deoarece $f(0) = 0$); pe $(1, +\infty)$ trece de la $3 - 2e < 0$ la $+\infty$, deci se anulează **exact o dată** (o rădăcină între 1 și 2, aproximativ $1{,}68$).

Așadar ecuația are exact două soluții. ∎

*Barem: 2p monotonia, 3p limitele, valoarea $f(1)$ și concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{4x}{3x^2 + 1}$

#### a) $\displaystyle\int_3^4 f(x)(3x^2 + 1)\,dx = 14$

$f(x)(3x^2 + 1) = 4x$:

$$\int_3^4 4x\,dx = 2x^2\Big|_3^4 = 32 - 18 = 14.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 f(x)\,dx = \frac43\ln 2$

$(3x^2 + 1)' = 6x$, deci $\dfrac{4x}{3x^2 + 1} = \dfrac23\cdot\dfrac{(3x^2 + 1)'}{3x^2 + 1}$:

$$\int_0^1\frac{4x}{3x^2 + 1}dx = \frac23\ln(3x^2 + 1)\Big|_0^1 = \frac23(\ln 4 - \ln 1) = \frac23\cdot 2\ln 2 = \frac43\ln 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) Aria delimitată de $g(x) = \dfrac{4\ln x}{f(x)}$, $Ox$, $x = 1$, $x = e$ este $\dfrac{3e^2 + 5}{4}$

$$g(x) = \frac{4\ln x\,(3x^2 + 1)}{4x} = \frac{(3x^2 + 1)\ln x}{x} = 3x\ln x + \frac{\ln x}{x}.$$

Pe $[1, e]$ avem $\ln x \ge 0$, deci $g(x) \ge 0$ și aria este $\mathcal A = \displaystyle\int_1^e g(x)\,dx$.

**Prima integrală (prin părți)**, cu $u = \ln x$, $v' = 3x$ ($u' = \frac1x$, $v = \frac{3x^2}{2}$):

$$\int_1^e 3x\ln x\,dx = \frac{3x^2}{2}\ln x\Big|_1^e - \int_1^e\frac{3x}{2}dx = \frac{3e^2}{2} - \frac{3x^2}{4}\Big|_1^e = \frac{3e^2}{2} - \frac{3e^2}{4} + \frac34 = \frac{3e^2}{4} + \frac34.$$

**A doua integrală**: $\dfrac{\ln x}{x} = (\ln x)'\ln x$, deci

$$\int_1^e\frac{\ln x}{x}dx = \frac{\ln^2 x}{2}\Big|_1^e = \frac12.$$

$$\mathcal A = \frac{3e^2}{4} + \frac34 + \frac12 = \frac{3e^2 + 5}{4}.$$

*Barem: 3p scrierea ariei și descompunerea integralei, 2p calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 3$ |
| I.3 | $x = -1$ |
| I.4 | 6 submulțimi |
| I.5 | $C(6, 1)$ |
| II.1.b | $x = -1$ |
| II.1.c | $n \in \{0, 1\}$ |
| II.2.c | $a = 9$ |
| III.1.c | exact două soluții ($x = 0$ și una în $(1, 2)$) |
| III.2.c | $\frac{3e^2 + 5}{4}$ |

## Ce merită reținut din varianta 10

- **Polinoame cu parametru**: încearcă gruparea termenilor — $f = (X - 2)(X^2 - a)$ face rădăcinile evidente.
- **Număr de soluții**: monotonie pe intervale + semne la capete + continuitate (proprietatea lui Darboux) dau exact câte o rădăcină pe fiecare interval de strictă monotonie.
- **Arii**: verifică semnul funcției pe interval înainte de a scrie aria ca integrală.
