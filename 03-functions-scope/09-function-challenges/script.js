// Challenge - 1 (Fahrenheit to Celsius)

const fahrenheitToCelsius = function (value) {
  return ((value - 32) * 5) / 9;
};

console.log(fahrenheitToCelsius(32));

const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(getCelsius(50));

// Challenge 2 - Create minMax()

const minMax = function (...arr) {
  let min = arr[0];
  let max = arr[0];

  arr.forEach((val) => {
    if (val >= max) {
      max = val;
    }

    if (val <= min) {
      min = val;
    }
  });

  return { min, max };
};

console.log(minMax(1, 5, 3, 29, 38, 904, 298, 37, 28));

// Challenge - 3 (IIFE)

(function (l, b) {
  const rectangleArea = (l, b) => 2 * (l + b);
  console.log(`The area of the rectangle with length: ${l} and breadth ${b}:`, rectangleArea(l, b));
})(20, 200);
