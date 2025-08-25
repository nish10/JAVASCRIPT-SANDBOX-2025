// fetch('http://httpstat.us/404')
//   .then((res) => res)
//   .then(() => console.log('success'))
//   .catch((error) => console.log('error'));

// fetch('http://hello123.net')
//   .then((res) => res)
//   .then(() => console.log('success'))
//   .catch((error) => console.log('error'));

// fetch('https://jsonplaceholder.typicode.com/todos/check')
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error('Request Failed');
//     }
//     return res;
//   })
//   .then(() => console.log('success'))
//   .catch((error) => console.log(error));

fetch('https://jsonplaceholder.typicode.com/todos/check')
  .then((res) => {
    if (res.status === 404) {
      throw new Error('Not Found');
    } else if (res.status === 500) {
      throw new Error('Internal Server Error');
    } else if (res.status !== 200) {
      throw new Error('Request Failed ' + res.status);
    }
    return res;
  })
  .then(() => console.log('success'))
  .catch((error) => console.log(error));
