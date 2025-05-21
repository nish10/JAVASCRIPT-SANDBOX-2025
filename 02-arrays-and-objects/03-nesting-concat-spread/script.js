let x;

const fruits = ['apple', 'pear', 'orange'];

const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruits.push(berries);

// x = fruits[3][1];

const allFruits = [fruits, berries];

// concat operator
x = fruits.concat(berries);

// spread operator
x = [...fruits, ...berries];

// Flatten Array
const arr = [1, 2, 3, 4, 5, [6, 7], 8];

x = arr.flat();

// Static Method on Array object

x = Array.isArray(fruits);

x = Array.isArray('Hello');

x = Array.from('12345');
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

// console.log(allFruits[1][0]);

console.log(arr);

console.log(x);

console.log(fruits);
