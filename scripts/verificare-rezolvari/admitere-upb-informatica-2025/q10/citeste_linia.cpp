// Itemul 10, varianta Pascal: fpc nu este instalat, așa că imităm bucla
// „while i<7 do readln(f, sir)” — citim k linii din fișier și o afișăm pe ultima.
// Utilizare: ./citeste_linia main.pas 7
#include <fstream>
#include <iostream>
#include <string>

int main(int argc, char** argv) {
  if (argc != 3) return 2;
  std::ifstream f(argv[1]);
  int k = std::stoi(argv[2]);
  std::string sir;
  for (int i = 0; i < k; i++) std::getline(f, sir);
  std::cout << sir << "\n";
  return 0;
}
