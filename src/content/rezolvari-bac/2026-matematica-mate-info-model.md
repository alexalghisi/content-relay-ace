Rezolvarea completă a **modelului oficial** de **Bacalaureat 2026 la Matematică M_mate-info**, publicat de Centrul Național pentru Curriculum și Evaluare. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $x$, $8$, $2x + 1$ termeni consecutivi ai unei progresii aritmetice

Trei numere $a, b, c$ sunt termeni consecutivi ai unei progresii aritmetice dacă termenul din mijloc este media aritmetică a vecinilor: $b = \dfrac{a + c}{2}$.

$$\frac{x + 2x + 1}{2} = 8 \iff 3x + 1 = 16 \iff x = 5.$$

Verificare: $5, 8, 11$ — rația $3$ ✔.

**Răspuns:** $x = 5$. *Barem: 3p relația de medie aritmetică, 2p valoarea lui $x$.*

### 2. $f(x) = 2x + 1$, $g(x) = x + 4$: determinați $a$ cu $(f\circ g)(a) = -a$

$g(a) = a + 4$, iar $(f\circ g)(a) = f(a + 4) = 2(a + 4) + 1 = 2a + 9$.

$$2a + 9 = -a \iff 3a = -9 \iff a = -3.$$

**Răspuns:** $a = -3$. *Barem: 3p expresia compunerii, 2p rezolvarea ecuației.*

### 3. Ecuația $2\log_5 x = \log_5(4x + 5)$

**Condiții de existență:** $x > 0$ și $4x + 5 > 0$, deci $x > 0$.

Pentru $x > 0$, $2\log_5 x = \log_5 x^2$, deci ecuația devine $\log_5 x^2 = \log_5(4x + 5)$. Funcția logaritmică este injectivă:

$$x^2 = 4x + 5 \iff x^2 - 4x - 5 = 0 \iff (x - 5)(x + 1) = 0.$$

$x = -1$ nu convine ($\log_5(-1)$ nu există), $x = 5$ convine: $2\log_5 5 = 2 = \log_5 25$ ✔.

**Răspuns:** $x = 5$. *Barem: 2p ecuația de gradul II, 3p selectarea soluției care convine.* Capcană: dacă scrii direct $x^2 = 4x+5$ fără condiția $x>0$, riști să păstrezi și $x = -1$.

### 4. Numere de două cifre distincte, cu cifra zecilor impară, cu cifre din $A = \{1, 3, 5, 7, 8\}$

- Cifra zecilor trebuie să fie impară: $\{1, 3, 5, 7\}$ — **4 moduri**.
- Cifra unităților: orice cifră din $A$ diferită de cifra zecilor — $5 - 1 = $ **4 moduri** (inclusiv $8$).

Regula produsului: $4 \cdot 4 = 16$.

**Răspuns:** 16 numere. *Barem: 2p alegerea cifrei zecilor, 3p numărarea finală.*

### 5. $A(0,5)$, $B(3,4)$: punctul $C$ cu $3\overrightarrow{OC} = \overrightarrow{OA} + \overrightarrow{OB}$

Vectorii de poziție: $\overrightarrow{OA} = 5\vec j$, $\overrightarrow{OB} = 3\vec i + 4\vec j$, deci $\overrightarrow{OA} + \overrightarrow{OB} = 3\vec i + 9\vec j$.

$$\overrightarrow{OC} = \frac13(3\vec i + 9\vec j) = \vec i + 3\vec j \Rightarrow C(1, 3).$$

(De fapt $C$ este centrul de greutate al triunghiului $OAB$: $\left(\frac{0+0+3}{3}, \frac{0+5+4}{3}\right)$.)

**Răspuns:** $C(1, 3)$. *Barem: 3p suma vectorilor, 2p coordonatele lui $C$.*

### 6. Triunghiul $ABC$ cu $A = \dfrac\pi2$, $C = \dfrac\pi3$, $AE = 2$ ($CE$ bisectoare): arătați că $d(B, CE) = 2\sqrt3$

Unghiurile: $B = \pi - \dfrac\pi2 - \dfrac\pi3 = \dfrac\pi6$. Bisectoarea împarte unghiul $C$ în două unghiuri de $\dfrac\pi6$: $\angle ACE = \angle ECB = \dfrac\pi6$.

**Pasul 1.** În triunghiul $EBC$, $\angle ECB = \angle EBC = \dfrac\pi6$, deci triunghiul este isoscel cu $EB = EC$. Într-un triunghi isoscel, înălțimile din vârfurile bazei sunt egale (aria $= \frac12\,EC\cdot d(B, CE) = \frac12\,EB\cdot d(C, BE)$), deci $d(B, CE) = d(C, BE)$.

**Pasul 2.** Dreapta $BE$ este dreapta $AB$, iar $CA \perp AB$ (unghiul $A$ e drept), deci $d(C, BE) = CA$.

**Pasul 3.** În triunghiul dreptunghic $ACE$ (unghi drept în $A$):

$$\operatorname{tg}\angle ACE = \frac{AE}{AC} \Rightarrow \frac{1}{\sqrt3} = \frac{2}{AC} \Rightarrow AC = 2\sqrt3.$$

Deci $d(B, CE) = CA = 2\sqrt3$.

*Barem: 3p reducerea la $d(B,CE) = CA$ (triunghiul isoscel), 2p calculul lui $AC$.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricea $A(a) = \begin{pmatrix}a & 0 & -2\\ 1 & 1 & 1 - a\\ 2 & 1 & -2\end{pmatrix}$ și sistemul $\begin{cases}ax - 2z = 4\\ x + y + (1 - a)z = 3\\ 2x + y - 2z = 5\end{cases}$

#### a) $\det(A(0)) = 2$

$$\det(A(0)) = \begin{vmatrix}0 & 0 & -2\\ 1 & 1 & 1\\ 2 & 1 & -2\end{vmatrix} = 0 + 0 + (-2)\cdot1\cdot1 - (-2)\cdot1\cdot2 - 0 - 0 = -2 + 4 = 2.$$

*Barem: 2p scrierea determinantului, 3p calculul.*

#### b) Valorile lui $a$ pentru care $A(a)$ este inversabilă

O matrice pătratică este inversabilă dacă și numai dacă determinantul ei este nenul. Cu Sarrus:

$$\det(A(a)) = -2a + 0 - 2 - (-4) - a(1 - a) - 0 = a^2 - 3a + 2 = (a - 1)(a - 2).$$

$\det(A(a)) = 0 \iff a \in \{1, 2\}$.

**Răspuns:** $a \in \mathbb R \setminus \{1, 2\}$. *Barem: 2p determinantul, 3p concluzia.*

#### c) Pentru $a = 2$: $x_0z_0 + y_0 \ge 0$ pentru orice soluție reală

Pentru $a = 2$ sistemul devine $\begin{cases}2x - 2z = 4\\ x + y - z = 3\\ 2x + y - 2z = 5\end{cases}$, cu determinant nul (din b), deci nu e de tip Cramer.

Din prima ecuație: $x - z = 2$. Înlocuind $x - z = 2$ în a doua: $2 + y = 3 \Rightarrow y = 1$. A treia: $2(x - z) + y = 4 + 1 = 5$ ✔ — este automat satisfăcută. Sistemul este compatibil nedeterminat; notând $x = \alpha$:

$$(x_0, y_0, z_0) = (\alpha,\ 1,\ \alpha - 2), \quad \alpha \in \mathbb R.$$

Atunci

$$x_0z_0 + y_0 = \alpha(\alpha - 2) + 1 = \alpha^2 - 2\alpha + 1 = (\alpha - 1)^2 \ge 0.$$

*Barem: 3p mulțimea soluțiilor, 2p finalizarea.*

### 2. Pe $M = (1, +\infty)$, legea $x * y = \dfrac{xy - 1}{(x-1)(y-1)}$

#### a) $3 * 5 = \dfrac74$

$$3 * 5 = \frac{3\cdot5 - 1}{(3-1)(5-1)} = \frac{14}{2\cdot4} = \frac{14}{8} = \frac74.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x \in M$ cu $x * x = 3$

$$x * x = \frac{x^2 - 1}{(x-1)^2} = \frac{(x-1)(x+1)}{(x-1)^2} = \frac{x+1}{x-1},$$

simplificarea fiind permisă deoarece $x > 1$, deci $x - 1 \ne 0$.

$$\frac{x+1}{x-1} = 3 \iff x + 1 = 3x - 3 \iff x = 2 \in M.$$

**Răspuns:** $x = 2$. *Barem: 3p expresia lui $x * x$, 2p soluția.*

#### c) $(x * 2) * x > 2$ pentru orice $x \in M$

Pasul 1: $x * 2 = \dfrac{2x - 1}{(x-1)\cdot 1} = \dfrac{2x - 1}{x - 1}$. (Remarcă: pentru $x > 1$, $\dfrac{2x-1}{x-1} = 2 + \dfrac{1}{x-1} > 1$, deci rezultatul e tot în $M$.)

Pasul 2: notăm $u = x * 2$. Atunci $u - 1 = \dfrac{x}{x-1}$ și $ux - 1 = \dfrac{(2x-1)x - (x-1)}{x - 1} = \dfrac{2x^2 - 2x + 1}{x - 1}$. Deci

$$(x * 2) * x = \frac{ux - 1}{(u-1)(x-1)} = \frac{\dfrac{2x^2 - 2x + 1}{x-1}}{\dfrac{x}{x-1}\cdot(x-1)} = \frac{2x^2 - 2x + 1}{x(x-1)}.$$

Scriem $2x^2 - 2x + 1 = 2x(x - 1) + 1$:

$$(x * 2) * x = 2 + \frac{1}{x(x-1)} > 2,$$

deoarece pentru $x > 1$ avem $x > 0$ și $x - 1 > 0$, deci fracția este strict pozitivă.

*Barem: 3p calculul compunerii, 2p justificarea inegalității.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = x + \ln^2 x - x\ln x$

#### a) $f'(x) = \dfrac{(2 - x)\ln x}{x}$

$(\ln^2 x)' = 2\ln x\cdot\dfrac1x$ (derivata funcției compuse), iar $(x\ln x)' = \ln x + x\cdot\dfrac1x = \ln x + 1$. Deci

$$f'(x) = 1 + \frac{2\ln x}{x} - \ln x - 1 = \frac{2\ln x - x\ln x}{x} = \frac{(2 - x)\ln x}{x}, \quad x > 0.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Abscisele punctelor în care tangenta este paralelă cu $Ox$

Tangenta în $A(a, f(a))$ are panta $f'(a)$; ea este paralelă cu $Ox$ exact când $f'(a) = 0$:

$$\frac{(2 - a)\ln a}{a} = 0 \iff a = 2 \ \text{sau}\ \ln a = 0 \iff a \in \{1, 2\}.$$

Ambele aparțin domeniului $(0, +\infty)$.

**Răspuns:** $a = 1$ și $a = 2$. *Barem: 2p condiția $f'(a) = 0$, 3p rezolvarea.*

#### c) Ecuația $f(x) = 0$ are soluție unică

Semnul lui $f'(x) = \dfrac{(2-x)\ln x}{x}$ (numitorul $x > 0$):

| $x$ | $0$ | | $1$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $2 - x$ | | $+$ | $+$ | $+$ | $0$ | $-$ | |
| $\ln x$ | | $-$ | $0$ | $+$ | $+$ | $+$ | |
| $f'(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |
| $f(x)$ | | ↘ | $1$ | ↗ | $f(2)$ | ↘ | $-\infty$ |

- Pe $(0, 1]$ $f$ este descrescătoare, deci $f(x) \ge f(1) = 1 + 0 - 0 = 1 > 0$.
- Pe $[1, 2]$ $f$ este crescătoare, deci $f(x) \ge f(1) = 1 > 0$.

Pe $(0, 2]$ ecuația nu are soluții.

- Pe $(2, +\infty)$ $f$ este strict descrescătoare (deci injectivă) și continuă, $f(2) \ge f(1) = 1 > 0$, iar
$$\lim_{x\to+\infty} f(x) = \lim_{x\to+\infty} x\left(1 - \ln x + \frac{\ln^2 x}{x}\right) = -\infty,$$
deoarece $\ln x \to +\infty$ și $\dfrac{\ln^2 x}{x} \to 0$. Din proprietatea lui Darboux, $f$ ia valoarea $0$ pe $(2, +\infty)$, iar din strict monotonie o ia o singură dată.

Concluzie: ecuația $f(x) = 0$ are soluție unică (situată în $(2, +\infty)$).

*Barem: 2p monotonia, 3p concluzia (folosind $f(1) = 1$, limita la $+\infty$ și continuitatea).*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = x^2 - 2 + \sqrt{x^2 + 4}$

#### a) $\displaystyle\int_0^3\left(f(x) - \sqrt{x^2 + 4}\right)dx = 3$

Radicalul se reduce: $f(x) - \sqrt{x^2 + 4} = x^2 - 2$.

$$\int_0^3 (x^2 - 2)\,dx = \left(\frac{x^3}{3} - 2x\right)\Big|_0^3 = (9 - 6) - 0 = 3.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^{\sqrt5}\frac{x}{f(x) - x^2 + 2}\,dx = 1$

Numitorul: $f(x) - x^2 + 2 = \sqrt{x^2 + 4}$. Cum $(x^2 + 4)' = 2x$,

$$\frac{x}{\sqrt{x^2+4}} = \frac{(x^2 + 4)'}{2\sqrt{x^2 + 4}} = \left(\sqrt{x^2 + 4}\right)'.$$

$$\int_0^{\sqrt5}\frac{x}{\sqrt{x^2 + 4}}\,dx = \sqrt{x^2 + 4}\,\Big|_0^{\sqrt5} = \sqrt9 - \sqrt4 = 3 - 2 = 1.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $\displaystyle\lim_{x\to0}\frac{1}{x^2}\int_0^x F(t)\,dt = 0$, unde $F$ este primitiva lui $f$ cu $F(0) = 0$

$F$ este derivabilă (deci continuă), iar $\displaystyle\int_0^x F(t)\,dt \to 0$ și $x^2 \to 0$: nedeterminare $\frac00$. Aplicăm l'Hôpital; derivata integralei cu limita superioară variabilă este $F(x)$:

$$\lim_{x\to0}\frac{\int_0^x F(t)\,dt}{x^2} = \lim_{x\to0}\frac{F(x)}{2x}.$$

Din nou $\frac00$ (pentru că $F(0) = 0$). Aplicăm l'Hôpital încă o dată, cu $F' = f$:

$$\lim_{x\to0}\frac{F(x)}{2x} = \lim_{x\to0}\frac{f(x)}{2} = \frac{f(0)}{2} = \frac{0 - 2 + \sqrt4}{2} = 0.$$

(Am folosit continuitatea lui $f$ în $0$.) *Barem: 3p aplicarea l'Hôpital, 2p calculul limitei.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $x = 5$ |
| I.2 | $a = -3$ |
| I.3 | $x = 5$ |
| I.4 | 16 numere |
| I.5 | $C(1, 3)$ |
| I.6 | $d(B, CE) = 2\sqrt3$ |
| II.1.b | $a \in \mathbb R \setminus\{1, 2\}$ |
| II.1.c | soluțiile $(\alpha, 1, \alpha - 2)$, $x_0z_0 + y_0 = (\alpha-1)^2$ |
| II.2.b | $x = 2$ |
| III.1.b | $a \in \{1, 2\}$ |
| III.2.c | limita este $0$ |

## Ce merită reținut din modelul 2026

- **Ecuații logaritmice**: pune condițiile de existență înainte de a „scăpa” de logaritmi și verifică fiecare soluție.
- **Sisteme cu determinant nul**: exprimă soluțiile cu un parametru $\alpha$ și transformă expresia cerută într-un pătrat perfect.
- **Legi de compoziție**: simplifică folosind domeniul ($x > 1 \Rightarrow x - 1 \ne 0$) și scrie rezultatul ca „număr + fracție pozitivă” pentru inegalități.
- **Limite cu integrale**: l'Hôpital se poate aplica de mai multe ori, cât timp rămâne nedeterminarea $\frac00$.
