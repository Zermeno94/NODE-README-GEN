// TODO: Include packages needed for this application
// Export & Internal packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// I didn't like the array approach, so i moved to object instead
const questions = {
    title: 'What is the title of your project?',

    description: 'Please provide a description of the project.',

    installation: 'Please provide any installation instructions.',

    usage: 'Please provide any usage instructions you have for the end user.',

    license: 'Do you want to include a license in this project?',

    contributing: 'Please enter contributors for the project.',

    tests: 'Please provide any test instructions you have for the project.',

    email: 'What is your email address?',

    github: 'What is your GitHub Id?',

    repository: 'Please provide link to your GitHub repository?',
};

 // questions that will be prompt to user

const promptUser = () => { // this was pulled from bonus solved mini-project
    return inquirer.prompt([
        
        { //title
            type: 'input',
            name: 'itle',
            message: questions.title
        },

        { //description
            type: 'input',
            name: 'description',
            message: questions.description
        },

        { //installation
            type: 'input',
            name: 'installation',
            message: questions.installation
        },

        { //usage
            type: 'input',
            name: 'usage',
            message: questions.usage
        },
        

        { //license
            type: "checkbox", // added checkbox 
            name: "license",
            choices: ["MIT", "GPLv3", "GPL","Apache"], /// need to pull these licenses 
            message: questions.license
        },

        { //contributing
            type: 'input',
            name: 'contributing',
            message: questions.contributing
        },

        {   //test
            type: 'input',
            name: 'tests',
            message: questions.tests
        },

        { //email
            type: 'input',
            name: 'email',
            message: questions.email
        },

        { //github username 
            type: 'input',
            name: 'username',
            message: questions.github
        },

        { //github repo
            type: "input",
            name: "repository",
            message: questions.repository
        }
    ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync('./output/readme.md', generateMarkdown(answers));
}

// TODO: Create a function to initialize app
const init = () => { // this was pulled from bonus solved mini-project
    promptUser()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('./output/readme.md', generateMarkdown(answers)))
        .then(() => console.log('Success! You created readme.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();


