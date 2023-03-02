// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'what is your name?',
        name:'name'
    },
    {
        type:'input',
        message:'what is your project called?',
        name:'title'
    }
    {
        type:'input',
        message:'what is your project called?',
        name:'title'
    }

];
//
inquirer.prompt([...questions]).then
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
