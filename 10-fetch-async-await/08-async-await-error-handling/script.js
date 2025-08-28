const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/100');
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers();

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/900');
  if (!response.ok) {
    throw new Error('Request failed');
  }
  const data = await response.json();
  console.log(data);
};

// generally not used in this format but this can be used
getPosts().catch((error) => {
  console.log(error);
});
