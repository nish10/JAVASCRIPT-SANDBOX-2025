// console.log('Hello, Node.js!'); -- commaand to run this node app: node app.js

// async function getUser() {
//   const response = await fetch('https://api.github.com/users/nish10');
//   const data = await response.json();
//   console.log(data);
// }

// getUser();

const { capitalizeWords, makeMoney } = require('./utils');

console.log(capitalizeWords('hello world from node.js'));

console.log(makeMoney(1000));

const Person = require('./Person');

const person1 = new Person('Nishant', 28);

person1.greet();
