// Itemul 4: frunzele = nodurile care nu apar ca tată al nimănui.
#include <iostream>

int main() {
  int t[10] = {-1, 0, 1, 1, 2, 1, 2, 2, 5, 5}; // t[1..9] din enunț
  bool areFiu[10] = {false};
  int radacini = 0;
  for (int i = 1; i <= 9; i++) {
    if (t[i] == 0) radacini++;
    else areFiu[t[i]] = true;
  }
  int frunze = 0;
  std::cout << "frunze:";
  for (int i = 1; i <= 9; i++)
    if (!areFiu[i]) { frunze++; std::cout << " " << i; }
  std::cout << " total=" << frunze << " radacini=" << radacini << "\n";
  return 0;
}
