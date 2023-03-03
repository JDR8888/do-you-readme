// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//making an empty markdown string that will be populated with the user's responses and a TOC
// create array of license info
const licenseSet = [
    {
        name: "MIT",
        value: {name: "MIT", value: "https://img.shields.io/badge/License-MIT-yellow.svg"},
        short: "MIT"
    },
    {
        name: "Apache 2.0",
        value: {name: "Apache 2.0", value: "https://img.shields.io/badge/License-Apache_2.0-blue.svg"},
        short: "Apache 2.0"
    },
    {
        name: "GNU GPL v3.0",
        value: {name: "GNU GPL v3.0", value: "https://img.shields.io/badge/License-GPLv3-blue.svg"},
        short: "GNU GPL v3"
    },
    {
        name: "Mozilla 2.0",
        value: {name: "Mozilla 2.0", value: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"},
        short: "Mozilla 2.0"
    },
    {
        name: "Eclipse 1.0",
        value: {name: "Eclipse 1.0", value:"https://img.shields.io/badge/License-EPL_1.0-red.svg"},
        short: "Eclipse 1.0"
    },
]; // Create array of questions for prompt/input
const questions = [
    {
        type:'input',
        message:'what is your project called?',
        name:'title'
    },
    {
        type:'input',
        message:'give me a brief description of your project?',
        name:'description'
    },
    {
        type:'list',
        message:'which license will you use?',
        choices: licenseSet,
        name:'license'
    },
    {
        type:'input',
        message:'If you have any installation instructions please jot them down for us',
        name:'installation'
    },
    {
        type:'input',
        message:'If you have any usage info, type it here',
        name:'usage'
    },
    {
        type:'input',
        message:'who would you like to acknowledge as contributors for your project?',
        name:'installation'
    },
    {
        type:'input',
        message:'type whatever you would like to add for tests/testing info',
        name:'tests'
    },
    {
        type:'input',
        message:'enter your github username or perish',
        name:'github'
    },
    {
        type:'input',
        message:'what is your email address? asking for a friend',
        name:'email'
    },
]; //prompt user with the questions
inquirer.prompt([...questions])
.then((answers)=> { //make string literal of md file with user input placed in correct areas
let markdown = `
# ${answers.title}

![license](${answers.license.value})

## T.O.C:
 - [Description](#Description)
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [Credits](#Credits)
 - [Contact](#Questions)
 - [Credits](#Credits)
 - [License](#License)
 
 ## Description
 ${answers.description}

 ## Installation
 ${answers.installation}

 ## Usage
 ${answers.usage}

 ## Credits
 ${answers.credits}

 ## Questions
 Got questions? send me an email @ ${answers.email}, and check out my github page: ${answers.github}

 ## License
 this project uses a ${answers.license.name} license to protect the user and the maker and everyone else and stuff
`;
writeToFile('myRadReadme.md', markdown)
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>
    err ? console.log(err) : console.log ('skibbity bop, doo wop, you got a readme baby!')
    );
};

