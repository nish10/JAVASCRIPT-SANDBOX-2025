let x;

const arr = [34, 57, 28, 89, 33, 45];

arr.push(100);

arr.pop();

arr.unshift(99);

arr.shift();

// arr.reverse();

x = arr.includes(34);

x = arr.indexOf(28);

x = arr.indexOf(100); // -1 if not there

x = arr.slice(1, 4);

// x = arr.splice(1, 4);

// x = arr.splice(3, 1);

// x = arr.splice(1, 4).reverse().toString();

x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x);
console.log(arr);
