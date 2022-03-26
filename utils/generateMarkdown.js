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
  return `
  # ${data.projectTitle}

  ## Please describe your project: 
  ${data.describeProject}

  ## What was the motivation for your project? 
  ${data.projectMotivation}

  ## What problem does it solve? 
  ${data.problemSolved}
  
  # Table of Contents
 

This is a test
  ${githubPage}

`;
}

module.exports = generateMarkdown;
