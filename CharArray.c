#include <Stdio.h>
int checkLength()
{
    int a, b;
    printf("Enter the length of String1:");
    scanf("%d", &a);
    printf("Enter the length of String2:");
    scanf("%d", &b);
    if (a != b)
    {
        printf("Both strings are different length!");
        printf("Enter the same length Strings!");
        checkLength();
    }
    else
        return a;
}
int compareString(int n)
{
    char string1[n];
    char string2[n];
    printf("Enter the String1");
    scanf("^[\n%s]", &string1);
    printf("Enter the String2");
    scanf("^[\n%s]", &string2);
    int flag = 0;
    for (int i = 0; i < n; i++)
    {
        if (string1[i] != string2[i])
        {
            flag = 1;
        }
    }
    return flag;
}

void main()

{
    int length = checkLength();
    int result = compareString(length);
}