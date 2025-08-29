import { capitalizeWords, makeMoney } from './modules/utils.js';
import Person from './modules/Person.js';

console.log(capitalizeWords('hello world from es modules'));
console.log(makeMoney(100));

const person1 = new Person('Nishant', 28);

person1.greet();
