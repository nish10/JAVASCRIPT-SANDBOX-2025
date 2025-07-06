let a = false;

// if (!a) {
//   a = 20;
// }

// a = a || 10;

a ||= 10;

console.log(a);

let b = 10;

if (b) {
  b = 20;
}

b &&= 40;

console.log(b);

// ??= assigns the right side value only if the left is null or undefined

let c = null;

if (c === null || c === undefined) {
  c = 20;
}

c = c ?? 30;

console.log(c);
