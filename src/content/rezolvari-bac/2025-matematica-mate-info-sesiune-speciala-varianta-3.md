Rezolvarea completă a subiectului de **Bacalaureat 2025 la Matematică M_mate-info**, sesiunea specială, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie geometrică cu $b_2 = 20$, $b_3 = 100$: determinați $b_1$

Într-o progresie geometrică fiecare termen se obține din precedentul înmulțind cu rația $q$: $b_3 = b_2\cdot q$.

$$q = \frac{b_3}{b_2} = \frac{100}{20} = 5, \qquad b_1 = \frac{b_2}{q} = \frac{20}{5} = 4.$$

Verificare: $4,\ 20,\ 100$ ✔.

**Răspuns:** $b_1 = 4$. *Barem: 3p rația, 2p primul termen.*

### 2. $f(x) = 4x + 3$, $g(x) = x - 3$: determinați $a$ cu $f(a) = g(a)$

$$4a + 3 = a - 3 \iff 3a = -6 \iff a = -2.$$

Verificare: $f(-2) = -5 = g(-2)$ ✔.

**Răspuns:** $a = -2$. *Barem: 3p expresiile $f(a)$ și $g(a)$, 2p rezolvarea.*

### 3. Ecuație exponențială: $9^x\cdot 3^3 = 3^{x+2}$

Scriem în baza 3: $9^x = 3^{2x}$, deci membrul stâng este $3^{2x}\cdot3^3 = 3^{2x+3}$.

$$3^{2x+3} = 3^{x+2} \iff 2x + 3 = x + 2 \iff x = -1.$$

Verificare: $9^{-1}\cdot27 = 3 = 3^{1}$ ✔.

**Răspuns:** $x = -1$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. Probabilitatea ca, pentru $n$ natural de două cifre, $\sqrt n$ să fie număr natural par

**Cazuri posibile:** $n \in \{10, 11, \dots, 99\}$ — 90 de numere.

**Cazuri favorabile:** $\sqrt n = k$ natural par înseamnă $n = k^2$ cu $k$ par. Pătratele perfecte de două cifre sunt $16, 25, 36, 49, 64, 81$ ($k = 4, \dots, 9$); dintre ele, cu $k$ par: $16 = 4^2$, $36 = 6^2$, $64 = 8^2$ — 3 cazuri.

$$p = \frac{3}{90} = \frac{1}{30}.$$

**Răspuns:** $p = \dfrac{1}{30}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(1,3)$, $B(6,2)$, $C(4,a)$: dreptele $AC$ și $OB$ paralele

$m_{OB} = \dfrac{2 - 0}{6 - 0} = \dfrac13$, $m_{AC} = \dfrac{a - 3}{4 - 1} = \dfrac{a-3}{3}$.

Paralele $\Rightarrow$ $\dfrac{a - 3}{3} = \dfrac13 \Rightarrow a - 3 = 1 \Rightarrow a = 4$.

**Răspuns:** $a = 4$. *Barem: 2p $m_{OB}$, 3p $m_{AC}$ și valoarea lui $a$.*

### 6. Triunghi dreptunghic în $A$, aria 32, $BC = AB\sqrt2$; arătați că $AC = 8$

În triunghiul dreptunghic, $\cos B = \dfrac{AB}{BC} = \dfrac{1}{\sqrt2} = \dfrac{\sqrt2}{2}$, deci $B = \dfrac\pi4$. Atunci și $C = \dfrac\pi2 - \dfrac\pi4 = \dfrac\pi4$, deci triunghiul este dreptunghic isoscel: $AB = AC$.

(Alternativ, cu Pitagora: $AC^2 = BC^2 - AB^2 = 2AB^2 - AB^2 = AB^2$, deci $AC = AB$.)

Aria unui triunghi dreptunghic este semiprodusul catetelor:

$$\frac{AB\cdot AC}{2} = 32 \Rightarrow \frac{AC^2}{2} = 32 \Rightarrow AC^2 = 64 \Rightarrow AC = 8.$$

*Barem: 3p $AB = AC$, 2p calculul lui $AC$ din arie.*

## Subiectul al II-lea (30 de puncte)

### 1. $I_3$ și $M(x) = \begin{pmatrix}2x & 3x & -3\\ -x & -2x & 1\\ 0 & 0 & x + 1\end{pmatrix}$

#### a) $\det(M(0)) = 0$

$$M(0) = \begin{pmatrix}0 & 0 & -3\\ 0 & 0 & 1\\ 0 & 0 & 1\end{pmatrix}.$$

Primele două coloane sunt nule, deci determinantul este 0 (orice termen din dezvoltarea Sarrus conține un element din prima coloană, adică 0). *Barem: 2p scrierea determinantului, 3p calculul.*

#### b) $M(x)\cdot M(y) - xyI_3 = (x + y + 1)M(0)$

Calculăm $M(x)M(y)$ linie × coloană:

- $(1,1)$: $2x\cdot2y + 3x\cdot(-y) + 0 = 4xy - 3xy = xy$;
- $(1,2)$: $2x\cdot3y + 3x\cdot(-2y) = 6xy - 6xy = 0$;
- $(1,3)$: $2x\cdot(-3) + 3x\cdot1 + (-3)(y+1) = -6x + 3x - 3y - 3 = -3(x + y + 1)$;
- $(2,1)$: $-x\cdot2y + (-2x)(-y) = 0$; $(2,2)$: $-x\cdot3y + (-2x)(-2y) = xy$;
- $(2,3)$: $-x\cdot(-3) + (-2x)\cdot1 + 1\cdot(y+1) = 3x - 2x + y + 1 = x + y + 1$;
- linia 3: $(0,\ 0,\ (x+1)(y+1)) = (0,\ 0,\ xy + x + y + 1)$.

$$M(x)M(y) = \begin{pmatrix}xy & 0 & -3(x+y+1)\\ 0 & xy & x+y+1\\ 0 & 0 & xy + x + y + 1\end{pmatrix}.$$

Scădem $xyI_3$ (doar diagonala):

$$M(x)M(y) - xyI_3 = \begin{pmatrix}0 & 0 & -3(x+y+1)\\ 0 & 0 & x+y+1\\ 0 & 0 & x+y+1\end{pmatrix} = (x + y + 1)M(0).$$

*Barem: 3p calculul produsului și al diferenței, 2p identificarea cu $(x+y+1)M(0)$.*

#### c) $x$ real cu $M(1)\cdot M(x) - M(2)\cdot M\left(\dfrac x2\right) = 2M(0)$

Din b), $M(a)M(b) = abI_3 + (a + b + 1)M(0)$. Aplicăm:

- $M(1)M(x) = xI_3 + (x + 2)M(0)$;
- $M(2)M\left(\frac x2\right) = xI_3 + \left(\frac x2 + 3\right)M(0)$.

Diferența: termenii $xI_3$ se reduc și rămâne

$$\left(x + 2 - \frac x2 - 3\right)M(0) = \left(\frac x2 - 1\right)M(0).$$

Ecuația: $\left(\dfrac x2 - 1\right)M(0) = 2M(0)$. Cum $M(0) \ne O_3$ (are elemente nenule), coeficienții trebuie să fie egali: $\dfrac x2 - 1 = 2 \Rightarrow x = 6$.

**Răspuns:** $x = 6$. *Barem: 3p reducerea la $\left(\frac x2 - 1\right)M(0)$, 2p valoarea lui $x$.*

### 2. Legea asociativă $x * y = 5(x - 1)(y - 1) + 1$

#### a) $1 * 3 = 1$

$$1 * 3 = 5(1 - 1)(3 - 1) + 1 = 5\cdot0\cdot2 + 1 = 1.$$

#### b) $e = \dfrac65$ este elementul neutru

Trebuie arătat că $x * e = e * x = x$ pentru orice $x$ real. Observă că $e - 1 = \frac15$:

$$x * \frac65 = 5(x - 1)\cdot\frac15 + 1 = (x - 1) + 1 = x,$$

$$\frac65 * x = 5\cdot\frac15\cdot(x - 1) + 1 = x.$$

(Legea este oricum comutativă, deci a doua egalitate rezultă și din prima.) Așadar $e = \frac65$ este elementul neutru. *Barem: 2p prima egalitate, 3p a doua și concluzia.*

#### c) Perechile $(m, n)$ de numere naturale pentru care $\dfrac{m}{25}$ este simetricul lui $n$

$\dfrac{m}{25}$ este simetricul lui $n$ dacă $n * \dfrac{m}{25} = \dfrac{m}{25} * n = e = \dfrac65$. Legea fiind comutativă, ajunge o egalitate:

$$5(n - 1)\left(\frac{m}{25} - 1\right) + 1 = \frac65 \iff 5(n-1)\cdot\frac{m - 25}{25} = \frac15 \iff (n - 1)(m - 25) = 1.$$

Produsul a doi întregi este 1 doar dacă ambii sunt $1$ sau ambii $-1$:

- $n - 1 = 1$, $m - 25 = 1$ $\Rightarrow$ $n = 2$, $m = 26$;
- $n - 1 = -1$, $m - 25 = -1$ $\Rightarrow$ $n = 0$, $m = 24$.

Ambele perechi sunt formate din numere naturale. Verificare: $0 * \frac{24}{25} = 5\cdot(-1)\cdot\left(-\frac{1}{25}\right) + 1 = \frac15 + 1 = \frac65$ ✔.

**Răspuns:** $(m, n) \in \{(24, 0),\ (26, 2)\}$. *Barem: 3p ecuația simetricului, 2p perechile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \dfrac{2x - 2 + \ln x}{x}$

#### a) $f'(x) = \dfrac{3 - \ln x}{x^2}$

Regula câtului:

$$f'(x) = \frac{\left(2 + \frac1x\right)x - (2x - 2 + \ln x)\cdot1}{x^2} = \frac{2x + 1 - 2x + 2 - \ln x}{x^2} = \frac{3 - \ln x}{x^2}.$$

*Barem: 3p derivarea, 2p simplificarea.*

#### b) $\displaystyle\lim_{x\to1}\frac{f(x)}{\ln x} = 3$

$$\frac{f(x)}{\ln x} = \frac{2x - 2 + \ln x}{x\ln x}.$$

Pentru $x \to 1$: numărătorul $\to 0 + 0 = 0$, numitorul $\to 1\cdot0 = 0$: nedeterminare $\frac00$. Aplicăm l'Hôpital:

$$\lim_{x\to1}\frac{2x - 2 + \ln x}{x\ln x} = \lim_{x\to1}\frac{2 + \frac1x}{\ln x + 1} = \frac{2 + 1}{0 + 1} = 3.$$

(Fără l'Hôpital: $\dfrac{2(x-1) + \ln x}{x\ln x} = \dfrac1x\left(2\cdot\dfrac{x - 1}{\ln x} + 1\right) \to 1\cdot(2\cdot1 + 1) = 3$, folosind $\lim\limits_{x\to1}\frac{\ln x}{x-1} = 1$.)

*Barem: 3p aplicarea l'Hôpital, 2p calculul.*

#### c) Cel mai mare întreg $m$ pentru care $f(x) = m$ are cel puțin o soluție

Ecuația are soluție exact când $m \in \operatorname{Im} f$.

$f'(x) = 0 \iff \ln x = 3 \iff x = e^3$. Semnul lui $f'$ este semnul lui $3 - \ln x$:

| $x$ | $0$ | | $e^3$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | |
| $f(x)$ | $-\infty$ | ↗ | $2 + \frac{1}{e^3}$ | ↘ | $2$ |

- Maximul: $f(e^3) = \dfrac{2e^3 - 2 + 3}{e^3} = 2 + \dfrac{1}{e^3}$. Cum $0 < \dfrac{1}{e^3} < 1$, avem $f(e^3) \in (2, 3)$.
- La $0^+$: $2x - 2 + \ln x \to -\infty$ și $x \to 0^+$, deci $f(x) \to -\infty$.

$f$ este continuă, deci pe $(0, e^3]$ ia toate valorile din $\left(-\infty, 2 + \frac1{e^3}\right]$; aceasta este imaginea lui $f$ (pe $[e^3, \infty)$ valorile rămân sub maxim). Cel mai mare întreg din această mulțime este $2$ (de exemplu $f(e^2) = \frac{2e^2}{e^2} = 2$), iar $3 > 2 + \frac1{e^3}$ nu este atins.

**Răspuns:** $m = 2$. *Barem: 2p monotonia, 3p limita, maximul și concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{x + 4}{e^x}$

#### a) $\displaystyle\int_0^2 f(x)e^x\,dx = 10$

$f(x)e^x = x + 4$:

$$\int_0^2 (x + 4)\,dx = \left(\frac{x^2}{2} + 4x\right)\Big|_0^2 = 2 + 8 = 10.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 f(x)\,dx = 5 - \frac6e$

$f(x) = (x + 4)e^{-x}$. Integrăm prin părți cu $u = x + 4$, $v' = e^{-x}$, deci $u' = 1$, $v = -e^{-x}$:

$$\int_0^1 (x + 4)e^{-x}\,dx = -(x + 4)e^{-x}\Big|_0^1 + \int_0^1 e^{-x}\,dx = \left(-\frac5e + 4\right) + \left(-e^{-x}\right)\Big|_0^1.$$

$$= -\frac5e + 4 - \frac1e + 1 = 5 - \frac6e.$$

*Barem: 3p integrarea prin părți, 2p calculul.*

#### c) $I_n = \displaystyle\int_0^1\frac{x^n}{f(x)}\,dx$; arătați că $I_{n+1} + 4I_n \le \dfrac{e}{n+1}$

$\dfrac{1}{f(x)} = \dfrac{e^x}{x + 4}$, deci $I_n = \displaystyle\int_0^1\frac{x^ne^x}{x + 4}\,dx$. Adunăm:

$$I_{n+1} + 4I_n = \int_0^1\frac{(x^{n+1} + 4x^n)e^x}{x + 4}\,dx = \int_0^1\frac{x^n(x + 4)e^x}{x + 4}\,dx = \int_0^1 x^ne^x\,dx.$$

**Majorare.** Pe $[0, 1]$, $e^x$ este crescătoare, deci $e^x \le e^1 = e$; cum $x^n \ge 0$, avem $x^ne^x \le e\,x^n$. Prin monotonia integralei:

$$I_{n+1} + 4I_n \le e\int_0^1 x^n\,dx = e\cdot\frac{x^{n+1}}{n+1}\Big|_0^1 = \frac{e}{n+1}.$$

(Verificare numerică pentru $n = 1$: $I_2 + 4I_1 = \int_0^1 xe^x\,dx = 1 \le \frac e2 \approx 1{,}359$.)

*Barem: 2p $I_{n+1} + 4I_n = \int_0^1 x^ne^x\,dx$, 3p majorarea și concluzia.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $b_1 = 4$ |
| I.2 | $a = -2$ |
| I.3 | $x = -1$ |
| I.4 | $p = \dfrac{1}{30}$ |
| I.5 | $a = 4$ |
| I.6 | $AC = 8$ |
| II.1.c | $x = 6$ |
| II.2.b | $e = \frac65$ |
| II.2.c | $(24, 0)$ și $(26, 2)$ |
| III.1.b | limita $= 3$ |
| III.1.c | $m = 2$ |

## Ce merită reținut din varianta 3

- **Relații de forma $M(x)M(y) = xyI_3 + (x+y+1)M(0)$**: folosește-le direct la c), fără să mai înmulțești matrice.
- **Simetricul unui element**: scrie $x * x' = e$ și ajungi la o ecuație în numere întregi de tip produs $= 1$.
- **„Cel mai mare întreg $m$”**: află maximul funcției și încadrează-l între doi întregi consecutivi.
- **$I_{n+1} + aI_n$**: alege combinația care simplifică numitorul, apoi majorează exponențiala cu valoarea ei maximă pe interval.
