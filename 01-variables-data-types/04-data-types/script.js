// String
const firstName = 'Sara';

// number
const age = 30;
const temp = 98.9;

// boolean
const hasKids = true;

// null
const aptNumber = null;

// underfined
// let score;
const score = undefined;

// symbol
const id = Symbol('id');

// BigInt
const n = 999033939300494912992039339339393939n;

// reference types
const numbers = [1, 2, 3, 4, 5];

const person = {
  name: 'Nish',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3
