// Loop through arrays
const items = ['apple', 'banana', 'cherry', 'date'];

const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }, { name: 'David' }];

// for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
// }

// cleaner way to do this

// for (const item of items) {
//     console.log(item)
// }

for (const user of users) {
  console.log(user);
}

// Loop over strings
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

//Loop over maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

console.log(map);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
