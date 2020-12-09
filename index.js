const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Internal modules
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is a short description of your project?",
  },
  {
    type: "input",
    name: "installations",
    message: "Please include the installations that were used in this project",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide the usage information",
  },
  {
    type: "input",
    name: "contributions",
    message: "Please include any contributors for this project",
  },
  {
    type: "input",
    name: "tests",
    message: "Please include test instructions",
  },
  {
    type: "list",
    name: "license",
    message: "Please select which license was used for this application.",
    choices: ["Apache", "MIT", "GNU GPLv3"],
  },
  {
    type: "input",
    name: "github",
    message: "Please enter you Gibhub Username",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    let markDown = generateMarkdown(data);
    let license = "";
    let licenses = "";

    if (data.license == "MIT") {
      licenses =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    if (data.license == "CreativeCommons") {
      licenses =
        "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    }
    if (data.license == "GNU") {
      licenses =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    if (data.license == "Mozilla") {
      licenses =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
    if (data.license == "ISC") {
      licenses =
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    }
    console.log(markDown);
    writeToFile("README.md", markDown);
    // console.log("Success! Your README.md file has been generated");
  });
}

// function call to initialize program
init();
