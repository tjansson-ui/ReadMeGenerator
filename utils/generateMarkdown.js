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

  S{description}

  > ## Table of Contents
  > **[Install]**
  > **[Usage]**
  > **[Contributions]**
  > **[Tests]**
  > **[License]**
  > **[Contact]**

  ##Installation
  ${installation}

  ##Usage
  ${usage}

  ##Contributions
  ${contributions}

  ##Tests
  ${tests}

  ##Lincense
  This project is licensed under ${license}

  ##Contact for Questions
  My GitHub username is ${githubUser}. You may contact me at ${email} with any questions.
`;
}

// module.exports = generateMarkdown;
