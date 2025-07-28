const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);
console.log(sum2);

// using a for loop

const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc = acc + cur;
  }
  return acc;
};

console.log(sum3());

const cart = [
  {
    id: 1,
    name: 'Product 1',
    price: 130,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 150,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 200,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 10,
  },
];

const prices = cart.reduce((acc, product) => {
  return acc + product.price;
}, 0);

console.log(prices);
