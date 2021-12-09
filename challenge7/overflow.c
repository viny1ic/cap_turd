#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <string.h>

int main(int argc, char *argv[])
{
    int i;
    volatile int modified;
    char buffer[20];
    modified = 0;
    gets(buffer);

    if (modified){
        char key1[19] = "nothing_to_see_here";
        char check[19];
        char tri[19] =  "\x0D\x0E\x04\x37\x1D\x1B\x15\x3B\x0F\x01\x36\x10\x3A\x07\x1F\x1B\x54\x11\x18";
        for (i=0; i<strlen(key1); i++)
        {
            char temp = tri[i] ^ key1[i];
            check[i] = temp;
        }
        check[i] = '\0';
        printf("%s\n", check);
    }
    else
        printf("you entered: %s\n", buffer);

    
}