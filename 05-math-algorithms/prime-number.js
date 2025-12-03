// Check if a number is prime
// Time Complexity: O(n) - due to checking all numbers from 2 to n-1
// Space Complexity: O(1) - constant space usage
function isPrime(n) {
    if (n <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    for (let i = 2; i < n; i++) {
        if(n % i === 0){
            return false; // Found a divisor, not prime
        }
    }
    return true; // No divisors found, is prime 
}