// requiring inquirer for node package management
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "input",
      name: "symbols",
      message: "Please enter up to three characters/symbols:",
      // validate used to ensure the user provides a valid input for the symbols/wordColor/and colorShape inputs
      // if invalid input is received, an error message is displayed, then the user is prompted again until they put in a correct one
      validate: (input) => {
        if (input.length > 3) {
          return "Please enter up to three characters/symbols:";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "wordColor",
      message: "Input the color you would prefer your text to be:",
      validate: (input) => {
        if (!input) {
          return "Please enter a color:";
        }
        return true;
      },
    },
    {
      type: "list",
      name: "shape",
      message: "Select a specific shape for your logo:",
      choices: ["triangle", "circle", "square"],
    },
    {
      type: "input",
      name: "colorShape",
      message: "Input the color you would prefer your shape to be:",
      validate: (input) => {
        if (!input) {
          return "Please enter a color:";
        }
        return true;
      },
    },
  ])
  .then((info) => {
    const { symbols, wordColor, shape, colorShape } = info;
    var svgInstance;
    switch (shape) {
      case "triangle":
        svgInstance = new Triangle(colorShape, wordColor, symbols);
        break;
      case "circle":
        svgInstance = new Circle(colorShape, wordColor, symbols);
        break;
      case "square":
        svgInstance = new Square(colorShape, wordColor, symbols);
        break;
    }

    fs.writeFileSync("./examples/logo.svg", svgInstance.render());
    console.log("Logo generated successfully!!");
  })
  .catch((error) => {
    console.error("An error occurred while creating the logo:", error);
  });
