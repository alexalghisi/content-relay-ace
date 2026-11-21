#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[201], *p;
    int nr = 0;
    cin.getline(s, 201);
    p = strtok(s, " ");
    while (p != NULL)
    {
        int litere = 0, paranteze = 0;
        for (int i = 0; p[i] != '\0'; i++)
            if (p[i] >= 'a' && p[i] <= 'z') litere++;
            else if (strchr("()[]{}", p[i]) != NULL) paranteze++;
        if (litere > 0 && litere == paranteze) nr++;
        p = strtok(NULL, " ");
    }
    cout << nr;
    return 0;
}
