// requiring inquirer for node package management
const inquirer = require("inquirer");
//
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "characters",
      message: "Please enter up to 3 letters/characters:",
    },

    {
      type: "input",
      name: "textColor",
      message: "Please enter the color you would like your characters to be:",
    },

    {
      type: "list",
      name: "shape",
      message: "Select a specific shape for you logo:",
      choices: ["circle", "square", "triangle"],
    },

    {
      type: "input",
      name: "shapeColor",
      message: "Please enter the color you would like your shape to be:",
    },
  ])

  .then((data) => {
    const { characters, textColor, shape, shapeColor } = data;
    var svgInstance;
    switch (shape) {
      case "circle":
        svgInstance = new Circle(shapeColor, textColor, characters);
        break;
      case "square":
        svgInstance = new Square(shapeColor, textColor, characters);
        break;
      case "triangle":
        svgInstance = new Triangle(shapeColor, textColor, characters);
    }

    fs.writeFileSync("./examples/logo.svg", svgInstance.render());
  });
