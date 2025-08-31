// Parent Class
class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log(`Shape name: ${this.name}`);
  }
}

// Sub Class
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);

    this.width = width;
    this.height = height;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);

    this.radius = radius;
  }

  // Polymorphism
  logName() {
    console.log(`Circle name: ${this.name}`);
  }
}

const rect = new Rectangle('Rectangle 1', 20, 20);

console.log(rect);

rect.logName();

const cir = new Circle('Cir 1', 30);

cir.logName();

console.log(rect instanceof Rectangle);

console.log(rect instanceof Shape);
