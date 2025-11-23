// Sum of N natural numbers
// 1 + 2 + 3 + ... + n = n(n + 1) / 2

//  1. using for loop
//  Time Complexity: O(n) - Linear:  since we have a single loop that runs n times
//  Big O focuses on the growth rate of the algorithm as the input size increases   
//  Like it focuses on bigger pictures rather than small details

// Space Complexity: O(1) - Constant: since it uses a constant amount of space regardless of input size

function sumOfNaturalNumbersUsingLoop(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// 2. using formula
// Time Complexity: O(1) - Constant: since it uses a constant number of operations
// Space Complexity: O(1) - Constant: since it uses a constant amount of space regardless of input size
function sumOfNaturalNumbers(n) {
    if (n < 1) {
        return 0;
    }
    return (n * (n + 1)) / 2;
}