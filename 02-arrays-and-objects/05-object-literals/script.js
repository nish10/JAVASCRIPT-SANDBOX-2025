let x;

const person = {
  name: 'Nish Kumar',
  age: 28,
  isAdmin: true,
  address: {
    street: '123 Main Street',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];

person.name = 'Sand Kr';
person.isAdmin = false;

delete person.age;

person.hasChildren = true;

person.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};

person.greet();

const person2 = {
  'first name': 'Nish',
  'last name': 'Kumar',
};

x = person2['first name'];
console.log(x);
