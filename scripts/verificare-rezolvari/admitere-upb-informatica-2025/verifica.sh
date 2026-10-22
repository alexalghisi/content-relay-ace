#!/usr/bin/env bash
# Verifică rezolvarea subiectului de admitere UPB, Informatică, 14 iulie 2025 (Varianta S).
# Codul din subiect este rulat așa cum e tipărit; unde se poate, rezultatul e comparat cu o forță brută.
# Ieșire 0 = toate verificările au trecut. Rulează: bash scripts/verificare-rezolvari/admitere-upb-informatica-2025/verifica.sh
set -euo pipefail
cd "$(dirname "$0")"
W=$(mktemp -d); trap 'rm -rf "$W"' EXIT
fail=0
check() { if [[ "$2" == "$3" ]]; then echo "PASS $1"; else echo "FAIL $1: așteptat [$3], obținut [$2]"; fail=1; fi; }
for f in q1 q2 q3 q4 q5 q6 q7 q8 q9; do g++ -std=c++17 -O2 -Wall -o "$W/$f" "$f.cpp"; done

check "1 (a: 261) — zile_lucratoare(365) și numărare independentă" "$("$W/q1")" "261 261"
check "2 (a: maximul) — toate perechile a,b din [-60,60]" "$("$W/q2")" "a=1 b=0 c=0 d=0 e=0 f=0"
check "3 (a) — secvența rulată pe datele din enunț" "$("$W/q3" | tail -1)" "final a=(6,3,3,4,3,6) b=(6,5,5,5,5,6)"
check "4 (a: 6 frunze)" "$("$W/q4")" "frunze: 3 4 6 7 8 9 total=6 radacini=1"
check "5 (a: 513) — backtracking = enumerare directă" "$("$W/q5")" "primele10: 0 1 2 3 4 5 6 10 11 12 al256=513 identic=1"
check "6 (a: 2100) — forță brută pe mulțimi de 3 perechi" "$("$W/q6")" "2100 2100"
check "7 (a) — expresia pe un număr real și pe unul imaginar" "$("$W/q7")" "1 0 1"

# 7: variantele c–f nu sunt nici măcar expresii C++ valide pentru tipul dat.
q7var() {
  cat > "$W/q7v.cpp" <<EOF
typedef struct {
    int re, im;
} Complex;
typedef struct {
    int n;
    Complex elemente[100];
} ComplexSecv;
int main() { ComplexSecv CS{}; return ($1) ? 0 : 1; }
EOF
  if g++ -std=c++17 -fsyntax-only "$W/q7v.cpp" 2>/dev/null; then echo compileaza; else echo eroare; fi
}
check "7 varianta a compilează" "$(q7var 'CS.elemente[0].im==0')" "compileaza"
check "7 varianta b compilează (dar testează partea reală)" "$(q7var 'CS.elemente[0].re==0')" "compileaza"
check "7 varianta c respinsă de compilator" "$(q7var 'CS.elemente.im==0')" "eroare"
check "7 varianta d respinsă de compilator" "$(q7var 'CS.im[0]==0')" "eroare"
check "7 varianta e respinsă de compilator" "$(q7var 'CS.elemente.re==0')" "eroare"
check "7 varianta f respinsă de compilator" "$(q7var 'CS.im==0')" "eroare"

check "8 (a: O(n)) — căutare în scară corectă și cu cel mult 2n-1 comparații" "$("$W/q8")" "teste=48000 gresite=0 peste_2n-1=0"

out9=$("$W/q9")
check "9 (a: 8) — power(2,2025)" "$(grep '^power=' <<<"$out9")" "power=8"
check "9 lanțul de apeluri" "$(grep '^lant' <<<"$out9" | sed 's/ *$//')" "lant: 2025 1012 506 253 126 63 31 15 7 3 1 0"
check "9 trei înmulțiri cu 2" "$(grep '^urmarit' <<<"$out9")" "urmarit=8 inmultiri=3"

# 10: programele din subiect, compilate și rulate în directorul care conține propriile surse.
mkdir "$W/q10"; cp q10/main.c q10/main.cpp q10/main.pas "$W/q10/"
gcc -std=c11 -Wall -o "$W/q10/prog_c" q10/main.c
g++ -std=c++17 -Wall -o "$W/q10/prog_cpp" q10/main.cpp
g++ -std=c++17 -Wall -o "$W/q10/citeste" q10/citeste_linia.cpp
check "10 (a) — main.c afișează a 5-a linie" "$(cd "$W/q10" && ./prog_c)" "  int i = 0;"
check "10 (a) — main.cpp afișează a 5-a linie" "$(cd "$W/q10" && ./prog_cpp)" "  int i = 0;"
check "10 (a) — main.pas: a 7-a linie (citire simulată, fpc indisponibil)" "$(cd "$W/q10" && ./citeste main.pas 7)" "  i := 0;"
exit $fail
