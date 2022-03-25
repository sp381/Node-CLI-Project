// Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');
// Create a function to initialize app
function init() {
  inquirer
  prompt([
    const questions = [  
      {
       type: 'input',
       name: 'Project Title',
       message: 'Enter a title for your project (Required): ',
       validate: projectTitleInput => {
        if (projectTitleInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
      },
      },

      {
         type: 'input',
         name: 'Describe Project',
         message:  'Please describe your project: (Required)',
         validate: describeProject => {
          if (describeProject) {
            return true;
          } else {
            console.log('Please describe your project!');
            return false;
          }
        },
      },

      {
          type: 'input',
          name: 'Project Motivation',
          message: 'What was your motivation for this project? (Required)',
          validate: projectMotivation => {
            if (projectMotivation) {
              return true;
            } else {
              console.log('Please describe your motivation for the project!');
              return false;
            }
          },
      },

      {
          type: 'input',
          name: 'Problem Solved',
          message: 'What problem did it solve? (Required)',
          validate: problemSolved => {
            if (problemSolved) {
              return true;
            } else {
              console.log('Please describe what problem this project solved!');
              return false;
            }
          },
      },

      {
          type: 'input',
          name: 'What Did You Learn',
          message: 'What did you learn from this project (Required)?',
          validate: learning => {
            if (learning) {
              return true;
            } else {
              console.log('Please tell us what you learned from this project!');
              return false;
            }
          },
      },

      {
        type: 'input',
        name: 'installation',
        message: 'What command should you run to install dependencies? (Required)',
        validate: install => {
          if (install) {
            return true;
          } else {
            console.log('Please tell us how to code an install!');
            return false;
          }
        },
      },

      {
        type: 'input',
        name: 'testing',
        message: 'What kind of command do you run for testing this project?',
        validate: testing => {
          if (testing) {
            return true;
          } else {
            console.log('Please tell us the command used to run this project!');
            return false;
          }
        },
      },

      {
        type: 'list',
        message: 'What licenses does the project have?',
        name: 'license',
        choices: [
          "MIT",
          "Apache 2.0",
          "Boost 1.0",
          "BSD 3",
          "GPL",
          "Mozilla 2.0",
          "None",
        ],  
        validate: licenses => {
          if (licenses) {
            return true;
          } else {
            console.log('Please choose from the list!');
            return false;
          }
        },
      },

    ]
  ]),

    function writeToFile(fileName, data) {
      fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
        }
        console.log('The README has been created');
      })
    }

}
init()
