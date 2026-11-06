Rezolvarea completă a subiectului de **Bacalaureat 2019 la Matematică M_mate-info**, modelul oficial publicat de minister. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Elementele mulțimii $M = \left\{x \in \mathbb Z \;\middle|\; \frac{3}{x + 1} \in \mathbb N\right\}$

$\frac{3}{x+1} \in \mathbb N$ cere ca $x + 1$ să fie un divizor **pozitiv** al lui 3: $x + 1 \in \{1, 3\}$, deci $x \in \{0, 2\}$.

**Răspuns:** $M = \{0, 2\}$. *Barem: 3p, 2p.*

### 2. $x^2 - mx - 1 = 0$: determinați $m$ cu $\frac{x_1^2 - 1}{x_1} + \frac{x_2^2 - 1}{x_2} = 2$

Rădăcinile verifică ecuația: $x_k^2 - 1 = mx_k$. Atunci suma este $\frac{mx_1}{x_1} + \frac{mx_2}{x_2} = 2m = 2$ (rădăcinile sunt nenule, produsul lor fiind $-1$), deci $m = 1$.

**Răspuns:** $m = 1$. *Barem: 2p, 3p.*

### 3. Ecuația $\sqrt{2 - x} - x = 0$

$\sqrt{2 - x} = x \Rightarrow 2 - x = x^2 \iff x^2 + x - 2 = 0 \iff x \in \{-2, 1\}$. Cum $\sqrt{2-x} \ge 0$, trebuie $x \ge 0$: $x = -2$ nu convine.

**Răspuns:** $x = 1$. *Barem: 3p, 2p.*

### 4. $A = \{\log_2 n \mid n \in \mathbb N^*, n \le 20\}$: probabilitatea ca un element să fie natural

$A$ are 20 de elemente (logaritmul e injectiv). $\log_2 n \in \mathbb N \iff n$ este putere a lui 2: $n \in \{1, 2, 4, 8, 16\}$ — 5 cazuri favorabile.

$$p = \frac{5}{20} = \frac14.$$

*Barem: 1p, 2p, 2p.*

### 5. Mediatoarea segmentului $MP$, $M(0,2)$, $P(1,1)$

$m_{MP} = \frac{1 - 2}{1 - 0} = -1$, deci panta mediatoarei este $1$. Mijlocul $Q\left(\frac12, \frac32\right)$:

$$y - \tfrac32 = x - \tfrac12 \iff y = x + 1.$$

**Răspuns:** $y = x + 1$. *Barem: 2p, 3p.*

### 6. $AB = 5\sqrt2$, $\angle A = 45^\circ$, $\angle C = 30^\circ$: lungimea $BC$

Teorema sinusurilor: $\dfrac{AB}{\sin C} = \dfrac{BC}{\sin A} \Rightarrow \dfrac{5\sqrt2}{\frac12} = \dfrac{BC}{\frac{\sqrt2}2} \Rightarrow BC = 10\sqrt2\cdot\frac{\sqrt2}{2} = 10$.

**Răspuns:** $BC = 10$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $M(m) = \begin{pmatrix}1 & 2 & 4\\ -1 & m & -1\\ m & 1 & 3\end{pmatrix}$, sistemul $\begin{cases}x + 2y + 4z = 5\\ -x + my - z = -2\\ mx + y + 3z = 4\end{cases}$

**a)** Sarrus pentru $M(0)$: $0 + (-4) + 0 - 0 - (-6) - (-1) = 3$. $\blacksquare$ *Barem: 2p, 3p.*

**b)** $\det M(m) = 3m - 2m + 4 - 4m^2 + 6 + 1$… calculat complet:

$$\det M(m) = 1\cdot(3m + 1) - 2\cdot(-3 + m) + 4\cdot(-1 - m^2) = -4m^2 + m + 3 = -(4m + 3)(m - 1).$$

Soluție unică $\iff \det \ne 0 \iff m \notin \left\{-\frac34, 1\right\}$.

**Răspuns:** $m \in \mathbb R\setminus\left\{-\frac34, 1\right\}$. *Barem: 2p, 3p.*

**c)** Pentru $m = 1$ sistemul este compatibil nedeterminat. Cu $z = \alpha$: din ecuațiile 2 și 3, adunate, $2y + 2z = 2 \Rightarrow y = 1 - \alpha$, apoi $x = 3 - 2\alpha$. Soluțiile: $(3 - 2\alpha, 1 - \alpha, \alpha)$.

Condiția $4y_0^2 = (x_0 + z_0)^2$: $4(1 - \alpha)^2 = (3 - \alpha)^2 \iff 2(1-\alpha) = \pm(3 - \alpha)$:

- $2 - 2\alpha = 3 - \alpha \Rightarrow \alpha = -1$: soluția $(5, 2, -1)$;
- $2 - 2\alpha = \alpha - 3 \Rightarrow \alpha = \frac53$: soluția $\left(-\frac13, -\frac23, \frac53\right)$.

*Barem: 3p soluția generală, 2p soluțiile cerute.*

### 2. $x * y = \frac13xy - \frac12(x + y) + \frac94$

**a)** $$\frac13\left(x - \frac32\right)\left(y - \frac32\right) + \frac32 = \frac13xy - \frac12x - \frac12y + \frac34 + \frac32 = x * y.\ \blacksquare$$

*Barem: 2p, 3p.*

**b)** Fie $t = x - \frac32$. Atunci $x * x = \frac13t^2 + \frac32$ și $x * x * x = \frac19t^3 + \frac32$. Ecuația: $\frac19t^3 = t \iff t(t^2 - 9) = 0 \iff t \in \{0, \pm3\}$.

**Răspuns:** $x \in \left\{-\frac32, \frac32, \frac92\right\}$. *Barem: 2p, 3p.*

**c)** Elementul neutru: $x * \frac92 = \frac13(x - \frac32)\cdot 3 + \frac32 = x$, deci $e = \frac92$. Simetricul $n'$ al lui $n$: $n * n' = \frac92 \iff \frac13\left(n - \frac32\right)\left(n' - \frac32\right) = 3 \iff (2n - 3)(2n' - 3) = 36$.

Dacă $n, n' \in \mathbb N$, $2n - 3$ și $2n' - 3$ sunt impare, deci produsul lor este impar, nu poate fi $36$. Contradicție. $\blacksquare$

*Barem: 2p neutrul, 3p argumentul de paritate.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x - \ln(x^2 + x + 1)$

**a)** $$f'(x) = 1 - \frac{2x + 1}{x^2 + x + 1} = \frac{x^2 - x}{x^2 + x + 1} = \frac{x(x - 1)}{x^2 + x + 1}.\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** Tangenta paralelă cu $y = -\frac17x + 2 \iff f'(a) = -\frac17$:

$$7a(a - 1) = -(a^2 + a + 1) \iff 8a^2 - 6a + 1 = 0 \iff a \in \left\{\tfrac14, \tfrac12\right\}.$$

*Barem: 2p, 3p.*

**c)** $f(x) = -n$. Pe $[0, +\infty)$: $f$ scade pe $[0, 1]$ și crește pe $[1, +\infty)$, cu minimul $f(1) = 1 - \ln 3 \in (-1, 0)$; deci $f(x) > -1 \ge -n$ — nicio soluție.

Pe $(-\infty, 0)$: $f' > 0$, $f$ strict crescătoare și continuă, cu $\lim\limits_{x\to-\infty}f(x) = -\infty$ și $f(0) = 0$, deci ia fiecare valoare din $(-\infty, 0)$ exact o dată — în particular $-n$. Soluția este unică. $\blacksquare$

*Barem: 3p, 1p, 1p.*

### 2. $f(x) = \dfrac{x}{e^x} = xe^{-x}$

**a)** $\int_0^2 e^xf(x)\,dx = \int_0^2 x\,dx = 2$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** O primitivă a lui $xe^{-x}$ este $-(x + 1)e^{-x}$. $f \le 0$ pe $[-1, 0]$, $f \ge 0$ pe $[0, 1]$:

$$\mathcal A = \int_{-1}^0(-xe^{-x})dx + \int_0^1 xe^{-x}dx = (x+1)e^{-x}\Big|_{-1}^0 - (x+1)e^{-x}\Big|_0^1 = (1 - 0) + \left(1 - \frac2e\right) = 2 - \frac2e.\ \blacksquare$$

*Barem: 3p, 2p.*

**c)** $(n + 2)I_n = \int_0^1 (x^{n+2})'e^{-x}dx = x^{n+2}e^{-x}\Big|_0^1 + \int_0^1 x^{n+2}e^{-x}dx = \frac1e + \int_0^1 x^{n+2}e^{-x}dx$.

Pe $[0, 1]$, $0 \le x^{n+2}e^{-x} \le x^{n+2}$, deci $0 \le \int_0^1 x^{n+2}e^{-x}dx \le \frac{1}{n+3} \to 0$. Așadar $\lim\limits_{n\to\infty}(n+2)I_n = \frac1e$. $\blacksquare$

*Barem: 2p, 1p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $M = \{0, 2\}$ |
| I.2 | $m = 1$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac14$ |
| I.5 | $y = x + 1$ |
| I.6 | $BC = 10$ |
| II.1.b | $m \notin \{-\tfrac34, 1\}$ |
| II.1.c | $(5,2,-1)$, $(-\tfrac13,-\tfrac23,\tfrac53)$ |
| II.2.b | $x \in \{-\tfrac32, \tfrac32, \tfrac92\}$ |
| III.1.b | $a \in \{\tfrac14, \tfrac12\}$ |

## Ce merită reținut din acest model

- **Rădăcinile verifică ecuația:** $x_k^2 = mx_k + 1$ simplifică expresii simetrice.
- **Forma $k(x-a)(y-a) + a$** transformă compunerile repetate în puteri.
- **Argumente de paritate** pentru a arăta că nu există soluții naturale.
