#include <iostream>
using namespace std;

int main()
{
    int i, j, a[8][8];
    for (i = 0; i < 8; i++)
        for (j = 0; j < 8; j++)
            a[i][j] = -1;
    for(i=0;i<8;i++)
        for(j=0;j<8;j++)
            if (j / 2 == 1) a[i][j] = 0;
            else if (j / 2 == 3) a[i][j] = 7;
            else a[i][j] = 2;
    for (i = 0; i < 8; i++)
    {
        for (j = 0; j < 8; j++) cout << a[i][j] << (j < 7 ? " " : "");
        cout << "\n";
    }
    return 0;
}
