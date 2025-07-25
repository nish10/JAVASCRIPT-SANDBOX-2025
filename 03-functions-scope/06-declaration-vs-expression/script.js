console.log(addDollarSign(100));

// Function Declaration
function addDollarSign(value) {
  return '$' + value;
}

// console.log(addDollarSign(100));

// console.log(addPlusSign(200));

// Function Expression
const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));
