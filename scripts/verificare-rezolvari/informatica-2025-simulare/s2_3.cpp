// II.3: secvența completată, rulată pe un tablou inițial nul; se afișează tabloul obținut.
#include <iostream>
using namespace std;
int main()
{
    int i, j, a[6][6] = {};
    for(i=0;i<6;i++)
        for(j=0;j<6;j++)
            if (i == 0 || i == 5 || j < 2 || j > 3) a[i][j] = i + 1;
    for (i = 0; i < 6; i++)
    {
        for (j = 0; j < 6; j++)
            cout << a[i][j] << (j < 5 ? " " : "\n");
    }
    return 0;
}
