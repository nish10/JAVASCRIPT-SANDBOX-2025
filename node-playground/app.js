// console.log('Hello, Node.js!'); -- commaand to run this node app: node app.js

async function getUser() {
  const response = await fetch('https://api.github.com/users/nish10');
  const data = await response.json();
  console.log(data);
}

getUser();
