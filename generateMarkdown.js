function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  } else {
    return `![License](https://img.shields.io/static/v1?label=License&message=${license.replace(" ", "%20")}&color=red)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return "";
  } else {
    return '* [License](#license)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  } else {
    return `## License`
    + 
    `\nThe license used for this project is ${license}.\n`;

  }

}

// TODO: Create a function to generate markdown for README


const generateMarkdown = (readMeData) => {
  return `

# ${readMeData.title}

${renderLicenseBadge(readMeData.license)}


## Description

${readMeData.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(readMeData.license)}
* [Credits](#credits)

## Installation
  
${readMeData.installation}

## Usage
  
${readMeData.usage}

## Contribution 
  
${readMeData.contribution}

## Tests 
  
${readMeData.test}


${renderLicenseSection(readMeData.license)}



  
### If you have any questions, please contact me at [${readMeData.email}](mailto://${readMeData.email})


### Visit my GitHub profile for more fun repos: [github.com/${readMeData.githubUser}](https://github.com/${readMeData.githubUser})


  `;
};

module.exports = generateMarkdown;
