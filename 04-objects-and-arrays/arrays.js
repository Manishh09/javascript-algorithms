// Array - An ordered collection of items, which can be of any type.
// Arrays are zero-indexed, meaning the first element is at index 0.

const items = [10, 20, 30, 40, 50];

// Accessing elements
// Time Complexity: O(1) - Constant: since accessing an element by index takes the same amount of time regardless of array size
// Space Complexity: O(1) - Constant: since it does not use additional space proportional to array size
const firstItem = items[0]; // 10
const secondItem = items[1]; // 20
console.log('First Item:', firstItem);
console.log('Second Item:', secondItem);

// Inserting elements
// Time Complexity: O(1) - Constant: since adding an element at the end takes the same amount of time regardless of array size
// Space Complexity: O(1) - Constant: since it adds a single element regardless of array size
items.push(60);
console.log('After Push:', items); // [10, 20, 30, 40, 50, 60]

// Deleting elements
// Time Complexity: O(1) - Constant: since removing the last element takes the same amount of time regardless of array size
// Space Complexity: O(1) - Constant: since it removes a single element regardless of array size
items.pop();
console.log('After Pop:', items); // [10, 20, 30, 40, 50]

// shift - removes the first element
// Time Complexity: O(n) - Linear: since all other elements need to be shifted one position to the left
// Space Complexity: O(1) - Constant: since it removes a single element regardless of array size
items.shift();
console.log('After Shift:', items); // [20, 30, 40, 50]

// unshift - adds an element at the beginning
// Time Complexity: O(n) - Linear: since all existing elements need to be shifted one position to the right
// Space Complexity: O(1) - Constant: since it adds a single element regardless of array size
items.unshift(10);
console.log('After Unshift:', items); // [10, 20, 30, 40, 50]


// Searching for an element
// Time Complexity: O(n) - Linear: since in the worst case we may need to check each element
// Space Complexity: O(1) - Constant: since it does not use additional space proportional to array size
const index = items.indexOf(30);
console.log('Index of 30:', index); // 2

// slice - creates a shallow copy of a portion of an array
// Time Complexity: O(n) - Linear: where n is the number of elements being copied
// Space Complexity: O(n) - Linear: where n is the number of elements in the new array
const subArray = items.slice(1, 4);
console.log('Sliced Array (1 to 4):', subArray); // [20, 30, 40]

// splice - adds/removes elements from an array
// Time Complexity: O(n) - Linear: since elements may need to be shifted
// Space Complexity: O(k) - Linear: where k is the number of elements added
items.splice(2, 1, 25); // Remove 1 element at index 2 and add 25
console.log('After Splice:', items); // [10, 20, 25, 40, 50]

// Iterating over elements
// Time Complexity: O(n) - Linear: since we need to visit each element once
// Space Complexity: O(1) - Constant: since it does not use additional space proportional to array size
items.forEach((item, idx) => {
    console.log(`Item at index ${idx}:`, item);
});

// Finding an element
// Time Complexity: O(n) - Linear: since in the worst case we may need to check each element
// Space Complexity: O(1) - Constant: since it does not use additional space proportional to array size
const foundItem = items.find(item => item === 40);
console.log('Found Item:', foundItem); // 40

// Filtering elements
// Time Complexity: O(n) - Linear: since we need to check each element
// Space Complexity: O(n) - Linear: where n is the number of elements that match the filter condition
const filteredItems = items.filter(item => item > 25);
console.log('Filtered Items (>25):', filteredItems); // [30, 40, 50]

// Mapping elements
// Time Complexity: O(n) - Linear: since we need to visit each element once
// Space Complexity: O(n) - Linear: where n is the number of elements in the new array
const mappedItems = items.map(item => item * 2);
console.log('Mapped Items (x2):', mappedItems); // [20, 40, 60, 80, 100]

// Reducing elements
// Time Complexity: O(n) - Linear: since we need to visit each element once
// Space Complexity: O(1) - Constant: since it uses a fixed amount of space regardless of array size
const sum = items.reduce((acc, item) => acc + item, 0);
console.log('Sum of Items:', sum); // 150