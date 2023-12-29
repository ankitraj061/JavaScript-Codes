#include <stdio.h>

struct Sample
{
    char c;
    int i;
};

int main()
{
    printf("%d\n", sizeof(struct Sample));
    return 0;
}