Rezolvarea completă a subiectului de la **simularea națională** a **Bacalaureatului 2026 la Matematică M_mate-info**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z = 2 + i$: arătați că $z + \bar z + z\cdot\bar z = 9$

Conjugatul este $\bar z = 2 - i$. Atunci $z + \bar z = 4$ (partea imaginară se reduce), iar

$$z\cdot\bar z = (2+i)(2-i) = 4 - i^2 = 4 + 1 = 5.$$

Deci $z + \bar z + z\bar z = 4 + 5 = 9$.

**De reținut:** $z + \bar z = 2\operatorname{Re} z$ și $z\bar z = |z|^2$. *Barem: 2p scrierea expresiei, 3p calculul.*

### 2. $f(x) = 2x - 1$, $g(x) = x^2 - 4x + m$: graficele au exact un punct comun

Punctele comune au abscisele soluții ale ecuației $f(x) = g(x)$:

$$x^2 - 4x + m = 2x - 1 \iff x^2 - 6x + m + 1 = 0.$$

Graficele au exact un punct comun dacă ecuația are o singură soluție reală, adică $\Delta = 0$:

$$\Delta = 36 - 4(m + 1) = 32 - 4m = 0 \iff m = 8.$$

(Atunci $x^2 - 6x + 9 = (x-3)^2 = 0$, punctul comun este $(3, 5)$.)

**Răspuns:** $m = 8$. *Barem: 2p ecuația, 3p condiția $\Delta = 0$ și valoarea lui $m$.*

### 3. Ecuația $(1 + \log_x 2)\log_2 x = 5$

**Condiții de existență:** $x > 0$, $x \ne 1$ (baza logaritmului $\log_x$).

Desfacem paranteza și folosim $\log_x 2\cdot\log_2 x = 1$ (formula de schimbare a bazei: $\log_x 2 = \dfrac{1}{\log_2 x}$):

$$\log_2 x + \log_x 2\cdot\log_2 x = 5 \iff \log_2 x + 1 = 5 \iff \log_2 x = 4 \iff x = 16.$$

$x = 16 > 0$, $x \ne 1$, deci convine.

**Răspuns:** $x = 16$. *Barem: 3p obținerea $\log_2 x = 4$, 2p soluția.*

### 4. Probabilitatea ca un număr de două cifre nenule să aibă produsul cifrelor divizibil cu 5

**Cazuri posibile:** fiecare dintre cele două cifre poate fi $1, \dots, 9$, deci $9\cdot 9 = 81$ numere.

**Cazuri favorabile:** cum 5 e prim, $5 \mid a\cdot b$ dacă și numai dacă $5 \mid a$ sau $5 \mid b$; cu cifre nenule, asta înseamnă că măcar o cifră este $5$. Numerele cu cifra zecilor 5: 9; cu cifra unităților 5: 9; numărul $55$ a fost numărat de două ori. Total: $9 + 9 - 1 = 17$.

$$p = \frac{17}{81}.$$

**Răspuns:** $p = \dfrac{17}{81}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.* Capcană: dacă uiți să scazi $55$, obții greșit $18$.

### 5. Dreapta prin $A(0,5)$, perpendiculară pe $OB$, $B(4,2)$

$m_{OB} = \dfrac{2 - 0}{4 - 0} = \dfrac12$. Două drepte (neverticale) sunt perpendiculare dacă produsul pantelor este $-1$: $m_d\cdot\dfrac12 = -1 \Rightarrow m_d = -2$.

Ecuația: $y - 5 = -2(x - 0) \iff y = -2x + 5$.

**Răspuns:** $d: y = -2x + 5$. *Barem: 3p panta, 2p ecuația.*

### 6. Triunghi dreptunghic în $A$, $AB = 9$, $AC = 12$, $M$ mijlocul lui $BC$: $d(C, AM) = 7{,}2$

**Pasul 1.** Ipotenuza: $BC = \sqrt{81 + 144} = 15$. Mediana din unghiul drept este jumătate din ipotenuză: $AM = \dfrac{BC}{2} = CM$.

**Pasul 2.** În triunghiul $AMC$, $AM = CM$. Scriem aria lui $AMC$ în două moduri: $\dfrac12\,AM\cdot d(C, AM) = \dfrac12\,CM\cdot d(A, CM)$, deci $d(C, AM) = d(A, CM) = d(A, BC) = AD$, unde $AD$ este înălțimea din $A$ a triunghiului $ABC$.

**Pasul 3.** Aria lui $ABC$ în două moduri: $\dfrac{BC\cdot AD}{2} = \dfrac{AB\cdot AC}{2}$, deci

$$AD = \frac{9\cdot 12}{15} = \frac{108}{15} = 7{,}2.$$

Așadar $d(C, AM) = 7{,}2$.

*Barem: 3p reducerea la înălțimea $AD$, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}a & 1 & 1\\ 1 & -1 & a\\ 3 & 2 & 1\end{pmatrix}$ și sistemul $\begin{cases}ax + y + z = 2a\\ x - y + az = -4\\ 3x + 2y + z = 8\end{cases}$

#### a) $\det(A(1)) = 4$

$$\det(A(1)) = \begin{vmatrix}1 & 1 & 1\\ 1 & -1 & 1\\ 3 & 2 & 1\end{vmatrix} = -1 + 2 + 3 - (-3) - 2 - 1 = 4.$$

(Termenii Sarrus: $1\cdot(-1)\cdot1 = -1$, $1\cdot1\cdot3 = 3$, $1\cdot1\cdot2 = 2$; minus $1\cdot(-1)\cdot3 = -3$, $1\cdot1\cdot2 = 2$, $1\cdot1\cdot1 = 1$.) *Barem: 2p scrierea determinantului, 3p calculul.*

#### b) Valorile lui $a$ pentru care $A(a)$ este inversabilă

$$\det(A(a)) = -a + 3a + 2 - (-3) - 2a^2 - 1 = -2a^2 + 2a + 4 = -2(a^2 - a - 2) = -2(a - 2)(a + 1).$$

$A(a)$ este inversabilă $\iff \det(A(a)) \ne 0 \iff a \notin \{-1, 2\}$.

**Răspuns:** $a \in \mathbb R \setminus\{-1, 2\}$. *Barem: 3p determinantul, 2p concluzia.*

#### c) Pentru $a = 2$: soluțiile cu $x_0y_0 = y_1$, unde $(x_1, y_1, z_1)$ e soluția pentru $a = 1$

**Soluția pentru $a = 1$.** Sistemul $\begin{cases}x + y + z = 2\\ x - y + z = -4\\ 3x + 2y + z = 8\end{cases}$ are $\det = 4 \ne 0$, deci soluție unică. Scăzând primele două ecuații: $2y = 6 \Rightarrow y_1 = 3$. (Complet: $x_1 = \frac32$, $z_1 = -\frac52$; ne trebuie doar $y_1 = 3$.)

**Soluțiile pentru $a = 2$.** Sistemul $\begin{cases}2x + y + z = 4\\ x - y + 2z = -4\\ 3x + 2y + z = 8\end{cases}$ are determinant nul. Adunând primele două: $3x + 3z = 0 \Rightarrow x = -z$. Din prima: $y = 4 - 2x - z = 4 + z$... mai simplu, notăm $x = \alpha$: $z = -\alpha$, $y = 4 - 2\alpha + \alpha = 4 - \alpha$. Verificăm a treia ecuație: $3\alpha + 8 - 2\alpha - \alpha = 8$ ✔. Deci soluțiile sunt

$$(x_0, y_0, z_0) = (\alpha,\ 4 - \alpha,\ -\alpha), \quad \alpha \in \mathbb R.$$

**Condiția** $x_0y_0 = y_1$: $\alpha(4 - \alpha) = 3 \iff \alpha^2 - 4\alpha + 3 = 0 \iff \alpha \in \{1, 3\}$.

**Răspuns:** $(1, 3, -1)$ și $(3, 1, -3)$. *Barem: 2p mulțimea soluțiilor pentru $a = 2$, 3p $y_1 = 3$ și soluțiile cerute.*

### 2. Legea $x * y = \sqrt{(x^2 + 2)(y^2 + 2) + m}$, $m \in [-4, +\infty)$

(Condiția $m \ge -4$ asigură că expresia de sub radical este nenegativă: $(x^2+2)(y^2+2) \ge 4$.)

#### a) Pentru $m = 3$: $0 * 1 = 3$

$$0 * 1 = \sqrt{(0 + 2)(1 + 2) + 3} = \sqrt{6 + 3} = \sqrt9 = 3.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) Pentru $m = 7$: $x * (2x) = 5$

$$x * (2x) = \sqrt{(x^2 + 2)(4x^2 + 2) + 7}.$$

Ecuația $\sqrt{(x^2+2)(4x^2+2) + 7} = 5$: ambii membri sunt nenegativi, deci ridicăm la pătrat:

$$(x^2 + 2)(4x^2 + 2) + 7 = 25 \iff 4x^4 + 10x^2 + 4 + 7 - 25 = 0 \iff 2x^4 + 5x^2 - 7 = 0.$$

Cu $t = x^2 \ge 0$: $2t^2 + 5t - 7 = 0$, $\Delta = 25 + 56 = 81$, $t \in \left\{1, -\dfrac72\right\}$. Doar $t = 1$ e acceptabil, deci $x^2 = 1$.

**Răspuns:** $x \in \{-1, 1\}$. *Barem: 2p expresia, 3p rezolvarea.*

#### c) $m$ pentru care legea este asociativă

Calculăm cele două compuneri. Cum $(x * y)^2 = (x^2+2)(y^2+2) + m$:

$$\big((x * y) * z\big)^2 = \big[(x^2+2)(y^2+2) + m + 2\big](z^2 + 2) + m,$$

$$\big(x * (y * z)\big)^2 = (x^2 + 2)\big[(y^2+2)(z^2+2) + m + 2\big] + m.$$

Ambele compuneri sunt nenegative, deci sunt egale dacă și numai dacă pătratele lor sunt egale. Termenul $(x^2+2)(y^2+2)(z^2+2)$ apare în ambele și se reduce:

$$(m + 2)(z^2 + 2) = (x^2 + 2)(m + 2) \iff (m + 2)(z^2 - x^2) = 0.$$

Aceasta trebuie să aibă loc **pentru orice** $x, z$ reali (de exemplu $x = 0$, $z = 1$ dă $m + 2 = 0$), deci $m = -2$, care aparține lui $[-4, +\infty)$.

**Răspuns:** $m = -2$. *Barem: 3p scrierea condiției de asociativitate, 2p valoarea lui $m$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(1, +\infty) \to \mathbb R$, $f(x) = \dfrac{e^{x-2}}{\sqrt{x - 1}}$

#### a) $f'(x) = \dfrac{e^{x-2}(2x - 3)}{2(x - 1)\sqrt{x - 1}}$

Regula câtului, cu $(\sqrt{x-1})' = \dfrac{1}{2\sqrt{x-1}}$:

$$f'(x) = \frac{e^{x-2}\sqrt{x-1} - e^{x-2}\cdot\dfrac{1}{2\sqrt{x-1}}}{x - 1}.$$

Amplificăm numărătorul și numitorul cu $2\sqrt{x-1}$:

$$f'(x) = \frac{e^{x-2}\big(2(x - 1) - 1\big)}{2(x-1)\sqrt{x-1}} = \frac{e^{x-2}(2x - 3)}{2(x-1)\sqrt{x-1}}.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) $\displaystyle\lim_{x\to2}\big(f(x)\big)^{\frac{1}{x-2}} = \sqrt e$

$f(2) = \dfrac{e^0}{1} = 1$, deci avem nedeterminarea $1^\infty$. Folosim limita fundamentală $\lim\limits_{u\to0}(1 + u)^{1/u} = e$, cu $u = f(x) - 1 \to 0$:

$$\big(f(x)\big)^{\frac1{x-2}} = \Big[\big(1 + (f(x) - 1)\big)^{\frac{1}{f(x)-1}}\Big]^{\frac{f(x) - 1}{x - 2}}.$$

Paranteza tinde la $e$, iar exponentul este exact un raport de derivată:

$$\lim_{x\to2}\frac{f(x) - 1}{x - 2} = \lim_{x\to2}\frac{f(x) - f(2)}{x - 2} = f'(2) = \frac{e^0\cdot 1}{2\cdot1\cdot1} = \frac12.$$

Deci limita este $e^{1/2} = \sqrt e$. (Dacă $f(x) = 1$ pentru unele $x$ apropiate de 2, factorul respectiv este 1 și concluzia rămâne aceeași; alternativ, scrie $f^{\frac1{x-2}} = e^{\frac{\ln f(x)}{x-2}}$ și $\lim\frac{\ln f(x)}{x - 2} = \frac{f'(2)}{f(2)} = \frac12$.)

*Barem: 3p transformarea la limita fundamentală, 2p calculul.*

#### c) Mulțimea valorilor lui $m$ pentru care $f(x) = mx$ are exact două soluții

Pe $(1, +\infty)$ avem $x > 0$, deci ecuația este echivalentă cu $g(x) = m$, unde $g(x) = \dfrac{f(x)}{x} = \dfrac{e^{x-2}}{x\sqrt{x-1}}$.

Derivata: $g'(x) = \dfrac{xf'(x) - f(x)}{x^2}$. Înlocuind $f'$ din a) și aducând la același numitor:

$$xf'(x) - f(x) = \frac{e^{x-2}\big[x(2x - 3) - 2(x - 1)\big]}{2(x-1)\sqrt{x-1}} = \frac{e^{x-2}(2x^2 - 5x + 2)}{2(x-1)\sqrt{x-1}},$$

deci

$$g'(x) = \frac{e^{x-2}(2x^2 - 5x + 2)}{2x^2(x-1)\sqrt{x-1}} = \frac{e^{x-2}(x - 2)(2x - 1)}{2x^2(x-1)\sqrt{x-1}}.$$

Pe $(1, +\infty)$, $2x - 1 > 0$ și numitorul e pozitiv, deci semnul lui $g'$ este semnul lui $x - 2$:

| $x$ | $1$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $g'(x)$ | | $-$ | $0$ | $+$ | |
| $g(x)$ | $+\infty$ | ↘ | $\tfrac12$ | ↗ | $+\infty$ |

Limitele: $\lim\limits_{x\to1^+} g(x) = \dfrac{e^{-1}}{1\cdot 0^+} = +\infty$; $g(2) = \dfrac{1}{2\cdot 1} = \dfrac12$; $\lim\limits_{x\to+\infty} g(x) = +\infty$ (exponențiala crește mai repede decât $x\sqrt{x - 1}$, de ordin $x^{3/2}$).

$g$ este continuă și strict monotonă pe fiecare dintre $(1, 2]$ și $[2, +\infty)$, deci:

- pentru $m > \dfrac12$: câte o soluție pe $(1, 2)$ și pe $(2, +\infty)$ — exact două;
- pentru $m = \dfrac12$: o singură soluție ($x = 2$);
- pentru $m < \dfrac12$: nicio soluție.

**Răspuns:** $m \in \left(\dfrac12, +\infty\right)$. *Barem: 3p studiul monotoniei lui $g = f(x)/x$, 2p concluzia.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = \left(4x + \dfrac{6}{x^2}\right)\ln x$

#### a) $\displaystyle\int_2^3\frac{f(x)}{\ln x}\,dx = 11$

Pe $[2, 3]$, $\ln x > 0$, iar $\dfrac{f(x)}{\ln x} = 4x + \dfrac{6}{x^2}$:

$$\int_2^3\left(4x + \frac6{x^2}\right)dx = 2x^2\Big|_2^3 - \frac6x\Big|_2^3 = (18 - 8) - (2 - 3) = 10 + 1 = 11.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^e x\big(f(x) - 4x\ln x\big)\,dx = 3$

$f(x) - 4x\ln x = \dfrac{6\ln x}{x^2}$, deci $x\big(f(x) - 4x\ln x\big) = \dfrac{6\ln x}{x} = 6\ln x\cdot(\ln x)'$, cu primitiva $3\ln^2 x$:

$$\int_1^e\frac{6\ln x}{x}\,dx = 3\ln^2 x\Big|_1^e = 3 - 0 = 3.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) Primitiva $F$ a lui $f$ pentru care axa $Ox$ este tangentă la graficul lui $F$

Axa $Ox$ ($y = 0$) este tangentă la graficul lui $F$ în punctul $A(a, F(a))$ dacă punctul este pe axă și tangenta are panta 0:

$$F(a) = 0 \quad\text{și}\quad F'(a) = f(a) = 0.$$

Pe $(0, +\infty)$, $4x + \dfrac6{x^2} > 0$, deci $f(a) = 0 \iff \ln a = 0 \iff a = 1$. Așadar căutăm primitiva cu $F(1) = 0$, adică $F(x) = \displaystyle\int_1^x f(t)\,dt$.

Integrăm prin părți: $\left(2t^2 - \dfrac6t\right)' = 4t + \dfrac6{t^2}$, deci

$$\int_1^x\left(2t^2 - \frac6t\right)'\ln t\,dt = \left(2t^2 - \frac6t\right)\ln t\,\Big|_1^x - \int_1^x\left(2t^2 - \frac6t\right)\frac1t\,dt.$$

Al doilea integrand este $2t - \dfrac{6}{t^2}$, cu primitiva $t^2 + \dfrac6t$:

$$F(x) = \left(2x^2 - \frac6x\right)\ln x - \left(x^2 + \frac6x\right) + (1 + 6) = \left(2x^2 - \frac6x\right)\ln x - x^2 - \frac6x + 7.$$

**Verificare:** $F(1) = 0 - 1 - 6 + 7 = 0$ ✔, iar $F'(x) = f(x)$ (se verifică prin derivare).

**Răspuns:** $F(x) = \left(2x^2 - \dfrac6x\right)\ln x - x^2 - \dfrac6x + 7$, $x > 0$. *Barem: 2p condițiile $F(a) = 0$, $f(a) = 0$ și $a = 1$, 3p calculul primitivei.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $9$ |
| I.2 | $m = 8$ |
| I.3 | $x = 16$ |
| I.4 | $p = \frac{17}{81}$ |
| I.5 | $y = -2x + 5$ |
| I.6 | $d(C, AM) = 7{,}2$ |
| II.1.b | $a \in \mathbb R \setminus\{-1, 2\}$ |
| II.1.c | $(1, 3, -1)$ și $(3, 1, -3)$ |
| II.2.b | $x \in \{-1, 1\}$ |
| II.2.c | $m = -2$ |
| III.1.c | $m \in \left(\frac12, +\infty\right)$ |
| III.2.c | $F(x) = \left(2x^2 - \frac6x\right)\ln x - x^2 - \frac6x + 7$ |

## Ce merită reținut din simularea 2026

- **Nedeterminarea $1^\infty$**: adu expresia la $(1 + u)^{1/u}$ și recunoaște în exponent definiția derivatei.
- **Ecuații $f(x) = mx$**: împarte la $x$ (atenție la semn și la $x \ne 0$) și studiază funcția $\frac{f(x)}{x}$.
- **Asociativitatea**: scrie ambele compuneri, simplifică termenii comuni și cere ca restul să fie identic nul pentru orice valori.
- **Tangenta orizontală pe axa $Ox$**: două condiții simultan, $F(a) = 0$ și $F'(a) = 0$.
