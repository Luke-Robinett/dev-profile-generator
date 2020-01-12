const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios"); const myUsername = "luke-robinett";
const generateHTML = require("./generateHTML");

function writeToFile(fileName, data) {
  axios
    .get(`https://api.github.com/users/${data.username}`)
    .then(function (res) {
      res.data.color = data.color;
      const html = generateHTML(res.data);

      fs.writeFile(fileName, html, function (err) {
        if (err) {
          return console.log(err);
        }
      });
    });
}

function promptForInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
      },
      {
        type: "rawlist",
        message: "What is your favorite color?",
        name: "color",
        choices: { "red", "blue", "green", "pink" }
      },
    ])
    .then(function (response) {
      writeToFile("profile.html", response);
    });
}

function init() {
  promptForInfo();
}

init();
