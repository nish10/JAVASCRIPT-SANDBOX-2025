// fetching a json file
fetch('./movies.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

// Fetching a text file
fetch('./test.txt')
  .then((response) => {
    return response.text();
  })
  .then((text) => {
    console.log(text);
  });

// Fetching from an API, if dont specify it will be by defualt GET Request
fetch('https://api.github.com/users/nish10')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    document.querySelector('h1').textContent = data.login;
  });
