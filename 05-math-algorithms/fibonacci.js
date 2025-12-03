// Fibonacci sequence implementation


// Generate Fibonacci sequence up to n terms
// Time Complexity: O(n) - since we use a loop that runs n-2 times
// Space Complexity: O(n) - for storing the sequence in an array
function generateFibonacciSequence(n) {
    if (n <= 0) {
        return [];
    }
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) { // Start from index 2
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}
console.log(generateFibonacciSequence(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]