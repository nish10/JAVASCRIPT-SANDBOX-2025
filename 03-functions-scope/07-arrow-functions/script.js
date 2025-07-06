// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
  return a + b;
};

// Implicit Return
const subtract = (a, b) => a - b;

const double = (a) => a * 2;

// Returning an object
const createObject = () => ({
  name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.forEach(function (n) {
  console.log(n);
});

// Arrow Function in a callback - callback is when we pass a function in another function
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));

console.log(subtract(10, 5));

console.log(double(5));

console.log(createObject());
