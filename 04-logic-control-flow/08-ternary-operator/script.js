const age = 19;

// Using an if statement

if (age >= 18) {
  console.log('You can vote.');
} else {
  console.log('You can not vote.');
}

// Using a ternary operator!

age >= 18 ? console.log('You can vote!') : console.log('You cannot vote!');

// Assigning a conditinal value to a variable

const canVote = age >= 18 ? true : false;

console.log(canVote);

// Multiple Statements

const auth = true;

// let redirect;

// if (auth) {
//   alert('Welcome to the Dashboard!');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

// const redirect = auth
//   ? (alert('Welcome to the dashboard'), '/dashboard')
//   : (alert('Access Denied'), '/login');

// console.log(redirect);

auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('Welcome to the dashboard');
