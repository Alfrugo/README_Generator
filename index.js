// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateReadme = require('./src/page-template.js');
const { generateKey } = require('crypto');


const generateReadme = (readMeData) => {
  return `
  This is the markdown format
    
  `;
};

// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'Please enter your project title: ', 
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter title!');
                  return false;
                }
              }
        },
        {
            name: 'description',
            type: 'input',
            message: 'Please enter description for your project: ',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter a description!');
                  return false;
                }
              }
        },
        {
            name: 'installation',
            type: 'input',
            message: 'Include instructions for installation: ',
            validate: installationInput => {
                if (installationInput) {
                  return true;
                } else {
                  console.log('Please enter the freaking instructions!');
                  return false;
                }
              }
        },
        {
            name: 'usage',
            type: 'input',
            message: 'Please add usage information: ',
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('Sorry, but we need usage info!');
                  return false;
                }
              }
        },
        {
            name: 'contribution',
            type: 'input',
            message: 'Please enter the contribution guidelines: ',
            validate: contributionInput => {
                if (contributionInput) {
                  return true;
                } else {
                  console.log('Please enter the contribution guidelines!');
                  return false;
                }
              }
        },
        {
            name: 'test',
            type: 'input',
            message: 'Please enter testing instruction: ',
            validate: testInput => {
                if (testInput) {
                  return true;
                } else {
                  console.log('Please enter the testing instruction!!');
                  return false;
                }
              }
        },

        {
            name: 'licensing',
            type: 'list',
            message: 'What type of license does your project have: ',
            choices: ['Community', 'MIT', 'GNU GPLv3']
        },

        {
            name: 'githubUser',
            type: 'input',
            message: 'What is your Github username: ',
            validate: userInput => {
                if (userInput) {
                  return true;
                } else {
                  console.log('Please enter your Github user!!');
                  return false;
                }
              }
        },
        {
            name: 'githubUser',
            type: 'input',
            message: 'What is your Github username: ',
            validate: userInput => {
                if (userInput) {
                  return true;
                } else {
                  console.log('Please enter your Github user!!');
                  return false;
                }
              }
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter your email address: ',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter your email!!');
                  return false;
                }
              }
        },

      ]).then(results => {
        console.log("here are the results without stringify: " + results);

// Call function to generate README format 

        // const readMe = generateReadme(results);

// TODO: Create a function to write README file
        const answersData = JSON.stringify(results);
        console.log (generateReadme (answersData));

        const fileName = `./README-OUTPUT/${results.title.split(' ').join('').toLowerCase()}.md`
        fs.writeFile(fileName, generateReadme (answersData), {}, error => {
            if (error) {
                console.error(error);
            } else { 
                console.log('Success!')
            }
        })
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

questions();

