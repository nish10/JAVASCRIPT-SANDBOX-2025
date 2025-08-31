class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this.captializeFirst(this._firstName);
  }

  set firstName(value) {
    this._firstName = this.captializeFirst(value);
  }

  get lastName() {
    return this.captializeFirst(this._lastName);
  }

  set lastName(value) {
    this._lastName = this.captializeFirst(value);
  }

  captializeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person('nishant', 'kumar');

console.log(person1.firstName);

person1.firstName = 'sandhya';

console.log(person1);

console.log(person1.lastName);

person1.lastName = 'sharma';

console.log(person1);

console.log(person1.fullName);

console.log(person1);
