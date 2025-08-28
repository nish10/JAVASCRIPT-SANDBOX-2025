// try {
//   console.log(x);
// } catch (e) {
//   console.log('Error: ', e);
// }

function double(number) {
  if (isNaN(number)) {
    throw new Error(number + ' is not a number');
  }
  return number * 2;
}

try {
  const y = double(2);
  console.log(y);
} catch (error) {
  console.log(error);
}

try {
  const y = double('hello');
  console.log(y);
} catch (error) {
  console.log(error);
}
