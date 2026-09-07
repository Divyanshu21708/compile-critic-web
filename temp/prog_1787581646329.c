#include <stdio.h>

int main() {
    float num1, num2;
    
    // Notice the \n at the end!
    printf("Enter the first number:\n");
    scanf("%f", &num1);
    
    printf("Enter the second number:\n");
    scanf("%f", &num2);
    
    printf("\n--- Results ---\n");
    printf("Sum: %.2f\n", num1 + num2);
    
    return 0;
}