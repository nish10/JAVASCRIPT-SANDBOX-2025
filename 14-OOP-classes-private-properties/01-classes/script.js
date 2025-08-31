class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  isSquare() {
    return this.width === this.height;
  }

  logArea() {
    console.log(`The rectange area ${this.area()}`);
  }
}

const square = new Rectangle('Square1', 20, 20);

console.log(square);

console.log(square.area());

console.log(square.perimeter());

console.log(square.isSquare());

square.logArea();
