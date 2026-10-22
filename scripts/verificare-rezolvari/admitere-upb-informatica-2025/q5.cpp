// Itemul 5: backtracking pe lungimi 1, 2, 3, ... cu cifrele 0..6
// (fără 0 în față la numerele cu cel puțin două cifre), comparat cu o enumerare directă.
#include <iostream>
#include <vector>

std::vector<long long> generate;
int x[10], L;
const int LIMITA = 300;

void back(int k) {
  if ((int)generate.size() >= LIMITA) return;
  if (k == L) {
    long long v = 0;
    for (int i = 0; i < L; i++) v = v * 10 + x[i];
    generate.push_back(v);
    return;
  }
  for (int c = (k == 0 && L > 1 ? 1 : 0); c <= 6; c++) {
    x[k] = c;
    back(k + 1);
  }
}

int main() {
  for (L = 1; (int)generate.size() < LIMITA; L++) back(0);
  // Verificare independentă: numerele naturale, în ordine, care au toate cifrele <= 6.
  std::vector<long long> indep;
  for (long long v = 0; (int)indep.size() < LIMITA; v++) {
    bool ok = true;
    for (long long w = v; w > 0; w /= 10)
      if (w % 10 > 6) ok = false;
    if (ok) indep.push_back(v);
  }
  bool egale = true;
  for (int i = 0; i < LIMITA; i++)
    if (generate[i] != indep[i]) egale = false;
  std::cout << "primele10:";
  for (int i = 0; i < 10; i++) std::cout << " " << generate[i];
  std::cout << " al256=" << generate[255] << " identic=" << egale << "\n";
  return 0;
}
