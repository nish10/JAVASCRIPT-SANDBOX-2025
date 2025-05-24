const arr = [1, 2, 3, 4, 5];

arr.push(6);

arr.unshift(0);

arr.reverse();

console.log(arr);

const arr2 = [1, 2, 3, 4, 5];

const arr3 = [5, 6, 7, 8, 9, 10];

const mg = [arr2.slice(0, arr2.length - 1), arr3].flat();

// mg.filter();

console.log(mg);
