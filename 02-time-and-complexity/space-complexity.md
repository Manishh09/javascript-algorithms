# Space Complexity

- The amount of memory taken to run an algorithm, as a function of input size

- Measures how much extra memory your code needs as input grows.

## Examples

### O(1) - Constant Space (Minimal memory)

```javascript
function sum(arr) {
  let total = 0;  // Just one variable, regardless of array size
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

### O(n) - Linear Space (Memory grows with input)

```javascript
function double(arr) {
  let result = [];  // New array same size as input
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;  
  // If input has 1000 items, result has 1000 items
}
```
