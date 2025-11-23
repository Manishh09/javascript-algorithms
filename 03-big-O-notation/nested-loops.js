// Generally, nested loops lead to polynomial time complexities like O(n^2), O(n^3), etc., depending on the number of nested levels.


// Example -1: 2 nested loops
// Nested loops here
// Nested loops! If you have 100 items, this does 10,000 operations. If you have 1000 items, it's 1,000,000 operations!
// Time Complexity: O(n^2) - Quadratic: due to the nested loops iterating over the array
// Space Complexity: O(1) - Constant: since it uses a constant amount of space regardless of input size
function findDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {      // Loop 1
    for (let j = i + 1; j < arr.length; j++) { // Loop 2 (nested!)
      if (arr[i] === arr[j]) {
        console.log('Duplicate!')
    };
    }
  }
}


// Example -2: 3 nested loops
// Time Complexity: O(n^3) - Cubic: due to the three nested loops iterating over the array
// Space Complexity: O(1) - Constant: since it uses a constant amount of space regardless of input size
// Would be fine for small arrays (like 20 items), but with 200 items it would perform 8 million operations - your browser might freeze!
function findTriplicates(arr) {
  for (let i = 0; i < arr.length; i++) {          // Loop 1
    for (let j = i + 1; j < arr.length; j++) {     // Loop 2 (nested)
      for (let k = j + 1; k < arr.length; k++) {   // Loop 3 (nested again!)
        if (arr[i] === arr[j] && arr[j] === arr[k]) {
          console.log('Triplicate!');
        }
      }
    }
  }
}


// How to improve?
// Instead of nested loops, consider using a Set to track seen items for finding duplicates in O(n) time.
// Time Complexity: O(n) - Linear: since we traverse the array only once
// Space Complexity: O(n) - Linear: since we store seen items in an array which grows with input size
function findDuplicatesOptimized(arr) {
  const seen = [];
  const duplicates = [];
  for (const item of arr) {
    if (seen.includes(item)) {
       duplicates.push(item);
    } else {
      seen.push(item);
    }
  }
  return duplicates;
}


// For triplicates,
// Time Complexity: O(n) - Linear: since we traverse the array only once
// Space Complexity: O(n) - Linear: since we store counts in an object which grows with input size
function findTriplicatesOptimized(arr) {
  const count = {};
  const triplicates = [];

  for (const item of arr) {  // Single loop
    count[item] = (count[item] || 0) + 1;
    if (count[item] === 3) {
      console.log('Triplicate!');
      triplicates.push(item);
    } 
  }
  return triplicates;
}

// More nested loops = exponentially worse performance. Always try to reduce nesting when possible!
// Consider alternative data structures or algorithms to optimize performance.