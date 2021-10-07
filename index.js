// Exporting and Internal packages 
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")


//Prompt the user questions to populate the README.md
function promptUser(){
    return inquirer.prompt = ()=> ([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project. "
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide any installation instructions. ",
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide any usage instructions you have for the end user."
        },
        {
            type: "list",
            name: "license",
            message: "Select the appropriate license for this project: ",
            choices: [
                "Apache",
                "GPL",
                "MIT",
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Please enter contributors for the project."
        },
        {
            type: "input",
            name: "tests",
            message: "Please provide any test instructions you have for the project."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email. "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username. "
        },
        {
            type: "input",
            name: "repo",
            message: "Please provide link to your GitHub repository. "
        }
    ]);
} 

function writeToFile(fileName,date) {
    fs.writeFileSync('./output/readme.md', generateMarkdown(answer));
}

  const init= () => {
    promptUser ()
        .then((answers) => fs.writeFileSync('./output/README.MD', generateMarkdown(answers)))
        .then(() => console.log('Success! You created a README.md.'))
        .catch((err) => console.error(err));
        // Prints out README.md to 'output' file 
    
  };
  
  init();  

// TODO: Include packages needed for this application//
//Export & Internal packages


// const inquirer = require('inquirer');
// const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');

 // TODO: Create an array of questions for user input
 // Originally I wasn't going to go through an array apprach and wanted to do it as an object. But didn't want to get docked for points so i did went back to the array 

// const questions = {
//     title: 'What is the title of your project?',

//     description: 'Please provide a description of the project.',

//     installation: 'Please provide any installation instructions.',

//     usage: 'Please provide any usage instructions you have for the end user.',

//     license: 'Do you want to include a license in this project?',

//     contributing: 'Please enter contributors for the project.',

//     tests: 'Please provide any test instructions you have for the project.',

//     email: 'What is your email address?',

//     github: 'What is your GitHub Id?',

//     repository: 'Please provide link to your GitHub repository?',
// };

// questions that will be prompt to user

// const promptUser = () => { // this was pulled from bonus solved mini-project
//     return inquirer.prompt([
        
//         { //title
//             type: 'input',
//             name: 'itle',
//             message: questions.title
//         },

//         { //description
//             type: 'input',
//             name: 'description',
//             message: questions.description
//         },

//         { //installation
//             type: 'input',
//             name: 'installation',
//             message: questions.installation
//         },

//         { //usage
//             type: 'input',
//             name: 'usage',
//             message: questions.usage
//         },
        

//         { //license
//             type: "checkbox", // added checkbox 
//             name: "license",
//             choices: ["MIT", "GPL","Apache"], /// need to pull these l  icenses 
//             message: questions.license
//         },

//         { //contributing
//             type: 'input',
//             name: 'contributing',
//             message: questions.contributing
//         },

//         {   //test
//             type: 'input',
//             name: 'tests',
//             message: questions.tests
//         },

//         { //email
//             type: 'input',
//             name: 'email',
//             message: questions.email
//         },

//         { //github username 
//             type: 'input',
//             name: 'username',
//             message: questions.github
//         },

//         { //github repo
//             type: "input",
//             name: "repository",
//             message: questions.repository
//         }
//     ]);

// };

 // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFileSync('./output/readme.md', generateMarkdown(answers));
// }

 // TODO: Create a function to initialize app
// const init = () => { // this was pulled from bonus solved mini-project
//     promptUser()
//         // Use writeFileSync method to use promises instead of a callback function
//         .then((answers) => fs.writeFileSync('./output/readme.md', generateMarkdown(answers)))
//         .then(() => console.log('Success! You created readme.md'))
//         .catch((err) => console.error(err));
// };

// // Function call to initialize app
// init();


