Rezolvarea completă a **modelului oficial** pentru **Bacalaureat 2023 la Matematică M_șt-nat**, publicat de minister înaintea examenului. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $5 - 2\sqrt6$, $1$ și $5 + \sqrt{24}$ sunt termeni consecutivi ai unei progresii geometrice

Trei numere $a, b, c$ sunt termeni consecutivi ai unei progresii geometrice dacă $b^2 = a\cdot c$. Aici $b = 1$, deci trebuie arătat că $a\cdot c = 1$.

Observăm că $\sqrt{24} = \sqrt{4\cdot 6} = 2\sqrt6$, deci

$$\left(5 - 2\sqrt6\right)\left(5 + 2\sqrt6\right) = 5^2 - \left(2\sqrt6\right)^2 = 25 - 24 = 1 = 1^2.$$

Prin urmare numerele sunt termeni consecutivi ai unei progresii geometrice (cu rația $q = 5 + 2\sqrt6$). *Barem: 3p calculul produsului, 2p concluzia.*

### 2. $f(x) = ax + 1$, $a \ne 0$: determinați $a$ cu $(f\circ f)(1) = 1$

$f(1) = a + 1$, apoi $(f\circ f)(1) = f(a + 1) = a(a + 1) + 1$.

$$a(a+1) + 1 = 1 \iff a(a+1) = 0 \iff a \in \{0, -1\}.$$

Cum $a$ este nenul, singura valoare acceptată este $a = -1$. Verificare: $f(x) = -x + 1$, $f(1) = 0$, $f(0) = 1$ ✔.

**Răspuns:** $a = -1$. *Barem: 3p calculul lui $(f\circ f)(1)$, 2p soluția (cu eliminarea lui $a = 0$).*

### 3. Ecuația $2^x\cdot\left(\dfrac14\right)^{2-x} = 32$

Scriem totul ca puteri ale lui 2: $\dfrac14 = 2^{-2}$, deci $\left(\dfrac14\right)^{2-x} = 2^{-2(2-x)} = 2^{-4+2x}$, iar $32 = 2^5$.

$$2^x\cdot 2^{2x-4} = 2^5 \iff 2^{3x-4} = 2^5 \iff 3x - 4 = 5 \iff x = 3.$$

**Răspuns:** $x = 3$. *Barem: 3p ajungerea la $3x - 4 = 5$, 2p soluția.*

### 4. Numărul de submulțimi ordonate cu două elemente ale lui $M = \{0, 1, 2, 3, 4\}$

Submulțimile ordonate cu $k$ elemente dintr-o mulțime cu $n$ elemente se numără cu aranjamente (ordinea contează):

$$A_5^2 = \frac{5!}{3!} = 5\cdot 4 = 20.$$

Atenție: aici nu este vorba de numere, deci $0$ poate fi pe orice poziție.

**Răspuns:** 20. *Barem: 3p formula, 2p calculul.*

### 5. Dreapta $d$ prin $B(2,5)$, perpendiculară pe $AB$, unde $A(-2,1)$

Panta lui $AB$: $m_{AB} = \dfrac{5 - 1}{2 - (-2)} = \dfrac44 = 1$.

Două drepte (neverticale) sunt perpendiculare dacă produsul pantelor este $-1$: $m_d\cdot 1 = -1 \Rightarrow m_d = -1$.

Ecuația dreptei prin $B$ cu panta $-1$: $y - 5 = -1\cdot(x - 2) \iff y = -x + 7$.

**Răspuns:** $d:\ y = -x + 7$ (sau $x + y - 7 = 0$). *Barem: 3p pantele, 2p ecuația.*

### 6. $(\operatorname{tg}x + 1)(\operatorname{ctg}x - 1) = 2\operatorname{ctg}2x$, pentru $x \in \left(0, \dfrac\pi2\right)$

Pe acest interval $\sin x \ne 0$ și $\cos x \ne 0$, deci totul are sens. Trecem la sinus și cosinus:

$$(\operatorname{tg}x + 1)(\operatorname{ctg}x - 1) = \frac{\sin x + \cos x}{\cos x}\cdot\frac{\cos x - \sin x}{\sin x} = \frac{\cos^2 x - \sin^2 x}{\sin x\cos x}.$$

Folosim $\cos^2 x - \sin^2 x = \cos 2x$ și $\sin x\cos x = \dfrac12\sin 2x$:

$$\frac{\cos 2x}{\frac12\sin 2x} = 2\cdot\frac{\cos 2x}{\sin 2x} = 2\operatorname{ctg}2x.$$

(Pentru $x \in \left(0, \frac\pi2\right)$, $2x \in (0, \pi)$, deci $\sin 2x \ne 0$.) *Barem: 2p aducerea la $\dfrac{\cos^2x - \sin^2x}{\sin x\cos x}$, 3p finalizarea cu formulele unghiului dublu.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}a & 1 & a+1\\ 1 & a & -1\\ 2 & -a & 4\end{pmatrix}$ și sistemul $\begin{cases}ax + y + (a+1)z = a\\ x + ay - z = 4\\ 2x - ay + 4z = -4\end{cases}$

#### a) $\det(A(1)) = -9$

$$\det(A(1)) = \begin{vmatrix}1 & 1 & 2\\ 1 & 1 & -1\\ 2 & -1 & 4\end{vmatrix}.$$

Cu regula lui Sarrus: termenii pozitivi $1\cdot1\cdot4 + 1\cdot(-1)\cdot2 + 2\cdot1\cdot(-1) = 4 - 2 - 2 = 0$; termenii negativi $2\cdot1\cdot2 + 1\cdot(-1)\cdot(-1) + 1\cdot1\cdot4 = 4 + 1 + 4 = 9$.

$$\det(A(1)) = 0 - 9 = -9.$$

*Barem: 2p scrierea determinantului, 3p calculul.*

#### b) Valorile lui $a$ pentru care sistemul are soluție unică

Sistemul (3 ecuații, 3 necunoscute) are soluție unică exact când determinantul matricei sistemului este nenul.

Sarrus: pozitivi $a\cdot a\cdot 4 + 1\cdot(-1)\cdot 2 + (a+1)\cdot 1\cdot(-a) = 4a^2 - 2 - a^2 - a = 3a^2 - a - 2$; negativi $(a+1)\cdot a\cdot 2 + a\cdot(-1)\cdot(-a) + 1\cdot1\cdot4 = 2a^2 + 2a + a^2 + 4 = 3a^2 + 2a + 4$.

$$\det(A(a)) = 3a^2 - a - 2 - (3a^2 + 2a + 4) = -3a - 6.$$

$\det(A(a)) = 0 \iff a = -2$.

**Răspuns:** $a \in \mathbb R \setminus \{-2\}$. *Barem: 2p determinantul, 3p concluzia.*

#### c) Dacă soluția $(x_0, y_0, z_0)$ e unică, atunci $x_0 + y_0 + z_0 = 2$

Nu e nevoie de regula lui Cramer; combinăm ecuațiile.

**Pas 1.** Adunăm ecuațiile a doua și a treia: $3x_0 + 3z_0 = 0$, deci $x_0 + z_0 = 0$, adică $x_0 = -z_0$.

**Pas 2.** Prima ecuație se scrie $a(x_0 + z_0) + y_0 + z_0 = a$, deci $y_0 + z_0 = a$.

**Pas 3.** A doua ecuație cu $x_0 = -z_0$: $ay_0 - 2z_0 = 4$. Înlocuind $z_0 = a - y_0$:

$$ay_0 - 2a + 2y_0 = 4 \iff (a + 2)y_0 = 2(a + 2) \iff (a+2)(y_0 - 2) = 0.$$

Soluția fiind unică, din b) $a \ne -2$, deci $y_0 = 2$.

**Concluzie:** $x_0 + y_0 + z_0 = (x_0 + z_0) + y_0 = 0 + 2 = 2$. *Barem: 2p $x_0 + z_0 = 0$, 3p $y_0 = 2$ și concluzia.*

### 2. Polinomul $f = X^3 - 3X^2 + 2X + m$

#### a) Pentru $m = 6$, $f(-1) = 0$

$$f(-1) = (-1)^3 - 3(-1)^2 + 2(-1) + 6 = -1 - 3 - 2 + 6 = 0.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $m$ pentru care $f$ este divizibil cu $g = X^2 + 2$

Împărțim $f$ la $X^2 + 2$: $X^3 - 3X^2 + 2X + m = (X - 3)(X^2 + 2) + (m + 6)$.

Verificare: $(X - 3)(X^2 + 2) = X^3 + 2X - 3X^2 - 6$, iar $-6 + (m + 6) = m$ ✔. Restul este constanta $m + 6$; divizibilitatea cere rest nul: $m + 6 = 0$.

**Răspuns:** $m = -6$. *Barem: 3p împărțirea (restul), 2p valoarea lui $m$.*

#### c) $m$ pentru care $x_1^3 + x_2^3 + x_3^3 = 0$

Relațiile lui Viète: $x_1 + x_2 + x_3 = 3$, $x_1x_2 + x_2x_3 + x_3x_1 = 2$, $x_1x_2x_3 = -m$.

Suma pătratelor: $x_1^2 + x_2^2 + x_3^2 = 3^2 - 2\cdot 2 = 5$.

Pentru cuburi, fiecare rădăcină verifică $x_i^3 = 3x_i^2 - 2x_i - m$. Adunând cele trei relații:

$$x_1^3 + x_2^3 + x_3^3 = 3\cdot 5 - 2\cdot 3 - 3m = 9 - 3m.$$

$9 - 3m = 0 \iff m = 3$.

**Răspuns:** $m = 3$. *Barem: 3p exprimarea sumei cuburilor ($9 - 3m$), 2p valoarea lui $m$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(-1, +\infty) \to \mathbb R$, $f(x) = x + \dfrac{\sqrt{x+1}}{e^x}$

#### a) $f'(x) = 1 - \dfrac{2x + 1}{2e^x\sqrt{x+1}}$

Derivăm fracția cu regula câtului, folosind $\left(\sqrt{x+1}\right)' = \dfrac{1}{2\sqrt{x+1}}$ și $(e^x)' = e^x$:

$$\left(\frac{\sqrt{x+1}}{e^x}\right)' = \frac{\frac{1}{2\sqrt{x+1}}e^x - \sqrt{x+1}\,e^x}{e^{2x}} = \frac{\frac{1}{2\sqrt{x+1}} - \sqrt{x+1}}{e^x} = \frac{1 - 2(x+1)}{2e^x\sqrt{x+1}} = -\frac{2x + 1}{2e^x\sqrt{x+1}}.$$

Deci $f'(x) = 1 - \dfrac{2x+1}{2e^x\sqrt{x+1}}$, $x \in (-1, +\infty)$. *Barem: 3p derivarea, 2p forma finală.*

#### b) Asimptota oblică spre $+\infty$

$$m = \lim_{x\to+\infty}\frac{f(x)}{x} = \lim_{x\to+\infty}\left(1 + \frac{\sqrt{x+1}}{x\,e^x}\right) = 1,$$

pentru că $\dfrac{\sqrt{x+1}}{x} \to 0$ și $\dfrac{1}{e^x} \to 0$.

$$n = \lim_{x\to+\infty}\left(f(x) - x\right) = \lim_{x\to+\infty}\frac{\sqrt{x+1}}{e^x} = 0$$

(exponențiala crește mult mai repede decât radicalul; formal, cu l'Hôpital: $\lim \dfrac{1}{2e^x\sqrt{x+1}} = 0$).

**Răspuns:** asimptota oblică este $y = x$. *Barem: 2p $m = 1$, 3p $n = 0$ și concluzia.*

#### c) $f(x) - x \le \sqrt{\dfrac e2}$, pentru orice $x \in (-1, +\infty)$

Notăm $g(x) = f(x) - x = \dfrac{\sqrt{x+1}}{e^x}$. Din a), $g'(x) = -\dfrac{2x + 1}{2e^x\sqrt{x+1}}$, iar numitorul este pozitiv.

$g'(x) = 0 \iff x = -\dfrac12$.

| $x$ | $-1$ | | $-\tfrac12$ | | $+\infty$ |
|---|---|---|---|---|---|
| $g'(x)$ | | $+$ | $0$ | $-$ | |
| $g(x)$ | | ↗ | $\sqrt{e/2}$ | ↘ | |

Deci $-\dfrac12$ este punct de maxim global pe $(-1, +\infty)$:

$$g\left(-\frac12\right) = \frac{\sqrt{1/2}}{e^{-1/2}} = \sqrt{\frac12}\cdot\sqrt e = \sqrt{\frac e2}.$$

Așadar $f(x) - x = g(x) \le \sqrt{\dfrac e2}$ pentru orice $x > -1$. *Barem: 2p derivata lui $g$ și punctul critic, 3p monotonia și concluzia.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = x^2 + x\ln x$

#### a) $\displaystyle\int_1^2 3\left(f(x) - x\ln x\right)dx = 7$

$f(x) - x\ln x = x^2$, deci

$$\int_1^2 3x^2\,dx = x^3\Big|_1^2 = 8 - 1 = 7.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^e\frac{f(x)}{x^3}\,dx = 2\left(1 - \frac1e\right)$

Împărțim: $\dfrac{f(x)}{x^3} = \dfrac1x + \dfrac{\ln x}{x^2}$.

- $\displaystyle\int_1^e\frac1x\,dx = \ln x\Big|_1^e = 1$.
- Prin părți, cu $\left(-\dfrac1x\right)' = \dfrac{1}{x^2}$: $\displaystyle\int_1^e\frac{\ln x}{x^2}\,dx = -\frac{\ln x}{x}\Big|_1^e + \int_1^e\frac{1}{x^2}\,dx = -\frac1e + \left(-\frac1x\right)\Big|_1^e = -\frac1e - \frac1e + 1 = 1 - \frac2e$.

Total: $1 + 1 - \dfrac2e = 2 - \dfrac2e = 2\left(1 - \dfrac1e\right)$. *Barem: 3p descompunerea și integrarea prin părți, 2p rezultatul.*

#### c) Aria suprafeței delimitate de $g(x) = \dfrac{x+1}{f(x)}$, $Ox$, $x = 1$, $x = e$ este strict mai mare decât 1

Pe $[1, e]$, $x + 1 > 0$ și $f(x) = x^2 + x\ln x > 0$ (căci $\ln x \ge 0$), deci $g(x) \ge 0$ și aria este

$$\mathcal A = \int_1^e\frac{x+1}{x^2 + x\ln x}\,dx.$$

Împărțim numărătorul și numitorul cu $x$: $\dfrac{x+1}{x(x + \ln x)} = \dfrac{1 + \frac1x}{x + \ln x}$. Observăm că $(x + \ln x)' = 1 + \dfrac1x$, deci integrandul are forma $\dfrac{u'}{u}$:

$$\mathcal A = \ln(x + \ln x)\Big|_1^e = \ln(e + 1) - \ln 1 = \ln(e + 1).$$

Cum $e + 1 > e$ și $\ln$ este strict crescătoare, $\ln(e+1) > \ln e = 1$. (Numeric $\mathcal A \approx 1{,}313$.)

*Barem: 2p scrierea ariei ca integrală, 3p calculul și comparația.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = -1$ |
| I.3 | $x = 3$ |
| I.4 | 20 |
| I.5 | $y = -x + 7$ |
| II.1.b | $a \in \mathbb R \setminus \{-2\}$ |
| II.2.b | $m = -6$ |
| II.2.c | $m = 3$ |
| III.1.b | $y = x$ |
| III.2.c | $\mathcal A = \ln(e+1) > 1$ |

## Ce merită reținut din model

- **Progresii geometrice**: pentru trei termeni consecutivi verifici $b^2 = ac$; radicalii conjugați dau produse raționale.
- **Sisteme cu parametru**: uneori o sumă cerută iese direct combinând ecuațiile, fără Cramer.
- **Suma cuburilor rădăcinilor**: înlocuiește $x_i^3$ din ecuație și folosește Viète.
- **Arii**: verifică semnul funcției, apoi caută forma $\dfrac{u'}{u}$.
