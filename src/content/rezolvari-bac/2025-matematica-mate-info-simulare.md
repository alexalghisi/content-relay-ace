Rezolvarea completă a subiectului de la **simularea națională a Bacalaureatului 2025 la Matematică M_mate-info**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie geometrică: $b_1$, știind $b_3 = 40$ și $b_4 = 80$

Într-o progresie geometrică raportul dintre doi termeni consecutivi este constant (rația $q$):

$$q = \frac{b_4}{b_3} = \frac{80}{40} = 2.$$

Termenul general este $b_n = b_1 q^{n-1}$, deci $b_3 = b_1 q^2$ și

$$b_1 = \frac{b_3}{q^2} = \frac{40}{4} = 10.$$

**Răspuns:** $b_1 = 10$. *Barem: 2p rația, 3p termenul $b_1$.*

### 2. $f(x) = x^2 - 2x + m$: graficul intersectează $Ox$ în două puncte distincte

Punctele de intersecție cu $Ox$ corespund soluțiilor ecuației $f(x) = 0$. Două puncte distincte $\iff$ două soluții reale distincte $\iff \Delta > 0$:

$$\Delta = (-2)^2 - 4\cdot 1\cdot m = 4 - 4m > 0 \iff m < 1.$$

**Răspuns:** $m \in (-\infty, 1)$. *Barem: 3p condiția $\Delta > 0$, 2p mulțimea valorilor lui $m$.*

### 3. Ecuație exponențială: $3^x + 2\cdot 3^{x+1} = 63$

Scriem $3^{x+1} = 3\cdot 3^x$ și dăm factor comun $3^x$:

$$3^x + 6\cdot 3^x = 63 \iff 7\cdot 3^x = 63 \iff 3^x = 9 = 3^2 \iff x = 2.$$

**Verificare:** $9 + 2\cdot 27 = 63$ ✔.

**Răspuns:** $x = 2$. *Barem: 3p $3^x = 9$, 2p soluția.*

### 4. Probabilitatea ca, pentru $n$ natural de două cifre, $n^2$ să aibă trei cifre

**Cazuri posibile:** numerele de două cifre sunt $10, 11, \dots, 99$, adică $90$.

**Cazuri favorabile:** $100 \le n^2 \le 999$. Cum $10^2 = 100$, $31^2 = 961$ și $32^2 = 1024$, condiția este $10 \le n \le 31$, adică $31 - 10 + 1 = 22$ numere.

$$p = \frac{22}{90} = \frac{11}{45}.$$

**Răspuns:** $p = \dfrac{11}{45}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(1,2)$, $B(7,4)$, $\overrightarrow{AB} = 2\overrightarrow{AC}$: coordonatele lui $D$ cu $\overrightarrow{OD} = \overrightarrow{CB}$

Din $\overrightarrow{AB} = 2\overrightarrow{AC}$, punctul $C$ este mijlocul segmentului $AB$, deci $\overrightarrow{CB} = \dfrac12\overrightarrow{AB}$.

$\overrightarrow{AB} = (7 - 1)\vec i + (4 - 2)\vec j = 6\vec i + 2\vec j$, deci $\overrightarrow{CB} = 3\vec i + \vec j$.

$\overrightarrow{OD} = 3\vec i + \vec j$, iar coordonatele lui $D$ sunt chiar componentele vectorului său de poziție.

(Verificare: $C$ este mijlocul lui $AB$, $C(4, 3)$, și $\overrightarrow{CB} = (7-4)\vec i + (4-3)\vec j = 3\vec i + \vec j$ ✔.)

**Răspuns:** $D(3, 1)$. *Barem: 3p $\overrightarrow{CB} = \frac12\overrightarrow{AB}$ și $\overrightarrow{AB}$, 2p coordonatele lui $D$.*

### 6. Triunghi ascuțitunghic, $AB = 10$, $AD = 8$ (înălțime), $d(D, AC) = 4\sqrt2$: aria este $56$

$AD \perp BC$, deci triunghiurile $ADB$ și $ADC$ sunt dreptunghice în $D$ (triunghiul fiind ascuțitunghic, $D$ se află între $B$ și $C$).

**$BD$:** cu Pitagora în $\triangle ADB$: $BD = \sqrt{AB^2 - AD^2} = \sqrt{100 - 64} = 6$.

**$DC$:** fie $E$ piciorul perpendicularei din $D$ pe $AC$, $DE = 4\sqrt2$. $DE$ este înălțimea din unghiul drept în $\triangle ADC$, deci $\triangle AED$ este dreptunghic în $E$ și

$$\sin(\angle DAC) = \frac{DE}{AD} = \frac{4\sqrt2}{8} = \frac{\sqrt2}{2} \Rightarrow \angle DAC = 45^\circ.$$

Atunci $\triangle ADC$ este dreptunghic isoscel: $DC = AD = 8$. (Alternativ: $DE = \dfrac{AD\cdot DC}{AC}$ dă $\dfrac{8\,DC}{\sqrt{64 + DC^2}} = 4\sqrt2$, cu soluția pozitivă $DC = 8$.)

$$BC = BD + DC = 14, \qquad \mathcal A_{ABC} = \frac{BC\cdot AD}{2} = \frac{14\cdot 8}{2} = 56.$$

*Barem: 3p $DC = 8$ și $BD = 6$, 2p $BC$ și aria.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}a & 1 & -a\\ 3 & 1 & -2\\ 1 & -3 & a\end{pmatrix}$ și sistemul $\begin{cases}ax + y - az = 1\\ 3x + y - 2z = 1\\ x - 3y + az = -3\end{cases}$

#### a) $\det(A(0)) = -2$

$$\det(A(0)) = \begin{vmatrix}0 & 1 & 0\\ 3 & 1 & -2\\ 1 & -3 & 0\end{vmatrix} = 0 + (-2)\cdot 1 \cdot 1 + 0 - 0 - 0 - 0 = -2.$$

Detaliat (Sarrus): diagonala principală și paralelele: $0\cdot1\cdot0 + 3\cdot(-3)\cdot0 + 1\cdot1\cdot(-2) = -2$; diagonala secundară și paralelele: $0\cdot1\cdot1 + (-2)\cdot(-3)\cdot0 + 0\cdot3\cdot1 = 0$. Diferența: $-2$. *Barem: 2p scrierea determinantului, 3p calculul.*

#### b) $a$ pentru care sistemul are soluție unică

$$\det(A(a)) = \begin{vmatrix}a & 1 & -a\\ 3 & 1 & -2\\ 1 & -3 & a\end{vmatrix} = a^2 - 2 + 9a + a - 6a - 3a = a^2 + a - 2.$$

(Termenii: $a\cdot1\cdot a = a^2$, $3\cdot(-3)\cdot(-a) = 9a$, $1\cdot1\cdot(-2) = -2$; minus $(-a)\cdot1\cdot1 = -a$, $(-2)\cdot(-3)\cdot a = 6a$, $a\cdot 3\cdot 1 = 3a$.)

$a^2 + a - 2 = (a - 1)(a + 2) = 0 \iff a \in \{-2, 1\}$. Sistemul are soluție unică $\iff \det(A(a)) \ne 0$:

**Răspuns:** $a \in \mathbb R \setminus \{-2, 1\}$. *Barem: 2p determinantul, 3p condiția și mulțimea.*

#### c) Pentru $a = 1$: soluțiile $(x_1, y_1, z_1)$, $(x_2, y_2, z_2)$ cu $y_1 = x_2$ și $z_1 = y_2$

Pentru $a = 1$: $\begin{cases}x + y - z = 1\\ 3x + y - 2z = 1\\ x - 3y + z = -3\end{cases}$, cu determinant $0$ (punctul b).

Scăzând prima ecuație din a doua: $2x - z = 0 \Rightarrow z = 2x$. Din prima: $y = 1 - x + z = 1 + x$. Verificăm a treia: $x - 3(1 + x) + 2x = -3$ ✔ (identitate). Notând $x = \alpha$, soluțiile sunt

$$(\alpha,\ \alpha + 1,\ 2\alpha), \quad \alpha \in \mathbb R.$$

Fie $(x_1,y_1,z_1) = (\alpha_1, \alpha_1+1, 2\alpha_1)$ și $(x_2,y_2,z_2) = (\alpha_2, \alpha_2+1, 2\alpha_2)$. Condițiile:

- $y_1 = x_2 \Rightarrow \alpha_1 + 1 = \alpha_2$;
- $z_1 = y_2 \Rightarrow 2\alpha_1 = \alpha_2 + 1 = \alpha_1 + 2 \Rightarrow \alpha_1 = 2$, deci $\alpha_2 = 3$.

**Răspuns:** $(x_1, y_1, z_1) = (2, 3, 4)$ și $(x_2, y_2, z_2) = (3, 4, 6)$. *Barem: 2p forma generală a soluțiilor, 3p determinarea celor două soluții.*

### 2. Pe $M = (0, +\infty)$: $x * y = \sqrt{xy} + \dfrac{1}{\sqrt{xy}} + \dfrac{x + y}{2} - 2$

#### a) $1 * 4 = 3$

$$1 * 4 = \sqrt4 + \frac{1}{\sqrt4} + \frac{1 + 4}{2} - 2 = 2 + \frac12 + \frac52 - 2 = 3.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x \in M$ cu $x * x = 1$

Pentru $x > 0$, $\sqrt{x\cdot x} = x$, deci

$$x * x = x + \frac1x + x - 2 = \frac{2x^2 - 2x + 1}{x}.$$

$$\frac{2x^2 - 2x + 1}{x} = 1 \iff 2x^2 - 3x + 1 = 0 \iff (2x - 1)(x - 1) = 0,$$

deci $x = \dfrac12$ sau $x = 1$, ambele pozitive, deci în $M$.

**Răspuns:** $x \in \left\{\dfrac12, 1\right\}$. *Barem: 2p expresia lui $x * x$, 3p soluțiile care convin.*

#### c) $[1, +\infty)$ este parte stabilă a lui $M$

Trebuie arătat că pentru orice $x, y \ge 1$ avem $x * y \ge 1$.

Grupăm primii termeni într-un pătrat: notând $t = \sqrt{xy} > 0$,

$$t + \frac1t - 2 = \frac{t^2 - 2t + 1}{t} = \frac{(t - 1)^2}{t} \ge 0.$$

Deci

$$x * y = \frac{\left(\sqrt{xy} - 1\right)^2}{\sqrt{xy}} + \frac{x + y}{2}.$$

Pentru $x, y \ge 1$: primul termen este $\ge 0$, iar $\dfrac{x + y}{2} \ge \dfrac{1 + 1}{2} = 1$. Rezultă $x * y \ge 1$, adică $x * y \in [1, +\infty)$. Cum $[1, +\infty) \subset M$, mulțimea $[1, +\infty)$ este parte stabilă a lui $M$ în raport cu „$*$”. $\blacksquare$

*Barem: 3p scrierea lui $x * y$ ca sumă de termeni controlabili, 2p concluzia.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,+\infty)\to\mathbb R$, $f(x) = \dfrac{2x - 2}{x + 2} + \ln\dfrac{x + 2}{x}$

#### a) $f'(x) = \dfrac{4(x - 1)}{x(x + 2)^2}$

Primul termen, cu regula câtului:

$$\left(\frac{2x - 2}{x + 2}\right)' = \frac{2(x + 2) - (2x - 2)}{(x + 2)^2} = \frac{6}{(x+2)^2}.$$

Al doilea termen: scriem $\ln\dfrac{x+2}{x} = \ln(x + 2) - \ln x$ (pentru $x > 0$), deci derivata este $\dfrac{1}{x + 2} - \dfrac1x = \dfrac{-2}{x(x+2)}$.

$$f'(x) = \frac{6}{(x+2)^2} - \frac{2}{x(x+2)} = \frac{6x - 2(x + 2)}{x(x+2)^2} = \frac{4x - 4}{x(x+2)^2} = \frac{4(x - 1)}{x(x+2)^2}.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Asimptota orizontală spre $+\infty$

$$\lim_{x\to+\infty}\frac{2x - 2}{x + 2} = 2, \qquad \lim_{x\to+\infty}\ln\frac{x + 2}{x} = \ln 1 = 0,$$

deci $\lim\limits_{x\to+\infty} f(x) = 2 + 0 = 2$, finită.

**Răspuns:** dreapta $y = 2$ este asimptota orizontală spre $+\infty$. *Barem: 3p limita, 2p concluzia.*

#### c) $n \in \mathbb N$ pentru care ecuația $f(x) = n$ nu are soluții

Pe $(0, +\infty)$ numitorul $x(x+2)^2 > 0$, deci semnul lui $f'$ este semnul lui $x - 1$:

| $x$ | $0$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | $+\infty$ | ↘ | $\ln 3$ | ↗ | $2$ |

Valorile: $f(1) = 0 + \ln 3 = \ln 3 \approx 1{,}099$; $\lim\limits_{x\to0^+} f(x) = \dfrac{-2}{2} + (+\infty) = +\infty$ (căci $\frac{x+2}{x} \to +\infty$); spre $+\infty$, $f$ crește spre $2$ (fără să-l atingă).

$f$ este continuă, deci (proprietatea lui Darboux) pe $(0, 1]$ ia toate valorile din $[\ln 3, +\infty)$, iar pe $[1, +\infty)$ valorile din $[\ln 3, 2)$. Imaginea lui $f$ este $[\ln 3, +\infty)$.

Ecuația $f(x) = n$ nu are soluții $\iff n < \ln 3$. Cum $1 < \ln 3 < 2$ (pentru că $e < 3 < e^2$), numerele naturale cu această proprietate sunt $n = 0$ și $n = 1$.

**Răspuns:** $n \in \{0, 1\}$. *Barem: 2p monotonia, 3p limita în 0, $f(1) = \ln 3$ și concluzia.*

### 2. $f(x) = \dfrac{x^2}{2x^2 + 1}$

#### a) $\displaystyle\int_{-1}^2 (2x^2 + 1)f(x)\,dx = 3$

$(2x^2 + 1)f(x) = x^2$, deci

$$\int_{-1}^2 x^2\,dx = \frac{x^3}{3}\Big|_{-1}^2 = \frac83 - \left(-\frac13\right) = \frac93 = 3.$$

*Barem: 3p simplificarea și primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^2 \sqrt{f(x)}\,dx = 1$

Pentru $x \in [0, 2]$, $x \ge 0$, deci $\sqrt{f(x)} = \dfrac{\sqrt{x^2}}{\sqrt{2x^2+1}} = \dfrac{x}{\sqrt{2x^2 + 1}}$ (atenție: $\sqrt{x^2} = |x| = x$ doar pentru $x \ge 0$).

Observăm că $(2x^2 + 1)' = 4x$, deci $\dfrac{x}{\sqrt{2x^2+1}} = \dfrac12\cdot\dfrac{(2x^2+1)'}{2\sqrt{2x^2+1}} = \dfrac12\left(\sqrt{2x^2+1}\right)'$:

$$\int_0^2 \frac{x}{\sqrt{2x^2 + 1}}\,dx = \frac12\sqrt{2x^2 + 1}\Big|_0^2 = \frac12(\sqrt9 - \sqrt1) = \frac12\cdot 2 = 1.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $I_n = \displaystyle\int_0^1 \frac{x^n}{f\left(\sqrt{e^x}\right)}\,dx$: arătați că $(n+1)I_n - I_{n+1} = \dfrac{2(n+1)}{n+2} + \dfrac1e$

**Simplificăm integrandul.** $\left(\sqrt{e^x}\right)^2 = e^x$, deci

$$f\left(\sqrt{e^x}\right) = \frac{e^x}{2e^x + 1} \Rightarrow \frac{1}{f\left(\sqrt{e^x}\right)} = \frac{2e^x + 1}{e^x} = 2 + e^{-x}.$$

Așadar $I_n = \displaystyle\int_0^1 x^n\left(2 + e^{-x}\right)dx$.

**Combinația cerută.** Prin liniaritatea integralei:

$$(n+1)I_n - I_{n+1} = \int_0^1 \left((n+1)x^n - x^{n+1}\right)\left(2 + e^{-x}\right)dx = 2\int_0^1 \left((n+1)x^n - x^{n+1}\right)dx + \int_0^1 \left((n+1)x^n - x^{n+1}\right)e^{-x}\,dx.$$

Prima integrală:

$$2\left(x^{n+1} - \frac{x^{n+2}}{n+2}\right)\Big|_0^1 = 2\left(1 - \frac{1}{n+2}\right) = \frac{2(n+1)}{n+2}.$$

Pentru a doua, observăm că $\left(x^{n+1}e^{-x}\right)' = (n+1)x^n e^{-x} - x^{n+1}e^{-x}$ — exact integrandul. Deci

$$\int_0^1 \left((n+1)x^n - x^{n+1}\right)e^{-x}\,dx = x^{n+1}e^{-x}\Big|_0^1 = e^{-1} - 0 = \frac1e.$$

Adunând: $(n+1)I_n - I_{n+1} = \dfrac{2(n+1)}{n+2} + \dfrac1e$, pentru orice $n \in \mathbb N^*$. $\blacksquare$

*Barem: 2p scrierea lui $(n+1)I_n - I_{n+1}$ ca o singură integrală, 3p calculul celor două părți.* (Baremul ajunge la același rezultat prin integrare prin părți; recunoașterea derivatei produsului $x^{n+1}e^{-x}$ e drumul cel mai scurt.)

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $b_1 = 10$ |
| I.2 | $m \in (-\infty, 1)$ |
| I.3 | $x = 2$ |
| I.4 | $p = \tfrac{11}{45}$ |
| I.5 | $D(3, 1)$ |
| I.6 | $\mathcal A = 56$ |
| II.1.b | $a \in \mathbb R\setminus\{-2, 1\}$ |
| II.1.c | $(2,3,4)$ și $(3,4,6)$ |
| II.2.b | $x \in \{\tfrac12, 1\}$ |
| III.1.b | $y = 2$ |
| III.1.c | $n \in \{0, 1\}$ |

## Ce merită reținut din simulare

- **Parte stabilă**: grupează termenii în pătrate perfecte ($t + \frac1t - 2 = \frac{(t-1)^2}{t}$) ca să obții minorări simple.
- **Sisteme compatibile nedeterminate**: scrie soluția generală cu un parametru, apoi impune condițiile între soluții.
- **Numărul de soluții ale lui $f(x) = n$**: tabelul de variație, limitele la capete și Darboux dau imaginea funcției.
- **Relații de recurență pentru $I_n$**: caută în integrand derivata unui produs, de tipul $\left(x^{n+1}e^{-x}\right)'$.
