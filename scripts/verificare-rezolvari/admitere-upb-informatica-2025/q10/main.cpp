#include <iostream>
#include <fstream>
std::ifstream file("main.cpp");
int main() {
  int i = 0;
  char sir[128];
  while(i < 5) {
    file.getline(sir, 128);
    i++;
  }
  file.close();
  std::cout << sir;
  return 0;
}
