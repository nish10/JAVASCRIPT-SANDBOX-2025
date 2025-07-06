function calculator(num1, num2, operator) {
  switch (true) {
    case operator === '+':
      console.log(num1 + num2);
      return;
    case operator === '-':
      console.log(num1 - num2);
      return;
    case operator === '*':
      console.log(num1 * num2);
      return;
    case operator === '/':
      console.log(num1 / num2);
      return;
    default:
      console.log('Not a valid operator');
      return;
  }
}

calculator(5, 2, '+');
