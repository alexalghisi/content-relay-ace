#include <iostream>
using namespace std;
int main()
{
    int m, n, a[50][50], i, j, imin, aux;
    cin >> m >> n;
    for (i = 0; i < m; i++)
        for (j = 0; j < n; j++)
            cin >> a[i][j];
    for (j = 0; j < n; j++)
    {
        imin = 0;
        for (i = 1; i < m; i++)
            if (a[i][j] < a[imin][j])
                imin = i;
        if (a[imin][j] % 2 == 0)
            i = 0;           // minim par: schimbăm cu primul element al coloanei
        else
            i = m - 1;       // minim impar: schimbăm cu ultimul element al coloanei
        aux = a[imin][j]; a[imin][j] = a[i][j]; a[i][j] = aux;
    }
    for (i = 0; i < m; i++)
    {
        for (j = 0; j < n; j++)
            cout << a[i][j] << ' ';
        cout << '\n';
    }
    return 0;
}
