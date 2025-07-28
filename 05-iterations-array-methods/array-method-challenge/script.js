// Challenge 1

const people = [
  {
    firstName: 'Nish',
    lastName: 'Kr',
    email: 'nishant.raj334@gmail.com',
    phone: '9382238838',
    age: 28,
  },
  {
    firstName: 'Sand',
    lastName: 'Kri',
    email: 'sand.kri2@gmail.com',
    phone: '9382228338',
    age: 23,
  },
  {
    firstName: 'Subh',
    lastName: 'Raj',
    email: 'sub.raj86@gmail.com',
    phone: '938328838',
    age: 35,
  },
  {
    firstName: 'Ahan',
    lastName: 'Gupta',
    email: 'ahan.gupta28@gmail.com',
    phone: '9382388323',
    age: 21,
  },
  {
    firstName: 'Avneet',
    lastName: 'Padda',
    email: 'avneet.padda19@gmail.com',
    phone: '9382289292',
    age: 22,
  },
];

const youngPeople = people
  .filter((item) => item.age <= 25)
  .map((pp) => {
    return {
      name: pp.firstName + ' ' + pp.lastName,
      email: pp.email,
    };
  });

console.log(youngPeople);

// Challenge 2 - add all the positive numbers in an array

const numbers = [2, -30, 50, 20, -12, -9, 7];

const postiveSum = numbers
  .filter((number) => number > 0)
  .reduce((acc, cur) => {
    return acc + cur;
  }, 0);

console.log(postiveSum);

// Challenge 3 - Capitalize Words

const words = ['coder', 'programmer', 'developer'];

const capitalizeWords = words.map(
  (word) => word.substring(0, 1).toUpperCase() + word.substring(1, word.length)
);

console.log(capitalizeWords);
