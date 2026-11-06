Rezolvarea completă a subiectului de **Bacalaureat 2022 la Matematică M_mate-info** dat la simularea națională (clasa a XII-a). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z_1 = 1 - 2i$, $z_2 = 2 + i$: arătați că $(z_1 + i)(z_2 - 1) = 2$

$z_1 + i = 1 - 2i + i = 1 - i$ și $z_2 - 1 = 2 + i - 1 = 1 + i$. Atunci

$$(z_1 + i)(z_2 - 1) = (1 - i)(1 + i) = 1 - i^2 = 1 - (-1) = 2.$$

*Barem: 2p înlocuirea și simplificarea parantezelor, 3p produsul.*

### 2. $f(x) = x^2 + 4x + m$: valorile lui $m$ pentru care $f(x) > 0$ pentru orice $x$

O funcție de gradul al doilea cu coeficientul dominant pozitiv ($a = 1 > 0$) este strict pozitivă pe tot $\mathbb R$ exact când nu are rădăcini reale, adică $\Delta < 0$.

$$\Delta = 4^2 - 4\cdot1\cdot m = 16 - 4m < 0 \iff m > 4.$$

**Răspuns:** $m \in (4, +\infty)$. Pentru $m = 4$, $f(x) = (x+2)^2$ se anulează în $x = -2$, deci $m = 4$ nu convine. *Barem: 3p condiția $\Delta < 0$, 2p intervalul.*

### 3. Ecuația $1 + 2\log_2\sqrt{x - 2} = \log_2 x$

**Condiții de existență:** $x - 2 > 0$ (pentru ca $\sqrt{x-2} > 0$ să aibă logaritm) și $x > 0$, deci $x > 2$.

Folosim $2\log_2\sqrt{x-2} = \log_2(x - 2)$ și $1 = \log_2 2$:

$$\log_2 2 + \log_2(x-2) = \log_2 x \iff \log_2 x - \log_2(x - 2) = 1 \iff \log_2\frac{x}{x-2} = 1 \iff \frac{x}{x-2} = 2.$$

Deci $x = 2x - 4 \Rightarrow x = 4$, care respectă $x > 2$. Verificare: $1 + 2\log_2\sqrt2 = 1 + 1 = 2 = \log_2 4$ ✔.

**Răspuns:** $x = 4$. *Barem: 3p ecuația $\frac{x}{x-2} = 2$, 2p soluția care convine.*

### 4. Probabilitatea ca un număr de două cifre să aibă exact doi multipli de două cifre

**Cazuri posibile:** $A = \{10, 11, \ldots, 99\}$ are 90 de elemente.

**Cazuri favorabile:** multiplii lui $n \in A$ aflați în $A$ sunt $n, 2n, 3n, \ldots$ (cât timp nu depășesc 99). Exact doi multipli înseamnă $2n \le 99$ și $3n > 99$, adică $33 < n \le 49{,}5$, deci $n \in \{34, 35, \ldots, 49\}$: $49 - 34 + 1 = 16$ numere.

$$p = \frac{16}{90} = \frac{8}{45}.$$

**Răspuns:** $p = \dfrac{8}{45}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. Punctul $N$ pentru care $ABMN$ este paralelogram, $A(-2,-2)$, $B(3,1)$, $M(2,4)$

Într-un paralelogram $ABMN$ diagonalele sunt $AM$ și $BN$, iar ele se înjumătățesc. Mijlocul lui $AM$: $P\left(\frac{-2+2}{2}, \frac{-2+4}{2}\right) = P(0, 1)$.

$P$ este și mijlocul lui $BN$, cu $N(x, y)$: $\frac{3 + x}{2} = 0 \Rightarrow x = -3$, $\frac{1 + y}{2} = 1 \Rightarrow y = 1$.

Verificare vectorială: $\overrightarrow{AB} = (5, 3)$ și $\overrightarrow{NM} = (2 - (-3), 4 - 1) = (5, 3)$ ✔.

**Răspuns:** $N(-3, 1)$. *Barem: 2p mijlocul lui $AM$, 3p coordonatele lui $N$.*

### 6. Dacă $\sin(A + B) + \cos C = 1$, triunghiul $ABC$ este dreptunghic

În orice triunghi $A + B = \pi - C$, deci $\sin(A + B) = \sin(\pi - C) = \sin C$. Relația devine $\sin C + \cos C = 1$.

Ridicăm la pătrat: $\sin^2 C + 2\sin C\cos C + \cos^2 C = 1 \Rightarrow 1 + \sin 2C = 1 \Rightarrow \sin 2C = 0$.

Cum $C \in (0, \pi)$, avem $2C \in (0, 2\pi)$, iar singura valoare cu $\sin 2C = 0$ este $2C = \pi$, adică $C = \dfrac{\pi}{2}$. (Verificare: $\sin\frac\pi2 + \cos\frac\pi2 = 1 + 0 = 1$ ✔.) Deci triunghiul este dreptunghic în $C$.

*Barem: 2p $\sin C + \cos C = 1$, 3p obținerea lui $C = \frac\pi2$.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}1 & 3 & a\\ 2 & 1 & -1\\ a & 3 & 1\end{pmatrix}$ și sistemul $\begin{cases}x + 3y + az = 2\\ 2x + y - z = -1\\ ax + 3y + z = 1\end{cases}$

#### a) $\det(A(1)) = 0$

$$\det(A(1)) = \begin{vmatrix}1 & 3 & 1\\ 2 & 1 & -1\\ 1 & 3 & 1\end{vmatrix} = 1 + 6 + (-3) - 1 - (-3) - 6 = 0.$$

Se vede și direct: linia 1 și linia 3 sunt egale, deci determinantul este 0. *Barem: 3p dezvoltarea, 2p rezultatul.*

#### b) $B(a)\cdot B(a)\cdot B(a) = a^3 B(1)$, unde $B(a) = A(a) - A(0)$

$A(0) = \begin{pmatrix}1 & 3 & 0\\ 2 & 1 & -1\\ 0 & 3 & 1\end{pmatrix}$, deci

$$B(a) = \begin{pmatrix}0 & 0 & a\\ 0 & 0 & 0\\ a & 0 & 0\end{pmatrix}, \quad B(a)\cdot B(a) = \begin{pmatrix}a^2 & 0 & 0\\ 0 & 0 & 0\\ 0 & 0 & a^2\end{pmatrix}.$$

$$B(a)\cdot B(a)\cdot B(a) = \begin{pmatrix}a^2 & 0 & 0\\ 0 & 0 & 0\\ 0 & 0 & a^2\end{pmatrix}\begin{pmatrix}0 & 0 & a\\ 0 & 0 & 0\\ a & 0 & 0\end{pmatrix} = \begin{pmatrix}0 & 0 & a^3\\ 0 & 0 & 0\\ a^3 & 0 & 0\end{pmatrix} = a^3\begin{pmatrix}0 & 0 & 1\\ 0 & 0 & 0\\ 1 & 0 & 0\end{pmatrix} = a^3 B(1).$$

*Barem: 2p $B(a)$ și $B(a)\cdot B(a)$, 3p finalizarea.*

#### c) Dacă sistemul are o infinitate de soluții, atunci $x_0y_0 + y_0z_0 + z_0x_0 \le 0$

**Pas 1 — determinantul.** Cu Sarrus:

$$\det(A(a)) = 1 + 6a - 3a - a^2 + 3 - 6 = -a^2 + 3a - 2 = -(a - 1)(a - 2).$$

Un sistem cu o infinitate de soluții nu poate fi de tip Cramer, deci $\det(A(a)) = 0$, adică $a \in \{1, 2\}$.

**Pas 2 — $a = 1$.** Prima și a treia ecuație au aceiași coeficienți $x + 3y + z$, dar termeni liberi diferiți ($2$ și $1$): sistemul este incompatibil, deci $a = 1$ nu convine.

**Pas 3 — $a = 2$.** Sistemul: $x + 3y + 2z = 2$, $2x + y - z = -1$, $2x + 3y + z = 1$. Scăzând a doua ecuație din a treia: $2y + 2z = 2 \Rightarrow y = 1 - z$. Din a doua: $2x = -1 - y + z = -1 - 1 + z + z = 2z - 2 \Rightarrow x = z - 1$. Prima ecuație se verifică: $(z - 1) + 3(1 - z) + 2z = 2$ ✔. Notând $z = \alpha \in \mathbb R$, soluțiile sunt

$$(x_0, y_0, z_0) = (\alpha - 1,\ 1 - \alpha,\ \alpha).$$

**Pas 4 — inegalitatea.**

$$x_0y_0 + y_0z_0 + z_0x_0 = -(\alpha - 1)^2 + \alpha(1 - \alpha) + \alpha(\alpha - 1) = -(\alpha - 1)^2 \le 0.$$

(Ultimii doi termeni sunt opuși.) Deci inegalitatea are loc pentru orice soluție.

*Barem: 2p determinantul și găsirea lui $a = 2$ (cu eliminarea lui $a = 1$), 3p soluția generală și inegalitatea.*

### 2. Legea $z_1 * z_2 = \dfrac{z_1 + z_2}{4\cdot|z_1z_2| + 1}$ pe $\mathbb C$

Numitorul este mereu $\ge 1$, deci legea e bine definită.

#### a) $(-1) * 2 = \dfrac19$

$$(-1) * 2 = \frac{-1 + 2}{4\cdot|-2| + 1} = \frac{1}{8 + 1} = \frac19.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $e = 0$ este element neutru

Pentru orice $z \in \mathbb C$: $z * 0 = \dfrac{z + 0}{4\cdot|z\cdot0| + 1} = \dfrac{z}{1} = z$ și analog $0 * z = \dfrac{0 + z}{4\cdot 0 + 1} = z$. Deci $0$ este element neutru.

*Barem: 2p $z * 0 = z$, 3p $0 * z = z$ și concluzia.*

#### c) Există cel puțin trei numere complexe distincte și nenule cu $|z * z| = |z|$

$z * z = \dfrac{2z}{4|z^2| + 1} = \dfrac{2z}{4|z|^2 + 1}$, deci $|z * z| = \dfrac{2|z|}{4|z|^2 + 1}$.

Egalitatea $\dfrac{2|z|}{4|z|^2 + 1} = |z|$, cu $z \ne 0$ (împărțim cu $|z| > 0$), devine $4|z|^2 + 1 = 2 \Rightarrow |z|^2 = \dfrac14 \Rightarrow |z| = \dfrac12$.

Orice număr complex de modul $\dfrac12$ verifică egalitatea — de exemplu $\dfrac12$, $-\dfrac12$, $\dfrac{i}{2}$, trei numere distincte și nenule. (De fapt sunt o infinitate: tot cercul de rază $\frac12$.)

*Barem: 2p expresia lui $z * z$, 3p condiția $|z| = \frac12$ și exemplele.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \dfrac{\sqrt{x^4 + 16}}{x}$

#### a) $f'(x) = \dfrac{(x^2 - 4)(x^2 + 4)}{x^2\sqrt{x^4 + 16}}$

Derivata radicalului: $\left(\sqrt{x^4 + 16}\right)' = \dfrac{4x^3}{2\sqrt{x^4+16}} = \dfrac{2x^3}{\sqrt{x^4+16}}$. Cu regula câtului:

$$f'(x) = \frac{\dfrac{2x^3}{\sqrt{x^4+16}}\cdot x - \sqrt{x^4+16}}{x^2} = \frac{2x^4 - (x^4 + 16)}{x^2\sqrt{x^4+16}} = \frac{x^4 - 16}{x^2\sqrt{x^4+16}} = \frac{(x^2-4)(x^2+4)}{x^2\sqrt{x^4+16}}.$$

(Am amplificat numărătorul cu $\sqrt{x^4+16}$.) *Barem: 3p derivarea, 2p forma finală.*

#### b) Asimptota oblică spre $+\infty$

$$m = \lim_{x\to+\infty}\frac{f(x)}{x} = \lim_{x\to+\infty}\frac{\sqrt{x^4+16}}{x^2} = \lim_{x\to+\infty}\sqrt{1 + \frac{16}{x^4}} = 1.$$

$$n = \lim_{x\to+\infty}\big(f(x) - x\big) = \lim_{x\to+\infty}\frac{\sqrt{x^4+16} - x^2}{x} = \lim_{x\to+\infty}\frac{16}{x\left(\sqrt{x^4+16} + x^2\right)} = 0$$

(am amplificat cu conjugata $\sqrt{x^4+16} + x^2$).

**Răspuns:** asimptota oblică spre $+\infty$ este $y = x$. *Barem: 2p panta, 3p ordonata la origine și ecuația.*

#### c) $m$ pentru care $f(x) + f\left(\dfrac4x\right) = m$ are exact două soluții

**Observație cheie:** $f\left(\dfrac4x\right) = \dfrac{\sqrt{\frac{256}{x^4} + 16}}{\frac4x} = \dfrac{x}{4}\cdot\dfrac{4\sqrt{16 + x^4}}{x^2} = \dfrac{\sqrt{x^4+16}}{x} = f(x)$.

Deci ecuația este $g(x) = m$, cu $g(x) = 2f(x)$.

**Monotonia:** din a), semnul lui $f'$ este semnul lui $x^2 - 4$: $f' < 0$ pe $(0, 2)$, $f' > 0$ pe $(2, +\infty)$. Deci $g$ este strict descrescătoare pe $(0, 2]$ și strict crescătoare pe $[2, +\infty)$, cu minimul $g(2) = 2\cdot\dfrac{\sqrt{32}}{2} = 4\sqrt2$.

**Limitele:** $\lim\limits_{x\to0^+} g(x) = +\infty$ (numărător $\to 4$, numitor $\to 0^+$) și $\lim\limits_{x\to+\infty} g(x) = +\infty$.

| $x$ | $0$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $g(x)$ | $+\infty$ | ↘ | $4\sqrt2$ | ↗ | $+\infty$ |

$g$ fiind continuă, pentru $m > 4\sqrt2$ ecuația are exact o soluție pe fiecare ramură (două în total), pentru $m = 4\sqrt2$ doar $x = 2$, iar pentru $m < 4\sqrt2$ niciuna.

**Răspuns:** $m \in \left(4\sqrt2, +\infty\right)$. *Barem: 2p semnul derivatei, 3p reducerea la $2f(x) = m$ și concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{x^2 + 1}{e^x}$

#### a) $\displaystyle\int_0^3 e^x f(x)\,dx = 12$

$e^x f(x) = x^2 + 1$, deci

$$\int_0^3 (x^2 + 1)\,dx = \left(\frac{x^3}{3} + x\right)\Big|_0^3 = 9 + 3 = 12.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) Orice primitivă $G$ a lui $g(x) = \dfrac{1}{f(x)}$ este convexă

$g(x) = \dfrac{e^x}{x^2 + 1}$. Dacă $G' = g$, atunci $G'' = g'$:

$$g'(x) = \frac{e^x(x^2 + 1) - e^x\cdot 2x}{(x^2+1)^2} = \frac{e^x(x^2 - 2x + 1)}{(x^2+1)^2} = \frac{e^x(x-1)^2}{(x^2+1)^2} \ge 0$$

pentru orice $x \in \mathbb R$. Deci $G'' \ge 0$, adică $G$ este convexă (orice primitivă, pentru că toate au aceeași derivată a doua).

*Barem: 2p $G'' = g'$, 3p calculul și semnul.*

#### c) $a$ real cu $\displaystyle\int_0^1\frac{x^3}{\sqrt{e^x f(x)}}\,dx = \frac{a - \sqrt2}{3}$

$\sqrt{e^x f(x)} = \sqrt{x^2 + 1}$, deci calculăm $I = \displaystyle\int_0^1 \frac{x^3}{\sqrt{x^2+1}}\,dx$.

Scriem $x^3 = x(x^2 + 1) - x$:

$$I = \int_0^1 x\sqrt{x^2+1}\,dx - \int_0^1\frac{x}{\sqrt{x^2+1}}\,dx.$$

Cu $(x^2 + 1)' = 2x$: o primitivă a lui $x\sqrt{x^2+1}$ este $\dfrac13(x^2+1)\sqrt{x^2+1}$, iar a lui $\dfrac{x}{\sqrt{x^2+1}}$ este $\sqrt{x^2+1}$. Deci

$$I = \left(\frac{(x^2+1)\sqrt{x^2+1}}{3} - \sqrt{x^2+1}\right)\Big|_0^1 = \left(\frac{2\sqrt2}{3} - \sqrt2\right) - \left(\frac13 - 1\right) = -\frac{\sqrt2}{3} + \frac23 = \frac{2 - \sqrt2}{3}.$$

Egalând cu $\dfrac{a - \sqrt2}{3}$ obținem $a = 2$.

**Răspuns:** $a = 2$. *Barem: 3p calculul integralei, 2p valoarea lui $a$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m \in (4, +\infty)$ |
| I.3 | $x = 4$ |
| I.4 | $p = \tfrac{8}{45}$ |
| I.5 | $N(-3, 1)$ |
| II.1.c | $a = 2$, soluțiile $(\alpha-1, 1-\alpha, \alpha)$ |
| II.2.c | orice $z$ cu $\lvert z\rvert = \tfrac12$, ex. $\tfrac12, -\tfrac12, \tfrac i2$ |
| III.1.b | $y = x$ |
| III.1.c | $m \in (4\sqrt2, +\infty)$ |
| III.2.c | $a = 2$ |

## Ce merită reținut din simulare

- **Sisteme cu o infinitate de soluții**: determinantul nul e doar condiție necesară — verifică fiecare valoare a parametrului (una poate da sistem incompatibil).
- **Legi cu modul pe $\mathbb C$**: lucrează cu $|z|$ ca necunoscută reală.
- **Simetria $f(4/x) = f(x)$** transformă ecuația într-una cu o singură funcție; numărul de soluții se citește din tabelul de variație.
- **Integrale cu $\sqrt{x^2+1}$**: scrie numărătorul ca $x(x^2+1) - x$ și folosește $(x^2+1)' = 2x$.
