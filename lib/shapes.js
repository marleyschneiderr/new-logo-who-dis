class Shape {
  constructor(colorShape, wordColor, symbols) {
    this.colorShape = colorShape;
    this.wordColor = wordColor;
    this.symbols = symbols;
  }

  // theShapes class is inheriting setColor function for color types
  setProperties(colorShape, wordColor, symbols) {
    this.colorShape = colorShape;
    this.wordColor = wordColor;
    this.symbols = symbols;
  }

  renderSvgShape(shapeType, points) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <${shapeType} points="${points}" fill="${this.colorShape}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.wordColor}">${this.symbols}</text></svg>`;
  }
}

// this is rendering triangles using the Shape class
class Triangle extends Shape {
  constructor(colorShape, wordColor, symbols) {
    super(colorShape, wordColor, symbols);
  }

  render() {
    const points = "150, 18 244, 182 56, 182";
    return this.renderSvgShape("polygon", points);
  }
}

// this is rendering circles using the Shape class
class Circle extends Shape {
  // render circle with color
  constructor(colorShape, wordColor, symbols) {
    super(colorShape, wordColor, symbols);
  }

  render() {
    const cx = 150;
    const cy = 100;
    const r = 80;
    return this.renderSvgShape("circle", `${cx},${cy} ${r}`);
  }
}

// this is rendering squares using the Shape class
class Square extends Shape {
  constructor(colorShape, wordColor, symbols) {
    super(colorShape, wordColor, symbols);
  }

  render() {
    const x = 10;
    const y = 10;
    const width = 200;
    const height = 200;
    return this.renderSvgShape("rect", `${x},${y} ${width},${height}`);
  }
}

// gets the logos to export (Triangle, Circle, and Square Logo Shapes)
module.exports = { Triangle, Circle, Square };