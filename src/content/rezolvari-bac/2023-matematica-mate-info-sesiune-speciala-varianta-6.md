Rezolvarea completă a subiectului de **Bacalaureat 2023 la Matematică M_mate-info**, sesiunea specială, **varianta 6**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $(2 - i)^2 + i(4 + i) = 2$

Dezvoltăm fiecare termen, folosind $i^2 = -1$:

$$(2 - i)^2 = 4 - 4i + i^2 = 4 - 4i - 1 = 3 - 4i, \qquad i(4 + i) = 4i + i^2 = 4i - 1.$$

Suma: $(3 - 4i) + (4i - 1) = 2$. Părțile imaginare se anulează. *Barem: 3p dezvoltarea, 2p finalizarea.*

### 2. $f(x) = x + 3$: determinați $m$ cu $(f \circ f)(m) = 2m$

$(f\circ f)(m) = f(f(m)) = f(m + 3) = m + 3 + 3 = m + 6$. Ecuația:

$$m + 6 = 2m \iff m = 6.$$

**Răspuns:** $m = 6$. *Barem: 3p calculul compunerii, 2p rezolvarea.*

### 3. Ecuația $5^{x+1} - 3\cdot 5^x = 10$

Scriem $5^{x+1} = 5\cdot 5^x$ și dăm factor comun $5^x$:

$$5\cdot 5^x - 3\cdot 5^x = 10 \iff 2\cdot 5^x = 10 \iff 5^x = 5 \iff x = 1.$$

Verificare: $25 - 15 = 10$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p obținerea $5^x = 5$, 2p soluția.*

### 4. Probabilitatea ca un număr de două cifre să aibă ambele cifre $\ge 7$

**Cazuri posibile:** numerele de două cifre sunt $10, \dots, 99$: $90$ de numere.

**Cazuri favorabile:** cifra zecilor și cifra unităților pot fi fiecare $7$, $8$ sau $9$ (cifra zecilor nu poate fi $0$, dar oricum nu e în listă). Regula produsului: $3\cdot 3 = 9$ numere ($77, 78, 79, 87, 88, 89, 97, 98, 99$).

$$p = \frac{9}{90} = \frac{1}{10}.$$

**Răspuns:** $p = \dfrac{1}{10}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(0,4)$, $B(3,-2)$, $C(2a, a)$, $a \ne 0$: $AB \perp OC$

Pantele:

$$m_{AB} = \frac{-2 - 4}{3 - 0} = -2, \qquad m_{OC} = \frac{a - 0}{2a - 0} = \frac12 \quad (a \ne 0).$$

Două drepte (neverticale) sunt perpendiculare dacă produsul pantelor este $-1$: $m_{AB}\cdot m_{OC} = -2\cdot\dfrac12 = -1$, oricare ar fi $a$ nenul. (Condiția $a \ne 0$ asigură $C \ne O$, deci dreapta $OC$ există.) *Barem: 2p $m_{AB}$, 3p $m_{OC}$ și concluzia.*

### 6. $E(x) = \sin x + 4\cos\dfrac{x}{3}\sin\dfrac{2x}{3}$: arătați că $E\left(\dfrac{\pi}{2}\right) = 4$

Pentru $x = \dfrac{\pi}{2}$: $\dfrac{x}{3} = \dfrac{\pi}{6}$ și $\dfrac{2x}{3} = \dfrac{\pi}{3}$. Valori: $\sin\dfrac{\pi}{2} = 1$, $\cos\dfrac{\pi}{6} = \dfrac{\sqrt3}{2}$, $\sin\dfrac{\pi}{3} = \dfrac{\sqrt3}{2}$.

$$E\left(\frac{\pi}{2}\right) = 1 + 4\cdot\frac{\sqrt3}{2}\cdot\frac{\sqrt3}{2} = 1 + 4\cdot\frac34 = 1 + 3 = 4.$$

*Barem: 3p valorile trigonometrice, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}a & -1 & 2a\\ 1 & -2 & a\\ 1 & 1 & 1-a\end{pmatrix}$ și sistemul $\begin{cases}ax - y + 2az = 0\\ x - 2y + az = 0\\ x + y + (1-a)z = 0\end{cases}$

#### a) $\det(A(0)) = 1$

$$\det(A(0)) = \begin{vmatrix}0 & -1 & 0\\ 1 & -2 & 0\\ 1 & 1 & 1\end{vmatrix}.$$

Dezvoltăm după coloana a treia (are un singur element nenul, $1$, pe poziția $(3,3)$):

$$\det(A(0)) = 1\cdot\begin{vmatrix}0 & -1\\ 1 & -2\end{vmatrix} = 0\cdot(-2) - (-1)\cdot 1 = 1.$$

*Barem: 2p scrierea determinantului, 3p calculul.*

#### b) Mulțimea valorilor lui $a$ pentru care sistemul are soluție unică

Sistemul este omogen, deci are mereu soluția nulă; ea este unică exact când $\det(A(a)) \ne 0$.

Cu Sarrus:

- termeni cu $+$: $a(-2)(1-a) + (-1)\cdot a\cdot 1 + 2a\cdot 1\cdot 1 = -2a + 2a^2 - a + 2a = 2a^2 - a$;
- termeni cu $-$: $2a(-2)\cdot 1 + a\cdot a\cdot 1 + (-1)\cdot 1\cdot(1-a) = -4a + a^2 - 1 + a = a^2 - 3a - 1$.

$$\det(A(a)) = 2a^2 - a - a^2 + 3a + 1 = a^2 + 2a + 1 = (a + 1)^2.$$

(Pentru $a = 0$: $1$ ✔.) $\det(A(a)) = 0 \iff a = -1$.

**Răspuns:** $a \in \mathbb R \setminus \{-1\}$. *Barem: 2p determinantul, 3p mulțimea valorilor.*

#### c) Pentru $a = -1$, soluțiile cu $x_0^2 + y_0^2 + z_0^2 = 3$

Pentru $a = -1$ sistemul este

$$\begin{cases}-x - y - 2z = 0\\ x - 2y - z = 0\\ x + y + 2z = 0\end{cases}$$

Prima și a treia ecuație sunt opuse, deci rămân două ecuații independente. Scădem a treia ecuație din a doua, $-3y - 3z = 0 \Rightarrow y = -z$. Înlocuind în a treia: $x - z + 2z = 0 \Rightarrow x = -z$.

Notând $z = \alpha$, soluțiile sunt $(x_0, y_0, z_0) = (-\alpha, -\alpha, \alpha)$, $\alpha \in \mathbb R$.

Condiția: $\alpha^2 + \alpha^2 + \alpha^2 = 3\alpha^2 = 3 \Rightarrow \alpha^2 = 1 \Rightarrow \alpha \in \{-1, 1\}$.

**Răspuns:** $(1, 1, -1)$ și $(-1, -1, 1)$. *Barem: 2p forma soluțiilor, 3p condiția și soluțiile.*

### 2. Legea $x * y = x^2y^2 - 4(x + y)^2 + 1$

#### a) $0 * 1 = -3$

$$0 * 1 = 0^2\cdot 1^2 - 4(0 + 1)^2 + 1 = 0 - 4 + 1 = -3.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x * (-1) \le 2x$ pentru orice $x$ real

$$x * (-1) = x^2\cdot 1 - 4(x - 1)^2 + 1 = x^2 - 4x^2 + 8x - 4 + 1 = -3x^2 + 8x - 3.$$

Scădem $2x$: $x*(-1) - 2x = -3x^2 + 6x - 3 = -3(x^2 - 2x + 1) = -3(x - 1)^2 \le 0$.

Deci $x * (-1) = 2x - 3(x-1)^2 \le 2x$ pentru orice $x$ real, cu egalitate pentru $x = 1$. *Barem: 2p calculul lui $x * (-1)$, 3p pătratul perfect și concluzia.*

#### c) Perechile $(m, n)$ de numere naturale nenule, $m \le n$, cu $m * n = 1$

$$m^2n^2 - 4(m + n)^2 + 1 = 1 \iff (mn)^2 = \big(2(m + n)\big)^2.$$

Cum $m, n \ge 1$, ambele baze $mn$ și $2(m + n)$ sunt pozitive, deci $mn = 2(m + n)$, adică $mn - 2m - 2n = 0$.

Adunăm $4$ ca să factorizăm: $mn - 2m - 2n + 4 = 4 \iff (m - 2)(n - 2) = 4$.

Cu $m \le n$ și $m - 2 \ge -1$, $n - 2 \ge -1$, posibilitățile pentru $(m - 2, n - 2)$ sunt:

- $(1, 4) \Rightarrow (m, n) = (3, 6)$;
- $(2, 2) \Rightarrow (m, n) = (4, 4)$;
- variantele negative $(-1, -4)$, $(-2, -2)$ cer $n - 2 \le -2$, deci $n \le 0$ — respinse.

Verificare: $3 * 6 = 324 - 4\cdot 81 + 1 = 1$ ✔; $4 * 4 = 256 - 256 + 1 = 1$ ✔.

**Răspuns:** $(m, n) \in \{(3, 6),\ (4, 4)\}$. *Barem: 2p relația $mn - 2m - 2n = 0$, 3p factorizarea și perechile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{x}{5} - \ln(x^2 + x + 5)$

#### a) $f'(x) = \dfrac{x^2 - 9x}{5(x^2 + x + 5)}$

$x^2 + x + 5 > 0$ ($\Delta = 1 - 20 < 0$), deci $f$ este definită și derivabilă pe $\mathbb R$. Cu $(\ln u)' = \dfrac{u'}{u}$:

$$f'(x) = \frac15 - \frac{2x + 1}{x^2 + x + 5} = \frac{x^2 + x + 5 - 5(2x + 1)}{5(x^2 + x + 5)} = \frac{x^2 + x + 5 - 10x - 5}{5(x^2 + x + 5)} = \frac{x^2 - 9x}{5(x^2 + x + 5)}.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Abscisele punctelor în care tangenta este paralelă cu $Ox$

Tangenta în punctul de abscisă $a$ este paralelă cu $Ox$ $\iff f'(a) = 0 \iff a^2 - 9a = 0 \iff a(a - 9) = 0$.

**Răspuns:** $a = 0$ și $a = 9$. *Barem: 3p condiția $f'(a) = 0$, 2p valorile.*

#### c) Ecuația $f(x) = 0$ are soluție unică

Semnul lui $f'$ este semnul lui $x(x - 9)$ (numitorul e pozitiv):

| $x$ | $-\infty$ | | $0$ | | $9$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | | ↗ | $-\ln 5$ | ↘ | $f(9)$ | ↗ | $+\infty$ |

**Pe $(-\infty, 9]$:** $f$ crește până în $0$ și apoi descrește, deci $f(x) \le f(0) = -\ln 5 < 0$. Pe acest interval nu există soluții.

**Pe $(9, +\infty)$:** $f$ este strict crescătoare și continuă. $f(9) < f(0) < 0$, iar

$$\lim_{x\to+\infty} f(x) = \lim_{x\to+\infty}\left(\frac{x}{5} - \ln(x^2 + x + 5)\right) = +\infty,$$

pentru că funcția liniară crește mai repede decât logaritmul (de exemplu, $\dfrac{\ln(x^2+x+5)}{x} \to 0$, deci $f(x) = x\left(\frac15 - \frac{\ln(x^2+x+5)}{x}\right) \to +\infty$).

Din proprietatea lui Darboux, $f$ ia valoarea $0$ pe $(9, +\infty)$, iar strict monotonia face ca această valoare să fie atinsă o singură dată.

Deci ecuația $f(x) = 0$ are soluție unică (aproximativ $x \approx 36$). *Barem: 2p monotonia și $f(x) \le f(0)$ pe $(-\infty, 9]$, 3p strict monotonia pe $(9,+\infty)$, $f(0) < 0$, limita și concluzia.*

### 2. $f:(-2, +\infty) \to \mathbb R$, $f(x) = \dfrac{4x}{x^3 + 8}$

#### a) $\displaystyle\int_0^2 (x^3 + 8)f(x)\,dx = 8$

$(x^3 + 8)f(x) = 4x$ (pe $(-2,+\infty)$, $x^3 + 8 > 0$), deci

$$\int_0^2 4x\,dx = 2x^2\Big|_0^2 = 8 - 0 = 8.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^4 x f(x)\,dx = 4\ln 2$

$x f(x) = \dfrac{4x^2}{x^3 + 8} = \dfrac43\cdot\dfrac{3x^2}{x^3 + 8} = \dfrac43\cdot\dfrac{(x^3 + 8)'}{x^3 + 8}$, cu primitiva $\dfrac43\ln(x^3 + 8)$:

$$\int_1^4 x f(x)\,dx = \frac43\ln(x^3 + 8)\Big|_1^4 = \frac43(\ln 72 - \ln 9) = \frac43\ln 8 = \frac43\cdot 3\ln 2 = 4\ln 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $\displaystyle\lim_{x\to0}\left(\frac{1}{x^3}\int_0^x t f(t)\,dt\right)$

Pentru $x \to 0$: $\int_0^x t f(t)\,dt \to 0$ și $x^3 \to 0$ — nedeterminare $\frac00$. Funcția $t \mapsto t f(t)$ este continuă, deci derivata integralei cu limita superioară variabilă este $x f(x)$. Aplicăm l'Hôpital:

$$\lim_{x\to0}\frac{x f(x)}{3x^2} = \lim_{x\to0}\frac{f(x)}{3x} = \lim_{x\to0}\frac{4x}{3x(x^3 + 8)} = \lim_{x\to0}\frac{4}{3(x^3 + 8)} = \frac{4}{24} = \frac16.$$

**Răspuns:** $\dfrac16$. *Barem: 3p aplicarea l'Hôpital, 2p calculul limitei.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = 6$ |
| I.3 | $x = 1$ |
| I.4 | $p = \frac{1}{10}$ |
| I.5 | $m_{AB}\cdot m_{OC} = -1$ |
| I.6 | $E(\frac{\pi}{2}) = 4$ |
| II.1.b | $a \in \mathbb R \setminus \{-1\}$ |
| II.1.c | $(1, 1, -1)$ și $(-1, -1, 1)$ |
| II.2.c | $(3, 6)$ și $(4, 4)$ |
| III.1.b | $0$ și $9$ |
| III.2.c | $\frac16$ |

## Ce merită reținut din varianta 6

- **Sisteme omogene**: au mereu soluția nulă; soluția este unică $\iff \det \ne 0$, altfel exprimi soluțiile cu un parametru.
- **Ecuații diofantice $mn = k(m+n)$**: adaugă $k^2$ ca să obții $(m-k)(n-k) = k^2$, apoi ia divizorii.
- **Soluție unică pentru $f(x) = 0$**: arată că pe o parte $f$ rămâne negativă (maxim negativ), iar pe cealaltă e strict monotonă și își schimbă semnul.
- **Forma $\frac{u'}{u}$**: ajustează constanta ($\frac43\cdot\frac{3x^2}{x^3+8}$) ca să apară derivata numitorului.
