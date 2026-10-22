#!/usr/bin/env python3
"""Verificare simbolică (SymPy) a rezolvării BAC 2024, simulare, Matematică M_mate-info.
Rulează: python3 -I scripts/verificare-rezolvari/matematica-2024-simulare/verifica.py  (ieșire 0 = toate PASS)"""
import sys
from fractions import Fraction
from math import isqrt
from sympy import (E, Eq, Interval, Matrix, Poly, Rational, Symbol, cos, diff, eye, exp, factor, integrate,
                   limit, log, nsimplify, oo, pi, simplify, solve, sqrt, tan, Integral, N)
from sympy import solve_univariate_inequality

x = Symbol("x", real=True)
t = Symbol("t", real=True)
fail = 0
def check(nume, ok):
    global fail
    ok = bool(ok)
    print(("PASS " if ok else "FAIL ") + nume)
    fail |= not ok

# Subiectul I
lg = lambda v: log(v, 10)
check("I.1 (3 + lg(1/10))·lg√10 = 1", simplify((3 + lg(Rational(1, 10))) * lg(sqrt(10)) - 1) == 0)
a = Symbol("a", real=True)
fa = lambda v: v ** 2 + a * v - 1
check("I.2 (f∘f)(1) = 1 ⇔ a ∈ {−1, 1}", sorted(solve(fa(fa(1)) - 1, a)) == [-1, 1])
check("I.3 2^(x+1)·8^x = 32 ⇔ x = 1", solve(2 ** (x + 1) * 8 ** x - 32, x) == [1])
fav = [n for n in range(10, 100) if isqrt(n + 100) ** 2 == n + 100]
check("I.4 n ∈ {21, 44, 69, 96}, p = 4/90 = 2/45", fav == [21, 44, 69, 96] and Fraction(len(fav), 90) == Fraction(2, 45))
A_, B_, C_ = Matrix([1, 4]), Matrix([4, 6]), Matrix([4, 2])
D = (B_ - A_ + C_ - A_) / 2
check("I.5 D(3, 0)", D == Matrix([3, 0]))
Ex = tan(x) - 4 * cos(x / 2) * cos(x)
check("I.6 E(π/3) = 0", simplify(Ex.subs(x, pi / 3)) == 0)

# Subiectul al II-lea
Ax = lambda v: Matrix([[1, -1, v], [-1, 0, 0], [v, 0, -1]])
check("II.1a det A(0) = 1", Ax(0).det() == 1)
dB = factor((Ax(x) * Ax(x) - eye(3)).det())
check("II.1b A(x)·A(x) − I₃ = [[x²+1,−1,0],[−1,0,−x],[0,−x,x²]]",
      Ax(x) * Ax(x) - eye(3) == Matrix([[x ** 2 + 1, -1, 0], [-1, 0, -x], [0, -x, x ** 2]]))
check("II.1b det(A(x)·A(x) − I₃) = −x²(x² + 2)", simplify(dB + x ** 2 * (x ** 2 + 2)) == 0)
check("II.1b semn: −x²(x²+2) ≤ 0 pe ℝ",solve_univariate_inequality(dB <= 0, x, relational=False) == Interval(-oo, oo))
B = Matrix([[1, 0, 1], [0, 1, 0]])
X = B * Ax(0) * Ax(0)
check("II.1c A(0)² = [[2,−1,0],[−1,1,0],[0,0,1]]", Ax(0) ** 2 == Matrix([[2, -1, 0], [-1, 1, 0], [0, 0, 1]]))
check("II.1c X = [[2,−1,1],[−1,1,0]] și X·A(0)⁻¹ = B·A(0)",
      X == Matrix([[2, -1, 1], [-1, 1, 0]]) and X * Ax(0).inv() == B * Ax(0))
y = Symbol("y", real=True)
op = lambda u, v: (u ** 2 + v ** 2 + u + v) / (u + v + 1)
check("II.2a 1∗2 = 2", op(Fraction(1), Fraction(2)) == 2)
xp = Symbol("xp", nonnegative=True)
check("II.2b x∗0 = 0∗x = x pe [0, +∞)", simplify(op(xp, 0) - xp) == 0 and simplify(op(0, xp) - xp) == 0)
# II.2c: forță brută pe naturale (m, n ≤ 1000 acoperă tot: (m−2)² + (n−2)² = 13 dă m, n ≤ 5)
per = [(m, n) for m in range(0, 1001) for n in range(0, 1001) if m * m + n * n + m + n == 5 * (m + n + 1)]
check("II.2c perechile: (0,5), (4,5), (5,0), (5,4)", per == [(0, 5), (4, 5), (5, 0), (5, 4)])
mm, nn = Symbol("m"), Symbol("n")
check("II.2c identitate: m²+n²+m+n − 5(m+n+1) = (m−2)²+(n−2)² − 13",
      simplify(mm ** 2 + nn ** 2 + mm + nn - 5 * (mm + nn + 1) - ((mm - 2) ** 2 + (nn - 2) ** 2 - 13)) == 0)

# Subiectul al III-lea
f = (x + 6) * sqrt(x ** 2 + 4)
fp = diff(f, x)
check("III.1a f'(x) = 2(x²+3x+2)/√(x²+4)", simplify(fp - 2 * (x ** 2 + 3 * x + 2) / sqrt(x ** 2 + 4)) == 0)
inc = solve_univariate_inequality(fp >= 0, x, relational=False)
dec = solve_univariate_inequality(fp <= 0, x, relational=False)
check("III.1b crescătoare pe (−∞,−2] și [−1,+∞), descrescătoare pe [−2,−1]",
      inc == Interval(-oo, -2) + Interval(-1, oo) and dec == Interval(-2, -1))
fm2, fm1 = simplify(f.subs(x, -2)), simplify(f.subs(x, -1))
check("III.1c f(−2) = 8√2, f(−1) = 5√5", fm2 == 8 * sqrt(2) and fm1 == 5 * sqrt(5))
check("III.1c 11 < 5√5 < 8√2 < 12 (125 > 121, 128 < 144)",
      bool(5 * sqrt(5) > 11) and bool(5 * sqrt(5) < 8 * sqrt(2)) and bool(8 * sqrt(2) < 12)
      and (5 * sqrt(5)) ** 2 == 125 and (8 * sqrt(2)) ** 2 == 128)
check("III.1c limite: −∞ la −∞, +∞ la +∞", limit(f, x, -oo) == -oo and limit(f, x, oo) == oo)
# control numeric: pentru m întreg între −60 și 60, ecuația f(x) = m are exact o soluție reală.
# Ridicăm la pătrat: (x+6)²(x²+4) = m²; păstrăm rădăcinile reale cu f(x) = m (elimină soluțiile străine).
ok = True
for m in range(-60, 61):
    rad = [r for r in Poly((x + 6) ** 2 * (x ** 2 + 4) - m ** 2, x).nroots(n=30, maxsteps=200) if abs(r.as_real_imag()[1]) < 1e-12]
    sol = {round(float(r.as_real_imag()[0]), 9) for r in rad if abs(N(f.subs(x, r.as_real_imag()[0]), 30) - m) < 1e-9}
    ok &= len(sol) == 1
check("III.1c control numeric: soluție unică pentru m = −60, …, 60", ok)
g = (x + 1) / exp(x)
check("III.2a ∫₀⁴ eˣ f(x) dx = 12", integrate(simplify(exp(x) * g), (x, 0, 4)) == 12)
check("III.2b ∫₀¹ f(x) dx = (2e − 3)/e", simplify(integrate(g, (x, 0, 1)) - (2 * E - 3) / E) == 0)
check("III.2b primitiva −(x+2)e^(−x)", simplify(diff(-(x + 2) * exp(-x), x) - g) == 0)
# III.2c: I_n = (1/n)·∫₀¹ eᵗ/(t+1) dt (substituția t = xⁿ), apoi 1/(t+1) ≤ eᵗ/(t+1) ≤ eᵗ pe [0,1]
J = Integral(exp(t) / (t + 1), (t, 0, 1)).evalf(30)
ok = True
for n in range(2, 13):
    In = Integral(x ** (n - 1) / g.subs(x, x ** n), (x, 0, 1)).evalf(30)
    ok &= abs(In - J / n) < 1e-20 and N(log(2) / n, 30) <= In <= N((E - 1) / n, 30)
check("III.2c I_n = J/n și ln2/n ≤ I_n ≤ (e−1)/n pentru n = 2..12", ok)
check("III.2c ∫₀¹ 1/(t+1) dt = ln 2 și ∫₀¹ eᵗ dt = e − 1",
      simplify(integrate(1 / (t + 1), (t, 0, 1)) - log(2)) == 0 and integrate(exp(t), (t, 0, 1)) == E - 1)
check("III.2c 1/(t+1) ≤ eᵗ/(t+1) ≤ eᵗ pe [0,1] (eᵗ ≥ 1 și t + 1 ≥ 1)",
      Interval(0, 1).is_subset(solve_univariate_inequality(exp(t) >= 1, t, relational=False))
      and all(1 / (v + 1) <= N(exp(v)) / (v + 1) <= N(exp(v)) for v in [Rational(k, 100) for k in range(101)]))
sys.exit(fail)
