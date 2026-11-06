Rezolvarea completă a subiectului din **modelul oficial pentru Bacalaureat 2023 la Matematică M_mate-info**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Numerele reale $a$, $b$ cu $(a + bi)(1 + i) = 4$

Desfacem produsul, folosind $i^2 = -1$:

$$(a + bi)(1 + i) = a + ai + bi + bi^2 = (a - b) + (a + b)i.$$

Două numere complexe sunt egale dacă au părțile reale și imaginare egale. $4 = 4 + 0i$, deci

$$\begin{cases}a - b = 4\\ a + b = 0\end{cases} \Rightarrow 2a = 4 \Rightarrow a = 2,\ b = -2.$$

Verificare: $(2 - 2i)(1 + i) = 2 + 2i - 2i - 2i^2 = 4$ ✔.

**Răspuns:** $a = 2$, $b = -2$. *Barem: 3p sistemul $a - b = 4$, $a + b = 0$, 2p soluția.*

### 2. $f(x) = mx^2 - 2x + m$, $m \ne 0$: $f(m - x) = f(m + x)$ pentru orice $x$

$$f(m - x) - f(m + x) = m\left[(m-x)^2 - (m+x)^2\right] - 2\left[(m - x) - (m + x)\right] = m\cdot(-4mx) - 2\cdot(-2x) = -4x(m^2 - 1).$$

Condiția cere ca $-4x(m^2 - 1) = 0$ **pentru orice** $x$ real. Luând de exemplu $x = 1$, rezultă $m^2 - 1 = 0$, deci $m \in \{-1, 1\}$; reciproc, pentru aceste valori diferența este identic nulă. Ambele valori sunt nenule, deci convin.

**Interpretare:** condiția spune că dreapta $x = m$ este axă de simetrie a parabolei, iar axa este $x = -\frac{b}{2a} = \frac1m$; deci $\frac1m = m$.

**Răspuns:** $m \in \{-1, 1\}$. *Barem: 3p obținerea condiției $m^2 - 1 = 0$, 2p valorile care convin.*

### 3. Ecuația $2\log_2(2x) - 1 = \log_2(x^2 + x + 2)$

**Condiții de existență:** $2x > 0 \Rightarrow x > 0$; $x^2 + x + 2 > 0$ mereu ($\Delta = 1 - 8 < 0$).

Membrul stâng: $2\log_2(2x) - 1 = \log_2(2x)^2 - \log_2 2 = \log_2\dfrac{4x^2}{2} = \log_2(2x^2)$.

Ecuația devine $\log_2(2x^2) = \log_2(x^2 + x + 2)$, iar logaritmul este injectiv:

$$2x^2 = x^2 + x + 2 \iff x^2 - x - 2 = 0 \iff (x - 2)(x + 1) = 0.$$

$x = -1$ nu respectă $x > 0$ — nu convine; $x = 2$ convine. Verificare: $2\log_2 4 - 1 = 3 = \log_2 8$ ✔.

**Răspuns:** $x = 2$. *Barem: 3p ecuația de gradul II, 2p selectarea soluției.* Atenție: dacă scrii $2\log_2(2x) = \log_2(2x)^2$ fără condiția $x > 0$, introduci soluția falsă $-1$.

### 4. Probabilitatea ca o funcție $f:A \to A$ să verifice $f(n) \le n$, $A = \{1,2,3,4\}$

**Cazuri posibile:** fiecare dintre cele $4$ elemente are $4$ imagini posibile: $4^4 = 256$ funcții.

**Cazuri favorabile:** $f(1) \le 1$ — o variantă ($1$); $f(2) \le 2$ — două variante; $f(3) \le 3$ — trei; $f(4) \le 4$ — patru. Alegerile sunt independente (regula produsului):

$$1\cdot 2\cdot 3\cdot 4 = 24.$$

$$p = \frac{24}{256} = \frac{3}{32}.$$

**Răspuns:** $p = \dfrac{3}{32}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(5,3)$, $B(-1,5)$; punctul $C$ cu $\overrightarrow{CA} + \overrightarrow{CB} = 2\overrightarrow{OC}$

Fie $M$ mijlocul lui $AB$: $M\left(\frac{5 - 1}{2}, \frac{3 + 5}{2}\right) = M(2, 4)$. Regula medianei: $\overrightarrow{CA} + \overrightarrow{CB} = 2\overrightarrow{CM}$.

Relația devine $2\overrightarrow{CM} = 2\overrightarrow{OC}$, adică $\overrightarrow{OC} = \overrightarrow{CM}$: $C$ este mijlocul segmentului $OM$.

$$C\left(\frac{0 + 2}{2}, \frac{0 + 4}{2}\right) = C(1, 2).$$

(Verificare pe coordonate: $(5 - 1) + (-1 - 1) = 2 = 2\cdot 1$ și $(3 - 2) + (5 - 2) = 4 = 2\cdot 2$ ✔.)

**Răspuns:** $C(1, 2)$. *Barem: 3p $C$ mijlocul lui $OM$, 2p coordonatele.*

### 6. $AB = 8$, $C = 30^\circ$, $O$ centrul cercului circumscris: distanța de la $O$ la $AB$

Teorema sinusurilor: $\dfrac{AB}{\sin C} = 2R$, deci

$$R = \frac{AB}{2\sin C} = \frac{8}{2\cdot\frac12} = 8.$$

Atunci $OA = OB = R = 8 = AB$, deci triunghiul $OAB$ este echilateral cu latura $8$. Distanța de la $O$ la $AB$ este înălțimea lui, $OM$, cu $M$ mijlocul lui $AB$:

$$OM = \frac{8\sqrt3}{2} = 4\sqrt3.$$

(Sau: unghiul la centru $\angle AOB = 2\angle C = 60^\circ$.)

**Răspuns:** $d(O, AB) = 4\sqrt3$. *Barem: 2p $R = 8$, 3p triunghiul echilateral și distanța.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}3 & a & -2\\ 2a+1 & 1-a & -1\\ a+2 & -2 & 1\end{pmatrix}$ și sistemul $\begin{cases}3x + ay - 2z = b\\ (2a+1)x + (1-a)y - z = c\\ (a+2)x - 2y + z = -1\end{cases}$

#### a) $\det(A(0)) = 5$

$$\det(A(0)) = \begin{vmatrix}3 & 0 & -2\\ 1 & 1 & -1\\ 2 & -2 & 1\end{vmatrix} = 3 + 4 + 0 - (-4) - 6 - 0 = 3 + 4 + 4 - 6 = 5.$$

(Termeni Sarrus cu $+$: $3\cdot1\cdot1 = 3$, $0\cdot(-1)\cdot 2 = 0$, $(-2)\cdot 1\cdot(-2) = 4$; cu $-$: $(-2)\cdot1\cdot 2 = -4$, $3\cdot(-1)\cdot(-2) = 6$, $0\cdot 1\cdot 1 = 0$.) *Barem: 2p scrierea, 3p calculul.*

#### b) Valorile lui $a$ pentru care $A(a)$ este inversabilă

Cu Sarrus:

- termeni cu $+$: $3(1-a)\cdot 1 + a\cdot(-1)(a+2) + (-2)(2a+1)(-2) = 3 - 3a - a^2 - 2a + 8a + 4 = -a^2 + 3a + 7$;
- termeni cu $-$: $(-2)(1-a)(a+2) + 3\cdot(-1)(-2) + a(2a+1)\cdot 1 = -2(-a^2 - a + 2) + 6 + 2a^2 + a = 4a^2 + 3a + 2$.

$$\det(A(a)) = -a^2 + 3a + 7 - 4a^2 - 3a - 2 = 5 - 5a^2 = 5(1 - a)(1 + a).$$

(Pentru $a = 0$ regăsim $5$ ✔.) $A(a)$ este inversabilă $\iff \det(A(a)) \ne 0 \iff a \ne \pm1$.

**Răspuns:** $a \in \mathbb R \setminus \{-1, 1\}$. *Barem: 2p determinantul, 3p mulțimea valorilor.*

#### c) $b$, $c$ pentru care sistemul este compatibil oricare ar fi $a$

**Pentru $a \notin \{-1, 1\}$** determinantul este nenul, sistemul este de tip Cramer, deci compatibil (determinat) pentru orice $b$, $c$.

**Pentru $a \in \{-1, 1\}$** determinantul este $0$. Alegem minorul principal format din primele două linii și coloanele lui $y$ și $z$:

$$\Delta_p = \begin{vmatrix}a & -2\\ 1-a & -1\end{vmatrix} = -a + 2(1 - a) = 2 - 3a,$$

nenul pentru $a = 1$ ($-1$) și pentru $a = -1$ ($5$). Deci rangul este $2$, iar după teorema lui Rouché sistemul este compatibil dacă și numai dacă determinantul caracteristic (minorul principal bordat cu linia a treia și coloana termenilor liberi) este nul.

Pentru $a = -1$:

$$\Delta_c = \begin{vmatrix}-1 & -2 & b\\ 2 & -1 & c\\ -2 & 1 & -1\end{vmatrix} = -(1 - c) + 2(-2 + 2c) + b\cdot 0 = 5c - 5 = 0 \Rightarrow c = 1.$$

Pentru $a = 1$:

$$\Delta_c = \begin{vmatrix}1 & -2 & b\\ 0 & -1 & c\\ -2 & 1 & -1\end{vmatrix} = (1 - c) + 2\cdot 2c + b(0 - 2) = 1 + 3c - 2b = 0.$$

Cu $c = 1$: $2b = 4 \Rightarrow b = 2$.

Pentru ca sistemul să fie compatibil **oricare ar fi** $a$, ambele condiții trebuie îndeplinite simultan.

**Răspuns:** $b = 2$, $c = 1$. *Barem: 3p analiza cazurilor și determinanții caracteristici, 2p valorile lui $b$ și $c$.*

### 2. Polinomul $f = X^4 + aX^3 + aX^2 + 8X - 8$

#### a) $f(-1) = -15$ pentru orice $a$

$$f(-1) = (-1)^4 + a(-1)^3 + a(-1)^2 + 8(-1) - 8 = 1 - a + a - 8 - 8 = -15.$$

Termenii cu $a$ se anulează, deci rezultatul nu depinde de $a$. *Barem: 3p înlocuirea, 2p finalizarea.*

#### b) $a$ pentru care restul împărțirii lui $f$ la $X^2 - 1$ este $15X$

Restul are grad cel mult $1$: $r = pX + q$. Din $f = (X^2 - 1)\cdot c + pX + q$, punând $X = 1$ și $X = -1$:

$$f(1) = p + q,\qquad f(-1) = -p + q.$$

$f(1) = 1 + a + a + 8 - 8 = 2a + 1$ și $f(-1) = -15$. Rezultă $q = \dfrac{f(1) + f(-1)}{2} = a - 7$ și $p = \dfrac{f(1) - f(-1)}{2} = a + 8$, deci restul este $(a + 8)X + a - 7$.

Egalitatea cu $15X$: $a + 8 = 15$ și $a - 7 = 0$, ambele date de $a = 7$.

**Răspuns:** $a = 7$. *Barem: 3p restul $(a+8)X + a - 7$, 2p $a = 7$.*

#### c) Pentru orice $a$, $f$ nu are toate rădăcinile întregi

Presupunem, prin reducere la absurd, că rădăcinile $x_1, x_2, x_3, x_4$ sunt toate numere întregi.

Din Viète: $x_1 + x_2 + x_3 + x_4 = -a$, deci $a \in \mathbb Z$. Produsul rădăcinilor (grad par, coeficient dominant $1$) este termenul liber: $x_1x_2x_3x_4 = -8$, deci

$$|x_1|\cdot|x_2|\cdot|x_3|\cdot|x_4| = 8.$$

Toate rădăcinile sunt nenule (produsul e nenul), deci $|x_k| \ge 1$. Dacă toate ar avea modulul $\ge 2$, produsul ar fi $\ge 16 > 8$. Deci cel puțin o rădăcină are modulul $1$, adică este $1$ sau $-1$.

Dar $f(-1) = -15 \ne 0$ (punctul a)), deci $-1$ nu e rădăcină; rămâne $f(1) = 0$, adică $2a + 1 = 0$, $a = -\dfrac12 \notin \mathbb Z$ — contradicție cu $a \in \mathbb Z$.

Deci, pentru orice $a$ real, $f$ nu are toate rădăcinile numere întregi. *Barem: 2p $a \in \mathbb Z$, 3p argumentul cu produsul și contradicția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = 1 - x - (x^4 - 1)\operatorname{arctg} x$

#### a) $f'(x) = -x^2(4x\operatorname{arctg} x + 1)$

Cu regula produsului pentru $(x^4 - 1)\operatorname{arctg} x$ și $(\operatorname{arctg} x)' = \dfrac{1}{x^2+1}$:

$$f'(x) = -1 - 4x^3\operatorname{arctg} x - (x^4 - 1)\cdot\frac{1}{x^2 + 1}.$$

Cum $x^4 - 1 = (x^2 - 1)(x^2 + 1)$, fracția se simplifică la $x^2 - 1$:

$$f'(x) = -1 - 4x^3\operatorname{arctg} x - x^2 + 1 = -4x^3\operatorname{arctg} x - x^2 = -x^2(4x\operatorname{arctg} x + 1).$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Tangenta la grafic paralelă cu $Ox$

Tangenta în $(x_0, f(x_0))$ este paralelă cu $Ox$ dacă și numai dacă panta ei este $0$: $f'(x_0) = 0$.

$$-x_0^2(4x_0\operatorname{arctg} x_0 + 1) = 0.$$

$x\operatorname{arctg} x \ge 0$ pentru orice $x$ ($x$ și $\operatorname{arctg} x$ au același semn), deci $4x_0\operatorname{arctg}x_0 + 1 \ge 1 > 0$. Rămâne $x_0^2 = 0$, adică $x_0 = 0$.

$f(0) = 1 - 0 - (-1)\cdot 0 = 1$, iar tangenta: $y - f(0) = f'(0)(x - 0)$, adică $y = 1$.

**Răspuns:** $y = 1$. *Barem: 2p condiția $f'(x_0) = 0$, 3p $x_0 = 0$ și ecuația tangentei.*

#### c) $\operatorname{tg}(f(x)) \ge f(x) \ge f(\operatorname{tg} x)$ pentru orice $x \in [0, 1]$

**Pas 1 — monotonia și valorile lui $f$.** Din a) și b): $-x^2 \le 0$ și $4x\operatorname{arctg} x + 1 > 0$, deci $f'(x) \le 0$ pe $\mathbb R$ ($f$ descrescătoare pe $\mathbb R$). Cum $f(0) = 1$ și $f(1) = 1 - 1 - 0 = 0$, pentru $x \in [0, 1]$:

$$0 = f(1) \le f(x) \le f(0) = 1.$$

**Pas 2 — inegalitatea $\operatorname{tg} u \ge u$ pe $[0, 1]$.** Fie $g:[0, 1] \to \mathbb R$, $g(u) = \operatorname{tg} u - u$ (bine definită, $1 < \frac{\pi}{2}$). $g'(u) = \dfrac{1}{\cos^2 u} - 1 \ge 0$, deci $g$ crescătoare, $g(u) \ge g(0) = 0$, adică $\operatorname{tg} u \ge u$ pentru orice $u \in [0, 1]$.

**Prima inegalitate:** cum $f(x) \in [0, 1]$, aplicăm Pas 2 cu $u = f(x)$: $\operatorname{tg}(f(x)) \ge f(x)$.

**A doua inegalitate:** din Pas 2 cu $u = x$: $\operatorname{tg} x \ge x$. Cum $f$ este descrescătoare pe $\mathbb R$, $f(\operatorname{tg} x) \le f(x)$.

Deci $\operatorname{tg}(f(x)) \ge f(x) \ge f(\operatorname{tg} x)$ pentru orice $x \in [0, 1]$. *Barem: 2p monotonia și $0 \le f(x) \le 1$, 3p inegalitatea $\operatorname{tg} x \ge x$ și concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{x^2 + e^x}{1 + e^{-x}}$

#### a) $\displaystyle\int_0^3 (1 + e^{-x})f(x)\,dx = 8 + e^3$

$(1 + e^{-x})f(x) = x^2 + e^x$, deci

$$\int_0^3 (x^2 + e^x)\,dx = \left(\frac{x^3}{3} + e^x\right)\Big|_0^3 = 9 + e^3 - 0 - 1 = 8 + e^3.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_{-m}^{m}\frac{f(x)}{x^2 + e^x}\,dx = m$, pentru orice $m > 0$

$\dfrac{f(x)}{x^2 + e^x} = \dfrac{1}{1 + e^{-x}} = \dfrac{e^x}{e^x + 1} = \dfrac{(e^x + 1)'}{e^x + 1}$, cu primitiva $\ln(e^x + 1)$:

$$\int_{-m}^{m}\frac{e^x}{e^x + 1}\,dx = \ln(1 + e^m) - \ln(1 + e^{-m}) = \ln(1 + e^m) - \ln\frac{e^m + 1}{e^m} = \ln e^m = m.$$

*Barem: 3p primitiva, 2p calculul.* (Am amplificat cu $e^x$ ca să recunoaștem forma $\frac{u'}{u}$.)

#### c) $a \ne 0$ pentru care $\displaystyle\lim_{x\to0}\left(\frac{1}{e^{ax} - 1}\int_0^x f(t)\,dt\right) = 1$

Pentru $x \to 0$: $\int_0^x f(t)\,dt \to 0$ și $e^{ax} - 1 \to 0$ — nedeterminare $\frac00$. $f$ este continuă, deci $\left(\int_0^x f(t)\,dt\right)' = f(x)$; aplicăm l'Hôpital:

$$\lim_{x\to0}\frac{f(x)}{ae^{ax}} = \frac{f(0)}{a\cdot 1} = \frac{\frac{0 + 1}{1 + 1}}{a} = \frac{1}{2a}.$$

Condiția: $\dfrac{1}{2a} = 1 \Rightarrow a = \dfrac12$ (nenul, convine).

**Răspuns:** $a = \dfrac12$. *Barem: 2p aplicarea l'Hôpital, 3p limita $\frac{1}{2a}$ și $a = \frac12$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a = 2$, $b = -2$ |
| I.2 | $m \in \{-1, 1\}$ |
| I.3 | $x = 2$ |
| I.4 | $p = \frac{3}{32}$ |
| I.5 | $C(1, 2)$ |
| I.6 | $4\sqrt3$ |
| II.1.b | $a \in \mathbb R \setminus \{-1, 1\}$ |
| II.1.c | $b = 2$, $c = 1$ |
| II.2.b | $a = 7$ |
| III.1.b | $y = 1$ |
| III.2.c | $a = \frac12$ |

## Ce merită reținut din model

- **Ecuații logaritmice**: scrie condițiile de existență **înainte** de a transforma $2\log_2 u$ în $\log_2 u^2$.
- **Restul împărțirii la $X^2 - 1$**: se află din $f(1)$ și $f(-1)$, fără împărțire efectivă.
- **Rădăcini întregi**: produsul rădăcinilor (Viète) + divizibilitate + o contradicție.
- **Compatibilitate „oricare ar fi $a$”**: pentru valorile critice ale lui $a$ anulează determinanții caracteristici și intersectează condițiile.
- **$\operatorname{tg} x \ge x$ pe $[0, \frac{\pi}{2})$** combinată cu monotonia funcției dă lanțuri de inegalități.
