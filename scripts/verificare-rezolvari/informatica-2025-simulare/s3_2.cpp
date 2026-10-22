#include <iostream>
#include <cstring>
using namespace std;
int main()
{
    char text[201], cel[201] = "", *p;
    const char note[7][4] = {"do", "re", "mi", "fa", "sol", "la", "si"};
    int nr = 0, maxim = 0, k, c;
    cin.getline(text, 201);
    p = strtok(text, " ,");
    while (p != NULL)
    {
        c = 0;                       // câte note distincte conține cuvântul p
        for (k = 0; k < 7; k++)
            if (strstr(p, note[k]) != NULL)
                c++;
        if (c > 0)
            nr++;
        if (c > maxim)
        {
            maxim = c;
            strcpy(cel, p);
        }
        p = strtok(NULL, " ,");
    }
    cout << nr;
    if (nr > 0)
        cout << ' ' << cel;
    return 0;
}
