// Creates an array of question objects for user input
export const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'What is your Github username?',
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'When is your email address?',
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of this project',
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions if applicable',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information',
    }, 
    {
        type: "list",
        name: "license",
        message: "What license should be applied to this project?",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "GNU Affero General Public License v3.0", "Mozilla Public License 2.0", "The Unlicense", "None"],
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter contribution guidelines. Skip if NA.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions',
    }]; //questions for the inquirer prompt

//license Info object
export const licInfo = [
    { 
        name: "Apache License 2.0",
        badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        link: "https://choosealicense.com/licenses/apache-2.0/",
    },
    { 
        name: "GNU General Public License v3.0",
        badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        link: "https://choosealicense.com/licenses/gpl-3.0/",
    },
    { 
        name: "MIT License",
        badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        link: "https://choosealicense.com/licenses/mit/",
    },
    { 
        name: "GNU Affero General Public License v3.0",
        badge: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
        link: "https://choosealicense.com/licenses/agpl-3.0/",
    },
    { 
        name: "Mozilla Public License 2.0",
        badge:  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
        link: "https://choosealicense.com/licenses/mpl-2.0/",
    },
    { 
        name: "The Unlicense",
        badge: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
        link: "https://choosealicense.com/licenses/unlicense/",
    },
    {
    name: "None",
    badge: "",
    link: "",
    },
];
 
