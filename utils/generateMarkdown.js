// Included packages needed for this application
import { licInfo } from "./helpers.js";

// Creates a function to generate markdown for README
export function generateMarkdown(data) {
  let licenseEntryInfo = ""
  if(!!data.license) {
    
    for(let i = 0; i < licInfo.length; i++) {
      if (data.license === licInfo[i].name) {
        licenseEntryInfo = 
        ` ${licInfo[i].badge} 
        This project is licensed under: ${licInfo[i].name}. ${licInfo[i].link}` 
      }
    }
  } else {
    licenseEntryInfo = "Not Applicable"
  }

  return `
  # ${data.title}

  ${data.description}

  > ## Table of Contents
  > - **[Installation Guidelines](#installation)**
  > - **[Usage Requirements](#usage)**
  > - **[Contribution Information](#contributions)**
  > - **[Testing Information](#tests)**
  > - **[Licensing](#license)**
  > - **[Questions?](#Questions)**

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## License
  ${licenseEntryInfo}

  ## Questions
  My GitHub username is ${data.githubUser}. You may contact me at ${data.email} with any questions. Other projects can be found [here](https://github.com/${data.githubUser})
`;
}

// module.exports = generateMarkdown;
