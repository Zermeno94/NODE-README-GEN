// TODO: Create a function to generate markdown for README
function generateReadme(answers) {
  return `
<h1 align="center"> ✨${answers.projectTitle} ✨</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br /> // the users input for license will  display license on top of readme 

## Description 📖  // added emojis to make it unique 
${answers.description}
## Table of Contents
- [Description](#description) // responsive link to redirect user to selected section 
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

This application is covered by the ${answers.license} license. // this show below ^

## Contributing 👩‍💻
${answers.contributing}

## Tests 📝
${answers.tests}

## Questions 💭
${answers.questions}
<br/>
<br/>

Find me on GitHub: [${answers.username}](https://github.com/${answers.username})
<br/>
<br/>
📧Email me with any questions: ${answers.email}<br /><br />
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