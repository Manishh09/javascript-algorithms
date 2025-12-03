// Generate factorial of a number using for loop
// Time Complexity: O(n) - due to single loop running n-1 times
// Space Complexity: O(1) - constant space usage
function factorialUsingLoop(n) {
    if(n<0){
        console.error("Factorial is not defined for negative numbers.");
        return null;
    }
    let result = 1;

    for(let i = 2; i <= n; i++){
        result *= i;
    }

    return result;
}   

console.log(factorialUsingLoop(5)); // Output: 120