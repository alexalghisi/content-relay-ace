Rezolvarea completă a subiectului de **Bacalaureat 2011 la Matematică M1** (filiera teoretică, specializarea matematică-informatică), sesiunea specială, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas și răspunsul final. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu; fiecare cerință valorează 5 puncte.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — se acceptă orice soluție corectă.

> **Notă:** pentru această variantă nu am avut la dispoziție baremul oficial; punctajele indicate mai jos sunt orientative, după structura obișnuită a baremelor (câte 5 puncte pe cerință).

## Subiectul I (30 de puncte)

### 1. Modulul numărului $z = (3 + 4i)(5 - 12i)$

Modulul produsului este produsul modulelor:

$$|z| = |3 + 4i|\cdot|5 - 12i| = \sqrt{9 + 16}\cdot\sqrt{25 + 144} = 5\cdot 13 = 65.$$

**Răspuns:** $|z| = 65$. *Orientativ: 3p formula, 2p calculul.*

### 2. $V(2, 3)$ este vârful parabolei asociate lui $f(x) = x^2 + ax + b$. Calculați $f(3)$

$x_V = -\dfrac a2 = 2 \Rightarrow a = -4$. Apoi $f(2) = 4 - 8 + b = 3 \Rightarrow b = 7$.

$$f(3) = 9 - 12 + 7 = 4.$$

(Sau: $f(x) = (x - 2)^2 + 3$, deci $f(3) = 1 + 3 = 4$.) **Răspuns:** $f(3) = 4$. *Orientativ: 2p $a$, 2p $b$, 1p $f(3)$.*

### 3. Ecuația $\left|\sqrt x - 1\right| = 2$

Condiție: $x \ge 0$. Avem $\sqrt x - 1 = 2$ sau $\sqrt x - 1 = -2$.

- $\sqrt x = 3 \Rightarrow x = 9$;
- $\sqrt x = -1$ — imposibil.

**Răspuns:** $x = 9$. *Orientativ: 3p explicitarea modulului, 2p soluția.*

### 4. Numerele naturale $n \ge 2$ cu $C_n^2 \le 4\cdot A_n^1$

$$\frac{n(n-1)}{2} \le 4n \iff n - 1 \le 8 \iff n \le 9$$

(am împărțit la $n > 0$).

**Răspuns:** $n \in \{2, 3, 4, 5, 6, 7, 8, 9\}$. *Orientativ: 3p inecuația, 2p soluțiile.*

### 5. $G(1, 0)$ centrul de greutate al triunghiului $ABC$, $A(2, 5)$, $B(-1, -3)$. Coordonatele lui $C$

$x_G = \dfrac{x_A + x_B + x_C}{3}$, deci $x_C = 3x_G - x_A - x_B = 3 - 2 + 1 = 2$; analog $y_C = 0 - 5 + 3 = -2$.

**Răspuns:** $C(2, -2)$. *Orientativ: 2p formula, 3p coordonatele.*

### 6. Raza cercului înscris în triunghiul $ABC$ cu $AB = AC = 5$, $BC = 8$

Triunghiul este isoscel; înălțimea din $A$ cade în mijlocul $M$ al lui $BC$: $AM = \sqrt{25 - 16} = 3$.

$$\mathcal A = \frac{BC\cdot AM}{2} = \frac{8\cdot 3}{2} = 12, \qquad p = \frac{5 + 5 + 8}{2} = 9, \qquad r = \frac{\mathcal A}{p} = \frac{12}{9} = \frac43.$$

**Răspuns:** $r = \dfrac43$. *Orientativ: 3p aria și semiperimetrul, 2p raza.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 1 & 2 & -1\\ a & 1 & 1\\ 3 & 0 & 2\end{pmatrix}$, $a \in \mathbb Z$

#### a) $\det A$

Regula lui Sarrus:

$$\det A = 1\cdot 1\cdot 2 + 2\cdot 1\cdot 3 + (-1)\cdot a\cdot 0 - (-1)\cdot 1\cdot 3 - 1\cdot 1\cdot 0 - 2\cdot a\cdot 2 = 2 + 6 + 0 + 3 - 0 - 4a = 11 - 4a.$$

**Răspuns:** $\det A = 11 - 4a$. *Orientativ: 3p, 2p.*

#### b) $\operatorname{rang} A = 3$ pentru orice $a \in \mathbb Z$

$\det A = 0 \iff a = \frac{11}{4} \notin \mathbb Z$. Deci pentru orice $a$ întreg, $\det A \ne 0$ și $\operatorname{rang} A = 3$. $\blacksquare$ *Orientativ: 3p, 2p.*

#### c) Valorile întregi ale lui $a$ pentru care $A^{-1}$ are toate elementele întregi

**Necesitate:** dacă $A^{-1}$ are elemente întregi, atunci $\det A^{-1} \in \mathbb Z$; cum și $\det A \in \mathbb Z$ și $\det A\cdot\det A^{-1} = \det I_3 = 1$, rezultă $\det A \in \{-1, 1\}$.

- $11 - 4a = 1 \Rightarrow a = \frac52 \notin \mathbb Z$;
- $11 - 4a = -1 \Rightarrow a = 3$.

**Suficiență:** pentru $a = 3$, $\det A = -1$ și $A^{-1} = \dfrac{1}{\det A}A^* = -A^*$, unde adjuncta $A^*$ are elemente întregi (complemenți algebrici ai unei matrice întregi). Deci $A^{-1}$ are elemente întregi.

**Răspuns:** $a = 3$. *Orientativ: 3p condiția $\det A = \pm 1$, 2p valoarea.*

### 2. $f = X^4 + aX^3 + bX^2 + cX + 36$, cu rădăcinile $x_1, x_2, x_3, x_4 \in \mathbb C$

#### a) $a + b + c$ când restul împărțirii lui $f$ la $X - 1$ este 40

Restul este $f(1) = 1 + a + b + c + 36 = 40$, deci $a + b + c = 3$.

**Răspuns:** $a + b + c = 3$. *Orientativ: 2p teorema restului, 3p calculul.*

#### b) $c$ astfel încât $\dfrac{1}{x_1} + \dfrac{1}{x_2} + \dfrac{1}{x_3} + \dfrac{1}{x_4} = \dfrac13$

Viète: $s_3 = \sum x_ix_jx_k = -c$, $s_4 = x_1x_2x_3x_4 = 36$ (deci toate rădăcinile sunt nenule).

$$\sum\frac{1}{x_i} = \frac{s_3}{s_4} = \frac{-c}{36} = \frac13 \iff c = -12.$$

**Răspuns:** $c = -12$. *Orientativ: 2p relațiile lui Viète, 3p valoarea.*

#### c) Pentru $a = 6$, $b = 18$, polinomul nu are toate rădăcinile reale

Viète: $s_1 = -a = -6$, $s_2 = b = 18$. Atunci

$$x_1^2 + x_2^2 + x_3^2 + x_4^2 = s_1^2 - 2s_2 = 36 - 36 = 0.$$

Dacă toate rădăcinile ar fi reale, suma pătratelor lor ar fi $0$ doar pentru $x_1 = x_2 = x_3 = x_4 = 0$, dar atunci produsul lor ar fi $0 \ne 36$. Contradicție, deci $f$ nu are toate rădăcinile reale. $\blacksquare$ *Orientativ: 3p suma pătratelor, 2p concluzia.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = x^4 - 4\ln x$

#### a) $f$ este strict descrescătoare pe $(0, 1]$

$$f'(x) = 4x^3 - \frac4x = \frac{4(x^4 - 1)}{x}.$$

Pentru $x \in (0, 1)$: $x^4 - 1 < 0$ și $x > 0$, deci $f'(x) < 0$ (cu $f'(1) = 0$ doar în capăt). Așadar $f$ este strict descrescătoare pe $(0, 1]$. *Orientativ: 3p derivata, 2p semnul.*

#### b) Asimptotele verticale

$$\lim_{x\searrow 0} f(x) = 0 - 4\cdot(-\infty) = +\infty,$$

deci dreapta $x = 0$ este asimptotă verticală. $f$ fiind continuă pe $(0, +\infty)$, nu există alte asimptote verticale.

**Răspuns:** $x = 0$. *Orientativ: 3p limita, 2p concluzia.*

#### c) Pentru orice $n \in \mathbb N^*$ există un unic $x_n \in (0, 1]$ cu $f(x_n) = n$

$f$ este continuă și strict descrescătoare pe $(0, 1]$, cu $\lim\limits_{x\searrow 0} f(x) = +\infty$ și $f(1) = 1$. Deci $f$ este o bijecție de la $(0, 1]$ la $[1, +\infty)$.

Pentru $n \ge 1$, $n \in [1, +\infty)$, deci există exact un $x_n \in (0, 1]$ cu $f(x_n) = n$ (existența din continuitate — proprietatea lui Darboux, unicitatea din injectivitate). $\blacksquare$ *Orientativ: 2p imaginea, 3p concluzia.*

### 2. $f(x) = \cos x$

#### a) Aria suprafeței determinate de graficul lui $f$, axa $Ox$, $x = 0$, $x = \frac\pi2$

Pe $\left[0, \frac\pi2\right]$, $\cos x \ge 0$:

$$\mathcal A = \int_0^{\pi/2}\cos x\,dx = \sin x\Big|_0^{\pi/2} = 1.$$

**Răspuns:** $\mathcal A = 1$. *Orientativ: 3p, 2p.*

#### b) $\lim\limits_{x\to+\infty}\dfrac1x\displaystyle\int_0^x f(t)\,dt$

$\displaystyle\int_0^x\cos t\,dt = \sin x$, deci limita este $\lim\limits_{x\to+\infty}\dfrac{\sin x}{x}$. Cum $\left|\dfrac{\sin x}{x}\right| \le \dfrac1x \to 0$, limita este $0$ (criteriul cleștelui).

**Răspuns:** $0$. *Orientativ: 2p integrala, 3p limita.*

#### c) Șirul $I_n = \displaystyle\int_0^{\pi/2} f^n(x)\,dx$ este convergent

Pe $\left[0, \frac\pi2\right]$, $0 \le \cos x \le 1$, deci $0 \le \cos^{n+1} x \le \cos^n x$. Integrând:

$$0 \le I_{n+1} \le I_n.$$

Șirul este descrescător și mărginit inferior de $0$, deci convergent (teorema lui Weierstrass). $\blacksquare$ *Orientativ: 3p monotonia, 2p mărginirea și concluzia.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $65$ |
| I.2 | $f(3) = 4$ |
| I.3 | $x = 9$ |
| I.4 | $n \in \{2, \dots, 9\}$ |
| I.5 | $C(2, -2)$ |
| I.6 | $r = \tfrac43$ |
| II.1.a | $11 - 4a$ |
| II.1.c | $a = 3$ |
| II.2.a | $a + b + c = 3$ |
| II.2.b | $c = -12$ |
| III.1.b | $x = 0$ |
| III.2.a | $1$ |
| III.2.b | $0$ |

## Ce merită reținut din varianta 7

- **Modulul unui produs** = produsul modulelor; nu e nevoie să efectuezi înmulțirea.
- **Inversa cu elemente întregi** a unei matrice întregi există exact când $\det A = \pm 1$.
- **Suma pătratelor rădăcinilor** $s_1^2 - 2s_2$: dacă iese $0$ (sau negativă) și rădăcinile nu pot fi toate nule, polinomul are rădăcini nereale.
- **Raza cercului înscris**: $r = \frac{\mathcal A}{p}$.
- **Șiruri $\int_0^{\pi/2}\cos^n x\,dx$**: sunt descrescătoare și pozitive, deci convergente.
