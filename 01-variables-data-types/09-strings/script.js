let x;

const name = 'Nish';

const age = 28;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// Properties and Methods
// const s = 'Hello World';

const s = new String('Hello World');

x = s.length;

x = typeof s;

// Access Value by key
x = s[1];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('e');

x = s.substring(0, 4);

x = s.substring(1, 5);

x = s.substring(7);

x = s.slice(-11, -6);

x = s.trim();

// x = s;

x = s.includes('Hell');

x = s.replace('Hell', 'Nish');

x = s.valueOf();

x = s.split();

x = s.split('');

console.log(x);
