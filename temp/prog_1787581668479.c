#include <stdio.h>

int main() {
    float num1, num2;
    
    printf("Enter the first number: ");
    fflush(stdout); // Forces the text to appear instantly
    scanf("%f", &num1);
    
    printf("Enter the second number: ");
    fflush(stdout); // Forces the text to appear instantly
    scanf("%f", &num2);
    
    printf("\n--- Results ---\n");
    printf("Sum: %.2f\n", num1 + num2);
    
    return 0;
}