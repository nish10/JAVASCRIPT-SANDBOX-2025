const firstName = 'Nishant';
const lastName = 'Kumar';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'Nishant',
  },
};

const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(todoId, title, name);

// Destructure Arrays
const numbers = [21, 67, 33, 49];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
