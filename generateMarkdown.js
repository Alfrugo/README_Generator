// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README


const generateMarkdown = (readMeData) => {
  return `
This is the markdown format
#${readMeData.title}

## Description

${readMeData.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation
  
${readMeData.installation}

## Usage
  
${readMeData.usage}

## Contribution 
  
${readMeData.contribution}

## Tests 
  
${readMeData.test}

## License
  
${readMeData.licensing}

  
##${readMeData.githubUser}

##${readMeData.email}

  `;
};

module.exports = generateMarkdown;
