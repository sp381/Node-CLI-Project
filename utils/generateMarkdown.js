// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const githubPage = `https://github.com/${data.userName}`
  const userEmail = `https://mail.google.com/${data.userEmail}` 
  return `
  # **${data.projectTitle}**
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
  [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)



  # Project Description:

  ## Please describe your project: 
  ${data.describeProject}

  ## What was the motivation for your project? 
  ${data.projectMotivation}

  ## What problem does it solve? 
  ${data.problemSolved}

  ## What did you learn?
  ${data.whatDidYouLearn}

  # Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Testing](#testing)
  - [Questions](#questions)

  # Installation
  ${data.installation}

  # Usage

  ![image text](/images/screenshot.png)
  
  # Credits
    "Placeholder text since I did not have any contributors for this project."

  # License
  ${data.license}

  # Testing
  ${data.testing}

  # Questions:
  ## Below is my GitHub link and contact information. Please reach out, I'd love to work with you! 
  ${githubPage}
  ${data.userEmail}

`;
}

module.exports = generateMarkdown;
