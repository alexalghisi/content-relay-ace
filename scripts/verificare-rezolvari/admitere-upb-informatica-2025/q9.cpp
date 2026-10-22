// Itemul 9: funcția copiată exact din subiect, apelată cu (2,2025),
// plus o copie instrumentată care afișează lanțul de apeluri.
#include <iostream>

int power(int x, int n) {
    if(n==0)
       return 1;
    if(n%2==0)
       return x * power(x, n/2);
    else
       return power(x, (n-1)/2);
}

int inmultiri = 0;
int urmarit(int x, int n) {
  std::cout << n << " ";
  if (n == 0) return 1;
  if (n % 2 == 0) { inmultiri++; return x * urmarit(x, n / 2); }
  return urmarit(x, (n - 1) / 2);
}

int main() {
  std::cout << "power=" << power(2, 2025) << "\n";
  std::cout << "lant: ";
  int r = urmarit(2, 2025);
  std::cout << "\nurmarit=" << r << " inmultiri=" << inmultiri << "\n";
  return 0;
}
