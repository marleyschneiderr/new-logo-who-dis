const { Triangle, Circle, Square } = require("./lib/shapes");

describe("triangle", () => {
  test("Testing Triangle Creation", () => {
    const shape = new Triangle();
    shape.setProperties("red", "green", "HI");
    const createdShape = shape.render().replaceAll(/\s/g, "");
    const createdSVG = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="red" />
                <text x="150" y="125" font-size="70" text-anchor="middle" fill="green">HI</text></svg>`.replaceAll(
      /\s/g,
      ""
    );
    except(createdShape).toEqual(createdSVG);
  });
});

describe("circle", () => {
  test("Testing Circle Creation", () => {
    const shape = new Circle();
    shape.setProperties("red", "green", "HI");
    const createdShape = shape.render().replaceAll(/\s/g, "");
    const createdSVG = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="red" />
                <text x="150" y="125" font-size="70" text-anchor="middle" fill="green">HI</text></svg>`.replaceAll(
      /\s/g,
      ""
    );
    expect(createdShape).toEqual(createdSVG);
  });
});

describe("square", () => {
  test("Testing Square Creation", () => {
    const shape = new Square();
    shape.setProperties("red", "green", "HI");
    const createdShape = shape.render().replaceAll(/\s/g, "");
    const createdSvg = `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="200" height="200" fill="red"/>
                <text x="105" y="125" font-size="70" text-anchor="middle" fill="green">HI</text></svg>`.replaceAll(
      /\s/g,
      ""
    );
    expect(createdShape).toEqual(createdSvg);
  });
});
