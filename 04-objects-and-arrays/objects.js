const obj = {
    name: 'Bruce Wayne',
    age: 35,
    role: 'Batman'
};

// Object.keys
// Time Complexity: O(n) - Linear: since it needs to iterate over all keys in the object
// Space Complexity: O(n) - Linear: since it creates an array of keys proportional to the number of keys in the object
console.log(Object.keys(obj)); // ['name', 'age', 'role']

// Object.values
// Time Complexity: O(n) - Linear: since it needs to iterate over all values in the object
// Space Complexity: O(n) - Linear: since it creates an array of values proportional to the number of values in the object
console.log(Object.values(obj)); // ['Bruce Wayne', 35, 'Batman']

// Object.entries
// Time Complexity: O(n) - Linear: since it needs to iterate over all entries in the object
// Space Complexity: O(n) - Linear: since it creates an array of entries proportional to the number of entries in the object
console.log(Object.entries(obj)); // [['name', 'Bruce Wayne'], ['age', 35], ['role', 'Batman']]

// insert
// Time Complexity: O(1) - Constant: since adding a new property takes the same amount of time regardless of object size
// Space Complexity: O(1) - Constant: since it adds a single property regardless of object size
obj.city = 'Gotham';
console.log(obj.city); // 'Gotham'

// delete
// Time Complexity: O(1) - Constant: since deleting a property takes the same amount of time regardless of object size
// Space Complexity: O(1) - Constant: since it removes a single property regardless of object size
delete obj.age;
console.log(obj.age); // undefined

// access
// Time Complexity: O(1) - Constant: since accessing a property takes the same amount of time regardless of object size
// Space Complexity: O(1) - Constant: since it does not use additional space proportional to object size
console.log(obj.name); // 'Bruce Wayne'
console.log(obj['role']); // 'Batman'

// search
// Time Complexity: O(n) - Linear: since searching for a property takes time proportional to the number of properties in the object
// Need to check each property in worst case
// Space Complexity: O(1) - Constant: since it does not use additional space proportional to object size
console.log('role' in obj); // true
console.log(obj.hasOwnProperty('age')); // false

