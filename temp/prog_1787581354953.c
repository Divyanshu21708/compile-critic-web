#include <stdio.h>

int main() {
    float num1, num2;
    
    printf("Enter the first number: ");
    scanf("%f", &num1);
    
    printf("Enter the second number: ");
    scanf("%f", &num2);
    
    printf("\n--- Results ---\n");
    printf("Sum: %.2f\n", num1 + num2);
    printf("Difference: %.2f\n", num1 - num2);
    printf("Product: %.2f\n", num1 * num2);
    
    if (num2 != 0) printf("Division: %.2f\n", num1 / num2);
    else printf("Division: Cannot divide by zero!\n");
    
    return 0;
}