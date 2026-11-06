Rezolvarea completă a subiectului de **Bacalaureat 2025 la Matematică M_șt-nat**, sesiunea iunie–iulie, **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie aritmetică cu $a_1 = 4$ și $a_2 = 15$: determinați $a_3$

Rația este diferența dintre doi termeni consecutivi: $r = a_2 - a_1 = 15 - 4 = 11$. Atunci

$$a_3 = a_2 + r = 15 + 11 = 26.$$

**Răspuns:** $a_3 = 26$. *Barem: 3p rația, 2p termenul $a_3$.*

### 2. $f(x) = 3x - 2$: determinați $a$ cu $f(a) + f(2) = 2a$

$f(2) = 6 - 2 = 4$ și $f(a) = 3a - 2$. Ecuația:

$$3a - 2 + 4 = 2a \iff 3a + 2 = 2a \iff a = -2.$$

Verificare: $f(-2) + f(2) = -8 + 4 = -4 = 2\cdot(-2)$ ✔.

**Răspuns:** $a = -2$. *Barem: 2p valorile funcției, 3p rezolvarea.*

### 3. Ecuația $\log_2(x^2 - 3x + 2) = \log_2(2 + x)$

**Condiții de existență:** $x^2 - 3x + 2 > 0$ și $2 + x > 0$. Din injectivitatea logaritmului, ecuația este echivalentă (pe domeniu) cu egalitatea argumentelor:

$$x^2 - 3x + 2 = 2 + x \iff x^2 - 4x = 0 \iff x(x - 4) = 0 \iff x \in \{0, 4\}.$$

**Verificare** (e suficient să verificăm $2 + x > 0$, căci celălalt argument este egal cu el):
- $x = 0$: argumentele sunt $2$ și $2$, pozitive ✔;
- $x = 4$: argumentele sunt $16 - 12 + 2 = 6$ și $6$ ✔.

**Răspuns:** $x \in \{0, 4\}$. *Barem: 2p ecuația $x^2 - 4x = 0$, 3p soluțiile și faptul că ele convin.*

### 4. Câte numere naturale pare, de două cifre distincte, se formează cu $A = \{1, 2, 3, 5, 7, 8\}$?

Un număr este par dacă cifra unităților este pară. Din $A$, cifrele pare sunt doar $2$ și $8$, deci:

- cifra unităților: **2** moduri;
- cifra zecilor: oricare din celelalte 5 elemente ale lui $A$ (cifrele trebuie să fie distincte, iar $A$ nu conține 0, deci nu avem problema cifrei zecilor nule): **5** moduri.

Regula produsului: $2\cdot 5 = 10$ numere.

**Răspuns:** 10 numere. *Barem: 2p alegerea cifrei unităților, 3p numărarea finală.*

### 5. $A(0,5)$, $B(8,4)$, $C$ mijlocul lui $OB$: arătați că $AO = AC$

$C\left(\dfrac{0 + 8}{2}, \dfrac{0 + 4}{2}\right) = C(4, 2)$.

$$AO = \sqrt{0^2 + 5^2} = 5, \qquad AC = \sqrt{(4 - 0)^2 + (2 - 5)^2} = \sqrt{16 + 9} = 5.$$

Deci $AO = AC$. *Barem: 2p coordonatele lui $C$, 3p lungimile și concluzia.*

### 6. Triunghi dreptunghic în $A$, $AB = 4$, $\cos B = \dfrac23$: arătați că $BC = 6$

În triunghiul dreptunghic, cosinusul unghiului ascuțit $B$ este cateta alăturată supra ipotenuză:

$$\cos B = \frac{AB}{BC} \iff \frac23 = \frac{4}{BC} \iff BC = \frac{3\cdot 4}{2} = 6.$$

*Barem: 3p relația cu cosinusul, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $I_2$ și $A = \begin{pmatrix}-2 & 8\\ -1 & 3\end{pmatrix}$

#### a) $\det A = 2$

$$\det A = (-2)\cdot 3 - 8\cdot(-1) = -6 + 8 = 2.$$

*Barem: 3p aplicarea formulei, 2p rezultatul.*

#### b) $B = \dfrac12(I_2 - A)$ este inversa lui $A$

$$I_2 - A = \begin{pmatrix}3 & -8\\ 1 & -2\end{pmatrix}, \qquad B = \begin{pmatrix}\frac32 & -4\\ \frac12 & -1\end{pmatrix}.$$

Verificăm $A\cdot B = B\cdot A = I_2$:

$$A\cdot B = \begin{pmatrix}-2\cdot\frac32 + 8\cdot\frac12 & -2\cdot(-4) + 8\cdot(-1)\\ -1\cdot\frac32 + 3\cdot\frac12 & -1\cdot(-4) + 3\cdot(-1)\end{pmatrix} = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix},$$

$$B\cdot A = \begin{pmatrix}\frac32\cdot(-2) + (-4)(-1) & \frac32\cdot 8 + (-4)\cdot 3\\ \frac12\cdot(-2) + (-1)(-1) & \frac12\cdot 8 + (-1)\cdot 3\end{pmatrix} = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}.$$

Deci $B = A^{-1}$. *Barem: 3p calculul lui $B$, 2p verificarea produselor.*

#### c) Matricea $X$ cu $(A - I_2)\cdot X = 2A$

Din b): $I_2 - A = 2A^{-1}$, deci $A - I_2 = -2A^{-1}$. Ecuația devine

$$-2A^{-1}\cdot X = 2A \iff A^{-1}X = -A \iff X = -A\cdot A$$

(am înmulțit la stânga cu $A$). Calculăm

$$A^2 = \begin{pmatrix}-2 & 8\\ -1 & 3\end{pmatrix}\begin{pmatrix}-2 & 8\\ -1 & 3\end{pmatrix} = \begin{pmatrix}4 - 8 & -16 + 24\\ 2 - 3 & -8 + 9\end{pmatrix} = \begin{pmatrix}-4 & 8\\ -1 & 1\end{pmatrix},$$

deci $X = -A^2 = \begin{pmatrix}4 & -8\\ 1 & -1\end{pmatrix}$.

Verificare: $A - I_2 = \begin{pmatrix}-3 & 8\\ -1 & 2\end{pmatrix}$ și $\begin{pmatrix}-3 & 8\\ -1 & 2\end{pmatrix}\begin{pmatrix}4 & -8\\ 1 & -1\end{pmatrix} = \begin{pmatrix}-4 & 16\\ -2 & 6\end{pmatrix} = 2A$ ✔.

**Răspuns:** $X = \begin{pmatrix}4 & -8\\ 1 & -1\end{pmatrix}$. *Barem: 3p relația $X = -A\cdot A$, 2p matricea $X$.*

### 2. Pe $M = [0, +\infty)$, legea $x * y = x + y - \sqrt{xy}$

#### a) $1 * 4 = 3$

$$1 * 4 = 1 + 4 - \sqrt{1\cdot 4} = 5 - 2 = 3.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x \in M$ cu $x * (9x) = x^2$

Pentru $x \ge 0$: $\sqrt{x\cdot 9x} = \sqrt{9x^2} = 3x$ (deoarece $x \ge 0$, $\sqrt{x^2} = x$). Deci

$$x * (9x) = x + 9x - 3x = 7x.$$

Ecuația: $7x = x^2 \iff x(x - 7) = 0 \iff x \in \{0, 7\}$; ambele valori sunt în $M$, deci convin.

**Răspuns:** $x \in \{0, 7\}$. *Barem: 2p expresia $7x$, 3p soluțiile.* Nu împărți la $x$ — ai pierde soluția $x = 0$.

#### c) $x$ real cu $2^x * 2^{x+2} = 6^x$

$2^x$ și $2^{x+2}$ sunt pozitive, deci aparțin lui $M$. Calculăm radicalul: $\sqrt{2^x\cdot 2^{x+2}} = \sqrt{2^{2x+2}} = 2^{x+1}$. Atunci

$$2^x * 2^{x+2} = 2^x + 4\cdot 2^x - 2\cdot 2^x = 3\cdot 2^x.$$

Ecuația: $3\cdot 2^x = 6^x = 2^x\cdot 3^x$. Împărțim la $2^x > 0$: $3^x = 3 \iff x = 1$.

**Răspuns:** $x = 1$. *Barem: 3p expresia $3\cdot 2^x$, 2p soluția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \dfrac{2\sqrt x}{x^2 + x + 2}$

#### a) $f'(x) = \dfrac{-3x^2 - x + 2}{(x^2 + x + 2)^2\sqrt x}$

Regula câtului, cu $(2\sqrt x)' = \dfrac{1}{\sqrt x}$ și $(x^2 + x + 2)' = 2x + 1$:

$$f'(x) = \frac{\frac{1}{\sqrt x}(x^2 + x + 2) - 2\sqrt x(2x + 1)}{(x^2 + x + 2)^2}.$$

Amplificăm fracția de la numărător cu $\sqrt x$ (folosind $\sqrt x\cdot\sqrt x = x$):

$$f'(x) = \frac{x^2 + x + 2 - 2x(2x + 1)}{(x^2 + x + 2)^2\sqrt x} = \frac{x^2 + x + 2 - 4x^2 - 2x}{(x^2 + x + 2)^2\sqrt x} = \frac{-3x^2 - x + 2}{(x^2 + x + 2)^2\sqrt x}.$$

*Barem: 3p aplicarea regulii de derivare, 2p forma finală.*

#### b) Asimptota orizontală spre $+\infty$

Împărțim numărătorul și numitorul la $\sqrt x$:

$$\lim_{x\to+\infty} f(x) = \lim_{x\to+\infty}\frac{2}{x\sqrt x + \sqrt x + \frac{2}{\sqrt x}} = 0,$$

deoarece numitorul tinde la $+\infty$. Limita este finită, deci graficul are asimptotă orizontală.

**Răspuns:** dreapta $y = 0$ (axa $Ox$). *Barem: 3p calculul limitei, 2p ecuația asimptotei.*

#### c) $a > 0$ pentru care tangenta în $A(a, f(a))$ este paralelă cu $Ox$

Panta tangentei este $f'(a)$; tangenta este paralelă cu $Ox$ exact când panta este 0, adică $f'(a) = 0$. Numitorul fiind strict pozitiv pentru $a > 0$:

$$-3a^2 - a + 2 = 0 \iff 3a^2 + a - 2 = 0, \qquad \Delta = 1 + 24 = 25, \qquad a = \frac{-1 \pm 5}{6}.$$

Obținem $a = -1$ (nu convine, $a$ trebuie să fie pozitiv) sau $a = \dfrac23$ (convine).

**Răspuns:** $a = \dfrac23$. *Barem: 3p condiția $f'(a) = 0$, 2p soluția care convine.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = x^3 + 3x + 3$

#### a) $\displaystyle\int_0^2 (f(x) - 3x - 3)\,dx = 4$

$f(x) - 3x - 3 = x^3$, deci

$$\int_0^2 x^3\,dx = \frac{x^4}{4}\Big|_0^2 = \frac{16}{4} - 0 = 4.$$

*Barem: 3p simplificarea și primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1\frac{1}{(f(x) - x^3)^2}\,dx = \frac{1}{18}$

$f(x) - x^3 = 3x + 3$, iar $(3x + 3)' = 3$. Scriem integrandul ca $\dfrac13\cdot\dfrac{(3x+3)'}{(3x+3)^2}$; o primitivă a lui $\dfrac{u'}{u^2}$ este $-\dfrac1u$:

$$\int_0^1\frac{dx}{(3x + 3)^2} = -\frac13\cdot\frac{1}{3x + 3}\Big|_0^1 = -\frac13\left(\frac16 - \frac13\right) = -\frac{1}{18} + \frac19 = \frac{1}{18}.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) Numărul $m$ cu $\displaystyle\int_1^e\frac{f(x) - 3}{x^2}\ln x\,dx = \frac{e^2 + m}{4}$

$\dfrac{f(x) - 3}{x^2} = \dfrac{x^3 + 3x}{x^2} = x + \dfrac3x$. Integrala se desparte în două:

$$I = \int_1^e x\ln x\,dx + \int_1^e\frac{3\ln x}{x}\,dx.$$

**Prima integrală — prin părți**, cu $f = \ln x$, $g' = x$ (deci $f' = \frac1x$, $g = \frac{x^2}{2}$):

$$\int_1^e x\ln x\,dx = \frac{x^2}{2}\ln x\Big|_1^e - \int_1^e\frac{x}{2}\,dx = \frac{e^2}{2} - \frac{x^2}{4}\Big|_1^e = \frac{e^2}{2} - \frac{e^2 - 1}{4} = \frac{e^2 + 1}{4}.$$

**A doua integrală:** $\dfrac{\ln x}{x} = (\ln x)'\cdot\ln x$, deci o primitivă este $\dfrac{\ln^2 x}{2}$:

$$\int_1^e\frac{3\ln x}{x}\,dx = \frac{3\ln^2 x}{2}\Big|_1^e = \frac32.$$

Adunând: $I = \dfrac{e^2 + 1}{4} + \dfrac64 = \dfrac{e^2 + 7}{4}$.

Din $\dfrac{e^2 + m}{4} = \dfrac{e^2 + 7}{4}$ rezultă $m = 7$.

**Răspuns:** $m = 7$. *Barem: 3p calculul integralei, 2p valoarea lui $m$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_3 = 26$ |
| I.2 | $a = -2$ |
| I.3 | $x \in \{0, 4\}$ |
| I.4 | 10 numere |
| II.1.c | $X = \begin{pmatrix}4 & -8\\ 1 & -1\end{pmatrix}$ |
| II.2.b | $x \in \{0, 7\}$ |
| II.2.c | $x = 1$ |
| III.1.b | $y = 0$ |
| III.1.c | $a = \tfrac23$ |
| III.2.c | $m = 7$ |

## Ce merită reținut din varianta 1

- **Ecuații logaritmice:** după egalarea argumentelor, verifică explicit condițiile de existență pentru fiecare soluție.
- **Ecuații matriceale:** folosește relațiile deja demonstrate (aici $I_2 - A = 2A^{-1}$) — scurtează mult calculul.
- **Tangentă paralelă cu $Ox$** înseamnă $f'(a) = 0$; elimină rădăcinile din afara domeniului.
- **Integrale cu $\ln x$:** $x^n\ln x$ se face prin părți, iar $\frac{\ln x}{x}$ are primitiva $\frac{\ln^2 x}{2}$.
