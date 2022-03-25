// Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs'); 
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
// Create a function to initialize app
function init() {
    return inquirer.prompt([
      {
       type: 'input',
       name: 'projectTitle',
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
         name: 'describeProject',
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
          name: 'projectMotivation',
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
          name: 'problemSolved',
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
          name: 'learning',
          message: 'What did you learn (Required)?',
          validate: learning => {
            if (learning) {
              return true;
            } else {
              console.log('Please tell us what you learned from this project!');
              return false;
            }
          },
      },


    ])
    .then((answers) => {
      console.log(answers);
      fs.writeFile('message.txt', 'data', 'answers', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    })
}

let userAnswers = {};
init()
  .then(function (answers) {
  // const html = generate(answers);
    userAnswers = answers;
    console.log(answers);
  })
  //error testing  
.catch((error) => {
  if (error.isTtyError) {
    return true;
    // Prompt couldn't be rendered in the current environment
  } else {
    return false;
    // Something else went wrong
  }
});
