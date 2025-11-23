# Time Complexity

- how fast does your code run?

- measures how the runtime of the code grows as the input gets bigger

- The amount of **time** taken for an algorithm to run, as a **function of input size**.

## Examples

### O(1) - Constant Time (Super fast!)

```javascript
function getFirstItem(arr) {
  return arr[0];  // Always takes the same time, no matter array size
}

```

**Note:** Doesn't matter if the array has 10 items or 10 million—it's always one step.

---

### O(n) - Linear Time (Pretty good)

```javascript
function findNumber(arr, target) {
  for (let i = 0; i < arr.length; i++) {  // Loop through all items
    if (arr[i] === target) return i;
  }
  return -1;
}

```

**Note:** If you have 100 items, you might check all 100. If you have 1000, you might check all 1000. Time grows with input size.

---

### O(n²) - Quadratic Time (Gets slow quickly)

```javascript
function findDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {      // Loop 1
    for (let j = i + 1; j < arr.length; j++) { // Loop 2 (nested!)
      if (arr[i] === arr[j]) console.log('Duplicate!');
    }
  }
}

```

**Note:** Nested loops! If you have 100 items, this does 10,000 operations. If you have 1000 items, it's 1,000,000 operations.

---

## Nested Loops

```javascript
// 1 loop = O(n)
for (let i = 0; i < n; i++) { }

// 2 nested loops = O(n²)
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) { }
}

// 3 nested loops = O(n³)
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) { }
  }
}

// 4 nested loops = O(n⁴) - Almost never acceptable!
```
