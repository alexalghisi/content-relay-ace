#!/usr/bin/env python3
"""Verificare simbolică (SymPy) a rezolvării BAC 2024, sesiunea august, Matematică M_tehnologic, Varianta 3.
Rulează: python3 -I scripts/verificare-rezolvari/matematica-2024-august/verifica.py  (ieșire 0 = toate PASS)"""
import sys
from fractions import Fraction
from sympy import (E, Matrix, Rational, Symbol, diff, exp, integrate, limit, log, oo,
                   simplify, solve, solveset, S, Interval, symbols, Poly)

x = Symbol("x", real=True)
fail = 0
def check(nume, ok):
    global fail
    print(("PASS " if ok else "FAIL ") + nume)
    fail |= not ok

# Subiectul I
check("I.1 (0,3+0,4)·10+2·0,5 = 8", (Fraction(3, 10) + Fraction(4, 10)) * 10 + 2 * Fraction(1, 2) == 8)
f1 = lambda t: 2 * t - 1
check("I.2 f(1)+f(2) = 4", f1(1) + f1(2) == 4)
sol = solve([log(2 * x + 1, 5) - 1], x, dict=True)
check("I.3 x = 2 (și 2x+1 > 0)", sol == [{x: 2}] and 2 * 2 + 1 > 0)
A = [11, 21, 31, 41, 51, 61, 71, 81, 91]
fav = [a for a in A if a % 3 == 0]
check("I.4 p = 3/9 = 1/3 (21, 51, 81)", fav == [21, 51, 81] and Fraction(len(fav), len(A)) == Fraction(1, 3))
check("I.5 m = 4 (mijlocul lui AC este (4,2))", (Fraction(3 + 5, 2), Fraction(1 + 3, 2)) == (4, 2))
AB = (20 ** 2 - 16 ** 2) ** 0.5
check("I.6 AB = 12, P = 48", AB == 12 and AB + 16 + 20 == 48)

# Subiectul al II-lea
Ax = lambda t: Matrix([[2 * t + 1, 1], [1, t]])
check("II.1a det A(1) = 2", Ax(1).det() == 2)
check("II.1b A(1)+A(5) = 2A(3)", Ax(1) + Ax(5) == 2 * Ax(3))
X = Ax(3) * Ax(1).inv()
check("II.1c X = [[3,-2],[-1,4]] și X·A(1) = A(3)", X == Matrix([[3, -2], [-1, 4]]) and X * Ax(1) == Ax(3))
m = Symbol("m")
X_ = Symbol("X")
f = X_ ** 3 + m * X_ ** 2 + 2 * X_ - 5
check("II.2a f(0) = -5", simplify(f.subs(X_, 0)) == -5)
check("II.2b m = 2", solve(f.subs(X_, 1), m) == [2])
r = Poly(f, X_).all_coeffs()  # [1, m, 2, -5]
s1, s2 = -r[1] / r[0], r[2] / r[0]
cand = [v for v in solve(simplify(s1 ** 2 - 2 * s2 - 5), m) if v.is_integer and v >= 0]
check("II.2c m = 3 (m natural)", cand == [3])
# control numeric: pentru m = 3, suma pătratelor rădăcinilor (complexe) este 5
roots = Poly(f.subs(m, 3), X_).nroots()
check("II.2c control numeric Σxk² = 5", abs(sum(z ** 2 for z in roots) - 5) < 1e-9)

# Subiectul al III-lea
g = x ** 2 / (x ** 2 + 1)
check("III.1a f'(x) = 2x/(x²+1)²", simplify(diff(g, x) - 2 * x / (x ** 2 + 1) ** 2) == 0)
check("III.1b asimptota y = 1", limit(g, x, oo) == 1)
from sympy import solve_univariate_inequality
dec = solve_univariate_inequality(diff(g, x) <= 0, x, relational=False)
inc = solve_univariate_inequality(diff(g, x) >= 0, x, relational=False)
check("III.1c descrescătoare pe (-∞,0], crescătoare pe [0,+∞)", dec == Interval(-oo, 0) and inc == Interval(0, oo))
h = exp(x) * (x + 1)
check("III.2a ∫₀¹ f(x)/(x+1) dx = e-1", simplify(integrate(h / (x + 1), (x, 0, 1)) - (E - 1)) == 0)
check("III.2b ∫₀¹ f(x) dx = e", simplify(integrate(h, (x, 0, 1)) - E) == 0)
a = Symbol("a", positive=True)
I = integrate(2 * x * h.subs(x, x ** 2) / (x ** 2 + 1), (x, 1, a))
sols = [v for v in solve(simplify(I - E * (E ** 3 - 1)), a) if v > 1]
check("III.2c a = 2", sols == [2])
sys.exit(fail)
