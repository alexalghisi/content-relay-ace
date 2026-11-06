Rezolvarea completă a subiectului de **Bacalaureat 2026 la Matematică M_mate-info**, sesiunea specială, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie aritmetică: $a_2$, știind $a_1 = 6$ și $a_3 = 30$

Într-o progresie aritmetică, fiecare termen (în afară de primul) este media aritmetică a vecinilor săi:

$$a_2 = \frac{a_1 + a_3}{2} = \frac{6 + 30}{2} = \frac{36}{2} = 18.$$

(Alternativ: $a_3 = a_1 + 2r \Rightarrow r = 12$, $a_2 = 6 + 12 = 18$.)

**Răspuns:** $a_2 = 18$. *Barem: 3p relația de medie aritmetică, 2p calculul.*

### 2. $f(x) = ax^2 + 2ax - 1$: determinați $a$ cu $(f \circ f)(0) = 0$

$f(0) = -1$, indiferent de $a$. Apoi

$$(f\circ f)(0) = f(-1) = a\cdot 1 + 2a\cdot(-1) - 1 = -a - 1.$$

$-a - 1 = 0 \iff a = -1$.

**Răspuns:** $a = -1$. *Barem: 3p calculul lui $(f\circ f)(0)$, 2p valoarea lui $a$.*

### 3. Ecuația $\log_2(2x^2 - 4x + 3) = 2\log_2 x$

**Condiții de existență:** $x > 0$ și $2x^2 - 4x + 3 > 0$. A doua e adevărată pentru orice $x$ ($\Delta = 16 - 24 < 0$), deci condiția este $x > 0$.

Pentru $x > 0$, $2\log_2 x = \log_2 x^2$, deci

$$2x^2 - 4x + 3 = x^2 \iff x^2 - 4x + 3 = 0 \iff (x - 1)(x - 3) = 0.$$

Ambele soluții sunt pozitive, deci convin. Verificare: $x = 1$: $\log_2 1 = 0 = 2\log_2 1$ ✔; $x = 3$: $\log_2 9 = 2\log_2 3$ ✔.

**Răspuns:** $x \in \{1, 3\}$. *Barem: 2p ecuația de gradul II, 3p soluțiile care convin.*

### 4. Numere pare de trei cifre distincte cu cifre din $A = \{2, 4, 5, 6\}$

Construim numărul $\overline{abc}$ începând cu cifra care are restricție:

- cifra unităților $c$ trebuie să fie pară: $\{2, 4, 6\}$ — **3 moduri**;
- cifra zecilor $b$: oricare dintre cele 3 cifre rămase — **3 moduri**;
- cifra sutelor $a$: oricare dintre cele 2 cifre rămase — **2 moduri** ($0 \notin A$, deci nu există problema primei cifre nule).

Regula produsului: $3 \cdot 3 \cdot 2 = 18$.

**Răspuns:** 18 numere. *Barem: 2p alegerea cifrei unităților, 3p numărarea finală.*

### 5. $A(6,4)$, $B(1,3)$: punctul $C$ cu $2\overrightarrow{BC} = \overrightarrow{OA}$

$\overrightarrow{OA} = 6\vec i + 4\vec j$, iar $\overrightarrow{BC} = (x_C - 1)\vec i + (y_C - 3)\vec j$.

$\overrightarrow{BC} = \dfrac12\overrightarrow{OA} = 3\vec i + 2\vec j$, deci $x_C - 1 = 3$ și $y_C - 3 = 2$.

**Răspuns:** $C(4, 5)$. *Barem: 2p scrierea vectorilor, 3p coordonatele lui $C$.*

### 6. Triunghi dreptunghic în $A$, $AC = 6$, $\operatorname{tg}C = \dfrac13$: arătați că $R = \sqrt{10}$

$\operatorname{tg}C = \dfrac{AB}{AC}$ (cateta opusă / cateta alăturată), deci $\dfrac{AB}{6} = \dfrac13 \Rightarrow AB = 2$.

Teorema lui Pitagora: $BC = \sqrt{AB^2 + AC^2} = \sqrt{4 + 36} = \sqrt{40} = 2\sqrt{10}$.

Într-un triunghi dreptunghic, ipotenuza este diametru al cercului circumscris (unghiul drept subîntinde un semicerc), deci

$$R = \frac{BC}{2} = \sqrt{10}.$$

*Barem: 2p calculul lui $AB$, 3p ipotenuza și raza.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}1 - 2a & a & 0\\ 2a & 1 - a & 0\\ 0 & 0 & 1 - 3a\end{pmatrix}$

#### a) $\det(A(1)) = 4$

$$A(1) = \begin{pmatrix}-1 & 1 & 0\\ 2 & 0 & 0\\ 0 & 0 & -2\end{pmatrix}.$$

Dezvoltăm după coloana a treia (un singur element nenul):

$$\det(A(1)) = (-2)\cdot\begin{vmatrix}-1 & 1\\ 2 & 0\end{vmatrix} = (-2)\cdot(0 - 2) = 4.$$

*Barem: 2p scrierea determinantului, 3p calculul.*

#### b) $A(a)\cdot A(b) = A(a + b - 3ab)$ pentru orice $a, b$ reali

Calculăm elementele produsului (blocul $2\times2$ din stânga-sus și elementul $(3,3)$; restul sunt $0$):

- $(1,1)$: $(1-2a)(1-2b) + a\cdot 2b = 1 - 2a - 2b + 4ab + 2ab = 1 - 2(a + b - 3ab)$;
- $(1,2)$: $(1-2a)b + a(1 - b) = b - 2ab + a - ab = a + b - 3ab$;
- $(2,1)$: $2a(1 - 2b) + (1-a)\cdot 2b = 2a - 4ab + 2b - 2ab = 2(a + b - 3ab)$;
- $(2,2)$: $2a\cdot b + (1-a)(1-b) = 2ab + 1 - a - b + ab = 1 - (a + b - 3ab)$;
- $(3,3)$: $(1 - 3a)(1 - 3b) = 1 - 3a - 3b + 9ab = 1 - 3(a + b - 3ab)$.

Notând $c = a + b - 3ab$, produsul este $\begin{pmatrix}1 - 2c & c & 0\\ 2c & 1 - c & 0\\ 0 & 0 & 1 - 3c\end{pmatrix} = A(c) = A(a + b - 3ab)$.

*Barem: 3p calculul produsului, 2p identificarea cu $A(a + b - 3ab)$.*

#### c) $a$ cu $A(1)\cdot A(a) + A(5) = 2A(4)$

Din b): $A(1)A(a) = A(1 + a - 3a) = A(1 - 2a)$.

Pentru partea dreaptă observăm că elementele lui $A(t)$ depind liniar (afin) de $t$, deci $2A(4) - A(5) = A(2\cdot 4 - 5) = A(3)$. (Verificare pe un element: $2(1 - 8) - (1 - 10) = -14 + 9 = -5 = 1 - 2\cdot3$ ✔.)

Ecuația devine $A(1 - 2a) = A(3)$. Funcția $t \mapsto A(t)$ este injectivă (elementul $(1,2)$ este chiar $t$), deci $1 - 2a = 3 \Rightarrow a = -1$.

**Răspuns:** $a = -1$. *Barem: 2p scrierea $A(1)A(a) = A(1-2a)$ și $2A(4) - A(5) = A(3)$, 3p valoarea lui $a$.*

### 2. Polinomul $f = mX^4 - mX^2 + X + 1$, $m \ne 0$

#### a) $f(-1) = 0$ pentru orice $m \ne 0$

$$f(-1) = m(-1)^4 - m(-1)^2 + (-1) + 1 = m - m - 1 + 1 = 0.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) Restul împărțirii la $g = X + 2$ este 11

Teorema restului: restul împărțirii lui $f$ la $X - \alpha$ este $f(\alpha)$; aici $\alpha = -2$.

$$f(-2) = 16m - 4m - 2 + 1 = 12m - 1.$$

$12m - 1 = 11 \iff m = 1$ (nenul, convine).

**Răspuns:** $m = 1$. *Barem: 3p $f(-2)$, 2p valoarea lui $m$.*

#### c) $m$ cu $x_1^3 + x_2^3 + x_3^3 + x_4^3 = 1$

Relațiile lui Viète pentru $mX^4 + 0\cdot X^3 - mX^2 + X + 1$:

$$\sigma_1 = \sum x_i = 0, \quad \sigma_3 = \sum x_ix_jx_k = -\frac1m, \quad \sigma_4 = x_1x_2x_3x_4 = \frac1m \ne 0.$$

Fiecare rădăcină verifică $mx_i^4 - mx_i^2 + x_i + 1 = 0$. Cum $x_i \ne 0$ (produsul rădăcinilor e nenul), împărțim la $x_i$:

$$mx_i^3 = mx_i - 1 - \frac{1}{x_i}.$$

Adunăm cele patru relații:

$$m\sum x_i^3 = m\sum x_i - 4 - \sum\frac{1}{x_i}.$$

Avem $\sum x_i = 0$ și $\sum\dfrac1{x_i} = \dfrac{\sigma_3}{\sigma_4} = \dfrac{-1/m}{1/m} = -1$. Deci

$$m\sum x_i^3 = 0 - 4 + 1 = -3 \Rightarrow \sum x_i^3 = -\frac3m.$$

$-\dfrac3m = 1 \iff m = -3$.

(Verificare cu formula lui Newton: $s_3 = \sigma_1 s_2 - \sigma_2 s_1 + 3\sigma_3 = 3\sigma_3 = -\dfrac3m$ — același rezultat.)

**Răspuns:** $m = -3$. *Barem: 3p relațiile lui Viète, 2p calculul sumei și valoarea lui $m$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(-1, +\infty) \to \mathbb R$, $f(x) = \dfrac{e^x + 2x + 1}{x + 1}$

#### a) $f'(x) = \dfrac{xe^x + 1}{(x + 1)^2}$

Regula câtului:

$$f'(x) = \frac{(e^x + 2)(x + 1) - (e^x + 2x + 1)\cdot 1}{(x+1)^2} = \frac{xe^x + e^x + 2x + 2 - e^x - 2x - 1}{(x+1)^2} = \frac{xe^x + 1}{(x+1)^2}.$$

*Barem: 3p regula câtului, 2p simplificarea.*

#### b) Tangenta în punctul de abscisă $x = 0$

$f(0) = \dfrac{1 + 0 + 1}{1} = 2$, $f'(0) = \dfrac{0 + 1}{1} = 1$.

$y - f(0) = f'(0)(x - 0) \iff y - 2 = x \iff y = x + 2$.

**Răspuns:** $y = x + 2$. *Barem: 2p $f(0)$ și $f'(0)$, 3p ecuația.*

#### c) $f$ este strict crescătoare

Numitorul $(x+1)^2 > 0$ pe $(-1, +\infty)$, deci semnul lui $f'$ este semnul lui $g(x) = xe^x + 1$.

Studiem $g:[-1, +\infty) \to \mathbb R$: $g'(x) = e^x + xe^x = (x + 1)e^x \ge 0$, deci $g$ este crescătoare pe $[-1, +\infty)$. Prin urmare, pentru $x > -1$:

$$g(x) \ge g(-1) = 1 - \frac1e > 0.$$

Deci $f'(x) > 0$ pentru orice $x \in (-1, +\infty)$, așadar $f$ este strict crescătoare.

*Barem: 3p studiul semnului lui $xe^x + 1$, 2p concluzia.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = 6 + \dfrac1x + \dfrac{\ln^2 x}{x}$

#### a) $\displaystyle\int_1^3\left(f(x) - \frac{\ln^2 x}{x}\right)dx = 12 + \ln 3$

$$\int_1^3\left(6 + \frac1x\right)dx = (6x + \ln x)\Big|_1^3 = (18 + \ln 3) - (6 + \ln 1) = 12 + \ln 3.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^e\left(f(x) - 6 - \frac1x\right)dx = \frac13$

Integrandul este $\dfrac{\ln^2 x}{x} = (\ln x)'\cdot\ln^2 x$, cu primitiva $\dfrac{\ln^3 x}{3}$ (substituția $t = \ln x$):

$$\int_1^e\frac{\ln^2 x}{x}\,dx = \frac{\ln^3 x}{3}\Big|_1^e = \frac13 - 0 = \frac13.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $m$ pentru care aria determinată de $g(x) = \dfrac{f(x) - 6}{x}$, $Ox$, $x = 1$, $x = e$ este $m\left(1 - \dfrac2e\right)$

$g(x) = \dfrac{1}{x^2} + \dfrac{\ln^2 x}{x^2} > 0$, deci aria este $\mathcal A = \displaystyle\int_1^e g(x)\,dx$.

Primul termen: $\displaystyle\int_1^e\frac{1}{x^2}\,dx = -\frac1x\Big|_1^e = 1 - \frac1e$.

Al doilea, prin părți cu $u = \ln^2 x$, $v' = \dfrac1{x^2}$, $v = -\dfrac1x$:

$$\int_1^e\frac{\ln^2 x}{x^2}\,dx = -\frac{\ln^2 x}{x}\Big|_1^e + \int_1^e\frac{2\ln x}{x^2}\,dx = -\frac1e + 2\int_1^e\frac{\ln x}{x^2}\,dx.$$

Din nou prin părți: $\displaystyle\int_1^e\frac{\ln x}{x^2}\,dx = -\frac{\ln x}{x}\Big|_1^e + \int_1^e\frac1{x^2}\,dx = -\frac1e + 1 - \frac1e = 1 - \frac2e$. (Echivalent, o primitivă este $-\dfrac{1 + \ln x}{x}$.)

Deci $\displaystyle\int_1^e\frac{\ln^2 x}{x^2}\,dx = -\frac1e + 2 - \frac4e = 2 - \frac5e$, iar

$$\mathcal A = 1 - \frac1e + 2 - \frac5e = 3 - \frac6e = 3\left(1 - \frac2e\right).$$

Egalând cu $m\left(1 - \dfrac2e\right)$ (paranteza e nenulă, $e \ne 2$): $m = 3$.

**Răspuns:** $m = 3$. *Barem: 2p expresia lui $g$ și scrierea ariei, 3p calculul integralei și valoarea lui $m$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_2 = 18$ |
| I.2 | $a = -1$ |
| I.3 | $x \in \{1, 3\}$ |
| I.4 | 18 numere |
| I.5 | $C(4, 5)$ |
| I.6 | $R = \sqrt{10}$ |
| II.1.c | $a = -1$ |
| II.2.b | $m = 1$ |
| II.2.c | $m = -3$ |
| III.1.b | $y = x + 2$ |
| III.2.c | $m = 3$ |

## Ce merită reținut din varianta 2

- **Matrici de forma $A(a)$ cu $A(a)A(b) = A(a \ast b)$**: reduci ecuațiile matriceale la ecuații în parametru; folosește injectivitatea lui $t \mapsto A(t)$.
- **Sume de puteri ale rădăcinilor**: înlocuiește rădăcina în polinom, împarte convenabil și adună; sau folosește formulele lui Newton.
- **Semnul derivatei**: când numărătorul e greu de studiat direct, consideră-l o funcție nouă și studiază-i monotonia.
- **Integrale cu $\ln^k x / x^2$**: integrare prin părți repetată, coborând puterea logaritmului.
