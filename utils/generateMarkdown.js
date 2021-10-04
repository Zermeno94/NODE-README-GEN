// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
      return '';
  }
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
  } return `## License
  ${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
// readme template 
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
${data.description}


## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Email](#Email)
- [GitHub Info](#GitHub) 
- [Repository Link](#Repository)

## Installation
${data.installation}

## Usage
${data.usage}

## Licence
${data.licence ? renderLicenseSection(data.licenseType) : ''}

## Contributors
${data.contributing}

## Test
${data.test}

## Email
- <${response.email}>

## GitHub Id
- [GitHub Id](${githubInfo.profile})


## Repository
- [Project Repo](${data.repo})
`;
}

module.exports = generateMarkdown;