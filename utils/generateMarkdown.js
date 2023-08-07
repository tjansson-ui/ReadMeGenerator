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
export function generateMarkdown(data) {
  return `
  # ${data.title}

  ${description}

  > ## Table of Contents
  > - **[Install](#installation)**
  > - **[Usage](#usage)**
  > - **[Contributions](#contributions)**
  > - **[Tests](#tests)**
  > - **[License](#license)**
  > - **[Questions](#Questions)**

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## License
  This project is licensed under ${data.license}

  ## Questions
  My GitHub username is ${data.githubUser}. You may contact me at ${data.email} with any questions. Other projects can be found [here](https://github.com/${data.githubUser})
`;
}

// module.exports = generateMarkdown;
