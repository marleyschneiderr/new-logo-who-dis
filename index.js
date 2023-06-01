// requiring inquirer for node package management
const inquirer = require("inquirer");
//
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "symbols",
      message: "Please enter up to three characters/symbols:",
    },

    {
      type: "input",
      name: "wordColor",
      message: "Input the color you would prefer your character/symbols to be:",
    },

    {
      type: "list",
      name: "shape",
      message: "Select a specific shape for you logo:",
      choices: ["triangle", "circle", "square"],
    },

    {
      type: "input",
      name: "colorShape",
      message: "Input the color you would prefer your shape to be:",
    },
  ])

  .then((info) => {
    const { symbols, wordColor, shape, colorShape } = info;
    var svgInstance;
    switch (shape) {
      case "circle":
        svgInstance = new Circle(colorShape, wordColor, symbols);
        break;
      case "square":
        svgInstance = new Square(colorShape, wordColor, symbols);
        break;
      case "triangle":
        svgInstance = new Triangle(colorShape, wordColor, symbols);
    }

    fs.writeFileSync("./examples/logo.svg", svgInstance.render());
  });
