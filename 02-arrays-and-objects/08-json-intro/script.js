const post = {
  id: 1,
  title: 'Post One',
  body: 'this is the body',
};

// Convert to json string
const str = JSON.stringify(post);

console.log(str.id);

// parse JSON
const obj = JSON.parse(str);

console.log(obj.id);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'this is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'this is the body',
  },
];

const str2 = JSON.stringify(posts);

const post2 = JSON.parse(str2);

console.log(post2);
