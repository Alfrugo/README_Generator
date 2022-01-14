# README GENERATOR

## Description 

This application generates a Readme.md file through command line questions. It utilizes Node JS with the Inquirer dependency. See Package.json file for details. 

## User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

## Requirements

Prior to execute make sure you have Node JS and NPM Inquirer installed. 

## Instructions

To execute type node index.js in the command line

This is what the questions should look like:

![SAMPLE-GRAB](https://user-images.githubusercontent.com/36056407/149549147-bcde7e6b-b553-4407-a850-6d7406260a85.JPG)


See below a sample of the readme file it generates:

![sample-output](https://user-images.githubusercontent.com/36056407/149549609-515d54c9-6481-4e9c-bfe4-5c490baf1d10.jpg)



This project was created by [Alfredo Diez](https://alfredo-diez.com)  - Please, [contact me](mailto:diez_alfredo@hotmail.com) if you have further questions. 

Repo link [https://github.com/Alfrugo/README_Generator](https://github.com/Alfrugo/README_Generator) 
 