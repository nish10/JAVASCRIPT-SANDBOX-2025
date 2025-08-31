class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  static getClass() {
    return 'Rectangle';
  }
}

const rect1 = new Rectangle('Rectangle 1', 10, 10);

console.log(rect1.area());

console.log(Rectangle.getClass());
