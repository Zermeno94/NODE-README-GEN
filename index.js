// Exporting and Internal packages 
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


//Prompt the user questions to populate the README.md
function promptUser(){
     inquirer.prompt([
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
    ]).then((input) => {

        const message= generateMarkdown(input)
        fs.writeFileSync('./output/readme.md',message, (err)=>err? console.log(err): console.log(generateReadme)); 
        console.log(input)
        
    }).catch(function(){
        console.log("promise rejected")
    }) 

};

  const init= () => { // Prints out README.md to 'output' file 
    promptUser()
    // console.log('Successfully wrote to README.MD');
        
  };

  init();  



