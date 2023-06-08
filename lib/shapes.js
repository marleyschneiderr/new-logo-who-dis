class Shape {
  constructor(colorShape, wordColor, symbols) {
    this.colorShape = colorShape;
    this.wordColor = wordColor;
    this.symbols = symbols;
  }

  // The `setProperties` function is used to set the color and symbols properties of the shape
  setProperties(colorShape, wordColor, symbols) {
    this.colorShape = colorShape;
    this.wordColor = wordColor;
    this.symbols = symbols;
  }

  // Helper function to render the SVG shape with the specified properties
  renderSvgShape(shapeType, points) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <${shapeType} ${points} fill="${this.colorShape}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.wordColor}">${this.symbols}</text></svg>`;
  }
}

// Triangle shape class, inherits from Shape
class Triangle extends Shape {
  constructor(colorShape, wordColor, symbols) {
    super(colorShape, wordColor, symbols);
  }

  // Render the triangle shape using SVG polygon element
  render() {
    const points = 'points="150, 18 244, 182 56, 182"';
    return this.renderSvgShape("polygon", points);
  }
}

// Circle shape class, inherits from Shape
class Circle extends Shape {
  constructor(colorShape, wordColor, symbols) {
    super(colorShape, wordColor, symbols);
  }

  // Render the circle shape using SVG circle element
  render() {
    const cx = 150;
    const cy = 100;
    const r = 80;
    const points = `cx="${cx}" cy="${cy}" r="${r}"`;
    return this.renderSvgShape("circle", points);
  }
}

// Square shape class, inherits from Shape
class Square extends Shape {
  constructor(colorShape, wordColor, symbols) {
    super(colorShape, wordColor, symbols);
  }

  // Render the square shape using SVG rect element
  render() {
    const x = 90;
    const y = 40;
    const width = 120;
    const height = 120;
    const points = `x="${x}" y="${y}" width="${width}" height="${height}"`;
    return this.renderSvgShape("rect", points);
  }
}

module.exports = { Triangle, Circle, Square };

