const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios"); const myUsername = "luke-robinett";
const convertHTMLToPDF = require("pdf-puppeteer");
const generateHTML = require("./lib/generateHTML");

function writeToFile(fileName, data) {
  axios
    .get(`https://api.github.com/users/${data.username}`)
    .then(function (res) {
      res.data.color = data.color;
      const html = generateHTML(res.data);
      convertHTMLToPDF(html, pdf => {
        fs.writeFile(fileName, pdf, err => {
          if (err) {
            console.log(err);
            return;
          }

          console.log(`${fileName} saved!`);
        })
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
        choices: ["red", "blue", "green", "pink"]
      },
    ])
    .then(function (response) {
      writeToFile(process.cwd() + "/output/profile.pdf", response);
    });
}

function init() {
  promptForInfo();
}

init();
