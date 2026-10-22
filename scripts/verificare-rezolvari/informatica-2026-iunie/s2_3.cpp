struct observator
{
    int numar;
    struct
    {
        float magnitudine;
        int distanta;
    } stea[200];
} s;
int main()
{
    s.numar = 10; s.stea[0].magnitudine = -1.46f; s.stea[0].distanta = 9;
    return s.numar == 10 && s.stea[0].distanta == 9 ? 0 : 1;
}
