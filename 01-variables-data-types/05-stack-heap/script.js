// These values are stored in the stack

const name = 'Nish';
const age = 28;

// Refernce values are stored on the heap

const person = {
  name: 'Nish',
  age: 40,
};

let newName = name;
newName = 'Nishant';

let newPerson = person;
newPerson.name = 'NishK';

console.log(name, newName);
console.log(person, newPerson);
