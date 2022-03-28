// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
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
  const userEmail = `sarah.powell381@gmail.com/`
  return `
  # ${data.projectTitle}

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
  - [Questions](#questions)

  # Installation
  ${data.installation}

  # Usage

  ![alt text](assets/images/screenshot.png)
  
  # Credits
    "Placeholder text since I did not have any contributors for this project."

  # License

  # Questions:
  ## Below is my GitHub link and contact information. Please reach out, I'd love to work with you! 
  ${githubPage}
  ${data.userEmail}

`;
}

module.exports = generateMarkdown;
