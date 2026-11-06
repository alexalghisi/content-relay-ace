Rezolvarea completă a subiectului de **Bacalaureat 2022 la Matematică M_mate-info**, **modelul oficial** publicat de minister. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Numerele $6 - 3\sqrt3$, $\sqrt3$ și $2 + \sqrt3$ sunt termeni consecutivi ai unei progresii geometrice

Trei numere $a, b, c$ sunt termeni consecutivi ai unei progresii geometrice dacă $b^2 = a\cdot c$. Calculăm produsul extremilor:

$$(6 - 3\sqrt3)(2 + \sqrt3) = 12 + 6\sqrt3 - 6\sqrt3 - 3\cdot 3 = 12 - 9 = 3,$$

iar $\left(\sqrt3\right)^2 = 3$. Cum $b^2 = ac$ (și toți termenii sunt nenuli), numerele sunt termeni consecutivi ai unei progresii geometrice (cu rația $\dfrac{\sqrt3}{6 - 3\sqrt3} = \dfrac{2 + \sqrt3}{\sqrt3}$).

*Barem: 3p calculul produsului, 2p concluzia.*

### 2. $f(x) = x^2 + mx + 1$: axa $Ox$ este tangentă graficului

Axa $Ox$ este tangentă parabolei exact când parabola are vârful pe $Ox$, adică ecuația $f(x) = 0$ are o rădăcină dublă: $\Delta = 0$.

$$\Delta = m^2 - 4 = 0 \iff m \in \{-2, 2\}.$$

**Răspuns:** $m = -2$ sau $m = 2$. *Barem: 3p condiția $\Delta = 0$, 2p valorile.*

### 3. Ecuația $5^{x+2} = 5^x + 24$

$5^{x+2} = 25\cdot 5^x$. Ecuația devine

$$25\cdot 5^x = 5^x + 24 \iff 24\cdot 5^x = 24 \iff 5^x = 1 \iff x = 0.$$

**Răspuns:** $x = 0$. *Barem: 3p obținerea $5^x = 1$, 2p soluția.*

### 4. Probabilitatea ca un număr de două cifre distincte să aibă cifra zecilor multiplu de 3

**Cazuri posibile:** cifra zecilor are 9 variante ($1$–$9$), cifra unităților oricare dintre celelalte 9 cifre (diferită de cea a zecilor, dar poate fi 0): $9\cdot 9 = 81$ numere.

**Cazuri favorabile:** cifra zecilor este multiplu de 3 și nenulă: $3, 6, 9$ — 3 variante; cifra unităților: 9 variante. Total $3\cdot 9 = 27$.

$$p = \frac{27}{81} = \frac13.$$

**Răspuns:** $p = \dfrac13$. *Barem: 2p cazurile posibile, 2p cazurile favorabile, 1p probabilitatea.*

### 5. $D$ mijlocul lui $AC$, $\overrightarrow{MA} + 2\overrightarrow{MB} + 3\overrightarrow{MC} = \vec 0$: $MD \parallel AB$

Scriem $\overrightarrow{MB} = \overrightarrow{MA} + \overrightarrow{AB}$ (regula triunghiului):

$$\overrightarrow{MA} + 2\overrightarrow{MA} + 2\overrightarrow{AB} + 3\overrightarrow{MC} = \vec 0 \iff 3\left(\overrightarrow{MA} + \overrightarrow{MC}\right) + 2\overrightarrow{AB} = \vec 0.$$

Cum $D$ este mijlocul lui $AC$, $\overrightarrow{MA} + \overrightarrow{MC} = 2\overrightarrow{MD}$. Deci

$$6\overrightarrow{MD} + 2\overrightarrow{AB} = \vec 0 \iff \overrightarrow{MD} = -\frac13\overrightarrow{AB}.$$

Vectorii $\overrightarrow{MD}$ și $\overrightarrow{AB}$ sunt coliniari, deci dreptele $MD$ și $AB$ sunt paralele (sunt distincte, pentru că $D$, mijlocul lui $AC$, nu se află pe dreapta $AB$).

*Barem: 3p relația $\overrightarrow{MD} = -\frac13\overrightarrow{AB}$, 2p concluzia.*

### 6. Triunghiul $ABC$ cu $AC = 3$, $\angle A = 30^\circ$, $\angle B = 60^\circ$: calculați $AB$

$\angle C = 180^\circ - 30^\circ - 60^\circ = 90^\circ$, deci triunghiul este dreptunghic în $C$ și $AB$ este ipotenuza. Cateta $AC$ este opusă unghiului $B$:

$$\sin B = \frac{AC}{AB} \iff \frac{\sqrt3}{2} = \frac{3}{AB} \iff AB = \frac{6}{\sqrt3} = 2\sqrt3.$$

**Răspuns:** $AB = 2\sqrt3$. *Barem: 2p unghiul drept în $C$, 3p calculul lui $AB$.*

## Subiectul al II-lea (30 de puncte)

### 1. $B = \begin{pmatrix}1 & 0 & 1\\ 0 & i & 0\\ -2 & 0 & -1\end{pmatrix}$, $A(z) = aI_3 + bB$ pentru $z = a + ib$

#### a) $\det B = i$

Cu regula lui Sarrus:

$$\det B = 1\cdot i\cdot(-1) + 0\cdot 0\cdot(-2) + 1\cdot 0\cdot 0 - 1\cdot i\cdot(-2) - 0\cdot 0\cdot 1 - (-1)\cdot 0\cdot 0 = -i + 2i = i.$$

(Sau dezvoltând după linia a doua: $\det B = i\cdot\begin{vmatrix}1 & 1\\ -2 & -1\end{vmatrix} = i(-1 + 2) = i$.)

*Barem: 3p scrierea și calculul, 2p rezultatul.*

#### b) $A(z_1)\cdot A(z_2) = A(z_1z_2)$, pentru orice $z_1, z_2 \in \mathbb C$

Observația-cheie: $B\cdot B = -I_3$. Verificare:

$$B^2 = \begin{pmatrix}1 - 2 & 0 & 1 - 1\\ 0 & i^2 & 0\\ -2 + 2 & 0 & -2 + 1\end{pmatrix} = \begin{pmatrix}-1 & 0 & 0\\ 0 & -1 & 0\\ 0 & 0 & -1\end{pmatrix} = -I_3.$$

Fie $z_1 = a + ib$, $z_2 = c + id$. Atunci ($I_3$ comută cu orice matrice):

$$A(z_1)A(z_2) = (aI_3 + bB)(cI_3 + dB) = acI_3 + adB + bcB + bdB^2 = (ac - bd)I_3 + (ad + bc)B.$$

Pe de altă parte, $z_1z_2 = (ac - bd) + i(ad + bc)$, deci $A(z_1z_2) = (ac - bd)I_3 + (ad + bc)B$. Cele două expresii coincid. Analogia: $B$ joacă rolul lui $i$, pentru că $B^2 = -I_3$.

*Barem: 3p dezvoltarea produsului cu $B^2 = -I_3$, 2p identificarea cu $A(z_1z_2)$.*

#### c) $n$ natural cu $A(1+i)A(2+i)A(3+i)A(1-i)A(2-i)A(3-i) = nI_3$

Din b), aplicat repetat, produsul este $A$ de produsul numerelor complexe. Grupăm conjugatele ($z\bar z = |z|^2$):

$$(1+i)(1-i)\cdot(2+i)(2-i)\cdot(3+i)(3-i) = 2\cdot 5\cdot 10 = 100.$$

Deci produsul este $A(100) = 100I_3 + 0\cdot B = 100I_3$, de unde $n = 100$.

**Răspuns:** $n = 100$. *Barem: 2p reducerea la $A$ de produs, 3p calculul și $n = 100$.*

### 2. Legea $x * y = \log_2\left(2^{x+y} - 2^{x+1} - 2^{y+1} + 6\right)$ pe $M = [1, +\infty)$ (asociativă)

#### a) $x * y = \log_2\left((2^x - 2)(2^y - 2) + 2\right)$

Desfacem produsul: $(2^x - 2)(2^y - 2) + 2 = 2^x2^y - 2\cdot 2^x - 2\cdot 2^y + 4 + 2 = 2^{x+y} - 2^{x+1} - 2^{y+1} + 6$, exact argumentul logaritmului din definiție.

*Barem: 3p dezvoltarea, 2p concluzia.*

#### b) Elementul neutru

Căutăm $e \in M$ cu $x * e = x$ pentru orice $x \in M$:

$$\log_2\left((2^x - 2)(2^e - 2) + 2\right) = x \iff (2^x - 2)(2^e - 2) + 2 = 2^x \iff (2^x - 2)(2^e - 3) = 0.$$

Relația trebuie să aibă loc pentru orice $x \in M$ (inclusiv $x \ne 1$, unde $2^x - 2 \ne 0$), deci $2^e = 3$, adică $e = \log_2 3$. Avem $\log_2 3 \ge \log_2 2 = 1$, deci $e \in M$. Legea fiind simetrică în $x$ și $y$ (comutativă), și $e * x = x$.

**Răspuns:** $e = \log_2 3$. *Barem: 3p determinarea lui $e$, 2p verificarea.*

#### c) $x * x * x < 3x$, pentru orice $x \in M$

Din a): $2^{x*y} - 2 = (2^x - 2)(2^y - 2)$. Notăm $t = 2^x$ (cu $x \ge 1$, $t \ge 2$). Atunci $2^{x*x} - 2 = (t - 2)^2$ și

$$2^{x*x*x} - 2 = (2^{x*x} - 2)(2^x - 2) = (t-2)^3 \Rightarrow x * x * x = \log_2\left((t-2)^3 + 2\right).$$

Cum $3x = \log_2 t^3$ și $\log_2$ este strict crescătoare, inegalitatea cerută este echivalentă cu $(t - 2)^3 + 2 < t^3$:

$$t^3 - (t-2)^3 - 2 = t^3 - (t^3 - 6t^2 + 12t - 8) - 2 = 6t^2 - 12t + 6 = 6(t - 1)^2 > 0,$$

deoarece $t \ge 2$, deci $t \ne 1$. Prin urmare $x * x * x < 3x$ pentru orice $x \in M$.

*Barem: 3p expresia lui $x * x * x$, 2p compararea cu $3x$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = (x^3 + 3x + 1)e^{-x}$

#### a) $f'(x) = (2 - x)(x^2 - x + 1)e^{-x}$

Regula produsului, cu $(e^{-x})' = -e^{-x}$:

$$f'(x) = (3x^2 + 3)e^{-x} - (x^3 + 3x + 1)e^{-x} = (-x^3 + 3x^2 - 3x + 2)e^{-x}.$$

Factorizare: $x = 2$ este rădăcină a lui $-x^3 + 3x^2 - 3x + 2$ ($-8 + 12 - 6 + 2 = 0$), iar împărțind obținem $-x^3 + 3x^2 - 3x + 2 = (2 - x)(x^2 - x + 1)$.

*Barem: 3p derivarea, 2p forma finală.*

#### b) $\lim\limits_{x\to+\infty}\left(\dfrac{f(x) - e^{-x}}{f(x) + e^{-x}}\right)^{f(x)e^x} = e^{-2}$

Notăm $r(x) = f(x)e^x = x^3 + 3x + 1$. Amplificând fracția cu $e^x$:

$$\frac{f(x) - e^{-x}}{f(x) + e^{-x}} = \frac{r - 1}{r + 1} = 1 - \frac{2}{r + 1}.$$

Pentru $x \to +\infty$, $r \to +\infty$, deci avem nedeterminare $1^\infty$. Folosim limita fundamentală $\lim\limits_{u\to\infty}\left(1 + \dfrac{a}{u}\right)^u = e^a$:

$$\left(1 - \frac{2}{r+1}\right)^{r} = \left[\left(1 - \frac{2}{r+1}\right)^{r+1}\right]^{\frac{r}{r+1}} \longrightarrow \left(e^{-2}\right)^1 = e^{-2},$$

pentru că $\dfrac{r}{r+1} \to 1$. (Echivalent, ca în barem: exponentul limită este $\lim\limits_{x\to+\infty}\dfrac{-2(x^3 + 3x + 1)}{x^3 + 3x + 2} = -2$.)

*Barem: 3p reducerea la limita fundamentală, 2p rezultatul.*

#### c) $g(x) = \left|\dfrac{f(x)}{e^{-x}} - 1\right|$ are un singur punct de extrem

$\dfrac{f(x)}{e^{-x}} - 1 = x^3 + 3x + 1 - 1 = x^3 + 3x = x(x^2 + 3)$. Cum $x^2 + 3 > 0$, semnul este semnul lui $x$:

$$g(x) = |x^3 + 3x| = \begin{cases}-x^3 - 3x, & x \in (-\infty, 0)\\ x^3 + 3x, & x \in [0, +\infty)\end{cases}$$

- pe $(-\infty, 0)$: $g'(x) = -3x^2 - 3 < 0$, $g$ strict descrescătoare;
- pe $(0, +\infty)$: $g'(x) = 3x^2 + 3 > 0$, $g$ strict crescătoare.

$g$ este continuă (modul de funcție continuă), deci $x = 0$ este punct de minim ($g(0) = 0$). Pe fiecare dintre intervalele deschise derivata nu se anulează, deci nu mai există alte puncte de extrem. Așadar $g$ are un singur punct de extrem, $x = 0$. (Observă că $g$ nu este derivabilă în 0 — derivatele laterale sunt $-3$ și $3$ — dar un punct de extrem nu trebuie să fie punct de derivabilitate.)

*Barem: 2p explicitarea lui $g$, 3p monotonia și concluzia.*

### 2. $f:(1, +\infty) \to \mathbb R$, $f(x) = x\ln(x - 1)$

#### a) $\displaystyle\int_4^6\frac{f(x)}{\ln(x-1)}\,dx = 10$

Pe $[4, 6]$, $\ln(x - 1) \ge \ln 3 > 0$, deci simplificarea e permisă: integrandul este $x$.

$$\int_4^6 x\,dx = \frac{x^2}{2}\Big|_4^6 = 18 - 8 = 10.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $F\left(\sqrt7\right) < F(3)$, pentru orice primitivă $F$ a lui $f$

$F' = f$, deci $F'(x) = x\ln(x - 1)$. Pentru $x > 2$: $x - 1 > 1 \Rightarrow \ln(x-1) > 0$, iar $x > 0$, deci $F'(x) > 0$. Astfel $F$ este strict crescătoare pe $(2, +\infty)$.

Cum $4 < 7 < 9$, avem $2 < \sqrt7 < 3$, ambele numere în $(2, +\infty)$; din strict monotonie, $F\left(\sqrt7\right) < F(3)$.

*Barem: 3p semnul lui $F'$ și monotonia, 2p concluzia.*

#### c) $m$ real cu $\displaystyle\int_3^5 f(x)\,dx = m(4\ln 2 - 1)$

Integrăm prin părți cu $u = \ln(x - 1)$, $v' = x$, alegând primitiva $v = \dfrac{x^2 - 1}{2}$ (convenabilă, pentru că $x^2 - 1 = (x-1)(x+1)$ se simplifică cu $u' = \dfrac{1}{x-1}$):

$$\int_3^5 x\ln(x-1)\,dx = \frac{x^2 - 1}{2}\ln(x - 1)\Big|_3^5 - \int_3^5\frac{x^2 - 1}{2}\cdot\frac{1}{x - 1}\,dx = (12\ln 4 - 4\ln 2) - \frac12\int_3^5(x + 1)\,dx.$$

$12\ln 4 - 4\ln 2 = 24\ln 2 - 4\ln 2 = 20\ln 2$, iar $\displaystyle\frac12\int_3^5 (x+1)\,dx = \frac12\left(\frac{x^2}{2} + x\right)\Big|_3^5 = \frac12\left(\frac{35}{2} - \frac{15}{2}\right) = 5$.

$$\int_3^5 f(x)\,dx = 20\ln 2 - 5 = 5(4\ln 2 - 1) \Rightarrow m = 5.$$

**Răspuns:** $m = 5$. *Barem: 3p integrarea prin părți, 2p calculul și $m = 5$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $(\sqrt3)^2 = (6 - 3\sqrt3)(2+\sqrt3) = 3$ |
| I.2 | $m \in \{-2, 2\}$ |
| I.3 | $x = 0$ |
| I.4 | $p = \dfrac13$ |
| I.6 | $AB = 2\sqrt3$ |
| II.1.c | $n = 100$ |
| II.2.b | $e = \log_2 3$ |
| III.1.b | $e^{-2}$ |
| III.1.c | singurul punct de extrem: $x = 0$ |
| III.2.c | $m = 5$ |

## Ce merită reținut din acest model

- **Matrice care „imită” numerele complexe**: dacă $B^2 = -I_3$, atunci $aI_3 + bB$ se înmulțesc exact ca $a + ib$.
- **Legi de forma $\log_2\left((2^x - 2)(2^y - 2) + 2\right)$**: lucrează cu $2^{x*y} - 2$, care este multiplicativ.
- **Limite $1^\infty$**: scrie baza ca $1 + \frac{a}{u}$ și adu exponentul la forma $u$.
- **Integrare prin părți cu $\ln(x-1)$**: alege primitiva $\frac{x^2-1}{2}$ în loc de $\frac{x^2}{2}$ ca să se simplifice fracția.
