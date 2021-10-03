// exporting packages: 'inquirer' & 'fs'
const inquirer = require("inquirer");
const fs = require('fs');


// Inquirer prompts(questions) to user
inquirer.prompt([
    { // project title 
        type: "input",
        name: "title",
        message: "What is your project title?"
    },

    { //description 
        type: "input",
        name: "description",
        message: "Please provide your project's description"
    },
    
    { //  installation instructions,  and test instructions
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions"
    },

    { //usage information
        type: "input",
        name: "usage",
        message: "Please provide the project usage"
    },

    { //contribution guidelines
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties"
    },

    { //usage
        type: "input",
        name: "usage",
        message: "Please provide the project usage"
    },

    { //license
        type: "input",
        name: "license",
        message: "Please provide the project licence or your badge link"
    },

    { // badge
        type: "input",
        name: "badge",
        message: "Please provide the badges links that you want"
    },

    { //test
        type: "input",
        name: "test",
        message: "Please provide the project tests"
    },

    { //github username 
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },

    { //github rep
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    }
]).then(response=> { // displays response to terminal
    console.log('response', response);

    // fs method to print out user responses
    fs.writeFile("README.md",response,function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('Yay!Your README file has been created!');
    });
    })


//TODO

//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//WHEN I enter my project title
//THEN this is displayed as the title of the README
//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the //README