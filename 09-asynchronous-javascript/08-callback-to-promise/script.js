const posts = [
  { title: 'Post 1', body: 'This is the body of post 1' },
  { title: 'Post 2', body: 'This is the body of post 2' },
  { title: 'Post 3', body: 'This is the body of post 3' },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        posts.push(post);
        resolve();
      } else {
        reject('Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}

function showError(error) {
  const h3 = document.createElement('h3');
  h3.innerHTML = `<strong>${error}</strong>`;
  document.getElementById('posts').appendChild(h3);
}

createPost({ title: 'Post Three', body: 'This is post' }).then(getPosts).catch(showError);
