// Itemul 1: funcțiile copiate exact din subiect, apelate cu 365.
#include <iostream>

int este_lucratoare(int zi) {
  return (zi % 7 != 0 && zi % 7 != 6);
}

int zile_lucratoare(int an) {
  int zile = 0;
  for (int zi = 1; zi <= an; zi++) {
    if (este_lucratoare(zi))
      zile++;
  }
  return zile;
}

int main() {
  // Numărare independentă: câte zile din 1..365 au restul la 7 în {1,2,3,4,5}.
  int indep = 0;
  for (int r = 1; r <= 5; r++)
    for (int zi = r; zi <= 365; zi += 7) indep++;
  std::cout << zile_lucratoare(365) << " " << indep << "\n";
  return 0;
}
