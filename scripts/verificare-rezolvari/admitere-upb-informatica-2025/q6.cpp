// Itemul 6: forță brută — mulțimi de k=3 perechi (fată, băiat) disjuncte, n=7 fete, m=5 băieți.
#include <iostream>

int main() {
  const int n = 7, m = 5;
  long long cnt = 0;
  // perechile posibile sunt numerotate 0..n*m-1; alegem 3 perechi distincte p1<p2<p3 (o mulțime, fără ordine)
  for (int p1 = 0; p1 < n * m; p1++)
    for (int p2 = p1 + 1; p2 < n * m; p2++)
      for (int p3 = p2 + 1; p3 < n * m; p3++) {
        int f1 = p1 / m, b1 = p1 % m, f2 = p2 / m, b2 = p2 % m, f3 = p3 / m, b3 = p3 % m;
        if (f1 == f2 || f1 == f3 || f2 == f3) continue;
        if (b1 == b2 || b1 == b3 || b2 == b3) continue;
        cnt++;
      }
  long long formula = 35LL * 10 * 6; // C(7,3) * C(5,3) * 3!
  std::cout << cnt << " " << formula << "\n";
  return 0;
}
