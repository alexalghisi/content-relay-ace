#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int total[100] = {0}, maxime[100] = {0}, folosit[100] = {0};
    long long r;
    while (f >> r)
    {
        int echipa = r % 100, rest = r / 100, punctaj;
        if (rest >= 100) punctaj = rest % 100;
        else punctaj = rest % 10;
        total[echipa] += punctaj;
        if (punctaj == 99) maxime[echipa]++;
        folosit[echipa] = 1;
    }
    int prima = -1;
    for (int e = 10; e <= 99; e++)
        if (folosit[e])
            if (prima == -1 || total[e] > total[prima] ||
                (total[e] == total[prima] && maxime[e] > maxime[prima]))
                prima = e;
    cout << prima;
    return 0;
}
