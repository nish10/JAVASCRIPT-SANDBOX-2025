const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'Nishant', age: 28 });
  }, 1000);
});

// promise.then((data) => console.log(data));

async function getPromise() {
  const response = await promise;
  console.log(response);
}

// getPromise();

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}

// function getUsers() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
};

getUsers();

getPosts();
