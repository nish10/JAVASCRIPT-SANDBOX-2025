function Shape(name) {
  this.name = name;
}

Shape.prototype.logName = function () {
  console.log(`Shape name: ${this.name}`);
};

function Rectangle(name, width, height) {
  Shape.call(this, name);

  this.width = width;
  this.height = height;
}

// inherits shape prototypes
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.logName = function () {
  console.log(`Rectangle Shape Name: ${this.name}`);
};

function Circle(name, radius) {
  Shape.call(this, name);

  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

// set protypes constructors
Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;

const rect = new Rectangle('Rectangle 1', 20, 20);

console.log(rect);

console.log(rect.constructor);

rect.logName();

const circle1 = new Circle('Circle 1', 10);

console.log(circle1);

circle1.logName();
