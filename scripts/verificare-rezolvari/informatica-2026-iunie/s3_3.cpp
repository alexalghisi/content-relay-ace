#include <fstream>
#include <iostream>
using namespace std;
int main()
{
    long long x, y, z;           // x = ultima lună, y = penultima lună
    cin >> x >> y;
    ofstream fout("bac.txt");
    fout << x << ' ' << y;
    while (y != 0)
    {
        // din x = y + 2*(y - z)  =>  z = (3*y - x) / 2
        z = (3 * y - x) / 2;
        fout << ' ' << z;
        x = y;
        y = z;
    }
    fout.close();
    return 0;
}
