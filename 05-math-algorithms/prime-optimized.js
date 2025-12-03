// Check if a number is prime using an optimized approach (checking up to the square root of n)
// Time Complexity: O(√n) - since we check divisors only up to √n
// Space Complexity: O(1) - constant space usage

function isPrimeOptimized(n) {
    if (n <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) { // Check divisors up to √n
            return false; // Found a divisor, not prime
        }
    }
    return true;
} 