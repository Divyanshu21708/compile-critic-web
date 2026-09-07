#include <iostream>
using namespace std;

int main() {
    float num1, num2;
    
    cout << "Enter the first number: ";
    cin >> num1;
    
    cout << "Enter the second number: ";
    cin >> num2;
    
    cout << "\n--- Results ---\n";
    cout << "Sum: " << num1 + num2 << "\n";
    cout << "Difference: " << num1 - num2 << "\n";
    cout << "Product: " << num1 * num2 << "\n";
    
    if (num2 != 0) cout << "Division: " << num1 / num2 << "\n";
    else cout << "Division: Cannot divide by zero!\n";
    
    return 0;
}