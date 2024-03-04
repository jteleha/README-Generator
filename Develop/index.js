// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Give install instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Give usage information:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Give test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'Apache', 'GPL','None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = generateMarkdown(data);
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.error('Error creating README file', err);
        } else {
            console.log('README file created');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', answers);
    });
}

// Function call to initialize app
init();
