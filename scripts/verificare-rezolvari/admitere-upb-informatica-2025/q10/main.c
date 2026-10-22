#include <stdio.h>

int main() {
  FILE * file = fopen("main.c", "r");
  int i = 0;
  char sir[128];
  while(i < 5) {
    fgets(sir, 128, file);
    i++;
  }
  fclose(file);
  printf("%s", sir);
  return 0;
}
