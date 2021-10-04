// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return;
  }
}

// TODO: Create a function to generate markdown for README
// readme template 
function generateMarkdown(response,data) {
  return ` <h1 align="center">${answers.projectTitle}</h1> 

## Description 
${data.description}
## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [GitHub Info](#GitHub) 
- [Repository Link](#Repository)

## Installation
${data.installation}
## Usage
${data.usage}
## Licence
${data.licence}
## Contributors
${data.contributing}
## Test
${data.test}
## GitHub Info
- [GitHub Profile](${githubInfo.profile})
- <${githubInfo.email}>
## Repository
- [Project Repo](${data.repo})
`;
}

module.exports = generateMarkdown;