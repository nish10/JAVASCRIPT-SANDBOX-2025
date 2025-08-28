function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Error: something went wrong');
        }
      }
    };

    setTimeout(
      () => {
        xhr.send();
      },
      Math.floor(Math.random() * 3000) + 1000
    );
  });
}

async function getAllData() {
  const movies = await getData('./movies.json');
  const actors = await getData('./actors.json');
  const directors = await getData('./directors.json');

  console.log(movies, actors, directors);

  console.log(123);
}

// getAllData();

// console.log(1234);

async function getAllDataWithFetch() {
  const moviesRes = await fetch('./movies.json');
  const movies = await moviesRes.json();

  const actorsRes = await fetch('./actors.json');
  const actors = await actorsRes.json();

  const directorsRes = await fetch('./directors.json');
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}

async function getAllDataPromiseAll() {
  const [movies, actors, directors] = await Promise.all([
    fetch('./movies.json').then((res) => res.json()),
    fetch('./actors.json').then((res) => res.json()),
    fetch('./directors.json').then((res) => res.json()),
  ]);

  // const movies = await moviesRes.json();
  // const actors = await actorsRes.json();
  // const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}

// getAllDataWithFetch();

getAllDataPromiseAll();
