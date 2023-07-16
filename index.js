// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require ('path');
const generateMarkdown = require ('./utils/generateMarkdown');


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}



// These questions will be asked by inquirer

const questions =

[
    {
        type: 'input',
        name: 'github',
        message:'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address',
    },
   
    {
        type: 'input',
        name: 'title',
        message: "Please type in your project's name" ,
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'Please write a quick description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies',
        default: 'npm i',
    },





    {
        type: 'list',
        name: 'license',
        message: 'What license would you like your project to use?',
        choices: [ 'MIT-yellow', 'APACHE_2.0-blue', 'GPL_3.0-blue', 'BSD 3' , 'none']
    },

{
    type: 'input',
name: 'test',
message: 'What should be run for a test?',
default: 'npm test',
},
{
    type: 'input',
name: 'usage',
message: 'What info is most important about this repo?',

},

{
    type: 'input',
    name: 'contributing',
    message: 'How can people contribute to this repo?',
    
},
]

//Function to write README file using the user input
function writeToFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//Function to start app
function init() {

 
inquirer.prompt(questions).then((answers)=>{

    console.log('Your README is being generated');
writeToFile('README.md', generateMarkdown({...answers}));

})

}

init();

