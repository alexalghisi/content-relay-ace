Rezolvarea completă a subiectului de **Bacalaureat 2026 la Matematică M_mate-info**, subiectul de rezervă al sesiunii iunie–iulie, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $3i(2 + i) + 2(2 - 3i) = 1$

Desfacem parantezele și folosim $i^2 = -1$:

$$3i(2+i) + 2(2-3i) = 6i + 3i^2 + 4 - 6i = 3\cdot(-1) + 4 + (6i - 6i) = -3 + 4 = 1.$$

*Barem: 3p desfacerea parantezelor, 2p finalizarea.*

### 2. $f(x) = 2x - 5$: determinați $a$ cu $a + f(a - 1) + f(a + 1) = 0$

$f(a - 1) = 2(a-1) - 5 = 2a - 7$ și $f(a+1) = 2(a+1) - 5 = 2a - 3$.

$$a + 2a - 7 + 2a - 3 = 0 \iff 5a - 10 = 0 \iff a = 2.$$

**Răspuns:** $a = 2$. *Barem: 2p expresiile, 3p rezolvarea ecuației.*

### 3. Ecuația $\dfrac12\log_2(6x - 8) = \log_2 x$

**Condiții de existență:** $6x - 8 > 0$ și $x > 0$, adică $x > \dfrac43$.

Înmulțim cu 2 și folosim $2\log_2 x = \log_2 x^2$ (valabil pentru $x > 0$):

$$\log_2(6x - 8) = \log_2 x^2 \iff 6x - 8 = x^2 \iff x^2 - 6x + 8 = 0 \iff (x-2)(x-4) = 0.$$

Ambele soluții sunt mai mari decât $\frac43$, deci convin. Verificare: $x = 2$: $\frac12\log_2 4 = 1 = \log_2 2$ ✔; $x = 4$: $\frac12\log_2 16 = 2 = \log_2 4$ ✔.

**Răspuns:** $x \in \{2, 4\}$. *Barem: 2p ecuația de gradul II, 3p soluțiile care convin.*

### 4. Probabilitatea ca un număr din $A = \{3, 6, 9, \dots, 60\}$ să fie divizibil cu 5

$A$ conține multiplii lui 3 de la $3\cdot1$ la $3\cdot20$, deci are **20 de elemente** — 20 de cazuri posibile.

Un multiplu de 3 este divizibil cu 5 dacă și numai dacă este divizibil cu 15 (3 și 5 sunt prime între ele): $15, 30, 45, 60$ — **4 cazuri favorabile**.

$$p = \frac{4}{20} = \frac15.$$

**Răspuns:** $p = \dfrac15$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(2,2)$, $B(a, 0)$, $C(1, b)$: determinați $a$, $b$ cu $\overrightarrow{OB} + \overrightarrow{OC} = 2\overrightarrow{OA}$

Relația se scrie $\overrightarrow{OA} = \dfrac12\left(\overrightarrow{OB} + \overrightarrow{OC}\right)$, adică $A$ este **mijlocul segmentului** $BC$. Coordonatele mijlocului:

$$\frac{a + 1}{2} = 2, \qquad \frac{0 + b}{2} = 2 \Rightarrow a = 3, \ b = 4.$$

(Echivalent, pe componente: $(a + 1, b) = (4, 4)$.)

**Răspuns:** $a = 3$, $b = 4$. *Barem: 2p interpretarea ca mijloc, 3p valorile.*

### 6. Triunghi dreptunghic în $A$, $AC = 6$, $B = \dfrac\pi3$: arătați că aria este $6\sqrt3$

În triunghiul dreptunghic, tangenta unghiului $B$ este cateta opusă supra cateta alăturată:

$$\operatorname{tg}B = \frac{AC}{AB} \Rightarrow \sqrt3 = \frac{6}{AB} \Rightarrow AB = \frac{6}{\sqrt3} = 2\sqrt3.$$

Aria triunghiului dreptunghic este semiprodusul catetelor:

$$\mathcal A_{ABC} = \frac{AB\cdot AC}{2} = \frac{2\sqrt3\cdot 6}{2} = 6\sqrt3.$$

*Barem: 3p calculul lui $AB$, 2p aria.*

## Subiectul al II-lea (30 de puncte)

### 1. $I_3$ și $A(a) = \begin{pmatrix}2a - 1 & 2 & 1\\ 0 & -1 & -a\\ 0 & 2 & 2a\end{pmatrix}$

#### a) $\det(A(3)) = 0$

$$A(3) = \begin{pmatrix}5 & 2 & 1\\ 0 & -1 & -3\\ 0 & 2 & 6\end{pmatrix}.$$

Prima coloană are două zerouri, deci dezvoltăm după ea:

$$\det(A(3)) = 5\cdot\begin{vmatrix}-1 & -3\\ 2 & 6\end{vmatrix} = 5\cdot(-6 + 6) = 0.$$

(Cu Sarrus: $-30 + 0 + 0 - 0 + 30 - 0 = 0$.) *Barem: 2p scrierea determinantului, 3p calculul.*

#### b) $A(a)\cdot A(a) = (2a - 1)A(a)$

Calculăm produsul linie cu coloană:

- linia 1: $\big((2a-1)^2,\ 2(2a-1) - 2 + 2,\ (2a-1) - 2a + 2a\big) = \big((2a-1)^2,\ 4a - 2,\ 2a - 1\big)$;
- linia 2: $\big(0,\ 1 - 2a,\ a - 2a^2\big)$;
- linia 3: $\big(0,\ -2 + 4a,\ -2a + 4a^2\big)$.

Scoatem factorul $2a - 1$ din fiecare element: $4a - 2 = 2(2a-1)$, $1 - 2a = -(2a-1)$, $a - 2a^2 = -a(2a-1)$, $-2 + 4a = 2(2a-1)$, $-2a + 4a^2 = 2a(2a-1)$. Deci

$$A(a)\cdot A(a) = (2a-1)\begin{pmatrix}2a-1 & 2 & 1\\ 0 & -1 & -a\\ 0 & 2 & 2a\end{pmatrix} = (2a-1)A(a).$$

*Barem: 3p calculul produsului, 2p scrierea ca $(2a-1)A(a)$.*

#### c) $n \in \mathbb N$ cu $A(n)\cdot B(n) = 2n^2A(n)$, unde $B(n) = A(n) + nI_3$

Folosind b) și $A(n)I_3 = A(n)$:

$$A(n)B(n) = A(n)^2 + nA(n) = (2n - 1)A(n) + nA(n) = (3n - 1)A(n).$$

Ecuația devine $(3n - 1)A(n) = 2n^2A(n) \iff (2n^2 - 3n + 1)A(n) = O_3$. Matricea $A(n)$ nu este niciodată nulă (are elementul $2$ pe poziția $(1,2)$), deci $2n^2 - 3n + 1 = 0 \iff (2n - 1)(n - 1) = 0$, adică $n = \frac12$ sau $n = 1$. Doar $n = 1$ este natural.

**Răspuns:** $n = 1$. *Barem: 3p relația $A(n)B(n) = (3n-1)A(n)$, 2p valoarea lui $n$.*

### 2. Polinomul $f = X^4 - X^3 + aX^2 + bX - 6$

#### a) Pentru $a = 4$, $b = 0$: $f(-1) = 0$

$f = X^4 - X^3 + 4X^2 - 6$, deci

$$f(-1) = (-1)^4 - (-1)^3 + 4(-1)^2 - 6 = 1 + 1 + 4 - 6 = 0.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) Pentru $a = b = 1$: câtul și restul împărțirii lui $f$ la $g = X^2 - X + 1$

$f = X^4 - X^3 + X^2 + X - 6$. Observăm că primii trei termeni conțin factorul $g$:

$$X^4 - X^3 + X^2 = X^2(X^2 - X + 1),$$

deci $f = (X^2 - X + 1)\cdot X^2 + (X - 6)$. Cum $\operatorname{grad}(X - 6) = 1 < 2 = \operatorname{grad} g$, aceasta este exact împărțirea cu rest.

**Răspuns:** câtul $q = X^2$, restul $r = X - 6$. *Barem: 3p câtul, 2p restul.*

#### c) Perechile $(a, b)$ de numere naturale pentru care $f$ are două rădăcini opuse

Fie $x_1$ și $x_2 = -x_1$ rădăcini. Termenul liber $-6 \ne 0$, deci $f(0) \ne 0$ și $x_1 \ne 0$.

Din $f(x_1) = f(-x_1) = 0$ obținem atât suma, cât și diferența nule:

- $f(x_1) + f(-x_1) = 2(x_1^4 + ax_1^2 - 6) = 0 \Rightarrow x_1^4 + ax_1^2 - 6 = 0$ (puterile pare rămân);
- $f(x_1) - f(-x_1) = 2(-x_1^3 + bx_1) = 0 \Rightarrow x_1(b - x_1^2) = 0$ (puterile impare rămân).

Cum $x_1 \ne 0$: $x_1^2 = b$. Înlocuind în prima relație: $b^2 + ab - 6 = 0 \iff b(a + b) = 6$.

Cu $a, b \in \mathbb N$: $b$ este divizor al lui 6, iar $a + b = \frac6b \ge b$:

- $b = 1 \Rightarrow a + 1 = 6 \Rightarrow a = 5$;
- $b = 2 \Rightarrow a + 2 = 3 \Rightarrow a = 1$;
- $b = 3 \Rightarrow a = 2 - 3 = -1 \notin \mathbb N$; $b = 6 \Rightarrow a = -5 \notin \mathbb N$ — respinse.

**Verificare:** $(a,b) = (1,2)$: $f = (X^2 - 2)(X^2 - X + 3)$, rădăcinile $\pm\sqrt2$ ✔; $(a, b) = (5, 1)$: $f = (X - 1)(X + 1)(X^2 - X + 6)$, rădăcinile $\pm 1$ ✔.

**Răspuns:** $(a, b) \in \{(1, 2),\ (5, 1)\}$. *Barem: 2p relațiile $x_1^4 + ax_1^2 - 6 = 0$ și $x_1^3 - bx_1 = 0$, 3p $b(a+b) = 6$ și perechile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = 2\sqrt{2x^2 + 1} - 3\ln(2x^2 + 1)$

#### a) $f'(x) = \dfrac{4x\left(\sqrt{2x^2 + 1} - 3\right)}{2x^2 + 1}$

Cu $u = 2x^2 + 1$, $u' = 4x$: $(\sqrt u)' = \dfrac{u'}{2\sqrt u}$ și $(\ln u)' = \dfrac{u'}{u}$.

$$f'(x) = 2\cdot\frac{4x}{2\sqrt{2x^2+1}} - 3\cdot\frac{4x}{2x^2 + 1} = \frac{4x}{\sqrt{2x^2 + 1}} - \frac{12x}{2x^2 + 1}.$$

Aducem la numitorul comun $2x^2 + 1 = \left(\sqrt{2x^2+1}\right)^2$:

$$f'(x) = \frac{4x\sqrt{2x^2 + 1} - 12x}{2x^2 + 1} = \frac{4x\left(\sqrt{2x^2+1} - 3\right)}{2x^2 + 1}, \quad x \in \mathbb R.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Tangenta în punctul de abscisă $x = 0$

$f(0) = 2\sqrt1 - 3\ln 1 = 2$ și $f'(0) = 0$ (factorul $4x$ se anulează).

Ecuația tangentei: $y - f(0) = f'(0)(x - 0) \iff y - 2 = 0 \iff y = 2$.

**Răspuns:** $y = 2$ (tangentă orizontală). *Barem: 2p $f(0)$ și $f'(0)$, 3p ecuația.*

#### c) $f(x) = m$ are exact două soluții pentru orice $m \in (2, +\infty)$

$f'(x) = 0 \iff x = 0$ sau $\sqrt{2x^2 + 1} = 3 \iff 2x^2 + 1 = 9 \iff x = \pm 2$.

Semnul lui $f'$: numitorul e pozitiv; $\sqrt{2x^2+1} - 3 < 0$ pentru $|x| < 2$ și $> 0$ pentru $|x| > 2$.

| $x$ | $-\infty$ | | $-2$ | | $0$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|---|---|
| $4x$ | | $-$ | $-$ | $-$ | $0$ | $+$ | $+$ | $+$ | |
| $\sqrt{2x^2+1} - 3$ | | $+$ | $0$ | $-$ | $-$ | $-$ | $0$ | $+$ | |
| $f'(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $+\infty$ | ↘ | $f(-2)$ | ↗ | $2$ | ↘ | $f(2)$ | ↗ | $+\infty$ |

Limitele: pentru $x \to \pm\infty$, $f(x) = \sqrt{2x^2+1}\left(2 - \dfrac{3\ln(2x^2+1)}{\sqrt{2x^2+1}}\right) \to +\infty$, deoarece $\dfrac{\ln t}{\sqrt t} \to 0$ când $t \to +\infty$.

Fie $m > 2$.

- Pe $[-2, 2]$: $f$ crește pe $[-2, 0]$ și descrește pe $[0, 2]$, deci $f(x) \le f(0) = 2 < m$ — nicio soluție.
- Pe $(-\infty, -2)$: $f$ este strict descrescătoare, continuă, cu valori de la $+\infty$ până la $f(-2) \le 2$; deci ia valoarea $m$ exact o dată.
- Pe $(2, +\infty)$: $f$ este strict crescătoare, continuă, cu valori de la $f(2) \le 2$ până la $+\infty$; deci ia valoarea $m$ exact o dată.

(De fapt $f(\pm2) = 6 - 3\ln 9 < 2$, dar e suficient că $f(\pm 2) \le f(0) = 2$.) În total, ecuația $f(x) = m$ are **exact două soluții** pentru orice $m \in (2, +\infty)$.

*Barem: 2p monotonia, 3p concluzia (limitele la $\pm\infty$, $f(0) = 2$, continuitatea).*

### 2. $f:(-2, +\infty) \to \mathbb R$, $f(x) = 4x^3 + \dfrac{1}{x + 2}$

#### a) $\displaystyle\int_1^2\left(f(x) - \frac{1}{x+2}\right)dx = 15$

$f(x) - \dfrac{1}{x+2} = 4x^3$, a cărei primitivă este $x^4$:

$$\int_1^2 4x^3\,dx = x^4\Big|_1^2 = 16 - 1 = 15.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^e\frac{4\ln x}{f(x) - 4x^3}\,dx = e^2 + 9$

$f(x) - 4x^3 = \dfrac{1}{x+2}$, deci integrandul devine $4\ln x\cdot(x + 2) = (4x + 8)\ln x$. Integrăm prin părți, cu $u = \ln x$, $v' = 4x + 8$, $v = 2x^2 + 8x$:

$$\int_1^e (4x+8)\ln x\,dx = (2x^2 + 8x)\ln x\,\Big|_1^e - \int_1^e (2x^2 + 8x)\cdot\frac1x\,dx = (2e^2 + 8e) - \int_1^e (2x + 8)\,dx.$$

$$\int_1^e (2x + 8)\,dx = (x^2 + 8x)\Big|_1^e = e^2 + 8e - 9.$$

Rezultatul: $2e^2 + 8e - e^2 - 8e + 9 = e^2 + 9$.

*Barem: 3p integrarea prin părți, 2p calculul final.*

#### c) Aria pentru $g(x) = f(e^x) - 4e^{3x}$ între $x = 0$ și $x = 1$ este $\dfrac12\ln\dfrac{3e}{e+2}$

$f(e^x) = 4e^{3x} + \dfrac{1}{e^x + 2}$, deci $g(x) = \dfrac{1}{e^x + 2} > 0$. Aria este

$$\mathcal A = \int_0^1 |g(x)|\,dx = \int_0^1\frac{1}{e^x + 2}\,dx.$$

Truc: $\dfrac{1}{e^x + 2} = \dfrac12\cdot\dfrac{(e^x + 2) - e^x}{e^x + 2} = \dfrac12\left(1 - \dfrac{e^x}{e^x + 2}\right)$, iar $\dfrac{e^x}{e^x+2} = \dfrac{(e^x + 2)'}{e^x + 2}$ are primitiva $\ln(e^x + 2)$.

$$\mathcal A = \frac12\Big(x - \ln(e^x + 2)\Big)\Big|_0^1 = \frac12\Big(1 - \ln(e + 2) + \ln 3\Big) = \frac12\left(1 - \ln\frac{e + 2}{3}\right).$$

Cum $1 = \ln e$: $\mathcal A = \dfrac12\left(\ln e - \ln\dfrac{e+2}{3}\right) = \dfrac12\ln\dfrac{3e}{e + 2}$.

*Barem: 3p expresia lui $g$ și primitiva, 2p finalizarea.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $1$ |
| I.2 | $a = 2$ |
| I.3 | $x \in \{2, 4\}$ |
| I.4 | $p = \frac15$ |
| I.5 | $a = 3$, $b = 4$ |
| I.6 | aria $= 6\sqrt3$ |
| II.1.c | $n = 1$ |
| II.2.b | câtul $X^2$, restul $X - 6$ |
| II.2.c | $(1, 2)$ și $(5, 1)$ |
| III.1.b | $y = 2$ |
| III.2.c | $\frac12\ln\frac{3e}{e+2}$ |

## Ce merită reținut din varianta 7

- **Relații matriceale de tipul $A^2 = kA$**: folosește-le ca să simplifici orice expresie polinomială în $A$, fără a mai calcula produse.
- **Rădăcini opuse**: din $f(x_1) = f(-x_1) = 0$ scrie suma (partea pară) și diferența (partea impară) — două ecuații simple.
- **Număr exact de soluții**: tabelul de variație + limitele la capete + valoarea extremului local.
- **Integrale cu $\frac{1}{e^x + k}$**: adaugă și scade $e^x$ la numărător ca să apară $\frac{(e^x + k)'}{e^x + k}$.
