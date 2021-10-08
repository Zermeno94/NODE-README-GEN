
// TODO: Create a function to generate markdown for README
function generateReadme(answers) {
  `
<h1> ✨${answers.projectTitle} ✨</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

## Description 📖  
${answers.description}
## Table of Contents
- [Description](#description) 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation 💾
${answers.installation}

## Usage 🖥️
${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />

This application is covered by the ${answers.license} license. 

## Contributing 👩‍💻
${answers.contributing}

## Tests 📝
${answers.tests}

## Questions 💭
${answers.questions}

GitHub: [${answers.username}](https://github.com/${answers.username})

📧Email: [${answers.email}](mailto:${answers.email})
  `;
}

module.exports = generateReadme;

// This was original approach to generateMarkdown rendering, but found it too messy and changed it. 

// function renderLicenseBadge(license) {
//   if (!license) {
//       return '';
//   }
// };

// function renderLicenseLink(license) {
//   const yourLicense = ''
//   if(licenseType === 'MIT') {
//     yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
//   } else if (licenseType === 'GPLv3') {
//     yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
//   } else if (licenseType === 'GPL') {
//     yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
//   } else {
//     license.license = "N/A"
//   }
//   return yourLicense;
// }

// function renderLicenseSection(license) {
//   if (!license) {
//     return;
//   } return `## License
//   ${renderLicenseLink(license)}
//   `;
// }