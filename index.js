const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios"); const myUsername = "luke-robinett";
const generateHTML = require("./generateHTML");

const questions = [

];

function writeToFile(fileName, data) {

}

function getProfileInfo(username) {
  axios
    .get(`https://api.github.com/users/${username}`)
    .then(function (res) {
      console.log(res.data);
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
        type: "input",
        message: "What is your favorite color?",
        name: "color"
      },
    ])
    .then(function (response) {
      getProfileInfo(response.username);
    });
}

function init() {
  promptForInfo();
}

init();
