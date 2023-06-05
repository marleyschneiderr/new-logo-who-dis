const { Triangle, Circle, Square } = require("./lib/shapes");

describe("triangle", () => {
  test("Testing Triangle", () => {
    const shape = new Triangle();
    shape.setProperties("red", "green", "HI");
    const renderedShape = shape.render().replaceAll(/\s/g, "");
    const expectedSVG = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="blue" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">HI</text></svg>`.replaceAll(
      /\s/g,
      ""
    );
    execPath(renderedShape).toEqual(expectedSVG);
  });
});

describe("circle")