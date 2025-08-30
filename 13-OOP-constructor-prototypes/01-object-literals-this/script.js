const rectangle = {
  name: 'Rectangle 1',
  width: 20,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};

const rectangle2 = {
  name: 'Rectangle 2',
  width: 30,
  height: 15,
  area: function () {
    return this.width * this.height;
  },
};

console.log(rectangle.name);
console.log(rectangle.area());
// console.log(this);

// function run() {
//   console.log(this);
// }

// run();
