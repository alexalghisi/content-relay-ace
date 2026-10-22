// Itemul 2: instrucțiunea din subiect, rulată pentru toate perechile a,b din [-60,60].
#include <cstdlib>
#include <algorithm>
#include <iostream>

int main() {
  bool maxim = true, minim = true, suma = true, dif = true, va = true, vb = true;
  for (int a = -60; a <= 60; a++)
    for (int b = -60; b <= 60; b++) {
      int m;
      m=(a+b+abs(a-b))/2;
      maxim = maxim && m == std::max(a, b);
      minim = minim && m == std::min(a, b);
      suma = suma && m == a + b;
      dif = dif && m == a - b;
      va = va && m == a;
      vb = vb && m == b;
    }
  std::cout << "a=" << maxim << " b=" << minim << " c=" << suma << " d=" << dif
            << " e=" << va << " f=" << vb << "\n";
  return 0;
}
