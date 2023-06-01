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
