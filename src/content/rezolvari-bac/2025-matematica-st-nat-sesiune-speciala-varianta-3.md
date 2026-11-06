Rezolvarea completă a subiectului de **Bacalaureat 2025 la Matematică M_șt-nat**, sesiunea specială, **varianta 3** (filiera teoretică, profilul real, specializarea științe ale naturii). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $2\cdot(1{,}1 + 0{,}3) - 1{,}8 = 1$

Respectăm ordinea operațiilor: întâi paranteza, apoi înmulțirea, apoi scăderea.

$$2\cdot(1{,}1 + 0{,}3) - 1{,}8 = 2\cdot 1{,}4 - 1{,}8 = 2{,}8 - 1{,}8 = 1.$$

*Barem: 2p calculul parantezei, 3p finalizarea.*

### 2. $f(x) = 2x + 4$; determinați $a$ cu $f(a) = a\cdot f(0)$

$f(0) = 4$ și $f(a) = 2a + 4$. Ecuația devine

$$2a + 4 = 4a \iff 2a = 4 \iff a = 2.$$

**Verificare:** $f(2) = 8 = 2\cdot 4$ ✔.

**Răspuns:** $a = 2$. *Barem: 2p $f(0)$ și $f(a)$, 3p rezolvarea ecuației.*

### 3. Ecuația $\sqrt{2 - x} = \sqrt{x^2 + x - 1}$

**Condiții de existență:** $2 - x \ge 0$ și $x^2 + x - 1 \ge 0$. Nu e nevoie să rezolvăm a doua inegalitate separat: dacă radicalii sunt egali, cei doi radicanzi sunt egali, deci e suficient ca soluțiile găsite să verifice $2 - x \ge 0$.

Ridicăm la pătrat (ambii membri sunt nenegativi):

$$2 - x = x^2 + x - 1 \iff x^2 + 2x - 3 = 0 \iff (x+3)(x-1) = 0,$$

deci $x_1 = -3$, $x_2 = 1$.

**Verificare:** $x = -3$: $\sqrt{5} = \sqrt{9 - 3 - 1} = \sqrt5$ ✔; $x = 1$: $\sqrt1 = \sqrt{1 + 1 - 1} = 1$ ✔.

**Răspuns:** $x \in \{-3, 1\}$. *Barem: 2p ecuația de gradul al II-lea, 3p soluțiile care convin.*

### 4. Probabilitatea ca un număr natural de o cifră să verifice $n^3 > 10$

**Cazuri posibile:** numerele naturale de o cifră sunt $0, 1, 2, \dots, 9$ — adică 10 numere (nu uita de 0).

**Cazuri favorabile:** $0^3 = 0$, $1^3 = 1$, $2^3 = 8$ nu depășesc 10, iar $3^3 = 27 > 10$; cum $n^3$ crește cu $n$, toate numerele $3, 4, \dots, 9$ verifică inegalitatea — 7 numere.

$$p = \frac{\text{nr. cazuri favorabile}}{\text{nr. cazuri posibile}} = \frac{7}{10}.$$

**Răspuns:** $p = \dfrac{7}{10}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(1,4)$, $B(2,0)$, $C(8,2)$: distanța de la $A$ la mijlocul lui $BC$

Mijlocul $M$ al segmentului $BC$: $M\left(\dfrac{2+8}{2}, \dfrac{0+2}{2}\right) = M(5,1)$.

$$AM = \sqrt{(5-1)^2 + (1-4)^2} = \sqrt{16 + 9} = \sqrt{25} = 5.$$

**Răspuns:** $AM = 5$. *Barem: 3p coordonatele lui $M$, 2p distanța.*

### 6. Triunghi dreptunghic în $A$, $BC = 10$, $\sin B = \dfrac25$: arătați că $AC = 4$

În triunghiul dreptunghic, sinusul unui unghi ascuțit este cateta opusă supra ipotenuză. Cateta opusă lui $B$ este $AC$, ipotenuza este $BC$:

$$\sin B = \frac{AC}{BC} \Rightarrow \frac25 = \frac{AC}{10} \Rightarrow AC = \frac{2\cdot 10}{5} = 4.$$

*Barem: 3p scrierea lui $\sin B$, 2p calculul lui $AC$.*

## Subiectul al II-lea (30 de puncte)

### 1. $I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$, $A(x) = \begin{pmatrix}2+2x & x\\ -x & 2-2x\end{pmatrix}$

#### a) $\det(A(1)) = 1$

$$A(1) = \begin{pmatrix}4 & 1\\ -1 & 0\end{pmatrix}, \qquad \det(A(1)) = 4\cdot 0 - 1\cdot(-1) = 0 + 1 = 1.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $A(2)\cdot A(1) + 3A(-2) = 16I_2$

$A(2) = \begin{pmatrix}6 & 2\\ -2 & -2\end{pmatrix}$, $A(-2) = \begin{pmatrix}-2 & -2\\ 2 & 6\end{pmatrix}$.

$$A(2)\cdot A(1) = \begin{pmatrix}6 & 2\\ -2 & -2\end{pmatrix}\begin{pmatrix}4 & 1\\ -1 & 0\end{pmatrix} = \begin{pmatrix}24 - 2 & 6 + 0\\ -8 + 2 & -2 + 0\end{pmatrix} = \begin{pmatrix}22 & 6\\ -6 & -2\end{pmatrix}.$$

$$A(2)A(1) + 3A(-2) = \begin{pmatrix}22 & 6\\ -6 & -2\end{pmatrix} + \begin{pmatrix}-6 & -6\\ 6 & 18\end{pmatrix} = \begin{pmatrix}16 & 0\\ 0 & 16\end{pmatrix} = 16I_2.$$

*Barem: 3p produsul $A(2)A(1)$, 2p finalizarea.*

#### c) $m \in \mathbb Z^*$ pentru care $B(m) = \dfrac1m A(-m)$ este inversa lui $A(m)$

$B(m)$ este inversa lui $A(m)$ dacă $A(m)B(m) = B(m)A(m) = I_2$. Calculăm $A(m)\cdot A(-m)$, cu $A(-m) = \begin{pmatrix}2-2m & -m\\ m & 2+2m\end{pmatrix}$:

- poziția $(1,1)$: $(2+2m)(2-2m) + m\cdot m = 4 - 4m^2 + m^2 = 4 - 3m^2$;
- poziția $(1,2)$: $(2+2m)(-m) + m(2+2m) = 0$;
- poziția $(2,1)$: $(-m)(2-2m) + (2-2m)m = 0$;
- poziția $(2,2)$: $(-m)(-m) + (2-2m)(2+2m) = m^2 + 4 - 4m^2 = 4 - 3m^2$.

Deci $A(m)A(-m) = (4 - 3m^2)I_2$ și, analog (înlocuind $m$ cu $-m$), $A(-m)A(m) = (4 - 3m^2)I_2$. Așadar

$$A(m)B(m) = B(m)A(m) = \frac{4 - 3m^2}{m}I_2.$$

Condiția devine $\dfrac{4 - 3m^2}{m} = 1 \iff 3m^2 + m - 4 = 0 \iff (m-1)(3m+4) = 0$, deci $m = 1$ sau $m = -\dfrac43$. Cum $m$ trebuie să fie întreg, $m = -\dfrac43$ nu convine.

**Răspuns:** $m = 1$. *Barem: 3p $A(m)B(m) = \frac{4-3m^2}{m}I_2$, 2p valoarea care convine.*

### 2. Polinomul $f = X^3 - 3X^2 - 3X + a$

#### a) Pentru $a = 1$, $f(-1) = 0$

$$f(-1) = (-1)^3 - 3(-1)^2 - 3(-1) + 1 = -1 - 3 + 3 + 1 = 0.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $a$ cu $3x_1 + 3x_2 + 3x_3 - x_1x_2x_3 = 3$

Relațiile lui Viète pentru $X^3 + bX^2 + cX + d$ (aici $b = -3$, $c = -3$, $d = a$):

$$x_1 + x_2 + x_3 = -b = 3, \qquad x_1x_2x_3 = -d = -a.$$

Atunci $3(x_1 + x_2 + x_3) - x_1x_2x_3 = 9 - (-a) = 9 + a$. Condiția: $9 + a = 3 \Rightarrow a = -6$.

**Răspuns:** $a = -6$. *Barem: 3p relațiile lui Viète și expresia $9 + a$, 2p valoarea lui $a$.* Greșeală frecventă: semnul produsului rădăcinilor la gradul 3 este $-\dfrac{d}{1}$.

#### c) Pentru $a = 9$, rădăcinile lui $f$

Grupăm termenii:

$$f = X^3 - 3X^2 - 3X + 9 = X^2(X - 3) - 3(X - 3) = (X - 3)(X^2 - 3).$$

$X - 3 = 0 \Rightarrow x_1 = 3$; $X^2 - 3 = 0 \Rightarrow x_{2,3} = \pm\sqrt3$.

**Răspuns:** rădăcinile sunt $3$, $-\sqrt3$, $\sqrt3$. *Barem: 2p descompunerea, 3p rădăcinile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{x^2 - 8}{e^x}$

#### a) $f'(x) = \dfrac{(x+2)(4-x)}{e^x}$

Regula câtului:

$$f'(x) = \frac{2x\cdot e^x - (x^2 - 8)e^x}{(e^x)^2} = \frac{e^x(2x - x^2 + 8)}{e^{2x}} = \frac{-x^2 + 2x + 8}{e^x}.$$

Rădăcinile lui $-x^2 + 2x + 8$ sunt $-2$ și $4$, iar coeficientul dominant e $-1$, deci $-x^2 + 2x + 8 = -(x+2)(x-4) = (x+2)(4-x)$. *Barem: 3p derivarea, 2p forma finală.*

#### b) Tangenta în punctul de abscisă $x = 0$

$f(0) = \dfrac{-8}{1} = -8$ și $f'(0) = \dfrac{2\cdot 4}{1} = 8$. Ecuația tangentei $y - f(0) = f'(0)(x - 0)$:

$$y + 8 = 8x \iff y = 8x - 8.$$

**Răspuns:** $y = 8x - 8$. *Barem: 2p $f(0)$ și $f'(0)$, 3p ecuația tangentei.*

#### c) $-4e^2 \le f(x) \le e^3$, pentru orice $x \in [-3, 4]$

**Semnul derivatei.** $e^x > 0$, deci semnul lui $f'$ este semnul lui $(x+2)(4-x)$: $f'(x) = 0 \iff x \in \{-2, 4\}$.

| $x$ | $-3$ | | $-2$ | | $4$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | $0$ |
| $f(x)$ | $e^3$ | ↘ | $-4e^2$ | ↗ | $\dfrac{8}{e^4}$ |

Deci $f$ este descrescătoare pe $[-3, -2]$ și crescătoare pe $[-2, 4]$.

**Valorile:** $f(-3) = \dfrac{9 - 8}{e^{-3}} = e^3$; $f(-2) = \dfrac{4 - 8}{e^{-2}} = -4e^2$; $f(4) = \dfrac{16 - 8}{e^4} = \dfrac{8}{e^4}$.

**Concluzie.** Minimul lui $f$ pe $[-3,4]$ este $f(-2) = -4e^2$. Maximul este cel mai mare dintre $f(-3) = e^3$ și $f(4) = \dfrac{8}{e^4}$; cum $\dfrac{8}{e^4} < 1 < e^3$, maximul este $e^3$. Așadar $-4e^2 \le f(x) \le e^3$ pentru orice $x \in [-3, 4]$. $\blacksquare$

*Barem: 3p monotonia, 2p valorile la capete/extrem și concluzia.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = 6x + \dfrac{2\ln x}{x}$

#### a) $\displaystyle\int_2^3 \left(f(x) - \frac{2\ln x}{x}\right)dx = 15$

Integrandul se reduce la $6x$:

$$\int_2^3 6x\,dx = 3x^2\Big|_2^3 = 27 - 12 = 15.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^e \left(f(x) - 6x\right)dx = 1$

$f(x) - 6x = \dfrac{2\ln x}{x} = 2\ln x\cdot(\ln x)'$, iar o primitivă este $\ln^2 x$ (derivata lui $\ln^2 x$ este $2\ln x\cdot\dfrac1x$):

$$\int_1^e \frac{2\ln x}{x}\,dx = \ln^2 x\Big|_1^e = 1 - 0 = 1.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $a$ cu $\displaystyle\int_1^{e^2}\left(\frac{f(x)}{x} + f'(x)\ln x\right)dx = af(e^2)$

**Ideea cheie:** integrandul este derivata produsului $f(x)\ln x$:

$$\left(f(x)\ln x\right)' = f'(x)\ln x + f(x)\cdot\frac1x.$$

Deci

$$\int_1^{e^2}\left(\frac{f(x)}{x} + f'(x)\ln x\right)dx = f(x)\ln x\Big|_1^{e^2} = f(e^2)\ln e^2 - f(1)\ln 1 = 2f(e^2).$$

Egalitatea devine $2f(e^2) = af(e^2)$. Cum $f(e^2) = 6e^2 + \dfrac{4}{e^2} > 0$, deci nenul, împărțim și obținem $a = 2$.

**Răspuns:** $a = 2$. *Barem: 3p integrala ca $f(x)\ln x\big|_1^{e^2} = 2f(e^2)$, 2p $a = 2$ cu justificarea $f(e^2) \ne 0$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $1$ |
| I.2 | $a = 2$ |
| I.3 | $x \in \{-3, 1\}$ |
| I.4 | $p = \dfrac{7}{10}$ |
| I.5 | $5$ |
| I.6 | $AC = 4$ |
| II.1.c | $m = 1$ |
| II.2.b | $a = -6$ |
| II.2.c | $3, -\sqrt3, \sqrt3$ |
| III.1.b | $y = 8x - 8$ |
| III.2.c | $a = 2$ |

## Ce merită reținut din varianta 3

- **Probabilități cu numere de o cifră**: mulțimea are 10 elemente, inclusiv 0.
- **Inversa unei matrice dată prin formulă**: calculează $A(m)A(-m)$ — de obicei iese un multiplu al lui $I_2$.
- **Viète la gradul 3**: $x_1x_2x_3 = -\dfrac{d}{a}$; atenție la semn.
- **Polinoame de gradul 3 cu 4 termeni**: încearcă gruparea câte doi termeni.
- **Integrale cu $f$ și $f'$ amestecate**: caută derivata unui produs, aici $\left(f(x)\ln x\right)'$.
