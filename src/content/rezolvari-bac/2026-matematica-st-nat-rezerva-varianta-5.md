Rezolvarea completă a subiectului de **Bacalaureat 2026 la Matematică M_șt-nat**, sesiunea de rezervă (august–septembrie), **varianta 5**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $i(6 - i) + 3(3 - 2i) = 10$

Desfacem parantezele:

$$i(6 - i) + 3(3 - 2i) = 6i - i^2 + 9 - 6i.$$

Termenii $6i$ și $-6i$ se reduc, iar $-i^2 = -(-1) = 1$:

$$= 1 + 9 = 10.$$

*Barem: 3p desfacerea parantezelor, 2p finalizarea.*

### 2. $f(x) = x^2 - 4x$: abscisele punctelor de intersecție a graficului cu axa $Ox$

Un punct al graficului se află pe $Ox$ când ordonata lui este 0, adică $f(x) = 0$:

$$x^2 - 4x = 0 \iff x(x - 4) = 0 \iff x = 0 \text{ sau } x = 4.$$

**Răspuns:** abscisele sunt $0$ și $4$. *Barem: 3p ecuația $f(x) = 0$, 2p soluțiile.*

### 3. Ecuație exponențială: $7^{3x - 2} = 7^{-x}\cdot 49$

Scriem $49 = 7^2$, deci membrul drept devine $7^{-x}\cdot 7^2 = 7^{-x + 2}$. Funcția exponențială fiind injectivă, egalăm exponenții:

$$3x - 2 = -x + 2 \iff 4x = 4 \iff x = 1.$$

**Verificare:** $7^{1} = 7$ și $7^{-1}\cdot 49 = 7$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. Numere naturale impare, de două cifre distincte, cu cifre din $A = \{2, 3, 4, 5, 8, 9\}$

Un număr este impar dacă cifra unităților este impară. Cifrele impare din $A$ sunt $3, 5, 9$, deci **cifra unităților** se alege în 3 moduri.

**Cifra zecilor** trebuie să fie diferită de cifra unităților (cifre distincte); din cele 6 cifre ale lui $A$ rămân 5 (niciuna nu e 0, deci nu avem problema primei cifre nule).

Regula produsului: $3 \cdot 5 = 15$ numere.

**Răspuns:** 15 numere. *Barem: 2p alegerea cifrei unităților, 3p numărarea.*

### 5. $A(5, 2)$ mijlocul lui $BC$, $B(7, 4)$: lungimea lui $OC$

Fie $C(x_C, y_C)$. Din formula mijlocului:

$$\frac{7 + x_C}{2} = 5 \Rightarrow x_C = 3, \qquad \frac{4 + y_C}{2} = 2 \Rightarrow y_C = 0.$$

Deci $C(3, 0)$ și $OC = \sqrt{3^2 + 0^2} = 3$.

**Răspuns:** $OC = 3$. *Barem: 2p formula mijlocului, 3p coordonatele lui $C$ și lungimea.*

### 6. Triunghi dreptunghic în $A$, $AB = 2$, $BC = 4$: arătați că $AD = \sqrt3$, $AD$ înălțime

Teorema lui Pitagora: $AC = \sqrt{BC^2 - AB^2} = \sqrt{16 - 4} = \sqrt{12} = 2\sqrt3$.

Scriem aria în două moduri — cu catetele și cu ipotenuza și înălțimea corespunzătoare:

$$\mathcal A = \frac{AB\cdot AC}{2} = \frac{BC\cdot AD}{2} \Rightarrow AD = \frac{AB\cdot AC}{BC} = \frac{2\cdot 2\sqrt3}{4} = \sqrt3.$$

*Barem: 3p $AC$ și scrierea ariei, 2p calculul lui $AD$.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $I_2$ și $A(x) = \begin{pmatrix}x - 2 & -1 - x\\ 3x & x + 4\end{pmatrix}$

**a)** Arătați că $\det(A(2)) = 18$.

$A(2) = \begin{pmatrix}0 & -3\\ 6 & 6\end{pmatrix}$, deci

$$\det(A(2)) = 0\cdot 6 - (-3)\cdot 6 = 0 + 18 = 18.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

**b)** Arătați că $B = 4I_2 - A(1)$ este inversa matricei $A(1)$.

$A(1) = \begin{pmatrix}-1 & -2\\ 3 & 5\end{pmatrix}$, deci $B = \begin{pmatrix}4 & 0\\ 0 & 4\end{pmatrix} - \begin{pmatrix}-1 & -2\\ 3 & 5\end{pmatrix} = \begin{pmatrix}5 & 2\\ -3 & -1\end{pmatrix}$.

Verificăm ambele produse:

$$A(1)\cdot B = \begin{pmatrix}-5 + 6 & -2 + 2\\ 15 - 15 & 6 - 5\end{pmatrix} = I_2, \qquad B\cdot A(1) = \begin{pmatrix}-5 + 6 & -10 + 10\\ 3 - 3 & 6 - 5\end{pmatrix} = I_2.$$

Cum $A(1)\cdot B = B\cdot A(1) = I_2$, $B = A(1)^{-1}$. $\blacksquare$

*Barem: 2p matricele $A(1)$ și $B$, 3p verificarea produselor.*

**c)** Determinați $X \in \mathcal M_2(\mathbb R)$ pentru care $12X - 3A(1)\cdot X = A(5)$.

Dăm factor comun $X$ la dreapta (atenție: $12X = 12I_2\cdot X$, nu putem scrie „$12 - 3A(1)$”):

$$3\big(4I_2 - A(1)\big)X = A(5) \iff 3B\cdot X = A(5).$$

Din b), $B^{-1} = A(1)$. Înmulțim la stânga cu $\tfrac13 A(1)$:

$$X = \frac13 A(1)\cdot A(5), \qquad A(5) = \begin{pmatrix}3 & -6\\ 15 & 9\end{pmatrix}.$$

$$A(1)\cdot A(5) = \begin{pmatrix}-1 & -2\\ 3 & 5\end{pmatrix}\begin{pmatrix}3 & -6\\ 15 & 9\end{pmatrix} = \begin{pmatrix}-3 - 30 & 6 - 18\\ 9 + 75 & -18 + 45\end{pmatrix} = \begin{pmatrix}-33 & -12\\ 84 & 27\end{pmatrix}.$$

**Răspuns:** $X = \begin{pmatrix}-11 & -4\\ 28 & 9\end{pmatrix}$. *Barem: 2p rescrierea ecuației și $A(5)$, 3p determinarea lui $X$.*

### 2. Polinomul $f = X^3 + 2X^2 + mX + 4$

**a)** Pentru $m = 2$, arătați că $f(-2) = 0$.

$$f(-2) = (-2)^3 + 2(-2)^2 + 2(-2) + 4 = -8 + 8 - 4 + 4 = 0.$$

*Barem: 3p înlocuirea, 2p calculul.*

**b)** Pentru $m = 1$, restul împărțirii lui $f$ la $g = X + 1$.

Teorema restului: restul împărțirii la $X - a$ este $f(a)$; aici $a = -1$.

$$f(-1) = (-1)^3 + 2(-1)^2 + (-1) + 4 = -1 + 2 - 1 + 4 = 4.$$

**Răspuns:** restul este $4$. *Barem: 3p calculul lui $f(-1)$, 2p concluzia.*

**c)** Rădăcinile lui $f$, știind că produsul a două dintre ele este 1.

Fie $x_1x_2 = 1$. Relațiile lui Viète: $x_1 + x_2 + x_3 = -2$, $x_1x_2x_3 = -4$.

Din $x_1x_2x_3 = -4$ și $x_1x_2 = 1$ rezultă $x_3 = -4$. Atunci $x_1 + x_2 = -2 - (-4) = 2$.

$x_1$, $x_2$ au suma 2 și produsul 1, deci sunt rădăcinile ecuației $t^2 - 2t + 1 = 0$, adică $(t - 1)^2 = 0$: $x_1 = x_2 = 1$.

**Verificare:** din a treia relație Viète, $m = x_1x_2 + x_1x_3 + x_2x_3 = 1 - 4 - 4 = -7$, iar $X^3 + 2X^2 - 7X + 4 = (X - 1)^2(X + 4)$ ✔.

**Răspuns:** rădăcinile sunt $1, 1, -4$. *Barem: 2p $x_3 = -4$, 3p $x_1 = x_2 = 1$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(-1, +\infty)\to\mathbb R$, $f(x) = \dfrac{x^2 + 3x + 1}{x + 1}$

**a)** Arătați că $f'(x) = \dfrac{x^2 + 2x + 2}{(x + 1)^2}$.

Regula câtului:

$$f'(x) = \frac{(2x + 3)(x + 1) - (x^2 + 3x + 1)\cdot 1}{(x + 1)^2} = \frac{2x^2 + 5x + 3 - x^2 - 3x - 1}{(x + 1)^2} = \frac{x^2 + 2x + 2}{(x + 1)^2}.$$

*Barem: 3p derivarea, 2p forma finală.*

**b)** Ecuația tangentei la grafic în punctul de abscisă $x = 0$.

$f(0) = \dfrac{1}{1} = 1$ și $f'(0) = \dfrac{2}{1} = 2$. Ecuația tangentei: $y - f(0) = f'(0)(x - 0)$, adică

$$y = 2x + 1.$$

**Răspuns:** $y = 2x + 1$. *Barem: 2p valorile $f(0)$, $f'(0)$, 3p ecuația tangentei.*

**c)** Demonstrați că $f$ este concavă.

Un mod comod de a deriva: $x^2 + 2x + 2 = (x + 1)^2 + 1$, deci $f'(x) = 1 + \dfrac{1}{(x + 1)^2} = 1 + (x+1)^{-2}$. Atunci

$$f''(x) = -2(x + 1)^{-3} = -\frac{2}{(x + 1)^3}.$$

Pe $(-1, +\infty)$ avem $x + 1 > 0$, deci $(x + 1)^3 > 0$ și $f''(x) < 0$. O funcție cu derivata a doua negativă pe un interval este concavă pe acel interval. $\blacksquare$

*Barem: 3p calculul lui $f''$, 2p semnul și concluzia.*

### 2. $f:\mathbb R\to\mathbb R$, $f(x) = 3x^2 + 4 + e^x$

**a)** Arătați că $\displaystyle\int_0^1\left(f(x) - 3x^2\right)dx = e + 3$.

$f(x) - 3x^2 = 4 + e^x$:

$$\int_0^1 (4 + e^x)\,dx = \left(4x + e^x\right)\Big|_0^1 = (4 + e) - (0 + 1) = e + 3.$$

Greșeală frecventă: uitarea termenului $e^0 = 1$ la limita inferioară. *Barem: 3p primitiva, 2p calculul.*

**b)** Arătați că $\displaystyle\int_0^2\frac{x}{f(x) - e^x}dx = \frac{\ln 2}{3}$.

$f(x) - e^x = 3x^2 + 4$, iar $(3x^2 + 4)' = 6x$, deci $x = \tfrac16(3x^2 + 4)'$:

$$\int_0^2\frac{x}{3x^2 + 4}dx = \frac16\ln(3x^2 + 4)\Big|_0^2 = \frac{\ln 16 - \ln 4}{6} = \frac{\ln 4}{6} = \frac{2\ln 2}{6} = \frac{\ln 2}{3}.$$

*Barem: 3p primitiva, 2p calculul.*

**c)** $G$ primitivă a lui $g(x) = f(x^2) - 3x^4$; știind $\displaystyle\int_0^1 G(x)\,dx = \frac{1 - e}{2}$, arătați că $G(1) = 2$.

Mai întâi simplificăm $g$: $f(x^2) = 3x^4 + 4 + e^{x^2}$, deci $g(x) = 4 + e^{x^2}$.

Nu cunoaștem explicit $G$ (nu există primitivă elementară a lui $e^{x^2}$), așa că integrăm **prin părți**, scriind $G(x) = x'\cdot G(x)$ și folosind $G' = g$:

$$\int_0^1 G(x)\,dx = xG(x)\Big|_0^1 - \int_0^1 x\,g(x)\,dx = G(1) - \int_0^1\left(4x + xe^{x^2}\right)dx.$$

Acum $x e^{x^2} = \tfrac12\left(e^{x^2}\right)'$, deci:

$$\int_0^1\left(4x + xe^{x^2}\right)dx = \left(2x^2 + \frac12 e^{x^2}\right)\Big|_0^1 = 2 + \frac e2 - \frac12 = \frac{e + 3}{2}.$$

Deci $\displaystyle\int_0^1 G(x)\,dx = G(1) - \frac{e + 3}{2}$. Din ipoteză:

$$G(1) - \frac{e + 3}{2} = \frac{1 - e}{2} \Rightarrow G(1) = \frac{1 - e + e + 3}{2} = 2. \ \blacksquare$$

*Barem: 3p integrarea prin părți, 2p calculul și concluzia.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $10$ |
| I.2 | abscisele $0$ și $4$ |
| I.3 | $x = 1$ |
| I.4 | 15 numere |
| I.5 | $OC = 3$ |
| I.6 | $AD = \sqrt3$ |
| II.1.c | $X = \begin{pmatrix}-11 & -4\\ 28 & 9\end{pmatrix}$ |
| II.2.b | restul $4$ |
| II.2.c | rădăcinile $1, 1, -4$ |
| III.1.b | $y = 2x + 1$ |
| III.2.b | $\tfrac{\ln 2}{3}$ |
| III.2.c | $G(1) = 2$ |

## Ce merită reținut din varianta 5

- **Ecuații matriceale**: dă factor comun corect, $aX - BX = (aI_2 - B)X$, și folosește inversa calculată anterior.
- **Rădăcini cu o condiție suplimentară**: combină condiția cu relațiile lui Viète pentru a afla întâi o rădăcină.
- **Concavitate**: semnul lui $f''$ pe domeniu; rescrierea lui $f'$ ca $1 + (x+1)^{-2}$ scurtează calculul.
- **Primitivă necunoscută explicit**: integrarea prin părți cu $x'$ transformă $\int G$ în $\int xg$, care se calculează.
