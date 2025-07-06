const email = 'test@test.com';

if (email) {
  console.log('You passed in an email');
}

console.log(Boolean(email));

const x = [];

if (x) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));

// Truth and falsy caveats

const children = 0;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter no of children');
}

// Checking for empty arrays

const posts = ['Post one', 'Post two'];

if (posts.lenght > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}

// Checking for empty objects

const user = {
  nsame: 'Brad',
};

// co/n/sole.log(user.length);

if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User');
}

// Losse Equaltiy (===)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
