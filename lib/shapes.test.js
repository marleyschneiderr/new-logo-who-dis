const { Triangle, Circle, Square } = require("./lib/shapes");

describe("triangle", () => {
  test("Testing Triangle Creation", () => {
    const shape = new Triangle();
    shape.setProperties("red", "green", "HI");
    const createdShape = shape.render().replaceAll(/\s/g, "");
    const createdSVG = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="red" />
                <text x="125" y="100" font-size="70" text-anchor="middle" fill="green">HI</text></svg>`.replaceAll(
      /\s/g,
      ""
    );
    except(createdShape).toEqual(createdSVG);
  });
});

describe("circle", () => {
  test("Testing Circle Creation", () => {
    const shape = new Circle();
    shape.setProperties("green", "white", "SVG");
    const createdShape = shape.render().replaceAll(/\s/g, "");
    const createdSVG = `
          <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle points cx="150" cy="100" r="80" fill="green" />
            <text x="125" y="100" font-size="60" text-anchor="middle" fill="white">SVG</text>
          </svg>`.replaceAll(/\s/g, "");
    expect(createdShape).toEqual(createdSVG);
  });
});

describe("square", () => {
  test("Testing Square Creation", () => {
    const shape = new Square();
    shape.setProperties("turquoise", "#444", "SVG");
    const createdShape = shape.render().replaceAll(/\s/g, "");
    const createdSvg = `
          <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect points x="90" y="40" width="120" height="120" fill="turquoise" />
            <text x="125" y="100" font-size="60" text-anchor="middle" fill="#444">SVG</text>
          </svg>`.replaceAll(/\s/g, "");
    expect(createdShape).toEqual(createdSvg);
  });
});
