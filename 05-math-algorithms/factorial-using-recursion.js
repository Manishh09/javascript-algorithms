// Generate factorial of a number using recursion
// Time Complexity: O(n) - due to n recursive calls
// Space Complexity: O(n) - due to call stack usage

function factorial(n) {
    if (n < 0) {
        console.error("Factorial is not defined for negative numbers.");
        return null;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); // Output: 120