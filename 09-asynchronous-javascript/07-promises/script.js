// Create a promise
const promise = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    console.log('Async task complete');
    resolve();
  }, 1000);
});

promise.then(() => {
  console.log('Promise cosumed..');
});

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: 'Nishant', age: 28 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 2000);
});

getUser
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('The promise has been resolved or rejected');
  });

console.log('Hello from global scope');
