// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markupGenerator = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a description for your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What, if any, installations are required for your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How can someone use your application?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What license is used to cover your application?',
        name: 'license',
        choices: ['Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'Eclipse Public License 2.0', '']
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'What command(s) should be run for tests?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}.md`, JSON.stringify(data), (err) =>
    {err ? console.error(err) : console.log('Your README has been generated!')}
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) =>
        writeToFile()
)}

// Function call to initialize app
init();