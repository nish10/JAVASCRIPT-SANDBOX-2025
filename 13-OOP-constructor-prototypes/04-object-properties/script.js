function Rectangle(name, height, width) {
  this.name = name;
  this.height = height;
  this.width = width;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('rectangle 1', 20, 20);

const rect2 = new Rectangle('rectangle 2', 20, 30);

console.log(rect1.name, rect1.width);
console.log(rect1['width']);

console.log(rect1.area());

rect1.color = 'red';

console.log(rect1.color);

rect2.perimeter = () => {
  return 2 * (rect2.width + rect2.height);
};

console.log(rect2.perimeter());

console.log(rect2);

// delete property
delete rect2.perimeter;

console.log(rect2);

// check for property

console.log(rect2.hasOwnProperty('color'));
console.log(rect1.hasOwnProperty('color'));

console.log(rect1);
console.log(rect2);

// get keys
console.log(Object.keys(rect1));

console.log(Object.values(rect2));

// get entries

console.log(Object.entries(rect1));

for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== 'function') {
    console.log(`${key} - ${value}`);
  }
}

// console.log(rect2);
