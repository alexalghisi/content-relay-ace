Rezolvarea completă a subiectului de **Bacalaureat 2014 la Matematică M_șt-nat**, sesiunea iunie–iulie (2 iulie 2014), **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Partea reală a numărului $z = 3 + 2(1 - i)$

$$z = 3 + 2 - 2i = 5 - 2i \Rightarrow \operatorname{Re} z = 5.$$

**Răspuns:** $5$. *Barem: 3p, 2p.*

### 2. $x_1 + x_2 + 2x_1x_2 = 23$ pentru soluțiile ecuației $x^2 - 3x + 10 = 0$

Viète: $x_1 + x_2 = 3$, $x_1x_2 = 10$, deci $3 + 2\cdot 10 = 23$. *Barem: 3p, 2p.*

### 3. Ecuația $\sqrt{x^2 + x + 1} = 1$

$x^2 + x + 1 > 0$ pentru orice $x$ ($\Delta < 0$). Ridicând la pătrat: $x^2 + x + 1 = 1 \iff x(x + 1) = 0$.

**Răspuns:** $x \in \{-1, 0\}$ (ambele verifică ecuația). *Barem: 3p, 2p.*

### 4. Câte numere impare de trei cifre distincte se formează cu elementele lui $\{1, 2, 3\}$?

- cifra unităților (impară): $1$ sau $3$ — **2** moduri;
- cifra zecilor: oricare dintre cele 2 rămase — **2** moduri;
- cifra sutelor: ultima cifră rămasă — **1** mod.

$$2\cdot 2\cdot 1 = 4 \quad (123, 213, 231, 321).$$

**Răspuns:** $4$. *Barem: 2p, 2p, 1p.*

### 5. $a$ pentru care dreptele $y = (a - 1)x + 1$ și $y = 2x - 3$ sunt paralele

Pantele trebuie să fie egale (ordonatele la origine diferă): $a - 1 = 2 \iff a = 3$.

**Răspuns:** $a = 3$. *Barem: 3p, 2p.*

### 6. Raza cercului circumscris triunghiului cu $AB = 3$, $AC = 4$, $BC = 5$

$AB^2 + AC^2 = 9 + 16 = 25 = BC^2$, deci triunghiul este dreptunghic în $A$ ($A = \frac\pi2$). Ipotenuza este diametru al cercului circumscris:

$$R = \frac{BC}{2} = \frac52.$$

**Răspuns:** $R = \dfrac52$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} x & 1\\ 1 & x\end{pmatrix}$

#### a) $\det(A(2))$

$$\det A(2) = 2\cdot 2 - 1\cdot 1 = 3.$$

**Răspuns:** $3$. *Barem: 3p, 2p.*

#### b) $x$ cu $A(x)\cdot A(-x) = I_2$

$$A(x)A(-x) = \begin{pmatrix} -x^2 + 1 & x - x\\ -x + x & 1 - x^2\end{pmatrix} = \begin{pmatrix} 1 - x^2 & 0\\ 0 & 1 - x^2\end{pmatrix} = I_2 \iff 1 - x^2 = 1 \iff x = 0.$$

**Răspuns:** $x = 0$. *Barem: 3p, 2p.*

#### c) $\det(A(1) + A(2) + \dots + A(n)) = \dfrac{n^2(n-1)(n+3)}{4}$

$$A(1) + \dots + A(n) = \begin{pmatrix} \frac{n(n+1)}{2} & n\\ n & \frac{n(n+1)}{2}\end{pmatrix}.$$

$$\det = \frac{n^2(n+1)^2}{4} - n^2 = \frac{n^2\left[(n+1)^2 - 4\right]}{4} = \frac{n^2(n + 1 - 2)(n + 1 + 2)}{4} = \frac{n^2(n-1)(n+3)}{4}.$$

*Barem: 2p, 3p.*

### 2. $x * y = 4(x + y - 3) - xy$ (asociativă)

#### a) $2 * 4$

$$2 * 4 = 4(2 + 4 - 3) - 8 = 12 - 8 = 4.$$

**Răspuns:** $4$. *Barem: 3p, 2p.*

#### b) $x * y = 4 - (x - 4)(y - 4)$

$$4 - (x - 4)(y - 4) = 4 - xy + 4x + 4y - 16 = 4x + 4y - 12 - xy = x * y.$$

*Barem: 2p, 3p.*

#### c) Ecuația $x * x * x = x$

$x * x = 4 - (x-4)^2$, deci $(x * x) - 4 = -(x-4)^2$ și

$$x * x * x = 4 - \big(-(x-4)^2\big)(x - 4) = 4 + (x - 4)^3.$$

$$4 + (x-4)^3 = x \iff (x-4)^3 = x - 4 \iff (x - 4)\big((x-4)^2 - 1\big) = 0 \iff x - 4 \in \{-1, 0, 1\}.$$

**Răspuns:** $x \in \{3, 4, 5\}$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = x\ln x - x + 1$

#### a) $\lim\limits_{x\to e} f(x) = 1$

$f$ este continuă, deci $\lim\limits_{x\to e} f(x) = f(e) = e\ln e - e + 1 = 1$. *Barem: 2p, 3p.*

#### b) $f'(x) = \ln x$

$$f'(x) = \ln x + x\cdot\frac1x - 1 = \ln x.$$

*Barem: 3p, 2p.*

#### c) $f(x) \ge 0$ pentru orice $x > 0$

$f'(1) = 0$, $f' < 0$ pe $(0, 1)$ și $f' > 0$ pe $(1, +\infty)$, deci $x = 1$ este punct de minim global:

$$f(x) \ge f(1) = 0 - 1 + 1 = 0. \ \blacksquare$$

*Barem: 3p, 2p.*

### 2. $f:(-3, +\infty) \to \mathbb R$, $f(x) = \dfrac{1}{x^2 + 8x + 15}$

Observăm că $x^2 + 8x + 15 = (x + 3)(x + 5)$.

#### a) $\displaystyle\int_0^{2014}(x + 3)(x + 5)f(x)\,dx = 2014$

Integrandul este $1$:

$$\int_0^{2014} 1\,dx = 2014.$$

*Barem: 2p, 3p.*

#### b) $\displaystyle\int_{-1}^1 f(x)f'(x)\,dx = -\frac{1}{144}$

$$\int_{-1}^1 f f'\,dx = \frac{f^2(x)}{2}\Big|_{-1}^1 = \frac12\left(f^2(1) - f^2(-1)\right).$$

$f(1) = \frac{1}{24}$, $f(-1) = \frac{1}{8}$:

$$\frac12\left(\frac{1}{576} - \frac{1}{64}\right) = \frac12\cdot\frac{1 - 9}{576} = -\frac{4}{576} = -\frac{1}{144}.$$

*Barem: 3p, 2p.*

#### c) $a > 0$ pentru care aria delimitată de $G_f$, $Ox$, $x = 0$, $x = a$ este $\frac12\ln\frac{10}{9}$

$f > 0$ pe $[0, a]$ și $\dfrac{1}{(x+3)(x+5)} = \dfrac12\left(\dfrac{1}{x+3} - \dfrac{1}{x+5}\right)$:

$$\mathcal A = \frac12\ln\frac{x + 3}{x + 5}\Big|_0^a = \frac12\left(\ln\frac{a+3}{a+5} - \ln\frac35\right) = \frac12\ln\frac{5(a+3)}{3(a+5)}.$$

$$\frac{5(a+3)}{3(a+5)} = \frac{10}{9} \iff 45(a + 3) = 30(a + 5) \iff 15a = 15 \iff a = 1.$$

**Răspuns:** $a = 1$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $5$ |
| I.3 | $x \in \{-1, 0\}$ |
| I.4 | $4$ |
| I.5 | $a = 3$ |
| I.6 | $R = \tfrac52$ |
| II.1.a | $3$ |
| II.1.b | $x = 0$ |
| II.2.a | $4$ |
| II.2.c | $x \in \{3, 4, 5\}$ |
| III.2.c | $a = 1$ |

## Ce merită reținut din varianta 1

- **Triunghi dreptunghic**: raza cercului circumscris este jumătate din ipotenuză.
- **Legea $a - (x - a)(y - a)$**: compunerea de $n$ ori a lui $x$ dă $a \pm (x - a)^n$ — atenție la semn.
- **Descompunerea în fracții simple**: $\frac{1}{(x+p)(x+q)} = \frac{1}{q - p}\left(\frac{1}{x+p} - \frac{1}{x+q}\right)$.
- **$\int f f'$** se calculează direct ca $\frac{f^2}{2}$.
