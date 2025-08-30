// Constructor Function
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.height * this.width;
  };
}

const rect1 = new Rectangle('Rectangle 1', 10, 10);

console.log(rect1);

console.log(rect1.area());

const rect2 = new Rectangle('Rectangle 2', 20, 10);

console.log(rect2);

console.log(rect2.area());

const rect3 = new Rectangle('Rectangle 3', 30, 15);

console.log(rect3);

console.log(rect3.area());

console.log(rect1.constructor);

console.log(rect2 instanceof Rectangle);
