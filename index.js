// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
       type: 'input',
       name: 'Project-Title',
       message: 'Enter a title for your project: '
      }
      
    ])
    .then((answers) => {
      console.log(answers);
      fs.writeFile('message.txt', 'data', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
