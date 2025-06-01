function sayHello() {
  console.log('Hello World');
}

sayHello();

// parameters are the variables in the function def
// so num1, num2 are parameters
function add(num1, num2) {
  console.log(num1 + num2);
}

// 5 and 10 here are arguments for the function
add(5, 10);

function subtract(num1, num2) {
  return num1 - num2;

  console.log('after the return');
}

const result = subtract(10, 2);

console.log(result, subtract(10, 5));
