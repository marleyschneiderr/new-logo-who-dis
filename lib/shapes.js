class Shape {
  constructor() {
    this.color = "";
  }

  // theShapes class is inheriting setColor function for color types
  setColor(typeVar) {
    this.color = typeVar;
  }
}

// this is rendering triangles using the Shape class
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// this is rendering circles using the Shape class
class Circle extends Shape {
  // render circle with color
  render() {
    return `<circle cx="300" cy="230" r="160" fill="${this.color}" />`;
  }
}

// this is rendering squares using the Shape class
class Square extends Shape {
  render() {
    // render square with color
    return `<rect x="100" y="60" width="200" height="200" fill="${this.color}" />`;
  }
}

// gets the logos to export (Triangle, Circle, and Square Logo Shapes)
module.exports = { Triangle, Circle, Square };
