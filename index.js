// TODO: Include packages needed for this application
// Exporting packages: 'inquirer' & 'fs'
const inquirer = require("inquirer");
const fs = require("fs");

//Internal modules
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
// my array was functioning the way i thought it would like in mini-project
// so i decided to create object for questions 

const questions = {
    title: 'What is the title of your project?',

    description: 'Please provide a description of the project.',

    installation: 'Please provide any installation instructions.',

    usage: 'Please provide any usage instructions you have for the end user.',

    license: 'Do you want to include a license in this project?',

    contributing: 'Please enter any contribution guidelines you have for the project.',

    tests: 'Please provide any test instructions you have for the project.',

    email: 'What is your email address?',

    github: 'What is your GitHub username?',

    repository: 'Please provide link to your GitHub repository?'
};

// Inquirer prompts(questions) to user
const promptUser = () => {
    return inquirer.prompt([
        
        { // project title 
            type: "input",
            name: "title",
            message: questions.title
        },
    
        { //description 
            type: "input",
            name: "description",
            message: questions.description
        },
        
        { //  installation instructions,  and test instructions
            type: "input",
            name: "installation",
            message: questions.installation
        },
    
        { //usage information
            type: "input",
            name: "usage",
            message: questions.usage
        },
    
        { //contribution guidelines
            type: "input",
            name: "contributing",
            message: questions.contributing
        },
    
        { //usage
            type: "input",
            name: "usage",
            message: questions.usage
        },
    
        { //license
            type: "checkbox", // added checkbox 
            name: "license",
            choices: ["MIT", "GPLv3", "GPL"], /// need to pull these licenses 
            message: questions.license
        },
    
        { // badge
            type: "input",
            name: "badge",
            message: questions.badge
        },
    
        { //test
            type: "input",
            name: "test",
            message: questions.test
        },
    
        { //github username 
            type: "input",
            name: "username",
            message: questions.username
        },
    
        { //github rep
            type: "input",
            name: "repository",
            message: questions.repository
        }
    ]);
};

     // this didn't work out 
     // pulled from mini-project
     //.then(response => {
    //     console.log('response', response);

    //     fs.writeFile('index.html', html, function (err) {
    //         if (err) {
    //             return console.log(err);
    //         }
    
    //         console.log('Success! You have created a readme.');
    //     });
    //     })
        
// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFileSync('./output/readme.md',generateMarkdown(answers));
}


// TODO: Create a function to initialize app
// Pulled this from bonus solved mini-project
 const init = () => {
   promptUser()
         // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('./output/readme.md', generateMarkdown(answers)))
        .then(() => console.log('Success! You created a readme.md.'))
        .catch((err) => console.error(err));
 };

// Function call to initialize app
 init();

